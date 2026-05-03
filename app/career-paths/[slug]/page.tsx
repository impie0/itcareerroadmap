import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/chrome/PageHeader";
import { findCareerPath, loadCareerPaths } from "@/lib/career-paths-loader";
import { PathSection } from "@/components/certpaths/PathSection";
import { PathTOC } from "@/components/certpaths/PathTOC";
import { MarkdownWithMermaid } from "@/components/certpaths/MarkdownWithMermaid";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const all = await loadCareerPaths();
  return all.map((p) => ({ slug: p.slug }));
}

// Sections that open by default (above the fold).
const ALWAYS_OPEN = new Set([
  "role-overview",
  "certification-sequence",
]);

export default async function CareerPathPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = await findCareerPath(slug);
  if (!p) notFound();

  const tocItems = p.sections.map((s) => ({ slug: s.slug, heading: s.heading }));

  return (
    <main className="mx-auto max-w-[1280px] px-5 py-8 lg:px-8 lg:py-10">
      <PageHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Career paths", href: "/career-paths" },
          { label: p.roleTitle },
        ]}
        title={`How to become a ${p.roleTitle}`}
        subtitle={p.fm.entry_level_role && p.fm.target_role
          ? `${p.fm.entry_level_role} → ${p.fm.target_role}`
          : `${p.fm.domain ?? "IT"} career path.`}
      />

      <div
        className="relative mb-6 overflow-hidden rounded-lg border-2 p-5"
        style={{ borderColor: "var(--border)", background: "var(--surface)" }}
      >
        <span aria-hidden className="absolute left-0 right-0 top-0 h-[4px]" style={{ background: "var(--accent)" }} />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stat label="Time to hire"   value={p.fm.time_to_hire_months ? `${p.fm.time_to_hire_months}m` : "—"} />
          <Stat label="Total cost USD" value={p.fm.total_cost_usd ?? "—"} />
          <Stat label="Total cost ZAR" value={p.fm.total_cost_zar ?? "—"} />
          <Stat label="Salary range"   value={p.fm.salary_floor_usd && p.fm.salary_ceiling_usd ? `${p.fm.salary_floor_usd}–${p.fm.salary_ceiling_usd}` : (p.fm.salary_floor_usd ?? "—")} />
        </div>
        {p.fm.domain && (
          <div className="mt-3 text-[12.5px]" style={{ color: "var(--text-2)" }}>
            Domain: <strong style={{ color: "var(--text)" }}>{p.fm.domain}</strong>
            {p.pathId && <> · <span className="mono">{p.pathId}</span></>}
          </div>
        )}
        {p.fm.last_verified && (
          <div className="mono mt-2 text-[10.5px] uppercase tracking-[0.06em]" style={{ color: "var(--text-mute)" }}>
            Last verified {formatVerified(p.fm.last_verified)}
          </div>
        )}
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_220px]">
        <div className="min-w-0 space-y-3">
          {p.sections.length === 0 ? (
            <div className="rounded-md border p-4 text-[13px] italic" style={{ borderColor: "var(--border)", color: "var(--text-mute)" }}>
              No parseable sections in this file. Check that headings use <code className="mono">## Heading</code> format.
            </div>
          ) : (
            p.sections.map((s) => {
              const open = ALWAYS_OPEN.has(s.slug);
              if (open) {
                return (
                  <section
                    key={s.slug}
                    id={s.slug}
                    className="rounded-lg border p-5"
                    style={{ borderColor: "var(--border)", background: "var(--bg)", scrollMarginTop: "80px" }}
                  >
                    <h2 className="mb-3 text-[18px] font-semibold" style={{ color: "var(--text)" }}>
                      {s.heading}
                    </h2>
                    <MarkdownWithMermaid markdown={s.markdown} />
                  </section>
                );
              }
              return (
                <PathSection key={s.slug} heading={s.heading} slug={s.slug} markdown={s.markdown} />
              );
            })
          )}
        </div>
        <PathTOC items={tocItems} />
      </div>

      <nav className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t pt-5" style={{ borderColor: "var(--border)" }}>
        <Link
          href="/career-paths"
          className="rounded-md border px-4 py-2 text-[13px]"
          style={{ borderColor: "var(--border)", color: "var(--text-2)" }}
        >
          ← All career paths
        </Link>
      </nav>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <div className="mono text-[10.5px] uppercase tracking-[0.08em]" style={{ color: "var(--text-mute)" }}>
        {label}
      </div>
      <div className="mt-1 text-[16px] font-semibold tabular-nums" style={{ color: "var(--text)" }}>
        {value}
      </div>
    </div>
  );
}

function formatVerified(v: unknown): string {
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  if (typeof v === "string") return v.slice(0, 10);
  return "";
}
