import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { isClean } from "@/lib/profanity";
import { getIpHash, rateLimit } from "@/lib/ratelimit";

const Body = z.object({
  target: z.string().min(1).max(200),
  body: z.string().min(1).max(2000),
  author: z.string().max(60).optional(),
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const target = searchParams.get("target");
  if (!target) {
    return NextResponse.json({ error: "missing target" }, { status: 400 });
  }
  const comments = await prisma.comment.findMany({
    where: { target, status: "visible" },
    orderBy: { createdAt: "desc" },
    take: 100,
    select: { id: true, body: true, author: true, createdAt: true },
  });
  return NextResponse.json({ target, comments });
}

export async function POST(req: Request) {
  const ipHash = await getIpHash();
  const limit = await rateLimit(`comment:${ipHash}`, 5, 60);
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
  const { target, body, author } = parsed.data;

  if (!isClean(body) || (author && !isClean(author))) {
    return NextResponse.json({ error: "rejected" }, { status: 422 });
  }

  const created = await prisma.comment.create({
    data: { target, body, author: author || null, ipHash },
    select: { id: true, body: true, author: true, createdAt: true },
  });

  return NextResponse.json(created, { status: 201 });
}
