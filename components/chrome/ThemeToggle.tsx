"use client";

import { useEffect, useState } from "react";

type Mode = "light" | "dark" | "system";

export function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("system");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") setMode(stored);
  }, []);

  function set(next: Mode) {
    setMode(next);
    if (next === "system") {
      localStorage.removeItem("theme");
      document.documentElement.removeAttribute("data-theme");
    } else {
      localStorage.setItem("theme", next);
      document.documentElement.setAttribute("data-theme", next);
    }
  }

  const opts: { id: Mode; label: string }[] = [
    { id: "light",  label: "Light" },
    { id: "dark",   label: "Dark" },
    { id: "system", label: "Auto" },
  ];

  return (
    <div className="ml-auto flex items-center gap-px rounded-md border border-[--color-border] bg-[--color-surface] p-0.5">
      {opts.map((o) => {
        const on = o.id === mode;
        return (
          <button
            key={o.id}
            onClick={() => set(o.id)}
            aria-pressed={on}
            className={`mono rounded px-2.5 py-1 text-[10.5px] uppercase tracking-[0.06em] transition-colors ${
              on
                ? "bg-[--color-accent] text-white"
                : "text-[--color-text-mute] hover:text-[--color-text]"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
