// Ported verbatim from index.html inline JS (the STATE / TIPS / #next click handler).
// Same data, same routing rules. UI is re-implemented elsewhere.

export interface QuizOption {
  id: string;       // slug
  label: string;    // display text
}

export interface QuizQuestion {
  id: "stage" | "energy" | "priority";
  question: string;
  options: QuizOption[];
}

export interface QuizAnswerSet {
  stage: string;    // option id
  energy: string;   // option id
  priority: string; // option id
}

export interface QuizRecommendation {
  matrixColumns: string[];        // recommended cert-matrix columns to read
  careerTracks: string[];         // recommended career-path tracks to open
  advice: string;                 // tailored advice paragraph
}

// ---------------------------------------------------------------------------
// Questions — wording preserved verbatim from index.html
// ---------------------------------------------------------------------------

export const QUIZ: QuizQuestion[] = [
  {
    id: "stage",
    question: "1. Where are you right now?",
    options: [
      { id: "newcomer", label: "I'm new to IT — no experience yet" },
      { id: "career-changer", label: "I'm in a different field (teaching, healthcare, finance, etc.) and want to switch into IT" },
      { id: "early-it", label: "I'm in IT (helpdesk / support / junior) and want to grow" },
      { id: "mid-it", label: "I'm a mid-level IT pro and want to level up or specialise" },
      { id: "senior-it", label: "I'm senior IC and considering management / architecture / executive" },
      { id: "returner", label: "I'm returning to tech after a break" },
    ],
  },
  {
    id: "energy",
    question: "2. What kind of work energises you?",
    options: [
      { id: "systems", label: "Building / running systems and infrastructure" },
      { id: "code", label: "Writing code and shipping software" },
      { id: "data", label: "Working with data, analysis, ML, AI" },
      { id: "security", label: "Security — defending, hunting, hacking, governance" },
      { id: "people", label: "Coordinating people, projects, processes" },
      { id: "design", label: "Designing architectures and making big decisions" },
      { id: "customer", label: "Customer-facing — sales eng, customer success, dev advocate" },
      { id: "hardware", label: "Hands-on hardware, networks, datacenter, telecom" },
    ],
  },
  {
    id: "priority",
    question: "3. What matters most to you right now?",
    options: [
      { id: "entry-fast", label: "Get a paying IT job ASAP (cheapest, fastest path)" },
      { id: "ai-resilient", label: "Pick a role that's least likely to be replaced by AI" },
      { id: "high-pay", label: "Maximum pay ceiling (willing to grind for years)" },
      { id: "remote", label: "Remote-friendly career" },
      { id: "stable", label: "Stable, low-burnout, work-life balance" },
      { id: "impact", label: "Visible impact / leadership / influence" },
    ],
  },
];

// ---------------------------------------------------------------------------
// TIPS lookup table — ported verbatim from the inline `TIPS` object.
// `domain` entries become matrixColumns; `track` entries feed careerTracks;
// `msg` entries are the advice paragraphs.
// ---------------------------------------------------------------------------

interface Tip {
  domain?: string[];
  track?: string;
  msg?: string;
}

const TIPS: Record<string, Tip> = {
  // --- stage (Q1) ---
  newcomer: {
    domain: ["Foundation", "Help Desk T1"],
    track: "operations",
    msg: "Start with Foundation. CompTIA A+ (220-1201/1202) is the cheapest fast cert. Most people land Help Desk T1 in 4–9 months from a standing start. Free training: Professor Messer (YouTube) + Google IT Support Cert (Coursera, ~$49/mo).",
  },
  "career-changer": {
    domain: ["Foundation", "or one matched to your background"],
    track: "operations",
    msg: "Different backgrounds map to different IT entry roles. Teachers → Tech Trainer / Customer Success / Sales Eng. Military → SOC Analyst / Cybersecurity. Nurses → Healthcare IT (Epic). Accountants → IT Auditor / Salesforce Admin / GRC. Open the Career Transitions page and check the 'Adjacent Lanes' track for non-traditional entry.",
  },
  "early-it": {
    domain: ["Networking, Systems, Cloud, or Security depending on Q2"],
    track: "operations",
    msg: "Pick a column and commit. Don't sample five domains. The 1–3 yr stretch is when you build the depth that makes Senior level real. Helpdesk → Sysadmin and Helpdesk → Network Engineer are the most common moves. AZ-104 / SAA-C03 / CCNA are the canonical bridge certs.",
  },
  "mid-it": {
    domain: ["Cloud, DevOps, Security, or Architecture"],
    track: "cloud",
    msg: "Specialise. Cloud Solutions Architect, Security Architect, or DevOps/SRE/Platform are the highest-leverage specialisation paths. Read 'Designing Data-Intensive Applications' (Kleppmann) or 'The Software Architect Elevator' (Hohpe) — they reshape how you think.",
  },
  "senior-it": {
    domain: ["Architecture, Manager, or IT Leadership"],
    track: "manager",
    msg: "This is the IC-vs-Manager fork. Read Camille Fournier's 'The Manager's Path' AND Will Larson's 'Staff Engineer'. At most modern tech companies the IC ladder pays equivalently to the manager ladder all the way up — Staff ≈ EM, Principal ≈ Director. Choose by what energises you, not by what pays.",
  },
  returner: {
    domain: ["Cloud or Security"],
    track: "cloud",
    msg: "The cloud has changed dramatically since you were last in. AZ-104 + AWS SAA-C03 + Terraform get you re-current in 6–9 months. Returnship programs at major tech companies (Goldman Sachs, Salesforce, Amazon) are designed for you specifically — they exist.",
  },

  // --- energy (Q2) ---
  systems: { domain: ["Systems / OS, Cloud, DevOps"], track: "operations" },
  code: { domain: ["Software Eng, DevOps, Data/AI"], track: "software" },
  data: { domain: ["Data / AI"], track: "data" },
  security: { domain: ["Security"], track: "security" },
  people: { domain: ["IT Mgmt / Governance, Manager track, PM/GRC"], track: "manager" },
  design: { domain: ["Architecture"], track: "architecture" },
  customer: { domain: ["Adjacent Lanes (Sales Eng, DevRel, TPM, Tech Writer)"], track: "adjacent" },
  hardware: { domain: ["Networking, Hardware Ecosystems (Switch/Router, Wireless, Datacenter)"], track: "networking" },

  // --- priority (Q3) ---
  "entry-fast": {
    msg: "Cheapest fast paths: Help Desk via A+ (~$300, 3-6 months prep) → first IT job. Salesforce Administrator via free Trailhead → first cloud-CRM job in 6-9 months. ServiceNow CSA + free CIS-DF (free until June 2026) — 6-12 months.",
  },
  "ai-resilient": {
    msg: "Most AI-resilient: Network Architect, Cloud Solutions Architect, Security Architect, SRE, Platform Engineer, CISO, Engineering Manager, Chief Architect. Most-at-risk: Help Desk T1 (AI ticketing handles 60-80%), Junior Network Engineer (auto-config), Junior Sysadmin (cloud automation), Junior Developer (AI code gen), Manual QA Tester (test automation).",
  },
  "high-pay": {
    msg: "Top ceilings (US): Staff/Principal Engineer ($350K–$1.5M+ at FAANG), Cloud Solutions Architect Principal ($300–$500K+), Salesforce CTA ($250–$400K), CISO ($300K–$1M+ at top tech), CTO. Bottom-up routes that hit these: Software Eng IC ladder, Cloud Architecture, Security Architecture.",
  },
  remote: {
    msg: "Most remote-friendly: DevOps Engineer, SRE, Platform Engineer, Cloud Engineer (Senior), Senior Software Engineer, Staff/Principal, Solutions Architect, AI Engineer, ML Engineer. On-site-required: Mainframe Sysprog, Datacenter Tech, Field Engineer, CIO/CTO.",
  },
  stable: {
    msg: "Lowest-burnout, predictable rhythm: Senior Sysadmin in stable enterprise, IT Audit/GRC, Technical Writer, Tech Trainer. High-burnout to avoid (or do consciously): SOC L1, on-call SRE, CISO, Pentester, founder/CTO. Mainframe sysprog is also notably stable + well-paid.",
  },
  impact: {
    msg: "Highest-influence paths: Solutions Architect → Enterprise Architect → Chief Architect (technical influence), or Engineering Manager → Director → VP → CTO (organizational influence), or Sec Eng → Sec Architect → CISO (board-level influence).",
  },
};

// ---------------------------------------------------------------------------
// Routing — ported verbatim from the #next click handler in index.html:
//
//   const t1=TIPS[STATE.step1]||{};
//   const t2=TIPS[STATE.step2]||{};
//   const t3=TIPS[STATE.step3]||{};
//   const domains=[...new Set([...(t1.domain||[]),...(t2.domain||[])])];
//   const track=t2.track||t1.track||"operations";
//
// The result template renders t1.msg (always) and t3.msg (if present), so the
// composed advice paragraph mirrors that two-part structure.
// ---------------------------------------------------------------------------

export function recommend(answers: QuizAnswerSet): QuizRecommendation {
  const t1: Tip = TIPS[answers.stage] || {};
  const t2: Tip = TIPS[answers.energy] || {};
  const t3: Tip = TIPS[answers.priority] || {};

  const domains: string[] = [
    ...new Set<string>([...(t1.domain || []), ...(t2.domain || [])]),
  ];
  const track: string = t2.track || t1.track || "operations";

  // Mirror the original render: t1.msg (stage advice) followed by, when
  // present, the priority addendum prefixed with the priority option label.
  const stageMsg = t1.msg || "";
  let advice = stageMsg;
  if (t3.msg) {
    const priorityLabel =
      QUIZ[2].options.find((o) => o.id === answers.priority)?.label ?? answers.priority;
    const addendum = `For your priority "${priorityLabel}": ${t3.msg}`;
    advice = stageMsg ? `${stageMsg}\n\n${addendum}` : addendum;
  }

  return {
    matrixColumns: domains,
    careerTracks: [track],
    advice,
  };
}
