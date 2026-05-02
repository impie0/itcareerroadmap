"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Cert, Domain, DomainLevel } from "@/content/certs";
import type { EnrichedCertFields } from "@/lib/certifications-loader";
import { vendorColor } from "@/lib/vendor-colors";
import { Drawer } from "@/components/ui/Drawer";
import { LikeButton } from "@/components/ui/LikeButton";
import { CommentThread } from "@/components/ui/CommentThread";

const STATUS_PILL: Record<NonNullable<Cert["status"]>, { color: string; label: string }> = {
  active:     { color: "var(--color-positive)", label: "Active" },
  retiring:   { color: "var(--color-warning)",  label: "Retiring" },
  retired:    { color: "var(--color-negative)", label: "Retired" },
  beta:       { color: "var(--color-accent)",   label: "Beta" },
  new:        { color: "var(--color-positive)", label: "New" },
  unverified: { color: "var(--color-warning)",  label: "Unverified" },
};
// Defensive fallback so an unknown status string never crashes the drawer
const FALLBACK_PILL = { color: "var(--color-text-mute)", label: "Unknown" };

export function CertDrawer({
  open,
  onClose,
  cert,
  domain,
  level,
}: {
  open: boolean;
  onClose: () => void;
  cert: Cert | null;
  domain: Domain | null;
  level: DomainLevel | null;
}) {
  const [enrichment, setEnrichment] = useState<EnrichedCertFields | null>(null);
  const [perCertPage, setPerCertPage] = useState<string | null>(null);
  const [enrichmentSource, setEnrichmentSource] = useState<string | null>(null);
  const [loadingEnrichment, setLoadingEnrichment] = useState(false);

  useEffect(() => {
    if (!open || !cert) {
      setEnrichment(null);
      setPerCertPage(null);
      setEnrichmentSource(null);
      return;
    }
    setLoadingEnrichment(true);
    const params = new URLSearchParams({
      vendor: cert.vendor,
      name: cert.name,
      code: cert.code ?? "",
    });
    fetch(`/api/enrichment?${params}`)
      .then((r) => r.json())
      .then((d) => {
        setEnrichment(d.enrichment ?? null);
        setPerCertPage(d.perCertPage ?? null);
        setEnrichmentSource(d.source ?? null);
      })
      .catch(() => setEnrichment(null))
      .finally(() => setLoadingEnrichment(false));
  }, [open, cert]);

  if (!cert || !domain || !level) return <Drawer open={open} onClose={onClose}>{null}</Drawer>;

  const accent = vendorColor(cert.vendor);
  const status = cert.status ?? "active";
  const sp = STATUS_PILL[status] ?? FALLBACK_PILL;
  const vendorUrl = enrichment?.url || cert.url;
  const isRich = enrichmentSource === "certifications-folder";

  return (
    <Drawer
      open={open}
      onClose={onClose}
      title={`${domain.name} · ${level.level}`}
      accentColor={accent}
    >
      <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-[--color-text-mute]">
        {cert.vendor}
      </div>
      <h2 className="mt-1 text-[22px] font-semibold leading-tight tracking-[-0.01em]">{cert.name}</h2>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        {cert.code && cert.code !== "—" && (
          <span className="mono rounded border border-[--color-border] bg-[--color-surface] px-2 py-0.5 text-[11px] text-[--color-text]">
            {cert.code}
          </span>
        )}
        <span
          className="mono rounded border px-2 py-0.5 text-[10.5px] font-medium uppercase tracking-[0.06em]"
          style={{
            color: sp.color,
            borderColor: `color-mix(in srgb, ${sp.color} 40%, transparent)`,
            background: `color-mix(in srgb, ${sp.color} 8%, transparent)`,
          }}
        >
          ● {sp.label}
        </span>
        <span className="mono rounded border border-[--color-border] bg-[--color-surface] px-2 py-0.5 text-[10.5px] uppercase tracking-[0.06em] text-[--color-text-2]">
          {level.level}
        </span>
      </div>

      {/* ============ EXAM FACTS — 5 cells when rich (Cost / Duration / Questions / Passing / Released) ============ */}
      {enrichment && (enrichment.cost || enrichment.duration || enrichment.questions || enrichment.passingScore || enrichment.released || enrichment.validity) && (
        <Section title="Exam facts">
          <div className={`grid gap-2 ${isRich ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2"}`}>
            {isRich ? (
              <>
                <Fact label="Cost" value={enrichment.cost} />
                <Fact label="Duration" value={enrichment.duration} />
                <Fact label="Questions" value={enrichment.questions} />
                <Fact label="Passing" value={enrichment.passingScore} />
                <Fact label="Released" value={enrichment.released} />
                <Fact label="Valid" value={enrichment.validity} />
              </>
            ) : (
              <>
                <Fact label="Cost" value={enrichment.cost} />
                <Fact label="Duration" value={enrichment.duration} />
                <Fact label="Questions" value={enrichment.questions} />
                <Fact label="Passing" value={enrichment.passingScore} />
                <Fact label="Valid" value={enrichment.validity} />
                <Fact label="Retires" value={enrichment.retirementDate} />
                <Fact label="Prep time" value={enrichment.prepTime} />
                <Fact label="Version" value={enrichment.currentVersion} />
              </>
            )}
          </div>
        </Section>
      )}

      {/* ============ THREE VENDOR LINKS ============ */}
      {vendorUrl && vendorUrl !== "#" && (
        <a
          href={vendorUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-4 flex items-center justify-between rounded-lg border px-3.5 py-3 text-[13px] font-medium hover:bg-[--color-accent]/15"
          style={{
            color: "var(--color-accent)",
            borderColor: "color-mix(in srgb, var(--color-accent) 40%, transparent)",
            background: "color-mix(in srgb, var(--color-accent) 8%, transparent)",
          }}
        >
          <span>Vendor source — {safeHostname(vendorUrl)}</span>
          <span aria-hidden>↗</span>
        </a>
      )}

      {enrichment?.examGuideUrl && (
        <a
          href={enrichment.examGuideUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-2 flex items-center justify-between rounded-md border px-3.5 py-2 text-[12.5px]"
          style={{ borderColor: "var(--color-border)", color: "var(--color-text-2)" }}
        >
          <span>Official exam guide</span>
          <span aria-hidden>↗</span>
        </a>
      )}

      {enrichment?.examObjectivesUrl && (
        <a
          href={enrichment.examObjectivesUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-2 flex items-center justify-between rounded-md border px-3.5 py-2 text-[12.5px]"
          style={{ borderColor: "var(--color-border)", color: "var(--color-text-2)" }}
        >
          <span>Exam objectives</span>
          <span aria-hidden>↗</span>
        </a>
      )}

      {/* ============ ABOUT — short paragraph; full lives on the per-cert page ============ */}
      {enrichment?.rationale && (
        <Section title="About">
          <p className="text-[14px] leading-relaxed text-[--color-text-2]">
            {isRich && enrichment.rationale.length > 280
              ? enrichment.rationale.slice(0, 280).trim() + "…"
              : enrichment.rationale}
          </p>
        </Section>
      )}

      {!enrichment?.rationale && cert.note && (
        <Section title="About">
          <p className="text-[14px] leading-relaxed text-[--color-text-2]">{cert.note}</p>
        </Section>
      )}

      {/* ============ RECOMMENDED COURSES TABLE (rich only) ============ */}
      {isRich && enrichment?.recommendedCourses && enrichment.recommendedCourses.length > 0 && (
        <Section title={`Recommended courses${enrichment.domain && enrichment.level ? ` at ${enrichment.domain} · ${enrichment.level}` : ""}`}>
          <ResourceTable
            headers={["Provider", "Title", "Cost", ""]}
            rows={enrichment.recommendedCourses.map((c) => [c.provider, c.title, c.cost ?? "—", c.url ?? ""])}
          />
        </Section>
      )}

      {/* ============ PRACTICE EXAMS TABLE (rich only) ============ */}
      {isRich && enrichment?.practiceExams && enrichment.practiceExams.length > 0 && (
        <Section title="Practice exams">
          <ResourceTable
            headers={["Provider", "Title", "Cost", ""]}
            rows={enrichment.practiceExams.map((c) => [c.provider, c.title, c.cost ?? "—", c.url ?? ""])}
          />
        </Section>
      )}

      {/* ============ BOOKS TABLE (rich only) ============ */}
      {isRich && enrichment?.books && enrichment.books.length > 0 && (
        <Section title="Books">
          <ResourceTable
            headers={["Title", "Author", "Publisher", "Year", "ISBN", ""]}
            rows={enrichment.books.map((b) => [b.title, b.author ?? "", b.publisher ?? "", b.year ?? "", b.isbn ?? "", b.url ?? ""])}
          />
        </Section>
      )}

      {/* ============ TOPICS COVERED (only when no per-cert page so user has somewhere to read them) ============ */}
      {enrichment?.topics && enrichment.topics.length > 0 && !isRich && (
        <Section title="Topics covered">
          <ul className="grid grid-cols-1 gap-x-4 gap-y-1.5 sm:grid-cols-2">
            {enrichment.topics.map((t, i) => (
              <li key={i} className="relative pl-3.5 text-[13.5px] leading-snug text-[--color-text]">
                <span className="absolute left-0 top-0 font-bold text-[--color-accent]">·</span>
                {t}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* ============ DOMAIN-LEVEL FALLBACK SECTIONS (when no enrichment) ============ */}
      {!enrichment && level.skills && level.skills.length > 0 && (
        <Section title={`Common skills at ${domain.name} · ${level.level}`}>
          <p className="mb-2 text-[12px] italic text-[--color-text-mute]">
            Shared content for the {domain.name} domain at {level.level} level — not specific to this cert.
          </p>
          <ul className="grid grid-cols-1 gap-x-4 gap-y-1.5 sm:grid-cols-2">
            {level.skills.map((s, i) => (
              <li key={i} className="relative pl-3.5 text-[13.5px] leading-snug text-[--color-text]">
                <span className="absolute left-0 top-0 font-bold text-[--color-accent]">·</span>
                {s}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {!enrichment && level.courses && level.courses.length > 0 && (
        <Section title={`Recommended courses at ${domain.name} · ${level.level}`}>
          <ul className="space-y-1.5">
            {level.courses.map((c, i) => {
              const inner = (
                <>
                  <div className="min-w-0 flex-1">
                    <div className="mono text-[10.5px] uppercase tracking-[0.08em] text-[--color-text-mute]">
                      {c.provider}
                    </div>
                    <div className="text-[13.5px] font-medium text-[--color-text]">{c.name}</div>
                  </div>
                  {c.url && (
                    <span className="mono text-[--color-text-mute] group-hover:text-[--color-accent]" aria-hidden>↗</span>
                  )}
                </>
              );
              return (
                <li key={i}>
                  {c.url ? (
                    <a href={c.url} target="_blank" rel="noreferrer noopener" className="group flex items-center gap-3 rounded-md border border-[--color-border] bg-[--color-surface] px-3 py-2 hover:border-[--color-accent]">{inner}</a>
                  ) : (
                    <div className="flex items-center gap-3 rounded-md border border-[--color-border] bg-[--color-surface] px-3 py-2">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Section>
      )}

      {/* ============ TYPICAL JOB TITLES (always when available) ============ */}
      {((isRich && enrichment?.jobs && enrichment.jobs.length > 0) || (!enrichment && level.jobs && level.jobs.length > 0)) && (
        <Section title={`Typical job titles${isRich && enrichment?.domain && enrichment?.level ? ` at ${enrichment.domain} · ${enrichment.level}` : ""}`}>
          <p className="text-[13.5px] leading-relaxed text-[--color-text]">
            {(isRich ? enrichment?.jobs : level.jobs)?.join(" · ")}
          </p>
        </Section>
      )}

      {/* ============ PER-CERT PAGE LINK ============ */}
      {perCertPage && (
        <Link
          href={perCertPage}
          className="mt-6 block rounded-md border p-3 text-center text-[13px] font-semibold"
          style={{
            borderColor: "var(--color-accent)",
            background: "color-mix(in srgb, var(--color-accent) 8%, transparent)",
            color: "var(--color-accent)",
          }}
        >
          📖 Open full per-cert page →
        </Link>
      )}

      {loadingEnrichment && !enrichment && (
        <div className="mt-3 text-[12px] text-[--color-text-mute] italic">Loading deep-dive enrichment…</div>
      )}

      <div className="mt-7 border-t border-[--color-border] pt-4">
        <LikeButton target={`cert:${cert.vendor}:${cert.name}:${cert.code ?? ""}`} />
      </div>
      <CommentThread target={`cert:${cert.vendor}:${cert.name}:${cert.code ?? ""}`} />
    </Drawer>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h4 className="mb-2 text-[11px] font-medium uppercase tracking-[0.08em] text-[--color-text-mute]">
        {title}
      </h4>
      {children}
    </div>
  );
}

function Fact({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="rounded-md border border-[--color-border] bg-[--color-surface] p-3">
      <div className="mono text-[10.5px] uppercase tracking-[0.08em] text-[--color-text-mute]">{label}</div>
      <div className="mt-0.5 text-[13px] font-medium text-[--color-text]">{value}</div>
    </div>
  );
}

function ResourceTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-md border border-[--color-border]">
      <table className="w-full text-[12.5px]">
        <thead>
          <tr style={{ background: "var(--color-surface)" }}>
            {headers.map((h, i) => (
              <th key={i} className="px-2.5 py-1.5 text-left font-medium uppercase tracking-[0.06em] text-[--color-text-mute] text-[10.5px]">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-t border-[--color-border]">
              {row.map((cell, ci) => {
                const isUrlCol = ci === row.length - 1 && cell.startsWith("http");
                return (
                  <td key={ci} className="px-2.5 py-1.5 align-top">
                    {isUrlCol ? (
                      <a href={cell} target="_blank" rel="noreferrer noopener" className="text-[--color-accent] hover:underline" aria-label="Open">
                        ↗
                      </a>
                    ) : (
                      <span className="text-[--color-text]">{cell}</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function safeHostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}
