import Link from "next/link";
import { PageHeader } from "@/components/chrome/PageHeader";
import { StatStrip } from "@/components/chrome/StatStrip";
import { loadCertificationPaths } from "@/lib/certification-paths-loader";
import { vendorColor } from "@/lib/vendor-colors";

export default async function CertificationPathsIndex() {
  const paths = await loadCertificationPaths();

  return (
    <main className="mx-auto max-w-[1100px] px-5 py-8 lg:px-8 lg:py-10">
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Certification paths" }]}
        title="Certification paths"
        subtitle={`${paths.length} vendor certification path${paths.length === 1 ? "" : "s"}. Each is an end-to-end roadmap: progression diagram, named pathways with timelines, prerequisites, branches, cross-vendor bridges, costs, and salary trajectories — all in one place.`}
      />

      <div className="mb-6">
        <StatStrip
          stats={[
            { label: "Paths",   value: paths.length },
            { label: "Format",  value: "Vendor-by-vendor" },
            { label: "Source",  value: "Deep Dive/Certification_Roadmaps/" },
          ]}
        />
      </div>

      {paths.length === 0 ? (
        <div className="rounded-md border border-dashed p-8 text-center" style={{ borderColor: "var(--border)" }}>
          <p className="text-[13.5px]" style={{ color: "var(--text-2)" }}>
            No certification path files yet. Add markdown files to{" "}
            <code className="mono rounded bg-[--color-surface] px-1">Deep Dive/Certification_Roadmaps/</code>
            using the <code className="mono">_ROADMAP_TEMPLATE.md</code> as a starting point.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {paths.map((p) => {
            const accent = vendorColor(p.vendor);
            return (
              <Link
                key={p.slug}
                href={`/certification-paths/${p.slug}`}
                className="tap-target group relative flex flex-col items-start overflow-hidden rounded-lg border-2 p-4 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={{ borderColor: "var(--border)", background: "var(--surface)" }}
              >
                <span aria-hidden className="absolute left-0 right-0 top-0 h-[4px]" style={{ background: accent }} />
                <h3 className="mt-1 text-[16px] font-semibold leading-snug text-[--color-text] group-hover:text-[--color-accent]">
                  {p.vendor}
                </h3>
                {p.fm.ecosystem && (
                  <p className="mt-1 text-[12.5px]" style={{ color: "var(--text-2)" }}>
                    {p.fm.ecosystem}
                  </p>
                )}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.fm.total_certifications !== undefined && (
                    <span className="mono rounded border px-1.5 py-0.5 text-[10.5px]" style={{ borderColor: "var(--border)", color: "var(--text-2)", background: "var(--bg)" }}>
                      {p.fm.total_certifications} certs
                    </span>
                  )}
                  {p.fm.time_to_expert && (
                    <span className="mono rounded border px-1.5 py-0.5 text-[10.5px]" style={{ borderColor: "var(--border)", color: "var(--text-2)", background: "var(--bg)" }}>
                      {p.fm.time_to_expert}
                    </span>
                  )}
                </div>
                {p.fm.cost_estimate_usd && (
                  <div className="mono mt-2 text-[11px]" style={{ color: "var(--text-mute)" }}>
                    {p.fm.cost_estimate_usd}
                  </div>
                )}
                <div className="mt-3 flex items-baseline justify-between gap-2">
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
            );
          })}
        </div>
      )}
    </main>
  );
}

/** gray-matter parses unquoted YAML dates into JS Date objects; React won't
 *  render those. Coerce to YYYY-MM-DD regardless of input shape. */
function formatVerified(v: unknown): string {
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  if (typeof v === "string") return v.slice(0, 10);
  return "";
}
