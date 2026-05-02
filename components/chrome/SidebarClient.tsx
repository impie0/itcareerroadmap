"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TOP_NAV = [
  { href: "/certs",                label: "Browse certs",        countKey: "certs"             as const },
  { href: "/matrix",               label: "Matrix view",         countKey: undefined           as undefined },
  { href: "/vendors",              label: "Vendors",             countKey: "vendors"           as const },
  { href: "/certification-paths",  label: "Certification paths", countKey: "certificationPaths" as const },
  { href: "/profiles",   label: "Role profiles",   countKey: "roles"      as const },
  { href: "/roadmaps",   label: "Roadmaps",        countKey: "roadmaps"   as const },
  { href: "/industries", label: "Industries",      countKey: "industries" as const },
  { href: "/topics",     label: "Topics",          countKey: "topics"     as const },
  { href: "/paths",      label: "Career paths",    countKey: "paths"      as const },
  { href: "/changers",   label: "Career changers", countKey: "changers"   as const },
  { href: "/wiki",       label: "Wiki",            countKey: "wiki"       as const },
  { href: "/blog",       label: "Blog",            countKey: undefined    as undefined },
];

// Each link goes to the destination that actually shows that content type.
// Roadmaps/Industries/Topics/Specialty have dedicated top-level pages now.
// Domains/Ecosystems still live on /wiki — anchor IDs added there match these.
const DEEP_DIVE_NAV = [
  { href: "/wiki#domain",    label: "Domains" },
  { href: "/wiki#ecosystem", label: "Ecosystems" },
  { href: "/roadmaps",       label: "Career roadmaps" },
  { href: "/industries",     label: "Industries" },
  { href: "/profiles",       label: "Specialty roles" },
  { href: "/topics",         label: "Cross-cutting" },
];

type Item = { id: string; name: string; count: number };

type DynamicCounts = {
  vendors?: number;
  industries?: number;
  roadmaps?: number;
  topics?: number;
  certificationPaths?: number;
};

export function Sidebar({
  domains,
  ecosystems,
  counts: extra = {},
}: {
  domains: Item[];
  ecosystems: Item[];
  counts?: DynamicCounts;
}) {
  const pathname = usePathname();
  const totalCerts =
    domains.reduce((n, d) => n + d.count, 0) + ecosystems.reduce((n, e) => n + e.count, 0);
  const counts: Record<string, number> = {
    certs: totalCerts,
    vendors: extra.vendors ?? 0,
    certificationPaths: extra.certificationPaths ?? 0,
    paths: 64,
    roles: 24,
    roadmaps: extra.roadmaps ?? 0,
    industries: extra.industries ?? 0,
    topics: extra.topics ?? 0,
    changers: 10,
    wiki: 104,
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <aside className="sticky top-14 hidden h-[calc(100dvh-56px)] overflow-y-auto border-r border-[--color-border] bg-[--color-bg] px-2 py-4 lg:block">
      {TOP_NAV.map((n) => {
        const on = isActive(n.href);
        const count = n.countKey ? counts[n.countKey] : undefined;
        return (
          <Link
            key={n.href}
            href={n.href}
            className={`relative flex items-center gap-2 rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors ${
              on
                ? "bg-[--color-accent-soft] text-[--color-text] font-semibold"
                : "text-[--color-text-2] hover:bg-[--color-surface] hover:text-[--color-text]"
            }`}
          >
            {on && <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-sm bg-[--color-accent]" aria-hidden />}
            <span>{n.label}</span>
            {count !== undefined && (
              <span
                className={`mono ml-auto rounded px-1.5 py-px text-[10.5px] ${
                  on ? "text-[--color-accent]" : "bg-[--color-surface] text-[--color-text-mute]"
                }`}
              >
                {count}
              </span>
            )}
          </Link>
        );
      })}

      <div
        className="mt-4 px-3 pb-1.5 mono text-[10.5px] font-medium uppercase tracking-[0.08em]"
        style={{ color: "var(--text-mute)" }}
      >
        Deep Dives
      </div>
      {DEEP_DIVE_NAV.map((n) => (
        <Link
          key={n.href}
          href={n.href}
          className="relative flex items-center gap-2 rounded-md px-3 py-1.5 text-[12.5px] transition-colors text-[--color-text-2] hover:bg-[--color-surface] hover:text-[--color-text]"
        >
          <span>{n.label}</span>
        </Link>
      ))}

      <div
        className="mt-4 px-3 pb-1.5 mono text-[10.5px] font-medium uppercase tracking-[0.08em]"
        style={{ color: "var(--text-mute)" }}
      >
        12 Domains
      </div>
      {domains.map((d) => {
        const on = pathname === `/certs/domain/${d.id}`;
        return (
          <Link
            key={d.id}
            href={`/certs/domain/${d.id}`}
            className={`relative flex items-center gap-2 rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors ${
              on
                ? "bg-[--color-accent-soft] text-[--color-text] font-semibold"
                : "text-[--color-text-2] hover:bg-[--color-surface] hover:text-[--color-text]"
            }`}
          >
            {on && <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-sm bg-[--color-accent]" aria-hidden />}
            <span>{d.name}</span>
            <span className={`mono ml-auto rounded px-1.5 py-px text-[10.5px] ${on ? "text-[--color-accent]" : "bg-[--color-surface] text-[--color-text-mute]"}`}>
              {d.count}
            </span>
          </Link>
        );
      })}

      <div
        className="mt-4 px-3 pb-1.5 mono text-[10.5px] font-medium uppercase tracking-[0.08em]"
        style={{ color: "var(--text-mute)" }}
      >
        {ecosystems.length} Ecosystems
      </div>
      {ecosystems.map((d) => {
        const on = pathname === `/certs/domain/${d.id}`;
        return (
          <Link
            key={d.id}
            href={`/certs/domain/${d.id}`}
            className={`relative flex items-center gap-2 rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors ${
              on
                ? "bg-[--color-accent-soft] text-[--color-text] font-semibold"
                : "text-[--color-text-2] hover:bg-[--color-surface] hover:text-[--color-text]"
            }`}
          >
            {on && <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-sm bg-[--color-accent]" aria-hidden />}
            <span>{d.name}</span>
            <span className={`mono ml-auto rounded px-1.5 py-px text-[10.5px] ${on ? "text-[--color-accent]" : "bg-[--color-surface] text-[--color-text-mute]"}`}>
              {d.count}
            </span>
          </Link>
        );
      })}
    </aside>
  );
}
