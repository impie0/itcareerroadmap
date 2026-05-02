// Vendor brand colours — used for the cert-matrix tiles (Paul-Jerimy style).
// Each vendor's tile background is its brand colour; text colour auto-contrasts.
//
// Every hex in this map is verified against the vendor's own brand guidelines,
// press kit, design system, or — failing those — community-curated brand
// databases (BrandColors, BrandColorCode, encycolorpedia, SimpleIcons).
// Audit trail with sources lives at lib/vendor-colors-sources.md.
//
// Lookup is case-insensitive and lowercased; substring match is the fallback
// (so "Aruba/HPE" still resolves to the Aruba entry, "Cisco DevNet" to Cisco,
// etc.). Unknown vendors fall through to FALLBACK steel grey.

const VENDOR_COLOR: Record<string, string> = {
  // ─── CompTIA / vendor-neutral certs ─────────────────────────────────────
  "comptia": "#c8202f",

  // ─── Hyperscale cloud ───────────────────────────────────────────────────
  "aws": "#ff9900",
  "amazon": "#ff9900",
  "amazon web services": "#ff9900",
  "microsoft": "#0078d4",
  "microsoft azure": "#0078d4",
  "azure": "#0078d4",
  "ms": "#0078d4",
  "google": "#4285f4",
  "google cloud": "#4285f4",
  "gcp": "#4285f4",
  "oracle": "#c74634",
  "oracle cloud": "#c74634",
  "oci": "#c74634",
  "ibm": "#0530ad",
  "ibm cloud": "#0530ad",

  // ─── Linux / OS / open source foundations ───────────────────────────────
  "red hat": "#ee0000",
  "redhat": "#ee0000",
  "ansible": "#ee0000",
  "suse": "#30ba78",
  "linux foundation": "#ff00aa",
  "lpi": "#003a70",
  "cncf": "#326ce5",

  // ─── Networking / hardware ──────────────────────────────────────────────
  "cisco": "#049fd9",
  "cisco devnet": "#049fd9",
  "cisco meraki": "#67b346",
  "meraki": "#67b346",
  "juniper": "#84b135",
  "juniper mist": "#84b135",
  "mist": "#84b135",
  "aruba": "#ff8300",
  "hpe aruba": "#ff8300",
  "aruba/hpe": "#ff8300",
  "hpe": "#01a982",
  "hewlett packard enterprise": "#01a982",
  "arista": "#16325b",
  "mikrotik": "#390879",
  "huawei": "#cf0a2c",
  "extreme networks": "#5c2ea3",
  "versa": "#62bb46",
  "versa networks": "#62bb46",

  // ─── Firewall / network security ────────────────────────────────────────
  "palo alto": "#f04d1e",
  "palo alto networks": "#f04d1e",
  "fortinet": "#da291c",
  "check point": "#e8333d",
  "f5": "#e4002b",
  "sonicwall": "#ff7e2b",
  "sophos": "#0a3a82",
  "cloudflare": "#f38020",
  "zscaler": "#009cda",

  // ─── Storage / backup / data protection ─────────────────────────────────
  "netapp": "#0067c5",
  "pure storage": "#fe5000",
  "pure": "#fe5000",
  "dell": "#0076ce",
  "dell emc": "#0076ce",
  "dell technologies": "#0076ce",
  "veeam": "#00d15f",
  "commvault": "#0e2240",
  "rubrik": "#00b388",
  "cohesity": "#67bf1b",

  // ─── Hypervisor / virtualisation ────────────────────────────────────────
  "vmware": "#717074",
  "vmware/broadcom": "#cc092f",
  "vmware/omnissa": "#717074",
  "omnissa": "#0091da",
  "broadcom": "#cc092f",
  "nutanix": "#0091da",
  "citrix": "#0045db",
  "proxmox": "#e57000",

  // ─── SIEM / EDR / SOC tooling ───────────────────────────────────────────
  "splunk": "#ff6600",
  "crowdstrike": "#fc0000",
  "sentinelone": "#6100ff",
  "elastic": "#00bfb3",
  "qradar": "#0530ad",
  "tenable": "#00674b",
  "rapid7": "#f15a22",
  "wiz": "#1a3aff",
  "snyk": "#4c4a73",

  // ─── Identity / PAM / endpoint management ───────────────────────────────
  "okta": "#007dc1",
  "cyberark": "#016a95",
  "ping identity": "#b8232f",
  "ping": "#b8232f",
  "sailpoint": "#0071ce",
  "saviynt": "#0a3aff",
  "beyondtrust": "#ff5500",
  "delinea": "#1f3864",
  "jamf": "#3e97fc",
  "microsoft entra": "#0078d4",
  "microsoft intune": "#0078d4",

  // ─── SaaS / platform ecosystems ─────────────────────────────────────────
  "salesforce": "#00a1e0",
  "mulesoft": "#00a1df",
  "tableau": "#e8762d",
  "sap": "#1c64be",
  "servicenow": "#62d84e",
  "workday": "#f4990b",
  "adobe": "#ed2224",
  "atlassian": "#0052cc",

  // ─── DevOps / IaC / containers / CI ─────────────────────────────────────
  "hashicorp": "#000000",
  "terraform": "#844fba",
  "docker": "#2496ed",
  "docker/mirantis": "#2496ed",
  "mirantis": "#0076a4",
  "kubernetes": "#326ce5",
  "github": "#24292f",
  "gitlab": "#fc6d26",
  "circleci": "#049b4a",
  "jenkins": "#d33833",

  // ─── Observability / SRE ────────────────────────────────────────────────
  "datadog": "#632ca6",
  "new relic": "#1ce783",
  "dynatrace": "#1496ff",
  "honeycomb": "#f5a623",
  "grafana": "#f05a28",
  "prometheus": "#e6522c",
  "pagerduty": "#048a24",
  "opentelemetry": "#f5a800",

  // ─── Data / ML / analytics ──────────────────────────────────────────────
  "snowflake": "#29b5e8",
  "databricks": "#ff3621",
  "mongodb": "#00ed64",
  "datastax": "#3a3a3a",
  "confluent": "#173361",
  "dbt": "#ff694a",
  "nvidia": "#76b900",

  // ─── Healthcare IT ──────────────────────────────────────────────────────
  "epic": "#cc0000",
  "epic systems": "#cc0000",
  "cerner": "#c74634",
  "oracle health": "#c74634",
  "meditech": "#0072ce",

  // ─── Security / GRC / training ──────────────────────────────────────────
  "isc2": "#1c5d99",
  "(isc)2": "#1c5d99",
  "isaca": "#005eb8",
  "sans": "#005980",
  "giac": "#005980",
  "ec-council": "#ed1c24",
  "iapp": "#1e3a5f",
  "offensive security": "#5d8c2f",
  "offsec": "#5d8c2f",
  "tcm security": "#0a8754",
  "tcm": "#0a8754",
  "pentester academy": "#1d4e89",
  "csa": "#005689",
  "hackthebox": "#9fef00",
  "tryhackme": "#88cc14",
  "ine": "#fc4503",
  "istqb": "#123962",

  // ─── PM / service mgmt / agile ──────────────────────────────────────────
  "pmi": "#f1521b",
  "scrum.org": "#1c4271",
  "scrum alliance": "#0c2657",
  "scaled agile": "#0072ce",
  "itil": "#6c3fa9",
  "peoplecert": "#6c3fa9",
  "axelos": "#6c3fa9",

  // ─── Architecture / standards ───────────────────────────────────────────
  "togaf": "#00306e",
  "the open group": "#00306e",
  "open group": "#00306e",

  // ─── Wireless / cabling / facilities ────────────────────────────────────
  "cwnp": "#063a78",
  "bicsi": "#003876",
  "uptime institute": "#0066b3",

  // ─── Online learning / MOOCs ────────────────────────────────────────────
  "coursera": "#0056d2",
  "udacity": "#02b3e4",
  "pluralsight": "#f15b2a",
  "linkedin learning": "#0a66c2",
  "freecodecamp": "#006400",
  "test automation u": "#ee2e24",

  // ─── Catch-alls used in cert tables ─────────────────────────────────────
  "multi": "#56708a",
  "various": "#56708a",
  "vendor product certs": "#56708a",
};

const FALLBACK = "#56708a"; // neutral steel — used for unknown vendors

export function vendorColor(vendor: string): string {
  const key = vendor.trim().toLowerCase();
  if (VENDOR_COLOR[key]) return VENDOR_COLOR[key];
  // Some vendors come with extra text e.g. "Aruba/HPE" — try splits.
  for (const k of Object.keys(VENDOR_COLOR)) {
    if (key.includes(k)) return VENDOR_COLOR[k];
  }
  return FALLBACK;
}

// WCAG-ish luminance check — returns "#fff" or "#0a1722" depending on which
// gives the better contrast on the vendor colour background.
export function textOnVendor(hex: string): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;
  const lum =
    0.2126 * (r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4)) +
    0.7152 * (g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4)) +
    0.0722 * (b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4));
  return lum > 0.5 ? "#0a1722" : "#ffffff";
}

export function listKnownVendors(): { vendor: string; color: string }[] {
  return Object.entries(VENDOR_COLOR).map(([vendor, color]) => ({ vendor, color }));
}
