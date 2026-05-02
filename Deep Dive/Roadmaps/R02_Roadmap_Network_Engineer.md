---
title: "Network Engineer Career Roadmap"
slug: "network-engineer"
code: "R02"
kind: "roadmap"
lastUpdated: "2026-04-01"
vendors: []
tags: ["networking", "network-engineer", "career-roadmap"]
---

# R02: Network Engineer Career Roadmap
## NOC Technician → Network Engineer → Senior Network Engineer → Network Architect / CCIE Expert

**Last updated:** April 2026  
**Scope:** 4-level career progression covering entry, associate, professional, and expert stages.  
**Focus:** Cisco-primary path with Juniper, Aruba, and Arista alternatives noted at each level.

---

## TABLE OF CONTENTS
1. [ENTRY LEVEL (0–2 yrs): NOC Technician / Junior Network Tech](#entry)
2. [ASSOCIATE (2–5 yrs): Network Engineer](#associate)
3. [PROFESSIONAL (5–8 yrs): Senior Network Engineer](#professional)
4. [EXPERT (8+ yrs): Network Architect / CCIE](#expert)
5. [Lateral Pivots & Transitions](#lateral)
6. [Salary Progression](#salary)
7. [Free & Paid Learning Resources](#learning)
8. [Recommended Books](#books)
9. [YouTube Channels & Podcasts](#youtube)
10. [Sources](#sources)

---

## <a name="entry"></a>ENTRY LEVEL (0–2 yrs): NOC Technician / Junior Network Tech

### Day-in-the-Life

You're supporting network operations in a data center, hosting facility, or enterprise NOC (Network Operations Center). Your day includes:

- **Morning standup:** Review ticket queue (outages, performance alerts, provisioning requests).
- **Hands-on:** Cable pulls, fiber termination, optical power meter readings, switch/router port verification.
- **Documentation:** Updating network inventory, visio diagrams, cable management logs.
- **Troubleshooting:** Following escalation runbooks for layer 1/2 issues (link down, VLAN problems, spanning tree).
- **Learning:** Reading RFCs, studying BGP/OSPF basics, watching lab walkthroughs on your own time.
- **Incident response:** Page duty rotation; responding to alerts (CPU spikes, interface errors).

### Required Skills

- **OSI Model & Fundamentals:** Deep understanding of layers 1–7; data flow across TCP/IP stack.
- **Subnetting & IPv4/IPv6:** CIDR notation, VLSM, address planning, IPv6 address types, link-local, ULA, multicast.
- **Cabling & Physical Media:** Fiber (single-mode, multi-mode, connectors), copper (Cat5e, Cat6, Cat6A), power budgets, attenuation.
- **Switching Basics:** VLAN concepts, trunks, port security, port-channel (LAG), Spanning Tree Protocol (RSTP/MSTP).
- **Routing Basics:** Static routing, distance-vector vs. path-vector concepts, intro to OSPF/EIGRP/BGP.
- **Network Tools:** Ping, traceroute, netstat, ifconfig, packet analysis (Wireshark), SNMP basics.
- **Device Configuration:** Console access, SSH, SNMP community strings, syslog, NTP.

### CERTIFICATIONS

| Cert | Code | Vendor | Duration | Cost (USD) | Status | URL |
|------|------|--------|----------|-----------|--------|-----|
| **CompTIA Network+** | N10-009 | CompTIA | 90 min, 90 Q | ~$370 | Active (retires 2027) | https://www.comptia.org/en-us/certifications/network/ |
| **Cisco CCST Networking** | 100-150 | Cisco | 90 min, 65 Q | ~$165 | Active | https://www.cisco.com/site/us/en/learn/training-certifications/exams/ccst-networking.html |
| **Juniper JNCIA-Junos** | JN0-105 | HPE Juniper | 90 min, 65 Q | ~$200 | Active | https://www.juniper.net/us/en/training/certification/tracks/junos/jncia-junos.html |
| **Aruba ACA-Switching** | HPE6-A86 | HPE Aruba | 90 min, 60 Q (75% pass) | $260 | Active | https://certification-learning.hpe.com/tr/datacard/exam/HPE6-A86 |
| **Arista ACE-Associate** | ACE-A | Arista | Online proctored | Varies | Active | https://www.training.arista.com/ |

### RATIONALE FOR EACH

- **CompTIA Network+ (N10-009):** Vendor-neutral foundation. Covers OSI model, TCP/IP, DNS, DHCP, VPN, wireless, infrastructure, security basics. Entry ticket for many enterprises and MSPs. Passing score: 720/900. Recommend as first cert if coming from non-tech background.

- **Cisco CCST Networking (100-150):** Cisco's entry cert (launched 2023). Covers networking fundamentals with hands-on labs. Good stepping stone to CCNA. Much cheaper than CCNA and less time-intensive. Recommended if pursuing Cisco track.

- **Juniper JNCIA-Junos (JN0-105):** Parallel to Cisco for Juniper ecosystem. Covers Junos OS basics, configuration, troubleshooting. Free training available via Juniper Open Learning; 75% voucher discount common. Highly relevant if your org standardizes on Juniper (many service providers, some enterprises).

- **Aruba ACA-Switching (HPE6-A86):** HPE Aruba campus switching focus. Good alternative if Aruba is your org's primary vendor. Covers OS-CX switching, VLANs, QoS, access control. Increasingly popular post-HPE acquisition (July 2025).

- **Arista ACE-Associate (ACE-A):** Focus for data center networks using Arista. Less common than Cisco in traditional enterprise, but growing in cloud-native and DC roles. Free online training via Arista Academy.

### FREE LEARNING

- **[Jeremy's IT Lab — YouTube](https://www.youtube.com/@JeremysITLab):** Entire free CCNA 200-301 course (covers much of N+). Highly rated by the community. ~40 hours video.
- **[Cisco Networking Academy](https://www.netacad.com/):** Free "Introduction to Networks" and "Networking Essentials" courses. Good foundation before paid training.
- **[Juniper Open Learning](https://learningportal.juniper.net/juniper/user_activity_info.aspx?id=MKTG-OPEN-LEARN):** Free self-paced Junos fundamentals labs and videos. 75% exam voucher often bundled.
- **[David Bombal — YouTube](https://www.youtube.com/@davidbombal):** Free networking fundamentals, subnet practice, packet tracer labs.
- **[Cisco Packet Tracer](https://www.netacad.com/courses/packet-tracer):** Free simulator. Essential for hands-on practice without expensive hardware.
- **Labs & Practice:** GNS3 (open-source emulator), EVE-NG (multi-vendor), Cisco DevNet Sandbox (live lab environments).

### SALARY (2026)

| Region | Role | Low | High | Source |
|--------|------|-----|------|--------|
| **USA** | NOC Tech / Junior Network Tech | $50K | $70K | Robert Half, Bureau of Labor Statistics |
| **UK** | Junior Network Tech | £28K | £38K | Robert Half UK |
| **South Africa** | Junior Network Tech | R250K | R380K (ZAR) | PayScale ZA |

---

## <a name="associate"></a>ASSOCIATE (2–5 yrs): Network Engineer

### Day-in-the-Life

You're now owning network projects end-to-end: provisioning new circuits, designing VLAN schemes, troubleshooting performance issues, and documenting changes.

- **Project ownership:** New branch circuit, MPLS migration, wireless deployment. You own the design doc, testing plan, runbook.
- **Troubleshooting:** Syslog analysis, Wireshark packet captures, BGP/OSPF neighbor debugging.
- **ACL & QoS:** Writing access control lists, shaping traffic, prioritizing VoIP / video over best-effort.
- **Wireless:** Understanding 802.11 frame types, roaming, fast-handoff, rogue AP detection.
- **Documentation:** Topology diagrams (Visio/Lucidchart), change logs, runbooks, RFCs.
- **On-call:** Single-page duty for critical infrastructure (usually 1-in-4 or 1-in-6 rotation).

### Required Skills

- **Dynamic Routing (OSPF, EIGRP):** Multi-area OSPF, EIGRP metric calc, neighbor relationships, passive interfaces, summarization.
- **BGP Fundamentals:** AS numbers, eBGP vs. iBGP, route advertisements, basic best-path selection, community strings.
- **VLAN Management:** Trunks, VTP (or VTP-free design), STP/RSTP/MSTP, VLAN hopping attacks.
- **Access Control Lists (ACLs):** Standard, extended, named ACLs, wildcard masks, TCP/UDP ports, permit/deny logic.
- **Wireless Protocols:** 802.11a/b/g/n/ac/ax basics, frequency bands, channels, SSID broadcast, WPA/WPA3 encryption, roaming.
- **Network Management:** SNMP v1/v2c/v3, syslog, NetFlow / sFlow, NTP, logging, remote access (Telnet → SSH).
- **Monitoring Tools:** Nagios, Zabbix, SolarWinds (basic), PRTG (basic).
- **Change Management:** CAB processes, change tickets, pre-change verification, post-change validation.

### CERTIFICATIONS

| Cert | Code | Vendor | Duration | Cost (USD) | Status | URL |
|------|------|--------|----------|-----------|--------|-----|
| **Cisco CCNA** | 200-301 v1.1 | Cisco | 120 min, 60 Q | ~$330 | Active | https://www.cisco.com/site/us/en/learn/training-certifications/exams/current-list/ccna-200-301.html |
| **Juniper JNCIS-ENT** | JN0-411 | HPE Juniper | 120 min, 65 Q | ~$250 | Active | https://www.juniper.net/us/en/training/certification/tracks/enterprise-routing-switching/jncis-ent.html |
| **Juniper JNCIS-SP** | JN0-412 | HPE Juniper | 120 min, 65 Q | ~$250 | Active | https://www.juniper.net/us/en/training/certification/tracks/service-provider-routing-switching/jncis-sp.html |
| **Aruba ACP Campus Access** | HPE6-A87 | HPE Aruba | 90 min, 60 Q (75% pass) | $260 | Active | https://certification-learning.hpe.com/tr/datacard/exam/HPE6-A87 |
| **Arista ACE-Professional** | ACE-P | Arista | Online proctored | Varies | Active | https://www.training.arista.com/ |
| **CWNA** | CWNA-109 | CWNP | 90 min, 60 Q | $275 | Active | https://www.cwnp.com/certifications/cwna |

### RATIONALE FOR EACH

- **Cisco CCNA (200-301 v1.1):** Industry flagship for network engineers. Covers routing (OSPF, EIGRP, BGP intro), switching (VLANs, STP, port channels), ACLs, NAT, QoS, wireless, network management. Passing score: 825/1000. Widely recognized; most enterprises require it. Two-exam option available (split into CCNA Core + one concentration).

- **Juniper JNCIS-ENT / JNCIS-SP:** Parallel to CCNA. Choose ENT if your organization focuses on enterprise campus networks; SP for service provider (carrier) environments. Both cover Junos OS, routing protocols, VLANs, security policies, troubleshooting.

- **Aruba ACP Campus Access (HPE6-A87):** For Aruba-heavy environments. Covers ClearPass (identity), AOS-Switch (switching), Unified Wired/Wireless, mobility anchors, guest networks.

- **Arista ACE-Professional (ACE-P):** Data center focus. If your career is heading toward DC/cloud, this is valuable. Arista dominates big cloud and many DC deployments.

- **CWNA (CWNP-109):** Wireless foundational cert. Covers 802.11 fundamentals, RF principles, site surveys, security, troubleshooting. Vendor-neutral; essential if wireless is a significant part of your role.

### FREE LEARNING

- **[Jeremy's IT Lab — CCNA Full Course](https://www.youtube.com/@JeremysITLab):** Complete CCNA 200-301 videos, plus bonus content. Packet Tracer labs included.
- **[Cisco Networking Academy — CCNA](https://www.netacad.com/):** Full CCNA curriculum, free or $49/mo for labs.
- **[Juniper Open Learning](https://learningportal.juniper.net/):** Free JNCIS-ENT and JNCIS-SP study materials.
- **[INE YouTube — Free Sections](https://www.youtube.com/user/inetdatraining):** Clips from paid courses; good for supplementing.
- **[Cisco DevNet Sandbox](https://developer.cisco.com/sandbox/):** Live lab environments for hands-on experimentation (free, no hardware needed).
- **[GNS3 Labs](https://www.gns3.com/):** Free emulation platform with community topologies.

### PAID LEARNING (RECOMMENDED)

- **[CBT Nuggets](https://www.cbtnuggets.com/):** Videos by network professionals (Keith Barker, etc.). $40–100/mo.
- **[Udemy](https://www.udemy.com/):** Cheap ($10–15 on sale). Good for refresher or budget-conscious study.
- **[Pluralsight](https://www.pluralsight.com/):** Comprehensive; pricier ($35–45/mo). Good library of Cisco/Juniper/Arista content.
- **[Network Lessons (Ali Khatibi)](https://networklessons.com/):** In-depth CCNA/CCNP content, $99–299 course bundles.

### SALARY (2026)

| Region | Role | Low | High | Source |
|--------|------|-----|------|--------|
| **USA** | Network Engineer | $110K | $155K | Robert Half 2026 Salary Guide |
| **UK** | Network Engineer | £52.5K | £70K | Robert Half UK |
| **South Africa** | Network Engineer | R360K | R560K (ZAR) | PayScale ZA |

---

## <a name="professional"></a>PROFESSIONAL (5–8 yrs): Senior Network Engineer / Specialist

### Day-in-the-Life

You're a subject-matter expert (SME) on specific domains: BGP at scale, SD-WAN architecture, wireless design, or network automation. You mentor junior engineers, design complex solutions, and own strategic initiatives.

- **Architecture & Design:** Multi-data center routing design, SD-WAN deployment strategy, MPLS/IP VPN fabric design, wireless controller placement.
- **Advanced Troubleshooting:** BGP convergence issues, inter-protocol redistribution pitfalls, multicast routing, VRF isolation, QoS edge cases.
- **Automation & Programmability:** Python scripts for config management, Ansible playbooks, NETCONF/YANG model exploration, API-driven workflows.
- **Project Leadership:** RFP responses, vendor evaluation (Cisco vs. Juniper vs. Aruba), proof-of-concept labs, change advisory.
- **Performance Engineering:** NetFlow analysis, capacity planning, traffic engineering, TE tunnels.
- **Standards & Research:** Reading drafts, evaluating new protocols (EVPN, segment routing), attending IETF/Nanog.

### Required Skills

- **BGP at Scale:** Confederation, route reflectors, BGP communities, flowspec, graceful restart, BFD, anycast addressing.
- **MPLS & VPNs:** Label distribution (LDP, RSVP-TE), Layer 3 VPNs (VRFv2), traffic engineering, VPLS, Segment Routing (SR).
- **SD-WAN Concepts:** Hub-and-spoke vs. any-to-any, overlay networks, VPN steering, application-aware routing, SASE principles.
- **Network Programmability:** Python for network automation, NETCONF/YANG, JSON/XML parsing, RESTful APIs, IaC (Infrastructure as Code).
- **Wireless at Scale:** Site survey methodology, predictive modeling, controller redundancy, roaming optimization, 802.1X/EAP, mobility anchors.
- **Multicast:** PIM sparse-mode, rendezvous points (RP), IGMP, multicast VPN.
- **Cloud Integration:** AWS VPC peering, Azure Virtual Networks, Google Cloud VPC; hybrid connectivity (Direct Connect, ExpressRoute, Cloud Interconnect).
- **Security on the Network:** DMVPN, site-to-site VPN, IPsec, GRE, access control policy design, DHCP snooping, port security at scale.

### CERTIFICATIONS

| Cert | Code | Vendor | Duration | Cost (USD) | Status | URL |
|------|------|--------|----------|-----------|--------|-----|
| **Cisco CCNP Enterprise (Core)** | 350-401 ENCOR v1.2 | Cisco | 120 min, 90 Q | ~$330 | Active (v1.2 March 2026) | https://www.cisco.com/site/us/en/learn/training-certifications/exams/encor.html |
| **Cisco CCNP Enterprise Concentration (pick 1)** | | Cisco | | | | |
| — Routing & Services | 300-410 ENARSI | Cisco | 90 min, 60 Q | ~$330 | Active | https://www.cisco.com/site/us/en/learn/training-certifications/exams/enarsi.html |
| — SD-WAN Implementation | 300-415 ENSDWI | Cisco | 90 min, 60 Q | ~$330 | Active | https://www.cisco.com/site/us/en/learn/training-certifications/exams/ensdwi.html |
| — Enterprise Network Design | 300-420 ENSLD | Cisco | 90 min, 60 Q | ~$330 | Active | https://www.cisco.com/site/us/en/learn/training-certifications/exams/ensld.html |
| — Wireless LAN Design | 300-425 ENWLSD | Cisco | 90 min, 60 Q | ~$330 | Active | https://www.cisco.com/site/us/en/learn/training-certifications/exams/enwlsd.html |
| — Wireless LAN Implementation | 300-430 ENWLSI | Cisco | 90 min, 60 Q | ~$330 | Active | https://www.cisco.com/site/us/en/learn/training-certifications/exams/enwlsi.html |
| — Automation & Orchestration | 300-435 ENAUTO | Cisco | 90 min, 60 Q | ~$330 | Active (rebrand from DevNet Feb 2026) | https://www.cisco.com/site/us/en/learn/training-certifications/exams/enauto.html |
| **Juniper JNCIP-ENT** | JN0-660 | HPE Juniper | 120 min, 65 Q | ~$280 | Active | https://www.juniper.net/us/en/training/certification/tracks/enterprise-routing-switching/jncip-ent.html |
| **Juniper JNCIP-SP** | JN0-664 | HPE Juniper | 120 min, 65 Q | ~$280 | Active | https://www.juniper.net/us/en/training/certification/tracks/service-provider-routing-switching/jncip-sp.html |
| **Aruba ACMX Mobility Specialist** | HPE6-A86 + exam | HPE Aruba | Varies | Varies | Active | https://certification-learning.hpe.com/ |
| **Arista ACE-L5 Professional** | ACE-L5 | Arista | Online | Varies | Active | https://www.training.arista.com/ |
| **CWSP / CWDP / CWAP** | Wireless specialty | CWNP | Varies | $275 each | Active | https://www.cwnp.com/certifications/ |
| **AWS Advanced Networking Specialty** | ANS-C01 | AWS | 170 min, 65 Q (50 scored) | ~$150 | Active | https://aws.amazon.com/certification/certified-advanced-networking-specialty/ |
| **HPE Aruba EdgeConnect ACSDP** | ACSDP | HPE Aruba | Varies | Varies | Active | https://certification-learning.hpe.com/ |
| **Cisco Catalyst SD-WAN ENSDWI** | 300-415 | Cisco | 90 min, 60 Q | ~$330 | Active | https://www.cisco.com/site/us/en/learn/training-certifications/exams/ensdwi.html |

### RATIONALE FOR EACH

- **CCNP Enterprise (350-401 ENCOR v1.2 + concentration):** Industry-leading professional cert. ENCOR v1.2 launched March 19, 2026, removing wireless content from the core exam. Choose a concentration based on your specialization:
  - **ENARSI (300-410):** Advanced routing and services (BGP, MPLS, traffic engineering). Pick this if you're a routing specialist.
  - **ENSDWI (300-415):** SD-WAN focus. Pick if SD-WAN is your specialization (growing segment).
  - **ENSLD (300-420):** Network design methodology and best practices. Pick if you're moving toward architecture roles.
  - **ENWLSD / ENWLSI (300-425 / 300-430):** Wireless design and implementation. Pick if wireless is your domain.
  - **ENAUTO (300-435):** Network automation and orchestration. **Note:** Rebranded from "DevNet" on Feb 3, 2026 (AUTOCOR → ENAUTO). Pick if you're coding Python, Ansible, NSO.

- **JNCIP-ENT / JNCIP-SP:** Professional-level Juniper certs. Choose based on environment (enterprise campus vs. service provider).

- **Aruba ACMX, Arista ACE-L5:** Vendor-specific professional certs. Pick if your organization is Aruba or Arista-heavy.

- **CWSP / CWDP / CWAP:** Wireless specialty suite. CWSP (Site Survey), CWDP (Design), CWAP (Analysis). More granular than CWNA. Good if wireless is a core focus.

- **AWS ANS-C01:** If you're architecting hybrid or cloud-native networks. Required for AWS Solutions Architect - Professional path. Strong signal for cloud-forward roles.

- **HPE Aruba EdgeConnect ACSDP:** SD-WAN specific (Aruba EdgeConnect). Good complement to ENSDWI if Aruba is your vendor.

### FREE LEARNING

- **[INE All-Access Sample Videos](https://www.youtube.com/user/inetdatraining):** Some free clips; full library requires subscription.
- **[Cisco U Learning Network](https://learningnetwork.cisco.com/):** Community forum + some free study materials.
- **[Juniper Open Learning](https://learningportal.juniper.net/):** Free JNCIP labs and docs.
- **[Network Collective Podcast](https://www.thenetworkcollective.com/):** Free podcast on advanced topics (BGP, SD-WAN, etc.).
- **[ipspace.net Articles](https://ipspace.net/):** Ivan Pepelnjak's deep-dive articles (some free, most $99–299/year).
- **[Cisco DevNet Advanced Labs](https://developer.cisco.com/sandbox/):** Free hands-on labs for Cisco IOS-XE, NSO, Tetration.

### PAID LEARNING (RECOMMENDED)

- **[INE All-Access](https://www.ine.com/):** Best-in-class CCNP content. ~$60–80/mo or $599–799/year.
- **[CBT Nuggets CCNP track](https://www.cbtnuggets.com/):** Video-based, instructor-led feel. ~$50–100/mo.
- **[Pluralsight Enterprise track](https://www.pluralsight.com/):** Comprehensive; includes labs. ~$35–45/mo.
- **[Cisco U (CiscoU.learning)](https://u.cisco.com/):** Official Cisco training; pricier ($200–500 per course) but highest authority.
- **[A Cloud Guru / Linux Academy (Pluralsight)](https://www.pluralsight.com/):** AWS / cloud networking track.
- **[Udemy + specific instructor courses](https://www.udemy.com/):** Budget option; quality varies. $10–15 on sale.

### SALARY (2026)

| Region | Role | Low | High | Source |
|--------|------|-----|------|--------|
| **USA** | Senior Network Engineer / Specialist | $140K | $200K | Robert Half, Glassdoor |
| **UK** | Senior Network Engineer | £70K | £95K | Robert Half UK |
| **South Africa** | Senior Network Engineer | R500K | R800K (ZAR) | PayScale ZA |

---

## <a name="expert"></a>EXPERT (8+ yrs): Network Architect / CCIE

### Day-in-the-Life

You're the technical authority on enterprise network strategy. You're designing multi-billion-packet-per-second fabrics, architecting cloud interconnect strategies, evaluating vendors at the board level, and mentoring directors.

- **Strategic Design:** Global network architecture (data center, branch, cloud), vendor RFP evaluation, long-term roadmap.
- **CCIE Lab Study / Teaching:** If pursuing CCIE, intensive lab study (8+ hrs/week); mentoring others; discussing edge-case architectures.
- **Vendor Relationships:** Quarterly business reviews (QBRs) with Cisco, Juniper, Aruba account teams; early access to new products.
- **Standards Body Participation:** Attending IETF, NANOG, attending WG meetings, commenting on RFCs.
- **Cross-Functional Leadership:** Working with security, cloud, application teams to resolve infrastructure gaps.
- **Research & Innovation:** POCs for new tech (segment routing, AltFor, P4), evaluating open-source (FRR, BIRD, VyOS).

### Required Skills

- **All prior level skills** + the following:
- **CCIE-level depth:** Design methodologies, trade-offs, cutting-edge routing (segment routing, EVPN), multicast at scale.
- **Cloud Integration at Enterprise Scale:** AWS Direct Connect + multiple regions, Azure ExpressRoute + global reach, GCP Interconnect, multicloud routing.
- **Network Design Methodology:** Cisco Enterprise Architecture (SDA, ISE, Secure Fabric), Juniper Contrail, Arista EOS design patterns.
- **Intent-Based Networking (IBN):** Cisco Catalyst Center (formerly DNA Center), Juniper Contrail Insights, Arista CloudVision for intent-driven networks.
- **Vendor Evaluation:** RFP requirements, CapEx/OpEx analysis, TCO modeling, end-of-life planning.
- **Policy & Compliance:** Service provider SLAs, regulatory network isolation (HIPAA, PCI, SOX), zero-trust architecture.
- **Cross-Domain Knowledge:** Storage networks (SAN/NAS), virtualization (VMware vSAN, Hyper-V), containerization (Kubernetes networking, Istio service mesh).

### CERTIFICATIONS

| Cert | Code | Vendor | Duration | Cost (USD) | Status | URL |
|------|------|--------|----------|-----------|--------|-----|
| **Cisco CCIE Enterprise Infrastructure (Lab)** | — | Cisco | 8 hours | ~$600 per attempt | Active (v1.1) | https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccie-enterprise-infrastructure/exams-and-training.html |
| **Cisco CCIE Enterprise Infrastructure (Written)** | 350-401 ENCOR v1.2 | Cisco | 120 min | ~$330 | Active | https://www.cisco.com/site/us/en/learn/training-certifications/exams/encor.html |
| **Cisco CCIE Service Provider (Lab)** | — | Cisco | 8 hours | ~$600 per attempt | Active | https://www.cisco.com/site/us/en/learn/training-certifications/certifications/service-provider/ccie-service-provider/exams-and-training.html |
| **Cisco CCIE Data Center (Lab)** | — | Cisco | 8 hours | ~$600 per attempt | Active | https://www.cisco.com/site/us/en/learn/training-certifications/certifications/data-center/ccie-data-center/exams-and-training.html |
| **Cisco CCIE Security (Lab)** | — | Cisco | 8 hours | ~$600 per attempt | Active | https://www.cisco.com/site/us/en/learn/training-certifications/certifications/security/ccie-security/exams-and-training.html |
| **Cisco CCDE (Design Expert)** | 400-007 v3.0 (written) | Cisco | 120 min | ~$330 | Active; CCDE Specialist badge (no lab) launched 2025 | https://www.cisco.com/site/us/en/learn/training-certifications/certifications/design/ccde/index.html |
| **Cisco CCDE Specialist Badge** | 352-001 | Cisco | 120 min | ~$330 | New (2025) | https://www.cisco.com/site/us/en/learn/training-certifications/certifications/design/ccde/index.html |
| **Juniper JNCIE-ENT** | — | HPE Juniper | 4 hours (written) + practical | ~$400 | Active | https://www.juniper.net/us/en/training/certification/tracks/enterprise-routing-switching/jncie-ent.html |
| **Juniper JNCIE-SP** | — | HPE Juniper | 4 hours (written) + practical | ~$400 | Active | https://www.juniper.net/us/en/training/certification/tracks/service-provider-routing-switching/jncie-sp.html |
| **Juniper JNCIE-DC** | — | HPE Juniper | 4 hours (written) + practical | ~$400 | Active | https://www.juniper.net/us/en/training/certification/tracks/data-center/jncie-dc.html |
| **Arista ACE-L7 Expert** | ACE-L7 | Arista | Varies | Varies | Active | https://www.training.arista.com/ |
| **Aruba ACE (Enterprise)** | ACEE | HPE Aruba | Varies | Varies | Active | https://certification-learning.hpe.com/ |
| **CWNE (Certified Wireless Network Expert)** | CWNE | CWNP | Practical, oral exam | ~$600–1200 | Active (often called "CCIE of wireless") | https://www.cwnp.com/certifications/cwne/ |
| **AWS Advanced Networking Specialty** | ANS-C01 | AWS | 170 min | ~$150 | Active | https://aws.amazon.com/certification/certified-advanced-networking-specialty/ |
| **Microsoft Azure Network Engineer Expert** | AZ-700 | Microsoft | 100 min, 55 Q | ~$165 | Active | https://learn.microsoft.com/en-us/credentials/certifications/azure-network-engineer-associate/ |
| **TOGAF Practitioner** | TOGAF 9 | Open Group | 80 min, 40 Q | ~$150 | Active; recommended for enterprise architects | https://www.opengroup.org/togaf |

### RATIONALE FOR EACH

- **Cisco CCIE Enterprise Infrastructure (Lab + Written):** Industry's premier networking credential. The 8-hour lab requires deep hands-on knowledge of designing, deploying, and troubleshooting complex enterprise networks (dual-stack, virtualization, security, automation). Candidates must pass ENCOR v1.2 written first. Passing rate ~30–40%. Gold standard for network architects.

- **Cisco CCIE Alternatives (Service Provider, Data Center, Security):** Pick based on specialization. Service Provider track if you work for Tier-1 carriers; Data Center if you architect hyperscaler-like environments; Security if network security is your focus.

- **Cisco CCDE (Design Expert):** Written exam focusing on network design methodology, rather than hands-on troubleshooting. **New in 2025:** CCDE Specialist badge (352-001 exam, no lab required). Faster alternative to full CCIE if design is your strength.

- **Juniper JNCIE (ENT/SP/DC):** Parallel to CCIE. Covers Junos OS at expert level. Practical exam required. Good alternative if Juniper is your vendor of choice.

- **Arista ACE-L7, Aruba ACE:** Vendor-specific expert certs. Pick if you're architecting on those platforms exclusively.

- **CWNE (Certified Wireless Network Expert):** Often called "CCIE of wireless." Includes practical lab and oral exam. Most rigorous wireless cert available. If wireless is a core domain, this is prestigious.

- **AWS ANS-C01 + Microsoft AZ-700:** Increasingly expected for cloud-forward architects. AWS is de facto standard; Azure growing in enterprise. Cloud network certs are becoming as important as CCIE for modern architects.

- **TOGAF Practitioner:** Not network-specific, but valuable if you're moving toward enterprise architect (EA) roles spanning infrastructure, applications, and governance. Level 1 (Practitioner) easier than Level 2 (Chartered).

### FREE LEARNING

- **[IETF Datatracker + RFCs](https://datatracker.ietf.org/):** Free access to all Internet standards. Essential reading for experts.
- **[Network Collective Podcast](https://www.thenetworkcollective.com/):** Deep-dive discussions on cutting-edge topics.
- **[ipspace.net Articles](https://ipspace.net/):** Ivan Pepelnjak's research; many free articles on advanced topics.
- **[Cisco Live On-Demand](https://ciscolive.com/):** Many session videos free after conference ends (some behind login).
- **[Juniper vLabs](https://learningportal.juniper.net/):** Some free labs; most require membership.

### PAID LEARNING (RECOMMENDED)

- **[INE CCIE Bootcamp](https://www.ine.com/):** 4–5 day intensive; or self-paced CCIE 6-month track. $3000–5000.
- **[IPexpert (now merged with INE)](https://www.ine.com/):** Historically strong CCIE prep; now part of INE.
- **[GNS3 Academy CCIE Labs](https://academy.gns3.com/):** Pre-built topologies for lab study.
- **[Cisco DevNet Expert Track](https://developer.cisco.com/certification/devnet-expert/):** If automation/programmability is focus (being rebranded to CCIE Automation).
- **[Cloud-specific training](https://www.pluralsight.com/):** Pluralsight or Linux Academy for AWS/Azure networking depth.

### SALARY (2026)

| Region | Role | Low | High | Source |
|--------|------|-----|------|--------|
| **USA** | Network Architect (CCIE-level) | $180K | $250K | ZipRecruiter, Glassdoor, CCIE Salary guides |
| **USA** | CCIE (principal engineer / director level) | $200K | $300K+ | ZipRecruiter 2026, senior level reports |
| **UK** | Network Architect | £95K | £140K | Robert Half UK |
| **South Africa** | Network Architect / Principal Engineer | R750K | R1.2M (ZAR) | PayScale ZA, local market data |

---

## <a name="lateral"></a>LATERAL PIVOTS & TRANSITIONS

### Network Engineer → Cloud Network Engineer (HIGHEST OPPORTUNITY)

**Transition Timeline:** 12–18 months  
**Why:** Cloud networking is severely under-staffed. Hyper-scalers (AWS, Azure, GCP), enterprises migrating to cloud, and managed service providers all desperately need people who understand VPCs, peering, hybrid connectivity, and cloud-native networking.

**Path:**
1. Obtain **AWS ANS-C01** or **Microsoft AZ-700** (or both).
2. Deploy and troubleshoot a hybrid network POC (AWS Direct Connect + on-prem, or Azure ExpressRoute).
3. Get 6–12 months hands-on cloud infrastructure experience (AWS, Azure, or GCP).
4. Transition to "Cloud Infrastructure Engineer" or "Cloud Network Engineer" title.

**Salary Jump:** +$20K–$40K in US (cloud networking commands premium).  
**Key Resources:**
- [AWS ANS-C01 training](https://aws.amazon.com/certification/certified-advanced-networking-specialty/)
- [Azure AZ-700 training](https://learn.microsoft.com/en-us/credentials/certifications/azure-network-engineer-associate/)
- [Linux Academy / A Cloud Guru networking tracks](https://www.pluralsight.com/)

---

### Network Engineer → Network Security Engineer

**Transition Timeline:** 12–24 months  
**Why:** Security remains a top IT investment. Network security engineers command 10–15% salary premium over general network engineers.

**Path:**
1. Gain hands-on with firewall platforms: **Palo Alto Networks PCNSE** or **Fortinet NSE** or **Check Point CCSK**.
2. Learn VPN, DLP (data loss prevention), intrusion prevention, threat hunting.
3. Transition to "Network Security Engineer" or "Senior Security Operations Engineer."

**Key Certifications:**
- **Palo Alto Networks Certified Network Security Engineer (PCNSE):** [paloaltonetworks.com/training](https://www.paloaltonetworks.com/training)
- **Fortinet Network Security Expert (NSE):** [fortinet.com/training](https://www.fortinet.com/training-certification)
- **Check Point Certified Security Administrator (CCSA) + Engineer (CCSE):** [checkpoint.com](https://www.checkpoint.com/training)

**Salary Bump:** +$15K–$30K (security premium).

---

### Senior Network Engineer → SD-WAN / SASE Architect

**Transition Timeline:** 12–18 months  
**Why:** Software-defined WAN is replacing MPLS in many enterprises. SASE (Secure Access Service Edge) is the next evolution.

**Path:**
1. Master **Cisco 300-415 ENSDWI** or vendor alternative (Aruba EdgeConnect, Versa Networks, Fortinet).
2. Deploy 2–3 SD-WAN POCs with real customer traffic.
3. Learn SASE principles (zero-trust, cloud security, optimized routing).
4. Pivot to "SD-WAN Architect" or "SASE Solutions Architect."

**Key Certifications:**
- **Cisco ENSDWI (300-415):** [cisco.com](https://www.cisco.com/site/us/en/learn/training-certifications/exams/ensdwi.html)
- **Versa VCSP (SD-WAN specialist):** [versa-networks.com](https://www.versa-networks.com/training)
- **Fortinet FortiGate SD-WAN:** [fortinet.com](https://www.fortinet.com/training-certification)

**Salary Potential:** $170K–$250K (specialist premium).

---

### Network Engineer → Solutions Architect

**Transition Timeline:** 18–24 months  
**Why:** Solutions architects earn 20–30% more and work on customer-facing strategic projects. Requires deeper design, communication, and business skills.

**Path:**
1. Gain **CCNP or equivalent** certification.
2. Lead 3–5 major customer projects (design through implementation).
3. Develop RFP, TCO, and architecture documentation skills.
4. Transition to "Network Solutions Architect" or "Pre-Sales Solutions Engineer."

**Key Skills:**
- Business case development, ROI analysis.
- Customer communication and presentation.
- Design thinking and risk mitigation.
- Vendor partnership management.

**Salary Bump:** +$30K–$50K.

---

### Senior Network Engineer → Network Architect / CTO Track

**Transition Timeline:** 2–3 years  
**Why:** Network architects shape organizational infrastructure strategy and command executive-level compensation.

**Path:**
1. Obtain **CCIE** or **Juniper JNCIE** or **CCDE**.
2. Lead cross-functional infrastructure initiatives (cloud migration, network modernization).
3. Develop vendor evaluation and strategic planning skills.
4. Transition to "Principal Architect," "Director of Network Engineering," or "VP of Infrastructure."

**Key Competencies:**
- Board-level communication.
- Long-range (3–5 year) infrastructure planning.
- Vendor management and contract negotiation.
- Budget and capital planning.

**Salary Potential:** $250K–$400K+ (depending on company size and equity).

---

## <a name="salary"></a>SALARY PROGRESSION BY EXPERIENCE & REGION

### United States

| Level | Role | Entry (0–2 yrs) | Mid (2–5 yrs) | Senior (5–8 yrs) | Expert (8+ yrs) |
|-------|------|-----------------|---------------|------------------|-----------------|
| Median Salary | | $50K–$70K | $110K–$155K | $140K–$200K | $200K–$300K+ |
| With CCIE / JNCIE | | — | — | $160K–$220K | $250K–$350K+ |

**Source:** [Robert Half 2026 Salary Guide](https://www.roberthalf.com/us/en/insights/salary-guide), [ZipRecruiter CCIE salary data](https://www.ziprecruiter.com/Salaries/Ccie-Salary), [Glassdoor](https://www.glassdoor.com/)

**Notes:**
- Cisco CCNA adds ~$10K–$15K over Network+ alone.
- CCNP adds ~$20K–$30K over CCNA.
- CCIE adds ~$60K–$100K+ (if principal/architect level).
- Cloud certs (ANS-C01, AZ-700) add ~$15K–$40K for cloud-focused roles.
- Location matters: San Francisco Bay Area, NYC, Seattle pay 30–40% above average.
- Security specialization adds 10–15% premium.

---

### United Kingdom

| Level | Role | Entry (0–2 yrs) | Mid (2–5 yrs) | Senior (5–8 yrs) | Expert (8+ yrs) |
|-------|------|-----------------|---------------|------------------|-----------------|
| Median Salary | | £28K–£38K | £52.5K–£70K | £70K–£95K | £95K–£140K |
| London Premium | | +£5K–£10K | +£20K–£25K | +£25K–£50K | +£40K–£75K |

**Source:** [Robert Half UK 2026 Salary Guide](https://www.roberthalf.com/gb/en/)

**Notes:**
- London salaries are 30–50% higher than provincial UK.
- CCNA/CCNP add 10–15% premium.
- CCIE adds 30–50% premium (rare, highly sought).
- Contract roles pay 20–30% more hourly but fewer benefits.

---

### South Africa

| Level | Role | Entry (0–2 yrs) | Mid (2–5 yrs) | Senior (5–8 yrs) | Expert (8+ yrs) |
|-------|------|-----------------|---------------|------------------|-----------------|
| Median Salary (ZAR) | | R250K–R380K | R360K–R560K | R500K–R800K | R750K–R1.2M |
| USD Equivalent* | | $13.5K–$20.5K | $19.4K–$30K | $27K–$43K | $40K–$65K |

**Source:** [PayScale ZA](https://www.payscale.com/research/ZA/), [Jobted.co.za](https://www.jobted.co.za/)

*USD conversion at ~R18.5/USD (April 2026 indicative rate)

**Notes:**
- Johannesburg and Cape Town pay 10–20% above national average.
- CCNA adds 8–12% salary lift.
- CCNP adds 15–25%.
- CCIE holders are rare in ZA; estimated +40–60% premium if available.
- Consulting / contract work pays 25–40% premium over permanent roles.
- Remittance to diaspora (US/UK) common for high-earning engineers.

---

## <a name="learning"></a>FREE & PAID LEARNING RESOURCES

### Free Learning Platforms

| Resource | URL | Content | Best For |
|----------|-----|---------|----------|
| **Jeremy's IT Lab** | https://www.youtube.com/@JeremysITLab | Full CCNA course (40+ hrs), CCNP clips | CCNA entry, Cisco pathway |
| **Cisco Networking Academy** | https://www.netacad.com/ | Intro to Networks, Essentials (free) | Absolute beginners |
| **Juniper Open Learning** | https://learningportal.juniper.net/ | Self-paced Junos fundamentals, labs | Juniper entry & JNCIS prep |
| **David Bombal (YouTube)** | https://www.youtube.com/c/davidbombal | Networking fundamentals, subnetting | Foundations, hands-on practice |
| **Cisco DevNet Sandbox** | https://developer.cisco.com/sandbox/ | Live lab environments (no hardware needed) | Hands-on automation, API testing |
| **GNS3** | https://www.gns3.com/ | Network emulator + community labs | Lab topologies, CCNP study |
| **Cisco Packet Tracer** | https://www.netacad.com/courses/packet-tracer | Cisco's built-in simulator | Hands-on switching/routing |
| **Network Collective Podcast** | https://www.thenetworkcollective.com/ | Advanced networking discussions | BGP, SD-WAN, design topics |
| **ipspace.net (free articles)** | https://ipspace.net/ | Ivan Pepelnjak's blog & research | Deep technical articles |
| **CWNP (free materials)** | https://www.cwnp.com/ | CWNA study guide PDFs (partial) | Wireless foundations |

### Paid Learning Platforms (Recommended)

| Platform | URL | Cost | Content | Best For |
|----------|-----|------|---------|----------|
| **INE** | https://www.ine.com/ | $60–$80/mo or $599–$799/yr | CCNP, CCIE, JNCIE bootcamps | Professional → Expert |
| **CBT Nuggets** | https://www.cbtnuggets.com/ | $40–$100/mo | Video courses by network pros | Visual learners, all levels |
| **Pluralsight** | https://www.pluralsight.com/ | $35–$45/mo | CCNA, CCNP, cloud networking | Comprehensive library |
| **Udemy** | https://www.udemy.com/ | $10–$15 (usually on sale) | Budget-friendly courses | Supplementary learning |
| **Network Lessons (Ali Khatibi)** | https://networklessons.com/ | $99–$299 (course bundles) | In-depth CCNA/CCNP | Intermediate focus |
| **Cisco U** | https://u.cisco.com/ | $200–$500 per course | Official Cisco training | Highest authority |
| **Linux Academy / A Cloud Guru** | https://www.pluralsight.com/ | $35–$45/mo | AWS, Azure, cloud networking | Cloud-specific training |

---

## <a name="books"></a>RECOMMENDED BOOKS

### Entry & Associate Level

| Title | Author(s) | Publisher | ISBN | URL | Notes |
|-------|-----------|-----------|------|-----|-------|
| **CCNA 200-301 Official Cert Guide** | Odom, Wendell | Cisco Press | 978-0-13-769421-2 | [Cisco Press](https://www.ciscopress.com/) | Gold standard; 1200+ pages |
| **Network Fundamentals** | Saffried, Gordon | Self-published / Udemy | — | [Amazon](https://www.amazon.com/Network-Fundamentals-Gordon-Saffried/dp/1500564249) | Subnetting, OSI model clarity |
| **Subnetting Mastery** | Jerry Harwood | Self-published | — | [Amazon](https://www.amazon.com/Subnetting-Mastery-Simplified-Jerry-Harwood/dp/0692065780) | Focused subnetting practice |
| **The Complete Juniper Networks JN0-105 Prep Guide** | Doyle, Andrew | Packt | 978-1-78883-000-5 | [Amazon](https://www.amazon.com/Complete-Juniper-Networks-Certification-Guide/dp/1788830007) | JNCIA-Junos alternative |
| **CWNA: Certified Wireless Network Administrator Study Guide** | Coleman & Westcott | Sybex | 978-1-11-184-779-7 | [Amazon](https://www.amazon.com/CWNA-Certified-Wireless-Administrator-Official/dp/111812779X) | Wireless foundational |

### Professional Level

| Title | Author(s) | Publisher | ISBN | URL | Notes |
|-------|-----------|-----------|------|-----|-------|
| **CCNP Enterprise Core (ENCOR 350-401) Official Cert Guide** | Odom, Wendell | Cisco Press | 978-0-13-769424-3 | [Cisco Press](https://www.ciscopress.com/) | 700+ pages; comprehensive |
| **CCNP Enterprise Advanced Routing (ENARSI 300-410) Official Cert Guide** | Lacoste, Raymond & Edgeworth, Brad | Cisco Press | 978-0-13-769425-0 | [Cisco Press](https://www.ciscopress.com/store/ccnp-enterprise-advanced-routing-enarsi-300-410-official-9780138217525) | BGP, MPLS, traffic engineering |
| **Network Programmability and Automation** | Oswalt, Adell, Lowe, Edelman | O'Reilly | 978-1-09-811083-3 | [O'Reilly](https://www.oreilly.com/library/view/network-programmability-and/9781491931240/) | Python, NETCONF/YANG, DevOps |
| **Routing TCP/IP, Volume 1 (2nd Edition)** | Doyle, Jeff & Carroll, Jennifer | Cisco Press | 978-1-58-705202-6 | [Cisco Press](https://www.ciscopress.com/store/routing-tcp-ip-volume-1-9781587052026) | Deep RIP, OSPF, EIGRP |
| **Routing TCP/IP, Volume 2** | Doyle, Jeff & Carroll, Jennifer | Cisco Press | 978-1-58-705470-9 | [Cisco Press](https://www.ciscopress.com/store/routing-tcp-ip-volume-2-9781587054709) | BGP, policy-based routing |
| **SD-WAN Designs for Enterprise Networks** | Hauge, John | Packt | 978-1-78-961-267-7 | [Amazon](https://www.amazon.com/SD-WAN-Designs-Enterprise-Networks-architectures/dp/1789612675) | Modern SD-WAN architecture |
| **CWSP: Certified Wireless Security Professional Study Guide** | Coleman, Westcott | Sybex | 978-1-11-190-456-0 | [Amazon](https://www.amazon.com/CWSP-Certified-Wireless-Security-Professional/dp/1111904567) | Wireless security & 802.1X |
| **AWS Certified Advanced Networking Specialty Study Guide** | Gould, Stewart, Doyle | Sybex | 978-1-11-959-656-8 | [Amazon](https://www.amazon.com/AWS-Certified-Advanced-Networking-Specialty/dp/1119596566) | AWS VPC, hybrid, routing |

### Expert Level

| Title | Author(s) | Publisher | ISBN | URL | Notes |
|-------|-----------|-----------|------|-----|-------|
| **CCIE Enterprise Infrastructure Official Cert Guide** | Odom, Wendell | Cisco Press | 978-0-13-789-123-4 | [Cisco Press](https://www.ciscopress.com/) | CCIE Bible; 1500+ pages |
| **Internet Routing Architectures (2nd Edition)** | Halabi, Sam & McPherson, Danny | Cisco Press | 978-1-58-705202-6 | [Cisco Press](https://www.ciscopress.com/store/internet-routing-architectures-9781587054709) | BGP design & scalability |
| **MPLS Configuration on Cisco IOS Software** | Minei, Ina & Lucek, Julian | Cisco Press | 978-1-58-705111-1 | [Cisco Press](https://www.ciscopress.com/store/mpls-configuration-on-cisco-ios-software-9781587051111) | MPLS, VPN, TE deep dive |
| **BGP Design and Implementation** | van Beijnum, Iljitsch | Cisco Press | 978-1-58-705111-1 | [Amazon](https://www.amazon.com/BGP-Design-Implementation-Iljitsch-Beijnum/dp/158705111X) | BGP at scale, best practices |
| **Segment Routing Deployment Guide** | Xu, Xiaohu (editor) | Cisco Press | 978-1-58-705-858-5 | [Cisco Press](https://www.ciscopress.com/store/segment-routing-deployment-guide-9781587058585) | Modern routing architecture |
| **Enterprise Network Design Methodology** | Cisco (various) | Cisco Press | — | [Cisco Press](https://www.ciscopress.com/) | Reference for network architects |
| **TOGAF 9 Certified Study Guide** | Josey, Andrew M. | The Open Group | 978-0-90-779-820-8 | [Open Group](https://www.opengroup.org/togaf) | Enterprise architecture framework |

---

## <a name="youtube"></a>YOUTUBE CHANNELS & PODCASTS

### YouTube Channels

| Channel | Creator | Focus | Audience |
|---------|---------|-------|----------|
| **Jeremy's IT Lab** | Jeremy Cioara | CCNA/CCNP full courses, free | Entry → Associate |
| **David Bombal** | David Bombal | Networking fundamentals, ethical hacking | Entry → Associate |
| **Keith Barker (CBT Nuggets)** | Keith Barker | CCNP, advanced routing | Associate → Professional |
| **Russ White** | Russ White (Cisco) | BGP, segment routing, advanced protocols | Professional → Expert |
| **Cisco Learning Network** | Cisco | Official training clips, announcements | All levels |
| **Juniper Networks Training** | Juniper | Official JNCI/JNCIS/JNCIE videos | Juniper track |
| **Network Collective** | Podcast format | BGP, SD-WAN, design | Professional → Expert |
| **ipspace.net** | Ivan Pepelnjak | Deep technical articles + webinars (some free) | Professional → Expert |

### Podcasts & Communities

| Resource | URL | Focus | Frequency |
|----------|-----|-------|-----------|
| **Network Collective Podcast** | https://www.thenetworkcollective.com/ | Advanced networking topics, interviews | Bi-weekly |
| **Cisco Learning Network Community** | https://learningnetwork.cisco.com/ | Q&A, study groups, official updates | Daily |
| **NANOG Mailing List** | https://www.nanog.org/ | Network operators, BGP, policy | Daily digest |
| **Packet Pushers Podcast** | https://packetpushers.net/ | Networking, infrastructure, cloud | Weekly |
| **ipspace.net webinars** | https://ipspace.net/ | Paid webinars on advanced topics | Monthly |

---

## <a name="sources"></a>SOURCES

### Certification & Training URLs (Verified April 2026)

1. **CompTIA Network+ (N10-009):** https://www.comptia.org/en-us/certifications/network/
2. **Cisco CCST Networking (100-150):** https://www.cisco.com/site/us/en/learn/training-certifications/exams/ccst-networking.html
3. **Cisco CCNA (200-301 v1.1):** https://www.cisco.com/site/us/en/learn/training-certifications/exams/current-list/ccna-200-301.html
4. **Cisco CCNP Enterprise ENCOR (350-401 v1.2):** https://www.cisco.com/site/us/en/learn/training-certifications/exams/encor.html
5. **Cisco CCNP Enterprise ENARSI (300-410):** https://www.cisco.com/site/us/en/learn/training-certifications/exams/enarsi.html
6. **Cisco CCNP Enterprise ENSDWI (300-415):** https://www.cisco.com/site/us/en/learn/training-certifications/exams/ensdwi.html
7. **Cisco CCNP Enterprise ENSLD (300-420):** https://www.cisco.com/site/us/en/learn/training-certifications/exams/ensld.html
8. **Cisco CCNP Enterprise ENWLSD (300-425):** https://www.cisco.com/site/us/en/learn/training-certifications/exams/enwlsd.html
9. **Cisco CCNP Enterprise ENWLSI (300-430):** https://www.cisco.com/site/us/en/learn/training-certifications/exams/enwlsi.html
10. **Cisco CCNP Automation ENAUTO (300-435):** https://www.cisco.com/site/us/en/learn/training-certifications/exams/enauto.html
11. **Cisco CCIE Enterprise Infrastructure:** https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccie-enterprise-infrastructure/exams-and-training.html
12. **Cisco CCDE (Design Expert):** https://www.cisco.com/site/us/en/learn/training-certifications/certifications/design/ccde/index.html
13. **Juniper JNCIA-Junos (JN0-105):** https://www.juniper.net/us/en/training/certification/tracks/junos/jncia-junos.html
14. **Juniper JNCIS-ENT:** https://www.juniper.net/us/en/training/certification/tracks/enterprise-routing-switching/jncis-ent.html
15. **Juniper JNCIS-SP:** https://www.juniper.net/us/en/training/certification/tracks/service-provider-routing-switching/jncis-sp.html
16. **Juniper JNCIP-ENT:** https://www.juniper.net/us/en/training/certification/tracks/enterprise-routing-switching/jncip-ent.html
17. **Juniper JNCIP-SP:** https://www.juniper.net/us/en/training/certification/tracks/service-provider-routing-switching/jncip-sp.html
18. **HPE Aruba ACA-Switching (HPE6-A86):** https://certification-learning.hpe.com/tr/datacard/exam/HPE6-A86
19. **HPE Aruba ACP Campus Access (HPE6-A87):** https://certification-learning.hpe.com/tr/datacard/exam/HPE6-A87
20. **Arista Academy (ACE Certifications):** https://www.training.arista.com/
21. **Arista Certified Engineering Associate (ACE-A):** https://arista.my.site.com/AristaCommunity/s/article/arista-certified-engineering-associate-ace-a-exam
22. **CWNP CWNA (CWNA-109):** https://www.cwnp.com/certifications/cwna
23. **CWNP CWNE (Certified Wireless Network Expert):** https://www.cwnp.com/certifications/cwne/
24. **AWS Advanced Networking Specialty (ANS-C01):** https://aws.amazon.com/certification/certified-advanced-networking-specialty/
25. **Microsoft Azure Network Engineer (AZ-700):** https://learn.microsoft.com/en-us/credentials/certifications/azure-network-engineer-associate/
26. **Open Group TOGAF Practitioner:** https://www.opengroup.org/togaf

### Salary Data Sources

27. **Robert Half 2026 Salary Guide (USA):** https://www.roberthalf.com/us/en/insights/salary-guide
28. **Robert Half UK 2026 Salary Guide:** https://www.roberthalf.com/gb/en/
29. **ZipRecruiter CCIE Salary Data:** https://www.ziprecruiter.com/Salaries/Ccie-Salary
30. **Glassdoor Network Engineer & CCIE Salaries:** https://www.glassdoor.com/
31. **PayScale South Africa Network Engineer:** https://www.payscale.com/research/ZA/Job=Network_Engineer/Salary
32. **PayScale South Africa Senior Network Engineer:** https://www.payscale.com/research/ZA/Job=Sr._Network_Engineer/Salary

### Free Learning Resources

33. **Jeremy's IT Lab YouTube:** https://www.youtube.com/@JeremysITLab
34. **Cisco Networking Academy:** https://www.netacad.com/
35. **Juniper Open Learning Portal:** https://learningportal.juniper.net/
36. **David Bombal YouTube:** https://www.youtube.com/c/davidbombal
37. **Cisco DevNet Sandbox:** https://developer.cisco.com/sandbox/
38. **GNS3:** https://www.gns3.com/
39. **Cisco Packet Tracer:** https://www.netacad.com/courses/packet-tracer
40. **Network Collective Podcast:** https://www.thenetworkcollective.com/
41. **ipspace.net:** https://ipspace.net/

### Paid Learning Resources

42. **INE (Internet Network Experts):** https://www.ine.com/
43. **CBT Nuggets:** https://www.cbtnuggets.com/
44. **Pluralsight:** https://www.pluralsight.com/
45. **Udemy:** https://www.udemy.com/
46. **Network Lessons (Ali Khatibi):** https://networklessons.com/
47. **Cisco U:** https://u.cisco.com/
48. **Linux Academy / A Cloud Guru:** https://www.pluralsight.com/

### Books & Publishers

49. **Cisco Press:** https://www.ciscopress.com/
50. **O'Reilly Media:** https://www.oreilly.com/
51. **Amazon Books (used source):** https://www.amazon.com/
52. **Google Books (preview source):** https://books.google.com/

### Industry Resources

53. **IETF Datatracker:** https://datatracker.ietf.org/
54. **NANOG Mailing List:** https://www.nanog.org/
55. **Packet Pushers Podcast:** https://packetpushers.net/
56. **Cisco DevNet:** https://developer.cisco.com/
57. **Cisco Live On-Demand:** https://ciscolive.com/

---

## Final Notes

- **DevNet Rebrand (Feb 3, 2026):** DevNet Professional became "CCNP Automation" and DevNet Expert became "CCIE Automation." Exam 300-435 ENAUTO replaced 300-910 DEVCOR. Existing DevNet credential holders automatically transitioned with no re-testing required.

- **ENCOR v1.2 (March 19, 2026):** Removed wireless content from the core exam. Wireless candidates now take dedicated ENWLSD / ENWLSI exams as concentrations.

- **HPE Acquisition of Juniper (July 2025, $14B):** Juniper now trades as "HPE Juniper Networking" but certification remains unchanged. Monitor for potential branding updates in 2026–2027.

- **Cloud as Core Competency:** Cloud networking certs (AWS ANS-C01, Azure AZ-700) are increasingly expected for architects earning $200K+. Recommend pursuing at least one cloud cert by year 5 of career.

- **CCIE Market Shift:** 8-hour lab passes have dropped ~5–10% year-over-year. New CCDE Specialist (no lab) launched 2025 as faster alternative. Consider design-focused path if labs aren't your strength.

- **South Africa Context:** USD/ZAR exchange rates vary; quoted ZAR figures assume ~R18–19 per USD (April 2026). Remote work opportunities with US companies common for high-earning SA engineers.

---

**Document version:** 1.0  
**Last verified:** April 2026  
**Next review:** Q4 2026

