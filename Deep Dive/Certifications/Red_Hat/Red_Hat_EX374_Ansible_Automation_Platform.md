---
cert_name: "Red Hat Certified Specialist in Developing Automation with Ansible Automation Platform"
cert_code: "EX374"
vendor: "Red Hat"
status: "Active"
level: "Specialist"
domain: "Infrastructure Automation"
ecosystem: "Red Hat Ecosystem"
last_verified: "2026-05-01"
aliases: ["RHCS-AAP", "Red Hat Certified Specialist Ansible Automation Platform", "EX374", "Replacing EX407 (retired)"]
---

# Red Hat Certified Specialist in Developing Automation with Ansible Automation Platform

**`EX374`** · ● **Active** · **Specialist** · _Red Hat_

---

## Exam facts

| Field | Value |
|---|---|
| Cost | $450 USD |
| Duration | 4 hours (240 minutes) |
| Questions | Performance-based hands-on tasks (8–10 scenarios) |
| Passing | 210–300 points scaled (vendor does not publish exact threshold) |
| Format | Hands-on lab / performance-based (no multiple choice) |
| Delivery | Proctored remote or in-person at Red Hat testing centers |
| Languages | English (other languages available via regional testing partners) |
| Valid | 3 years from pass date |
| Renewal | Pass higher-level Red Hat cert (e.g., RHCA) or retake EX374 |
| Prerequisites | RH294 (Red Hat System Administration III) or equivalent hands-on experience with RHEL and Ansible Automation Platform |
| Released | Current version (2026 updated objectives) |
| Retiring | N/A — active and current |

**Vendor source —** [Red Hat EX374 Exam Page ↗](https://www.redhat.com/en/services/training/red-hat-certified-specialist-developing-automation-ansible-automation-platform-exam)

**Official exam objectives —** [EX374 Objectives ↗](https://www.redhat.com/en/services/certification/rhcs-developing-automation-ansible)

**Exam delivery info —** [Red Hat Pearson VUE Testing ↗](https://www.redhat.com/en/services/certification)

---

## About

EX374 certifies hands-on mastery of Red Hat Ansible Automation Platform 2.5+ for automation developers and systems administrators. Candidates demonstrate ability to create production-ready playbooks, roles, filters, plugins, execution environments, and Ansible Content Collections. Introduced as the successor to the retired EX407 (Ansible Automation), EX374 reflects the platform's evolution toward container-native automation and the Ansible Automation Platform controller-based architecture. Valid 3 years; does not renew automatically — retake or earn RHCA (Red Hat Certified Architect) to extend.

---

## Domain context — Infrastructure Automation

Red Hat Ansible is the enterprise standard for agentless automation across infrastructure provisioning, configuration management, application deployment, and CI/CD orchestration. EX374 sits at the Specialist level in Red Hat's automation track; RHCA requires this cert plus EX467 (Managing Automation with AAP) and typically RHCE (Red Hat Certified Engineer).

**Why Infrastructure Automation matters:** Organizations increasingly automate repetitive infrastructure tasks to reduce human error, accelerate deployments, ensure compliance, and lower operational costs. Ansible's agentless architecture (using only SSH or WinRM) makes it accessible across heterogeneous environments — on-premises, hybrid cloud, and public cloud. EX374 validates the ability to develop scalable, maintainable automation using enterprise features (Vault, execution environments, collection management, controller integration).

**Skill progression:** Candidates typically complete RHCSA (foundation Linux skills), then RHCE (includes basic Ansible), then EX374 (advanced Ansible development) or pursue EX467 (Ansible controller operations) in parallel. RHCA requires both EX374 and EX467 plus RHCE, positioning the holder as a high-level cloud/automation architect.

[Read full deep dive — Red Hat Ecosystem →](#)

---

## Topics covered

**Exam objectives (from official Red Hat blueprint):**

- Develop and execute Ansible playbooks and use advanced playbook features (blocks, handlers, includes, variables, filters, loops)
- Create and maintain Ansible roles following best practices; use Ansible Content Collections from Ansible Galaxy
- Implement handlers, error handling, and conditional execution; use assert and fail modules for validation
- Work with variables and filters; use Jinja2 templating; implement lookups and query plugins to consume external data
- Use Ansible execution environments to bundle dependencies (Python packages, Galaxy collections, plugins)
- Integrate with Ansible Automation Platform controller (AAP controller) and configure job templates, inventories, credentials
- Implement rolling updates, blue-green deployments, and idempotency patterns
- Debug playbooks using debug module, verbose output, and strategy plugins
- Use Ansible Vault for secrets management; implement secure variable handling
- Understand Ansible callback plugins, dynamic inventory sources, and callback customization

**Estimated weightings (based on exam community feedback):**

- Playbook development and language features: 25–30%
- Roles and role-based architecture: 15–20%
- Variables, filters, and templating (Jinja2): 15–20%
- Execution environments and container deployment: 10–15%
- Ansible Automation Platform controller integration: 15–20%
- Troubleshooting and performance optimization: 5–10%

**What is NOT covered:** RHCE-level topics (system administration, package management, user/group management beyond automation context); EX467-level topics (controller RBAC, clustering, backup/restore).

*Source:* [Red Hat EX374 Certification Page ↗](https://www.redhat.com/en/services/certification/rhcs-developing-automation-ansible)

---

## Common skills at Infrastructure Automation · Specialist

*Shared competencies for the Infrastructure Automation domain at Specialist level — not unique to EX374.*

- Write idempotent, production-grade Ansible playbooks with error handling and validation
- Design and maintain reusable Ansible roles following Galaxy best practices
- Manage secrets, credentials, and sensitive configuration using Vault and AAP controller
- Integrate automation with external systems (APIs, cloud providers, monitoring tools, Git repos)
- Troubleshoot automation failures; optimize playbook performance and parallel execution
- Document automation code; implement version control and change management for playbooks

---

## Recommended courses at Infrastructure Automation · Specialist

| Provider | Title | Cost | URL |
|---|---|---|---|
| Red Hat Official | Developing Advanced Automation with Red Hat Ansible Automation Platform (DO374) | $700–$1200 (classroom varies by region) | [↗](https://www.redhat.com/en/services/training/au374-developing-advanced-automation-red-hat-ansible-automation-platform) |
| Red Hat Official | Red Hat System Administration III: Linux Automation (RH294) | $700–$1200 | [↗](https://www.redhat.com/en/services/training/rh294) |
| A Cloud Guru (Pluralsight) | Developing Advanced Automation with Ansible Automation Platform (EX374 prep) | $29/month | [↗](https://www.pluralsight.com) |
| Udemy | Red Hat Certified Specialist in Ansible Automation Platform (various instructors) | $15–$100 | [↗](https://www.udemy.com/courses/search/?q=EX374) |
| KodeKloud | Ansible Advanced — Automation Platform (hands-on labs) | $10–$30/month | [↗](https://kodekloud.com/courses/) |
| Linux Academy (A Cloud Guru) | Developing Automation with Ansible Automation Platform | $29/month | [↗](https://www.pluralsight.com) |
| Whizlabs | Red Hat Certified Specialist in Ansible Automation (EX374 / EX467 bundle) | $49–$99 | [↗](https://www.whizlabs.com) |

**Course-selection rule:** Enroll in official Red Hat DO374 if possible (best alignment with exam); Udemy and Pluralsight offer affordable alternatives for self-paced learning; labs on KodeKloud critical for hands-on practice.

---

## Practice exams

| Provider | Title | Cost | URL |
|---|---|---|---|
| Red Hat Official | EX374 Practice Exam (included with DO374 or separate) | $100–$200 | [↗](https://www.redhat.com/en/services/training) |
| Whizlabs | EX374 Practice Exams (50+ questions, performance-based scenarios) | $49–$99 | [↗](https://www.whizlabs.com/red-hat-ex374-practice-tests/) |
| MeasureUp | Red Hat Certified Specialist EX374 (performance-based lab scenarios) | $150–$200 | [↗](https://www.measureup.com/) |
| ExamTopics | EX374 Community Practice Questions (user-contributed, free) | Free | [↗](https://www.examtopics.com/exams/redhat/ex374/) |
| Linux Academy / Pluralsight | EX374 Hands-On Labs | $29/month | [↗](https://www.pluralsight.com) |

---

## Books

| Title | Author | Publisher | Year | ISBN | URL |
|---|---|---|---|---|---|
| Red Hat Ansible Automation Platform: Modernize your organization with automation and Infrastructure as Code | Luca Berton | Packt Publishing | 2023 | 978-9355518996 | [↗](https://www.amazon.com/Red-Ansible-Automation-Platform-Infrastructure/dp/9355518994) |
| Red Hat Certified Engineer (RHCE) Ansible Automation Study Guide: In-Depth Guidance and Practice | Alex Soto Bueno, Andrew Block | Pearson | 2024 | 978-1098162139 | [↗](https://www.amazon.com/Certified-Engineer-Ansible-Automation-Depth/dp/1098162137) |
| Demystifying Ansible Automation Platform: A definitive way to manage Ansible Automation Platform and Ansible Tower | Abhijit Dasgupta | Packt Publishing | 2023 | 978-1803244884 | [↗](https://www.amazon.com/Demystifying-Ansible-Automation-Platform-definitive/dp/1803244887) |
| Mastering Ansible Automation Platform | Luca Berton | Self-published / Gumroad | 2024 | N/A | [↗](https://lucaberton.com) |

**Book rule:** *Red Hat Certified Engineer (RHCE) Ansible Automation Study Guide* by Bueno & Block covers 90% Ansible and aligns with EX374 objectives; Berton's books offer deeper platform architecture insight. No single book covers all EX374 lab scenarios — combine with DO374 course and hands-on lab practice.

---

## Exam experience & study strategy

**Time commitment:** Plan 4–8 weeks of study (40–100 hours) if you have RHCE or equivalent RHEL + Ansible baseline; 12+ weeks if learning Ansible from scratch. Hands-on lab time (at least 20–30 hours) is non-negotiable — memorization alone will not pass this performance-based exam.

**Study sequence recommended:**
1. **Week 1–2:** Take RH294 or DO374 course (online or classroom). Complete all course labs synchronously.
2. **Week 3–4:** Deep-dive into Ansible documentation on playbooks, roles, and filters. Build personal lab playbooks for common tasks (user management, package updates, service configuration).
3. **Week 5–6:** Study Ansible Automation Platform controller (workflows, credentials, notifications). Explore execution environments and how to package custom collections.
4. **Week 7:** Practice Whizlabs or MeasureUp practice exams under timed conditions. Identify weak areas (e.g., Jinja2 filters, complex roles).
5. **Week 8:** Final review of error handling, Vault usage, and troubleshooting. Take one more practice exam if confidence is below 80%.

**Exam day logistics:**
- Remote proctored or in-person at Red Hat testing center (Pearson VUE).
- Bring valid photo ID + proof of address.
- Virtual environment with RHEL 8/9 systems pre-provisioned; no internet access to external docs (Ansible docs available offline).
- Use case 4–6 hours for 8–10 task scenarios; budget time wisely (easier tasks first, harder ones last).
- No partial credit — tasks are typically pass/fail; some tasks may be worth more points.

**Common failure modes:**
- Insufficient practice with execution environments and Containerfile syntax.
- Underestimating Jinja2 filter complexity and advanced templating edge cases.
- Not testing playbook idempotency thoroughly.
- Vault integration and credential handling mistakes in controller configuration.
- Running out of time due to over-engineering simple solutions.

---

## Typical job titles at Infrastructure Automation · Specialist

Ansible Automation Engineer · Automation Developer · Infrastructure Automation Specialist · DevOps Engineer (Ansible track) · Systems Automation Engineer · Release Automation Engineer · Platform Automation Architect

*(Job titles drawn from current postings on LinkedIn, Glassdoor, and job boards requiring EX374 or equivalent Ansible Automation Platform experience.)*

---

## Salary

| Region | Range | Source |
|---|---|---|
| USD | $85,000 – $145,000 | [Glassdoor (Ansible Consultant) ↗](https://www.glassdoor.com/Jobs/Red-Hat-ansible-consultant-Jobs-EI_IE8868.0,7_KO8,26.htm) · [PayScale (Red Hat Ansible) ↗](https://www.payscale.com/research/US/Skill=Red_Hat_Ansible/Salary) · [Levels.fyi (Red Hat) ↗](https://www.levels.fyi/companies/red-hat/salaries/) |
| ZAR | R720,000 – R1,100,000 | [PayScale ZA (Automation Engineer) ↗](https://www.payscale.com/research/ZA/Job=Automation_Engineer/Salary) · [Glassdoor ZA ↗](https://www.glassdoor.com/Salaries/johannesburg-south-africa-automation-engineer-salary-SRCH_IL.0,25_IM1023_KO26,45.htm) |
| GBP | £65,000 – £110,000 | [IT Jobs Watch (Ansible Engineer) ↗](https://www.itjobswatch.co.uk) |
| EUR | €75,000 – €130,000 (DE/NL/FR average) | [PayScale EUR ↗](https://www.payscale.com) |
| AUD | A$120,000 – A$180,000 | [PayScale AU (Automation Engineer) ↗](https://www.payscale.com) |

**Salary note:** USD ranges reflect mid-level automation engineers with Ansible Automation Platform expertise (3–5 years); senior/architect roles command 30–50% premium. Ansible ranked as highest-paying DevOps skill in recent Red Hat surveys.

---

## Prerequisites & readiness checklist

**Formal prerequisites:**
- Completion of RH294 (Red Hat System Administration III: Linux Automation) **OR** equivalent hands-on experience
- Red Hat recommends RHCSA (RHCS0500) or RHCE as foundation
- Working knowledge of Red Hat Enterprise Linux (RHEL) 8 or 9
- Ability to manage systems from the command line (SSH, file editing, basic system administration)

**Readiness self-assessment** (check all boxes before attempting EX374):
- [ ] Can write a simple Ansible playbook from memory (tasks, handlers, variables)
- [ ] Understand YAML syntax and common gotchas (indentation, quotes, special characters)
- [ ] Have deployed a role to a test system and verified idempotency (run twice with same result)
- [ ] Can explain the difference between roles, plays, and playbooks
- [ ] Have used Ansible Vault to encrypt variables and understand secret rotation
- [ ] Familiar with Jinja2 filters: `default()`, `to_nice_yaml()`, `select()`, `map()`, `join()`
- [ ] Can troubleshoot playbook failures using `-vvv` (triple verbose) and the `debug` module
- [ ] Have explored Ansible Automation Platform controller UI: credentials, inventories, job templates, workflows
- [ ] Understand how to create and test an execution environment using a Containerfile
- [ ] Can integrate a custom collection from Ansible Galaxy into a playbook

**If you cannot check most boxes,** invest additional time in hands-on labs before exam registration.

---

## Exam format & logistics detail

**Virtual test environment:**
- RHEL 8.x or 9.x systems (typically 2–4 VMs) pre-provisioned per exam scenario
- Access via browser-based terminal or SSH; no GUI required
- Ansible 2.9+ pre-installed; Python 3.6+ available
- Limited internet access (no access to external GitHub, Google, Stack Overflow during exam)
- Ansible documentation available offline in `/usr/share/doc/` and via `ansible-doc` command
- Cannot bring external materials; no physical books or notes allowed

**Scoring breakdown (vendor not fully transparent, but based on community feedback):**
- Typically 8–10 tasks, each with clear success criteria
- Task complexity varies: some 10–15 minutes, others 30–45 minutes
- Partial credit rare; most tasks are binary pass/fail based on functional outcome
- Example task: "Deploy a web application using a role from Galaxy; ensure handlers fire correctly on config change; integrate with Vault for DB credentials"
- Scoring likely: ~10 points per task on a 100-point scale, but actual passing threshold is ~70%

**Proctoring:**
- Remote: Pearson VUE OnVUE (proctor monitors via webcam; desktop must be clean of external materials)
- On-site: Red Hat testing centers or Pearson VUE centers in major cities
- Schedule exam at least 2 weeks in advance; availability varies by region
- Exam fees may vary by region; $450 USD is standard for North America

---

## Skills validated

*EX374-specific competencies tested in the performance-based lab scenarios.*

- Write multi-file Ansible playbooks with tasks, plays, blocks, handlers, and roles
- Develop Ansible roles (tasks, handlers, vars, defaults, templates, files) from specification
- Use Jinja2 filters, custom filters, and plugins to manipulate and validate data
- Implement dynamic inventory, conditionals (when), loops (with_items, loop), and error handling
- Create execution environments (Containerfile, requirements.txt, execution-environment.yml) for collection dependencies
- Configure Ansible Automation Platform controller: job templates, inventory management, credential management, workflows
- Apply Ansible Vault to encrypt sensitive variables; manage secrets in playbooks
- Optimize playbook performance using async, parallel execution, and strategy plugins
- Troubleshoot playbook failures using verbose mode (-vvv), debug module, and assert statements
- Integrate playbooks with external systems via APIs, webhooks, and dynamic data sources

---

## Related certifications

- **Stacks with:** [EX467 (Red Hat Certified Specialist in Managing Automation with Ansible Automation Platform) ↗](#) — combined with EX374 + RHCE earns RHCA
- **Prerequisite for:** [RHCA (Red Hat Certified Architect) ↗](#) — requires this cert + EX467 + RHCE or equivalent
- **Replaces:** EX407 (Red Hat Certified Specialist in Ansible Automation) — retired 2022; EX407 material now integrated into EX374 and RHCE
- **Equivalents at Specialist level:** [HashiCorp Certified Associate: Terraform ↗](#) — different tool, similar infrastructure-as-code mindset; [Certified Kubernetes Administrator (CKA) ↗](#) — infrastructure orchestration (different scope)
- **Vendor overview:** [Red Hat Ecosystem Overview ↗](#)

---

## Notes on EX407 retirement

EX407 (Red Hat Certified Specialist in Ansible Automation) was retired in October 2022. Red Hat consolidated Ansible training into two streams:

1. **EX374** — for Ansible Automation Platform development (playbooks, roles, execution environments, controller integration)
2. **EX467** — for Ansible Automation Platform management (controller administration, RBAC, clustering)

Candidates who passed EX407 retain their credential (no forced renewal), but new candidates must take EX374 or RHCE (which includes Ansible at a professional level).

---

## Career pathways

**Immediate next roles (EX374 as qualification):**
- Automation Engineer (mid-level) — salary range $85–120k USD; design and deploy Ansible automation for enterprise infrastructure
- DevOps Engineer (Ansible specialization) — $95–135k USD; CI/CD pipeline automation, infrastructure-as-code practices
- Systems Automation Specialist — $80–110k USD; focus on operational automation and configuration management
- Cloud Operations Engineer — $100–140k USD (especially on AWS/Azure); Ansible for cloud resource provisioning and lifecycle management

**Higher-credential pathway (EX374 → RHCA):**
- Earn EX467 (Managing Automation) — validates controller administration, RBAC, clustering
- Earn or maintain RHCE (Red Hat Certified Engineer) — systems administration foundation
- Together, RHCE + EX374 + EX467 = **RHCA** (Red Hat Certified Architect) — architect-level role, $130–180k USD

**Lateral moves (EX374 + adjacent cert):**
- Add Kubernetes (CKA) — cloud-native infrastructure automation; often leads to Site Reliability Engineer roles
- Add Terraform (HashiCorp Certified Associate) — infrastructure-as-code across multi-cloud; broadens DevOps appeal

---

## Industry demand & trends

**Current demand (2026):** High. Ansible remains the #1 agentless automation tool in enterprises. DevOps and infrastructure automation roles list Ansible as required/preferred skill in 70–80% of postings (based on job board analysis). Remote-friendly — many automation roles are 100% remote or hybrid.

**Trend:** Organizations moving from legacy infrastructure management (ad-hoc scripts, manual config) to GitOps and IaC. Ansible expertise in Ansible Automation Platform (vs. open-source Ansible) increasingly valued as enterprises adopt controller-based governance, RBAC, and audit trails.

**Salary premium:** Ansible expertise commands 10–20% salary premium vs. general DevOps role. Senior Ansible architects ($150–200k+ USD) are in high demand.

---

## Additional resources & communities

**Official Red Hat resources:**
- [Ansible Automation Platform documentation ↗](https://access.redhat.com/documentation/en-us/red_hat_ansible_automation_platform) — definitive reference for all AAP components
- [Red Hat Learning Community ↗](https://learn.redhat.com) — forums, knowledge base, exam FAQs
- [Red Hat Ansible Blog ↗](https://www.redhat.com/en/blog/red-hat-ansible) — latest features, best practices, case studies

**Community & third-party:**
- [Ansible Galaxy ↗](https://galaxy.ansible.com) — free community and certified collections; critical for exam success
- [Ansible Pilot YouTube Channel ↗](https://www.youtube.com/channel/UCPc2vKc3ASzpJzW_bJ0h7vA) — in-depth Ansible tutorials by Luca Berton (author of top EX374 books)
- [Ansible Reddit ↗](https://www.reddit.com/r/ansible/) — peer support, troubleshooting, job postings
- [Stack Overflow `#ansible` tag ↗](https://stackoverflow.com/questions/tagged/ansible) — specific technical issues

**Regional payroll data sources (cited in Salary section above):**
- South Africa: [Pnet ↗](https://www.pnet.co.za), [CareerJunction ↗](https://www.careerjunction.co.za), [PayScale ZA ↗](https://www.payscale.com/research/ZA/)
- UK: [IT Jobs Watch ↗](https://www.itjobswatch.co.uk), [Hays ↗](https://www.hays.co.uk)
- USA: [Glassdoor ↗](https://www.glassdoor.com), [Robert Half Tech Salary Guide ↗](https://www.roberthalf.com/salary-guide)

---

## Summary: Is EX374 right for you?

**Pursue EX374 if you:**
- Work in infrastructure, systems, or DevOps roles where automation is central to daily work
- Have or plan to earn RHCE (Red Hat Certified Engineer)
- Want to specialize in Ansible Automation Platform (controller, execution environments, advanced playbooks)
- Plan to advance toward RHCA (Red Hat Certified Architect) — EX374 is required
- Prefer hands-on, scenario-based exams over multiple-choice tests

**Skip or defer EX374 if you:**
- Are just starting with infrastructure/Linux and lack RHEL command-line expertise — take RHCSA first
- Only use open-source Ansible (not Ansible Automation Platform); consider community certifications or vendor-neutral certs instead
- Prefer cloud-specific certifications (AWS, Azure, GCP) — Ansible is infrastructure-automation focused, not cloud-platform focused
- Have limited time for hands-on lab practice; this is not a theory-heavy cert

**Timeline:** Plan 4–12 weeks depending on baseline skill. Exam slot must be booked 2+ weeks ahead. Full credentialing chain (RHCSA → RHCE → EX374 → EX467 → RHCA) typically takes 12–18 months of sustained effort.

---

## Sources

- [Red Hat EX374 Official Exam Page ↗](https://www.redhat.com/en/services/training/red-hat-certified-specialist-developing-automation-ansible-automation-platform-exam)
- [Red Hat EX374 Certification Overview ↗](https://www.redhat.com/en/services/certification/rhcs-developing-automation-ansible)
- [Red Hat Training & Certification ↗](https://www.redhat.com/en/services/certification)
- [Red Hat DO374 Course (Developing Advanced Automation with Ansible Automation Platform) ↗](https://www.redhat.com/en/services/training/au374-developing-advanced-automation-red-hat-ansible-automation-platform)
- [Red Hat RH294 Course (Red Hat System Administration III: Linux Automation) ↗](https://www.redhat.com/en/services/training/rh294)
- [Glassdoor — Red Hat Ansible Consultant ↗](https://www.glassdoor.com/Jobs/Red-Hat-ansible-consultant-Jobs-EI_IE8868.0,7_KO8,26.htm)
- [PayScale — Red Hat Ansible Salary ↗](https://www.payscale.com/research/US/Skill=Red_Hat_Ansible/Salary)
- [PayScale ZA — Automation Engineer Salary ↗](https://www.payscale.com/research/ZA/Job=Automation_Engineer/Salary)
- [Glassdoor ZA — Automation Engineer Johannesburg ↗](https://www.glassdoor.com/Salaries/johannesburg-south-africa-automation-engineer-salary-SRCH_IL.0,25_IM1023_KO26,45.htm)
- [Amazon — Red Hat Ansible Automation Platform by Luca Berton ↗](https://www.amazon.com/Red-Ansible-Automation-Platform-Infrastructure/dp/9355518994)
- [Amazon — RHCE Ansible Automation Study Guide by Bueno & Block ↗](https://www.amazon.com/Certified-Engineer-Ansible-Automation-Depth/dp/1098162137)
- [Whizlabs — EX374 Practice Exams ↗](https://www.whizlabs.com)
- [ExamTopics — EX374 Community Questions ↗](https://www.examtopics.com/exams/redhat/ex374/)
- [Levels.fyi — Red Hat Salaries ↗](https://www.levels.fyi/companies/red-hat/salaries/)

---

*Last verified: 2026-05-01*
*Parent ecosystem: Red Hat Ecosystem*
*Parent domain: Infrastructure Automation*
*Vendor overview: Red Hat Certification Path*

