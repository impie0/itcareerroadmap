import type { ReactNode } from "react";

export type PillTone =
  | "active"
  | "retiring"
  | "beta"
  | "new"
  | "retired"
  | "neutral"
  | "accent"
  | "positive"
  | "warning"
  | "negative";

const TONE: Record<PillTone, string> = {
  active:    "text-[--color-info] border-[--color-info]/45 bg-[--color-info]/10",
  retiring:  "text-[--color-warning] border-[--color-warning]/45 bg-[--color-warning]/10",
  beta:      "text-[--color-accent] border-[--color-accent]/45 bg-[--color-accent]/10",
  new:       "text-[--color-positive] border-[--color-positive]/45 bg-[--color-positive]/10",
  retired:   "text-[--color-negative] border-[--color-negative]/45 bg-[--color-negative]/10",
  neutral:   "text-[--color-text-mute] border-[--color-border-strong]",
  accent:    "text-[--color-accent] border-[--color-accent]/45 bg-[--color-accent]/10",
  positive:  "text-[--color-positive] border-[--color-positive]/45 bg-[--color-positive]/10",
  warning:   "text-[--color-warning] border-[--color-warning]/45 bg-[--color-warning]/10",
  negative:  "text-[--color-negative] border-[--color-negative]/45 bg-[--color-negative]/10",
};

export function Pill({
  tone = "neutral",
  children,
  title,
}: {
  tone?: PillTone;
  children: ReactNode;
  title?: string;
}) {
  return (
    <span title={title} className={`pill ${TONE[tone]}`}>
      {children}
    </span>
  );
}
