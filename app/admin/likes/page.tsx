import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin-auth";
import { prisma } from "@/lib/db";
import { targetToPublicUrl } from "@/lib/admin-targets";

export const dynamic = "force-dynamic";

export default async function AdminLikesPage() {
  if (!(await isAdmin())) redirect("/admin/login?from=/admin/likes");

  const likes = await prisma.like.findMany({
    orderBy: { createdAt: "desc" },
    take: 500,
    select: { id: true, target: true, ipHash: true, createdAt: true },
  });

  return (
    <main className="mx-auto max-w-[1100px] px-5 py-8 lg:px-8 lg:py-10">
      <div className="mb-6">
        <Link href="/admin" className="mono text-[10.5px] uppercase tracking-[0.06em] text-[--color-text-mute] hover:text-[--color-accent]">← Admin</Link>
        <h1 className="mt-1 text-[22px] font-semibold" style={{ color: "var(--text)" }}>Likes</h1>
        <p className="mt-1 text-[13px]" style={{ color: "var(--text-2)" }}>{likes.length} likes, most recent first.</p>
      </div>

      {likes.length === 0 ? (
        <div className="rounded-md border p-4 text-[13px] italic" style={{ borderColor: "var(--border)", color: "var(--text-mute)" }}>
          No likes yet.
        </div>
      ) : (
        <ul className="space-y-2">
          {likes.map((l) => (
            <li key={l.id} className="rounded-md border p-3" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="mono text-[10.5px] uppercase tracking-[0.06em]" style={{ color: "var(--text-mute)" }}>
                    <TargetLink target={l.target} />
                    {" · "}{new Date(l.createdAt).toISOString().slice(0, 16).replace("T", " ")}
                    <> · ip <code className="mono">{l.ipHash.slice(0, 10)}…</code></>
                  </div>
                </div>
                <form method="POST" action={`/api/admin/likes/${encodeURIComponent(l.id)}`}>
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
