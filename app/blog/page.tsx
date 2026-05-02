import Link from "next/link";
import { PageHeader } from "@/components/chrome/PageHeader";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function BlogIndexPage() {
  const posts = await prisma.blogPost.findMany({
    where: { draft: false },
    orderBy: { publishedAt: "desc" },
    select: { id: true, slug: true, title: true, excerpt: true, publishedAt: true, updatedAt: true },
  });

  return (
    <main className="mx-auto max-w-[860px] px-5 py-8 lg:px-8 lg:py-10">
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        title="Blog"
        subtitle={`${posts.length} post${posts.length === 1 ? "" : "s"}. Long-form on careers, certs, and transitions. Anonymous likes, comments, and feedback on every post.`}
      />

      {posts.length === 0 ? (
        <div className="rounded-lg border border-dashed border-[--color-border] p-8 text-center">
          <h4 className="mb-2 text-[11px] font-medium uppercase tracking-[0.08em] text-[--color-text-mute]">
            No posts yet
          </h4>
          <p className="text-[13.5px] text-[--color-text-2]">
            Posts are stored in the postgres <code className="mono rounded bg-[--color-surface] px-1">BlogPost</code> table.
            Author one by inserting a row manually, via a future admin UI, or via a seed script.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map((p) => (
            <Link
              key={p.id}
              href={`/blog/${p.slug}`}
              className="tap-target group block rounded-lg border-2 p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            >
              <div className="mono text-[10.5px] uppercase tracking-[0.08em] text-[--color-text-mute]">
                {new Date(p.publishedAt).toISOString().slice(0, 10)}
                {p.updatedAt && p.updatedAt > p.publishedAt && (
                  <> · updated {new Date(p.updatedAt).toISOString().slice(0, 10)}</>
                )}
              </div>
              <h2 className="mt-1 text-[18px] font-semibold leading-snug text-[--color-text] group-hover:text-[--color-accent]">
                {p.title}
              </h2>
              <p className="mt-2 text-[13.5px] leading-relaxed text-[--color-text-2]">
                {p.excerpt}
              </p>
              <span className="mt-3 inline-block text-[12px] text-[--color-text-mute] group-hover:text-[--color-accent]">
                Read post →
              </span>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
