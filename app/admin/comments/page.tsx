import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin-auth";
import { prisma } from "@/lib/db";
import { targetToPublicUrl } from "@/lib/admin-targets";

export const dynamic = "force-dynamic";

export default async function AdminCommentsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  if (!(await isAdmin())) redirect("/admin/login?from=/admin/comments");
  const params = await searchParams;
  const status = params.status === "hidden" ? "hidden" : params.status === "all" ? undefined : "visible";

  const comments = await prisma.comment.findMany({
    where: status ? { status } : undefined,
    orderBy: { createdAt: "desc" },
    take: 200,
    select: { id: true, target: true, body: true, author: true, status: true, createdAt: true, ipHash: true },
  });

  return (
    <main className="mx-auto max-w-[1100px] px-5 py-8 lg:px-8 lg:py-10">
      <div className="mb-6 flex items-baseline justify-between">
        <div>
          <Link href="/admin" className="mono text-[10.5px] uppercase tracking-[0.06em] text-[--color-text-mute] hover:text-[--color-accent]">← Admin</Link>
          <h1 className="mt-1 text-[22px] font-semibold" style={{ color: "var(--text)" }}>Comments</h1>
        </div>
        <div className="flex gap-1.5">
          <FilterLink label="Visible" href="/admin/comments" on={!params.status || params.status === "visible"} />
          <FilterLink label="Hidden"  href="/admin/comments?status=hidden" on={params.status === "hidden"} />
          <FilterLink label="All"     href="/admin/comments?status=all"    on={params.status === "all"} />
        </div>
      </div>

      {comments.length === 0 ? (
        <div className="rounded-md border p-4 text-[13px] italic" style={{ borderColor: "var(--border)", color: "var(--text-mute)" }}>
          No comments.
        </div>
      ) : (
        <ul className="space-y-2">
          {comments.map((c) => (
            <li key={c.id} className="rounded-md border p-4" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div className="mono text-[11px] uppercase tracking-[0.06em]" style={{ color: "var(--text-mute)" }}>
                  <TargetLink target={c.target} />
                  {" · "}{new Date(c.createdAt).toISOString().slice(0, 16).replace("T", " ")}
                  {c.author && <> · <strong style={{ color: "var(--text-2)" }}>{c.author}</strong></>}
                  <> · ip <code className="mono">{c.ipHash.slice(0, 10)}…</code></>
                </div>
                <span
                  className="mono rounded border px-2 py-0.5 text-[10.5px] uppercase tracking-[0.06em]"
                  style={{
                    color: c.status === "visible" ? "var(--positive)" : "var(--negative)",
                    borderColor: "var(--border)",
                  }}
                >
                  {c.status}
                </span>
              </div>
              <p className="mt-2 whitespace-pre-wrap text-[13.5px]" style={{ color: "var(--text)" }}>{c.body}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {c.status === "visible" ? (
                  <ActionForm id={c.id} action="hide" label="Hide" />
                ) : (
                  <ActionForm id={c.id} action="show" label="Restore" />
                )}
                <ActionForm id={c.id} action="delete" label="Delete" destructive />
              </div>
            </li>
          ))}
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

function FilterLink({ label, href, on }: { label: string; href: string; on: boolean }) {
  return (
    <Link
      href={href}
      className={`mono rounded border px-2.5 py-1 text-[11px] uppercase tracking-[0.06em] ${on ? "" : "hover:border-[--color-accent]"}`}
      style={{
        borderColor: on ? "var(--accent)" : "var(--border)",
        color: on ? "var(--accent)" : "var(--text-2)",
        background: on ? "color-mix(in srgb, var(--accent) 8%, transparent)" : "transparent",
      }}
    >
      {label}
    </Link>
  );
}

function ActionForm({ id, action, label, destructive }: { id: string; action: "hide" | "show" | "delete"; label: string; destructive?: boolean }) {
  return (
    <form method="POST" action={`/api/admin/comments/${encodeURIComponent(id)}?action=${action}`}>
      <button
        type="submit"
        className="mono inline-flex h-8 items-center rounded border px-2.5 text-[11px] uppercase tracking-[0.06em] transition-colors"
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
