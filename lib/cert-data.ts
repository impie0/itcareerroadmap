/**
 * Single source of truth for the /certs matrix:
 *   Deep Dive/Certifications/{Vendor}/*.md
 *
 * Each per-cert .md file declares its own `domain:` and `level:` in frontmatter.
 * lib/domain-normalizer.ts maps the 137 raw domain strings down to the 12
 * canonical domain columns the matrix renders.
 *
 * The legacy ecosystems.json + content/certs.ts seed data is no longer used
 * for the matrix — Certifications/ is now authoritative.
 */

import {
  type Domain,
  type Ecosystem,
  type Cert,
  type DomainLevel,
} from "@/content/certs";
import { vendorColor } from "@/lib/vendor-colors";
import { loadAllCertifications, type CertificationFile } from "@/lib/certifications-loader";
import {
  CANONICAL_DOMAINS,
  VENDOR_TO_ECOSYSTEM,
  normalizeDomain,
  normalizeLevel,
  type CanonicalDomainId,
} from "@/lib/domain-normalizer";

let cache: {
  domains: Domain[];
  ecosystems: Ecosystem[];
  hardware: Ecosystem[];
  vendor: Ecosystem[];
} | null = null;

const LEVELS = ["Entry", "Associate", "Professional", "Expert"] as const;

function emptyLevels(): DomainLevel[] {
  return LEVELS.map((level) => ({ level, certs: [] }));
}

// Map raw frontmatter status strings (any case, with spaces) to the canonical
// CertStatus enum. Anything we don't recognize maps to "unverified" so the
// cert still renders instead of crashing the per-cert page / drawer on lookup.
function normalizeStatus(raw: string | undefined): Cert["status"] {
  const s = (raw ?? "").toLowerCase().trim();
  if (s === "active")    return "active";
  if (s === "retiring")  return "retiring";
  if (s === "retired")   return "retired";
  if (s === "beta")      return "beta";
  if (s === "new")       return "new";
  if (s.includes("verif")) return "unverified";   // "Requires Verification", "Unverified", etc.
  if (!s) return "active"; // missing → assume active
  return "unverified";     // unknown string → flag for review
}

function toCert(c: CertificationFile): Cert {
  return {
    vendor: c.vendor,
    name: c.name,
    code: c.code || "—",
    status: normalizeStatus(c.status),
    url: c.url,
    note: c.rationale ? c.rationale.slice(0, 160) : undefined,
  };
}

function dedupKey(c: Cert): string {
  return `${c.vendor.toLowerCase()}|${c.name.toLowerCase()}|${(c.code ?? "").toLowerCase()}`;
}

function pushUnique(level: DomainLevel, cert: Cert) {
  const k = dedupKey(cert);
  if (level.certs.some((x) => dedupKey(x) === k)) return;
  level.certs.push(cert);
}

/**
 * Build the matrix entirely from per-cert .md files in Deep Dive/Certifications.
 */
export async function loadCertData() {
  if (cache) return cache;

  const all = await loadAllCertifications();

  // --- 12 canonical domain columns
  const domainsById = new Map<CanonicalDomainId, Domain>();
  CANONICAL_DOMAINS.forEach((d) => {
    domainsById.set(d.id, {
      id: d.id,
      name: d.name,
      color: d.color,
      blurb: d.blurb,
      levels: emptyLevels(),
    });
  });

  // --- Vendor-grouped ecosystem columns (built dynamically from VENDOR_TO_ECOSYSTEM hits)
  const ecoById = new Map<string, Ecosystem>();

  function ensureEco(id: string, name: string, kind: "saas" | "hardware", vendorKey?: string) {
    if (!ecoById.has(id)) {
      ecoById.set(id, {
        id,
        name,
        color: vendorKey ? vendorColor(vendorKey) : "var(--accent)",
        blurb: undefined,
        levels: emptyLevels(),
        kind,
      });
    }
    return ecoById.get(id)!;
  }

  let unmappedDomains = 0;
  let unmappedSamples: string[] = [];

  for (const c of all) {
    const cert = toCert(c);
    const lvl = normalizeLevel(c.level ?? "");

    // 1. Place in primary canonical domain column
    const canonId = normalizeDomain(c.domain ?? "");
    if (canonId) {
      const d = domainsById.get(canonId)!;
      const lvlSlot = d.levels.find((l) => l.level === lvl)!;
      pushUnique(lvlSlot, cert);
    } else {
      unmappedDomains++;
      if (unmappedSamples.length < 8) unmappedSamples.push(`${c.vendor}/${c.name} → "${c.domain}"`);
      // Fallback: park in businessapps so it isn't lost (most unmapped strings are SaaS-vendor)
      const d = domainsById.get("businessapps")!;
      const lvlSlot = d.levels.find((l) => l.level === lvl)!;
      pushUnique(lvlSlot, cert);
    }

    // 2. Cross-list into a vendor-grouped ecosystem column when applicable
    const ecoMapping = VENDOR_TO_ECOSYSTEM[c.vendor];
    if (ecoMapping) {
      const eco = ensureEco(ecoMapping.id, ecoMapping.name, ecoMapping.kind, c.vendor);
      const lvlSlot = eco.levels.find((l) => l.level === lvl)!;
      pushUnique(lvlSlot, cert);
    }
  }

  if (unmappedDomains > 0) {
    console.warn(
      `[cert-data] ${unmappedDomains} cert(s) had unrecognised domain values and were parked in 'software'. Examples:\n  - ${unmappedSamples.join("\n  - ")}`,
    );
  }

  // Sort certs alphabetically within each level for stable rendering
  const sortLevels = (levels: DomainLevel[]) =>
    levels.map((l) => ({
      ...l,
      certs: [...l.certs].sort((a, b) => {
        const va = a.vendor.localeCompare(b.vendor);
        return va !== 0 ? va : a.name.localeCompare(b.name);
      }),
    }));

  const domains: Domain[] = CANONICAL_DOMAINS.map((d) => {
    const built = domainsById.get(d.id)!;
    return { ...built, levels: sortLevels(built.levels) };
  });

  // Split ecosystems into SaaS vs hardware buckets
  const ecosystems: Ecosystem[] = [];
  const hardware: Ecosystem[] = [];
  ecoById.forEach((e) => {
    e.levels = sortLevels(e.levels);
    if (e.kind === "saas") ecosystems.push(e);
    else hardware.push(e);
  });

  // Sort each ecosystem bucket by total cert count desc
  const certCount = (e: Ecosystem) => e.levels.reduce((n, l) => n + l.certs.length, 0);
  ecosystems.sort((a, b) => certCount(b) - certCount(a) || a.name.localeCompare(b.name));
  hardware.sort((a, b) => certCount(b) - certCount(a) || a.name.localeCompare(b.name));

  cache = { domains, ecosystems, hardware, vendor: [] };
  return cache;
}

export async function findEcosystem(id: string): Promise<{ entry: Domain | Ecosystem; category: "domain" | "saas" | "hardware" | "vendor" } | null> {
  const data = await loadCertData();
  const inDomains = data.domains.find((d) => d.id === id);
  if (inDomains) return { entry: inDomains, category: "domain" };
  const inSaas = data.ecosystems.find((e) => e.id === id);
  if (inSaas) return { entry: inSaas, category: "saas" };
  const inHw = data.hardware.find((e) => e.id === id);
  if (inHw) return { entry: inHw, category: "hardware" };
  return null;
}
