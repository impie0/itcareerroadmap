import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Topic = {
  code: string;       // CC01, CC02, ...
  slug: string;       // matches /wiki/cross-cutting/{slug}
  title: string;
  tags: string[];
  filename: string;
};

const DIR = path.join(process.cwd(), "Deep Dive", "Cross_Cutting");

let cache: Topic[] | null = null;

export async function loadTopics(): Promise<Topic[]> {
  if (cache) return cache;
  const out: Topic[] = [];
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
      const fallbackSlug = f.replace(/\.md$/, "").replace(/^CC\d+_/, "").replace(/_/g, "-").toLowerCase();
      const fallbackCode = f.match(/^(CC\d+)_/)?.[1] ?? "";
      out.push({
        code: ((fm.code as string) ?? "").trim() || fallbackCode,
        slug: ((fm.slug as string) ?? "").trim() || fallbackSlug,
        title: ((fm.title as string) ?? "").trim() || f.replace(/\.md$/, "").replace(/_/g, " "),
        tags: Array.isArray(fm.tags) ? (fm.tags as string[]) : [],
        filename: f,
      });
    } catch { /* skip */ }
  }
  out.sort((a, b) => a.code.localeCompare(b.code));
  cache = out;
  return out;
}
