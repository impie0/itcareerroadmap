import Link from "next/link";
import type { SpecialtyRole } from "@/lib/specialty-roles-loader";

export function SpecialtyRoleSection({ roles }: { roles: SpecialtyRole[] }) {
  if (roles.length === 0) return null;
  return (
    <section className="mt-12">
      <header className="mb-3 border-b pb-2" style={{ borderColor: "var(--border)" }}>
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="text-[18px] font-semibold">Specialty roles</h2>
          <span className="mono text-[11px] uppercase tracking-[0.06em]" style={{ color: "var(--text-mute)" }}>
            {roles.length} deep-dive{roles.length === 1 ? "" : "s"}
          </span>
        </div>
        <p className="mt-1 text-[13px]" style={{ color: "var(--text-2)" }}>
          Career arcs that don't fit the standard help-desk → architect ladder. Pentest, DFIR, ICS/OT, Salesforce CTA, SAP, mainframe → cloud, etc.
          Each is a long-form research file — click through to the wiki entry for the full read.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {roles.map((r) => (
          <Link
            key={r.code}
            href={`/wiki/specialty/${r.slug}`}
            className="tap-target group relative flex flex-col items-start overflow-hidden rounded-lg border-2 p-4 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <span aria-hidden className="absolute left-0 right-0 top-0 h-[4px]" style={{ background: "var(--negative)" }} />
            <div className="mono mt-1 text-[10.5px] uppercase tracking-[0.1em] text-[--color-text-mute]">
              {r.code} · specialty
            </div>
            <h3 className="mt-1 text-[15.5px] font-semibold leading-snug text-[--color-text] group-hover:text-[--color-accent]">
              {r.title}
            </h3>
            {(r.vendors.length > 0 || r.tags.length > 0) && (
              <div className="mt-3 flex flex-wrap gap-1">
                {r.vendors.map((v) => (
                  <span
                    key={`v-${v}`}
                    className="mono rounded border px-1.5 py-0.5 text-[10.5px] font-medium"
                    style={{ borderColor: "var(--border)", color: "var(--text)", background: "var(--bg)" }}
                  >
                    {v}
                  </span>
                ))}
                {r.tags.slice(0, 4).map((t) => (
                  <span
                    key={`t-${t}`}
                    className="mono rounded border px-1.5 py-0.5 text-[10.5px]"
                    style={{ borderColor: "var(--border)", color: "var(--text-2)", background: "var(--bg)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
            <span className="mt-3 text-[12px] text-[--color-text-mute] group-hover:text-[--color-accent]">
              Read full deep dive →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
