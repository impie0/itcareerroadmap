import Link from "next/link";
import { PageHeader } from "@/components/chrome/PageHeader";
import { StatStrip } from "@/components/chrome/StatStrip";
import { loadCareerChangers } from "@/lib/career-changers-loader";

export default async function CareerChangersIndex() {
  const changers = await loadCareerChangers();

  return (
    <main className="mx-auto max-w-[1100px] px-5 py-8 lg:px-8 lg:py-10">
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Career changers" }]}
        title="Career changer guides"
        subtitle={`${changers.length} guide${changers.length === 1 ? "" : "s"} for switching into IT from a non-IT background. Each one covers transferable skills, 90-day plan, cert sequence, salary bridge, CV positioning, and SA-specific resources.`}
      />

      <div className="mb-6">
        <StatStrip
          stats={[
            { label: "Guides", value: changers.length },
            { label: "Format", value: "Source profession → IT" },
            { label: "Source", value: "Deep Dive/Career_Changers/" },
          ]}
        />
      </div>

      {changers.length === 0 ? (
        <div className="rounded-md border border-dashed p-8 text-center" style={{ borderColor: "var(--border)" }}>
          <p className="text-[13.5px]" style={{ color: "var(--text-2)" }}>
            No career-changer files yet. Add markdown files to{" "}
            <code className="mono rounded bg-[--color-surface] px-1">Deep Dive/Career_Changers/</code>
            using the <code className="mono">_CAREER_CHANGER_TEMPLATE.md</code> as a starting point.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {changers.map((c) => (
            <Link
              key={c.slug}
              href={`/career-changers/${c.slug}`}
              className="tap-target group relative flex flex-col items-start overflow-hidden rounded-lg border-2 p-4 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            >
              <div className="mb-2 flex flex-wrap items-baseline gap-2">
                {c.changerId && (
                  <span className="mono text-[10px] uppercase tracking-[0.06em]" style={{ color: "var(--text-mute)" }}>
                    {c.changerId}
                  </span>
                )}
                {c.fm.difficulty_rating && (
                  <span className="mono rounded border px-1.5 py-0.5 text-[10px] uppercase tracking-[0.06em]" style={{ borderColor: "var(--border)", color: "var(--text-mute)" }}>
                    {c.fm.difficulty_rating}
                  </span>
                )}
              </div>
              <h3 className="text-[16px] font-semibold leading-snug text-[--color-text] group-hover:text-[--color-accent]">
                {c.sourceProfession} → IT
              </h3>
              {c.fm.primary_target_role && (
                <p className="mt-1 text-[12.5px]" style={{ color: "var(--text-2)" }}>
                  Target: {c.fm.primary_target_role}
                </p>
              )}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {c.fm.time_to_first_it_job_months && (
                  <span className="mono rounded border px-1.5 py-0.5 text-[10.5px]" style={{ borderColor: "var(--border)", color: "var(--text-2)", background: "var(--bg)" }}>
                    {c.fm.time_to_first_it_job_months} months
                  </span>
                )}
                {c.fm.total_cost_usd && (
                  <span className="mono rounded border px-1.5 py-0.5 text-[10.5px]" style={{ borderColor: "var(--border)", color: "var(--text-2)", background: "var(--bg)" }}>
                    {c.fm.total_cost_usd}
                  </span>
                )}
              </div>
              <div className="mt-3 flex w-full items-baseline justify-between gap-2">
                <span className="text-[12px] text-[--color-text-mute] group-hover:text-[--color-accent]">
                  Open guide →
                </span>
                {c.fm.last_verified && (
                  <span className="mono text-[10px] uppercase tracking-[0.06em]" style={{ color: "var(--text-mute)" }}>
                    verified {formatVerified(c.fm.last_verified)}
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
