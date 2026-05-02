import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin-auth";
import { prisma } from "@/lib/db";
import { loadAllCertifications } from "@/lib/certifications-loader";

export const dynamic = "force-dynamic";

type DbStat = { name: string; rows: number };

async function dbHealth(): Promise<{ ok: boolean; error?: string; version?: string; sizeBytes?: bigint }> {
  try {
    const v = await prisma.$queryRaw<{ version: string }[]>`SELECT version()`;
    const s = await prisma.$queryRaw<{ size: bigint }[]>`SELECT pg_database_size(current_database()) AS size`;
    return { ok: true, version: v[0]?.version ?? "unknown", sizeBytes: s[0]?.size };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) };
  }
}

function fmtBytes(n: bigint | number): string {
  const num = typeof n === "bigint" ? Number(n) : n;
  if (num < 1024) return `${num} B`;
  if (num < 1024 * 1024) return `${(num / 1024).toFixed(1)} KB`;
  if (num < 1024 * 1024 * 1024) return `${(num / 1024 / 1024).toFixed(1)} MB`;
  return `${(num / 1024 / 1024 / 1024).toFixed(2)} GB`;
}

function fmtUptime(seconds: number): string {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (d > 0) return `${d}d ${h}h ${m}m`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}

export default async function AdminStatusPage() {
  if (!(await isAdmin())) redirect("/admin/login?from=/admin/status");

  const [health, counts, certFiles] = await Promise.all([
    dbHealth(),
    Promise.all([
      prisma.like.count(),
      prisma.comment.count(),
      prisma.star.count(),
      prisma.feedback.count(),
      prisma.blogPost.count(),
      prisma.adminAudit.count(),
      prisma.rateLimit.count(),
    ]).then(([likes, comments, stars, feedback, posts, audit, rateLimit]): DbStat[] => [
      { name: "Like",       rows: likes },
      { name: "Comment",    rows: comments },
      { name: "Star",       rows: stars },
      { name: "Feedback",   rows: feedback },
      { name: "BlogPost",   rows: posts },
      { name: "AdminAudit", rows: audit },
      { name: "RateLimit",  rows: rateLimit },
    ]),
    loadAllCertifications(),
  ]);

  const uptimeSec = Math.floor(process.uptime());
  const memBytes = process.memoryUsage().rss;
  const nodeVersion = process.version;
  const totalRows = counts.reduce((n, c) => n + c.rows, 0);

  return (
    <main className="mx-auto max-w-[920px] px-5 py-8 lg:px-8 lg:py-10">
      <h1 className="mb-6 text-[22px] font-semibold" style={{ color: "var(--text)" }}>System status</h1>

      <section className="mb-8">
        <h2 className="mb-3 text-[14px] font-semibold uppercase tracking-[0.06em]" style={{ color: "var(--text-mute)" }}>Postgres</h2>
        <div className="rounded-md border p-4" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="flex items-baseline justify-between gap-3">
            <span className="text-[13.5px]" style={{ color: "var(--text)" }}>Connection</span>
            <span className="mono rounded border px-2 py-0.5 text-[10.5px] uppercase tracking-[0.06em]" style={{ color: health.ok ? "var(--positive)" : "var(--negative)", borderColor: "var(--border)" }}>
              ● {health.ok ? "healthy" : "down"}
            </span>
          </div>
          {health.error && (
            <div className="mt-2 text-[12px]" style={{ color: "var(--negative)" }}>{health.error}</div>
          )}
          {health.version && (
            <KV label="Version" value={health.version.split(" ").slice(0, 2).join(" ")} mono />
          )}
          {health.sizeBytes !== undefined && (
            <KV label="Database size" value={fmtBytes(health.sizeBytes)} mono />
          )}
          <KV label="Total rows" value={totalRows.toLocaleString()} mono />
        </div>

        <div className="mt-3 overflow-hidden rounded-md border" style={{ borderColor: "var(--border)" }}>
          <table className="w-full text-[13px]">
            <thead>
              <tr style={{ background: "var(--surface)" }}>
                <th className="mono px-3 py-2 text-left text-[10.5px] uppercase tracking-[0.06em]" style={{ color: "var(--text-mute)" }}>Table</th>
                <th className="mono px-3 py-2 text-right text-[10.5px] uppercase tracking-[0.06em]" style={{ color: "var(--text-mute)" }}>Rows</th>
              </tr>
            </thead>
            <tbody>
              {counts.map((c) => (
                <tr key={c.name} style={{ borderTop: "1px solid var(--border)" }}>
                  <td className="mono px-3 py-1.5" style={{ color: "var(--text-2)" }}>{c.name}</td>
                  <td className="mono px-3 py-1.5 text-right tabular-nums" style={{ color: "var(--text)" }}>{c.rows.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-[14px] font-semibold uppercase tracking-[0.06em]" style={{ color: "var(--text-mute)" }}>Content</h2>
        <div className="rounded-md border p-4" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <KV label="Certification files indexed" value={certFiles.length.toLocaleString()} mono />
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-[14px] font-semibold uppercase tracking-[0.06em]" style={{ color: "var(--text-mute)" }}>Admin container</h2>
        <div className="rounded-md border p-4" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <KV label="Uptime"       value={fmtUptime(uptimeSec)} mono />
          <KV label="Memory (RSS)" value={fmtBytes(memBytes)}   mono />
          <KV label="Node"         value={nodeVersion}          mono />
          <KV label="SITE_MODE"    value={process.env.SITE_MODE ?? "(unset)"} mono />
          <KV label="Public URL"   value={process.env.PUBLIC_SITE_URL ?? "(default)"} mono />
        </div>
      </section>

      <p className="mt-8 text-[12px]" style={{ color: "var(--text-mute)" }}>
        Counts are live as of {new Date().toISOString().slice(0, 19).replace("T", " ")} UTC.
        Reload the page to refresh.
      </p>
    </main>
  );
}

function KV({ label, value, mono }: { label: string; value: string | number; mono?: boolean }) {
  return (
    <div className="mt-1.5 flex items-baseline justify-between gap-3 first:mt-0">
      <span className="text-[12.5px]" style={{ color: "var(--text-mute)" }}>{label}</span>
      <span className={`text-[12.5px] tabular-nums ${mono ? "mono" : ""}`} style={{ color: "var(--text)" }}>
        {value}
      </span>
    </div>
  );
}
