import Link from "next/link";
import { PageHeader } from "@/components/chrome/PageHeader";
import { StatStrip } from "@/components/chrome/StatStrip";
import { loadTopics } from "@/lib/topics-loader";

export default async function TopicsPage() {
  const topics = await loadTopics();

  return (
    <main className="mx-auto max-w-[1100px] px-5 py-8 lg:px-8 lg:py-10">
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Topics" }]}
        title="Topics"
        subtitle={`${topics.length} cross-cutting deep-dives that span every IT role and cert. AI impact, international salary, career changers, first-job mechanics, comp negotiation, side income, visas, burnout, diversity. Read alongside any role or domain.`}
      />

      <div className="mb-6">
        <StatStrip
          stats={[
            { label: "Topics",   value: topics.length },
            { label: "Coverage", value: "Cross-role" },
            { label: "Format",   value: "Long-form research" },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((t) => (
          <Link
            key={t.code}
            href={`/wiki/cross-cutting/${t.slug}`}
            className="tap-target group relative flex flex-col items-start overflow-hidden rounded-lg border-2 p-4 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <span aria-hidden className="absolute left-0 right-0 top-0 h-[4px]" style={{ background: "var(--accent)" }} />
            <div className="mono mt-1 text-[10.5px] uppercase tracking-[0.1em] text-[--color-text-mute]">
              {t.code} · topic
            </div>
            <h3 className="mt-1 text-[15.5px] font-semibold leading-snug text-[--color-text] group-hover:text-[--color-accent]">
              {t.title}
            </h3>
            {t.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1">
                {t.tags.slice(0, 5).map((tag) => (
                  <span
                    key={tag}
                    className="mono rounded border px-1.5 py-0.5 text-[10.5px]"
                    style={{ borderColor: "var(--border)", color: "var(--text-2)", background: "var(--bg)" }}
                  >
                    {tag}
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
