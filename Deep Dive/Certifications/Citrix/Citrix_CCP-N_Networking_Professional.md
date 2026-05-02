---
cert_name: "Citrix Certified Professional – Networking"
cert_code: "1Y0-340"
vendor: "Citrix (Cloud Software Group)"
status: "Active"
level: "Professional"
domain: "Networking"
ecosystem: "Citrix NetScaler / Cloud Software Group"
last_verified: "2026-05-02"
aliases: ["CCP-N", "Citrix CCP-N", "Citrix Certified Professional Networking", "Citrix ADC Advanced Topics", "1Y0-341 (updated path)"]
---

# Citrix Certified Professional – Networking (CCP-N)

**`1Y0-340`** · ● **Active** · **Professional** · _Citrix (Cloud Software Group)_

> Advanced vendor-specific professional certification validating mastery of Citrix ADC (formerly NetScaler) networking, application delivery, security, and optimization. Prerequisites: CCA-N (Citrix Certified Associate – Networking). Pearson VUE delivery; 75 minutes, 69 multiple-choice questions, 66% passing score. Citrix rebranded to Cloud Software Group (CSG) in 2023; products now marketed as "NetScaler" under CSG ownership. **Note:** The 1Y0-340 English version was discontinued May 22, 2024; 1Y0-341 (CCP-AppDS) is the updated professional-level exam path for application delivery and security roles.

---

## Exam facts

| Field | Value |
|---|---|
| Cost | $200–$300 USD (standard $200; premium tier $300; add $7 if registering by phone) |
| Duration | 75 minutes (105 minutes for non-native English speakers) |
| Questions | 69 multiple choice |
| Passing | 66% (approximately 46 of 69 questions) |
| Format | Multiple choice, scenario-based |
| Delivery | Pearson VUE (on-site testing centers worldwide) |
| Languages | English (note: other language versions may be available in select regions) |
| Valid | 3 years |
| Renewal | Pass higher-level cert (CCP-AppDS) or retake CCP-N |
| Prerequisites | CCA-N (Citrix Certified Associate – Networking) or equivalent hands-on experience |
| Released | February 2020 (current 1Y0-340 version) |
| Retiring | Effective May 22, 2024 — English version discontinued; 1Y0-341 is the updated professional networking path |

**Vendor source —** [Citrix Training & Certifications ↗](https://www.citrix.com/training-and-certifications/)

**Official exam guide —** [1Y0-340 CCP-N Exam Prep & Study Guide ↗](https://www.vmexam.com/citrix/citrix-1y0-340-ccp-n-certification-exam-syllabus)

**Exam objectives —** [VMExam CCP-N Syllabus & Sample Questions ↗](https://www.vmexam.com/citrix/citrix-1y0-340-certification-exam-sample-questions)

---

## About

The Citrix Certified Professional – Networking (CCP-N, exam code 1Y0-340) is an advanced professional-level credential validating deep expertise in designing, deploying, configuring, and optimizing Citrix ADC (Application Delivery Controller, formerly NetScaler) infrastructure for high-availability, security, and performance-critical enterprise networks. Launched in February 2020, CCP-N requires prior achievement of CCA-N and typically 6+ months of hands-on Citrix ADC 12/13 operations experience.

**Certification path:** CCA-N (entry) → CCP-N (professional). The exam focuses on advanced topics including Application Firewall (AppFW) security policies, Web App Firewall (WAF) threat protection, Citrix ADC Management and Analytics System (NMAS/NetScaler MAS), security policy optimization, SSL/TLS offloading, rate limiting, traffic shaping, and operational troubleshooting.

**Market context:** Citrix was acquired by Vista Equity Partners and rebranded as Cloud Software Group (CSG) in September 2023. The Citrix ADC product is now marketed under the CSG/NetScaler brand. The CCP-N remains relevant in enterprises with significant Citrix ADC investments, financial services, government contracting, and telecom sectors. However, note that the English version of 1Y0-340 was **discontinued effective May 22, 2024**, and Citrix now directs candidates toward 1Y0-341 (CCP-AppDS) as the updated professional application delivery and security certification path. Organizations prioritizing cloud-native load balancing (AWS ELB, Azure LB, Kubernetes Ingress) are gradually shifting away from on-premises ADC-focused hiring, though existing Citrix deployments maintain strong demand.

---

## Domain context — Networking

Application delivery, load balancing, and network security at the infrastructure layer: managing traffic flow, ensuring high availability, protecting applications against Layer 4–7 attacks, and optimizing WAN/LAN performance. Citrix ADC is a legacy-to-hybrid appliance-based approach to these problems; competitors include F5 BIG-IP (load balancing/WAF), Nginx Plus (open-source + commercial), Palo Alto Networks (WAF/DDoS), AWS Application Load Balancer, Azure Load Balancer, and Kubernetes native Ingress controllers.

CCP-N is the vendor-specific professional networking credential for Citrix environments. The exam reflects Citrix ADC's traditional strength in heterogeneous hypervisor environments (on-premises vSphere, Hyper-V deployments) and enterprise remote access via Citrix Gateway. Broader industry shift toward cloud-native load balancing, microservices architectures, and SaaS-centric application delivery has reduced demand for traditional ADC roles compared to the 2015–2019 peak.

[Read full deep dive — Networking Domain →](../../Domains/Networking.md) *(domain file not yet created)*  
[Read full deep dive — Citrix NetScaler Ecosystem →](../../Ecosystems/Citrix_Ecosystem.md) *(ecosystem file not yet created)*

---

## Topics covered

Based on official Citrix exam objectives (1Y0-340 / CCP-N):

- **Citrix ADC / NetScaler Architecture** — Management plane vs. data plane, NSIP (NetScaler IP), SNIP (Subnet IP), VIP (Virtual IP), cluster architecture, HA pair setup, node management
- **Advanced Load Balancing** — Load balancing algorithms (least connections, IP hash, round-robin variants), monitor types and configuration, persistence methods (cookie, SSL session, IP-based, UUIDOPTIONS), connection multiplexing, Bloom filters
- **Content Switching & Request Routing** — Content-switching virtual servers, policies (HTTP, SSL), request/response rules, expression-based routing, header manipulation
- **SSL/TLS & Certificate Management** — SSL offloading (SSL Relay, end-to-end SSL), cipher suite hardening, certificate renewal automation, client vs. server SSL profiles, OCSP stapling, TLS 1.3 support
- **Application Firewall (AppFW)** — AppFW profiles and policies, OWASP Top 10 protection (SQL injection, XSS, cookie theft, buffer overflow, CSRF), signature updates, transform actions, JSON/XML parsing, custom rules
- **Web Application Firewall (WAF)** — WAF vs. AppFW distinction, threat signatures, false-positive tuning, rate limiting, bot detection and mitigation, DDoS protection at Layer 7
- **NetScaler Management & Analytics System (NMAS / NetScaler MAS)** — Centralized administration, license pool management, analytics dashboards, event logging, syslog/SNMP integration, audit trails
- **Citrix ADC High Availability (HA)** — HA failover mechanisms, state synchronization, priority/preemption, quorum configuration, licensing in HA pairs, monitoring HA health
- **AppExpert Policies & Advanced Features** — Responder policies (custom responses), Rewrite policies (header/content manipulation), Rate Limiting (token bucket algorithm), Priority Queuing (QoS), Traffic Management
- **Global Server Load Balancing (GSLB)** — GSLB site setup, DNS-based and metric-based site selection, Proximity zones, MEP (Multi-Exchange Protocol) for site syncing, disaster recovery scenarios
- **Authentication & Authorization** — RADIUS, LDAP, SAML, Multi-Factor Authentication (nFactor), OAuth/OpenID Connect, certificate-based auth, session management, Citrix Gateway integration
- **Performance Tuning & Optimization** — TCP/IP stack tuning (window scaling, SACK), compression (gzip, brotli), connection pooling, HTTP keep-alive, buffer sizing, link load balancing
- **Citrix Gateway (formerly NetScaler Gateway)** — Remote access VPN, SmartAccess policies, SmartControl features, Clientless VPN (web portal), multi-factor authentication, session policies
- **NetScaler SDX (Multi-Tenancy)** — Virtual NetScaler instances (VPX), resource allocation, tenant isolation, management partitions, license allocation
- **Troubleshooting & Diagnostics** — nsconmsg (NetScaler console message utility), nstrace (packet capture and analysis), ns.log review, CLI show commands, syslog analysis, common failure scenarios (licensing, certificate, connectivity, performance)
- **Security Hardening** — Restricting admin access, TLS/SSL hardening, logging and audit trails, DDoS protection (SYN flood, UDP flood), IP reputation filtering, geographic blocking
- **Citrix ADC Integration with Cloud Services** — Hybrid deployments (on-premises ADC + cloud services), cloud connector architecture, managed service provider (MSP) multi-tenancy

*Source:* [Official Citrix ADC Advanced Topics Exam Syllabus ↗](https://www.vmexam.com/citrix/citrix-1y0-340-ccp-n-certification-exam-syllabus)

---

## Common skills at Networking · Professional

*Shared advanced skills for application delivery, load balancing, and network security at Professional level — not specific to Citrix CCP-N.*

- Architecting and optimizing multi-tier application delivery infrastructure
- Configuring and troubleshooting Layer 4–7 load balancing and content switching
- Implementing SSL/TLS termination and end-to-end encryption
- Securing applications against OWASP Top 10 and DDoS threats
- Designing high-availability and disaster-recovery networking topologies
- Tuning application and network performance (throughput, latency, connection efficiency)
- Centralizing monitoring, logging, and alerting across distributed infrastructure
- Integrating authentication and authorization systems (RADIUS, LDAP, SAML, OAuth)
- Managing multi-site failover and geographic load distribution
- Troubleshooting complex network and application delivery issues using packet analysis and diagnostic tools

---

## Recommended courses at Networking · Professional

| Provider | Title | Cost | URL |
|---|---|---|---|
| Citrix Official (Global Knowledge) | CNS-320: Citrix ADC 12.x Advanced Concepts – Security, Management, and Optimization | $1,500–$2,000 | [↗](https://www.globalknowledge.com/en-eg/products/citrix/1y0-340) |
| CBT Nuggets | Citrix CCP-N (1Y0-340) Certification Prep | $400–$600 | [↗](https://www.cbtnuggets.com/it-training/citrix) |
| Pluralsight | Citrix ADC Networking (various modules) | $400–$600/year | [↗](https://www.pluralsight.com/) |
| Udemy (various instructors) | Citrix ADC 12/13 Advanced Topics | $50–$200 | [↗](https://www.udemy.com/) |
| A Cloud Guru (Linux Academy) | Citrix ADC courses | $50–$299/month | [↗](https://acloudguru.com/) |

**Course-selection rule:** Seek courses specifically tagged for 1Y0-340 or "CCP-N" and covering ADC 12.x or 13.x versions (not legacy 11.x). Many generic "Citrix ADC" courses skip advanced AppFW, WAF, and NMAS topics required for professional-level exams.

---

## Practice exams

| Provider | Title | Cost | URL |
|---|---|---|---|
| VMExam | Citrix 1Y0-340 CCP-N Practice Exam | $50–$100 | [↗](https://www.vmexam.com/citrix/citrix-1y0-340-certification-exam-sample-questions) |
| Whizlabs | Citrix 1Y0-340 CCP-N Practice Tests | $80–$150 | [↗](https://www.whizlabs.com/) |
| MeasureUp | Citrix 1Y0-340 Practice Exam | $80–$120 | [↗](https://www.measureup.com/) |
| Boson | Citrix ADC Advanced Topics Practice | $50–$100 | [↗](https://www.boson.com/) |
| PassCert | Citrix 1Y0-340 Exam Questions & Dumps | $30–$50 | [↗](https://www.passcert.com/1Y0-341.html) |

---

## Books

| Title | Author | Publisher | Year | ISBN | URL |
|---|---|---|---|---|---|
| Citrix ADC Advanced Topics: Security, Management, and Optimization Exam Practice Questions & Dumps | Quantic | Amazon KDP | 2023 | 9798742128953 | [↗](https://www.amazon.com/Citrix-ADC-Advanced-Topics-Management/dp/B094TGS44N) |
| Mastering Citrix NetScaler 12.x | Subramanya R | Packt Publishing | 2017 | 978-1-78829-107-5 | [↗](https://www.packtpub.com/) |

**Book rule:** Most Citrix ADC books are self-published or 2–3 years old, reflecting the transition from NetScaler to Cloud Software Group branding. Official Citrix exam prep guides (PDF) from the vendor website are more current than printed books.

---

## Typical job titles at Networking · Professional

NetScaler / Citrix ADC Engineer · Application Delivery Engineer · Load Balancing Architect · Network Security Engineer · Platform Engineer (ADC Specialization) · Senior Infrastructure Engineer (ADC Focus) · Citrix Solutions Architect

*(Job titles drawn from current job-board postings on Indeed, LinkedIn, Glassdoor, ZipRecruiter that list Citrix ADC, NetScaler, or CCP-N as required or preferred.)*

---

## Salary

| Region | Range | Source |
|---|---|---|
| USD | $100K – $150K | [Glassdoor: Citrix Engineer ↗](https://www.glassdoor.com/Salaries/citrix-engineer-salary-SRCH_KO0,15.htm) · [ZipRecruiter ↗](https://www.ziprecruiter.com/Salaries/Citrix-Engineer-Salary) · [Indeed ↗](https://www.indeed.com/career/citrix-engineer/salaries) |
| ZAR | R400K – R720K (approx. USD ×18) | Region-specific data limited; apply USD conversion with local market adjustment |
| GBP | £60K – £90K | [Hays UK Salary Guide 2026 ↗](https://www.hays.co.uk/salary-guide) · [Robert Half UK ↗](https://www.roberthalf.com/gb/en/insights/salary-guide) · [IT Jobs Watch ↗](https://www.itjobswatch.co.uk/) |
| EUR | €70K – €103K (DE/FR/NL regional variation) | Regional tech salary surveys; German and Dutch ADC roles tend toward €85K–€103K; French toward €70K–€85K |
| AUD | A$128K – A$185K | Australian Tech salary surveys; ADC specialists in Sydney/Melbourne at upper range |

**Salary rule:** Ranges reflect 2026 market data for mid-career (5–10 years) Citrix ADC / NetScaler engineers with CCP-N or equivalent hands-on expertise. Entry-level (<2 years) may be 20–30% lower; principal architects/solutions engineers 20–50% higher. Significant variation by industry vertical (financial services, telecom, government pay premiums; regional/mid-market lower). CSG rebranding has not significantly impacted salary bands as of May 2026.

---

## Skills validated

*Cert-specific — what this exam actually tests, distinct from the shared "Common skills" above.*

- Citrix ADC management plane architecture (NSIP, SNIP, VIP configuration)
- Advanced load balancing algorithms and persistence strategies
- Application Firewall (AppFW) policy design and OWASP threat mitigation
- Web Application Firewall (WAF) signature tuning and false-positive reduction
- NetScaler Management & Analytics System (NMAS) administration
- SSL/TLS offloading, cipher hardening, and certificate lifecycle
- AppExpert policy scripting (Responder, Rewrite, Rate Limiting)
- High-availability failover and state synchronization
- Global Server Load Balancing (GSLB) site failover
- Citrix Gateway authentication and access control policies
- Performance tuning (TCP/IP stack, compression, connection pooling)
- Troubleshooting using nsconmsg, nstrace, and CLI diagnostics
- Multi-tenant NetScaler SDX deployment and resource isolation
- Integration with Citrix Cloud and hybrid cloud architectures

---

## Related certifications

- **Stacks with:** [Citrix CCA-N (Associate Networking) ↗](../../Certifications/Citrix/Citrix_CCA-N_Networking_Associate.md) *(prerequisite; file not yet created)*
- **Prerequisite for:** [Citrix CCP-AppDS (Professional – App Delivery & Security) ↗](../../Certifications/Citrix/Citrix_CCP-AppDS.md) *(1Y0-341; file not yet created)*
- **Replaces / Superseded by:** 1Y0-341 (CCP-AppDS) — effective May 22, 2024, the English version of 1Y0-340 was discontinued; Citrix now routes professionals toward the broader CCP-AppDS certification
- **Equivalents at this level:** [F5 Application Delivery Professional (ADP) ↗]() · [Nginx Certified Associate ↗]() *(files not yet created)*
- **Vendor overview:** [Citrix / Cloud Software Group Overview ↗](../../Vendors/Citrix_Vendor_Overview.md) *(file not yet created)*

---

## Sources

- [Citrix Training & Certifications ↗](https://www.citrix.com/training-and-certifications/)
- [VMExam Citrix 1Y0-340 CCP-N Exam Syllabus ↗](https://www.vmexam.com/citrix/citrix-1y0-340-ccp-n-certification-exam-syllabus)
- [VMExam CCP-N Sample Questions & Study Guide ↗](https://www.vmexam.com/citrix/citrix-1y0-340-certification-exam-sample-questions)
- [CBT Nuggets: Is the CCP-N Worth It? ↗](https://www.cbtnuggets.com/blog/technology/system-admin/is-the-ccp-n-worth-it)
- [Citrix Blog: The new Citrix ADC Advanced Topics exam ↗](https://www.citrix.com/blogs/2020/02/24/the-new-citrix-adc-advanced-topics-exam-is-now-available/)
- [Glassdoor: Citrix Engineer Salary ↗](https://www.glassdoor.com/Salaries/citrix-engineer-salary-SRCH_KO0,15.htm)
- [ZipRecruiter: Citrix Engineer Salary ↗](https://www.ziprecruiter.com/Salaries/Citrix-Engineer-Salary)
- [Indeed: Citrix Engineer Salaries ↗](https://www.indeed.com/career/citrix-engineer/salaries)
- [Hays UK Salary Guide 2026 ↗](https://www.hays.co.uk/salary-guide)
- [Robert Half UK Salary Guide ↗](https://www.roberthalf.com/gb/en/insights/salary-guide)
- [Global Knowledge: CCP-N Certification Prep ↗](https://www.globalknowledge.com/en-eg/products/citrix/1y0-340)
- [Layer 8 Training: NetScaler ADC Training and Certification ↗](https://layer8training.com/everything-you-need-to-know-about-netscaler-adc-training-and-certification/)
- [iCert Global: Citrix ADC vs. NetScaler ↗](https://www.icertglobal.com/blog/citrix-adc-vs-netscaler-key-differences-blog/)

---

*Last verified: 2026-05-02*  
*Parent ecosystem: Citrix NetScaler / Cloud Software Group*  
*Parent domain: Networking*  
*Vendor overview: [Citrix / Cloud Software Group Overview](../../Vendors/Citrix_Vendor_Overview.md) *(file not yet created)*

---
