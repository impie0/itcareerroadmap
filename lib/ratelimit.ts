import { createHash } from "node:crypto";
import { headers } from "next/headers";
import { prisma } from "./db";

const SALT = process.env.IP_HASH_SALT ?? "dev-salt-change-me";

export async function getIpHash(): Promise<string> {
  const h = await headers();
  const forwarded = h.get("x-forwarded-for")?.split(",")[0]?.trim();
  const real = h.get("x-real-ip");
  const ip = forwarded || real || "unknown";
  return createHash("sha256").update(`${SALT}:${ip}`).digest("hex").slice(0, 32);
}

export type LimitResult = { ok: true } | { ok: false; retryAfterSec: number };

export async function rateLimit(
  key: string,
  max: number,
  windowSec: number,
): Promise<LimitResult> {
  const now = new Date();
  const existing = await prisma.rateLimit.findUnique({ where: { key } });

  if (!existing || existing.windowEnd <= now) {
    await prisma.rateLimit.upsert({
      where: { key },
      create: { key, count: 1, windowEnd: new Date(now.getTime() + windowSec * 1000) },
      update: { count: 1, windowEnd: new Date(now.getTime() + windowSec * 1000) },
    });
    return { ok: true };
  }

  if (existing.count >= max) {
    return { ok: false, retryAfterSec: Math.ceil((existing.windowEnd.getTime() - now.getTime()) / 1000) };
  }

  await prisma.rateLimit.update({
    where: { key },
    data: { count: { increment: 1 } },
  });
  return { ok: true };
}
