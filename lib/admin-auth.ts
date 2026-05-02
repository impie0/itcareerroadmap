import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const COOKIE_NAME = "admin_session";
const SESSION_TTL_SEC = 60 * 60 * 8; // 8h sliding window

const SCRYPT_KEYLEN = 32;
const SCRYPT_PARAMS = { N: 16384, r: 8, p: 1 };

/* ============================================================
   Password hashing (scrypt). Format: scrypt$<saltHex>$<hashHex>
   Storage: ADMIN_PASSWORD_HASH env var.
   ============================================================ */

export function hashPassword(plain: string): string {
  const salt = randomBytes(16);
  const hash = scryptSync(plain.normalize("NFKC"), salt, SCRYPT_KEYLEN, SCRYPT_PARAMS);
  return `scrypt$${salt.toString("hex")}$${hash.toString("hex")}`;
}

export function verifyPassword(plain: string, stored: string): boolean {
  if (!stored || !stored.startsWith("scrypt$")) return false;
  const parts = stored.split("$");
  if (parts.length !== 3) return false;
  const salt = Buffer.from(parts[1], "hex");
  const expected = Buffer.from(parts[2], "hex");
  if (expected.length !== SCRYPT_KEYLEN) return false;
  const candidate = scryptSync(plain.normalize("NFKC"), salt, SCRYPT_KEYLEN, SCRYPT_PARAMS);
  return timingSafeEqual(candidate, expected);
}

/* ============================================================
   Session cookies. HMAC-SHA256 over `${expSec}.${jti}`, signed
   with SESSION_SECRET. We don't store sessions server-side —
   the cookie itself IS the credential, signed so it can't be forged.
   ============================================================ */

type Session = { exp: number; jti: string };

function getSecret(): string {
  const s = process.env.SESSION_SECRET;
  if (!s || s.length < 32) {
    throw new Error("SESSION_SECRET env var missing or too short (need >=32 chars)");
  }
  return s;
}

function sign(payload: string, secret: string): string {
  return createHmac("sha256", secret).update(payload).digest("hex");
}

export function issueSession(): { token: string; expSec: number } {
  const expSec = Math.floor(Date.now() / 1000) + SESSION_TTL_SEC;
  const jti = randomBytes(16).toString("hex");
  const payload = `${expSec}.${jti}`;
  const sig = sign(payload, getSecret());
  return { token: `${payload}.${sig}`, expSec };
}

export function verifyToken(token: string | undefined): Session | null {
  if (!token) return null;
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const [expStr, jti, sig] = parts;
  const payload = `${expStr}.${jti}`;
  const expected = sign(payload, getSecret());
  if (sig.length !== expected.length) return null;
  if (!timingSafeEqual(Buffer.from(sig, "hex"), Buffer.from(expected, "hex"))) return null;
  const exp = Number(expStr);
  if (!Number.isFinite(exp) || exp * 1000 < Date.now()) return null;
  return { exp, jti };
}

/* ============================================================
   Cookie helpers (read in server components / route handlers).
   ============================================================ */

export async function getAdminSession(): Promise<Session | null> {
  const c = await cookies();
  return verifyToken(c.get(COOKIE_NAME)?.value);
}

export async function isAdmin(): Promise<boolean> {
  return (await getAdminSession()) !== null;
}

export async function setAdminCookie(token: string, expSec: number) {
  const c = await cookies();
  c.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    expires: new Date(expSec * 1000),
  });
}

export async function clearAdminCookie() {
  const c = await cookies();
  c.delete(COOKIE_NAME);
}

export const ADMIN_COOKIE_NAME = COOKIE_NAME;

/**
 * Build a 303 redirect that respects the public host (Cloudflare's hostname)
 * instead of the container's internal HOSTNAME=0.0.0.0:3000. Next.js standalone
 * mode otherwise emits redirects to the bind address, which the browser can't
 * resolve when fronted by a tunnel/reverse proxy.
 */
export function adminRedirect(req: Request, path: string): NextResponse {
  const forwardedHost = req.headers.get("x-forwarded-host");
  const host = forwardedHost || req.headers.get("host") || "localhost";
  const proto = req.headers.get("x-forwarded-proto")
    || (process.env.NODE_ENV === "production" ? "https" : "http");
  return NextResponse.redirect(`${proto}://${host}${path}`, { status: 303 });
}
