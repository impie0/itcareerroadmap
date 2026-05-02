import { promises as fs } from "node:fs";
import path from "node:path";

export type DeepDiveKind = "domain" | "ecosystem" | "roadmap" | "industry" | "specialty" | "cross-cutting";

export const KIND_DIR: Record<DeepDiveKind, string> = {
  "domain":        "Domains",
  "ecosystem":     "Ecosystems",
  "roadmap":       "Roadmaps",
  "industry":      "Industry_Verticals",
  "specialty":     "Specialty_Roles",
  "cross-cutting": "Cross_Cutting",
};

export const KIND_LABEL: Record<DeepDiveKind, string> = {
  "domain":        "Domain",
  "ecosystem":     "Ecosystem",
  "roadmap":       "Roadmap",
  "industry":      "Industry",
  "specialty":     "Specialty",
  "cross-cutting": "Cross-cutting",
};

export const KIND_PLURAL: Record<DeepDiveKind, string> = {
  "domain":        "Domains",
  "ecosystem":     "Ecosystems",
  "roadmap":       "Roadmaps",
  "industry":      "Industries",
  "specialty":     "Specialty Roles",
  "cross-cutting": "Cross-cutting",
};

export const KIND_BLURB: Record<DeepDiveKind, string> = {
  "domain":        "12 IT domain deep-dives — Foundation, Networking, Cloud, Security, Data/AI, etc. Cert ladders × all 4 levels with prep, salary, books, YouTube, conferences.",
  "ecosystem":     "32 vendor / platform ecosystems. Full cert lineups with exam codes, fees, retirement dates, recommended courses. AWS, Azure, Salesforce, Cisco, Splunk, etc.",
  "roadmap":       "10 career-role progressions. Junior → Mid → Senior → Expert with day-in-life, certs, salary by region, lateral pivots.",
  "industry":      "13 industry-vertical guides. Regulators, core platforms, salary hubs, cert pathways for FinServ, Gov/Def, Healthcare, etc.",
  "specialty":     "21 specialty role deep-dives. Pentester, DFIR, Privacy, ICS/OT, Salesforce CTA, etc. Each with market context, lab tooling, salary, day-in-life.",
  "cross-cutting": "9 orthogonal topics that cut across roles — AI impact, international salary, career changers, first-job mechanics, comp negotiation, side income, visas, burnout, diversity.",
};

export type DeepDiveFile = {
  kind: DeepDiveKind;
  code: string;
  slug: string;
  title: string;
  filename: string;
  fullPath: string;
};

const ROOT = path.join(process.cwd(), "Deep Dive");

function deriveTitleFromFilename(filename: string): string {
  return filename
    .replace(/\.md$/, "")
    .replace(/^(DOM|D|R|IND|SR|CC)\d+_/, "")
    .replace(/_/g, " ")
    .replace(/\bRoadmap\b/i, "")
    .trim();
}

function deriveSlug(filename: string): string {
  return filename
    .replace(/\.md$/, "")
    .replace(/^(DOM|D|R|IND|SR|CC)\d+_/, "")
    .replace(/Roadmap_/i, "")
    .replace(/_/g, "-")
    .toLowerCase();
}

function deriveCode(filename: string): string {
  const m = filename.match(/^((?:DOM|D|R|IND|SR|CC)\d+)_/);
  return m?.[1] ?? "";
}

export async function listAllDeepDives(): Promise<DeepDiveFile[]> {
  const out: DeepDiveFile[] = [];
  for (const kind of Object.keys(KIND_DIR) as DeepDiveKind[]) {
    const dir = path.join(ROOT, KIND_DIR[kind]);
    let entries: string[] = [];
    try {
      entries = await fs.readdir(dir);
    } catch {
      continue;
    }
    for (const f of entries) {
      if (!f.endsWith(".md")) continue;
      out.push({
        kind,
        code: deriveCode(f),
        slug: deriveSlug(f),
        title: deriveTitleFromFilename(f),
        filename: f,
        fullPath: path.join(dir, f),
      });
    }
  }
  return out.sort((a, b) => a.code.localeCompare(b.code));
}

export async function readDeepDive(kind: DeepDiveKind, slug: string): Promise<{ file: DeepDiveFile; markdown: string } | null> {
  const all = await listAllDeepDives();
  const file = all.find((f) => f.kind === kind && f.slug === slug);
  if (!file) return null;
  let markdown = await fs.readFile(file.fullPath, "utf-8");
  // Strip YAML frontmatter from rendering (keep it for metadata only)
  if (markdown.startsWith("---")) {
    const end = markdown.indexOf("\n---", 3);
    if (end > 0) markdown = markdown.slice(end + 4).replace(/^\n+/, "");
  }
  return { file, markdown };
}
