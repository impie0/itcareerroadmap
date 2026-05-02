import { loadAllCertifications } from "@/lib/certifications-loader";
import { loadVendors } from "@/lib/vendors-loader";
import { loadIndustries } from "@/lib/industries-loader";
import { loadRoadmaps } from "@/lib/roadmaps-loader";
import { loadSpecialtyRoles } from "@/lib/specialty-roles-loader";
import { loadTopics } from "@/lib/topics-loader";
import { loadCertificationPaths } from "@/lib/certification-paths-loader";
import { PATHS } from "@/content/transitions";
import { ROLES } from "@/content/roles";
import { CHANGERS } from "@/content/changers";

export type SearchHit = {
  kind: "cert" | "role" | "transition" | "changer" | "page" | "vendor" | "industry" | "roadmap" | "topic" | "specialty" | "certpath";
  label: string;
  meta?: string;
  href: string;
};

export const STATIC_PAGES: SearchHit[] = [
  { kind: "page", label: "Browse certs",    meta: "all certifications",        href: "/certs" },
  { kind: "page", label: "Vendors",         meta: "per-vendor cert ladders",   href: "/vendors" },
  { kind: "page", label: "Career paths",    meta: "transition guides",         href: "/paths" },
  { kind: "page", label: "Role profiles",   meta: "AI impact, day-in-life",    href: "/profiles" },
  { kind: "page", label: "Industries",      meta: "industry-vertical guides",  href: "/industries" },
  { kind: "page", label: "Roadmaps",        meta: "junior → expert paths",     href: "/roadmaps" },
  { kind: "page", label: "Topics",          meta: "cross-cutting deep dives",  href: "/topics" },
  { kind: "page", label: "Career changers", meta: "non-IT entry guides",       href: "/changers" },
  { kind: "page", label: "Wiki",                meta: "deep research",             href: "/wiki" },
  { kind: "page", label: "Matrix view",         meta: "wallchart standalone",      href: "/matrix" },
  { kind: "page", label: "Certification paths", meta: "vendor roadmap docs",       href: "/certification-paths" },
  { kind: "page", label: "Blog",                meta: "long-form posts",           href: "/blog" },
];

export async function buildSearchIndex(): Promise<SearchHit[]> {
  const out: SearchHit[] = [...STATIC_PAGES];

  const [allCerts, vendors, industries, roadmaps, specialtyRoles, topics, certPaths] = await Promise.all([
    loadAllCertifications(),
    loadVendors(),
    loadIndustries(),
    loadRoadmaps(),
    loadSpecialtyRoles(),
    loadTopics(),
    loadCertificationPaths(),
  ]);

  // Certs — each hit links to its per-cert deep-dive page (NOT a /certs#anchor that doesn't exist)
  allCerts.forEach((c) => {
    const codePart = c.code && c.code !== "—" ? ` · ${c.code}` : "";
    const ladder = [c.domain, c.level].filter(Boolean).join(" · ");
    out.push({
      kind: "cert",
      label: `${c.vendor} — ${c.name}`,
      meta: ladder ? `${ladder}${codePart}` : codePart.replace(/^ · /, ""),
      href: `/cert/${c.vendorSlug.toLowerCase()}/${c.codeSlug}`,
    });
  });

  // Vendor rollup pages
  vendors.forEach((v) =>
    out.push({
      kind: "vendor",
      label: v.name,
      meta: `${v.certCount} cert${v.certCount === 1 ? "" : "s"}`,
      href: `/vendor/${v.slug}`,
    }),
  );

  // Industries / Roadmaps / Topics / Specialty roles — all share the wiki page format
  industries.forEach((i) =>
    out.push({ kind: "industry", label: i.title, meta: `${i.code} · industry`, href: `/wiki/industry/${i.slug}` }),
  );
  roadmaps.forEach((r) =>
    out.push({ kind: "roadmap", label: r.title, meta: `${r.code} · roadmap`, href: `/wiki/roadmap/${r.slug}` }),
  );
  topics.forEach((t) =>
    out.push({ kind: "topic", label: t.title, meta: `${t.code} · topic`, href: `/wiki/cross-cutting/${t.slug}` }),
  );
  certPaths.forEach((p) =>
    out.push({ kind: "certpath", label: `${p.vendor} certification path`, meta: p.fm.ecosystem ?? "vendor roadmap", href: `/certification-paths/${p.slug}` }),
  );
  specialtyRoles.forEach((s) =>
    out.push({ kind: "specialty", label: s.title, meta: `${s.code} · specialty role`, href: `/wiki/specialty/${s.slug}` }),
  );

  // Existing structured content (roles / transitions / changers from content/*.ts)
  ROLES.forEach((r) =>
    out.push({ kind: "role", label: r.name, meta: `${r.level} · AI ${r.aiImpact}`, href: `/profiles#${r.id}` }),
  );
  PATHS.forEach((p) =>
    out.push({ kind: "transition", label: `${p.from} → ${p.to}`, meta: `${p.track} · ${p.timeline}`, href: `/paths#${p.id}` }),
  );
  CHANGERS.forEach((c) =>
    out.push({ kind: "changer", label: `Entry from ${c.background}`, meta: `${c.timeline} · ${c.firstCert.split(" OR ")[0]}`, href: `/changers#${c.id}` }),
  );

  return out;
}
