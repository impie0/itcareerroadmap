import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { href: "/",         label: "Roadmap" },
  { href: "/paths",    label: "Paths" },
  { href: "/profiles", label: "Profiles" },
  { href: "/changers", label: "Changers" },
  { href: "/wiki",     label: "Wiki" },
  { href: "/blog",     label: "Blog" },
];

export function TopNav() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-[--color-border] bg-[--color-bg]/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1600px] items-center gap-6 px-4 lg:px-8">
        <Link
          href="/"
          className="mono flex items-center gap-2 text-[13px] font-semibold tracking-[-0.01em] text-[--color-text]"
        >
          <span className="inline-block size-2 rounded-sm bg-[--color-accent]" aria-hidden />
          <span>IT&nbsp;ROADMAP</span>
        </Link>

        <nav className="ml-2 flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="tap-target flex h-8 items-center px-3 text-[13px] font-medium text-[--color-text-2] transition-colors hover:text-[--color-text]"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <span className="mono hidden text-[10.5px] uppercase tracking-[0.12em] text-[--color-text-mute] sm:inline">
            v0.4 · Apr 2026
          </span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
