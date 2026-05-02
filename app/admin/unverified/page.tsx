import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin-auth";
import { loadAllCertifications } from "@/lib/certifications-loader";
import { publicSiteOrigin } from "@/lib/admin-targets";

export const dynamic = "force-dynamic";

const CANONICAL = new Set(["active", "retiring", "retired", "beta", "new", "unverified"]);

export default async function AdminUnverifiedPage() {
  if (!(await isAdmin())) redirect("/admin/login?from=/admin/unverified");

  const all = await loadAllCertifications();
  const publicOrigin = publicSiteOrigin();

  // Bucket by why they need attention
  const explicitUnverified: typeof all = [];
  const unknownStatus: typeof all = [];
  const tbdCodes: typeof all = [];

  for (const c of all) {
    const status = (c.status ?? "").toLowerCase().trim();
    if (status.includes("verif")) {
      explicitUnverified.push(c);
    } else if (status && !CANONICAL.has(status)) {
      unknownStatus.push(c);
    }
    if ((c.code ?? "").toUpperCase().includes("TBD")) {
      tbdCodes.push(c);
    }
  }

  const sections = [
    { title: "Marked 'requires verification'", desc: "Author flagged this cert as needing vendor verification.", items: explicitUnverified },
    { title: "Code contains 'TBD'",            desc: "Code is a placeholder — research couldn't confirm the actual exam ID.", items: tbdCodes },
    { title: "Unknown status string",          desc: "Status isn't one of the canonical values (active/retiring/retired/beta/new/unverified).", items: unknownStatus },
  ];

  const total = explicitUnverified.length + unknownStatus.length + tbdCodes.length;

  return (
    <main className="mx-auto max-w-[1100px] px-5 py-8 lg:px-8 lg:py-10">
      <div className="mb-6">
        <Link href="/admin" className="mono text-[10.5px] uppercase tracking-[0.06em] text-[--color-text-mute] hover:text-[--color-accent]">← Admin</Link>
        <h1 className="mt-1 text-[22px] font-semibold" style={{ color: "var(--text)" }}>Unverified certifications</h1>
        <p className="mt-1 max-w-[70ch] text-[13px]" style={{ color: "var(--text-2)" }}>
          Cert source files live on disk under <code className="mono rounded bg-[--color-surface] px-1">Deep Dive/Certifications/</code> and are loaded
          into the matrix at build time. To clean these up: open the source file shown for each entry, verify the cert details against the vendor's
          official page, and either update <code className="mono">status: active</code> + correct the code, OR delete the file if the cert isn't real.
        </p>
      </div>

      {total === 0 ? (
        <div className="rounded-md border p-6 text-center" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="mono text-[10.5px] uppercase tracking-[0.08em]" style={{ color: "var(--positive)" }}>● clean</div>
          <p className="mt-2 text-[14px]" style={{ color: "var(--text)" }}>No unverified certs — everything in the matrix has a canonical status.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {sections.map((s) => (
            <section key={s.title}>
              <header className="mb-2 flex items-baseline justify-between border-b pb-1.5" style={{ borderColor: "var(--border)" }}>
                <div>
                  <h2 className="text-[16px] font-semibold" style={{ color: "var(--text)" }}>{s.title}</h2>
                  <p className="mt-0.5 text-[12px]" style={{ color: "var(--text-2)" }}>{s.desc}</p>
                </div>
                <span className="mono text-[11px] uppercase tracking-[0.06em]" style={{ color: s.items.length === 0 ? "var(--positive)" : "var(--warning)" }}>
                  {s.items.length}
                </span>
              </header>
              {s.items.length === 0 ? (
                <p className="text-[12.5px] italic" style={{ color: "var(--text-mute)" }}>None</p>
              ) : (
                <ul className="space-y-1.5">
                  {s.items.map((c) => (
                    <li key={c.filePath} className="rounded-md border p-3" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                      <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <div className="text-[13.5px] font-semibold" style={{ color: "var(--text)" }}>
                            {c.vendor} — {c.name}
                          </div>
                          <div className="mono mt-1 text-[11px]" style={{ color: "var(--text-mute)" }}>
                            code: <code>{c.code || "(none)"}</code>
                            {" · "}status: <code>{c.status || "(none)"}</code>
                            {c.level && <> · level: <code>{c.level}</code></>}
                          </div>
                          <div className="mono mt-0.5 text-[11px]" style={{ color: "var(--text-2)" }}>
                            file: <code>{c.sourceFile || c.filePath}</code>
                          </div>
                        </div>
                        <div className="flex flex-shrink-0 flex-col items-end gap-1">
                          {c.url && (
                            <a
                              href={c.url}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="mono inline-flex h-7 items-center rounded border px-2.5 text-[10.5px] uppercase tracking-[0.06em]"
                              style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                            >
                              Vendor page ↗
                            </a>
                          )}
                          <a
                            href={`${publicOrigin}/cert/${c.vendorSlug.toLowerCase()}/${c.codeSlug}`}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="mono inline-flex h-7 items-center rounded border px-2.5 text-[10.5px] uppercase tracking-[0.06em]"
                            style={{ borderColor: "var(--border)", color: "var(--text-2)" }}
                          >
                            Live page ↗
                          </a>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      )}
    </main>
  );
}
