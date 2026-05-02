import { PageHeader } from "@/components/chrome/PageHeader";
import { MatrixWallchart } from "@/components/matrix/MatrixWallchart";
import { loadCertData } from "@/lib/cert-data";

export default async function MatrixPage() {
  const data = await loadCertData();

  return (
    <main className="mx-auto w-full max-w-none px-3 py-6 lg:px-4 lg:py-8">
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Matrix view" }]}
        title="Cert Matrix · wallchart"
        subtitle="Periodic-table view, vendor-coloured. Best on a desktop ≥ 1280px. For browsing on smaller screens, use the cert browser instead."
      />

      <div className="mb-4 rounded-md border border-[--color-border] bg-[--color-surface] p-3 text-[12.5px] text-[--color-text-2]">
        <span className="mono mr-2 rounded border border-[--color-border] bg-[--color-bg] px-1.5 py-0.5 text-[10.5px] uppercase tracking-[0.06em] text-[--color-text-mute]">
          Tip
        </span>
        Click any tile to see vendor source, skills required at that level, recommended courses, and typical job titles.
      </div>

      {/* /matrix has no CertBrowser filter bar above it, only the TopBar (56px),
          so sticky column headers should pin at top:56 instead of the default 112. */}
      <MatrixWallchart
        domains={data.domains}
        ecosystems={data.ecosystems}
        hardware={data.hardware}
        vendor={data.vendor}
        stickyTop={56}
      />
    </main>
  );
}
