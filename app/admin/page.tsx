import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin-auth";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  if (!(await isAdmin())) redirect("/admin/login?from=/admin");

  const [comments, likes, stars, feedback, posts, recentComments] = await Promise.all([
    prisma.comment.count(),
    prisma.like.count(),
    prisma.star.count(),
    prisma.feedback.count(),
    prisma.blogPost.count(),
    prisma.comment.findMany({
      where: { status: "visible" },
      orderBy: { createdAt: "desc" },
      take: 5,
      select: { id: true, target: true, body: true, author: true, createdAt: true },
    }),
  ]);

  return (
    <main className="mx-auto max-w-[920px] px-5 py-8 lg:px-8 lg:py-10">
      <h1 className="mb-6 text-[22px] font-semibold" style={{ color: "var(--text)" }}>Dashboard</h1>

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <Stat label="Comments"   value={comments}  href="/admin/comments" />
        <Stat label="Feedback"   value={feedback}  href="/admin/feedback" />
        <Stat label="Posts"      value={posts}     href="/admin/blog" />
        <Stat label="Stars"      value={stars}     href="/admin/stars" />
        <Stat label="Likes"      value={likes}     href="/admin/likes" />
        <Stat label="Audit log"  value={null}      href="/admin/audit" />
        <Stat label="Unverified" value={null}      href="/admin/unverified" />
      </section>

      <section className="mt-10">
        <h2 className="mb-3 text-[15px] font-semibold" style={{ color: "var(--text)" }}>Recent comments</h2>
        {recentComments.length === 0 ? (
          <div className="rounded-md border p-4 text-[13px] italic" style={{ borderColor: "var(--border)", color: "var(--text-mute)" }}>
            No comments yet.
          </div>
        ) : (
          <ul className="space-y-2">
            {recentComments.map((c) => (
              <li key={c.id} className="rounded-md border p-3" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                <div className="mono text-[10.5px] uppercase tracking-[0.06em]" style={{ color: "var(--text-mute)" }}>
                  {c.target} · {new Date(c.createdAt).toISOString().slice(0, 16).replace("T", " ")}
                  {c.author && <> · {c.author}</>}
                </div>
                <p className="mt-1 text-[13.5px]" style={{ color: "var(--text)" }}>{c.body}</p>
              </li>
            ))}
          </ul>
        )}
        <Link href="/admin/comments" className="mt-3 inline-block text-[13px] text-[--color-accent] hover:underline">
          All comments →
        </Link>
      </section>
    </main>
  );
}

function Stat({ label, value, href }: { label: string; value: number | null; href?: string }) {
  const inner = (
    <>
      <div className="mono text-[10.5px] uppercase tracking-[0.08em]" style={{ color: "var(--text-mute)" }}>
        {label}
      </div>
      <div className="mt-1 text-[24px] font-semibold tabular-nums" style={{ color: "var(--text)" }}>
        {value === null ? "→" : value}
      </div>
    </>
  );
  if (href) {
    return (
      <Link href={href} className="rounded-md border p-3 transition-colors hover:border-[--color-accent]" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
        {inner}
      </Link>
    );
  }
  return (
    <div className="rounded-md border p-3" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
      {inner}
    </div>
  );
}
