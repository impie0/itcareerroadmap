# Build Log — IT Career Roadmap Platform

Chronological record of every build phase, agent dispatch, and design decision. April 29–30, 2026.

---

## Phase 1: Initial 10-domain cert matrix

**Date:** April 29, 2026
**Goal:** Build a Paul Jerimy-style chart but for all of IT, not just security.

### Decisions made
- 10 domains × 4 levels (Entry / Associate / Professional / Expert)
- Each cell holds the canonical certs at that intersection
- Click a cert chip → drawer with skills + courses + jobs + source URL
- Vendor-neutral filter at top, full-text search

### Agents dispatched (5 in parallel + 1 verifier)

| # | Domains | Output |
|---|---------|--------|
| 1 | Foundation, Networking | A+, Network+, CCNA/CCNP/CCIE, Juniper, ITIL Foundation |
| 2 | Systems/OS, Identity & Endpoint | RHCSA/RHCE, AZ-104, AZ-800/801→AZ-802, MD-102, SC-300 |
| 3 | Cloud, Architecture | AZ-900/104/305, AWS CLF/SAA/SAP, GCP, OCI, TOGAF |
| 4 | Security, IT Mgmt/Governance | Sec+, CISSP, OSCP, CISM, GIAC, PMP, ITIL, ISACA |
| 5 | DevOps, Data/AI | KCNA/CKAD/CKA/CKS, Terraform, AZ-400, DP-700, ML certs |
| V | Verification | Cross-checked 34 specific cert codes / retirement dates |

### Bugs the verifier caught
- CompTIA A+ codes 220-1101/1102 → corrected to 220-1201/1202 (March 2025 update)
- CompTIA Network+ N10-008 → corrected to N10-009 (June 2024)
- AWS Developer Associate code DAV-C02 → corrected to DVA-C02
- Azure DP-203 already retired → replaced with DP-700 (Fabric)
- TOGAF codes OGEA-100/200 (hallucinated) → corrected to OGEA-101/102/103

### Output
- `IT_Roadmap.html` v1 — 10 domains × 4 levels = 135 verified certs

---

## Phase 2: Career transitions

**Date:** April 29, 2026
**Goal:** Add a companion page showing how to actually MOVE between roles.

### Decisions made
- 10 tracks (one per domain + cross-cutting tracks like Manager and IT Leadership)
- Each transition has 11 fields: signal, timeline, gap, certs, books, soft skills, failures, first-90-days, salary, salary URL, optional insight
- Lateral pivots flagged in yellow; major forks flagged in red
- Structural insights as banners at the top of relevant tracks

### Agents dispatched (10 in parallel)

| # | Path | Notable transitions |
|---|------|---------------------|
| 1 | Operations | Help Desk → Sysadmin → Senior → Infra Eng |
| 2 | Networking | NOC → Net Eng → Architect + Cloud Net Eng pivot + Net Sec pivot |
| 3 | Cloud | Sysadmin → Cloud Eng → Cloud SA + Dev → Cloud Eng (alt) |
| 4 | DevOps | Sysadmin → DevOps + Dev → DevOps + DevOps → SRE → Platform |
| 5 | Security | SOC L1 → L2 → Sec Eng → Sec Arch → CISO + Pentester pivot + GRC route |
| 6 | Data / AI | Analyst → Data Eng → ML Eng / Data Arch + DBA pivot + AI Eng |
| 7 | Architecture | Senior → SA → EA → Chief Arch + IC-Architect track |
| 8 | IC → Manager | Sr Eng → Tech Lead → EM → Director → VP/CTO + Manager → IC return |
| 9 | IT Leadership | Sysadmin → IT Mgr → IT Director → CIO |
| 10 | PM / GRC | Project Coordinator → PM → Pgm → Portfolio + IT Auditor → Audit Mgr + GRC → CISO |

### Output
- `IT_Career_Paths.html` v1 — 47 transitions across 10 tracks

---

## Phase 3: Deep research backing (the 13 .md files)

**Date:** April 29, 2026
**Goal:** Use deep research to inform v2 of the matrix and career paths. The .md files would not be linked from the page; they're backing material only.

### Agents dispatched (12 in parallel)

| # | Theme | File |
|---|-------|------|
| 1 | Gap audit & missing domains | `01_gap_audit_and_missing_domains.md` |
| 2 | Software Engineering as discrete domain | `02_software_engineering_domain.md` |
| 3 | Specialty enterprise ecosystems | `03_specialty_ecosystems.md` |
| 4 | QA / Testing / SDET | `04_qa_testing_sdet.md` |
| 5 | Hardware / datacenter / telecom | `05_hardware_datacenter_telecom.md` |
| 6 | Adjacent career lanes | `06_adjacent_career_lanes.md` |
| 7 | Privacy / forensics niches | `07_privacy_forensics_niches.md` |
| 8 | University / academic resources | `08_university_academic_resources.md` |
| 9 | Government / standards bodies | `09_government_standards_resources.md` |
| 10 | Engineering blogs (vendor + indie) | `10_engineering_blogs.md` |
| 11 | Books compendium (118 books) | `11_books_compendium.md` |
| 12 | Podcasts / newsletters / conferences | `12_podcasts_newsletters_conferences.md` |
| 13 | YouTube + paid courses | `13_youtube_and_paid_courses.md` |

### Total volume
- ~70,000 words across 13 files
- ~595 KB markdown

### Initial mistake (corrected)
- I initially built a "Deep Resources" tab in the matrix linking to all 13 .md files
- User clarified: the deep research is supposed to INFORM the design of the roadmap, not appear on the page
- Removed the Deep Resources tab; .md files remain as research backing only

---

## Phase 4: Roadmap design enrichment from deep research

**Date:** April 29–30, 2026
**Goal:** Use the deep research findings to expand the matrix and career paths.

### Matrix expansions
- Added 2 new main domain columns: **Software Engineering** and **QA / SDET**
- Total: 10 → 12 main domain columns × 4 levels
- Added new "Specialty Ecosystems" mini-grid below the main matrix:
  - **Salesforce** (Admin → Advanced → Platform Dev → Architect → CTA)
  - **SAP** (S/4HANA cloud → Functional Consultant → Solution Architect → Enterprise Architect)
  - **ServiceNow** (CSA + free CIS-DF → CAD → CIS-* → CTA → CMA)

### Career paths expansions
- Added 4 new tracks: **Software Eng, QA/SDET, Ecosystems, Adjacent Lanes**
- Total: 10 → 14 tracks
- Added 22 new transitions:
  - Software Eng IC ladder (Bootcamp → Junior → Mid → Senior → Staff → Principal)
  - QA / SDET ladder (Manual → Automation → SDET → Test Architect)
  - Salesforce Admin → Developer/Consultant → Architect → CTA
  - SAP Functional Consultant → Solution Architect
  - IT helpdesk → ServiceNow Admin
  - Senior Eng → Sales Engineer / DevRel / TPM / Tech Writer
  - **Mainframe Sysprog → Cloud Engineer** (highest-ROI pivot in IT 2026)
  - Sec Engineer → Privacy Engineer / DPO (IAPP CIPP/E + CIPM + CIPT)
  - SOC → DFIR Analyst → IR Lead (GIAC GCFA/GCFE/GREM)
  - Senior DE → Chief Data Officer

---

## Phase 5: Hardware / infrastructure ecosystems

**Date:** April 30, 2026
**Goal:** User asked for deep dive into specialty ecosystems "like firewalls, switches, routers."

### Agents dispatched (6 in parallel)

| # | Ecosystem | Vendors covered |
|---|-----------|-----------------|
| 1 | Network vendors | Cisco, Juniper, Aruba/HPE, Arista, Mikrotik, Huawei |
| 2 | Firewall / NGFW / WAF / LB | Palo Alto, Fortinet, Check Point, Cisco FTD, F5, SonicWall, Sophos, Cloudflare |
| 3 | Storage / backup | NetApp, Pure, Dell EMC, IBM Storage, HPE, Hitachi + Veeam, Commvault, Rubrik, Cohesity, Veritas |
| 4 | Hypervisor | VMware/Broadcom (post-acquisition), Nutanix, Proxmox, Hyper-V/Azure Stack, Citrix, OpenShift Virt |
| 5 | SIEM / SOC platforms | Splunk (post-Cisco acquisition), Microsoft Sentinel, IBM QRadar, Elastic, Google SecOps/Chronicle, CrowdStrike, SentinelOne, ArcSight |
| 6 | Wireless + SD-WAN | Cisco Meraki / CCNP Wireless, Aruba, Mist (Juniper), Ruckus, Ubiquiti + Cisco Catalyst SD-WAN, VMware VeloCloud, Versa, Fortinet, Palo Alto Prisma, HPE Aruba EdgeConnect, Cato + CWNP CWNA→CWNE |

### Major 2026 changes the agents surfaced
- Palo Alto PCNSA/PCNSE retired March 2025 → new role-based ladder (NGFW Engineer / Network Security Architect)
- Fortinet rebranded FCF/FCA/FCSS in 2024 → reverting to NSE 1-8 with specialisation tracks effective July 15, 2026
- Check Point R82 launched (CCSA 156-215.82) — R81.20 retires June 30, 2026
- VMware/Broadcom retired VCP-DCV / VCP-NV Dec 15, 2025 → VCP-VVF + VCP-VCF
- Veeam VMCE / VMCA sunsetting → new VMCE+, VMCSE, VMCEA Q2 2026
- Cisco acquired Splunk in 2024; HPE acquired Juniper July 2025
- ServiceNow CIS-DF (Data Foundation) free through June 2026 — required prereq for all CIS tracks

### Matrix output
- Added third grid below SaaS ecosystems showing 6 hardware/infra ecosystems
- Total: 12 main domains + 3 SaaS ecosystems + 6 hardware ecosystems × 4 levels
- ~250+ certifications across 21 specialty columns

---

## Phase 6: Career-identification platform features

**Date:** April 30, 2026
**Goal:** Make this a PLATFORM where people can identify careers and paths, not just a cert reference. User asked for deep dive on what's missing.

### Gaps identified
1. No starting-point quiz / wizard
2. No day-in-the-life content per role
3. No AI-impact rating per role (critical 2026 question)
4. Salary data is US-only
5. No visual flow diagram
6. No career-changer entry guides
7. No remote-friendly indicators
8. No industry-vertical mapping
9. No "first job" how-to
10. No time + cost estimates per transition

### Agents dispatched (4 in parallel)

| # | Topic | Key output |
|---|-------|------------|
| 1 | AI-impact rating per role | ~60 roles classified Resilient / Mixed / At-risk with reasoning. Sources: McKinsey, Gartner, BLS, Stack Overflow Survey 2025. |
| 2 | Day-in-the-life content | ~50 roles with concrete daily-rhythm descriptions sourced from Reddit r/sysadmin, r/networking, r/devops, practitioner blogs. |
| 3 | Career-changer entry routes | 10 backgrounds → IT (teacher, military, healthcare, accountant, retail, trades, customer service, non-CS grad, returner, bootcamp grad). Real success stories. |
| 4 | First-job mechanics + remote/industry | Portfolio templates / resume tips / interview format / where to apply per role + remote-friendly tags + top industries per role. |

### Pages built
- **`index.html`** — Homepage hub with 3-question starting-point quiz that routes user to right column / track + tailored advice paragraph based on their priority (fast entry / AI-resilient / high pay / remote / stable / impact)
- **`IT_Career_Flow.html`** — Interactive SVG flow diagram with 40+ roles as nodes, 35+ transitions as arrows, color-coded by domain, with click-to-drawer interactions

### Status
- Research integration into matrix drawer (AI-impact + day-in-life chips on each cert) is research-ready but UI not yet shipped — would require updating the cert drawer template in `IT_Roadmap.html`. Documented as known limitation in `PLATFORM_README.md`.

---

## File inventory at end of Phase 6

| File | Purpose | Size | Last update |
|------|---------|------|-------------|
| `index.html` | Homepage + quiz | ~17 KB | Phase 6 |
| `IT_Roadmap.html` | Cert matrix | ~150 KB | Phase 5 |
| `IT_Career_Paths.html` | Career transitions | ~110 KB | Phase 4 |
| `IT_Career_Flow.html` | Visual flow diagram | ~21 KB | Phase 6 |
| `00_master_index.md` | Index to research | ~7 KB | Phase 3 |
| `01_gap_audit_and_missing_domains.md` | Gap audit research | ~74 KB | Phase 3 |
| `02_software_engineering_domain.md` | Software eng research | ~53 KB | Phase 3 |
| `03_specialty_ecosystems.md` | SaaS ecosystems research | ~40 KB | Phase 3 |
| `04_qa_testing_sdet.md` | QA / SDET research | ~52 KB | Phase 3 |
| `05_hardware_datacenter_telecom.md` | Hardware careers research | ~35 KB | Phase 3 |
| `06_adjacent_career_lanes.md` | Adjacent lanes research | ~30 KB | Phase 3 |
| `07_privacy_forensics_niches.md` | Privacy/forensics research | ~34 KB | Phase 3 |
| `08_university_academic_resources.md` | University courses research | ~43 KB | Phase 3 |
| `09_government_standards_resources.md` | Standards bodies research | ~28 KB | Phase 3 |
| `10_engineering_blogs.md` | Engineering blogs research | ~19 KB | Phase 3 |
| `11_books_compendium.md` | Books compendium | ~48 KB | Phase 3 |
| `12_podcasts_newsletters_conferences.md` | Podcasts / conferences | ~40 KB | Phase 3 |
| `13_youtube_and_paid_courses.md` | YouTube + paid courses | ~48 KB | Phase 3 |
| `PLATFORM_README.md` | Platform documentation | this doc | Phase 6 |
| `BUILD_LOG.md` | Build history | this doc | Phase 6 |

**Total:** 4 HTML pages + 16 markdown files ≈ 900 KB

---

## Lessons learned during the build

1. **Research agents are great but need verification.** The first-pass research had real errors (hallucinated cert codes, missed retirements). A dedicated verification agent caught 6 substantive corrections.

2. **OneDrive ↔ Linux mount sync caused mid-session pain.** Edits via the file tools wrote to the OneDrive Windows file, but the bash bindfs mount cached stale views. Fix: use Write tool with full content to bypass cache; verify via Read tool which reads the live file.

3. **The user's framing matters.** Initial misunderstanding: I added "Deep Resources" tab linking the .md files. User clarified: research informs design, doesn't appear on the page. Removed the tab; better separation of concerns.

4. **Compact JSON beats readable JSON for hand-editing later.** The cert data is single-line per cert object — easier to add new certs without breaking structure than nested multi-line.

5. **Three pages > one mega-page.** Tried adding everything to the matrix initially. Splitting into Matrix + Career Paths + Flow Diagram + Hub + research .md files gives users the right level of detail at the right time.

6. **Real practitioner accounts beat job descriptions.** For day-in-the-life content, Reddit threads about "what I actually do all day" were 10× more useful than LinkedIn job postings.

7. **AI-impact research is the most-asked-about thing in 2026.** Every career-conversation in 2026 includes "will AI replace this?" — answering it concretely (Resilient / Mixed / At-risk + reasoning) is high-value content that almost no career-roadmap site covers honestly.

---

## Phase 7: Ship the remaining career-identification features

**Date:** April 30, 2026
**Goal:** User asked "did you finish the build" — honest answer was no, only 2 of 7 features shipped. Phase 7 ships the rest.

### Decisions made
- Build a **single Role Profiles page** that combines 4 research streams (AI-impact + day-in-life + remote/industry + first-job mechanics) into per-role profile cards. Cleaner than trying to retrofit chips into the existing matrix drawer.
- Build a **dedicated Career Changers page** with 10 background-specific entry guides.
- Update the homepage hub to link both new pages.

### Pages built

#### `IT_Role_Profiles.html` (~30 KB)
- ~25 role cards combining research from 4 separate agents
- Each card has:
  - AI-impact rating pill (🟢 Resilient / 🟡 Mixed / 🔴 At-risk) with reasoning paragraph
  - Remote-friendly pill (🟢 Remote / 🟡 Hybrid / 🔴 On-site)
  - Top industries chips
  - "What you actually do" daily-rhythm description (sourced from Reddit r/sysadmin, r/networking, r/devops practitioner threads)
  - "Bad day" one-liner
  - For entry-level roles: full first-job guide (portfolio, resume tips, interview format, where to apply, first 90 days, salary range)
- Filters: All roles / Entry-level / AI-resilient / AI at-risk / Fully remote / On-site

#### `IT_Career_Changers.html` (~26 KB)
- 10 background-specific cards covering: Teacher, Military Veteran, Healthcare Pro, Accountant, Retail Manager, Trades, Customer Service, Recent Non-CS Grad, Career Returner, Bootcamp / Self-taught
- Each card has:
  - Best entry IT roles for that background
  - Transferable skills that count
  - Realistic timeline + first cert
  - Pay reality (honest about pay drops for career-changers)
  - What hiring managers worry about + how to address
  - Best free / cheap learning resources for that background
  - Real-world success-pattern story

### Updates to existing files
- `index.html` — added 2 new hub cards (Role Profiles + Career Changers)
- `BUILD_LOG.md` — this section
- `PLATFORM_README.md` — updated file inventory

---

## Final file inventory (Phase 7)

| File | Purpose | Size |
|------|---------|------|
| `index.html` | Homepage + 3-question quiz + 5 hub cards | ~18 KB |
| `IT_Roadmap.html` | Cert matrix (12 domains + 9 ecosystems × 4 levels) | ~150 KB |
| `IT_Career_Paths.html` | 14 tracks, 50+ transitions | ~110 KB |
| `IT_Career_Flow.html` | Interactive SVG flow diagram | ~21 KB |
| `IT_Role_Profiles.html` | Per-role profiles (AI / day-in-life / remote / first-job) | ~30 KB |
| `IT_Career_Changers.html` | 10 backgrounds → IT entry guides | ~26 KB |
| `00_master_index.md` | Index to research | ~7 KB |
| `01–13_*.md` | 13 deep-research files | ~590 KB total |
| `PLATFORM_README.md` | Platform documentation | ~19 KB |
| `BUILD_LOG.md` | This file | ~17 KB |

**Total:** 6 HTML pages + 16 markdown files ≈ 990 KB.

---

## Confirmed feature coverage (Phase 7)

The user picked these 7 features in the priority discussion:

- ✅ Starting-point quiz / wizard — `index.html`
- ✅ Day-in-the-life per role — `IT_Role_Profiles.html`
- ✅ AI-impact rating per role — `IT_Role_Profiles.html`
- ✅ Visual flow diagram — `IT_Career_Flow.html`
- ✅ Career-changer entry guides — `IT_Career_Changers.html`
- ✅ Remote-friendly + industry chips — `IT_Role_Profiles.html`
- ✅ First-job mechanics page — embedded in `IT_Role_Profiles.html` for entry-level roles

All 7 features now shipped. Build complete.

---

## Still future work (genuinely not built)

- International salary data (especially South African ZAR — given user context)
- Mobile-optimised responsive layout (works but not ideal under 1100px)
- Save/track-progress feature (requires accounts/storage — out of scope for static HTML)
- Auto-update scraper for cert vendors (manual updates currently required)
- Search across all pages (currently per-page search)
- Print-friendly PDF export of personalised roadmap (after quiz)
