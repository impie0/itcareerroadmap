import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { getCertLinkIndex } from "./cert-link-index";
import { applyCertAutoLinks } from "./markdown-cert-links";

export type CertPathFrontmatter = {
  vendor: string;
  ecosystem?: string;
  total_certifications?: number;
  entry_point_cert?: string;
  time_to_expert?: string;
  cost_estimate_usd?: string;
  cost_estimate_zar?: string;
  last_verified?: string;
  sources?: string[];
};

export type CertPathSection = {
  /** Heading text (e.g. "Overview", "Recommended Progression Paths") */
  heading: string;
  /** Slug usable as element id + TOC anchor */
  slug: string;
  /** Header level: 2 = main section, 3 = subsection */
  level: 2 | 3;
  /** Markdown body for this section (without the heading line) */
  markdown: string;
};

export type CertPath = {
  /** url slug (lowercased filename minus _Roadmap.md) */
  slug: string;
  /** vendor display name from frontmatter */
  vendor: string;
  /** raw frontmatter */
  fm: CertPathFrontmatter;
  /** sections with duplicates removed (first occurrence wins) */
  sections: CertPathSection[];
  /** raw markdown body for fallback / debugging */
  raw: string;
  /** filesystem path */
  filePath: string;
};

const DIR = path.join(process.cwd(), "Deep Dive", "Certification_Roadmaps");

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
}

/**
 * Splits a markdown body into sections at every `## ` heading.
 * Sub-headings (### / ####) stay within their parent ## section.
 * If the same ## heading appears more than once (e.g. an authoring agent
 * accidentally emitted it twice), only the FIRST occurrence is kept.
 */
function parseSections(md: string): CertPathSection[] {
  const lines = md.split("\n");
  const sections: CertPathSection[] = [];
  let current: { heading: string; level: 2; lines: string[] } | null = null;
  let inFence = false;

  for (const line of lines) {
    if (line.startsWith("```")) inFence = !inFence;

    // Heading detection only outside code fences
    const h2 = !inFence && /^##\s+(.+?)\s*$/.exec(line);
    if (h2) {
      if (current) sections.push({
        heading: current.heading,
        slug: slugify(current.heading),
        level: current.level,
        markdown: current.lines.join("\n").trim(),
      });
      current = { heading: h2[1], level: 2, lines: [] };
      continue;
    }
    if (current) current.lines.push(line);
  }
  if (current) sections.push({
    heading: current.heading,
    slug: slugify(current.heading),
    level: 2,
    markdown: current.lines.join("\n").trim(),
  });

  // Dedupe by slug — keep first occurrence
  const seen = new Set<string>();
  return sections.filter((s) => {
    if (seen.has(s.slug)) return false;
    seen.add(s.slug);
    return true;
  });
}

let cache: CertPath[] | null = null;

export async function loadCertificationPaths(): Promise<CertPath[]> {
  if (cache) return cache;
  const out: CertPath[] = [];
  let entries: string[] = [];
  try {
    entries = await fs.readdir(DIR);
  } catch {
    return [];
  }
  // Loaded once and reused across every file's auto-linker pass.
  const linkIndex = await getCertLinkIndex();
  for (const f of entries) {
    if (!f.endsWith(".md")) continue;
    if (f.startsWith("_")) continue; // skip _ROADMAP_TEMPLATE etc.
    const filePath = path.join(DIR, f);
    try {
      const raw = await fs.readFile(filePath, "utf-8");
      const parsed = matter(raw);
      const fm = (parsed.data ?? {}) as CertPathFrontmatter;
      // Skip files without proper frontmatter — they were authored to an older
      // format and would render with empty hero stats + lowercase title.
      // File stays on disk; just hidden from the index until cleaned up.
      if (!fm.vendor || !String(fm.vendor).trim()) {
        console.warn(`[certification-paths-loader] skipping ${filePath} — no vendor: in frontmatter`);
        continue;
      }
      const slug = f.replace(/\.md$/, "").replace(/_Roadmap$/, "").toLowerCase();
      // Auto-link cert codes BEFORE section parsing so each section's
      // markdown carries the links into ReactMarkdown.
      const linkedContent = applyCertAutoLinks(parsed.content, linkIndex);
      out.push({
        slug,
        vendor: fm.vendor,
        fm,
        sections: parseSections(linkedContent),
        raw: linkedContent,
        filePath,
      });
    } catch (err) {
      console.warn(`[certification-paths-loader] failed to parse ${filePath}:`, err);
    }
  }
  out.sort((a, b) => a.vendor.localeCompare(b.vendor));
  cache = out;
  return out;
}

export async function findCertificationPath(slug: string): Promise<CertPath | null> {
  const all = await loadCertificationPaths();
  return all.find((p) => p.slug === slug.toLowerCase()) ?? null;
}
