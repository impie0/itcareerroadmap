import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; from?: string }>;
}) {
  if (await isAdmin()) redirect("/admin");
  const params = await searchParams;

  return (
    <main className="mx-auto max-w-[420px] px-5 py-16">
      <h1 className="text-[20px] font-semibold" style={{ color: "var(--text)" }}>Admin login</h1>
      <p className="mt-1 text-[13px]" style={{ color: "var(--text-2)" }}>
        Enter the admin password configured at <code className="mono rounded bg-[--color-surface] px-1">ADMIN_PASSWORD_HASH</code>.
      </p>
      <form
        method="POST"
        action="/api/admin/login"
        className="mt-6 rounded-md border p-5"
        style={{ borderColor: "var(--border)", background: "var(--surface)" }}
      >
        {params.from && <input type="hidden" name="from" value={params.from} />}
        <label className="mono mb-1.5 block text-[10.5px] uppercase tracking-[0.08em] text-[--color-text-mute]" htmlFor="pw">
          Password
        </label>
        <input
          type="password"
          id="pw"
          name="password"
          required
          autoFocus
          autoComplete="current-password"
          className="w-full rounded-md border p-2 text-[14px]"
          style={{ borderColor: "var(--border)", background: "var(--bg)", color: "var(--text)" }}
        />
        {params.error === "invalid" && (
          <div className="mt-3 text-[12.5px]" style={{ color: "var(--negative)" }}>
            Wrong password.
          </div>
        )}
        {params.error === "rate_limited" && (
          <div className="mt-3 text-[12.5px]" style={{ color: "var(--warning)" }}>
            Too many attempts — wait a few minutes.
          </div>
        )}
        {params.error === "config" && (
          <div className="mt-3 text-[12.5px]" style={{ color: "var(--negative)" }}>
            Server misconfigured: ADMIN_PASSWORD_HASH or SESSION_SECRET missing.
          </div>
        )}
        <button
          type="submit"
          className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-md bg-[--color-text] px-4 text-[14px] font-semibold text-[--color-bg] hover:bg-[--color-text-2]"
        >
          Sign in
        </button>
      </form>
    </main>
  );
}
