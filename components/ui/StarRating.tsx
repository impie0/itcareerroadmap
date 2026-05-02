"use client";

import { useEffect, useState } from "react";

export function StarRating({ target, label = "Rate" }: { target: string; label?: string }) {
  const [count, setCount] = useState<number | null>(null);
  const [average, setAverage] = useState<number>(0);
  const [yourRating, setYourRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    fetch(`/api/stars?target=${encodeURIComponent(target)}`)
      .then((r) => r.json())
      .then((d) => {
        setCount(d.count ?? 0);
        setAverage(d.average ?? 0);
      })
      .catch(() => {
        setCount(0);
        setAverage(0);
      });
  }, [target]);

  async function submit(rating: number) {
    if (busy) return;
    setBusy(true);
    try {
      const r = await fetch("/api/stars", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ target, rating }),
      });
      const d = await r.json();
      if (typeof d.count === "number") setCount(d.count);
      if (typeof d.average === "number") setAverage(d.average);
      if (typeof d.yourRating === "number") setYourRating(d.yourRating);
    } finally {
      setBusy(false);
    }
  }

  const display = hover ?? yourRating ?? Math.round(average);

  return (
    <div className="flex items-center gap-3">
      <span className="mono text-[10.5px] uppercase tracking-[0.08em] text-[--color-text-mute]">
        {label}
      </span>
      <div className="flex items-center gap-0.5" onMouseLeave={() => setHover(null)}>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => submit(n)}
            onMouseEnter={() => setHover(n)}
            disabled={busy}
            aria-label={`${n} star${n === 1 ? "" : "s"}`}
            className="tap-target px-0.5 transition-transform hover:scale-110 disabled:opacity-50"
          >
            <svg width="20" height="20" viewBox="0 0 16 16" fill={n <= display ? "var(--warning)" : "transparent"} stroke={n <= display ? "var(--warning)" : "var(--text-mute)"} strokeWidth="1.4" aria-hidden>
              <path d="M8 1.3l1.94 4.36L14.5 6.3l-3.5 3.41.83 4.84L8 12.24l-3.83 2.31.83-4.84L1.5 6.3l4.56-.64L8 1.3z" />
            </svg>
          </button>
        ))}
      </div>
      <span className="mono text-[11px] tabular-nums text-[--color-text-2]">
        {count === null ? "…" : count === 0 ? "no ratings" : `${average.toFixed(1)} · ${count} rating${count === 1 ? "" : "s"}`}
      </span>
    </div>
  );
}
