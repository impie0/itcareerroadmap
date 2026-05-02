import { PageHeader } from "@/components/chrome/PageHeader";
import { NODES } from "@/content/nodes";
import { EDGES } from "@/content/edges";

export default function FlowPage() {
  return (
    <main className="mx-auto max-w-[1040px] px-5 py-8 lg:px-8 lg:py-10">
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Flow diagram" }]}
        title="Visual flow diagram"
        subtitle={`${NODES.length} roles as nodes, ${EDGES.length} transitions as arrows, color-coded by domain.`}
      />
      <div className="rounded-lg border border-dashed border-[--color-border] p-8 text-center">
        <h4 className="mb-2 text-[11px] font-medium uppercase tracking-[0.08em] text-[--color-text-mute]">
          Status
        </h4>
        <p className="text-[13.5px] text-[--color-text-2]">
          The SVG flow renderer is the next build step. Data is already extracted ({NODES.length}{" "}
          nodes, {EDGES.length} edges).
        </p>
      </div>
    </main>
  );
}
