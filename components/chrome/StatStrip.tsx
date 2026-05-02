export function StatStrip({ stats }: { stats: { label: string; value: string | number }[] }) {
  return (
    <dl
      className="grid gap-px overflow-hidden rounded-[10px] border border-[--color-border] bg-[--color-border] [&>div]:bg-[--color-bg]"
      style={{ gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))` }}
    >
      {stats.map((s) => (
        <div key={s.label} className="px-4 py-3.5">
          <dt className="text-[11px] font-medium uppercase tracking-[0.08em] text-[--color-text-mute]">
            {s.label}
          </dt>
          <dd className="mono mt-0.5 text-[22px] font-semibold tabular-nums text-[--color-text]">
            {s.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
