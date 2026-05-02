---
cert_name: "Red Hat Certified System Administrator (RHCSA)"
cert_code: "EX200"
vendor: "Red Hat (IBM)"
status: "Active"
level: "Associate"
domain: "Systems/OS/Linux"
ecosystem: "Red Hat Enterprise Linux"
last_verified: "2026-05-01"
aliases: ["RHCSA", "EX200", "Red Hat System Administrator"]
---

# Red Hat Certified System Administrator (RHCSA)

**`EX200`** · ● **Active** · **Associate** · _Red Hat (IBM)_

---

## Exam facts

| Field | Value |
|---|---|
| Cost | $500 USD (individual exam); $4,000+ with official Red Hat training bundles |
| Duration | 3 hours (180 minutes) |
| Questions | Practical performance-based tasks (~15 scenarios) |
| Passing | 210/300 scaled score |
| Format | 100% Hands-On Lab (performance-based) |
| Delivery | Remote proctored via Pearson VUE OnVUE |
| Languages | English, Japanese, Simplified Chinese, Spanish |
| Valid | 3 years from pass date |
| Renewal | Pass RHCE (EX294) or retake EX200 to renew RHCSA |
| Prerequisites | None; Linux command-line familiarity recommended |
| Released | 2019 (RHEL 8 version); updated 2024 for RHEL 9 |
| Retiring | N/A (current, actively maintained) |

**Vendor source —** [Red Hat RHCSA Exam Page ↗](https://www.redhat.com/en/services/training/ex200-red-hat-certified-system-administrator-rhcsa-exam)

**Official exam guide —** [RHCSA Exam Guide PDF ↗](https://www.redhat.com/en/services/training/rh124-red-hat-system-administration-i)

**Exam objectives —** [RHCSA Objectives ↗](https://www.redhat.com/en/services/training/ex200-red-hat-certified-system-administrator-rhcsa-exam)

---

## About

The RHCSA is Red Hat's foundational Linux system administration certification. Introduced in 2019 and updated for RHEL 9 in 2024, it validates hands-on ability to configure, manage, and troubleshoot RHEL systems. The exam is 100% performance-based—no multiple choice—requiring candidates to complete realistic administrative tasks under time pressure. It is the entry point to Red Hat's certification stack and serves as a prerequisite conceptually (though not formally) for the RHCE (EX294). Widely recognized in enterprise Linux environments, especially among organizations running Red Hat Enterprise Linux, CentOS, or Rocky Linux derivatives.

---

## Domain context — Systems/OS/Linux

Core operating system administration: user and group management, file permissions and SELinux, networking, storage (partitions, LVM, file systems), package management, systemd services, and basic automation. RHCSA sits at the Associate level—skills needed to perform daily sysadmin tasks on single or small clusters.

[Read full deep dive — Red Hat Enterprise Linux Ecosystem →](../../Ecosystems/Red_Hat_Enterprise_Linux_Ecosystem.md) *(file not yet created)*

---

## Topics covered

Based on Red Hat's official RHCSA exam blueprint:

- **User and group management** — Create, modify, delete users and groups; set passwords; manage group membership; configure sudoers
- **File permissions and security** — Read/write/execute permissions; special bits (setuid, setgid, sticky); ACLs; basic SELinux contexts and troubleshooting
- **Networking** — Static and dynamic IP configuration (nmtui, nmcli, /etc/sysconfig/network-scripts); hostnames; DNS; routing; firewall rules (firewalld)
- **Systemd and services** — Enable/disable/restart services; understand service dependencies; read journal logs (journalctl); manage system states
- **Storage and file systems** — Create and manage partitions; LVM (logical volumes, snapshots); mount file systems; manage swap; iSCSI initiator
- **Package management** — Install, update, remove packages (yum/dnf); manage repositories; manage kernel versions
- **Containers and Podman** — Pull, run, and manage containers using podman; understand image basics; persist container storage
- **Shell scripting and automation** — Write bash scripts for simple automation; use find, grep, sed, awk; cron jobs; ansible basics for simple plays
- **Troubleshooting and monitoring** — Use tools (top, ps, systemctl) to diagnose performance; read logs; recover from boot failures; SELinux denial troubleshooting

---

## Common skills at Systems/OS/Linux · Associate

*Shared content for the Systems/OS/Linux domain at Associate level.*

- User and group account administration
- File system hierarchy navigation and permissions
- Linux command-line fundamentals (pipes, redirection, text processing)
- Package management and software installation
- Basic networking (IP, DNS, hostnames, routing)
- Service and daemon lifecycle management
- Log monitoring and troubleshooting
- Basic shell scripting
- Understanding of security contexts (SELinux fundamentals)
- Firewall rule configuration

---

## Recommended courses at Systems/OS/Linux · Associate

| Provider | Title | Cost | URL |
|---|---|---|---|
| Red Hat | RH124: Red Hat System Administration I | $4,000+ (with exam bundle) | [↗](https://www.redhat.com/en/services/training/rh124-red-hat-system-administration-i) |
| Red Hat | RH134: Red Hat System Administration II | $4,000+ (with exam bundle) | [↗](https://www.redhat.com/en/services/training/rh134-red-hat-system-administration-ii) |
| Sander van Vugt (Udemy) | RHCSA EX200 Exam Preparation Course | $12–$16 | [↗](https://www.udemy.com/course/rhcsa-ex200-exam-preparation/) |
| Asghar Ghori (Udemy) | RHCSA and RHCE Linux Certification Study Guide | $12–$16 | [↗](https://www.udemy.com/course/linux-rhcsa-rhce-exam-preparation-course-lfcs/) |
| CBT Nuggets | RHCSA (EX200) Certification Training | $399/year (platform access) | [↗](https://www.cbtnuggets.com/learn/rhcsa) |
| KodeKloud | RHCSA Labs & Practice Exams | $99–$199/year | [↗](https://kodekloud.com/courses/rhcsa-certification-exam-preparation/) |
| Linux Academy (A Cloud Guru) | RHCSA Exam Prep | $349/year (platform) | [↗](https://www.acloudguru.com/course/rhcsa-linux-certification-exam-preparation) |

---

## Practice exams

| Provider | Title | Cost | URL |
|---|---|---|---|
| Red Hat | RHCSA Practice Exam (official) | Free with Red Hat account | [↗](https://www.redhat.com/en/services/training/rh124-red-hat-system-administration-i) |
| Whizlabs | RHCSA (EX200) Practice Exams | $99 | [↗](https://www.whizlabs.com/red-hat-rhcsa-ex200/) |
| Sander van Vugt | RHCSA Practice Exam PDF | $49 | [↗](https://www.sandervanvugt.com/rhcsa-practice-exam/) |
| KodeKloud | RHCSA Hands-On Labs | Included in $99+ plan | [↗](https://kodekloud.com/courses/rhcsa-certification-exam-preparation/) |

---

## Books

| Title | Author | Publisher | Year | ISBN | URL |
|---|---|---|---|---|---|
| Red Hat Certified System Administrator (RHCSA) Cert Guide, 3rd Ed. (EX200) | Sander van Vugt | Pearson | 2024 | 978-0-13-820699-0 | [↗](https://www.pearson.com/en-us/subject-catalog/p/red-hat-certified-system-administrator-rhcsa-cert-guide-exam-ex200/P200000003610) |
| RHCSA & RHCE Linux Certification Study Guide, 9th Ed. (EX200 & EX294) | Asghar Ghori | Apress | 2024 | 978-1-4842-9960-2 | [↗](https://www.apress.com/en/book/9781484299609) |
| The Linux Command Line, 2nd Ed. (foundational reference) | William E. Shotts Jr. | No Starch Press | 2019 | 978-1-59327-950-9 | [↗](https://nostarch.com/tlcl2) |

---

## Typical job titles at Systems/OS/Linux · Associate

Linux System Administrator · Junior Linux Engineer · Linux Operations Technician · DevOps Engineer (Linux focus) · Site Reliability Engineer (Junior) · Systems Administrator (Linux) · Infrastructure Support Engineer

*(Job titles drawn from current job-board postings that list RHCSA as required or strongly preferred.)*

---

## Salary

| Region | Range | Source |
|---|---|---|
| USD | $55,000 – $85,000 | [Glassdoor: Linux System Administrator ↗](https://www.glassdoor.com/Salaries/linux-system-administrator-salary-SRCH_KO0,27.htm) · [Robert Half: Linux System Administrator ↗](https://www.roberthalf.com/salary-guide) |
| ZAR | R420,000 – R680,000 | [Pnet: Linux System Administrator ZA ↗](https://www.pnet.co.za/) · [CareerJunction: Linux Admin ↗](https://www.careerjunction.co.za/) |
| GBP | £38,000 – £58,000 | [IT Jobs Watch: Linux Admin ↗](https://www.itjobswatch.co.uk/) · [Hays: Linux System Administrator ↗](https://www.hays.co.uk/) |
| EUR | €45,000 – €70,000 (DE/FR/NL) | [Eurostat Tech Salary Surveys ↗](https://ec.europa.eu/eurostat) |

---

## Skills validated

*Specific to RHCSA—what the exam hands-on tasks actually test.*

- RHEL/CentOS command-line navigation and system interaction
- Systemd service management (systemctl, journalctl)
- User and group account creation, modification, password policies
- File system and partition management (fdisk, parted, LVM)
- File permissions, special modes, ACLs, and SELinux contexts
- Static and dynamic network configuration (nmcli, hostnamectl, firewalld)
- Package installation and repository configuration (yum/dnf)
- Bash scripting for automation and system administration
- Container management with podman (pull, run, persist storage)
- Troubleshooting and log analysis
- Boot process recovery and runlevel/target management

---

## Related certifications

- **Stacks with:** [CompTIA Linux+ (XK0-005) ↗](../../Certifications/CompTIA/CompTIA_Linux_Plus_XK0-005.md) *(equivalent vendor-neutral entry point; RHCSA more hands-on)*
- **Prerequisite for:** [RHCE: Red Hat Certified Engineer (EX294) ↗](../../Certifications/Red_Hat/Red_Hat_RHCE_EX294.md) *(file not yet created)*
- **Replaces:** EX200 (RHEL 7) and EX200 (RHEL 8) — current version is RHEL 9 (2024 update)
- **Equivalents at this level:** [LPI Level 1 (LPIC-1) ↗](../../Certifications/LPI/LPI_Level1_LPIC1.md) *(vendor-neutral; broader scope)* · CompTIA Linux+ *(vendor-neutral; multiple-choice format)*
- **Vendor overview:** [Red Hat Vendor Overview ↗](../../Vendors/Red_Hat_Vendor_Overview.md) *(file not yet created)*

---

## Sources

- Red Hat RHCSA Exam Page: https://www.redhat.com/en/services/training/ex200-red-hat-certified-system-administrator-rhcsa-exam
- Red Hat RH124 Course Page: https://www.redhat.com/en/services/training/rh124-red-hat-system-administration-i
- Red Hat RH134 Course Page: https://www.redhat.com/en/services/training/rh134-red-hat-system-administration-ii
- Sander van Vugt RHCSA Cert Guide (Pearson): https://www.pearson.com/en-us/subject-catalog/p/red-hat-certified-system-administrator-rhcsa-cert-guide-exam-ex200/P200000003610
- Asghar Ghori RHCSA & RHCE Study Guide (Apress): https://www.apress.com/en/book/9781484299609
- Sander van Vugt RHCSA Udemy: https://www.udemy.com/course/rhcsa-ex200-exam-preparation/
- Asghar Ghori RHCSA Udemy: https://www.udemy.com/course/linux-rhcsa-rhce-exam-preparation-course-lfcs/
- CBT Nuggets RHCSA: https://www.cbtnuggets.com/learn/rhcsa
- KodeKloud RHCSA: https://kodekloud.com/courses/rhcsa-certification-exam-preparation/
- A Cloud Guru RHCSA: https://www.acloudguru.com/course/rhcsa-linux-certification-exam-preparation
- Whizlabs RHCSA Practice: https://www.whizlabs.com/red-hat-rhcsa-ex200/
- Sander van Vugt RHCSA Practice Exam: https://www.sandervanvugt.com/rhcsa-practice-exam/
- Glassdoor Linux System Administrator Salary: https://www.glassdoor.com/Salaries/linux-system-administrator-salary-SRCH_KO0,27.htm
- Robert Half Salary Guide: https://www.roberthalf.com/salary-guide
- IT Jobs Watch UK: https://www.itjobswatch.co.uk/
- Hays Salary Guide: https://www.hays.co.uk/
- Pnet South Africa: https://www.pnet.co.za/
- CareerJunction South Africa: https://www.careerjunction.co.za/

---

*Last verified: 2026-05-01*

*Parent ecosystem: [Red Hat Enterprise Linux Ecosystem](../../Ecosystems/Red_Hat_Enterprise_Linux_Ecosystem.md) (file not yet created)*

*Parent domain: [Systems/OS/Linux Domain](../../Domains/Systems_OS_Linux_Domain.md) (file not yet created)*

*Vendor overview: [Red Hat Vendor Overview](../../Vendors/Red_Hat_Vendor_Overview.md) (file not yet created)*
