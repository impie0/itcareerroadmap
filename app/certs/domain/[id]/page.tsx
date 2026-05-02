import { notFound } from "next/navigation";
import { PageHeader } from "@/components/chrome/PageHeader";
import { StatStrip } from "@/components/chrome/StatStrip";
import { CertBrowser } from "@/components/certs/CertBrowser";
import { loadCertData, findEcosystem } from "@/lib/cert-data";

export default async function DomainOverviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await loadCertData();
  const found = await findEcosystem(id);
  if (!found) notFound();

  const isDomain = found.category === "domain";

  const certCount = found.entry.levels.reduce((n, l) => n + l.certs.length, 0);
  const vendors = new Set<string>();
  found.entry.levels.forEach((l) => l.certs.forEach((c) => vendors.add(c.vendor)));

  const stats = [
    { label: "Total certs", value: certCount },
    { label: "Vendors",     value: vendors.size },
    { label: "Entry",       value: found.entry.levels.find((l) => l.level === "Entry")?.certs.length ?? 0 },
    { label: "Associate",   value: found.entry.levels.find((l) => l.level === "Associate")?.certs.length ?? 0 },
    { label: "Professional", value: found.entry.levels.find((l) => l.level === "Professional")?.certs.length ?? 0 },
    { label: "Expert",      value: found.entry.levels.find((l) => l.level === "Expert")?.certs.length ?? 0 },
  ];

  return (
    <main className="mx-auto max-w-[1400px] px-5 py-6 lg:px-8 lg:py-8">
      <PageHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Certifications", href: "/certs" },
          { label: found.entry.name },
        ]}
        title={`${found.entry.name} certifications`}
        subtitle={found.entry.blurb ?? `Browse all ${certCount} certifications in this ${isDomain ? "domain" : found.category === "vendor" ? "vendor ecosystem" : found.category}.`}
      />

      <div className="mb-2">
        <StatStrip stats={stats} />
      </div>

      <CertBrowser
        domains={isDomain ? [found.entry as typeof data.domains[number]] : []}
        ecosystems={found.category === "saas" ? [found.entry as typeof data.ecosystems[number]] : []}
        hardware={found.category === "hardware" ? [found.entry as typeof data.hardware[number]] : []}
        vendor={found.category === "vendor" ? [found.entry as typeof data.vendor[number]] : []}
        initialDomain={isDomain ? id : undefined}
        initialEcosystem={!isDomain ? id : undefined}
      />
    </main>
  );
}

export async function generateStaticParams() {
  const data = await loadCertData();
  return [...data.domains, ...data.ecosystems, ...data.hardware, ...data.vendor].map((d) => ({ id: d.id }));
}
