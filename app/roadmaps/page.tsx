import Link from "next/link";
import { PageHeader } from "@/components/chrome/PageHeader";
import { StatStrip } from "@/components/chrome/StatStrip";
import { loadRoadmaps } from "@/lib/roadmaps-loader";

export default async function RoadmapsPage() {
  const roadmaps = await loadRoadmaps();

  return (
    <main className="mx-auto max-w-[1100px] px-5 py-8 lg:px-8 lg:py-10">
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Roadmaps" }]}
        title="Career roadmaps"
        subtitle={`${roadmaps.length} role-by-role progressions. Each one walks Junior → Mid → Senior → Expert with the certs, salary bands, and lateral pivots that mark each stage. Pick the role you're aiming at and the next move gets concrete.`}
      />

      <div className="mb-6">
        <StatStrip
          stats={[
            { label: "Roadmaps", value: roadmaps.length },
            { label: "Format",   value: "Junior → Expert" },
            { label: "Coverage", value: "Cert + salary at each step" },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {roadmaps.map((r) => (
          <Link
            key={r.code}
            href={`/wiki/roadmap/${r.slug}`}
            className="tap-target group relative flex flex-col items-start overflow-hidden rounded-lg border-2 p-4 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <span aria-hidden className="absolute left-0 right-0 top-0 h-[4px]" style={{ background: "var(--positive)" }} />
            <div className="mono mt-1 text-[10.5px] uppercase tracking-[0.1em] text-[--color-text-mute]">
              {r.code} · roadmap
            </div>
            <h3 className="mt-1 text-[15.5px] font-semibold leading-snug text-[--color-text] group-hover:text-[--color-accent]">
              {r.title}
            </h3>
            {r.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1">
                {r.tags.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="mono rounded border px-1.5 py-0.5 text-[10.5px]"
                    style={{ borderColor: "var(--border)", color: "var(--text-2)", background: "var(--bg)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
            <span className="mt-3 text-[12px] text-[--color-text-mute] group-hover:text-[--color-accent]">
              Read full deep dive →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
