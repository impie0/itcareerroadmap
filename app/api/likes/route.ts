import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { getIpHash, rateLimit } from "@/lib/ratelimit";

const Body = z.object({
  target: z.string().min(1).max(200),
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const target = searchParams.get("target");
  if (!target) {
    return NextResponse.json({ error: "missing target" }, { status: 400 });
  }
  const count = await prisma.like.count({ where: { target } });
  return NextResponse.json({ target, count });
}

export async function POST(req: Request) {
  const ipHash = await getIpHash();
  const limit = await rateLimit(`like:${ipHash}`, 60, 60);
  if (!limit.ok) {
    return NextResponse.json(
      { error: "rate_limited", retryAfterSec: limit.retryAfterSec },
      { status: 429 },
    );
  }

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }
  const { target } = parsed.data;

  try {
    await prisma.like.create({ data: { target, ipHash } });
  } catch {
    await prisma.like.deleteMany({ where: { target, ipHash } });
  }

  const count = await prisma.like.count({ where: { target } });
  return NextResponse.json({ target, count });
}
