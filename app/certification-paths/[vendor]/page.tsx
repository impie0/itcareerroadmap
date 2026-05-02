import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/chrome/PageHeader";
import { findCertificationPath, loadCertificationPaths } from "@/lib/certification-paths-loader";
import { vendorColor } from "@/lib/vendor-colors";
import { PathSection } from "@/components/certpaths/PathSection";
import { PathTOC } from "@/components/certpaths/PathTOC";
import { MarkdownWithMermaid } from "@/components/certpaths/MarkdownWithMermaid";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const all = await loadCertificationPaths();
  return all.map((p) => ({ vendor: p.slug }));
}

// Sections that open by default (above the fold). Everything else is
// collapsed so the page isn't a wall of 1000 lines on first load.
const ALWAYS_OPEN = new Set([
  "overview",
  "progression-diagram",
]);

export default async function CertificationPathPage({
  params,
}: {
  params: Promise<{ vendor: string }>;
}) {
  const { vendor } = await params;
  const path = await findCertificationPath(vendor);
  if (!path) notFound();

  const accent = vendorColor(path.vendor);
  const tocItems = path.sections.map((s) => ({ slug: s.slug, heading: s.heading }));

  return (
    <main className="mx-auto max-w-[1280px] px-5 py-8 lg:px-8 lg:py-10">
      <PageHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Certification paths", href: "/certification-paths" },
          { label: path.vendor },
        ]}
        title={`${path.vendor} certification path`}
        subtitle={path.fm.ecosystem ?? `Full progression for ${path.vendor}.`}
      />

      {/* Hero stats strip — vendor-color top stripe, headline numbers always visible */}
      <div
        className="relative mb-6 overflow-hidden rounded-lg border-2 p-5"
        style={{ borderColor: "var(--border)", background: "var(--surface)" }}
      >
        <span aria-hidden className="absolute left-0 right-0 top-0 h-[4px]" style={{ background: accent }} />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stat label="Total certs"     value={path.fm.total_certifications ?? "—"} />
          <Stat label="Time to expert"  value={path.fm.time_to_expert ?? "—"} />
          <Stat label="Cost (USD)"      value={path.fm.cost_estimate_usd ?? "—"} />
          <Stat label="Cost (ZAR)"      value={path.fm.cost_estimate_zar ?? "—"} />
        </div>
        {path.fm.entry_point_cert && (
          <div className="mt-3 text-[12.5px]" style={{ color: "var(--text-2)" }}>
            Entry point: <strong style={{ color: "var(--text)" }}>{path.fm.entry_point_cert}</strong>
          </div>
        )}
        {path.fm.last_verified && (
          <div className="mono mt-2 text-[10.5px] uppercase tracking-[0.06em]" style={{ color: "var(--text-mute)" }}>
            Last verified {path.fm.last_verified}
          </div>
        )}
      </div>

      {/* Body: sections column + sticky TOC */}
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_220px]">
        <div className="min-w-0 space-y-3">
          {path.sections.length === 0 ? (
            <div className="rounded-md border p-4 text-[13px] italic" style={{ borderColor: "var(--border)", color: "var(--text-mute)" }}>
              No parseable sections in this file. Check that headings use <code className="mono">## Heading</code> format.
            </div>
          ) : (
            path.sections.map((s) => {
              const open = ALWAYS_OPEN.has(s.slug);
              // Render the always-open sections without the accordion chrome —
              // they're meant to be the page's first impression.
              if (open) {
                return (
                  <section
                    key={s.slug}
                    id={s.slug}
                    className="rounded-lg border p-5"
                    style={{ borderColor: "var(--border)", background: "var(--bg)", scrollMarginTop: "80px" }}
                  >
                    <h2 className="mb-3 text-[18px] font-semibold" style={{ color: "var(--text)" }}>
                      {s.heading}
                    </h2>
                    <MarkdownWithMermaid markdown={s.markdown} />
                  </section>
                );
              }
              return (
                <PathSection key={s.slug} heading={s.heading} slug={s.slug} markdown={s.markdown} />
              );
            })
          )}
        </div>
        <PathTOC items={tocItems} />
      </div>

      <nav className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t pt-5" style={{ borderColor: "var(--border)" }}>
        <Link
          href="/certification-paths"
          className="rounded-md border px-4 py-2 text-[13px]"
          style={{ borderColor: "var(--border)", color: "var(--text-2)" }}
        >
          ← All certification paths
        </Link>
        <Link
          href={`/vendor/${path.slug.toLowerCase()}`}
          className="rounded-md border px-4 py-2 text-[13px]"
          style={{
            borderColor: "color-mix(in srgb, var(--accent) 40%, transparent)",
            color: "var(--accent)",
            background: "color-mix(in srgb, var(--accent) 8%, transparent)",
          }}
        >
          See {path.vendor}'s cert ladder →
        </Link>
      </nav>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <div className="mono text-[10.5px] uppercase tracking-[0.08em]" style={{ color: "var(--text-mute)" }}>
        {label}
      </div>
      <div className="mt-1 text-[16px] font-semibold tabular-nums" style={{ color: "var(--text)" }}>
        {value}
      </div>
    </div>
  );
}
