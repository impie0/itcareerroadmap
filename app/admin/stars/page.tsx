import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin-auth";
import { prisma } from "@/lib/db";
import { targetToPublicUrl } from "@/lib/admin-targets";

export const dynamic = "force-dynamic";

export default async function AdminStarsPage() {
  if (!(await isAdmin())) redirect("/admin/login?from=/admin/stars");

  const stars = await prisma.star.findMany({
    orderBy: { createdAt: "desc" },
    take: 500,
    select: { id: true, target: true, rating: true, ipHash: true, createdAt: true, updatedAt: true },
  });

  return (
    <main className="mx-auto max-w-[1100px] px-5 py-8 lg:px-8 lg:py-10">
      <div className="mb-6">
        <Link href="/admin" className="mono text-[10.5px] uppercase tracking-[0.06em] text-[--color-text-mute] hover:text-[--color-accent]">← Admin</Link>
        <h1 className="mt-1 text-[22px] font-semibold" style={{ color: "var(--text)" }}>Star ratings</h1>
        <p className="mt-1 text-[13px]" style={{ color: "var(--text-2)" }}>{stars.length} ratings, most recent first.</p>
      </div>

      {stars.length === 0 ? (
        <div className="rounded-md border p-4 text-[13px] italic" style={{ borderColor: "var(--border)", color: "var(--text-mute)" }}>
          No ratings yet.
        </div>
      ) : (
        <ul className="space-y-2">
          {stars.map((s) => (
            <li key={s.id} className="rounded-md border p-3" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="mono text-[10.5px] uppercase tracking-[0.06em]" style={{ color: "var(--text-mute)" }}>
                    <TargetLink target={s.target} />
                    {" · "}{new Date(s.createdAt).toISOString().slice(0, 16).replace("T", " ")}
                    <> · ip <code className="mono">{s.ipHash.slice(0, 10)}…</code></>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="mono text-[14px] tabular-nums" style={{ color: "var(--warning)" }}>
                    {"★".repeat(s.rating)}{"☆".repeat(5 - s.rating)}
                  </span>
                  <span className="mono text-[11px]" style={{ color: "var(--text-2)" }}>
                    {s.rating}/5
                  </span>
                  <form method="POST" action={`/api/admin/stars/${encodeURIComponent(s.id)}`}>
                    <button
                      type="submit"
                      className="mono inline-flex h-8 items-center rounded border px-2.5 text-[11px] uppercase tracking-[0.06em]"
                      style={{
                        borderColor: "color-mix(in srgb, var(--negative) 50%, transparent)",
                        color: "var(--negative)",
                        background: "color-mix(in srgb, var(--negative) 6%, transparent)",
                      }}
                    >
                      Delete
                    </button>
                  </form>
                </div>
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
