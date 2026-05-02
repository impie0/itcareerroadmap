---
cert_name: "Cisco Certified Internetwork Expert Data Center"
cert_code: "CCIE DC"
vendor: "Cisco"
status: "Active"
level: "Expert"
domain: "Data Center / Networking"
ecosystem: "Cisco Ecosystem"
last_verified: "2026-05-01"
aliases: ["CCIE Data Center", "CCIE DC", "Cisco CCIE Data Center v3.1"]
---

# Cisco Certified Internetwork Expert Data Center

**`CCIE DC`** · ● **Active** · **Expert** · _Cisco_

> **The apex of Cisco data center infrastructure certification.** Two-part exam: (1) 350-601 DCCOR qualifying exam + (2) 8-hour hands-on lab exam (v3.1). Demonstrates mastery in designing, deploying, operating, and optimizing hyperscale and enterprise data center networks, compute, storage, and automation.

---

## Exam facts

| Field | Value |
|---|---|
| Cost | Qualifying exam (350-601 DCCOR): $400 USD. Lab exam: $1,600–$1,900 USD per attempt (varies by facility and equipment) |
| Duration | DCCOR: 120 minutes. Lab: 8 hours total (3-hour Design module + 5-hour Deploy/Operate/Optimize) |
| Questions | DCCOR: 60–70 questions (mixed: single choice, multiple choice, drag-and-drop, simulations). Exact count varies by version |
| Passing | DCCOR: 825/1000 scaled score. Lab: Pass/Fail based on cumulative score across design and operations domains |
| Format | Part 1: Multiple choice + simulations (Pearson VUE). Part 2: Hands-on scenario lab in Cisco data center lab environment |
| Delivery | DCCOR: Pearson VUE at authorized test centers. Lab: Cisco-proctored at Cisco facilities or mobile labs (BYOD or Cisco-provided equipment) |
| Languages | English (primary); Japanese also available for DCCOR |
| Valid | CCIE certification: Lifetime (no renewal required unless credential is retired and replaced) |
| Renewal | N/A (Lifetime validity, but optional Continuing Education available) |
| Prerequisites | None formal, but CCNP Data Center (passing 350-601 DCCOR) strongly recommended as foundation |
| Released | Current version (v3.1): 2024–2025; v3.0 retired in 2024 |
| Retiring | No retirement date announced as of May 2026; v3.1 is current production version |

**Vendor source —** [Cisco CCIE Data Center ↗](https://www.cisco.com/site/us/en/learn/training-certifications/certifications/datacenter/ccie-data-center/index.html)
**Exams and training —** [CCIE Data Center Exams & Training ↗](https://www.cisco.com/site/us/en/learn/training-certifications/certifications/datacenter/ccie-data-center/exams-and-training.html)
**Official exam blueprint (DCCOR) —** [350-601 DCCOR v1.2 Exam Topics ↗](https://learningnetwork.cisco.com/s/dccor-exam-topics)
**Lab exam resources —** [CCIE Data Center Learning Path ↗](https://learningnetwork.cisco.com/s/ccie-data-center)

---

## About

The **CCIE Data Center** is Cisco's expert-level certification for data center infrastructure engineers and architects. Current version v3.1 (2024–2025) validates expertise in designing and operating integrated data center solutions spanning fabric networking (ACI, VXLAN EVPN), compute (Cisco UCS), storage area networking (FC, FCoE, iSCSI), network services, automation, and cloud connectivity. The certification requires passing a core exam (350-601 DCCOR: Implementing and Operating Cisco Data Center Core Technologies) plus an 8-hour hands-on lab exam. CCIE DC is less common than CCIE Enterprise Infrastructure but commands comparable or higher salaries due to specialized demand in hyperscale and financial/telecom data centers.

---

## Domain context — Data Center / Networking

Data center infrastructure design, deployment, and operations at expert level. Encompasses fabric architectures (Nexus switches, ACI), compute orchestration (UCS, hypervisors), storage networking (FC/FCoE/iSCSI), multi-tenancy, service chaining, automation via Ansible/Terraform, and hybrid cloud integration (AWS, Azure, on-premise seamlessly).

[Read full deep dive — Cisco Ecosystem →](../../Ecosystems/Cisco_Ecosystem.md)

---

## Topics covered

**350-601 DCCOR (v1.2) Blueprint Topics:**

- **Infrastructure (25% weight)**
  - Data center architecture (spine-leaf, 3-tier, border leaf)
  - Nexus OS and NX-OS features
  - Switching (vPC, LACP, spanning tree)
  - Routing (OSPF, MP-BGP, redistribution)
  - VXLAN and overlay networking
  - Routing in the fabric (ACI routing, multitenant)

- **Automation and Orchestration (15% weight)**
  - Infrastructure as Code (Terraform, Ansible)
  - APIs and data models (YANG, NETCONF, REST)
  - Cisco Intersight (unified management platform)
  - Event-driven automation
  - Integration with external systems

- **Network Services (20% weight)**
  - QoS design and implementation
  - Load balancing (ACE, F5, native NX-OS)
  - Multicast (PIM, IGMP, Multicast VPN)
  - First Hop Redundancy Protocol (FHRP)
  - Service insertion and chaining

- **Storage Area Networking (15% weight)**
  - Fibre Channel (FC) design and operation
  - FCoE (Fibre Channel over Ethernet)
  - iSCSI
  - Storage fabric design
  - SAN switching on Nexus MDS

- **Security (12% weight)**
  - Access control lists and security policies
  - Virtual security (micro-segmentation, network policies)
  - Encryption and key management
  - Role-based access control in ACI
  - Threat mitigation

- **Compute (13% weight)**
  - Cisco Unified Computing System (UCS) architecture
  - UCS Fabric Interconnects
  - Server profiles and service profiles
  - Boot orchestration
  - Integration with Hyper-V, vSphere, KVM

**CCIE DC v3.1 Lab Exam Domains:**

- **Design Module (3 hours)**: Architecture design, topology specification, service requirements mapping, technology selection, redundancy/failover strategies
- **Deploy/Operate/Optimize Module (5 hours)**:
  - Data Center Fabric: ACI/VXLAN EVPN, Nexus configuration, multitenancy
  - Compute: UCS provisioning, hypervisor integration, boot processes
  - Storage: FC/FCoE/iSCSI fabric design, NPIV, zoning
  - Network Services: QoS, multicast, load balancing, FHRP
  - Security & Compliance: micro-segmentation, access policies, audit
  - Automation: configuration management, orchestration, monitoring
  - Operations & Troubleshooting: diagnostics, monitoring, incident response

*Source:* [Official DCCOR blueprint ↗](https://learningnetwork.cisco.com/s/dccor-exam-topics)

---

## Common skills at Data Center · Expert

*Shared competencies for data center operations at the expert level — beyond CCIE DC specifics.*

- Advanced data center fabric architecture (spine-leaf, border leaf, design trade-offs)
- Multi-tenancy design and isolation (VRF, VLANs, micro-segmentation)
- Storage area networking design and operation (FC, FCoE, iSCSI, zoning, ALUA)
- Compute orchestration and integration (UCS, hypervisors, boot strategies)
- Network services at scale (QoS, multicast, load balancing, FHRP)
- Automation and infrastructure-as-code (Ansible, Terraform, custom scripts)
- Cloud hybrid integration (on-premise to AWS/Azure/GCP seamlessly)
- Capacity planning, cost optimization, and business continuity
- Monitoring, alerting, and troubleshooting in large-scale environments
- Security and compliance in regulated industries (banking, healthcare, telecom)
- Leadership and mentoring in data center design/operations teams

---

## Recommended courses at Data Center · Expert

| Provider | Title | Cost | URL |
|---|---|---|---|
| INE (Intellignet) | CCIE Data Center v3.1 Learning Path | $999–$1,299/year | [↗](https://ine.com/blog/building-your-ultimate-ccie-data-center-v31-lab-a-complete-guide) |
| Cisco U (Cisco Learning Network) | CCIE Data Center Training | Varies | [↗](https://learningnetwork.cisco.com/s/ccie-data-center) |
| Cisco Learning Network | 350-601 DCCOR Exam Prep | Free (bundled with cert path) | [↗](https://learningnetwork.cisco.com/s/dccor-exam-topics) |
| CBT Nuggets | CCNP/CCIE Data Center Core (350-601) | $3,000–$4,500 (bootcamp) | [↗](https://www.cbtnuggets.com/it-training/cisco/ccnp-data-center-core) |
| Udemy (Various CCIE DC instructors) | CCIE Data Center v3.1 Self-Paced Courses | $15–$199 | [↗](https://www.udemy.com/topic/ccie-data-center/) |
| SprintZeal | CCIE Data Center v3.1 Training | $2,000–$3,000 (instructor-led) | [↗](https://www.sprintzeal.com/course/ccie-data-center-v3-cisco-certified-internetwork-expert-data-center-certification-training) |

**Course-selection rule:** INE is the gold standard for CCIE DC. Expect 14–20 months of study and 2,500–3,500 hands-on lab hours. Lab access (Cisco Modeling Labs, GNS3, or physical hardware) is essential ($500–$3,000 per year). Bootcamps are available but not a substitute for deep lab practice. v3.1 updates include more ACI emphasis and Intersight integration.

---

## Practice exams

| Provider | Title | Cost | URL |
|---|---|---|---|
| Cisco Learning Network | Official DCCOR Practice Exam (350-601) | Free / Bundled in cert path | [↗](https://learningnetwork.cisco.com/s/dccor-exam-topics) |
| Boson | CCNP Data Center (DCCOR 350-601) ExSim | $99–$129 | [↗](https://www.boson.com/practice-exam) |
| Whizlabs | CCNP Data Center (DCCOR 350-601) Practice Tests | $49–$99 | [↗](https://www.whizlabs.com/cisco-ccnp/) |
| MeasureUp | 350-601 DCCOR Official Practice Test | $99–$165 | [↗](https://www.measureup.com) |
| INE | Mock Lab Exams (CCIE DC v3.1) | Bundled in learning path or $300–$600 standalone | [↗](https://ine.com/blog/building-your-ultimate-ccie-data-center-v31-lab-a-complete-guide) |

---

## Books

| Title | Author | Publisher | Year | ISBN | URL |
|---|---|---|---|---|---|
| CCNP and CCIE Data Center Core DCCOR 350-601 Official Cert Guide, 2nd Edition | Firas Ahmed, Marwan Al-Shawi, Myles Peter | Cisco Press / Pearson | 2023 | 978-0138228088 | [↗](https://www.ciscopress.com/store/ccnp-and-ccie-data-center-core-dccor-350-601-official-9780138228088) |
| Cisco ACI Essentials: A Guide to Application Centric Infrastructure | David Jansen | Cisco Press | 2023 | 978-1587146015 | [↗](https://www.ciscopress.com/store/cisco-aci-essentials-a-guide-to-application-centric-9781587146015) |
| CCIE Data Center v3.1 Workbooks & Lab Guides | INE / Community Contributors | Various | 2024–2025 | N/A | [↗](https://ine.com/blog/building-your-ultimate-ccie-data-center-v31-lab-a-complete-guide) |
| Designing Cisco Data Center Infrastructure (3rd Edition) | Francois Vermeiren, Rik Field, Bob Wiggins | Cisco Press | 2022 | 978-0136775386 | [↗](https://www.ciscopress.com/store/designing-cisco-data-center-infrastructure-9780136775386) |

**Book note:** The 2023 2nd edition of the Official Cert Guide is current and aligns with DCCOR v1.2. For ACI depth, Jansen's *ACI Essentials* is widely recommended. INE workbooks for v3.1 are the most practical for lab preparation.

---

## Typical job titles at Data Center · Expert

**Senior Data Center Engineer · Data Center Architect · Hyperscale Infrastructure Engineer · Senior Infrastructure Architect · Cloud Infrastructure Architect · Principal Data Center Engineer · Lead Data Center Engineer · Solutions Architect (Data Center) · Infrastructure Automation Engineer · Cloud Solutions Architect · CCIE Data Center Specialist**

*(Job titles drawn from Cisco Learning Network resources, LinkedIn, Glassdoor, Indeed, and IT Jobs Watch postings requiring or preferring CCIE DC.)*

---

## Salary

| Region | Range | Source |
|---|---|---|
| USD | $140,000 – $280,000+ (CCIE DC average ~$168,000–$195,000 at senior level; architects and principals reach $220,000–$280,000+) | [Glassdoor CCIE Engineer ↗](https://www.glassdoor.com/Salaries/ccie-engineer-salary-SRCH_KO0,13.htm) · [ZipRecruiter CCIE Data Center ↗](https://www.ziprecruiter.com/Jobs/Ccie-Data-Center) · [Talent.com CCIE ↗](https://www.talent.com/salary?job=ccie) |
| GBP | £85,000 – £110,000+ (CCIE Data Center specialists in UK typically £85,549–£92,000; London roles higher) | [IT Jobs Watch CCIE DC ↗](https://www.itjobswatch.co.uk/jobs/uk/ccie%20data%20center.do) · [Glassdoor UK CCIE ↗](https://www.glassdoor.co.uk/Salaries/ccie-salary-SRCH_KO0,4.htm) · [PayScale UK ↗](https://www.payscale.com/research/UK/Certification=Cisco_Certified_Internetwork_Expert_(CCIE)/Salary) |
| ZAR | R950,000 – R1,400,000 (South African CCIE data limited; architecture/senior roles ~R900,000–R1,600,000; hyperscale cloud roles higher) | [PayScale ZA CCIE ↗](https://www.payscale.com/research/ZA/Certification=Cisco_Certified_Internetwork_Expert_(CCIE)/Salary) · [CareerJunction ZA Data Center ↗](https://www.careerjunction.co.za/jobs/data-center/gauteng) · [IT Architect ZA ↗](https://www.payscale.com/research/ZA/Job=Information_Technology_(IT)_Architect/Salary) |

**Salary note:** CCIE DC is rarer than CCIE Enterprise Infrastructure, making salaries slightly higher in supply-constrained markets (hyperscale, banking, telecom). Contract/consulting roles often pay 25–35% premium. Geography and employer size (hyperscale vs. regional enterprise) drive significant variation. GBP figures reflect London premium; regional UK roles average 10–15% lower.

---

## Skills validated

*Concrete, hands-on technologies this exam actually tests — distinct from shared "Common skills" above.*

- Nexus and NX-OS administration (Nexus 9000, 7000, MDS series)
- Data center fabric architecture (spine-leaf topologies, ACI, VXLAN EVPN)
- Application Centric Infrastructure (ACI) design and operation
- VXLAN, BGP EVPN, and overlay networking
- Virtual routing and forwarding (VRF) and multi-tenancy
- Cisco UCS (Unified Computing System) architecture and provisioning
- UCS service profiles, boot orchestration, hypervisor integration
- Storage area networking: Fibre Channel (FC), FCoE, iSCSI
- Storage fabric design and NPIV (N_Port ID Virtualization)
- MDS switches and fabric zoning
- QoS design and hierarchical policing
- Load balancing (native, ACE, F5 integration)
- Multicast PIM, IGMP, and multicast VPN
- First Hop Redundancy (HSRP, VRRP, GLBP)
- Network services: DHCP, DNS, NTP, syslog in data center context
- Micro-segmentation and security policies in ACI
- Infrastructure-as-Code (Ansible, Terraform, Puppet)
- Cisco Intersight (unified platform for UCS/HyperFlex management)
- APIs (NETCONF, YANG, REST) for data center automation
- Troubleshooting and diagnostics in large-scale fabric environments
- Hybrid cloud connectivity (AWS, Azure, on-premise integration)
- Capacity planning, cost optimization, business continuity

---

## Related certifications

- **Stacks with:** [CCNP Data Center (350-601 DCCOR) ↗](Cisco_CCNP_Data_Center_DCCOR_350-601.md)
- **Lateral stacks with:** [CCIE Enterprise Infrastructure ↗](Cisco_CCIE_EI_Enterprise_Infrastructure.md) · [CCIE Security ↗](Cisco_CCIE_Security.md)
- **Emerging equivalent (cloud):** [AWS Certified Solutions Architect – Professional ↗](../../Vendors/AWS_Vendor_Overview.md) (no 1-to-1 CCIE equivalent; cloud requires different skill set)
- **Replaces:** CCIE Data Center v2.0 (retired in 2023); v3.0 (retired in 2024)
- **Vendor overview:** [Cisco Vendor Overview ↗](../../Vendors/Cisco_Vendor_Overview.md)

---

## Study plan outline (14–20 months, typical)

**Months 1–4: Foundation (CCNP level)**
- Pass 350-601 DCCOR if not already certified
- Read *Official Cert Guide* 2nd ed., chapters 1–10 (Fabric, Compute, Storage basics)
- Complete Cisco Learning Network fundamentals labs
- Set up lab environment (GNS3, Cisco Modeling Labs, or hardware)
- Practice DCCOR mock exams (Boson, Whizlabs) weekly

**Months 5–10: Core lab topics**
- Follow INE v3.1 structured learning path
- Deep labs: ACI fabric design (100+ hours), UCS provisioning (50+ hours), storage fabric (50+ hours), QoS/services (40+ hours)
- Focus on design thinking, not just CLI commands
- Hands-on with Cisco Modeling Labs or physical hardware if available
- Weekly mock exams; track weak topics

**Months 11–14: Integration and lab format**
- Study v3.1 updates (Intersight, latest ACI features)
- Full mock lab exams (8 hours) every 10 days
- Work through INE workbooks (design + deploy tasks)
- Join study groups (NetworkKings, INE community, Reddit r/ccna)
- Refine weak domains, build speed

**Months 15–20: Lab attempt readiness**
- Daily focused labs on difficult topics (Storage fabric, micro-segmentation, Intersight)
- Timed design (3 hours) and deploy (5 hours) practice
- Troubleshoot complex failure scenarios
- Register for lab when confidence reaches 85%+
- After fail: iterate on weak domains, retry in 60–90 days

**Total cost estimate:** $4,000–$12,000 (DCCOR $400, lab exams $1,600–$1,900 per attempt, courses $1,500–$2,500, labs/access $1,000–$3,000/year, travel/materials $1,000+)

---

## Sources

- [Cisco CCIE Data Center Home ↗](https://www.cisco.com/site/us/en/learn/training-certifications/certifications/datacenter/ccie-data-center/index.html)
- [CCIE Data Center Exams & Training ↗](https://www.cisco.com/site/us/en/learn/training-certifications/certifications/datacenter/ccie-data-center/exams-and-training.html)
- [350-601 DCCOR v1.2 Exam Blueprint ↗](https://learningnetwork.cisco.com/s/dccor-exam-topics)
- [CCIE Data Center Learning Network ↗](https://learningnetwork.cisco.com/s/ccie-data-center)
- [INE CCIE Data Center v3.1 Learning Path ↗](https://ine.com/blog/building-your-ultimate-ccie-data-center-v31-lab-a-complete-guide)
- [CCNP/CCIE Data Center Official Cert Guide, 2nd Ed. (Pearson) ↗](https://www.ciscopress.com/store/ccnp-and-ccie-data-center-core-dccor-350-601-official-9780138228088)
- [Cisco ACI Essentials (Cisco Press) ↗](https://www.ciscopress.com/store/cisco-aci-essentials-a-guide-to-application-centric-9781587146015)
- [Designing Cisco Data Center Infrastructure, 3rd Ed. (Cisco Press) ↗](https://www.ciscopress.com/store/designing-cisco-data-center-infrastructure-9780136775386)
- [Glassdoor CCIE Engineer Salary ↗](https://www.glassdoor.com/Salaries/ccie-engineer-salary-SRCH_KO0,13.htm)
- [ZipRecruiter CCIE Data Center Jobs ↗](https://www.ziprecruiter.com/Jobs/Ccie-Data-Center)
- [IT Jobs Watch CCIE Data Center (UK) ↗](https://www.itjobswatch.co.uk/jobs/uk/ccie%20data%20center.do)
- [PayScale CCIE ZA (South Africa) ↗](https://www.payscale.com/research/ZA/Certification=Cisco_Certified_Internetwork_Expert_(CCIE)/Salary)
- [CBT Nuggets CCNP Data Center Training ↗](https://www.cbtnuggets.com/it-training/cisco/ccnp-data-center-core)
- [Boson CCNP Data Center Practice Exams ↗](https://www.boson.com/practice-exam)

---

*Last verified: 2026-05-01*
*Parent ecosystem: [Cisco Ecosystem](../../Ecosystems/Cisco_Ecosystem.md)*
*Parent domain: [Data Center / Networking](../../Domains/Data_Center.md)*
*Vendor overview: [Cisco Vendor Overview](../../Vendors/Cisco_Vendor_Overview.md)*
