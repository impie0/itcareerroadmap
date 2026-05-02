import Link from "next/link";
import { PageHeader } from "@/components/chrome/PageHeader";
import { StatStrip } from "@/components/chrome/StatStrip";
import { loadIndustries } from "@/lib/industries-loader";

export default async function IndustriesPage() {
  const industries = await loadIndustries();

  const stats = [
    { label: "Industries", value: industries.length },
    { label: "Coverage",   value: "Global + ZA" },
    { label: "Format",     value: "Deep dive" },
  ];

  return (
    <main className="mx-auto max-w-[1100px] px-5 py-8 lg:px-8 lg:py-10">
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
        title="Industries"
        subtitle={`${industries.length} industry-vertical career guides. Each one covers regulators, core platforms, salary bands, certification pathways, and how that sector hires for IT roles. Pick the industry you want to work in and the cert + role decisions get a lot less abstract.`}
      />

      <div className="mb-8">
        <StatStrip stats={stats} />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind) => (
          <Link
            key={ind.code}
            href={`/wiki/industry/${ind.slug}`}
            className="tap-target group relative flex flex-col items-start overflow-hidden rounded-lg border-2 p-4 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <span aria-hidden className="absolute left-0 right-0 top-0 h-[4px]" style={{ background: "var(--warning)" }} />
            <div className="mono mt-1 text-[10.5px] uppercase tracking-[0.1em] text-[--color-text-mute]">
              {ind.code} · industry
            </div>
            <h3 className="mt-1 text-[15.5px] font-semibold leading-snug text-[--color-text] group-hover:text-[--color-accent]">
              {ind.title}
            </h3>
            {ind.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1">
                {ind.tags.slice(0, 5).map((t) => (
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
