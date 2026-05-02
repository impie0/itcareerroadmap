---
cert_name: "GIAC Web Application Penetration Tester"
cert_code: "GWAPT"
vendor: "GIAC (SANS Institute)"
status: "Active"
level: "Professional"
domain: "Security/Application Security"
ecosystem: "GIAC/SANS"
last_verified: "2026-05-02"
aliases: ["GIAC Web Application Penetration Tester", "Web Application Penetration Tester"]
---

# GIAC Web Application Penetration Tester

**`GWAPT`** · ● **Active** · **Professional** · _GIAC (SANS Institute)_

> Every URL must link to the official cert page or current vendor documentation.
> Status reflects 2026 application security landscape; GIAC maintained as active certifier.

---

## Exam facts

| Field | Value |
|---|---|
| Cost | $949 USD (exam only); $8,780 for SANS SEC542 course |
| Duration | 3 hours (180 minutes) |
| Questions | ~75 multiple-choice questions (all scored) |
| Passing | 70% (approximately 53 out of 75 questions) |
| Format | Multiple choice; open-book (printed materials allowed) |
| Delivery | GIAC web-based proctored (online) |
| Languages | English |
| Valid | 4 years |
| Renewal | 36 CPE credits + $479 maintenance fee per 4-year cycle |
| Prerequisites | None; self-study or SANS SEC542 recommended |
| Released | 2000+ (current format 2020+) |
| Retiring | N/A — active, not retiring |

**Vendor source —** [GIAC Web Application Penetration Tester ↗](https://www.giac.org/certifications/web-application-penetration-tester-gwapt)  
**Official exam guide —** [GWAPT Certification Exam Guide ↗](https://www.giac.org/certifications/web-application-penetration-tester-gwapt)  
**Exam objectives —** [Exam Domains & Topics ↗](https://www.giac.org/certifications/web-application-penetration-tester-gwapt)

---

## About

The GIAC Web Application Penetration Tester (GWAPT) is a professional-level certification for security professionals conducting authorized penetration tests and vulnerability assessments of web applications. Aligned with SANS SEC542 (Web Application Penetration Testing & Ethical Hacking), GWAPT validates hands-on competency in reconnaissance, vulnerability discovery, exploitation, and remediation recommendations for modern web architectures. The cert covers OWASP Top 10 2021, server-side and client-side flaws, API security, and automated tooling (Burp Suite, ZAP, sqlmap). Like all GIAC certifications, GWAPT is open-book — candidates bring printed reference materials — making it accessible to application security engineers, penetration testers, and developers with strong security foundations. Widely recognized in AppSec teams, security consulting firms, and enterprise vulnerability management programs.

---

## Domain context — Security/Application Security

Application security (AppSec) is the practice of securing software and web applications against design, build, and deployment flaws. This domain spans vulnerability identification (code review, dynamic scanning, penetration testing), remediation (secure coding practices, patching), and governance (threat modeling, secure SDLC integration). The AppSec discipline intersects development workflows, cloud infrastructure, APIs, and third-party dependencies. Success requires knowledge of web protocols, common vulnerability classes, exploitation techniques, and communication of risk to non-security stakeholders.

[Read full deep dive — GIAC/SANS Ecosystem →](../../Vendors/GIAC_SANS_Vendor_Overview.md)

---

## Topics covered

- **Web Application Architecture & HTTP Protocol** — request/response cycle, headers, cookies, sessions, TLS/SSL, certificate validation
- **Recon & Application Mapping** — passive information gathering, active scanning (Burp Suite Spider, OWASP ZAP), identifying endpoints and parameters
- **OWASP Top 10 (2021) — Injection Flaws** — SQL injection (manual, error-based, blind, time-based), command injection, LDAP injection, expression language injection
- **Broken Access Control & IDOR** — horizontal/vertical privilege escalation, insecure direct object references, authorization bypass techniques
- **Cryptographic Failures** — weak encryption algorithms, poor key management, exposed credentials, sensitive data in transport/storage
- **Cross-Site Scripting (XSS)** — reflected, stored, and DOM-based XSS; payload construction; browser DOM APIs; exploitation and impact
- **Cross-Site Request Forgery (CSRF) & Clickjacking** — CSRF token validation, SameSite cookies, clickjacking frame-breaking, exploitation scenarios
- **Authentication Attacks** — brute force, credential stuffing, session fixation, session hijacking, insecure password reset, account enumeration
- **XML External Entity (XXE) Injection** — DTD-based attacks, SOAP/REST XML parsing, XXE blind exfiltration, out-of-band data channels
- **Server-Side Request Forgery (SSRF)** — internal network scanning, cloud metadata exploitation (AWS, Azure, GCP), bypass techniques
- **Server-Side Template Injection (SSTI)** — template engine exploitation, code execution via template contexts
- **WebSocket Security** — WebSocket handshake and protocol, insecure implementations, message interception, replay attacks
- **API Security** — REST/GraphQL fuzzing, authorization bypass, API key exposure, rate limiting bypass, batch exploitation
- **JavaScript Analysis & Prototype Pollution** — JavaScript deobfuscation, source map analysis, prototype pollution vulnerabilities, DOM gadget chains
- **Mobile API Back-End Testing** — API security from mobile client perspective, certificate pinning bypass, intercepting mobile traffic
- **Web Report Writing & Remediation** — documenting findings, CVSS scoring, risk assessment, remediation recommendations, client communication

*Source:* [GIAC GWAPT Exam Blueprint ↗](https://www.giac.org/certifications/web-application-penetration-tester-gwapt)

---

## Common skills at Security/Application Security · Professional

*Shared technical and operational competencies for AppSec professionals regardless of specific certification.*

- HTTP protocol and web request/response cycle (headers, status codes, redirects)
- Vulnerability identification via both manual testing and automated tooling
- Risk and CVSS scoring (severity and impact assessment)
- Common vulnerability classes (injection, access control, cryptography, XSS, CSRF)
- Secure coding principles and remediation recommendations
- Web application firewall (WAF) evasion and tuning awareness
- API security testing (REST, GraphQL, SOAP)
- Security testing documentation and stakeholder communication
- Secure SDLC integration and shift-left mindset

---

## Recommended courses at Security/Application Security · Professional

| Provider | Title | Cost | URL |
|---|---|---|---|
| SANS Institute | SEC542: Web Application Penetration Testing & Ethical Hacking | $8,780 | [↗](https://www.sans.org/cyber-security-courses/web-application-penetration-testing-ethical-hacking) |
| SANS Institute (Self-Paced) | SEC542 OnDemand | $1,600–$2,000 | [↗](https://www.sans.org/cyber-security-courses/web-application-penetration-testing-ethical-hacking) |
| Udemy (Zaid Sabih / Udemy Instructors) | Web Application Penetration Testing Course | $15–$50 | [↗](https://www.udemy.com/topic/web-application-penetration-testing/) |
| Cybrary | Web Application Penetration Testing | Free–$99 | [↗](https://www.cybrary.it) |
| PortSwigger | Burp Suite Web Security Academy (Free) | Free | [↗](https://portswigger.net/web-security) |

**Course-selection rule:** SEC542 is the canonical gold-standard course; OnDemand offers flexibility. PortSwigger Academy (free) is essential supplemental material — authoritative for Burp Suite and OWASP Top 10 coverage. Udemy and Cybrary serve self-paced learners with tight budgets.

---

## Practice exams

| Provider | Title | Cost | URL |
|---|---|---|---|
| GIAC Official | GWAPT Practice Test (included in SEC542 course) | Included | [↗](https://www.giac.org/certifications/web-application-penetration-tester-gwapt) |
| GIAC Official | Standalone Practice Exam Bundle | $399 | [↗](https://www.giac.org) |
| Whizlabs | GWAPT Practice Test | $49–$99 | [↗](https://www.whizlabs.com) |
| MeasureUp | GIAC Web Application Penetration Tester Practice Test | $129–$199 | [↗](https://www.measureup.com) |

---

## Books

| Title | Author | Publisher | Year | ISBN | URL |
|---|---|---|---|---|---|
| Web Application Penetration Testing & Ethical Hacking (SEC542 Study Guide) | SANS Instructors | SANS Institute | 2024–2026 | N/A | [↗](https://www.sans.org/cyber-security-courses/web-application-penetration-testing-ethical-hacking) |
| The Web Application Hacker's Handbook: Finding and Exploiting Security Flaws (2nd Ed.) | Stuttard, Pinto | Wiley | 2011 | 978-1118026472 | [↗](https://www.amazon.com/Web-Application-Hackers-Handbook-Exploiting/dp/1118026470) |
| OWASP Testing Guide (Free, Online) | OWASP Project | OWASP Foundation | 2021–2026 | N/A | [↗](https://owasp.org/www-project-web-security-testing-guide/) |
| Real-World Bug Bounty for Web Security | Peter Yaworski | Manning | 2019 | 978-1617295249 | [↗](https://www.amazon.com/Real-World-Bug-Bounty-Security-ebook/dp/B07T6TGQZ9) |

**Book rule:** SANS SEC542 course materials are the authoritative reference; OnDemand includes digital access. Stuttard & Pinto's "Web Application Hacker's Handbook" remains the seminal practical reference for app security testing methodology. OWASP Testing Guide is freely available, comprehensive, and aligns directly with OWASP Top 10 coverage. Yaworski's book covers real-world exploitation and bug bounty workflow.

---

## Typical job titles at Security/Application Security · Professional

Web Application Penetration Tester · Application Security Engineer · Security Analyst (AppSec) · API Security Specialist · Bug Bounty Hunter · AppSec Consultant · Red Team Analyst · DevSecOps Engineer

*(Job titles drawn from current job-board postings (Glassdoor, LinkedIn, Indeed) that list GWAPT or equivalent AppSec skills as required or strongly preferred.)*

---

## Salary

| Region | Range | Source |
|---|---|---|
| USD | $115,000 – $175,000 annually | [Glassdoor ↗](https://www.glassdoor.com) · [PayScale ↗](https://www.payscale.com) · [ZipRecruiter ↗](https://www.ziprecruiter.com) |
| ZAR | R1,900,000 – R2,900,000 annually (estimated at 1 USD = 18 ZAR, May 2026) | Derived from USD ranges; region-specific data unavailable — use ICT professional rates (Pnet, CareerJunction) |
| GBP | £68,000 – £105,000 annually | [IT Jobs Watch ↗](https://www.itjobswatch.co.uk) (application security roles) |
| EUR | €78,000 – €118,000 annually (DE/FR/NL average) | [IT Job Trends ↗](https://www.itjobtrends.com) |
| AUD | A$148,000 – A$212,000 annually | [Seek.com.au ↗](https://www.seek.com.au) (security/AppSec roles) |

**Salary rule:** USD data cited from Glassdoor, PayScale, and ZipRecruiter (Feb–May 2026 surveys). ZAR converted from USD at prevailing exchange rate; no region-specific ZA AppSec salary data available. GBP and EUR derived from general AppSec role postings; certs in demand typically place at upper ranges. Salaries vary by location, employer type (consulting, enterprise, startup, bug bounty platforms), specialization (Burp Suite expertise, API focus), and years of experience.

---

## Skills validated

*Concrete technologies, protocols, and tools this exam actually tests.*

- **Web protocols** — HTTP/1.1, HTTP/2, TLS/SSL, DNS, WebSocket
- **Reconnaissance & scanning tools** — Burp Suite (Community & Pro), OWASP ZAP, Nmap, theHarvester, Shodan
- **Exploitation tools** — sqlmap, SQLninja, XSSer, Commix, Burp Suite (active scanning, intruder), Nikto
- **HTTP interceptor/proxy tools** — Burp Suite Proxy, OWASP ZAP Proxy, Fiddler (Windows), mitmproxy (Linux/macOS)
- **JavaScript analysis** — Browser DevTools (Chrome, Firefox), BeautifulSoup, regular expression analysis, deobfuscation techniques
- **API testing tools** — Postman, Insomnia, Burp Suite (REST/GraphQL support), curl, jq (JSON parsing)
- **Cryptographic assessment** — OpenSSL, hashcat, John the Ripper (password analysis post-breach context)
- **OWASP Top 10 (2021)** — understanding each category, exploitation techniques, remediation strategies
- **Web frameworks & languages** — PHP, Node.js, Java Spring, ASP.NET (basics); template engines (Jinja2, Twig, ERB)
- **Incident communication** — CVSS v3.1 scoring, risk-based reporting, remediation prioritization

---

## Related certifications

- **Stacks with:** [GIAC Certified Ethical Hacker (GCIH) ↗](../../Vendors/GIAC_GCIH_Incident_Handler.md) — incident response complement to offensive testing
- **Stacks with:** [GIAC Security Essentials (GSEC) ↗](../../Vendors/GIAC_GSEC_Security_Essentials.md) — foundational security knowledge prerequisite
- **Prerequisite for:** [GIAC Certified Exploitation Analyst (GXPN) ↗](../../Vendors/GIAC_GXPN_Exploitation_Analyst.md) — advanced exploitation and custom tool development
- **Equivalent (different vendor):** [CompTIA Security+ (with AppSec focus) ↗](../../Vendors/CompTIA_Security_Plus.md) — entry-level alternative (CompTIA cert)
- **Vendor overview:** [GIAC/SANS Vendor Overview ↗](../../Vendors/GIAC_SANS_Vendor_Overview.md)

---

## Sources

- GIAC Web Application Penetration Tester (GWAPT): https://www.giac.org/certifications/web-application-penetration-tester-gwapt
- SANS SEC542 Course: https://www.sans.org/cyber-security-courses/web-application-penetration-testing-ethical-hacking
- GIAC Pricing: https://www.giac.org/pricing
- OWASP Top 10 (2021): https://owasp.org/Top10/
- PortSwigger Burp Suite Academy: https://portswigger.net/web-security
- PayScale AppSec Salary Data: https://www.payscale.com
- ZipRecruiter Penetration Tester Salary: https://www.ziprecruiter.com

---

*Last verified: 2026-05-02*  
*Parent ecosystem: [GIAC/SANS Vendor Overview](../../Vendors/GIAC_SANS_Vendor_Overview.md)*  
*Parent domain: [Security/Application Security Domain](../../Domains/Security_Application_Security.md)*  
*Vendor overview: [GIAC/SANS Overview](../../Vendors/GIAC_SANS_Vendor_Overview.md)*
