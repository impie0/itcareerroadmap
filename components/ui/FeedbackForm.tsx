"use client";

import { useEffect, useState } from "react";

export function FeedbackForm({ target, label = "Was this helpful?" }: { target: string; label?: string }) {
  const [counts, setCounts] = useState<{ yes: number; no: number } | null>(null);
  const [voted, setVoted] = useState<"helpful_yes" | "helpful_no" | null>(null);
  const [showSuggest, setShowSuggest] = useState(false);
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    fetch(`/api/feedback?target=${encodeURIComponent(target)}`)
      .then((r) => r.json())
      .then((d) => setCounts({ yes: d.helpfulYes ?? 0, no: d.helpfulNo ?? 0 }))
      .catch(() => setCounts({ yes: 0, no: 0 }));
  }, [target]);

  async function vote(kind: "helpful_yes" | "helpful_no") {
    if (busy || voted) return;
    setBusy(true);
    try {
      await fetch("/api/feedback", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ target, kind }),
      });
      setVoted(kind);
      setCounts((c) => c && { yes: c.yes + (kind === "helpful_yes" ? 1 : 0), no: c.no + (kind === "helpful_no" ? 1 : 0) });
      if (kind === "helpful_no") setShowSuggest(true);
    } finally {
      setBusy(false);
    }
  }

  async function submitSuggestion() {
    if (busy || !text.trim()) return;
    setBusy(true);
    try {
      await fetch("/api/feedback", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ target, kind: "suggestion", body: text.trim() }),
      });
      setSubmitted(true);
      setText("");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="rounded-md border p-4" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-[13px] font-medium" style={{ color: "var(--text)" }}>
          {label}
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => vote("helpful_yes")}
            disabled={busy || !!voted}
            className="tap-target inline-flex h-9 items-center gap-1.5 rounded-md border px-3 text-[12.5px] font-medium transition-colors disabled:opacity-60"
            style={{
              borderColor: voted === "helpful_yes" ? "var(--positive)" : "var(--border)",
              color: voted === "helpful_yes" ? "var(--positive)" : "var(--text-2)",
              background: voted === "helpful_yes" ? "color-mix(in srgb, var(--positive) 12%, transparent)" : "var(--bg)",
            }}
          >
            👍 Yes <span className="mono text-[11px] opacity-75">{counts?.yes ?? "…"}</span>
          </button>
          <button
            type="button"
            onClick={() => vote("helpful_no")}
            disabled={busy || !!voted}
            className="tap-target inline-flex h-9 items-center gap-1.5 rounded-md border px-3 text-[12.5px] font-medium transition-colors disabled:opacity-60"
            style={{
              borderColor: voted === "helpful_no" ? "var(--negative)" : "var(--border)",
              color: voted === "helpful_no" ? "var(--negative)" : "var(--text-2)",
              background: voted === "helpful_no" ? "color-mix(in srgb, var(--negative) 12%, transparent)" : "var(--bg)",
            }}
          >
            👎 No <span className="mono text-[11px] opacity-75">{counts?.no ?? "…"}</span>
          </button>
        </div>
      </div>

      {(showSuggest || voted === "helpful_no") && !submitted && (
        <div className="mt-3 border-t pt-3" style={{ borderColor: "var(--border)" }}>
          <label className="mono mb-1.5 block text-[10.5px] uppercase tracking-[0.08em] text-[--color-text-mute]">
            What's missing or wrong? (optional)
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
            maxLength={2000}
            placeholder="Specifics help — broken link, wrong cert code, missing info, etc."
            className="w-full resize-y rounded-md border p-2 text-[13px]"
            style={{ borderColor: "var(--border)", background: "var(--bg)", color: "var(--text)" }}
          />
          <div className="mt-2 flex items-center justify-between">
            <span className="mono text-[10.5px] text-[--color-text-mute]">{text.length}/2000</span>
            <button
              type="button"
              onClick={submitSuggestion}
              disabled={busy || !text.trim()}
              className="tap-target inline-flex h-9 items-center rounded-md bg-[--color-text] px-3 text-[12.5px] font-semibold text-[--color-bg] transition-colors hover:bg-[--color-text-2] disabled:opacity-50"
            >
              Send suggestion
            </button>
          </div>
        </div>
      )}

      {submitted && (
        <div className="mt-3 border-t pt-3 text-[12.5px]" style={{ borderColor: "var(--border)", color: "var(--positive)" }}>
          ✓ Thanks — feedback recorded.
        </div>
      )}
    </div>
  );
}
