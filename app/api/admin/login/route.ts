import { verifyPassword, issueSession, setAdminCookie, adminRedirect } from "@/lib/admin-auth";
import { logAdminAction } from "@/lib/admin-audit";
import { getIpHash, rateLimit } from "@/lib/ratelimit";

export async function POST(req: Request) {
  const ipHash = await getIpHash();
  // Aggressive rate limit on login: 3 attempts per 5 minutes per IP
  const limit = await rateLimit(`admin-login:${ipHash}`, 3, 300);
  if (!limit.ok) {
    return adminRedirect(req, "/admin/login?error=rate_limited");
  }

  const stored = process.env.ADMIN_PASSWORD_HASH;
  if (!stored || !process.env.SESSION_SECRET) {
    return adminRedirect(req, "/admin/login?error=config");
  }

  const form = await req.formData();
  const password = (form.get("password") ?? "").toString();
  const from = (form.get("from") ?? "").toString();

  // Always normalize, even on failure, so the timing of accept/reject is similar
  if (!verifyPassword(password, stored)) {
    await logAdminAction("login.fail");
    return adminRedirect(req, "/admin/login?error=invalid");
  }

  const { token, expSec } = issueSession();
  await setAdminCookie(token, expSec);
  await logAdminAction("login.success");

  const safeFrom = from && from.startsWith("/admin") ? from : "/admin";
  return adminRedirect(req, safeFrom);
}
