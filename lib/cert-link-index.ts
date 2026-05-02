import { loadAllCertifications } from "./certifications-loader";

/**
 * Builds an index of cert-code → per-cert page URL for use by the
 * markdown auto-linker (lib/markdown-cert-links.ts).
 *
 * Safety filter — only certs whose code contains both a digit AND a hyphen
 * AND is ≥ 5 chars become linkable. This catches the dominant cert-code
 * format (SY0-701, AZ-104, 220-1201/1202, etc.) while skipping ambiguous
 * abbreviations (CC, A+, PMP, CISSP) that would over-match in prose.
 */
export type CertLinkIndex = {
  map: Map<string, string>;        // lowercased code → "/cert/vendor/code"
  pattern: RegExp | null;          // a single regex matching any indexed code, gi flags
};

let cache: CertLinkIndex | null = null;

export async function getCertLinkIndex(): Promise<CertLinkIndex> {
  if (cache) return cache;

  const all = await loadAllCertifications();
  const map = new Map<string, string>();
  for (const c of all) {
    if (!c.code) continue;
    const code = c.code.trim();
    if (code.length < 5) continue;
    if (!/\d/.test(code)) continue;
    if (!/-/.test(code)) continue;
    // Skip placeholder codes
    if (/TBD|N\/A|—/i.test(code)) continue;

    const url = `/cert/${c.vendorSlug.toLowerCase()}/${c.codeSlug}`;
    map.set(code.toLowerCase(), url);
  }

  if (map.size === 0) {
    cache = { map, pattern: null };
    return cache;
  }

  // Sort longest-first so multi-part codes (e.g. "220-1201/1202") match
  // before any shorter substring would.
  const codes = [...map.keys()].sort((a, b) => b.length - a.length);
  const escaped = codes.map((c) => c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  // Word boundary on both sides so "AZ-104" matches but "PRE-AZ-104X" doesn't.
  const pattern = new RegExp(`\\b(${escaped.join("|")})\\b`, "gi");

  cache = { map, pattern };
  return cache;
}
