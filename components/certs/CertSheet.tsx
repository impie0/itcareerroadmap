"use client";

import { useMemo, useRef, useState } from "react";
import type { Cert, Domain, DomainLevel } from "@/content/certs";
import { vendorColor } from "@/lib/vendor-colors";

type SortKey = "vendor" | "name" | "code" | "domain" | "status";
type SortDir = "asc" | "desc";

export type SheetRow = { cert: Cert; domain: Domain; level: DomainLevel };

const STATUS_CLASS: Record<NonNullable<Cert["status"]>, string> = {
  active: "status-active",
  retiring: "status-retiring",
  retired: "status-retired",
  new: "status-new",
  beta: "status-beta",
  unverified: "status-unverified",
};

const LEVEL_DESC: Record<DomainLevel["level"], string> = {
  Entry:        "Foundational certifications. Help-desk, support, A+, CCST, Network+, ITIL Foundation, AZ-900, AWS CLF.",
  Associate:    "Mid-level practitioner. CCNA, RHCSA, AZ-104, AWS SAA, CKAD, Terraform Associate, SC-300.",
  Professional: "Senior-IC level. CCNP, CISSP, AZ-305, AWS SAP, CKS, OSCP, GIAC, Vendor Pro tracks.",
  Expert:       "Architect / principal level. CCIE, TOGAF, AWS SAP, Salesforce CTA, VMware VCDX, RHCA.",
};

const LEVEL_NUM: Record<DomainLevel["level"], string> = {
  Entry: "L1",
  Associate: "L2",
  Professional: "L3",
  Expert: "L4",
};

/*
  Grid template — must match between the sticky header strip and the body rows
  so columns align visually. minWidth keeps columns from squishing on narrow
  viewports; horizontal scroll handles the overflow then.
*/
const GRID_TEMPLATE = "minmax(170px,1.2fr) minmax(220px,2fr) 130px 160px 110px minmax(220px,2fr) 28px";
const TABLE_MIN_WIDTH = 1180;

export function CertSheet({
  level,
  count,
  rows,
  onPick,
}: {
  level: DomainLevel["level"];
  count: number;
  rows: SheetRow[];
  onPick: (r: SheetRow) => void;
}) {
  const [sort, setSort] = useState<{ key: SortKey; dir: SortDir }>({
    key: "vendor",
    dir: "asc",
  });

  const sorted = useMemo(() => {
    const arr = [...rows];
    arr.sort((a, b) => {
      const A = getKey(a, sort.key);
      const B = getKey(b, sort.key);
      const cmp = A.localeCompare(B);
      return sort.dir === "asc" ? cmp : -cmp;
    });
    return arr;
  }, [rows, sort]);

  /*
    Sticky header strip is a SIBLING of the body's horizontal-scroll wrapper —
    NOT nested inside it. That guarantees position:sticky binds to the page
    instead of the (overflow-x:auto) ancestor that would trap it.
    The header has its own overflow:hidden + scrollLeft that we sync with the
    body via onBodyScroll so columns stay aligned during horizontal scroll.
  */
  const headerRef = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  const onBodyScroll = () => {
    if (headerRef.current && bodyRef.current) {
      headerRef.current.scrollLeft = bodyRef.current.scrollLeft;
    }
  };

  return (
    <section className="level-section" id={`lvl-${level.toLowerCase()}`}>
      <div className="level-head">
        <div className="titlewrap">
          <h2>{level}</h2>
          <span className="lvl-tag">
            {LEVEL_NUM[level]} · {count} {count === 1 ? "cert" : "certs"}
          </span>
        </div>
        <div className="desc">{LEVEL_DESC[level]}</div>
      </div>

      {/* STICKY HEADER STRIP — sibling, not child, of the body scroll wrapper. */}
      <div
        ref={headerRef}
        className="rounded-t-md border border-b-0"
        style={{
          background: "var(--surface)",
          borderColor: "var(--grid-strong)",
          position: "sticky",
          top: 112,
          zIndex: 14,
          overflow: "hidden", /* clip horizontal overflow; scrollLeft synced from body */
        }}
      >
        <div
          className="grid mono text-[11px] font-medium uppercase tracking-[0.08em]"
          style={{
            gridTemplateColumns: GRID_TEMPLATE,
            minWidth: TABLE_MIN_WIDTH,
            color: "var(--text-mute)",
            fontFamily: "var(--font-mono)",
            borderBottom: "2px solid var(--grid-strong)",
          }}
        >
          <SortHeader k="vendor" sort={sort} setSort={setSort}>Vendor</SortHeader>
          <SortHeader k="name"   sort={sort} setSort={setSort}>Certification</SortHeader>
          <SortHeader k="code"   sort={sort} setSort={setSort}>Code</SortHeader>
          <SortHeader k="domain" sort={sort} setSort={setSort}>Domain</SortHeader>
          <SortHeader k="status" sort={sort} setSort={setSort}>Status</SortHeader>
          <span style={cellStyle({ borderRight: true })}>Note</span>
          <span style={cellStyle()} />
        </div>
      </div>

      {/* BODY — separate horizontal scroll wrapper, sync sends scrollLeft to header */}
      <div
        ref={bodyRef}
        onScroll={onBodyScroll}
        className="rounded-b-md border border-t-0"
        style={{
          borderColor: "var(--grid-strong)",
          background: "var(--bg)",
          overflowX: "auto",
        }}
      >
        <div style={{ minWidth: TABLE_MIN_WIDTH }}>
          {sorted.length === 0 ? (
            <div className="px-4 py-6 text-center text-[13px] italic" style={{ color: "var(--text-mute)" }}>
              No certifications match the current filter.
            </div>
          ) : (
            sorted.map((r, idx) => {
              const status = r.cert.status ?? "active";
              const accent = vendorColor(r.cert.vendor);
              const isLast = idx === sorted.length - 1;
              return (
                <button
                  key={`${r.domain.id}-${r.cert.vendor}-${r.cert.name}-${r.cert.code ?? ""}`}
                  onClick={() => onPick(r)}
                  className="group grid w-full items-center text-left transition-colors hover:bg-[--color-surface]"
                  style={{
                    gridTemplateColumns: GRID_TEMPLATE,
                    borderBottom: isLast ? "none" : "1px solid var(--border)",
                  }}
                >
                  {/* Vendor */}
                  <span style={cellStyle({ borderRight: true })}>
                    <span className="flex items-center gap-2.5">
                      <span className="inline-block flex-shrink-0 rounded-sm" style={{ background: accent, width: 4, height: 22 }} />
                      <span className="truncate text-[13px] font-medium" style={{ color: "var(--text)" }}>{r.cert.vendor}</span>
                    </span>
                  </span>
                  {/* Cert name */}
                  <span style={cellStyle({ borderRight: true })}>
                    <span className="text-[13.5px] font-semibold" style={{ color: "var(--text)" }}>
                      <span className="group-hover:text-[--color-accent]">{r.cert.name}</span>
                    </span>
                  </span>
                  {/* Code */}
                  <span style={cellStyle({ borderRight: true })}>
                    <span className="mono text-[12px] tabular-nums" style={{ color: "var(--text-2)", fontFamily: "var(--font-mono)" }}>
                      {r.cert.code && r.cert.code !== "—" ? r.cert.code : ""}
                    </span>
                  </span>
                  {/* Domain */}
                  <span style={cellStyle({ borderRight: true })}>
                    <span className="inline-block rounded px-2 py-0.5 text-[11.5px]" style={{ background: "var(--surface-2)", color: "var(--text-2)" }}>
                      {r.domain.name}
                    </span>
                  </span>
                  {/* Status */}
                  <span style={cellStyle({ borderRight: true })}>
                    <span className={`status-pill ${STATUS_CLASS[status] ?? "status-unverified"}`}>● {status}</span>
                  </span>
                  {/* Note */}
                  <span style={cellStyle({ borderRight: true })}>
                    <span className="block truncate text-[12.5px]" style={{ color: "var(--text-mute)" }}>
                      {r.cert.note ?? ""}
                    </span>
                  </span>
                  {/* Arrow */}
                  <span style={cellStyle()}>
                    <span className="block text-center text-[--color-text-mute] group-hover:text-[--color-accent]" aria-hidden>→</span>
                  </span>
                </button>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}

function cellStyle(opts: { borderRight?: boolean } = {}): React.CSSProperties {
  return {
    padding: "11px 14px",
    borderRight: opts.borderRight ? "1px solid var(--border)" : "none",
    minWidth: 0,
    overflow: "hidden",
  };
}

function SortHeader({
  k,
  sort,
  setSort,
  children,
}: {
  k: SortKey;
  sort: { key: SortKey; dir: SortDir };
  setSort: (s: { key: SortKey; dir: SortDir }) => void;
  children: React.ReactNode;
}) {
  const on = sort.key === k;
  const arrow = on ? (sort.dir === "asc" ? "↑" : "↓") : "↕";
  return (
    <button
      type="button"
      className="text-left transition-colors hover:text-[--color-text]"
      style={{
        ...cellStyle({ borderRight: true }),
        cursor: "pointer",
        color: on ? "var(--accent)" : "var(--text-mute)",
        fontWeight: 500,
        background: "transparent",
        font: "inherit",
        letterSpacing: "inherit",
        textTransform: "inherit" as React.CSSProperties["textTransform"],
      }}
      onClick={() => setSort({ key: k, dir: on && sort.dir === "asc" ? "desc" : "asc" })}
    >
      {children} <span style={{ marginLeft: 4, opacity: on ? 1 : 0.55 }}>{arrow}</span>
    </button>
  );
}

function getKey(r: SheetRow, key: SortKey): string {
  switch (key) {
    case "vendor": return r.cert.vendor.toLowerCase();
    case "name":   return r.cert.name.toLowerCase();
    case "code":   return (r.cert.code ?? "").toLowerCase();
    case "domain": return r.domain.name.toLowerCase();
    case "status": return r.cert.status ?? "active";
  }
}
