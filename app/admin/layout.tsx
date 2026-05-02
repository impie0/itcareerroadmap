import { isAdmin } from "@/lib/admin-auth";
import { AdminNav } from "@/components/admin/AdminNav";

export const dynamic = "force-dynamic";

/**
 * Wraps every /admin/* route. When the visitor has a valid session, renders
 * the persistent AdminNav strip above the page. On the login page (no session)
 * we skip the nav so it doesn't show "Sign out" before sign-in.
 */
export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const authed = await isAdmin();
  return (
    <>
      {authed && <AdminNav />}
      {children}
    </>
  );
}
