import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * Shape of a fully-parsed per-cert .md file from Deep Dive/Certifications/{Vendor}/.
 * This is the only enrichment type used by the app — drawer, per-cert page, matrix
 * loader all consume this directly.
 */
export type EnrichedCertFields = {
  vendor: string;
  name: string;
  code: string;
  cost?: string;
  duration?: string;
  questions?: string;
  passingScore?: string;
  validity?: string;
  retirementDate?: string;
  url?: string;
  examGuideUrl?: string;
  examObjectivesUrl?: string;
  topics?: string[];
  rationale?: string;
  prepTime?: string;
  prerequisites?: string;
  currentVersion?: string;
  delivery?: string;
  targetAudience?: string;
  sourceFile?: string;
  released?: string;
  updated?: string;
  format?: string;
  languages?: string;
  renewal?: string;
  status?: string;
  level?: string;
  domain?: string;
  ecosystem?: string;
  recommendedCourses?: { provider: string; title: string; cost?: string; url?: string }[];
  practiceExams?: { provider: string; title: string; cost?: string; url?: string }[];
  books?: { title: string; author?: string; publisher?: string; year?: string; isbn?: string; url?: string }[];
  jobs?: string[];
  salaryByRegion?: { region: string; range: string; source?: string }[];
  skillsValidated?: string[];
  relatedCerts?: string[];
};

export type CertificationFile = EnrichedCertFields & {
  aliases?: string[];
  // Filesystem locator
  vendorSlug: string;
  codeSlug: string;
  filePath: string;
  // Whole markdown body for the per-cert page
  markdownBody: string;
};

const CERTS_DIR = path.join(process.cwd(), "Deep Dive", "Certifications");

let cache: CertificationFile[] | null = null;

/** Strip table/markdown decoration to get cell text */
function cleanCell(s: string): string {
  return s
    .trim()
    .replace(/^\*\*(.+?)\*\*$/, "$1")
    .replace(/`/g, "")
    .trim();
}

/** Extract a markdown link's URL */
function firstUrl(s: string): string | undefined {
  const m = s.match(/\((https?:\/\/[^)\s]+)\)/);
  return m?.[1];
}

/** Find a markdown table by its header keyword and return parsed rows */
function findTable(body: string, headerKeyword: RegExp): string[][] {
  const lines = body.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (headerKeyword.test(lines[i]) && lines[i + 1]?.includes("|")) {
      const rows: string[][] = [];
      let j = i + 1;
      // Skip the header row + alignment row
      const headerRow = lines[j];
      const headers = headerRow.split("|").slice(1, -1).map(cleanCell);
      j += 2;
      while (j < lines.length && lines[j].trim().startsWith("|")) {
        const cells = lines[j].split("|").slice(1, -1).map(cleanCell);
        if (cells.length === headers.length) rows.push(cells);
        j++;
      }
      return [headers, ...rows];
    }
  }
  return [];
}

/** Extract the "Exam facts" table into a key→value map */
function parseExamFacts(body: string): Record<string, string> {
  const out: Record<string, string> = {};
  const lines = body.split("\n");
  let inTable = false;
  for (let i = 0; i < lines.length; i++) {
    if (/##\s+Exam (facts|details|overview)/i.test(lines[i])) {
      inTable = true;
      continue;
    }
    if (inTable && lines[i].startsWith("##")) break;
    if (inTable && lines[i].startsWith("|")) {
      const cells = lines[i].split("|").slice(1, -1).map(cleanCell);
      if (cells.length >= 2 && cells[0] && !cells[0].includes("---") && !/^Field$/i.test(cells[0])) {
        out[cells[0].toLowerCase()] = cells[1];
      }
    }
  }
  return out;
}

/** Parse the salary table — variable shape across files */
function parseSalary(body: string): { region: string; range: string; source?: string }[] {
  const out: { region: string; range: string; source?: string }[] = [];
  const sec = body.match(/##\s+Salary[^\n]*\n([\s\S]*?)(?=\n##|\Z)/);
  if (!sec) return out;
  for (const line of sec[1].split("\n")) {
    if (!line.startsWith("|")) continue;
    const cells = line.split("|").slice(1, -1).map(cleanCell);
    if (cells.length < 2 || cells[0].includes("---") || /^Region$/i.test(cells[0])) continue;
    out.push({ region: cells[0], range: cells[1], source: cells[2] });
  }
  return out;
}

/** Parse a courses-style table: Provider | Title | Cost | URL */
function parseTablesAfter(body: string, headerKeyword: RegExp): { provider: string; title: string; cost?: string; url?: string }[] {
  const sec = body.match(new RegExp(`##\\s+${headerKeyword.source}[\\s\\S]*?(?=\\n##|$)`, "i"));
  if (!sec) return [];
  const out: { provider: string; title: string; cost?: string; url?: string }[] = [];
  for (const line of sec[0].split("\n")) {
    if (!line.startsWith("|")) continue;
    const cells = line.split("|").slice(1, -1).map(cleanCell);
    if (cells.length < 2 || cells[0].includes("---") || /^Provider$/i.test(cells[0])) continue;
    out.push({ provider: cells[0], title: cells[1], cost: cells[2], url: firstUrl(cells[3] ?? "") });
  }
  return out;
}

/** Parse books: Title | Author | Publisher | Year | ISBN | URL */
function parseBooks(body: string): { title: string; author?: string; publisher?: string; year?: string; isbn?: string; url?: string }[] {
  const sec = body.match(/##\s+Books[\s\S]*?(?=\n##|$)/);
  if (!sec) return [];
  const out: { title: string; author?: string; publisher?: string; year?: string; isbn?: string; url?: string }[] = [];
  for (const line of sec[0].split("\n")) {
    if (!line.startsWith("|")) continue;
    const cells = line.split("|").slice(1, -1).map(cleanCell);
    if (cells.length < 2 || cells[0].includes("---") || /^Title$/i.test(cells[0])) continue;
    out.push({
      title: cells[0],
      author: cells[1],
      publisher: cells[2],
      year: cells[3],
      isbn: cells[4],
      url: firstUrl(cells[5] ?? ""),
    });
  }
  return out;
}

/** Parse a section's bullet list */
function parseBullets(body: string, headerKeyword: RegExp): string[] {
  const sec = body.match(new RegExp(`##\\s+${headerKeyword.source}[\\s\\S]*?(?=\\n##|$)`, "i"));
  if (!sec) return [];
  const out: string[] = [];
  for (const line of sec[0].split("\n")) {
    const m = line.match(/^[\s\-*•]+(.+)$/);
    if (m && !m[1].startsWith("*")) {
      const t = m[1].replace(/^\*\*(.+?)\*\*/, "$1").trim();
      if (t.length > 0 && t.length < 250) out.push(t);
    }
  }
  return out;
}

/** Topics covered — bullets under "Topics covered" or weight rows */
function parseTopics(body: string): string[] {
  return parseBullets(body, /Topics covered/);
}

/** Skills validated */
function parseSkillsValidated(body: string): string[] {
  return parseBullets(body, /Skills validated/);
}

/** Pull the first plain paragraph from the "About" section */
function parseAbout(body: string): string | undefined {
  const m = body.match(/##\s+About\s*\n+([^\n#][^\n]*(?:\n[^#\n][^\n]*)*)/);
  return m?.[1].trim();
}

/** Extract URL from "Vendor source —" / "Official exam guide —" / etc. lines */
function parseHeaderLink(body: string, label: RegExp): string | undefined {
  const m = body.match(new RegExp(`\\*\\*${label.source}[\\s\\S]{0,80}\\((https?://[^)\\s]+)\\)`, "i"));
  return m?.[1];
}

/** Job titles — "Typical job titles" section is sentence-style separated by · */
function parseJobs(body: string): string[] {
  const m = body.match(/##\s+Typical job titles[^\n]*\n+([^\n#]+)/);
  if (!m) return [];
  return m[1]
    .replace(/\*([^*]+)\*/g, "")
    .split(/\s*·\s*|\s*•\s*|,\s*/)
    .map((s) => s.trim())
    .filter((s) => s.length > 1 && s.length < 80);
}

function parseRelated(body: string): string[] {
  return parseBullets(body, /Related certifications/);
}

/* ============================================================
   Main loader
   ============================================================ */

async function listCertFiles(): Promise<{ vendorSlug: string; filePath: string }[]> {
  const out: { vendorSlug: string; filePath: string }[] = [];
  let vendors: string[] = [];
  try {
    vendors = await fs.readdir(CERTS_DIR);
  } catch {
    return out;
  }
  for (const vendor of vendors) {
    const dir = path.join(CERTS_DIR, vendor);
    let stat;
    try {
      stat = await fs.stat(dir);
    } catch {
      continue;
    }
    if (!stat.isDirectory()) continue;
    const files = await fs.readdir(dir);
    for (const f of files) {
      if (!f.endsWith(".md")) continue;
      out.push({ vendorSlug: vendor, filePath: path.join(dir, f) });
    }
  }
  return out;
}

function normalizeFrontmatter(fm: Record<string, any>) {
  return {
    code: (fm.cert_code ?? fm.code ?? "").toString().trim(),
    name: (fm.cert_name ?? fm.title ?? "").toString().trim(),
    vendor: (fm.vendor ?? "").toString().trim(),
    status: (fm.status ?? "active").toString().toLowerCase(),
    level: (fm.level ?? "").toString(),
    domain: (fm.domain ?? "").toString(),
    ecosystem: (fm.ecosystem ?? "").toString(),
    aliases: (fm.aliases ?? []) as string[],
    lastUpdated: (fm.last_verified ?? fm.lastUpdated ?? "").toString(),
    relatedCerts: (fm.relatedCerts ?? fm.related_certs ?? []) as string[],
  };
}

export async function loadAllCertifications(): Promise<CertificationFile[]> {
  if (cache) return cache;
  const files = await listCertFiles();
  const out: CertificationFile[] = [];
  for (const { vendorSlug, filePath } of files) {
    try {
      const raw = await fs.readFile(filePath, "utf-8");
      const parsed = matter(raw);
      const fm = normalizeFrontmatter(parsed.data ?? {});
      const body = parsed.content;
      const exam = parseExamFacts(body);

      const codeSlug = fm.code.toLowerCase().replace(/[^\w-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");

      // Skip files that don't have a valid code (no frontmatter, blank code field, etc.)
      if (!codeSlug || !fm.vendor || !fm.name) {
        console.warn(`[certifications-loader] skipping ${filePath} — missing code/vendor/name in frontmatter`);
        continue;
      }

      out.push({
        vendor: fm.vendor,
        name: fm.name,
        code: fm.code,
        cost: exam["cost"],
        duration: exam["duration"],
        questions: exam["questions"],
        passingScore: exam["passing"] ?? exam["passing score"],
        validity: exam["valid"] ?? exam["validity"],
        retirementDate: exam["retiring"] && exam["retiring"] !== "N/A; active as of May 2026" ? exam["retiring"] : undefined,
        currentVersion: exam["version"] ?? exam["current version"] ?? undefined,
        delivery: exam["delivery"],
        prerequisites: exam["prerequisites"],
        prepTime: exam["prep time"] ?? exam["preparation time"],
        format: exam["format"],
        languages: exam["languages"],
        renewal: exam["renewal"],
        released: exam["released"],
        updated: exam["updated"],
        targetAudience: undefined,
        url: parseHeaderLink(body, /Vendor source/i) ?? parseHeaderLink(body, /Official portal/i),
        examGuideUrl: parseHeaderLink(body, /Official exam guide/i),
        examObjectivesUrl: parseHeaderLink(body, /Exam objectives/i),
        topics: parseTopics(body),
        rationale: parseAbout(body),
        skillsValidated: parseSkillsValidated(body),
        recommendedCourses: parseTablesAfter(body, /Recommended courses/i),
        practiceExams: parseTablesAfter(body, /Practice exams/i),
        books: parseBooks(body),
        jobs: parseJobs(body),
        salaryByRegion: parseSalary(body),
        relatedCerts: [...(fm.relatedCerts ?? []), ...parseRelated(body)],
        aliases: fm.aliases,
        status: fm.status,
        level: fm.level,
        domain: fm.domain,
        ecosystem: fm.ecosystem,
        sourceFile: path.relative(path.join(process.cwd(), "Deep Dive"), filePath).replace(/\\/g, "/"),
        vendorSlug,
        codeSlug,
        filePath,
        markdownBody: body,
      });
    } catch (err) {
      console.error(`[certifications-loader] failed to parse ${filePath}:`, err);
    }
  }
  cache = out;
  return out;
}

export async function findCertification(opts: { vendor?: string; code?: string; name?: string; aliases?: string[] }): Promise<CertificationFile | null> {
  const all = await loadAllCertifications();
  const norm = (s: string) => (s ?? "").toLowerCase().replace(/\s+/g, " ").trim();
  const wantCode = norm(opts.code ?? "").replace(/[^a-z0-9]/g, "");
  const wantVendor = norm(opts.vendor ?? "");
  const wantName = norm(opts.name ?? "");

  // Exact code match (case + punctuation insensitive)
  if (wantCode) {
    for (const c of all) {
      if (norm(c.code).replace(/[^a-z0-9]/g, "") === wantCode) return c;
    }
  }
  // Alias match
  for (const c of all) {
    for (const a of c.aliases ?? []) {
      if (norm(a) === wantName || norm(a) === wantCode || norm(a) === `${wantVendor} ${wantName}`.trim()) return c;
    }
  }
  // Vendor + name
  if (wantVendor && wantName) {
    for (const c of all) {
      if (norm(c.vendor) === wantVendor && norm(c.name).includes(wantName)) return c;
      if (norm(c.vendor) === wantVendor && norm(wantName).includes(norm(c.name))) return c;
    }
  }
  return null;
}
