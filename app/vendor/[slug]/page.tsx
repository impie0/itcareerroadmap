import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PageHeader } from "@/components/chrome/PageHeader";
import { loadVendors, findVendor } from "@/lib/vendors-loader";
import { loadCertificationPaths } from "@/lib/certification-paths-loader";
import { vendorColor } from "@/lib/vendor-colors";
import { normalizeLevel } from "@/lib/domain-normalizer";
import { LikeButton } from "@/components/ui/LikeButton";
import { StarRating } from "@/components/ui/StarRating";
import { FeedbackForm } from "@/components/ui/FeedbackForm";
import { CommentThread } from "@/components/ui/CommentThread";

const LEVEL_ORDER = ["Entry", "Associate", "Professional", "Expert"] as const;

export async function generateStaticParams() {
  const vendors = await loadVendors();
  return vendors.map((v) => ({ slug: v.slug }));
}

export default async function VendorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = await findVendor(slug);
  if (!v) notFound();

  const accent = vendorColor(v.name);

  // Look up matching certification path. Path slugs come from filenames
  // (`Palo_Alto_Roadmap.md` → `palo_alto`); vendor slugs come from folder
  // names. Most match directly; fall back to a name-based check.
  const allPaths = await loadCertificationPaths();
  const certPath =
    allPaths.find((p) => p.slug === slug) ??
    allPaths.find((p) => p.vendor.toLowerCase() === v.name.toLowerCase()) ??
    allPaths.find((p) => p.slug.replace(/_/g, "-") === slug) ??
    null;

  // Group certs by level for the ladder render
  const byLevel: Record<(typeof LEVEL_ORDER)[number], typeof v.certs> = {
    Entry: [], Associate: [], Professional: [], Expert: [],
  };
  for (const c of v.certs) {
    const lvl = normalizeLevel(c.level ?? "");
    byLevel[lvl].push(c);
  }

  return (
    <main className="mx-auto max-w-[1040px] px-5 py-8 lg:px-8 lg:py-10">
      <PageHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Vendors", href: "/vendors" },
          { label: v.name },
        ]}
        title={v.name}
        subtitle={`${v.certCount} certification${v.certCount === 1 ? "" : "s"} across ${LEVEL_ORDER.filter((l) => byLevel[l].length > 0).length} level${LEVEL_ORDER.filter((l) => byLevel[l].length > 0).length === 1 ? "" : "s"}.`}
      />

      <div
        className="mb-6 rounded-md p-4"
        style={{ background: accent, color: "#fff" }}
      >
        <div className="mono text-[10.5px] uppercase tracking-[0.12em] opacity-85">vendor rollup</div>
        <h2 className="mt-1 text-[24px] font-semibold leading-tight">{v.name}</h2>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {LEVEL_ORDER.map((lvl) => {
            const n = byLevel[lvl].length;
            if (n === 0) return null;
            return (
              <span key={lvl} className="mono rounded px-2 py-0.5 text-[11px]" style={{ background: "rgba(0,0,0,0.22)" }}>
                {lvl} · {n}
              </span>
            );
          })}
        </div>
        {certPath && (
          <Link
            href={`/certification-paths/${certPath.slug}`}
            className="tap-target mt-4 inline-flex items-center gap-2 rounded px-3 py-2 text-[12.5px] font-medium"
            style={{ background: "rgba(255,255,255,0.18)", color: "#fff" }}
          >
            View {v.name} certification path →
          </Link>
        )}
      </div>

      <section className="space-y-12">
        {LEVEL_ORDER.map((lvl) => {
          const certs = byLevel[lvl];
          if (certs.length === 0) return null;
          const lvlNum = { Entry: "L1", Associate: "L2", Professional: "L3", Expert: "L4" }[lvl];
          return (
            <div key={lvl} className="rounded-lg border" style={{ borderColor: "var(--border)", background: "var(--surface)", padding: "16px" }}>
              <header className="mb-4 flex items-baseline justify-between gap-3 border-b-2 pb-2" style={{ borderColor: "var(--text)" }}>
                <div className="flex items-baseline gap-3">
                  <span className="mono rounded border px-2 py-0.5 text-[11px] uppercase tracking-[0.08em]" style={{ borderColor: "var(--accent)", color: "var(--accent)", fontFamily: "var(--font-mono)" }}>
                    {lvlNum}
                  </span>
                  <h3 className="text-[18px] font-semibold uppercase tracking-[0.04em]" style={{ color: "var(--text)" }}>
                    {lvl}
                  </h3>
                </div>
                <span className="mono text-[11px] uppercase tracking-[0.06em]" style={{ color: "var(--text-mute)", fontFamily: "var(--font-mono)" }}>
                  {certs.length} cert{certs.length === 1 ? "" : "s"}
                </span>
              </header>

              <div
                className="rounded-md border"
                style={{
                  borderColor: "var(--grid-strong)",
                  background: "var(--bg)",
                  overflow: "clip", /* preserves rounded corners + does NOT trap sticky-y (per CSS spec). */
                  minWidth: 700, /* keeps columns from squishing; page overflows on narrow viewports rather than the table cropping */
                }}
              >
                {/* Column header row — sticky to top:56 (under TopBar; no filter bar on this page) */}
                <div
                  className="mono grid text-[10.5px] font-semibold uppercase tracking-[0.06em]"
                  style={{
                    gridTemplateColumns: "120px 1fr 200px 28px",
                    background: "var(--surface)",
                    borderBottom: "2px solid var(--grid-strong)",
                    color: "var(--text-mute)",
                    fontFamily: "var(--font-mono)",
                    position: "sticky",
                    top: 56,
                    zIndex: 14,
                  }}
                >
                  <span style={{ padding: "8px 12px", borderRight: "1px solid var(--border)" }}>Code</span>
                  <span style={{ padding: "8px 12px", borderRight: "1px solid var(--border)" }}>Certification</span>
                  <span style={{ padding: "8px 12px", borderRight: "1px solid var(--border)" }}>Domain</span>
                  <span style={{ padding: "8px 12px" }} />
                </div>

                {/* Cert rows */}
                {certs.map((c, idx) => {
                  const isLast = idx === certs.length - 1;
                  return (
                    <Link
                      key={c.codeSlug}
                      href={`/cert/${c.vendorSlug.toLowerCase()}/${c.codeSlug}`}
                      className="tap-target group grid items-center transition-colors hover:bg-[--color-surface]"
                      style={{
                        gridTemplateColumns: "120px 1fr 200px 28px",
                        borderBottom: isLast ? "none" : "1px solid var(--border)",
                      }}
                    >
                      <span
                        className="mono text-[12px] font-medium tabular-nums"
                        style={{
                          padding: "10px 12px",
                          color: "var(--text-2)",
                          borderRight: "1px solid var(--border)",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {c.code || "—"}
                      </span>
                      <span
                        className="text-[13.5px] font-semibold leading-snug"
                        style={{
                          padding: "10px 12px",
                          color: "var(--text)",
                          borderRight: "1px solid var(--border)",
                        }}
                      >
                        <span className="group-hover:text-[--color-accent]">{c.name}</span>
                      </span>
                      <span
                        className="mono text-[11px] uppercase tracking-[0.04em]"
                        style={{
                          padding: "10px 12px",
                          color: "var(--text-mute)",
                          borderRight: "1px solid var(--border)",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {c.domain || ""}
                      </span>
                      <span
                        className="text-center text-[--color-text-mute] group-hover:text-[--color-accent]"
                        style={{ padding: "10px 4px" }}
                        aria-hidden
                      >
                        ↗
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      {v.overviewMarkdown && (
        <section className="mt-10">
          <header className="mb-3 border-b pb-2" style={{ borderColor: "var(--border)" }}>
            <h2 className="text-[18px] font-semibold">Vendor overview</h2>
          </header>
          <article className="wiki-prose rounded-lg border p-6 lg:p-8" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{v.overviewMarkdown}</ReactMarkdown>
          </article>
        </section>
      )}

      {/* Engagement: rating + helpful + likes + comments. All anonymous, IP-hashed. */}
      <section className="mt-10 grid gap-4">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-md border p-4" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <StarRating target={`vendor:${v.slug}`} label={`Rate ${v.name}`} />
          <LikeButton target={`vendor:${v.slug}`} />
        </div>
        <FeedbackForm target={`vendor:${v.slug}`} />
        <CommentThread target={`vendor:${v.slug}`} />
      </section>
    </main>
  );
}
