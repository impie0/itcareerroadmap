"use client";

import { useEffect, useRef, useState } from "react";

/*
  Site-wide "💡 Suggest" button. Click → modal with a textarea. POSTs to
  /api/feedback with kind="suggestion" and target="general" (so admin can
  filter site-wide suggestions vs page-specific feedback). Anonymous, IP-hashed,
  rate-limited (10/min via the existing feedback endpoint).
*/

export function SuggestionButton() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const taRef = useRef<HTMLTextAreaElement | null>(null);

  // Focus the textarea when the modal opens; close on Escape
  useEffect(() => {
    if (!open) return;
    setTimeout(() => taRef.current?.focus(), 30);
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function close() {
    setOpen(false);
    // Reset state after the modal animates out
    setTimeout(() => {
      setText("");
      setDone(false);
      setError(null);
    }, 200);
  }

  async function submit() {
    if (busy || !text.trim()) return;
    setBusy(true);
    setError(null);
    try {
      const r = await fetch("/api/feedback", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ target: "general", kind: "suggestion", body: text.trim() }),
      });
      if (!r.ok) {
        const d = await r.json().catch(() => ({}));
        if (r.status === 429) setError("Slow down — too many suggestions in a short time.");
        else if (r.status === 422) setError("That message can't be accepted.");
        else setError(d.error ?? `Error ${r.status}`);
        return;
      }
      setDone(true);
      // Auto-close after a moment
      setTimeout(close, 1500);
    } catch {
      setError("Network error — try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        title="Suggest something"
        className="tap-target mono inline-flex h-9 items-center gap-1.5 rounded-lg border px-3 text-[12px] uppercase tracking-[0.06em]"
        style={{ borderColor: "var(--border)", background: "var(--surface)", color: "var(--text-2)" }}
      >
        <span aria-hidden>💡</span>
        <span className="hidden sm:inline">Suggest</span>
      </button>

      {open && (
        <>
          <button
            aria-label="Close"
            onClick={close}
            className="drawer-scrim"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="sugg-title"
            className="fixed left-1/2 top-[14vh] z-50 w-[min(560px,92vw)] -translate-x-1/2 overflow-hidden rounded-xl border shadow-2xl"
            style={{ background: "var(--bg)", borderColor: "var(--border)", color: "var(--text)" }}
          >
            <div
              className="flex h-12 items-center gap-3 border-b px-4"
              style={{ borderColor: "var(--border)", background: "var(--bg)" }}
            >
              <span aria-hidden>💡</span>
              <h2 id="sugg-title" className="text-[14px] font-semibold">Send a suggestion</h2>
              <button
                onClick={close}
                aria-label="Close"
                className="mono ml-auto rounded border px-1.5 py-px text-[10.5px]"
                style={{ borderColor: "var(--border)", color: "var(--text-mute)" }}
              >
                ESC
              </button>
            </div>

            <div className="p-4" style={{ background: "var(--bg)" }}>
              {done ? (
                <div className="py-8 text-center">
                  <div className="text-[28px]" aria-hidden>✓</div>
                  <p className="mt-2 text-[14px]" style={{ color: "var(--positive)" }}>
                    Thanks — sent!
                  </p>
                </div>
              ) : (
                <>
                  <p className="mb-3 text-[12.5px]" style={{ color: "var(--text-2)" }}>
                    Got an idea, request, or correction? Anonymous — no account needed.
                    The site owner reads everything that comes through here.
                  </p>
                  <textarea
                    ref={taRef}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows={5}
                    maxLength={2000}
                    placeholder="What would you like to see? Tell us what's missing, broken, or worth adding."
                    className="w-full resize-y rounded-md border p-3 text-[13.5px]"
                    style={{ borderColor: "var(--border)", background: "var(--surface)", color: "var(--text)" }}
                  />
                  {error && (
                    <div className="mt-2 text-[12.5px]" style={{ color: "var(--negative)" }}>
                      {error}
                    </div>
                  )}
                  <div className="mt-3 flex items-center justify-between">
                    <span className="mono text-[10.5px]" style={{ color: "var(--text-mute)" }}>
                      {text.length}/2000
                    </span>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={close}
                        className="mono inline-flex h-9 items-center rounded border px-3 text-[11px] uppercase tracking-[0.06em]"
                        style={{ borderColor: "var(--border)", color: "var(--text-2)" }}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={submit}
                        disabled={busy || !text.trim()}
                        className="inline-flex h-9 items-center rounded-md bg-[--color-text] px-4 text-[13px] font-semibold text-[--color-bg] hover:bg-[--color-text-2] disabled:opacity-50"
                      >
                        {busy ? "Sending…" : "Send"}
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
