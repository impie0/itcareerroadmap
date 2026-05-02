import { PageHeader } from "@/components/chrome/PageHeader";
import { RoleGrid } from "@/components/profiles/RoleGrid";
import { SpecialtyRoleSection } from "@/components/profiles/SpecialtyRoleSection";
import { ROLES } from "@/content/roles";
import { loadSpecialtyRoles } from "@/lib/specialty-roles-loader";

export default async function ProfilesPage() {
  const specialtyRoles = await loadSpecialtyRoles();
  const total = ROLES.length + specialtyRoles.length;

  return (
    <main className="mx-auto max-w-[1100px] px-5 py-8 lg:px-8 lg:py-10">
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Role profiles" }]}
        title="Role profiles"
        subtitle={`${total} roles. ${ROLES.length} core roles with AI-impact rating, remote-friendliness, day-in-the-life. ${specialtyRoles.length} specialty deep-dives for non-standard career arcs.`}
      />
      <RoleGrid roles={ROLES} />
      <SpecialtyRoleSection roles={specialtyRoles} />
    </main>
  );
}
