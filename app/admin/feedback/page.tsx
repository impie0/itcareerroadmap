import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin-auth";
import { prisma } from "@/lib/db";
import { targetToPublicUrl } from "@/lib/admin-targets";

export const dynamic = "force-dynamic";

export default async function AdminFeedbackPage() {
  if (!(await isAdmin())) redirect("/admin/login?from=/admin/feedback");

  const items = await prisma.feedback.findMany({
    orderBy: { createdAt: "desc" },
    take: 200,
    select: { id: true, target: true, kind: true, body: true, status: true, createdAt: true, ipHash: true },
  });

  return (
    <main className="mx-auto max-w-[1100px] px-5 py-8 lg:px-8 lg:py-10">
      <div className="mb-6">
        <Link href="/admin" className="mono text-[10.5px] uppercase tracking-[0.06em] text-[--color-text-mute] hover:text-[--color-accent]">← Admin</Link>
        <h1 className="mt-1 text-[22px] font-semibold" style={{ color: "var(--text)" }}>Feedback</h1>
        <p className="mt-1 text-[13px]" style={{ color: "var(--text-2)" }}>Helpful votes + free-text suggestions, most recent first.</p>
      </div>

      {items.length === 0 ? (
        <div className="rounded-md border p-4 text-[13px] italic" style={{ borderColor: "var(--border)", color: "var(--text-mute)" }}>
          No feedback yet.
        </div>
      ) : (
        <ul className="space-y-2">
          {items.map((f) => {
            const kindColor =
              f.kind === "helpful_yes" ? "var(--positive)" :
              f.kind === "helpful_no"  ? "var(--negative)" :
              f.kind === "suggestion"  ? "var(--accent)"   :
                                          "var(--text-mute)";
            return (
              <li key={f.id} className="rounded-md border p-4" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div className="mono text-[11px] uppercase tracking-[0.06em]" style={{ color: "var(--text-mute)" }}>
                    {f.target ? <TargetLink target={f.target} /> : "(no target)"}
                    {" · "}{new Date(f.createdAt).toISOString().slice(0, 16).replace("T", " ")}
                    <> · ip <code className="mono">{f.ipHash.slice(0, 10)}…</code></>
                  </div>
                  <span
                    className="mono rounded border px-2 py-0.5 text-[10.5px] uppercase tracking-[0.06em]"
                    style={{ color: kindColor, borderColor: "var(--border)" }}
                  >
                    {f.kind.replace("_", " ")}
                  </span>
                </div>
                {f.body && (
                  <p className="mt-2 whitespace-pre-wrap text-[13.5px]" style={{ color: "var(--text)" }}>{f.body}</p>
                )}
                <div className="mt-3 flex flex-wrap gap-2">
                  {f.status === "visible" ? (
                    <ActionForm id={f.id} action="hide" label="Hide" />
                  ) : (
                    <ActionForm id={f.id} action="show" label="Restore" />
                  )}
                  <ActionForm id={f.id} action="delete" label="Delete" destructive />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}

function TargetLink({ target }: { target: string }) {
  const url = targetToPublicUrl(target);
  if (!url) return <span>{target}</span>;
  return (
    <a href={url} target="_blank" rel="noreferrer noopener" className="hover:text-[--color-accent]" title="Open on public site ↗">
      {target} ↗
    </a>
  );
}

function ActionForm({ id, action, label, destructive }: { id: string; action: "hide" | "show" | "delete"; label: string; destructive?: boolean }) {
  return (
    <form method="POST" action={`/api/admin/feedback/${encodeURIComponent(id)}?action=${action}`}>
      <button
        type="submit"
        className="mono inline-flex h-8 items-center rounded border px-2.5 text-[11px] uppercase tracking-[0.06em]"
        style={{
          borderColor: destructive ? "color-mix(in srgb, var(--negative) 50%, transparent)" : "var(--border)",
          color: destructive ? "var(--negative)" : "var(--text-2)",
          background: destructive ? "color-mix(in srgb, var(--negative) 6%, transparent)" : "transparent",
        }}
      >
        {label}
      </button>
    </form>
  );
}
