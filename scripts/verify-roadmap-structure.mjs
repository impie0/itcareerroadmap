#!/usr/bin/env node
// Strict structural conformance check using CompTIA_Roadmap.md as the canonical
// reference. Every other roadmap file must match the same shape so the loader
// + page consume identical fields across the board.
//
// Reports — per file — what's missing, what's out of order, what's extra.
// Read-only; no edits.

import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DIR = path.join(ROOT, "Deep Dive", "Certification_Roadmaps");
const REFERENCE = "CompTIA_Roadmap.md";

// Locked from CompTIA_Roadmap.md
const REQUIRED_FM_KEYS = [
  "vendor",
  "ecosystem",
  "total_certifications",
  "entry_point_cert",
  "time_to_expert",
  "cost_estimate_usd",
  "cost_estimate_zar",
  "last_verified",
];
const REQUIRED_FM_ARRAY = "sources";

const REQUIRED_H2_ORDER = [
  "Overview",
  "Progression Diagram",
  "Per-Level Detail",
  "Recommended Progression Paths",
  "Prerequisites & Sequencing Matrix",
  "Specialization Branches",
  "Cross-Vendor Bridges",
  "Cost Breakdown",
  "Job Market Snapshot",
  "Salary Trajectory",
  "Common Questions",
  "Official Sources",
  "Research Status",
];

// Subsection patterns expected inside specific sections
const REQUIRED_LEVEL_PREFIX = /^Level \d+:/;       // ### Level 0: Pre-Entry, ### Level 1: Entry, etc.
const REQUIRED_PATH_PREFIX  = /^Path \d+:/;        // ### Path 1: ..., ### Path 2: ...

function rel(p) {
  return path.relative(ROOT, p).replace(/\\/g, "/");
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

function listHeadings(body) {
  // Returns ordered array of { level, text }, ignoring code-fence interiors.
  const out = [];
  let inFence = false;
  for (const line of body.split("\n")) {
    if (line.startsWith("```")) inFence = !inFence;
    if (inFence) continue;
    const m = /^(##+)\s+(.+?)\s*$/.exec(line);
    if (m) out.push({ level: m[1].length, text: m[2].trim() });
  }
  return out;
}

function classifyMermaid(body) {
  const out = [];
  let inMermaid = false;
  let buf = [];
  let inFence = false;
  let lang = "";
  for (const line of body.split("\n")) {
    const fenceOpen = /^```(\w*)\s*$/.exec(line);
    if (fenceOpen && !inFence) {
      inFence = true;
      lang = fenceOpen[1];
      if (lang === "mermaid") { inMermaid = true; buf = []; }
      continue;
    }
    if (line.startsWith("```") && inFence) {
      if (inMermaid) {
        const first = (buf[0] ?? "").trim();
        const type = first.match(/^(\w+(?:-\w+)?)/)?.[1] ?? "unknown";
        out.push(type);
        inMermaid = false;
      }
      inFence = false;
      lang = "";
      continue;
    }
    if (inMermaid) buf.push(line);
  }
  return out;
}

function audit(filePath, raw) {
  const { data: fm, content: body } = parseFrontmatter(raw);
  const headings = listHeadings(body);
  const h2Order = headings.filter((h) => h.level === 2).map((h) => h.text);
  const h3List  = headings.filter((h) => h.level === 3).map((h) => h.text);

  const issues = { critical: [], major: [], minor: [] };

  // Frontmatter
  const missingFm = REQUIRED_FM_KEYS.filter((k) => !fm[k] || (typeof fm[k] === "string" && !fm[k].trim()));
  if (missingFm.length) issues.critical.push(`missing frontmatter: ${missingFm.join(", ")}`);
  if (!Array.isArray(fm[REQUIRED_FM_ARRAY]) || (fm[REQUIRED_FM_ARRAY] ?? []).length === 0) {
    issues.major.push(`missing frontmatter array: ${REQUIRED_FM_ARRAY}`);
  }

  // H2 sections — strict required set
  const missingSections = REQUIRED_H2_ORDER.filter((s) => !h2Order.includes(s));
  if (missingSections.length) {
    // First two are mandatory for the page to render correctly
    const critical = missingSections.filter((s) => s === "Overview" || s === "Progression Diagram");
    const rest     = missingSections.filter((s) => !critical.includes(s));
    if (critical.length) issues.critical.push(`missing required sections (page won't render properly): ${critical.join(", ")}`);
    if (rest.length)     issues.major.push(`missing sections: ${rest.join(", ")}`);
  }

  // H2 ordering — sections present should appear in CompTIA's order
  const presentInOrder = REQUIRED_H2_ORDER.filter((s) => h2Order.includes(s));
  const actualOrder = h2Order.filter((s) => REQUIRED_H2_ORDER.includes(s));
  const ordered = presentInOrder.every((s, i) => actualOrder[i] === s);
  if (!ordered) {
    issues.minor.push(`section order differs from reference. Expected: [${presentInOrder.join(" → ")}]. Got: [${actualOrder.join(" → ")}]`);
  }

  // Extra h2 sections that aren't in the canonical list
  const extra = h2Order.filter((s) => !REQUIRED_H2_ORDER.includes(s));
  if (extra.length) issues.minor.push(`extra section(s) not in CompTIA template: ${extra.join(", ")}`);

  // ### Level subsections under Per-Level Detail
  const hasPerLevel = h2Order.includes("Per-Level Detail");
  const levelHeadings = h3List.filter((h) => REQUIRED_LEVEL_PREFIX.test(h));
  if (hasPerLevel && levelHeadings.length === 0) {
    issues.major.push(`Per-Level Detail section exists but has no '### Level N:' subsections`);
  }

  // ### Path subsections under Recommended Progression Paths
  const hasPaths = h2Order.includes("Recommended Progression Paths");
  const pathHeadings = h3List.filter((h) => REQUIRED_PATH_PREFIX.test(h));
  if (hasPaths && pathHeadings.length === 0) {
    issues.major.push(`Recommended Progression Paths section exists but has no '### Path N:' subsections`);
  }

  // Mermaid block presence in expected sections
  const mermaidTypes = classifyMermaid(body);
  if (mermaidTypes.length === 0) {
    issues.critical.push(`no mermaid blocks at all — visuals won't render`);
  }

  // Vendor-name consistency: filename should match vendor frontmatter
  const stem = path.basename(filePath).replace(/_Roadmap\.md$/i, "");
  if (fm.vendor) {
    const fnSlug = stem.toLowerCase().replace(/[^a-z0-9]/g, "");
    const fmSlug = String(fm.vendor).toLowerCase().replace(/[^a-z0-9]/g, "");
    // Tolerant — vendor name may be longer ("Cisco" vs "Cisco_Networks")
    if (!fmSlug.startsWith(fnSlug.slice(0, 4)) && !fnSlug.startsWith(fmSlug.slice(0, 4))) {
      issues.minor.push(`filename '${stem}' and vendor '${fm.vendor}' don't share a prefix`);
    }
  }

  return { issues, fm, h2Order, mermaidTypes, levelHeadings, pathHeadings };
}

// ─── Main ────────────────────────────────────────────────────────────────
const refRaw = await fs.readFile(path.join(DIR, REFERENCE), "utf-8");
const refResult = audit(path.join(DIR, REFERENCE), refRaw);

console.log("=".repeat(76));
console.log(`Reference: ${REFERENCE}`);
console.log("=".repeat(76));
console.log(`Frontmatter keys present: ${Object.keys(refResult.fm).join(", ")}`);
console.log(`Section order: ${refResult.h2Order.join(" · ")}`);
console.log(`Mermaid block types: ${refResult.mermaidTypes.join(", ")}`);
console.log(`### Levels (${refResult.levelHeadings.length}): ${refResult.levelHeadings.join(" · ")}`);
console.log(`### Paths  (${refResult.pathHeadings.length}): ${refResult.pathHeadings.join(" · ")}`);
console.log();

const entries = await fs.readdir(DIR);
const reports = [];
for (const f of entries) {
  if (!f.endsWith(".md")) continue;
  if (f.startsWith("_")) continue;
  if (f === REFERENCE) continue;
  const filePath = path.join(DIR, f);
  const raw = await fs.readFile(filePath, "utf-8");
  const r = audit(filePath, raw);
  reports.push({ file: f, ...r });
}
reports.sort((a, b) => a.file.localeCompare(b.file));

const conformant   = reports.filter((r) => r.issues.critical.length === 0 && r.issues.major.length === 0);
const partialOK    = reports.filter((r) => r.issues.critical.length === 0 && r.issues.major.length > 0);
const broken       = reports.filter((r) => r.issues.critical.length > 0);

console.log("=".repeat(76));
console.log(`Conformance summary  (against ${REFERENCE})`);
console.log("=".repeat(76));
console.log(`Files compared : ${reports.length}`);
console.log(`✓ Fully conformant     : ${conformant.length}`);
console.log(`◐ Partial (major gaps) : ${partialOK.length}`);
console.log(`✗ Broken (critical)    : ${broken.length}`);
console.log();

function dumpGroup(label, list) {
  if (list.length === 0) return;
  console.log("─".repeat(76));
  console.log(label);
  console.log("─".repeat(76));
  for (const r of list) {
    console.log(`  ${r.file}`);
    if (r.issues.critical.length) for (const i of r.issues.critical) console.log(`    🔴 ${i}`);
    if (r.issues.major.length)    for (const i of r.issues.major)    console.log(`    🟠 ${i}`);
    if (r.issues.minor.length)    for (const i of r.issues.minor)    console.log(`    🟡 ${i}`);
  }
  console.log();
}

dumpGroup("✗ BROKEN — critical issues will affect site rendering", broken);
dumpGroup("◐ PARTIAL — renders but missing expected content", partialOK);
dumpGroup("✓ FULLY CONFORMANT — match reference structure", conformant);
