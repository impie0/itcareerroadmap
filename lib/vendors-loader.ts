import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { loadAllCertifications, type CertificationFile } from "@/lib/certifications-loader";
import { normalizeLevel } from "@/lib/domain-normalizer";

export type VendorSummary = {
  slug: string;          // lowercased folder name, e.g. "aws", "cisco", "comptia"
  name: string;          // canonical vendor display name (from cert files)
  certCount: number;
  countsByLevel: Record<"Entry" | "Associate" | "Professional" | "Expert", number>;
  certs: CertificationFile[];
  overviewMarkdown?: string; // present when Deep Dive/Vendors/{Vendor}_Vendor_Overview.md exists
};

const VENDORS_DIR = path.join(process.cwd(), "Deep Dive", "Vendors");

/** Normalize a vendor display name → folder-style slug. */
function vendorNameToSlug(name: string): string {
  return name.toLowerCase().replace(/[^\w]+/g, "-").replace(/^-|-$/g, "");
}

let cache: VendorSummary[] | null = null;

export async function loadVendors(): Promise<VendorSummary[]> {
  if (cache) return cache;
  const all = await loadAllCertifications();

  // Group by lowercased vendorSlug (the folder name)
  const map = new Map<string, CertificationFile[]>();
  for (const c of all) {
    const slug = c.vendorSlug.toLowerCase();
    if (!map.has(slug)) map.set(slug, []);
    map.get(slug)!.push(c);
  }

  // Read optional vendor-overview files. Two file-naming conventions are accepted:
  //  - Legacy:  {Vendor}_Vendor_Overview.md  with frontmatter `vendor: "Name"`
  //  - v2 spec: V001_{Slug}_Overview.md       with frontmatter `vendor_name`/`vendor_slug`
  // Either shape resolves to a string body keyed by lowercase name AND slug, so the
  // matcher below finds it regardless of which convention the author used.
  const overviewByKey = new Map<string, string>();
  try {
    const entries = await fs.readdir(VENDORS_DIR);
    for (const f of entries) {
      if (!f.endsWith(".md")) continue;
      if (f.startsWith("_")) continue; // skip _VENDOR_OVERVIEW_TEMPLATE.md etc.
      const raw = await fs.readFile(path.join(VENDORS_DIR, f), "utf-8");
      const parsed = matter(raw);
      const fm = (parsed.data ?? {}) as Record<string, unknown>;
      const vendorName = ((fm.vendor_name as string) ?? (fm.vendor as string) ?? "").trim();
      const vendorSlug = ((fm.vendor_slug as string) ?? "").trim();
      if (!vendorName && !vendorSlug) continue;
      const body = parsed.content;
      if (vendorName) overviewByKey.set(vendorName.toLowerCase(), body);
      if (vendorSlug) overviewByKey.set(vendorSlug.toLowerCase(), body);
    }
  } catch {
    /* no Vendors folder is fine */
  }

  const out: VendorSummary[] = [];
  for (const [slug, certs] of map) {
    const counts: VendorSummary["countsByLevel"] = { Entry: 0, Associate: 0, Professional: 0, Expert: 0 };
    for (const c of certs) {
      const lvl = normalizeLevel(c.level ?? "");
      counts[lvl] = (counts[lvl] ?? 0) + 1;
    }
    // Use the most-common vendor display name from the underlying cert files
    const nameTally = new Map<string, number>();
    for (const c of certs) nameTally.set(c.vendor, (nameTally.get(c.vendor) ?? 0) + 1);
    const name = [...nameTally.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? slug;

    out.push({
      slug,
      name,
      certCount: certs.length,
      countsByLevel: counts,
      certs: certs.sort((a, b) => {
        const lvla = normalizeLevel(a.level ?? "");
        const lvlb = normalizeLevel(b.level ?? "");
        const order = { Entry: 0, Associate: 1, Professional: 2, Expert: 3 };
        if (order[lvla] !== order[lvlb]) return order[lvla] - order[lvlb];
        return a.name.localeCompare(b.name);
      }),
      overviewMarkdown:
        overviewByKey.get(name.toLowerCase()) ??
        overviewByKey.get(slug) ??
        overviewByKey.get(vendorNameToSlug(name)),
    });
  }

  out.sort((a, b) => b.certCount - a.certCount || a.name.localeCompare(b.name));
  cache = out;
  return out;
}

export async function findVendor(slug: string): Promise<VendorSummary | null> {
  const all = await loadVendors();
  return all.find((v) => v.slug === slug.toLowerCase()) ?? null;
}
