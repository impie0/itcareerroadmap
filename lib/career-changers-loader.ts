import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { getCertLinkIndex } from "./cert-link-index";
import { applyCertAutoLinks } from "./markdown-cert-links";

/**
 * Loader for Deep Dive/Career_Changers/CCH{NN}_{source-slug}_to_IT.md.
 *
 * Each file is a "{Source profession} → IT" deep-dive — transferable skills,
 * 90-day plan, salary bridge, CV positioning, SA-specific success story.
 * Template at Deep Dive/_CAREER_CHANGER_TEMPLATE.md.
 */

export type CareerChangerFrontmatter = {
  changer_id?: string;
  source_profession: string;
  source_profession_slug?: string;
  target_domain?: string;
  primary_target_role?: string;
  secondary_target_roles?: string[];
  time_to_first_it_job_months?: string;
  total_cost_usd?: string;
  total_cost_zar?: string;
  difficulty_rating?: string;
  last_verified?: string;
  sources?: string[];
};

export type CareerChangerSection = {
  heading: string;
  slug: string;
  level: 2 | 3;
  markdown: string;
};

export type CareerChanger = {
  slug: string;            // url slug
  changerId: string;       // CCH01, CCH02, etc.
  sourceProfession: string;
  fm: CareerChangerFrontmatter;
  sections: CareerChangerSection[];
  raw: string;
  filePath: string;
};

const DIR = path.join(process.cwd(), "Deep Dive", "Career_Changers");

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
}

function parseSections(md: string): CareerChangerSection[] {
  const lines = md.split("\n");
  const sections: CareerChangerSection[] = [];
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

  const seen = new Set<string>();
  return sections.filter((s) => {
    if (seen.has(s.slug)) return false;
    seen.add(s.slug);
    return true;
  });
}

let cache: CareerChanger[] | null = null;

export async function loadCareerChangers(): Promise<CareerChanger[]> {
  if (cache) return cache;
  const out: CareerChanger[] = [];
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
      const fm = (parsed.data ?? {}) as CareerChangerFrontmatter;
      if (!fm.source_profession || !String(fm.source_profession).trim()) {
        console.warn(`[career-changers-loader] skipping ${filePath} — no source_profession`);
        continue;
      }
      // Slug priority: frontmatter source_profession_slug > derived from filename.
      // Normalise underscores → hyphens so URLs are consistently kebab-case
      // regardless of which convention an author used.
      const normaliseSlug = (s: string) => s.toLowerCase().replace(/_/g, "-");
      const fnameSlug = normaliseSlug(
        f.replace(/\.md$/, "").replace(/^CCH\d+_/, "").replace(/_to_IT$/i, ""),
      );
      const slug = fm.source_profession_slug ? normaliseSlug(fm.source_profession_slug) : fnameSlug;
      const changerId = fm.changer_id || (f.match(/^(CCH\d+)/)?.[1] ?? "");
      const linkedContent = applyCertAutoLinks(parsed.content, linkIndex);
      out.push({
        slug,
        changerId,
        sourceProfession: fm.source_profession,
        fm,
        sections: parseSections(linkedContent),
        raw: linkedContent,
        filePath,
      });
    } catch (err) {
      console.warn(`[career-changers-loader] failed to parse ${filePath}:`, err);
    }
  }
  out.sort((a, b) => a.sourceProfession.localeCompare(b.sourceProfession));
  cache = out;
  return out;
}

export async function findCareerChanger(slug: string): Promise<CareerChanger | null> {
  const all = await loadCareerChangers();
  return all.find((c) => c.slug === slug.toLowerCase()) ?? null;
}
