---
cert_name: "Offensive Security Certified Professional"
cert_code: "OSCP"
vendor: "Offensive Security (OffSec)"
status: "Active"
level: "Professional"
domain: "Security"
ecosystem: "OffSec"
last_verified: "2026-05-01"
aliases: ["OSCP", "PEN-200", "Offensive Security Certified Professional (OffSec)"]
---

# Offensive Security Certified Professional (OSCP)

**`OSCP`** · ● **Active** · **Professional** · _Offensive Security_

> The gold-standard hands-on penetration testing certification. A grueling 24-hour practical exam with no multiple choice—you must compromise real machines, escalate privileges, and document your methodology. OSCP holders are immediately recognizable in job markets worldwide. Passing requires mastery of reconnaissance, exploitation, privilege escalation, active directory compromise, and under-pressure problem-solving.

---

## Exam facts

| Field | Value |
|---|---|
| Cost | $1,749 USD (Course + Cert Bundle with 90-day lab access + 1 exam attempt); $1,699 standalone exam (2 attempts); $2,749 Learn One (annual subscription with 2 attempts); retake $249/attempt |
| Duration | 23 hours 45 minutes hands-on exam + 24 hours for report submission (total 47.75 hours) |
| Questions | Not applicable — practical lab exam with live systems |
| Passing | 70 points out of 100 (no bonus points as of Nov 1, 2024) |
| Format | Practical hands-on: compromise 3 standalone machines (20 pts each) + 1 Active Directory set (40 pts); open-book with notes and online resources allowed (no AI chatbots/LLMs); all activity confined to proctored machine |
| Delivery | Remote proctored via OffSec's proprietary testing platform (ProctorU-like environment) |
| Languages | English (primary); learning materials translated to select languages but exam administered in English |
| Valid | Lifetime (no renewal required; holders retain credential unless revoked) |
| Renewal | N/A — credential does not expire after award |
| Prerequisites | None formally required; OffSec recommends 2–3 years hands-on Linux/Windows IT experience and networking knowledge |
| Released | 1999 (original PWK course, "Penetration Testing with Backtrack"); continuously updated (PEN-200 launch 2022, major AD update 2024) |
| Retiring | N/A |

**Vendor source —** [OffSec OSCP Certification ↗](https://www.offsec.com/courses/pen-200/)

**Official exam guide —** [OSCP Exam Guide ↗](https://help.offsec.com/hc/en-us/articles/360040165632-OSCP-Exam-Guide)

**Exam FAQ —** [OSCP+ Exam FAQ ↗](https://help.offsec.com/hc/en-us/articles/4412170923924-OSCP-Exam-FAQ)

**Pricing —** [OffSec Pricing ↗](https://www.offsec.com/pricing/)

---

## About

The **Offensive Security Certified Professional (OSCP)** is the industry's premier hands-on penetration testing credential, recognized globally as the gold standard for red team operators, penetration testers, and security consultants. Established in 1999 as **Penetration Testing with BackTrack (PWK)**, the course was rebranded to **Penetration Testing with Kali Linux (PEN-200)** in 2022 following OffSec's acquisition and modernization efforts. Unlike multiple-choice certification exams that test theoretical knowledge, the OSCP demands candidates prove **practical exploitation mastery** in a 24-hour proctored, hands-on lab environment. Candidates must compromise a network of live systems (3 standalone machines + 1 Active Directory domain), escalate privileges, and document methodology in a professional penetration test report submitted within 24 hours of exam completion.

The certification has evolved to reflect modern attack vectors: stack-based buffer overflow fundamentals (legacy but essential), OWASP Top 10 web application vulnerabilities, active directory exploitation (Kerberoasting, AS-REP roasting, lateral movement), privilege escalation on both Linux and Windows, network pivoting through internal network segments, and post-exploitation reporting standards suitable for client delivery. The credential is **lifetime valid**—no recertification, no continuing education credits required—and is explicitly recognized by **US DoD 8570.01-M standards** as satisfying IA Technical-level requirements for government contracting roles. OSCP-certified professionals command premiums of $35K–$50K USD annually over non-certified peers in identical roles, reflecting market recognition of this credential's difficulty and value.

**Passing rate:** Approximately 60–65% (as of 2024–2026), compared to 80–90% on vendor-neutral certs like CompTIA PenTest+. This difficulty level makes OSCP a genuine achievement in the cybersecurity community and a strong hiring signal for employers seeking demonstrably competent red teamers. The exam is designed to be **unscorable by rote memorization**—it requires methodical troubleshooting, adaptation when initial exploits fail, and the ability to work under sustained time pressure and fatigue.

---

## Domain context — Security

Penetration testing and offensive security operations. OSCP validates the core competencies for red team roles: reconnaissance, scanning, enumeration, exploitation, privilege escalation, and reporting.

[Read full deep dive — OffSec Ecosystem ↗](../../Ecosystems/OffSec_Ecosystem.md)

---

## Exam structure in detail

The OSCP exam is **entirely practical**—no multiple-choice, no theory questions, no simulations. You are given remote access to a lab network containing 4 target systems:

1. **Standalone Machine 1** (20 points) — Full system compromise required; user + root/SYSTEM access.
2. **Standalone Machine 2** (20 points) — Full system compromise required; user + root/SYSTEM access.
3. **Standalone Machine 3** (20 points) — Full system compromise required; user + root/SYSTEM access.
4. **Active Directory Domain Set** (40 points) — Multiple machines in an AD environment. Compromise domain controller or escalate to Domain Admin equivalent.

**Passing requirement:** 70 points out of 100 (minimum 3.5 machines at full compromise).

**Exam rules:**
- **Open-book:** You may use your notes, OffSec learning materials, and pre-cached online resources (man pages, GitHub, exploit databases, etc.).
- **Prohibited:** Real-time ChatGPT/Claude/AI chatbot usage; accessing external resources not previously saved; sharing exam details; automated scanning beyond nmap/Burp/MSF.
- **Environment:** All work confined to the proctored exam VM; proctors monitor via webcam and screen share continuously.
- **Reporting:** After the 24-hour exam window closes, you have 24 additional hours to write and submit a professional penetration test report documenting your methodology, findings, proofs of compromise (screenshots), and remediation recommendations.

**Report submission failure = automatic fail**, even if you scored 70+ points in the lab. Professional report writing is a core skill tested.

---

## Topics covered

The PEN-200 course and OSCP exam cover the following domains:

- **Reconnaissance & Information Gathering** — Passive reconnaissance, active scanning, footprinting, OSINT, DNS enumeration, web application discovery.
- **Scanning & Enumeration** — Port scanning (nmap), service enumeration, OS fingerprinting, vulnerability assessment tools.
- **Buffer Overflow Fundamentals** — Stack-based buffer overflows, EIP control, shellcode creation, bad character filtering, immunity debugger techniques.
- **Web Application Penetration Testing** — OWASP Top 10 vulnerabilities, SQL injection, cross-site scripting (XSS), cross-site request forgery (CSRF), file upload bypass, authentication bypass.
- **Privilege Escalation (Linux)** — Kernel exploits, sudo misconfiguration, SUID binaries, cron jobs, library preloading, Python/shell script exploitation.
- **Privilege Escalation (Windows)** — UAC bypass, token impersonation, DLL injection, registry exploitation, scheduled task abuse, service misconfiguration.
- **Active Directory Exploitation** — Kerberos attacks (AS-REP roasting, Kerberoasting), LDAP enumeration, bloodhound analysis, lateral movement, domain escalation.
- **Network Pivoting & Tunneling** — SSH tunneling, port forwarding, socks proxies, metasploit pivoting, chisel/ligolo techniques.
- **Post-Exploitation & Reporting** — Persistence mechanisms, data exfiltration, covering tracks, proof of concept documentation, professional report writing.
- **Exploit Modification & Development** — Taking public exploits and customizing for target environment, basic shellcode modification.

*Source:* [OffSec PEN-200 Course Syllabus ↗](https://www.offsec.com/courses/pen-200/)

---

## Common skills at Security · Professional

*Shared competencies across the security domain at professional level — not specific to OSCP, but foundational for offensive security roles.*

- **Network architecture reasoning** — Understanding segmentation, trust boundaries, and how systems communicate to identify attack paths.
- **Active directory reconnaissance** — Enumerating users, groups, permissions, and trust relationships to identify privilege escalation vectors.
- **Linux system hardening analysis** — Identifying misconfigured permissions, kernel versions, and service weaknesses.
- **Exploit chain construction** — Chaining multiple vulnerabilities (e.g., initial access + privilege escalation + lateral movement) into a complete attack narrative.
- **Technical documentation** — Writing clear, reproducible proof-of-concept reports suitable for executive review and remediation.
- **Methodical troubleshooting under pressure** — Debugging failed exploits, adjusting tactics, and maintaining composure during high-stress time-limited scenarios.

---

## Recommended courses at Security · Professional

| Provider | Title | Cost | URL |
|---|---|---|---|
| OffSec Official | PEN-200: Penetration Testing with Kali Linux (90-day access + course bundle) | $1,749 | [↗](https://www.offsec.com/courses/pen-200/) |
| OffSec Official | Learn One (annual subscription with year-round lab access) | $2,749 | [↗](https://www.offsec.com/pricing/) |
| IppSec / YouTube | OSCP Prep Stream (free guided walkthroughs of HackTheBox machines) | Free | [↗](https://www.youtube.com/@IppSec) |
| Cyber Aces (OffSec-affiliated) | Bash Scripting Fundamentals | Free | [↗](https://www.cyberaces.org/) |
| PentesterLab (independent) | Pentesting Essentials Path + OSCP-aligned labs | $99–$199 | [↗](https://pentesterlab.com/) |

**Course-selection rule:** The OffSec PEN-200 course is mandatory for most candidates—it provides access to practice labs that mirror the exam environment. Independent platforms (HackTheBox, TryHackMe, Proving Grounds) supplement the course but do not replace it.

---

## Practice exams

| Provider | Title | Cost | URL |
|---|---|---|---|
| OffSec Official | Proving Grounds Practice (OffSec-curated machines) | $20 | [↗](https://www.offsec.com/offsec/provinggrounds/) |
| HackTheBox | Retired machines (TJ Null's OSCP list) | $20–$99/month | [↗](https://www.hackthebox.com/) |
| TryHackMe | OSCP-aligned rooms (CTF-style, guided) | Free / $30/month premium | [↗](https://tryhackme.com/) |
| OffSec Proving Grounds | Free Play version (basic lab environment) | Free | [↗](https://www.offsec.com/offsec/provinggrounds/) |

**Practice-selection strategy:** Start with OffSec Proving Grounds Practice (made by OffSec exam designers), then use TJ Null's curated HackTheBox list for additional machines, then TryHackMe for targeted skills gaps. Most successful candidates complete 40–60 practice machines before exam day.

---

## Books

| Title | Author | Publisher | Year | ISBN | URL |
|---|---|---|---|---|---|
| Penetration Testing: A Hands-on Introduction to Hacking | Georgia Weidman | No Starch Press | 2014 | 978-1593275648 | [↗](https://nostarch.com/penetration-testing-hands-introduction-hacking) |
| The Hacker Playbook 3: Practical Guide To Penetration Testing | Peter Kim | (Independent) | 2018 | 978-1980901754 | [↗](https://www.amazon.com/Hacker-Playbook-Practical-Penetration-Testing/dp/1980901759) |
| The Web Application Hacker's Handbook (2nd Edition) | Stuttard & Pinto | Wiley | 2011 | 978-1118026472 | [↗](https://www.wiley.com/en-us/The+Web+Application+Hacker%27s+Handbook%2C+2nd+Edition-p-9781118026472) |
| Practical Binary Analysis | Dennis Andreuccetti | No Starch Press | 2018 | 978-1593275099 | [↗](https://nostarch.com/binaryanalysis) |

**Book rule:** Weidman's book is foundational and recommended as prerequisite reading before PEN-200 (covers basic methodology). Kim's Hacker Playbook 3 is tactical reference material. OWASP Top 10 is assumed knowledge; the Hacker's Handbook covers advanced web application exploitation not detailed in PEN-200 but useful for OSCP exam targets.

---

## Typical job titles at Security · Professional

**Penetration Tester** · **Red Team Operator** · **Security Consultant (Offensive)** · **Vulnerability Assessor** · **Offensive Security Engineer** · **Security Research Analyst** · **Application Security Engineer** · **Incident Response Specialist**

*(Job titles drawn from current job-board postings (LinkedIn, Indeed, Glassdoor) that list OSCP as required or strongly preferred.)*

---

## Salary

| Region | Range | Source |
|---|---|---|
| USD | $116,888–$206,119 (25th–75th percentile) | [Glassdoor Penetration Tester ↗](https://www.glassdoor.com/Salaries/penetration-tester-salary-SRCH_KO0,18.htm) — avg $154,271 · [PayScale Penetration Tester ↗](https://www.payscale.com/research/US/Job=Penetration_Tester/Salary) |
| USD (Senior) | $180,000–$240,000+ | OSCP-certified lead roles at consultancies (Mandiant, Synack, Offensive Security Services); top earners ($265,000+) in FAANG security operations |
| GBP | £45,000–£75,000 | [IT Jobs Watch ↗](https://www.itjobswatch.co.uk/) · [Hays Cybersecurity Report ↗](https://www.hays.co.uk/salary-guide) |
| ZAR | R800,000–R1,400,000 (annualized) | [PayScale ZA OSCP ↗](https://www.payscale.com/research/ZA/Certification=Offensive_Security_Certified_Professional_(OSCP)/Salary) · [Pnet Security ↗](https://www.pnet.co.za/) · [CareerJunction ↗](https://www.careerjunction.co.za/) |
| EUR | €55,000–€100,000 (DE/FR/NL) | [Robert Half Europe Tech ↗](https://www.roberthalf.eu/) · [Heidrick & Struggles ↗](https://www.heidrick.com/) |
| AUD | A$80,000–A$150,000 | [Seek Australia ↗](https://www.seek.com.au/) |

**Salary analysis:** OSCP holders command significant premiums—real-world data indicates a $35K–$50K USD salary bump over non-certified peers in identical roles. **Entry-level** (0–2 years, fresh OSCP): $80K–$110K USD. **Mid-level** (3–7 years): $130K–$180K USD. **Senior/Lead** (7+ years, team lead or principal pen tester): $180K–$250K+ USD. **Top tier** (CISO advisory, independent consulting, OSINT/threat intelligence firms): $200K–$400K+ USD. South African OSCP demand is concentrated in Johannesburg (Gauteng Province, finance sector) and Cape Town (Western Cape, tech hubs); salary variance by city is 25–35%. GBP figures reflect London-centric market; regional UK variance (Manchester, Edinburgh) is 15–20% lower. AUD reflects major cities (Sydney, Melbourne); Perth and Brisbane typically 10–15% below Sydney baseline.

---

## Skills validated

*Cert-specific — what this exam actually tests, distinct from the shared "Common skills" above.*

### Reconnaissance & Enumeration
- **Passive OSINT** — Using Shodan, Google dorking, DNS brute-forcing, whois/WHOIS history, SSL certificate enumeration to map attack surface.
- **nmap scanning** — Host discovery, port scanning (TCP SYN, UDP, ACK), OS fingerprinting, service version detection, NSE script execution.
- **Service enumeration** — Banner grabbing, SMB enumeration (crackmapexec, smbmap), LDAP queries, snmp-walk, DNS zone transfers.

### Exploitation Fundamentals
- **Buffer overflow exploitation** — Stack-based overflows, payload encoding, bad character filtering, SEH (structured exception handling) overwrite, ROP gadget chains, ASLR/NX mitigation techniques.
- **Metasploit framework** — Database creation, module selection, payload generation via msfvenom, evasion (encoders, encryptors, shims), exploit staging.
- **Custom exploit modification** — Adjusting public exploits for target environment, shellcode mutation, rebasing addresses for successful exploitation.

### Web Application Penetration Testing
- **OWASP Top 10 vulnerabilities** — SQL injection (union-based, time-based blind, boolean blind), XSS (stored/reflected), CSRF, XXE injection, insecure deserialization, authentication bypass, path traversal.
- **Burp Suite mastery** — Proxy interception, Repeater for payload testing, Scanner for automated detection, Intruder for credential brute-forcing, plugin development.
- **File upload bypass** — MIME type manipulation, null byte injection, double extension abuse, polyglot file creation for arbitrary code execution.

### Active Directory Exploitation
- **Kerberos attacks** — AS-REP roasting (users with pre-auth disabled), Kerberoasting (TGS-REP ticket capture), golden/silver ticket creation, pass-the-ticket attacks, NTLM relay.
- **LDAP enumeration** — Using ldapsearch, ADExplorer, BloodHound data collection, ACL analysis, trust relationship mapping.
- **Lateral movement** — Token impersonation (SeImpersonate, SeAssignPrimaryToken via Juicy Potato/PrintSpoofer), DLL injection, registry abuse, scheduled task hijacking.
- **Domain privilege escalation** — DCSync attacks, kdsvc exploitation, GPP password decryption, Domain Admin harvesting.

### Privilege Escalation (Linux)
- **Kernel exploitation** — Identifying vulnerable kernel versions (Dirty COW, kernel 2.6/3.x/4.x specific CVEs), compiling and executing kernel exploits.
- **Sudo misconfigurations** — NOPASSWD entries, sudo wildcards, LD_PRELOAD bypass, command aliases.
- **SUID abuse** — Finding exploitable SUID binaries (find, cp, mv, vim), capability-based privilege escalation.
- **Cron job hijacking** — Path manipulation, wildcard expansion, file overwrite in cron scripts, at job abuse.
- **Library preloading** — LD_LIBRARY_PATH injection, LD_PRELOAD with custom .so files, libc interception.

### Privilege Escalation (Windows)
- **Token manipulation** — Impersonation tokens (SeImpersonate), primary tokens, delegation tokens, incognito module usage.
- **Service misconfiguration** — Unquoted service paths, weak service permissions (WRITE_DAC, WRITE_OWNER), service binary replacement, service startup hijacking.
- **Registry exploitation** — AlwaysInstallElevated abuse, autoruns modification, RunOnce/Run key persistence and elevation.
- **UAC bypass** — fodhelper.exe exploitation, registry bypass techniques, elevated process spawning from unelevated context.
- **Scheduled task abuse** — Task creation with SYSTEM privileges, XML-based task manipulation, temporal task scheduling.

### Network Pivoting & Tunneling
- **SSH tunneling** — Local port forwarding (-L), remote port forwarding (-R), dynamic proxies (-D), SOCKS proxy chaining.
- **Proxy tools** — chisel (lightweight TCP/UDP tunneling), ligolo-ng (encrypted tunneling), sshuttle (subnet tunneling), proxychains configuration.
- **Metasploit pivoting** — meterpreter route command, portfwd functionality, multi-hop exploitation chains.

### Post-Exploitation & Reporting
- **Persistence mechanisms** — SSH key placement, crontab backdoors, rc.local modification, systemd service creation, Windows Run registry keys, scheduled tasks, WMI event subscriptions.
- **Proof-of-concept documentation** — Comprehensive step-by-step reproduction guides, command output screenshots, timestamp evidence, hash verification of modified files.
- **Professional reporting** — Executive summary, CVSS scoring, risk ratings (critical/high/medium/low), remediation recommendations suitable for C-suite and IT operations review.

---

## Related certifications

### OffSec Pathway (specialization track)
- **Stacks with:** [OSEP (OffSec Certified Expert - Evasion) ↗](./OffSec_OSEP_PEN-300.md) — next step for evasion/defense bypassing · [OSWE (OffSec Certified Web Expert) ↗](./OffSec_OSWE_WEB-300.md) — specialize in web application exploitation · [OSED (OffSec Certified Exploit Developer) ↗](./OffSec_OSED_EXP-301.md) — advance to custom exploit development
- **Path to OSCE3:** Award OSCE3 Offensive Security Certified Expert upon earning any TWO of {OSWE, OSEP, OSED} after OSCP. This three-cert stack signals elite-level penetration testing mastery.

### Competitive / Cross-Vendor certs
- **Similar scope, lower prestige:** [CompTIA PenTest+ (PT0-003) ↗](file_not_yet_created) — vendor-neutral, less hands-on, DoD 8570 recognized but 40% pass rate vs OSCP's 60–65%.
- **Entry-level precursor (optional):** eLearnSecurity eJPT / eCPPT — lighter alternative for foundational skills, but OSCP does not require prerequisites.
- **Equivalents (web-focused):** GWAPT (GIAC Web Application Penetration Tester) — more formal exam-based, fewer practical labs.
- **DoD 8570 compliance:** OSCP satisfies IA Technical level requirement; frequently requested in government contracting (DISA, NSA, CISA roles).

### Typical career progression
1. **Foundation** → CompTIA Security+ / Network+ (if no prior cert).
2. **Entry offensive** → OSCP (24-month lab trial, first hands-on credential).
3. **Specialization** → OSEP (evasion), OSWE (web), OSED (exploit dev), GCEA (cloud exploitation), GPEN (traditional pen testing).
4. **Leadership** → GIAC GIAC GWEB, GIAC GPEN, or vendor-neutral PM credentials (PMP, ITIL) for consulting leads.

### Vendor overview
[OffSec Vendor Overview ↗](../../Vendors/OffSec_Vendor_Overview.md) — Complete ecosystem: PWK/PEN-200 (foundational), PEN-300/OSEP (evasion), WEB-300/OSWE (web), EXP-301/OSED (exploit dev), courses available via Learn One annual subscription.

---

## Preparation tips & realistic timeline

### Study duration
- **Minimum:** 3–4 months of intensive part-time study (20–30 hours/week) after completing the PEN-200 course labs.
- **Realistic:** 6–12 months for professionals working full-time jobs; 3–6 months for dedicated boot-camp attendees.
- **Extended:** 12–24 months if starting from foundational IT (no Linux experience, minimal networking knowledge).

### Study strategy
1. **Complete all PEN-200 course modules and labs** (typically 100–150 hours). Do not skip modules; even buffer overflow (rarely tested in modern networks) is worth understanding for exam credibility.
2. **Complete 20+ practice machines** on OffSec Proving Grounds Practice before attempting the full exam simulation. Aim for rooting at least 10 without walkthroughs.
3. **Practice active directory exploitation** explicitly — this is the highest-value 40-point section and requires understanding of Kerberos, LDAP, and lateral movement chains.
4. **Mock exam simulation:** Attempt at least 2 full 24-hour exam simulations using HackTheBox or Proving Grounds Practice before booking your real exam.
5. **Report writing drills:** Practice writing professional penetration test reports. The report is 50% of the grade; poor documentation fails even lab compromises.

### Common failure points
- **Stopping after PEN-200:** The course labs are significantly easier than exam targets. Failing to do independent practice machines results in exam failure 40% of the time.
- **Weak exploitation methodology:** Blindly running exploit frameworks without understanding what is happening. Exam targets require creative exploitation and customization.
- **Poor time management:** Spending 15+ hours on a single machine while others remain untouched. Set time limits per target (e.g., 6 hours max per 20-point machine).
- **Neglecting the report:** Excellent lab work with a poor report = automatic failure. Plan to spend 6–8 hours on the report after your exam window closes.

### Realistic success factors
- **Linux fluency:** Comfort with bash, file permissions, service enumeration, privilege escalation enumeration scripts.
- **Active Directory knowledge:** Understanding of Kerberos protocol, LDAP, trust relationships, token impersonation, domain escalation techniques.
- **Metasploit proficiency:** Able to generate payloads, customize exploits, use evasion encoders, understand module options without reading every help text.
- **Mental resilience:** The 24-hour exam is grueling. Sleep deprivation, frustration, and false starts are normal. Passing requires the ability to pivot when exploits fail.

---

## Sources

- OffSec OSCP Certification: https://www.offsec.com/courses/pen-200/
- OSCP Exam Guide: https://help.offsec.com/hc/en-us/articles/360040165632-OSCP-Exam-Guide
- OSCP Exam FAQ: https://help.offsec.com/hc/en-us/articles/4412170923924-OSCP-Exam-FAQ
- OffSec Pricing: https://www.offsec.com/pricing/
- Glassdoor Penetration Tester Salary: https://www.glassdoor.com/Salaries/penetration-tester-salary-SRCH_KO0,18.htm
- StationX OSCP Salary Guide: https://www.stationx.net/oscp-certification-salary/
- Glassdoor OSCP Salary: https://www.glassdoor.com/Salaries/oscp-salary-SRCH_KO0,4.htm

---

*Last verified: 2026-05-01*
*Parent ecosystem: [OffSec Ecosystem](../../Ecosystems/OffSec_Ecosystem.md)*
*Parent domain: [Security Domain](../DOM06_Security_Domain.md)*
*Vendor overview: [OffSec Vendor Overview](../../Vendors/OffSec_Vendor_Overview.md)*
