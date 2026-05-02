import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PageHeader } from "@/components/chrome/PageHeader";
import { prisma } from "@/lib/db";
import { LikeButton } from "@/components/ui/LikeButton";
import { StarRating } from "@/components/ui/StarRating";
import { FeedbackForm } from "@/components/ui/FeedbackForm";
import { CommentThread } from "@/components/ui/CommentThread";

export const dynamic = "force-dynamic";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({
    where: { slug },
  });
  if (!post || post.draft) notFound();

  const target = `blog:${post.slug}`;

  return (
    <main className="mx-auto max-w-[760px] px-5 py-8 lg:px-8 lg:py-10">
      <PageHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
        title={post.title}
        subtitle={`Published ${new Date(post.publishedAt).toISOString().slice(0, 10)}${
          post.updatedAt && post.updatedAt > post.publishedAt
            ? ` · updated ${new Date(post.updatedAt).toISOString().slice(0, 10)}`
            : ""
        }`}
      />

      <article
        className="wiki-prose rounded-lg border p-6 lg:p-8"
        style={{ borderColor: "var(--border)", background: "var(--bg)" }}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
      </article>

      {/* Engagement: rating + helpful + likes + comments. All anonymous, IP-hashed. */}
      <section className="mt-8 grid gap-4">
        <div
          className="flex flex-wrap items-center justify-between gap-4 rounded-md border p-4"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}
        >
          <StarRating target={target} label="Rate this post" />
          <LikeButton target={target} />
        </div>
        <FeedbackForm target={target} />
        <CommentThread target={target} />
      </section>

      <nav className="mt-6">
        <Link
          href="/blog"
          className="rounded-md border px-4 py-2 text-[13px]"
          style={{ borderColor: "var(--border)", color: "var(--text-2)" }}
        >
          ← All posts
        </Link>
      </nav>
    </main>
  );
}
