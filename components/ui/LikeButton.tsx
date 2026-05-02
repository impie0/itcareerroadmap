"use client";

import { useEffect, useState } from "react";

export function LikeButton({ target }: { target: string }) {
  const [count, setCount] = useState<number | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    fetch(`/api/likes?target=${encodeURIComponent(target)}`)
      .then((r) => r.json())
      .then((d) => setCount(d.count ?? 0))
      .catch(() => setCount(0));
  }, [target]);

  async function toggle() {
    if (busy) return;
    setBusy(true);
    try {
      const r = await fetch("/api/likes", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ target }),
      });
      const d = await r.json();
      if (typeof d.count === "number") setCount(d.count);
    } finally {
      setBusy(false);
    }
  }

  return (
    <button
      onClick={toggle}
      disabled={busy}
      className="tap-target mono inline-flex h-9 items-center gap-2 rounded-md border border-[--color-border] bg-[--color-surface] px-3 text-[12px] uppercase tracking-[0.08em] text-[--color-text-2] hover:border-[--color-accent] hover:text-[--color-accent] disabled:opacity-50"
      aria-label={`Like — currently ${count ?? "…"}`}
    >
      <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
        <path d="M8 1l1.94 4.36L14.5 6l-3.5 3.41.83 4.84L8 11.94l-3.83 2.31.83-4.84L1.5 6l4.56-.64L8 1z" />
      </svg>
      <span>{count ?? "—"}</span>
    </button>
  );
}
