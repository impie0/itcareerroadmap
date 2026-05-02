import { Suspense } from "react";
import { PageHeader } from "@/components/chrome/PageHeader";
import { StatStrip } from "@/components/chrome/StatStrip";
import { CertBrowser } from "@/components/certs/CertBrowser";
import { loadCertData } from "@/lib/cert-data";

type SearchParams = { domain?: string; ecosystem?: string };

export default async function CertsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const data = await loadCertData();

  const allEcosystems = [...data.ecosystems, ...data.hardware, ...data.vendor];
  const totalCerts =
    data.domains.reduce((n, d) => n + d.levels.reduce((nn, l) => nn + l.certs.length, 0), 0) +
    allEcosystems.reduce((n, d) => n + d.levels.reduce((nn, l) => nn + l.certs.length, 0), 0);

  const allVendors = new Set<string>();
  [...data.domains, ...allEcosystems].forEach((d) =>
    d.levels.forEach((l) => l.certs.forEach((c) => allVendors.add(c.vendor))),
  );

  const stats = [
    { label: "Domains",        value: data.domains.length },
    { label: "Ecosystems",     value: allEcosystems.length },
    { label: "Certifications", value: totalCerts },
    { label: "Vendors",        value: allVendors.size },
  ];

  return (
    <main className="mx-auto w-full max-w-[1680px] px-5 py-6 lg:px-8 lg:py-8">
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Certifications" }]}
        title={`${totalCerts} certifications`}
        subtitle="Stacked by experience level. Click a header to sort, click a row to open the cert detail. Switch between Tables view and Wallchart view at the top."
      />

      <div className="mb-2">
        <StatStrip stats={stats} />
      </div>

      <Suspense fallback={<div className="py-10 text-[--color-text-mute]">Loading…</div>}>
        <CertBrowser
          domains={data.domains}
          ecosystems={data.ecosystems}
          hardware={data.hardware}
          vendor={data.vendor}
          initialDomain={params.domain}
          initialEcosystem={params.ecosystem}
        />
      </Suspense>
    </main>
  );
}
