"use client";

import { useEffect, useMemo, useState } from "react";
import type { Role } from "@/content/roles";
import { Pill, type PillTone } from "@/components/ui/Pill";
import { Drawer } from "@/components/ui/Drawer";
import { SegmentedTabs } from "@/components/ui/Tabs";
import { LikeButton } from "@/components/ui/LikeButton";
import { CommentThread } from "@/components/ui/CommentThread";

const AI_TONE: Record<Role["aiImpact"], PillTone> = {
  resilient: "positive",
  mixed: "warning",
  "at-risk": "negative",
};

const REMOTE_TONE: Record<Role["remote"], PillTone> = {
  remote: "active",
  hybrid: "warning",
  "on-site": "neutral",
};

type Filter = "all" | "entry" | "ai-resilient" | "ai-at-risk" | "remote" | "on-site";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "entry", label: "Entry-level" },
  { id: "ai-resilient", label: "AI-resilient" },
  { id: "ai-at-risk", label: "AI at-risk" },
  { id: "remote", label: "Fully remote" },
  { id: "on-site", label: "On-site" },
];

export function RoleGrid({ roles }: { roles: Role[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<Role | null>(null);

  // When the URL has #role-id (e.g. arrived from cmd-K palette search),
  // open that role's drawer + scroll to it.
  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.replace(/^#/, ""));
    if (!hash) return;
    const match = roles.find((r) => r.id === hash);
    if (match) {
      setActive(match);
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, [roles]);

  const visible = useMemo(() => {
    return roles.filter((r) => {
      switch (filter) {
        case "entry":         return r.level === "entry";
        case "ai-resilient":  return r.aiImpact === "resilient";
        case "ai-at-risk":    return r.aiImpact === "at-risk";
        case "remote":        return r.remote === "remote";
        case "on-site":       return r.remote === "on-site";
        default:              return true;
      }
    });
  }, [roles, filter]);

  return (
    <>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <SegmentedTabs
          tabs={FILTERS.map((f) => ({ id: f.id, label: f.label }))}
          active={filter}
          onChange={(id) => setFilter(id as Filter)}
        />
        <span className="mono text-[11px] uppercase tracking-[0.08em] text-[--color-text-mute]">
          {visible.length} of {roles.length}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((r) => {
          // Stripe color encodes AI-impact signal (resilient=green / mixed=amber / at-risk=rust)
          const stripeColor =
            r.aiImpact === "resilient" ? "var(--positive)" :
            r.aiImpact === "at-risk"   ? "var(--negative)" :
                                          "var(--warning)";
          return (
            <button
              key={r.id}
              id={r.id}
              onClick={() => setActive(r)}
              className="tap-target group relative flex flex-col items-start overflow-hidden rounded-lg border-2 p-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            >
              <span aria-hidden className="absolute left-0 right-0 top-0 h-[4px]" style={{ background: stripeColor }} />
              <div className="mono mt-1 text-[10.5px] uppercase tracking-[0.1em] text-[--color-text-mute]">
                {r.level}
              </div>
              <h3 className="mt-1 text-[16px] font-semibold leading-tight text-[--color-text] group-hover:text-[--color-accent]">
                {r.name}
              </h3>
              <div className="mt-3 flex flex-wrap gap-1">
                <Pill tone={AI_TONE[r.aiImpact]} title={r.aiReasoning}>
                  AI · {r.aiImpact}
                </Pill>
                <Pill tone={REMOTE_TONE[r.remote]}>{r.remote}</Pill>
              </div>
              {r.industries.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1">
                  {r.industries.slice(0, 4).map((ind, i) => (
                    <span
                      key={i}
                      className="mono rounded border px-1.5 py-0.5 text-[10.5px]"
                      style={{ borderColor: "var(--border)", color: "var(--text-2)", background: "var(--bg)" }}
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              )}
              <p className="mt-3 line-clamp-3 text-[12.5px] leading-relaxed text-[--color-text-2]">
                {r.daily}
              </p>
            </button>
          );
        })}
      </div>

      <Drawer open={!!active} onClose={() => setActive(null)} title={active?.name}>
        {active ? <RoleDetail role={active} /> : null}
      </Drawer>
    </>
  );
}

function RoleDetail({ role }: { role: Role }) {
  return (
    <div className="space-y-6">
      <div>
        <div className="mono text-[10.5px] uppercase tracking-[0.12em] text-[--color-text-mute]">
          {role.level} role
        </div>
        <h2 className="mt-1 text-2xl font-semibold leading-tight">{role.name}</h2>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <Pill tone={AI_TONE[role.aiImpact]}>AI · {role.aiImpact}</Pill>
          <Pill tone={REMOTE_TONE[role.remote]}>{role.remote}</Pill>
          {role.industries.map((ind) => (
            <span
              key={ind}
              className="mono rounded-sm border border-[--color-border] bg-[--color-surface] px-1.5 py-0.5 text-[10.5px] text-[--color-text-2]"
            >
              {ind}
            </span>
          ))}
        </div>
      </div>

      <Section title="AI impact reasoning">
        <p className="text-[13.5px] leading-relaxed text-[--color-text]">{role.aiReasoning}</p>
      </Section>

      <Section title="What you actually do daily">
        <p className="whitespace-pre-wrap text-[13.5px] leading-relaxed text-[--color-text]">{role.daily}</p>
      </Section>

      {role.badDay && (
        <Section title="Bad day">
          <p className="text-[13.5px] italic leading-relaxed text-[--color-negative]">{role.badDay}</p>
        </Section>
      )}

      {role.firstJob && (
        <div className="border-t border-[--color-border] pt-5">
          <div className="eyebrow mb-3" style={{ color: "var(--color-warning)" }}>
            First-job mechanics (entry-level)
          </div>
          {role.firstJob.portfolio && <Section title="Portfolio"><Pre>{role.firstJob.portfolio}</Pre></Section>}
          {role.firstJob.resumeTips && <Section title="Resume tips"><Pre>{role.firstJob.resumeTips}</Pre></Section>}
          {role.firstJob.interviewFormat && (
            <Section title="Interview format"><p className="text-[13.5px] leading-relaxed">{role.firstJob.interviewFormat}</p></Section>
          )}
          {role.firstJob.whereToApply && <Section title="Where to apply"><Pre>{role.firstJob.whereToApply}</Pre></Section>}
          {role.firstJob.first90Days && <Section title="First 90 days"><Pre>{role.firstJob.first90Days}</Pre></Section>}
          {role.firstJob.salaryRange && (
            <div className="mono mt-4 rounded-md border border-[--color-border] bg-[--color-surface] p-3 text-[13.5px] text-[--color-positive]">
              {role.firstJob.salaryRange}
            </div>
          )}
        </div>
      )}

      <div className="border-t border-[--color-border] pt-4">
        <LikeButton target={`role:${role.id}`} />
      </div>
      <CommentThread target={`role:${role.id}`} />
    </div>
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

function Pre({ children }: { children: string }) {
  return (
    <pre className="whitespace-pre-wrap font-sans text-[13.5px] leading-relaxed text-[--color-text]">
      {children}
    </pre>
  );
}
