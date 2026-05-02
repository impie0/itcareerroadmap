import Link from "next/link";
import { PageHeader } from "@/components/chrome/PageHeader";
import { StatStrip } from "@/components/chrome/StatStrip";
import { CertRow } from "@/components/certs/CertRow";
import { loadCertData } from "@/lib/cert-data";
import { loadVendors } from "@/lib/vendors-loader";
import { loadIndustries } from "@/lib/industries-loader";
import { loadRoadmaps } from "@/lib/roadmaps-loader";
import { loadSpecialtyRoles } from "@/lib/specialty-roles-loader";
import { loadTopics } from "@/lib/topics-loader";
import { loadCertificationPaths } from "@/lib/certification-paths-loader";
import { PATHS } from "@/content/transitions";
import { ROLES } from "@/content/roles";
import { CHANGERS } from "@/content/changers";

const POPULAR = [
  { vendor: "CompTIA", name: "A+" },
  { vendor: "CompTIA", name: "Security+" },
  { vendor: "Cisco",   name: "CCNA" },
  { vendor: "AWS",     name: "Solutions Architect Associate" },
  { vendor: "Microsoft", name: "AZ-104" },
];

export default async function HomePage() {
  const [data, vendors, industries, roadmaps, specialtyRoles, topics, certificationPaths] = await Promise.all([
    loadCertData(),
    loadVendors(),
    loadIndustries(),
    loadRoadmaps(),
    loadSpecialtyRoles(),
    loadTopics(),
    loadCertificationPaths(),
  ]);
  const allDomains = [...data.domains, ...data.ecosystems, ...data.hardware];
  const allCerts = allDomains.reduce(
    (n, d) => n + d.levels.reduce((nn, l) => nn + l.certs.length, 0),
    0,
  );
  const allVendors = new Set<string>();
  allDomains.forEach((d) => d.levels.forEach((l) => l.certs.forEach((c) => allVendors.add(c.vendor))));

  // Find popular cert objects (best-effort match)
  const popularCerts = POPULAR.map((p) => {
    for (const d of allDomains) {
      for (const lvl of d.levels) {
        const found = lvl.certs.find(
          (c) => c.vendor.toLowerCase() === p.vendor.toLowerCase() && c.name.toLowerCase().includes(p.name.toLowerCase()),
        );
        if (found) return { cert: found, level: lvl.level };
      }
    }
    return null;
  }).filter((x): x is { cert: NonNullable<ReturnType<typeof Object>> & { vendor: string; name: string }; level: "Entry" | "Associate" | "Professional" | "Expert" } => !!x);

  const stats = [
    { label: "Domains",        value: data.domains.length },
    { label: "Certifications", value: allCerts },
    { label: "Vendors",        value: allVendors.size },
    { label: "Roles",          value: ROLES.length },
    { label: "Transitions",    value: PATHS.length },
    { label: "Entry guides",   value: CHANGERS.length },
  ];

  return (
    <main className="mx-auto max-w-[1040px] px-5 py-8 lg:px-8 lg:py-10">
      <PageHeader
        title="Plan your IT career"
        subtitle="A self-hostable, citation-backed reference. Every cert links to its issuing vendor; every salary cites a real source; every claim is traceable. Browse certifications by domain, jump between roles, or take the route a non-IT background suggests."
      />

      <div className="my-7 flex flex-wrap gap-2">
        <Link
          href="/certs"
          className="inline-flex h-10 items-center rounded-md bg-[--color-text] px-4 text-[13px] font-semibold text-[--color-bg] transition-colors hover:bg-[--color-text-2]"
        >
          Browse certifications →
        </Link>
        <Link
          href="/profiles"
          className="inline-flex h-10 items-center rounded-md border border-[--color-border] bg-[--color-bg] px-4 text-[13px] font-semibold text-[--color-text] transition-colors hover:border-[--color-border-strong]"
        >
          Find your next role
        </Link>
        <Link
          href="/changers"
          className="inline-flex h-10 items-center rounded-md border border-[--color-border] bg-[--color-bg] px-4 text-[13px] font-semibold text-[--color-text] transition-colors hover:border-[--color-border-strong]"
        >
          Coming from another field?
        </Link>
      </div>

      <StatStrip stats={stats} />

      <section className="mt-10 grid gap-3 md:grid-cols-3">
        <FeatureCard
          href="/certs"
          title="Cert browser"
          desc="Faceted search across the cert matrix. Filter by domain, level, vendor, status."
          meta={`${allCerts} certs`}
        />
        <FeatureCard
          href="/vendors"
          title="Vendors"
          desc="Per-vendor cert ladder, Entry → Expert. AWS, Microsoft, Cisco, CompTIA, Salesforce, and 45 more."
          meta={`${vendors.length} vendors`}
        />
        <FeatureCard
          href="/certification-paths"
          title="Certification paths"
          desc="End-to-end vendor roadmap with progression diagram, named pathways, branches, cross-vendor bridges, costs, and salary trajectories."
          meta={`${certificationPaths.length} path${certificationPaths.length === 1 ? "" : "s"}`}
        />
        <FeatureCard
          href="/profiles"
          title="Role profiles"
          desc="AI-impact rating, day-in-the-life, remote-friendliness. Plus specialty deep-dives."
          meta={`${ROLES.length + specialtyRoles.length} roles`}
        />
        <FeatureCard
          href="/roadmaps"
          title="Career roadmaps"
          desc="Junior → Mid → Senior → Expert progressions. Certs, salary, lateral pivots at each step."
          meta={`${roadmaps.length} roadmaps`}
        />
        <FeatureCard
          href="/industries"
          title="Industries"
          desc="Industry-vertical guides — regulators, core platforms, salary bands per sector."
          meta={`${industries.length} industries`}
        />
        <FeatureCard
          href="/paths"
          title="Career transitions"
          desc="Transition guides — signals you're ready, skill gap, bridge certs, salary delta with source."
          meta={`${PATHS.length} guides`}
        />
        <FeatureCard
          href="/topics"
          title="Topics"
          desc="Cross-cutting deep-dives: AI impact, salary by region, comp negotiation, visas, burnout, diversity."
          meta={`${topics.length} topics`}
        />
      </section>

      <section className="mt-12">
        <div className="mb-3 flex items-baseline justify-between border-b border-[--color-border] pb-2">
          <h2 className="text-[17px] font-semibold">Start here · popular certifications</h2>
          <Link href="/certs" className="text-[13px] text-[--color-accent] hover:underline">
            Browse all →
          </Link>
        </div>
        <div className="space-y-2">
          {popularCerts.map((p, i) => (
            <CertRow
              key={i}
              cert={p.cert}
              level={p.level}
              href={`/certs?vendor=${encodeURIComponent(p.cert.vendor)}`}
            />
          ))}
        </div>
      </section>

      <footer className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-[--color-border] pt-5 text-[12px] text-[--color-text-mute]">
        <span>
          Citation policy: every cert links to its issuing vendor; uncited claims removed.
        </span>
        <span className="mono uppercase tracking-[0.06em]">v0.5 · Apr 2026</span>
      </footer>
    </main>
  );
}

function FeatureCard({
  href,
  title,
  desc,
  meta,
}: {
  href: string;
  title: string;
  desc: string;
  meta: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-lg border border-[--color-border] bg-[--color-bg] p-5 transition-colors hover:border-[--color-border-strong] hover:bg-[--color-surface]"
    >
      <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-[--color-text-mute]">
        {meta}
      </div>
      <h3 className="mt-1.5 text-[17px] font-semibold text-[--color-text] group-hover:text-[--color-accent]">
        {title}
      </h3>
      <p className="mt-1.5 text-[13.5px] leading-relaxed text-[--color-text-2]">{desc}</p>
      <div className="mt-3 text-[12px] text-[--color-text-mute] group-hover:text-[--color-accent]">→</div>
    </Link>
  );
}
