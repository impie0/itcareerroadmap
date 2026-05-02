import { NextResponse } from "next/server";
import { isAdmin, adminRedirect } from "@/lib/admin-auth";
import { logAdminAction } from "@/lib/admin-audit";
import { prisma } from "@/lib/db";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!(await isAdmin())) return new NextResponse(null, { status: 403 });
  const { id } = await params;
  const s = await prisma.star.findUnique({ where: { id }, select: { target: true, rating: true } });
  await prisma.star.delete({ where: { id } });
  await logAdminAction("star.delete", id, { target: s?.target, rating: s?.rating });
  return adminRedirect(req, "/admin/stars");
}
