import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin-auth";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminBlogList() {
  if (!(await isAdmin())) redirect("/admin/login?from=/admin/blog");

  const posts = await prisma.blogPost.findMany({
    orderBy: { publishedAt: "desc" },
    select: { id: true, slug: true, title: true, excerpt: true, draft: true, publishedAt: true, updatedAt: true },
  });

  return (
    <main className="mx-auto max-w-[1100px] px-5 py-8 lg:px-8 lg:py-10">
      <div className="mb-6 flex items-baseline justify-between">
        <div>
          <Link href="/admin" className="mono text-[10.5px] uppercase tracking-[0.06em] text-[--color-text-mute] hover:text-[--color-accent]">← Admin</Link>
          <h1 className="mt-1 text-[22px] font-semibold" style={{ color: "var(--text)" }}>Blog posts</h1>
          <p className="mt-1 text-[13px]" style={{ color: "var(--text-2)" }}>{posts.length} total</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="inline-flex h-10 items-center rounded-md bg-[--color-text] px-4 text-[13px] font-semibold text-[--color-bg] hover:bg-[--color-text-2]"
        >
          + New post
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-md border p-4 text-[13px] italic" style={{ borderColor: "var(--border)", color: "var(--text-mute)" }}>
          No posts yet — click "New post" to write one.
        </div>
      ) : (
        <ul className="space-y-2">
          {posts.map((p) => (
            <li key={p.id} className="rounded-md border p-4" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="mono text-[10.5px] uppercase tracking-[0.06em]" style={{ color: "var(--text-mute)" }}>
                    /blog/{p.slug} · published {new Date(p.publishedAt).toISOString().slice(0, 10)}
                    {p.updatedAt && p.updatedAt > p.publishedAt && <> · updated {new Date(p.updatedAt).toISOString().slice(0, 10)}</>}
                  </div>
                  <h3 className="mt-1 text-[15px] font-semibold" style={{ color: "var(--text)" }}>{p.title}</h3>
                  <p className="mt-1 truncate text-[13px]" style={{ color: "var(--text-2)" }}>{p.excerpt}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="mono rounded border px-2 py-0.5 text-[10.5px] uppercase tracking-[0.06em]"
                    style={{ color: p.draft ? "var(--warning)" : "var(--positive)", borderColor: "var(--border)" }}
                  >
                    {p.draft ? "draft" : "published"}
                  </span>
                  <Link
                    href={`/admin/blog/${encodeURIComponent(p.slug)}/edit`}
                    className="mono rounded border px-2.5 py-1 text-[11px] uppercase tracking-[0.06em]"
                    style={{ borderColor: "var(--border)", color: "var(--text-2)" }}
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
