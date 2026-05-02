"use client";

import { useMemo, useState } from "react";
import type { Cert, Domain, DomainLevel, Ecosystem } from "@/content/certs";
import { CertSheet, type SheetRow } from "./CertSheet";
import { CertDrawer } from "./CertDrawer";
import { MatrixWallchart } from "@/components/matrix/MatrixWallchart";

const LEVELS: Array<DomainLevel["level"]> = ["Entry", "Associate", "Professional", "Expert"];

export function CertBrowser({
  domains,
  ecosystems,
  hardware,
  vendor = [],
  initialDomain,
  initialEcosystem,
}: {
  domains: Domain[];
  ecosystems: Ecosystem[];
  hardware: Ecosystem[];
  vendor?: Ecosystem[];
  initialDomain?: string;
  initialEcosystem?: string;
}) {
  const [view, setView] = useState<"sheets" | "wallchart">("sheets");
  const [active, setActive] = useState<SheetRow | null>(null);
  const [search, setSearch] = useState("");

  const sources = useMemo(() => {
    if (initialDomain) return domains.filter((d) => d.id === initialDomain);
    if (initialEcosystem) return [...ecosystems, ...hardware, ...vendor].filter((d) => d.id === initialEcosystem);
    return [...domains, ...ecosystems, ...hardware, ...vendor];
  }, [domains, ecosystems, hardware, vendor, initialDomain, initialEcosystem]);

  const allRows = useMemo<SheetRow[]>(() => {
    const out: SheetRow[] = [];
    sources.forEach((d) =>
      d.levels.forEach((l) =>
        l.certs.forEach((c) => out.push({ cert: c, domain: d, level: l })),
      ),
    );
    return out;
  }, [sources]);

  const matched = useMemo(() => {
    if (!search.trim()) return allRows;
    const q = search.trim().toLowerCase();
    return allRows.filter((r) => {
      const hay = `${r.cert.vendor} ${r.cert.name} ${r.cert.code ?? ""} ${r.cert.note ?? ""} ${r.domain.name}`.toLowerCase();
      return hay.includes(q);
    });
  }, [allRows, search]);

  const byLevel = useMemo(() => {
    const map: Record<DomainLevel["level"], { rows: SheetRow[]; total: number }> = {
      Entry:        { rows: [], total: 0 },
      Associate:    { rows: [], total: 0 },
      Professional: { rows: [], total: 0 },
      Expert:       { rows: [], total: 0 },
    };
    allRows.forEach((r) => (map[r.level.level].total += 1));
    matched.forEach((r) => map[r.level.level].rows.push(r));
    return map;
  }, [allRows, matched]);

  const totalAll = allRows.length;
  const totalShown = matched.length;

  return (
    <>
      <div className="sticky top-14 z-20 -mx-5 mb-4 border-b border-[--color-border] bg-[--color-bg]/92 px-5 py-3 backdrop-blur lg:-mx-8 lg:px-8">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex gap-px overflow-hidden rounded-md border border-[--color-border] bg-[--color-surface] p-0.5">
            <ViewBtn on={view === "sheets"} onClick={() => setView("sheets")}>📋 Tables by level</ViewBtn>
            <ViewBtn on={view === "wallchart"} onClick={() => setView("wallchart")}>🗺 Wallchart</ViewBtn>
          </div>

          {view === "sheets" && (
            <div className="ml-3 flex gap-1">
              {LEVELS.map((l) => {
                const lvlNum = { Entry: "L1", Associate: "L2", Professional: "L3", Expert: "L4" }[l];
                return (
                  <a
                    key={l}
                    href={`#lvl-${l.toLowerCase()}`}
                    className="mono inline-flex h-8 items-center gap-1.5 rounded-md border border-[--color-border] bg-[--color-surface] px-2.5 text-[11px] uppercase tracking-[0.06em] text-[--color-text-2] hover:border-[--color-accent] hover:text-[--color-accent]"
                  >
                    <span className="text-[--color-text-mute]">{lvlNum}</span>
                    <span>{l}</span>
                    <span className="text-[--color-accent]">{byLevel[l].total}</span>
                  </a>
                );
              })}
            </div>
          )}

          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={view === "wallchart" ? "Search cert code or name…" : "Filter rows…"}
            className="mono h-8 rounded-md border border-[--color-border] bg-[--color-surface] px-2.5 text-[12px] text-[--color-text] placeholder:text-[--color-text-mute] focus:border-[--color-accent] focus:outline-none"
            style={{ width: 240 }}
          />

          <span className="mono ml-auto text-[11px] uppercase tracking-[0.06em] text-[--color-text-mute]">
            {totalShown} / {totalAll}
          </span>
        </div>
      </div>

      {view === "sheets" ? (
        <>
          {LEVELS.map((l) => (
            <CertSheet
              key={l}
              level={l}
              count={byLevel[l].total}
              rows={byLevel[l].rows}
              onPick={setActive}
            />
          ))}
        </>
      ) : (
        <div className="-mx-5 lg:-mx-8">
          <MatrixWallchart
            domains={initialDomain || initialEcosystem ? sources.filter((d) => domains.includes(d as Domain)) : domains}
            ecosystems={initialDomain || initialEcosystem ? sources.filter((d) => ecosystems.includes(d as Ecosystem)) as Ecosystem[] : ecosystems}
            hardware={initialDomain || initialEcosystem ? sources.filter((d) => hardware.includes(d as Ecosystem)) as Ecosystem[] : hardware}
            vendor={initialDomain || initialEcosystem ? sources.filter((d) => vendor.includes(d as Ecosystem)) as Ecosystem[] : vendor}
            search={search}
          />
        </div>
      )}

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

function ViewBtn({
  on,
  onClick,
  children,
}: {
  on: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`mono inline-flex h-7 items-center gap-1.5 rounded px-3 text-[11px] uppercase tracking-[0.06em] transition-colors ${
        on ? "bg-[--color-accent] text-white" : "text-[--color-text-2] hover:text-[--color-text]"
      }`}
    >
      {children}
    </button>
  );
}
