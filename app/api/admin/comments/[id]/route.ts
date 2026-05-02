import { NextResponse } from "next/server";
import { isAdmin, adminRedirect } from "@/lib/admin-auth";
import { logAdminAction } from "@/lib/admin-audit";
import { prisma } from "@/lib/db";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!(await isAdmin())) {
    return new NextResponse(null, { status: 403 });
  }
  const { id } = await params;
  const url = new URL(req.url);
  const action = url.searchParams.get("action");

  switch (action) {
    case "hide":
      await prisma.comment.update({ where: { id }, data: { status: "hidden" } });
      await logAdminAction("comment.hide", id);
      break;
    case "show":
      await prisma.comment.update({ where: { id }, data: { status: "visible" } });
      await logAdminAction("comment.show", id);
      break;
    case "delete": {
      const c = await prisma.comment.findUnique({ where: { id }, select: { target: true, body: true } });
      await prisma.comment.delete({ where: { id } });
      await logAdminAction("comment.delete", id, { target: c?.target, preview: c?.body?.slice(0, 80) });
      break;
    }
    default:
      return new NextResponse("invalid action", { status: 400 });
  }

  return adminRedirect(req, "/admin/comments");
}
