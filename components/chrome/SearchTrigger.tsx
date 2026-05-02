"use client";

import { useEffect, useState } from "react";
import { CommandPalette } from "./CommandPalette";
import type { SearchHit } from "@/lib/search-index";

export function SearchTrigger({ index }: { index: SearchHit[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="tap-target group flex h-9 max-w-[480px] flex-1 items-center gap-2 rounded-lg border border-[--color-border] bg-[--color-surface] px-3 text-[13px] text-[--color-text-mute] hover:border-[--color-border-strong]"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="7" cy="7" r="5" />
          <path d="m11 11 3 3" />
        </svg>
        <span className="truncate">Search certs, roles, guides…</span>
        <span className="mono ml-auto rounded border border-[--color-border] bg-[--color-bg] px-1.5 py-px text-[11px] text-[--color-text-mute]">
          ⌘ K
        </span>
      </button>
      <CommandPalette open={open} onClose={() => setOpen(false)} index={index} />
    </>
  );
}
