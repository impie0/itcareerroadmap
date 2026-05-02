import Link from "next/link";
import type { ReactNode } from "react";

type Crumb = { label: string; href?: string };

export function PageHeader({
  crumbs,
  title,
  subtitle,
  action,
}: {
  crumbs?: Crumb[];
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <header className="mb-6">
      {crumbs && crumbs.length > 0 && (
        <nav className="mb-3 text-[13px] text-[--color-text-mute]">
          {crumbs.map((c, i) => (
            <span key={i}>
              {c.href ? (
                <Link href={c.href} className="hover:text-[--color-text-2]">{c.label}</Link>
              ) : (
                <span className="text-[--color-text-2]">{c.label}</span>
              )}
              {i < crumbs.length - 1 && <span className="mx-1.5 opacity-50">/</span>}
            </span>
          ))}
        </nav>
      )}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="max-w-3xl">
          <h1 className="text-balance">{title}</h1>
          {subtitle && (
            <p className="mt-1.5 text-[14.5px] leading-[1.55] text-[--color-text-2]">{subtitle}</p>
          )}
        </div>
        {action}
      </div>
    </header>
  );
}
