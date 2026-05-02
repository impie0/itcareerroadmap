"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/admin",            label: "Dashboard" },
  { href: "/admin/comments",   label: "Comments" },
  { href: "/admin/feedback",   label: "Feedback" },
  { href: "/admin/stars",      label: "Stars" },
  { href: "/admin/likes",      label: "Likes" },
  { href: "/admin/blog",       label: "Posts" },
  { href: "/admin/audit",      label: "Audit" },
  { href: "/admin/unverified", label: "Unverified" },
  { href: "/admin/status",     label: "Status" },
];

export function AdminNav() {
  const pathname = usePathname();

  // Active rule: exact for /admin (so it doesn't match every nested page),
  // startsWith for everything else (so /admin/blog/new highlights "Posts").
  const isActive = (href: string) =>
    href === "/admin" ? pathname === "/admin" : pathname === href || pathname.startsWith(href + "/");

  return (
    <nav
      className="sticky top-0 z-30 border-b backdrop-blur"
      style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--bg) 88%, transparent)" }}
    >
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-1 px-4 py-2">
        <span className="mono mr-3 text-[10.5px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--accent)" }}>
          ADMIN
        </span>
        <div className="flex flex-wrap items-center gap-0.5">
          {NAV_ITEMS.map((n) => {
            const on = isActive(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className="mono inline-flex h-8 items-center rounded px-2.5 text-[11px] uppercase tracking-[0.06em] transition-colors"
                style={{
                  color: on ? "var(--accent)" : "var(--text-2)",
                  background: on ? "color-mix(in srgb, var(--accent) 12%, transparent)" : "transparent",
                }}
              >
                {n.label}
              </Link>
            );
          })}
        </div>
        <form method="POST" action="/api/admin/logout" className="ml-auto">
          <button
            type="submit"
            className="mono inline-flex h-8 items-center rounded border px-2.5 text-[11px] uppercase tracking-[0.06em]"
            style={{ borderColor: "var(--border)", color: "var(--text-mute)" }}
          >
            Sign out
          </button>
        </form>
      </div>
    </nav>
  );
}
