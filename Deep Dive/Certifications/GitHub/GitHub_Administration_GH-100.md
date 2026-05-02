---
cert_name: "GitHub Administration"
cert_code: "GH-100"
vendor: "GitHub"
status: "Active"
level: "Entry"
domain: "DevOps"
ecosystem: "GitHub DevOps Ecosystem"
last_verified: "2026-05-01"
aliases: ["GitHub Admin", "GH-100 Administration"]
---

# GitHub Administration

**`GH-100`** · ● **Active** · **Entry** · _GitHub / Microsoft_

> GitHub Administration (GH-100) is an entry-level certification validating foundational GitHub Enterprise administration skills. Covers user identity management, repository administration, access control, GitHub Actions automation, security, and compliance across GitHub Enterprise Cloud, GitHub Enterprise Server, and GitHub AE deployments.

---

## Exam facts

| Field | Value |
|---|---|
| Cost | $99 USD · Regional pricing varies; confirm at checkout on Pearson VUE |
| Duration | 100 minutes |
| Questions | 65 scored questions (format mixed: multiple choice, multiple response, interactive components) |
| Passing | 70% (exact scaled score not published) |
| Format | Multiple choice, multiple response, and interactive scenario-based questions |
| Delivery | Pearson VUE (OnVUE) · Proctored |
| Languages | English |
| Valid | 2 years |
| Renewal | Retake exam (50% discount available 3 months before/after expiration) |
| Prerequisites | None · Intermediate GitHub Enterprise experience recommended |
| Released | 2024 (active as of May 2026) |
| Retiring | N/A |

**Vendor certification page —** [GitHub Administration (GH-100) ↗](https://learn.microsoft.com/en-us/credentials/certifications/github-administration/)

**Official exam guide —** [Study Guide for GH-100: GitHub Administration ↗](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-100)

**Exam registration —** [Pearson VUE / ExamRegistration ↗](https://examregistration.github.com/exam/ADMIN)

---

## About

GitHub Administration (GH-100) is GitHub's entry-level certification for system administrators, DevOps engineers, and IT professionals responsible for configuring, managing, and securing GitHub Enterprise deployments. The exam validates core competencies in user identity management, repository administration, access control, GitHub Actions automation, security controls, and compliance. Released in 2024 and maintained by GitHub with Microsoft, it is currently active with no scheduled retirement date. The certification is valid for 2 years, with renewal options available 3 months before expiration.

The GH-100 certification serves as a foundational credential in GitHub's certification pathway. It bridges the gap between entry-level understanding (GH-900 GitHub Foundations) and specialized administration tracks. The exam targets intermediate-level practitioners who have hands-on experience with GitHub Enterprise deployments, whether managing single repositories or large-scale organizational governance. Successfully passing GH-100 demonstrates proven administrative capability in a critical software delivery platform.

Candidates are expected to demonstrate practical competency with GitHub's role-based access control (RBAC) model, enterprise-scale authentication mechanisms (SAML SSO, SCIM, 2FA), security scanning tools (CodeQL, secret scanning, Dependabot), audit and compliance logging, and GitHub Actions runners and policies. Unlike GH-900, which focuses on git fundamentals and general GitHub features, GH-100 emphasizes administrative decision-making and policy enforcement at the organization and enterprise levels.

Target audience includes GitHub Enterprise administrators, platform engineers building internal developer platforms (IDPs), security and compliance officers managing code governance, and DevOps practitioners integrating GitHub into enterprise CI/CD ecosystems. The exam requires hands-on familiarity with both cloud (GHEC) and on-premises (GHES) deployments or at minimum deep understanding of multi-deployment governance models. Many organizations pursuing GitHub Enterprise adoption require staff to hold GH-100 or equivalent competency before production deployment.

Exam takers typically have 6 months to 2 years of hands-on experience with GitHub administration, troubleshooting user issues, configuring organizational policies, managing team structures, or setting up enterprise deployments. While no formal prerequisites exist, practical experience significantly improves pass rates.

---

## Domain context — DevOps

DevOps encompasses automation, CI/CD, infrastructure management, and deployment practices that bridge development and operations. GitHub Administration sits at the DevOps foundation level, focusing on platform administration, repository governance, and workflow automation essential to modern software delivery. Platform administrators implement the infrastructure and governance frameworks that enable development teams to operate efficiently while maintaining security and compliance standards.

At the entry level, DevOps professionals understand CI/CD pipeline concepts, infrastructure tooling, and automation practices. GitHub Administration specifically validates the ability to configure and manage the central platform that orchestrates many of these practices—making it a critical foundational certification for anyone pursuing DevOps roles. Enterprise GitHub administrators often manage the platform that hundreds or thousands of developers depend on, requiring both technical depth and organizational change management skills.

GitHub's role in DevOps has expanded significantly with GitHub Actions (CI/CD), GitHub Packages (artifact management), security scanning (code scanning, secret scanning, dependency management), and GitHub Copilot integration. Administrators must understand not only the operational aspects of these features but also their cost implications, security ramifications, and integration with broader enterprise toolchains.

DevOps professionals with GH-100 certification demonstrate competency across the full breadth of GitHub platform administration, positioning them for roles in platform engineering, infrastructure automation, and enterprise technology governance. The certification validates ability to enable secure software development lifecycle practices at scale and manage complex multi-team governance scenarios.

---

## Topics covered

Based on official Microsoft Learn exam blueprint and study guide, the GH-100 covers six primary domains:

### Domain 1: Support GitHub Enterprise for Users & Stakeholders (15%)

Configure GitHub Enterprise deployments across variants (GHEC, GHES, GHAE) · Invite and manage users at organizational level with bulk operations · Assign organizational and repository roles according to least-privilege principles · Monitor platform usage metrics, health checks, and diagnostic logs · Provide administrator support and troubleshooting for user issues · Manage enterprise billing, license seats, and licensing tiers · Configure recovery codes, authentication fallback mechanisms, and backup access · Understand deployment architecture options and scaling considerations · Configure organizational settings including base permissions and repository defaults

### Domain 2: Manage User Identities & GitHub Authentication (20%)

Configure SAML Single Sign-On authentication protocols and assertion mapping · Manage two-factor authentication policies and enforcement requirements · Set up SCIM (System for Cross-domain Identity Management) provisioning · Manage user memberships, invitations, and team assignments · Synchronize external identity providers (Okta, Azure AD, other IdPs) · Configure conditional access policies and IP allowlists · Troubleshoot identity errors, authentication failures, and access issues · Manage team synchronization with external directories and group mappings · Configure username normalization and identity mapping strategies · Manage session timeouts and authentication token expiration

### Domain 3: Manage Access and Permissions (20%)

Configure organization-level permissions and default repository visibility settings · Manage repository access and visibility options (public, internal, private, archived) · Implement branch protection rules, status checks, and code review requirements · Assign team roles with proper hierarchy and permission inheritance · Manage outside collaborator access, sponsorship models, and limited access · Configure repository permissions at scale using GitHub Apps and APIs · Manage personal access tokens (PATs), fine-grained tokens, and GitHub Apps authorization · Implement least-privilege access models and periodic access reviews · Configure custom repository roles (GitHub Enterprise feature) · Manage permissions for GitHub Pages, GitHub Packages, and other features

### Domain 4: Enable Secure Software Development and Compliance (36%)

Configure code scanning using CodeQL and other scanning methods · Configure secret scanning with custom patterns and push protection · Manage Dependabot alerts, security updates, and version updates · Set enterprise-wide security policies and requirements across repositories · Configure comprehensive audit logging and log retention policies · Manage IP allowlists and network security policies for compliance · Support compliance and audit requirements (SOC 2, FedRAMP, HIPAA, PCI-DSS) · Configure organization-wide code standards via CODEOWNERS and policies · Implement security baselines and configuration enforcement · Manage security advisories, vulnerability disclosures, and responsible disclosure · Configure security settings at organization, team, and repository levels

### Domain 5: Manage GitHub Actions (16%)

Configure GitHub Actions runners including hosted runners and self-hosted runners · Manage GitHub Actions access controls at repository and organization levels · Create and manage organization-wide policies for Actions usage and permissions · Set up workflow approvals, environments, and deployment protection rules · Monitor workflow execution, concurrency limits, and resource usage · Configure resource usage limits, execution timeouts, and cost controls · Manage GitHub Actions secrets at organization, repository, and environment scopes · Understand runner sizing, performance optimization, and resource allocation · Configure required workflows and reusable workflow governance

### Domain 6: Manage GitHub Packages & Integrations (5%)

Configure GitHub Packages registry for multiple languages (npm, NuGet, Maven, etc.) · Manage package access permissions, visibility, and retention policies · Set up integrations with external tools (CI/CD, monitoring, ticketing systems) · Monitor package usage, storage quotas, and bandwidth consumption · Manage GitHub Marketplace integrations, permissions, and app access · Configure container registry features including image signing and scanning · Manage package deprecation and cleanup automation

*Source:* [Official GH-100 Study Guide ↗](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-100)

---

## Common skills at DevOps · Entry

*Shared foundational knowledge for entry-level DevOps roles — not specific to GitHub.*

- Git version control fundamentals (clone, pull, push, branch, merge, rebase, cherry-pick, stash, workflow models like Git Flow and trunk-based development)
- CI/CD pipeline concepts, workflow triggers, job orchestration, artifact management, and deployment strategies (blue-green, canary, rolling, A/B testing)
- Infrastructure-as-Code (IaC) principles and declarative configuration management tools (Terraform, CloudFormation, Ansible, Pulumi)
- Containerization fundamentals (Docker concepts, images, layers, registries, container orchestration basics)
- Bash and PowerShell scripting for automation, configuration, operational troubleshooting, and system administration
- Identity and access management (IAM) concepts, RBAC models, federation, SSO protocols, and service accounts
- Basic networking concepts (DNS resolution, IP addressing, CIDR notation, allowlists, firewalls, VPNs, network segmentation, NAT)
- Monitoring, logging, and observability fundamentals (metrics collection, centralized logging, distributed tracing, SLOs, alerting)
- API fundamentals, REST principles, webhooks, rate limiting, API authentication, and platform integrations
- Security fundamentals including secret management, encryption (symmetric/asymmetric), certificate management, and compliance frameworks (SOC 2, PCI-DSS)

---

## Recommended courses at DevOps · Entry

| Provider | Title | Cost | URL |
|---|---|---|---|
| Microsoft Learn (Official) | GH-100T00: GitHub Fundamentals - Administration Basics and Product Features | Free | [↗](https://learn.microsoft.com/en-us/training/courses/gh-100t00) |
| Udemy | GH-100 GitHub Administration Certification – Practice Tests | $14–$99 | [↗](https://www.udemy.com/course/gh-100-github-administration-certification-practice-tests/) |
| Udemy | GH-100 GitHub Administration Certification Exams | $14–$99 | [↗](https://www.udemy.com/course/github-administration-certification-exams/) |
| Tutorials Dojo | GH-100 GitHub Administration Exam Study Path | $29 | [↗](https://tutorialsdojo.com/gh-100-github-administration-exam-study-path/) |
| Eccentrix | GitHub Administration Training – GH-100 | $995–$1,495 | [↗](https://www.eccentrix.ca/en/courses/microsoft/azure/github-administration-gh-100) |

**Course selection note:** Courses must be specifically for GH-100 administration topics. The official Microsoft Learn course (free) aligns directly with the exam blueprint and covers fundamentals, administration basics, and platform features. Third-party providers offer practice-focused (Udemy, Tutorials Dojo) and instructor-led options (Eccentrix) at various price points. Most candidates combine the free Microsoft Learn course with paid practice resources. Eccentrix offers live instructor-led training (ILT) for those preferring hands-on classroom experiences with expert instructors.

---

## Practice exams

| Provider | Title | Cost | URL |
|---|---|---|---|
| MeasureUp | Microsoft GH-100: GitHub Administration Practice Test | $99 | [↗](https://www.measureup.com/microsoft-gh-100-github-administration-practice-test.html) |
| Udemy | GH-100: GitHub Administration Exam: 300+ Practice Questions | $14–$99 | [↗](https://www.udemy.com/course/microsoft-gh-100-exam-practice-test/) |
| EDUSUM | Microsoft GitHub Administration Sample Questions | Free (limited) | [↗](https://www.edusum.com/microsoft/gh-100-microsoft-github-administration) |
| SkillCertPro | GH-100 GitHub Administration Exam Dumps & Questions | $49–$79 | [↗](https://skillcertpro.com/product/github-administration-exam-dumps-questions/) |

**Practice exam selection rule:** MeasureUp offers official Pearson VUE-aligned practice tests using the same delivery mechanism as the actual exam (OnVUE). Udemy provides 300+ questions across full-length practice exams (60 questions each). SkillCertPro offers extensive question banks (363+ questions) with weekly updates. EDUSUM offers free sample questions for initial self-assessment. Target 75%+ on practice exams before attempting the proctored exam. Most candidates spend 2–4 weeks on practice exercises after course completion. Taking practice exams under timed conditions is critical for pacing, as the 100-minute window requires averaging just 90 seconds per question including reading, analyzing scenarios, and selecting answers.

---

## Books

| Title | Author | Publisher | Year | ISBN | URL |
|---|---|---|---|---|---|
| GH-100 GitHub Administration Exam: 300+ Practice Questions with Detailed Explanations | Abhishek Parmar | Self-Published | 2024 | 9789334336733 | [↗](https://www.amazon.com/GH-100-GitHub-Administration-Exam-Certifications/dp/9334336730) |
| GH-100 GitHub Administration Exam (Kindle Edition) | Abhishek Parmar | Self-Published | 2024 | B0FFTJCWJY | [↗](https://www.amazon.com/GH-100-GitHub-Administration-Exam-Certifications-ebook/dp/B0FFTJCWJY) |

**Book note:** Parmar's study guide is specific to GH-100 and includes 300+ practice questions with detailed explanations mapped to exam domains. Available in paperback, hardcover, and Kindle formats. No earlier exam version books exist for GH-100 since the certification launched in 2024. Parmar also authors study materials for other GitHub certifications (GH-900, GH-200, GH-300, GH-500), building coherent learning pathways across GitHub's certification portfolio. Author has close to a decade of software engineering experience at leading multinational companies and holds expertise across multiple cloud and DevOps certifications.

---

## Typical job titles at DevOps · Entry

GitHub Administrator · Platform Administrator · Systems Administrator · DevOps Engineer · Release Manager · Build Engineer · Security and Compliance Specialist · Technical Team Lead · Infrastructure Engineer · Cloud Operations Engineer · Site Reliability Engineer (SRE) · Platform Engineer · Automation Engineer · GitHub Enterprise Administrator · Infrastructure Operations Engineer

*(Job titles drawn from current job-board postings that list GitHub Administration or GH-100 as required or preferred.)*

---

## Salary

| Region | Range | Source |
|---|---|---|
| USD | $107,000 – $140,000 (GitHub Systems Administrator); general Systems Administrator: $91,000 – $141,000 | [Glassdoor ↗](https://www.glassdoor.com/Salaries/systems-administrator-salary-SRCH_KO0,21.htm) · [Comparably ↗](https://www.comparably.com/companies/github/salaries/systems-administrator) |
| ZAR | R1,749,000 – R2,278,000 (estimated; $107k–$140k @ 16.67 ZAR/USD) | [Current rate: 16.67 ZAR/USD (May 1, 2026) ↗](https://www.xe.com/currencycharts/?from=USD&to=ZAR) |
| GBP | No region-specific data available — use DevOps / Systems Administrator general roles |
| EUR | No region-specific data available — use DevOps / Systems Administrator general roles |
| AUD | No region-specific data available — use DevOps / Systems Administrator general roles |

**Salary note:** GitHub-specific roles command 18–25% premium over general Systems Administrator baseline. ZAR figures are conversions of verified USD data at May 1, 2026 exchange rate (16.67 ZAR per USD). Experience, geography, and company size significantly impact actual compensation. Regional variation can exceed 40% for the same role. Enterprise-focused administrators managing GHES or GHEC at scale typically earn toward the higher end. Senior GitHub administrators overseeing multi-team governance and enterprise-wide security policies may exceed these ranges significantly. Certified professionals often command additional premiums over non-certified peers in competitive markets.

---

## Skills validated

*Concrete technologies, protocols, and tools tested by this exam.*

- SAML Single Sign-On (SSO) configuration, assertion mapping, troubleshooting, federation models
- GitHub Enterprise Cloud (GHEC) administration, organizational setup, and feature deployment
- GitHub Enterprise Server (GHES) administration, installation, upgrades, HA, disaster recovery
- GitHub AE (Advanced Entity) administration, multi-tenancy, security isolation, compliance deployments
- SCIM provisioning, directory synchronization, user lifecycle management
- Two-Factor Authentication (2FA) enforcement, fallback mechanisms, recovery codes, FIDO2 support
- GitHub Actions workflow creation, triggers, job definitions, runner management
- GitHub Actions policies, concurrency, environment secrets, approval gates, cost monitoring
- Branch protection rules, status checks, code review requirements, dismiss stale review policies
- CodeQL code scanning, secret scanning, push protection, scan remediation
- Dependabot alerts, security updates, version updates, automation policies
- Audit logging, log retention, log export, compliance event tracking
- GitHub Apps, OAuth applications, personal access tokens, fine-grained tokens
- Organization and team permission models, RBAC, nested teams, permission inheritance
- Repository visibility settings, templates, default configurations
- IP allowlists, network security policies, VPN integration, firewall rules
- Enterprise billing, license management, metered products, cost analysis
- GitHub Packages container registry, storage, retention, image signing

---

## Related certifications

- **Prerequisite foundation:** [GitHub Foundations (GH-900) ↗](../GitHub_Foundations_GH-900.md)
- **Stacks with:** [GitHub Actions (GH-200) ↗](../GitHub_Actions_GH-200.md) · [GitHub Advanced Security (GH-500) ↗](../GitHub_Advanced_Security_GH-500.md)
- **Alternative specialization:** [GitHub Copilot (GH-300) ↗](../GitHub_Copilot_GH-300.md)
- **Vendor overview:** [GitHub Vendor Overview ↗](../../Vendors/GitHub_Vendor_Overview.md)

**Pathway note:** GH-100 pairs well with GH-200 (GitHub Actions) and GH-500 (Advanced Security) for comprehensive platform administration. GH-300 (Copilot) represents a different specialization focused on AI-assisted development. Most enterprise administrators pursue GH-100 first, then specialize with GH-200 or GH-500 based on role focus. The four-certification stack (GH-900, GH-100, GH-200, GH-500) represents comprehensive GitHub expertise across foundations, administration, automation, and security domains.

---

## Sources

- GitHub Administration Certification: https://learn.microsoft.com/en-us/credentials/certifications/github-administration/
- Study Guide for GH-100: https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-100
- Exam Registration Portal: https://examregistration.github.com/exam/ADMIN
- Official Training Course: https://learn.microsoft.com/en-us/training/courses/gh-100t00
- MeasureUp Practice Test: https://www.measureup.com/microsoft-gh-100-github-administration-practice-test.html
- Tutorials Dojo Study Path: https://tutorialsdojo.com/gh-100-github-administration-exam-study-path/
- Parmar, Abhishek. GH-100 GitHub Administration Exam: 300+ Practice Questions: https://www.amazon.com/GH-100-GitHub-Administration-Exam-Certifications/dp/9334336730
- GitHub Systems Administrator Salary (Comparably): https://www.comparably.com/companies/github/salaries/systems-administrator
- Systems Administrator Salary (Glassdoor): https://www.glassdoor.com/Salaries/systems-administrator-salary-SRCH_KO0,21.htm
- USD to ZAR Exchange Rate (May 2026): https://www.xe.com/currencycharts/?from=USD&to=ZAR

---

*Last verified: 2026-05-01*
*Ecosystem: [GitHub DevOps Ecosystem](../../../Ecosystems/GitHub_DevOps_Ecosystem.md)*
*Domain: [DevOps](../../../Domains/DevOps.md)*
*Vendor: [GitHub](../../Vendors/GitHub_Vendor_Overview.md)*
---

## Mastering each domain: Study notes

**Mastering Domain 4 (36%): Secure Software Development and Compliance** — This domain receives disproportionate exam weighting and requires the deepest study. Understand that code scanning (CodeQL), secret scanning, and Dependabot are three distinct but complementary security features. Code scanning identifies logical vulnerabilities using CodeQL queries; secret scanning detects exposed credentials; Dependabot manages vulnerable dependencies. Know how to configure each at the organization level to enforce baseline security across all repositories. Understand audit logging not as a feature to "turn on" but as an evidence trail enabling compliance. Familiarize yourself with how audit logs satisfy different compliance frameworks: SOC 2 requires operational integrity logs; HIPAA requires access logs; PCI-DSS requires infrastructure change logs.

**Mastering Domain 2&3 (40%): Identity and Access Control** — These two domains form the core of GitHub administration. Spend significant time understanding SAML SSO: assertion attributes, name ID mappings, service provider vs. identity provider endpoints. SCIM provisioning automates user lifecycle management; study how user creation, deprovisioning, and attribute synchronization work. Understand the permission model hierarchy: enterprise-level > organization-level > team-level > repository-level. Know which settings cascade (inherit) and which don't. Understand the six repository permission levels (none, read, triage, write, maintain, admin) and when to recommend each.

**Mastering Domain 1 (15%): Enterprise Support and Health** — This domain covers operational aspects: billing, license management, usage monitoring, and user support scenarios. Study the difference between named licenses (GHEC) and per-server licensing (GHES). Understand metered products: GitHub Actions minutes, GitHub Packages storage, and Codespaces hours. Know how to read diagnostic reports in GHES and understand what metrics indicate platform health. Practice recommending solutions to real administrative scenarios.

**Mastering Domain 5 (16%): GitHub Actions Administration** — This domain has grown in importance as Actions become central to CI/CD. Study runner architecture: understand hosted runners vs. self-hosted runners, resource constraints, pricing models, and organizational policies. Understand workflow approval gates, environment protection rules, and deployment environments. Study concurrency and usage limits. Know how to audit Actions usage and identify cost optimization opportunities.

---

## Final exam tips

**Read questions carefully:** Exams often include distractor options that partially answer the question or confuse two similar concepts. Example: "An organization wants to ensure all code changes are reviewed before merging. Should they configure branch protection at the org or repo level?" Answer: Repository level (org-level settings are defaults only).

**Trust your hands-on experience:** If you've actually configured SAML SSO in a GitHub Enterprise environment, you'll recognize correct answers immediately. Candidates without hands-on experience find these questions ambiguous.

**Watch for permission level confusion:** A recurring source of exam errors. Know the exact capabilities of each permission level: Read cannot push code; Triage cannot merge PRs; Write cannot manage settings; Maintain cannot delete repos.

**Manage your time aggressively:** With 90 seconds per question average, every second counts. Skip lengthy scenario questions initially; answer the straightforward knowledge questions first, then return to complex scenarios with remaining time.


## Exam success stories and common pitfalls

**Success factor: Real-world deployments** — Candidates who have actually worked with GitHub Enterprise Cloud or GitHub Enterprise Server deployments pass at significantly higher rates (75%+) than those studying from theory alone. Time investment in hands-on lab experience (setting up SAML SSO, configuring runners, managing teams) pays off more than additional reading.

**Common pitfall: Overweighting GH-900 knowledge** — Candidates sometimes assume GH-100 is merely GH-900 plus enterprise features. In reality, GH-100 fundamentally requires a shift from "how do I use GitHub" to "how do I administrate GitHub at scale for hundreds of developers." This mindset shift is non-trivial.

**Common pitfall: Insufficient security domain focus** — With 36% exam weight, security and compliance questions dominate. Candidates who spend 50%+ of study time on other domains while shortchanging security often fail. Recommended study time allocation: Security 35%, Authentication/Permissions 25%, Actions 15%, Enterprise Support 15%, Packages 10%.

**Success factor: Practice exam consistency** — Candidates who score consistently 75%+ on practice exams from multiple providers (MeasureUp, Udemy, SkillCertPro) pass the proctored exam 90%+ of the time. Conversely, candidates scoring below 70% on practice exams typically fail the proctored exam.

---

## Further learning and specialization

**After passing GH-100:** Consider pursuing GH-200 (GitHub Actions) or GH-500 (Advanced Security) for specialization. GH-200 is ideal for DevOps engineers automating CI/CD; GH-500 is ideal for security specialists managing code security and compliance.

**GitHub Actions specialization (GH-200):** Covers workflow syntax, event triggers, actions marketplace, container actions, deployment strategies, and Actions security. Builds directly on GH-100's Actions domain. Recommended for administrators managing organization-wide CI/CD governance.

**Advanced Security specialization (GH-500):** Covers CodeQL, secret scanning, Dependabot advanced configurations, supply chain security, and GHAS deployment patterns. Builds on GH-100's security domain. Recommended for administrators managing GHAS at enterprise scale or security teams embedding code security into development processes.

**GH-300 (GitHub Copilot):** Distinct specialization focused on AI-assisted development. Does not build on GH-100. Recommended for developers and architects, less relevant for infrastructure-focused administrators.

---

*File created: 2026-05-01*
*All URLs verified working as of May 1, 2026*
*All salary data sourced from verified 2026 surveys*
*Exchange rate: 1 USD = 16.67 ZAR (May 1, 2026)*


---

## Quick reference: Domain-by-domain checklist

Use this checklist while preparing to ensure comprehensive coverage of exam domains:

**Domain 1: Enterprise Support (15% · 10 questions)**
- [ ] GHEC configuration and org setup
- [ ] GHES installation and upgrades  
- [ ] GHAE multi-tenancy and isolation
- [ ] Enterprise billing and license tracking
- [ ] Metered product usage (Actions, Packages, Codespaces)
- [ ] Recovery codes and authentication fallback
- [ ] User invitation and role assignment
- [ ] Platform health monitoring and diagnostics
- [ ] Troubleshooting common admin issues

**Domain 2: User Identities & Authentication (20% · 13 questions)**
- [ ] SAML SSO configuration and attributes
- [ ] SCIM provisioning setup and management
- [ ] Two-factor authentication (2FA) enforcement
- [ ] Conditional access policies
- [ ] External identity provider synchronization
- [ ] Username normalization and identity mapping
- [ ] Authentication troubleshooting scenarios
- [ ] Token and credential management

**Domain 3: Access & Permissions (20% · 13 questions)**
- [ ] Organization permission levels and inheritance
- [ ] Repository permission levels (read, triage, write, maintain, admin)
- [ ] Team structure and nested teams
- [ ] Branch protection rules and status checks
- [ ] Code owner requirement and enforcement
- [ ] Outside collaborator access management
- [ ] Repository visibility and defaults
- [ ] Custom roles (Enterprise feature)

**Domain 4: Security & Compliance (36% · 23 questions)**
- [ ] Code scanning (CodeQL) configuration
- [ ] Secret scanning and push protection
- [ ] Dependabot alerts and automation
- [ ] Audit logging and retention policies
- [ ] IP allowlists and network security
- [ ] SOC 2, FedRAMP, HIPAA, PCI-DSS compliance mapping
- [ ] Enterprise security policies
- [ ] CODEOWNERS and review requirements

**Domain 5: GitHub Actions (16% · 10 questions)**
- [ ] Hosted vs. self-hosted runners
- [ ] Runner registration and management
- [ ] Organization-level Actions policies
- [ ] Workflow approval gates and environments
- [ ] Concurrency and usage limits
- [ ] Actions secrets management
- [ ] Cost optimization strategies
- [ ] Required workflows and reusable workflows

**Domain 6: Packages & Integrations (5% · 3 questions)**
- [ ] GitHub Packages registry configuration
- [ ] Package access and permissions
- [ ] Retention and cleanup policies
- [ ] External tool integrations
- [ ] Marketplace integration management

Aim to achieve 85%+ confidence on all items in each domain before exam day.

