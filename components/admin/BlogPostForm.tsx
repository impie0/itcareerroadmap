"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Initial = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  draft: boolean;
};

type Tab = "edit" | "preview" | "split";

const EMPTY: Initial = { slug: "", title: "", excerpt: "", body: "", draft: true };

export function BlogPostForm({ initial }: { initial?: Initial }) {
  const router = useRouter();
  const editing = !!initial;
  const originalSlug = initial?.slug;
  const [form, setForm] = useState<Initial>(initial ?? EMPTY);
  const [tab, setTab] = useState<Tab>("edit");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function set<K extends keyof Initial>(k: K, v: Initial[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function save() {
    setBusy(true);
    setError(null);
    try {
      const url = editing
        ? `/api/admin/blog/${encodeURIComponent(originalSlug!)}`
        : `/api/admin/blog`;
      const r = await fetch(url, {
        method: editing ? "PUT" : "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!r.ok) {
        const d = await r.json().catch(() => ({}));
        setError(d.error ?? `${r.status}`);
        return;
      }
      router.push("/admin/blog");
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  async function remove() {
    if (!editing) return;
    if (!confirm(`Delete post "${form.title}" permanently?`)) return;
    setBusy(true);
    try {
      const r = await fetch(`/api/admin/blog/${encodeURIComponent(originalSlug!)}`, { method: "DELETE" });
      if (!r.ok) {
        const d = await r.json().catch(() => ({}));
        setError(d.error ?? `${r.status}`);
        return;
      }
      router.push("/admin/blog");
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mt-6 space-y-4 rounded-md border p-5" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
      <Field label="Slug" hint="lowercase-with-dashes; appears in /blog/{slug}">
        <input
          type="text"
          value={form.slug}
          onChange={(e) => set("slug", e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-"))}
          className="w-full rounded-md border p-2 text-[13.5px]"
          style={{ borderColor: "var(--border)", background: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-mono)" }}
        />
      </Field>

      <Field label="Title">
        <input
          type="text"
          value={form.title}
          onChange={(e) => set("title", e.target.value)}
          className="w-full rounded-md border p-2 text-[15px]"
          style={{ borderColor: "var(--border)", background: "var(--bg)", color: "var(--text)" }}
        />
      </Field>

      <Field label="Excerpt" hint="1–2 sentences shown on the index page">
        <textarea
          value={form.excerpt}
          onChange={(e) => set("excerpt", e.target.value)}
          rows={2}
          className="w-full resize-y rounded-md border p-2 text-[13.5px]"
          style={{ borderColor: "var(--border)", background: "var(--bg)", color: "var(--text)" }}
        />
      </Field>

      <Field label="Body (markdown)">
        <div className="mb-2 flex gap-1">
          <TabBtn label="Edit"    on={tab === "edit"}    onClick={() => setTab("edit")} />
          <TabBtn label="Preview" on={tab === "preview"} onClick={() => setTab("preview")} />
          <TabBtn label="Split"   on={tab === "split"}   onClick={() => setTab("split")} />
        </div>
        {tab === "edit" && (
          <textarea
            value={form.body}
            onChange={(e) => set("body", e.target.value)}
            rows={22}
            className="w-full resize-y rounded-md border p-3 text-[13px]"
            style={{ borderColor: "var(--border)", background: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-mono)" }}
          />
        )}
        {tab === "preview" && (
          <div
            className="wiki-prose min-h-[400px] rounded-md border p-5"
            style={{ borderColor: "var(--border)", background: "var(--bg)" }}
          >
            {form.body.trim() ? (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{form.body}</ReactMarkdown>
            ) : (
              <p className="italic text-[13px]" style={{ color: "var(--text-mute)" }}>
                Body is empty. Switch to Edit and write some markdown.
              </p>
            )}
          </div>
        )}
        {tab === "split" && (
          <div className="grid gap-3 lg:grid-cols-2">
            <textarea
              value={form.body}
              onChange={(e) => set("body", e.target.value)}
              rows={22}
              className="w-full resize-y rounded-md border p-3 text-[13px]"
              style={{ borderColor: "var(--border)", background: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-mono)" }}
            />
            <div
              className="wiki-prose overflow-y-auto rounded-md border p-5"
              style={{ borderColor: "var(--border)", background: "var(--bg)", maxHeight: "600px" }}
            >
              {form.body.trim() ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{form.body}</ReactMarkdown>
              ) : (
                <p className="italic text-[13px]" style={{ color: "var(--text-mute)" }}>
                  Preview shows here as you type.
                </p>
              )}
            </div>
          </div>
        )}
      </Field>

      <label className="flex items-center gap-2 text-[13px]" style={{ color: "var(--text)" }}>
        <input
          type="checkbox"
          checked={form.draft}
          onChange={(e) => set("draft", e.target.checked)}
        />
        Draft (hidden from public /blog list)
      </label>

      {error && (
        <div className="rounded border p-2 text-[13px]" style={{ borderColor: "color-mix(in srgb, var(--negative) 50%, transparent)", color: "var(--negative)", background: "color-mix(in srgb, var(--negative) 8%, transparent)" }}>
          {error}
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3 border-t pt-4" style={{ borderColor: "var(--border)" }}>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={save}
            disabled={busy || !form.slug || !form.title || !form.body}
            className="inline-flex h-10 items-center rounded-md bg-[--color-text] px-4 text-[13px] font-semibold text-[--color-bg] hover:bg-[--color-text-2] disabled:opacity-50"
          >
            {editing ? "Save changes" : "Create post"}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="inline-flex h-10 items-center rounded-md border px-4 text-[13px]"
            style={{ borderColor: "var(--border)", color: "var(--text-2)" }}
          >
            Cancel
          </button>
        </div>
        {editing && (
          <button
            type="button"
            onClick={remove}
            disabled={busy}
            className="inline-flex h-10 items-center rounded-md border px-4 text-[13px]"
            style={{
              borderColor: "color-mix(in srgb, var(--negative) 50%, transparent)",
              color: "var(--negative)",
              background: "color-mix(in srgb, var(--negative) 6%, transparent)",
            }}
          >
            Delete post
          </button>
        )}
      </div>
    </div>
  );
}

function TabBtn({ label, on, onClick }: { label: string; on: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mono inline-flex h-7 items-center rounded-t border px-3 text-[10.5px] uppercase tracking-[0.06em]"
      style={{
        borderColor: on ? "var(--accent)" : "var(--border)",
        color: on ? "var(--accent)" : "var(--text-2)",
        background: on ? "color-mix(in srgb, var(--accent) 10%, transparent)" : "transparent",
        borderBottomColor: on ? "transparent" : "var(--border)",
      }}
    >
      {label}
    </button>
  );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mono mb-1 flex items-baseline gap-2 text-[10.5px] uppercase tracking-[0.08em] text-[--color-text-mute]">
        {label}
        {hint && <span className="normal-case tracking-normal text-[--color-text-mute]" style={{ fontSize: "11px" }}>· {hint}</span>}
      </div>
      {children}
    </div>
  );
}
