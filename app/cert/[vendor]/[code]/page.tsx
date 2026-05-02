import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PageHeader } from "@/components/chrome/PageHeader";
import { loadAllCertifications } from "@/lib/certifications-loader";
import { vendorColor } from "@/lib/vendor-colors";
import { LikeButton } from "@/components/ui/LikeButton";
import { StarRating } from "@/components/ui/StarRating";
import { FeedbackForm } from "@/components/ui/FeedbackForm";
import { CommentThread } from "@/components/ui/CommentThread";

export async function generateStaticParams() {
  const all = await loadAllCertifications();
  return all.map((c) => ({
    vendor: c.vendorSlug.toLowerCase(),
    code: c.codeSlug,
  }));
}

export default async function CertPage({
  params,
}: {
  params: Promise<{ vendor: string; code: string }>;
}) {
  const { vendor, code } = await params;
  const all = await loadAllCertifications();
  const cert = all.find(
    (c) => c.vendorSlug.toLowerCase() === vendor && c.codeSlug === code,
  );
  if (!cert) notFound();

  const accent = vendorColor(cert.vendor);

  return (
    <main className="mx-auto max-w-[920px] px-5 py-8 lg:px-8 lg:py-10">
      <PageHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Certifications", href: "/certs" },
          { label: cert.vendor, href: `/certs/domain/${(cert.ecosystem ?? "").toLowerCase().replace(/\s+/g, "-")}` },
          { label: cert.name },
        ]}
        title={cert.name}
        subtitle={`${cert.vendor} · ${cert.code}${cert.level ? " · " + cert.level : ""}`}
      />

      <div
        className="mb-6 rounded-md p-4"
        style={{ background: accent, color: "#fff" }}
      >
        <div className="mono text-[10.5px] uppercase tracking-[0.12em] opacity-85">
          {cert.vendor}
          {cert.ecosystem && ` · ${cert.ecosystem}`}
        </div>
        <h2 className="mt-1 text-[24px] font-semibold leading-tight">{cert.name}</h2>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {cert.code && (
            <span className="mono rounded px-2 py-0.5 text-[12px]" style={{ background: "rgba(0,0,0,0.22)" }}>
              {cert.code}
            </span>
          )}
          {cert.status && (
            <span className="mono rounded px-2 py-0.5 text-[10.5px] uppercase tracking-[0.06em]" style={{ background: "rgba(0,0,0,0.22)" }}>
              ● {cert.status}
            </span>
          )}
          {cert.level && (
            <span className="mono rounded px-2 py-0.5 text-[10.5px] uppercase tracking-[0.06em]" style={{ background: "rgba(0,0,0,0.22)" }}>
              {cert.level}
            </span>
          )}
        </div>
      </div>

      <article
        className="wiki-prose rounded-lg border p-6 lg:p-8"
        style={{ borderColor: "var(--border)", background: "var(--bg)" }}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{cert.markdownBody}</ReactMarkdown>
      </article>

      {/* Engagement: rating + helpful + likes + comments. All anonymous, IP-hashed. */}
      <section className="mt-8 grid gap-4">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-md border p-4" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <StarRating target={`cert:${cert.vendorSlug}:${cert.codeSlug}`} label="Rate this cert" />
          <LikeButton target={`cert:${cert.vendorSlug}:${cert.codeSlug}`} />
        </div>
        <FeedbackForm target={`cert:${cert.vendorSlug}:${cert.codeSlug}`} />
        <CommentThread target={`cert:${cert.vendorSlug}:${cert.codeSlug}`} />
      </section>

      <nav className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/certs"
          className="rounded-md border px-4 py-2 text-[13px]"
          style={{ borderColor: "var(--border)", color: "var(--text-2)" }}
        >
          ← Back to all certifications
        </Link>
        {cert.url && (
          <a
            href={cert.url}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-md border px-4 py-2 text-[13px]"
            style={{
              borderColor: "color-mix(in srgb, var(--accent) 40%, transparent)",
              color: "var(--accent)",
              background: "color-mix(in srgb, var(--accent) 8%, transparent)",
            }}
          >
            Vendor source ↗
          </a>
        )}
      </nav>
    </main>
  );
}
