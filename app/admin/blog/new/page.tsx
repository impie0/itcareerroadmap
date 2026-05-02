import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin-auth";
import { BlogPostForm } from "@/components/admin/BlogPostForm";

export const dynamic = "force-dynamic";

export default async function AdminBlogNew() {
  if (!(await isAdmin())) redirect("/admin/login?from=/admin/blog/new");
  return (
    <main className="mx-auto max-w-[860px] px-5 py-8 lg:px-8 lg:py-10">
      <Link href="/admin/blog" className="mono text-[10.5px] uppercase tracking-[0.06em] text-[--color-text-mute] hover:text-[--color-accent]">← Posts</Link>
      <h1 className="mt-1 text-[22px] font-semibold" style={{ color: "var(--text)" }}>New post</h1>
      <BlogPostForm />
    </main>
  );
}
