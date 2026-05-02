// Auto-ported from IT_Career_Flow.html (NODES array).
// Source uses short column ids ("ops","net","sys","sec","sw","mgr","arch")
// and short row ids ("assoc","prof"). These are normalized below to the
// DomainColumn / Level union members specified by the type contract.

export type DomainColumn =
  | "operations"
  | "networking"
  | "systems"
  | "cloud"
  | "devops"
  | "security"
  | "data"
  | "software"
  | "architecture"
  | "manager";

export type Level = "entry" | "associate" | "professional" | "expert";

export interface FlowNode {
  id: string;          // unique slug
  name: string;
  col: DomainColumn;   // which vertical lane
  row: Level;          // which horizontal level
  offY?: number;       // optional pixel offset for stacking inside a cell
  sub?: string;        // optional sub-label preserved from source
}

export const NODES: FlowNode[] = [
  // Operations
  { id: "helpdesk-t1", col: "operations", row: "entry",        name: "Help Desk T1" },
  { id: "sysadmin-jr", col: "operations", row: "associate",    name: "Junior Sysadmin" },
  { id: "sysadmin",    col: "operations", row: "associate",    name: "Sysadmin", offY: 50 },
  { id: "sysadmin-sr", col: "operations", row: "professional", name: "Senior Sysadmin" },
  { id: "infra-eng",   col: "operations", row: "expert",       name: "Infrastructure Eng" },

  // Networking
  { id: "noc",        col: "networking", row: "entry",        name: "NOC Tech" },
  { id: "net-eng-jr", col: "networking", row: "associate",    name: "Network Engineer" },
  { id: "net-eng-sr", col: "networking", row: "professional", name: "Senior Net Eng" },
  { id: "net-arch",   col: "networking", row: "expert",       name: "Network Architect" },

  // Systems
  { id: "linux-eng", col: "systems", row: "professional", name: "Linux Engineer" },
  { id: "mainframe", col: "systems", row: "professional", name: "Mainframe Sysprog", offY: 60 },
  { id: "sys-arch",  col: "systems", row: "expert",       name: "Systems Architect" },

  // Cloud
  { id: "cloud-eng-a", col: "cloud", row: "associate",    name: "Cloud Engineer", sub: "(Associate)" },
  { id: "cloud-eng-s", col: "cloud", row: "professional", name: "Senior Cloud Eng" },
  { id: "cloud-net",   col: "cloud", row: "professional", name: "Cloud Net Eng", offY: 60 },
  { id: "cloud-sa",    col: "cloud", row: "expert",       name: "Cloud Solutions Arch" },

  // DevOps
  { id: "devops-jr", col: "devops", row: "associate",    name: "Junior DevOps" },
  { id: "devops",    col: "devops", row: "professional", name: "DevOps Engineer" },
  { id: "sre",       col: "devops", row: "professional", name: "SRE", offY: 60 },
  { id: "platform",  col: "devops", row: "expert",       name: "Platform Engineer" },

  // Security
  { id: "soc-l1",    col: "security", row: "entry",        name: "SOC Analyst L1" },
  { id: "soc-l2",    col: "security", row: "associate",    name: "SOC L2/L3" },
  { id: "sec-eng",   col: "security", row: "professional", name: "Security Engineer" },
  { id: "sec-arch",  col: "security", row: "expert",       name: "Security Architect" },
  { id: "ciso",      col: "security", row: "expert",       name: "CISO", offY: 60 },
  { id: "pentester", col: "security", row: "professional", name: "Pentester / Red Team", offY: 60 },

  // Data / AI
  { id: "data-analyst", col: "data", row: "entry",        name: "Data Analyst" },
  { id: "data-eng",     col: "data", row: "associate",    name: "Data Engineer" },
  { id: "ml-eng",       col: "data", row: "professional", name: "ML Engineer" },
  { id: "ai-eng",       col: "data", row: "professional", name: "AI Engineer", offY: 60 },
  { id: "data-arch",    col: "data", row: "expert",       name: "Data Architect" },

  // Software Eng
  { id: "jr-dev",     col: "software", row: "entry",        name: "Junior Developer" },
  { id: "mid-dev",    col: "software", row: "associate",    name: "Mid Developer" },
  { id: "senior-eng", col: "software", row: "professional", name: "Senior Engineer" },
  { id: "staff-eng",  col: "software", row: "expert",       name: "Staff Engineer" },
  { id: "principal",  col: "software", row: "expert",       name: "Principal / Distinguished", offY: 60 },

  // Architecture
  { id: "sa",          col: "architecture", row: "professional", name: "Solutions Architect" },
  { id: "ea",          col: "architecture", row: "expert",       name: "Enterprise Architect" },
  { id: "chief-arch",  col: "architecture", row: "expert",       name: "Chief Architect", offY: 60 },

  // Manager
  { id: "tech-lead", col: "manager", row: "professional", name: "Tech Lead" },
  { id: "em",        col: "manager", row: "professional", name: "Engineering Manager", offY: 60 },
  { id: "director",  col: "manager", row: "expert",       name: "Director" },
  { id: "vp-cto",    col: "manager", row: "expert",       name: "VP / CTO", offY: 60 },
];
