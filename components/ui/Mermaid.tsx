"use client";

import { useEffect, useId, useRef, useState } from "react";

/*
  Lazy-loaded Mermaid renderer. The mermaid package is ~800KB so we only
  import it when at least one <Mermaid /> mounts. Each instance renders its
  own SVG into a ref div. Theme follows the page's light/dark mode.
*/

type MermaidLib = typeof import("mermaid").default;
let lib: MermaidLib | null = null;
let libPromise: Promise<MermaidLib> | null = null;

async function getMermaid(): Promise<MermaidLib> {
  if (lib) return lib;
  if (libPromise) return libPromise;
  libPromise = import("mermaid").then((m) => {
    lib = m.default;
    lib.initialize({
      startOnLoad: false,
      theme: "default",
      securityLevel: "loose",
      fontFamily: "var(--font-inter), system-ui, sans-serif",
    });
    return lib;
  });
  return libPromise;
}

export function Mermaid({ code }: { code: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const m = await getMermaid();
        const safeId = `m-${id}`;
        const { svg } = await m.render(safeId, code);
        if (!cancelled && ref.current) {
          ref.current.innerHTML = svg;
        }
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : String(e));
      }
    })();
    return () => { cancelled = true; };
  }, [code, id]);

  if (error) {
    return (
      <div
        className="mb-4 overflow-x-auto rounded-md border p-3 text-[12px]"
        style={{
          borderColor: "color-mix(in srgb, var(--negative) 40%, transparent)",
          background: "color-mix(in srgb, var(--negative) 6%, transparent)",
          color: "var(--negative)",
        }}
      >
        <div className="mono mb-1 text-[10.5px] uppercase tracking-[0.06em]">Mermaid render error</div>
        <pre className="whitespace-pre-wrap">{error}</pre>
        <details className="mt-2 cursor-pointer">
          <summary className="text-[--color-text-mute]">Source</summary>
          <pre className="mt-1 whitespace-pre-wrap" style={{ color: "var(--text-2)" }}>{code}</pre>
        </details>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="mb-6 overflow-x-auto rounded-md border p-4"
      style={{ borderColor: "var(--border)", background: "var(--bg)" }}
    />
  );
}
