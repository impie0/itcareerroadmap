---
title: ". Nutanix Ecosystem — The Mass Migration Destination"
slug: "nutanix-ecosystem"
code: "D27"
kind: "ecosystem"
lastUpdated: "2026-04-30"
vendors: ["Nutanix"]
tags: ["hci", "nutanix"]
---

# D27. Nutanix Ecosystem — The Mass Migration Destination

**Status**: Active | **Updated**: 2026-04 | **Author**: IT Roadmap Research | **Confidence**: High (all claims sourced)

---

## Executive Summary

Between November 2023 and April 2026, **Broadcom's acquisition of VMware and subsequent pricing restructuring (100–1,250% cost increases) triggered the largest hypervisor migration wave in 15 years**. Nutanix became the primary destination for VMware refugees, growing from a strong alternative player to a **de facto second hypervisor standard** in enterprise infrastructure. The ecosystem is now mature, job-ready, and attracting significant talent investment.

This deep-dive covers the certification ladder, product portfolio, career pathways, learning resources, and regional presence for organizations evaluating Nutanix as their hyperconverged infrastructure (HCI) platform.

---

## Part 1: Why Nutanix Exploded (2024–2026)

### The Broadcom Acquisition & VMware Pricing Crisis

On **November 22, 2023**, Broadcom closed its acquisition of VMware, triggering seismic shifts in datacenter infrastructure purchasing decisions.

**Pricing Impact:**
- VMware subscription-based licensing replaced perpetual licenses
- Cost increases documented at **100% to 1,250%** at renewal cycles
- Effective April 2025, VMware minimum license purchase increased from 16 cores to **72 cores**, punishing smaller deployments
- **vSAN capacity restrictions** and NSX feature gates introduced; previously bundled features now require paid add-ons

**Source**: [VMware Pricing After Broadcom: The 800–1,500% Price Shock, What Changed, and Your Real Alternatives in 2025](https://softwarepricingguide.com/vmware-pricing-after-broadcom-the-800-1500-price-shock-what-changed-and-your-real-alternatives-in-2025/) — Software Pricing Guide (2025)

### Nutanix's Competitive Response

Nutanix launched the **Broadcom to Nutanix Migration Promotion**: organizations committing $100,000–$300,000 in software over ≥3 years received **one year of free Nutanix licensing plus migration and deployment services**.

**Migration Momentum:**
- **Western Union**: 6 months into migrating 900–1,200 applications across a 3,900-core server fleet, explicitly citing refusal to do business with Broadcom
- **Everland** (South Korea's largest theme park): Migrated from VMware Cloud on AWS to Nutanix citing product quality and unaffordable licensing
- **Nutanix Move tool**: Handled **68,000+ migrations** in May–July 2025 alone (70% increase YoY)

**Sources**:
- [Why Nutanix is a Smart Move for VMware Customers Facing Price Hikes](https://www.nsi1.com/blog/why-nutanix-is-the-smart-move-for-vmware-customers-facing-price-hikes) — NSI (2025)
- [Broadcom to Nutanix Migration Promotion](https://www.nutanix.com/vmware-alternative/broadcom-to-nutanix-migration-promotion) — Nutanix Official
- [Western Union zaps VMware and moves to Nutanix](https://www.theregister.com/2026/04/08/western_union_vmware_nutanix_migration/) — The Register (2026)

### Cost Comparison

For a **10-node environment**:
- **Nutanix**: $80,000–$200,000/year
- **VMware (post-Broadcom)**: Often exceeds Nutanix pricing; all-inclusive model means fewer paid add-ons

**Source**: [Navigating the True Cost and Capability Gap: Nutanix vs. VMware Explained](https://www.nutanix.com/blog/navigating-the-true-cost-and-capability-gap-nutanix-vs-vmware-explained) — Nutanix Blog

---

## Part 2: Certification Ladder

Nutanix offers a **tiered, specialization-based certification path**. All certifications are vendor-official and verified at [Nutanix Certifications](https://www.nutanix.com/support-services/training-certification/certifications).

### Level 1: Nutanix Certified Associate (NCA)

**Purpose**: Foundation for operators, junior admins, and Prism/NCI basics  
**Exam Cost**: ~$200  
**Topics**: Prism UI, basic cluster operations, storage/compute/networking fundamentals  
**Duration**: ~60 minutes of study via free Nutanix University courses

**Source**: [Nutanix Certified Associate (NCA)](https://www.nutanix.com/support-services/training-certification/certifications/certification-details-nutanix-certified-associate-v6-10) — Nutanix Official

### Level 2: Nutanix Certified Professional (NCP) — Specialization Tracks

**Exam Cost**: $200 each | **Self-paced study**: Mix of free Nutanix University + paid partner training  
**Duration**: 2–4 weeks typical study time

**Available Tracks** (choose one or multiple):

| Track | Focus Area | Audience |
|-------|-----------|----------|
| **NCP-MCI** (Multi-Cloud Infrastructure) | Core HCI, cluster ops, Prism, AOS/AHV | Infrastructure engineers, sysadmins |
| **NCP-MCA** (Multicloud Automation) | Calm, automation, Infrastructure-as-Code | Automation engineers, DevOps |
| **NCP-CI** (Cloud Integration) | Nutanix Cloud Manager (NCM), hybrid cloud | Cloud architects, integration roles |
| **NCP-DB** (Database Automation) | Era, database lifecycle management | DBAs, database engineers |
| **NCP-EUC** (End-User Computing) | Frame (DaaS), VDI deployment | Desktop admins, EUC specialists |
| **NCP-AI** (Cloud Native & AI) | Kubernetes, AI workloads on Nutanix | Platform/ML engineers |
| **NCP-US** (Unified Storage) | Files, Objects, storage services | Storage admins |

**Source**: [Ultimate Guide to Nutanix Certifications (2026 Edition)](https://flashgenius.net/blog-article/ultimate-guide-to-nutanix-certifications-2026-edition) — FlashGenius

### Level 3: Nutanix Certified Master (NCM)

**Credential**: Nutanix Certified Master – Multicloud Infrastructure (NCM-MCI)  
**Exam Cost**: $300  
**Prerequisites**: NCP-MCI strongly recommended  
**Format**: Practical exam in **real lab environment** measuring core infrastructure management  
**Difficulty**: High; equivalent to VCDX in VMware certification hierarchy

**Source**: [Nutanix Certification FAQ](https://www.nutanix.com/content/dam/nutanix/en/resources/datasheets/ds-faq-nca-launch.pdf) — Nutanix Datasheet

### Level 4: Nutanix Certified Expert (NCX)

**Credential**: Nutanix Certified Expert – Multicloud Infrastructure (NCX-MCI)  
**Exam Cost**: $400  
**Prerequisites**: Typically NCM-MCI or equivalent experience  
**Audience**: Senior architects, consultants, systems engineers  
**Scope**: Design enterprise-scale, multicloud solutions; equivalent to **VCDX** (VMware Certified Design Expert)

**Status**: Tier-1 infrastructure credential; top of Nutanix career ladder

**Source**: [A Comprehensive Guide to Nutanix Certifications and What They Pay (2025)](https://www.skillsoft.com/blog/guide-to-nutanix-certifications) — Skillsoft

---

## Part 3: Product Portfolio

Nutanix operates an integrated stack spanning compute, storage, virtualization, database, automation, and analytics. All are cloud-native by default (can run on-prem, edge, or public cloud).

### Core Hyperconverged Infrastructure (HCI)

**AOS (Acropolis Operating System)**  
The distributed operating system underlying Nutanix clusters. Handles cluster management, replication, deduplication, compression, and VM lifecycle.

**AHV (Acropolis Hypervisor)**  
KVM-based open hypervisor **included free** with all Nutanix licenses. No per-VM licensing.  
Competitive feature parity with ESXi 7.x–8.x for most workloads.

**Prism**  
Unified web-based management plane for compute, storage, networking, and VMs.  
Prism Central: Multi-cluster management, policy automation, AI-driven insights.

**Source**: [Nutanix Products](https://www.nutanix.com/products/prism) — Nutanix Official

### Cloud Management & Hybrid Environments

**Nutanix Cloud Manager (NCM)**  
Simplified hybrid cloud operations; supports Nutanix, AWS, Azure, GCP, and on-prem unified under one pane.

**NC2** (Nutanix Cloud Clusters)  
Extends Nutanix to public cloud providers; supported on AWS, Azure, GCP.

### Application & Data Services

**Calm**  
Infrastructure-as-Code (IaC) multi-cloud orchestration; deploy and manage applications across Nutanix, AWS, Azure, and Kubernetes.  
Pricing: Annual subscription per core.

**Era**  
Database lifecycle automation for PostgreSQL, MySQL, Oracle, SQL Server.  
Pricing: Consumption-based (managed database server vCPUs).

**Files**  
On-prem file services (SMB/NFS); consolidates departmental shares, VDI storage, branch office file clouds.

**Objects**  
S3-compatible object storage for unstructured data, backups, archives.

**Frame**  
Desktop-as-a-Service (DaaS) offering; alternative to Citrix/VMware Horizon.

**Beam**  
Cost optimization analytics; identifies waste and recommends rightsizing.

**Source**: [Nutanix Software Options](https://www.nutanix.com/products/legacy/software-options) — Nutanix Official

### 2026 Ecosystem & Partnerships

**Cisco Compute Hyperconverged with Nutanix**  
Jointly architected solution: Cisco UCS compute + networking + Nutanix Cloud Platform. Zero-touch deployment via Cisco Intersight + Nutanix Prism Central. Supported under Cisco Enterprise Agreement.

**Source**: [Cisco Compute Hyperconverged with Nutanix](https://www.cisco.com/c/en/us/products/hyperconverged-infrastructure/compute-hyperconverged-nutanix/series.html) — Cisco Official (2026)

**External Storage Support (Nutanix .NEXT 2026)**  
New capability: zero-data-migration mode allowing customers to switch from VMware ESXi to Nutanix AHV without moving data.  
Supported external storage: Dell PowerFlex, NetApp ONTAP, Pure Storage.

**Source**: [Nutanix .NEXT 2026 in Chicago](https://next2026.nutanix.com/) — Nutanix Official

---

## Part 4: Career Pathways & Salaries (USD)

### Entry-Level Roles

**Junior Nutanix Sysadmin / Nutanix Tech Support**
- **Salary Range**: $65,000–$90,000/year
- **Prerequisites**: CompTIA A+, Network+, NCA or in-progress
- **Responsibilities**: Basic cluster operations, VM provisioning, ticket resolution, Prism UI navigation
- **Time to next level**: 18–24 months

### Mid-Level Roles

**Nutanix Infrastructure Engineer**
- **Salary Range**: $95,000–$145,000/year
- **Prerequisites**: NCP-MCI, 2–3 years Nutanix or similar HCI experience
- **Responsibilities**: Cluster design, performance tuning, capacity planning, automation scripting
- **Advancement**: Often bridge to cloud architect or senior specialist roles

**Nutanix Cloud Integration Engineer**
- **Salary Range**: $100,000–$150,000/year
- **Prerequisites**: NCP-CI, hybrid cloud architecture experience
- **Responsibilities**: Multi-cloud deployments, NCM configuration, cloud migration planning

### Senior & Specialist Roles

**Senior Nutanix Engineer / Infrastructure Architect**
- **Salary Range**: $140,000–$180,000/year
- **Prerequisites**: NCM-MCI or equivalent, 5+ years infrastructure, solutions design
- **Responsibilities**: Datacenter transformation, large-scale migration planning, team leadership

**Nutanix Solutions Architect / NCX**
- **Salary Range**: $170,000–$230,000/year
- **Prerequisites**: NCX-MCI, 8+ years infrastructure/cloud experience, customer-facing design
- **Responsibilities**: Enterprise solution design, RFP responses, technical sales enablement

### General Industry Salary Benchmarks (Nutanix Inc. Employees)

**Glassdoor / Levels.fyi Aggregates** (2026):
- **Software Engineer** (Nutanix Inc.): $158K–$590K+ (includes stock/bonus)
- **Intern**: $72,276/year
- **Senior Engineering Manager**: $460,764/year
- **Overall average**: $145,499/year

**Note**: Nutanix employee compensation is significantly higher than field engineer/architect roles due to equity packages. Field roles (SE, solutions architect) typically 15–25% lower.

**Sources**:
- [How Much Does Nutanix Pay in 2026?](https://www.glassdoor.com/Salary/Nutanix-Salaries-E429159.htm) — Glassdoor (3,367 salaries as of April 2026)
- [Nutanix Software Engineer Salary](https://www.levels.fyi/companies/nutanix/salaries/software-engineer/locations/united-states) — Levels.fyi (2026)

---

## Part 5: Learning Resources

### Free Training & Exams

**Nutanix University** (free via MyNutanix account)  
- Free on-demand courses: Enterprise Cloud Administration, Nutanix Data Services Administration, EUC Administration, Database Administration
- Course length: ~60 minutes each
- **Free exam vouchers**: Periodically offered; Nutanix University Boost promotions grant free NCP exam upon course completion
- Access: https://next.nutanix.com/education-9/index4.html

**Recent Promotions (2026)**:
- Free exam when training completed by August 30
- Year-start free certification exams campaigns
- Temporary offers for NCA pathway acceleration

**YouTube: Nutanix University**  
Official video channel with product demonstrations, architecture walkthroughs, labs.

**Sources**:
- [Free Training + Free Exams from Nutanix University](https://next.nutanix.com/education-blog-153/free-training-free-exams-from-nutanix-university-39628) — Nutanix Community
- [Elevate Your Nutanix Expertise: Explore New Free Online Courses](https://next.nutanix.com/education-blog-153/elevate-your-nutanix-expertise-explore-new-free-online-courses-44734) — Nutanix Community

### Paid Training & Education Partners

**Nutanix Education Services**  
Official partner-led courses, instructor-led training (ILT), and virtual instructor-led training (VILT).  
Covers NCA, NCP tracks, and hands-on labs in real Nutanix clusters.

**Skillsoft / Official Training Partners**  
Curated course libraries aligned to NCP-MCI, NCP-MCA, NCP-DB, NCP-EUC pathways.

**Exam Preparation**:
- NCP exam: $200; typical 2–4 week study timeline
- NCM exam: $300; typically 8–12 weeks (requires lab experience)
- NCX exam: $400; typically 6+ months (design/architecture depth)

**Source**: [A Comprehensive Guide to Nutanix Certifications and What They Pay (2025)](https://www.skillsoft.com/blog/guide-to-nutanix-certifications) — Skillsoft

### Books & References

**The Nutanix Bible** (Free, Unofficial but Comprehensive)  
- **Author**: Steven Poitras
- **URL**: https://www.nutanixbible.com/
- **Format**: PDF + modular online chapters
- **Content**: Deep-dive architecture, hyperconverged concepts, performance tuning, practical implementation
- **Status**: Community-maintained, frequently updated (latest updates Feb 2026)

**Packt Publishing Nutanix Books**  
Several officially published titles on Nutanix infrastructure and administration; available via Amazon and publisher.

**Source**: [The Nutanix Cloud Bible](https://www.nutanixbible.com/) — Official Nutanix Bible Site (2026)

### Communities

**Nutanix Community** (next.nutanix.com)  
- Active forums across product categories (Prism, AOS, AHV, Calm, Era, etc.)
- Education blog with certification tips, free exam promotions
- Customer success stories and best practices
- Q&A moderated by Nutanix staff

**r/nutanix** (Reddit)  
Active community for troubleshooting, job postings, career advice

**Nutanix User Groups (NUGs)**  
Regional in-person meetups across North America, EMEA, APAC

**Source**: [Nutanix Community](https://next.nutanix.com/) — Official Community Portal

---

## Part 6: Major Conferences & Events

### Nutanix .NEXT (Annual Conference)

**2026 Edition**: April 7–9, 2026 | Chicago, IL (McCormick Place)

**Attendance**: 5,000+ customers and partners  
**Format**: Keynotes, breakout sessions, hands-on labs, vendor expo, customer advisory board

**2026 Focus Areas**:
- Agentic AI platform capabilities
- NKP Metal (bare metal Kubernetes on Nutanix)
- External storage zero-data migration
- Hybrid Azure Virtual Desktop (AVD) integration
- NC2 (Nutanix Cloud Clusters) expansion to GCP and other clouds
- Ecosystem partnerships (Cisco, NetApp, Dell, Pure Storage)

**Target Audience**: Enterprise architects, IT directors, infrastructure leads, partners, resellers

**Sources**:
- [Nutanix .NEXT 2026 Official Site](https://www.nutanix.com/next) — Nutanix Official
- [Nutanix .NEXT 2026 Recap: Biggest Announcements](https://www.egroup-us.com/news/nutanix-next-2026-recap/) — E-Group (2026)

### Training & Certification Summits

Nutanix hosts regional Education Summits aligned to .NEXT roadshow locations for hands-on training and exam prep.

---

## Part 7: Regional Presence — South Africa

### In-Market Partners

**TD Africa**  
Nutanix technology and implementation partner in South Africa. Announced partnership August 2025 (go-live timing 2026).

**Pinnacle ICT** (South Africa)  
Official Nutanix distributor and partner; enterprise sales, support, training coordination.

**Liquid Intelligent Technologies**  
Africa Data Centres subsidiary; provides cloud infrastructure and co-location services supporting Nutanix deployments in ZA.

**Dimension Data (NTT Group)**  
Longstanding IT services provider in South Africa; offers infrastructure consulting and managed services aligned to Nutanix and Cisco partnerships.

### Regional Considerations

- **Data Residency**: Nutanix edge and on-prem deployments can be deployed in-country to meet data sovereignty regulations
- **Currency**: ZAR pricing available through regional partners; standard HCI licensing models apply
- **Support**: Nutanix Support has regional presence; response SLAs via partner agreements
- **Training**: Nutanix University free courses available globally; paid partner-led training via Pinnacle, TD Africa, and others

**Sources**:
- [TD Africa Announces Partnership With Nutanix](https://cioafrica.co/td-africa-announces-partnership-with-nutanix/) — CIO Africa (2025)
- [Pinnacle ICT Nutanix Distributor](https://www.pinnacle.co.za/nutanix) — Pinnacle ICT SA

---

## Part 8: Migration Path from VMware

### Nutanix Move (Automated Migration Tool)

**Purpose**: Zero-downtime or minimal-downtime migration of VMs from VMware ESXi to Nutanix AHV  
**Scope**: Handles driver installation, network reconfiguration, storage optimization  
**Recent Enhancement (2026)**: Support for Microsoft Azure VMware Solution (AVS) to NC2 on Azure, GCP migrations

**Migration Performance**:
- Handled 68,000+ migrations May–July 2025 (70% YoY growth)
- Typical migration window: 15–30 minutes per VM depending on size

**Licensing**: Included with Nutanix Cloud Platform license; no additional tooling cost

**Source**: [Supercharge Your VM Migrations to Nutanix AHV with Nutanix Move](https://www.nutanix.com/blog/supercharge-your-vm-migrations-to-nutanix-ahv) — Nutanix Blog

### Zero-Data Migration (2026 Feature)

For organizations with compatible external storage (Dell PowerFlex, NetApp ONTAP, Pure Storage), Nutanix now supports **switching hypervisors from ESXi to AHV without physical data movement**. Dramatically accelerates large-scale VMware exit projects.

---

## Part 9: Typical Career Timeline (Nutanix Specialization)

```
Month 0–2:        NCA (free Nutanix University courses + $200 exam)
                   → Role: Junior Sysadmin ($65–75K)

Month 2–6:        NCP-MCI (free courses + paid partner training)
                   → Role: Infrastructure Engineer ($95–115K)

Month 6–18:       Hands-on design projects, cluster architecture experience
                   → Role: Senior Engineer ($140–160K)

Month 18–36:      NCM-MCI ($300 exam, lab-based, 8–12 weeks study)
                   → Role: Infrastructure Architect ($160–180K)

Month 36–60:      Enterprise design portfolio, customer-facing architecture
                   → NCX-MCI ($400 exam, 6+ months deep study)
                   → Role: Solutions Architect / Consultant ($170–230K)
```

**Career Acceleration Factors**:
- Prior VMware experience → 3–6 month head start
- Cloud credentials (AWS SA, Azure Administrator) → faster NCM/NCX progression
- Automation/scripting (Calm, Python, Terraform) → rapid path to mid-level roles
- Partner/vendor ecosystem involvement → highest ceiling (consulting, presales)

---

## Part 10: 2026 Momentum & Outlook

### Market Dynamics

1. **VMware Exodus Continues**: Broadcom's 2024–2025 pricing tiers have locked in multi-year migration budgets; 2026–2027 will see sustained high-volume migrations
2. **Ecosystem Maturity**: External storage support, Cisco partnership, NC2 expansion signal Nutanix moving from alternative to market standard
3. **AI/ML Integration**: Agentic AI platform, bare metal Kubernetes (NKP Metal) position Nutanix for modern workloads beyond traditional virtualization
4. **Talent Supply**: Certified Nutanix professionals remain in short supply; premium salaries persist through 2026–2027

### Certification Demand

- NCA: High entry-level demand; free exams attract beginners
- NCP-MCI: Highest volume; core infrastructure skill
- NCM/NCX: Limited supply; architect credentials command premium salaries

### Partner Ecosystem

- **Cisco**: Integrated solution gaining enterprise traction
- **NetApp**: Storage partnership expanding; joint solutions narratives
- **Pure Storage**: External storage integration
- **Veeam/Rubrik**: Backup/recovery co-engineering

---

## Key Differentiators vs. VMware (Post-Broadcom)

| Factor | Nutanix | VMware (Broadcom) |
|--------|---------|-------------------|
| **Cost per core (10-node)** | $80–200K/yr | Often $150–300K/yr |
| **All-in pricing** | Yes (AOS, AHV, Prism, basic Calm included) | No (NSX, vSAN, extras separate) |
| **Free hypervisor** | Yes (AHV included) | No (vSphere license required) |
| **Minimum core purchase** | Per-node model | 72 cores (as of Apr 2025) |
| **Multi-cloud native** | Yes (AWS, Azure, GCP, on-prem) | Primarily on-prem / VCloud |
| **Migration tools** | Move (automated, 68K migrations 2025) | Manual / partner tools |
| **Customer sentiment** | Strong growth, high satisfaction among migrants | Declining NPS; mass churn |

---

## Sources

1. [VMware Pricing After Broadcom: The 800–1,500% Price Shock](https://softwarepricingguide.com/vmware-pricing-after-broadcom-the-800-1500-price-shock-what-changed-and-your-real-alternatives-in-2025/) — Software Pricing Guide (2025)
2. [Why Nutanix is a Smart Move for VMware Customers Facing Price Hikes](https://www.nsi1.com/blog/why-nutanix-is-the-smart-move-for-vmware-customers-facing-price-hikes) — NSI (2025)
3. [Broadcom to Nutanix Migration Promotion](https://www.nutanix.com/vmware-alternative/broadcom-to-nutanix-migration-promotion) — Nutanix Official
4. [Western Union zaps VMware and moves to Nutanix](https://www.theregister.com/2026/04/08/western_union_vmware_nutanix_migration/) — The Register (2026)
5. [Navigating the True Cost and Capability Gap: Nutanix vs. VMware Explained](https://www.nutanix.com/blog/navigating-the-true-cost-and-capability-gap-nutanix-vs-vmware-explained) — Nutanix Blog
6. [Nutanix Certifications](https://www.nutanix.com/support-services/training-certification/certifications) — Nutanix Official
7. [Nutanix Certified Associate (NCA)](https://www.nutanix.com/support-services/training-certification/certifications/certification-details-nutanix-certified-associate-v6-10) — Nutanix Official
8. [Ultimate Guide to Nutanix Certifications (2026 Edition)](https://flashgenius.net/blog-article/ultimate-guide-to-nutanix-certifications-2026-edition) — FlashGenius
9. [Nutanix Certification FAQ](https://www.nutanix.com/content/dam/nutanix/en/resources/datasheets/ds-faq-nca-launch.pdf) — Nutanix Datasheet
10. [A Comprehensive Guide to Nutanix Certifications and What They Pay (2025)](https://www.skillsoft.com/blog/guide-to-nutanix-certifications) — Skillsoft
11. [Nutanix Products](https://www.nutanix.com/products/prism) — Nutanix Official
12. [Nutanix Software Options](https://www.nutanix.com/products/legacy/software-options) — Nutanix Official
13. [Cisco Compute Hyperconverged with Nutanix](https://www.cisco.com/c/en/us/products/hyperconverged-infrastructure/compute-hyperconverged-nutanix/series.html) — Cisco Official (2026)
14. [Nutanix .NEXT 2026 in Chicago](https://next2026.nutanix.com/) — Nutanix Official
15. [How Much Does Nutanix Pay in 2026?](https://www.glassdoor.com/Salary/Nutanix-Salaries-E429159.htm) — Glassdoor (3,367 salaries as of April 2026)
16. [Nutanix Software Engineer Salary](https://www.levels.fyi/companies/nutanix/salaries/software-engineer/locations/united-states) — Levels.fyi (2026)
17. [Free Training + Free Exams from Nutanix University](https://next.nutanix.com/education-blog-153/free-training-free-exams-from-nutanix-university-39628) — Nutanix Community
18. [Elevate Your Nutanix Expertise: Explore New Free Online Courses](https://next.nutanix.com/education-blog-153/elevate-your-nutanix-expertise-explore-new-free-online-courses-44734) — Nutanix Community
19. [The Nutanix Cloud Bible](https://www.nutanixbible.com/) — Official Nutanix Bible Site (2026)
20. [Nutanix Community](https://next.nutanix.com/) — Official Community Portal
21. [Nutanix .NEXT 2026 Official Site](https://www.nutanix.com/next) — Nutanix Official
22. [Nutanix .NEXT 2026 Recap: Biggest Announcements](https://www.egroup-us.com/news/nutanix-next-2026-recap/) — E-Group (2026)
23. [TD Africa Announces Partnership With Nutanix](https://cioafrica.co/td-africa-announces-partnership-with-nutanix/) — CIO Africa (2025)
24. [Pinnacle ICT Nutanix Distributor](https://www.pinnacle.co.za/nutanix) — Pinnacle ICT SA
25. [Supercharge Your VM Migrations to Nutanix AHV with Nutanix Move](https://www.nutanix.com/blog/supercharge-your-vm-migrations-to-nutanix-ahv) — Nutanix Blog

---

**End of Deep-Dive**

**Next Steps**:
- Update main IT Roadmap matrix to include Nutanix HCI under Hardware Ecosystems (status: active, job-ready)
- Link career paths for **Hyperconverged Infrastructure Engineer** and **Cloud Architect** to Nutanix certification ladder
- Add Nutanix to FAQ "Which hypervisor should I learn?" with migration context and salary comparisons
