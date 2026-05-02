---
cert_name: "{Full Certification Name}"
cert_code: "{Exam Code, e.g., AZ-104, SY0-701, 200-301}"
vendor: "{Vendor Name, e.g., AWS, Microsoft, Cisco, CompTIA}"
status: "Active"               # Active | New | Retiring | Retired | Beta | Gated
level: "Entry"                 # Entry | Associate | Professional | Expert
domain: "{Primary domain, e.g., Cloud, Networking, Security, Foundation}"
ecosystem: "{Parent ecosystem, e.g., AWS Ecosystem, Microsoft Azure + M365}"
last_verified: "YYYY-MM-DD"
aliases: ["{Alternate names this cert is known by}", "{Old code if renamed}"]
---

# {Cert Name}

**`{Code}`** · ● **{Status}** · **{Level}** · _{Vendor}_

> **Use this template:** Copy this file into `Certifications/{Vendor}/{Vendor}_{Code}_{ShortName}.md`,
> then replace every `{...}` placeholder with verified, cited content.
> Every URL must be live and specific to THIS cert. No generic vendor URLs where a cert-specific one exists.
> Status must reflect 2026 reality (verify retirement / launch dates).

---

## Exam facts

| Field | Value |
|---|---|
| Cost | {USD price; note if regional pricing varies} |
| Duration | {minutes} |
| Questions | {count + scoring detail, e.g., "65 (50 scored, 15 unscored)"} |
| Passing | {score, e.g., "700/1000 scaled"} |
| Format | {Multiple choice / PBQs / Lab / Multiple response / Mixed} |
| Delivery | {Pearson VUE / OnVUE / vendor-specific testing platform} |
| Languages | {English, Japanese, ...; if English-only, say so} |
| Valid | {3 years / Lifetime / etc.} |
| Renewal | {CE credits / pass higher cert / retake / N/A} |
| Prerequisites | {None / specific cert / X years experience recommended} |
| Released | {Launch date if recent} |
| Retiring | {Retirement date if applicable, else N/A} |

**Vendor source —** [{vendor.tld} ↗]({https://vendor-cert-page-URL})
**Official exam guide —** [{Exam Guide PDF or page} ↗]({URL})
**Exam objectives —** [{Objectives page} ↗]({URL})

---

## About

{1–3 sentences: what this cert is, who it's for, when it was released, current status. Cite the launch date and replacement history if relevant. No fluff. No marketing speak.}

---

## Domain context — {Domain}

{One-line domain description, e.g., "Hyperscale public cloud (AWS, Azure, GCP, OCI)." or "Vendor-neutral foundational IT support." Cross-list note if applicable.}

[Read full deep dive — {Ecosystem Name} →]({path/to/parent_ecosystem.md})

---

## Topics covered

{Bulleted list from official exam blueprint. Include domain weights if vendor publishes them.}

- {Topic 1 (% weight if known)}
- {Topic 2 (% weight)}
- {Topic 3 (% weight)}
- {...}

*Source:* [Official exam guide ↗]({URL})

---

## Common skills at {Domain} · {Level}

*Shared content for the {Domain} domain at {Level} level — not specific to this cert.*

- {Skill 1 — broad domain skill at this level}
- {Skill 2}
- {Skill 3}
- {Skill 4}
- {Skill 5}
- {Skill 6}

---

## Recommended courses at {Domain} · {Level}

| Provider | Title | Cost | URL |
|---|---|---|---|
| {Vendor official, e.g., AWS Skill Builder} | {Specific course title for THIS cert} | {Free / $X} | [↗]({URL}) |
| {YouTube channel, e.g., Professor Messer} | {Specific playlist / course title for THIS cert} | Free | [↗]({URL}) |
| {Udemy instructor name} | {Specific course title for THIS cert} | {$X–$Y} | [↗]({URL}) |
| {Pluralsight / A Cloud Guru / CBT Nuggets / KodeKloud / INE / Whizlabs} | {Specific course} | {$X} | [↗]({URL}) |
| {LinkedIn Learning / Coursera / edX} | {Specific course} | {$X} | [↗]({URL}) |

**Course-selection rule:** Each course must be specifically for this cert code (not "AWS in general"). If no dedicated course exists on a platform, omit that platform — don't pad with generic content.

---

## Practice exams

| Provider | Title | Cost | URL |
|---|---|---|---|
| {Tutorials Dojo / Boson / Whizlabs / MeasureUp / Kaplan} | {Specific practice pack for this cert} | {$X} | [↗]({URL}) |
| {Vendor official practice if available} | {Title} | {Free / $X} | [↗]({URL}) |

---

## Books

| Title | Author | Publisher | Year | ISBN | URL |
|---|---|---|---|---|---|
| {Specific book title} | {Author full name(s)} | {Sybex / Pearson / O'Reilly / Wiley / Apress / Manning / Packt} | {YYYY} | {978-...} | [↗]({URL}) |

**Book rule:** Title must reference the cert code or current exam version. If the only available book is for a previous version (e.g., CAS-004 study guide for SecurityX CAS-005), note that explicitly.

---

## Typical job titles at {Domain} · {Level}

{Title 1} · {Title 2} · {Title 3} · {Title 4} · {Title 5}

*(Job titles drawn from current job-board postings that list this cert as required or preferred.)*

---

## Salary

| Region | Range | Source |
|---|---|---|
| USD | {$X – $Y for roles requiring this cert} | [Glassdoor ↗]({URL}) · [Robert Half ↗]({URL}) · [Levels.fyi ↗]({URL if applicable}) |
| ZAR | R{X} – R{Y} | [Pnet ↗]({URL}) · [PayScale ZA ↗]({URL}) · [CareerJunction ↗]({URL}) |
| GBP | £{X} – £{Y} | [IT Jobs Watch ↗]({URL}) · [Hays ↗]({URL}) |
| EUR | €{X} – €{Y} (DE/FR/NL) | [{source} ↗]({URL}) |
| AUD | A$\{X} – A$\{Y} | [{source} ↗]({URL}) |

**Salary rule:** Cite real surveys / job-board pages. If a region has no reliable data for THIS cert, write "No region-specific data available — use {Vendor} general role" rather than fabricating a range.

---

## Skills validated

*Cert-specific — what this exam actually tests, distinct from the shared "Common skills" above.*

- {Concrete technology / protocol / tool 1}
- {Concrete technology / protocol / tool 2}
- {Concrete technology / protocol / tool 3}
- {...}

---

## Related certifications

- **Stacks with:** [{Adjacent cert at same level} ↗]({path/to/file.md})
- **Prerequisite for:** [{Higher cert that builds on this} ↗]({path/to/file.md})
- **Replaces:** {Old cert code if applicable, e.g., "CLF-C01 (retired Oct 2023)"}
- **Equivalents at this level:** [{Cross-vendor equivalent} ↗]({path/to/file.md})
- **Vendor overview:** [{Vendor} Overview ↗](../../Vendors/{Vendor}_Vendor_Overview.md)

---

## Sources

- {Vendor cert page}: {URL}
- {Exam guide PDF}: {URL}
- {All other URLs cited above, deduplicated}
- {Salary survey URLs}
- {Course / book URLs not already in tables}

---

*Last verified: {YYYY-MM-DD}*
*Parent ecosystem: [{Ecosystem Name}]({path/to/ecosystem.md})*
*Parent domain: [{Domain Name}]({path/to/domain.md})*
*Vendor overview: [{Vendor} Overview]({path/to/vendor.md})*

---

## Editor notes (delete this section before publishing)

**Verification checklist before this file is considered done:**

- [ ] Every URL clicked and resolves (no 404s, no redirects to vendor home)
- [ ] Cert code matches official vendor naming (e.g., "AZ-305" not "Azure Solutions Architect Expert" if AZ-305 is the canonical code)
- [ ] `aliases` frontmatter lists every alternate name this cert is known by
- [ ] Status reflects 2026 reality (verify retirement dates against vendor's published roadmap)
- [ ] Recommended courses are SPECIFICALLY for this cert code (not generic vendor courses)
- [ ] Books cite the current exam version
- [ ] Salary ranges have real source URLs (not guesstimates)
- [ ] No fabrication: any field where verified data is unavailable says "No verified data" rather than a guess
- [ ] Cross-links to related certs point at real files (or explicitly note "{file not yet created}")
- [ ] Parent ecosystem / domain links resolve

**Common pitfalls:**
- Generic Udemy "AWS course" linked from every AWS cert — wrong, link the cert-specific course
- ISBN missing or fake — every book must have a real publisher page link
- Salary data extrapolated from general "cloud engineer" — if no cert-specific data, say so
- Confusing renamed certs (CASP+ → SecurityX, MS-721 retired, AZ-305 ≠ standalone "Azure Solutions Architect")
