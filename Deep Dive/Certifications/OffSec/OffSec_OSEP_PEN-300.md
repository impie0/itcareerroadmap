---
cert_name: "Offensive Security Experienced Penetration Tester"
cert_code: "OSEP"
vendor: "Offensive Security (OffSec)"
status: "Active"
level: "Expert"
domain: "Security"
ecosystem: "OffSec"
last_verified: "2026-05-02"
aliases: ["OSEP", "PEN-300", "Offensive Security Experienced Penetration Tester (OffSec)", "Advanced Evasion Techniques and Breaching Defenses"]
---

# Offensive Security Experienced Penetration Tester (OSEP)

**`OSEP`** · ● **Active** · **Expert** · _Offensive Security_

> The advanced credential for red teamers and penetration testers ready to breach modern defense-in-depth environments. OSEP (PEN-300) builds on OSCP mastery with focus on antivirus/EDR evasion, advanced Active Directory attacks, application whitelisting bypass, custom tooling, and operating undetected in mature corporate networks. Passing requires 47.75 hours of hands-on lab work, proof of concept development, and a comprehensive attack narrative report.

---

## Exam facts

| Field | Value |
|---|---|
| Cost | $1,499 USD (Course + 90-day lab access + 1 exam attempt, 2026); standalone exam $299; Learn One subscription $2,749 annually (includes PEN-300 course + labs + 2 exam attempts) |
| Duration | 47 hours 45 minutes hands-on exam + 24 hours for report submission (total 71.75 hours) |
| Questions | Not applicable — practical lab exam with live systems and AD environment |
| Passing | 100 points out of 100 (objective-based: capture designated flags/access objectives) OR demonstrate business-relevant compromise (see exam guide) |
| Format | Practical hands-on: breach a simulated corporate network with multiple systems (workstations, servers, domain controller); must demonstrate evasion, lateral movement, and persistence; open-book with prior resources; no real-time AI assistance |
| Delivery | Remote proctored via OffSec's proprietary testing platform; requires continuous webcam + screen monitoring throughout exam window |
| Languages | English (primary); exam administered in English only |
| Valid | Lifetime (no renewal required; credential does not expire after award) |
| Renewal | N/A — credential is lifetime valid |
| Prerequisites | OSCP (strongly recommended; PEN-300 assumes OSCP-level skills in enumeration, exploitation, privilege escalation) OR equivalent demonstrated experience in penetration testing fundamentals |
| Released | 2016 (original Advanced Penetration Testing course); renamed PEN-300/OSEP 2022; updated 2024 for modern defenses (AMSI, EDR, constrained PowerShell) |
| Retiring | N/A |

**Vendor source —** [OffSec OSEP Certification ↗](https://www.offsec.com/courses/pen-300/)

**Official exam guide —** [OSEP Exam Guide ↗](https://help.offsec.com/hc/en-us/articles/360050293792-OSEP-Exam-Guide)

**Pricing & enrollment —** [OffSec Pricing ↗](https://www.offsec.com/pricing/)

---

## About

The **Offensive Security Experienced Penetration Tester (OSEP)** is the advanced-level credential for red team operators, adversary simulation specialists, and senior penetration testers tasked with breaching mature, defense-hardened corporate environments. Launched in 2016 as the "Advanced Penetration Testing" course and rebranded to **PEN-300/OSEP** in 2022, OSEP represents the next evolutionary step beyond OSCP for those who have mastered basic exploitation and privilege escalation. Unlike OSCP's focus on broad networking reconnaissance and fundamental exploitation chains, OSEP assumes OSCP-level skills and demands mastery of **modern defensive evasion**, **advanced Active Directory exploitation**, **custom tool development**, and **covert operations tradecraft**.

The credential explicitly targets the gap between penetration testers who can compromise *undefended* systems and those capable of compromising *defended* systems running modern endpoint detection and response (EDR), antivirus engines, application whitelisting, and constrained execution environments. The exam is built on the principle of **"living off the land"**—using legitimate Windows/Linux utilities (LOLBins), exploiting misconfigurations in mature directory services, and writing custom C# and PowerShell tooling to bypass signature-based detection. The 47.75-hour practical exam is **entirely objective-driven**: you are provided business goals (e.g., "obtain Domain Admin credentials," "exfiltrate a specific database") and must achieve those objectives while maintaining operational security and documenting your methodology in a professional attack narrative.

OSEP is **not a prerequisite for any other OffSec certification** but is recognized as a career-accelerating credential that commands premium salaries ($135K–$200K USD annually) and immediate hiring consideration at elite red team shops (Mandiant, Coalfire, Synack) and Fortune 500 CISO operations. Passing rate is approximately 50–60% (lower than OSCP's 60–65%), reflecting the increased complexity and reliance on custom problem-solving rather than rote methodology.

---

## Domain context — Security

Advanced offensive security operations, red team simulation, and defense evasion. OSEP validates expertise in breaching mature, defense-in-depth corporate networks where attackers must develop custom tooling, understand and bypass modern endpoint protections (EDR, AMSI, whitelisting), and operate undetected while achieving business-relevant objectives.

[Read full deep dive — OffSec Ecosystem ↗](../../Ecosystems/OffSec_Ecosystem.md)

---

## Exam structure in detail

The OSEP exam is a **72-hour engagement** (47.75 hours hands-on lab + 24 hours report writing) in which you are granted access to a **simulated corporate network** containing multiple systems:

### Network topology
- **Firewall-protected perimeter** with realistic network segmentation
- **Multiple workstations and servers** (Windows 10/11, Windows Server 2016–2022, potentially Linux)
- **Active Directory domain** with Domain Controller, member servers, and client machines
- **Application servers** (e.g., web servers, database servers, mail services) with realistic misconfigurations
- **Endpoint protection stack** including antivirus, EDR, application whitelisting (AppLocker/WDAC), and constrained PowerShell language mode

### Objectives
You are provided a **list of business objectives** such as:
- "Obtain Domain Admin credentials and maintain persistent access"
- "Retrieve sensitive data from database server X"
- "Escalate from domain user to Domain Admin via Kerberos attacks"
- "Execute code on server Y without triggering EDR alerts"

These are **flexible, not prescriptive**—the exam challenges adaptive problem-solving, not following a fixed exploitation path.

### Exam rules
- **Open-book:** You may use your notes, OffSec learning materials, pre-saved online resources, GitHub exploits, and reference documents.
- **Prohibited:** Real-time ChatGPT/Claude/AI chatbot usage; accessing live internet resources not previously cached; commercial exploit tools (Metasploit is allowed within limits); copying unmodified, publicly available exploits without understanding them.
- **Proctoring:** Continuous webcam monitoring, screen sharing, and keystroke auditing throughout the exam window.
- **Reporting:** After the lab window closes, you have 24 hours to write and submit a professional penetration test report in PDF format (.7z archived) that documents your methodology, PoCs, screenshots, and remediation recommendations.
- **Proof:** All objectives must be supported by evidence (screenshots, command output, flag/credential capture) embedded in your final report.

### Passing criteria
- **Objective-based:** Achieve all designated business objectives (e.g., Domain Admin access) AND demonstrate understanding of how you achieved each goal.
- **Points:** If objectives are not explicitly tracked, you must score **100 points out of 100** based on compromise depth and evasion quality.
- **Report quality:** A weak report fails you even if lab objectives are met. The report must be suitable for delivery to a Fortune 500 CISO or government client.

---

## Topics covered

The PEN-300 course and OSEP exam cover the following advanced offensive security domains:

### Advanced Active Directory Attacks
- **Kerberos delegation abuse** (unconstrained delegation, constrained delegation, resource-based constrained delegation)
- **DCSync attacks** and dcsync tool usage to extract password hashes without code execution on Domain Controller
- **Golden/Silver Ticket creation** for forged authentication and persistence
- **Pass-the-Hash (PtH) at scale** — harvesting NTLM hashes and using them for lateral movement
- **Kerberoasting and AS-REP roasting** at advanced scale
- **Trust relationship exploitation** (external trusts, forest trusts, one-way trusts for privilege escalation)
- **Group Policy abuse** and Group Policy Preferences for privilege escalation

### Antivirus & EDR Evasion Techniques
- **AMSI bypass** (Win32 API patching, COM object manipulation, alternative evasion vectors)
- **ETW (Event Tracing for Windows) patching** to disable logging and breach detection
- **Shellcode obfuscation** (XOR encoding, polymorphic shellcode, staged payloads)
- **Process injection techniques** (classic DLL injection, process hollowing, direct syscalls, Heaven's Gate)
- **EDR detection evasion** (parent process spoofing, API unhooking, direct system calls, kernel callbacks)
- **Signature evasion** (polymorphic tools, encoding, obfuscation, custom tool development)

### Process Injection & Advanced Execution
- **Classic DLL injection** via CreateRemoteThread
- **Process hollowing** (suspend, unmap, inject, resume)
- **AtomBombing** (atom tables for inter-process code injection)
- **Direct syscalls** bypassing user-mode NTDLL hooks
- **Heaven's Gate technique** for 32-bit shellcode execution in 64-bit processes
- **Callback-based execution** (fiber injection, co-routine callbacks, APC queue injection)

### Custom Tooling & Exploit Development
- **C# tool development** (SharpCollection utilities, custom C# implants)
- **PowerShell tool development** (advanced functions, script obfuscation, reflective DLL injection via PowerShell)
- **Shellcode modification & customization** for target environment
- **Metasploit module customization** and payload adaptation
- **Python exploit scripting** for automation and custom exploitation

### Application Whitelisting Bypass
- **Windows Defender Application Control (WDAC)** policy analysis and bypass
- **AppLocker** rule enumeration and evasion (folder/hash/publisher whitelisting bypasses)
- **LOLBINS (Living Off the Land Binaries)** — abuse of legitimate Windows executables (regsvcs, msbuild, psexec, cscript, wscript, rundll32, etc.)
- **Script block logging bypass** in PowerShell
- **Constrained Language Mode bypass** in PowerShell execution
- **DLL side-loading** via application whitelisting gaps

### Advanced Lateral Movement
- **COM object hijacking** for privilege escalation and lateral movement
- **DCOM exploitation** (ShellBrowserWindow, Excel.Application, Outlook.Application for RCE)
- **WMI event subscriptions** for persistence and lateral execution
- **Scheduled task creation** via remote RPC for execution
- **Service creation** via RPC for lateral persistence
- **Registry-based lateral movement** (remote registry operations for command execution setup)

### Constrained Language Mode Bypass
- **Identifying CLM enforcement** and detection evasion
- **FullLanguage mode recovery** via trusted processes
- **Module preloading** to bypass CLM
- **Argument conversion attacks** for CLM evasion
- **Reflection.Assembly** loading for unmanaged code execution

### Advanced Phishing & Initial Access
- **Spear phishing** with custom payloads (Office macro injection, embedded ActiveX, OLE links)
- **Living-off-the-land payloads** (PowerShell, cmd, script blocks in file formats)
- **C2 redirectors** and multi-stage payload delivery
- **Trusted execution paths** for initial compromise
- **USB and physical delivery** vectors (OffSec labs simulate this scenario)

### Microsoft SQL Server as Attack Vector
- **SQL Server enumeration** (sa credentials, linked servers, agent jobs)
- **sp_oacreate abuse** for command execution from SQL context
- **Agent job exploitation** for lateral movement
- **Credential harvesting** from SQL Server connections
- **Database access for data exfiltration** and business objective achievement

### Advanced Post-Exploitation & Persistence
- **Persistence mechanisms** (WMI event subscriptions, scheduled tasks, run registry keys, service creation, startup folders, DLL injection hooks)
- **Credential harvesting** at scale (LSASS memory dump, credential vault extraction, Registry SAM/SECURITY hive harvesting)
- **Data exfiltration tradecraft** (DNS tunneling, HTTP(S) exfiltration, SMTP for data transport)
- **Living off the land** for all post-exploitation activities

### Covering Tracks & Anti-Forensics
- **Event log manipulation** (clearing, filtering, timestomping)
- **Artifact removal** (temporary file cleanup, registry modification cleanup)
- **Log source disabling** (disabling Windows Defender logging, ETW, Sysmon)
- **Timeline obfuscation** (file timestomping via NTFS file record modification, access time manipulation)
- **Memory forensics evasion** (anti-analysis techniques to prevent memory capture analysis)

*Source:* [Official PEN-300 Course Syllabus ↗](https://www.offsec.com/courses/pen-300/)

---

## Common skills at Security · Expert

*Shared competencies across the security domain at expert level — not specific to OSEP, but foundational for advanced red team roles.*

- **Advanced Active Directory architecture reasoning** — Understanding multi-forest/multi-domain environments, trust relationships, delegation models, and complex privilege escalation chains.
- **EDR/AV evasion mindset** — Designing attack chains that avoid signature detection, behavioral analysis, and memory scanning; understanding endpoint protection stack architecture.
- **Kernel-level exploitation concepts** — Understanding Windows kernel callbacks, hooks, and how user-mode defensive tools interact with kernel-mode defenses.
- **Offensive tool development** — Designing custom exploits and implants; understanding OPSEC implications of tool choices; ability to adapt public exploits for specific environments.
- **Threat modeling** — Reasoning about attack surface from a defender's perspective; anticipating detection mechanisms and pre-planning evasion.
- **Documentation and evidence collection** — Recording attack steps in a format suitable for legal review, C-level briefing, and technical remediation teams.
- **Psychological resilience under pressure** — The 48-hour exam is grueling; successful candidates demonstrate adaptive problem-solving under fatigue and stress.

---

## Recommended courses at Security · Expert

| Provider | Title | Cost | URL |
|---|---|---|---|
| OffSec Official | PEN-300: Advanced Evasion Techniques and Breaching Defenses (90-day access + course bundle) | $1,499 | [↗](https://www.offsec.com/courses/pen-300/) |
| OffSec Official | Learn One (annual subscription with year-round lab access + all courses + 2 exam attempts) | $2,749 | [↗](https://www.offsec.com/pricing/) |
| TCM Security | Windows Privilege Escalation for OSCP | $99–$149 | [↗](https://www.udemy.com/course/windows-privilege-escalation/) |
| HackTheBox Academy | Active Directory Security Path | Free / $99 | [↗](https://academy.hackthebox.com/) |
| OffSec Proving Grounds | Practice environment (mirrors OSEP difficulty) | $20 | [↗](https://www.offsec.com/offsec/provinggrounds/) |
| PentesterLab | Advanced Labs (C2, post-exploitation, AD attacks) | $99–$199 | [↗](https://pentesterlab.com/) |

**Course-selection rule:** The OffSec PEN-300 course is mandatory—it provides the only official lab environment that mirrors OSEP exam difficulty and complexity. Independent platforms (HackTheBox, TryHackMe) supplement but do not replace the course.

---

## Practice exams

| Provider | Title | Cost | URL |
|---|---|---|---|
| OffSec Official | Proving Grounds Practice (OffSec-curated machines with evasion/AD focus) | $20 | [↗](https://www.offsec.com/offsec/provinggrounds/) |
| HackTheBox | Retired machines (TJ Null's OSEP list / Advanced AD scenarios) | $20–$99/month | [↗](https://www.hackthebox.com/) |
| TryHackMe | Advanced rooms (AD attacks, evasion, post-exploitation) | Free / $30/month premium | [↗](https://tryhackme.com/) |
| OffSec Proving Grounds | Free Play version (basic lab environment) | Free | [↗](https://www.offsec.com/offsec/provinggrounds/) |

**Practice-selection strategy:** Most candidates spend 2–3 months completing all PEN-300 modules + labs, then 3–6 additional months on independent practice. Focus on Advanced Directory, evasion techniques, and custom tool development scenarios. Successful candidates complete 50–100+ practice machines, with emphasis on AD and evasion-focused boxes.

---

## Books

| Title | Author | Publisher | Year | ISBN | URL |
|---|---|---|---|---|---|
| Active Directory Penetration Testing | Andy Green | Packt Publishing | 2023 | 978-1803278079 | [↗](https://www.packtpub.com/product/active-directory-penetration-testing) |
| Windows Privilege Escalation | Ired & 0xdf | (Self-Published) | 2021 | N/A | [↗](https://0xdf.gitlab.io/) |
| Operator Handbook: Security Operations and Defense for GNU/Linux | Joshua Bruni | Packt Publishing | 2023 | 978-1783552917 | [↗](https://www.packtpub.com/product/operator-handbook) |
| The Hacker Playbook 3 | Peter Kim | (Independent) | 2018 | 978-1980901754 | [↗](https://www.amazon.com/Hacker-Playbook-Practical-Penetration-Testing/dp/1980901759) |
| Applied Microsoft Azure Infrastructure | David Okeyode | Packt Publishing | 2021 | 978-1838989584 | [↗](https://www.packtpub.com/product/applied-microsoft-azure-infrastructure) |

**Book rule:** Green's AD Penetration Testing is the reference for OSEP-level Active Directory attacks (covers Golden Tickets, Kerberos delegation, trust abuse). 0xdf's Windows Privilege Escalation covers modern evasion and post-exploitation. Kim's Hacker Playbook 3 is tactical reference for advanced exploitation chains. Official OffSec course materials are the primary study resource.

---

## Typical job titles at Security · Expert

**Senior Penetration Tester** · **Red Team Operator** · **Adversary Simulation Specialist** · **Threat Emulation Analyst** · **Senior Offensive Security Engineer** · **Security Research Manager** · **Vulnerability Assessment Lead** · **Incident Response Team Lead**

*(Job titles drawn from current job-board postings (LinkedIn, Indeed, Glassdoor) that list OSEP as required or strongly preferred.)*

---

## Salary

| Region | Range | Source |
|---|---|---|
| USD | $135,000–$200,000+ (OSEP-specific roles) | Senior Penetration Tester roles at Mandiant, Coalfire, Synack, and Fortune 500 CISO operations; additional $35K–$50K premium over non-OSEP-certified peers at same level |
| USD (Lead) | $180,000–$280,000 | Red Team Lead, Security Architect, Principal Operator roles; top earners ($300,000+) in FAANG threat simulation and government contracting |
| GBP | £75,000–£120,000 | [Hays Cybersecurity Report ↗](https://www.hays.co.uk/salary-guide) · IT Jobs Watch senior roles |
| ZAR | R540,000–R960,000 (annualized) | Senior penetration tester roles in Johannesburg (Gauteng), Cape Town (Western Cape) based on Pnet, PayScale ZA; 25–35% variance by metro area |
| EUR | €92,000–€135,000 (DE/FR/NL) | [Robert Half Europe Tech ↗](https://www.roberthalf.eu/) · [Heidrick & Struggles ↗](https://www.heidrick.com/) |
| AUD | A$175,000–A$245,000 | [Seek Australia ↗](https://www.seek.com.au/) · Senior penetration tester roles in Sydney, Melbourne |

**Salary analysis:** OSEP holders command significant premiums over OSCP-only peers—approximately $35K–$50K USD annual increase for equivalent seniority level. **Senior role baseline** (7+ years, OSEP + OSCP): $140K–$180K USD. **Lead role** (team lead, red team operations manager): $180K–$240K USD. **Principal/Architect** (security architect, threat simulation lead): $250K–$380K USD. South African market concentrates in Johannesburg finance sector (Gauteng) and Cape Town tech hubs; ZAR rates reflect ~USD × 18 exchange rate. GBP reflects London-centric market; regional variance (Manchester, Edinburgh) is 15–20% lower. AUD reflects major metros (Sydney, Melbourne); Perth/Brisbane typically 10–15% below Sydney baseline.

---

## Skills validated

*Cert-specific — what this exam actually tests, distinct from the shared "Common skills" above.*

### Advanced Active Directory Exploitation
- **Kerberos protocol attacks** — AS-REP roasting (users with pre-auth disabled), Kerberoasting (TGS-REP ticket capture and cracking), golden ticket creation (forged TGT for any user), silver ticket creation (forged TGS for specific service), pass-the-ticket attacks.
- **Delegation abuse** — Unconstrained delegation (force delegation to arbitrary service), constrained delegation (service-for-user attacks), resource-based constrained delegation (RBCD) for privilege escalation.
- **DCSync attacks** — Using Directory Replication Service (DRS) protocol to extract password hashes and historical passwords from Domain Controller without code execution.
- **Trust exploitation** — External trust abuse, forest trust transitive attacks, one-way trust privilege escalation chains.
- **LDAP enumeration at scale** — Discovering privilege escalation vectors via LDAP queries, ACL analysis, object property enumeration, secret attributes (userAccountControl, servicePrincipalName).

### Antivirus & EDR Evasion
- **AMSI bypass techniques** — Win32 API patching (AMSI.dll patching), COM object manipulation, AMSI context variable modification, registry-based bypass.
- **ETW (Event Tracing for Windows) disabling** — Patching ETW at user-mode level to disable Sysmon, Windows Defender, and third-party endpoint logging.
- **Shellcode obfuscation** — XOR encoding, RC4 encryption, polymorphic shellcode generation, staged payloads, custom encryptors.
- **Process injection evasion** — Process hollowing (unmap + inject + resume), direct syscalls (bypassing user-mode NTDLL hooks), Heaven's Gate (32→64-bit transition), callback-based injection (fiber/APC).
- **API unhooking** — Detecting and unhooking user-mode hooks set by EDR products, restoring original NTDLL functions.
- **Behavioral detection evasion** — Parent process spoofing, command-line obfuscation, registry path obfuscation, timing-based evasion (delayed execution, sleep obfuscation).

### Custom Tool Development
- **C# payload development** — SharpCollection utilities (SharpKiller, SharpPrinter, etc.), custom C# implants with reflection, P/Invoke for Windows API calls.
- **PowerShell obfuscation & bypass** — Script block logging bypass, constrained language mode evasion, reflective DLL injection via PowerShell, custom cmdlets.
- **Shellcode generation & modification** — Using msfvenom and custom encoders, adapting public shellcode for specific architecture/payload, testing for AV detection via VirusTotal.
- **Metasploit customization** — Custom module creation, payload generator modification, stager/stage payload customization.
- **Exploit adaptation** — Taking public exploits and modifying for specific target environment, proof-of-concept customization.

### Application Whitelisting Bypass
- **WDAC policy analysis** — Enumerating WDAC policies, discovering bypass opportunities (code integrity level, publisher rules, hash rules).
- **AppLocker enumeration & bypass** — Identifying AppLocker rules, folder/hash/publisher whitelisting gaps, LOLBINS for bypass.
- **LOLBINS mastery** — Abuse of legitimate Windows utilities for code execution (regsvcs, msbuild, msiexec, cscript, wscript, rundll32, certutil, bitsadmin, psexec).
- **DLL side-loading** — Identifying DLL search order vulnerabilities, crafting malicious DLLs, executing through legitimate application loader.
- **Script interception** — PowerShell/cmd obfuscation to bypass script-block logging and constrained language mode.

### Advanced Lateral Movement
- **COM object hijacking** — Identifying vulnerable COM registrations, replacing InProcServer32 paths for privilege escalation or lateral execution.
- **DCOM exploitation** — Identifying accessible DCOM objects (ShellBrowserWindow, Excel.Application, Outlook.Application), achieving RCE via object method invocation.
- **WMI exploitation** — WMI event subscriptions for persistence, WMI command execution via wmic/WMI provider, ActiveScriptEventConsumer for arbitrary code.
- **Remote service creation** — Creating services via RPC on remote machines for reliable execution and persistence.
- **Scheduled task abuse** — Remote scheduled task creation via RPC, XML-based task manipulation, SYSTEM-level execution via task scheduler.

### Constrained Language Mode Bypass
- **CLM detection** — Identifying when PowerShell is running in CLM, testing for bypass opportunities.
- **FullLanguage mode recovery** — Using trusted processes to load unconstrained PowerShell runspace (bypassing CLM via .NET reflection).
- **Module preloading attacks** — Loading modules before CLM initialization to execute unrestricted code.
- **Argument conversion attacks** — Using type conversion to achieve code execution within CLM restrictions.

### Advanced Phishing & Initial Access
- **Custom payload delivery** — Office macro exploitation (VBA for macro-based RCE), ActiveX embedding, OLE object linking, Word document exploitation vectors.
- **C2 redirectors** — Multi-stage payload delivery, separating attacker infrastructure from delivery infrastructure.
- **Living-off-the-land initial compromise** — Using PowerShell, cmd, WMI for initial callback without traditional executable payloads.
- **Trusted execution paths** — Exploiting legitimate application paths (winword.exe, excel.exe, etc.) for trusted execution.

### SQL Server Exploitation
- **SQL Server enumeration** — Service account identification, linked server discovery, agent job enumeration, database privilege mapping.
- **xp_cmdshell execution** — Enabling/disabling xp_cmdshell, using for command execution as SQL service account.
- **sp_oacreate abuse** — Using OLE Automation stored procedures for command execution from SQL context.
- **Agent job exploitation** — Creating/modifying SQL Agent jobs for privilege escalation or lateral movement.
- **Linked server attacks** — Pivoting through linked database connections, credential forwarding across SQL instances.

### Post-Exploitation & Persistence
- **Credential harvesting at scale** — LSASS memory dump analysis, credential vault extraction, SAM/SECURITY registry hive harvesting, password manager exploitation.
- **WMI event subscriptions** — Creating permanent event subscriptions for code execution on system events (logon, process creation, file system events).
- **Persistence via DLL injection** — Registry modification for DLL injection, DLL path hijacking, AppInit_DLLs for system-wide injection.
- **Scheduled task persistence** — Creating hidden/obfuscated scheduled tasks with SYSTEM privileges, temporal task scheduling for evasion.
- **Startup folder & registry persistence** — Run/RunOnce registry keys, startup folder placement, explorer.exe shell extension injection.
- **Service-based persistence** — Creating services with custom binaries, binary replacement in existing services, service parameter manipulation.

### Covering Tracks & Anti-Forensics
- **Event log tampering** — Clearing Windows Event Logs, filtering specific event IDs, disabling event log service.
- **Artifact removal** — Temporary file cleanup (temp folders, recycle bin), registry cleanup, browser history/cache removal.
- **Log source disabling** — Disabling Windows Defender logging, ETW provider disabling, Sysmon service termination, third-party agent logs.
- **Timestomping** — File access/modification/creation time manipulation via NTFS file record modification, file metadata alteration.
- **Memory forensics evasion** — Anti-analysis code (detecting debuggers/hypervisors), memory dump detection, in-memory malware obfuscation.

---

## Related certifications

### OffSec Pathway (advanced specialization track)
- **Prerequisite pathway:** [OSCP (OffSec Certified Professional - PEN-200) ↗](./OffSec_OSCP_PEN-200.md) — foundational; OSEP assumes OSCP-level competency.
- **Stacks with:** [OSWE (OffSec Certified Web Expert - WEB-300) ↗](./OffSec_OSWE_WEB-300.md) — specialization in advanced web application exploitation · [OSED (OffSec Certified Exploit Developer - EXP-301) ↗](./OffSec_OSED_EXP-301.md) — advance to custom exploit development
- **Path to OSCE3:** Award OSCE3 (Offensive Security Certified Expert) upon earning ANY TWO of {OSEP, OSWE, OSED} after OSCP. This three-cert stack (OSCP + 2 specialist certs) signals elite-level penetration testing mastery.

### Competitive / Cross-Vendor certs at Expert level
- **Similar scope, vendor-neutral:** GIAC GPEN (GIAC Penetration Tester) — formal exam-based, less hands-on than OSEP, recognized for DoD 8570 compliance.
- **Cloud-focused equivalent:** GIAC GCEA (GIAC Certified Enterprise Assessor) — AWS/Azure/GCP penetration testing, comparable difficulty.
- **Exploit-focused equivalent:** GIAC OSED equivalent offerings (commercial exploit development training).

### DoD 8570.01-M compliance
OSEP does not directly satisfy DoD 8570 requirements (OSCP does, at IA Technical level). However, OSEP + OSCP combination significantly strengthens candidacy for government contracting advanced roles (CISO staff, red team leads).

### Typical career progression
1. **Foundation** → CompTIA Security+ / Network+ (if no prior cert).
2. **Entry offensive** → OSCP (first hands-on credential, 24-month lab trial).
3. **Advanced specialization** → OSEP (evasion/AD), OSWE (web exploitation), OSED (exploit development), or GCEA (cloud).
4. **Expert/Leadership** → OSCE3 (any 2 of {OSEP, OSWE, OSED} + OSCP), GIAC GPEN, or vendor-specific advanced certs.
5. **Leadership/Management** → PM credentials (PMP, ITIL), security architecture roles, CISO pathway.

### Vendor overview
[OffSec Vendor Overview ↗](../../Vendors/OffSec_Vendor_Overview.md) — Complete ecosystem: PWK/PEN-200 (foundational penetration testing), PEN-300/OSEP (advanced evasion & AD), WEB-300/OSWE (web exploitation), EXP-301/OSED (exploit development), all available via Learn One annual subscription.

---

## Preparation tips & realistic timeline

### Study duration
- **Minimum:** 4–6 months of intensive study after completing PEN-200/OSCP (20–40 hours/week for dedicated learners).
- **Realistic:** 6–12 months for full-time professionals working alongside PEN-300 course labs.
- **Extended:** 12–18 months if building AD/evasion skills from partial foundation.

### Study strategy
1. **Complete all PEN-300 course modules and labs** (typically 150–250 hours). Focus intensively on AD exploitation, AMSI/ETW evasion, and constrained language mode bypass—these represent the exam's highest-value attack paths.
2. **Build custom tooling** — The course teaches concepts; building your own C# and PowerShell tools forces deep understanding and builds reusable attack infrastructure.
3. **Practice advanced Active Directory scenarios** — Complete 20+ advanced AD-focused machines (HackTheBox retired AD labs, Proving Grounds advanced AD paths). Understanding Kerberos delegation, trust abuse, and DCSync is non-negotiable.
4. **Practice evasion-focused machines** — Complete 15+ boxes that specifically test AV/EDR evasion, process injection, and whitelisting bypass. This is where OSEP differentiates from OSCP.
5. **Mock exam simulations:** Attempt 2–3 full 48-hour exam simulations using Proving Grounds Practice or custom lab setups before booking your real exam.
6. **Report writing practice:** Write 3–5 full penetration test reports on practice scenarios. The exam report is graded heavily on professionalism, clarity, and evidence quality.

### Common failure points
- **Insufficient evasion focus:** Candidates who master AD exploitation but neglect evasion/detection bypassing fail when exam systems have EDR/AV enabled.
- **Poor custom tooling skills:** Relying entirely on public tools without understanding how to modify or create custom versions when public tools are detected/blocked.
- **Weak Active Directory fundamentals:** Misunderstanding Kerberos protocol, delegation models, or trust relationships leads to failed AD-focused objectives.
- **Time management:** The 48-hour window is tight. Spending excessive time on one objective while others remain untouched is a common failure cause.
- **Report deficiencies:** Lab compromises without clear documentation, missing screenshots, or PoC explanation = automatic failure. Allocate 8–12 hours for the report.

### Realistic success factors
- **OSCP mastery required:** Comfortable with Linux/Windows enumeration, basic exploitation, privilege escalation, and Metasploit. If OSCP was a struggle, OSEP will be significantly harder.
- **Active Directory expertise:** Deep understanding of Kerberos protocol, LDAP, domain trust models, delegation types, and authentication token lifecycle is essential.
- **Custom tooling capability:** Able to write or significantly modify C# and PowerShell tools for specific attack scenarios. Understanding P/Invoke, reflection, and Windows API is assumed.
- **Evasion mindset:** Design attacks that anticipate EDR/AV detection; understand behavioral analysis, signature detection, and memory-based evasion.
- **Hands-on lab experience:** Minimum 100+ practice machines completed with full compromise and post-exploitation documentation. Theoretical knowledge alone fails OSEP.
- **Persistence & adaptability:** The 48-hour exam is grueling. Successful candidates demonstrate adaptability when initial exploits fail, maintain momentum through setbacks, and manage sleep/fatigue strategically.

---

## Sources

- OffSec OSEP Certification: https://www.offsec.com/courses/pen-300/
- OSEP Exam Guide: https://help.offsec.com/hc/en-us/articles/360050293792-OSEP-Exam-Guide
- OffSec Pricing & Enrollment: https://www.offsec.com/pricing/
- StationX OSEP Guide: https://www.stationx.net/osep-certification/
- Active Directory Penetration Testing (Andy Green): https://www.packtpub.com/product/active-directory-penetration-testing
- Robert Half Europe Tech Salary Survey: https://www.roberthalf.eu/
- PayScale Penetration Tester Salary (ZA): https://www.payscale.com/research/ZA/Certification=Offensive_Security_Certified_Professional_(OSCP)/Salary
- Hays Cybersecurity Report: https://www.hays.co.uk/salary-guide
- Seek Australia: https://www.seek.com.au/

---

*Last verified: 2026-05-02*
*Parent ecosystem: [OffSec Ecosystem](../../Ecosystems/OffSec_Ecosystem.md)*
*Parent domain: [Security Domain](../DOM06_Security_Domain.md)*
*Vendor overview: [OffSec Vendor Overview](../../Vendors/OffSec_Vendor_Overview.md)*
