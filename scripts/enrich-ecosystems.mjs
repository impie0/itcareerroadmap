// Re-extract rich attribute fields for every cert in content/extracted/ecosystems.json
// from the corresponding source markdown files in Deep Dive/Ecosystems/.
//
// Strategy:
//   1. Load existing JSON (cert inventory — 39 ecosystems × tiered cert lists).
//   2. For each ecosystem, parse its sourceFile and split it into "cert sections"
//      (a heading or bolded paragraph that names a cert + the body text below it,
//       up to the next cert or H2/H3 boundary).
//   3. Match each section to one of the inventoried certs for that ecosystem
//      (by code, then by name token similarity) and pull rich fields from the body.
//   4. Only fill a field if it isn't already populated.
//   5. Don't add or remove certs. Don't change existing values.
//
// Patterns honoured:
//   A. Markdown attribute table  (| **Exam code** | CLF-C02 |)
//   B. Bulleted attribute list   (- **Exam Code:** CLF-C02)
//   C. Inline bold-paragraph     (**Exam Code:** CLF-C02 ... **Duration:** 90 minutes)
//   D. Prose mention             ("90-minute exam, $200 USD, valid 2 years")
//   E. Topics list under "Topics covered" / "Content domains" / "Exam objectives" / "Topics"
//
// Run:   node scripts/enrich-ecosystems.mjs
// Out:   content/extracted/ecosystems.json (overwritten with richer data)

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC_DIR = path.join(ROOT, "Deep Dive", "Ecosystems");
const JSON_PATH = path.join(ROOT, "content", "extracted", "ecosystems.json");

/* ============================================================
   String utilities
   ============================================================ */

function stripFrontmatter(raw) {
  if (!raw.startsWith("---")) return raw;
  const end = raw.indexOf("\n---", 3);
  if (end === -1) return raw;
  return raw.slice(end + 4).replace(/^\s*\n/, "");
}

function stripLinkSyntax(s) {
  return String(s ?? "")
    .replace(/\[([^\]]+)\]\(https?:\/\/[^)]+\)/g, "$1")
    .replace(/<https?:\/\/[^>]+>/g, "")
    .trim();
}

function firstUrl(s) {
  const m = String(s ?? "").match(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/);
  if (m) return m[2];
  const m2 = String(s ?? "").match(/(https?:\/\/[^)\s\]]+)/);
  return m2 ? m2[1] : null;
}

function cleanCellValue(s) {
  if (!s) return "";
  let v = String(s).trim();
  v = v.replace(/^\*\*(.+)\*\*$/, "$1").trim();
  v = v.replace(/^[\s\-•·]+/, "").trim();
  return v;
}

function norm(s) {
  return String(s ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Tokens >= 3 chars from name
function nameTokens(s) {
  return new Set(
    norm(s)
      .split(" ")
      .filter((t) => t.length >= 3 && !STOPWORDS.has(t))
  );
}

const STOPWORDS = new Set([
  "the", "and", "for", "with", "from", "into", "this", "that", "these", "those",
  "associate", "professional", "specialist", "expert", "certified", "certification",
  "exam", "level", "tier", "v1", "v2", "v3", "edition",
]);

/* ============================================================
   Field key map (markdown attribute key -> output JSON field)
   ============================================================ */

const KEY_MAP = {
  "exam code": "code",
  "code": "code",
  "exam id": "code",

  "duration": "duration",
  "exam length": "duration",
  "length": "duration",
  "time": "duration",
  "time limit": "duration",

  "questions": "questions",
  "number of questions": "questions",
  "question count": "questions",
  "no of questions": "questions",
  "format": "questions",
  "exam format": "questions",
  "question format": "questions",

  "passing score": "passingScore",
  "pass score": "passingScore",
  "minimum score": "passingScore",
  "pass mark": "passingScore",
  "pass rate": "passingScore",
  "pass threshold": "passingScore",
  "passing": "passingScore",

  "cost": "cost",
  "exam fee": "cost",
  "exam cost": "cost",
  "fee": "cost",
  "fees": "cost",
  "price": "cost",
  "exam price": "cost",

  "validity": "validity",
  "valid for": "validity",
  "valid": "validity",
  "renewal": "validity",
  "recertification": "validity",
  "certification validity": "validity",

  "retirement date": "retirementDate",
  "retires": "retirementDate",
  "retirement": "retirementDate",
  "retiring": "retirementDate",
  "last day": "retirementDate",

  "official page": "url",
  "official portal": "url",
  "exam page": "url",
  "exam url": "url",
  "url": "url",
  "link": "url",
  "official link": "url",
  "learn path": "url",
  "official site": "url",

  "objectives": "examGuideUrl",
  "objectives url": "examGuideUrl",
  "exam guide": "examGuideUrl",
  "exam objectives": "examGuideUrl",
  "study guide": "examGuideUrl",
  "official exam guide": "examGuideUrl",

  "prerequisites": "prerequisites",
  "prerequisite": "prerequisites",
  "prerequisite exam": "prerequisites",
  "prereq": "prerequisites",
  "prereqs": "prerequisites",

  "prep time": "prepTime",
  "preparation time": "prepTime",
  "study time": "prepTime",
  "study hours": "prepTime",
  "recommended study time": "prepTime",
};

// Fields whose value must look like a duration (hours / weeks / days / months) to be valid.
// Section headers like "Recommended Preparation:" often introduce a bulleted resource list,
// not a study-hours value, so we never match those as prepTime — only the explicit
// time-based keys above PLUS the validation below for any other extracted value.
const PREPTIME_VALUE_RE = /\b\d{1,4}\s*(?:[-–]\s*\d{1,4}\s*)?(?:hours?|hrs?|weeks?|wks?|days?|months?)\b/i;

/* ============================================================
   Section discovery
   ============================================================ */

// Find all section starts: H2/H3/H4 headings AND `**Bold paragraph**`-style cert leads.
// Returns ordered array of { kind, depth, lineIndex, title, raw }
function findSectionStarts(lines) {
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const headingM = line.match(/^(#{2,6})\s+(.+?)\s*$/);
    if (headingM) {
      out.push({
        kind: "heading",
        depth: headingM[1].length,
        lineIndex: i,
        title: headingM[2].trim(),
        raw: line,
      });
      continue;
    }
    // Bold-paragraph cert lead, e.g.
    //   **CCSA (Certified Security Administrator) — R82 (Exam 156-215.82)**
    //   **Aruba Certified Associate – Campus Access (ACA)**
    //   **1. Splunk Core Certified User (SPLK-1001)**
    const boldM = line.match(/^\s*(?:\d+\.\s*)?\*\*([^*]{6,200})\*\*\s*$/);
    if (boldM) {
      out.push({
        kind: "bold",
        depth: 99,
        lineIndex: i,
        title: boldM[1].trim(),
        raw: line,
      });
    }
  }
  return out;
}

// Build sections: for each section start, body = lines from line+1 until next start at
// equal or shallower depth (or EOF). Bold-paragraph sections end at next bold/heading.
function buildSections(lines) {
  const starts = findSectionStarts(lines);
  const sections = [];
  for (let i = 0; i < starts.length; i++) {
    const s = starts[i];
    let endLine = lines.length;
    for (let j = i + 1; j < starts.length; j++) {
      const next = starts[j];
      // Bold-paragraph section ends at next bold OR any heading
      if (s.kind === "bold") {
        endLine = next.lineIndex;
        break;
      }
      // Heading section ends at next heading of equal/shallower depth, or any bold/heading nearby
      if (next.kind === "heading" && next.depth <= s.depth) {
        endLine = next.lineIndex;
        break;
      }
    }
    sections.push({
      ...s,
      body: lines.slice(s.lineIndex + 1, endLine).join("\n"),
    });
  }
  return sections;
}

/* ============================================================
   Match a section title to an inventoried cert
   ============================================================ */

// Extract any cert codes from a string. Codes look like:
//   CLF-C02, AZ-900, 156-215.82, 200-301, MB-310, HPE6-A85, SPLK-1001,
//   PL-300, JN0-104, DEA-3TT2, etc.
function extractCodes(s) {
  const codes = new Set();
  // Pattern 1: alpha-num + dash + alphanum (e.g. CLF-C02, AZ-900, MB-310)
  const re1 = /\b([A-Z]{1,5}\d?-[A-Z]?\d{2,4}[A-Z0-9]*)\b/g;
  let m;
  while ((m = re1.exec(s)) !== null) codes.add(m[1]);
  // Pattern 2: prefix-num (e.g. SPLK-1001, JN0-104)
  const re2 = /\b([A-Z]{2,6}-\d{3,5})\b/g;
  while ((m = re2.exec(s)) !== null) codes.add(m[1]);
  // Pattern 3: 3-digit-3-digit (e.g. 200-301, 350-401)
  const re3 = /\b(\d{3}-\d{3}(?:\.\d+)?(?:\s*v\d(?:\.\d+)?)?)\b/g;
  while ((m = re3.exec(s)) !== null) codes.add(m[1].trim());
  // Pattern 4: 3-digit-3-digit.subver (Check Point: 156-215.82)
  const re4 = /\b(\d{3}-\d{3}\.\d{2})\b/g;
  while ((m = re4.exec(s)) !== null) codes.add(m[1]);
  // Pattern 5: HPE-style: HPE6-A85, HPE7-A01
  const re5 = /\b(HPE\d-[A-Z]\d{2,3})\b/gi;
  while ((m = re5.exec(s)) !== null) codes.add(m[1].toUpperCase());
  return [...codes];
}

function codeMatches(invCode, sectionCodes, sectionTitle) {
  if (!invCode || invCode === "—" || invCode === "-") return false;
  const c = invCode.toUpperCase().replace(/\s+/g, "");
  // Direct match against any code in section title or codes
  for (const sc of sectionCodes) {
    if (sc.toUpperCase().replace(/\s+/g, "") === c) return true;
    // 200-301 v1.1 vs 200-301 — strip version suffix
    const baseInv = c.replace(/V\d.*$/, "").replace(/\..*$/, "");
    const baseSc = sc.toUpperCase().replace(/\s+/g, "").replace(/V\d.*$/, "").replace(/\..*$/, "");
    if (baseInv && baseInv === baseSc) return true;
  }
  // Also check the title text directly for the code as a substring
  const titleNorm = sectionTitle.toUpperCase().replace(/\s+/g, "");
  if (titleNorm.includes(c)) return true;
  return false;
}

function nameMatchScore(invName, sectionTitle) {
  const a = nameTokens(invName);
  const b = nameTokens(sectionTitle);
  if (a.size === 0 || b.size === 0) return 0;
  let inter = 0;
  for (const t of a) if (b.has(t)) inter++;
  return inter / Math.max(a.size, b.size);
}

/* ============================================================
   Field extraction from a body chunk
   ============================================================ */

// Decide whether an extracted (field, value) is plausible. Returns the value (possibly
// trimmed) if good, or null to discard. Called by every pattern before assignment.
function validateField(field, value) {
  const v = String(value ?? "").trim();
  if (!v) return null;

  if (field === "prepTime") {
    return PREPTIME_VALUE_RE.test(v) ? v : null;
  }
  if (field === "cost") {
    // Must contain a currency or "free"
    if (!/(\$|USD|EUR|€|£|GBP|ZAR|R\s*\d|₹|JPY|¥|AUD|CAD|free|complimentary|no fee)/i.test(v)) return null;
    return v;
  }
  if (field === "duration") {
    if (!/\b\d{1,3}\s*(?:minutes?|min|hours?|hr|hrs)\b/i.test(v)) return null;
    return v;
  }
  if (field === "questions") {
    if (!/\b\d{2,3}\b|multiple[-\s]?choice|scenario|performance[-\s]based|items|simulation|drag[-\s]and[-\s]drop/i.test(v)) return null;
    return v;
  }
  if (field === "passingScore") {
    if (!/\d{2,4}\s*\/\s*\d{2,4}|\d{1,3}\s*%/.test(v)) return null;
    return v;
  }
  if (field === "validity") {
    if (!/\b\d\s*years?\b|never expires|no expir|permanent|lifetime/i.test(v)) return null;
    return v;
  }
  if (field === "retirementDate") {
    if (!/\d{4}|\d{1,2}\s+\w+\s+\d{4}|(?:January|February|March|April|May|June|July|August|September|October|November|December)/i.test(v)) return null;
    return v;
  }
  if (field === "code") {
    // Reject anything wildly long
    if (v.length > 60) return null;
    return v;
  }
  if (field === "url" || field === "examGuideUrl") {
    if (!/^https?:\/\//.test(v)) return null;
    return v;
  }
  // prerequisites, rationale, topics — let through
  return v;
}

function extractFieldsFromBody(body) {
  const fields = {};
  const topics = [];

  const setField = (field, raw) => {
    if (fields[field]) return;
    if (field === "url" || field === "examGuideUrl") {
      const u = firstUrl(raw) || (/^https?:\/\//.test(String(raw).trim()) ? String(raw).trim() : null);
      if (u) fields[field] = u;
      return;
    }
    const cleaned = cleanCellValue(stripLinkSyntax(raw));
    const valid = validateField(field, cleaned);
    if (valid) fields[field] = valid;
  };

  // ---- Pattern A: markdown table rows  | **key** | value | ----
  const tableRe = /^\|\s*\*?\*?([^|*]+?)\*?\*?\s*\|\s*(.+?)\s*\|\s*$/gm;
  let m;
  while ((m = tableRe.exec(body)) !== null) {
    const k = m[1].trim().toLowerCase().replace(/[*`]/g, "").replace(/\s+/g, " ");
    const v = m[2].trim();
    if (v.includes("---") || v === "Value" || v === "Details") continue;
    const field = KEY_MAP[k];
    if (field) setField(field, v);
  }

  // ---- Pattern B: bullet "- **Exam Code:** CLF-C02" (colon inside bold) ----
  const bulletRe = /^[\s>]*[-*•]\s+\*\*([^:*]+?)[:：]\*\*\s*(.+?)\s*$/gm;
  while ((m = bulletRe.exec(body)) !== null) {
    const k = m[1].trim().toLowerCase().replace(/\s+/g, " ");
    const field = KEY_MAP[k];
    if (field) setField(field, m[2].trim());
  }

  // ---- Pattern B1b: bullet "- **Exam Code**: CLF-C02" (colon outside bold) ----
  const bulletRe1b = /^[\s>]*[-*•]\s+\*\*([^:*]+?)\*\*[:：]\s*(.+?)\s*$/gm;
  while ((m = bulletRe1b.exec(body)) !== null) {
    const k = m[1].trim().toLowerCase().replace(/\s+/g, " ");
    const field = KEY_MAP[k];
    if (field) setField(field, m[2].trim());
  }

  // ---- Pattern B2: bullet "- Exam Code: CLF-C02" (no bold) ----
  const bulletRe2 = /^[\s>]*[-*•]\s+([A-Z][\w \/-]+?)[:：]\s+(.+?)\s*$/gm;
  while ((m = bulletRe2.exec(body)) !== null) {
    const k = m[1].trim().toLowerCase().replace(/\s+/g, " ");
    const field = KEY_MAP[k];
    if (field) setField(field, m[2].trim());
  }

  // ---- Pattern C: inline "**Exam Code:** AZ-900" ----
  const inlineRe = /\*\*([^:*]+?)[:：]\*\*\s*([^\n*][^\n]*)/g;
  while ((m = inlineRe.exec(body)) !== null) {
    const k = m[1].trim().toLowerCase().replace(/\s+/g, " ");
    const field = KEY_MAP[k];
    if (field) setField(field, m[2].trim());
  }

  // ---- Pattern C2: inline "**Key**: value" (colon outside bold) ----
  const inlineRe2 = /\*\*([^:*\n]+?)\*\*[:：]\s*([^\n*][^\n]*)/g;
  while ((m = inlineRe2.exec(body)) !== null) {
    const k = m[1].trim().toLowerCase().replace(/\s+/g, " ");
    const field = KEY_MAP[k];
    if (field) setField(field, m[2].trim());
  }

  // ---- Pattern D: prose mentions ----
  if (!fields.cost) {
    const costM =
      body.match(/(?:exam fee|exam cost|fee|cost|price)[^.\n]{0,40}?\b(USD\s*\$?[\d,]+(?:\.\d+)?(?:\s*[-–]\s*\$?[\d,]+)?|\$[\d,]+(?:\.\d+)?(?:\s*[-–]\s*\$?[\d,]+)?(?:\s*USD)?|R\s*[\d,]+(?:\s*ZAR)?|€[\d,]+|£[\d,]+|₹[\d,]+)/i);
    if (costM) setField("cost", costM[1]);
  }
  if (!fields.duration) {
    const durM = body.match(/\b(\d{2,3}[-\s](?:minute|min)s?\b|\b\d{2,3}\s*minutes?\b|\b\d\s*hours?\b)/i);
    if (durM) setField("duration", durM[1].replace(/-/g, " ").replace(/\s+/g, " "));
  }
  if (!fields.questions) {
    const qM = body.match(/\b(\d{2,3})\s*(?:questions?|items?|multiple[-\s]choice)/i);
    if (qM) setField("questions", qM[0]);
  }
  if (!fields.passingScore) {
    const psM = body.match(/(?:passing score|pass threshold|pass mark|passing)[^.\n]{0,30}?(\d{2,4}\s*\/\s*\d{2,4}|\d{2,3}\s*%)/i);
    if (psM) setField("passingScore", psM[1].replace(/\s+/g, ""));
    else {
      const psM2 = body.match(/\b(\d{3,4}\s*\/\s*1000)\b/);
      if (psM2) setField("passingScore", psM2[1].replace(/\s+/g, ""));
    }
  }
  if (!fields.validity) {
    const vM = body.match(/(?:valid(?:ity)?|recertification|renewal)[^.\n]{0,30}?(\d\s*years?(?:\s*from[^.\n]{0,30})?)/i);
    if (vM) setField("validity", vM[1]);
  }
  if (!fields.retirementDate) {
    const rM = body.match(/(?:retires?(?:\s+on)?|retirement(?:\s+date)?|last day(?:\s+for[^.\n:]{0,50})?[:.])[^.\n]{0,50}?\b((?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s+\d{4})/i);
    if (rM) setField("retirementDate", rM[1]);
  }
  if (!fields.prepTime) {
    const pM = body.match(/(?:study time|preparation time|prep time|recommended (?:study|preparation))[^.\n]{0,40}?(\d{2,4}[-–]\d{2,4}\s*hours?|\d{1,3}\s*hours?|\d[-–]\d\s*weeks?)/i);
    if (pM) setField("prepTime", pM[1]);
    else {
      const pM2 = body.match(/(?:Recommended Preparation\s*\(([\d–\-]+\s*hours?)\))/i);
      if (pM2) setField("prepTime", pM2[1]);
    }
  }

  // ---- Topics extraction ----
  // Match a section header like:
  //   **Topics Covered:**
  //   **Topics:**
  //   **Content Domains:**
  //   **Topics & Weight (approximate):**
  //   **Exam Topics:**
  //   ### Topics covered
  //   - **Topics covered:**
  //   **Content:**
  // Followed by a bulleted/numbered list. Stop at next blank-line + non-bullet OR new bold header.
  const topicHeaderPatterns = [
    // Bold header style: **Topics:** or - **Topics covered:**
    /(?:^|\n)\s*(?:[-*•]\s*)?\*\*\s*(Topics(?:\s+covered)?|Topics\s*&\s*Weight[^*]*|Core topics|Content [Dd]omains|Topic [Aa]reas|Exam [Tt]opics|Domains?|Content Distribution|Content)\s*[:：]?\s*(?:\([^)]*\))?\s*[:：]?\*\*\s*\n((?:\s*(?:[-*•]|\d+\.)\s+[^\n]+\n?)+)/gi,
    // Heading style: ### Topics covered
    /(?:^|\n)#{2,5}\s+(Topics(?:\s+covered)?|Content Domains|Exam Topics|Domains|Topic Areas)\s*\n((?:\s*(?:[-*•]|\d+\.)\s+[^\n]+\n?)+)/gi,
  ];
  for (const pat of topicHeaderPatterns) {
    pat.lastIndex = 0;
    let tm;
    while ((tm = pat.exec(body)) !== null) {
      const block = tm[2];
      const items = block.match(/^\s*(?:[-*•]|\d+\.)\s+([^\n]+)/gm) || [];
      for (const it of items) {
        const t = it.replace(/^\s*(?:[-*•]|\d+\.)\s+/, "").trim();
        const cleaned = stripLinkSyntax(t).replace(/^\*+|\*+$/g, "").trim();
        if (cleaned.length >= 4 && cleaned.length < 250) topics.push(cleaned);
      }
      if (topics.length > 0) break;
    }
    if (topics.length > 0) break;
  }
  if (topics.length > 0) fields.topics = topics;

  // ---- Rationale: first prose paragraph that isn't a bullet/table/heading.
  // Constraint: must appear within the first ~30 lines of the body to avoid
  // grabbing salary/source footers from later in the section. ----
  if (!fields.rationale) {
    const lines = body.split("\n").slice(0, 30);
    let buf = [];
    let foundContent = false;
    for (const line of lines) {
      const t = line.trim();
      if (!t) {
        if (buf.length > 0) break;
        continue;
      }
      if (/^[|>#]/.test(t)) { if (buf.length > 0) break; foundContent = true; continue; }
      if (/^[-*•]/.test(t)) { if (buf.length > 0) break; foundContent = true; continue; }
      // Skip "**Key:** value" or "**Key**: value" attribute lines
      if (/^\*\*[^*]+\*\*\s*[:：]/.test(t)) { if (buf.length > 0) break; foundContent = true; continue; }
      // Reject standalone "Source:" / "Sources:" lines
      if (/^Sources?\s*[:：]/i.test(t)) { if (buf.length > 0) break; continue; }
      buf.push(t);
      if (buf.join(" ").length > 400) break;
    }
    if (buf.length > 0) {
      const r = buf.join(" ")
        .replace(/\*\*([^*]+)\*\*/g, "$1")
        .replace(/\*([^*]+)\*/g, "$1");
      const stripped = stripLinkSyntax(r).trim();
      if (stripped.length >= 40 && stripped.length < 800) fields.rationale = stripped;
    }
  }

  return fields;
}

/* ============================================================
   URLs from a section body — try to find the "main" cert page URL
   ============================================================ */

// If body contains a single dominant markdown link near the top, treat as cert URL.
function findUrlsInBody(body) {
  const urls = [];
  const re = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;
  let m;
  while ((m = re.exec(body)) !== null) {
    urls.push({ label: m[1], url: m[2] });
  }
  return urls;
}

function pickCertUrl(urls, certName) {
  if (!urls.length) return null;
  const tokens = nameTokens(certName);
  // Prefer a vendor's official cert/certification page
  for (const u of urls) {
    const lurl = u.url.toLowerCase();
    if (
      (lurl.includes("/certification") || lurl.includes("/credentials") || lurl.includes("/certifications") || lurl.includes("/training")) &&
      !lurl.endsWith(".pdf")
    ) {
      // Match label tokens to cert name
      const lt = nameTokens(u.label);
      let inter = 0;
      for (const t of tokens) if (lt.has(t)) inter++;
      if (inter >= 1) return u.url;
    }
  }
  return null;
}

function pickExamGuideUrl(urls) {
  for (const u of urls) {
    const lurl = u.url.toLowerCase();
    const llab = u.label.toLowerCase();
    if (
      lurl.endsWith(".pdf") ||
      llab.includes("exam guide") ||
      llab.includes("study guide") ||
      llab.includes("exam objectives") ||
      lurl.includes("exam-guide") ||
      lurl.includes("study-guide") ||
      lurl.includes("study-guides")
    ) {
      return u.url;
    }
  }
  return null;
}

/* ============================================================
   Per-ecosystem extraction
   ============================================================ */

function processFile(rawMd, certs) {
  const stripped = stripFrontmatter(rawMd);
  const lines = stripped.split("\n");
  const sections = buildSections(lines);

  // Pre-compute lookup sets
  const certIndex = certs.map((c, i) => ({
    i,
    cert: c,
    codeNorm: (c.code || "").toUpperCase().replace(/\s+/g, ""),
    nameNorm: norm(c.name),
    nameTokens: nameTokens(c.name),
  }));

  // Collect candidate matches: section -> cert
  const matched = new Map(); // certIndex -> { section, score }

  for (const section of sections) {
    if (!section.title) continue;
    // Cert sections must have at least 100 chars body (rough filter) OR contain "exam" keywords
    const body = section.body;
    if (!body) continue;
    if (body.length < 30) continue;

    const sectionCodes = extractCodes(section.title + " " + body.slice(0, 400));
    const titleTokens = nameTokens(section.title);

    let best = null;
    for (const ci of certIndex) {
      let score = 0;
      // Code match is a strong signal
      if (codeMatches(ci.cert.code, sectionCodes, section.title)) score += 100;
      // Name token overlap
      let inter = 0;
      for (const t of ci.nameTokens) if (titleTokens.has(t)) inter++;
      if (ci.nameTokens.size > 0) {
        const overlap = inter / ci.nameTokens.size;
        score += overlap * 50;
        // Substring fallback
        if (norm(section.title).includes(ci.nameNorm) && ci.nameNorm.length > 5) score += 30;
      }
      if (score > 30 && (!best || score > best.score)) {
        best = { ci, score };
      }
    }

    if (best) {
      const existing = matched.get(best.ci.i);
      if (!existing || best.score > existing.score) {
        matched.set(best.ci.i, { section, score: best.score });
      }
    }
  }

  // Now extract fields for each matched cert
  const results = new Map(); // certIndex -> fields object
  for (const [i, { section }] of matched.entries()) {
    const body = section.body;
    const fields = extractFieldsFromBody(body);

    // URL fallback: scan body for a vendor cert page link near the top
    const urls = findUrlsInBody(body);
    if (!fields.url) {
      const certName = certs[i].name || section.title;
      const u = pickCertUrl(urls, certName);
      if (u) fields.url = u;
    }
    if (!fields.examGuideUrl) {
      const eg = pickExamGuideUrl(urls);
      if (eg) fields.examGuideUrl = eg;
    }

    results.set(i, fields);
  }
  return results;
}

/* ============================================================
   Main
   ============================================================ */

const TARGET_FIELDS = [
  "cost", "duration", "questions", "passingScore", "validity",
  "retirementDate", "url", "examGuideUrl", "topics", "rationale",
  "prepTime", "prerequisites",
];

function isPopulated(v) {
  if (v === undefined || v === null) return false;
  if (typeof v === "string") return v.trim().length > 0;
  if (Array.isArray(v)) return v.length > 0;
  return true;
}

async function main() {
  const json = JSON.parse(await fs.readFile(JSON_PATH, "utf-8"));

  // Snapshot before counts
  const before = Object.fromEntries(TARGET_FIELDS.map((f) => [f, 0]));
  let totalCerts = 0;
  for (const id of Object.keys(json)) {
    for (const lvl of json[id].levels) {
      for (const c of lvl.certs) {
        totalCerts++;
        for (const f of TARGET_FIELDS) if (isPopulated(c[f])) before[f]++;
      }
    }
  }

  // Per-ecosystem fill counts
  const ecoStats = {}; // id -> { filled: count, by field }

  for (const id of Object.keys(json)) {
    const eco = json[id];
    const srcPath = path.join(SRC_DIR, eco.sourceFile);
    let raw;
    try {
      raw = await fs.readFile(srcPath, "utf-8");
    } catch (err) {
      console.warn(`[enrich] cannot read ${eco.sourceFile}: ${err.message}`);
      continue;
    }

    // Flatten certs with stable index
    const flat = [];
    for (const lvl of eco.levels) {
      for (const c of lvl.certs) flat.push(c);
    }

    const matched = processFile(raw, flat);

    let fillCount = 0;
    for (const [i, fields] of matched.entries()) {
      const cert = flat[i];
      for (const f of TARGET_FIELDS) {
        if (!isPopulated(cert[f]) && isPopulated(fields[f])) {
          cert[f] = fields[f];
          fillCount++;
        }
      }
    }
    ecoStats[id] = { filled: fillCount, matched: matched.size, totalCerts: flat.length };
  }

  // Snapshot after counts
  const after = Object.fromEntries(TARGET_FIELDS.map((f) => [f, 0]));
  for (const id of Object.keys(json)) {
    for (const lvl of json[id].levels) {
      for (const c of lvl.certs) {
        for (const f of TARGET_FIELDS) if (isPopulated(c[f])) after[f]++;
      }
    }
  }

  await fs.writeFile(JSON_PATH, JSON.stringify(json, null, 2));

  console.log("=== Enrichment complete ===");
  console.log(`Total certs in inventory: ${totalCerts}`);
  console.log("\nField fill counts (before -> after):");
  for (const f of TARGET_FIELDS) {
    const delta = after[f] - before[f];
    const sign = delta >= 0 ? "+" : "";
    console.log(`  ${f.padEnd(16)} ${String(before[f]).padStart(4)} -> ${String(after[f]).padStart(4)} (${sign}${delta})`);
  }

  console.log("\nTop ecosystems by fields filled:");
  const ranked = Object.entries(ecoStats).sort((a, b) => b[1].filled - a[1].filled);
  for (const [id, st] of ranked.slice(0, 8)) {
    console.log(`  ${id.padEnd(40)} +${st.filled} fields  (${st.matched}/${st.totalCerts} certs matched)`);
  }
  console.log("\nLow-yield ecosystems (<5 fields filled):");
  for (const [id, st] of ranked.filter(([, s]) => s.filled < 5)) {
    console.log(`  ${id.padEnd(40)} +${st.filled}  (${st.matched}/${st.totalCerts} certs matched)`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
