import Link from "next/link";
import { Sidebar as SidebarClient } from "./SidebarClient";
import { loadCertData } from "@/lib/cert-data";
import { loadVendors } from "@/lib/vendors-loader";
import { loadIndustries } from "@/lib/industries-loader";
import { loadRoadmaps } from "@/lib/roadmaps-loader";
import { loadTopics } from "@/lib/topics-loader";
import { loadCertificationPaths } from "@/lib/certification-paths-loader";
import { loadCareerPaths } from "@/lib/career-paths-loader";
import { loadCareerChangers } from "@/lib/career-changers-loader";

export async function Sidebar() {
  const [data, vendors, industries, roadmaps, topics, certificationPaths, careerPaths, careerChangers] = await Promise.all([
    loadCertData(),
    loadVendors(),
    loadIndustries(),
    loadRoadmaps(),
    loadTopics(),
    loadCertificationPaths(),
    loadCareerPaths(),
    loadCareerChangers(),
  ]);

  const domains = data.domains.map((d) => ({
    id: d.id,
    name: d.name,
    count: d.levels.reduce((n, l) => n + l.certs.length, 0),
  }));
  const allEcos = [...data.ecosystems, ...data.hardware, ...data.vendor].map((d) => ({
    id: d.id,
    name: d.name,
    count: d.levels.reduce((n, l) => n + l.certs.length, 0),
  }));

  return (
    <SidebarClient
      domains={domains}
      ecosystems={allEcos}
      counts={{
        vendors: vendors.length,
        industries: industries.length,
        roadmaps: roadmaps.length,
        topics: topics.length,
        certificationPaths: certificationPaths.length,
        careerPaths: careerPaths.length,
        careerChangers: careerChangers.length,
      }}
    />
  );
}

// Re-export Link so the server component renders correctly
export { Link };
