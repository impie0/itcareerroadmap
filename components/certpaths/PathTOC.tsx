"use client";

import { useEffect, useState } from "react";

/**
 * Sticky right-rail Table of Contents. Highlights the section currently in
 * the middle of the viewport via IntersectionObserver. Click an item to
 * smooth-scroll to it (the section uses scroll-margin-top to clear the chrome).
 */
export function PathTOC({ items }: { items: { slug: string; heading: string }[] }) {
  const [active, setActive] = useState<string>(items[0]?.slug ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // pick the topmost section that's visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 },
    );

    items.forEach((it) => {
      const el = document.getElementById(it.slug);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      className="sticky top-[72px] hidden max-h-[calc(100vh-100px)] overflow-y-auto lg:block"
      aria-label="On this page"
    >
      <div className="mono mb-2 text-[10.5px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--text-mute)" }}>
        On this page
      </div>
      <ul className="space-y-px border-l" style={{ borderColor: "var(--border)" }}>
        {items.map((it) => {
          const on = active === it.slug;
          return (
            <li key={it.slug}>
              <a
                href={`#${it.slug}`}
                className="block border-l-2 py-1 pl-3 text-[12.5px] transition-colors hover:text-[--color-accent]"
                style={{
                  marginLeft: "-1px",
                  borderLeftColor: on ? "var(--accent)" : "transparent",
                  color: on ? "var(--accent)" : "var(--text-2)",
                  fontWeight: on ? 600 : 400,
                }}
              >
                {it.heading}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
