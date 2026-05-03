import Link from "next/link";
import { PageHeader } from "@/components/chrome/PageHeader";
import { StatStrip } from "@/components/chrome/StatStrip";
import { loadCareerPaths } from "@/lib/career-paths-loader";

export default async function CareerPathsIndex() {
  const paths = await loadCareerPaths();

  // Group by domain (if frontmatter has one)
  const domainOrder = [
    "Foundation",
    "Networking",
    "Cloud",
    "Security",
    "DevOps",
    "Data & AI",
    "Software Engineering",
    "Enterprise Apps",
    "IT Management",
    "Identity & Endpoint",
    "Architecture",
  ];

  return (
    <main className="mx-auto max-w-[1100px] px-5 py-8 lg:px-8 lg:py-10">
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Career paths" }]}
        title="Career paths"
        subtitle={`${paths.length} role-by-role guide${paths.length === 1 ? "" : "s"}. Each one is a "How to become a [role]" deep dive — cert sequence, salary table, 90-day plan, day-in-the-life, FAQ.`}
      />

      <div className="mb-6">
        <StatStrip
          stats={[
            { label: "Paths",   value: paths.length },
            { label: "Format",  value: "Role-by-role" },
            { label: "Source",  value: "Deep Dive/Career_Paths/" },
          ]}
        />
      </div>

      {paths.length === 0 ? (
        <div className="rounded-md border border-dashed p-8 text-center" style={{ borderColor: "var(--border)" }}>
          <p className="text-[13.5px]" style={{ color: "var(--text-2)" }}>
            No career path files yet. Add markdown files to{" "}
            <code className="mono rounded bg-[--color-surface] px-1">Deep Dive/Career_Paths/</code>
            using the <code className="mono">_CAREER_PATH_TEMPLATE.md</code> as a starting point.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {paths.map((p) => (
            <Link
              key={p.slug}
              href={`/career-paths/${p.slug}`}
              className="tap-target group relative flex flex-col items-start overflow-hidden rounded-lg border-2 p-4 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            >
              <div className="mb-2 flex flex-wrap items-baseline gap-2">
                {p.fm.domain && (
                  <span className="mono rounded border px-1.5 py-0.5 text-[10px] uppercase tracking-[0.06em]" style={{ borderColor: "var(--border)", color: "var(--text-mute)" }}>
                    {p.fm.domain}
                  </span>
                )}
                {p.pathId && (
                  <span className="mono text-[10px] uppercase tracking-[0.06em]" style={{ color: "var(--text-mute)" }}>
                    {p.pathId}
                  </span>
                )}
              </div>
              <h3 className="text-[16px] font-semibold leading-snug text-[--color-text] group-hover:text-[--color-accent]">
                {p.roleTitle}
              </h3>
              {p.fm.target_role && p.fm.target_role !== p.roleTitle && (
                <p className="mt-1 text-[12.5px]" style={{ color: "var(--text-2)" }}>
                  → {p.fm.target_role}
                </p>
              )}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.fm.time_to_hire_months && (
                  <span className="mono rounded border px-1.5 py-0.5 text-[10.5px]" style={{ borderColor: "var(--border)", color: "var(--text-2)", background: "var(--bg)" }}>
                    {p.fm.time_to_hire_months} months
                  </span>
                )}
                {p.fm.salary_floor_usd && (
                  <span className="mono rounded border px-1.5 py-0.5 text-[10.5px]" style={{ borderColor: "var(--border)", color: "var(--text-2)", background: "var(--bg)" }}>
                    {p.fm.salary_floor_usd}+
                  </span>
                )}
              </div>
              {p.fm.total_cost_usd && (
                <div className="mono mt-2 text-[11px]" style={{ color: "var(--text-mute)" }}>
                  {p.fm.total_cost_usd}
                </div>
              )}
              <div className="mt-3 flex w-full items-baseline justify-between gap-2">
                <span className="text-[12px] text-[--color-text-mute] group-hover:text-[--color-accent]">
                  Open path →
                </span>
                {p.fm.last_verified && (
                  <span className="mono text-[10px] uppercase tracking-[0.06em]" style={{ color: "var(--text-mute)" }}>
                    verified {formatVerified(p.fm.last_verified)}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}

function formatVerified(v: unknown): string {
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  if (typeof v === "string") return v.slice(0, 10);
  return "";
}
