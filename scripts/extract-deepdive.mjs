// Extracts structured cert data from Deep Dive markdown into JSON.
// Output: content/enriched/cert-fields.json — keyed by vendor|name|code lookup.
//
// Source files: Deep Dive/{Domains,Ecosystems,Roadmaps}/*.md
// Authored as plain ESM so it runs via `node` with no TS toolchain.

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DEEP_DIVE_DIR = path.join(ROOT, "Deep Dive");
const OUT_DIR = path.join(ROOT, "content", "enriched");
const SOURCE_FOLDERS = ["Domains", "Ecosystems", "Roadmaps"];

/* ============================================================
   Helpers
   ============================================================ */

const slugify = (s) => s.toLowerCase().replace(/[^\w]+/g, "-").replace(/^-+|-+$/g, "");

// Normalise a key -> field name we recognise.
const KEY_MAP = {
  "exam code": "code",
  "code": "code",
  "exam id": "code",
  "duration": "duration",
  "exam length": "duration",
  "questions": "questions",
  "number of questions": "questions",
  "passing score": "passingScore",
  "pass score": "passingScore",
  "minimum score": "passingScore",
  "cost": "cost",
  "exam fee": "cost",
  "exam cost": "cost",
  "fee": "cost",
  "price": "cost",
  "validity": "validity",
  "valid for": "validity",
  "valid": "validity",
  "renewal": "validity",
  "retirement date": "retirementDate",
  "retires": "retirementDate",
  "retirement": "retirementDate",
  "retiring": "retirementDate",
  "official page": "url",
  "official portal": "url",
  "exam page": "url",
  "exam url": "url",
  "url": "url",
  "objectives": "examGuideUrl",
  "objectives url": "examGuideUrl",
  "exam guide": "examGuideUrl",
  "exam objectives": "examGuideUrl",
  "prerequisites": "prerequisites",
  "prerequisite exam": "prerequisites",
  "prep time": "prepTime",
  "preparation time": "prepTime",
  "study time": "prepTime",
  "study hours": "prepTime",
  "current version": "currentVersion",
  "version": "currentVersion",
  "update date": "updateDate",
  "delivery": "delivery",
  "target audience": "targetAudience",
};

// Strip surrounding markdown fluff from a value cell.
function cleanValue(s) {
  if (!s) return "";
  let v = String(s).trim();
  // Strip wrapping bold
  v = v.replace(/^\*\*(.+)\*\*$/, "$1").trim();
  // Strip leading bullet glyphs
  v = v.replace(/^[\s\-•·]+/, "").trim();
  return v;
}

// Pull a URL out of a markdown link `[label](url)` if present.
function firstUrl(s) {
  const m = String(s ?? "").match(/\(https?:\/\/[^)\s]+\)/);
  if (!m) return null;
  return m[0].slice(1, -1);
}

// Strip markdown link syntax, keep the label.
function stripLinkSyntax(s) {
  return String(s ?? "")
    .replace(/\[([^\]]+)\]\(https?:\/\/[^)]+\)/g, "$1")
    .replace(/<https?:\/\/[^>]+>/g, "")
    .trim();
}

/* ============================================================
   Heading parser
   ============================================================ */

// Try to pull (vendor, name, code) from a cert section heading.
// Examples:
//   "Cisco CCNA (Associate Level)"
//   "AWS Cloud Practitioner (CLF-C02)"
//   "CompTIA Network+ (N10-009)"
//   "Cisco CCNP Enterprise — ENCOR (350-401 v1.1)"
//   "JNCIA-Junos"
//   "ENCOR (Implementing Cisco Enterprise Network Core Technologies) - 350-401"
function parseHeading(heading, fileVendorHints = []) {
  const cleaned = heading
    .replace(/^#+\s*/, "")
    .replace(/\s*\{[^}]+\}\s*$/, "")
    .trim();

  // Strip parenthetical (often the cert code or level)
  const parenMatch = cleaned.match(/^(.+?)\s+\(([^)]+)\)\s*$/);
  let baseName = cleaned;
  let parenContent = "";
  if (parenMatch) {
    baseName = parenMatch[1].trim();
    parenContent = parenMatch[2].trim();
  }

  // Try to identify vendor from the start of the heading
  const knownVendors = [
    "AWS", "Microsoft", "Google", "Oracle", "IBM", "Cisco", "Juniper",
    "Aruba/HPE", "Aruba", "HPE", "Arista", "Mikrotik", "Huawei",
    "CompTIA", "Red Hat", "RedHat", "Linux Foundation", "LPI", "SUSE",
    "Palo Alto", "Fortinet", "Check Point", "F5", "SonicWall", "Sophos",
    "Cloudflare", "Zscaler",
    "NetApp", "Pure Storage", "Pure", "Dell", "Dell EMC", "Veeam",
    "Commvault", "Rubrik", "Cohesity",
    "VMware", "VMware/Broadcom", "Broadcom", "Nutanix", "Citrix",
    "Splunk", "CrowdStrike", "SentinelOne", "Elastic", "QRadar",
    "Salesforce", "MuleSoft", "SAP", "ServiceNow", "Workday", "Adobe",
    "Atlassian", "Slack",
    "HashiCorp", "Docker", "Kubernetes", "CNCF", "GitHub", "GitLab",
    "Snowflake", "Databricks", "MongoDB", "Confluent",
    "ISC2", "(ISC)2", "ISACA", "SANS", "GIAC", "EC-Council", "IAPP",
    "OffSec", "Offensive Security", "TCM Security", "TCM",
    "PMI", "Scrum.org", "Scrum Alliance", "ITIL", "PeopleCert",
    "TOGAF", "The Open Group",
    "CWNP", "BICSI", "Uptime Institute",
    "Okta", "CyberArk", "Ping Identity", "Ping", "SailPoint", "Saviynt",
    "Datadog", "New Relic", "Dynatrace", "PagerDuty",
    "Epic", "Cerner", "Oracle Health", "Meditech",
  ];

  let vendor = "";
  let nameWithoutVendor = baseName;
  for (const v of knownVendors) {
    if (baseName.startsWith(v + " ")) {
      vendor = v;
      nameWithoutVendor = baseName.slice(v.length).trim();
      break;
    }
    if (baseName === v) {
      vendor = v;
      nameWithoutVendor = "";
      break;
    }
  }
  if (!vendor && fileVendorHints.length === 1) {
    vendor = fileVendorHints[0];
    nameWithoutVendor = baseName;
  }

  // Identify a code in the parenthetical (uppercase + digits + dashes)
  let code = "";
  if (parenContent && /^[A-Z0-9]{2,}[-A-Z0-9./ ]*(?:\s+v[0-9.]+)?$/i.test(parenContent)) {
    code = parenContent.replace(/\s+/g, " ").trim();
  }

  // If no code in parens, try to match a code-shaped token at end of name
  if (!code) {
    const trailing = nameWithoutVendor.match(/^(.+?)\s+([A-Z0-9]{2,}-[A-Z0-9]+(?:[/ ]\w+)*)\s*$/);
    if (trailing) {
      nameWithoutVendor = trailing[1];
      code = trailing[2];
    }
  }

  return {
    vendor,
    name: nameWithoutVendor.replace(/^[—–-]\s*/, "").trim(),
    code,
    levelHint: parenContent && parenContent.toLowerCase().includes("level") ? parenContent : "",
  };
}

/* ============================================================
   Field extractors over a body chunk
   ============================================================ */

function extractFieldsFromBody(body) {
  const fields = {};
  const topics = [];

  // Pattern A: markdown table rows like "| **Exam code** | N10-009 |"
  const tableRowRe = /\|\s*\*?\*?([\w \/-]+?)\*?\*?\s*\|\s*(.+?)\s*\|/g;
  let m;
  while ((m = tableRowRe.exec(body)) !== null) {
    const k = m[1].trim().toLowerCase().replace(/\s+/g, " ");
    const v = m[2].trim();
    if (KEY_MAP[k]) {
      fields[KEY_MAP[k]] = cleanValue(stripLinkSyntax(v));
      if (KEY_MAP[k] === "url" || KEY_MAP[k] === "examGuideUrl") {
        const url = firstUrl(v);
        if (url) fields[KEY_MAP[k]] = url;
      }
    }
  }

  // Pattern B: bullet list "- **Exam Code:** CLF-C02"
  const bulletRe = /^[\s\-•*]+\*\*([^:*]+):\*\*\s*(.+?)$/gm;
  while ((m = bulletRe.exec(body)) !== null) {
    const k = m[1].trim().toLowerCase().replace(/\s+/g, " ");
    const v = m[2].trim();
    if (KEY_MAP[k] && !fields[KEY_MAP[k]]) {
      fields[KEY_MAP[k]] = cleanValue(stripLinkSyntax(v));
      if (KEY_MAP[k] === "url" || KEY_MAP[k] === "examGuideUrl") {
        const url = firstUrl(v);
        if (url) fields[KEY_MAP[k]] = url;
      }
    }
  }

  // Pattern C: paragraph form "**Exam Code:** N10-009"
  const inlineRe = /\*\*([^:*]+):\*\*\s*(.+?)(?=\*\*[^:*]+:\*\*|$)/g;
  while ((m = inlineRe.exec(body)) !== null) {
    const k = m[1].trim().toLowerCase().replace(/\s+/g, " ");
    const v = m[2].trim().split("\n")[0];
    if (KEY_MAP[k] && !fields[KEY_MAP[k]]) {
      fields[KEY_MAP[k]] = cleanValue(stripLinkSyntax(v));
    }
  }

  // Topics extraction — look for a "**Topics:**" or "**Topics covered:**" or "Core topics:" section
  const topicHeader = body.match(/\*\*(?:Topics(?:\s+covered)?|Core topics|Content [Dd]omains|Topic areas)[:\*]+\*?\*?([\s\S]*?)(?=\n\n|\n###|\n####|$)/i);
  if (topicHeader) {
    const block = topicHeader[1];
    const items = block.match(/^[\s\-*•]+([^\n]+)/gm) ?? [];
    for (const it of items) {
      const t = it.replace(/^[\s\-*•]+/, "").trim();
      if (t.length > 0 && t.length < 200) {
        topics.push(stripLinkSyntax(t).replace(/^\*+|\*+$/g, "").trim());
      }
    }
  }

  if (topics.length > 0) fields.topics = topics;

  // Rationale = first paragraph after the heading that isn't a table/bullet
  const lines = body.split("\n");
  for (const line of lines) {
    const t = line.trim();
    if (!t) continue;
    if (t.startsWith("|") || t.startsWith("-") || t.startsWith("*") || t.startsWith("#") || t.startsWith(">")) continue;
    if (t.length < 30) continue;
    // Strip markdown emphasis from the rationale
    const r = t.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\*([^*]+)\*/g, "$1");
    if (r.length > 30 && r.length < 800) {
      fields.rationale = stripLinkSyntax(r);
      break;
    }
  }

  return fields;
}

/* ============================================================
   File walker — extract certs per file
   ============================================================ */

function splitIntoSections(body) {
  // Split on H3 / H4 headings, capturing the heading + content under it.
  const lines = body.split("\n");
  const sections = [];
  let current = null;
  for (const line of lines) {
    const m = line.match(/^(#{3,4})\s+(.+?)\s*$/);
    if (m) {
      if (current) sections.push(current);
      current = { level: m[1].length, heading: m[2], body: "" };
    } else if (current) {
      current.body += line + "\n";
    }
  }
  if (current) sections.push(current);
  return sections;
}

function extractFile(rawMarkdown, frontmatter, filename) {
  const sections = splitIntoSections(rawMarkdown);
  const certs = [];
  const fileVendorHints = (frontmatter.vendors ?? []).map(String);

  for (const section of sections) {
    const heading = parseHeading(section.heading, fileVendorHints);
    if (!heading.vendor && !heading.code) continue; // not a cert section
    if (!heading.name && !heading.code) continue;

    const fields = extractFieldsFromBody(section.body);

    // Merge heading + fields. Promote a code from heading if body didn't have one.
    const code = (fields.code || heading.code || "").replace(/^code\s+/i, "").trim();
    const cert = {
      vendor: heading.vendor || fileVendorHints[0] || "",
      name: heading.name,
      code,
      ...fields,
      sourceFile: filename,
    };

    if (!cert.vendor || !cert.name) continue;

    certs.push(cert);
  }

  return certs;
}

/* ============================================================
   Main
   ============================================================ */

function lookupKey(vendor, name, code) {
  return [vendor, name, code]
    .map((s) => String(s ?? "").toLowerCase().replace(/\s+/g, " ").trim())
    .join("|");
}

async function main() {
  console.log("[extract-deepdive] starting");
  const allCerts = [];

  for (const folder of SOURCE_FOLDERS) {
    const dir = path.join(DEEP_DIVE_DIR, folder);
    let entries;
    try {
      entries = await fs.readdir(dir);
    } catch {
      console.log(`[extract-deepdive] skipping missing folder: ${folder}`);
      continue;
    }
    for (const f of entries) {
      if (!f.endsWith(".md")) continue;
      const raw = await fs.readFile(path.join(dir, f), "utf-8");
      const parsed = matter(raw);
      const certs = extractFile(parsed.content, parsed.data ?? {}, f);
      allCerts.push(...certs);
    }
  }

  // Dedupe — keep first non-empty value per key.
  const byKey = {};
  for (const c of allCerts) {
    const key = lookupKey(c.vendor, c.name, c.code);
    if (!byKey[key]) {
      byKey[key] = c;
    } else {
      const existing = byKey[key];
      for (const [k, v] of Object.entries(c)) {
        if (v && !existing[k]) existing[k] = v;
      }
    }
  }

  await fs.mkdir(OUT_DIR, { recursive: true });
  const outPath = path.join(OUT_DIR, "cert-fields.json");
  await fs.writeFile(outPath, JSON.stringify(byKey, null, 2));

  const enrichedCount = Object.keys(byKey).length;
  const withCost = Object.values(byKey).filter((c) => c.cost).length;
  const withDuration = Object.values(byKey).filter((c) => c.duration).length;
  const withTopics = Object.values(byKey).filter((c) => c.topics?.length).length;

  console.log(`[extract-deepdive] wrote ${enrichedCount} cert records to ${path.relative(ROOT, outPath)}`);
  console.log(`  with cost:     ${withCost}`);
  console.log(`  with duration: ${withDuration}`);
  console.log(`  with topics:   ${withTopics}`);
}

main().catch((err) => {
  console.error("[extract-deepdive] failed:", err);
  process.exit(1);
});
