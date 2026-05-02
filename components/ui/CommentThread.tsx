"use client";

import { useEffect, useState } from "react";

type Comment = {
  id: string;
  body: string;
  author: string | null;
  createdAt: string;
};

export function CommentThread({ target }: { target: string }) {
  const [comments, setComments] = useState<Comment[] | null>(null);
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    const r = await fetch(`/api/comments?target=${encodeURIComponent(target)}`);
    const d = await r.json();
    setComments(d.comments ?? []);
  }

  useEffect(() => {
    load();
  }, [target]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!body.trim() || busy) return;
    setBusy(true);
    setError(null);
    try {
      const r = await fetch("/api/comments", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ target, body, author: author || undefined }),
      });
      if (!r.ok) {
        const d = await r.json().catch(() => ({}));
        setError(d.error ?? `error ${r.status}`);
        return;
      }
      setBody("");
      await load();
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="mt-8">
      <div className="eyebrow mb-3">Comments ({comments?.length ?? "—"})</div>

      <form
        onSubmit={submit}
        className="mb-4 space-y-2 rounded-md border border-[--color-border] bg-[--color-surface] p-3"
      >
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Name (optional)"
          maxLength={60}
          className="tap-target mono h-9 w-full rounded-md border border-[--color-border] bg-[--color-bg] px-3 text-[13px] placeholder:text-[--color-text-mute] focus:border-[--color-accent] focus:outline-none"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Leave a comment…"
          maxLength={2000}
          rows={3}
          className="tap-target mono w-full resize-y rounded-md border border-[--color-border] bg-[--color-bg] px-3 py-2 text-[13px] placeholder:text-[--color-text-mute] focus:border-[--color-accent] focus:outline-none"
        />
        <div className="flex items-center justify-between">
          <span className="mono text-[10.5px] uppercase tracking-[0.08em] text-[--color-text-mute]">
            {body.length}/2000
          </span>
          <button
            type="submit"
            disabled={busy || !body.trim()}
            className="tap-target mono h-9 rounded-md border border-[--color-accent] bg-[--color-accent] px-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-white hover:bg-[--color-accent-2] disabled:opacity-40"
          >
            Post
          </button>
        </div>
        {error ? (
          <div className="mono text-[12px] text-[--color-negative]">Error: {error}</div>
        ) : null}
      </form>

      <ul className="space-y-2">
        {(comments ?? []).map((c) => (
          <li
            key={c.id}
            className="rounded-md border border-[--color-border] bg-[--color-surface] p-3"
          >
            <div className="mono mb-1 text-[10.5px] uppercase tracking-[0.08em] text-[--color-text-mute]">
              {c.author ?? "anon"} · {new Date(c.createdAt).toLocaleString()}
            </div>
            <div className="whitespace-pre-wrap text-[13.5px] text-[--color-text]">{c.body}</div>
          </li>
        ))}
        {comments && comments.length === 0 ? (
          <li className="mono text-[12px] text-[--color-text-mute]">No comments yet.</li>
        ) : null}
      </ul>
    </section>
  );
}
