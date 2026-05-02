"use client";

import { Fragment, useMemo, useRef, useState } from "react";
import type { Cert, Domain, DomainLevel, Ecosystem } from "@/content/certs";
import { vendorColor, textOnVendor } from "@/lib/vendor-colors";
import { CertDrawer } from "@/components/certs/CertDrawer";

const LEVELS: Array<DomainLevel["level"]> = ["Entry", "Associate", "Professional", "Expert"];

type Active = { cert: Cert; domain: Domain; level: DomainLevel } | null;

export function MatrixWallchart({
  domains,
  ecosystems,
  hardware,
  vendor = [],
  search = "",
  stickyTop = 112,
}: {
  domains: Domain[];
  ecosystems: Ecosystem[];
  hardware: Ecosystem[];
  vendor?: Ecosystem[];
  search?: string;
  /** Pixel offset from top where sticky column headers pin. Default 112 assumes
   *  TopBar (56) + CertBrowser filter bar (~56) above. /matrix passes 56 since
   *  it has no filter bar. */
  stickyTop?: number;
}) {
  const [active, setActive] = useState<Active>(null);
  const [vendorFilter, setVendorFilter] = useState("");

  const allCerts = useMemo(() => {
    const out: Cert[] = [];
    [...domains, ...ecosystems, ...hardware, ...vendor].forEach((d) =>
      d.levels.forEach((l) => l.certs.forEach((c) => out.push(c))),
    );
    return out;
  }, [domains, ecosystems, hardware, vendor]);

  const usedVendors = useMemo(
    () =>
      Array.from(new Set(allCerts.map((c) => c.vendor)))
        .map((v) => ({ vendor: v, color: vendorColor(v) }))
        .sort((a, b) => a.vendor.localeCompare(b.vendor)),
    [allCerts],
  );

  const q = search.trim().toLowerCase();
  /** Does a cert match the active vendor filter AND the active text search? */
  const matches = (c: Cert): boolean => {
    if (vendorFilter && c.vendor !== vendorFilter) return false;
    if (q) {
      const hay = `${c.vendor} ${c.name} ${c.code ?? ""} ${c.note ?? ""}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  };
  /** When a search is active, dim non-matches instead of hiding them so you can SEE where the cert lives in the matrix. */
  const dimMode = q.length > 0 || vendorFilter.length > 0;

  // Total matched cert count for the header badge
  const totalMatches = useMemo(
    () => allCerts.filter(matches).length,
    [allCerts, vendorFilter, q], // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <>
      {dimMode && (
        <div
          className="mx-5 mb-4 flex items-center gap-2 rounded-md border px-3 py-1.5 lg:mx-8"
          style={{
            background: "color-mix(in srgb, var(--accent) 8%, transparent)",
            borderColor: "color-mix(in srgb, var(--accent) 35%, transparent)",
          }}
        >
          <span className="mono text-[11px] uppercase tracking-[0.06em]" style={{ color: "var(--accent)" }}>
            ● {totalMatches} match{totalMatches === 1 ? "" : "es"}
          </span>
          <span className="text-[11.5px]" style={{ color: "var(--text-2)" }}>
            {q && <>for "<strong>{search}</strong>"{vendorFilter ? " · " : ""}</>}
            {vendorFilter && <>vendor = <strong>{vendorFilter}</strong></>}
          </span>
        </div>
      )}

      <Grid title="Main domains" domains={domains} matches={matches} dimMode={dimMode} stickyTop={stickyTop} onPick={setActive} />
      <Grid title="SaaS ecosystems" domains={ecosystems} matches={matches} dimMode={dimMode} stickyTop={stickyTop} onPick={setActive} />
      <Grid
        title="Hardware / infrastructure ecosystems"
        domains={hardware}
        matches={matches}
        dimMode={dimMode}
        stickyTop={stickyTop}
        onPick={setActive}
      />
      {vendor.length > 0 && (
        <Grid
          title={`Vendor ecosystems (Deep Dive · ${vendor.length})`}
          domains={vendor}
          matches={matches}
          dimMode={dimMode}
          stickyTop={stickyTop}
          onPick={setActive}
        />
      )}

      <section className="mx-5 mt-8 lg:mx-8">
        <div
          className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em]"
          style={{ color: "var(--text-mute)", fontFamily: "var(--font-mono)" }}
        >
          Vendor legend · click to filter
        </div>
        <div className="flex flex-wrap gap-1.5">
          {usedVendors.map((v) => {
            const fg = textOnVendor(v.color);
            const on = vendorFilter === v.vendor;
            return (
              <button
                key={v.vendor}
                onClick={() => setVendorFilter(on ? "" : v.vendor)}
                className={`mono rounded px-2.5 py-1.5 text-[11px] uppercase tracking-[0.05em] transition-transform hover:scale-105 ${
                  on ? "outline outline-2 outline-offset-2" : ""
                }`}
                style={{ background: v.color, color: fg, outlineColor: "var(--text)" }}
              >
                {v.vendor}
              </button>
            );
          })}
        </div>
      </section>

      <CertDrawer
        open={!!active}
        onClose={() => setActive(null)}
        cert={active?.cert ?? null}
        domain={active?.domain ?? null}
        level={active?.level ?? null}
      />
    </>
  );
}

function Grid({
  title,
  domains,
  matches,
  dimMode,
  stickyTop,
  onPick,
}: {
  title: string;
  domains: Domain[];
  matches: (c: Cert) => boolean;
  dimMode: boolean;
  stickyTop: number;
  onPick: (a: Active) => void;
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  if (domains.length === 0) return null;

  // Tiles flex to fill available width; minimum 110px so all 12 cols always render.
  // If the viewport is narrower, the container scrolls horizontally.
  const minCol = 110;
  const labelCol = 60;
  const minWidth = labelCol + domains.length * minCol + (domains.length + 1) * 8 + 32;
  const gridTemplate = `${labelCol}px repeat(${domains.length}, minmax(${minCol}px, 1fr))`;

  // Auto-scroll when mouse approaches container edges.
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const edgeZone = 80;
    if (x < edgeZone) {
      el.scrollLeft -= Math.max(1, (edgeZone - x) / 8);
    } else if (x > rect.width - edgeZone) {
      el.scrollLeft += Math.max(1, (x - (rect.width - edgeZone)) / 8);
    }
  };

  // Sync header's horizontal scroll with the body's. The header is OUTSIDE the
  // body's overflow-x-auto wrapper so position:sticky works without being trapped
  // by an ancestor scroll container — but it still needs to slide left/right with
  // the body so columns stay aligned visually.
  const onBodyScroll = () => {
    if (headerRef.current && scrollRef.current) {
      headerRef.current.scrollLeft = scrollRef.current.scrollLeft;
    }
  };

  return (
    <section className="mb-10 px-5 lg:px-8">
      <div
        className="mb-3 flex items-baseline justify-between border-b pb-2"
        style={{ borderColor: "var(--border)" }}
      >
        <h2 className="text-[17px] font-semibold">{title}</h2>
        <span
          className="mono text-[11px] uppercase tracking-[0.06em]"
          style={{ color: "var(--text-mute)", fontFamily: "var(--font-mono)" }}
        >
          {domains.length} cols × {LEVELS.length} levels · move mouse to edges to scroll
        </span>
      </div>

      {/* STICKY column-header strip — separate element above the scroll container,
          sticky-positioned against the page. Horizontal overflow is hidden; we
          sync scrollLeft with the body container below so columns stay aligned. */}
      <div
        ref={headerRef}
        className="rounded-t-md border border-b-0"
        style={{
          background: "var(--bg)",
          borderColor: "var(--grid-strong)",
          position: "sticky",
          top: stickyTop,
          zIndex: 16,
          overflow: "hidden",
        }}
      >
        <div
          className="grid"
          style={{
            gridTemplateColumns: gridTemplate,
            minWidth: `${minWidth}px`,
            columnGap: "0",
          }}
        >
          {/* empty leftmost label column — divider on the right to separate from data */}
          <div
            style={{
              borderRight: "1px solid var(--grid-strong)",
              borderBottom: "2px solid var(--grid-strong)",
            }}
          />
          {domains.map((d, di) => (
            <div
              key={d.id + "-h"}
              className="mono text-[11.5px] font-semibold uppercase tracking-[0.05em]"
              style={{
                color: "var(--text)",
                fontFamily: "var(--font-mono)",
                padding: "10px 10px 8px 10px",
                borderBottom: "2px solid var(--grid-strong)",
                borderRight: di < domains.length - 1 ? "1px solid var(--border)" : "none",
              }}
              title={d.blurb}
            >
              {d.name}
            </div>
          ))}
        </div>
      </div>

      {/* Outer wrapper has the right-edge fade gradient. Body grid scrolls
          horizontally; header strip above syncs via onBodyScroll. */}
      <div className="relative">
        <div
          ref={scrollRef}
          onMouseMove={onMouseMove}
          onScroll={onBodyScroll}
          className="overflow-x-auto rounded-b-md border border-t-0"
          style={{ background: "var(--bg)", borderColor: "var(--grid-strong)" }}
        >
          <div
            className="grid"
            style={{
              gridTemplateColumns: gridTemplate,
              minWidth: `${minWidth}px`,
              columnGap: "0",
              rowGap: "0",
            }}
          >
            {/* Body — one row per level, with proper grid lines between cells */}
            {LEVELS.map((lvl, i) => (
              <Fragment key={lvl}>
                <RowLabel level={lvl} isLast={i === LEVELS.length - 1} />
                {domains.map((d, di) => {
                  const cell = d.levels.find((l) => l.level === lvl);
                  const isLastRow = i === LEVELS.length - 1;
                  const isLastCol = di === domains.length - 1;
                  return (
                    <div
                      key={d.id + lvl}
                      className="flex flex-col gap-1.5 py-3"
                      style={{
                        paddingLeft: "8px",
                        paddingRight: "8px",
                        minHeight: "62px",
                        borderBottom: isLastRow ? "none" : "1px solid var(--border)",
                        borderRight: isLastCol ? "none" : "1px solid var(--border)",
                      }}
                    >
                      {(cell?.certs ?? []).map((c) => (
                        <Tile
                          key={`${c.vendor}-${c.name}-${c.code ?? ""}`}
                          cert={c}
                          dimmed={dimMode && !matches(c)}
                          onPick={() => onPick({ cert: c, domain: d, level: cell! })}
                        />
                      ))}
                    </div>
                  );
                })}
              </Fragment>
            ))}
          </div>
        </div>

        {/* Right-edge fade indicating more content scrolls right */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 rounded-r-md"
          style={{
            background: "linear-gradient(to right, transparent, var(--bg))",
          }}
          aria-hidden
        />
      </div>
    </section>
  );
}

function RowLabel({ level, isLast }: { level: DomainLevel["level"]; isLast: boolean }) {
  const num = { Entry: "L1", Associate: "L2", Professional: "L3", Expert: "L4" }[level];
  return (
    <div
      className="mono flex flex-col items-start justify-start py-3"
      style={{
        color: "var(--text-mute)",
        fontFamily: "var(--font-mono)",
        paddingLeft: "10px",
        paddingRight: "10px",
        borderBottom: isLast ? "none" : "1px solid var(--border)",
        borderRight: "1px solid var(--grid-strong)",
        background: "color-mix(in srgb, var(--surface) 50%, transparent)",
      }}
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--accent)" }}>
        {num}
      </span>
      <span className="text-[10.5px] font-semibold uppercase tracking-[0.06em] leading-tight" style={{ color: "var(--text-2)" }}>
        {level}
      </span>
    </div>
  );
}

function Tile({ cert, dimmed, onPick }: { cert: Cert; dimmed: boolean; onPick: () => void }) {
  const bg = vendorColor(cert.vendor);
  const fg = textOnVendor(bg);
  const isRetired = cert.status === "retired" || cert.status === "retiring";
  const isNew = cert.status === "new";

  /*
    Pop-out hover technique:
      - Outer .tile-slot reserves a fixed 48px slot in the grid (no layout shift on hover).
      - Inner button is absolute-positioned over the slot, defaults to 48px tall + clipped,
        then on hover goes overflow:visible, expands to fit content, scales 1.08, and z-50s
        above adjacent tiles. The slot keeps the column stable so neighbors don't reflow.
  */
  return (
    <div className="tile-slot relative h-[48px]">
      <button
        onClick={onPick}
        title={`${cert.vendor} — ${cert.name}${cert.code && cert.code !== "—" ? " (" + cert.code + ")" : ""}`}
        className={`tile-btn group absolute inset-x-0 top-0 flex h-[48px] flex-col justify-between overflow-hidden rounded text-left px-2.5 py-1.5 transition-all duration-150 hover:z-50 hover:h-auto hover:min-h-[88px] hover:scale-[1.08] hover:overflow-visible hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] focus-visible:z-50 focus-visible:h-auto focus-visible:min-h-[88px] focus-visible:scale-[1.08] focus-visible:overflow-visible focus-visible:outline focus-visible:outline-2 ${
          isRetired ? "outline outline-1 outline-dashed" : ""
        }`}
        style={{
          background: bg,
          color: fg,
          outlineColor: isRetired ? "var(--negative)" : "var(--accent)",
          boxShadow: isNew ? "0 0 0 1.5px var(--accent)" : undefined,
          opacity: dimmed ? 0.18 : isRetired ? 0.7 : 1,
          filter: dimmed ? "grayscale(0.5)" : undefined,
          transformOrigin: "center top",
        }}
      >
        <div className="flex items-baseline justify-between gap-2">
          <span className="mono truncate text-[10.5px] font-bold uppercase opacity-90 group-hover:overflow-visible group-hover:whitespace-normal" style={{ letterSpacing: "0.05em" }}>
            {cert.vendor}
          </span>
          {cert.code && cert.code !== "—" && (
            <span className="mono truncate text-[10.5px] font-bold tabular-nums opacity-95 group-hover:overflow-visible group-hover:whitespace-normal">
              {cert.code}
            </span>
          )}
        </div>
        <div className="line-clamp-2 text-[13px] font-bold leading-[1.18] group-hover:line-clamp-none group-hover:overflow-visible group-hover:whitespace-normal">
          {cert.name}
        </div>
      </button>
    </div>
  );
}
