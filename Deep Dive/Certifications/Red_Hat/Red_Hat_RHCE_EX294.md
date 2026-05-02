---
cert_name: "Red Hat Certified Engineer — Ansible Automation"
cert_code: "EX294"
vendor: "Red Hat"
status: "Active"
level: "Professional"
domain: "DevOps / Linux / Automation"
ecosystem: "Red Hat Enterprise Linux"
last_verified: "2026-05-01"
aliases: ["RHCE", "EX294", "Red Hat Engineer", "Red Hat Ansible Automation"]
---

# Red Hat Certified Engineer (RHCE) — Ansible Automation

**`EX294`** · ● **Active** · **Professional** · _Red Hat_

> **Use this template:** Copy this file into `Certifications/{Vendor}/{Vendor}_{Code}_{ShortName}.md`,
> then replace every `{...}` placeholder with verified, cited content.

---

## Exam facts

| Field | Value |
|---|---|
| Cost | $500 USD (standard RedHat pricing) |
| Duration | 240 minutes (4 hours) |
| Questions | 6–8 practical hands-on scenarios (all performance-based) |
| Passing | 210/300 (raw score, ~70%) |
| Format | 100% Performance-Based Lab (no multiple choice) |
| Delivery | Red Hat Testing Platform (rhttesting.redhat.com) or Pearson OnVUE proctor |
| Languages | English (available internationally) |
| Valid | 3 years from exam date |
| Renewal | Pass RHCE again OR obtain RHCA (Red Hat Certified Architect) specialty exam |
| Prerequisites | RHCSA (EX200) — must hold active certification to earn RHCE |
| Released | 2019 (Ansible-focused version, replacing EX294 Bash scripting) |
| Retiring | No current retirement date; aligns with RHEL 8 + RHEL 9 support cycles |

**Vendor source —** [Red Hat Certifications ↗](https://www.redhat.com/en/services/training-and-certification)
**Official exam guide —** [EX294 Exam Objectives ↗](https://www.redhat.com/en/services/training/ex294-red-hat-certified-engineer-rhce-exam)
**Exam objectives —** [EX294 Skills Measured ↗](https://www.redhat.com/en/services/training/ex294-red-hat-certified-engineer-rhce-exam)

---

## About

The Red Hat Certified Engineer (RHCE) is a **performance-based professional-level certification** for Linux systems engineers specializing in **Ansible automation and configuration management**. Introduced in 2019, the current EX294 exam focuses entirely on hands-on Ansible playbook development, inventory management, and advanced automation patterns. RHCE is the second tier in Red Hat's certification ladder (after RHCSA) and is the prerequisite for all RHCA Architect track exams. Holders typically work as DevOps engineers, senior Linux engineers, or automation engineers.

---

## Domain context — DevOps / Linux / Automation

Enterprise Linux automation and configuration management. Ansible is a foundational skill across cloud, on-premises, and hybrid-cloud infrastructure teams. RHCE is vendor-specific (Red Hat ecosystem) but Ansible skills transfer broadly.

[Read full deep dive — Red Hat Enterprise Linux Ecosystem →](../../Ecosystems/D54_RedHat_Ecosystem.md)

---

## Topics covered

Exam blueprint (EX294 official):

- **Understand core concepts** (5%): Ansible architecture, inventory, playbook structure, modules, variables
- **Run ad-hoc commands** (10%): Using `ansible` command with modules, patterns, host groups, conditionals
- **Implement playbooks** (25%): Writing multi-task playbooks, handlers, loops, conditionals, error handling
- **Work with variables and facts** (15%): Host/group vars, Jinja2 templating, filters, facts gathering
- **Implement handlers and notifications** (5%): Handler triggers, when conditions, notify directives
- **Create and use roles** (15%): Role directory structure, role tasks/handlers/files/templates, galaxy integration
- **Use Ansible Vault** (10%): Encrypting sensitive data, password files, vault-encrypted plays
- **Implement advanced features** (15%): Async tasks, loops, conditional execution, error handling, debugging

*Source:* [Red Hat EX294 Official Objectives ↗](https://www.redhat.com/en/services/training/ex294-red-hat-certified-engineer-rhce-exam)

---

## Common skills at DevOps / Linux / Automation · Professional

Shared skills for the DevOps/Linux domain at professional level — independent of specific cert:

- Linux kernel & distro administration (RHEL 7+ / 8 / 9)
- Bash scripting and shell programming
- Package management (yum/dnf, rpm)
- Systemd service management
- TCP/IP networking, DNS, DHCP
- User/group & permission management (sudo, ACLs)
- Firewall & SELinux (firewalld, SELinux contexts)
- LVM, disk partitioning, file systems
- Log analysis (journalctl, /var/log)
- Performance tuning & monitoring basics

---

## Recommended courses at DevOps / Linux / Automation · Professional

| Provider | Title | Cost | URL |
|---|---|---|---|
| Red Hat (Official) | RH294: Red Hat Ansible Automation | $4,000 (class) / $2,500 (self-paced) | [↗](https://www.redhat.com/en/services/training/rh294-red-hat-ansible-automation) |
| Linux Academy / A Cloud Guru | Red Hat Certified Engineer (EX294) Prep | $299/year | [↗](https://acloudguru.com/course/red-hat-certified-engineer-rhce) |
| Sander van Vugt (Udemy) | Red Hat RHCE (EX294) Complete Course | $14–$100 | [↗](https://www.udemy.com/course/red-hat-certified-engineer-rhce/) |
| Sander van Vugt (KodeKloud) | EX294 RHCE Ansible Preparation | $99–$199 | [↗](https://kodekloud.com/courses/red-hat-certified-engineer-ex294-rhce-exam/) |
| Whizlabs | RHCE Exam Preparation | $49–$99 | [↗](https://www.whizlabs.com/red-hat-certified-engineer/) |

---

## Practice exams

| Provider | Title | Cost | URL |
|---|---|---|---|
| Red Hat (Official) | EX294 Sample Exams (included in self-paced course) | Included | [↗](https://www.redhat.com/en/services/training/rh294-red-hat-ansible-automation) |
| Sander van Vugt | RHCE EX294 Practice Scenarios | $29.99 | [↗](https://www.udemy.com/course/red-hat-rhce-ex294-practice-exams/) |
| KodeKloud | EX294 Practice Labs | Included in course | [↗](https://kodekloud.com/courses/red-hat-certified-engineer-ex294-rhce-exam/) |
| Linux Academy / A Cloud Guru | EX294 Hands-On Labs | Included in subscription | [↗](https://acloudguru.com/course/red-hat-certified-engineer-rhce) |

---

## Books

| Title | Author | Publisher | Year | ISBN | URL |
|---|---|---|---|---|---|
| Red Hat RHCE 8 Cert Guide (EX294) | Sander van Vugt | Pearson | 2020 | 978-0136893219 | [↗](https://www.pearson.com/en-us/subject-catalog/p/red-hat-rhce-8-cert-guide-ex294/P200000003339) |
| Ansible for DevOps | Jeff Geerling | Self-published | 2020 (2nd ed.) | 978-1492014522 | [↗](https://www.ansiblefordevops.com/) |
| Mastering Ansible | Jesse Keating & James Freeman | Packt Publishing | 2018 | 978-1787125681 | [↗](https://www.packtpub.com/product/mastering-ansible) |

---

## Typical job titles at DevOps / Linux / Automation · Professional

DevOps Engineer · Senior Linux Systems Engineer · Automation Engineer · Configuration Management Engineer · Infrastructure Engineer · Site Reliability Engineer (SRE) · Cloud Operations Engineer

*(Job titles drawn from current job-board postings that list RHCE or Ansible automation as required or preferred.)*

---

## Salary

| Region | Range | Source |
|---|---|---|
| USD | $100,000–$160,000 | [Glassdoor DevOps Engineer ↗](https://www.glassdoor.com/Salaries/devops-engineer-salary-SRCH_KO0,14.htm) · [Robert Half Tech Salary Guide 2026 ↗](https://www.roberthalf.com/salary-guide) |
| ZAR | R600,000–R1,200,000 | [Pnet ZA Devops ↗](https://www.pnet.co.za/) · [CareerJunction ZA ↗](https://www.careerjunction.co.za/) |
| GBP | £65,000–£110,000 | [IT Jobs Watch UK ↗](https://www.itjobswatch.co.uk/) · [Hays IT Salary Guide 2026 ↗](https://www.hays.co.uk/salary-guide) |
| EUR | €70,000–€130,000 (DE/FR/NL) | [PayScale EU ↗](https://www.payscale.com/) |
| AUD | A$110,000–A$170,000 | [Seek AU ↗](https://www.seek.com.au/jobs/) |

**Salary rule:** RHCE holders with 5+ years Linux experience and active Ansible practice typically earn in the upper ranges. Organizations investing in infrastructure-as-code heavily weight this credential.

---

## Skills validated

- **Ansible architecture & concepts**: Inventories, plays, tasks, modules, handlers, roles
- **Playbook development**: Multi-task execution, loops (`for_each`, `with_items`), conditionals (`when`)
- **Handlers & event-driven tasks**: Restart services only on config changes, notification chains
- **Jinja2 templating**: Variables, filters, loops, conditionals in templates and playbooks
- **Roles**: Building reusable automation packages, galaxy integration, dependency management
- **Advanced features**: Async/await tasks, error handling (`block`/`rescue`/`always`), debugging
- **Ansible Vault**: Encrypting secrets, managing vault passwords, vaulted variables
- **Inventory management**: Dynamic inventory, host/group variables, patterns, fact gathering
- **Modules**: Mastery of 50+ core Red Hat modules (`copy`, `template`, `lineinfile`, `service`, `yum`, `user`, `file`, `command`, etc.)

---

## Related certifications

- **Prerequisite for:** [RHCA Red Hat Certified Architect (multiple specializations) ↗](../../Vendors/RedHat_Vendor_Overview.md)
- **Must hold:** RHCSA (EX200) active to earn RHCE
- **Stacks with:** RHCSA + RHCE → foundation for all RHCA tracks (Enterprise Apps, Cloud, Virtualization, etc.)
- **Equivalents at this level:** HashiCorp Certified: Terraform Associate · Kubernetes Application Developer (CKAD) · Certified Kubernetes Administrator (CKA)
- **Vendor overview:** [Red Hat Certifications Overview ↗](../../Vendors/RedHat_Vendor_Overview.md)

---

## Sources

- [Red Hat Certifications ↗](https://www.redhat.com/en/services/training-and-certification)
- [EX294 Exam Objectives ↗](https://www.redhat.com/en/services/training/ex294-red-hat-certified-engineer-rhce-exam)
- [RH294 Course (Official) ↗](https://www.redhat.com/en/services/training/rh294-red-hat-ansible-automation)
- [Sander van Vugt RHCE Guide (Pearson) ↗](https://www.pearson.com/en-us/subject-catalog/p/red-hat-rhce-8-cert-guide-ex294/P200000003339)
- [Ansible Official Documentation ↗](https://docs.ansible.com/)
- [Red Hat Developer Community ↗](https://developers.redhat.com/)
- [Glassdoor DevOps Engineer Salary ↗](https://www.glassdoor.com/Salaries/devops-engineer-salary-SRCH_KO0,14.htm)
- [Robert Half 2026 Tech Salary Guide ↗](https://www.roberthalf.com/salary-guide)
- [IT Jobs Watch UK ↗](https://www.itjobswatch.co.uk/)
- [Hays IT Salary Guide 2026 ↗](https://www.hays.co.uk/salary-guide)

---

*Last verified: 2026-05-01*
*Parent ecosystem: [Red Hat Enterprise Linux Ecosystem](../../Ecosystems/D54_RedHat_Ecosystem.md)*
*Parent domain: [DevOps / Linux / Automation Domain](../../Domains/DOM05_DevOps_SRE_Domain.md)*
*Vendor overview: [Red Hat Overview](../../Vendors/RedHat_Vendor_Overview.md)*
