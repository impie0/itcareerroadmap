import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin-auth";
import { prisma } from "@/lib/db";
import { targetToPublicUrl } from "@/lib/admin-targets";

export const dynamic = "force-dynamic";

const ACTION_COLOR: Record<string, string> = {
  "login.success": "var(--positive)",
  "login.fail":    "var(--negative)",
  "comment.delete": "var(--negative)",
  "comment.hide":   "var(--warning)",
  "comment.show":   "var(--positive)",
  "feedback.delete":"var(--negative)",
  "feedback.hide":  "var(--warning)",
  "feedback.show":  "var(--positive)",
  "star.delete":    "var(--negative)",
  "like.delete":    "var(--negative)",
  "blog.create":    "var(--accent)",
  "blog.update":    "var(--accent)",
  "blog.delete":    "var(--negative)",
};

export default async function AdminAuditPage({
  searchParams,
}: {
  searchParams: Promise<{ action?: string }>;
}) {
  if (!(await isAdmin())) redirect("/admin/login?from=/admin/audit");
  const params = await searchParams;

  const items = await prisma.adminAudit.findMany({
    where: params.action ? { action: params.action } : undefined,
    orderBy: { createdAt: "desc" },
    take: 500,
    select: { id: true, action: true, target: true, meta: true, ipHash: true, createdAt: true },
  });

  // Distinct actions for the filter row
  const allActions = await prisma.adminAudit.findMany({
    distinct: ["action"],
    select: { action: true },
    orderBy: { action: "asc" },
  });

  return (
    <main className="mx-auto max-w-[1100px] px-5 py-8 lg:px-8 lg:py-10">
      <div className="mb-6">
        <Link href="/admin" className="mono text-[10.5px] uppercase tracking-[0.06em] text-[--color-text-mute] hover:text-[--color-accent]">← Admin</Link>
        <h1 className="mt-1 text-[22px] font-semibold" style={{ color: "var(--text)" }}>Audit log</h1>
        <p className="mt-1 text-[13px]" style={{ color: "var(--text-2)" }}>
          {items.length} most recent admin actions{params.action && <> · filtered to <code className="mono">{params.action}</code></>}.
        </p>
      </div>

      {allActions.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-1.5">
          <FilterChip label="All" href="/admin/audit" on={!params.action} />
          {allActions.map((a) => (
            <FilterChip key={a.action} label={a.action} href={`/admin/audit?action=${encodeURIComponent(a.action)}`} on={params.action === a.action} />
          ))}
        </div>
      )}

      {items.length === 0 ? (
        <div className="rounded-md border p-4 text-[13px] italic" style={{ borderColor: "var(--border)", color: "var(--text-mute)" }}>
          No audit entries yet.
        </div>
      ) : (
        <ul className="space-y-1.5">
          {items.map((a) => {
            const color = ACTION_COLOR[a.action] ?? "var(--text-mute)";
            const url = a.target ? targetToPublicUrl(a.target) : null;
            const meta = a.meta ? (() => { try { return JSON.parse(a.meta); } catch { return null; } })() : null;
            return (
              <li key={a.id} className="rounded-md border p-3" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="mono rounded border px-2 py-0.5 text-[10.5px] uppercase tracking-[0.06em]" style={{ color, borderColor: "var(--border)" }}>
                    {a.action}
                  </span>
                  <span className="mono text-[11px]" style={{ color: "var(--text-mute)" }}>
                    {new Date(a.createdAt).toISOString().slice(0, 19).replace("T", " ")}
                  </span>
                  {a.target && (
                    <span className="mono text-[11px]" style={{ color: "var(--text-2)" }}>
                      target: {url ? (
                        <a href={url} target="_blank" rel="noreferrer noopener" className="hover:text-[--color-accent]">{a.target} ↗</a>
                      ) : a.target}
                    </span>
                  )}
                  <span className="mono text-[11px]" style={{ color: "var(--text-mute)" }}>
                    ip <code className="mono">{a.ipHash.slice(0, 10)}…</code>
                  </span>
                </div>
                {meta && (
                  <pre className="mono mt-2 overflow-x-auto rounded p-2 text-[11.5px]" style={{ background: "var(--bg)", color: "var(--text-2)" }}>
                    {JSON.stringify(meta, null, 2)}
                  </pre>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}

function FilterChip({ label, href, on }: { label: string; href: string; on: boolean }) {
  return (
    <Link
      href={href}
      className="mono rounded border px-2.5 py-1 text-[10.5px] uppercase tracking-[0.06em]"
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
