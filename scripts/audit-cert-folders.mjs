#!/usr/bin/env node
// One-shot audit: walks Deep Dive/Certifications and Deep Dive/Certification_Roadmaps,
// parses each file the way the production loaders do, and reports what would
// silently get skipped or land in a fallback bucket.
//
// Run:  node scripts/audit-cert-folders.mjs
//
// Exits 0 always — this is a report tool, not a test.

import { promises as fs } from "node:fs";
import path from "node:path";

// Minimal frontmatter parser — just enough to read the keys the production
// loader cares about (vendor, cert_code/code, cert_name/title, status, level,
// domain, ecosystem). No gray-matter dep so this script can run without
// node_modules installed.
function matter(raw) {
  if (!raw.startsWith("---")) return { data: {}, content: raw };
  const end = raw.indexOf("\n---", 3);
  if (end === -1) return { data: {}, content: raw };
  const fmText = raw.slice(3, end).replace(/^\r?\n/, "");
  const content = raw.slice(end + 4).replace(/^\r?\n/, "");
  const data = {};
  let currentKey = null;
  for (const line of fmText.split(/\r?\n/)) {
    if (!line.trim()) continue;
    // Top-level "key: value"
    const m = /^([A-Za-z_][\w-]*)\s*:\s*(.*)$/.exec(line);
    if (m && !line.startsWith("  ") && !line.startsWith("\t")) {
      currentKey = m[1];
      let v = m[2].trim();
      if (v === "" || v === "[]") {
        data[currentKey] = v === "[]" ? [] : "";
        continue;
      }
      // Strip quotes
      v = v.replace(/^["'](.*)["']$/, "$1");
      data[currentKey] = v;
    }
    // Sequence under last key (very rough — fine for sources: lists)
    else if (/^\s*-\s+/.test(line) && currentKey) {
      if (!Array.isArray(data[currentKey])) data[currentKey] = [];
      data[currentKey].push(line.replace(/^\s*-\s+/, "").trim());
    }
  }
  return { data, content };
}

const ROOT = process.cwd();
const CERTS_DIR = path.join(ROOT, "Deep Dive", "Certifications");
const ROADMAPS_DIR = path.join(ROOT, "Deep Dive", "Certification_Roadmaps");

function rel(p) {
  return path.relative(ROOT, p).replace(/\\/g, "/");
}

async function auditCerts() {
  const skipped = [];
  const noStatus = [];
  const noLevel = [];
  const noDomain = [];
  const noUrl = [];
  const noVendor = [];
  const noFrontmatter = [];
  const parseFails = [];
  const codeCollisions = new Map(); // code → [paths]
  let total = 0;
  let parsed = 0;

  let vendorDirs = [];
  try {
    vendorDirs = await fs.readdir(CERTS_DIR);
  } catch {
    console.log(`No Certifications dir at ${CERTS_DIR}`);
    return;
  }

  for (const v of vendorDirs) {
    const dir = path.join(CERTS_DIR, v);
    const stat = await fs.stat(dir).catch(() => null);
    if (!stat?.isDirectory()) continue;
    const files = await fs.readdir(dir);
    for (const f of files) {
      if (!f.endsWith(".md")) continue;
      total++;
      const fp = path.join(dir, f);
      let raw, parsedData;
      try {
        raw = await fs.readFile(fp, "utf-8");
        parsedData = matter(raw);
      } catch (e) {
        parseFails.push(`${rel(fp)} — ${e.message}`);
        continue;
      }
      const fm = parsedData.data ?? {};
      if (!fm || Object.keys(fm).length === 0) {
        noFrontmatter.push(rel(fp));
        continue;
      }
      const code = (fm.cert_code ?? fm.code ?? "").toString().trim();
      const name = (fm.cert_name ?? fm.title ?? "").toString().trim();
      const vendor = (fm.vendor ?? "").toString().trim();
      if (!code || !name || !vendor) {
        skipped.push(`${rel(fp)} — code='${code}' name='${name}' vendor='${vendor}'`);
        continue;
      }
      parsed++;
      if (!fm.status) noStatus.push(`${rel(fp)} (${code})`);
      if (!fm.level) noLevel.push(`${rel(fp)} (${code})`);
      if (!fm.domain) noDomain.push(`${rel(fp)} (${code})`);
      if (!vendor) noVendor.push(`${rel(fp)} (${code})`);

      // URL — loader sniffs body for "Vendor source —" / "Official portal —"
      const body = parsedData.content;
      const hasUrl = /\*\*(Vendor source|Official portal|Official exam guide)/i.test(body);
      if (!hasUrl) noUrl.push(`${rel(fp)} (${code})`);

      // Track code collisions (two files with same code → matrix dedupe will hide one)
      const key = `${vendor.toLowerCase()}|${code.toLowerCase()}`;
      if (!codeCollisions.has(key)) codeCollisions.set(key, []);
      codeCollisions.get(key).push(rel(fp));
    }
  }

  const collisions = [...codeCollisions.entries()].filter(([, v]) => v.length > 1);

  console.log("=".repeat(70));
  console.log("Certifications audit");
  console.log("=".repeat(70));
  console.log(`Vendor folders : ${vendorDirs.length}`);
  console.log(`.md files seen : ${total}`);
  console.log(`Parsed cleanly : ${parsed}`);
  console.log(`SKIPPED (loader will drop): ${skipped.length}`);
  console.log(`Parse failures : ${parseFails.length}`);
  console.log(`No frontmatter : ${noFrontmatter.length}`);
  console.log(`Missing status : ${noStatus.length}`);
  console.log(`Missing level  : ${noLevel.length}`);
  console.log(`Missing domain : ${noDomain.length}`);
  console.log(`No vendor URL  : ${noUrl.length}`);
  console.log(`Code collisions: ${collisions.length}`);
  console.log();

  function dump(label, list, max = 15) {
    if (list.length === 0) return;
    console.log(`--- ${label} (showing up to ${max}) ---`);
    list.slice(0, max).forEach((s) => console.log("  " + s));
    if (list.length > max) console.log(`  ... and ${list.length - max} more`);
    console.log();
  }
  dump("Skipped — will not appear on the site", skipped);
  dump("Parse failures", parseFails);
  dump("No frontmatter", noFrontmatter);
  dump("Missing level (will fall back to 'Entry')", noLevel);
  dump("Missing domain (will land in 'businessapps' fallback)", noDomain);
  dump("Missing status", noStatus);
  dump("No vendor source URL in body", noUrl);
  if (collisions.length > 0) {
    console.log(`--- Code collisions (vendor|code → files) ---`);
    collisions.slice(0, 20).forEach(([k, files]) => {
      console.log(`  ${k}`);
      files.forEach((f) => console.log(`    - ${f}`));
    });
    if (collisions.length > 20) console.log(`  ... and ${collisions.length - 20} more`);
  }
}

async function auditRoadmaps() {
  console.log();
  console.log("=".repeat(70));
  console.log("Certification_Roadmaps audit");
  console.log("=".repeat(70));
  let entries = [];
  try {
    entries = await fs.readdir(ROADMAPS_DIR);
  } catch {
    console.log(`No Certification_Roadmaps dir at ${ROADMAPS_DIR}`);
    return;
  }
  let total = 0, parsed = 0;
  const noVendorFm = [];
  const noMermaid = [];
  const dupeSections = [];
  const parseFails = [];
  for (const f of entries) {
    if (!f.endsWith(".md")) continue;
    if (f.startsWith("_")) continue; // template / checklist skipped by loader
    total++;
    const fp = path.join(ROADMAPS_DIR, f);
    let raw, parsedData;
    try {
      raw = await fs.readFile(fp, "utf-8");
      parsedData = matter(raw);
    } catch (e) {
      parseFails.push(`${rel(fp)} — ${e.message}`);
      continue;
    }
    parsed++;
    const fm = parsedData.data ?? {};
    if (!fm.vendor) noVendorFm.push(rel(fp));

    const body = parsedData.content;
    if (!/```mermaid/i.test(body)) noMermaid.push(rel(fp));

    // Detect duplicate ## sections (loader silently dedupes — flag for author cleanup)
    const headings = [];
    let inFence = false;
    for (const line of body.split("\n")) {
      if (line.startsWith("```")) inFence = !inFence;
      if (!inFence) {
        const m = /^##\s+(.+?)\s*$/.exec(line);
        if (m) headings.push(m[1].trim().toLowerCase());
      }
    }
    const dupes = headings.filter((h, i) => headings.indexOf(h) !== i);
    if (dupes.length > 0) {
      dupeSections.push(`${rel(fp)} — duplicates: ${[...new Set(dupes)].join(", ")}`);
    }
  }
  console.log(`.md files seen : ${total}`);
  console.log(`Parsed cleanly : ${parsed}`);
  console.log(`Parse failures : ${parseFails.length}`);
  console.log(`No 'vendor:' fm: ${noVendorFm.length}`);
  console.log(`No mermaid blk : ${noMermaid.length}`);
  console.log(`Dupe sections  : ${dupeSections.length}`);
  console.log();
  function dump(label, list, max = 10) {
    if (list.length === 0) return;
    console.log(`--- ${label} ---`);
    list.slice(0, max).forEach((s) => console.log("  " + s));
    if (list.length > max) console.log(`  ... and ${list.length - max} more`);
    console.log();
  }
  dump("Parse failures", parseFails);
  dump("Missing vendor frontmatter", noVendorFm);
  dump("No mermaid block (visuals won't render)", noMermaid);
  dump("Duplicate ## sections (author cleanup needed)", dupeSections);
}

await auditCerts();
await auditRoadmaps();
