import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin-auth";
import { prisma } from "@/lib/db";
import { BlogPostForm } from "@/components/admin/BlogPostForm";

export const dynamic = "force-dynamic";

export default async function AdminBlogEdit({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  if (!(await isAdmin())) {
    const { slug } = await params;
    redirect(`/admin/login?from=/admin/blog/${slug}/edit`);
  }
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({ where: { slug } });
  if (!post) notFound();

  return (
    <main className="mx-auto max-w-[860px] px-5 py-8 lg:px-8 lg:py-10">
      <Link href="/admin/blog" className="mono text-[10.5px] uppercase tracking-[0.06em] text-[--color-text-mute] hover:text-[--color-accent]">← Posts</Link>
      <h1 className="mt-1 text-[22px] font-semibold" style={{ color: "var(--text)" }}>Edit post</h1>
      <p className="mt-1 text-[12px]" style={{ color: "var(--text-mute)" }}>
        Slug: <code className="mono">{post.slug}</code> ·
        Published: {new Date(post.publishedAt).toISOString().slice(0, 10)}
        {post.updatedAt && post.updatedAt > post.publishedAt && <> · updated {new Date(post.updatedAt).toISOString().slice(0, 10)}</>}
      </p>
      <BlogPostForm
        initial={{
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          body: post.body,
          draft: post.draft,
        }}
      />
    </main>
  );
}
