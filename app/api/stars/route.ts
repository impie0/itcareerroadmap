import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { getIpHash, rateLimit } from "@/lib/ratelimit";

const Body = z.object({
  target: z.string().min(1).max(200),
  rating: z.number().int().min(1).max(5),
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const target = searchParams.get("target");
  if (!target) {
    return NextResponse.json({ error: "missing target" }, { status: 400 });
  }
  const all = await prisma.star.findMany({
    where: { target },
    select: { rating: true, ipHash: true },
  });
  const count = all.length;
  const avg = count === 0 ? 0 : all.reduce((n, s) => n + s.rating, 0) / count;

  // If client sent its IP hash via cookie, return their current rating too.
  // (Not implemented yet — client can recompute via separate `?mine=1&ipHash=…`.)
  return NextResponse.json({
    target,
    count,
    average: Math.round(avg * 10) / 10,
  });
}

export async function POST(req: Request) {
  const ipHash = await getIpHash();
  const limit = await rateLimit(`star:${ipHash}`, 30, 60);
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
  const { target, rating } = parsed.data;

  // Upsert: same visitor changing their rating updates the existing row.
  await prisma.star.upsert({
    where: { target_ipHash: { target, ipHash } },
    update: { rating },
    create: { target, rating, ipHash },
  });

  const all = await prisma.star.findMany({
    where: { target },
    select: { rating: true },
  });
  const count = all.length;
  const average = count === 0 ? 0 : all.reduce((n, s) => n + s.rating, 0) / count;

  return NextResponse.json({
    target,
    count,
    average: Math.round(average * 10) / 10,
    yourRating: rating,
  });
}

export async function DELETE(req: Request) {
  const ipHash = await getIpHash();
  const { searchParams } = new URL(req.url);
  const target = searchParams.get("target");
  if (!target) {
    return NextResponse.json({ error: "missing target" }, { status: 400 });
  }
  await prisma.star.deleteMany({ where: { target, ipHash } });
  const all = await prisma.star.findMany({ where: { target }, select: { rating: true } });
  const count = all.length;
  const average = count === 0 ? 0 : all.reduce((n, s) => n + s.rating, 0) / count;
  return NextResponse.json({ target, count, average: Math.round(average * 10) / 10 });
}
