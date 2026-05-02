---
cert_name: "CyberArk Defender"
cert_code: "PAM-DEF"
vendor: "CyberArk"
status: "Active"
level: "Associate-Professional"
domain: "Identity/PAM"
ecosystem: "CyberArk"
last_verified: "2026-05-01"
aliases: ["PAM-DEF", "CyberArk Defender", "PAM Defender"]
---

# CyberArk Defender

**`PAM-DEF`** · ● **Active** · **Associate-Professional** · _CyberArk_

> **Vendor-specific privileged access management (PAM) certification validating hands-on competency across the full CyberArk PAM stack.** Tests user management, account onboarding, session configuration, connection components, application identity management (AIM), password policies, session recording, CPM plugins, Privilege Cloud architecture, and Privilege Cloud Connect. Prerequisite for CyberArk Sentry and Guardian advanced certifications.

---

## Exam facts

| Field | Value |
|---|---|
| Cost | USD $200 |
| Duration | 90 minutes |
| Questions | 65 questions |
| Passing | 70% |
| Format | Multiple choice + multiple response |
| Delivery | Pearson VUE (proctored or OnVUE remote) |
| Languages | English |
| Valid | 3 years |
| Renewal | Retake exam or pass CyberArk Sentry / Guardian |
| Prerequisites | None formally required; foundational PAM / security knowledge assumed |
| Released | 2023–2024 (restructuring from older Trust ladder) |
| Retiring | N/A — Active as of May 2026 |

**Vendor source —** [CyberArk Training & Certification ↗](https://www.cyberark.com/certifications/cyberark-defender)  
**Exam details —** [CyberArk Defender (PAM-DEF) Exam Blueprint ↗](https://www.cyberark.com/certifications/cyberark-defender)  
**Official exam guide —** [CyberArk Defender Study Materials ↗](https://university.cyberark.com/path/cyberark-defender)

---

## About

CyberArk Defender (PAM-DEF) is an associate-professional level certification validating hands-on competency across the full CyberArk Privileged Access Management (PAM) platform stack. Introduced in 2023–2024 as part of CyberArk's modernized certification progression, it covers user management, account onboarding, session configuration, connection components, application identity management (AIM), password management policies, session recording setup, CPM plugin configuration, Privilege Cloud architecture, and Privilege Cloud Connect integration.

Defender serves as a gating certification for advancing to CyberArk Sentry (mid-level, architect-track) and Guardian (expert-level, enterprise architect) credentials. The certification validates both operational and architectural understanding critical for PAM deployment engineers, DevOps practitioners integrating PAM into CI/CD pipelines, security operations centers (SOCs), and identity/access teams managing enterprise privilege across on-premises and cloud deployments.

The exam blueprint emphasizes hands-on proficiency rather than theory, reflecting CyberArk's market position as the PAM industry standard. Candidates are expected to demonstrate practical experience configuring the core platform modules (EPV, CPM, PSM, PVWA) and integrating with modern infrastructure (Kubernetes, cloud IAM, SIEM platforms, CI/CD tools). The cost of approximately USD $200, combined with the technical depth required, positions PAM-DEF as a premium credential commanding significant salary uplift in the security engineering market.

As of February 2026, CyberArk's acquisition by Palo Alto Networks for $25B underscores PAM's strategic importance in enterprise security and validates the market demand for certified practitioners. This acquisition has accelerated job growth and compensation increases for CyberArk-certified engineers across North America, EMEA, and APAC regions.

---

## Domain context — Identity/PAM

Privileged Access Management (PAM) is an enterprise security hardening discipline focused on discovering, controlling, auditing, and securing access to high-risk accounts (domain admins, database owners, cloud service principals, SSH root keys, service account credentials, etc.). PAM is vendor-agnostic; CyberArk is the market leader and industry-standard baseline, with approximately 50%+ enterprise market share in mature markets (North America, Western Europe, APAC metros).

The PAM domain exists at the intersection of Identity & Access Management (IAM), Infrastructure Security, and Compliance. Unlike broad IAM (which addresses regular user identity), PAM specializes in the privilege lifecycle: discovery (finding orphaned accounts and privileged credentials), provisioning (automated creation and onboarding), rotation (periodic password/key changes), session management (recording and monitoring privileged activities), and deprovisioning (secure off-boarding and credential revocation). PAM is critical for meeting regulatory requirements (SOC 2 Type II, ISO 27001, PCI-DSS, HIPAA, FedRAMP, GDPR) and mitigating insider threat and lateral-movement attack vectors.

Other vendors in this competitive space include BeyondTrust (PowerBroker, Privilege Management Suite), Delinea (Thycotic Secret Server, Delinea Privilege Manager), Okta (acquired Klara, now Identity + PAM fusion), HashiCorp Vault (secrets-centric, open-source + commercial), and Fortanix (cloud-native secrets). CyberArk Defender specifically targets hands-on engineers and operators deploying CyberArk across enterprise self-hosted, Privilege Cloud SaaS, and hybrid-cloud architectures, with particular emphasis on DevOps integration and modern infrastructure support.

[Read full deep dive — CyberArk Ecosystem →](../../Ecosystems/D29_CyberArk_Ecosystem.md)

---

## Topics covered

Based on CyberArk's published PAM-DEF exam blueprint:

- **User Management & Authentication** — Creating vault users, system users, authentication methods (RADIUS, LDAP, SAML), managing user roles and privileges
- **Account Onboarding & Discovery** — Bulk import workflows, reconciliation, account lifecycle automation, discovery connector configuration
- **Session Configuration & Monitoring** — Configuring Privileged Session Manager (PSM), session recording setup, session monitoring and playback
- **Connection Components** — CPM configuration, platform connectors (Oracle, SQL Server, SSH, Kubernetes, cloud platforms), credential rotation targets
- **Application Identity Management (AIM)** — CyberArk Digital Vault (ConjurOSS and commercial), AppID registration, REST API credential retrieval, Kubernetes Secrets integration
- **Password Management Policies** — Central Policy Manager (CPM) policies, automatic password rotation, reconciliation, policy language, policy enforcement
- **Session Recording Configuration** — PSM recording parameters, session isolation, compliance-ready audit trails, video playback and search
- **CPM Plugin Architecture** — Custom plugin development, plugin lifecycle, plugin testing, platform-specific plugin configuration
- **Privilege Cloud Fundamentals** — Privilege Cloud architecture, Privilege Cloud Connect (on-premises gateway), SaaS vs. self-hosted deployment trade-offs, licensing
- **Privilege Cloud Connect** — Gateway installation, configuration, hybrid deployment patterns, managing on-premises vaults alongside Privilege Cloud

*Source:* [CyberArk Defender Exam Blueprint ↗](https://www.cyberark.com/certifications/cyberark-defender)

---

## Common skills at Identity/PAM · Associate-Professional

*Shared content for the Identity/PAM domain at Associate-Professional level — not specific to this cert.*

- **Privileged account lifecycle management** — account discovery (agent-based and agentless), provisioning workflows, automated rotation scheduling, reconciliation, off-boarding with secure credential revocation
- **Access control policy design** — role-based access control (RBAC), separation of duties (SoD) modeling and enforcement, policy language (JSON, YAML, proprietary DSLs), least privilege principle application, policy versioning and audit
- **Directory and identity integration** — Active Directory forest/domain architecture, LDAP binding and querying, modern protocols (OIDC, SAML 2.0, OAuth 2.0), enterprise identity provider integration (Okta, Azure AD, Ping Identity, ADFS), federation patterns
- **Cryptographic fundamentals** — key derivation (PBKDF2, bcrypt, Argon2, scrypt), password entropy calculation, encryption at rest (AES-256, ChaCha20), encryption in transit (TLS 1.2+, mTLS), certificate management and PKI concepts
- **Session recording and forensics** — session capture mechanisms (proxy-based, agent-based, appliance-based), playback and search functionality, compliance-ready audit trails with tamper-evident logs, user behavior analysis (UBA) and anomaly detection, forensic investigation procedures
- **Cloud identity and secrets management** — Kubernetes Secrets and external secrets operators, HashiCorp Vault integration, cloud key management services (AWS Secrets Manager, AWS KMS, Azure Key Vault, GCP Secret Manager, IBM Cloud Key Management), secret rotation in CI/CD pipelines
- **Compliance and regulatory frameworks** — SOC 2 Type II attestation, ISO 27001 controls (A.9.2, A.9.4), PCI-DSS requirement 7 (access control), HIPAA minimum necessary, GDPR data subject rights and audit logging, FedRAMP controls (AC-2, AC-3, AC-6), SOX (Sarbanes-Oxley) change management and segregation of duties

---

## Recommended courses at Identity/PAM · Associate-Professional

| Provider | Title | Cost | URL |
|---|---|---|---|
| CyberArk University | CyberArk Defender Fast Track (official) | Free (with account) | [↗](https://university.cyberark.com/path/cyberark-defender) |
| CyberArk University | Enterprise Password Vault (EPV) Administration Bootcamp | Free (with account) | [↗](https://university.cyberark.com) |
| CyberArk University | Central Policy Manager (CPM) Configuration & Troubleshooting | Free (with account) | [↗](https://university.cyberark.com) |
| CyberArk University | Privileged Session Manager (PSM) Advanced Configuration | Free (with account) | [↗](https://university.cyberark.com) |
| Pluralsight / A Cloud Guru | CyberArk Administration and Troubleshooting | $35–$50/month | [↗](https://www.pluralsight.com) |
| Udemy (instructor TBD) | CyberArk Defender Certification Prep Course | $15–$45 | [↗](https://www.udemy.com) |

**Course-selection rule:** CyberArk University (free registration, no tuition) is the gold standard and primary study resource. Partner-led training (Deloitte, Accenture, IBM, Cognizant) covers Defender as part of implementation projects. Third-party platforms (Pluralsight, Udemy) offer supplementary deep dives on specific modules (CPM, PSM, AIM) but are not required.

---

## Practice exams

| Provider | Title | Cost | URL |
|---|---|---|---|
| CyberArk University | Official CyberArk Defender Sample Exam | Free | [↗](https://university.cyberark.com) |
| Whizlabs | CyberArk Defender (PAM-DEF) Practice Exam Bundle | $15–$25 | [↗](https://www.whizlabs.com) |
| MeasureUp | CyberArk Defender Exam Practice | $99–$159 | [↗](https://www.measureup.com) |

**Note:** CyberArk's official practice exam is included in the free CyberArk University study path and is the primary gold-standard resource. Third-party providers (Whizlabs, MeasureUp) offer supplementary bundles with updated questions; however, CyberArk's proprietary exam platform is the most accurate simulation of test day conditions.

---

## Books

| Title | Author | Publisher | Year | ISBN | URL |
|---|---|---|---|---|---|
| Privileged Attack Vectors | Haber, Layton, Molnar, Butler | Hacker House | 2020 | 978-0-9835694-2-2 | [↗](https://www.hackerhouse.blog) |
| Privileged Access Management: A Practical Guide | Neil Rasmussen (BeyondTrust) | Sybex / Wiley | 2021 | 978-1-119-79632-1 | [↗](https://www.wiley.com) |

**Book note:** CyberArk does not publish a dedicated PAM-DEF study guide. The Privileged Attack Vectors text by Haber et al. is the most vendor-relevant deep dive on PAM architecture and privilege escalation scenarios. The Rasmussen guide is vendor-neutral and covers broader PAM concepts foundationally. CyberArk University's free study materials remain the primary resource; books supplement hands-on labs.

---

## Typical job titles at Identity/PAM · Associate-Professional

**CyberArk Engineer** · **Privileged Access Manager (PAM) Engineer** · **Identity & Access Engineer** · **CyberArk Administrator** · **Senior PAM Security Engineer** · **Identity Security Engineer** · **IAM Operations Specialist** · **Privileged Account Manager**

*(Job titles drawn from current job-board postings (LinkedIn, Indeed, Glassdoor, CareerJunction) that list CyberArk Defender, PAM certification, or equivalent hands-on CyberArk platform experience as required or preferred. Titles vary by organization; larger enterprises use "CyberArk Engineer," while smaller shops combine PAM with broader identity roles.)*

---

## Salary

| Region | Range | Source |
|---|---|---|
| USD | $95,000 – $155,000 | [Glassdoor PAM Engineer ↗](https://www.glassdoor.com/Salaries/pam-engineer-salary.htm) · [Robert Half 2026 Salary Guide ↗](https://www.roberthalfusa.com/salary-guide) · [Levels.fyi Security/Identity roles ↗](https://www.levels.fyi) |
| ZAR | R1,100,000 – R1,800,000 | [Pnet ↗](https://www.pnet.co.za) · [PayScale ZA ↗](https://www.payscale.com/research/ZA) · [CareerJunction ↗](https://www.careerjunction.co.za) |
| GBP | £65,000 – £105,000 | [IT Jobs Watch ↗](https://www.itjobswatch.co.uk/Salaries/Details/PAM-Engineer) · [Hays 2026 Salary Report ↗](https://www.hays.com/salary-guides) |
| EUR | €70,000 – €125,000 (DE/FR/NL) | [PayScale EU ↗](https://www.payscale.com/research/DE/Job=PAM_Engineer) · [Indeed Salary Data ↗](https://www.indeed.com) |
| AUD | A$125,000 – A$195,000 | [SEEK ↗](https://www.seek.com.au/Salaries/PAM-Engineer) · [PayScale AU ↗](https://www.payscale.com/research/AU) |

**Salary context:** CyberArk-certified engineers command premium compensation due to scarcity of qualified practitioners and criticality of PAM in regulated industries (healthcare, finance, government, defense). CyberArk Defender certification drives +15–25% uplift over generalist security roles. Acquisition by Palo Alto Networks (Feb 2026) has further elevated demand and compensation across all levels. US market mature; APAC (AU, SG, HK, NZ) and EMEA showing accelerated hiring through 2026.

---

## Skills validated

*Cert-specific — what this exam actually tests, distinct from the shared "Common skills" above.*

- **Enterprise Password Vault (EPV) user and account management** — vault user creation (LDAP, RADIUS, local auth), safe design and naming conventions, account provisioning (manual and API), password policies (complexity, expiry, reuse), user authentication methods and MFA integration, vault user permissions and dual-control enforcement
- **Central Policy Manager (CPM) configuration** — password rotation policies (immediate, periodic, on-demand), reconciliation targets (Oracle, SQL Server, SSH, Kubernetes, Windows local/domain accounts, cloud service principals), reconciliation logic and failure handling, CPM session troubleshooting and performance tuning
- **Privileged Session Manager (PSM) architecture** — session recording setup and storage, connection components (PSM-SSH, PSM-RDP, PSM-Database, PSM-Kubernetes), PSM-to-CPM integration for on-session rotation, client deployment (Windows, Linux), session isolation and endpoint hardening
- **Password Vault Web Access (PVWA) administration** — PVWA user access and permissions, safe list policies and account entitlements, Dual Control and request/release workflows, MFA integration (TOTP, SMS, RADIUS), PVWA plugins and customization, API authentication and OAuth 2.0 support
- **Application Identity Management (AIM)** — CyberArk Digital Vault (Conjur OSS and commercial editions) registration, AppID creation and credential distribution, REST API authentication (certificate, API key, JWT), Kubernetes Secrets integration, CI/CD pipeline injection (GitHub Actions, GitLab CI, Jenkins)
- **Account discovery and onboarding** — account discovery connectors (agentless scanners for cloud, agentless Windows/Unix, platform-specific scanners), bulk import workflows and CSV/API ingestion, onboarding automation and approval workflows, reconciliation management and orphaned account cleanup
- **Privilege Cloud SaaS and hybrid deployment** — Privilege Cloud architecture (multi-tenant, shared security model), Privilege Cloud Connect gateway (on-premises bridge for hybrid), licensing and consumption models, SaaS vs. self-hosted trade-offs, data residency and compliance implications, migration planning from on-premises
- **Session recording and compliance** — recording configuration and storage options, audit trail immutability and tamper-detection, compliance report generation (SOC 2, ISO 27001, PCI-DSS, HIPAA, GDPR-ready), SIEM integration (Splunk, ArcSight, QRadar, Sentinel, Elastic), video playback, search and export capabilities

---

## CyberArk integration and DevOps relevance

CyberArk Defender certifications are increasingly critical in DevOps and platform engineering contexts, not just traditional identity/security operations. Modern enterprise architectures require PAM integration across CI/CD pipelines, container orchestration (Kubernetes), and cloud-native infrastructure. The exam emphasizes practical scenarios reflecting this shift:

- **CI/CD pipeline integration:** Using CyberArk's Application Identity Management (AIM) and CyberArk Digital Vault (Conjur) to inject credentials into GitHub Actions, GitLab CI, Jenkins, and ArgoCD without embedding secrets in code or configuration
- **Kubernetes secrets management:** Integrating CyberArk with Kubernetes RBAC, using the CyberArk Secrets Provider for Kubernetes to manage pod credentials and rotating service account keys
- **Cloud IAM integration:** Managing AWS IAM access keys, Azure service principal credentials, and GCP service account keys through CyberArk's CPM, with automatic rotation and audit trails
- **Secrets management in Infrastructure-as-Code (IaC):** Securely passing secrets to Terraform, CloudFormation, and Ansible playbooks via CyberArk APIs without hardcoding credentials
- **Multi-cloud privilege management:** Extending PAM across AWS, Azure, GCP, and on-premises infrastructure with unified policy enforcement and compliance reporting

Candidates with DevOps or SRE backgrounds may find PAM-DEF more accessible because it aligns with infrastructure-as-code and automation-first mindsets. Organizations increasingly require DevOps engineers to understand PAM — especially when managing database administrators, infrastructure operators, or deployment automation that requires elevated access.

---

## Exam preparation strategy

The PAM-DEF exam is **practical and scenario-heavy**, not theoretical. Prepare by working directly with a CyberArk environment (either self-hosted or via trial/lab access). The exam heavily weights operational configuration — expect questions like "Your CPM is failing to rotate Oracle passwords after policy change X; diagnose the issue" rather than "Define password rotation."

**Recommended study timeline:** 6–12 weeks for candidates with 1–2 years PAM operations experience; 12–16 weeks for career-changers or those new to CyberArk.

**Lab environment:** CyberArk offers free trial environments and partner training environments. Many candidates prepare in lab clusters provided by implementation partners (Deloitte, Accenture, IBM) during project work. Self-hosted POC environments on VMware or Hyper-V are also common. DevOps-focused candidates may set up a Kubernetes cluster with CyberArk Secrets Provider to practice modern integration patterns.

**Study approach:**
1. Work through CyberArk University bootcamp modules (4–6 weeks)
2. Configure a test environment replicating enterprise scenarios (account discovery, CPM policies, PSM recording, PVWA access controls, Privilege Cloud Connect, AIM/Conjur for CI/CD)
3. Practice hands-on labs in each module area; focus on troubleshooting
4. Take the official CyberArk University sample exam (identify weak areas)
5. Review weak domains using vendor documentation and recorded labs
6. Take a practice exam from Whizlabs or MeasureUp 1–2 weeks before the exam date
7. Final review: 3–5 days of targeted drilling on identified gaps

**Common failure points:** Candidates often underestimate Privilege Cloud architecture and the Privilege Cloud Connect gateway, or struggle with CPM policy language for non-standard rotation targets (Kubernetes, cloud SPs, custom platforms). DevOps candidates may underestimate traditional PSM session recording requirements. Budget extra study time for these topics.

---

## Related certifications and career progression

- **Prerequisite for:** [CyberArk Sentry ↗](./CyberArk_Sentry.md) — mid-level architect-track cert advancing operator to solution architect; recommended after 12–18 months hands-on PAM platform deployment and operations experience
- **Gateway to:** [CyberArk Guardian ↗](./CyberArk_Guardian.md) — expert-level cert requiring Sentry or equivalent senior-level PAM architecture, enterprise design, and strategic advisory experience
- **Supersedes:** Legacy CyberArk Trust ladder entry certifications (deprecated 2023–2024); Defender is the official entry point in the modernized progression
- **Complementary stacks:** [CyberArk Identity Security Engineer ↗](./CyberArk_Identity_Security_Engineer.md) — broader identity/IAM scope (user provisioning, identity governance); PAM-DEF + ISE together cover full privilege lifecycle from user identity to privileged access
- **Typical progression:** Defender → Sentry (12–18mo) → Guardian (24–36mo), reflecting career path from operator → architect → enterprise strategist
- **Competitor equivalents:** [BeyondTrust Privilege Management Specialist ↗](../../Certifications/BeyondTrust/BeyondTrust_Privilege_Management_Specialist.md) · [Delinea Privilege Manager Specialist ↗](../../Certifications/Delinea/Delinea_Privilege_Manager_Specialist.md) · [Okta Identity & Access Management Professional ↗](../../Certifications/Okta/Okta_IAM_Professional.md)
- **Vendor overview:** [CyberArk Vendor Overview ↗](../../Vendors/CyberArk_Vendor_Overview.md)

---

## Sources

- [CyberArk Training & Certification — CyberArk Defender](https://www.cyberark.com/certifications/cyberark-defender)
- [CyberArk University — CyberArk Defender Learning Path](https://university.cyberark.com/path/cyberark-defender)
- [CyberArk Defender Exam Blueprint](https://www.cyberark.com/certifications/cyberark-defender)
- [Palo Alto Networks: Acquisition of CyberArk Announcement (Feb 2026)](https://www.paloaltonetworks.com)
- [Glassdoor: PAM Engineer Salary Data](https://www.glassdoor.com/Salaries/pam-engineer-salary.htm)
- [Robert Half 2026 Salary Guide — Security & Identity](https://www.roberthalfusa.com/salary-guide)
- [Levels.fyi — Identity/Security Engineer Compensation](https://www.levels.fyi)
- [Whizlabs: CyberArk Defender Practice Exams](https://www.whizlabs.com)
- [MeasureUp: CyberArk Defender Exam Practice](https://www.measureup.com)
- [Pnet (South Africa): PAM Engineer Salary Benchmarks](https://www.pnet.co.za)
- [IT Jobs Watch (UK): PAM Engineer Salary Data](https://www.itjobswatch.co.uk/Salaries/Details/PAM-Engineer)
- [Hays 2026 IT Salary Report — EMEA](https://www.hays.com/salary-guides)
- [Hacker House: Privileged Attack Vectors](https://www.hackerhouse.blog)
- [Wiley/Sybex: Privileged Access Management — A Practical Guide](https://www.wiley.com)

---

*Last verified: 2026-05-01*  
*Parent ecosystem: [CyberArk Ecosystem](../../Ecosystems/D29_CyberArk_Ecosystem.md)*  
*Parent domain: [Identity/PAM](../../Domains/D02_Identity_PAM.md)*  
*Vendor overview: [CyberArk Vendor Overview](../../Vendors/V_CyberArk_Vendor_Overview.md)*
