import { MarkdownWithMermaid } from "./MarkdownWithMermaid";

/**
 * Collapsible section using native <details>/<summary>. Content renders into
 * the initial HTML (so search engines + no-JS users can read it) but is
 * visually collapsed until the user clicks. Above-fold sections (Overview,
 * Progression Diagram) bypass this and render directly in page.tsx.
 */
export function PathSection({
  heading,
  slug,
  markdown,
  defaultOpen = false,
}: {
  heading: string;
  slug: string;
  markdown: string;
  defaultOpen?: boolean;
}) {
  return (
    <details
      id={slug}
      className="path-section group rounded-lg border"
      style={{ borderColor: "var(--border)", scrollMarginTop: "80px" }}
      {...(defaultOpen ? { open: true } : {})}
    >
      <summary className="path-section-summary flex w-full cursor-pointer list-none items-center justify-between gap-4 px-5 py-3 text-left transition-colors hover:bg-[--color-surface]">
        <h2 className="text-[18px] font-semibold leading-tight" style={{ color: "var(--text)" }}>
          {heading}
        </h2>
        <span
          aria-hidden
          className="path-section-toggle mono text-[14px] tabular-nums"
          style={{ color: "var(--text-mute)" }}
        />
      </summary>
      <div className="border-t px-5 py-4" style={{ borderColor: "var(--border)" }}>
        <MarkdownWithMermaid markdown={markdown} />
      </div>
    </details>
  );
}
