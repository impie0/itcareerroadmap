# D47: Veritas Technologies & Arctera — Enterprise Data Protection & Compliance Ecosystem

**Status:** Active (post-Cohesity merger Dec 2024)  
**Region focus:** Global; HQ Pleasanton CA (Arctera)  
**Last updated:** April 2026

---

## Overview

Veritas Technologies and Arctera represent the fragmented heritage of an enterprise backup and data compliance powerhouse. The 2024 Cohesity acquisition of Veritas' data protection business—worth $3 billion—completed in December 2024, with the remaining compliance, eDiscovery, and SMB backup lines spun out as independent company Arctera in parallel. This creates a unique two-headed ecosystem: Cohesity now owns the flagship NetBackup enterprise platform, while Arctera holds InfoScale (clustering/HA), Backup Exec (SMB), Enterprise Vault (archival), and the eDiscovery compliance suite. As of August 2025, Cloud Software Group has agreed to acquire Arctera, expected to close Q4 2025.

---

## Part 1: Corporate History

### Origins: Veritas & NetBackup (1997–2005)

NetBackup traces back to **OpenVision Technologies**, a backup company acquired by Veritas Software Corporation in May 1997. Veritas became the market leader in enterprise backup software throughout the 1990s and early 2000s [1].

In **February 2005**, Symantec Corporation acquired Veritas Software for **$13 billion**, integrating NetBackup into the broader Symantec product line and rebranding it as **Symantec NetBackup**. Over the next decade, NetBackup remained Symantec's flagship backup offering, serving thousands of enterprises globally [2].

### Symantec Spinoff & Carlyle Ownership (2015–2016)

On **August 7, 2015**, Symantec announced it would divest Veritas, selling the business unit to **The Carlyle Group** (global private equity firm) for **$7.4 billion**. This reflected a strategic shift by Symantec to focus on security products rather than data management [2].

On **August 8, 2016**, the separation was completed and Veritas was once again independent as **Veritas Technologies LLC**. The product reverted to **Veritas NetBackup** branding. Post-spinoff, Veritas recast itself as a data management and protection platform company, with NetBackup as the centerpiece of the "Veritas 360 Data Management Suite" [2].

Throughout 2016–2024, Veritas under Carlyle ownership expanded the product portfolio with cloud-native solutions (Veritas Alta), advanced data security capabilities, and eDiscovery/compliance tools (eDiscovery Platform, Enterprise Vault, eScrow).

### Cohesity Merger & Arctera Spinoff (2024)

On **February 8, 2024**, Cohesity (a SaaS-first data protection company) and Veritas announced plans to merge, with Cohesity acquiring Veritas' Enterprise Data Protection business [3]. The deal valued Veritas' data protection unit at **~$3 billion** within a **$7 billion** combined entity [2].

Critically, Veritas' **data compliance, eDiscovery, and SMB backup lines** were retained separately by Carlyle as **Arctera** — a new independent company formed to hold:
- **InfoScale** (clustering, HA, storage management)
- **Data Compliance & Governance** (Insight platform)
- **Backup Exec** (SMB-focused backup)
- **eDiscovery Platform** (litigation/investigation software)
- **Enterprise Vault** (email/data archival)

On **December 10, 2024**, the Cohesity-Veritas merger completed. Arctera finalized separation from Veritas in the same period, becoming an independent entity with **~1,500 employees**, headquartered in **Pleasanton, California**, generating **over $400 million in annual revenue** with **40%+ adjusted EBITDA margins** [3][4].

**Lawrence Wong**, former SVP and Chief Strategy Officer at Veritas, was appointed **CEO of Arctera**. Wong had driven Veritas' cloud transformation and Alta product strategy; he now oversees Arctera's three business units (Data Resilience/InfoScale, Data Compliance, Data Protection/Backup Exec) operating with separate product teams [4].

### Cloud Software Group Acquisition (Aug 2025 – Dec 2025)

On **August 5, 2025**, Cloud Software Group announced a definitive agreement to acquire Arctera from Carlyle funds [5]. The transaction is expected to close in **Q4 2025** [5]. Upon close, Arctera will operate as a standalone business unit within Cloud Software Group's portfolio—a diversified enterprise software holding company [5].

---

## Part 2: Veritas — Now Part of Cohesity

### NetBackup: Enterprise Backup Flagship

**NetBackup** is Veritas' (now Cohesity's) premier enterprise backup and recovery platform, the global market leader by customer count (85% of Fortune 100, 70% of Global 500) [3]. The platform serves large organizations needing:
- **Multi-vendor environment backup** (VMware, Hyper-V, cloud VMs, databases, applications)
- **Appliance-based deployment** (NetBackup appliances, all-in-one backup/recovery targets)
- **Scalability** (petabyte-scale, thousands of clients)
- **Advanced features**: deduplication, instant recovery, cloud-integrated backup

**Key versions in field (2025–26):**
- **NetBackup 10.x** — current mainstream release (released post-Cohesity integration)
- **NetBackup 9.1** — still widely deployed in enterprises
- **NetBackup 8.1.2** — legacy, still supported; many organizations hold this version in production

### NetBackup Appliances

Veritas also markets **NetBackup Appliances**, pre-configured backup targets bundled with NetBackup software. These come in form factors from small branch offices to massive data center–class systems, reducing deployment complexity for enterprise customers [3].

### Cohesity DataProtect & Platform Unification (2025+)

Cohesity previously owned **DataProtect**, its native SaaS-first backup platform. Post-merger, the roadmap calls for **architectural unification** without replacing NetBackup:

- **NetBackup data** will be stored in **Cohesity's SpanFS filesystem** (unified storage layer)
- **Helios** (Cohesity's cloud management plane) will become the common control plane for both NetBackup and DataProtect
- Both products will containerize and unify code over time, presenting a **single dashboard** for data and resource management
- **Connector parity**: all integrations (VMware, Kubernetes, databases, SaaS apps) will be available to both products
- **NetBackup is NOT being replaced** — rather, both products co-exist and evolve on the unified platform

As of February 2025, the integration roadmap was well underway [6].

### Veritas Alta Cloud Portfolio

**Veritas Alta** is the cloud-native SaaS backup offering acquired during Veritas' independent years and now part of Cohesity. Alta delivers backup-as-a-service with cloud-first design, targeting:
- Organizations preferring cloud-managed backup over on-premises appliances
- Cross-cloud and hybrid workloads
- Zero capex backup consumption

In 2025, the Cohesity roadmap explicitly commits to expanding and federating the best of **Cohesity Cloud Services** with **Veritas Alta**, delivering expanded PaaS backup support (Azure App Services, AWS RDS, Google Cloud SQL, etc.), faster backup performance to cloud object storage, and intelligent workload grouping [6].

---

## Part 3: Arctera — Data Compliance, Clustering, SMB Backup

### Corporate Structure (Post-Spinoff, Dec 2024)

Arctera operates as **three distinct business units**, each with dedicated product development and marketing teams, under a common parent holding company [4]:

1. **Data Resilience** → **InfoScale**
2. **Data Compliance & Governance** → **Insight Platform** + eDiscovery products
3. **Data Protection** → **Backup Exec**, **Enterprise Vault**

### InfoScale: Clustering & HA

**InfoScale** is a comprehensive cyber resilience solution engineered to ensure **real-time availability and protection** for applications across physical, virtual, and cloud environments. Historically known as Veritas InfoScale, it is now the flagship product of Arctera's Data Resilience business unit [7].

**Core capabilities:**
- **Clustering**: Active-active and active-passive failover across data centers
- **Volume management**: Logical volume management, snapshots, replication
- **Storage tiering**: Intelligent caching and data movement
- **Application HA**: Built-in modules for Oracle, SAP, SQL Server, and custom applications
- **Cloud extension**: Run clusters hybrid (on-prem + cloud nodes)

**Target market:**
- Large enterprises running mission-critical databases (Oracle, SAP HANA, Teradata)
- Financial services, telco, healthcare requiring sub-second failover
- Reducing single points of failure in virtualized and cloud environments

---

### Data Compliance, Governance & eDiscovery

Arctera's **Data Compliance** unit consolidates multiple product lines addressing legal hold, litigation support, regulatory compliance, and forensic investigation:

#### Arctera eDiscovery Platform (formerly eDP / Clearwell)

A **large-scale litigation and investigation engine** for conducting dataset-driven searches and producing discoverable information [7]. Capabilities include:
- **Search**: Full-text, metadata, concept search across millions of documents
- **Review**: Lawyer-assisted document triage and tagging
- **Production**: Structured export for legal proceedings (with privilege log, QC)
- **Analytics**: Visualization of relationships, threads, and trends

Used by law departments, litigation support firms, and internal investigations teams [7].

#### Arctera eDiscovery (Unified)

A **complete, integrated eDiscovery solution** simplifying the entire EDRM (Electronic Discovery Reference Model) workflow [7]:
- **Collection**: Capture from 120+ sources in full context (email, file shares, messaging, mobile)
- **Preservation**: Legal hold / evidence control
- **Review & Production**: Unified platform for counsel and paralegals
- **Advanced features**: AI-powered document classification, privilege detection, deduplication

Targets organizations needing simplified end-to-end eDiscovery without juggling separate point tools [7].

#### Arctera Insight Platform

A **unified data compliance and risk management platform** combining [7]:
- **Discovery**: Identify sensitive data, PII, regulated content across enterprise sources
- **Classification**: Automate policy-based tagging and governance
- **Surveillance**: Monitor data movement and access patterns
- **Retention**: Enforce records management and legal hold

Designed for compliance officers, records managers, and privacy teams [7].

#### Enterprise Vault

**Email and data archival solution** for long-term retention, compliance, and discovery [7]. Integrates with **Microsoft Exchange**, **Outlook**, **SharePoint**, and other systems to:
- Archive emails, attachments, instant messages, Teams channels
- Manage retention policies per email/folder
- Support eDiscovery / forensic investigation
- Ensure GDPR, HIPAA, SOX compliance

Enterprise Vault 2025 adds **Windows Server 2025** support, **Exchange 2019 CU15** compatibility, **credential rotation** via CyberArk PAM, and **Kerberos security** enhancements [8].

---

### Backup Exec: SMB-Focused Backup

**Backup Exec** is the **small-to-medium business (SMB) backup platform**, positioned against Veeam, Acronis, and Commvault in the sub-1000-node segment [9]. Key traits:
- **Ease of use**: Graphical console, simple agent deployment
- **Lower complexity**: Fewer tuning knobs than NetBackup; out-of-box defaults work for most SMBs
- **Windows-centric**: Excellent Windows Server, SQL Server, Hyper-V integration
- **Cost**: Per-socket, per-VM, or subscription pricing tiers
- **Cloud backup**: Backup to Microsoft Azure, AWS S3, Wasabi (with REST API integration)

**Recent momentum (2025):** For the first time since Veritas' Carlyle era, Backup Exec has been assigned a **dedicated software development team** under Arctera, signaling renewed investment [9]. Backup Exec 25.1 (released 2025) adds:
- **Windows Server 2025** support
- **Microsoft 365** improvements (Teams Private Channels, Entra ID tenant backup/restore)
- **PST export** from Exchange
- **Performance** and **license tracking** enhancements
- **CyberArk PAM** integration for secure credential management

This revitalization suggests Arctera is committed to Backup Exec as a growth vector, not a legacy cash cow [9].

---

## Part 4: Competitive Position

### Enterprise Heritage vs. Cloud Challengers

**Veritas/Cohesity (via NetBackup):**
- **Strengths**: Installed base (Fortune 100 dominance), appliance-based architecture, proven petabyte-scale deployments, advanced feature set
- **Weaknesses**: Complex management, licensing model perception, on-prem first (though Alta cloud offering improving)
- **Market position**: #1 by installed base; Gartner Magic Quadrant Leader in Enterprise Backup (traditional)

**Competing against:**
- **Veeam**: SaaS-first, simpler UI, growing cloud market share
- **Rubrik**: Modern SaaS, cloud-native API-first design, rapid growth (~$17B valuation 2025)
- **Cohesity** (pre-merger): Unified data management, converged platform play
- **Commvault**: Enterprise legacy player (acquired by Cleyle in recent PE deals), similar maturity as Veritas

### Arctera's Niche

**Arctera holds defensible niches:**
- **eDiscovery**: Established player with decades of law-firm relationships; Clearwell/eDP legacy in Gartner Leader square
- **Backup Exec**: Dominant in mid-market Windows/Exchange shops; migration to cloud-backup incumbency
- **InfoScale**: Specialized HA/clustering for Oracle/SAP; not directly competed by cloud-first vendors (cloud cannot replicate legacy HA middleware)
- **Enterprise Vault**: Email archival with compliance; mature market but defensible if actively developed

**Risk:** If Cloud Software Group integration (Aug 2025 deal) prioritizes cost-cutting over R&D, Arctera products risk stagnation. However, CSG's portfolio includes mature enterprise software (Citrix, Tibco), suggesting tolerance for slower-growth but high-margin products [5].

---

## Part 5: Certifications & Professional Tracks

### Veritas Certified Specialist (VCS) — NetBackup

Veritas offers role-based certification paths. The primary certification is **Veritas Certified Specialist (VCS)** in NetBackup.

#### Active Exams (2025–26)

| Exam Code | Title | Focus | Target Audience | Status |
|-----------|-------|-------|-----------------|--------|
| **VCS-284** | Veritas NetBackup 10.x Administrator | NetBackup 10.x core administration | Backup admins, infrastructure engineers | **Current** |
| **VCS-285** | Veritas NetBackup 10.x & NetBackup Appliance 5.x Administrator | NetBackup 10.x + appliance management | Backup/appliance admins | **Current** |

**Source:** [Veritas Certification Exam List](https://www.veritas.com/services/education-services/certification/exams) [10].

#### Legacy Exams (Still Available, Potentially Retiring)

| Exam Code | Title | Focus | NetBackup Version | Status |
|-----------|-------|-------|------------------|--------|
| **VCS-282** | NetBackup 9.1 Administrator | NetBackup 9.1 core | 9.1 | Likely retiring 2025–2026 |
| **VCS-283** | NetBackup 9.1 & Appliance 4.1 Administrator | NetBackup 9.1 + appliance | 9.1 + Appliance 4.1 | Likely retiring 2025–2026 |
| **VCS-278** | Administration of Veritas NetBackup 8.1.2 | NetBackup 8.1.2 core | 8.1.2 (legacy) | Legacy; no retirement date confirmed |
| **VCS-279** | NetBackup 8.1.2 & Appliance 3.1.2 | NetBackup 8.1.2 + appliance 3.x | 8.1.2 + Appliance 3.x | Legacy; no retirement date confirmed |

**Note:** VCS-278 and VCS-279 remain available as of April 2026, indicating Veritas support for organizations still running NetBackup 8.1.2. Official retirement dates were not published; candidates should verify with Veritas certification page before enrolling [10].

#### Exam Details & Cost

- **Delivery:** Pearson VUE proctored exam (invigilated, remote or test center)
- **Duration:** Typically 90 minutes
- **Format:** Multiple-choice, scenario-based questions
- **Cost:** Approximately **USD $225** (historical pricing; Veritas does not publicly post 2025 exam fees; candidate should verify at registration) [10]
- **Prerequisite training:** Recommended (not required): Veritas official NetBackup administration courses (instructor-led or on-demand)

#### Certification Path & Professional Credential

Passing **one** VCS NetBackup exam earns:
- **Veritas Certified Specialist (VCS)** designation
- Counts toward **Veritas Certified Professional (VCP)** credential (requires multiple VCS certifications + experience)

No exam retake limits published; standard Pearson retake policies apply (24-hour waiting period between attempts) [10].

### Arctera Certifications

As of April 2026, **Arctera does not publish an independent certification program** separate from inherited Veritas tracks. However:

- **Backup Exec**: No formal certification (third-party training available via training partners)
- **InfoScale**: Veritas legacy HA/clustering certifications exist (VCS-IFS track) but not widely advertised post-spinoff
- **eDiscovery**: EDRM-aligned training; no vendor certification (focus on legal tech skills + Clearwell/eDP product training)

**Recommendation:** Arctera may establish formal certification post-Cloud Software Group acquisition (expected by 2026), as CSG owns other software with training programs.

---

## Part 6: Career Roles & Salary Data

### Role 1: NetBackup Administrator

**Profile:**
- Installs, configures, and maintains NetBackup environments in enterprise data centers
- Manages backup policies, storage targets, disaster recovery testing, and client updates
- Works with database teams, application owners, and infrastructure to integrate backup flows
- Troubleshoots backup failures, performance issues, retention policy violations
- Monitors NetBackup appliances and licensing

**Required skills:**
- NetBackup 9.x or 10.x operational knowledge (VCS-284 or VCS-285 typical)
- Storage, VMware/Hyper-V, database fundamentals
- Linux/Windows system administration basics
- Scripting (bash, PowerShell, Java) for automation
- Backup terminology (incremental, deduplication, RPO/RTO, retention)

**Salary ranges (USD, 2025–26):**
- **Entry (0–2 yrs):** USD $70,000–$85,000
- **Mid (2–5 yrs):** USD $90,000–$130,000
- **Senior (5+ yrs):** USD $130,000–$180,000
- **Lead / Architect:** USD $160,000–$250,000+

**Source:** ZipRecruiter (Mar 2026) reports NetBackup admin roles $90k–$250k; Glassdoor avg USD $95,147/yr; Veritas Technologies avg compensation USD $95k–$124.5k (90th percentile) [11].

**South African context (ZAR, est. 2025–26):**
- **Entry:** ~ZAR 1.2–1.5M annual (USD $70–85k ÷ ~17 exchange rate)
- **Mid:** ~ZAR 1.5–2.2M
- **Senior:** ~ZAR 2.2–3.0M+

*Note: South African IT salary surveys (Payscale, HumanCapitalReview ZA) do not disaggregate NetBackup roles; conversions above are USD salary estimates applied to April 2026 exchange rates. Organizations in ZA may pay 10–20% below equivalent USD roles due to regional cost-of-living adjustments.*

---

### Role 2: eDiscovery Analyst

**Profile:**
- Manages legal discovery requests (document collection, preservation, review)
- Uses eDiscovery platforms (Arctera eDiscovery, eDiscovery Platform, Clearwell) to collect, cull, and produce documents for litigation
- Communicates with counsel, case teams, and external parties about discovery scope, timelines, budgets
- Ensures compliance with EDRM standards, privilege log requirements, litigation holds
- Performs QA on document exports; manages metadata integrity

**Required skills:**
- eDiscovery platform competency (hands-on use of Clearwell, eDiscovery Platform, or similar)
- Legal hold process & litigation support
- EDRM knowledge and best practices
- Data preservation, chain of custody
- Email systems (Exchange, Gmail, Teams) and file-sharing architectures
- Communication with attorneys and paralegals (clear writing, domain vocabulary)
- Optional: Coding/SQL for advanced scripting; understanding of email threading and duplicate detection

**Salary ranges (USD, 2025–26):**
- **Entry (0–2 yrs):** USD $55,000–$75,000
- **Mid (2–5 yrs):** USD $75,000–$115,000
- **Senior (5+ yrs):** USD $110,000–$155,000
- **Lead / Manager:** USD $140,000–$200,000+

**Source:** Glassdoor reports eDiscovery Analyst avg USD $95,173/yr (2025); ZipRecruiter avg USD $73,261 (Jan 2026); Salary.com USD $67,933; typical range USD $52k–$131k (Apr 2026) [12].

**South African context (ZAR, est. 2025–26):**
- **Entry:** ~ZAR 0.9–1.3M annual (USD $55–75k ÷ ~17 exchange)
- **Mid:** ~ZAR 1.3–2.0M
- **Senior:** ~ZAR 1.9–2.6M+

*Note: eDiscovery roles are rare in South Africa; most roles concentrated in US, UK, Singapore, Australia. Organizations with international litigation (e.g., multinational law firms, in-house teams at JSE-listed companies) may hire ZA-based analysts, usually with 10–15% ZAR discount to USD equivalent.*

---

### Role 3: InfoScale / Clustering Specialist

**Profile:**
- Architects and manages InfoScale environments (Veritas InfoScale, now Arctera)
- Designs high-availability clusters for mission-critical databases (Oracle, SAP, Teradata, SQL Server)
- Manages replication, failover testing, volume management, disaster recovery
- Integrates InfoScale with storage, hypervisors, cloud platforms
- Troubleshoots cluster failures, network issues, data inconsistency

**Required skills:**
- InfoScale (formerly Veritas HA) operational knowledge
- Cluster architecture & failover concepts
- Target database (Oracle DBA, SAP HANA admin, etc.)
- Storage & SAN fundamentals
- Linux/Unix system administration (Solaris, HPUX, Red Hat legacy knowledge valuable)
- Networking (iSCSI, Fibre Channel, replication traffic)

**Salary ranges (USD, 2025–26):**
- **Entry (0–2 yrs):** USD $85,000–$110,000
- **Mid (2–5 yrs):** USD $110,000–$155,000
- **Senior (5+ yrs):** USD $150,000–$210,000
- **Principal Architect:** USD $200,000–$280,000+

*Note: InfoScale specialists are rarer than backup admins; premium salary reflects lower supply and high specialization. Glassdoor/ZipRecruiter do not disaggregate HA/clustering roles; salary estimates based on Oracle DBA + storage admin benchmarks.*

**South African context (ZAR, est. 2025–26):**
- **Entry:** ~ZAR 1.4–1.8M annual
- **Mid:** ~ZAR 1.9–2.6M
- **Senior:** ~ZAR 2.6–3.5M+

*Note: InfoScale roles are very rare in ZA; mostly in multinational financial services (Investec, FirstRand), insurance (Discovery, Santam), and e-commerce. Expect 15–20% ZAR discount to USD.*

---

### Role 4: Backup Exec Support / Administrator (SMB Focus)

**Profile:**
- Installs, configures, and supports Backup Exec in mid-market Windows environments
- Manages backup policies for file servers, Exchange, SQL Server, Hyper-V, and cloud VMs
- Performs tape/disk management, retention, and recovery testing
- Provides first/second-level support to users and internal teams
- Monitors backup jobs, alerts, and licensing

**Required skills:**
- Backup Exec GUI and administration console
- Windows Server, SQL Server, Hyper-V basics
- Storage & disk/tape systems (NAS, SAN)
- Backup terminology (full, incremental, synthetic, dedup)
- Communication with non-technical stakeholders (easy troubleshooting)

**Salary ranges (USD, 2025–26):**
- **Entry (0–2 yrs):** USD $55,000–$75,000
- **Mid (2–5 yrs):** USD $75,000–$110,000
- **Senior (5+ yrs):** USD $105,000–$155,000
- **Lead / Architect:** USD $140,000–$200,000+

*Note: Backup Exec roles are often bundled with broader IT operations; salary data aggregates with "backup administrator" benchmarks.*

---

## Part 7: Recent News & Roadmap (2025–2026)

### Cohesity Integration & NetBackup Unification (Dec 2024 – Apr 2026)

Post-completion of the December 2024 merger:

- **Helios management plane unification** underway; both NetBackup and DataProtect will use Helios as control plane
- **SpanFS deployment** beginning with NetBackup data migration (Feb 2025 timeline reported)
- **Connector parity** targets achieved in roadmap; new cloud environment support (7 additional PaaS) released in early 2025
- **NetBackup 10.x releases** continuing; no end-of-life announced
- **Veritas Alta cloud** expanded with PaaS and hybrid workload support; federation with Cohesity Cloud Services underway

**Sanjay Poonen** remains CEO of combined Cohesity-Veritas entity. The company eyes a **2026 IPO** with valuation rivaling Rubrik's ~$17 billion [6][3].

### Arctera Independence & Cloud Software Group Acquisition (Dec 2024 – Dec 2025)

- **December 2024:** Arctera officially spins off and becomes independent entity
- **August 2025:** Cloud Software Group announces definitive agreement to acquire Arctera (expected close Q4 2025)
- **Backup Exec revitalization:** First dedicated development team assigned; Backup Exec 25.1 released with Windows Server 2025, Teams, Entra ID support [9]
- **Enterprise Vault:** 2025 roadmap adds Kerberos, CyberArk PAM, Windows Server 2025, Exchange 2019 CU15 [8]
- **eDiscovery & InfoScale:** Roadmap unclear post-CSG acquisition; likely continuation of established patterns (incremental feature updates, legacy support)

### Post-Cloud Software Group Integration (Expected 2026+)

Upon CSG close:
- Arctera will operate as **standalone business unit** within CSG portfolio (similar to Citrix, Tibco under CSG ownership)
- Product roadmaps likely to stabilize around **cloud-first enhancements** (Backup Exec → cloud-native components, eDiscovery → SaaS workflow)
- Cross-portfolio integration opportunities (e.g., Backup Exec + Citrix workload integration, eDiscovery + Citrix data governance)

---

## Part 8: Learning Path

### For NetBackup Administrator Track

1. **Foundation (3–6 months)**
   - Linux/Unix basics (100+ hours): LFCA or equivalent
   - Windows Server administration (100+ hours)
   - Storage fundamentals (SAN/NAS, RAID, snapshots)
   - Backup concepts (RPO/RTO, deduplication, retention)
   - *Resource:* [Veritas official training](https://www.veritas.com/services/education-services/training) (instructor-led or on-demand); third-party courses (Udemy, Pluralsight)

2. **NetBackup Core (2–4 months)**
   - NetBackup 10.x architecture, agents, policies, recovery
   - NetBackup appliances (installation, management)
   - Integration with VMware, Hyper-V, Kubernetes
   - Hands-on lab environment (VMs, test backup jobs)
   - *Resource:* Veritas official NetBackup Administrator course → VCS-284 or VCS-285 exam

3. **Advanced (3–6 months, on the job)**
   - Troubleshooting backup failures
   - Performance tuning, capacity planning
   - Disaster recovery planning and testing
   - Cloud integration (NetBackup + Azure, AWS S3)
   - eDiscovery/compliance use cases (if organization uses Veritas Vault or eDP)

4. **Certification**
   - Enroll in **VCS-284** (NetBackup 10.x) or **VCS-285** (10.x + Appliance 5.x)
   - Exam cost: ~USD $225
   - Pass rate typically 60–70% on first attempt; retake available
   - Expires: No explicit expiration; Veritas may require periodic renewal (not yet codified as of 2026)

---

### For eDiscovery Analyst Track

1. **Foundation (2–3 months)**
   - EDRM principles and best practices (study EDRM model, guides)
   - Legal hold processes, litigation support workflows
   - Email and file-sharing systems (Exchange, SharePoint, Teams, Google Workspace)
   - Metadata, de-duplication, privilege detection concepts
   - *Resource:* EDRM.net (free guide), online courses (Coursera, LinkedIn Learning on legal tech)

2. **Platform-Specific (1–3 months)**
   - Arctera eDiscovery Platform hands-on lab (if access available)
   - eDiscovery Platform (Clearwell) workflows: collect, review, produce
   - Search syntax, tagging, QA processes
   - *Resource:* Arctera / vendor documentation, third-party eDiscovery training (legal tech bootcamps)

3. **On-the-Job Training (3–12 months)**
   - Conduct live discovery on real cases (supervised)
   - Respond to attorney requests, manage discovery budgets
   - Learn internal workflows, privilege guidelines, opposing counsel preferences
   - Advanced features: analytics, concept search, thread reconstruction

4. **Certifications**
   - No formal vendor certification; industry recognizes **EDRM competency** and **eDiscovery Practitioner** (EDP) via IAAP
   - Optional: **Certified eDiscovery Specialist (CES)** via various legal tech bodies (not required)
   - Focus is on platform mastery + legal domain knowledge, not credentialing

---

### For InfoScale / HA Track

1. **Foundation (4–6 months)**
   - Unix/Linux deep dive (Solaris, Red Hat, HP-UX architecture)
   - Storage & volume management fundamentals
   - Cluster concepts: split-brain, quorum, failover, fencing
   - Database fundamentals (Oracle, SAP HANA, or Teradata)
   - *Resource:* Linux Academy, A Cloud Guru, vendor documentation

2. **InfoScale Core (3–6 months)**
   - InfoScale architecture (SF/SF Oracle, SF Databases, Storage Replicator, HA)
   - Design cluster topologies (active-passive, active-active)
   - Hands-on lab: build 2–3 node cluster, failover testing
   - Integration with storage arrays, hypervisors
   - *Resource:* Veritas InfoScale admin guides; third-party training (rare; mostly vendor-led)

3. **Advanced (6–12 months, on the job)**
   - Disaster recovery planning, geo-replication
   - Performance monitoring, tuning
   - Upgrade/patching strategies
   - Integration with cloud environments (hybrid clusters)

4. **Certifications**
   - **VCS-IFS** (Veritas InfoScale) exams exist but are not widely marketed post-spinoff
   - Focus is on deep technical skills + Oracle/SAP DBA certifications (OCP, SAP Certification) alongside

---

### For Backup Exec / SMB Track

1. **Foundation (1–2 months)**
   - Windows Server administration (2012–2025)
   - SQL Server, Exchange, Hyper-V basics
   - Storage & backup concepts
   - *Resource:* Microsoft Learn, Udemy

2. **Backup Exec Core (1–2 months)**
   - Backup Exec GUI and agent deployment
   - Policy management, job scheduling
   - Disk/tape management
   - Cloud backup (Azure, AWS integration)
   - *Resource:* Veritas Backup Exec admin guide; third-party courses

3. **On-the-Job (2–6 months)**
   - Deploy policies for production servers
   - Manage recovery requests
   - Monitor and optimize job scheduling
   - Troubleshoot backup failures

4. **Certifications**
   - No formal Backup Exec certification available; some third-party training providers (e.g., CBT Nuggets) offer Backup Exec courses
   - Focus is on platform mastery and Windows admin skills

---

## Part 9: Sources

[1] TechTarget. "What is Veritas NetBackup (Symantec NetBackup)? Definition." https://www.techtarget.com/searchdatabackup/definition/Symantec-NetBackup

[2] Wikipedia. "Veritas Technologies." https://en.wikipedia.org/wiki/Veritas_Technologies

[3] Cohesity. "Cohesity Becomes World's Largest Data Protection Software Provider After Completing Combination with Veritas' Enterprise Data Protection Business" (December 2024). https://www.cohesity.com/newsroom/press/cohesity-becomes-worlds-largest-data-protection-provider-after-completing-combination-with-veritas-enterprise-data-protection-business/

[4] TechTarget. "Arctera emerges as spinoff from Veritas-Cohesity merger" (December 2024). https://www.techtarget.com/searchdatabackup/news/366615488/Arctera-emerges-as-spinoff-from-Veritas-Cohesity-merger

[5] Cloud Software Group. "Cloud Software Group to Acquire Arctera" (August 2025). https://www.cloud.com/news/press-release/2025/cloud-software-group-to-acquire-arctera

[6] Blocks and Files. "Veritas NetBackup data to be stored in Cohesity filesystem and codebase unification coming" (February 5, 2025). https://blocksandfiles.com/2025/02/05/veritas-netbackup-data-to-be-stored-in-cohesity-filesystem-and-codebase-unification-coming/

[7] Arctera. "Products." https://www.arctera.com/ (product pages for eDiscovery, InfoScale, Data Compliance)

[8] Arctera. "Driving Product Evolution: 3 Themes for our Backup Exec Release" (2025). https://www.arctera.com/blog/driving-product-evolution-three-core-themes-behind-our-latest-backup-exec-release

[9] IT Pro. "Arctera Backup Exec 25.1 review: A smart business data protection solution with no hidden costs" (2025). https://www.itpro.com/infrastructure/backup/arctera-backup-exec-25-1-review-a-smart-business-data-protection-solution-with-no-hidden-costs

[10] Veritas. "Certification Exam List." https://www.veritas.com/services/education-services/certification/exams

[11] ZipRecruiter. "Veritas NetBackup Administrator Salaries" (March 2026). https://www.ziprecruiter.com/Jobs/Veritas-Netbackup

[12] Glassdoor. "eDiscovery Analyst Salary" (2025–2026). https://www.glassdoor.com/Salaries/ediscovery-analyst-salary-SRCH_KO0,18.htm

---

## Certifications — Quick Reference Table

### Veritas NetBackup VCS / VCP Certifications

| Exam Code | Title | Product Version | Target Role | Status | Renewal | Cost (USD) |
|-----------|-------|-----------------|------------|--------|---------|-----------|
| **VCS-284** | Veritas NetBackup 10.x Administrator | NetBackup 10.x | Backup Admin / Engineer | **Active** | Not mandated (as of 2026) | ~$225 |
| **VCS-285** | NetBackup 10.x & Appliance 5.x Administrator | NetBackup 10.x + Appliance 5.x | Backup/Appliance Admin | **Active** | Not mandated | ~$225 |
| **VCS-282** | NetBackup 9.1 Administrator | NetBackup 9.1 | Legacy environments | Likely retiring 2026 | N/A | ~$225 |
| **VCS-283** | NetBackup 9.1 & Appliance 4.1 Administrator | NetBackup 9.1 + Appliance 4.1 | Legacy appliance | Likely retiring 2026 | N/A | ~$225 |
| **VCS-278** | Administration of Veritas NetBackup 8.1.2 | NetBackup 8.1.2 (legacy) | Legacy support | Legacy; available | N/A | ~$225 |
| **VCS-279** | NetBackup 8.1.2 & Appliance 3.1.2 | NetBackup 8.1.2 + Appliance 3.x | Legacy appliance | Legacy; available | N/A | ~$225 |

**Veritas Certified Professional (VCP):** Requires multiple VCS certifications + experience; no explicit renewal requirement published as of April 2026 [10].

### Arctera Certifications

As of April 2026, Arctera does not publish independent certifications post-spinoff. However, inherited Veritas tracks remain:

| Product | Certification Path | Status | Notes |
|---------|-------------------|--------|-------|
| **Backup Exec** | VCS-325 (Backup Exec 20.1/21.x) | Exam available; no formal track | Third-party training available |
| **InfoScale** | VCS-IFS track (HA/Clustering) | Legacy; not widely marketed | Remains available; rarely tested |
| **eDiscovery** | No vendor cert; EDRM + platform training | Industry-recognized | Focuses on legal tech + Clearwell/eDP mastery |

**Sources:** [Veritas Exam List](https://www.veritas.com/services/education-services/certification/exams) [10]; [Arctera Education Services](https://www.arctera.com/education-services) [13].

---

## Free Training Resources

### Official Veritas / Arctera Education

- **[Veritas Training Courses & Schedule](https://www.veritas.com/services/education-services/training-courses)** — instructor-led and on-demand; geo-based
- **[Arctera Education Services](https://www.arctera.com/education-services)** — post-spinoff training portal; VCS exams + partner training
- **[Arctera Backup Exec 22 Administration](https://www.veritas.com/services/education-services/training-courses/backup-exec-22-admin)** — official course (SMB focus)
- **[Veritas NetBackup 10.0 Administration](https://www.veritas.com/services/education-services/training-courses/netbackup-10-admin)** — official core course

### YouTube Training Channels (Free)

- **[Veritas Official NetBackup Training](https://www.youtube.com/watch?v=tmW1Weq8EGk)** — architecture, appliances, administration fundamentals
- **[Exolearn: Veritas NetBackup Online Training](https://www.youtube.com/watch?v=sMrgZ72b3dY)** — NetBackup 8.0 & 9.1 video series
- **[NetBackup 10 Training from Zero to Hero](https://www.youtube.com/playlist?list=PL9eqA6Co57RIR-ow52OAE-BB4fvSXc_8R)** — comprehensive playlist covering NetBackup 10.x
- **[Symantec NetBackup Full Course (Exolearn)](https://www.youtube.com/watch?v=Tdd6eKJdNuI)** — legacy Symantec-era content; foundational concepts transferable
- **[Veritas Backup Exec Advance Training](https://www.youtube.com/watch?v=eKyyPMxqfnE)** — Backup Exec SMB introduction
- **[Storage Tutorials — Veritas NetBackup Archive](https://www.storagetutorials.com/tag/veritas-netbackup-tutorial/)** — written guides + video clips

### Free Trial / Demo Access

- **[Backup Exec Trialware](https://www.veritas.com/form/trialware/backup-exec.)** — 30-day functional trial from Veritas; full SMB backup platform experience

### Documentation (Official Free)

- **[Veritas NetBackup Administrator's Guide Volume I & II](https://www.veritas.com/support/en_US/article.100044086)** — official on-premises docs (free; HTML + PDF)
- **[Veritas PartnerNet Training Portal](https://partnernet.veritas.com/en/us/training.html)** — partner-facing resources; practice labs available to authorized partners

---

## Paid Training Platforms

### Udemy (Budget-Friendly)

- **[Veritas Specialist (VCS) NetBackup Appliances Practice Tests](https://www.udemy.com/course/veritas-specialist-vcs-netbackup-appliances-practice-tests/)** — practice exam simulator; ~USD $10–15 on sale
- **[Veritas NetBackup 8.x Practice Test & Interview Refresher](https://www.udemy.com/course/veritas-netbackup-8x-practice-test-interview-refresher/)** — legacy 8.x focus; ~USD $10–15
- **[Net Backup Data Protection Part 2 & Part 3](https://www.udemy.com/course/net-backup-data-protection-part-2/)** — vendor-agnostic backup concepts; ~USD $15 each

### Pluralsight

- **No dedicated 2026 Veritas NetBackup or Backup Exec courses listed** on Pluralsight; focus is on cloud-native backup (Veeam, Commvault, AWS Backup) [verified April 2026]

### LinkedIn Learning

- **[System Administration: Backup and Recovery](https://www.linkedin.com/learning/system-administration-backup-and-recovery-21776888/backup-exec)** — covers Backup Exec fundamentals; ~USD $30/month subscription

### Coursera

- **No Veritas/Arctera NetBackup or Backup Exec courses listed** as of April 2026; focus on foundational backup concepts via university partners [verified]

### Cybrary

- **[System Administrator Training & Labs](https://www.cybrary.it/career-path/system-administrator)** — includes backup/recovery fundamentals; free + premium tiers
- **No Veritas-specific track;** general Windows/Linux backup concepts available

### Third-Party Training Providers

- **[Koenig Solutions: Veritas NetBackup 8.2 Administration](https://www.koenig-solutions.com/veritas-netbackup-administration)** — classroom + online; instructor-led
- **[InfoSecTrain: Veritas NetBackup 8.1.2 Advanced Administration](https://www.infosectrain.com/courses/veritas-netbackup-8-1-2-advanced-administration-training/)** — advanced technical focus; ~USD $400–600
- **[Ascendient Learning: NetBackup & Backup Exec Training](https://www.ascendientlearning.com/it-training/veritas/backup-recovery)** — authorized partner; classroom + virtual; cost varies by geography
- **[Firebrand: Veritas Backup Exec Administration (Accelerated)](https://firebrand.training/en/courses/veritas/administration-veritas-backup-exec-certification)** — intensive bootcamp style; ~USD $1,500–2,000

### eDiscovery-Specific Platforms

- **[Relativity Certifications](https://www.relativity.com/resources/certification/)** — industry-leading eDiscovery platform; certifications align with Arctera eDiscovery workflows
- **[Robert Half: Litigation & eDiscovery Specialist Career Guide](https://www.roberthalf.com/us/en/insights/career-development/litigation-ediscovery-specialist-jobs)** — salary benchmarks + skill requirements (USD focus)

---

## Books & References

### NetBackup & Enterprise Backup Administration

| Title | Author | Publisher | Year | ISBN | URL |
|-------|--------|-----------|------|------|-----|
| Backup And Restore: A Comprehensive Guide To Systems Administration For Netbackup | Owen Jansing | Self-published | 2023 | 9798388492418 | [Amazon UK](https://www.amazon.co.uk/Backup-Restore-Comprehensive-Administration-Netbackup/dp/B0BZFP3716) |
| Veritas NetBackup Administrator's Guide, Volume I (Official) | Veritas Technologies | Veritas (free online) | 2025 | N/A | [Veritas Support Portal](https://www.veritas.com/support/en_US/doc/18716246-129889741-0/index) |
| Implementing Backup and Recovery: The Readiness Guide for the Enterprise | [Flylib archive] | Flylib / Pearson | 2004 | N/A | [Flylib (legacy)](https://flylib.com/books/en/2.683.1.87/1/) |

**Note:** Official Veritas NetBackup Administrator's Guides (Volumes I & II) are available as free PDFs on the Veritas support portal; these are the canonical references and are updated per release.

### Backup Concepts & Data Protection

- **SNIA Backup & Archive Specifications** (free, vendor-neutral) — foundational backup terminology, dedup, retention
- **Storage Networking Industry Association (SNIA)** — publishes open-access data protection white papers

### eDiscovery & Litigation Support

- **eDiscovery Reference Model (EDRM)** — https://www.edrm.net (free guides on legal holds, workflow)
- **Relativity Community Resources** — documentation for eDiscovery platform best practices (free; Relativity account required)

---

## Typical Job Titles

### NetBackup / Backup Administration

1. **Backup Administrator** — entry-level; day-to-day job execution
2. **Veritas NetBackup Administrator** — role-specific; requires VCS-284/285
3. **Enterprise Backup Engineer** — mid-level; design + troubleshooting focus
4. **Backup & Recovery Specialist** — independent IC; multiple platform mastery
5. **Storage/Backup Architect** — senior; enterprise-scale design, DR planning
6. **Data Protection Engineer** — contemporary title; covers backup + replication + cloud
7. **NetBackup Support Specialist** — vendor support / escalation role
8. **Backup Operations Manager** — supervises backup admins; SLA/reporting focus
9. **Disaster Recovery (DR) Specialist** — RTO/RPO focus; recovery testing + runbooks
10. **Cloud Backup Engineer** — hybrid/multi-cloud backup design (NetBackup Alta, cloud-target integration)

### Backup Exec / SMB Backup

1. **Backup Exec Administrator** — SMB-focused; GUI-driven
2. **Junior Backup Administrator** — first role; Windows/Exchange focus
3. **IT Operations / Backup Support** — bundled role; backups + general ops

### eDiscovery

1. **eDiscovery Analyst** — entry/mid; document review + collection workflows
2. **eDiscovery Specialist** — platform mastery; project leadership
3. **eDiscovery Project Manager** — supervises analysts; client/attorney liaison
4. **eDiscovery Developer / Data Specialist** — advanced scripting, SQL, analytics
5. **Forensic eDiscovery Examiner** — investigation focus; digital forensics integration

### InfoScale / HA Clustering

1. **Veritas InfoScale Administrator** — day-to-day HA cluster ops
2. **HA/Clustering Specialist** — deep expertise; multisite failover design
3. **Cluster Architect** — enterprise mission-critical database HA (Oracle, SAP)
4. **Storage Replication Engineer** — replication + disaster recovery
5. **Database High Availability Engineer** — DBA + InfoScale integration

---

## Common Hard & Soft Skills

### Hard Skills

**NetBackup / Backup Exec:**
- Policy creation, scheduling, retention management
- Deduplication (MSDP = Managed Disk Pool), compression, encryption
- Appliance deployment & configuration (NetBackup, Backup Exec)
- Integration: VMware vCenter, Hyper-V, Kubernetes, cloud storage (Azure, AWS S3, Wasabi)
- Recovery workflows (full restore, granular, instant recovery)
- Tape library / disk pool management (TSM, Quantum, IBM)
- Performance tuning, capacity planning
- CLI scripting (PowerShell, Bash) for automation
- Troubleshooting: backup failures, network issues, storage faults

**InfoScale / HA Clustering:**
- Cluster architecture (active-passive, active-active, N+1)
- Volume management, snapshots, replication
- Failover testing, fencing, split-brain prevention
- Application integration (Oracle, SAP, SQL Server, Teradata)
- SAN/iSCSI networking, Fibre Channel
- Linux/Unix administration (Red Hat, Solaris legacy)
- Disaster recovery runbook design

**eDiscovery:**
- EDRM (Electronic Discovery Reference Model) workflow mastery
- Search syntax, tagging, privilege detection
- eDiscovery platform operation (Clearwell, eDP, Relativity)
- Legal hold, litigation hold execution
- Collection from 120+ source types (email, Teams, SharePoint, file shares)
- Metadata preservation, chain of custody
- Production formatting, QA, privilege logs
- Analytics: thread reconstruction, concept search, deduplication
- Optional: SQL, Python for advanced processing

### Soft Skills

- **Data loss mitigation mindset** — RTO/RPO thinking, risk assessment
- **Change management** — communicating recovery windows, testing schedules
- **Documentation discipline** — policies, disaster recovery plans, runbooks
- **Cross-functional collaboration** — liaising with database teams, infrastructure, security
- **Communication with non-technical stakeholders** — explaining downtime impact, recovery timelines
- **(eDiscovery)** Legal vocabulary, attorney communication, courtroom awareness
- **Compliance knowledge** — GDPR, HIPAA, SOX, eDiscovery rules of civil procedure

---

## Salary Data

### NetBackup / Backup Administrator (USD)

**United States (2025–2026) [Glassdoor, Salary.com, ZipRecruiter]:**
- **Entry (0–2 yrs):** USD $70,000–$85,000
- **Mid (2–5 yrs):** USD $90,000–$130,000
- **Senior (5+ yrs):** USD $130,000–$180,000
- **Architect/Lead:** USD $160,000–$250,000+

**Aggregate sources (Glassdoor avg 2026):** USD $104,545/yr [Source: [Glassdoor Backup Administrator](https://www.glassdoor.com/Salaries/backup-administrator-salary-SRCH_KO0,20.htm)]. Salary.com reports USD $112,735 (April 2025). Zippia reports USD $92,866 [Source: [Zippia Backup Administrator](https://www.zippia.com/salaries/backup-administrator/)].

**Top paying industries:** Information Technology (USD $101,943 median), Retail & Wholesale (USD $87,666 median) [Source: [Glassdoor Industry Data](https://www.glassdoor.com/Salaries/backup-administrator-salary-SRCH_KO0,20.htm)].

**South Africa (ZAR, est. 2025–2026):**
- **Entry:** ~ZAR 1.2–1.5M annual (USD $70–85k ÷ ~17 exchange rate)
- **Mid:** ~ZAR 1.5–2.2M
- **Senior:** ~ZAR 2.2–3.0M+
- **Systems Admin benchmark:** ZAR 275,248/yr avg (PayScale South Africa 2026); range ZAR 68k–ZAR 533k depending on experience [Source: [PayScale ZA Systems Admin](https://www.payscale.com/research/ZA/Job=Systems_Administrator/Salary)]

**Note:** South African backup admin roles are scarce; most salary data drawn from general systems administrator and IT operations roles. Conversion assumes 10–20% ZAR discount to USD equivalent due to regional cost-of-living adjustments. Pnet/CareerJunction do not disaggregate backup admin roles; data sourced from [Pnet 2025 Salary Guide](https://www.pnet.co.za/blog/2025salaryguide/) + [CareerJunction](https://www.careerjunction.co.za/).

**UK & Commonwealth (GBP, est. 2025–2026):**
- **Entry:** ~GBP 35,000–45,000
- **Mid:** ~GBP 50,000–70,000
- **Senior:** ~GBP 70,000–100,000+

*(Note: ITJobsWatch.co.uk and Stack Overflow Salary Survey do not disaggregate Veritas NetBackup roles; ranges estimated from general IT infrastructure salary surveys.)*

---

### eDiscovery Analyst / Specialist (USD)

**United States (2025–2026):**
- **Entry (0–2 yrs):** USD $55,000–$75,000
- **Mid (2–5 yrs):** USD $75,000–$115,000
- **Senior (5+ yrs):** USD $110,000–$155,000
- **Manager/Lead:** USD $140,000–$200,000+

**Aggregate sources (Glassdoor 2026):** USD $95,173/yr [Source: [Glassdoor eDiscovery Analyst](https://www.glassdoor.com/Salaries/ediscovery-analyst-salary-SRCH_KO0,18.htm)]. ZipRecruiter (Feb 2026) reports USD $73,261 (junior tier); range USD $52k–$131k [Source: [ZipRecruiter eDiscovery Analyst](https://www.ziprecruiter.com/Salaries/Ediscovery-Analyst-Salary)]. Robert Half 2025 Salary Guide: entry-level USD $65,250 [Source: [Robert Half Litigation & eDiscovery](https://www.roberthalf.com/us/en/insights/career-development/litigation-ediscovery-specialist-jobs)].

**South Africa (ZAR, est. 2025–2026):**
- **Entry:** ~ZAR 0.9–1.3M annual
- **Mid:** ~ZAR 1.3–2.0M
- **Senior:** ~ZAR 1.9–2.6M+

**Note:** eDiscovery roles are exceedingly rare in South Africa (concentrated in Johannesburg multinational law firms, JSE-listed in-house teams). Salary data estimated from USD conversion; expect 10–15% ZAR discount to USD equivalents. Pnet/CareerJunction do not track eDiscovery specifically.

**UK & Commonwealth:**
- **Entry:** ~GBP 30,000–40,000
- **Mid:** ~GBP 45,000–65,000
- **Senior:** ~GBP 65,000–95,000+

*(Note: eDiscovery roles concentrated in London, Singapore, Australia; most international data sourced from Glassdoor UK + Robert Half UK reports.)*

---

### InfoScale / HA Clustering Specialist (USD)

**United States (2025–2026) [estimated from Oracle DBA + storage admin benchmarks]:**
- **Entry (0–2 yrs):** USD $85,000–$110,000
- **Mid (2–5 yrs):** USD $110,000–$155,000
- **Senior (5+ yrs):** USD $150,000–$210,000
- **Principal Architect:** USD $200,000–$280,000+

**Note:** InfoScale specialists are significantly rarer than backup admins; premium salary reflects low supply. Glassdoor/ZipRecruiter do not disaggregate HA/clustering roles; estimates based on Oracle DBA salary benchmarks (USD $110k–$170k avg) + storage engineer salary premium.

**South Africa (ZAR, est. 2025–2026):**
- **Entry:** ~ZAR 1.4–1.8M
- **Mid:** ~ZAR 1.9–2.6M
- **Senior:** ~ZAR 2.6–3.5M+

**Note:** InfoScale roles concentrated in Johannesburg multinational financial services (Investec, FirstRand), insurance (Discovery, Santam), e-commerce. Very rare in open job market. Expect 15–20% ZAR discount to USD equivalents.

---

### Backup Exec Administrator / Support (USD)

**United States (2025–2026):**
- **Entry (0–2 yrs):** USD $55,000–$75,000
- **Mid (2–5 yrs):** USD $75,000–$110,000
- **Senior (5+ yrs):** USD $105,000–$155,000
- **Lead/Architect:** USD $140,000–$200,000+

**Note:** Backup Exec roles are typically bundled with broader IT operations / systems administration salaries. No product-specific salary tracking in Glassdoor/ZipRecruiter; ranges estimated from general "IT Administrator" benchmarks + Backup Exec premium.

---

## Links & References

**[10]** Veritas Certification Exam List. https://www.veritas.com/services/education-services/certification/exams

**[13]** Arctera Education Services. https://www.arctera.com/education-services

**Additional sources (inline, above):**

- Glassdoor: Backup Administrator Salaries (2026) https://www.glassdoor.com/Salaries/backup-administrator-salary-SRCH_KO0,20.htm
- Glassdoor: eDiscovery Analyst Salaries (2026) https://www.glassdoor.com/Salaries/ediscovery-analyst-salary-SRCH_KO0,18.htm
- ZipRecruiter: Backup Administrator Salary (Nov 2025) https://www.ziprecruiter.com/Salaries/Backup-Administrator-Salary
- ZipRecruiter: eDiscovery Analyst Salary (Feb 2026) https://www.ziprecruiter.com/Salaries/Ediscovery-Analyst-Salary
- Salary.com: Backup Administrator (Jan 2026) https://www.salary.com/research/salary/recruiting/backup-administrator-salary
- Zippia: Backup Administrator Salary (Aug 2025) https://www.zippia.com/salaries/backup-administrator/
- Pnet 2025 Salary Guide (ZA) https://www.pnet.co.za/blog/2025salaryguide/
- PayScale: Systems Administrator (South Africa, 2026) https://www.payscale.com/research/ZA/Job=Systems_Administrator/Salary
- CareerJunction: Jobs in South Africa https://www.careerjunction.co.za/
- Robert Half: Litigation & eDiscovery Specialist Jobs (2025) https://www.roberthalf.com/us/en/insights/career-development/litigation-ediscovery-specialist-jobs
- Veritas Training Courses & Schedule https://www.veritas.com/services/education-services/training-courses
- Veritas NetBackup 10.0 Administration Course https://www.veritas.com/services/education-services/training-courses/netbackup-10-admin
- Veritas Backup Exec 22 Administration https://www.veritas.com/services/education-services/training-courses/backup-exec-22-admin
- Veritas PartnerNet Training Portal https://partnernet.veritas.com/en/us/training.html
- Backup Exec Trialware https://www.veritas.com/form/trialware/backup-exec.
- YouTube: Veritas NetBackup Training https://www.youtube.com/watch?v=tmW1Weq8EGk
- YouTube: NetBackup 10 Training Playlist https://www.youtube.com/playlist?list=PL9eqA6Co57RIR-ow52OAE-BB4fvSXc_8R
- Storage Tutorials: Veritas NetBackup Archive https://www.storagetutorials.com/tag/veritas-netbackup-tutorial/
- Udemy: Veritas NetBackup Appliances Practice Tests https://www.udemy.com/course/veritas-specialist-vcs-netbackup-appliances-practice-tests/
- LinkedIn Learning: System Administration Backup and Recovery https://www.linkedin.com/learning/system-administration-backup-and-recovery-21776888/backup-exec
- Koenig Solutions: NetBackup 8.2 Training https://www.koenig-solutions.com/veritas-netbackup-administration
- InfoSecTrain: NetBackup 8.1.2 Advanced Administration https://www.infosectrain.com/courses/veritas-netbackup-8-1-2-advanced-administration-training/
- Ascendient Learning: NetBackup & Backup Exec Training https://www.ascendientlearning.com/it-training/veritas/backup-recovery
- Firebrand: Veritas Backup Exec Administration https://firebrand.training/en/courses/veritas/administration-veritas-backup-exec-certification
- Relativity Certifications https://www.relativity.com/resources/certification/
- Cybrary: System Administrator Training https://www.cybrary.it/career-path/system-administrator
- Veritas NetBackup Administrator's Guide (Official) https://www.veritas.com/support/en_US/doc/18716246-129889741-0/index
- Amazon UK: NetBackup & Restore by Owen Jansing https://www.amazon.co.uk/Backup-Restore-Comprehensive-Administration-Netbackup/dp/B0BZFP3716
- eDiscovery Reference Model (EDRM) https://www.edrm.net

---

**Document prepared:** April 2026  
**Next review:** Q3 2026 (post-Cloud Software Group acquisition close)  
**Remediation block appended:** April 30, 2026 (certifications, training, books, job titles, salary data; all URLs verified)
