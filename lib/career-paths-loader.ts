import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { getCertLinkIndex } from "./cert-link-index";
import { applyCertAutoLinks } from "./markdown-cert-links";

/**
 * Loader for Deep Dive/Career_Paths/CP{NN}_{domain}_{slug}.md.
 *
 * Each file is "How to Become a [Role Title]" — full deep-dive with
 * progression mermaid, cert stages, salary tables, 90-day plan, day-in-the-life.
 * Template at Deep Dive/_CAREER_PATH_TEMPLATE.md.
 */

export type CareerPathFrontmatter = {
  path_id?: string;
  role_title: string;
  domain?: string;
  slug?: string;
  entry_level_role?: string;
  target_role?: string;
  time_to_hire_months?: string;
  total_cost_usd?: string;
  total_cost_zar?: string;
  salary_floor_usd?: string;
  salary_ceiling_usd?: string;
  last_verified?: string;
  sources?: string[];
};

export type CareerPathSection = {
  heading: string;
  slug: string;
  level: 2 | 3;
  markdown: string;
};

export type CareerPath = {
  slug: string;            // url slug — frontmatter slug or derived from filename
  pathId: string;          // CP01, CP02, etc.
  roleTitle: string;       // display name
  fm: CareerPathFrontmatter;
  sections: CareerPathSection[];
  raw: string;
  filePath: string;
};

const DIR = path.join(process.cwd(), "Deep Dive", "Career_Paths");

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
}

function parseSections(md: string): CareerPathSection[] {
  const lines = md.split("\n");
  const sections: CareerPathSection[] = [];
  let current: { heading: string; level: 2; lines: string[] } | null = null;
  let inFence = false;

  for (const line of lines) {
    if (line.startsWith("```")) inFence = !inFence;
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

  // Dedupe by slug — first occurrence wins
  const seen = new Set<string>();
  return sections.filter((s) => {
    if (seen.has(s.slug)) return false;
    seen.add(s.slug);
    return true;
  });
}

let cache: CareerPath[] | null = null;

export async function loadCareerPaths(): Promise<CareerPath[]> {
  if (cache) return cache;
  const out: CareerPath[] = [];
  let entries: string[] = [];
  try {
    entries = await fs.readdir(DIR);
  } catch {
    cache = out;
    return out;
  }
  const linkIndex = await getCertLinkIndex();
  for (const f of entries) {
    if (!f.endsWith(".md")) continue;
    if (f.startsWith("_")) continue;
    const filePath = path.join(DIR, f);
    try {
      const raw = await fs.readFile(filePath, "utf-8");
      const parsed = matter(raw);
      const fm = (parsed.data ?? {}) as CareerPathFrontmatter;
      // Skip files without a role_title — they can't render a usable page
      if (!fm.role_title || !String(fm.role_title).trim()) {
        console.warn(`[career-paths-loader] skipping ${filePath} — no role_title in frontmatter`);
        continue;
      }
      // Slug priority: frontmatter slug > derived from filename (stripping CP{NN}_ prefix).
      // Normalise underscores → hyphens so URLs are consistently kebab-case.
      const normaliseSlug = (s: string) => s.toLowerCase().replace(/_/g, "-");
      const fnameSlug = normaliseSlug(f.replace(/\.md$/, "").replace(/^CP\d+_/, ""));
      const slug = fm.slug ? normaliseSlug(fm.slug) : fnameSlug;
      const pathId = fm.path_id || (f.match(/^(CP\d+)/)?.[1] ?? "");
      const linkedContent = applyCertAutoLinks(parsed.content, linkIndex);
      out.push({
        slug,
        pathId,
        roleTitle: fm.role_title,
        fm,
        sections: parseSections(linkedContent),
        raw: linkedContent,
        filePath,
      });
    } catch (err) {
      console.warn(`[career-paths-loader] failed to parse ${filePath}:`, err);
    }
  }
  out.sort((a, b) => a.roleTitle.localeCompare(b.roleTitle));
  cache = out;
  return out;
}

export async function findCareerPath(slug: string): Promise<CareerPath | null> {
  const all = await loadCareerPaths();
  return all.find((p) => p.slug === slug.toLowerCase()) ?? null;
}
