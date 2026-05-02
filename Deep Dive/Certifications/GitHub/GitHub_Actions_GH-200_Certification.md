---
cert_name: "GitHub Actions Certification"
cert_code: "GH-200"
vendor: "GitHub (Microsoft)"
status: "Active"
level: "Associate"
domain: "DevOps / CI-CD"
ecosystem: "GitHub Ecosystem"
last_verified: "2026-05-01"
aliases: ["GitHub Actions Developer", "GitHub CI/CD Certification", "GH-200"]
---

# GitHub Actions Certification

**`GH-200`** · ● **Active** · **Associate** · _GitHub (Microsoft)_

> **Certification Landscape Note:** GitHub does not formally issue a "GitHub Certified Developer" cert. The **GH-200 (GitHub Actions)** is the closest Associate-level equivalent for developers and engineers validating CI/CD and workflow automation expertise on GitHub's platform. GitHub offers five certifications: GH-900 (Foundations, entry-level), GH-100 (Administration, enterprise focus), GH-200 (Actions, this cert), GH-300 (Copilot, AI-assisted dev), and GH-500 (Advanced Security). The GH-200 is the most directly applicable to developers building and maintaining CI/CD pipelines.

---

## Exam facts

| Field | Value |
|---|---|
| Cost | $99 USD (region-based pricing varies; confirm at checkout via Pearson VUE) |
| Duration | 90–100 minutes |
| Questions | 65 (all counted toward score; mix of multiple-choice, multi-select, scenario-based) |
| Passing | 700 out of 1,000 (scaled score) |
| Format | Multiple choice · Multi-select · Case study / scenario-based questions |
| Delivery | Pearson VUE (online proctored or physical test center) |
| Languages | English, Spanish, Portuguese (Brazil), Korean, Japanese |
| Valid | 3 years |
| Renewal | Pass higher GitHub certification or retake; no continuing education credits required |
| Prerequisites | None formally required; intermediate GitHub Actions / CI-CD experience recommended |
| Released | GitHub Actions certification launched in 2023; exam significantly updated January 2026 |
| Retiring | No retirement date announced; exam actively maintained |

**Vendor source —** [GitHub Actions Certification ↗](https://learn.microsoft.com/en-us/credentials/certifications/github-actions/)

**Official exam guide —** [Study Guide: Exam GH-200 ↗](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-200)

**Exam registration —** [Register via Pearson VUE ↗](https://docs.github.com/en/get-started/showcase-your-expertise-with-github-certifications/registering-for-a-github-certifications-exam)

---

## About

The GitHub Actions Certification (GH-200) validates intermediate to advanced competency in automating software development workflows using GitHub Actions — the native CI/CD orchestration and workflow automation platform for GitHub. Launched in 2023 and substantially updated in January 2026, it targets DevOps engineers, software developers, platform engineers, and release engineers who design, maintain, and scale automation across GitHub repositories and enterprises.

GitHub Actions is tightly integrated into the GitHub platform, running directly within the context of GitHub repositories without requiring external CI/CD tools. This deep integration allows teams to author, trigger, and monitor CI/CD pipelines without leaving their code review workflow. Unlike standalone CI/CD platforms (Jenkins, CircleCI, GitLab CI), GitHub Actions reduces configuration overhead and decision paralysis for teams already standardized on GitHub.

The certification validates core competencies including YAML workflow authoring, self-hosted runner management at scale, secure secrets handling via OpenID Connect (OIDC), third-party service integration (AWS, Azure, Docker Hub, npm registries), and architecture of CI/CD systems for multi-team GitHub Enterprise environments. The exam was significantly updated in January 2026, with new objectives around enterprise runner management, advanced security practices, and passwordless deployments, making it current for modern DevOps workflows.

---

## Domain context — DevOps / CI/CD

The DevOps / CI-CD domain spans version control orchestration and continuous integration/continuous deployment (CI/CD) pipeline automation — the glue between code and production. DevOps professionals in this domain bridge development (rapid iteration, feature velocity) and operations (stability, compliance, scalability) using automation, infrastructure-as-code, and monitoring.

GitHub Actions is the native CI/CD engine for GitHub and github.com, integrated directly into pull request workflows, branch protection rules, and deployment gates. Unlike standalone platforms (Jenkins, CircleCI, GitLab CI), GitHub Actions runs within GitHub's runner infrastructure, reducing operational overhead for teams already on the GitHub platform. The GH-200 validates GitHub-specific CI/CD orchestration; cross-vendor CI/CD skills are tested in other certifications.

This domain encompasses workflow automation platforms (GitHub Actions, GitLab CI/CD, Jenkins, CircleCI), container runtimes and orchestration (Docker, Kubernetes CKA/CKAD), infrastructure-as-code (Terraform, CloudFormation, Ansible), deployment automation (Helm, ArgoCD), and observability/monitoring for CI/CD pipelines. The DevOps/CI-CD domain overlaps with Cloud (AWS Lambda, Azure Functions, GCP Cloud Run deployments), Security (secrets management, compliance scanning, OIDC), and Platform Engineering (self-service infrastructure).

**Related domains:** Cloud Platforms · Kubernetes · Security & Compliance · Platform Engineering

[Read full ecosystem deep dive — GitHub Ecosystem →](../../../Ecosystems/GitHub_Ecosystem.md) *(file not yet created)*

---

## Topics covered

Based on the official Microsoft Learn exam guide (updated January 2026), the GH-200 exam covers the following five functional domains, each weighted by exam importance:

**1. Author and manage workflows** (20–25% weight)
- Create and configure workflow files (`.github/workflows/*.yml`)
- YAML syntax, indentation rules, and common errors
- Workflow triggers: `push`, `pull_request`, `schedule` (cron), `workflow_dispatch`, `workflow_call`, webhook events
- Event filtering: branches, tags, paths, pull request types
- Conditional execution: `if` conditions, job success/failure evaluation
- Reusable workflows and composite actions (calling shared workflows across repos)
- Workflow visualization and debugging via GitHub UI logs
- Example: Creating a pull request workflow that runs linting and tests on every PR to main branch

**2. Manage GitHub Actions for the enterprise** (15–20% weight)
- Self-hosted runner setup and configuration (Ubuntu, macOS, Windows, Docker)
- Runner groups and assignment policies (organization-level or repository-level)
- Enterprise-scale runner architecture and scaling strategies
- Security hardening and isolation (network, process, credential handling)
- Resource management (CPU, memory, disk limits; concurrent job limits)
- Runner monitoring, troubleshooting, and observability
- GitHub Enterprise Server (GHES) runner considerations
- Example: Scaling a fleet of self-hosted runners behind a reverse proxy for on-premises deployments

**3. Consume GitHub Actions and customize workflows** (20–25% weight)
- Using pre-built actions from GitHub Marketplace (checkout, upload-artifact, deploy-to-production)
- Referencing actions by version tag or commit SHA
- Passing inputs and outputs between actions
- Docker container actions (using `docker://` image reference)
- JavaScript/TypeScript actions (using Node.js runtime)
- Composite actions (bundling shell scripts and other actions into a reusable unit)
- Setting environment variables and using contexts (github, runner, env, secrets, vars, inputs, matrix, needs)
- Example: Using aws-actions/configure-aws-credentials and aws-actions/cloudformation-action-helper for deployment

**4. Manage runners and enable secure workflows** (15–20% weight)
- OIDC (OpenID Connect) federation for passwordless cloud deployments (AWS STS, Azure Workload Identity, Google Cloud Workload Identity)
- Secrets management: repository secrets, environment secrets, organization secrets; encryption at rest
- Preventing secrets leakage in logs and artifacts
- Matrix builds and job parallelization (test across multiple Node versions, OS platforms)
- Job dependencies (`needs` keyword)
- Conditional execution and status checks (pass/fail gates on deployments)
- Example: Deploying to AWS Lambda without storing AWS credentials in secrets, using OIDC token exchange

**5. Author and maintain actions** (10–15% weight)
- Developing Docker-based custom actions (Dockerfile, entrypoint)
- Developing JavaScript/TypeScript actions (action.yml metadata, Node.js handler)
- Developing composite actions (reusable wrapper around shell/run/action steps)
- Action metadata (action.yml): inputs, outputs, runs, branding
- Versioning and releasing actions (GitHub releases, major/minor tags)
- Testing custom actions before publication
- Publishing actions to GitHub Marketplace
- Example: Creating a custom Slack notifier action that posts workflow results to Slack

*Source:* [Official Study Guide for Exam GH-200 ↗](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-200)

---

## Common skills at DevOps / CI-CD · Associate

*Shared competencies for the DevOps/CI-CD domain at Associate level, independent of vendor or platform.*

- **YAML configuration and syntax** — Indentation-sensitive structured markup; used by Kubernetes, Docker Compose, Ansible, GitHub Actions, GitLab CI, and most modern CI/CD platforms. Whitespace errors are common; candidates must debug and author YAML by hand.
- **Docker containerization** — Image layering, Dockerfile authoring, registry push/pull, container networking, and runtime flags. GitHub Actions uses Docker heavily for actions; understanding image efficiency (layer caching) is important.
- **Git fundamentals** — Clone, branch, merge, rebase, cherry-pick, conflict resolution, and reflog. GitHub Actions is deeply integrated with Git; workflows are triggered by Git events (push, pull_request).
- **Scripting (Bash, Python, shell)** — Automation and testing; common in build steps and custom actions. Bash is the default in most GitHub Actions runners (Ubuntu).
- **Networking basics** — HTTP/HTTPS, ports, DNS, firewalls, IP allowlisting. Critical for runners behind corporate proxies and for deploying to cloud platforms.
- **Cloud platform basics** — EC2, App Service, Container Registry, and cloud credential management. Many workflows deploy to cloud; understanding platform-specific APIs is essential.

---

## Recommended courses at DevOps / CI-CD · Associate

| Provider | Title | Cost | URL |
|---|---|---|---|
| A Cloud Guru | GitHub Actions Deep Dive | $29–$49/mo (subscription) | [↗](https://www.classcentral.com/course/acloudguru-github-actions-deep-dive-103622) |
| Udemy | The Complete GitHub Actions & Workflows Guide | $15–$99 | [↗](https://www.udemy.com/course/github-actions/) |
| Udemy | GitHub Actions (GH-200) Exam Questions [2026] | $15–$99 | [↗](https://www.udemy.com/course/github-actions-gh-200-exam-questions-2026/) |
| KodeKloud | GitHub Actions Certification Course | $12–$20/mo | [↗](https://kodekloud.com/courses/github-actions-certification) |
| LinkedIn Learning | GitHub Actions for CI/CD | Included with LinkedIn Premium | [↗](https://www.linkedin.com/learning/) |
| Microsoft Learn | GitHub Actions (free learning modules) | Free | [↗](https://learn.github.com/certification/ACTIONS) |
| Tutorials Dojo | GH-200 GitHub Actions Exam Study Path | $9–$15/mo | [↗](https://tutorialsdojo.com/gh-200-github-actions-exam-study-path/) |

**Course-selection rule:** Each course must cover GH-200 exam objectives specifically, not "GitHub in general." The Udemy exam-question courses and MeasureUp practice exams are most directly aligned to the 2026 exam format.

---

## Practice exams

| Provider | Title | Cost | URL |
|---|---|---|---|
| MeasureUp | GitHub Actions Practice Test (Microsoft GH-200) | $99 | [↗](https://www.measureup.com/microsoft-gh-200-github-actions-practice-test.html) |
| Udemy | GitHub Actions Certification (GH-200) - Practice Exams | $15–$99 | [↗](https://www.udemy.com/course/github-actions-practice-exams/) |
| CertificationPractice.com | Free GH-200 Practice Tests (390 questions) | Free | [↗](https://certificationpractice.com/practice-exams/github-actions) |
| SkillCertPro | GitHub Actions Certification Exam Questions (540 questions) | $29 | [↗](https://skillcertpro.com/product/github-actions-certification-exam-questions/) |
| Tutorials Dojo | GH-200 GitHub Actions Practice Exams | $9–$15/mo | [↗](https://portal.tutorialsdojo.com/courses/gh-200-github-actions-practice-exams/) |

---

## Books

| Title | Author | Publisher | Year | ISBN | URL |
|---|---|---|---|---|---|
| GitHub Actions in Action | Christoph Wille | Manning | 2023 | 978-1617299262 | [↗](https://www.manning.com/books/github-actions-in-action) |
| Learning GitHub Actions | Michael Kaufmann | O'Reilly | 2022 | 978-1492112068 | [↗](https://www.oreilly.com/library/view/learning-github-actions/9781492112068/) |

**Book note:** GitHub Actions is a rapidly evolving platform. The Manning (2023) and O'Reilly (2022) titles provide solid foundational coverage, but the exam changed significantly in January 2026. Pair any book study with the official Microsoft Learn study guide and the latest MeasureUp practice exams.

---

## Exam preparation strategy

**Recommended study timeline:** 4–8 weeks for Associate-level readiness (assumes intermediate GitHub + CI/CD familiarity).

**Phase 1: Official Study Guide (1–2 weeks)**
- Read Microsoft Learn study guide end-to-end: [learn.microsoft.com/credentials/certifications/resources/study-guides/gh-200](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-200)
- Take notes on exam objectives and weighted domains (Author/Manage Workflows 20–25%, Manage Enterprise 15–20%, Consume Actions 20–25%, etc.)
- Review GitHub Actions documentation: [docs.github.com/actions](https://docs.github.com/actions)
- Understand the January 2026 exam changes: OIDC, enterprise runners, and security practices

**Phase 2: Hands-on Laboratory (2–3 weeks)**
- Set up a test repository on GitHub
- Author workflows covering all exam domains: push triggers, pull_request event filtering, matrix builds, conditional execution, reusable workflows
- Create and publish a custom JavaScript or Docker container action
- Integrate workflows with a third-party service (Slack, AWS, Docker Hub, npm registry)
- Test OIDC-based passwordless cloud deployments (AWS STS, Azure Workload Identity) if available
- Debug workflow runs using GitHub UI logs and action diagnostics
- Test runner management (if you have GitHub Enterprise or a self-hosted runner environment)

**Phase 3: Practice Exams (1–2 weeks)**
- Complete MeasureUp full-length practice test (most closely aligned to real exam format and difficulty)
- Review all incorrect answers; note knowledge gaps and bookmark Microsoft Learn sections
- Complete Udemy GH-200 practice exams (500+ questions across multiple full exams)
- Use CertificationPractice.com free tests (390 questions) for additional drilling and weak-area reinforcement

**Phase 4: Final Review (3–5 days)**
- Review exam objectives one final time; map each objective to a concrete scenario
- Flashcards on YAML syntax edge cases (indentation-sensitive, special characters, flow vs. block style)
- Workflow context variables automatic recall: github, runner, env, secrets, vars, inputs, matrix, needs, strategy
- OIDC token exchange flow and cloud credential management — common tricky scenario
- Schedule exam on Pearson VUE; confirm test center or online proctoring setup and identification requirements

---

## Typical job titles at DevOps / CI-CD · Associate

**DevOps Engineer** · **CI/CD Engineer** · **Release Engineer** · **Site Reliability Engineer (SRE)** · **Software Engineer (Build/Infrastructure focus)** · **Platform Engineer** · **Infrastructure Automation Engineer** · **GitHub Developer**

**Context:** These roles design and maintain CI/CD pipelines, automate deployments, manage production infrastructure, and ensure system reliability at scale. GitHub Actions experience is increasingly listed as "required" or "preferred" on job boards for mid-market and enterprise teams using GitHub Enterprise. Remote-friendly; common across SaaS, fintech, and enterprise software vendors.

*(Job titles drawn from 2026 job boards (LinkedIn, Glassdoor, Indeed) listing GitHub Actions experience as required or preferred. Not all positions require this specific cert, but it validates hands-on workflow design and automation expertise valued in these roles.)*

---

## Salary

| Region | Range | Source |
|---|---|---|
| USD | $118,000 – $173,750 | [Robert Half 2026 Salary Guide ↗](https://www.roberthalf.com/us/en/insights/salary-guide/technology) · [Glassdoor DevOps Engineer ↗](https://www.glassdoor.com/Salaries/devops-engineer-salary-SRCH_KO0,15.htm) (avg. $143,768) |
| ZAR | R447,584 – R885,239 | [PayScale ZA DevOps Engineer ↗](https://www.payscale.com/research/ZA/Job=Development_Operations_(DevOps)_Engineer/Salary) |
| GBP | £55,000 – £85,000 | [IT Jobs Watch UK ↗](https://www.itjobswatch.co.uk/) (DevOps Engineer salary bands) |
| EUR | €55,000 – €80,000 | General European market (DE/FR/NL averages; no GitHub certification-specific data) |
| AUD | A$110,000 – A$160,000 | General Australian market (limited specific data) |

**Salary note:** GitHub Actions certification-specific salary uplift data is not yet widely available; these ranges reflect DevOps and CI/CD engineer roles that commonly require or prefer GitHub Actions expertise. Certification value is highest when combined with 2+ years of hands-on GitHub/CI-CD experience.

---

## Skills validated

*Technologies and practices specifically tested by the GH-200 exam.*

**Workflow Authoring & Configuration**
- YAML syntax and workflow file structure (triggers, jobs, steps, run / uses directives)
- Event filtering and workflow triggers (push, pull_request, schedule, workflow_dispatch, webhook events)
- Reusable workflows (calling workflows from workflows across repositories)
- Workflow visualization, logging, and debugging (GitHub UI, workflow run history, action logs)

**Contexts, Metadata & Runtime Variables**
- Workflow contexts (github, runner, env, secrets, vars, inputs, matrix, needs, strategy, job, steps)
- Environment variables and variable interpolation in YAML
- Encrypted secrets at repository, environment, and organization scopes
- Matrix strategy for parallel test execution across platforms/versions

**Actions (Built-in, Pre-built, Custom)**
- Pre-built actions from GitHub Marketplace (checkout, upload-artifact, download-artifact, deploy-to-production)
- Docker container actions (docker://, -uses- directives)
- Composite actions (bundled shell / JavaScript steps)
- JavaScript/TypeScript action development and metadata (action.yml)

**Security & Deployment**
- OpenID Connect (OIDC) federation for passwordless cloud deployments (AWS, Azure, GCP)
- Encrypted secrets management and preventing secrets leakage in logs
- Branch protection rules and status checks
- Deployment environments and approval gates

**Self-Hosted Runners & Enterprise**
- Runner installation, configuration, and updates (Ubuntu, macOS, Windows, Docker)
- Self-hosted runner groups and assignment policies
- Resource management and scaling (runner pools, concurrency limits)
- Organization-level runner management and compliance
- GitHub Enterprise Server (GHES) runner configuration and administration

**Integration & Automation**
- Third-party service integrations (AWS, Azure, Docker Hub, npm, Slack, etc.)
- GitHub Packages (npm, Maven, NuGet, Docker) integration in workflows
- Artifact upload/download for inter-step communication
- Workflow status and failure handling (if conditions, continue-on-error)

---

## Related certifications

- **Stacks with:** [GitHub Foundations (GH-900) ↗](./GitHub_Foundations_GH-900.md) *(file not yet created)* — entry-level GitHub fundamentals; lower weight than Actions
- **Stacks with:** [GitHub Administration (GH-100) ↗](./GitHub_Administration_GH-100.md) *(file not yet created)* — enterprise GitHub management; orthogonal focus
- **Complements:** [AWS Certified DevOps Engineer – Professional ↗](../../AWS/AWS_Certified_DevOps_Engineer_Professional.md) *(file not yet created)* — AWS-specific orchestration; GitHub Actions common in hybrid stacks
- **Complements:** [Certified Kubernetes Administrator (CKA) ↗](../../Linux-Foundation/CKA_Certified_Kubernetes_Administrator.md) *(file not yet created)* — container orchestration; GitHub Actions often deploys to Kubernetes
- **Prerequisite for:** [GitHub Copilot (GH-300) ↗](./GitHub_Copilot_GH-300.md) *(file not yet created)* — AI-assisted workflow authoring; builds on Actions knowledge
- **Equivalents at this level:** [GitLab Certified Associate ↗](../../GitLab/GitLab_Certified_Associate.md) *(file not yet created)* — GitLab CI/CD equivalent
- **Vendor overview:** [GitHub Overview ↗](../GitHub_Vendor_Overview.md) *(file not yet created)*

---

## Sources

- [GitHub Actions Certification (Microsoft Learn)](https://learn.microsoft.com/en-us/credentials/certifications/github-actions/)
- [Study Guide for Exam GH-200](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-200)
- [About GitHub Certifications (GitHub Docs)](https://docs.github.com/en/get-started/showcase-your-expertise-with-github-certifications/about-github-certifications)
- [Registering for GitHub Certifications Exam](https://docs.github.com/en/get-started/showcase-your-expertise-with-github-certifications/registering-for-a-github-certifications-exam)
- [GitHub Learn: GitHub Actions Certification](https://learn.github.com/certification/ACTIONS)
- [MeasureUp GitHub Actions Practice Test](https://www.measureup.com/microsoft-gh-200-github-actions-practice-test.html)
- [GitHub Actions Deep Dive (A Cloud Guru)](https://www.classcentral.com/course/acloudguru-github-actions-deep-dive-103622)
- [Udemy: The Complete GitHub Actions & Workflows Guide](https://www.udemy.com/course/github-actions/)
- [KodeKloud GitHub Actions Certification Course](https://kodekloud.com/courses/github-actions-certification)
- [Tutorials Dojo GH-200 Study Path](https://tutorialsdojo.com/gh-200-github-actions-exam-study-path/)
- [Robert Half 2026 Technology Salary Guide](https://www.roberthalf.com/us/en/insights/salary-guide/technology)
- [Glassdoor DevOps Engineer Salaries](https://www.glassdoor.com/Salaries/devops-engineer-salary-SRCH_KO0,15.htm)
- [PayScale South Africa DevOps Engineer](https://www.payscale.com/research/ZA/Job=Development_Operations_(DevOps)_Engineer/Salary)
- [Manning: GitHub Actions in Action](https://www.manning.com/books/github-actions-in-action)
- [O'Reilly: Learning GitHub Actions](https://www.oreilly.com/library/view/learning-github-actions/9781492112068/)

---

*Last verified: 2026-05-01*

*Parent ecosystem: [GitHub Ecosystem](../../../Ecosystems/GitHub_Ecosystem.md) — not yet created*

*Parent domain: [DevOps / CI-CD](../../../Domains/DevOps_CICD.md) — not yet created*

*Vendor overview: [GitHub Vendor Overview](../GitHub_Vendor_Overview.md) — not yet created*
