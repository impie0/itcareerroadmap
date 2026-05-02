import Link from "next/link";
import type { Cert } from "@/content/certs";
import { vendorColor } from "@/lib/vendor-colors";

const LEVEL_PILL: Record<string, string> = {
  Entry: "L1",
  Associate: "L2",
  Professional: "L3",
  Expert: "L4",
};

const STATUS_DOT: Record<NonNullable<Cert["status"]>, { color: string; title: string }> = {
  active:     { color: "var(--color-positive)", title: "Active" },
  retiring:   { color: "var(--color-warning)",  title: "Retiring" },
  retired:    { color: "var(--color-negative)", title: "Retired" },
  beta:       { color: "var(--color-accent)",   title: "Beta" },
  new:        { color: "var(--color-positive)", title: "New" },
  unverified: { color: "var(--color-warning)",  title: "Unverified" },
};

function vendorAbbrev(vendor: string): string {
  return vendor
    .replace(/[/().]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((p) => p[0])
    .slice(0, 3)
    .join("")
    .toUpperCase();
}

type RowProps = {
  cert: Cert;
  level: "Entry" | "Associate" | "Professional" | "Expert";
  domainName?: string;
};

export function CertRow(
  props: RowProps & ({ onPick: () => void; href?: never } | { href: string; onPick?: never }),
) {
  const { cert, level, domainName } = props;
  const accent = vendorColor(cert.vendor);
  const status = cert.status ?? "active";
  const dot = STATUS_DOT[status];

  const inner = (
    <>
      <span aria-hidden style={{ background: accent }} className="h-full w-1 self-stretch flex-shrink-0" />
      <span className="mono flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-[--color-border] bg-[--color-surface] text-[11px] font-semibold text-[--color-text-2]">
        {vendorAbbrev(cert.vendor)}
      </span>
      <div className="min-w-0 flex-1">
        <div className="truncate text-[15px] font-semibold text-[--color-text] group-hover:text-[--color-accent]">
          {cert.name}
        </div>
        <div className="truncate text-[12.5px] text-[--color-text-mute]">
          <span>{cert.vendor}</span>
          {cert.code && cert.code !== "—" && (
            <>
              <span className="mx-1 opacity-50">·</span>
              <span className="mono text-[--color-text-2]">{cert.code}</span>
            </>
          )}
          {domainName && (
            <>
              <span className="mx-1 opacity-50">·</span>
              <span>{domainName}</span>
            </>
          )}
          {cert.note && (
            <>
              <span className="mx-1 opacity-50">·</span>
              <span className="hidden sm:inline">{cert.note}</span>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-shrink-0 items-center gap-2.5">
        <span className="mono rounded border border-[--color-border] bg-[--color-surface-2] px-1.5 py-0.5 text-[10.5px] font-medium uppercase tracking-[0.06em] text-[--color-text-2]">
          {LEVEL_PILL[level]}
        </span>
        <span
          aria-label={dot.title}
          title={dot.title}
          style={{ background: dot.color }}
          className="h-2 w-2 rounded-full"
        />
      </div>
    </>
  );

  const className =
    "group relative flex w-full items-center gap-4 overflow-hidden rounded-lg border border-[--color-border] bg-[--color-bg] py-3 pr-4 text-left transition-colors hover:border-[--color-border-strong] hover:bg-[--color-surface]";

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={className}>
        {inner}
      </Link>
    );
  }

  return (
    <button onClick={props.onPick} className={className}>
      {inner}
    </button>
  );
}
