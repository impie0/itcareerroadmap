import Link from "next/link";
import { PageHeader } from "@/components/chrome/PageHeader";
import { StatStrip } from "@/components/chrome/StatStrip";
import { loadVendors } from "@/lib/vendors-loader";
import { vendorColor } from "@/lib/vendor-colors";

export default async function VendorsIndex() {
  const vendors = await loadVendors();
  const totalCerts = vendors.reduce((n, v) => n + v.certCount, 0);

  return (
    <main className="mx-auto max-w-[1100px] px-5 py-8 lg:px-8 lg:py-10">
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Vendors" }]}
        title="Vendors"
        subtitle={`${vendors.length} vendors with ${totalCerts} certifications. Each vendor page shows its full cert ladder — Entry → Expert — pulled directly from per-cert deep-dive files.`}
      />

      <div className="mb-6">
        <StatStrip
          stats={[
            { label: "Vendors", value: vendors.length },
            { label: "Total certs", value: totalCerts },
            { label: "Top 5", value: vendors.slice(0, 5).map((v) => v.name).join(" · ") },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {vendors.map((v) => {
          const accent = vendorColor(v.name);
          return (
            <Link
              key={v.slug}
              href={`/vendor/${v.slug}`}
              className="tap-target group relative flex flex-col items-start overflow-hidden rounded-lg border-2 p-4 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                borderColor: "var(--border)",
                background: "var(--surface)",
              }}
            >
              {/* 4px vendor-color accent bar across the top of every card */}
              <span aria-hidden className="absolute left-0 right-0 top-0 h-[4px]" style={{ background: accent }} />

              <h3 className="mt-1 text-[16px] font-semibold leading-snug text-[--color-text] group-hover:text-[--color-accent]">
                {v.name}
              </h3>
              <div className="mono mt-1 text-[11px] uppercase tracking-[0.08em] text-[--color-text-mute]">
                {v.certCount} cert{v.certCount === 1 ? "" : "s"}
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {(["Entry", "Associate", "Professional", "Expert"] as const).map((lvl) => {
                  const n = v.countsByLevel[lvl];
                  if (n === 0) return null;
                  return (
                    <span
                      key={lvl}
                      className="mono rounded border px-1.5 py-0.5 text-[10.5px] font-medium"
                      style={{ borderColor: "var(--border)", color: "var(--text-2)", background: "var(--bg)" }}
                    >
                      {lvl[0]}·{n}
                    </span>
                  );
                })}
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
