import { PageHeader } from "@/components/chrome/PageHeader";
import { CHANGERS } from "@/content/changers";
import { LikeButton } from "@/components/ui/LikeButton";

export default function ChangersPage() {
  return (
    <main className="mx-auto max-w-[860px] px-5 py-8 lg:px-8 lg:py-10">
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Career changers" }]}
        title="Entry into IT from a non-IT background"
        subtitle={`${CHANGERS.length} backgrounds. Best entry roles, transferable skills, realistic timelines, pay reality, what hiring managers worry about, real success stories.`}
      />

      <div className="space-y-3">
        {CHANGERS.map((c) => (
          <article
            key={c.id}
            id={c.id}
            className="rounded-lg border border-[--color-border] bg-[--color-bg] p-5"
          >
            <header className="mb-4 flex items-baseline justify-between gap-3 border-b border-[--color-border] pb-3">
              <h2 className="text-[19px] font-semibold">{c.background}</h2>
              <span className="mono text-[11px] uppercase tracking-[0.06em] text-[--color-accent]">
                {c.timeline}
              </span>
            </header>

            <div className="grid gap-5 md:grid-cols-2">
              <Section title="Best entry roles"><Bullets items={c.bestEntryRoles} /></Section>
              <Section title="Transferable skills"><Bullets items={c.transferableSkills} /></Section>
              <Section title="First cert">
                <p className="text-[13.5px] leading-relaxed text-[--color-text]">{c.firstCert}</p>
              </Section>
              <Section title="Pay reality">
                <p className="text-[13.5px] leading-relaxed text-[--color-positive]">{c.payReality}</p>
              </Section>
              <Section title="Hiring concerns">
                <p className="text-[13.5px] italic leading-relaxed text-[--color-negative]">
                  {c.hiringConcerns}
                </p>
              </Section>
              <Section title="How to address">
                <p className="text-[13.5px] leading-relaxed text-[--color-text]">{c.howToAddress}</p>
              </Section>
            </div>

            {c.freeResources.length > 0 && (
              <Section title="Free / cheap resources">
                <div className="flex flex-wrap gap-1.5">
                  {c.freeResources.map((r, i) =>
                    r.url ? (
                      <a
                        key={i}
                        href={r.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="rounded-md border border-[--color-accent] bg-[--color-accent]/10 px-2.5 py-1 text-[12px] font-medium text-[--color-accent] hover:bg-[--color-accent] hover:text-white"
                      >
                        {r.name} ↗
                      </a>
                    ) : (
                      <span
                        key={i}
                        className="rounded-md border border-[--color-border] bg-[--color-surface] px-2.5 py-1 text-[12px] text-[--color-text-2]"
                      >
                        {r.name}
                      </span>
                    ),
                  )}
                </div>
              </Section>
            )}

            {c.successStory && (
              <div className="mt-5 rounded-md border border-[--color-border] bg-[--color-surface] p-4 text-[13.5px] leading-relaxed italic text-[--color-text]">
                {c.successStory}
              </div>
            )}

            <div className="mt-4">
              <LikeButton target={`changer:${c.id}`} />
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-3 first:mt-0">
      <h4 className="mb-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-[--color-text-mute]">
        {title}
      </h4>
      {children}
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1">
      {items.map((it, i) => (
        <li key={i} className="relative pl-3.5 text-[13.5px] leading-snug text-[--color-text]">
          <span className="absolute left-0 top-0 font-bold text-[--color-accent]">·</span>
          {it}
        </li>
      ))}
    </ul>
  );
}
