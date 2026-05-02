---
cert_name: "Cisco Certified Internetwork Expert Service Provider"
cert_code: "CCIE SP"
vendor: "Cisco"
status: "Active"
level: "Expert"
domain: "Networking/Service Provider"
ecosystem: "Cisco Service Provider"
last_verified: "2026-05-01"
aliases: ["CCIE Service Provider", "CCIE SP", "CCIE SP v6.0", "350-501 SPCOR + Lab", "CCIE Service Provider Expert"]
---

# Cisco Certified Internetwork Expert Service Provider

**`CCIE SP`** · ● **Active** · **Expert** · _Cisco_

---

## Exam facts

| Field | Value |
|---|---|
| Core exam cost | $400 USD (350-501 SPCOR) |
| Lab exam cost | $1,900 USD (8-hour hands-on) |
| Total cost | $2,300 USD for complete certification |
| Core exam duration | 120 minutes |
| Lab exam duration | 8 hours |
| Core exam format | 90–110 multiple-choice questions (single and multiple response) |
| Lab exam format | Design (3 hrs) + Deploy/Operate/Optimize (5 hrs) |
| Passing score | Core: 825/1000 (scaled); Lab: performance-based (cumulative domain score) |
| Delivery | Pearson VUE (core), Cisco-proctored lab centers (lab) |
| Languages | English |
| Valid | Lifetime (CCIE credentials do not expire) |
| Renewal | N/A (Lifetime validity; optional CE available) |
| Prerequisites | None formal; CCNP SP or equivalent service provider background strongly recommended |
| Lab version | v6.0 (current as of 2026) |

**Vendor source —** [Cisco CCIE Service Provider ↗](https://www.cisco.com/site/us/en/learn/training-certifications/certifications/expert/ccie-service-provider/index.html)

**Core exam page —** [350-501 SPCOR ↗](https://www.cisco.com/site/us/en/learn/training-certifications/exams/spcor.html)

**Official exam blueprint —** [CCIE SP v6.0 Blueprint (PDF) ↗](https://learningcontent.cisco.com/documents/marketing/exam-topics/CCIE_SP_v6.0_Blueprint.pdf)

**Exam objectives —** [CCIE SP v6.0 Exam Topics ↗](https://learningnetwork.cisco.com/s/ccie-sp-exam-topics)

---

## About

The **Cisco Certified Internetwork Expert (CCIE) Service Provider** is the pinnacle credential for network professionals specializing in ISP, telecommunications, and service provider backbone infrastructure. It validates expert-level mastery in designing, deploying, operating, and optimizing carrier-grade IP and MPLS networks at continental and global scale—spanning advanced BGP policy, MPLS L2/L3 VPN scaling, Segment Routing (SR-MPLS and SRv6), multicast content replication, quality-of-service enforcement, and NETCONF/YANG-based network automation. The certification requires two rigorous exams: the 350-501 SPCOR written exam (Implementing and Operating Cisco Service Provider Core Technologies, $400 USD, 120 minutes) and an 8-hour hands-on lab exam ($1,900 USD) conducted at Cisco authorized proctoring centers or via Cisco OnVUE online. Combined exam cost is $2,300 USD. CCIE SP is a **lifetime credential**—no renewal required—and represents one of the most selective and sought-after networking certifications globally. Industry estimates place the first-attempt lab pass rate at only 5–10%, making it a definitive mark of mastery among the top 1% of networking professionals. Typical time-to-certification is 18–36 months of dedicated study and hands-on lab practice, typically requiring 5–10 years of prior service provider network operations experience.

The Service Provider specialization (distinct from Enterprise Infrastructure, Collaboration, Data Center, Security, and Wireless CCIEs) focuses exclusively on the technologies, protocols, service delivery models, and operational patterns used by ISPs, Tier-1 telecommunications carriers, and hyperscale cloud operators to provision internet connectivity, VPN services, and managed network offerings to millions of subscribers and enterprise customers. CCIE SP candidates master carrier-grade routing at scale (BGP with route reflection and confederation, OSPF and IS-IS multi-area design), MPLS label-switching architecture and VPN services (Layer 3 VPN per RFC 2547, Layer 2 VPN including EVPN per RFC 7432), IP multicast for broadcast content delivery, sophisticated traffic engineering for SLA compliance, and automated orchestration via NETCONF/YANG and programmable interfaces. The lab exam itself simulates real decision trees encountered by senior carrier network architects: "Design and implement a multi-region MPLS backbone for 500+ customer VPNs with sub-50ms convergence, 99.99% SLA uptime, and disaster recovery across three geographic regions."

---

## Domain context — Networking

Service Provider Networking focuses on the infrastructure, routing protocols, and services that ISPs and carriers use to deliver internet connectivity, VPN services, and value-added offerings to millions of subscribers and business customers. Unlike enterprise networking (which optimizes performance within a company), SP networking optimizes for **scale, redundancy, traffic engineering, SLA assurance, and profitable service delivery**. CCIE SP is the gold standard for architects and engineers in this domain.

[Read full deep dive — Cisco Ecosystem →](../../Vendors/Cisco_Vendor_Overview.md)

---

## Topics covered

### Core Exam (350-501 SPCOR) Blueprint

- **Architecture (15%)** — Service provider reference models, modular design, scalability constraints, network segmentation, redundancy patterns, disaster recovery for carrier backbones
- **Routing and Switching (25%)** — BGP advanced design (route filtering, community tagging, traffic engineering), OSPF and IS-IS at scale, IP addressing and forwarding, static routing edge cases
- **MPLS and Segment Routing (20%)** — LDP, RSVP-TE signaling, Segment Routing (SR) basics, label switching, MPLS operations and troubleshooting, LSP design
- **VPN Services (20%)** — Layer 3 MPLS VPN (L3VPN, 6VPE), Layer 2 VPN (E-Line, VPLS, E-LAN, E-Tree), EVPN for multi-service delivery, VPN scaling and optimization
- **Quality of Service and Multicast (10%)** — QoS policy implementation (DiffServ, traffic shaping, policing, marking), multicast routing (PIM, IGMP), bandwidth reservation and traffic engineering
- **Network Management and Automation (10%)** — NETCONF/YANG for programmability, Cisco Network Automation tools, telemetry and analytics (streaming NetFlow, Flexible NetFlow), syslog and event collection, operational troubleshooting

*Source:* [Cisco CCIE SP v6.0 Blueprint ↗](https://learningcontent.cisco.com/documents/marketing/exam-topics/CCIE_SP_v6.0_Blueprint.pdf)

### Lab Exam Structure (8 hours, performance-based)

**Design Module (3 hours):** Candidate receives a detailed business requirements document (e.g., "design a multi-region MPLS backbone for 500+ customer VPNs across 20 countries with <50ms convergence and 99.99% SLA") and must produce a comprehensive technical design document covering network topology, IP addressing scheme, routing strategy, VPN architecture, QoS policy hierarchy, redundancy design, and failover scenarios. Candidates must justify every design choice and estimate capacity / scalability. Typical design scenarios include:
- Multi-region BGP design with advanced policy (AS-PATH manipulation, local preference tuning, MED communities, route reflector placement, confederation design)
- Carrier-grade IGP design (IS-IS multi-level with L1/L2 boundaries, OSPF multi-area with stub/NSSA regions, optimal metric tuning, convergence optimization)
- MPLS L2/L3 VPN architecture for multi-tenant service segregation (RFC 2547 L3VPN, 6VPE for IPv6, VPLS for Layer 2)
- EVPN design for Ethernet services (E-Line point-to-point, E-LAN multi-point, E-Tree root-leaf, hub-and-spoke redundancy)
- Segment Routing traffic engineering (SR-MPLS policy binding, FRR protection strategies, SRv6 for IPv6 transport)
- Multicast replication topology and mVPN design for broadcast / video content delivery
- QoS classification hierarchy and service-tier enforcement (gold / silver / bronze provisioning, peak/committed rates)
- Disaster recovery and geographic failover (metro recovery <5s, long-haul recovery <30s)

**Deploy / Operate / Optimize Module (5 hours):** Candidate configures, debugs, and optimizes a complete live service provider network topology in Cisco's lab environment (Cisco Modeling Labs CML or hardware IOS XR lab), tasked with transforming the design into a working end-to-end network, troubleshooting pre-seeded faults, and optimizing performance under traffic load. Typical hands-on scenarios include:
- Carrier-class IGP configuration (IS-IS L1/L2 boundary design, OSPF area hierarchy with route summarization and filtering)
- MPLS control-plane setup: LDP discovery and adjacency, RSVP-TE signaling with reservation styles and fast reroute (FRR)
- BGP multi-instance design (route reflectors vs. confederation, dampening policy, graceful restart readiness)
- L3VPN customer VRF configuration with per-VRF routing and traffic isolation
- EVPN service activation (bridge domain, EVI spanning, multi-homing redundancy, flood suppression)
- Segment Routing deployment (SR-MPLS with prefix SIDs and adjacency SIDs, SR policy binding to forwarding)
- QoS DiffServ implementation at scale (traffic classification, DSCP/EXP marking, hierarchical queuing discipline, WRED, police-cascade)
- IP multicast (PIM Sparse Mode, Source-Specific Multicast, VRF-aware multicast, OIL optimization)
- Carrier-grade security hardening (uRPF strict/loose modes, BGP MD5 authentication, control-plane ACLs, DDoS mitigation)
- Redundancy and convergence testing (graceful restart, Non-Stop Forwarding, BFD subsecond detection)
- Troubleshooting and diagnostics (packet captures with tcpdump, IP SLA SLA verification, telemetry stream validation, NetFlow traffic analysis)

---

## Common skills at Networking · Expert

*Shared competencies for the Networking domain at Expert level — not specific to this cert.*

- Advanced routing protocol design and operation (BGP, OSPF, IS-IS) at internet scale
- MPLS network architecture, label engineering, and operations
- VPN service design and multi-customer scaling
- Quality of Service (QoS) policy design for SLA enforcement
- Network automation and programmability (NETCONF/YANG, REST APIs, Python)
- High-availability and disaster-recovery architecture
- Network monitoring, telemetry, and analytics at scale
- Carrier-grade security and DDoS mitigation

---

## Recommended courses at Networking · Expert

| Provider | Title | Cost | URL |
|---|---|---|---|
| INE (Internetwork Expert) | CCIE Service Provider v6.0 Comprehensive Training | $2,500–$5,000 | [↗](https://www.ine.com/pages/ccie-service-provider) |
| Cisco Learning Network | CCIE SP Self-Paced Training Bundle | $500–$800 | [↗](https://learningnetwork.cisco.com/s/ccie-service-provider) |
| CBT Nuggets | CCNP / CCIE Service Provider SPCOR (350-501) | $399–$599/year | [↗](https://www.cbtnuggets.com/it-training/cisco/ccnp-service-provider-core) |
| Narbik Kocharians (Bootcamp) | CCIE Service Provider 5-Day Bootcamp | $3,500–$5,000 | Available through authorized training centers |
| Pluralsight | Cisco Service Provider Path (SPCOR + advanced) | $299–$499/month | [↗](https://www.pluralsight.com/paths/cisco-spcor-350-501-for-ccnp-service-provider) |
| Udemy (various instructors) | CCNP SPCOR 350-501 Practice Tests & Study | $15–$150 | [↗](https://www.udemy.com/results/?q=ccnp%20spcor%20350-501) |

**Course-selection rule:** INE and Narbik bootcamps are the industry gold standard for CCIE-level preparation. Prioritize hands-on lab time with real or simulated service provider architectures. Cisco Learning Network content is mandatory as a baseline. Udemy courses and online resources supplement but cannot replace the depth of a comprehensive bootcamp.

---

## Practice exams

| Provider | Title | Cost | URL |
|---|---|---|---|
| INE CCIE Service Provider | CCIE SP Lab Exam Simulator (8-hour timed) | Included in training subscription or $500–$800 | [↗](https://www.ine.com/pages/ccie-service-provider) |
| Boson ExSim-Max | CCIE SP Lab Exam Simulator (limited availability) | $299–$399 | [↗](https://www.boson.com/) |
| MeasureUp | Cisco 350-501 SPCOR Practice Test | $80–$120 | [↗](https://www.measureup.com/) |
| Whizlabs | CCIE Service Provider Written + Lab Practice Exams | $150–$250 | [↗](https://www.whizlabs.com/) |
| Cisco Learning Network | Official CCIE SP Practice Labs | Free–$200 | [↗](https://learningnetwork.cisco.com/s/ccie-service-provider) |

---

## Books

| Title | Author | Publisher | Year | ISBN | URL |
|---|---|---|---|---|---|
| CCNP and CCIE Service Provider Core SPCOR 350-501 Official Cert Guide | Bradley Riapolov, Mohammad Said Saleh Khalil | Cisco Press / Pearson | 2024 | 978-0-13-532486-8 | [↗](https://www.ciscopress.com/store/ccnp-spcor-350-501-official-cert-guide-9780135324806) |
| CCIE Service Provider v6.0 Lab Manual | Cisco | Cisco Learning | 2024 | N/A | Available via Cisco Learning Network portal |
| MPLS in the SDN Era | Thomas A. Nadeau, Luciano Resende | O'Reilly | 2022 | 978-1-492-05269-8 | [↗](https://www.oreilly.com/library/view/mpls-in-the/9781492052692/) |
| Service Provider Network Architecture | Walter John Goralski | McGraw-Hill Professional | 2014 | 978-0-07-181191-6 | [↗](https://www.amazon.com/Service-Provider-Network-Architecture-McGraw-Hill/dp/0071811915) |
| BGP Design and Implementation | Iljitsch Van Beijnum | Cisco Press / Pearson | 2002 | 978-1578701742 | [↗](https://www.ciscopress.com/store/bgp-design-and-implementation) |

---

## Typical job titles at Networking · Expert

**Core roles:**
- Senior Service Provider Network Architect
- Carrier Network Architect
- Tier-1 ISP Network Architect
- Backbone Network Architect (Core/National/International)
- MPLS Architect (Senior)
- Service Provider Solutions Architect
- Principal Network Engineer (SP)
- Carrier Operations Engineer (Lead / Principal)
- Senior Network Design Engineer (SP)
- Service Provider Technical Leader

**Specialized tracks:**
- BGP/Routing Architect
- MPLS/VPN Design Lead
- Multicast / QoS Specialist (Expert)
- Network Automation & Programmability Engineer (SP)
- Carrier Network Operations Center (NOC) Manager / Lead Engineer

*(Job titles drawn from current job-board postings (LinkedIn, Cisco.com careers, CareerBuilder, regional carrier and ISP sites, and Heidrick & Struggles telecom staffing) that list CCIE SP as required or strongly preferred.)*

---

## Salary

| Region | Role | Range | Source |
|---|---|---|---|
| USD | Senior SP Architect / Carrier Network Architect | $150,000–$300,000+ | [Glassdoor ↗](https://www.glassdoor.com/Salaries/ccie-salary-SRCH_KO0,4.htm) · [Robert Half Tech Salary Guide ↗](https://www.roberthalf.com/salary-guide) · [PayScale ↗](https://www.payscale.com/research/US/Certification=Cisco_Certified_Internetwork_Expert_(CCIE)/Salary) |
| USD | Principal Network Engineer (SP) | $200,000–$350,000+ | [ZipRecruiter ↗](https://www.ziprecruiter.com/Salaries/CCIE-Salary) · Heidrick & Struggles telecom staffing |
| GBP | Senior Network Architect (SP) | £90,000–£160,000 | [IT Jobs Watch ↗](https://www.itjobswatch.co.uk/) · [Hays ↗](https://www.hays.co.uk/) |
| ZAR | Senior Network Architect / Carrier Architect | R2,200,000–R5,000,000 annually | [Pnet ↗](https://www.pnet.co.za/) · [PayScale ZA ↗](https://www.payscale.com/research/ZA/Certification=Cisco_Certified_Internetwork_Expert_(CCIE)/Salary) · [CareerJunction ↗](https://www.careerjunction.co.za/) |
| EUR | Senior Network Architect (SP) | €110,000–€230,000 (DE/NL/CH) | [Indeed ↗](https://www.indeed.com/) · [StepStone ↗](https://www.stepstone.de/) |
| AUD | Senior Network Architect (Carrier) | A$180,000–A$300,000+ | [SEEK ↗](https://www.seek.com.au/) · [LinkedIn Salary ↗](https://linkedin.com/) |

**Salary context:** CCIE SP professionals command premium compensation—20–35% above standard senior engineers—due to extreme scarcity of certified experts and the mission-critical nature of service provider infrastructure. ISPs and Tier-1 carriers (AT&T, Verizon, Vodafone, Singtel, Orange, Deutsche Telekom, Telstra) consistently pay at the top of these ranges. Geographic variation is significant: North American carrier hubs (Silicon Valley, New York, Dallas, Toronto) and European telecom centers (London, Amsterdam, Frankfurt, Munich) offer premium salaries in the $250k–$400k+ USD range for principal/senior SP architects. The certification is especially valued in regions with strong telecommunications infrastructure investment and active carrier expansion (North America, Western Europe, Singapore, Australia, South Africa). Remote roles for CCIE SP are rare but available; most carrier positions require proximity to network operations or regional engineering hubs.

---

## Skills validated

*Exam-specific technical competencies the CCIE SP lab validates—distinct from shared "Common skills" above.*

**Routing at scale:**
- Advanced BGP design and operation: eBGP peering strategy (direct, confederation, route reflector), community tagging for traffic engineering, AS-PATH manipulation for traffic steering, MED tuning for load balancing, local preference for primary/backup path selection, GracefulRestart and NSF readiness
- OSPF multi-area design for service provider networks: area boundaries, stub/NSSA regions, traffic engineering, metric tuning, convergence optimization, graceful restart
- IS-IS multi-level operation: Level 1 / Level 2 boundary design, TLV extensions, metric calculation, overload bit usage, segment routing extension with prefix SIDs

**MPLS and VPN at scale:**
- MPLS Label Distribution Protocol (LDP): discovery, adjacency establishment, label binding and propagation, fast reroute (FRR), link/node protection strategies
- RSVP-TE signaling: Path and Resv message handling, reservation styles (FF, SE), explicit route objects (EROs), fast reroute (FRR) link and node protection, BFD integration
- Layer 3 MPLS VPN (RFC 2547): PE-to-CE routing options (eBGP, static, RIP), VRF import/export policy, inter-AS options (A, B, C), carrier-of-carriers design, 6VPE (RFC 4659) for IPv6 over MPLS
- Ethernet VPN (EVPN, RFC 7432): bridge domains, EVI (EVPN Instance) spanning, MAC advertisement, multi-homing redundancy (all-active, single-active), split-horizon and flood suppression, QoS enforcement per service
- Layer 2 VPN services: VPLS (Virtual Private LAN Service), E-Line point-to-point services, E-LAN multi-point delivery, E-Tree root/leaf hierarchies, traffic engineering for L2VPN

**Segment Routing (modern traffic engineering):**
- Segment Routing MPLS (SR-MPLS): prefix SIDs, adjacency SIDs, prefix and adjacency SID allocation, segment list construction, binding SID to policy
- SR policy definition and binding: traffic engineering policies applied to forwarding, optimization for latency/cost/disjoint paths
- SRv6 (IPv6 Segment Routing): SRv6 function localization, behavior definitions, segment list encoding, interoperability with non-SR infrastructure

**Quality of Service and multicast:**
- QoS policy design at scale: traffic classification (ACL, NBAR2), DSCP/EXP marking, DiffServ per-hop behaviors (PHBs), hierarchical queuing discipline (HQD), congestion management (RED, WRED), rate limiting and policing hierarchies, traffic shaping for SLA enforcement
- IP multicast: PIM Dense Mode and Sparse Mode, source trees vs. shared trees, IGMP versions and snooping, VRF-aware multicast, OIL (Outgoing Interface List) optimization, Multicast VPN (mVPN) for service provider broadcast services

**Security and high availability:**
- Carrier-grade security: uRPF (Unicast Reverse Path Forwarding) strict and loose modes, BGP MD5/HMAC authentication, control-plane ACLs, DDoS mitigation via policing and rate-limit trees (RPL), black-hole routing
- Redundancy and sub-second convergence: redundant hardware, graceful restart (OSPF GR, BGP GR), Non-Stop Forwarding (NSF), BFD (Bidirectional Forwarding Detection) for subsecond link failure detection, MPLS FRR verification

**Operations and automation:**
- Network automation: NETCONF/YANG for configuration and operational state, REST APIs for programmatic access, Python scripting for bulk configuration and telemetry collection
- Operational troubleshooting: packet capture and tcpdump analysis, IP SLA for SLA verification, model-driven telemetry (MDT) and streaming NetFlow for traffic analysis, log aggregation and alarm routing, traffic trace and debug commands

---

## Industry and career context

CCIE Service Provider professionals work in highly specialized roles within ISPs, Tier-1 carriers, and large enterprise networks with carrier-grade requirements. Unlike enterprise networking (where CCIE Enterprise Infrastructure dominates), the SP track is inseparable from telecom infrastructure, BGP mesh routing at continental scale, and the economics of delivering services to millions of subscribers.

**Industry presence:** The CCIE SP credential is most recognized in regions with mature telecommunications markets and active carrier investment:
- **North America** (AT&T, Verizon, Comcast, Rogers, Télus) — legacy and emerging fiber/5G build-out
- **Western Europe** (Vodafone, Orange, Deutsche Telekom, Swisscom, KPN) — dense telecom infrastructure
- **Asia-Pacific** (Singtel, Telstra, NTT, China Unicom, Rakuten Mobile) — rapid 4G/5G expansion and submarine cable operations
- **South Africa & emerging markets** (Vodacom, MTN, Liquid Intelligent, Smile Telecoms) — growing demand for carrier backbone expertise

**Typical employer types:**
- **Tier-1 ISPs / Carriers:** AT&T, Verizon, Vodafone, Orange, Singtel, Telstra, Deutsche Telekom, Swisscom
- **Carrier-focused consulting:** Deloitte, Accenture, McKinsey (telecom practice), BCG, Everstream Analytics
- **Network equipment vendors:** Cisco, Juniper Networks, Nokia, Arista, Huawei (service provider line)
- **Specialized SP integrators:** Telcordia (Ericsson subsidiary), Level 3 Communications, Zayo, Digital Bridge
- **Hyperscale cloud operators:** AWS (backbone), Google Cloud, Microsoft Azure (carrier interconnect)

**Career progression from CCIE SP:**
1. **Mid → Senior (5–10 YOE post-CCIE):** Solutions Architect, Design Lead, Technical Manager roles within carriers
2. **Senior → Principal/Distinguished (10–15 YOE):** Principal Engineer, Distinguished Architect, Director of Network Architecture
3. **Specialist tracks:** Multicast specialist, BGP/routing expert, MPLS/VPN architect, network automation lead, SD-WAN architect
4. **Cross-domain leverage:** Many CCIE SP holders also pursue JNCIE-SP (Juniper equivalent), AWS Certified Network Specialty, or network security certs (like CCIE Security) to broaden market appeal

**Remote work context:** CCIE SP positions are predominantly **on-site or hybrid near network operations centers**. Full-remote CCIE SP roles are rare because:
- Lab exam must be taken at a Cisco proctored center or via OnVUE (distance-proctored)
- Day-to-day work often requires hands-on hardware debugging, visiting customer sites, or emergency NOC escalation
- On-call rotation for carrier support is common

**Time-to-certification:** 18–36 months of full-time study + hands-on lab time. Industry benchmarks:
- **First attempt pass rate (~5–10%):** requires 500–1,000+ hours of study and lab practice
- **Repeat exam cost:** $1,900 per lab attempt; most candidates spend $3,800–$7,600 total (2–4 attempts)
- **Total investment (all-in):** $3,000–$8,000 training + exams, plus 18–24 months of personal study time

---

## Related certifications

- **Prerequisite knowledge path:** [CCNP Service Provider (CCNP SP) ↗](./Cisco_CCNP_Service_Provider_SPCOR_350-501.md) (core exam 350-501 SPCOR + concentration exam required)
- **Equivalent at this level:** [Juniper JNCIE-SP ↗](#) (file not yet created) · [CompTIA CCIE equivalent (vendor-neutral) ↗](#) (no direct vendor-neutral equivalent at CCIE SP level exists)
- **Stacks with:** [CCIE Enterprise Infrastructure ↗](./Cisco_CCIE_EI_Enterprise_Infrastructure.md) (different specialization, both expert-level Cisco certs)
- **Replaces:** Legacy CCIE Routing & Switching (retired 2016)
- **Vendor overview:** [Cisco Certification Roadmap ↗](../../Vendors/Cisco_Vendor_Overview.md)

---

## Sources

- [Cisco CCIE Service Provider ↗](https://www.cisco.com/site/us/en/learn/training-certifications/certifications/expert/ccie-service-provider/index.html)
- [350-501 SPCOR Exam Page ↗](https://www.cisco.com/site/us/en/learn/training-certifications/exams/spcor.html)
- [CCIE SP v6.0 Blueprint (PDF) ↗](https://learningcontent.cisco.com/documents/marketing/exam-topics/CCIE_SP_v6.0_Blueprint.pdf)
- [CCIE SP v6.0 Exam Topics ↗](https://learningnetwork.cisco.com/s/ccie-sp-exam-topics)
- [CCNP SPCOR 350-501 Official Cert Guide ↗](https://www.ciscopress.com/store/ccnp-spcor-350-501-official-cert-guide-9780135324806)
- [INE CCIE Service Provider Training ↗](https://www.ine.com/pages/ccie-service-provider)
- [CBT Nuggets CCNP/CCIE Service Provider ↗](https://www.cbtnuggets.com/it-training/cisco/ccnp-service-provider-core)
- [Glassdoor CCIE Salary Data ↗](https://www.glassdoor.com/Salaries/ccie-salary-SRCH_KO0,4.htm)
- [PayScale CCIE Salary Research ↗](https://www.payscale.com/research/US/Certification=Cisco_Certified_Internetwork_Expert_(CCIE)/Salary)
- [ZipRecruiter CCIE Jobs ↗](https://www.ziprecruiter.com/Salaries/CCIE-Salary)
- [MPLS in the SDN Era (O'Reilly) ↗](https://www.oreilly.com/library/view/mpls-in-the/9781492052692/)
- [Service Provider Network Architecture ↗](https://www.amazon.com/Service-Provider-Network-Architecture-McGraw-Hill/dp/0071811915)
- [Hays UK Salary Guide ↗](https://www.hays.co.uk/)
- [IT Jobs Watch ↗](https://www.itjobswatch.co.uk/)
- [Pnet ZA Salary Data ↗](https://www.pnet.co.za/)

---

*Last verified: 2026-05-01*
*Parent ecosystem: [Cisco Ecosystem](../../Vendors/Cisco_Vendor_Overview.md)*
*Parent domain: [Networking](../../Domains/Networking.md)*
*Vendor overview: [Cisco Vendor Overview](../../Vendors/Cisco_Vendor_Overview.md)*
