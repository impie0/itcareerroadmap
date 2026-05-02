#!/usr/bin/env python3
"""
Walk every markdown file in Deep Dive/Ecosystems/ (D01-D39) and extract
the complete cert ladder for each ecosystem into a single typed JSON file.

Strategy:
  1. Parse frontmatter for slug/title/vendors.
  2. Walk H2..H6 sections.
  3. Within each section, detect cert candidates from THREE patterns:
     (a) Heading itself names a cert (H3/H4/H5)
     (b) Bold paragraph leads "**XYZ Certification**" / "**ACA - Campus Access**"
     (c) Table rows where col-1 contains a cert name in bold
  4. Reject heading section markers (Foundational, Tracks, etc.) and prose.
  5. For each candidate, pull rich attributes from surrounding bullets/inline pipes.
  6. Classify into Tier (Entry/Associate/Professional/Expert) with section + name hints.
"""

from __future__ import annotations
import json, os, re
from pathlib import Path
from collections import OrderedDict

ROOT = Path(r"H:\IT rodmap Blog")
SRC_DIR = ROOT / "Deep Dive" / "Ecosystems"
OUT_PATH = ROOT / "content" / "extracted" / "ecosystems.json"

# ---------- Frontmatter ----------
def parse_frontmatter(text):
    if not text.startswith("---"):
        return {}, text
    end = text.find("\n---", 3)
    if end == -1:
        return {}, text
    fm_block = text[3:end]
    body = text[end + 4:].lstrip("\n")
    fm = {}
    for line in fm_block.splitlines():
        line = line.strip()
        if not line or ":" not in line:
            continue
        k, v = line.split(":", 1)
        v = v.strip()
        if v.startswith("[") and v.endswith("]"):
            inner = v[1:-1]
            arr = [x.strip().strip('"\'') for x in inner.split(",") if x.strip()]
            fm[k.strip()] = arr
        else:
            fm[k.strip()] = v.strip().strip('"\'')
    return fm, body

# ---------- Code regex ----------
CODE_RE = re.compile(
    r"\b("
    r"AB-\d{3,4}|AI-\d{3,4}|AZ-\d{3,4}|DA-\d{3,4}|DP-\d{3,4}|MB-\d{3,4}|MD-\d{3,4}|"
    r"MO-\d{3,4}|MS-\d{3,4}|PL-\d{3,4}|SC-\d{3,4}|"
    r"CLF-C\d{2}|SAA-C\d{2}|SAP-C\d{2}|DOP-C\d{2}|SOA-C\d{2}|DVA-C\d{2}|DAS-C\d{2}|"
    r"MLS-C\d{2}|SCS-C\d{2}|ANS-C\d{2}|DBS-C\d{2}|AIF-C\d{2}|MLA-C\d{2}|MLE-C\d{2}|GAI-C\d{2}|"
    r"JN0-\d{3,4}|HPE\d-\w\d{2,3}|"
    r"(?:200|300|350|400|500|600|700|800|820|100|150|140|160|450|550)-\d{3,4}(?:[A-Z]\d?)?|"
    r"1Z0-\d{3,4}(?:-\d{2})?|"
    r"C\d{6,7}|F\d{6,7}|"
    r"PCNS[AE]|PCCET|PCSFE|PCCSE|PCSAE|PCDRA|"
    r"NSF|NETSG|NGFWE|CYBPREP|SECOPS-PRO|XSIAM-[A-Z]+|XDR-[A-Z]+|XSOAR-[A-Z]+|CSF|CLDSP|"
    r"PRISMA-ENG|CONTAINER-ENG|"
    r"NETSEC-ARCH|"
    r"NSE\s?\d|"
    r"CCNA|CCNP|CCIE|CCDE|CCST|CCDA|CCDP|"
    r"JNCIA-?\w*|JNCIS-?\w*|JNCIP-?\w*|JNCIE-?\w*|"
    r"OCA|OCP|OCM|"
    r"CK[AS]?D?|CKAD|CKA|CKS"
    r")\b"
)

URL_RE = re.compile(r"https?://[^\s)\]\"<]+")
LINK_RE = re.compile(r"\[([^\]]+)\]\((https?://[^)]+)\)")

def first_url(s):
    m = URL_RE.search(s)
    return m.group(0).rstrip(".,);") if m else None

def find_code(text):
    """Prefer specific codes (with digits) over family abbreviations."""
    matches = list(CODE_RE.finditer(text))
    if not matches:
        return None
    # First match with a digit
    for m in matches:
        if re.search(r"\d", m.group(1)):
            return m.group(1)
    # Fallback to first match
    return matches[0].group(1)

# ---------- Reject (not a cert) ----------
GENERIC_SECTION_NAMES = {
    "overview", "executive summary", "foundation level", "specialist level",
    "expert level", "associate level", "professional level", "entry level",
    "emerging tracks", "career paths", "career path", "salary benchmarks",
    "learning resources", "sources", "contents", "table of contents",
    "introduction", "summary", "conclusion", "acknowledgments",
    "foundational", "professional", "specialist", "specialists", "architect",
    "associate", "expert", "entry", "intermediate", "advanced",
    "key 2026 changes", "2026 updates", "study path", "study paths",
    "free", "paid", "useful", "free resources", "paid resources",
    "communities", "events", "conferences", "competitive landscape",
    "south african context", "exam administration", "renewal", "recertification",
    "product portfolio", "product ecosystem", "core products",
    "legacy (retired)", "legacy retired", "new role-based framework (2025+)",
    "network security track", "security operations track", "cloud security track",
    "tracks", "tiers", "core platform certifications", "core certifications",
    "skill domains", "skill paths", "skill path",
    "training & learning resources", "training and learning resources",
    "delivery & cost", "delivery and cost", "scoring & feedback",
    "exam delivery & scoring", "exam delivery and scoring",
    "free & paid learning resources", "free and paid learning",
    "career roles & salary ranges", "career roles and salary ranges",
    "competitive comparison", "future outlook", "post-merger organization",
    "post-merger organization & ai integration", "acquisition & strategic context",
    "design expert", "automation track (formerly devnet)",
    "specialty credentials", "career progression pathways",
    "free & paid learning", "salary & demand", "salary and demand",
    "free training resources", "paid training resources",
    "background", "context", "history", "timeline",
    "important", "note", "caveat", "warning",
    "details", "key features", "features",
    "by track", "by tier", "by level", "by product",
    "preparation", "prep", "study plan", "study plans",
    "portfolio mapping", "compensation",
    "deal closure & doj settlement", "strategic rationale",
    "subscription & capex-to-opex shift", "unified sase strategy",
    "aruba networking central + mist ai (\"build once, deploy twice\")",
    "wired campus access", "wireless campus access", "data center",
    "core platform", "core platforms",
    "what's included", "what is included", "what's covered", "what is covered",
    "platform overview", "platforms overview",
}

REJECT_PATTERNS = [
    # numbering is stripped in clean_cert_name; here we only reject pure noise
    r"^Part\s+\d", r"^Phase\s+\d", r"^Step\s+\d", r"^Section\s+\d",
    r"^D\d{2}:", r"^Deep Dive\b",
    r"Retirement\s*[:\(]", r"Retires:",
    r"^\s*\(formerly[^)]*\)\s*$",
    r"^Important\b", r"^Note\b", r"^Tip\b", r"^Warning\b",
    r"^The\s", r"^What\s", r"^How\s", r"^Why\s", r"^When\s", r"^Where\s",
    r"^If\s", r"^You\s", r"^We\s", r"^This\s", r"^That\s",
    r"^By\s\d{4}", r"^Effective\s",
    r"^Pearson\s",
    r"^All\s", r"^Each\s",
    r"^Status\s*:?",
    r"\bteam\s+member", r"^Career Fit\b", r"^Target Audience\b",
    r"^\$\d", r"^USD\b",
    r"^See\b",
    r"^Source\b", r"^Sources\b",
    r"^Free\s+Training\b",
    # Career progression / paths / phases
    r"^Path\s*\d+\s*:", r"^Path\s+\d+\b",
    r"^Transition\s*\d+", r"^Month\s+\d", r"^Year\s+\d", r"^Week\s+\d",
    r"^Typical\s+Progression\b",
    r"^For\s+(Mid-Career|Junior|Senior|Beginners|Enterprise|DevOps|Platform|New)\b",
    r"^Track\s*\d", r"^Stage\s*\d",
    # category/section labels leaking through
    r"^By\s+(Certification|Track|Tier|Level|Product|Vendor|Domain)\b",
    r"^Tier\b\s*\(", r"^Tiers\b", r"^Tracks\b", r"^Levels?\b\s*\(",
    r"^Core\s*:", r"^Core\s+Track", r"^Core\s+Exams?",
    r"^Concentration\s*:", r"^Concentration\s+Exam",
    r"^(Foundational|Associate|Professional|Specialist|Expert|Architect)\s+(Tier|Level|Track|Path)\b",
    r"^Specialty\s+Tier\b",
    r"^Hyperscaler", r"^Salary\b", r"\bSalary\s+Premium",
    r"^Paid\s+Training\b", r"^Free\s+Training",
    r"^Skills?\b", r"^Skill\s+Domains?\b",
    r"^Certifications?\b\s*$", r"^Certifications?\s+(Retiring|in|Stack|Structure|Validity)",
    # Book / guide / course titles
    r"\bCert Guides?\b", r"\bOfficial Guide\b", r"\bStudy Guide\b\s*$",
    r"\bPocket Guide\b", r"\bExam Guide\b\s*$",
    r"\bOfficial Cert Guides?\b", r"\bGuide Library\b",
    r"\bO['']Reilly\b", r"\bSybex\b", r"\bWiley\b",
    r"\bBook\b\s*$", r"\bCourse\b\s*$",
    # Career role titles (not cert names)
    r"^(Senior|Junior|Principal|Lead|Staff|Distinguished)\s+(Cloud|Network|Security|Software|Data)\s+(Engineer|Architect|Analyst|Developer|Specialist)",
    r"^Cloud\s+Engineer\s+/\s+", r"^Cloud\s+Support\s+Associate\s+/\s+",
    # Subsection markers
    r"^Available\s+Certifications?\s*$",
    r"^Current\s+Certifications?\s*$",
    r"^Other\s+CCNP\b",
    r"^New\s+Certifications?\s*\(", r"^Certifications?\s+Retiring",
    r"^Primary\s+", r"^Recommended\s+",
    r"^Emerging\b", r"^Legacy\b",
    r"^Wendell\s+Odom\b",
    # Generic operations text
    r"^Training\s+(and|&)\s+", r"^Career\s+&\b", r"^Career\s+and\b",
    r"^Third-Party\b",
    r"\bConcentrations?\s*$", r"\bConcentrations?\s+Exam",
    # numbered sections that are H3 in some files
    r"^\(\d+\)\s",
    # "Recertification" style
    r"\bRecertification\b\s*$", r"^Renewal\b\s*$",
    # Track-like
    r"^DevOps\s+Engineer\s*/", r"^Data\s+Engineering\s*/",
    # Subsection headings with ":" — usually exam-meta sub-blocks
    r"\bOfferings\b\s*\(", r"\bWritten Exam\b", r"\bLab Exam\b",
    r"\bExam Topics\b", r"\bCareer Impact\b", r"\bCareer Path\b",
    r"\bv\d+(?:\.\d+)?\b\s+Release",
    r"\bReturn of\b",
    r"^Release\b", r"^Launched\b",
    r"\bTopics\b\s*$", r"\bLab Exam\b", r"\bWritten Exam\b",
    r"\bExam Topics\b", r"\bCareer Impact\b", r"\bExam Structure\b",
    r"\bOfferings\b", r"\bConcentrations?\b\s*$",
    r"^Core\b", r"^Concentration\b",
    r"\bRecertification Policy\b",
    r"\bValidity\s+(&|and)\s+Renewal\b",
    r"\bCertification\s+(Recertification|Validity|Evolution|Structure|Stack|Path|Paths|Policy|Guides?)\b",
    r"^Certifications?\s+(Retiring|Stack|Structure|Validity|Path)",
    r"^Available\s+", r"^Current\s+",
    r"^Primary\s+Fusion\b",
    r"^Official\s+Oracle\b", r"^Official\s+Microsoft\b",
    r"^Career\s+&\s+", r"^Career\s+and\s+",
    # Existing-X retraining-paths
    r"^For\s+Existing\b",
    # Business / partner certs
    r"^Sales\s+Professional\b", r"^HPE Certified Sales\b",
    # Continuation phrases
    r"^Specialist\s+&\s+Industry", r"^Specialists?\s+and\s+Industry",
    # multi-cert family overview
    r"\bCertifications\b\s*$",
    # Path tracker step headings like "Solutions Architect / Pre-Sales SE"
    r"^Solutions Architect\s*/\s*Pre-Sales\b",
    r"^Architect\s*/\s*Senior\b", r"^Administrator\s*/\s*Engineer\b",
    r"^Consultant\s*/\s*Professional\s+Services\b",
    r"^Core\s+Competency\b",
    # Job title with parens that's clearly a role qualifier like "(Splunk-focused)" / "(Vendor/Partner)"
    r"\([Vv]endor/[Pp]artner\)\s*$", r"\([A-Za-z]+-focused\)\s*$",
    r"\(Pre-Sales\b", r"\(Customer Success\b",
    # "PL/SQL Developer" — that's actually a real cert, but generic. Allow.
    # "1Z0-082:" headings
    r"^\d{1,4}Z\d-\d+\s*:",
    # Sentences with $ amount
    r"^Total\s*:", r"\$\s*\d+",
    # academies / bootcamps / handbooks
    r"\bAcademy\b", r"\bBootcamp\b", r"\bHandbook\b", r"\bWorkbook\b",
    r"\bUser Groups?\b",
    r"\bConference\b", r"\bSummit\b", r"\bPerform\s+\d{4}\b",
    r"\bCAGR\b", r"\bRevenue\b", r"\bGrowth\b",
    # "Adjacent Roles" / "Architecture" alone
    r"^Architecture\s*$", r"^Adjacent\b",
    # "Certification:" prefix in some files
    r"^Certification\s*:", r"^Certifications?\s*:",
    # Apex Fundamentals isn't Apex - but Salesforce has "Apex Fundamentals" exam. Leave alone.
    # Single-word vendor: Dynatrace alone
    # Academic alliance / Coursera misc
    r"^Coursera\b", r"^edX\b", r"^Udemy\b", r"^Pluralsight\b",
    r"\b\(Coursera\)\b", r"\b\(Packt", r"\bPackt Publishing\b",
    r"\bWestcon-Comstor\b",
    r"^Academic\b",
    # Conference programs
    r"\bProfessional Certificate Programs?\b",
    # Compound roles separated by /
    r"^[A-Z][A-Za-z ]+/\s*[A-Z][A-Za-z ]+\s+(Engineer|Analyst|Architect)\s*$",
    # Generic single product/vendor name
    # if name is just one word like "Dynatrace" alone, reject (already handled by len < 3)
    # "Network Engineer" / "SD-WAN Engineer" - no cert hint after strip - already handled
    # "Tableau Architects" - plural family
    r"\bArchitects\b\s*$", r"\bDesigners\b\s*$", r"\bEngineers\b\s*$",
    r"\bDevelopers\b\s*$", r"\bAnalysts\b\s*$", r"\bAdministrators\b\s*$",
    r"\bConsultants\b\s*$", r"\bSpecialists\b\s*$",
    r"\bCloud-Specific\b", r"\bDomain Architects\b",
    # "Complete X (2026)"
    r"^Complete\s+\w+\s+Portfolio\b",
    # "Mid-Level X" sub-section markers
    r"^Mid-Level\b", r"^Top-Tier\b", r"^Tier\s+\d",
    # Slack Communities
    r"\bSlack\b\s+Channel", r"^Developers Slack\b", r"^Developers Blog\b",
    # SaaS event/perform names
    r"\bPerform\b\s+\d{4}", r"\bDreamforce\b",
    # Workday/SAP/ServiceNow specific section labels
    r"^Certification\s+Tracks?\s+(Available|Listing)?\b",
    r"^Certification\s+(difficulty|barrier|model)\b",
    r"^Gated\s+", r"^Pathway\b\s*\d", r"^New\s+Certification\s+Model",
    r"^Partner\s+(or|and)\s+customer", r"^Solution\s+Path\b",
    r"^Conversational\s+Interfaces\b", r"^Flow\s+Designer\s*$",
    r"^Virtual\s+Agent\s*$",
    r"^Architecture\s*&\s+Role\b", r"^BTP\s+Architecture\b",
    # Recertification heading
    r"^Recert\b", r"^Recertification\b",
    # SAP "P_BTPA:" or similar — keep
    # "Boutique Partners"
    r"\bBoutique\s+Partners\b",
    # Akamai LinkedIn
    r"^LinkedIn\b", r"^Coursera\b",
    # Cohesity
    # SailPoint / CyberArk / Akamai role headings
    r"^For\s+SOC", r"^For\s+Solutions",
    # Documentation / training / generic
    r"^Documentation\b", r"^Official\s+Training\b",
    r"^University\s+Partnerships\b", r"^Partners?\s+in\s+\w+",
    r"^Open\s+Mainframe\s+Project\b",
    r"^Z\s+Xplore\b",
    r"\bDeep-Dive\b", r"\bInterview\s+Process\b",
    r"\bPreferred\s+Certifications\s+by\s+Role\b",
    r"\bComposable\s+Architecture\b",
    r"\bTime-to-Certification\b", r"\bTime\s+to\s+Certification\b",
    r"^Q:\s*\"", r"^Q\s*:\s*", r"\bQuestion\s*:\s*",
    # Bare "Master (Strategic)" / "Expert (Advanced)" — Adobe tier markers
    r"^Master\s*\([A-Za-z ]+\)$", r"^Expert\s*\([A-Za-z ]+\)$",
    r"^Master\s+Level$",
    r"^Professional\s*\(Entry/?",
    # Plain "Specialist - Foo (CODE)" leftovers from previously stripped vendor — these are fine
    # bare "Certification & X" / "Foo Certification" generic family headings
    r"^Certification\s+&\s+", r"^Certification\s+and\s+",
    r"\bCertification\s+&\s+(Skills|Training)\b",
    # Solutions & Architecture / Engineering Tracks
    r"^Solutions?\s+&\s+Architecture\b", r"^Engineering\s+Tracks?\b",
    # bare standalone vendor/product
    r"^[A-Z][a-z]+\s*$",  # single capitalized word like "Dynatrace"
    # "Adjacent" / "Other" / "Additional" sub-sections
    r"^Other\b", r"^Additional\b", r"^Various\b",
    # generic phrase prefix like "Certification:"
    r"^Certification\s*:",
    # 12-Month / 24-Month progression markers
    r"\d{1,3}-Month\s+Path\b",
    # standalone "Service Provider" / "Data Center" without cert anchor
    # handled by CERT_HINTS check
    # JNCIE typo "(If Exists" missing close
    r"\(If\s+Exists\b",
    # "JNCIE" alone is a family - but rejected by short-name? "JNCIE" is 5 chars; allow none-of-track.
]

def is_rejected_name(name, vendor_key=""):
    n = name.strip().rstrip(":")
    if not n or len(n) < 3:
        return True
    if len(n) > 110:
        return True
    # Sentence-like: "Not a certification program, but..."
    if re.match(r"^(Not|There|These|This is|There are|These are)\b", n, re.I):
        return True
    # Standalone meta names
    low = n.lower()
    if low in ("certified content", "certification content", "azure well-architected framework",
              "well-architected framework", "ai-901: replacement"):
        return True
    if "well-architected" in low:
        return True
    if " + " in n:
        return True
    # comma-separated multi-cert e.g. "JNCIS-Cloud, JNCIS-MistAI (Emerging Tracks)"
    if re.search(r",\s*JNC[A-Z]+", n) or re.search(r",\s*CCN[AP]", n) or re.search(r",\s*PC[A-Z]{3}", n):
        return True
    # entirely a parenthetical
    stripped = re.sub(r"\([^)]*\)", "", n).strip(" -—–:")
    if not stripped:
        return True
    low = n.lower().strip(" :-–—.")
    if low in GENERIC_SECTION_NAMES:
        return True
    # heading-only words like "Foundational" "Specialist"
    if low in ("foundational", "professional", "specialist", "specialists", "architect", "associate", "expert"):
        return True
    for p in REJECT_PATTERNS:
        if re.search(p, n, re.IGNORECASE):
            return True
    # "PL-200 Retirement: August 31, 2026"
    if re.search(r"^[A-Z]{1,4}-?\d{2,4}\s+Retirement", n, re.IGNORECASE):
        return True
    # Sentence-like: contains period + lowercase first letter after space-period
    if re.search(r"[a-z]\.\s+[A-Z]", n):
        return True
    # ends with colon and is a phrase like "By Track:"
    if n.endswith(":") and len(n) < 30:
        return True
    return False

# ---------- Vendor prefix stripping ----------
VENDOR_PREFIXES = [
    "AWS Certified", "AWS",
    "Microsoft Certified:", "Microsoft Certified", "Microsoft",
    "Cisco Certified", "Cisco",
    "Oracle Certified", "Oracle",
    "IBM Certified", "IBM",
    "Salesforce Certified", "Salesforce",
    "VMware Certified Professional —", "VMware Certified Professional -",
    "VMware Certified Professional", "VMware Certified",
    "VMware",
    "HashiCorp Certified", "HashiCorp",
    "Palo Alto Networks Certified", "Palo Alto Networks", "Palo Alto",
    "CrowdStrike Certified", "CrowdStrike",
    "Atlassian Certified", "Atlassian",
    "MuleSoft Certified", "MuleSoft",
    "Fortinet Certified", "Fortinet",
    "Check Point Certified", "Check Point",
    "F5 Certified", "F5",
    "NetApp Certified", "NetApp",
    "Pure Storage Certified", "Pure Storage",
    "Veeam Certified", "Veeam",
    "Nutanix Certified", "Nutanix",
    "Okta Certified", "Okta",
    "CyberArk Certified", "CyberArk",
    "SnowPro", "Snowflake",
    "Databricks Certified", "Databricks",
    "Splunk Certified", "Splunk",
    "Aruba Certified", "Aruba", "HPE Aruba", "HPE",
    "Arista Certified", "Arista",
    "SailPoint Certified", "SailPoint",
    "Cloudflare Certified", "Cloudflare",
    "SentinelOne Certified", "SentinelOne",
    "Zscaler Certified", "Zscaler",
    "Akamai Certified", "Akamai",
    "Workday Certified", "Workday",
    "Adobe Certified", "Adobe",
    "ServiceNow Certified", "ServiceNow",
    "SAP Certified", "SAP",
    "Juniper Certified", "Juniper",
    "HIMSS",
    "Epic Certified", "Epic",
]

def strip_vendor_prefix(name):
    n = name.strip()
    for pref in VENDOR_PREFIXES:
        if re.match(rf"^{re.escape(pref)}\b\s*[:\-]?\s*", n, re.IGNORECASE):
            stripped = re.sub(rf"^{re.escape(pref)}\b\s*[:\-]?\s*", "", n, flags=re.IGNORECASE).strip()
            # If stripping killed ALL cert hints, prepend "Certified" back so the cert is recognizable
            if "certif" in pref.lower() and not CERT_HINTS_IN_NAME.search(stripped):
                stripped = "Certified " + stripped
            n = stripped
            break
    return n.strip(" :-—–\"'")

def clean_cert_name(name):
    """Final cleanup of cert name: strip code parenthetical and trailing prose-em-dash."""
    n = name
    # strip leading numbering: "5. ", "5.3 ", "5.3.1 ", "(1) "
    n = re.sub(r"^\d+(?:\.\d+)*\.?\s+", "", n).strip()
    n = re.sub(r"^\(\d+\)\s+", "", n).strip()
    n = re.sub(r"\*+", "", n).strip()
    # remove trailing em-dash + prose ("— The Entry Point")
    if " — " in n:
        head, tail = n.split(" — ", 1)
        # if tail is short prose (no exam-code prefix), drop it
        if not re.search(r"^\s*[A-Z]{2,5}-?\d", tail) and not re.search(r"^\s*\d{3}-\d{3}", tail):
            n = head.strip()
    if " – " in n:
        head, tail = n.split(" – ", 1)
        if not re.search(r"^\s*[A-Z]{2,5}-?\d", tail) and not re.search(r"^\s*\d{3}-\d{3}", tail):
            # only drop if tail is descriptive (not a sub-name)
            if len(tail.split()) > 4 and re.search(r"\s(the|an?|for|with|to)\s", tail, re.I):
                n = head.strip()
    # Strip prose-like parentheticals: "(New in February 2026)", "(Launched March 19, 2026)", "(2026)", etc.
    n = re.sub(r"\s*\((?:New|Launched|Released|Beta|Coming|Effective|Available)\b[^)]*\)", "", n).strip()
    n = re.sub(r"\s*\(20\d{2}\)\s*", " ", n).strip()
    n = re.sub(r"\s*\(emerging\)\s*", " ", n, flags=re.I).strip()
    # Strip trailing " – CODE" / " - CODE" / " — CODE"
    n = re.sub(r"\s+[–—-]\s+\d{3}-\d{3,4}\s*$", "", n).strip()
    # Strip trailing "[RETIRING ...]" / "[RETIRED ...]" annotations
    n = re.sub(r"\s*\[(RETIRING|RETIRED|UPDATING|REPLACEMENT|VERIFY)[^\]]*\]\s*", "", n, flags=re.IGNORECASE).strip()
    # Strip trailing "(Retired, ...)" annotations
    n = re.sub(r"\s*\((Retired|Retiring|Replaced|Replacement|Successor)[^)]*\)\s*$", "", n, flags=re.IGNORECASE).strip()
    # Strip "(CODE)" parenthetical only when CODE-like, but only in heading/raw form
    # (Keep e.g. "(SAA-C03)" since that's the code; we extract code separately, but
    #  the existing JSON kept code in name. Per spec, we PRESERVE platform/version detail.
    #  Drop only obvious code parens when name has a stronger primary id.)
    n = re.sub(r"\s{2,}", " ", n).strip(" :-—–\"'")
    return n

# ---------- Tier classification ----------
def section_tier_from_heading(heading):
    """Return tier ONLY when heading explicitly demarcates a cert tier section."""
    h = heading.lower().strip(" :-—–")
    # Plain tier label
    if h in ("entry", "foundational", "foundation", "fundamentals"):
        return "Entry"
    if h in ("associate",):
        return "Associate"
    if h in ("professional", "specialist", "specialists", "specialty"):
        return "Professional"
    if h in ("expert", "architect"):
        return "Expert"
    # "X Tier" / "X Level" / "X Track"
    m = re.match(r"^(entry|foundational?|fundamentals|associate|professional|specialist|specialty|expert|architect)\s+(tier|level|track|certifications?|exams?)\b", h)
    if m:
        t = m.group(1)
        if t in ("entry", "foundational", "foundation", "fundamentals"): return "Entry"
        if t == "associate": return "Associate"
        if t in ("professional", "specialist", "specialty"): return "Professional"
        if t in ("expert", "architect"): return "Expert"
    # Sections like "Entry Level: CCST" / "Associate Level: CCNA"
    m = re.match(r"^(entry|foundational?|associate|professional|specialty|specialist|expert)\s+(level|tier)\s*:", h)
    if m:
        t = m.group(1)
        if t in ("entry", "foundational"): return "Entry"
        if t == "associate": return "Associate"
        if t in ("professional", "specialist", "specialty"): return "Professional"
        if t == "expert": return "Expert"
    # Cisco / Juniper family-level
    if h in ("ccst",):
        return "Entry"
    if h in ("ccna",):
        return "Associate"
    if h in ("ccnp",):
        return "Professional"
    if h in ("ccie", "ccde"):
        return "Expert"
    return None

EXPERT_NAME_KEYWORDS = re.compile(
    r"\b(Expert|Architect|CCIE|JNCIE|CCDE|Master|Distinguished|Principal|"
    r"Advanced Architect|Solution Architect Expert|"
    r"CMA|CTA|Designated Expert|VCDX)\b", re.I)
PROF_NAME_KEYWORDS = re.compile(
    r"\b(Professional|CCNP|JNCIP|Specialty|Specialist)\b", re.I)
ASSOC_NAME_KEYWORDS = re.compile(
    r"\b(Associate|CCNA|JNCIA|JNCIS|Administrator|Implementer)\b", re.I)
ENTRY_NAME_KEYWORDS = re.compile(
    r"\b(Foundational|Fundamentals|Practitioner|CCST|Foundation|"
    r"Advocate|Entry|Aware|Introduction|Cloud Practitioner|AI Practitioner)\b", re.I)

def classify_by_name(name):
    if EXPERT_NAME_KEYWORDS.search(name):
        return "Expert"
    if ENTRY_NAME_KEYWORDS.search(name):
        return "Entry"
    if PROF_NAME_KEYWORDS.search(name):
        return "Professional"
    if ASSOC_NAME_KEYWORDS.search(name):
        return "Associate"
    return None

def final_tier(name, section_tier):
    """Combine signals. Cert NAME with explicit tier keyword is authoritative;
    section tier only fills in when name has no tier keyword."""
    name_tier = classify_by_name(name)
    if name_tier:
        return name_tier
    return section_tier or "Associate"

# ---------- Status normalization ----------
def normalize_status(s):
    if not s: return None
    s_low = s.lower()
    if "retired" in s_low and "retiring" not in s_low and "no longer" in s_low or s_low.strip() == "retired":
        return "retired"
    if re.match(r"^\s*retired\b", s_low):
        return "retired"
    if "retiring" in s_low or "retire" in s_low:
        return "retiring"
    if "beta" in s_low:
        return "beta"
    if "active" in s_low:
        return "active"
    if "new" in s_low and len(s_low) < 30:
        return "new"
    return None

# ---------- Attribute extraction (bold pairs / inline pipes) ----------
ATTR_KEYS = {
    "duration": [r"^Duration$", r"^Length$", r"^Test Duration$", r"^Exam Length$", r"^Exam Duration$"],
    "questions": [r"^Questions?$", r"^# of Questions$", r"^Number of Questions$", r"^Format$"],
    "passingScore": [r"^Passing\s*Score$", r"^Pass\s*Score$", r"^Passing$"],
    "cost": [r"^Cost$", r"^Fee$", r"^Exam Fee$", r"^Price$", r"^Exam Cost$", r"^Exam Price$"],
    "validity": [r"^Validity$", r"^Valid$", r"^Recertification$", r"^Validity Period$",
                 r"^Certification Validity$", r"^Renewal$"],
    "retirementDate": [r"^Retirement Date$", r"^Retires$", r"^Retiring$", r"^Retirement$"],
    "examGuideUrl": [r"^Exam Guide$", r"^Study Guide$", r"^Blueprint$", r"^Exam Blueprint$"],
    "url": [r"^Official URL$", r"^Exam URL$", r"^Official Portal$", r"^URL$",
            r"^Certification URL$", r"^Link$", r"^Official Link$"],
    "status": [r"^Status$"],
    "prepTime": [r"^Prep Time$", r"^Recommended Prep$", r"^Preparation Time$",
                 r"^Study Time$", r"^Recommended Study Time$"],
}

def match_field(key):
    klow = key.strip().lower()
    for field, pats in ATTR_KEYS.items():
        for p in pats:
            if re.match(p, key.strip(), re.IGNORECASE):
                return field
    return None

def extract_attrs(content):
    attrs = {}

    # collect bold pairs (multiple variants)
    pairs = []
    # bullet: - **Key:** value  OR  - **Key**: value
    for m in re.finditer(r"^[-*]\s+\*\*([^*\n]+?)\*\*\s*[:\-]\s*([^\n]+)", content, re.MULTILINE):
        pairs.append((m.group(1).strip().rstrip(":"), m.group(2).strip()))
    # standalone: **Key:** value
    for m in re.finditer(r"(?<!\*)\*\*([^*\n]+?)\*\*\s*[:\-]\s*([^\n*]+)", content):
        pairs.append((m.group(1).strip().rstrip(":"), m.group(2).strip()))
    # inline-pipe: **Exam**: JN0-105 | **Cost**: $100
    for m in re.finditer(r"\*\*([^*|\n]+?)\*\*\s*[:\-]\s*([^|*\n]+?)(?=\s*\||\s*\n|$)", content):
        pairs.append((m.group(1).strip().rstrip(":"), m.group(2).strip().rstrip("|").strip()))

    for k, v in pairs:
        v = v.strip()
        field = match_field(k)
        if field and field not in attrs:
            if field in ("url", "examGuideUrl"):
                u = first_url(v)
                if u: attrs[field] = u
            elif field == "status":
                st = normalize_status(v)
                if st: attrs[field] = st
            elif field == "retirementDate":
                m = re.search(r"(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s+\d{4}", v)
                if m: attrs[field] = m.group(0)
                elif re.match(r"\d{4}-\d{2}-\d{2}", v): attrs[field] = v[:10]
                else: attrs[field] = v[:80]
            else:
                attrs[field] = v[:200].rstrip(" .,")

    # status from prose
    if "status" not in attrs:
        head = content[:600].lower()
        if "no longer available" in head or re.search(r"\bretired\b", head[:200]):
            attrs["status"] = "retired"
        elif re.search(r"\bretir(?:ing|es)\b", head):
            attrs["status"] = "retiring"
        elif "beta" in head[:200]:
            attrs["status"] = "beta"
        else:
            attrs["status"] = "active"

    # url from any link
    if "url" not in attrs:
        for label, url in LINK_RE.findall(content[:2000]):
            ll = (label + " " + url).lower()
            if any(k in url.lower() for k in ["certification", "/exams/", "credentials", "education.oracle", "training", "/cert/", "skillbuilder", "credly"]):
                attrs["url"] = url
                break

    # exam guide
    if "examGuideUrl" not in attrs:
        for label, url in LINK_RE.findall(content[:3000]):
            if "study-guide" in url.lower() or "exam-guide" in url.lower() or "blueprint" in (label + url).lower():
                attrs["examGuideUrl"] = url
                break

    # topics
    topic_match = re.search(
        r"\*\*(?:Topics Covered|Content Domains|Core Topics|Skill Domains|Domains|Skills Measured|Topics|Exam Topics|Coverage|Content)[^\*\n]{0,30}\*\*\s*[:\-]?\s*\n((?:\s*[-*]\s+[^\n]+\n?)+)",
        content, re.IGNORECASE,
    )
    if topic_match:
        bullets = re.findall(r"^[-*]\s+(.+?)$", topic_match.group(1), re.MULTILINE)
        topics = [re.sub(r"\*+", "", b).strip(" -–—") for b in bullets if b.strip()]
        topics = [t for t in topics if 2 < len(t) < 200]
        if topics:
            attrs["topics"] = topics[:12]

    # rationale: first plain paragraph (1-2 sentences)
    for blk in re.split(r"\n\s*\n", content):
        b = blk.strip()
        if not b: continue
        if b.startswith(("-", "*", "#", "|", ">")):
            continue
        if b.startswith("**") and b.count("**") >= 2 and b.split("**")[2].strip().startswith((":", "-")):
            continue
        # strip bold/italic markers
        plain = re.sub(r"\*+", "", b).strip()
        # skip if mostly key:value lines
        if plain.count(":") > 3 and len(plain) < 200:
            continue
        if 50 < len(plain) < 400:
            sentences = re.split(r"(?<=[.!?])\s+", plain)
            r = " ".join(sentences[:2]).strip()
            if 30 < len(r) < 400 and not r.lower().startswith(("status", "exam code", "duration", "cost", "fee", "questions", "passing", "validity")):
                attrs["rationale"] = r
                break

    return attrs

# ---------- Section walker ----------
H_RE = re.compile(r"^(#{2,6})\s+(.*?)\s*$", re.MULTILINE)

def split_sections(body):
    matches = list(H_RE.finditer(body))
    out = []
    for i, m in enumerate(matches):
        level = len(m.group(1))
        heading = m.group(2).strip().rstrip("#").strip()
        start = m.end()
        end = matches[i+1].start() if i + 1 < len(matches) else len(body)
        out.append((level, heading, body[start:end]))
    return out

# ---------- Detect cert candidates within a section ----------

# Bold-paragraph cert lead:
#   "**Aruba Certified Professional – Campus Access (ACP)**"
#   "1. **Splunk Core Certified User (SPLK-1001)**"
#   "- **Splunk Enterprise Security Certified Admin (SESCA)**"
BOLD_CERT_LEAD = re.compile(
    r"^(?:\d+\.\s+|[-*]\s+)?\*\*([^*\n]+?)\*\*\s*(?:—.*)?$",
    re.MULTILINE,
)

# Table row with bold first cell: "| **NGFW Engineer** (replaces PCNSE) | NGFWE | 90 min | $250 | ... | Active |"
TABLE_ROW = re.compile(r"^\|\s*(.+?)\s*\|.*\|\s*$", re.MULTILINE)

# STRONG cert indicators — must include a credential abbreviation,
# the word Certified/Certification, or a tier word (Associate/Professional/Expert/...).
# But to be a cert it also needs to avoid the GENERIC_SECTION/REJECT lists.
CERT_HINTS_IN_NAME = re.compile(
    r"(Certified|Certification|"
    r"Associate|Professional|Specialist|Specialty|Expert|Architect|Practitioner|"
    r"Fundamentals|Foundational|Foundation|Advocate|Master|"
    r"Consultant|Implementer|Designer|Accredited|Pro\s+\w+\s+(Consultant|Developer|Specialist|Administrator)|"
    r"Cloud Practitioner|AI Practitioner|"
    r"CCNA|CCNP|CCIE|CCST|CCDE|CCDA|CCDP|"
    r"JNCIA|JNCIS|JNCIP|JNCIE|"
    r"PCNSA|PCNSE|PCCET|PCSFE|PCCSE|PCSAE|PCDRA|"
    r"NSE\s?\d|NGFW\s+Engineer|XSIAM\s+\w+|XSOAR\s+\w+|XDR\s+(Analyst|Engineer)|"
    r"OCA|OCP|OCM|"
    r"CKA|CKAD|CKS|"
    r"VCP|VCAP|VCDX|"
    r"FCP|FCSS|FCX|FCNSP|"
    r"NACE|NACP|"
    r"SnowPro|"
    r"ACP|ACMA|ACA|ACMX|ACE|"
    r"MCSA|MCSE|MCSD|"
    r"AZ-\d|MS-\d|PL-\d|MB-\d|DP-\d|SC-\d|AI-\d|MD-\d|MO-\d|AB-\d|"
    r"CLF-C|SAA-C|SAP-C|DOP-C|SOA-C|DVA-C|DAS-C|MLS-C|SCS-C|ANS-C|DBS-C|AIF-C|MLA-C|"
    r"JN0-|HPE\d|"
    r"(?:200|300|350|400|500|600|700|800|820|100|150|140|160)-\d{3,4}"
    r")", re.I)

TIER_ONLY_NAMES = {
    "foundational", "fundamentals", "associate", "professional",
    "specialist", "specialists", "specialty", "expert", "architect",
    "entry", "intermediate", "advanced", "foundation",
    "foundational tier", "associate tier", "professional tier",
    "specialty tier", "expert tier",
    "foundational level", "associate level", "professional level",
    "specialty level", "expert level", "architect level",
    "entry level", "intermediate level", "advanced level",
    "foundational track", "associate track", "professional track",
    "specialty track", "expert track",
    "specialist tier", "specialist level", "specialist track",
    # generic / role labels
    "skills", "skill domains", "skill paths", "skill path",
    "career path", "career paths", "career roles",
    "salary", "salary benchmarks", "salary premium",
    "learning", "learning resources",
    "cloud engineer", "network engineer", "security engineer",
    "data engineer", "soc analyst", "junior cloud engineer",
}

ROLE_TITLE_PATTERN = re.compile(
    r"^(Cloud|Network|Security|Software|Data|Site\s+Reliability|DevOps|Platform|Database)\s+"
    r"(Engineer|Architect|Analyst|Developer|Specialist|Administrator|Technician)"
    r"\s*(/.*)?$", re.I)

def looks_like_cert_name(s):
    if not s: return False
    if is_rejected_name(s): return False
    sl = s.lower().strip(" :-–—.")
    if sl in TIER_ONLY_NAMES:
        return False
    # Pure role titles "Cloud Engineer" / "SOC Analyst" without "Certified" / cert code
    if ROLE_TITLE_PATTERN.match(s) and not find_code(s) and "certifi" not in sl:
        return False
    # "Certification X" / "X Certification" — generic family/meta sections
    if re.match(r"^Certification\s+(Levels?|Renewals?|Study|Updates?|Launch|Maturity|Simplification|Tracks?|Stack|Path|Structure|Validity|Recertification|Timeline)\b", s, re.I):
        return False
    if re.search(r"\bCertification\s+(Launch|Maturity|Updates?|Simplification|Renewal|Path|Stack)\b", s, re.I):
        return False
    if not CERT_HINTS_IN_NAME.search(s):
        # Allow names with code like JN0-105, CLF-C02 even without keyword
        if not find_code(s):
            return False
    return True

def parse_table(content):
    """Yield (cert_name_raw, row_text) for each table row whose first cell looks like a cert."""
    lines = content.split("\n")
    in_table = False
    headers = []
    for line in lines:
        if line.strip().startswith("|"):
            cells = [c.strip() for c in line.strip().strip("|").split("|")]
            if all(re.match(r"^:?-+:?$", c) for c in cells):  # separator row
                in_table = True
                continue
            if not in_table:
                headers = cells
                continue
            if not cells: continue
            first = cells[0]
            # strip bold
            first_clean = re.sub(r"\*+", "", first).strip()
            if first_clean.lower() in ("details", "—", "-", ""):
                continue
            yield first_clean, cells, headers
        else:
            if in_table and line.strip() == "":
                continue
            in_table = False
            headers = []

def attrs_from_table_row(cells, headers):
    """Map known header columns to attributes."""
    a = {}
    for hdr, val in zip(headers, cells[1:] if len(cells) == len(headers) else cells):
        h = hdr.strip("* ").lower()
        v = val.strip("* ").strip()
        if not v or v in ("—", "-", ""):
            continue
        if "exam" in h and "code" not in h and len(v) < 30 and "-" in v:
            a.setdefault("code", v)
        if h in ("exam", "exam code", "code"):
            if re.match(r"^[A-Z0-9-]{3,15}$", v):
                a.setdefault("code", v)
        if h in ("duration", "length"):
            a.setdefault("duration", v)
        if h in ("cost", "fee", "price"):
            a.setdefault("cost", v)
        if h in ("status",):
            st = normalize_status(v)
            if st: a.setdefault("status", st)
        if h in ("validity", "valid"):
            a.setdefault("validity", v)
        if h in ("questions",):
            a.setdefault("questions", v)
        if h in ("passing", "passing score", "pass score"):
            a.setdefault("passingScore", v)
    return a

# ---------- Per-file build ----------
VENDOR_KEY_OVERRIDE = {
    "D01": "Microsoft", "D02": "Oracle", "D03": "Epic", "D04": "AWS",
    "D05": "Microsoft", "D06": "Workday", "D07": "Adobe", "D08": "Multi",
    "D09": "Salesforce", "D10": "SAP", "D11": "ServiceNow", "D12": "IBM",
    "D13": "VMware", "D14": "Cisco", "D15": "Juniper", "D16": "HashiCorp",
    "D17": "Palo Alto Networks", "D18": "CrowdStrike", "D19": "Atlassian",
    "D20": "MuleSoft", "D21": "Fortinet", "D22": "Check Point", "D23": "F5",
    "D24": "NetApp", "D25": "Pure Storage", "D26": "Veeam", "D27": "Nutanix",
    "D28": "Okta", "D29": "CyberArk", "D30": "Snowflake", "D31": "Databricks",
    "D32": "Splunk", "D33": "Aruba", "D34": "Arista", "D35": "SailPoint",
    "D36": "Cloudflare", "D37": "SentinelOne", "D38": "Zscaler", "D39": "Akamai",
}

def detect_vendor(eco_vendor_key, heading, content, name):
    """Determine vendor for a cert (esp. multi-vendor ecosystems)."""
    if eco_vendor_key == "Multi":
        # observability platforms: Datadog/Splunk/Dynatrace/New Relic/Grafana/Elastic
        ctx = (heading + " " + content[:500] + " " + name).lower()
        for v in ["datadog", "splunk", "dynatrace", "new relic", "grafana", "elastic", "honeycomb", "chronosphere", "lightstep", "appdynamics", "zabbix", "prometheus"]:
            if v in ctx:
                return v.title() if v != "new relic" else "New Relic"
    if eco_vendor_key == "Epic":
        ctx = (heading + " " + content[:500] + " " + name).lower()
        if "himss" in ctx: return "HIMSS"
        if "ahima" in ctx: return "AHIMA"
        if "cerner" in ctx or "oracle health" in ctx: return "Oracle Health"
        if "epic" in ctx: return "Epic"
        if "meditech" in ctx: return "Meditech"
        if "athenahealth" in ctx: return "athenahealth"
    return eco_vendor_key

def build_ecosystem(md_path):
    text = md_path.read_text(encoding="utf-8", errors="replace")
    fm, body = parse_frontmatter(text)
    code = fm.get("code", md_path.stem.split("_")[0])
    slug = fm.get("slug") or md_path.stem.lower().replace("_", "-")
    title = fm.get("title", md_path.stem.replace("_", " "))
    vendors = fm.get("vendors", [])
    vendor_key = VENDOR_KEY_OVERRIDE.get(code) or (vendors[0] if vendors else "Unknown")

    blurb = None
    bm = re.search(
        r"##+\s*(?:Executive Summary|Overview|Introduction)[^\n]*\n+([^\n#].+?)(?=\n\n|\n#)",
        body, re.IGNORECASE | re.DOTALL)
    if bm:
        blurb = re.sub(r"\s+", " ", bm.group(1)).strip()
        if len(blurb) > 600:
            blurb = blurb[:600].rstrip() + "..."

    certs_by_tier = {"Entry": [], "Associate": [], "Professional": [], "Expert": []}
    seen = set()
    sections = split_sections(body)

    # Active section-tier hint propagates downward
    current_section_tier = None

    # Must match the H2 heading EXACTLY (or contain a strong skip phrase)
    SKIP_SECTION_PHRASES = (
        "salary benchmark", "salary range", "career path", "career role",
        "career progression", "career pivot", "career transition",
        "career fit", "compensation",
        "career professional", "for career", "for soc", "for security",
        "for solutions", "for existing", "for new", "for junior",
        "for mid", "for senior",
        "learning resource", "training resource", "free resource", "paid resource",
        "third-party training", "useful resource",
        "communities", "events", "conferences", "user group",
        "competitive landscape", "competitive comparison",
        "south african context", "regional",
        "exam administration", "exam policy", "exam delivery",
        "table of contents", "contents",
        "executive summary",
        "key 2026 changes", "2026 updates", "2026 strategic roadmap",
        "deal closure", "doj settlement", "strategic rationale",
        "post-merger", "acquisition & strategic", "transaction details",
        "background", "history",
        "product portfolio", "product ecosystem",
        "products & portfolio", "products and portfolio",
        "products", "platform & products", "core platform", "ecosystem",
        "future direction", "future outlook", "product roadmap",
        "company metrics", "market position",
        "for soc", "for solutions", "for security engineer",
        "for existing",
        "appendix", "glossary",
        "sources",
        "renewal & recertification",
        "framework overview",
        "official splunk training",
    )
    SKIP_EXACT_HEADINGS = {
        "overview", "introduction", "context", "scope",
        "why this matters", "what's new",
    }

    def section_is_skip(heading, level):
        h = heading.lower().strip(" :-—–")
        if h in SKIP_EXACT_HEADINGS:
            return True
        if any(k in h for k in SKIP_SECTION_PHRASES):
            return True
        # H3 inside a non-cert context: rare; rely on per-name filters
        return False

    skip_until_level = None  # if set, skip all sections deeper than this level

    for level, heading, content in sections:
        # If we're inside a skipped H2/H3 ancestor, skip until we exit it
        if skip_until_level is not None:
            if level > skip_until_level:
                continue
            else:
                skip_until_level = None

        if section_is_skip(heading, level):
            current_section_tier = None
            skip_until_level = level
            continue

        # reset tier hint at every H2 boundary
        if level == 2:
            current_section_tier = None

        # update tier hint
        st = section_tier_from_heading(heading)
        if st:
            current_section_tier = st

        # Candidates from this section
        candidates = []  # list of (raw_name, attrs_extra)

        # 1. Heading-as-cert (H3+)
        if level >= 3:
            h_clean = re.sub(r"^\d+\.\s+", "", heading).strip().rstrip("#").strip()
            # remove markdown anchors
            h_clean = re.sub(r"\[([^\]]+)\]\([^\)]+\)", r"\1", h_clean)
            if looks_like_cert_name(h_clean):
                candidates.append(("HEADING", h_clean, {}))

        # 2. Bold-paragraph leads on a line by itself
        # but only if section is plausibly a cert section (has content below)
        for m in BOLD_CERT_LEAD.finditer(content):
            name = m.group(1).strip()
            # skip pure attribute lines like "**Tiers:**" or "**Status**"
            if name.endswith(":") or name in ("Tiers", "Tracks", "Status", "Active"):
                continue
            if looks_like_cert_name(name):
                # Get the chunk of content that follows this bold lead until the next bold lead
                start = m.end()
                next_m = BOLD_CERT_LEAD.search(content, start)
                end = next_m.start() if next_m else len(content)
                chunk = content[start:end]
                # but cut off at next heading marker or blank-blank (handled by section split)
                candidates.append(("BOLD", name, {"_chunk": chunk}))

        # 3. Table rows
        for first, cells, headers in parse_table(content):
            if looks_like_cert_name(first):
                a = attrs_from_table_row(cells, headers)
                # Also try to find code in cell
                if "code" not in a:
                    c = find_code(" ".join(cells))
                    if c: a["code"] = c
                a["_is_table"] = True
                candidates.append(("TABLE", first, a))

        # Process candidates
        section_attrs = extract_attrs(content)  # heading-section overall attrs

        for source, raw_name, extra in candidates:
            chunk = extra.pop("_chunk", None)
            local_attrs = {}
            if chunk:
                local_attrs = extract_attrs(chunk)
            elif source == "HEADING":
                local_attrs = section_attrs
            elif source == "TABLE":
                local_attrs = {k: v for k, v in extra.items() if not k.startswith("_")}

            # Code: check raw_name first, then chunk/section content
            display_name = clean_cert_name(raw_name)
            display_name = strip_vendor_prefix(display_name)
            display_name = clean_cert_name(display_name)

            if is_rejected_name(display_name):
                continue
            if len(display_name) < 3:
                continue

            cert_code = find_code(raw_name) or local_attrs.get("code") or extra.get("code")
            if not cert_code and chunk:
                cert_code = find_code(chunk[:400])
            if not cert_code and source == "HEADING":
                cert_code = find_code(content[:500])

            vendor = detect_vendor(vendor_key, heading, chunk or content, raw_name)

            cert = {"vendor": vendor, "name": display_name}
            if cert_code:
                cert["code"] = cert_code
            for k in ("status", "url", "examGuideUrl", "cost", "duration",
                      "questions", "passingScore", "validity", "retirementDate",
                      "topics", "prepTime", "rationale"):
                if k in local_attrs:
                    cert[k] = local_attrs[k]
            # Table row attrs override blanks
            if source == "TABLE":
                for k in ("cost", "duration", "questions", "passingScore", "validity", "status", "url"):
                    if k in extra and k not in cert:
                        cert[k] = extra[k]

            tier = final_tier(display_name, current_section_tier)
            # Normalized dedupe key — strip parentheticals first, then non-alphanumerics
            base = re.sub(r"\([^)]*\)", "", display_name)
            norm = re.sub(r"[^a-z0-9]", "", base.lower())
            if norm in seen:
                continue
            # Code-key dedupe ONLY when code is a specific exam code (has a digit)
            if cert_code and re.search(r"\d", cert_code):
                code_key = "code:" + re.sub(r"[^a-z0-9]", "", cert_code.lower())
                if code_key in seen:
                    continue
                seen.add(code_key)
            seen.add(norm)
            certs_by_tier[tier].append(cert)

    # Finalize
    levels = []
    total = 0
    for t in ("Entry", "Associate", "Professional", "Expert"):
        levels.append({"level": t, "certs": certs_by_tier[t]})
        total += len(certs_by_tier[t])

    out = {
        "id": slug,
        "name": title,
        "vendorKey": vendor_key,
        "sourceFile": md_path.name,
        "totalCerts": total,
        "levels": levels,
    }
    if blurb:
        out["blurb"] = blurb
    return out

# ---------- Main ----------
def main():
    files = sorted(SRC_DIR.glob("D*.md"))
    target = []
    for f in files:
        m = re.match(r"D(\d{2})_", f.name)
        if m and 1 <= int(m.group(1)) <= 39:
            target.append(f)
    target.sort(key=lambda p: int(re.match(r"D(\d{2})_", p.name).group(1)))

    out = OrderedDict()
    for f in target:
        eco = build_ecosystem(f)
        out[eco["id"]] = eco

    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUT_PATH.write_text(json.dumps(out, indent=2, ensure_ascii=False), encoding="utf-8")

    total = sum(e["totalCerts"] for e in out.values())
    tier_counts = {"Entry": 0, "Associate": 0, "Professional": 0, "Expert": 0}
    for e in out.values():
        for lvl in e["levels"]:
            tier_counts[lvl["level"]] += len(lvl["certs"])
    print(f"Ecosystems: {len(out)}")
    print(f"Total certs: {total}")
    print(f"Tiers: {tier_counts}")
    sorted_eco = sorted(out.values(), key=lambda e: -e["totalCerts"])
    print("Top 5:")
    for e in sorted_eco[:5]:
        print(f"  {e['vendorKey']} ({e['sourceFile']}): {e['totalCerts']}")
    print("Bottom 5:")
    for e in sorted_eco[-5:]:
        print(f"  {e['vendorKey']} ({e['sourceFile']}): {e['totalCerts']}")

if __name__ == "__main__":
    main()
