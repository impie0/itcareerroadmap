import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PageHeader } from "@/components/chrome/PageHeader";
import {
  listAllDeepDives,
  readDeepDive,
  KIND_LABEL,
  type DeepDiveKind,
} from "@/lib/deepdive-fs";
import { LikeButton } from "@/components/ui/LikeButton";
import { StarRating } from "@/components/ui/StarRating";
import { FeedbackForm } from "@/components/ui/FeedbackForm";
import { CommentThread } from "@/components/ui/CommentThread";

const VALID_KINDS: DeepDiveKind[] = ["domain", "ecosystem", "roadmap", "industry", "specialty", "cross-cutting"];

export async function generateStaticParams() {
  const all = await listAllDeepDives();
  return all.map((f) => ({ kind: f.kind, slug: f.slug }));
}

export default async function WikiEntry({
  params,
}: {
  params: Promise<{ kind: string; slug: string }>;
}) {
  const { kind, slug } = await params;
  if (!VALID_KINDS.includes(kind as DeepDiveKind)) notFound();

  const result = await readDeepDive(kind as DeepDiveKind, slug);
  if (!result) notFound();
  const { file, markdown } = result;

  // Build prev / next within same kind for navigation
  const all = await listAllDeepDives();
  const sameKind = all.filter((f) => f.kind === file.kind);
  const idx = sameKind.findIndex((f) => f.slug === file.slug);
  const prev = idx > 0 ? sameKind[idx - 1] : null;
  const next = idx < sameKind.length - 1 ? sameKind[idx + 1] : null;

  return (
    <main className="mx-auto max-w-[920px] px-5 py-8 lg:px-8 lg:py-10">
      <PageHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Wiki", href: "/wiki" },
          { label: KIND_LABEL[file.kind] + "s", href: `/wiki#${file.kind}` },
          { label: file.title },
        ]}
        title={file.title}
        subtitle={`${KIND_LABEL[file.kind]} · ${file.code}`}
      />

      <article
        className="wiki-prose rounded-lg border p-6 lg:p-8"
        style={{ borderColor: "var(--border)", background: "var(--bg)" }}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </article>

      {/* Engagement: rating + helpful + likes + comments. All anonymous, IP-hashed. */}
      <section className="mt-8 grid gap-4">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-md border p-4" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <StarRating target={`wiki:${file.kind}:${file.slug}`} label="Rate this article" />
          <LikeButton target={`wiki:${file.kind}:${file.slug}`} />
        </div>
        <FeedbackForm target={`wiki:${file.kind}:${file.slug}`} />
        <CommentThread target={`wiki:${file.kind}:${file.slug}`} />
      </section>

      <nav className="mt-6 flex flex-wrap items-center justify-between gap-3">
        {prev ? (
          <Link
            href={`/wiki/${prev.kind}/${prev.slug}`}
            className="rounded-md border px-4 py-2 text-[13px]"
            style={{ borderColor: "var(--border)", color: "var(--text-2)" }}
          >
            ← {prev.code} · {prev.title}
          </Link>
        ) : <span />}
        <Link
          href="/wiki"
          className="rounded-md border px-4 py-2 text-[13px]"
          style={{ borderColor: "var(--border)", color: "var(--text-2)" }}
        >
          All wiki entries
        </Link>
        {next ? (
          <Link
            href={`/wiki/${next.kind}/${next.slug}`}
            className="rounded-md border px-4 py-2 text-[13px]"
            style={{ borderColor: "var(--border)", color: "var(--text-2)" }}
          >
            {next.code} · {next.title} →
          </Link>
        ) : <span />}
      </nav>
    </main>
  );
}
