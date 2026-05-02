---
cert_name: "CyberArk Sentry"
cert_code: "PAM-SEN"
vendor: "CyberArk"
status: "Active"
level: "Professional-Expert"
domain: "Identity/PAM"
ecosystem: "CyberArk"
last_verified: "2026-05-01"
aliases: ["PAM-SEN", "CyberArk Sentry", "CyberArk Sentry PAM"]
---

# CyberArk Sentry

**`PAM-SEN`** · ● **Active** · **Professional-Expert** · _CyberArk_

> **Vendor-specific privileged access management architect certification validating advanced deployment, configuration, and troubleshooting expertise across the full CyberArk Privilege Account Suite (PAS).** Requires prior CyberArk Defender (PAM-DEF) certification. Tests Vault implementation at scale, advanced CPM design and policy customization, PSM complex deployment scenarios, Application Access Manager (AAM), cloud-native Privilege Cloud architecture, hardening strategies, performance optimization, disaster recovery, and custom platform integration via plugins.

---

## Exam facts

| Field | Value |
|---|---|
| Cost | USD $300 |
| Duration | 90 minutes |
| Questions | 65 questions |
| Passing | 70% |
| Format | Multiple choice + multiple response |
| Delivery | Pearson VUE (proctored in-person only; as of Nov 1, 2025) |
| Languages | English |
| Valid | 3 years |
| Renewal | Retake exam or pass CyberArk Guardian |
| Prerequisites | CyberArk Defender (PAM-DEF) certification required |
| Released | 2023–2024 (modernized certification progression) |
| Retiring | N/A — Active as of May 2026 |

**Vendor source —** [CyberArk Certification Program ↗](https://www.cyberark.com/services-support/certification/)  
**Exam details —** [CyberArk Sentry (PAM-SEN) Exam Page ↗](https://training.cyberark.com/exam/sentry-preparation)  
**Official training —** [CyberArk University — Sentry Training ↗](https://training.cyberark.com/learn)  
**Pearson VUE registration —** [CyberArk Certification Exams ↗](https://www.pearsonvue.com/us/en/cyberark.html)

---

## About

CyberArk Sentry (PAM-SEN) is a professional-expert level certification validating advanced architectural and engineering competency across the full CyberArk Privilege Access Suite (PAS), positioned as the second level in the modernized three-tier CyberArk certification progression (Defender → Sentry → Guardian). Introduced in 2023–2024 alongside the Defender restructuring, Sentry targets solution architects, senior PAM engineers, and technical specialists designing and deploying CyberArk at enterprise scale.

Unlike Defender (hands-on operator focus), Sentry emphasizes architectural decision-making, advanced configuration, troubleshooting complex multi-component deployments, and optimization of mission-critical privilege systems. Candidates must demonstrate mastery of Vault architecture including safe design at scale, advanced Central Policy Manager (CPM) policies with custom connectors and plugins, complex Privileged Session Manager (PSM) topologies (including PSM for SSH, PSM for RDP, PSM-to-CPM on-session rotation), Application Access Manager (AAM) for cloud-native identity binding, Privilege Cloud (SaaS) and hybrid architectures, hardening and security posture management, performance tuning, disaster recovery / high availability strategies, and custom integration patterns.

The exam costs USD $300 (premium tier) and reflects the specialization and market demand for CyberArk architects. As of November 1, 2025, all CyberArk certification exams are administered exclusively in person via Pearson VUE (though online proctoring from home/office is permitted). Sentry serves as the gateway certification for those progressing to CyberArk Guardian (expert-level, enterprise architect/CISO advisory).

Post-acquisition by Palo Alto Networks (February 2026 for $25B), Sentry certification holders are increasingly sought after in enterprises consolidating PAM with Palo Alto's broader cloud-native security platform and zero-trust initiatives.

---

## Domain context — Identity/PAM

Privileged Access Management (PAM) is an enterprise security hardening discipline focused on discovering, controlling, auditing, and securing access to high-risk accounts (domain admins, database owners, cloud service principals, SSH root keys, service account credentials, etc.). PAM is vendor-agnostic; CyberArk is the market leader with approximately 50%+ enterprise market share in mature markets (North America, Western Europe, APAC metros).

The PAM domain exists at the intersection of Identity & Access Management (IAM), Infrastructure Security, and Compliance. PAM is critical for meeting regulatory requirements (SOC 2 Type II, ISO 27001, PCI-DSS, HIPAA, FedRAMP, GDPR) and mitigating insider threat and lateral-movement attack vectors. At the **architect level** (Sentry tier), practitioners must understand privilege lifecycle design, multi-datacenter topology, cloud-native (Privilege Cloud), hybrid deployments, disaster recovery architecture, and strategic integration with SIEM, identity governance, and zero-trust frameworks.

Other vendors in the competitive space include BeyondTrust (PowerBroker, Privilege Management Suite), Delinea (Thycotic Secret Server), Okta (identity + PAM fusion), HashiCorp Vault (secrets-centric, open-source), and Fortanix (cloud-native secrets). CyberArk Sentry specifically targets solution architects and senior engineers responsible for designing, hardening, optimizing, and troubleshooting enterprise-scale PAM deployments across hybrid cloud, on-premises, and SaaS architectures.

[Read full deep dive — CyberArk Ecosystem →](../../Ecosystems/D29_CyberArk_Ecosystem.md)

---

## Topics covered

Based on CyberArk's published PAM-SEN exam blueprint and official training materials:

- **Vault Implementation & Architecture at Scale** — Safe design and naming conventions for enterprise, vault user role hierarchy, authentication and authorization policies at scale, LDAP / RADIUS / SAML integration in large enterprises, multi-vault federation and disaster recovery topology, backup and recovery strategies, vault hardening and security posture
- **Central Policy Manager (CPM) Advanced Design & Customization** — Policy language and conditional logic, custom connectors for non-standard targets (Kubernetes, cloud SPs, custom platforms), plugin development and lifecycle management, reconciliation logic and failure recovery, performance optimization and scheduling, CPM troubleshooting and monitoring
- **Privileged Session Manager (PSM) Complex Deployment** — PSM architecture across multiple data centers, PSM-to-CPM on-session rotation integration, PSM for SSH (including jump-host and hardened endpoint scenarios), PSM for RDP (including MFA and isolation), PSM for database connections, PSM recording storage and compliance archival, session isolation and endpoint hardening, PSM redundancy and high availability
- **Application Access Manager (AAM)** — AAM architecture and deployment modes, credential retrieval patterns (REST API, CLI tools, language-specific SDKs), AppID registration and credential distribution, integration with modern CI/CD (GitHub Actions, GitLab CI, Jenkins, ArgoCD), Kubernetes Secrets and external secrets operators, cloud-native application identity (AWS IAM, Azure identities, GCP service accounts)
- **Privilege Cloud Architecture & Hybrid Deployment** — Privilege Cloud SaaS architecture and multi-tenancy model, Privilege Cloud Connect gateway design and on-premises integration, hybrid deployment patterns and network topology, licensing and consumption models, data residency and compliance implications (GDPR, HIPAA), migration planning from on-premises to cloud, cloud-native integrations (AWS, Azure, GCP)
- **Cloud-Native & Modern Infrastructure Integration** — Kubernetes RBAC and CyberArk Secrets Provider for Kubernetes, container image authentication and artifact signing, Terraform, CloudFormation, and Ansible integration, serverless credential injection (AWS Lambda, Azure Functions), API gateway authentication and OAuth 2.0, multi-cloud privilege management (AWS + Azure + GCP unified policy)
- **Security Hardening & Compliance** — Vault hardening benchmarks and configuration review, least privilege enforcement at the component level, network isolation (DMZ, segmentation), firewall rules and endpoint protection, encryption key management and rotation, security event logging and SIEM integration (Splunk, Sentinel, QRadar, Elastic, Chronicle), compliance reporting for SOC 2, ISO 27001, PCI-DSS, HIPAA, GDPR, FedRAMP
- **Performance Optimization & Capacity Planning** — Vault performance tuning (memory, CPU, database optimization), CPM policy optimization and scheduling to avoid bottlenecks, PSM session recording storage and retention strategies, PVWA caching and UI responsiveness, capacity planning for enterprise scale (10K+ accounts, 5K+ users, 1000s of daily sessions), monitoring and alerting best practices, disaster recovery testing and runbook documentation
- **Disaster Recovery & High Availability** — Vault backup strategies and recovery procedures, PSM redundancy and session failover, CPM failover and policy continuity, PVWA load balancing and statelessness, network resilience and WAN topologies, recovery time objective (RTO) and recovery point objective (RPO) design, disaster recovery testing and playbooks
- **Custom Integration & Plugin Architecture** — Plugin development framework (Java, Python, proprietary languages), plugin lifecycle (development, testing, deployment, updates), custom connectors for proprietary or legacy platforms, integration with third-party PAM solutions and identity providers, API extensibility and webhook patterns

*Source:* [CyberArk Training — Sentry Preparation ↗](https://training.cyberark.com/exam/sentry-preparation)

---

## Common skills at Identity/PAM · Professional-Expert

*Shared content for the Identity/PAM domain at Professional-Expert level — not specific to this cert.*

- **Enterprise privilege architecture design** — designing multi-component, multi-site privilege systems for organizations with hundreds of thousands of accounts and thousands of users; strategic decisions around on-premises vs. cloud deployment, hybrid topology, and future-state roadmapping
- **Zero-trust framework integration** — privilege as a pillar of zero-trust (PAM ← → IAM ← → network segmentation ← → endpoint security); designing privilege systems that enforce continuous verification, least privilege at scale, and assume-breach posture
- **Advanced access control policy design** — complex role-based access control (RBAC) with conditional logic, separation of duties (SoD) enforcement across enterprise systems, policy versioning and compliance auditing, integration with identity governance platforms (SailPoint, Okta Identity Governance, Microsoft Entra ID Governance)
- **Cryptographic architecture at enterprise scale** — key derivation, entropy calculation, encryption at rest and in transit, certificate management and PKI design, hardware security module (HSM) integration, key rotation automation, post-quantum cryptography preparation
- **Advanced session recording, forensics, and incident response** — designing tamper-evident audit trails at scale, session recording storage architectures, forensic investigation procedures, user behavior analysis (UBA) for insider threat detection, integration with SIEM and security orchestration (SOAR) platforms, incident playbooks for privilege-based attacks (lateral movement, privilege escalation, persistence)
- **Compliance at enterprise scale** — designing systems to meet SOC 2 Type II, ISO 27001, PCI-DSS, HIPAA, GDPR, FedRAMP, SOX, NIST CSF, CISA zero-trust architecture; audit readiness, continuous compliance monitoring, reporting automation
- **DevOps and modern CI/CD privilege integration** — secrets management in Infrastructure-as-Code (Terraform, CloudFormation, Ansible, Pulumi), credential injection in container orchestration (Kubernetes, Docker Swarm), secrets in GitOps pipelines (ArgoCD, Flux), privileged access for platform engineering teams, shift-left security for development workflows
- **Multi-cloud and hybrid privilege orchestration** — unified policy and secret management across AWS, Azure, GCP, on-premises infrastructure; cloud-native identity (AWS IAM, Azure Entra, GCP identities) integration; risk modeling across infrastructure tiers

---

## Recommended courses at Identity/PAM · Professional-Expert

| Provider | Title | Cost | URL |
|---|---|---|---|
| CyberArk University | CyberArk Sentry Fast Track (official) | Free (with account) | [↗](https://training.cyberark.com/learn) |
| CyberArk University | Advanced Vault Architecture & Design | Free (with account) | [↗](https://training.cyberark.com/learn) |
| CyberArk University | CPM Advanced Configuration & Custom Connectors | Free (with account) | [↗](https://training.cyberark.com/learn) |
| CyberArk University | PSM Complex Deployment & Multi-Site Topology | Free (with account) | [↗](https://training.cyberark.com/learn) |
| CyberArk University | Privilege Cloud Architecture & Hybrid Integration | Free (with account) | [↗](https://training.cyberark.com/learn) |
| Pluralsight / A Cloud Guru | CyberArk Sentry Certification Prep | $35–$50/month | [↗](https://www.pluralsight.com) |
| Udemy (specialist instructor) | CyberArk Sentry PAM-SEN Exam Prep | $15–$45 | [↗](https://www.udemy.com/course/pam-sen-cyberark-sentry-pam-exam/) |
| IdentitySkills | CyberArk Enterprise PAM Training (advanced) | $500–$1200 | [↗](https://www.identityskills.com/courses/cyberark-training/) |

**Course-selection rule:** CyberArk University (free registration, no tuition) remains the gold standard. Sentry requires hands-on experience with a live CyberArk environment — most candidates use enterprise lab clusters from implementation partners (Deloitte, Accenture, IBM, Cognizant) or self-hosted POC environments. Third-party platforms supplement specific module deep dives; CyberArk University's self-paced and instructor-led paths are prerequisite.

---

## Practice exams

| Provider | Title | Cost | URL |
|---|---|---|---|
| CyberArk University | Official CyberArk Sentry Sample Exam | Free | [↗](https://training.cyberark.com/learn) |
| Whizlabs | CyberArk Sentry (PAM-SEN) Practice Exam Bundle | $20–$30 | [↗](https://www.whizlabs.com) |
| MeasureUp | CyberArk Sentry Exam Practice | $99–$159 | [↗](https://www.measureup.com) |

**Note:** CyberArk's official practice exam is included in the CyberArk University study path and is the primary gold-standard resource. Third-party providers (Whizlabs, MeasureUp) offer supplementary practice bundles; however, CyberArk's proprietary exam platform is the most accurate simulation of test-day conditions.

---

## Books

| Title | Author | Publisher | Year | ISBN | URL |
|---|---|---|---|---|---|
| Privileged Attack Vectors | Haber, Layton, Molnar, Butler | Hacker House | 2020 | 978-0-9835694-2-2 | [↗](https://www.hackerhouse.blog) |
| Privileged Access Management: A Practical Guide | Neil Rasmussen (BeyondTrust) | Sybex / Wiley | 2021 | 978-1-119-79632-1 | [↗](https://www.wiley.com) |
| Zero Trust Networks | Gilman & Barth | O'Reilly | 2017 | 978-1-491-96270-2 | [↗](https://www.oreilly.com) |

**Book note:** CyberArk does not publish a dedicated Sentry study guide. The Privileged Attack Vectors text by Haber et al. is the most vendor-relevant deep dive on PAM architecture, privilege escalation, and compromise scenarios at enterprise scale. Rasmussen's Privileged Access Management guide is vendor-neutral and covers foundational PAM concepts. Gilman & Barth's Zero Trust Networks is essential reading for architects designing privilege systems as part of zero-trust frameworks. CyberArk University's free study materials and hands-on labs remain the primary resource.

---

## Typical job titles at Identity/PAM · Professional-Expert

**CyberArk Solution Architect** · **Senior PAM Engineer** · **Identity Security Architect** · **Privileged Access Management Architect** · **Enterprise Identity & Access Architect** · **PAM Technical Lead** · **CyberArk Technical Consultant** · **Senior Identity Security Engineer** · **Privilege Security Specialist** · **Identity & Access Management Director**

*(Job titles drawn from current job-board postings (LinkedIn, Indeed, Glassdoor, CareerJunction) that list CyberArk Sentry, CyberArk architect role, or equivalent senior PAM architecture experience as required or preferred. Titles vary by organization; Fortune 500 enterprises use "CyberArk Solution Architect" or "PAM Architect," while managed service providers use "Senior PAM Consultant.")*

---

## Salary

| Region | Range | Source |
|---|---|---|
| USD | $125,000 – $195,000 | [Glassdoor Security Architect ↗](https://www.glassdoor.com/Salaries/security-architect-salary.htm) · [Robert Half 2026 Salary Guide ↗](https://www.roberthalfusa.com/salary-guide) · [Levels.fyi Security/Identity Architect roles ↗](https://www.levels.fyi) · [ZipRecruiter CyberArk Jobs ↗](https://www.ziprecruiter.com/Jobs/Cyberark) |
| ZAR | R1,800,000 – R2,800,000 | [Pnet ↗](https://www.pnet.co.za) · [PayScale ZA ↗](https://www.payscale.com/research/ZA) · [CareerJunction ↗](https://www.careerjunction.co.za) |
| GBP | £90,000 – £150,000 | [IT Jobs Watch ↗](https://www.itjobswatch.co.uk/Salaries/Details/Security-Architect) · [Hays 2026 Salary Report ↗](https://www.hays.com/salary-guides) |
| EUR | €95,000 – €170,000 (DE/FR/NL) | [PayScale EU ↗](https://www.payscale.com/research/DE/Job=Security_Architect) · [Indeed Salary Data ↗](https://www.indeed.com) |
| AUD | A$160,000 – A$250,000 | [SEEK ↗](https://www.seek.com.au/Salaries/Security-Architect) · [PayScale AU ↗](https://www.payscale.com/research/AU) |

**Salary context:** CyberArk Sentry-certified architects command premium compensation reflecting scarcity of qualified practitioners, strategic value of PAM design, and criticality of privilege security in regulated industries (healthcare, finance, government, defense). Sentry certification drives +20–35% uplift over mid-level security engineers and positions candidates for director/leadership roles. Enterprise architects with Sentry + advanced certifications (CISSP, CISM, or cloud architecture certs) command senior-level compensation. Acquisition by Palo Alto Networks (Feb 2026) has elevated demand significantly across North America, EMEA, and APAC — particularly for architects who can integrate PAM with Palo Alto's cloud security platform and zero-trust architecture.

---

## Skills validated

*Cert-specific — what this exam actually tests, distinct from the shared "Common skills" above.*

- **Enterprise Vault Architecture Design** — safe design and naming at scale (10K+ accounts), vault user hierarchy and role engineering for enterprise orgs, multi-vault federation and replication, vault backup and recovery architecture, vault hardening benchmarks and security configuration, capacity planning and performance baseline establishment
- **Advanced CPM Policy Design & Customization** — custom policy language and conditional rotation logic, plugin development and integration for non-standard targets (Kubernetes, cloud service principals, custom platforms), reconciliation policy design and failure handling, performance tuning and schedule optimization, CPM monitoring, alerting, and troubleshooting
- **Complex PSM Deployment Topologies** — multi-site PSM architecture and redundancy, PSM-to-CPM on-session rotation integration, PSM for SSH (including jump-host, agent, and hardened endpoint modes), PSM for RDP (isolation, MFA, session isolation), PSM for database connections (Oracle, SQL Server, etc.), PSM recording storage architecture (NAS, cloud), compliance-ready audit trails and immutability, session playback and forensic investigation, PSM high availability and disaster recovery
- **Privilege Cloud Architecture & Hybrid Integration** — Privilege Cloud multi-tenancy model and architecture, Privilege Cloud Connect gateway design and deployment, hybrid on-premises + cloud topology design, data residency and compliance (GDPR, HIPAA, FedRAMP), SaaS vs. self-hosted trade-off analysis, migration planning and change management, cloud-native integrations (AWS, Azure, GCP)
- **Cloud-Native & Modern Infrastructure Integration** — Kubernetes-native privilege (RBAC, CyberArk Secrets Provider, external secrets operator integration), container image authentication and artifact signing, Infrastructure-as-Code secret injection (Terraform, CloudFormation, Ansible), serverless and function-as-a-service (Lambda, Azure Functions), API gateway and OAuth 2.0 authentication patterns, multi-cloud unified privilege orchestration
- **Security Hardening, Compliance & Risk Management** — vault hardening configuration and security posture assessment, endpoint protection and least privilege at component level, network isolation and firewall design, encryption key management and HSM integration, security event logging and SIEM integration (Splunk, Sentinel, QRadar, Elastic, Chronicle), compliance reporting and audit readiness (SOC 2, ISO 27001, PCI-DSS, HIPAA, GDPR, FedRAMP), insider threat detection and UBA integration
- **Performance Optimization & Capacity Management** — vault performance tuning (memory, CPU, database), CPM job scheduling and load balancing, PSM recording storage optimization and retention, PVWA caching and UI performance, enterprise-scale capacity planning (10K+ accounts, 5K+ users, 1000s concurrent sessions), monitoring dashboards and KPI definition, disaster recovery testing and RTO/RPO validation
- **Disaster Recovery & Business Continuity** — vault backup and recovery procedures (RTO/RPO design), PSM redundancy and session failover, CPM failover and policy continuity, PVWA load balancing and stateless design, network resilience and WAN topology, disaster recovery testing and runbooks, business continuity planning for mission-critical privilege systems

---

## Exam preparation strategy

The PAM-SEN exam is **architect-level and scenario-heavy**, testing design thinking, troubleshooting complex multi-component systems, and strategic decision-making. Candidates must have hands-on experience designing and deploying CyberArk at enterprise scale. The exam heavily weights architectural choices — expect questions like "Your organization is consolidating 50 vaults across APAC, Europe, and North America; design a topology balancing disaster recovery, compliance (GDPR, PCI-DSS), and performance" rather than operational procedures.

**Prerequisite:** CyberArk Defender (PAM-DEF) certification is required; candidates must demonstrate mastery of Defender content before attempting Sentry.

**Recommended study timeline:** 12–18 weeks for candidates with 18–24 months hands-on PAM architecture or senior operations experience; 20–26 weeks for career-transition candidates or those new to enterprise-scale PAM design.

**Lab environment:** Candidates preparing for Sentry require access to a live CyberArk environment with realistic enterprise configuration. Options include:
- Implementation partner lab clusters (Deloitte, Accenture, IBM, Cognizant, KPMG) during enterprise projects
- Self-hosted POC environments on VMware, Hyper-V, or Kubernetes (requires significant infrastructure)
- CyberArk trial environments with limited configuration scope
- Cloud-hosted lab-as-a-service from specialized training providers (IdentitySkills, SecApps Learning)

**Study approach:**
1. Complete CyberArk Defender exam (prerequisite) and verify mastery of all Defender topics
2. Work through CyberArk University Sentry bootcamp modules (6–8 weeks of instructor-led or self-paced content)
3. Design and configure a multi-component enterprise lab environment replicating real-world scenarios (Vault + CPM + PSM + PVWA, multi-site topology, Privilege Cloud Connect, custom plugins, cloud-native integrations)
4. Deep-dive on each major topic area using vendor documentation, architecture guides, and configuration best practices (4–6 weeks)
5. Practice troubleshooting and design scenarios based on real enterprise case studies and implementation war stories
6. Take the official CyberArk University sample exam (identify weak architectural areas)
7. Review weak domains using advanced documentation (developer guides, API references, plugin frameworks)
8. Take a practice exam from Whizlabs or MeasureUp 2–3 weeks before exam date
9. Final review: case study analysis and design walkthroughs with peers or mentors (1–2 weeks)

**Common failure points:** Candidates often underestimate Privilege Cloud architecture and hybrid deployment complexity, or struggle with advanced CPM plugin development for non-standard targets (Kubernetes, cloud service principals). Weak understanding of disaster recovery topology design and RTO/RPO trade-offs is common. Budget extra study time for enterprise-scale performance tuning, hybrid compliance (GDPR + PCI-DSS), and multi-cloud privilege orchestration. Hands-on lab work is non-negotiable — theory alone does not prepare for Sentry-level scenario questions.

---

## Related certifications and career progression

- **Prerequisite:** [CyberArk Defender ↗](./CyberArk_Defender.md) — required foundation certification; Sentry assumes mastery of all Defender content
- **Gateway to:** [CyberArk Guardian ↗](./CyberArk_Guardian.md) — expert-level cert requiring Sentry + 5+ years enterprise privilege architecture and strategic advisory experience; targets CISO, VP Security, and Chief Architect roles
- **Complementary stack:** [CyberArk Identity Security Engineer ↗](./CyberArk_Identity_Security_Engineer.md) — broader identity/IAM scope (user provisioning, identity governance); Sentry + ISE together cover full privilege lifecycle from user identity to privileged access at enterprise scale
- **Typical progression:** Defender (operator focus) → Sentry (architect focus) → Guardian (strategic/executive focus), reflecting career path from hands-on engineer → solution architect → enterprise strategist / CISO advisory
- **Competitor architect-level certs:** [BeyondTrust Privilege Management Architect ↗](#) (file not yet created) · [Delinea Privilege Manager Solution Designer ↗](#) (file not yet created) · [Okta Identity & Access Management Expert ↗](#) (file not yet created)
- **Vendor overview:** [CyberArk Vendor Overview ↗](../../Vendors/V_CyberArk_Vendor_Overview.md)

---

## Sources

- [CyberArk Certification Program — Overview](https://www.cyberark.com/services-support/certification/)
- [CyberArk University — Sentry Training & Preparation](https://training.cyberark.com/exam/sentry-preparation)
- [CyberArk University — Learning Paths](https://training.cyberark.com/learn)
- [CyberArk Services & Support — Training](https://www.cyberark.com/services-support/training/)
- [Pearson VUE — CyberArk Certification Exams](https://www.pearsonvue.com/us/en/cyberark.html)
- [CyberArk Acquisition by Palo Alto Networks Announcement (Feb 2026)](https://www.paloaltonetworks.com)
- [Glassdoor: Security Architect Salary Data](https://www.glassdoor.com/Salaries/security-architect-salary.htm)
- [Robert Half 2026 Salary Guide — Security & Identity](https://www.roberthalfusa.com/salary-guide)
- [Levels.fyi — Security/Identity Architect Compensation](https://www.levels.fyi)
- [ZipRecruiter: CyberArk Jobs Listing](https://www.ziprecruiter.com/Jobs/Cyberark)
- [Whizlabs: CyberArk Sentry Practice Exams](https://www.whizlabs.com)
- [MeasureUp: CyberArk Sentry Exam Practice](https://www.measureup.com)
- [Udemy: PAM-SEN CyberArk Sentry Exam Prep Course](https://www.udemy.com/course/pam-sen-cyberark-sentry-pam-exam/)
- [IdentitySkills: CyberArk Enterprise Training](https://www.identityskills.com/courses/cyberark-training/)
- [Pnet (South Africa): Security Architect Salary Benchmarks](https://www.pnet.co.za)
- [IT Jobs Watch (UK): Security Architect Salary Data](https://www.itjobswatch.co.uk/Salaries/Details/Security-Architect)
- [Hays 2026 IT Salary Report — EMEA](https://www.hays.com/salary-guides)
- [Hacker House: Privileged Attack Vectors](https://www.hackerhouse.blog)
- [Wiley/Sybex: Privileged Access Management — A Practical Guide](https://www.wiley.com)
- [O'Reilly: Zero Trust Networks](https://www.oreilly.com)

---

*Last verified: 2026-05-01*  
*Parent ecosystem: [CyberArk Ecosystem](../../Ecosystems/D29_CyberArk_Ecosystem.md)*  
*Parent domain: [Identity/PAM](../../Domains/D02_Identity_PAM.md)*  
*Vendor overview: [CyberArk Vendor Overview](../../Vendors/V_CyberArk_Vendor_Overview.md)*
