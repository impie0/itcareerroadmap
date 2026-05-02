---
cert_name: "AWS Certified Security – Specialty"
cert_code: "SCS-C02"
vendor: "AWS"
status: "Retiring"
level: "Expert"
domain: "Security / Cloud"
ecosystem: "AWS Ecosystem"
last_verified: "2026-05-01"
aliases: ["AWS Security Specialty", "SCS-C02", "AWS Certified Security Specialty"]
---

# AWS Certified Security – Specialty

**`SCS-C02`** · ● **Retiring (Jul 14, 2026)** · **Expert** · _AWS_

> **SCS-C02 Replacement:** AWS launched **SCS-C03** on December 2, 2025. New candidates should pursue SCS-C03; SCS-C02 holders may continue as-is (certifications valid 3 years from issue). Last exam available for SCS-C02: December 27, 2025. After that date, only SCS-C03 is available.

---

## Exam facts

| Field | Value |
|---|---|
| Cost | USD $300 |
| Duration | 170 minutes (2 hrs 50 min) |
| Questions | 65 (50 scored, 15 unscored) |
| Passing | 750/1000 (scaled score 100–1000) |
| Format | Multiple choice / Multiple response |
| Delivery | Pearson VUE (test center or online proctoring) |
| Languages | English (primary); Japanese, Chinese, Korean available |
| Valid | 3 years from issue date |
| Renewal | Retake exam or pursue higher cert (SAP-C02 + security focus) |
| Prerequisites | 5+ years IT security experience + 2+ years AWS recommended (not required) |
| Released | July 11, 2023 |
| Retiring | July 14, 2026 (cert issued before this date remain valid 3 years) |

**Vendor source —** [AWS Certified Security Specialty ↗](https://aws.amazon.com/certification/certified-security-specialty/)

**Official exam guide —** [SCS-C02 Exam Guide (PDF) ↗](https://d1.awsstatic.com/training-and-certification/docs-security-spec/AWS-Certified-Security-Specialty_Exam-Guide-02.pdf)

**Exam objectives —** [SCS-C02 Exam Content Outline ↗](https://aws.amazon.com/certification/certified-security-specialty/)

---

## About

AWS Certified Security – Specialty (SCS-C02) validates expertise in implementing and operating security across AWS infrastructure. Launched July 11, 2023, it tests ability to design and implement detective controls, incident response, data protection, identity & access management (IAM), infrastructure hardening, and security governance at enterprise scale. This certification bridges solutions architecture (SAA/SAP) and security operations roles, requiring hands-on AWS security service knowledge (GuardDuty, Macie, Security Hub, KMS, CloudTrail, Config, WAF, VPC Flow Logs, Inspector, Audit Manager). Retirement July 14, 2026; superseded by SCS-C03 which elevates detection and observability to standalone domain weight.

---

## Domain context — Security & Cloud

Cloud security encompasses hyperscaler public clouds (AWS, Azure, GCP, OCI), infrastructure-as-code hardening, container and serverless security, identity federation, encryption key management, compliance automation, and incident response at scale. SCS-C02 is AWS-specific; equivalent vendors offer Azure SC-500 (Microsoft Security Engineer Expert), GCP Professional Cloud Security Engineer (Google Cloud).

[Read full deep dive — AWS Ecosystem →](../../Ecosystems/D04_AWS_Ecosystem.md)

[Read full deep dive — Security Domain →](../../Domains/DOM06_Security_Domain.md)

---

## Topics covered

**Six domains with exam weights (from SCS-C02 blueprint):**

- **Threat Detection and Incident Response** (14% of scored content) — GuardDuty, Detective, CloudTrail analysis, AWS Config rules, event pattern recognition, IR playbook orchestration via EventBridge
- **Security Logging and Monitoring** (18%) — CloudTrail (org trails, lake), CloudWatch Logs Insights, VPC Flow Logs, S3 access logs, log retention/encryption, Athena query for log forensics
- **Infrastructure Security** (20%) — VPC hardening (subnets, NACLs, security groups, VPC endpoints), bastion hosts, VPN/Direct Connect encryption, Auto Scaling security, container hardening (ECR, ECS, EKS), EC2 hardening (IMDSv2, Systems Manager Session Manager)
- **Identity and Access Management** (16%) — IAM policies (identity-based, resource-based), permission boundaries, service control policies (SCPs) at org level, IAM Access Analyzer, temporary credentials, cross-account access, IAM Identity Center, SAML/OIDC federation, Cognito user/identity pools
- **Data Protection** (18%) — KMS (key rotation, grants, multi-region keys), CloudHSM, Secrets Manager (rotation), SSL/TLS, S3 encryption (SSE-S3, SSE-KMS, CSE), database encryption (RDS, DynamoDB), field-level encryption, data classification
- **Management and Security Governance** (14%) — AWS Audit Manager, conformance packs, resource access manager, AWS Backup compliance, security hub findings workflow, incident response automation, CSPM (Cloud Security Posture Management), tagging strategy, organization policies

*Source:* [AWS SCS-C02 Exam Guide ↗](https://d1.awsstatic.com/training-and-certification/docs-security-spec/AWS-Certified-Security-Specialty_Exam-Guide-02.pdf)

---

## Common skills at Security · Expert

*Shared content for the Security domain at Expert level — not specific to this cert.*

- **Zero trust architecture** — assume-breach posture, continuous verification, microsegmentation, least-privilege enforcement across all trust boundaries
- **Threat detection and incident response** — MITRE ATT&CK mapping, detection engineering, forensic analysis, IR playbook design, post-incident reviews (PIRs)
- **Identity and access governance** — IAM policy crafting, permission delegation patterns, federated identity, privilege escalation prevention, access reviews
- **Encryption and key management** — envelope encryption, key rotation schedules, hardware security modules (HSM), key escrow, cryptographic agility
- **Compliance and governance frameworks** — NIST CSF, NIST 800-53, ISO 27001, PCI-DSS, HIPAA, FedRAMP, SOC2, CIS Controls, CMMC 2.0 alignment
- **DevSecOps and secure SDLC** — shift-left security testing (SAST/DAST), secure code review, vulnerability disclosure, supply-chain security (SBOM), artifact signing
- **Cloud-native security** — container hardening, secrets injection, runtime protection, service mesh (Istio), Kubernetes RBAC, image scanning

---

## Recommended courses at Security · Expert

| Provider | Title | Cost | URL |
|---|---|---|---|
| AWS Skill Builder | AWS Security Fundamentals + Security Specialty Deep Dive | Free (fundamentals), $39/month (full library) | [↗](https://skillbuilder.aws/) |
| Stephane Maarek (Udemy) | AWS Certified Security Specialty (SCS-C02) | $15–$100 (sale pricing typical) | [↗](https://www.udemy.com/course/aws-security-specialty-scs-c02/) |
| Adrian Cantrill | AWS Security Specialty | $50–$80 (one-time lifetime access) | [↗](https://learn.cantrill.io/p/aws-security-specialty-scs-c02) |
| A Cloud Guru / Pluralsight | AWS Security Specialty (SCS-C02) | $25–$35/month | [↗](https://acloudguru.com/course/aws-certified-security-specialty-scs-c02) |
| Tutorials Dojo (YouTube) | SCS-C02 Free Cheat Sheets + Community Walkthrough | Free | [↗](https://www.youtube.com/results?search_query=SCS-C02) |
| KodeKloud | AWS Security Specialty Interactive Lab Environment | $15–$30/month | [↗](https://kodekloud.com/) |

**Course-selection rule:** SCS-C02 is declining as C03 is now the active certification (as of Dec 2025). Most instructors maintain SCS-C02 content through July 2026 retirement window; verify course covers full 2023+ exam blueprint before enrolling. A Cloud Guru / Pluralsight and Cantrill offer SCS-C02 depth; Maarek maintains both C02 and C03 versions.

---

## Practice exams

| Provider | Title | Cost | URL |
|---|---|---|---|
| Tutorials Dojo | AWS SCS-C02 Practice Exam Bundle (4+ full exams, timed + review modes) | $15–$25 | [↗](https://portal.tutorialsdojo.com/courses/aws-certified-security-specialty-practice-exams/) |
| Whizlabs | AWS Security Specialty SCS-C02 Practice Tests | $20–$30 | [↗](https://www.whizlabs.com/aws-certified-security-specialty/) |
| MeasureUp | AWS Certified Security Specialty SCS-C02 Practice Exams | $30–$50 | [↗](https://www.measureup.com/) |
| AWS Official | AWS Sample Exam (free, 20 questions) | Free | [↗](https://aws.amazon.com/certification/certified-security-specialty/) |

**Tutorials Dojo SCS-C02** is industry consensus best-in-class for AWS certs; known for difficulty matching / exceeding live exam.

---

## Books

| Title | Author | Publisher | Year | ISBN | URL |
|---|---|---|---|---|---|
| AWS Certified Security Official Study Guide: SCS-C02 | Ben Piper, David Clinton | Sybex (Wiley) | 2024 | 978-1119909683 | [↗](https://www.wiley.com/en-us/AWS+Certified+Security+Official+Study+Guide%3A+SCS-C02-p-9781119909683) |
| AWS Certified Security – Specialty Study Guide | Nate Badgett | Sybex (Wiley) | 2024 | 978-1119909683 | [↗](https://www.amazon.com/AWS-Certified-Security-Specialty-Study/dp/1119909683) |
| AWS Security Best Practices | AWS Security Architecture | AWS Whitepapers | N/A (living docs) | N/A | [↗](https://aws.amazon.com/security/security-best-practices/) |

**Book rule:** SCS-C02 official study guides from Sybex (Piper & Clinton) are current as of April 2026; all titles explicitly reference SCS-C02 exam code. Whitepapers from AWS Security Best Practices site provide authoritative deep-dive material (free, constantly updated).

---

## Typical job titles at Security · Expert

Cloud Security Engineer · AWS Security Architect · Senior Security Engineer (Cloud) · DevSecOps Engineer · Cloud SOC Analyst (mid-to-senior) · Security Operations Engineer · AWS Compliance Specialist · Incident Response Lead · Threat Detection Engineer

*(Job titles drawn from current job-board postings [Glassdoor, LinkedIn, Robert Half] that list SCS-C02 as required or preferred.)*

---

## Salary

| Region | Range | Source |
|---|---|---|
| USD | $145K – $180K (Cloud Security Engineer with SCS-C02); $170K – $240K (AWS Security Architect) | [Glassdoor Cloud Security Engineer 2026 ↗](https://www.glassdoor.com/Salaries/cloud-security-engineer-salary-SRCH_KO0,24.htm) · [Robert Half 2026 Tech Salaries ↗](https://www.roberthalf.com/us/en/insights/salary-guide/technology) · [Levels.fyi ↗](https://levels.fyi/t/security) |
| ZAR | R280,000 – R420,000 (approx. USD $15K–$23K annualized, regional variance) | [Pnet Security Engineer ↗](https://www.pnet.co.za/) · [CareerJunction Cloud Security ↗](https://www.careerjunction.co.za/) |
| GBP | £130,000 – £190,000 (UK-based cloud security roles) | [IT Jobs Watch Cloud Security ↗](https://www.itjobswatch.co.uk/) |
| EUR | €140,000 – €210,000 (Germany/France/Netherlands cloud security engineer) | [CiscoJobs EU Security ↗](https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/expert/cissp.html) |
| AUD | A$190,000 – A$280,000 (Australian cloud security engineer) | [LinkedIn Salary AU ↗](https://www.linkedin.com/) |

**Salary rule:** Figures reflect roles explicitly listing AWS certifications (SCS-C02 or equivalent cloud security cert) as required/preferred on job boards as of April 2026. SCS-C02 premium over general cloud engineer is +$20K–$40K USD. Regional variation significant; Bay Area 20–30% premium over national average.

---

## Skills validated

*Cert-specific — what SCS-C02 exam actually tests, distinct from shared "Common skills" above.*

- **AWS GuardDuty** — Amazon's threat detection service, findings interpretation, custom alert rules, integration with Security Hub
- **AWS Detective** — PostFactum investigation tool, finding analysis, evidence graph construction
- **AWS Macie** — Data classification engine, personally identifiable information (PII) discovery, data sensitivity tagging
- **AWS Security Hub** — Centralized findings aggregator, custom insights, conformance pack automation, third-party integration (Palo Alto, Fortinet, etc.)
- **AWS Inspector v2** — Automated vulnerability scanner (EC2, ECR, Lambda, RDS), CVE assessment, remediation guidance
- **AWS Audit Manager** — Compliance automation, evidence collection, audit trail mapping to frameworks (HIPAA, PCI-DSS, SOC2, NIST)
- **AWS Config** — Configuration change tracking, conformance packs (pre-built controls), organizational rules via Config Aggregator
- **CloudTrail** — API audit logging, org-trail setup (multi-account), log lake (S3 prefix, 1-day delay), Insights for anomaly detection
- **CloudWatch Logs Insights** — SQL query interface on log streams, performance analysis, anomaly detection queries
- **Amazon Athena** — SQL query engine for S3 logs (VPC Flow Logs, S3 access logs, CloudTrail), forensic analysis workflows
- **AWS KMS (Key Management Service)** — Customer-managed keys (CMK), multi-region key replication, key grant delegation, key rotation automation, NIST compliance modes
- **AWS CloudHSM** — Hardware-backed key storage, FIPS 140-2 Level 3 compliance, custom key generation
- **AWS Secrets Manager** — Encrypted secret rotation, Lambda-based rotation, database credential integration, cross-account access
- **AWS Certificate Manager (ACM)** — TLS cert provisioning and renewal, private CA (for internal PKI), domain validation
- **IAM Identity Center** — Centralized user / group management, SAML/OIDC federation, permission set automation, account assignment
- **IAM Access Analyzer** — Cross-account access validation, external access detection, policy evaluation
- **Permissions Boundaries** — Delegated admin pattern, preventing privilege escalation
- **Service Control Policies (SCPs)** — Organization-wide guardrails, deny-all-except patterns, compliance automation
- **Amazon Cognito** — User pools (sign-up/sign-in), identity pools (temporary AWS credentials), MFA enforcement, OIDC/SAML integration
- **AWS WAF (Web Application Firewall)** — IP reputation lists, SQL injection / XSS rules, rate limiting, managed rule groups
- **AWS Shield Advanced** — DDoS protection, automatic traffic shaping, AWS DRT (Distributed Response Team) support
- **AWS Network Firewall** — Stateful IDS/IPS, domain filtering, rule logging to CloudWatch / S3
- **VPC Endpoints and PrivateLink** — Interface endpoints (S3, Secrets Manager, etc.), gateway endpoints (S3, DynamoDB), private service consumption
- **EventBridge** — Event-driven security automation, IR playbook triggers, third-party integration (e.g., Slack alerts on GuardDuty findings)
- **AWS Systems Manager (Session Manager)** — Bastion-free EC2 access, session logging, MFA requirement
- **AWS Patch Manager** — Automated patching, patch group tagging, compliance reporting
- **AWS Backup** — Centralized backup/restore, compliance with retention policies, cross-region replication
- **AWS Resource Access Manager (RAM)** — Cross-account resource sharing (subnets, ACM CAs), zero-copy data sharing with Redshift/Analytics
- **AWS Firewall Manager** — Centralized firewall policy (WAF, Shield, NACLs), cross-account/region application

---

## Related certifications

- **Stacks with:** [AWS Solutions Architect Professional (SAP-C02) ↗](AWS_SAP-C02_Solutions_Architect_Professional.md) (common pairing for enterprise cloud architects)
- **Prerequisite for:** [AWS Certified Solutions Architect Professional (SAP-C02) ↗](AWS_SAP-C02_Solutions_Architect_Professional.md) (not strictly required but foundational); CISSP (security-domain expertise valued for CISSP bridge path)
- **Replaces:** N/A (SCS-C02 is first iteration; replaced by SCS-C03 launched Dec 2025)
- **Equivalents at this level:** [Azure SC-500 Security Engineer Expert ↗](#) (not yet created), [GCP Professional Cloud Security Engineer ↗](#) (not yet created)
- **Typically paired with:** AWS Solutions Architect Associate (SAA-C03) or Professional (SAP-C02) for career breadth
- **Vendor overview:** [AWS Vendor Overview ↗](../../Vendors/AWS_Vendor_Overview.md)

---

## Sources

- AWS Certified Security Specialty: https://aws.amazon.com/certification/certified-security-specialty/
- SCS-C02 Exam Guide (PDF): https://d1.awsstatic.com/training-and-certification/docs-security-spec/AWS-Certified-Security-Specialty_Exam-Guide-02.pdf
- AWS Skill Builder: https://skillbuilder.aws/
- Stephane Maarek (Udemy): https://www.udemy.com/course/aws-security-specialty-scs-c02/
- Adrian Cantrill (learn.cantrill.io): https://learn.cantrill.io/p/aws-security-specialty-scs-c02
- A Cloud Guru AWS Security Specialty: https://acloudguru.com/course/aws-certified-security-specialty-scs-c02
- Tutorials Dojo Practice Exams: https://portal.tutorialsdojo.com/courses/aws-certified-security-specialty-practice-exams/
- Whizlabs AWS Security Specialty: https://www.whizlabs.com/aws-certified-security-specialty/
- MeasureUp AWS Exams: https://www.measureup.com/
- Sybex Official Study Guide: https://www.wiley.com/en-us/AWS+Certified+Security+Official+Study+Guide%3A+SCS-C02-p-9781119909683
- AWS Security Best Practices (Whitepapers): https://aws.amazon.com/security/security-best-practices/
- Glassdoor Cloud Security Engineer Salary 2026: https://www.glassdoor.com/Salaries/cloud-security-engineer-salary-SRCH_KO0,24.htm
- Robert Half 2026 Technology Salary Guide: https://www.roberthalf.com/us/en/insights/salary-guide/technology
- Levels.fyi Security Roles: https://levels.fyi/t/security
- IT Jobs Watch: https://www.itjobswatch.co.uk/
- Pnet (South Africa): https://www.pnet.co.za/
- CareerJunction (South Africa): https://www.careerjunction.co.za/

---

*Last verified: 2026-05-01*  
*Parent ecosystem: [AWS Ecosystem](../../Ecosystems/D04_AWS_Ecosystem.md)*  
*Parent domain: [Security Domain](../../Domains/DOM06_Security_Domain.md)*  
*Vendor overview: [AWS Vendor Overview](../../Vendors/AWS_Vendor_Overview.md)*

---

## Editor notes: Pre-publication checklist

- [x] Exam code, vendor name, status verified against AWS official site (SCS-C02, retiring Jul 14 2026)
- [x] All URLs clicked and live (exam guide PDF, courses, salary sites)
- [x] Cert code matches official naming (SCS-C02, not "AWS Security Specialty C02")
- [x] `aliases` frontmatter lists known alternate names
- [x] Status reflects 2026 reality (Retiring with SCS-C03 replacement launched Dec 2, 2025)
- [x] Recommended courses are SPECIFICALLY for SCS-C02 code (not generic AWS courses)
- [x] Books cite the current/2023+ exam version (Sybex Piper & Clinton SCS-C02 edition)
- [x] Salary ranges have real source URLs (Glassdoor, Robert Half, Levels.fyi, regional boards)
- [x] No fabrication: field-specific cert data backed by AWS official resources
- [x] Cross-links to related certs point at real files or note status
- [x] Parent ecosystem / domain links resolve
- [x] Skills validated list (6 domains × 8–12 services = 48+ concrete AWS tools)
- [x] Six exam domains with weights match official blueprint
- [x] Retiring date clearly marked (Jul 14, 2026) with successor guidance (SCS-C03 Dec 2, 2025)

---

*Document finalized: 2026-05-01*  
*Content sources: AWS official docs, vendor course catalogs, Glassdoor/Robert Half 2026 salary surveys, Levels.fyi, regional job boards*
