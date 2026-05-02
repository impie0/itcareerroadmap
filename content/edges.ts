// Auto-ported from IT_Career_Flow.html (EDGES array).
// Source uses `type` for edge kind and `desc` for descriptive text.
// Mapped to `kind` and `label` per the type contract; original `desc`
// strings are preserved verbatim as the label value.

import type { FlowNode } from "./nodes";

export type EdgeKind = "vertical" | "lateral" | "fork";

export interface FlowEdge {
  from: string;            // node id
  to: string;              // node id
  kind: EdgeKind;          // vertical | lateral | fork
  label?: string;
  transitionId?: string;   // optional link to a transitions.ts entry
}

// Touch the imported type so unused-import linters stay quiet without
// changing runtime behaviour. The import exists for downstream consumers.
export type _FlowNodeRef = FlowNode;

export const EDGES: FlowEdge[] = [
  // Operations vertical
  { from: "helpdesk-t1", to: "sysadmin-jr", kind: "vertical", label: "From script-following ticket-closer to system owner. 1.5–3 yrs. Bridge certs: AZ-104, Server+, LFCS." },
  { from: "sysadmin-jr", to: "sysadmin",    kind: "vertical", label: "From following runbooks to writing them. 2–4 yrs." },
  { from: "sysadmin",    to: "sysadmin-sr", kind: "vertical", label: "From running systems to designing them. 3–6 yrs total." },
  { from: "sysadmin-sr", to: "infra-eng",   kind: "vertical", label: "7–12 yrs total. The fork: deep IC architect or broaden into cloud/devops." },

  // Networking vertical
  { from: "noc",        to: "net-eng-jr", kind: "vertical", label: "1–3 yrs. Bridge cert: CCNA 200-301." },
  { from: "net-eng-jr", to: "net-eng-sr", kind: "vertical", label: "3–6 yrs total. CCNA → CCNP era. Bridge: CCNP ENCOR 350-401." },
  { from: "net-eng-sr", to: "net-arch",   kind: "vertical", label: "7–12 yrs total. Cross-domain breadth on top of network depth." },

  // Cloud vertical
  { from: "cloud-eng-a", to: "cloud-eng-s", kind: "vertical", label: "2–4 yrs. From running services to designing them at scale." },
  { from: "cloud-eng-s", to: "cloud-sa",    kind: "vertical", label: "5–10 yrs total. Stop doing the work. Start designing it." },

  // DevOps vertical
  { from: "devops-jr", to: "devops",   kind: "vertical", label: "2–3 yrs. Build CI/CD pipelines, IaC modules." },
  { from: "devops",    to: "sre",      kind: "vertical", label: "2–4 yrs as DevOps. Specific Google-originated discipline. Read SRE books at sre.google." },
  { from: "sre",       to: "platform", kind: "vertical", label: "2–4 yrs. Devs are your customers. Build them paved roads." },

  // Security vertical
  { from: "soc-l1",   to: "soc-l2",    kind: "vertical", label: "1–3 yrs. From triage to investigation." },
  { from: "soc-l2",   to: "sec-eng",   kind: "vertical", label: "3–5 yrs. From responding to building." },
  { from: "sec-eng",  to: "sec-arch",  kind: "vertical", label: "5–8 yrs as Sec Eng. Cross-domain security thinking." },
  { from: "sec-arch", to: "ciso",      kind: "fork",     label: "10–15 yrs total. The CISO fork. No single path — CISOs come from sec eng (~35%), GRC (~25%), audit, IT, even legal." },
  { from: "sec-eng",  to: "pentester", kind: "lateral",  label: "2–4 yrs. Adversarial mindset. Different career — not just different specialty. Bridge: OSCP." },

  // Data vertical
  { from: "data-analyst", to: "data-eng",  kind: "vertical", label: "18–24 months. The most common pivot in data. Bridge: DP-700, DEA-C01." },
  { from: "data-eng",     to: "ml-eng",    kind: "vertical", label: "2–4 yrs. The hardest data pivot. Engineering gets MORE complex, not less." },
  { from: "data-eng",     to: "data-arch", kind: "vertical", label: "4–7 yrs total. From pipeline-builder to platform owner." },

  // Software vertical
  { from: "jr-dev",     to: "mid-dev",    kind: "vertical", label: "1–2 yrs. Earn trust on a single team." },
  { from: "mid-dev",    to: "senior-eng", kind: "vertical", label: "2–4 yrs. From shipping features to shipping systems." },
  { from: "senior-eng", to: "staff-eng",  kind: "fork",     label: "3–7 yrs as Sr. The IC ladder fork. Equivalent comp to EM at most modern tech orgs. Read Larson's Staff Engineer book." },
  { from: "staff-eng",  to: "principal",  kind: "vertical", label: "5–10 yrs as Staff. Industry-shaping. Rare." },

  // Architecture vertical
  { from: "sa", to: "ea",         kind: "fork",     label: "3–5 yrs as SA. Structural change: from system-level to portfolio-level thinking. EA scope is the whole technology portfolio, 3–5 yr horizon." },
  { from: "ea", to: "chief-arch", kind: "vertical", label: "5–7 yrs as EA. Architecture as an organizational practice." },

  // Manager vertical
  { from: "senior-eng", to: "tech-lead", kind: "vertical", label: "3–5 yrs as Sr Eng. Still IC. But starting to lead. Last off-ramp before the manager fork." },
  { from: "tech-lead",  to: "em",        kind: "fork",     label: "6–18 months consideration. THE FORK. Not a promotion — a different job. Read The Manager's Path (Fournier)." },
  { from: "em",         to: "director",  kind: "vertical", label: "3–6 yrs as EM. From managing engineers to managing managers." },
  { from: "director",   to: "vp-cto",    kind: "vertical", label: "5–10 yrs as Director. Org design. Strategy. Equity-heavy comp." },

  // Lateral pivots — cross-domain
  { from: "helpdesk-t1", to: "noc",         kind: "lateral",  label: "Common entry pivot. Both Tier-1 reactive but different focus. CCST or Network+ helps." },
  { from: "sysadmin-sr", to: "cloud-eng-s", kind: "lateral",  label: "12–18 months. The most common cloud entry path. Your ops experience is the foundation." },
  { from: "sysadmin-sr", to: "devops",      kind: "lateral",  label: "12–24 months. Ops side of DevOps. Your foundation is strong; gap is dev skills." },
  { from: "net-eng-sr",  to: "cloud-net",   kind: "lateral",  label: "6–18 months. Most under-appreciated lateral move — your routing/BGP skills are gold in cloud. AZ-700 or AWS ANS-C01." },
  { from: "mid-dev",     to: "devops",      kind: "lateral",  label: "12–24 months. Dev side of DevOps. Your code is strong; gap is ops." },
  { from: "data-eng",    to: "ai-eng",      kind: "lateral",  label: "6–18 months. The 2024+ role. If you can ship software with LLM components, this is yours." },
  { from: "senior-eng",  to: "sa",          kind: "vertical", label: "7–10 yrs IC experience. From building one system to designing systems for others to build." },
  { from: "sysadmin-sr", to: "sa",          kind: "lateral",  label: "Operations engineers can move into solutions architecture, especially infra/cloud SA roles." },
  { from: "sec-eng",     to: "sec-arch",    kind: "vertical" },
  { from: "mainframe",   to: "cloud-sa",    kind: "lateral",  label: "⚡ The highest-ROI pivot in IT 2026. Aging mainframe workforce + cloud migration = premium. 12–24 months." },
  { from: "em",          to: "vp-cto",      kind: "vertical", label: "Skip-the-Director path is rare but possible at startups." },
  { from: "sre",         to: "platform",    kind: "vertical" },
];
