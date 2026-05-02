# IT Career Roadmap Platform — Build Documentation

**Last updated:** April 30, 2026
**Location:** `H:\IT rodmap Blog\` (mirrored from `C:\Users\impie\OneDrive\Documents\Claude\Projects\IT Roademap\`)

A self-contained career-identification platform for IT professionals. Modeled on the Paul Jerimy Security Roadmap, but spanning all of IT — 12 domains, 9 specialty ecosystems, 250+ verified certifications, 50+ detailed career-transition guides, plus a starting-point quiz and an interactive visual flow diagram.

---

## What's in this folder

### Interactive HTML pages (open in any browser)

| File | Purpose | Size |
|------|---------|------|
| **`index.html`** | Homepage hub. 3-question starting-point quiz routes new users to the right column / track based on their background, interests, and priorities. 5 hub cards link to all other pages. | ~18 KB |
| **`IT_Roadmap.html`** | The cert matrix. 12 main domains × 4 levels, plus 3 SaaS ecosystems (Salesforce / SAP / ServiceNow) and 6 hardware/infra ecosystems (Firewall / Switch-Router / Storage-Backup / Hypervisor / SIEM-SOC / Wireless-SD-WAN). Click any cert chip for skills, courses, jobs, source URL. | ~150 KB |
| **`IT_Career_Paths.html`** | The career transitions page. 14 tracks, 50+ transition cards. Each card has signal-you're-ready, skill gap, bridge certs, books, soft skills, failure modes, first 90 days, salary delta. | ~110 KB |
| **`IT_Career_Flow.html`** | Visual flow diagram. SVG node-link graph with 40+ roles as nodes and ~35 transitions as arrows. Click any arrow → transition detail. Click any role → role info. | ~21 KB |
| **`IT_Role_Profiles.html`** | Per-role profile cards. AI-impact rating (Resilient / Mixed / At-risk) with reasoning, remote-friendliness, top industries, "what you actually do" daily-rhythm description, "bad day" snippets. Entry-level roles include first-job mechanics: portfolio templates, resume tips, interview format, where to apply, first 90 days. | ~30 KB |
| **`IT_Career_Changers.html`** | Entry into IT from 10 common non-IT backgrounds: teacher, military veteran, healthcare pro, accountant, retail manager, trades, customer service, recent non-CS graduate, career returner, bootcamp grad. Per-background: best entry roles, transferable skills, realistic timeline + first cert, pay reality, hiring concerns, free learning resources, real success stories. | ~26 KB |

### Research markdown files (research that informed the design — not linked from the pages)

| File | Topic |
|------|-------|
| `00_master_index.md` | Index to the 13 research files |
| `01_gap_audit_and_missing_domains.md` | What v1 missed; recommendations for v2 |
| `02_software_engineering_domain.md` | Backend / frontend / mobile / game / embedded |
| `03_specialty_ecosystems.md` | Salesforce, SAP, ServiceNow, Oracle, Workday, Dynamics, Adobe |
| `04_qa_testing_sdet.md` | QA-to-SDET evolution, ISTQB, AI testing |
| `05_hardware_datacenter_telecom.md` | BICSI, Uptime Institute, IBM Z, fiber/RAN/5G |
| `06_adjacent_career_lanes.md` | Sales Engineer, DevRel, TPM, Tech Writer, OSS Maintainer |
| `07_privacy_forensics_niches.md` | IAPP CIPP, DFIR (GCFA/GCFE/GREM), threat intel, AppSec, ICS/OT |
| `08_university_academic_resources.md` | MIT, CS50, Stanford, CMU, Berkeley free CS courses |
| `09_government_standards_resources.md` | NIST, CIS, ENISA, ISO/IEC, MITRE ATT&CK, OWASP, NCSC |
| `10_engineering_blogs.md` | 120+ vendor + indie engineering blogs |
| `11_books_compendium.md` | 118 essential IT books across 13 categories |
| `12_podcasts_newsletters_conferences.md` | 40+ podcasts, 30+ newsletters, 70+ conferences |
| `13_youtube_and_paid_courses.md` | YouTube channels + paid platforms (Pluralsight, CBT Nuggets, etc.) |

---

## How the pages relate

```
                          ┌────────────────────┐
                          │    index.html      │  ← LANDING PAGE
                          │  Starting-point    │     - 3-question quiz
                          │      quiz          │     - Routes to columns/tracks
                          │   + 5 hub cards    │     - Hub to all other pages
                          └─────────┬──────────┘
                                    │
        ┌──────────┬─────────┬──────┴───────┬──────────┬──────────┐
        ▼          ▼         ▼              ▼          ▼          ▼
   ┌─────────┐┌──────────┐┌──────────┐┌──────────┐┌──────────┐
   │IT_Road- ││IT_Career_││IT_Career_││IT_Role_  ││IT_Career_│
   │map.html ││Paths.html││Flow.html ││Profiles  ││Changers  │
   │         ││          ││          ││.html     ││.html     │
   │  CERT   ││ TRANSITION││ VISUAL   ││ ROLE     ││ CAREER   │
   │ MATRIX  ││ GUIDES    ││ FLOW     ││ PROFILES ││ CHANGERS │
   │         ││          ││ (SVG)    ││          ││          │
   │ where   ││ how to   ││ visual   ││ what you ││ enter IT │
   │ roles   ││ move     ││ map      ││ actually ││ from non-│
   │ sit     ││          ││          ││ do daily ││ IT bg    │
   └─────────┘└──────────┘└──────────┘└──────────┘└──────────┘
```

**The three pages are different views of the same career landscape:**

- **Matrix** = where roles sit (static reference). Best for: "what cert do I need for X?"
- **Career Paths** = how to move (transitional how-to). Best for: "I'm a sysadmin, how do I become a cloud engineer?"
- **Flow Diagram** = visual map (spatial overview). Best for: "show me the connections at a glance."

---

## What's actually in each page

### `index.html` — Starting-point quiz + hub

A 3-question wizard that routes users based on:

1. **Where you are right now**: New to IT / Career-changer / Early IT / Mid IT / Senior IC / Returner
2. **What kind of work energises you**: Systems / Code / Data / Security / People / Design / Customer-facing / Hardware
3. **What matters most**: Fast entry / AI-resilient / High pay / Remote / Stable / Impact

Output: Recommended columns to read on the matrix + recommended track to open on career paths + tailored advice paragraph.

### `IT_Roadmap.html` — The cert matrix

**12 main domain columns × 4 levels:**

| Column | Color | What it covers |
|--------|-------|----------------|
| Foundation | 🟢 green | Help Desk / IT Support entry tier |
| Networking | 🔵 sky | CCNA → CCNP → CCIE; routing/switching/wireless |
| Systems / OS | 🟣 purple | Linux, Windows Server, virtualisation |
| Cloud | 🔵 cyan | Azure, AWS, GCP, OCI |
| DevOps / Automation | 🟠 amber | CI/CD, IaC, K8s, SRE, platform |
| Security | 🔴 red | Defensive, offensive, GRC, cloud security |
| Identity & Endpoint | 🟡 yellow | AD, Entra, Intune, M365 |
| Data / AI | 🟢 emerald | DBs, BI, data eng, ML, LLMs |
| Architecture | 🔴 pink | Solutions / Cloud / Enterprise architecture |
| IT Mgmt / Governance | ⚫ slate | Service mgmt, project / program / audit |
| Software Eng | 🟠 orange | Backend / frontend / mobile / game / embedded |
| QA / SDET | 🔵 cyan | Quality eng — automation + SDET focus |

**3 SaaS specialty ecosystems** (separate mini-grid below the main matrix):
- Salesforce (Admin → Advanced Admin → Architect → CTA)
- SAP (S/4HANA cloud → Functional Consultant → Solution Architect → Enterprise Architect)
- ServiceNow (CSA + free CIS-DF → CAD → CIS-* → CTA → CMA)

**6 Hardware / Infrastructure specialty ecosystems** (third mini-grid):
- 🔴 Firewall Vendors (Palo Alto NGFW Engineer, Fortinet FCF/FCP/FCSS, Check Point CCSA/CCSE/CCSM R82, Cisco SCOR, F5)
- 🔵 Switch / Router Vendors (Juniper JNCIA→JNCIE, Aruba/HPE ACA→ACE, Arista ACE-A→ACE-L7, Mikrotik, Huawei HCIA→HCIE)
- 🟢 Storage / Backup (NetApp NCDA→NCSIE, Pure, Dell, Veeam VMCE→VMCSE, Commvault, Rubrik, Cohesity)
- 🟣 Hypervisor (VMware/Broadcom VCTA→VCDX, Nutanix NCA→NCX, Citrix CCA-V→CCE-V, Microsoft AZ-802, Red Hat OpenShift Virt EX316)
- 🔴 SIEM / SOC Platforms (Splunk Core→Architect, Microsoft SC-200/SC-100, CrowdStrike CCFA→CCFR→CCFH, Elastic, IBM QRadar, Google SecOps)
- 🔵 Wireless / SD-WAN (CWNP CWNA→CWNE, Aruba ACP-Campus, Mist JNCIA-MistAI, Cisco Meraki ECMS, Cisco Catalyst SD-WAN, Versa, Fortinet SD-WAN, Palo Alto Prisma)

**Click any cert chip → drawer opens with:**
- Vendor / cert name / code / status (active / retiring / beta / new)
- Note about the cert
- Link to the official cert page
- Key skills required at that level
- Recommended courses / labs (with URLs)
- Typical job titles at that level

**Filter / search:** Vendor filter (chips), full-text search across certs, skills, vendors.

### `IT_Career_Paths.html` — The career transitions

**14 tracks** (filter buttons across top):

1. **Operations** — Help Desk → Sysadmin → Senior Sysadmin → Infrastructure Engineer + Mainframe → Cloud
2. **Networking** — NOC → Net Eng → Senior → Network Architect + lateral pivots to Cloud Net Eng + Network Security Eng
3. **Cloud** — Sysadmin/Dev → Cloud Eng → Senior → Cloud Solutions Architect
4. **DevOps / SRE** — Sysadmin/Dev → DevOps → SRE → Platform Engineer
5. **Security** — SOC L1 → L2 → Sec Eng → Architect → CISO + Pentester + Privacy Eng + DFIR
6. **Data / AI** — Analyst → Data Eng → ML Eng / Data Architect / AI Eng / DBA → Data Eng / DE → CDO
7. **Architecture** — Senior Eng → SA → EA → Chief Architect (with the SA-vs-EA structural fork called out)
8. **IC → Manager** — Sr Eng → Tech Lead → EM → Director → VP/CTO + the Manager → IC return path
9. **IT Leadership** — Sr Sysadmin → IT Mgr → IT Director → CIO (separate from CTO ladder)
10. **PM / GRC** — Project Coordinator → PM → Program Manager → Portfolio + IT Auditor → Audit Mgr + GRC → CISO
11. **Software Eng** — Bootcamp → Junior → Mid → Senior → Staff → Principal / Distinguished
12. **QA / SDET** — Manual QA → Automation/SDET → Senior SDET → Test Architect → Director of Quality
13. **Ecosystems (SF / SAP / SN)** — Salesforce ladder, SAP Functional → Architect, ServiceNow CSA → CTA
14. **Adjacent Lanes** — Sales Engineer / DevRel / TPM / Technical Writer

**Each transition card has:**
- From → To with timeline pill (e.g., "12–18 months") and flag (LATERAL or FORK)
- One-line summary
- Click to expand → full detail
  - Signal you're ready (concrete behavioral signs)
  - Skill gap (5–10 specific things you're missing)
  - Bridge certifications (with URLs)
  - Essential books (with URLs)
  - Soft skills focus
  - Common failure modes
  - First 90 days plan
  - Salary delta (US) with source link

**Structural insights** (banners at the top of relevant tracks):
- IC vs Manager fork (compensation parity at modern tech orgs)
- Solutions Architect vs Enterprise Architect (structural difference)
- DevOps ≠ SRE ≠ Platform Engineering
- PM vs Program Manager vs Portfolio Manager (PMI definitions)
- CIO vs CTO vs CDO (different ladders)
- Specialty Ecosystems run on their own ladders
- Manual QA → Automation → SDET — the survival pivot
- Software Eng IC ladder (Staff/Principal pays equivalently to EM/Director)

### `IT_Career_Flow.html` — The visual flow diagram

**SVG-based interactive node-link graph:**

- 10 vertical lanes (one per major domain) — Operations, Networking, Systems, Cloud, DevOps, Security, Data, Software, Architecture, Manager
- 4 horizontal levels (Entry, Associate, Professional, Expert)
- 40+ role boxes positioned at intersections, color-coded by domain
- 35+ transition arrows:
  - 🔵 Solid blue lines = vertical (within domain)
  - 🟡 Yellow dashed = lateral (cross-domain pivot)
  - 🔴 Red solid = major fork (hard to reverse)

**Notable lateral connections drawn:**
- Sysadmin (Sr) → Cloud Engineer (Sr) — most common cloud entry
- Sysadmin (Sr) → DevOps Engineer
- Sysadmin (Sr) → Solutions Architect
- Network Eng (Sr) → Cloud Network Engineer (most under-appreciated)
- Mid Developer → DevOps Engineer
- Data Engineer → AI Engineer (the 2024+ role)
- **Mainframe → Cloud Solutions Architect** (highest-ROI pivot in IT 2026)
- Sec Engineer → Pentester / Red Team
- Help Desk T1 → NOC Tech

**Interactions:**
- Click any arrow → drawer with transition detail + link to full guide on Career Paths page
- Click any role node → drawer with role info + link to Cert Matrix + connections list
- ESC or backdrop click closes drawer

---

## Build history (chronological)

### Phase 1: Initial cert matrix (10 domains)

5 research agents in parallel did deep research per 2 domains each. Verification agent checked 34 specific cert codes / retirement dates. Built `IT_Roadmap.html` with 135 verified certifications across 10 domains × 4 levels. Tabs: Roadmap / Sources / About.

### Phase 2: Career transitions

10 research agents in parallel covered 10 career-path themes: Operations, Networking, Cloud, DevOps, Security, Data/AI, Architecture, Manager fork, IT Leadership, PM/GRC. Built `IT_Career_Paths.html` with 47 transition cards across 10 tracks.

### Phase 3: Deep research backing (13 .md files)

12 research agents in parallel produced thematic deep-dive markdown files: gap audit, software engineering, specialty ecosystems, QA/SDET, hardware/datacenter, adjacent lanes, privacy/forensics, university courses, government standards, engineering blogs, books compendium, podcasts/conferences, YouTube/paid courses. Total ~70,000 words.

### Phase 4: Roadmap design enrichment

Used the deep research to update the matrix and career paths:
- Added 2 new domain columns: Software Engineering, QA / SDET (12 columns total)
- Added Specialty Ecosystems mini-grid: Salesforce, SAP, ServiceNow
- Added 4 new career-path tracks: Software Eng, QA/SDET, Ecosystems, Adjacent Lanes
- Added 22 new transitions including Mainframe → Cloud, Sec Eng → Privacy Engineer, SOC → DFIR Analyst, Sr DE → CDO

### Phase 5: Hardware / Infrastructure ecosystems

6 research agents in parallel covered: network vendors (Cisco/Juniper/Aruba/Arista/Mikrotik/Huawei), firewall vendors (Palo Alto/Fortinet/Check Point/F5/Sophos), storage/backup (NetApp/Pure/Dell/Veeam/Rubrik/Commvault), hypervisor (VMware-Broadcom/Nutanix/Proxmox/Hyper-V/Citrix/OpenShift), SIEM/SOC (Splunk/Sentinel/QRadar/Elastic/CrowdStrike/Chronicle), wireless/SD-WAN (Meraki/CCNP Wireless/Aruba/Mist/Versa/HPE EdgeConnect).

Added a third grid below the SaaS ecosystems showing the 6 hardware/infra ecosystems.

### Phase 6: Career-identification platform features

4 research agents in parallel covered: AI-impact rating per role (~60 roles classified Resilient / Mixed / At-risk), day-in-the-life content for ~50 roles, career-changer entry routes (10 backgrounds → IT), first-job mechanics + remote/industry tags.

Built two new pages:
- `index.html` — Starting-point quiz (3 questions) + hub cards
- `IT_Career_Flow.html` — Interactive SVG flow diagram

---

## Key 2026 currency notes (verified during build)

- **CompTIA A+** is now 220-1201/1202 (220-1101/1102 retired March 2025)
- **CompTIA Network+** is now N10-009 (June 2024)
- **CompTIA Security+** SY0-701 (Nov 2023; SY0-601 retired)
- **AWS Developer Associate** is **DVA-C02** (not DAV-C02)
- **AWS CloudOps Engineer Associate** SOA-C03 replaced SOA-C02 Sept 2025
- **AWS ML Specialty** MLS-C01 retires March 31, 2026 (replaced by ML Engineer Associate + AI Practitioner)
- **Azure AZ-204** retires July 31, 2026
- **Azure AZ-500** retires August 31, 2026 → SC-500 replacement
- **Azure AZ-800/801** retire September 30, 2026 → AZ-802 (beta June 2026)
- **Azure AI-900** retires June 30, 2026 → AI-901
- **Azure AI-102** retires June 30, 2026 → AI-103 (agentic AI focus)
- **Azure DP-203** already retired March 31, 2025 → DP-700 (Microsoft Fabric)
- **Cisco DevNet** auto-rebrands to "Automation" Feb 3, 2026
- **TOGAF** codes are OGEA-101 / OGEA-102 / OGEA-103 (TOGAF 10)
- **ISC2** dropped the (ISC)² parentheses branding
- **PMI PMP** new exam launches July 9, 2026 (AI focus, 4-hr, 185 Q)
- **Snowflake SnowPro Core** is now COF-C03 (launched Feb 2026)
- **HashiCorp Terraform Associate** is 004 (from January 8, 2026)
- **CEH** is v13 (launched September 2024)
- **Palo Alto** PCNSA / PCNSE retired March 2025 → role-based ladder (NGFW Engineer + Network Security Architect)
- **Fortinet** transitioning back from FCF/FCA/FCSS to NSE 1–8 with specialisation tracks (effective July 15, 2026)
- **Check Point** R82 launched (CCSA 156-215.82, CCSE 156-315.82); R81.20 retires June 30, 2026
- **VMware/Broadcom** retired VCP-DCV / VCP-NV Dec 15, 2025 → VCP-VVF (compute+storage) and VCP-VCF (full stack)
- **Veeam** VMCE / VMCA sunsetting (VMCA gone Nov 2025; VMCE deadline March 2026); new VMCE+, VMCSE, VMCEA Q2 2026
- **Cisco acquired Splunk** in 2024; eventual training unification expected
- **HPE acquired Juniper** July 2025 ($14B)

---

## Tech stack

- Pure HTML + vanilla JS + inline CSS (no build step, no dependencies)
- SVG for the flow diagram (no library)
- Single-file design — every page works offline once downloaded
- Dark theme (default), responsive layout
- No tracking, no signup, no external scripts

---

## How to update / maintain

### Adding a new cert
Open `IT_Roadmap.html`, find the relevant `DOMAINS` / `ECOSYSTEMS` / `HARDWARE_ECOS` array near the top of the `<script>` block, add a new cert object inside the appropriate level. Pattern:
```js
{vendor:"...",name:"...",code:"...",status:"active",url:"https://...",note:"..."}
```

### Adding a new transition
Open `IT_Career_Paths.html`, find the `PATHS` array, add a new transition object. Use `lateral:true` for cross-domain pivots; `fork:true` for hard-to-reverse decisions.

### Updating retirement dates
Search for the cert code in `IT_Roadmap.html` and update the `note` and `status` fields. Statuses: `active` / `retiring` / `beta` / `new`.

### Adding a new role to the flow diagram
Open `IT_Career_Flow.html`, find the `NODES` array, add a new role with `col`, `row`, `name`, optional `offY` for stacking. Then add transitions to/from it in the `EDGES` array.

---

## Sources philosophy

Every cert was verified against the issuing vendor's own page in April 2026. Every book has a real author and a verifiable publisher URL. Every transition's salary delta cites a real source (Robert Half, Glassdoor, levels.fyi, BLS, PMI Earning Power Survey, Heidrick & Struggles, IAPP Privacy Salary Survey).

Where research is uncertain (e.g., ITIL 4 vs ITIL 5 transition state, retired-but-still-in-use legacy certs), the matrix flags it explicitly rather than picking a confident wrong answer.

---

## Known limitations (what this isn't yet)

- US-only salary data (international salary not yet integrated)
- No save/track-progress feature (would need accounts/storage)
- No mobile-first redesign (works on mobile but optimised for ≥1100px)
- No automated cert-update scraper (vendors change codes; manual updates required)
- No interview prep / resume templates per role (research exists in the agent reports but not yet integrated)
- AI-impact ratings exist in research but not yet shown on each cert chip — would need a UI update

---

## Credits

Built April 29–30, 2026 across multiple research agent passes:

- 5 agents on initial 10 domains
- 1 verification agent
- 10 agents on career-transition paths
- 12 agents on deep-research themes (.md files)
- 6 agents on hardware/infra vendor ecosystems
- 4 agents on platform features (AI-impact, day-in-the-life, career-changer, first-job mechanics)

Total: ~38 research passes, 250+ verified certifications, 70,000+ words of supporting research.

The final platform is 4 HTML files + 14 markdown files = ~895 KB total. Self-contained. No external dependencies. Open `index.html` in any browser to start.
