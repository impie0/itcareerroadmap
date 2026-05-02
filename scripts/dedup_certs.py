"""Cert dedup — code is canonical. Code-less entries inferred from name matches."""

import json
import re
from pathlib import Path
from collections import defaultdict

ROOT = Path(__file__).resolve().parent.parent
all_certs = []  # list of dicts

# ============ Source 1: ecosystems.json ============
data = json.load(open(ROOT / "content" / "extracted" / "ecosystems.json", encoding="utf-8"))
for eco in data.values():
    for lvl in eco["levels"]:
        for c in lvl["certs"]:
            all_certs.append(
                {
                    "vendor": (c.get("vendor", "") or "").strip(),
                    "name": (c.get("name", "") or "").strip(),
                    "code": (c.get("code", "") or "").strip(),
                    "level": lvl["level"],
                    "source": eco.get("sourceFile", "ecosystem"),
                    "src_kind": "ecosystem",
                }
            )

# ============ Source 2: content/certs.ts ============
ts = (ROOT / "content" / "certs.ts").read_text(encoding="utf-8")
pat = re.compile(
    r'\{\s*vendor:\s*"([^"]+)"\s*,\s*name:\s*"([^"]+)"\s*,\s*code:\s*"([^"]*)"',
    re.MULTILINE,
)
for m in pat.finditer(ts):
    all_certs.append(
        {
            "vendor": m.group(1).strip(),
            "name": m.group(2).strip(),
            "code": m.group(3).strip(),
            "level": "?",
            "source": "content/certs.ts",
            "src_kind": "matrix",
        }
    )

# ============ Source 3: Deep Dive markdown table rows ============
def parse_md_tables(folder, kind):
    extra = []
    for p in (ROOT / "Deep Dive" / folder).glob("*.md"):
        text = p.read_text(encoding="utf-8", errors="ignore")
        for line in text.split("\n"):
            if not line.startswith("|"):
                continue
            cells = [c.strip() for c in line.split("|")[1:-1]]
            if len(cells) < 3:
                continue
            for cell in cells:
                clean = cell.strip("*` ")
                if re.match(r"^[A-Z]{2,5}[-_]?\d", clean):
                    name_guess = cells[0].strip("*` ")
                    if 2 < len(name_guess) < 100:
                        extra.append(
                            {
                                "vendor": "?",
                                "name": name_guess,
                                "code": clean,
                                "level": "?",
                                "source": p.name,
                                "src_kind": kind,
                            }
                        )
                    break
    return extra

all_certs.extend(parse_md_tables("Domains", "domain-md"))
all_certs.extend(parse_md_tables("Roadmaps", "roadmap-md"))
all_certs.extend(parse_md_tables("Specialty_Roles", "specialty-md"))

print(f"Raw mentions: {len(all_certs)}")

# ============ Normalisers ============

# Manual alias map: family-code ↔ exam-code pairs (Juniper has both forms)
# All keys are normalised (lowercased, alnum-only)
CODE_ALIASES = {
    # Juniper family-code → exam-code
    "jncisent": "jn0411",
    "jncissp": "jn0412",
    "jncisdc": "jn0682",
    "jncissec": "jn0335",
    "jnciscloud": "jn0214",
    "jncipent": "jn0660",
    "jncipsp": "jn0664",
    "jncipdc": "jn0683",
    "jncipsec": "jn0637",
    "jncipcloud": "jn0664",  # placeholder
    "jncieent": "jn0608",
    "jnciesp": "jn0682",
    "jnciedc": "jn0683",
    "jnciesec": "jn0635",
    # Aliases for code-less canonical equivalents
}

# Names that are too generic to match standalone — must come with vendor for canonical key
GENERIC_NAME_TOKENS = {"security", "specialist", "associate", "professional", "expert",
                        "fundamentals", "administrator", "developer", "engineer", "architect",
                        "associate level", "expert level", "foundation"}

def norm_code(c):
    if not c or c in ("—", "--", "-", "TBD", "N/A"):
        return ""
    s = c.lower().strip()
    # Strip parenthetical
    s = re.sub(r"\s*\([^)]*\)\s*", "", s).strip()
    # Strip version suffixes "v1.1", "v1.2 (Feb 2026)"
    s = re.sub(r"\s*\(?v?\d+\.\d+.*$", "", s).strip()
    # Strip everything after first space (catches "200-301 v1.1" etc.)
    s = s.split()[0] if s else s
    # Alnum only
    s = re.sub(r"[^a-z0-9]", "", s)
    # Oracle year suffixes: "1z0-997-25" → "1z099725" → strip the trailing 2-digit year
    # Oracle uses pattern 1Z0-XXX-YY where YY is the year. Strip if exactly 2 trailing digits after 3+ digit body.
    om = re.match(r"^(1z0\d{3,4})(\d{2})$", s)
    if om:
        s = om.group(1)
    # Apply alias map
    if s in CODE_ALIASES:
        s = CODE_ALIASES[s]
    return s

VENDOR_PREFIXES = (
    "microsoft ", "aws ", "amazon ", "google ", "cisco ", "juniper ",
    "comptia ", "fortinet ", "palo alto ", "checkpoint ", "check point ",
    "salesforce ", "oracle ", "ibm ", "adobe ", "servicenow ",
    "red hat ", "hashicorp ", "isc2 ", "isaca ",
)

def norm_name(n, vendor=""):
    """Normalise a cert name for matching. If the result is a generic single token,
    prefix the vendor so 'Security' (CWNP) doesn't collide with 'Security+' (CompTIA)."""
    if not n:
        return ""
    s = n.lower().strip()
    for p in VENDOR_PREFIXES:
        if s.startswith(p):
            s = s[len(p):]
            break
    s = re.sub(r"\s*\([^)]*\)\s*", " ", s).strip()
    # Only strip em-dash (—) and en-dash (–) descriptive suffixes; KEEP hyphen (-) which is part of cert names
    # like "Specialist - Storage Technical v2" or "CIS - IT Service Management"
    s = re.sub(r"\s+[—–]\s+.+$", "", s).strip()
    s = re.sub(r"[^a-z0-9 +-]", "", s)  # keep + (Security+, Network+) and - (CIS-ITSM)
    s = re.sub(r"\s+", " ", s).strip()
    # If too generic alone, prefix the vendor to avoid false collisions
    if s in GENERIC_NAME_TOKENS or len(s.split()) <= 1:
        v = (vendor or "").lower().strip()
        if v and v != "?":
            s = f"{v} {s}".strip()
    return s

# ============ Build name → code lookup from entries that have codes ============
name_to_code = {}
for c in all_certs:
    nc = norm_code(c["code"])
    if nc:
        nn = norm_name(c["name"], c.get("vendor", ""))
        if nn:
            name_to_code.setdefault(nn, nc)

# ============ Assign canonical_code to each entry ============
inferred_count = 0
for c in all_certs:
    nc = norm_code(c["code"])
    if not nc:
        nn = norm_name(c["name"], c.get("vendor", ""))
        if nn in name_to_code:
            nc = name_to_code[nn]
            c["inferred_code"] = nc
            inferred_count += 1
    c["canonical_code"] = nc

# ============ Group by canonical_code; pick best representative ============
by_code = defaultdict(list)
nameless = []
for c in all_certs:
    if c["canonical_code"]:
        by_code[c["canonical_code"]].append(c)
    else:
        nn = norm_name(c["name"], c.get("vendor", ""))
        if nn:
            by_code[f"name:{nn[:50]}"].append(c)
        else:
            nameless.append(c)

def score(c):
    s = 0
    if c["vendor"] and c["vendor"] != "?":
        s += 10
    if c["code"]:
        s += 5
    s += min(len(c["name"]), 60) // 10
    if c["level"] != "?":
        s += 2
    return s

unique = []
for code, group in by_code.items():
    best = max(group, key=score).copy()
    best["_variants"] = len(group)
    best["_sources"] = sorted({g["source"] for g in group})
    unique.append(best)

no_code_grouped = sum(1 for k in by_code if k.startswith("name:"))
true_codes = len(by_code) - no_code_grouped

print(f"Unique exam codes: {true_codes}")
print(f"Code-less (grouped by name): {no_code_grouped}")
print(f"Total unique cert entries: {len(unique)}")
print(f"  Inferred code from name match: {inferred_count}")
print(f"  Nameless dropped: {len(nameless)}")

# ============ Find name-collision suspects ============
name_groups = defaultdict(list)
for c in unique:
    nn = norm_name(c["name"], c.get("vendor", ""))
    if nn and c["canonical_code"] and not c["canonical_code"].startswith("name:"):
        name_groups[nn].append(c)
collisions = [(n, cs) for n, cs in name_groups.items() if len({c["canonical_code"] for c in cs}) > 1]
print()
print(f"Name-collision suspects (same normalized name, different codes): {len(collisions)}")
for n, cs in collisions[:8]:
    print(f'  "{n}":')
    for c in cs:
        print(f"    - {c['vendor']} | {c['name']} | code={c['code']} | {c['source']}")

# ============ Write output ============
unique.sort(key=lambda c: ((c["vendor"] or "zzz").lower(), c["name"].lower()))
out = ROOT / "Deep Dive" / "CERT_LIST_DEDUPED.md"
with open(out, "w", encoding="utf-8") as f:
    f.write(f"# Deduplicated Cert List — {len(unique)} unique certs\n\n")
    f.write("Combines: `content/extracted/ecosystems.json` (39 ecosystems) + `content/certs.ts` (original matrix) + Domain / Roadmap / Specialty markdown cert tables.\n\n")
    f.write("**Dedup method**: exam code is canonical. Code-less entries are matched to existing codes by normalised name. Entries with neither code nor name match are dropped.\n\n")
    f.write(f"- Raw mentions across all sources: **{len(all_certs)}**\n")
    f.write(f"- Unique exam codes: **{true_codes}**\n")
    f.write(f"- Code-less entries (grouped by name): **{no_code_grouped}**\n")
    f.write(f"- **Total unique certs: {len(unique)}**\n")
    f.write(f"- Code inferred from a name match: **{inferred_count}**\n")
    f.write(f"- Name-collision suspects (same name, different codes): **{len(collisions)}**\n\n")
    f.write("---\n\n")

    by_vendor = defaultdict(list)
    for c in unique:
        by_vendor[c["vendor"] or "?"].append(c)

    f.write("## Index\n\n")
    for v, certs in sorted(by_vendor.items(), key=lambda x: (-len(x[1]), x[0].lower())):
        anchor = re.sub(r"[^a-z0-9-]", "", v.lower().replace(" ", "-"))
        f.write(f"- [{v}](#{anchor}) — {len(certs)} certs\n")
    f.write("\n---\n\n")

    for v, certs in sorted(by_vendor.items(), key=lambda x: (-len(x[1]), x[0].lower())):
        f.write(f"## {v} ({len(certs)})\n\n")
        f.write("| # | Cert Name | Code | Sources | Variants |\n|---|---|---|---|---|\n")
        for i, c in enumerate(sorted(certs, key=lambda x: x["name"].lower()), 1):
            n = c["name"].replace("|", "\\|")
            code = c["code"] or "—"
            srcs = ", ".join(s.replace(".md", "").replace("content/certs.ts", "matrix") for s in c.get("_sources", [c["source"]]))[:80]
            f.write(f"| {i} | {n} | `{code}` | {srcs} | {c.get('_variants', 1)} |\n")
        f.write("\n")

print(f"\nWrote {out}")
