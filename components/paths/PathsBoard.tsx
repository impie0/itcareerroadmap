"use client";

import { useEffect, useMemo, useState } from "react";
import type { Transition, StructuralInsight, TrackId } from "@/content/transitions";
import { Pill } from "@/components/ui/Pill";
import { LikeButton } from "@/components/ui/LikeButton";
import { CommentThread } from "@/components/ui/CommentThread";
import { SegmentedTabs } from "@/components/ui/Tabs";

export function PathsBoard({
  tracks,
  paths,
  insights,
}: {
  tracks: { id: TrackId; label: string }[];
  paths: Transition[];
  insights: StructuralInsight[];
}) {
  const [active, setActive] = useState<TrackId>(tracks[0]?.id ?? "operations");
  const [openId, setOpenId] = useState<string | null>(null);

  // Hash-driven entry: /paths#sysadmin-to-cloud → switch to the right track tab,
  // open that transition row, and scroll to it.
  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.replace(/^#/, ""));
    if (!hash) return;
    const match = paths.find((p) => p.id === hash);
    if (match) {
      setActive(match.track);
      setOpenId(hash);
      // Small delay to let the tab swap render first
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ block: "start", behavior: "smooth" });
      }, 80);
    }
  }, [paths]);

  const filtered = useMemo(() => paths.filter((p) => p.track === active), [paths, active]);
  const trackInsights = useMemo(
    () => insights.filter((i) => i.trackIds.includes(active)),
    [insights, active],
  );

  const tabDefs = tracks.map((t) => ({
    id: t.id,
    label: t.label,
    count: paths.filter((p) => p.track === t.id).length,
  }));

  return (
    <>
      <div className="mb-5 overflow-x-auto">
        <SegmentedTabs
          tabs={tabDefs}
          active={active}
          onChange={(id) => {
            setActive(id as TrackId);
            setOpenId(null);
          }}
        />
      </div>

      {trackInsights.length > 0 && (
        <div className="mb-5 space-y-2">
          {trackInsights.map((i, idx) => (
            <div
              key={idx}
              className="rounded-md border border-[--color-border] bg-[--color-surface] p-4"
            >
              <div className="eyebrow mb-1" style={{ color: "var(--color-warning)" }}>
                Structural insight
              </div>
              <div className="font-semibold text-[--color-text]">{i.title}</div>
              <p className="mt-1 text-[13.5px] leading-relaxed text-[--color-text-2]">{i.body}</p>
            </div>
          ))}
        </div>
      )}

      <div className="space-y-2">
        {filtered.map((t) => (
          <div key={t.id} id={t.id} style={{ scrollMarginTop: 130 }}>
            <TransitionRow
              t={t}
              open={openId === t.id}
              onToggle={() => setOpenId(openId === t.id ? null : t.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

function TransitionRow({
  t,
  open,
  onToggle,
}: {
  t: Transition;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="overflow-hidden rounded-md border border-[--color-border] bg-[--color-surface]">
      <button
        onClick={onToggle}
        className="tap-target flex w-full items-start justify-between gap-4 p-4 text-left transition-colors hover:bg-[--color-surface-2]"
        aria-expanded={open}
      >
        <div className="flex-1">
          <div className="mb-1 flex flex-wrap items-center gap-1.5">
            {t.lateral && <Pill tone="warning">Lateral</Pill>}
            {t.fork && <Pill tone="negative">Fork</Pill>}
            {!t.lateral && !t.fork && <Pill tone="active">Vertical</Pill>}
            <span className="mono text-[11px] uppercase tracking-[0.08em] text-[--color-text-mute]">
              {t.timeline}
            </span>
          </div>
          <div className="text-[15px] leading-snug text-[--color-text]">
            <span className="font-semibold">{t.from}</span>
            <span className="mx-2 text-[--color-accent]">→</span>
            <span className="font-semibold">{t.to}</span>
          </div>
          <p className="mt-2 text-[13px] leading-relaxed text-[--color-text-2]">{t.summary}</p>
        </div>
        <span className="mono mt-1 text-[--color-text-mute]">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="border-t border-[--color-border] bg-[--color-bg] p-5">
          <div className="grid gap-5 md:grid-cols-2">
            {t.signal && t.signal.length > 0 && <Section title="Signal you're ready"><Bullets items={t.signal} /></Section>}
            {t.gap && t.gap.length > 0 && <Section title="Skill gap"><Bullets items={t.gap} /></Section>}
            {t.bridgeCerts && t.bridgeCerts.length > 0 && (
              <Section title="Bridge certifications">
                <ul className="space-y-1">
                  {t.bridgeCerts.map((c, i) => (
                    <li key={i}>
                      {c.url && c.url !== "#" ? (
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-[13.5px] text-[--color-accent] hover:underline"
                        >
                          {c.name} ↗
                        </a>
                      ) : (
                        <span className="text-[13.5px] text-[--color-text]">{c.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </Section>
            )}
            {t.books && t.books.length > 0 && (
              <Section title="Books">
                <ul className="space-y-1">
                  {t.books.map((b, i) => (
                    <li key={i} className="text-[13.5px]">
                      {b.url ? (
                        <a
                          href={b.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-[--color-accent] hover:underline"
                        >
                          {b.title}
                        </a>
                      ) : (
                        <span className="text-[--color-text]">{b.title}</span>
                      )}
                      {b.author && <span className="text-[--color-text-mute]"> — {b.author}</span>}
                    </li>
                  ))}
                </ul>
              </Section>
            )}
            {t.softSkills && t.softSkills.length > 0 && <Section title="Soft skills"><Bullets items={t.softSkills} /></Section>}
            {t.failureModes && t.failureModes.length > 0 && <Section title="Failure modes"><Bullets items={t.failureModes} /></Section>}
          </div>

          {t.first90Days && (
            <Section title="First 90 days">
              <p className="text-[13.5px] leading-relaxed text-[--color-text]">{t.first90Days}</p>
            </Section>
          )}

          {(t.salaryDelta || t.salarySource) && (
            <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-[--color-border] pt-4">
              {t.salaryDelta && (
                <span className="mono text-[13px] text-[--color-positive]">
                  Salary delta: {t.salaryDelta}
                </span>
              )}
              {t.salarySource && (
                <a
                  href={t.salarySource}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mono text-[11px] uppercase tracking-[0.08em] text-[--color-accent] hover:underline"
                >
                  source ↗
                </a>
              )}
            </div>
          )}

          {t.insight && (
            <div className="mt-5 rounded-md border border-[--color-border] bg-[--color-surface] p-3 text-[13px] italic text-[--color-text-2]">
              {t.insight}
            </div>
          )}

          <div className="mt-5">
            <LikeButton target={`transition:${t.id}`} />
          </div>
          <CommentThread target={`transition:${t.id}`} />
        </div>
      )}
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <div className="eyebrow mb-1.5">{title}</div>
      {children}
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1">
      {items.map((it, i) => (
        <li key={i} className="flex gap-2 text-[13.5px] leading-relaxed text-[--color-text]">
          <span className="text-[--color-accent]">·</span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}
