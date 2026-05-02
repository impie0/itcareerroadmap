"use client";

import { useState, type ReactNode } from "react";

export type TabDef = { id: string; label: string; count?: number };

export function SegmentedTabs({
  tabs,
  active,
  onChange,
}: {
  tabs: TabDef[];
  active: string;
  onChange: (id: string) => void;
}) {
  return (
    <div
      role="tablist"
      className="inline-flex flex-wrap gap-px rounded-md border border-[--color-border] bg-[--color-surface] p-0.5"
    >
      {tabs.map((t) => {
        const on = t.id === active;
        return (
          <button
            key={t.id}
            role="tab"
            aria-selected={on}
            onClick={() => onChange(t.id)}
            className={`mono inline-flex h-8 items-center gap-2 rounded-md px-3 text-[12px] font-medium transition-colors ${
              on
                ? "bg-[--color-accent] text-white"
                : "text-[--color-text-2] hover:text-[--color-text]"
            }`}
          >
            <span>{t.label}</span>
            {typeof t.count === "number" && (
              <span
                className={`mono text-[10.5px] ${
                  on ? "text-white/85" : "text-[--color-text-mute]"
                }`}
              >
                {t.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export function ControlledTabs({
  tabs,
  initial,
  panels,
}: {
  tabs: TabDef[];
  initial?: string;
  panels: Record<string, ReactNode>;
}) {
  const [active, setActive] = useState(initial ?? tabs[0]?.id);
  return (
    <div>
      <SegmentedTabs tabs={tabs} active={active} onChange={setActive} />
      <div className="mt-5">{panels[active]}</div>
    </div>
  );
}
