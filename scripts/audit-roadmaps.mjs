#!/usr/bin/env node
// Per-file readiness audit for Deep Dive/Certification_Roadmaps/*.md.
//
// Checks each file against what `lib/certification-paths-loader.ts` parses out
// AND what `app/certification-paths/[vendor]/page.tsx` actually consumes.
// Reports gaps that would render as "—" or render an empty section in the UI.
//
// Run:  node scripts/audit-roadmaps.mjs
// Exits 0 always — this is a report tool.

import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DIR = path.join(ROOT, "Deep Dive", "Certification_Roadmaps");

// Hero-stat frontmatter keys (each renders a Stat tile or hero context line).
const HERO_FM_KEYS = [
  "vendor",
  "ecosystem",
  "total_certifications",
  "entry_point_cert",
  "time_to_expert",
  "cost_estimate_usd",
  "cost_estimate_zar",
  "last_verified",
];

// Sections the page considers always-open (must exist or the page header is bare).
const REQUIRED_SLUGS = ["overview", "progression-diagram"];

// Sections we expect for a "complete" roadmap, per the v2 template.
const EXPECTED_SLUGS = [
  "overview",
  "progression-diagram",
  "per-level-detail",
  "recommended-progression-paths",
  "prerequisites-sequencing-matrix",
  "specialization-branches",
  "cross-vendor-bridges",
  "cost-breakdown",
  "job-market-snapshot",
  "salary-trajectory",
  "common-questions",
  "official-sources",
];

// Mermaid block types the page can render.
const KNOWN_MERMAID = ["flowchart", "graph", "mindmap", "gantt", "xychart-beta", "sequenceDiagram", "classDiagram", "stateDiagram", "pie", "journey", "erDiagram", "timeline"];

function rel(p) {
  return path.relative(ROOT, p).replace(/\\/g, "/");
}

function slugify(s) {
  return s.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
}

function parseFrontmatter(raw) {
  if (!raw.startsWith("---")) return { data: {}, content: raw };
  const end = raw.indexOf("\n---", 3);
  if (end === -1) return { data: {}, content: raw };
  const fmText = raw.slice(3, end).replace(/^\r?\n/, "");
  const content = raw.slice(end + 4).replace(/^\r?\n/, "");
  const data = {};
  let currentKey = null;
  for (const line of fmText.split(/\r?\n/)) {
    if (!line.trim()) continue;
    const m = /^([A-Za-z_][\w-]*)\s*:\s*(.*)$/.exec(line);
    if (m && !line.startsWith("  ") && !line.startsWith("\t")) {
      currentKey = m[1];
      let v = m[2].trim();
      if (v === "" || v === "[]") {
        data[currentKey] = v === "[]" ? [] : "";
        continue;
      }
      v = v.replace(/^["'](.*)["']$/, "$1");
      data[currentKey] = v;
    } else if (/^\s*-\s+/.test(line) && currentKey) {
      if (!Array.isArray(data[currentKey])) data[currentKey] = [];
      data[currentKey].push(line.replace(/^\s*-\s+/, "").trim());
    }
  }
  return { data, content };
}

function parseSections(md) {
  const lines = md.split("\n");
  const sections = [];
  let current = null;
  let inFence = false;
  for (const line of lines) {
    if (line.startsWith("```")) inFence = !inFence;
    const h2 = !inFence && /^##\s+(.+?)\s*$/.exec(line);
    if (h2) {
      if (current) sections.push({ heading: current.heading, slug: slugify(current.heading), markdown: current.lines.join("\n") });
      current = { heading: h2[1].trim(), lines: [] };
      continue;
    }
    if (current) current.lines.push(line);
  }
  if (current) sections.push({ heading: current.heading, slug: slugify(current.heading), markdown: current.lines.join("\n") });
  return sections;
}

function findMermaidBlocks(md) {
  const blocks = [];
  const lines = md.split("\n");
  let inMermaid = false;
  let buf = [];
  let startLine = 0;
  let inFence = false;
  let fenceLang = "";
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    const fenceMatch = /^```(\w*)\s*$/.exec(l);
    if (fenceMatch && !inFence) {
      inFence = true;
      fenceLang = fenceMatch[1];
      if (fenceLang === "mermaid") {
        inMermaid = true;
        startLine = i + 1;
        buf = [];
      }
      continue;
    }
    if (l.startsWith("```") && inFence) {
      if (inMermaid) {
        blocks.push({ startLine, body: buf.join("\n") });
        inMermaid = false;
      }
      inFence = false;
      fenceLang = "";
      continue;
    }
    if (inMermaid) buf.push(l);
  }
  // If the file ends with an unclosed mermaid fence, flag it
  const unclosed = inMermaid;
  return { blocks, unclosed };
}

function classifyMermaid(body) {
  const first = body.trim().split("\n")[0]?.trim() ?? "";
  for (const k of KNOWN_MERMAID) {
    if (first.startsWith(k)) return k;
  }
  return "unknown:" + first.slice(0, 40);
}

const reports = [];

async function auditOne(filePath) {
  const raw = await fs.readFile(filePath, "utf-8");
  const { data: fm, content: body } = parseFrontmatter(raw);
  const sections = parseSections(body);
  const sectionSlugs = sections.map((s) => s.slug);
  const seenSlugs = new Set();
  const dupeSlugs = [];
  for (const s of sectionSlugs) {
    if (seenSlugs.has(s)) dupeSlugs.push(s);
    seenSlugs.add(s);
  }
  const { blocks: mermaidBlocks, unclosed: unclosedMermaid } = findMermaidBlocks(body);
  const mermaidByType = {};
  for (const b of mermaidBlocks) {
    const t = classifyMermaid(b.body);
    mermaidByType[t] = (mermaidByType[t] ?? 0) + 1;
  }

  const missingHeroFm = HERO_FM_KEYS.filter((k) => !fm[k] || (Array.isArray(fm[k]) && fm[k].length === 0));
  const missingRequired = REQUIRED_SLUGS.filter((s) => !sectionSlugs.includes(s));
  const missingExpected = EXPECTED_SLUGS.filter((s) => !sectionSlugs.includes(s));
  const unknownMermaid = Object.keys(mermaidByType).filter((t) => t.startsWith("unknown"));

  // Extract source links from body to spot-check citation density
  const externalLinks = (body.match(/https?:\/\/[^\s\)]+/g) ?? []).length;

  reports.push({
    file: path.basename(filePath),
    vendor: fm.vendor ?? "(missing)",
    sectionCount: sections.length,
    mermaidCount: mermaidBlocks.length,
    mermaidByType,
    externalLinks,
    missingHeroFm,
    missingRequired,
    missingExpected,
    dupeSlugs: [...new Set(dupeSlugs)],
    unclosedMermaid,
    unknownMermaid,
    sources: Array.isArray(fm.sources) ? fm.sources.length : 0,
  });
}

const entries = await fs.readdir(DIR);
for (const f of entries) {
  if (!f.endsWith(".md")) continue;
  if (f.startsWith("_")) continue;
  await auditOne(path.join(DIR, f));
}

reports.sort((a, b) => a.file.localeCompare(b.file));

// ===== Summary =====
console.log("=".repeat(78));
console.log("Certification_Roadmaps readiness audit");
console.log("=".repeat(78));
console.log(`Files audited: ${reports.length}`);
const withCriticalGaps = reports.filter(
  (r) => r.missingRequired.length > 0 || r.unclosedMermaid || !r.vendor || r.vendor === "(missing)"
);
console.log(`Critical (won't render correctly): ${withCriticalGaps.length}`);
const withMinorGaps = reports.filter(
  (r) => r.missingHeroFm.length > 0 || r.missingExpected.length > 0 || r.dupeSlugs.length > 0
);
console.log(`Minor gaps (renders but incomplete): ${withMinorGaps.length}`);
console.log();

// ===== Critical issues per file =====
console.log("─ Critical issues ─");
for (const r of reports) {
  const issues = [];
  if (!r.vendor || r.vendor === "(missing)") issues.push("missing vendor: in frontmatter");
  if (r.missingRequired.length) issues.push("missing required sections: " + r.missingRequired.join(", "));
  if (r.unclosedMermaid) issues.push("UNCLOSED mermaid fence — will break rendering");
  if (issues.length) console.log(`  ${r.file}\n    - ` + issues.join("\n    - "));
}
console.log();

// ===== Hero stat completeness =====
console.log("─ Hero-stat frontmatter (renders as '—' if missing) ─");
for (const r of reports) {
  if (r.missingHeroFm.length) {
    console.log(`  ${r.file} — missing: ${r.missingHeroFm.join(", ")}`);
  }
}
console.log();

// ===== Section completeness =====
console.log("─ Optional/expected sections missing ─");
for (const r of reports) {
  if (r.missingExpected.length && r.missingRequired.length === 0) {
    console.log(`  ${r.file} — missing: ${r.missingExpected.join(", ")}`);
  }
}
console.log();

// ===== Per-file content stats (the readiness scorecard) =====
console.log("─ Per-file scorecard ─");
console.log("  file                                     vendor              §  mermaid  links  src");
for (const r of reports) {
  const file = r.file.padEnd(40).slice(0, 40);
  const vendor = (r.vendor || "").padEnd(18).slice(0, 18);
  const sec = String(r.sectionCount).padStart(2);
  const merm = String(r.mermaidCount).padStart(7);
  const links = String(r.externalLinks).padStart(5);
  const src = String(r.sources).padStart(3);
  console.log(`  ${file} ${vendor} ${sec}  ${merm}  ${links}  ${src}`);
}
console.log();

// ===== Mermaid type breakdown =====
const allTypes = new Map();
for (const r of reports) {
  for (const [t, n] of Object.entries(r.mermaidByType)) {
    allTypes.set(t, (allTypes.get(t) ?? 0) + n);
  }
}
console.log("─ Mermaid block types across all files ─");
for (const [t, n] of [...allTypes.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${t.padEnd(20)} ${n}`);
}
console.log();

const unknownAcross = reports.filter((r) => r.unknownMermaid.length > 0);
if (unknownAcross.length) {
  console.log("─ Unrecognised mermaid block types (first line of block) ─");
  for (const r of unknownAcross) {
    console.log(`  ${r.file}: ${r.unknownMermaid.join(" | ")}`);
  }
  console.log();
}

console.log(`Done — ${reports.length} files audited.`);
