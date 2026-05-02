import { clearAdminCookie, adminRedirect } from "@/lib/admin-auth";

export async function POST(req: Request) {
  await clearAdminCookie();
  return adminRedirect(req, "/admin/login");
}
