# Deep Dive — Master Research Checklist

**Purpose:** Comprehensive list of every domain, sub-specialty, vendor ecosystem, certification body, role roadmap, and supporting-resource category that needs deep research. This is the full scope before any agents are dispatched.

**Rule:** Every cert, book, course, and salary number in the resulting `.md` files must have a verifiable source URL. **No source = not included.**

**Status legend:**
- [ ] Not started
- [P] Partially covered (existing platform pages or earlier research) — needs deeper, fully-cited treatment
- [x] Deep dive `.md` complete in this folder

Last updated: April 30, 2026

---

## ✅ COMPLETED THROUGH WAVE 10 (April 30, 2026)

**12 domain deep-dives** (DOM01–DOM12): Foundation, Networking, Systems/OS, Cloud, DevOps/SRE, Security, Identity & Endpoint, Data/AI, Architecture, IT Mgmt, Software Eng, QA/SDET.

**56 ecosystem deep-dives** (D01–D56): Microsoft Dynamics 365, Oracle, Healthcare IT, AWS, Azure+M365, Workday, Adobe Experience Cloud, Observability, Salesforce, SAP, ServiceNow, IBM, VMware/Broadcom, Cisco, Juniper, HashiCorp, Palo Alto, CrowdStrike, Atlassian, MuleSoft, Fortinet, Check Point, F5, NetApp, Pure Storage, Veeam, Nutanix, Okta, CyberArk, Snowflake, Databricks, Splunk, Aruba/HPE, Arista, SailPoint, Cloudflare, SentinelOne, Zscaler, Akamai, Commvault, Rubrik, Cohesity, Citrix, Tableau, Wiz, Druva, Veritas+Arctera, Imperva, BeyondTrust, Delinea, Trend Micro, Sophos, Mimecast, Proofpoint, Tenable, Qualys.

**10 role roadmaps** (R01–R10): Help Desk → Sysadmin, Network Engineer, Cloud Engineer → Architect, DevOps/SRE/Platform, SOC → CISO, Data Analyst → AI Engineer, Software Engineer ladders, Architect, IT Leadership → CIO, PM/GRC.

**13 industry verticals** (IND01–IND13): Financial Services, Government/Defense, Manufacturing/OT, Retail/E-commerce, Telecom, Energy/Utilities, Education/EdTech, Insurance, Aviation/Aerospace, Legal, Hospitality/Travel, Real Estate/PropTech, Media/Broadcasting.

**21 specialty roles** (SR01–SR21): Mainframe→Cloud, Wireless, Pentester, DFIR, Privacy Eng, ICS/OT Security, Bug Bounty, Salesforce CTA, SAP Architect, ServiceNow CMA, Dynamics, Oracle DBA, Workday, Game Dev, Embedded, Mobile, Sales Eng, DevRel, TPM, Tech Writer, Healthcare IT.

**9 cross-cutting** (CC01–CC09): AI impact per role, International salary (incl. ZA), Career-changer backgrounds, First-job mechanics, Compensation negotiation, Side income/consulting, Visa/geographic, Burnout/mental health, Diversity/accessibility.

**Total: 120 deep-dive files, ~5.4 MB, ~1,050,000 words, ~11,500+ cited URLs.**

See [INDEX.md](INDEX.md) for the full file list with links.

---

## PART 1 — Domain deep dives (one .md per domain)

Comprehensive treatment of every cert in the domain × 4 levels with all supporting resources.

### 1.1 Foundation / IT Support / Helpdesk
- [P] CompTIA A+ (220-1201/1202)
- [P] CompTIA ITF+
- [P] Google IT Support Professional Cert
- [P] Cisco CCST IT Support (100-140)
- [P] Microsoft 365 Fundamentals (MS-900)
- [ ] Apple Certified Support Professional (ACSP)
- [ ] HDI Customer Service / Desktop Support certifications
- [ ] BICSI Installer 1 (entry-level cabling for IT support)

### 1.2 Networking — General
- [P] CompTIA Network+ (N10-009)
- [P] Cisco CCNA / CCNP Enterprise / CCIE EI
- [P] Cisco CCDE
- [ ] Cisco CCNP Service Provider / CCIE SP
- [ ] Cisco CCNP Data Center / CCIE DC
- [ ] Cisco CCNP Collaboration / CCIE Collab (VoIP / UC)
- [ ] Cisco DevNet → Cisco Automation (rebranded Feb 3, 2026)

### 1.3 Networking — Specialty Vendors
- [P] Juniper JNCIA → JNCIE (DC, SP, ENT, SEC, Cloud, MistAI)
- [P] Aruba/HPE ACA → ACE → ACMX (campus, mobility, ClearPass)
- [P] Arista ACE-A → ACE-L7
- [P] Mikrotik MTCNA → MTCRE → MTCSE → MTCINE
- [P] Huawei HCIA → HCIP → HCIE (Datacom, Cloud, Storage)
- [ ] Extreme Networks ECNS / ECP
- [ ] Nokia / Alcatel-Lucent (NRS-I → NRS-II)
- [ ] Brocade (Broadcom) certifications
- [ ] Allied Telesis certifications
- [ ] Ubiquiti (UBWA, UEWA, UFSP)

### 1.4 Networking — Wireless Specialty
- [P] CWNP (CWNA → CWSP → CWAP → CWDP → CWIIP → CWNE)
- [P] Cisco CCNP Wireless (300-425 ENWLSD, 300-430 ENWLSI)
- [P] Cisco Meraki ECMS (500-220)
- [P] Aruba ACMX / ACMP Mobility
- [P] Juniper Mist (JNCIA-MistAI JN0-253)
- [P] Ruckus RCWA / RCNA / RCP-Wireless
- [ ] Mojo Networks / Arista CV-CUE wireless
- [ ] Cambium Networks (point-to-point WISP)

### 1.5 Networking — SD-WAN / SASE / SSE
- [P] Cisco Catalyst SD-WAN (300-415 ENSDWI)
- [P] VMware/Broadcom VeloCloud certifications
- [P] Versa Networks (VCSA / VCSP / VCSE)
- [P] Fortinet Secure SD-WAN (NSE7_SDW)
- [P] Palo Alto Prisma SD-WAN
- [P] HPE Aruba EdgeConnect (ACSDP)
- [ ] Cato Networks SASE certifications
- [ ] Zscaler ZDX / ZIA / ZPA Certifications (ZTCA, ZDTA, etc.)
- [ ] Netskope Certified

### 1.6 Networking — VoIP / Unified Communications
- [ ] Cisco CCNP Collaboration (CLCOR 350-801, CLAUTO 300-835, etc.)
- [ ] Microsoft Teams Voice Engineer (MS-721, retired? verify)
- [ ] Avaya certifications (ACSS, ACDS)
- [ ] Genesys certifications (cloud contact center)
- [ ] RingCentral / 8x8 partner certs
- [ ] Polycom / Poly certifications
- [ ] AudioCodes certifications

### 1.7 Networking — Industrial / OT
- [ ] GIAC GICSP (Industrial Cyber Security Professional)
- [ ] ISA/IEC 62443 Cybersecurity Specialist
- [ ] CISA ICS Cybersecurity training
- [ ] Rockwell / Siemens / Schneider PLC certs

### 1.8 Systems / OS — Windows
- [P] Microsoft AZ-800/801 → AZ-802
- [ ] MCSA (retired but legacy holders)
- [ ] Microsoft Active Directory deep certs (verify which still exist)
- [ ] PowerShell (no formal cert; community standards)

### 1.9 Systems / OS — Linux
- [P] Red Hat RHCSA (EX200) → RHCE (EX294) → RHCA
- [P] Linux Foundation LFCS / LFCE / LFCA
- [ ] LPI LPIC-1 / LPIC-2 / LPIC-3
- [ ] CompTIA Linux+ (XK0-005)
- [ ] SUSE Certified Administrator / Engineer
- [ ] Oracle Linux certifications
- [ ] Ubuntu / Canonical certifications

### 1.10 Systems / OS — Mainframe / Legacy
- [P] IBM Z mainframe (z/OS Sysprog, COBOL Developer, CICS, IMS, DB2)
- [ ] Open Mainframe Project Master the Mainframe
- [ ] IBM Z Xplore (free training) — lead to which certs
- [ ] IBM AIX / Power Systems
- [ ] Oracle Solaris (legacy, declining)

### 1.11 Systems / OS — macOS / Apple
- [ ] Apple Certified Support Professional (ACSP)
- [ ] Apple Certified IT Professional
- [ ] Jamf Certified Tech / Admin / Expert / Developer (MDM)
- [ ] Mosyle / Kandji / Addigy admin training

### 1.12 Cloud — AWS (full lineup)
- [P] AWS Cloud Practitioner (CLF-C02)
- [P] AWS SAA-C03 / SAP-C02 / DVA-C02 / SOA-C03 / DOP-C02
- [P] AWS Specialty: SCS-C03, ANS-C01, DEA-C01, MLS-C01 (retiring), MLA, AIF-C01
- [ ] AWS Machine Learning Engineer Associate (new MLA)
- [ ] AWS Generative AI Developer Professional (verify)

### 1.13 Cloud — Microsoft Azure (full lineup)
- [P] AZ-900 / 104 / 204 (retiring) / 305 / 400 / 500 (retiring → SC-500) / 700 / 800/801 (retiring → 802)
- [ ] AI-900 (retiring → AI-901) / AI-102 (retiring → AI-103) / AI-200 (new)
- [ ] DP-900 / 100 / 203 (retired) / 300 / 700 (Fabric)
- [ ] PL-300 (Power BI Data Analyst)
- [ ] PL-200 / 400 / 600 / 900 (Power Platform)

### 1.14 Cloud — Google Cloud (full lineup)
- [P] Cloud Digital Leader, ACE, PCA, PCDevOps, PMLE, PDE, PCSE
- [ ] Cloud Database Engineer
- [ ] Cloud Network Engineer
- [ ] Workspace Administrator
- [ ] Generative AI Leader / Developer (verify)

### 1.15 Cloud — Oracle Cloud Infrastructure (OCI)
- [ ] OCI Foundations Associate (1Z0-1085-24)
- [ ] OCI Architect Associate (1Z0-1072) / Professional (1Z0-997)
- [ ] OCI Developer Associate (1Z0-1084)
- [ ] OCI Operations Associate (1Z0-1067)
- [ ] OCI Data Science Professional (1Z0-1110)
- [ ] OCI Generative AI Professional (1Z0-1127)
- [ ] OCI Multicloud Architect Associate

### 1.16 Cloud — IBM Cloud
- [ ] IBM Cloud Advocate (foundational, free)
- [ ] IBM Cloud Professional Architect / Developer / SRE
- [ ] IBM Watson certifications

### 1.17 Cloud — Alibaba Cloud
- [ ] ACA Cloud Computing
- [ ] ACP Cloud Computing
- [ ] ACE Cloud Computing
- [ ] Big Data, AI, Security ACA/ACP tracks

### 1.18 Cloud — FinOps
- [ ] FinOps Foundation (FOCP — FinOps Certified Practitioner)
- [ ] FinOps Certified Professional / Engineer
- [ ] FinOps Certified Practitioner Practitioner Plus

### 1.19 DevOps / SRE / Platform — Kubernetes (CNCF)
- [P] KCNA (entry), CKAD, CKA, CKS
- [ ] Kubestronaut (all 4 K8s certs + KCSA)
- [ ] KCSA (Kubernetes Cloud Security Associate)
- [ ] Prometheus Certified Associate (PCA — CNCF)
- [ ] Istio Certified Associate / Professional (verify)
- [ ] Argo Certified (verify availability)

### 1.20 DevOps / SRE / Platform — HashiCorp
- [P] Terraform Associate (003 → 004)
- [P] Vault Associate (003) / Operations Professional
- [P] Consul Associate (003) / Operations Professional
- [ ] Boundary, Nomad, Packer cert paths (if exist in 2026)

### 1.21 DevOps / SRE / Platform — Source Control / CI-CD
- [P] GitHub Foundations / Actions / Advanced Security / Copilot / Administration
- [ ] GitLab Certified Associate / Engineer / Specialist
- [ ] CircleCI / Travis / Jenkins (community certifications)
- [ ] Atlassian Bamboo / Bitbucket admin
- [ ] Spinnaker / ArgoCD / Flux community certifications

### 1.22 DevOps / SRE / Platform — Container & Tools
- [P] Docker Certified Associate (DCA — Mirantis-managed)
- [ ] Red Hat OpenShift (EX180, EX280 Admin, EX358 Service Mesh)
- [ ] Buildkite, Drone, Tekton (community, verify formal certs)

### 1.23 DevOps / SRE / Platform — Observability
- [ ] Datadog Foundation / Associate
- [ ] New Relic Full-Stack Associate
- [ ] Splunk Observability (post-Cisco)
- [ ] Dynatrace Associate / Professional
- [ ] AppDynamics certifications
- [ ] Honeycomb (likely no formal cert; tooling depth)
- [ ] Grafana / Prometheus (community level)
- [ ] PagerDuty Certifications (Incident Response, On-Call)

### 1.24 DevOps / SRE / Platform — IaC + Multi-Cloud
- [P] Terraform Associate
- [ ] Pulumi Fundamentals
- [ ] Ansible Certified Specialist (Red Hat EX407, EX374 Automation Platform Admin)
- [ ] Chef / Puppet certifications (declining)
- [ ] CloudFormation deep training (no formal cert; via SAP-C02)

### 1.25 Security — Defensive Foundations
- [P] CompTIA Security+ (SY0-701)
- [P] CompTIA CySA+ (CS0-003)
- [P] ISC2 CC, SSCP, CISSP, CCSP, CSSLP, CGRC
- [P] ISACA CISA, CISM, CRISC, CGEIT, CDPSE
- [ ] EC-Council CEH v13, CHFI, ECSA
- [ ] CompTIA CASP+ / SecurityX (CAS-005)

### 1.26 Security — Offensive (Pentest / Red Team)
- [P] OffSec OSCP (PEN-200), OSEP (PEN-300), OSWE (WEB-300), OSED (EXP-301), OSCE3
- [P] GIAC GPEN, GXPN, GMOB, GAWN, GWAPT
- [P] EC-Council CEH Practical, LPT
- [ ] eLearnSecurity / INE eJPT, eCPPT, eCPTX
- [ ] CREST CPSA / CRT / CCT
- [ ] PNPT (TCM Security Practical Network Penetration Tester)
- [ ] Hack The Box CPTS / CBBH / CWEE

### 1.27 Security — DFIR (Digital Forensics & Incident Response)
- [P] GIAC GCFA, GCFE, GREM, GNFA, GCIA, GCFR, GCED
- [ ] EC-Council CHFI
- [ ] IACIS CFCE (law-enforcement leaning)
- [ ] Magnet Forensics Certifications (AXIOM)
- [ ] Cellebrite CCO / CCPA (mobile forensics)
- [ ] Volatility Certified Examiner (memory forensics)

### 1.28 Security — Cloud Security
- [P] AWS Certified Security Specialty (SCS-C03)
- [P] Microsoft SC-100 (architect), SC-200 (analyst), SC-300, SC-400, SC-500 (replaces AZ-500)
- [P] GCP Professional Cloud Security Engineer
- [P] ISC2 CCSP
- [ ] Cloud Security Alliance CCSK
- [ ] CCSK Plus (hands-on)

### 1.29 Security — Privacy
- [P] IAPP CIPP/E, CIPP/US, CIPP/A, CIPP/C, CIPP/G
- [P] IAPP CIPM, CIPT, FIP
- [ ] ISO/IEC 27701 Lead Implementer / Lead Auditor
- [ ] PECB Certified Data Protection Officer

### 1.30 Security — GRC / Compliance / Audit
- [P] ISACA CISA, CRISC, CGEIT
- [ ] ISC2 CGRC (formerly CAP)
- [ ] HCISPP (healthcare information security)
- [ ] ISO/IEC 27001 Lead Implementer / Lead Auditor (PECB, BSI, etc.)
- [ ] PCI-DSS specific certs (PCIP, ISA, QSA — for QSA companies)
- [ ] SOC 2 / SOX assessor training (AICPA)

### 1.31 Security — ICS / OT / Critical Infrastructure
- [P] GIAC GICSP, GRID, GCIP
- [P] ISA/IEC 62443 Cybersecurity Specialist
- [ ] Claroty / Dragos / Nozomi platform certifications
- [ ] CISA ICS-CERT training (free, US)

### 1.32 Security — AppSec / DevSecOps
- [ ] OffSec OSWE (Web Exploit Development)
- [ ] GIAC GWAPT
- [ ] ISC2 CSSLP
- [ ] HackEDU / Secure Code Warrior platform certs
- [ ] Snyk Cybersecurity Career Path
- [ ] OWASP MASVS / ASVS reference (not certs but standards)

### 1.33 Security — Threat Intelligence
- [P] GIAC GCTI
- [ ] SANS FOR578 (CTI course)
- [ ] CREST Practitioner Threat Intelligence Analyst (CPTIA)
- [ ] MITRE ATT&CK Defender (MAD) certifications

### 1.34 Security — Specific Vendor Platforms
- [P] Palo Alto NGFW Engineer, Cortex (PCSAE, PCDRA, PCCSE)
- [P] Fortinet (NSE 1-8 returning July 2026)
- [P] Check Point CCSA / CCSE / CCTE / CCSM (R82)
- [P] F5 BIG-IP 101 → 401, 402
- [P] Cisco SCOR (CCNP Security)
- [x] CrowdStrike CCFA, CCFR, CCFH (D18)
- [x] SentinelOne Singularity Specialist (D37)
- [ ] Cybereason XDR Certifications
- [x] Trend Micro certifications (D51)
- [x] Sophos Engineer Associate / Specialist (D52)
- [x] Mimecast / Proofpoint email security (D53, D54) — Abnormal pending
- [x] Tenable / Qualys vulnerability platforms (D55, D56) — Rapid7 pending

### 1.35 Identity & Endpoint — IAM / IGA / PAM
- [P] Microsoft SC-300, MD-102, MS-102
- [x] Okta Certified Administrator / Developer / Consultant / Architect (D28)
- [ ] Ping Identity Certified Associate / Professional
- [x] SailPoint IdentityIQ / IdentityNow Engineer / Architect (D35)
- [x] CyberArk Defender / Sentry / Guardian (D29)
- [x] BeyondTrust Certified Implementer (D49)
- [x] Delinea Certified Associate / Engineer (D50)
- [ ] One Identity Safeguard / Active Roles
- [ ] Saviynt Identity Cloud Certification

### 1.36 Identity & Endpoint — MDM / UEM / EDR
- [ ] VMware/Omnissa Workspace ONE Pro
- [ ] Jamf Certified Tech / Admin / Expert / Developer
- [ ] Microsoft Intune (covered via MD-102, SC-300)
- [ ] Citrix Endpoint Management
- [ ] Mosyle / Kandji / Addigy

### 1.37 Data / AI — Microsoft
- [P] DP-900, DP-100, DP-300, DP-700 (Fabric), AI-900 (retiring), AI-901, AI-102 (retiring), AI-103, AI-200
- [P] PL-300 (Power BI)

### 1.38 Data / AI — AWS / GCP / Oracle
- [P] AWS Data Engineer Associate (DEA-C01)
- [P] AWS ML Specialty (MLS-C01 retiring), ML Engineer Associate, AI Practitioner (AIF-C01)
- [P] GCP Pro Data Engineer, Pro ML Engineer
- [ ] Oracle Cloud Data Science Professional, Generative AI Professional

### 1.39 Data / AI — Vendor Platforms
- [P] Snowflake SnowPro Core (COF-C03), Advanced Architect, DE, DS, AdminP
- [P] Databricks DE Associate / Pro, ML Associate / Pro, Data Analyst Associate
- [P] NVIDIA NCA-AIIO, NCP-AII, NVIDIA Certified DLI courses
- [ ] Tableau Desktop Specialist / Certified Associate / Server Architect
- [ ] Microsoft Power BI PL-300
- [ ] Looker (now Google) certifications
- [ ] dbt Analytics Engineer / Fundamentals
- [ ] Confluent Certified Developer / Administrator (Apache Kafka)
- [ ] Redis Certified Developer
- [ ] MongoDB Associate Developer / DBA
- [ ] Cassandra / DataStax certifications
- [ ] Neo4j Certified Professional
- [ ] Elastic Engineer / Analyst / Observability

### 1.40 Data / AI — Specific to AI/LLM
- [ ] Hugging Face certifications / courses
- [ ] OpenAI no formal certs but Microsoft AI-102 covers Azure OpenAI
- [ ] Anthropic — no certs as of 2026
- [ ] LangChain certifications (verify)
- [ ] DeepLearning.AI specializations (Coursera) — not certs but credentialed
- [ ] Stanford CS229 / CS224n / CS231n free courses
- [ ] fast.ai practical deep learning

### 1.41 Architecture
- [P] TOGAF Foundation (OGEA-101) / Practitioner (OGEA-102) / Combined (OGEA-103)
- [P] Open Group Open CA (Distinguished / Master Certified Architect)
- [ ] Zachman Enterprise Architecture Certification
- [ ] SAFe Architect (SA, SPC for transformation)
- [ ] BIAN Foundations / Certified Practitioner (banking architecture)
- [ ] FEAF (Federal Enterprise Architecture Framework)

### 1.42 IT Management — Project / Program
- [P] PMI CAPM, PMP, PgMP, PfMP, PMI-ACP, PMI-RMP, PMI-SP
- [P] PRINCE2 Foundation, Practitioner, Agile Foundation/Practitioner
- [ ] AXELOS MoP, MSP, P3O (programme & portfolio)
- [ ] APMG / APM (UK) certifications
- [ ] DSDM Atern

### 1.43 IT Management — Service Management (ITIL)
- [P] ITIL 4 Foundation, Specialist (3 modules), Strategic Leader, Master
- [ ] ITIL 4 Practice Manager (new path)
- [ ] FitSM (lightweight ITSM)
- [ ] HDI Support Center Manager / Director
- [ ] Knowledge-Centered Service (KCS) Foundation

### 1.44 IT Management — Agile / Scrum / Lean
- [P] Scrum.org PSM I/II/III, PSPO I/II/III, PAL, PSK, PSU
- [P] Scrum Alliance CSM, CSPO, A-CSM, A-CSPO, CSP-SM, CSP-PO, CTC, CEC
- [P] Scaled Agile SAFe SA, SSM, SPC, RTE, SP, ASA, etc.
- [ ] Disciplined Agile DASM, DASSM, DAVSC, DAC
- [ ] LeSS Practitioner / LeSS Trainer
- [ ] Nexus / Spotify Engineering Culture references
- [ ] Lean Six Sigma Yellow / Green / Black / Master Black Belt

### 1.45 IT Management — Audit / Risk / Compliance
- [P] ISACA CISA, CISM, CRISC, CGEIT, CDPSE
- [P] ISC2 CGRC, CISSP, CCSP
- [ ] IIA CIA (Certified Internal Auditor) — for IT auditors crossing into general audit
- [ ] ISO 31000 Lead Risk Manager
- [ ] Open FAIR (FAIR Institute)
- [ ] ITAF (ISACA Information Technology Assurance Framework)

### 1.46 Software Engineering — Languages
- [ ] Oracle Java SE (1Z0-829 / 1Z0-830)
- [ ] Microsoft .NET certifications (current state in 2026 — verify)
- [ ] Python Institute PCEP, PCAP, PCPP1, PCPP2
- [ ] Certified Associate in Python Programming (Python Institute)
- [ ] Linux Foundation Rust certifications
- [ ] Go (no formal cert — Google Cloud has Go usage in PCDevOps)
- [ ] PHP Zend Certified Engineer (legacy but exists)
- [ ] Ruby Association Certified Programmer

### 1.47 Software Engineering — Frontend / Web
- [ ] Microsoft Web Development Fundamentals
- [ ] Google Mobile Web Specialist (verify still active)
- [ ] freeCodeCamp (multiple paths, recognized but not formal certs)
- [ ] W3Schools certifications (verify quality)

### 1.48 Software Engineering — Mobile
- [ ] Apple Swift Certified User / Developer
- [ ] Google Associate Android Developer
- [ ] React Native (community, no formal cert)
- [ ] Flutter (Google credentialed via DeepLearning.AI? verify)
- [ ] Xamarin (deprecated → MAUI)

### 1.49 Software Engineering — Game Development
- [ ] Unity Certified User / Associate / Professional / Programmer / Artist
- [ ] Unreal Engine Authorized Instructor / Verified Specialist
- [ ] Adobe Animate / Creative Suite (game-art adjacent)

### 1.50 Software Engineering — Embedded / Firmware / Hardware
- [ ] ARM Accredited Engineer / Architect
- [ ] IEEE Certified Software Development Professional (CSDP)
- [ ] Raspberry Pi / Arduino — community, no formal certs
- [ ] PCB design certifications (IPC CID)

### 1.51 QA / SDET
- [P] ISTQB CTFL → Advanced (Test Analyst, Test Manager, Technical Test Analyst, Test Automation Engineer) → Expert
- [ ] ISTQB Specialist tracks (Mobile, Performance, Security, AI Testing, Gambling, Usability, Acceptance, Model-Based, Test Automation Engineering)
- [ ] Tricentis Tosca Automation Specialist 1, 2, 3
- [ ] Selenium Webdriver certifications (verify reputable)
- [ ] PostgreSQL Associate Database Administrator (for DB testing)
- [ ] Cypress (community)
- [ ] Playwright (community)

---

## PART 2 — Specialty / Vendor Ecosystems (deep .md per ecosystem)

### 2.1 Salesforce — Full Cert Lineup
- [P] Administrator (ADM-201), Advanced Admin (ADM-211), Associate
- [P] Platform App Builder, Developer I, Developer II
- [P] Sales Cloud / Service Cloud / Marketing Cloud / Experience Cloud / Industries Cloud / Tableau / Slack consultants
- [P] Application Architect (4-cert composite)
- [P] System Architect (4-cert composite)
- [P] Technical Architect (CTA — board-reviewed, ~1,200 worldwide)
- [P] B2B / B2C Solution Architect
- [ ] Marketing Cloud Engagement / Account Engagement (Pardot) Specialist & Consultant
- [ ] CPQ Specialist (Configure Price Quote)
- [ ] Field Service Consultant
- [ ] Industry Cloud — Health, Financial, Manufacturing, Public Sector, Education, etc.
- [ ] OmniStudio Developer / Consultant (Vlocity)
- [ ] MuleSoft Developer / Architect
- [ ] Heroku Architect
- [ ] Slack Admin / Developer
- [ ] Tableau Specialist + CRM Analytics

### 2.2 SAP — Full Cert Lineup
- [P] S/4HANA Cloud Public Implementation (C_S4CPR)
- [P] BTP Associate (C_BTPP) / Professional (P_BTPA)
- [P] S/4HANA Functional: FI (C_TS4FI), MM (C_TS4MM), SD (C_TS4SD), CO (C_TS4CO), HR (C_THR), PP, PM, QM, EWM, TM, WM
- [P] ABAP Cloud Developer (C_ABAPD), ABAP Senior (P_ABAPD)
- [ ] SAP HANA Technology Associate / Professional
- [ ] SAP Basis Administration
- [ ] SAP SuccessFactors (Employee Central, Learning, Performance & Goals, Compensation, Recruiting, Onboarding, Talent Acquisition, etc.)
- [ ] SAP Ariba (procurement)
- [ ] SAP Fieldglass
- [ ] SAP Concur
- [ ] SAP CX (Commerce Cloud, Customer Data, Marketing, Sales, Service)
- [ ] SAP S/4HANA Solution Architect (P_S4FIN), Enterprise Architect (P_S4EA)
- [ ] SAP Authorized Trainer / Educator certifications

### 2.3 ServiceNow — Full Cert Lineup
- [P] CSA (Certified System Administrator), CIS-DF (Data Foundations, free until June 2026)
- [P] CAD (Certified Application Developer)
- [P] CIS-* (Implementation Specialist) modules:
  - CIS-ITSM, CIS-HR, CIS-CSM, CIS-VRM, CIS-RC, CIS-Security Operations
  - CIS-FSM (Field Service), CIS-Discovery, CIS-Event Mgmt, CIS-PPM (PPM/SPM)
  - CIS-EM, CIS-VR, CIS-CSA-MM
- [P] CTA (Certified Technical Architect — invitation-only)
- [P] CMA (Certified Master Architect — highest)
- [ ] Microcerts (App Engine Studio, Performance Analytics, Predictive Intelligence, Conversational Interfaces)
- [ ] Service Mapping, Discovery, CMDB Health
- [ ] Now Assist / GenAI specialty

### 2.4 Microsoft Dynamics 365 (USER MENTIONED — needs deep coverage)
- [ ] Power Platform Fundamentals (PL-900)
- [ ] Power Platform App Maker (PL-100)
- [ ] Power Platform Developer (PL-400)
- [ ] Power Platform Functional Consultant (PL-200)
- [ ] Power BI Data Analyst (PL-300)
- [ ] Power Platform Solution Architect (PL-600)
- [ ] D365 Sales Functional Consultant (MB-210)
- [ ] D365 Marketing Functional Consultant (MB-220)
- [ ] D365 Customer Service Functional Consultant (MB-230)
- [ ] D365 Field Service Functional Consultant (MB-240)
- [ ] D365 Finance Functional Consultant (MB-310)
- [ ] D365 Supply Chain Management Functional Consultant (MB-330)
- [ ] D365 Manufacturing Functional Consultant (MB-320)
- [ ] D365 Commerce Functional Consultant (MB-340)
- [ ] D365 Business Central Functional Consultant (MB-800)
- [ ] D365 Finance and Operations Apps Solution Architect Expert (MB-700)
- [ ] D365 Finance and Operations Apps Developer Associate (MB-500)
- [ ] D365 Customer Insights Specialty
- [ ] Microsoft Cloud for Sustainability / Healthcare / Retail / Financial Services (industry clouds)

### 2.5 Oracle Ecosystems (USER MENTIONED — needs deep coverage)
- [ ] Oracle Database 19c / 23ai Administrator (1Z0-082, 1Z0-083, 1Z0-085)
- [ ] Oracle Database SQL Certified Associate (1Z0-071)
- [ ] Oracle Database PL/SQL Developer
- [ ] Oracle Database Performance Management & Tuning
- [ ] Oracle MySQL HeatWave Implementation Associate / Database Administrator
- [ ] Oracle Cloud Infrastructure (OCI) Foundations / Architect / Developer / Operations / Security / Networking
- [ ] OCI AI Foundations Associate / Generative AI Professional / Data Science Professional
- [ ] OCI Multicloud Architect
- [ ] Oracle Fusion Cloud Applications: Financials, HCM, SCM, EPM, CX (Sales, Service)
- [ ] Oracle E-Business Suite (legacy but still huge installed base)
- [ ] Oracle JD Edwards EnterpriseOne
- [ ] Oracle PeopleSoft (legacy)
- [ ] Oracle Siebel CRM (legacy)
- [ ] Oracle NetSuite ERP / SuiteFoundation / SuiteCloud Developer / Administrator
- [ ] Oracle Hyperion / EPM Cloud
- [ ] Oracle BI / OAS / OAC
- [ ] Oracle Java SE / EE
- [ ] Oracle GoldenGate
- [ ] Oracle Exadata
- [ ] Oracle Linux

### 2.6 IBM Ecosystem
- [ ] IBM Cloud Advocate (free, foundational)
- [ ] IBM Cloud Professional Architect / Developer / SRE / Solution Architect
- [ ] IBM Watson certifications (Watson Studio, Watson Assistant, Watsonx)
- [ ] IBM Z / mainframe certifications (System Programmer, App Developer, DBA for DB2)
- [ ] IBM AIX / Power Systems
- [ ] IBM Storage (FlashSystem, Spectrum)
- [ ] IBM Cloud Pak (Apps, Data, AIOps, Integration, Security, Network Automation)
- [ ] IBM MQ / Integration Bus / API Connect

### 2.7 HPE Ecosystem
- [ ] HPE certifications across server / storage / networking
- [ ] HPE Aruba certifications (covered in networking)
- [ ] HPE GreenLake certifications

### 2.8 Workday (USER ALMOST CERTAINLY MEANT THIS)
- [ ] Workday Pro certifications (gated, partner-only — explain access barrier)
- [ ] Workday HCM, Financials, Adaptive Planning, Studio, Integration
- [ ] Workday Extend Pro

### 2.9 Adobe Experience Cloud
- [ ] Adobe Certified Expert (ACE) tracks: AEM (Sites, Assets, Forms), Analytics, Target, Marketo, Workfront, Commerce (Magento), Campaign, Audience Manager, Customer Journey Analytics
- [ ] Adobe Certified Professional / Master / Expert business / developer / architect tiers

### 2.10 NetSuite (Oracle subsidiary)
- [ ] NetSuite SuiteFoundation
- [ ] NetSuite Administrator
- [ ] NetSuite ERP Consultant
- [ ] NetSuite Financial User
- [ ] NetSuite SuiteCloud Developer

### 2.11 MuleSoft (Salesforce subsidiary)
- [ ] MuleSoft Certified Developer Level 1 / 2
- [ ] MuleSoft Certified Integration Architect
- [ ] MuleSoft Certified Platform Architect
- [ ] MuleSoft Anypoint Specialist tracks

### 2.12 Atlassian
- [ ] Atlassian Certified Professional (Jira Administrator, Jira Software, Jira Service Management)
- [ ] Confluence Administrator
- [ ] Atlassian Cloud Administrator
- [ ] Bitbucket Administrator

### 2.13 Slack (Salesforce subsidiary)
- [ ] Slack Admin certifications
- [ ] Slack Developer certifications

### 2.14 Splunk (Cisco subsidiary)
- [P] Splunk Core Certified User / Power User
- [P] Splunk Enterprise Admin / Architect
- [P] Splunk Cybersecurity Defense Analyst / Engineer
- [ ] Splunk Cloud Admin
- [ ] Splunk SOAR Admin
- [ ] Splunk Observability (post-acquisition)

### 2.15 Datadog
- [ ] Datadog Foundation
- [ ] Datadog Associate (Cloud Monitoring, Cloud Cost Management, Application Performance, Security, Log Mgmt, Infrastructure)
- [ ] Datadog Certified Engineer

### 2.16 New Relic
- [ ] New Relic Full-Stack Observability
- [ ] New Relic Engineer / Architect

### 2.17 Dynatrace
- [ ] Dynatrace Associate / Professional / Master

### 2.18 PagerDuty
- [ ] PagerDuty Incident Responder
- [ ] PagerDuty Service Owner
- [ ] PagerDuty Admin / Architect

### 2.19 Storage Vendors (deep)
- [P] NetApp NCDA / NCIE-DP / NCIE-SAN / NCSIE / NCDS
- [P] Pure Storage PCDSA / Architect
- [P] Dell DCS-IE / DCS-SA / DCS-Architect (PowerStore, PowerMax, PowerScale, ECS)
- [P] HPE Storage (Alletra)
- [P] IBM Storage (FlashSystem, Spectrum)
- [P] Hitachi Vantara
- [ ] Quantum (tape / archival)
- [ ] DataCore SANsymphony

### 2.20 Backup / Disaster Recovery Vendors (deep)
- [x] Veeam VMCE → VMCSE → VMCEA (Q2 2026 transition) (D26)
- [x] Commvault Engineer / Master (D40)
- [x] Rubrik RCSA / RSC (D41)
- [x] Cohesity Pro / Specialist (D42)
- [x] Veritas + Arctera VCS / VCP (D47)
- [ ] Acronis Cyber Protect
- [ ] N-able / Acronis MSP-leaning
- [x] Druva (cloud-native backup) (D46)
- [ ] Zerto IT Resilience

### 2.21 Hypervisor / Virtualization (deep)
- [P] VMware/Broadcom VCTA / VCP-VVF / VCP-VCF / VCAP / VCDX
- [P] Nutanix NCA → NCP → NCM → NCX (Master)
- [P] Citrix CCA-V / CCP-V / CCE-V (VDI)
- [ ] Proxmox (no formal cert; community + LPI)
- [ ] Microsoft Hyper-V (covered via AZ-800/801/802)
- [P] Red Hat OpenShift Virtualization (EX316)
- [ ] Nutanix Frame DaaS

---

## PART 3 — Industry-Vertical Specialty Roadmaps (USER MENTIONED healthcare)

### 3.1 Healthcare IT
- [ ] Epic certifications (Resolute, Beaker, Willow, Stork, etc.) — GATED via employer sponsorship
- [ ] Cerner / Oracle Health certifications
- [ ] Meditech certifications
- [ ] Athenahealth, eClinicalWorks, NextGen
- [ ] HCISPP (ISC2 healthcare security)
- [ ] CPHIMS (HIMSS Healthcare Information & Management Systems)
- [ ] HIPAA Privacy / Security training (HITRUST CSF Practitioner, HCISPP)
- [ ] CAHIIM-accredited programs (HIM)
- [ ] FHIR / HL7 standards expertise

### 3.2 Financial Services IT
- [ ] FINRA-related compliance for IT in broker-dealer firms
- [ ] PCI-DSS (PCIP, ISA, QSA)
- [ ] SWIFT certified specialists
- [ ] Bloomberg / Refinitiv / FactSet platform certs
- [ ] Trading platform specifics (FIX protocol, Algo trading platforms)
- [ ] BIAN architecture (banking)

### 3.3 Government / Defense IT
- [ ] FedRAMP-related certifications (3PAO, FedRAMP Ready)
- [ ] DoD 8570 / 8140 IAT/IAM/IASAE compliance certs (Sec+, CISSP, etc.)
- [ ] CMMC Certified Professional (CCP), Certified Assessor (CCA)
- [ ] Public Trust / Secret / TS / TS-SCI clearance requirements
- [ ] ITAR / EAR compliance training

### 3.4 Manufacturing / OT / Industrial IT
- [ ] OT/ICS certs (covered in Security 1.31)
- [ ] Manufacturing Execution Systems (MES) — Siemens Opcenter, Rockwell FactoryTalk
- [ ] PLC / SCADA platform certs (Rockwell, Siemens, Schneider)
- [ ] Supply Chain certifications (CSCP, CLTD)

### 3.5 Retail / E-Commerce IT
- [ ] Adobe Commerce (Magento)
- [ ] Shopify Plus Partner training
- [ ] Salesforce Commerce Cloud (B2B/B2C)
- [ ] SAP Commerce Cloud (Hybris)
- [ ] commercetools certifications

### 3.6 Telecom / Service Provider IT
- [ ] Service Provider networking (CCIE-SP, JNCIE-SP)
- [ ] OSS / BSS platforms (Amdocs, Netcracker, Optiva)
- [ ] 5G certifications (Nokia 5G NRS-I/II, Ericsson, Huawei)
- [ ] Telecom Industry-specific (ITIL telecom, eTOM)

### 3.7 Energy / Utilities IT
- [ ] NERC CIP compliance training (US power grid)
- [ ] Smart grid platform certs (specific vendor)

### 3.8 Education IT
- [ ] LMS admin (Canvas, Blackboard, Moodle, D2L)
- [ ] EdTech-specific certifications

### 3.9 Insurance IT
- [ ] Guidewire (PolicyCenter, ClaimCenter, BillingCenter)
- [ ] Duck Creek
- [ ] Sapiens

### 3.10 Aviation / Aerospace IT
- [ ] AS9100 quality systems
- [ ] Airline-specific platforms (Sabre, Amadeus, Travelport)

### 3.11 Legal IT
- [ ] iManage Work / Filesite
- [ ] Aderant / Elite (legal practice management)
- [ ] Relativity (eDiscovery)
- [ ] LexisNexis / Westlaw research platforms

### 3.12 Hospitality / Travel
- [ ] Oracle Hospitality (Opera, Simphony)
- [ ] Sabre / Amadeus / Travelport
- [ ] Property Management Systems

### 3.13 Real Estate / PropTech
- [ ] Yardi / RealPage
- [ ] Building automation systems (BAS)

### 3.14 Media / Broadcasting IT
- [ ] Avid certifications
- [ ] Adobe Premiere / After Effects (creative — adjacent)
- [ ] CDN / streaming platform expertise

---

## PART 4 — Per-Role Roadmaps (Jr → Mid → Sr → Expert)

One `.md` per role with the full progression including certs at each level, expected experience, salary bands by region, learning resources at each step.

### 4.1 Operations / Foundation
- [ ] Help Desk Tier 1 → Tier 2 → Desktop Support → Field Service
- [ ] Sysadmin (Jr → Sysadmin → Sr → Infrastructure Engineer / Systems Architect)
- [ ] Linux Engineer roadmap
- [ ] Windows Server Engineer roadmap
- [ ] Mainframe Sysprog roadmap
- [ ] Datacenter Technician → DC Engineer → DC Manager
- [ ] Field Service Engineer roadmap

### 4.2 Networking
- [ ] NOC Tech → Network Engineer (Jr) → Network Engineer (Sr) → Network Architect
- [ ] CCIE specialty roadmap (EI, SP, DC, Security, Collab, Wireless)
- [ ] Wireless Engineer roadmap (CWNP CWNA → CWNE)
- [ ] Cloud Network Engineer roadmap (incl. AWS ANS-C01, AZ-700)
- [ ] Network Security Engineer / Firewall Engineer roadmap
- [ ] SD-WAN / SASE Architect roadmap
- [ ] Telecom / SP Network Engineer roadmap
- [ ] OSP Fiber / RAN / 5G Engineer roadmap

### 4.3 Cloud
- [ ] Cloud Engineer (Jr → Senior → Solutions Architect → Principal/Distinguished)
- [ ] Multi-cloud Architect roadmap
- [ ] Cloud Database Administrator roadmap
- [ ] FinOps Engineer / Practitioner roadmap
- [ ] Cloud Security Engineer roadmap

### 4.4 DevOps / SRE / Platform
- [ ] DevOps Engineer (Jr → Sr → Lead) roadmap
- [ ] Site Reliability Engineer (Jr → Sr → Staff/Principal) roadmap
- [ ] Platform Engineer roadmap (Backstage, IDPs)
- [ ] DevSecOps Engineer roadmap
- [ ] Observability Engineer roadmap

### 4.5 Security
- [ ] SOC Analyst L1 → L2 → L3 → SOC Lead → SOC Manager
- [ ] Security Engineer (Jr → Sr → Principal)
- [ ] Security Architect roadmap
- [ ] Penetration Tester / Red Team Operator roadmap
- [ ] Bug Bounty Hunter roadmap (HackerOne / Bugcrowd)
- [ ] DFIR Analyst → IR Lead → IR Manager
- [ ] Threat Intelligence Analyst roadmap
- [ ] Application Security Engineer roadmap
- [ ] Cloud Security Engineer roadmap
- [ ] OT/ICS Security Engineer roadmap
- [ ] Privacy Engineer / DPO roadmap
- [ ] GRC Analyst → GRC Manager → CCO
- [ ] IT Auditor → Sr → Audit Manager → Chief Audit Executive
- [ ] CISO roadmap (multiple entry routes)
- [ ] Chief Risk Officer roadmap

### 4.6 Identity & Endpoint
- [ ] M365 Administrator → Sr → M365 Architect
- [ ] Identity Engineer → IAM Architect
- [ ] Endpoint Engineer → Endpoint Architect
- [ ] Okta / Ping / SailPoint / CyberArk specialist roadmaps

### 4.7 Data / AI
- [ ] Data Analyst → Sr Analyst → Analytics Engineer → Data Engineer
- [ ] Data Engineer (Jr → Sr → Data Architect)
- [ ] DBA → Cloud DBA / Data Engineer (legacy pivot)
- [ ] BI Developer roadmap
- [ ] Data Scientist (different from ML Engineer — research vs engineering split)
- [ ] ML Engineer roadmap
- [ ] AI Engineer roadmap (LLM / RAG specialty — 2024+ role)
- [ ] MLOps Engineer roadmap
- [ ] Data Architect roadmap
- [ ] Chief Data Officer (CDO) roadmap
- [ ] Analytics Engineer (dbt / modern stack)

### 4.8 Architecture
- [ ] Senior Engineer → Solutions Architect → Sr SA → Principal SA
- [ ] Solutions Architect → Enterprise Architect (the structural fork)
- [ ] Enterprise Architect → Chief Architect / VP Architecture
- [ ] Domain architects: Security, Data, Network, Cloud, Application, Integration
- [ ] Pre-Sales Solutions Architect (vendor side — different career)

### 4.9 IT Management
- [ ] Sr Sysadmin → IT Manager → IT Director → CIO / VP IT
- [ ] Service Desk Manager → ITSM Director
- [ ] CIO → CDO (Chief Digital Officer)

### 4.10 Software Engineering
- [ ] Junior Developer (frontend / backend / full-stack / mobile)
- [ ] Mid → Senior → Staff → Principal → Distinguished (IC ladder)
- [ ] Tech Lead → Engineering Manager (the Manager fork)
- [ ] EM → Director → VP Engineering → CTO
- [ ] Manager → IC return path
- [ ] Game Developer (Unity / Unreal) roadmap
- [ ] Embedded Engineer roadmap
- [ ] Mobile Developer roadmap (iOS / Android)
- [ ] Frontend Engineer roadmap
- [ ] Backend Engineer roadmap
- [ ] Full-Stack Engineer roadmap
- [ ] Distributed Systems Engineer roadmap

### 4.11 QA / SDET
- [ ] Manual QA → Automation Engineer → SDET → Sr SDET / Test Architect → Director of Quality
- [ ] Performance Engineer roadmap
- [ ] Security Tester (cross-listed with security)
- [ ] AI Testing specialist roadmap (emerging 2026)

### 4.12 PM / Agile / GRC
- [ ] Project Coordinator → PM → Sr PM → Program Manager → Portfolio Manager → Director PMO
- [ ] Scrum Master → Agile Coach → SAFe RTE / SPC → Enterprise Agile Coach
- [ ] BA / Business Analyst (junior to senior)
- [ ] TPM (Technical Program Manager) roadmap

### 4.13 Adjacent Lanes
- [ ] Sales Engineer / Pre-Sales Solutions Architect
- [ ] Developer Advocate / DevRel
- [ ] Technical Writer / Documentation Engineer
- [ ] Technical Recruiter / Sourcer
- [ ] IT Trainer / Instructor (vendor-authorized)
- [ ] OSS Maintainer (sponsored)
- [ ] Independent Consultant / Contractor
- [ ] Founder / Startup CTO
- [ ] AI Ethics Officer (emerging role)

### 4.14 Specialty Ecosystem Career Paths
- [ ] Salesforce Admin → Developer/Consultant → Architect → CTA
- [ ] SAP Functional Consultant → Solution Architect → Enterprise Architect
- [ ] ServiceNow Admin → Developer → Implementation Specialist → CTA → CMA
- [ ] Microsoft Dynamics Functional Consultant → Solution Architect (PL-600 / MB-700)
- [ ] Microsoft Power Platform Developer → Architect
- [ ] Oracle DBA → Cloud DBA → Database Architect
- [ ] Oracle Fusion Functional → Solution Architect
- [ ] NetSuite Administrator → Implementation Consultant → Architect
- [ ] MuleSoft Developer → Integration Architect → Platform Architect
- [ ] Workday HCM Functional → Integration → Studio Developer → Architect
- [ ] Adobe AEM Developer → Architect
- [ ] Splunk Admin → Architect → Detection Engineer → SIEM Architect
- [ ] CrowdStrike Falcon Admin (CCFA) → Responder (CCFR) → Hunter (CCFH)
- [ ] Veeam VMCE → VMCEA (Architect)
- [ ] VMware → Multi-platform Virtualization Architect (post-Broadcom)

### 4.15 Industry-Vertical Specialist Roadmaps
- [ ] Epic Analyst (incl. RN-Analyst path)
- [ ] Cerner / Oracle Health Analyst
- [ ] Healthcare IT Director / VP IT
- [ ] FinTech Engineer (compliance + tech)
- [ ] Government IT Specialist (clearance path)
- [ ] OT / Industrial Cybersecurity Engineer
- [ ] EdTech Engineer
- [ ] Telecom 5G Engineer
- [ ] Game Industry QA
- [ ] Game Industry Engineer

---

## PART 5 — Supporting-Resource Deep Dives

Currently summarized in `01_*` through `13_*.md`. Each could be deepened.

### 5.1 University / Academic Free Courses (deepen per domain)
- [P] MIT, Stanford, CMU, Berkeley, Princeton, Harvard CS50, Helsinki — covered in 08_university_academic_resources.md
- [ ] Per-domain deepening (e.g., MIT 6.824 distributed systems vs MIT 6.S081 OS — break down which is best for which IT path)

### 5.2 Free YouTube Channels per cert (deepen)
- [P] General: Professor Messer, Jeremy's IT Lab, John Savill, NetworkChuck, David Bombal — covered
- [ ] Per-cert YouTube channel deep dive (e.g., for AZ-104 specifically: John Savill's master class, Adam Marczak, Tim Warner, MS Cloud IT Pro)
- [ ] CompTIA YouTube: Professor Messer (free)
- [ ] AWS YouTube: Andrew Brown ExamPro, Stephane Maarek
- [ ] Cisco YouTube: Jeremy's IT Lab, David Bombal, CBT Nuggets samples
- [ ] DevOps YouTube: KodeKloud, TechWorld with Nana, DevOps Toolkit
- [ ] Security YouTube: John Hammond, IppSec, LiveOverflow, NahamSec, The Cyber Mentor
- [ ] Data/AI YouTube: 3Blue1Brown, StatQuest, Andrej Karpathy, Yannic Kilcher, Two Minute Papers

### 5.3 Paid Course Platforms (deepen + pricing)
- [P] Pluralsight (incl. A Cloud Guru), CBT Nuggets, Udemy, Coursera, edX, LinkedIn Learning, O'Reilly, Frontend Masters, Educative, KodeKloud, INE, ACI Learning — covered
- [ ] Per-cert recommended course in each platform with pricing
- [ ] Free trials and discount opportunities (Pluralsight Free April, AWS Skill Builder free, etc.)

### 5.4 Books per domain (deepen)
- [P] 118 books covered in 11_books_compendium.md
- [ ] Add per-cert recommended book(s) (e.g., AZ-104 → Microsoft Press AZ-104 Exam Ref by Harshul Patel)
- [ ] Include free books per domain (sre.google/books, OSTEP, Crafting Interpreters, Eloquent JS, etc.)

### 5.5 Engineering Blogs (deepen by domain)
- [P] 120+ blogs covered in 10_engineering_blogs.md
- [ ] Per-domain "must-follow blogs" curation (e.g., Networking: Ivan Pepelnjak ipspace.net + Russ White rule11.tech + Network Collective)

### 5.6 Podcasts / Newsletters / Conferences (deepen by domain)
- [P] 40+ podcasts, 30+ newsletters, 70+ conferences covered in 12_*.md
- [ ] Per-domain curation (e.g., for Networking: Packet Pushers, Network Collective, Heavy Networking)

### 5.7 Government / Standards Bodies (deepen)
- [P] NIST, CIS, ENISA, MITRE, OWASP, CSA, IETF, NCSC etc. covered in 09_*.md
- [ ] Per-domain mapping of relevant standards

### 5.8 Open Source Communities
- [ ] CNCF (Kubernetes-related)
- [ ] Apache Software Foundation projects
- [ ] Linux Foundation
- [ ] OWASP local chapters
- [ ] DevOpsDays local chapters
- [ ] Cloud Native local meetups

---

## PART 6 — Cross-Cutting Topics

These don't fit neatly in domains but are worth dedicated deep dives.

### 6.1 AI Impact on IT Roles (deepen)
- [P] ~60 roles classified in earlier research
- [ ] Per-role deep dive: which tasks AI replaces, which AI augments, which AI cannot touch
- [ ] AI-resilience strategy guide per career stage

### 6.2 International Salary Data
- [ ] South Africa (ZAR) — user is in SA based on context
- [ ] United Kingdom (GBP)
- [ ] Western Europe (EUR — DE, FR, NL)
- [ ] Eastern Europe (PLN, etc.)
- [ ] Australia / New Zealand (AUD / NZD)
- [ ] India (INR)
- [ ] Middle East (UAE, Saudi Arabia)
- [ ] Latin America (Brazil, Mexico, Argentina)
- [ ] Asia (Singapore, Japan, Korea)

### 6.3 Remote-Friendly Status per Role (deepen + verify 2026)
- [P] 30+ roles tagged in earlier research
- [ ] Annual remote-trend update
- [ ] Country-specific remote work patterns (some countries lag US)

### 6.4 Career Changer Detailed Routes (deepen)
- [P] 10 backgrounds covered in IT_Career_Changers.html research
- [ ] Add: lawyer → IT, journalist → tech writer, athlete → ?, parent → returnship-specific deep dives
- [ ] Returnship-program specific guide (Goldman Sachs, Microsoft LEAP, Salesforce Return, Amazon Restart, etc.)

### 6.5 First-Job Mechanics per Role (deepen)
- [P] 10 entry roles covered in IT_Role_Profiles.html research
- [ ] Per-cert + per-role: portfolio templates, GitHub repo examples, resume samples, interview question banks

### 6.6 Compensation Negotiation
- [ ] Levels.fyi data interpretation
- [ ] Counter-offer playbooks per career stage
- [ ] Total comp vs base understanding (RSU vesting, bonus, sign-on)
- [ ] Patrick McKenzie ("patio11") salary negotiation classic

### 6.7 Side Income / Consulting / Freelance
- [ ] Toptal, Gun.io, Arc.dev, Upwork patterns
- [ ] Setting consulting rates
- [ ] Million-Dollar Consulting (Weiss) framework
- [ ] Sponsored OSS (GitHub Sponsors, Open Collective, Tidelift)
- [ ] Course creation (Udemy / O'Reilly / self-published)
- [ ] Tech book authorship ROI

### 6.8 Visa / Geographic Considerations
- [ ] H-1B / L-1 / O-1 (US)
- [ ] Tier 2 / Skilled Worker (UK)
- [ ] EU Blue Card
- [ ] Australia 482 / 189 / 190
- [ ] Canada Express Entry / Tech Talent Stream
- [ ] Tech-friendly countries 2026: Portugal D7, Estonia e-Residency, etc.
- [ ] Remote-first countries (digital-nomad visas)

### 6.9 Burnout / Mental Health per Role
- [ ] On-call SRE burnout
- [ ] CISO burnout (median tenure < 24 months)
- [ ] Help Desk burnout
- [ ] Pentester burnout
- [ ] Manager burnout

### 6.10 Diversity / Accessibility per Track
- [ ] Women in Tech communities + paths
- [ ] Neurodivergent-friendly roles
- [ ] Accessibility / a11y as a career
- [ ] LGBTQ+ in tech communities

---

## How to use this checklist

1. **Read the full list** to understand the scope.
2. **Prioritize** — which sections matter most? (User can tell agents to focus.)
3. **Spawn agents** in batches based on priority. Each agent writes one or more `.md` files to `H:\IT rodmap Blog\Deep Dive\`.
4. **Verify** — every cert / book / course / salary number cited from a source URL.
5. **Update this checklist** — mark items `[x]` when their `.md` is complete.

---

## Suggested first wave (highest-impact gaps)

If we want to start filling the BIGGEST currently-missing gaps:

1. **Microsoft Dynamics 365 ecosystem** (Section 2.4) — explicitly user-mentioned, currently missing
2. **Oracle ecosystem deep dive** (Section 2.5) — explicitly user-mentioned, currently shallow
3. **Healthcare IT roadmap** (Section 3.1) — Epic / Cerner specialty entirely missing
4. **AWS ecosystem deep dive** (Section 1.12, 2 if treated as ecosystem) — currently only specific certs covered
5. **Microsoft Azure ecosystem deep dive** (Section 1.13) — same
6. **Workday certifications** (Section 2.8) — entirely missing
7. **Adobe Experience Cloud** (Section 2.9) — entirely missing
8. **Network specialty deep dives** (1.4 Aruba, Arista, Juniper full ladders) — partial
9. **DevOps observability platform deep dives** (1.23) — Datadog, New Relic, Dynatrace missing
10. **Per-role roadmaps** (Part 4) — currently only summarised in HTML pages, no deep dive `.md` per role

After this checklist is reviewed, spawn agents in batches matching whatever priority order is set.

---

## Source-citation contract

EVERY agent that fills in any item must follow:

1. List the cert/book/course/etc. claim
2. Cite the source URL (vendor's official cert page; publisher's book page; course's URL; salary survey URL)
3. Verify the URL resolves before publishing
4. End each `.md` with a `## Sources` section listing every URL used
5. If a claim cannot be sourced, **omit it entirely** — do not include "approximate" or "I think" content

This is the non-negotiable quality contract for everything in this folder.
