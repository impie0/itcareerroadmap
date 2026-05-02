/**
 * Maps the 137 distinct `domain` strings found across Deep Dive/Certifications/*.md
 * into the 12 canonical domain columns the /certs matrix renders.
 *
 * Canonical IDs match the existing `content/certs.ts` DOMAINS so the existing
 * CSS variables (--foundation, --networking, etc.), colors, and routes still work.
 *
 * Add new mappings here as you author more cert files with new `domain:` values.
 */

export type CanonicalDomainId =
  | "foundation"
  | "networking"
  | "systems"
  | "cloud"
  | "devops"
  | "security"
  | "identity"
  | "data"
  | "architecture"
  | "itmgmt"
  | "software"
  | "businessapps";

export const CANONICAL_DOMAINS: { id: CanonicalDomainId; name: string; color: string; blurb: string }[] = [
  { id: "foundation",   name: "Foundation",          color: "#6b7280", blurb: "Entry into IT — fundamentals and first credentials." },
  { id: "networking",   name: "Networking",          color: "#0ea5e9", blurb: "Routing, switching, wireless, SD-WAN, application delivery." },
  { id: "systems",      name: "Systems / OS",        color: "#14b8a6", blurb: "Linux, Windows Server, virtualization, endpoint admin." },
  { id: "cloud",        name: "Cloud",               color: "#f59e0b", blurb: "AWS, Azure, GCP, multi-cloud, FinOps." },
  { id: "devops",       name: "DevOps / Automation", color: "#10b981", blurb: "CI/CD, IaC, containers, Kubernetes, SRE." },
  { id: "security",     name: "Security",            color: "#ef4444", blurb: "Offensive, defensive, GRC, vulnerability mgmt, SOC." },
  { id: "identity",     name: "Identity & Endpoint", color: "#a855f7", blurb: "IAM, IGA, PAM, endpoint, VDI, MDM." },
  { id: "data",         name: "Data / AI",           color: "#6366f1", blurb: "Databases, analytics, ML/AI engineering, BI." },
  { id: "architecture", name: "Architecture",        color: "#8b5cf6", blurb: "Solution, enterprise, integration, cross-domain design." },
  { id: "itmgmt",       name: "IT Mgmt / Governance",color: "#64748b", blurb: "ITSM, project / program management, agile, leadership." },
  { id: "software",     name: "Software Eng",        color: "#3b82f6", blurb: "Application development — Java, low-code, integration, API engineering." },
  { id: "businessapps", name: "Business Apps",       color: "#ec4899", blurb: "CRM, ERP, HCM, marketing, field service. Salesforce / SAP / Workday / ServiceNow / Adobe / Dynamics." },
];

export const DOMAIN_LABEL: Record<CanonicalDomainId, string> = Object.fromEntries(
  CANONICAL_DOMAINS.map((d) => [d.id, d.name]),
) as Record<CanonicalDomainId, string>;

/**
 * Normalize a raw `domain:` frontmatter string into one of the 12 canonical IDs.
 * Returns null if no good match (caller can fall back to "software" or skip).
 */
export function normalizeDomain(raw: string): CanonicalDomainId | null {
  if (!raw) return null;
  const s = raw.toLowerCase().replace(/[\s/&,]+/g, " ").trim();

  // Exact / strong matches first
  if (/^foundation\b/.test(s)) return "foundation";

  if (/\bwireless\b/.test(s)) return "networking";
  if (/\bnetworking\b|\bnetwork\b|\bdata center\b|\bvoice\b|\bcdn\b|\bservice mesh\b/.test(s)) return "networking";

  if (/\bsystems?\b|\bos\b|\blinux\b|\bvirtualization\b|\bhyperconverged\b/.test(s)) {
    if (/\bcontainer\b|\bpaas\b/.test(s)) return "devops";
    return "systems";
  }

  if (/\bdevops\b|\bsre\b|\bautomation\b|\bkubernetes\b|\binfrastructure as code\b|\bplatform engineering\b|\bcontainer\b|\bpaas\b/.test(s)) return "devops";

  if (/\bsecurity\b|\bsoc\b|\bsoar\b|\bvulnerability\b|\bthreat\b|\bincident\b|\bgrc\b|\baudit\b|\bprivacy\b|\bsiem\b|\bobservability\b/.test(s)) {
    if (/\bobservability\b|\bmonitoring\b/.test(s) && !/\bsecurity\b|\bsoc\b|\bsiem\b/.test(s)) return "data";
    return "security";
  }

  if (/\bidentity\b|\biam\b|\biga\b|\bpam\b|\bendpoint\b|\bvdi\b|\bmdm\b/.test(s)) return "identity";

  if (/\bdata\b|\bai\b|\bml\b|\banalytics\b|\bbusiness intelligence\b|\bdatabase\b/.test(s)) return "data";

  if (/\barchitecture\b|\barchitect\b/.test(s)) return "architecture";

  if (/\bcloud\b/.test(s)) return "cloud";

  if (/\bagile\b|\bscrum\b|\bsafe\b|\bproject management\b|\bitsm\b|\bservice management\b|\bcollaboration\b|\bit management\b/.test(s)) {
    return "itmgmt";
  }

  if (/\bsoftware engineering\b|\blow code\b|\bjava\b|\bintegration\b|\bapi\b/.test(s)) {
    // Low-code that's clearly a CRM/ERP build (e.g. "Software Engineering / CRM") → businessapps
    if (/\bcrm\b|\berp\b|\bsap\b|\bsalesforce\b|\bservicenow\b|\bworkday\b/.test(s)) return "businessapps";
    return "software";
  }
  if (/\berp\b|\bcrm\b|\bsap\b|\bsalesforce\b|\bservicenow\b|\bworkday\b|\bsupply chain\b|\bfinance\b|\bhcm\b|\bhris\b|\bbusiness application\b|\bmarketing\b|\bcms\b|\bfield service\b/.test(s)) {
    return "businessapps";
  }

  return null;
}

/**
 * Optional vendor → SaaS / hardware ecosystem column mapping.
 * A cert from a vendor in this map will ALSO appear in that ecosystem column,
 * in addition to its primary canonical domain.
 *
 * Only vendors with a clear single-ecosystem fit are listed — multi-domain
 * vendors (Cisco, Microsoft, AWS, Google) are intentionally omitted because
 * their certs already span multiple domain columns.
 */
export const VENDOR_TO_ECOSYSTEM: Record<string, { id: string; name: string; kind: "saas" | "hardware" }> = {
  // SaaS
  "Salesforce":  { id: "salesforce",  name: "Salesforce",         kind: "saas" },
  "SAP":         { id: "sap",         name: "SAP",                kind: "saas" },
  "ServiceNow":  { id: "servicenow",  name: "ServiceNow",         kind: "saas" },
  "Workday":     { id: "workday",     name: "Workday",            kind: "saas" },
  "Adobe":       { id: "adobe",       name: "Adobe",              kind: "saas" },
  "Atlassian":   { id: "atlassian",   name: "Atlassian",          kind: "saas" },
  "MuleSoft":    { id: "mulesoft",    name: "MuleSoft",           kind: "saas" },
  "Snowflake":   { id: "snowflake",   name: "Snowflake",          kind: "saas" },
  "Databricks":  { id: "databricks",  name: "Databricks",         kind: "saas" },
  "Okta":        { id: "okta",        name: "Okta",               kind: "saas" },
  "SailPoint":   { id: "sailpoint",   name: "SailPoint",          kind: "saas" },
  "CyberArk":    { id: "cyberark",    name: "CyberArk",           kind: "saas" },
  "HashiCorp":   { id: "hashicorp",   name: "HashiCorp",          kind: "saas" },

  // Hardware / network appliances
  "Palo Alto":   { id: "firewall",    name: "Firewall Vendors",   kind: "hardware" },
  "Check Point": { id: "firewall",    name: "Firewall Vendors",   kind: "hardware" },
  "Fortinet":    { id: "firewall",    name: "Firewall Vendors",   kind: "hardware" },
  "Juniper":     { id: "netvendor",   name: "Switch / Router",    kind: "hardware" },
  "Aruba":       { id: "netvendor",   name: "Switch / Router",    kind: "hardware" },
  "F5":          { id: "netvendor",   name: "Switch / Router",    kind: "hardware" },
  "Pure Storage":{ id: "storage",     name: "Storage / Backup",   kind: "hardware" },
  "NetApp":      { id: "storage",     name: "Storage / Backup",   kind: "hardware" },
  "Veeam":       { id: "storage",     name: "Storage / Backup",   kind: "hardware" },
  "Commvault":   { id: "storage",     name: "Storage / Backup",   kind: "hardware" },
  "VMware":      { id: "hypervisor",  name: "Hypervisor",         kind: "hardware" },
  "Nutanix":     { id: "hypervisor",  name: "Hypervisor",         kind: "hardware" },
  "Citrix":      { id: "hypervisor",  name: "Hypervisor",         kind: "hardware" },
  "Splunk":      { id: "siemsoc",     name: "SIEM / SOC",         kind: "hardware" },
  "Datadog":     { id: "siemsoc",     name: "SIEM / SOC",         kind: "hardware" },
  "CrowdStrike": { id: "siemsoc",     name: "SIEM / SOC",         kind: "hardware" },
  "Qualys":      { id: "siemsoc",     name: "SIEM / SOC",         kind: "hardware" },
  "Tenable":     { id: "siemsoc",     name: "SIEM / SOC",         kind: "hardware" },
  "Zscaler":     { id: "siemsoc",     name: "SIEM / SOC",         kind: "hardware" },
  "CWNP":        { id: "wireless",    name: "Wireless / SD-WAN",  kind: "hardware" },
  "Cloudflare":  { id: "wireless",    name: "Wireless / SD-WAN",  kind: "hardware" },
  "Akamai":      { id: "wireless",    name: "Wireless / SD-WAN",  kind: "hardware" },
};

/** Normalize a level string to one of the 4 canonical levels (default: Associate). */
export function normalizeLevel(raw: string): "Entry" | "Associate" | "Professional" | "Expert" {
  const s = (raw ?? "").toLowerCase();
  if (s.includes("entry") || s.includes("foundation")) return "Entry";
  if (s.includes("expert") || s.includes("specialty")) return "Expert";
  if (s.includes("professional")) return "Professional";
  return "Associate";
}
