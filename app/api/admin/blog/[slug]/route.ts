import { NextResponse } from "next/server";
import { z } from "zod";
import { isAdmin } from "@/lib/admin-auth";
import { logAdminAction } from "@/lib/admin-audit";
import { prisma } from "@/lib/db";

const Body = z.object({
  slug: z.string().min(1).max(80).regex(/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/),
  title: z.string().min(1).max(200),
  excerpt: z.string().min(1).max(500),
  body: z.string().min(1).max(200_000),
  draft: z.boolean().default(true),
});

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  if (!(await isAdmin())) return new NextResponse(null, { status: 403 });
  const { slug: originalSlug } = await params;

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "invalid_body" }, { status: 400 });
  }

  // If the slug is being changed, ensure the new one isn't taken
  if (parsed.data.slug !== originalSlug) {
    const existing = await prisma.blogPost.findUnique({ where: { slug: parsed.data.slug } });
    if (existing) {
      return NextResponse.json({ error: `slug "${parsed.data.slug}" already taken` }, { status: 409 });
    }
  }

  await prisma.blogPost.update({
    where: { slug: originalSlug },
    data: parsed.data,
  });
  await logAdminAction("blog.update", parsed.data.slug, {
    fromSlug: originalSlug !== parsed.data.slug ? originalSlug : undefined,
    title: parsed.data.title,
    draft: parsed.data.draft,
  });
  return NextResponse.json({ ok: true });
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  if (!(await isAdmin())) return new NextResponse(null, { status: 403 });
  const { slug } = await params;
  await prisma.blogPost.delete({ where: { slug } });
  await logAdminAction("blog.delete", slug);
  return NextResponse.json({ ok: true });
}
