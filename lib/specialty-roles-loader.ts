import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type SpecialtyRole = {
  code: string;        // SR01, SR02, ...
  slug: string;        // matches /wiki/specialty/{slug}
  title: string;
  tags: string[];
  vendors: string[];
  filename: string;
};

const DIR = path.join(process.cwd(), "Deep Dive", "Specialty_Roles");

function deriveCodeFromFilename(f: string): string {
  return f.match(/^(SR\d+)_/)?.[1] ?? "";
}

function deriveSlugFromFilename(f: string): string {
  return f.replace(/\.md$/, "").replace(/^SR\d+_/, "").replace(/_/g, "-").toLowerCase();
}

let cache: SpecialtyRole[] | null = null;

export async function loadSpecialtyRoles(): Promise<SpecialtyRole[]> {
  if (cache) return cache;
  const out: SpecialtyRole[] = [];
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
      const slug = ((fm.slug as string) ?? "").trim() || deriveSlugFromFilename(f);
      out.push({
        code: ((fm.code as string) ?? "").trim() || deriveCodeFromFilename(f),
        slug,
        title: ((fm.title as string) ?? "").trim() || f.replace(/\.md$/, "").replace(/_/g, " "),
        tags: Array.isArray(fm.tags) ? (fm.tags as string[]) : [],
        vendors: Array.isArray(fm.vendors) ? (fm.vendors as string[]) : [],
        filename: f,
      });
    } catch {
      /* skip unreadable file */
    }
  }
  out.sort((a, b) => a.code.localeCompare(b.code));
  cache = out;
  return out;
}
