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
  const url = new URL(req.url);
  const action = url.searchParams.get("action");

  switch (action) {
    case "hide":
      await prisma.feedback.update({ where: { id }, data: { status: "hidden" } });
      await logAdminAction("feedback.hide", id);
      break;
    case "show":
      await prisma.feedback.update({ where: { id }, data: { status: "visible" } });
      await logAdminAction("feedback.show", id);
      break;
    case "delete": {
      const f = await prisma.feedback.findUnique({ where: { id }, select: { target: true, kind: true } });
      await prisma.feedback.delete({ where: { id } });
      await logAdminAction("feedback.delete", id, { target: f?.target, kind: f?.kind });
      break;
    }
    default:
      return new NextResponse("invalid action", { status: 400 });
  }
  return adminRedirect(req, "/admin/feedback");
}
