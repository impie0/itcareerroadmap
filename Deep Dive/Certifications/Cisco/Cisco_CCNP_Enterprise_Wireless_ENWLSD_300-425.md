---
cert_name: "Designing Cisco Enterprise Wireless Networks"
cert_code: "300-425"
vendor: "Cisco"
status: "Active"
level: "Professional"
domain: "Networking / Wireless"
ecosystem: "Cisco"
last_verified: "2026-05-02"
aliases: ["ENWLSD", "CCNP Enterprise Wireless Design", "300-425", "ENWLSD v1.1"]
---

# Designing Cisco Enterprise Wireless Networks (300-425 ENWLSD)

**`300-425`** · ● Active · Professional · _Cisco_

---

## Exam Facts

| Attribute | Detail |
|-----------|--------|
| **Full Name** | Designing Cisco Enterprise Wireless Networks |
| **Code** | 300-425 |
| **Short Code** | ENWLSD |
| **Version** | v1.1 |
| **Format** | Multiple-choice, Drag-and-drop, Testlet |
| **Duration** | 90 minutes |
| **Questions** | 55–65 questions |
| **Passing Score** | 750–850 / 1000 (scaled) · ~75–80% recommended |
| **Cost (USD)** | $300 |
| **Cost (GBP)** | ~£240 |
| **Cost (EUR)** | ~€280 |
| **Cost (AUD)** | ~AU$480 |
| **Cost (ZAR)** | ~R5,400 |
| **Validity** | 3 years from pass date |
| **Exam Status** | Active · Last updated March 30, 2026 |
| **Available** | Pearson VUE testing centers & online proctored |

---

## About

The **300-425 ENWLSD** is a **design-focused** concentration exam under the CCNP Enterprise certification. It pairs with **300-430 ENWLSI** (Implementation/Installation), allowing candidates to specialize in either **design** or **implementation** aspects of enterprise wireless networks.

**Key Distinction:**
- **300-425 ENWLSD** — Design, planning, site surveys, RF engineering, architecture
- **300-430 ENWLSI** — Deployment, configuration, troubleshooting, hands-on lab tasks

Together with the core **ENCOR 350-401** exam, passing either concentration qualifies for the **CCNP Enterprise** certification. The ENWLSD exam validates the ability to design enterprise-scale wireless networks across campus, branch, retail, and outdoor environments.

---

## Domain Context — Networking / Wireless

Enterprise wireless design requires deep knowledge across multiple layers:

- **RF Physics & Site Surveys** — Radio frequency propagation, path loss, interference analysis, coverage prediction
- **Infrastructure Architecture** — Controller placement, redundancy, scaling, FlexConnect vs. Central Switching
- **Mobility & Roaming** — Layer 2 and Layer 3 mobility, PMKID caching, 802.11r/k/v/w optimization
- **High Availability** — Redundancy, failover, load balancing, backup controllers
- **QoS & Multicast** — Wireless QoS design, voice/video prioritization, multicast in wireless environments
- **Catalyst Center & DNA** — Controller architecture, device provisioning, policy design
- **Security by Design** — 802.1X/EAP, encryption, threat mitigation, network segmentation
- **Outdoor & Mesh** — Outdoor AP design, mesh networking, long-range links

---

## Topics Covered (by Exam Blueprint)

The ENWLSD exam blueprint is organized into major competency areas:

### 1. Wireless Site Survey & RF Assessment (~20–25%)

- Conduct site survey methodology and documentation
- Identify RF coverage requirements and constraints
- Analyze interference (co-channel, adjacent-channel, non-Wi-Fi sources)
- Determine AP density and placement strategies
- Calculate link budget and path loss models
- Predict coverage using propagation models (Free Space, ITU, log-distance)
- Document site survey findings and recommendations

**Key Concepts:**
- Fresnel zones and antenna placement
- Multipath and fading effects
- Environmental factors (materials, humidity, frequency)
- Channel planning and channel reuse
- AP selection based on transmit power and antenna gain

---

### 2. Wired and Wireless Infrastructure Design (~25–30%)

- Design network architecture (central switching vs. FlexConnect)
- Plan controller placement and redundancy
- Design Cisco Catalyst Center (formerly DNA Center) architecture
- Design Meraki cloud-managed wireless networks
- Design Cisco AireOS controller-based networks
- Plan power distribution (PoE budgeting and uplink capacity)
- Design roaming domains and mobility groups
- Plan multicast replication trees in wireless networks
- Design location services architecture

**Key Concepts:**
- Centralized vs. distributed switching
- Controller high availability (HA) design
- Guest and corporate SSID segmentation
- Bandwidth provisioning (air time vs. wired capacity)
- Mesh backhaul design

---

### 3. Mobility & Roaming Design (~20–25%)

- Design intra-controller mobility (Layer 2 roaming)
- Design inter-controller mobility (Layer 3 roaming)
- Design 802.11k (neighbor reports) deployments
- Design 802.11v (BSS transition management)
- Design 802.11w (management frame protection)
- Design 802.11r (fast roaming) / FT (Fast Transition)
- Plan PMKID caching for fast reconnection
- Design roaming latency requirements for voice/video

**Key Concepts:**
- Roaming latency vs. throughput tradeoffs
- Mobility anchor points in multi-controller designs
- AP redundancy and neighbor optimization
- Client-side vs. network-side optimization

---

### 4. WLAN High Availability & Redundancy (~15–20%)

- Design controller failover and load balancing
- Design N+1 and N+2 redundancy models
- Plan backup and disaster recovery
- Design connection admission control (CAC)
- Assess capacity planning for high-density deployments
- Design stateful switchover (SSO) in AireOS
- Plan wireless network resilience

**Key Concepts:**
- Single point of failure identification
- Backup WAN links for controller connectivity
- AP anchor failover
- DNS and DHCP design for resilience

---

### 5. Quality of Service (QoS) Design (~10–15%)

- Design wireless QoS policy (per-SSID, per-user, per-application)
- Plan bandwidth allocation and traffic policing
- Design voice and video prioritization
- Plan 802.11e (EDCA) configuration
- Design QoS for guest networks
- Plan QoS verification and monitoring

**Key Concepts:**
- DSCP marking and mapping to wireless queues
- CAC for real-time traffic
- Airtime fairness configuration
- Best-effort downgrade strategies

---

### 6. Location Services & Geolocation (~5–10%)

- Design Cisco DNA Spaces architecture
- Plan indoor location accuracy requirements
- Design location-based analytics and insights
- Integrate presence detection and asset tracking
- Plan location data privacy and security

**Key Concepts:**
- Triangulation and fingerprinting methods
- Location accuracy vs. cost tradeoffs
- Real-time location system (RTLS) integration

---

### 7. Security Design (~10–15%)

- Design 802.1X/EAP authentication
- Plan encryption (WPA2/WPA3) and ciphers
- Design network segmentation (VLAN, ACLs)
- Plan threat defense (rogue AP detection, DoS mitigation)
- Design compliance requirements (PCI-DSS, HIPAA)
- Plan certificate and key management

**Key Concepts:**
- Pre-shared key vs. enterprise authentication
- Client certificate provisioning
- Captive portal vs. authenticated access
- Guest SSID design

---

### 8. Monitoring, Analytics & Lifecycle (~5–10%)

- Design monitoring and alerting systems
- Plan RF analytics and visualization
- Design health checks and KPIs
- Plan lifecycle management and software updates
- Design AP provisioning workflows

**Key Concepts:**
- SNMP and syslog integration
- Real-time health dashboards
- Firmware management strategies

---

## Common Job-Ready Skills

After passing 300-425 ENWLSD, candidates can demonstrate:

✓ Conduct RF site surveys and interpret results
✓ Design AP density and placement strategies
✓ Architect wireless LANs for enterprises (100–10,000+ users)
✓ Design multi-controller deployments with roaming
✓ Plan high-availability wireless networks
✓ Design QoS for voice, video, and data traffic
✓ Integrate Catalyst Center for provisioning and assurance
✓ Design outdoor and mesh wireless extensions
✓ Plan DNA Spaces for location intelligence
✓ Design security controls (802.1X, encryption, segmentation)
✓ Optimize roaming for mobile users (seamless handoff)
✓ Design redundancy and disaster recovery

---

## Recommended Courses & Resources

### Official Cisco Training

**1. Designing Cisco Enterprise Wireless Networks (ENWLSD)**
- **Provider:** Cisco Learning Network / Digital Learning
- **Format:** On-demand instructor-led video (ILT) or self-paced
- **Duration:** 20–30 hours
- **Topics:** All exam domains with labs and demos
- **Link:** https://www.cisco.com/site/us/en/learn/training-certifications/training/courses/enwlsd.html

### Third-Party Training

**2. CBT Nuggets — CCNP Enterprise Wireless Design (ENWLSD 300-425)**
- **Format:** Video-based training + quizzes
- **Coverage:** Site surveys, infrastructure, mobility, QoS, high availability
- **Strengths:** Practical, clear explanations, hands-on examples
- **Link:** https://www.cbtnuggets.com/it-training/cisco/ccnp-enterprise-wireless-design

**3. Udemy Courses**
- Various instructors offer 300-425 prep courses with practice exams
- Typically 15–25 hours of video content
- Often include real exam question simulations

**4. LearnQuest — Designing Cisco Enterprise Wireless Networks**
- **Format:** Instructor-led (virtual or on-site) + self-paced options
- **Duration:** 3–5 days instructor-led
- **Topics:** Full exam blueprint with hands-on labs
- **Link:** https://www.learnquest.com/course-detail-v3.aspx?cnum=LQEX-CSC-ENWLSD-MX

---

## Official Study Materials & Books

### Cisco Press Official Cert Guides

**CCNP Enterprise Wireless Design ENWLSD 300-425 and Implementation ENWLSI 300-430 Official Cert Guide**
- **Authors:** Jerome Henry, Robert Barton, David Hucaby
- **Publisher:** Cisco Press
- **Year:** 2020 (updated for v1.1)
- **Pages:** 1,000+
- **Coverage:** Both design and implementation exams; comprehensive RF theory, site survey methodology, controller architecture, roaming, QoS, security
- **Strength:** Written by Cisco engineers; exam-aligned; extensive examples and diagrams
- **Link:** https://www.ciscopress.com/store/ccnp-enterprise-wireless-design-enwlsd-300-425-and-9780136600954
- **ISBN:** 978-0-13-660095-4

### Related Wireless Design Books

**CWDP Official Study Guide: Certified Wireless Design Professional (2nd Ed.)**
- **Author:** David A. Westcott, David J. Mackey
- **Publisher:** McGraw-Hill
- **Coverage:** RF design, site survey methodology, coverage/capacity trade-offs, interference analysis
- **Strength:** Vendor-neutral wireless design principles reinforcing ENWLSD concepts
- **ISBN:** 978-0-07-182857-9

---

## Practice Exams

### Cisco Exam Prep

**1. Official Cisco Exam Prep (via Cisco Learning Network)**
- Practice questions aligned to exam blueprint
- Feedback on weak areas
- **Link:** https://learningnetwork.cisco.com/s/enwlsd-exam-topics

### Third-Party Practice Resources

**2. ExamTopics — 300-425 Practice Questions**
- Community-contributed questions with explanations
- Free and premium options
- **Link:** https://www.examtopics.com/exams/cisco/300-425/

**3. Udemy Practice Exams**
- Full-length simulated exams with detailed answers
- Timed mode to practice test conditions
- Difficulty scaling (beginner to expert)

**4. nwexam.com & certshero.com**
- Large question banks covering all domains
- Performance analytics by topic

---

## Related Certifications & Learning Path

### CCNP Enterprise Certification Stack

CCNP Enterprise = ENCOR (350-401) + ONE of:
- 300-425 ENWLSD (Design — this exam)
- 300-430 ENWLSI (Implementation)
- 300-435 ENAUTO (Enterprise Automation)
- 300-410 ENARSI (Enterprise Advanced Routing)
- 300-415 ENROUTE (Enterprise Routing)

**ENCOR (350-401) — Enterprise Core**
- Prerequisite for CCNP Enterprise concentrations
- Covers routing, switching, infrastructure, security fundamentals
- Must pass before or concurrent with ENWLSD

---

### Comparable Design Certifications

| Certification | Vendor | Focus | Status |
|---|---|---|---|
| CWDP | CWNP | Vendor-neutral wireless design | Active |
| CCIE Wireless (300-475) | Cisco | Expert-level wireless design + implementation | Active |
| CISM (Security Design) | (ISC)² | Security-focused infrastructure design | Active |

---

## Job Titles & Career Impact

### Common Job Roles Using ENWLSD Skills

- Wireless Network Designer
- Enterprise RF Engineer
- Network Architect (Wireless)
- Wireless Solutions Architect
- Senior Network Engineer (Wireless)
- Site Survey Engineer
- Wireless Infrastructure Specialist

### Industries & Sectors

- **Enterprises:** Large corporations with multi-building, multi-campus wireless
- **Retail:** High-density shopping centers with guest access
- **Healthcare:** Hospital campuses with BYOD and medical device roaming
- **Education:** Universities and schools with large student populations
- **Hospitality:** Hotels, resorts, conference centers
- **Manufacturing:** Warehouses and factories with IoT and logistics tracking

---

## Salary & Compensation (2026 USD)

### United States (USD)

| Role | Entry (0–3 yrs) | Mid (3–7 yrs) | Senior (7+ yrs) |
|---|---|---|---|
| Wireless Network Designer | $70k–$85k | $90k–$120k | $120k–$160k |
| Network Architect (Wireless) | $85k–$100k | $110k–$150k | $150k–$200k+ |
| RF/Site Survey Engineer | $65k–$80k | $80k–$110k | $110k–$150k |
| Senior Network Engineer | $80k–$95k | $105k–$140k | $140k–$190k |

### Other Regions (Approximate 2026 Rates)

| Region | Entry | Mid | Senior |
|---|---|---|---|
| United Kingdom (GBP) | £52k–£68k | £70k–£95k | £95k–£140k |
| Europe (EUR) | €60k–€75k | €80k–€110k | €110k–€160k |
| Australia (AUD) | AU$95k–AU$130k | AU$130k–AU$180k | AU$180k–AU$250k |
| South Africa (ZAR) | R600k–R750k | R800k–R1.1M | R1.1M–R1.5M |
| Canada (CAD) | CAD$70k–CAD$88k | CAD$95k–CAD$125k | CAD$125k–CAD$170k |

---

## Skills Validated by ENWLSD

### Technical Competencies

- **RF Engineering:** Path loss modeling, interference analysis, antenna selection
- **Site Survey Methodology:** Predictive and post-deployment surveys, heat mapping
- **Network Architecture:** Controller placement, redundancy, scalability
- **Mobility Design:** Layer 2/3 roaming, fast roaming protocols (802.11r/k/v)
- **QoS Design:** Policy creation, traffic prioritization, bandwidth management
- **High-Availability Design:** Failover, load balancing, disaster recovery
- **Security by Design:** 802.1X, encryption, network segmentation
- **Catalyst Center / DNA Center:** Intent-based provisioning and assurance
- **Outdoor & Mesh:** Long-range links, self-healing networks

---

## Study Timeline & Exam Prep Strategy

### 8-Week Study Plan

**Weeks 1–2: RF Fundamentals**
- Study RF theory, path loss models, antenna basics
- Read Cisco Press chapter on RF design
- Complete CBT Nuggets RF module

**Weeks 3–4: Site Survey & Infrastructure**
- Deep dive into site survey methodology
- Controller architecture comparisons
- Hands-on: Use RF prediction tools (Ekahau, AirMagnet)

**Weeks 5–6: Roaming, Mobility & QoS**
- Study 802.11r/k/v/w standards
- Design QoS policies for various scenarios
- Practice designing inter-controller roaming

**Weeks 7: High-Availability & Security**
- Design redundancy strategies
- Study 802.1X/EAP design patterns
- DNA Spaces and location services

**Week 8: Practice Exams & Review**
- Take full-length practice exams (aim for 80%+)
- Review weak areas
- Final review of exam tips and shortcuts

---

## Exam Day Tips

✓ Time Management: ~1.5 min per question (90 min / 60 questions)
✓ Read Carefully: Wireless design questions often have subtle wording
✓ Eliminate Obviously Wrong Answers: Narrows choices for complex scenarios
✓ Flag & Review: Mark uncertain questions for second pass
✓ RF Scenarios: Draw quick diagrams (AP placement, channel plan, coverage)
✓ Avoid Overthinking: ENWLSD tests practical knowledge, not esoteric edge cases
✓ Validate Against Standards: Use knowledge of 802.11a/b/g/n/ac/ax when unsure

---

## Sources & References

### Official Cisco Resources
- [Cisco 300-425 ENWLSD Exam Page](https://www.cisco.com/site/us/en/learn/training-certifications/exams/enwlsd.html)
- [Cisco Learning Network ENWLSD Topics](https://learningnetwork.cisco.com/s/enwlsd-exam-topics)
- [Cisco ENWLSD Training Course](https://www.cisco.com/site/us/en/learn/training-certifications/training/courses/enwlsd.html)

### Books & Study Guides
- [CCNP Enterprise Wireless Design ENWLSD 300-425 Official Cert Guide — Cisco Press](https://www.ciscopress.com/store/ccnp-enterprise-wireless-design-enwlsd-300-425-and-9780136600954)

### Third-Party Training
- [CBT Nuggets ENWLSD](https://www.cbtnuggets.com/it-training/cisco/ccnp-enterprise-wireless-design)
- [LearnQuest ENWLSD Course](https://www.learnquest.com/course-detail-v3.aspx?cnum=LQEX-CSC-ENWLSD-MX)

### Practice Exams
- [ExamTopics 300-425 Questions](https://www.examtopics.com/exams/cisco/300-425/)
- [nwexam.com 300-425](https://www.nwexam.com/cisco/cisco-300-425-certification-exam-sample-questions-and-answers)

---

**Last Updated:** May 2, 2026
**Exam Status:** Active · v1.1
**Study Difficulty:** Professional-level · Intermediate to Advanced
