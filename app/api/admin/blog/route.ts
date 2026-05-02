import { NextResponse } from "next/server";
import { z } from "zod";
import { isAdmin } from "@/lib/admin-auth";
import { logAdminAction } from "@/lib/admin-audit";
import { prisma } from "@/lib/db";

const Body = z.object({
  slug: z.string().min(1).max(80).regex(/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/, "slug must be lowercase-with-dashes"),
  title: z.string().min(1).max(200),
  excerpt: z.string().min(1).max(500),
  body: z.string().min(1).max(200_000),
  draft: z.boolean().default(true),
});

export async function POST(req: Request) {
  if (!(await isAdmin())) return new NextResponse(null, { status: 403 });

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "invalid_body" }, { status: 400 });
  }

  // Slug must be unique
  const existing = await prisma.blogPost.findUnique({ where: { slug: parsed.data.slug } });
  if (existing) {
    return NextResponse.json({ error: `slug "${parsed.data.slug}" already taken` }, { status: 409 });
  }

  const created = await prisma.blogPost.create({
    data: parsed.data,
    select: { id: true, slug: true },
  });
  await logAdminAction("blog.create", created.slug, { title: parsed.data.title, draft: parsed.data.draft });
  return NextResponse.json({ ok: true, post: created });
}
