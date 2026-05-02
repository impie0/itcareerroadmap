import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Industry = {
  code: string;       // IND01, IND02, ...
  slug: string;       // matches /wiki/industry/{slug}
  title: string;
  tags: string[];
  filename: string;
};

const DIR = path.join(process.cwd(), "Deep Dive", "Industry_Verticals");

let cache: Industry[] | null = null;

export async function loadIndustries(): Promise<Industry[]> {
  if (cache) return cache;
  const out: Industry[] = [];
  let entries: string[] = [];
  try {
    entries = await fs.readdir(DIR);
  } catch {
    return [];
  }
  for (const f of entries) {
    if (!f.endsWith(".md")) continue;
    try {
      const raw = await fs.readFile(path.join(DIR, f), "utf-8");
      const fm = (matter(raw).data ?? {}) as Record<string, unknown>;
      const fallbackSlug = f.replace(/\.md$/, "").replace(/^IND\d+_/, "").replace(/_/g, "-").toLowerCase();
      const fallbackCode = f.match(/^(IND\d+)_/)?.[1] ?? "";
      out.push({
        code: ((fm.code as string) ?? "").trim() || fallbackCode,
        slug: ((fm.slug as string) ?? "").trim() || fallbackSlug,
        title: ((fm.title as string) ?? "").trim() || f.replace(/\.md$/, "").replace(/_/g, " "),
        tags: Array.isArray(fm.tags) ? (fm.tags as string[]) : [],
        filename: f,
      });
    } catch {
      /* skip */
    }
  }
  out.sort((a, b) => a.code.localeCompare(b.code));
  cache = out;
  return out;
}
