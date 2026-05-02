import Link from "next/link";
import { PageHeader } from "@/components/chrome/PageHeader";
import { StatStrip } from "@/components/chrome/StatStrip";
import {
  listAllDeepDives,
  KIND_LABEL,
  KIND_PLURAL,
  KIND_BLURB,
  type DeepDiveKind,
} from "@/lib/deepdive-fs";

export const dynamic = "force-static";

const KINDS: DeepDiveKind[] = ["domain", "ecosystem", "roadmap", "industry", "specialty", "cross-cutting"];

export default async function WikiIndex() {
  const all = await listAllDeepDives();
  const byKind: Record<DeepDiveKind, typeof all> = {
    "domain": [], "ecosystem": [], "roadmap": [],
    "industry": [], "specialty": [], "cross-cutting": [],
  };
  all.forEach((f) => byKind[f.kind].push(f));

  const stats = [
    { label: "Total files", value: all.length },
    { label: "Domains",     value: byKind.domain.length },
    { label: "Ecosystems",  value: byKind.ecosystem.length },
    { label: "Roadmaps",    value: byKind.roadmap.length },
    { label: "Industries",  value: byKind.industry.length },
    { label: "Specialty",   value: byKind.specialty.length },
  ];

  return (
    <main className="mx-auto max-w-5xl px-5 py-8 lg:px-8 lg:py-10">
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Wiki" }]}
        title="Research Wiki"
        subtitle="Every cert, book, course, and salary number on this site cites a verifiable source. The wiki is where those sources live — fully-cited deep-dive research across every IT domain, vendor, role, industry, and cross-cutting concern."
      />

      <div className="mb-8">
        <StatStrip stats={stats} />
      </div>

      <div className="space-y-10">
        {KINDS.map((kind) => {
          const items = byKind[kind];
          if (items.length === 0) return null;
          return (
            <section key={kind} id={kind} style={{ scrollMarginTop: 130 }}>
              <header className="mb-3 border-b pb-2" style={{ borderColor: "var(--border)" }}>
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="text-[18px] font-semibold">{KIND_PLURAL[kind]}</h2>
                  <span className="mono text-[11px] uppercase tracking-[0.06em]" style={{ color: "var(--text-mute)" }}>
                    {items.length} file{items.length === 1 ? "" : "s"}
                  </span>
                </div>
                <p className="mt-1 text-[13px]" style={{ color: "var(--text-2)" }}>
                  {KIND_BLURB[kind]}
                </p>
              </header>

              <ul className="grid gap-2 sm:grid-cols-2">
                {items.map((f) => (
                  <li key={f.code}>
                    <Link
                      href={`/wiki/${f.kind}/${f.slug}`}
                      className="group flex items-baseline gap-3 rounded-md border px-3 py-2 transition-colors"
                      style={{ borderColor: "var(--border)", background: "var(--bg)" }}
                    >
                      <span className="mono w-12 flex-shrink-0 text-[11px] uppercase tracking-[0.06em]" style={{ color: "var(--text-mute)" }}>
                        {f.code}
                      </span>
                      <span className="text-[13.5px] font-medium" style={{ color: "var(--text)" }}>
                        <span className="group-hover:text-[--color-accent]">{f.title}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <div className="mt-10 rounded-md border border-dashed p-4 text-[12.5px]" style={{ borderColor: "var(--border)", color: "var(--text-2)" }}>
        <span className="mono mr-2 rounded border px-1.5 py-0.5 text-[10.5px] uppercase tracking-[0.06em]" style={{ borderColor: "var(--border)", color: "var(--text-mute)" }}>Quality contract</span>
        Every cert / book / course / salary number on this site has a verifiable source URL.
        If a claim cannot be cited, it does not appear here. {KIND_LABEL.domain && ""}
      </div>
    </main>
  );
}
