import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { isClean } from "@/lib/profanity";
import { getIpHash, rateLimit } from "@/lib/ratelimit";

const KIND = z.enum(["helpful_yes", "helpful_no", "report", "suggestion", "free"]);

const Body = z.object({
  target: z.string().max(200).optional(),
  kind: KIND,
  body: z.string().max(2000).optional(),
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const target = searchParams.get("target");
  if (!target) {
    return NextResponse.json({ error: "missing target" }, { status: 400 });
  }
  const helpfulYes = await prisma.feedback.count({ where: { target, kind: "helpful_yes" } });
  const helpfulNo  = await prisma.feedback.count({ where: { target, kind: "helpful_no" } });
  return NextResponse.json({ target, helpfulYes, helpfulNo });
}

export async function POST(req: Request) {
  const ipHash = await getIpHash();
  const limit = await rateLimit(`fb:${ipHash}`, 10, 60);
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
  const { target, kind, body } = parsed.data;

  if (body && !isClean(body)) {
    return NextResponse.json({ error: "rejected" }, { status: 422 });
  }

  await prisma.feedback.create({
    data: {
      target: target || null,
      kind,
      body: body || null,
      ipHash,
    },
  });
  return NextResponse.json({ ok: true, kind });
}
