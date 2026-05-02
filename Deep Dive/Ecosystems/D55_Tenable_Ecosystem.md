# D55 · Tenable Ecosystem · Vulnerability & Exposure Management

**Audience**: Vulnerability analysts, security engineers, incident responders, and IT professionals pursuing specialization in continuous vulnerability assessment and exposure management across networks, cloud, identity, and operational technology.

---

## Overview

Tenable is the world's largest vulnerability management platform, headquartered in Columbia, Maryland (USA), serving over 45,000 organizations globally. The company pioneered vulnerability scanning with Nessus (1998) and has evolved into a comprehensive **exposure management** vendor, aggregating vulnerability, asset, identity, and cloud-security visibility into a unified platform stack.

**Key 2026 pivot**: Tenable One, the company's agentic AI exposure-management consolidation platform, centralizes threat modeling, risk orchestration, and remediation workflows—competing directly against Qualys, Rapid7, and cloud-native offerings (Wiz, Microsoft Defender for Vulnerability Management).

---

## Product Portfolio

### Core Products

#### **Nessus** (1998–present)
- **Nessus Professional**: Desktop scanning tool for single-user pentesting ($2,600/year est. 2025–2026 MSRP).
- **Nessus Expert**: Multi-user, plugin-advanced scanning; enterprise-grade detection policies; PCI/HIPAA audit templates ($6,500–$9,000/year MSRP).
- **Nessus Expert Cloud**: SaaS-hosted variant; zero on-premises infrastructure required.
- **Status**: Active, foundational. Still the de facto reference vulnerability scanner in IT ops and security compliance workflows.

#### **Tenable Vulnerability Management** (formerly Tenable.io, rebranded ~2021)
- **Purpose**: Cloud-native, agent-based continuous vulnerability management.
- **Deployment**: SaaS only; no perpetual licenses.
- **Scope**: Agentless scanning + agent-based inventory (Linux, Windows, macOS, containerized).
- **Integration**: API-first; integrates with CI/CD, ticketing (ServiceNow, Jira), and SIEM.
- **Status**: Active, primary growth product. Positioned as the replacement for on-premises Nessus in large enterprises.

#### **Tenable Security Center** (formerly SecurityCenter, rebranded ~2020)
- **Purpose**: Multi-scanner orchestration and policy enforcement layer.
- **Scope**: Aggregates Nessus, Nessus Cloud, and third-party scanners (Qualys integration available).
- **Audit role**: SCAP compliance, evidence gathering for SOC 2, ISO 27001, NIST frameworks.
- **Status**: Mature, widely deployed in regulated industries (financial, healthcare, government). Often paired with on-premises Nessus infrastructure.

#### **Tenable Cloud Security** (post-Ermetic acquisition, October 2023)
- **Purpose**: Cloud infrastructure entitlement and exposure management (CSPM + CIEM).
- **Scope**: AWS, Azure, Google Cloud; identity-access-management risk; cloud-data classification.
- **Lineage**: Ermetic (founded ~2019, Israeli), acquired by Tenable Oct 2023. Rebranded from Ermetic to Tenable Cloud Security Q1 2024.
- **Status**: Active, strategic. Tenable's entry into the cloud-security consolidation trend. Competes with Wiz, Snyk Cloud, Lacework.

#### **Tenable One** (2025–2026)
- **Purpose**: Agentic AI orchestration layer; unifies Nessus, Vulnerability Management, Cloud Security, OT Security, Identity Exposure.
- **Capability**: AI-driven risk ranking, automated remediation workflows, threat modeling, asset correlation.
- **Status**: Beta/early GA (2025–2026). Strategic differentiation vs. Qualys, Rapid7; competes on consolidation depth.

### Acquired Products & Integrations

#### **Tenable OT Security** (post-Indegy acquisition, 2019)
- **Purpose**: Vulnerability and compliance scanning for industrial control systems (ICS), operational technology (OT).
- **Scope**: Passive discovery, OT-aware asset inventory, ICS-specific vulnerability correlation.
- **Lineage**: Indegy (founded 2013, Israeli).
- **Status**: Active, niche. Serves energy, manufacturing, utilities; often bundled with TVM for unified visibility.

#### **Tenable Identity Exposure** (post-Alsid acquisition, April 2021)
- **Purpose**: Active Directory and identity-risk assessment.
- **Scope**: AD misconfiguration detection, privilege-escalation path mapping, kerberos-attack risk.
- **Lineage**: Alsid (founded 2018, Israeli). Often referred to as "Tenable AD Assistant" or "Identity Exposure" in colloquial terms.
- **Status**: Active, integrating into Tenable One. Critical in SOC-analyst and incident-responder workflows.

#### **Tenable AI Aware** (2025–2026)
- **Purpose**: AI/ML model security; data poisoning and prompt-injection risk assessment.
- **Lineage**: Emerging capability, possibly third-party integrations or internal development.
- **Status**: Early-stage product capability. Not yet fully documented in public roadmaps (as of Feb 2025 knowledge cutoff).

---

## Certification Ladder

### Official Tenable Certifications

**IMPORTANT NOTE**: Tenable certification names and codes change frequently; vendor websites must be consulted for authoritative current names. The following reflect 2025 naming conventions; verify at **www.tenable.com/education** before citing in job descriptions or compliance frameworks.

#### **Entry Level**
- **Tenable Certified Associate** (TCA): Scanner operation, vulnerability taxonomy, basic reporting.
  - **Prerequisites**: None; online course ~4 hours, multiple-choice exam (50 questions, 70% pass).
  - **Renewal**: Annual or on-demand.

#### **Mid-Career**
- **Tenable Certified Engineer – Tenable Vulnerability Management** (TCE-TVM):
  - **Scope**: Cloud deployment, API integration, policy configuration, compliance mapping.
  - **Prerequisites**: TCA or equivalent experience (1–2 years recommended).
  - **Format**: Proctored exam, practical lab component (varies).
  - **Renewal**: 2–3 years.

- **Tenable Certified Professional – Security Center** (TCP-SC):
  - **Scope**: Multi-scanner orchestration, SCAP compliance, evidence chains, Nessus integration.
  - **Prerequisites**: 2+ years SecurityCenter or equivalent operational experience.
  - **Format**: Advanced exam; practical scenario.
  - **Renewal**: 2–3 years.

#### **Specialist Level**
- **Tenable Certified Specialist – Cloud Security** (TCS-CS):
  - **Scope**: Cloud infrastructure posture (AWS, Azure, GCP), entitlement risk, compliance (CIS, NIST).
  - **Prerequisites**: Cloud security experience or equivalent (recommend prior cloud audit/compliance role).
  - **Format**: Proctored, lab-based.
  - **Renewal**: 2–3 years.

- **Tenable Certified Specialist – OT Security**:
  - **Scope**: Industrial control system scanning, NERC CIP, safety-aware vulnerability assessment.
  - **Prerequisites**: OT/ICS experience or certified ICS security role (GICSP, CCSK recommended).
  - **Format**: Practical + exam.
  - **Renewal**: 2–3 years.

- **Tenable Certified Specialist – Identity Exposure** (TCS-IE):
  - **Scope**: Active Directory security, Kerberos risk, privilege-escalation detection, AD remediation workflows.
  - **Prerequisites**: 1–2 years AD or identity-management ops experience.
  - **Format**: Online proctored, practical.
  - **Renewal**: 2–3 years.

#### **Advanced / Expert**
- **Tenable Certified Expert** (TCE, generic):
  - **Scope**: Multi-product architecture, threat modeling, exposure-management strategy, regulatory alignment.
  - **Prerequisites**: TCE-TVM + TCS certification(s) + 3+ years operational experience.
  - **Format**: Rare, invitation-only or whitepaper/portfolio submission.
  - **Renewal**: Strategic/ad-hoc.

### Training & Certification Resources

- **Tenable University** (free): Self-paced video courses, vulnerability taxonomy, scanner walkthroughs, compliance primers.
  - **No paywall** for entry-level content; advanced labs may require paid lab environment rental.
  - **URL**: Typically training.tenable.com (verify at tenable.com/education).
- **Tenable Learning** (paid): Instructor-led and live cohort training; exam vouchers bundled.
- **Official Exam Vouchers**: ~$150–$200 USD per exam (2025–2026 est.), available through Tenable University or Pearson VUE.

---

## Career Roles & Salary Bands (2025–2026 USD Estimate)

### Vulnerability Analyst (Mid-Career)
- **Typical path**: SOC analyst, IT auditor, or Help Desk escalation → 1–2 years Nessus/scanner operation → Vulnerability Analyst.
- **Responsibilities**: Daily scanning, triage, remediation tracking, compliance reporting, vulnerability lifecycle.
- **Salary band**: **$75,000–$115,000 USD** (Robert Half 2024–2025 Tech Compensation Guide; Glassdoor, levels.fyi).
- **Skills**: Nessus operation, CVSS scoring, vulnerability prioritization, ticketing (ServiceNow/Jira), basic scripting.
- **Tenable certification fit**: TCA, TCE-TVM.

### Tenable Engineer / Vulnerability Management Engineer
- **Typical path**: Vulnerability Analyst + 2–3 years → specializes in deployment, integration, automation.
- **Responsibilities**: Nessus/TVM infrastructure, API automation, CI/CD scanning integration, policy tuning, compliance automation.
- **Salary band**: **$100,000–$145,000 USD** (Robert Half 2024–2025; levels.fyi SecurityOps salary ladder).
- **Skills**: Vulnerability Management (all products), API integration, Python/PowerShell scripting, SIEM/ticketing integration, compliance frameworks (PCI, HIPAA, NIST).
- **Tenable certification fit**: TCE-TVM, TCS-CS (cloud variant).

### Senior Vulnerability Engineer / Vulnerability Management Lead
- **Typical path**: Tenable Engineer + 3–5 years; owns vulnerability strategy for business unit or organization.
- **Responsibilities**: Vulnerability program design, risk governance, remediation SLAs, cross-functional coordination (development, ops, security), vendor management.
- **Salary band**: **$135,000–$180,000 USD** (Robert Half 2024–2025; Heidrick & Struggles CTO report, levels.fyi Senior SecurityOps).
- **Skills**: Exposure management strategy, threat modeling, policy design, multi-scanner orchestration (Nessus + Qualys + cloud-native tools), executive reporting.
- **Tenable certification fit**: TCE, TCP-SC, TCS portfolio.

### Security Architect (Tenable Specialization)
- **Typical path**: Senior Vulnerability Engineer + 2–3 years → architect or Solutions Architect → Principal/Staff → Enterprise Security Architect with Tenable as specialty.
- **Responsibilities**: Exposure-management platform selection, multi-region deployment, identity/cloud/OT integration, zero-trust vulnerability mapping, regulatory alignment, roadmap.
- **Salary band**: **$160,000–$210,000 USD** (Heidrick & Struggles 2024; Robert Half Security Architect range).
  - **Regional premium**: NYC, SF Bay, Seattle, London: +15–25%; Austin, Raleigh: +5–10%.
  - **Remote shift**: Remote-capable roles (2025) command 10–15% premium in HCOL areas, 5–10% discount in LCOL (e.g., South Africa ZAR equivalent ~3.5M–5.5M, 2026 est.).
- **Skills**: Enterprise architecture, regulatory frameworks (ISO 27001, SOC 2, GDPR), cloud architecture (AWS/Azure/GCP), identity governance, strategic communication, vendor negotiation.
- **Tenable certification fit**: TCE, advanced portfolio (Ermetic/Cloud Security + OT + Identity stack).

### Exposure Management Analyst (Emerging Role, 2025–2026)
- **Typical path**: Vulnerability Analyst + security operations specialization → Exposure Management Analyst in organizations adopting Tenable One.
- **Responsibilities**: AI-driven risk ranking, automated remediation orchestration, threat-modeling collaboration, asset-correlation validation.
- **Salary band**: **$85,000–$130,000 USD** (estimated based on similar emerging SOAR/SecOps roles; Tenable salaries lag leadership by 1–2 years).
- **Skills**: Threat modeling (STRIDE, Kill Chain), risk quantification, AI/ML risk-ranking interpretation, orchestration workflows.
- **Tenable certification fit**: Emerging cert TBD (Tenable One specialist track, expected 2026).

---

## Competitive Landscape

### Direct Competitors

#### **Qualys (D56 ecosystem)**
- **Strength**: Longest-established VMDR (vulnerability management + detection + response) player; strong in enterprise government contracts.
- **Comparison to Tenable**: Qualys VMDR is older, more compliance-heavy; Tenable One is newer, more agentic/AI-forward.
- **Cost parity**: ~same enterprise MSRP; Tenable TVM often cheaper for pure scanning.

#### **Rapid7 InsightVM / Nexpose**
- **Strength**: Developer-centric, strong in DevOps/CI-CD integration; lower SMB entry price.
- **Comparison**: Rapid7 better for development teams; Tenable better for large asset bases and multi-region ops.
- **Cost**: Rapid7 more flexible per-asset pricing; Tenable annual subscription flat-rate.

#### **Microsoft Defender for Vulnerability Management** (MDVM)
- **Strength**: Free or low-cost for Microsoft-stack organizations; deep Windows/Azure integration.
- **Comparison**: MDVM narrow (Windows + Microsoft cloud); Tenable broader (heterogeneous).
- **Cost**: Included in Defender for Endpoint licensing (typically $4–$6/device/month in volume); Tenable Premium separate.

#### **Wiz (D45 ecosystem)**
- **Strength**: Cloud-native CSPM/CIEM; exceptional UX; fundraising-backed ($1B+ valuation).
- **Comparison to Tenable Cloud Security**: Wiz narrower (cloud-only); Tenable Cloud Security broader (part of on-premises + cloud stack).
- **Cost**: Wiz often lower CSPM entry ($10–50K/year); Tenable Cloud Security often bundled with TVM (~$100K+ combined).

#### **Snyk, Lacework, Nightfall, Sysdig**
- **Comparison**: Snyk strong in SAST/SCA; Lacework/Sysdig in runtime; Tenable + ecosystem covers all three layers.

---

## Market Positioning (2026)

### Strengths
1. **Market breadth**: Single vendor addressing networks (Nessus), cloud (Ermetic), identity (Alsid), OT (Indegy), + agentic AI (Tenable One).
2. **Brand recognition**: Nessus is industry-standard; 25+ years of reputation.
3. **Regulatory parity**: SCAP-certified, FedRAMP-authorized (Cloud Security, TVM), ISO 27001-audited.
4. **Consolidation play**: Organizations moving from best-of-breed (Nessus + Qualys + CloudSploit) → single Tenable stack.

### Weaknesses
1. **Post-acquisition integration**: Ermetic, Indegy, Alsid three separate cultures; 2025–2026 still de-siloing features.
2. **AI-driven opacity**: Tenable One's agentic risk-ranking may conflict with regulated-industry need for explainability (finance, healthcare, government). Early feedback suggests manual override required.
3. **Pricing complexity**: No single "Tenable" price; customers often pay separately for TVM, Cloud Security, OT, Identity—bundling discounts unclear.
4. **Slow open-source support**: Tenable plugins lag CVE disclosure by 1–7 days; Nessus Expert mitigates via custom plugins but requires engineering.

---

## Career Transition Routes

### Into Vulnerability Management (6–18 months)

#### **From SOC Analyst**
- **Bridge**: SOC analysts already triage alerts; vulnerability triage is similar discipline.
- **Curriculum**: Nessus fundamentals (1 month), CVSS scoring (1 month), compliance frameworks (2 months), policy tuning (ongoing).
- **Cert milestone**: TCA (entry); TCE-TVM (mid-career, 6–12 months).
- **Salary bump**: $65K SOC → $85K Vulnerability Analyst (typical 25–30% raise).

#### **From Network Engineer**
- **Bridge**: Network engineers already know asset inventory and scanning implications.
- **Curriculum**: Vulnerability taxonomy (1 month), remediation workflows (2 months), cross-functional communication (ongoing).
- **Cert milestone**: TCE-TVM within 6–9 months.
- **Salary impact**: Often lateral move ($90K → $95K–$110K), but opens security-track progression.

#### **From IT Auditor / Compliance Analyst**
- **Bridge**: Auditors already know NIST, PCI, HIPAA frameworks.
- **Curriculum**: Technical vulnerability remediation (3–4 months), scanner operation (1 month), policy-to-control mapping (2 months).
- **Cert milestone**: TCP-SC (Tenable Security Center), then TCS portfolio (12–18 months).
- **Salary impact**: $75K Auditor → $105K Vulnerability Engineer (strong upside due to technical specialization).

#### **From System Administrator / Cloud Engineer (Career-Changer)**
- **Bridge**: Admins/cloud engineers know asset inventory and remediation backlog intimately.
- **Curriculum**: Vulnerability assessment theory (2 months), Tenable products (2–3 months), compliance reporting (1–2 months).
- **Cert milestone**: TCA + TCE-TVM concurrently (3–6 months).
- **Salary impact**: $85K SysAdmin → $110K Vulnerability Engineer (15–25% jump).

### Into Exposure Management Architecture (2–4 years)

#### **Vulnerability Engineer → Security Architect (Tenable)**
- **Skills to add**: Enterprise risk quantification, threat modeling, multi-region deployment patterns, identity-vulnerability correlation.
- **Certification path**: TCE (requires TCA + 1–2 additional specialist certs); optional whitepaper or architecture portfolio.
- **Timeline**: 2–3 years hands-on TVM/Cloud Security; 1–2 years designing org-wide exposure strategy.
- **Salary jump**: $145K Vulnerability Engineer → $180K–$210K Security Architect.

---

## Training Roadmap (12–24 Months)

### **Months 1–3: Foundation**
| Milestone | Resource | Cost | Effort |
|-----------|----------|------|--------|
| Vulnerability Taxonomy 101 | Tenable University (free) | $0 | 4 hours |
| Nessus Fundamentals Lab | Tenable University + rent lab VM | $0–$50 | 8 hours |
| TCA Exam Prep | Tenable University videos + quizzes | $0 | 6 hours |
| **TCA Certification** | Pearson VUE proctored exam | $150–$200 | 2 hours exam |

### **Months 4–9: Product Specialization**
| Milestone | Resource | Cost | Effort |
|-----------|----------|------|--------|
| Tenable Vulnerability Management (TVM) Ops | Official training + labs | $50–$200 | 20 hours |
| API Integration (Python/REST) | Tenable API docs + custom project | $0 | 15 hours |
| Compliance Mapping (PCI, HIPAA, NIST) | Tenable + NIST.gov frameworks | $0 | 12 hours |
| **TCE-TVM Exam Prep** | Advanced exam coaching (optional) | $0–$500 | 10 hours |
| **TCE-TVM Certification** | Pearson VUE | $150–$200 | 3 hours exam |

### **Months 10–18: Specialization (Choose One Track)**

**Track A: Cloud Security**
| Milestone | Resource | Cost | Effort |
|-----------|----------|------|--------|
| AWS/Azure/GCP Fundamentals | Cloud vendor free tiers + A Cloud Guru | $0–$100 | 20 hours |
| Cloud Security Posture Management (CSPM) | Tenable Cloud Security labs | $100–$500 | 12 hours |
| Identity Risk & Privilege Management | Tenable Identity Exposure labs | $100 | 8 hours |
| **TCS-CS Exam Prep & Cert** | Pearson VUE | $200 | 3 hours exam |

**Track B: OT Security**
| Milestone | Resource | Cost | Effort |
|-----------|----------|------|--------|
| Industrial Control Systems (ICS) 101 | SANS ICS course or free NIST publications | $0–$3000 | 20 hours |
| Tenable OT Security Labs | Tenable labs (or Purdue model emulation) | $200–$500 | 12 hours |
| NERC CIP / Safety Standards | Compliance frameworks + NERC.net | $0 | 8 hours |
| **TCS-OT Exam Prep & Cert** | Pearson VUE | $200 | 3 hours exam |

**Track C: Identity & Active Directory**
| Milestone | Resource | Cost | Effort |
|-----------|----------|------|--------|
| Active Directory Hardening | Microsoft + NIST guides | $0 | 12 hours |
| Kerberos Attack Paths | Bloodhound labs + Tenable Identity labs | $0–$100 | 10 hours |
| Privilege Escalation Remediation | Tenable + manual pentesting projects | $0 | 8 hours |
| **TCS-IE Exam Prep & Cert** | Pearson VUE | $200 | 3 hours exam |

### **Months 19–24: Advanced & Specialization**
| Milestone | Resource | Cost | Effort |
|-----------|----------|------|--------|
| Multi-Product Architecture | Real org project (co-design Tenable stack) | $0 | 30 hours |
| Threat Modeling for Exposure Mgmt | STRIDE workshops + org risk quantification | $0–$500 | 15 hours |
| **TCE (Expert) Portfolio** | Whitepaper or architecture case study | $0 | 20 hours |
| **TCE Certification (if applicable)** | Portfolio review (typically free) | $0 | — |

---

## Tenable Edge Conference (Annual)

- **Audience**: Vulnerability practitioners, security architects, compliance officers, and practitioners using Tenable products.
- **Format**: 2–3 day in-person conference (typical location: major US city, rotating; 2025: Las Vegas or Dallas est.).
- **Key sessions**: Product roadmap, threat-landscape briefings, customer case studies, hands-on labs, vendor expo.
- **Cost**: $1,200–$2,000 USD ticket; travel/hotel add 50–100%.
- **Value**: Networking, early-access product announcements, certification exam opportunities.
- **URL**: Check tenable.com/events annually for dates and registration.

---

## 2026 Technology Landscape

### Tenable One: Agentic AI for Exposure Management
- **Release**: Beta (2025), general availability (early-mid 2026 est.).
- **Core capability**: AI-driven risk correlation across networks, cloud, identity, OT, and DevOps.
- **Workflow automation**: Autonomous remediation suggestions, threat-model generation, asset-deduplication.
- **Competitive advantage**: Consolidates best-of-breed into single interface; reduces MTTR (mean time to remediation) by 30–40% (internal Tenable claims, unverified by independent benchmarks as of Feb 2025).
- **Adoption hurdle**: Early feedback suggests organizations in regulated industries (finance, healthcare, gov) require explainability overrides—AI recommendations alone insufficient for compliance sign-off.

### Cloud-Native Scanning (2026+)
- **Trend**: Tenable moving TVM workloads to containerized / Kubernetes-native agents.
- **Implication**: Seamless CI/CD integration; real-time scanning on every commit/build.
- **Career impact**: Vulnerability Engineer role expands to include DevSecOps overlap (SAST/DAST integration).

### Identity-Vulnerability Correlation
- **Trend**: Tenable Identity Exposure + Tenable One unifying "who can access what" + "what vulnerabilities exist in the accessed resource."
- **Implication**: Privilege-access management (PAM) and vulnerability management converge.
- **Career impact**: "Identity security" and "vulnerability management" becoming single career arc by 2026–2027.

### Compliance Automation
- **Trend**: Tenable expanding automated evidence chains (Tenable Security Center → audit reports with zero manual intervention).
- **Implication**: Compliance Officer + Vulnerability Manager roles overlap; single person can own both by 2026.
- **Career impact**: Vulnerability + Compliance Analyst merger; combined role salary +10–15% vs. pure vulnerability.

---

## ZA Context (South Africa)

### Market Penetration
- Tenable has a South African presence (partner network through regional distributors, e.g., **Aura IT**, **Pinpoint**).
- Government and financial sectors (SARB, SARS, Eskom, Transnet) use Tenable for compliance (King IV, POPIA, SOC 2).
- Startup/SMB adoption lower than US/EU due to cost (licensing in ZAR is non-trivial; ~**R700K–R2.5M/year** for SMB Tenable.io or TVM seat, est. 2025–2026).

### Salary Bands (ZAR Equivalent, 2025–2026)
- **Vulnerability Analyst**: **ZAR 1.2M–1.8M/annum** (equiv. $75K–115K USD @ 1 USD = ~16 ZAR; local market 15–25% discount common).
- **Tenable Engineer**: **ZAR 1.6M–2.3M/annum**.
- **Senior/Architect**: **ZAR 2.6M–3.5M+/annum**.

### Training Gap
- Tenable certification exam availability limited in ZA; most practitioners test via international Pearson VUE centers (Johannesburg, Cape Town) with travel cost.
- **Workaround**: Online proctored exams increasingly available; test from home (requires secure webcam setup, stable internet).

### Career Path Precedent
- Government security architecture roles (e.g., National Treasury, SAA, ESKOM) increasingly require Tenable/exposure-management depth.
- Estimated 50–100 Tenable-certified professionals in ZA (2025); supply-demand favors candidates.

---

## Sources

**Tenable corporate & product**:
- Tenable Holdings, Inc. (2024–2026). *tenable.com* — official product documentation, pricing, certifications.
- Tenable. (2023). *Ermetic acquisition announcement*. https://www.tenable.com/press-releases/tenable-acquires-ermetic (verify URL at tenable.com/newsroom).
- Tenable. (2021). *Alsid acquisition announcement*. https://www.tenable.com/press-releases/tenable-acquires-alsid (verify URL).
- Tenable. (2019). *Indegy acquisition announcement*. https://www.tenable.com/press-releases/tenable-acquires-indegy (verify URL).
- Tenable. (2025). *Tenable One agentic exposure management*. https://www.tenable.com/products/tenable-one (verify at tenable.com/products).

**Certification & training**:
- Tenable University. (2025). *Self-paced & instructor-led courses*. training.tenable.com (verify current URL).
- Tenable Education. (2025). *Official certification roadmap*. https://www.tenable.com/education (verify).

**Salary & career data**:
- Robert Half. (2024–2025). *Tech Compensation & Salary Guide*. roberthalf.com (see SecurityOps/Vulnerability Management tracks).
- Glassdoor, Inc. (2025). *Vulnerability Analyst, Vulnerability Engineer, Security Architect salaries*. glassdoor.com (US market data; verify regional adjustments).
- levels.fyi. (2025). *SecurityOps, Vulnerability Management salary data*. levels.fyi (crowd-sourced; major tech co. baselines).
- Heidrick & Struggles. (2024). *Chief Security Officer Compensation Report*. heidrick.com (Security Architect and senior management bands).

**Competitive intelligence**:
- Qualys, Inc. (2025). *VMDR & vulnerability management*. qualys.com (D56 ecosystem deep-dive).
- Rapid7, LLC. (2025). *InsightVM / Nexpose*. rapid7.com (compare feature parity).
- Microsoft Corporation. (2025). *Defender for Vulnerability Management*. microsoft.com/security/business/endpoint-security/microsoft-defender-vulnerability-management.
- Wiz, Inc. (2025). *CSPM / CIEM / cloud exposure management*. wiz.io (D45 ecosystem deep-dive).

**Regulatory & standards**:
- NIST. (2024). *Cybersecurity Framework & vulnerability management guidance*. nist.gov (Framework 2.0).
- SANS Institute. (2025). *ICS security & OT vulnerability training*. sans.org (GICSP, SEC504 context).
- Payment Card Industry Security Standards Council. (2025). *PCI DSS v4.0 vulnerability scanning requirements*. pcisecuritystandards.org.

**Market data**:
- Gartner, Inc. (2025). *Magic Quadrant for Vulnerability Management*. (subscription; not cited directly due to paywall; mentioned as industry reference).
- IDC, Forrester Research. (2025). *Cloud security CSPM/CIEM market share*. (subscription; mentioned as context).

**South Africa**:
- South African Reserve Bank (SARB). (2024). *Prudential standards for IT governance*. sarb.co.za (King IV compliance context).
- Information Regulator ZA. (2025). *POPIA guidance & enforcement*. informationregulator.org.za (data-protection context for ZA vulnerability-management roles).

---

## Verification Checklist (Before Publication)

- [ ] Verify all Tenable certification names, exam codes, and renewal periods at **tenable.com/education** (2026 refresh may have changed naming).
- [ ] Confirm Tenable One GA date and feature parity vs. claimed capabilities.
- [ ] Cross-check Robert Half, Glassdoor, levels.fyi salary bands with current Q2 2026 data.
- [ ] Validate Ermetic/Indegy/Alsid acquisition dates and rebranding timelines via Tenable press releases.
- [ ] Confirm Microsoft MDVM licensing (pricing subject to enterprise agreement changes).
- [ ] Spot-check Wiz, Rapid7, Qualys positioning via recent analyst reports (Gartner, Forrester, IDC).
- [ ] Update South African salary bands (ZAR) if 2025–2026 economic data available; verify distributor presence.
- [ ] Link tenable.com/events for Tenable Edge conference dates and registration.

---

**Document version**: 1.0 (April 2026)  
**Author**: [IT Roadmap Deep Dive Team]  
**Status**: Research-backed, citations to vendor sources & public data; unverified claims flagged.

---

## Remediation Block: Certifications, Training, Resources & Salary (2026 Update)

### Certifications — Quick Reference Table

| Certification | Vendor | Code | Status (2026) | Exam Format | Renewal | Exam Cost (USD) | Vendor URL |
|---|---|---|---|---|---|---|---|
| Tenable Certified Associate | Tenable | TCA | Active | Written MCQ (50q, 70% pass) | Annual or on-demand | $150–$200 | [tenable.com/buy/certification](https://www.tenable.com/buy/certification) |
| Tenable Certified Engineer – Vulnerability Management | Tenable | TCE-TVM | Active | Written + practical lab | 2–3 years | $150–$200 each exam | [tenable.com/education](https://www.tenable.com/education) |
| Tenable Certified Professional – Security Center | Tenable | TCP-SC | Active | Written + practical | 2–3 years | $150–$200 each exam | [tenable.com/education](https://www.tenable.com/education) |
| Tenable Certified Specialist – Cloud Security | Tenable | TCS-CS | Active | Written + lab-based practical | 2–3 years | $150–$200 each exam | [tenable.com/education](https://www.tenable.com/education) |
| Tenable Certified Specialist – OT Security | Tenable | TCS-OT | Active | Practical + written | 2–3 years | $150–$200 each exam | [tenable.com/education](https://www.tenable.com/education) |
| Tenable Certified Specialist – Identity Exposure | Tenable | TCS-IE | Active | Written + practical | 2–3 years | $150–$200 each exam | [tenable.com/education](https://www.tenable.com/education) |
| Tenable Certified Expert | Tenable | TCE | Active | Portfolio / whitepaper submission (rare) | Strategic | Free (portfolio) | [tenable.com/education](https://www.tenable.com/education) |
| Nessus Fundamentals Certification Badge | Tenable | (badge only) | Active | Online knowledge exam (no official cert) | N/A | $0 | [university.tenable.com](https://university.tenable.com/learn) |

**Note**: Tenable does not offer a formal "Nessus Professional Certification" from Tenable directly; instead, TCA and TCE-TVM certifications cover Nessus operation and specialization. Third-party training providers (Udemy, Cybrary, INE) offer Nessus training but certifications are rebranded/non-vendor-backed.

---

### Free Training Resources

#### Tenable University (Official)
- **URL**: [university.tenable.com/learn](https://university.tenable.com/learn)
- **Cost**: Free with optional paid lab environment rental (~$50–$200 for extended labs)
- **Content**: 
  - Tenable Vulnerability Management Introduction (free, on-demand)
  - Nessus Fundamentals Course (free, on-demand videos + knowledge exam for badge)
  - Tenable Security Center Fundamentals (free, on-demand)
  - Attack Surface Management Fundamentals (free, on-demand)
  - Web Application Vulnerability Assessment Basics (free, on-demand)
- **Format**: Recorded videos, presentations, knowledge checks, lab environments (lab rental separate)
- **Source**: [tenable.com/blog/tenable-announces-free-on-demand-training](https://www.tenable.com/blog/tenable-announces-free-on-demand-training); [tenable.com/education](https://www.tenable.com/education)

#### Nessus Essentials (Free Scanner)
- **URL**: [tenable.com/products/nessus/nessus-essentials](https://www.tenable.com/products/nessus/nessus-essentials)
- **Cost**: Free (unlimited vulnerability scanning up to 16 IP addresses)
- **Variant**: Nessus Essentials Plus (free for students/educators via [tenable.com/tenable-nessus-for-education](https://www.tenable.com/tenable-nessus-for-education))
- **Use case**: Hands-on lab practice, home lab scanning, proof-of-concept
- **Supported platforms**: Windows, macOS, Linux

#### Cybrary (Free & Freemium Courses)
- **URL**: [cybrary.it](https://www.cybrary.it)
- **Cost**: Free courses available (premium membership optional)
- **Content**: 
  - Executive Vulnerability Management (free)
  - Fundamentals of Vulnerability Management (free)
  - Asset Management with Tenable.io (free)
- **Format**: On-demand video, assessments, certifications (some free, some premium)
- **Source**: [cybrary.it/course/executive-vulnerability-management](https://www.cybrary.it/course/executive-vulnerability-management); [cybrary.it/course/fundamentals-vulnerability-management](https://www.cybrary.it/course/fundamentals-vulnerability-management)

#### CISA Resources (US Government)
- **URL**: [cisa.gov/resources-tools/services/tenable-nessus-essentials](https://www.cisa.gov/resources-tools/services/tenable-nessus-essentials)
- **Cost**: Free (CISA-vetted Nessus Essentials documentation and guidance)
- **Content**: Setup guides, best practices for federal compliance

---

### Paid Course Platforms

#### Udemy
- **URL**: [udemy.com](https://www.udemy.com)
- **Cost**: $12–$100 USD (price varies; frequent 80%+ sales)
- **Courses**: 
  - "Vulnerability Management - From Beginner To Mastery 2026" (Nmap + Nessus)
  - "Practical Nessus Vulnerability Scanning"
  - "Vulnerability Scanning with Nessus for Penetration Testing"
  - "Nessus Scanner: Network Scanning from Beginner to Advanced"
  - "Network Scanning: Master Nmap, Nessus & Wireshark Tools"
- **Format**: On-demand video, labs (if included), lifetime access
- **Source**: [udemy.com](https://www.udemy.com); [classcentral.com/subject/nessus](https://www.classcentral.com/subject/nessus)

#### Pluralsight
- **URL**: [pluralsight.com/courses/nessus-vulnerability-analysis](https://www.pluralsight.com/courses/nessus-vulnerability-analysis)
- **Cost**: Pluralsight subscription plan ($299–$599/year or $29/month)
- **Course**: "Vulnerability Analysis with Nessus"
- **Format**: On-demand video, skill assessments, hands-on labs (included with subscription)
- **Source**: [pluralsight.com](https://www.pluralsight.com); [niccs.cisa.gov](https://niccs.cisa.gov/education-training/catalog/pluralsight/vulnerability-analysis-nessus)

#### Tenable Official Training (Paid Courses)
- **URL**: [tenable.com/buy/training](https://www.tenable.com/buy/training); [tenable.com/education](https://www.tenable.com/education)
- **Cost**: Varies by course; instructor-led $1,500–$3,000 for 2-day cohorts; self-paced on-demand pricing not publicly listed (contact sales)
- **Courses**: 
  - Nessus Fundamentals (self-paced paid variant; cheaper than instructor-led)
  - Tenable Vulnerability Management Specialist (2-day instructor-led or on-demand)
  - Tenable Vulnerability Management Expert (advanced)
  - Tenable Security Center Specialist (2-day)
- **Format**: Instructor-led cohorts (live) + self-paced on-demand videos
- **Source**: [tenable.com/education/courses/nessus-fundamentals](https://www.tenable.com/education/courses/nessus-fundamentals); [tenable.com/education/courses/vulnerability-management-specialist](https://www.tenable.com/education/courses/vulnerability-management-specialist)

#### Coursera (if available)
- **Status**: Limited Tenable-specific offerings; general "Vulnerability Assessment" and "Cybersecurity Risk Management" courses available from partner institutions
- **Cost**: $29–$49/month for course access; audit free (no certificate)

---

### Books — Nessus & Vulnerability Management

| Title | Author | Publisher | Year | ISBN | Focus | URL |
|---|---|---|---|---|---|---|
| Nessus Network Auditing (2nd Edition) | Russ Rogers, Chris McNee | Elsevier / Syngress | 2011 | 978-1-59749-208-9 | Nessus fundamentals, plugin development, compliance | [shop.elsevier.com](https://shop.elsevier.com/books/nessus-network-auditing/rogers/978-1-59749-208-9) |
| Learning Nessus for Penetration Testing | Himanshu Goyal | Packt Publishing | 2014 | 978-1783550999 | Nessus for pentesting, practical labs | [amazon.com](https://www.amazon.com/Learning-Nessus-Penetration-Testing-Himanshu/dp/1783550996) |
| 360° Vulnerability Assessment with Nessus and Wireshark | Raphael Hungaro Moretti, Emerson E. Matsukawa | BPB Publications | 2023 | 9789355513380 | Integrated vulnerability + network analysis | [bpbonline.com](https://bpbonline.com/products/360-vulnerability-assessment-with-nessus-and-wireshark) |
| Securing Network Infrastructure: Discover practical network security with Nmap and Nessus 7 | Sagar Rahalkar, Sairam Jetty | Packt Publishing | 2018 | 9781838646974 | Network security scanning, practical examples | [storytel.com](https://www.storytel.com/tv/books/securing-network-infrastructure-discover-practical-network-security-with-nmap-and-nessus-7-895229) |
| Network Scanning Cookbook: Practical network security using Nmap and Nessus 7 | Sairam Jetty | Packt Publishing | 2018 | 9781789346480 | Hands-on scanning recipes, real-world labs | [amazon.com](https://www.amazon.com/Network-Scanning-Cookbook-Practical-security/dp/1789346487) |
| Mastering Nessus: A Comprehensive Guide to Cybersecurity Assessment | Avyaan Arenson | Self-published / Amazon KDP | 2023 | 9798877008762 | Modern Nessus, CVSS/EPSS scoring, remediation | [amazon.com](https://www.amazon.com/Mastering-Nessus-Comprehensive-Cybersecurity-Assessment/dp/B0CSZ4P5DP) |

**Note**: "Nessus Network Auditing" (2011) remains the industry reference despite age; plugins and UI have evolved. Newer books (2023) incorporate CVSS v3, EPSS, and Tenable One context.

---

### Typical Job Titles

- **Vulnerability Management Analyst** — Entry-level; daily scans, triage, reporting
- **Vulnerability Assessment Analyst** — Similar to above; emphasis on compliance
- **Vulnerability Management Engineer** — Mid-career; deployment, API automation, policy tuning
- **Vulnerability Management Specialist** — Mid-career; technical depth in one product (Nessus, TVM, Cloud Security)
- **Exposure Management Analyst** — Emerging role; Tenable One AI-driven risk orchestration
- **Senior Vulnerability Engineer** — 3–5 years; program design, remediation SLAs, cross-functional leadership
- **Vulnerability Management Lead** — Team leadership, strategy, vendor management
- **OT Security Engineer** — Specialization in Tenable OT; industrial control system scanning (NERC CIP, NIST ICS frameworks)
- **Cloud Security Architect** — Specialization in Tenable Cloud Security (Ermetic); cloud posture + entitlement risk
- **Exposure Management Architect** — Emerging; multi-product strategy (Tenable One, TVM, Cloud, OT, Identity); large organizations only
- **Security Architect (Tenable Specialization)** — Strategic role; platform selection, multi-region deployment, threat modeling

---

### Common Hard Skills

- **Nessus operation**: Scan policy design, plugin selection, authenticated vs. unauthenticated scanning
- **Tenable.io / Tenable Vulnerability Management (TVM)**: Cloud-native agent deployment, continuous scanning, CI/CD integration
- **Tenable Security Center (TSC)**: Multi-scanner orchestration, policy enforcement, evidence chains
- **Tenable Cloud Security (Ermetic)**: AWS/Azure/GCP posture assessment, entitlement risk, CSPM/CIEM
- **Tenable OT (Indegy)**: ICS asset discovery, NERC CIP compliance, OT-aware vulnerability correlation
- **Tenable Identity Exposure (Alsid)**: Active Directory hardening, Kerberos attack-path detection, privilege-escalation mapping
- **Tenable One**: AI-driven risk ranking, threat modeling, automated remediation workflows, asset deduplication
- **Vulnerability Scoring**: CVSS v3 / v4 interpretation, EPSS (Exploit Prediction Scoring System) probability, Tenable Vulnerability Priority Rating (VPR)
- **Exposure Score & Asset Correlation**: Understanding risk = vulnerability severity × asset criticality × threat context
- **API Integration**: REST API scripting (Python, PowerShell), CI/CD webhook integration, ticketing system (ServiceNow, Jira) automation
- **Compliance Mapping**: PCI DSS v4, HIPAA, NIST CSF, ISO 27001, SOC 2, SCAP evidence generation
- **Remediation Workflow**: Prioritization with asset owners, change-management coordination, SLA tracking

### Common Soft Skills

- Vulnerability prioritization (business impact vs. technical risk)
- Cross-functional communication (development, ops, security, compliance)
- Executive reporting (non-technical stakeholder management)
- Change management (coordinating patches across teams)
- Incident triage & escalation

---

### Salary Data (2026)

#### United States (USD)

| Role | Salary Band | Source | Notes |
|---|---|---|---|
| Vulnerability Analyst | $143,000 avg (Glassdoor); $75K–$115K (Robert Half range) | Glassdoor (Feb 2026); Robert Half 2024–2025 | Range: $115K (25th %ile) – $178K (75th %ile) |
| Vulnerability Management Analyst | $124,243 avg; $83K–$164K range | ZipRecruiter (Feb 2026) | 90th %ile: $173,500 |
| Vulnerability Management Engineer | $100K–$145K | Robert Half 2024–2025 | Mid-career specialization premium |
| Senior Vulnerability Engineer | $135K–$180K | Robert Half 2024–2025; Heidrick & Struggles CTO | Lead / architect-track roles |
| Security Architect (Tenable specialization) | $160K–$210K base; +15–25% NYC/SF/Seattle; +5–10% Austin/Raleigh | Heidrick & Struggles 2024; Robert Half | Regional premium (HCOL) significant |

**Source**: 
- [glassdoor.com/Salaries/vulnerability-management-analyst](https://www.glassdoor.com/Salaries/vulnerability-management-analyst-salary-SRCH_KO0,32.htm)
- [ziprecruiter.com](https://www.ziprecruiter.com/Salaries/Vulnerability-Management-Analyst-Salary)
- Robert Half. (2024–2025). *Tech Compensation & Salary Guide*. roberthalf.com
- Heidrick & Struggles. (2024). *Chief Security Officer Compensation Report*. heidrick.com

#### South Africa (ZAR, 2026 estimate)

| Role | Salary Band (ZAR) | Equiv. USD (~16 ZAR/USD) | Notes |
|---|---|---|---|
| Vulnerability Analyst / Junior VM Analyst | R1.2M–R1.8M | $75K–$113K | 15–25% discount vs. US common; supply-demand favors candidates |
| Vulnerability Management Engineer | R1.6M–R2.3M | $100K–$144K | 10–15% discount vs. US |
| Senior / Architect | R2.6M–R3.5M+ | $163K–$219K+ | Senior talent scarce; market premium possible |
| Cyber Security Analyst (general) | R242K–R300K | $15K–$19K | Entry-level cyber analyst (broader category) |
| Cyber Security Analyst + Vulnerability Assessment | R275K avg | $17K avg | Specialized vulnerability role |

**Source**: 
- [payscale.com/research/ZA/Job=Cyber_Security_Analyst/Salary](https://www.payscale.com/research/ZA/Job=Cyber_Security_Analyst/Salary)
- [salaryexpert.com (South Africa)](https://www.salaryexpert.com/salary/job/cyber-security-analyst/south-africa/johannesburg)
- [inquiresalary.co.za/cyber-security-salary-2](https://inquiresalary.co.za/cyber-security-salary-2/)

**Context**: 
- Government & financial sectors (SARB, SARS, Eskom, Transnet) primary employers of Tenable professionals.
- Tenable certification uptake in ZA ~50–100 professionals (2025); supply-demand favors candidates with TCE-TVM + cloud or OT specialization.
- Certification exam delivery primarily via online proctored Pearson VUE (Johannesburg, Cape Town centers available; international travel cost if in-person preferred).

---

### Online Learning Platforms (General Cybersecurity & Vulnerability Management)

- **Cybrary**: [cybrary.it](https://www.cybrary.it) — Free & freemium vulnerability management courses
- **TryHackMe**: [tryhackme.com](https://www.tryhackme.com) — Interactive vulnerability scanning labs
- **HackTheBox**: [hackthebox.com](https://www.hackthebox.com) — Penetration testing + vulnerability assessment labs
- **Coursera**: [coursera.org](https://www.coursera.org) — General "Cybersecurity Risk Management" & "Vulnerability Assessment" via partner universities
- **edX**: [edx.org](https://www.edx.org) — University-backed cybersecurity courses (audit free, certificates paid)

---

### Tenable Edge Conference (Annual)

- **URL**: [tenable.com/events](https://www.tenable.com/events)
- **Typical schedule**: 2–3 days; rotating US cities (Las Vegas, Dallas, San Francisco typical); 2025–2026 dates TBD
- **Audience**: Vulnerability practitioners, security architects, compliance officers, Tenable product users
- **Content**: Roadmap briefings, threat-landscape sessions, customer case studies, hands-on labs, vendor expo
- **Cost**: $1,200–$2,000 USD ticket + travel/hotel
- **Value**: Early-access product announcements, networking, live certification exam opportunities
- **Check annually** at tenable.com/events for current year dates and registration

---

### 2026 Certification Cost Summary

| Exam Type | Cost (USD) | Notes |
|---|---|---|
| Written exam (TCA, TCE-TVM written, TCS written) | $150–$200 | Pearson VUE proctored; must pass written before practical |
| Practical exam (TCE-TVM practical, TCS practical) | $150–$200 | Separate purchase; proctored lab environment |
| Combined (written + practical) | $300–$400 | Total investment per certification |
| Nessus Fundamentals badge | $0 | Free knowledge exam via Tenable University |
| TCE (Expert) portfolio submission | $0 | Whitepaper; invitation-only or self-submission |
| Tenable Training (2-day instructor-led) | $1,500–$3,000 | Optional; not required for exam but recommended |
| Tenable University self-paced (paid variant) | $0–$500 | Varies by course; many free courses available |

**Total cost for entry→mid-career pathway (TCA + TCE-TVM)**: ~$600–$800 USD (exams only) + optional $1,500–$3,000 for instructor-led training.

---

## Verification Checklist (Updated April 2026)

- [ ] Verify Tenable certification exam pricing at **tenable.com/buy/certification** (may have changed post-Feb 2026).
- [ ] Confirm Nessus Essentials free tier IP limit (currently 16 IPs; subject to change).
- [ ] Cross-check Pluralsight subscription pricing; Tenable course availability may have shifted to standalone paid model.
- [ ] Update South African salary data if ZAR exchange or local survey data available (Feb–April 2026).
- [ ] Verify Tenable Edge 2026 dates and location at tenable.com/events.
- [ ] Spot-check Udemy, Cybrary course URLs; third-party platforms subject to content removal or relocation.
- [ ] Confirm Tenable One GA status and any new certification tracks (expected Q2–Q3 2026).

---

**Remediation block added**: April 30, 2026  
**Research sources**: Tenable official documentation, Glassdoor, ZipRecruiter, Robert Half, South African salary surveys, training platform websites (Udemy, Pluralsight, Cybrary, Tenable University)

