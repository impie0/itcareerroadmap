"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { SearchHit } from "@/lib/search-index";

type Hit = SearchHit;

const KIND_LABEL: Record<Hit["kind"], string> = {
  page: "Page",
  cert: "Cert",
  vendor: "Vendor",
  certpath: "Cert Path",
  role: "Role",
  specialty: "Specialty",
  industry: "Industry",
  roadmap: "Roadmap",
  topic: "Topic",
  transition: "Transition",
  changer: "Changer",
};

export function CommandPalette({ open, onClose, index }: { open: boolean; onClose: () => void; index: Hit[] }) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const router = useRouter();

  const hits = useMemo(() => {
    if (!q.trim()) return index.slice(0, 30);
    const needle = q.toLowerCase();
    return index
      .map((h) => {
        const hay = `${h.label} ${h.meta ?? ""}`.toLowerCase();
        let score = 0;
        if (hay.includes(needle)) score = 1;
        if (h.label.toLowerCase().startsWith(needle)) score = 3;
        if (h.label.toLowerCase().includes(needle)) score += 1;
        return { h, score };
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 50)
      .map((x) => x.h);
  }, [q, index]);

  useEffect(() => {
    if (!open) {
      setQ("");
      setActive(0);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((a) => Math.min(a + 1, hits.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) => Math.max(a - 1, 0));
      }
      if (e.key === "Enter" && hits[active]) {
        e.preventDefault();
        router.push(hits[active].href);
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, hits, active, router, onClose]);

  if (!open) return null;

  return (
    <>
      <button aria-label="Close" onClick={onClose} className="drawer-scrim" />
      <div
        role="dialog"
        aria-modal="true"
        className="fixed left-1/2 top-[14vh] z-50 w-[min(640px,92vw)] -translate-x-1/2 overflow-hidden rounded-xl border shadow-2xl"
        style={{
          background: "var(--bg)",
          borderColor: "var(--border)",
          color: "var(--text)",
        }}
      >
        <div
          className="flex h-12 items-center gap-3 border-b px-4"
          style={{ borderColor: "var(--border)", background: "var(--bg)" }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="7" cy="7" r="5" />
            <path d="m11 11 3 3" />
          </svg>
          <input
            autoFocus
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setActive(0);
            }}
            placeholder="Search certs, roles, guides…"
            className="flex-1 bg-transparent text-[14px] outline-none placeholder:text-[--color-text-mute]"
          />
          <span className="mono rounded border border-[--color-border] px-1.5 py-px text-[10.5px] text-[--color-text-mute]">
            ESC
          </span>
        </div>
        <ul
          className="max-h-[50vh] overflow-y-auto py-1"
          style={{ background: "var(--bg)" }}
        >
          {hits.length === 0 ? (
            <li className="px-4 py-6 text-center text-[13px] text-[--color-text-mute]">
              No matches
            </li>
          ) : (
            hits.map((h, i) => (
              <li key={h.href + h.label + i}>
                <button
                  onClick={() => {
                    router.push(h.href);
                    onClose();
                  }}
                  onMouseEnter={() => setActive(i)}
                  className={`flex w-full items-center gap-3 px-4 py-2 text-left transition-colors ${
                    i === active ? "bg-[--color-surface]" : ""
                  }`}
                >
                  <span className="eyebrow w-[68px] flex-shrink-0">{KIND_LABEL[h.kind]}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[13.5px] font-medium text-[--color-text]">
                      {h.label}
                    </span>
                    {h.meta && (
                      <span className="block truncate text-[12px] text-[--color-text-mute]">
                        {h.meta}
                      </span>
                    )}
                  </span>
                  <span className="mono text-[10.5px] text-[--color-text-mute]">↵</span>
                </button>
              </li>
            ))
          )}
        </ul>
        <div
          className="flex items-center justify-between border-t px-4 py-2 text-[11px]"
          style={{ borderColor: "var(--border)", background: "var(--surface)", color: "var(--text-mute)" }}
        >
          <span className="mono uppercase tracking-[0.06em]">{hits.length} result{hits.length === 1 ? "" : "s"}</span>
          <span className="mono uppercase tracking-[0.06em]">↑↓ navigate · ↵ open · ESC close</span>
        </div>
      </div>
    </>
  );
}
