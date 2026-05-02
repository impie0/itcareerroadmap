"use client";

import { useEffect, type ReactNode } from "react";

export function Drawer({
  open,
  onClose,
  title,
  accentColor,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  accentColor?: string;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      <button aria-label="Close drawer" onClick={onClose} className="drawer-scrim" />
      <aside
        role="dialog"
        aria-modal="true"
        className="fixed right-0 top-0 z-50 flex h-full w-full max-w-[480px] flex-col border-l shadow-2xl"
        style={{
          background: "var(--bg)",
          borderColor: "var(--border)",
          color: "var(--text)",
        }}
      >
        <div
          className="relative flex h-14 flex-shrink-0 items-center justify-between border-b px-5"
          style={{
            background: "var(--bg)",
            borderColor: "var(--border)",
          }}
        >
          {accentColor && (
            <span
              aria-hidden
              className="absolute left-0 top-0 bottom-0 w-[3px]"
              style={{ background: accentColor }}
            />
          )}
          <div
            className="mono truncate text-[11px] uppercase tracking-[0.08em]"
            style={{ color: "var(--text-mute)" }}
          >
            {title ?? "Detail"}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="tap-target inline-flex h-8 w-8 items-center justify-center rounded-md border"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-2)",
              background: "var(--bg)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
              <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
        <div
          className="flex-1 overflow-y-auto px-5 py-5"
          style={{ background: "var(--bg)" }}
        >
          {children}
        </div>
      </aside>
    </>
  );
}
