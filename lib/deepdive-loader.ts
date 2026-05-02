import { promises as fs } from "node:fs";
import path from "node:path";
import type { DeepDivePage } from "./deepdive-types";

const DIR = path.join(process.cwd(), "content", "test-extracted");

export async function listDeepDives(): Promise<DeepDivePage[]> {
  const entries = await fs.readdir(DIR);
  const out: DeepDivePage[] = [];
  for (const f of entries) {
    if (!f.endsWith(".json")) continue;
    const raw = await fs.readFile(path.join(DIR, f), "utf-8");
    out.push(JSON.parse(raw));
  }
  return out;
}

export async function loadDeepDive(slug: string): Promise<DeepDivePage | null> {
  const all = await listDeepDives();
  return all.find((d) => d.slug === slug) ?? null;
}
