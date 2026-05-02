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
  const l = await prisma.like.findUnique({ where: { id }, select: { target: true } });
  await prisma.like.delete({ where: { id } });
  await logAdminAction("like.delete", id, { target: l?.target });
  return adminRedirect(req, "/admin/likes");
}
