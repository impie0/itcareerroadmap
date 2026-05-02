---
cert_name: "Rubrik Certified Systems Administrator"
cert_code: "RCSA"
vendor: "Rubrik"
status: "Active"
level: "Associate"
domain: "Backup, Disaster Recovery & Cyber Resilience"
ecosystem: "Rubrik Cloud Data Management (CDM)"
last_verified: "2026-05-01"
aliases: ["RCSA", "Rubrik Certified System Administrator"]
---

# Rubrik Certified Systems Administrator

**`RCSA`** · ● **Active** · **Associate** · _Rubrik_

> The Rubrik Certified Systems Administrator (RCSA) validates foundational expertise in deploying, configuring, and operationally managing Rubrik Security Cloud (RSC) to protect enterprise workloads. This entry-level vendor certification is commonly held by backup engineers, infrastructure administrators, and IT professionals transitioning into data protection roles.

---

## Exam facts

| Field | Value |
|---|---|
| Cost | ~$200 USD; free for Rubrik Support customers |
| Duration | 90 minutes |
| Questions | 70 (all scored; mix of single and multiple choice) |
| Passing | 75% (≥53 of 70 correct) |
| Format | Multiple choice / Multiple response |
| Delivery | Rubrik-hosted online proctored |
| Languages | English |
| Valid | 3 years |
| Renewal | Pass RCSA renewal exam or pursue RSC (Specialist) certification |
| Prerequisites | None formal; 4-day Rubrik University "Introduction to Rubrik Security Cloud" bootcamp recommended |
| Released | 2019 (current exam version ongoing; last major update 2022) |
| Retiring | N/A (active, no retirement announced as of May 2026) |

**Vendor source —** [Rubrik University Training Platform ↗](https://training.rubrik.com/)
**Official exam guide —** [RCSA Certification Page ↗](https://www.credly.com/org/rubrik/badge/rubrik-certified-system-administrator-rcsa)
**Exam preparation —** [Free RCSA Learning Plan ↗](https://training.rubrik.com/learn/article/rcsa)

---

## About

The Rubrik Certified Systems Administrator (RCSA) certifies hands-on capability with Rubrik Security Cloud (RSC) and the legacy Cloud Data Management (CDM) platform. RCSA holders typically administer backup policies, manage SLA domains, configure snapshots and replication, respond to anomaly alerts, and perform data recovery operations. The cert was introduced in 2019 and remains Rubrik's entry-level credential; it is frequently a stepping stone toward the RSC (Specialist) professional level. The exam is vendor-specific (no crossover to Veeam, Commvault, or Veritas) and targets administrators in organizations running Rubrik as primary backup/DR infrastructure.

---

## Domain context — Backup, Disaster Recovery & Cyber Resilience

Backup, disaster recovery, and cyber resilience form a converged domain where data protection, ransomware defense, and business continuity overlap. Rubrik pioneered "immutable snapshots" and "anomaly detection" as cornerstones of ransomware resilience. The RCSA sits within Rubrik's certification ladder below the RSC Specialist (intermediate) and RSC Expert (advanced) credentials.

[Read full deep dive — Rubrik Cloud Data Management Ecosystem →](../Ecosystems/Rubrik_Ecosystem.md)

---

## Topics covered

Based on official Rubrik exam blueprints and candidate forums, the RCSA exam spans these six domains:

- **Architecture & Cluster Management** — Rubrik cluster topology, node roles, network configuration, multi-cluster deployments
- **SLA Domains & Policies** — SLA policy creation, assignment to workloads, backup frequency and retention windows
- **Workload Protection** — Protecting virtual machines (vSphere, Hyper-V), physical servers, and cloud-native instances; snapshot mechanics
- **Database Protection** — SQL Server, Oracle, and PostgreSQL backup, log shipping, live mount for instant recovery
- **Security & Encryption** — Encryption at rest and in flight, audit logging, user authentication, compliance reporting
- **Replication & Administration** — Cluster-to-cluster replication, archive to cloud (AWS/Azure/GCP), recovery operations, troubleshooting

*Source:* [Rubrik RCSA Exam Blueprint (Training Platform)↗](https://training.rubrik.com/)

---

## Common skills at Backup, Disaster Recovery & Cyber Resilience · Associate

*Shared competencies for infrastructure professionals at Associate level in the backup and DR domain — not specific to Rubrik.*

- Backup and recovery architecture: designing retention policies, RTO/RPO targets, capacity planning
- Snapshot and incremental backup mechanics: understanding block-level deduplication, snap-to-tape, copy-on-write
- Disaster recovery planning and testing: failover procedures, runbooks, compliance reporting
- Cloud storage and archival: managing backup tiers (on-premises → cloud → long-term cold storage)
- Ransomware detection and response: anomaly detection, immutable storage, recovery point isolation
- Infrastructure automation: API-driven backup, policy-as-code, integration with orchestration platforms (Terraform, Ansible)

---

## Recommended courses at Backup, Disaster Recovery & Cyber Resilience · Associate

| Provider | Title | Cost | URL |
|---|---|---|---|
| Rubrik University (Official) | Introduction to Rubrik Security Cloud | ~$2,000–$2,500 | [↗](https://training.rubrik.com/cloud-data-management-bootcamp) |
| Rubrik University (Official) | RCSA Exam Prep Learning Path | Free (with Rubrik Support portal login) | [↗](https://training.rubrik.com/learn/article/rcsa) |
| Rubrik University (Official) | Rubrik Security Cloud Technical Fundamentals | Free (self-paced eLearning) | [↗](https://training.rubrik.com/) |
| Udemy (Third-party) | Rubrik Practice Tests and Interview Questions | $12–$15 | [↗](https://www.udemy.com/course/rubrik-practice-tests-and-interview-questions/) |
| YouTube (Community) | Rubrik RCSA Study Guide and Q&A | Free | [↗](https://www.youtube.com/results?search_query=rubrik+rcsa+study) |

**Course-selection rule:** The free Rubrik University RCSA learning plan is the authoritative prep resource; it includes unlimited practice exams and immediate feedback. The 4-day bootcamp is recommended but optional (most candidates pass using free self-paced content + practice exams).

---

## Practice exams

| Provider | Title | Cost | URL |
|---|---|---|---|
| Rubrik University (Official) | RCSA Practice Exam (unlimited attempts) | Free | [↗](https://training.rubrik.com/learn/article/rcsa) |
| Quizlet (Community) | RCSA All Questions Flashcards | Free | [↗](https://quizlet.com/867450521/rcsa-practice-all-questions-no-repeats-flash-cards/) |
| Community (591 Lab) | RCSA Practice Exam Bundle | $50–$100 | [↗](https://591cert.com/product/rubrik-certified-system-administrator-rcsa-exam/) |

**Note:** Official Rubrik practice exams allow unlimited retakes with immediate feedback; this is the gold standard for prep. Third-party bundles are useful for supplemental drilling but are not Rubrik-authored.

---

## Books

| Title | Author | Publisher | Year | ISBN | URL |
|---|---|---|---|---|---|
| Rubrik Certified System Administrator RCSA Study Guide (v9) | M.J.S Press | M.J.S Press | 2023 | 978-B0GRQVRD4D | [↗](https://www.amazon.com/Rubrik-Certified-System-Administrator-Study-ebook/dp/B0GRQVRD4D) |
| Rubrik Administration and Operations Guide | Rubrik, Inc. (Official Docs) | Rubrik Documentation | Ongoing | N/A | [↗](https://docs.rubrik.com/) |

**Book rule:** The M.J.S Press study guide is the only dedicated third-party RCSA study guide; official Rubrik documentation is freely available and continuously updated. No major publisher (Sybex, O'Reilly, Pearson) publishes RCSA books; vendors typically self-publish or rely on official docs.

---

## Typical job titles at Backup, Disaster Recovery & Cyber Resilience · Associate

Rubrik Engineer · Backup Administrator (Rubrik focus) · Storage Administrator · Cyber Resilience Engineer · Data Protection Specialist · Infrastructure Engineer (Backup Operations)

*(Job titles drawn from current job-board postings that list RCSA or Rubrik experience as required or preferred.)*

---

## Salary

| Region | Range | Source |
|---|---|---|
| USD | $75,000 – $140,000 | [Glassdoor ↗](https://www.glassdoor.com/Salary/Rubrik-Salaries-E955861.htm) · [6figr ↗](https://6figr.com/us/salary/rubrik) |
| ZAR | R780,000 – R1,560,000 (est. based on USD parity) | Regional conversion; no region-specific survey available |
| GBP | £55,000 – £105,000 (est.) | No verified region-specific salary data; typical UK backup admin range |

**Salary note:** RCSA holders typically earn backup/storage administrator salary bands, not pure software engineer compensation. The ranges above reflect on-premises backup operations roles. Cloud-native backup engineers and Rubrik specialists command 10–25% premiums.

---

## Skills validated

*Specific technologies and competencies tested by the RCSA exam.*

- Rubrik Security Cloud (RSC) cluster architecture, deployment, and multi-site replication
- Cloud Data Management (CDM) platform configuration and administration (legacy but still in use)
- SLA domain design and policy enforcement across mixed workload types
- Live Mount and Instant Recovery for zero-downtime data restoration
- Cloud-native snapshot protection for AWS, Azure, and Google Cloud instances
- Ransomware anomaly detection (Polaris / Radar / ML-based alerting)
- Sensitive Data Discovery (post-Laminar acquisition) — automated detection of PII/sensitive fields
- Data Source Policy Management (DSPM) and compliance reporting
- Replication and archive workflows (cloud-to-cloud and on-prem-to-cloud)
- Ruby API and automation scripting for backup operations
- Backup validation and recovery point testing

---

## Related certifications

- **Stacks with:** [Veeam Certified Engineer (VCE) ↗](../Veeam/Veeam_VCE_Certified_Engineer.md) · [Commvault Certified Specialist ↗](../Commvault/Commvault_Certified_Specialist.md) *(cross-vendor backup trifecta at Associate level)*
- **Prerequisite for:** [Rubrik Security Cloud (RSC) Specialist ↗](./Rubrik_RSC_Specialist.md) *(professional-level Rubrik cert; assumes RCSA foundation)*
- **Equivalents at this level:** Veeam Certified Engineer (VCE), Commvault Certified Specialist, Veritas Backup Exec Certified Associate
- **Vendor overview:** [Rubrik Vendor Overview ↗](../../Vendors/Rubrik_Vendor_Overview.md)

---

## Sources

- [Rubrik University — Official Training Platform](https://training.rubrik.com/)
- [Rubrik RCSA Certification Badge — Credly](https://www.credly.com/org/rubrik/badge/rubrik-certified-system-administrator-rcsa)
- [Rubrik Official Documentation](https://docs.rubrik.com/)
- [Rubrik RCSA Study Guide (M.J.S Press) — Amazon](https://www.amazon.com/Rubrik-Certified-System-Administrator-Study-ebook/dp/B0GRQVRD4D)
- [Glassdoor — Rubrik Salaries](https://www.glassdoor.com/Salary/Rubrik-Salaries-E955861.htm)
- [6figr — Rubrik Compensation Data](https://6figr.com/us/salary/rubrik)
- [Rubrik Careers Page](https://www.rubrik.com/company/careers)

---

*Last verified: 2026-05-01*
*Parent ecosystem: [Rubrik Cloud Data Management](../../Ecosystems/Rubrik_Ecosystem.md)*
*Parent domain: [Backup, Disaster Recovery & Cyber Resilience](../../Domains/Backup_DR_Cyber_Resilience.md)*
*Vendor overview: [Rubrik Vendor Overview](../../Vendors/Rubrik_Vendor_Overview.md)*
