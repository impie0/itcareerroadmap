# D45: Wiz Cloud Security Ecosystem Deep Dive

**Last updated:** 2026-04-30  
**Status:** Production  
**Audience:** Cloud security professionals, architects, career-changers entering DevSecOps  

---

## Executive Summary

Wiz is an Israeli-American cloud-native application protection platform (CNAPP) founded in January 2020 that became the fastest-growing SaaS company in history. On March 18, 2025, Google announced it would acquire Wiz for $32 billion—Google's largest acquisition ever—with regulatory clearance completed by February 2026. As of April 2026, Wiz operates as Google Cloud's premier cloud security division, integrated into Google's agentic AI defense strategy and multi-cloud threat detection stack.

The platform consolidates CSPM, DSPM, CIEM, container security, and threat detection into a unified security graph. Career ladder spans from practitioner to architect roles, with salaries ranging $95K–$260K OTE depending on specialization. A robust free training program (Wiz Academy) and paid certification paths support career progression.

---

## Company Profile & Acquisition

### Founding & Growth Trajectory

Wiz was founded in **January 2020** by Assaf Rappaport, Yinon Costica, Roy Reznik, and Ami Luttwak, all ex-founders of Adallom (acquired by Microsoft in 2015). The company is headquartered in New York City with an Israeli-American operational base.

The company holds the distinction of being the **fastest startup ever to scale from $1 million to $100 million ARR**, achieving this milestone in approximately 18 months—from February 2021 to July 2022. Subsequent growth milestones:

- **August 2022**: Claimed "fastest-growing software company in history" status.
- **October 2021**: Reached unicorn status with $1.7 billion valuation.
- **October 2021**: Valuation jumped to $6 billion.
- **February 2023**: Valuation reached $10 billion.
- **2025**: Crossed $1 billion annual recurring revenue (ARR) before acquisition.

*Source:* [Wikipedia: Wiz, Inc.](https://en.wikipedia.org/wiki/Wiz,_Inc.)

### Google Acquisition ($32 Billion)

On **March 18, 2025**, Google announced a definitive agreement to acquire Wiz for $32 billion in an all-cash transaction. This marks:

- **Google's largest acquisition in company history** (surpassing previous record).
- **Largest cybersecurity acquisition of all time**.
- Strategic bet on cloud security and multi-cloud operations in the AI era.

**Timeline:**
- **March 18, 2025**: Announcement of acquisition agreement.
- **November 2025**: U.S. Department of Justice (DOJ) regulatory clearance.
- **February 2026**: European Union (EU) regulatory clearance.
- **March 11, 2026**: Google officially closed/completed the acquisition.

The deal required regulatory review due to antitrust concerns but ultimately received approval from both U.S. and EU authorities. Google Cloud now operates Wiz as its primary cloud security division, deeply integrated into Google Cloud Security operations and threat intelligence services.

*Sources:*
- [TechCrunch: Google wraps up $32B acquisition of cloud cybersecurity startup Wiz](https://techcrunch.com/2026/03/11/google-completes-32b-acquisition-of-wiz/)
- [Google Cloud Blog: Google announces agreement to acquire Wiz](https://cloud.google.com/blog/products/identity-security/google-announces-agreement-acquire-wiz)
- [Cleary Gottlieb: Google Completes $32 Billion Acquisition of Wiz](https://www.clearygottlieb.com/news-and-insights/news-listing/google-completes-32-billion-acquisition-of-wiz)
- [SEC Filing: Alphabet Inc., March 18, 2025](https://www.sec.gov/Archives/edgar/data/1652044/000165204425000027/googexhibit99131825.htm)

---

## Product Portfolio

Wiz Cloud (CNAPP) consolidates multiple cloud security disciplines into a unified platform powered by the **Wiz Security Graph**—a contextualized risk engine that correlates infrastructure, identity, data, and threat signals to surface real attack paths rather than isolated findings.

### Core CNAPP (Cloud-Native Application Protection Platform)

The flagship platform unifies:

- **CSPM** (Cloud Security Posture Management): Automated discovery and remediation of cloud resource misconfigurations. Covers 150+ compliance frameworks (CIS, PCI-DSS, SOC 2, etc.) with 2,300+ cloud misconfiguration rules.
- **KSPM** (Kubernetes Security Posture Management): Native container and Kubernetes cluster hardening, admission control, and policy enforcement.
- **CWPP** (Cloud Workload Protection Platform): Runtime protection for EC2 instances, containers, and serverless functions.
- **Vulnerability Management**: Image scanning, dependency tracking, and software composition analysis (SCA).
- **Infrastructure-as-Code (IaC) Scanning**: Static analysis of Terraform, CloudFormation, Kubernetes YAML, Helm charts, and Dockerfiles before deployment.

*Source:* [Wiz Academy: What is CNAPP?](https://www.wiz.io/academy/cloud-security/what-is-a-cloud-native-application-protection-platform-cnapp)

### CSPM (Cloud Security Posture Management)

Automates identification, prioritization, and remediation of cloud infrastructure risks. Covers AWS, Azure, GCP, OCI, Alibaba Cloud, and on-premises/VMware environments.

*Source:* [Wiz Academy: CNAPP vs CSPM](https://www.wiz.io/academy/cloud-security/cnapp-vs-cspm)

### DSPM (Data Security Posture Management)

Discovers, classifies, and protects sensitive data across cloud storage, databases, and data lakes. Integrates attack path analysis to surface data exfiltration risks via compromised identities or misconfigurations.

*Source:* [Wiz Academy: CSPM vs DSPM: Why You Need Both](https://www.wiz.io/academy/cloud-security/cspm-vs-dspm)

### CIEM (Cloud Infrastructure Entitlement Management)

Analyzes effective permissions for identities (users, service accounts, roles) and resources, detects privilege escalation paths, and enables least-privilege implementation. Includes secret/credential leak detection.

*Source:* [Wiz: Product Overview](https://www.wiz.io/solutions)

### Wiz Code (DevSecOps / Shift-Left)

Integrates security into the CI/CD pipeline to catch misconfigurations and vulnerabilities during development rather than at runtime. Key components:

- **Container scanning** in CI/CD for image vulnerabilities.
- **IaC scanning** across Dockerfiles, Kubernetes manifests, Helm charts.
- **Wiz Guardrails**: Admission controller for runtime policy enforcement in Kubernetes deployments.
- **IDE integrations** for inline code security feedback.

*Sources:*
- [Wiz Blog: Wiz magic shifts left](https://www.wiz.io/blog/wiz-magic-shifts-left)
- [Wiz Academy: Shift Left Security](https://www.wiz.io/academy/application-security/shift-left-security)
- [Wiz Academy: DevSecOps for Kubernetes](https://www.wiz.io/academy/devsecops-for-kubernetes)

### Wiz Defend (Cloud Detection & Response / TDR)

Integrates eBPF runtime sensors, cloud audit log analysis, and Security Graph context to detect active threats and guide rapid investigation and response. Wiz acquired **Gem Security for $350 million in April 2024** to expand this capability.

**Gem Security Acquisition Context:**  
Gem Security, founded in 2022, specialized in Cloud Detection and Response (CDR). The $350 million acquisition allowed Wiz to consolidate threat detection into its platform—moving from pure posture management into integrated detection and response (TDR) at scale.

**Wiz Defend Capabilities:**
- Real-time detection of suspicious API activity, lateral movement, and data exfiltration.
- Automatic enrichment with identity effective permissions, resource access paths, and privilege escalation vectors.
- Integration with Google Security Operations and Mandiant Threat Defense (post-acquisition).
- SOC analyst dashboards for threat triage and remediation orchestration.

*Sources:*
- [Wiz Blog: Introducing Wiz Defend](https://www.wiz.io/blog/introducing-wiz-defend)
- [Wiz: Wiz Defend Platform](https://www.wiz.io/platform/wiz-defend)
- [Fortune: Cybersecurity startup Wiz acquires Gem Security](https://fortune.com/2024/04/10/exclusive-wiz-acquires-gem-security/)
- [Wiz Blog: Wiz acquires Gem Security to reinvent threat detection](https://www.wiz.io/blog/wiz-acquires-gem-security-to-reinvent-threat-detection-in-the-cloud)
- [SiliconANGLE: Wiz Acquires Cloud Cybersecurity Startup Gem Security](https://siliconangle.com/2024/04/10/wiz-acquires-cloud-cybersecurity-startup-gem-security-reported-350m/)

### AI Security Posture Management (AI-SPM)

Launched in 2025–2026, AI-SPM is Wiz's newest offering—the first CNAPP to address AI-specific security risks. Covers:

- **AI-BOM** (AI Bill of Materials): Auto-discovery of AI frameworks, models, SDKs, and IDE extensions without agents.
- **AI Configuration Management**: Detection of misconfigurations in OpenAI, Amazon Bedrock, Hugging Face, and other AI services.
- **DSPM for AI**: Protection of training data from unauthorized access.
- **Attack Path Analysis to AI Models**: Surfacing vulnerabilities, identity compromises, and data leakage routes to AI pipelines.
- **AI Developer Dashboard**: Risk queue prioritized for dev teams to remediate AI-specific threats.

*Sources:*
- [Wiz Academy: What is AI Security Posture Management (AI-SPM)?](https://www.wiz.io/academy/what-is-ai-security-posture-management-ai-spm)
- [Wiz Blog: Wiz becomes the first CNAPP to provide AI Security Posture Management](https://www.wiz.io/blog/ai-security-posture-management)
- [Wiz Solutions: AI-SPM](https://www.wiz.io/solutions/ai-spm)

---

## Certification Ladder

Wiz offers vendor-led certifications validating cloud security expertise. As of April 2026, the program focuses on two main certifications:

### Wiz Certified Cloud Fundamentals

- **Target Audience:** Security engineers, cloud architects, platform engineers.
- **Format:** 60 multiple-choice questions (some require multi-select).
- **Duration:** 150 minutes (2.5 hours).
- **Passing Score:** 700 / 1000 (70%).
- **Cost:** $150 USD.
- **Validity:** 2 years from issue.
- **Prerequisite:** No formal prerequisites; foundational cloud security knowledge assumed.

*Source:* [Wiz Certified: Validate your Wiz expertise](https://www.wiz.io/wiz-certified)

### Wiz Defend Certification

Validates skills in cloud threat detection and response for SOC, IT, and security professional roles. Focuses on threat hunting, incident response workflows, and Wiz Defend platform features.

*Source:* [Wiz Blog: Wiz Defend Certification: Advance Cloud Threat Defense](https://www.wiz.io/blog/wiz-defend-certification)

### Training & Preparation

**Free Resources:**
- **Wiz Academy**: Self-paced learning platform covering CNAPP fundamentals, Kubernetes security, shift-left DevSecOps, DSPM, CIEM, and threat detection concepts. Accessible via https://www.wiz.io/academy.
- **CNAPP Buyer's Guide** (free eBook): Guidance for security leaders evaluating CNAPP platforms.

**Paid Training:**
- **Official Wiz Education**: Instructor-led and self-paced courses available through Wiz's training portal.
- **Third-party providers**: MaxMenus, IGMGuru, and other training partners offer Wiz-aligned courses.

*Sources:*
- [Wiz Academy Home](https://www.wiz.io/academy)
- [Wiz Training & Certification](https://www.wiz.io/courses)

---

## Career Roles & Salary Ranges (USD)

Wiz hires across cloud security, engineering, sales, and product roles. The following reflects typical compensation for technical tracks (as of 2026):

### Cloud Security Technician (Junior)

- **Role:** Support customer deployments, run compliance scans, assist with alert triage.
- **Salary Range:** $95K–$130K base.
- **Prerequisites:** CompTIA Cloud+, AWS Certified Cloud Practitioner, or 1–2 years cloud ops experience.
- **Growth Path:** → Cloud Security Engineer.

### Cloud Security Engineer / Wiz Engineer

- **Role:** Design and deploy Wiz across customer environments, integrate with CI/CD, manage posture drift, build custom rules.
- **Salary Range:** $130K–$175K base (+ ~15% bonus/equity typical).
- **Prerequisites:** AWS Solutions Architect Associate, Azure Fundamentals, Kubernetes basics, or 3+ years cloud infrastructure role.
- **Growth Path:** → Senior Engineer or Solutions Architect.

### Senior Cloud Security Engineer / Architect

- **Role:** Design multi-cloud security strategies, lead architecture decisions, mentor junior engineers, develop advanced integrations.
- **Salary Range:** $170K–$230K base (+ equity/stock options common at this level).
- **Prerequisites:** AWS Solutions Architect Professional, Certified Kubernetes Administrator (CKA), or equivalent experience.
- **Growth Path:** → Principal Engineer, Staff Engineer, or Customer-facing architect role.

### Solutions Engineer / Sales Engineer (SE) / Pre-Sales

- **Role:** Technical engagement with enterprise prospects, custom POC design, competitive product positioning, post-sale technical support.
- **Salary Range:** $170K–$260K **OTE** (On-Target Earnings, including commission).
  - Base: $100K–$150K.
  - Commission/Variable: $70K–$110K annually.
- **Prerequisites:** 5+ years security/cloud ops, AWS Certified Security Specialist (or equivalent), excellent presentation skills.
- **Growth Path:** → Senior SE, Regional Sales Manager, or VP of Sales Engineering.

### Cloud Security Architect (Customer-facing)

- **Reported Range (Glassdoor):** $157K–$290K annually (25th–90th percentile).
- **Median:** ~$193K base.
- **Role:** Strategic customer engagements, compliance roadmap definition, threat model development.

*Sources:*
- [Glassdoor: Wiz Cloud Security Architect](https://www.glassdoor.com/Salary/Wiz-Cloud-Security-Architect-Salaries-E5304442_D_KO4,28.htm)
- [Salary.com: Solutions Engineer at Wiz Inc](https://www.salary.com/research/company/wiz-inc/solutions-engineer-salary?cjid=19979168)
- [Levels.fyi: Wiz Salaries](https://www.levels.fyi/companies/wiz/salaries)

---

## Training & Community

### Free Learning Paths

**Wiz Academy** (https://www.wiz.io/academy):
- Comprehensive, vendor-led self-paced curriculum.
- Topics: CNAPP fundamentals, Kubernetes security, shift-left DevSecOps, DSPM/CIEM basics, threat detection & response, AI security.
- No prerequisites; suitable for security analysts stepping into cloud roles.
- Interactive labs and quizzes available.

**CNAPP Buyer's Guide** (Free eBook):
- Downloadable from Wiz's content library.
- Helps security leaders evaluate CNAPP vendors (including Wiz's own positioning).

*Source:* [Wiz Academy](https://www.wiz.io/academy)

### Paid Certification & Training

- **Wiz Certified Cloud Fundamentals Exam:** $150 via Wiz's official testing portal.
- **Wiz Education Courses:** Official instructor-led and self-paced courses available on Wiz's training platform.
- **Third-party providers:** MaxMenus, IGMGuru, and Udemy-hosted practice exams.

*Source:* [Wiz Training & Certification](https://www.wiz.io/courses)

### Communities & Events

**Wizdom Community:**  
Wiz's official user and practitioner community accessible via:
- **Slack workspace:** Bi-directional integration; community members ask questions, share best practices, and receive support from Wiz staff.
- **Web portal:** Same conversations mirrored for non-Slack users.

Features:
- Onboarding guidance for new deployments.
- Configuration troubleshooting.
- Peer networking with other Wiz practitioners.
- Early access to feature announcements.

*Source:* [Wiz Community](https://www.wiz.io/community)

**Wizdom Conference:**  
Annual user conference featuring:
- Hands-on labs with Wiz product experts.
- Keynotes on cloud security trends, AI risk, SOC transformation, and dev collaboration.
- Networking with other cloud security leaders.
- Product roadmap previews.

*Source:* [Wizdom: Our first-ever user conference](https://www.wiz.io/wizdom)

**Slack Integration:**  
Wiz offers a bi-directional Slack app that:
- Enables teams to manage Wiz findings and threats directly from Slack.
- Integrates Wiz alerts with remediation workflows (e.g., auto-ticket creation in Jira).
- Provides AI-powered guidance within Slack (as of 2026).

*Source:* [Wiz Blog: Introducing new Slack AI App for Wiz](https://www.wiz.io/blog/slack-ai-app-for-wiz-integration)

---

## Competitive Landscape

Wiz competes across the CNAPP and cloud security posture management (CSPM) space. Key competitors and differentiation:

### Palo Alto Networks Prisma Cloud

- **Strength:** Comprehensive cloud + endpoint security; strong integration with Palo Alto's Network Security and Endpoint Protection suites.
- **Weakness (vs. Wiz):** Less agile in multi-cloud deployments; higher complexity for smaller teams.
- **Wiz Advantage:** Superior runtime threat detection (via Gem acquisition), faster alert triage via Security Graph.

*Source:* [Wiz Academy: Palo Alto Networks Competitors & Alternatives](https://www.wiz.io/academy/cloud-security/palo-alto-networks-competitors)

### CrowdStrike Falcon Cloud Security

- **Strength:** Strong endpoint and host-based threat detection; lightweight agent deployment.
- **Weakness (vs. Wiz):** Narrower posture management; weaker at multi-cloud (AWS/GCP/Azure) parity.
- **Wiz Advantage:** True multi-cloud CNAPP unification; superior CIEM and DSPM capabilities.

**Market Mindshare (2026):**
- Wiz: #1 ranked CNAPP with 17.4% mindshare and 8.9/10 average rating.
- CrowdStrike: #7 with 4.8% mindshare and 7.9/10 rating.

*Source:* [Wiz Academy: CrowdStrike Alternatives & Competitors](https://www.wiz.io/academy/cloud-security/crowdstrike-alternatives)

### Lacework

- **Strength:** Behavior-based runtime anomaly detection; strong Kubernetes focus.
- **Weakness:** Less mature posture management (CSPM) vs. Wiz.
- **Comparison:** More niche in container/K8s; Wiz broader across all cloud workloads.

### Aqua Security

- **Strength:** User-friendly interface; strong Docker/Kubernetes container scanning.
- **Weakness:** Smaller customer base; limited enterprise SIEM/SOC integrations.
- **Comparison:** Focused on dev/container teams; Wiz spans dev → SOC → enterprise architect roles.

### Snyk (Application Security / DevSecOps)

- **Strength:** Developer experience; shift-left code vulnerability scanning; IDE integrations.
- **Weakness:** Not a full CNAPP; lacks runtime cloud threat detection.
- **Comparison:** Complementary—Snyk for code/dependencies, Wiz for cloud infrastructure and runtime.

### Sysdig

- **Strength:** Runtime container security and forensics.
- **Weakness:** Smaller platform; limited posture management.
- **Comparison:** Point solution; Wiz is unified platform.

### Orca Security

- **Strength:** Agentless posture scanning; competitive pricing.
- **Weakness:** Smaller market presence; weaker threat detection capabilities.
- **Comparison:** Wiz has 2x+ better threat detection and faster remediation via Security Graph.

*Source:* [Cycode: Top 12 Wiz Competitors in 2025](https://cycode.com/blog/top-wiz-competitors/)

---

## 2026 Google Integration & Agentic AI Strategy

Following the March 2026 completion of the acquisition, Wiz is being deeply integrated into Google Cloud Security's new **agentic defense framework**. Key 2026 updates announced at Google Cloud Next '26:

### Agentic Defense & Automation

Google rolled out three new **Security Operations agents** (autonomous AI systems) that coordinate with Wiz:

1. **Threat Hunting Agent**: Automates threat investigation using Wiz Defend findings.
2. **Detection Engineering Agent**: Builds custom detection rules based on cloud-specific attack patterns.
3. **Remediation Agent**: Proposes and orchestrates automated remediation workflows.

These agents integrate with Wiz's Security Graph to contextualize findings with identity, permission, network, and data exposure signals.

*Source:* [Google Cloud Blog: Next '26: Redefining security for the AI era with Google Cloud and Wiz](https://cloud.google.com/blog/products/identity-security/next26-redefining-security-for-the-ai-era-with-google-cloud-and-wiz)

### Multi-Cloud Agent Studio Support

Wiz now integrates with multiple AI agent-building platforms, enabling enterprises to embed cloud security checks directly into agent workflows:

- **AWS AgentCore** (AWS Bedrock agents).
- **Gemini Enterprise Agent Platform** (Google's agentic framework).
- **Microsoft Azure Copilot Studio** (GitHub Copilot agents).
- **Salesforce Agentforce** (Salesforce automation agents).
- Plus support for Databricks generative SQL and other agent tools.

### AI Security Hardening

- **Wiz Code** now scans AI-generated code (GitHub Copilot, ChatGPT, Claude) inline during IDE authoring for security flaws before commit.
- **AI-Bill of Materials (AI-BOM):** Inventories all AI services, models, SDKs, and extensions without agents.
- **AI-SPM:** Detects misconfigurations, data exposure, and privilege escalation paths to AI pipelines.

*Source:* [SiliconANGLE: Google Cloud unveils agentic AI security strategy with Wiz integration](https://siliconangle.com/2026/03/23/google-cloud-unveils-agentic-ai-security-strategy-wiz-integration-threat-intelligence-upgrades/)

---

## Regional Presence & Pricing

### Global Operations

Wiz operates offices in **New York (HQ), Tel Aviv (R&D), and London**. The platform supports AWS, Azure, GCP, OCI, Alibaba Cloud, and on-premises VMware deployments globally.

### Pricing Model

Wiz uses a **consumption-based + per-workload pricing model**:

- **Entry-level (startups):** ~$500–$2K/month for limited cloud environments.
- **Mid-market:** $5K–$20K/month for multi-cloud with CSPM + CIEM + basic threat detection.
- **Enterprise:** $50K+/month for global deployments with full platform (CSPM, CIEM, DSPM, Defend, AI-SPM) and dedicated support.

Custom quotes required for most deployments; no public per-seat pricing.

*Source:* [Wiz Pricing](https://www.wiz.io/pricing)

### South Africa & International

- **Wiz Partner Program** available globally (https://partners.wiz.io/).
- **Limited direct presence in South Africa**; engagement typically through regional resellers (e.g., distributor partners in EMEA / Sub-Saharan Africa regions).
- **Pricing in ZAR:** Not standard; most contracts in USD with conversion at invoice date. Recommend contacting Wiz sales for ZAR pricing discussions.
- **Local support:** EMEA support hub covers South Africa with standard SLAs.

*Source:* [Wiz Partner Alliance](https://www.wiz.io/partners)

---

## Career Transition Routes

### For Security Analysts → Cloud Security Engineer

1. **Prerequisites:** CompTIA Security+, AWS Certified Cloud Practitioner.
2. **Wiz Academy:** Complete free CNAPP fundamentals + threat detection modules.
3. **Certification:** Pass Wiz Certified Cloud Fundamentals ($150).
4. **Entry Role:** Cloud Security Technician or Junior Cloud Security Engineer at startup or mid-market.
5. **Salary Range:** $95K–$130K (with junior SOC analyst baseline ~$50K–$70K, this represents a ~40% jump).

### For DevOps / Platform Engineers → Shift-Left Security Engineer

1. **Prerequisites:** Strong Kubernetes / Docker knowledge; familiarity with CI/CD (GitHub Actions, GitLab CI, Jenkins).
2. **Wiz Academy:** Focus on Wiz Code, shift-left security, IaC scanning, Kubernetes hardening.
3. **Certification:** Optional—practical projects with Wiz often valued more highly.
4. **Entry Role:** DevSecOps Engineer or Platform Security Engineer.
5. **Salary Range:** $130K–$175K (platform engineers baseline ~$110K–$140K).

### For Cloud Architects → Cloud Security Architect

1. **Prerequisites:** AWS Solutions Architect Professional, Azure AZ-305, or GCP Professional Cloud Architect.
2. **Wiz Academy:** Complete enterprise-level courses on CNAPP strategy, multi-cloud posture, threat modeling.
3. **Certification:** Wiz Certified Cloud Fundamentals + hands-on POC experience.
4. **Entry Role:** Solutions Architect or Cloud Security Architect (customer-facing or internal).
5. **Salary Range:** $170K–$230K+ (architect baseline ~$140K–$180K).

### For Sales / Account Management → Solutions Engineer

1. **Prerequisites:** 3+ years enterprise software sales; strong technical foundation (certs or cloud background useful but not required).
2. **Training:** Wiz SE bootcamp (typically 4–6 weeks); deep CNAPP product knowledge.
3. **Certification:** Not required; Wiz Academy provides sales enablement.
4. **Entry Role:** Sales Engineer or Solutions Consultant.
5. **Compensation:** $170K–$260K OTE (base + commission structure common; variable portion 40–50% of total).

---

## Knowledge Base & Self-Service Resources

### Academy Learning Paths

1. **Cloud Security Fundamentals** (free): CNAPP vs. CSPM, cloud risk taxonomy, compliance frameworks.
2. **Kubernetes & Container Security** (free): Admission control, pod security policies, runtime protection.
3. **Shift-Left DevSecOps** (free): IaC scanning, container image scanning, CI/CD pipeline integration.
4. **Data Security Posture Management** (free): Data discovery, classification, exfiltration risk.
5. **Cloud Identity & Entitlements** (free): Least-privilege design, effective permission analysis, secret management.
6. **Threat Detection & Response** (free): TDR vs. EDR, cloud-native threat hunting, incident response workflows.
7. **AI Security** (free): AI-BOM, AI configuration management, securing generative AI pipelines.

All available at https://www.wiz.io/academy.

*Source:* [Wiz Academy](https://www.wiz.io/academy)

### Official Documentation

- **Platform documentation:** https://docs.wiz.io/ (technical integration guides, API reference).
- **API:** RESTful API with Swagger/OpenAPI specs for custom integrations.

### Buyer's Guides & Whitepapers

Free resources include:
- **CNAPP Buyer's Guide:** How to evaluate CNAPP vendors.
- **Cloud Security Salary Guide 2024:** Industry benchmarks for cloud security roles.
- **Comparisons:** Wiz vs. Prisma Cloud, vs. CrowdStrike, vs. Lacework (published on Wiz Academy).

*Source:* [Wiz Academy: Top CNAPP Solutions](https://www.wiz.io/academy/cloud-security/best-cnapp-solutions)

---

## Emerging Trends (2026 Outlook)

### 1. Agentic AI in Security Operations

Post-acquisition, Wiz is positioning itself as the **agentic defense platform** for Google Cloud. Expect:
- Increased integration with Google's Gemini agents for auto-remediation.
- Shift in hiring toward ML/AI engineers who can train cloud security models.
- New role archetype: "Security Operations Agent Designer."

### 2. AI-Native Development

- **Wiz Code + IDE integrations** expanding to GitHub Copilot, JetBrains IDEs, VS Code.
- Increased focus on scanning LLM-generated code for cloud security misconfigurations.
- New certification path for "AI-SecOps Engineers."

### 3. DSPM & Privacy Convergence

- GDPR, CCPA, and emerging privacy regulations driving DSPM adoption.
- Wiz's DSPM module becoming table-stakes; career demand for "Data Security Architects" increasing.

### 4. Multicloud Normalization

- Wiz's multi-cloud story (AWS, Azure, GCP, OCI, Alibaba) differentiating vs. single-cloud vendors.
- Larger enterprises adopting true multi-cloud; Wiz positioned to capture share.

---

## Key Takeaways

| Dimension | Finding |
|---|---|
| **Company** | Israeli-American CNAPP leader; acquired by Google for $32B (March 2026). |
| **Products** | CNAPP (CSPM, KSPM, CIEM, DSPM, threat detection, IaC scanning, AI-SPM). |
| **Certifications** | Wiz Certified Cloud Fundamentals ($150, 2.5-hour exam); Wiz Defend Certification (threat detection track). |
| **Career Entry** | $95K–$130K for junior roles; $170K–$260K for architects/SEs. |
| **Learning** | Free Wiz Academy; paid certification and instructor-led courses available. |
| **Community** | Wizdom Slack + web portal; annual Wizdom conference. |
| **Competitive Position** | #1 CNAPP (17.4% mindshare); ahead of CrowdStrike, Palo Alto, Lacework in multi-cloud parity. |
| **2026 Integration** | Deep Google Cloud Security tie-in; agentic AI + threat intelligence automation; multi-cloud agent studio support. |
| **Regional** | Global presence; South Africa via EMEA partner channel; pricing typically in USD. |

---

## Certifications — Quick Reference Table

| Code/Name | Status | Vendor URL | Renewal | Cost |
|---|---|---|---|---|
| Wiz Certified Cloud Fundamentals | Active | [https://www.wiz.io/wiz-certified](https://www.wiz.io/wiz-certified) | 2 years | $150 USD |
| Wiz Certified Defend Fundamentals | Active | [https://www.wiz.io/blog/wiz-defend-certification](https://www.wiz.io/blog/wiz-defend-certification) | 2 years | $150 USD |

---

## Free Training Resources

- **Wiz Academy**: [https://www.wiz.io/academy](https://www.wiz.io/academy) — self-paced learning platform covering CNAPP fundamentals, Kubernetes security, shift-left DevSecOps, DSPM, CIEM, threat detection, and AI security.
- **Wiz YouTube Channel**: [https://www.youtube.com/@wiz](https://www.youtube.com/@wiz) — includes "What is CNAPP?" CloudSec Shorts, "Future-Proofing Cloud Security With CNAPP," "Breaking Up Silos With CNAPP And the Future Of Cloud Security," and introductory CNAPP/product overview videos.
- **Wiz Community (Slack + Web)**: [https://www.wiz.io/community](https://www.wiz.io/community) — peer support, configuration troubleshooting, onboarding guidance.
- **Free Buyer's Guide**: CNAPP Buyer's Guide (downloadable eBook from Wiz content library).
- **Official Documentation**: [https://docs.wiz.io/](https://docs.wiz.io/) — technical integration guides, API reference, RESTful API with Swagger/OpenAPI specs.

---

## Paid Course Platforms

No formal dedicated Udemy, Coursera, or Pluralsight courses specifically on Wiz as of April 2026. However, generic CNAPP/CSPM/cloud security courses cover Wiz concepts and competitors:

- **Udemy**: "CCSK v5 + Advanced Cloud Security Practitioner Mastery 2026" ([https://www.udemy.com/course/ccsk-certificate-of-cloud-security-knowledge-training/](https://www.udemy.com/course/ccsk-certificate-of-cloud-security-knowledge-training/)), "Cloud Security Bootcamp: Build Your Secure Cloud Foundation" ([https://www.udemy.com/course/cloud-security-101/](https://www.udemy.com/course/cloud-security-101/)), "Cloud Security Complete Course" ([https://www.udemy.com/course/cloud-security-complete-course/](https://www.udemy.com/course/cloud-security-complete-course/)), "Microsoft Defender for Cloud" (covers CNAPP concepts, [https://www.udemy.com/course/microsoft-defender-for-cloud-from-zero-to-hero/](https://www.udemy.com/course/microsoft-defender-for-cloud-from-zero-to-hero/)).
- **Pluralsight**: Learning path "Wiz" available; search "Deploy Wiz" for specific tracks on multi-cloud CNAPP deployment.
- **Coursera**: No dedicated Wiz courses; closest are "Cloud Security Specializations" from cloud vendors (AWS, Azure, GCP).
- **MaxMenus / IGMGuru**: Third-party Wiz-aligned training partners (practice exams and instructor-led).

**Recommendation**: Use Wiz Academy (free) for foundational CNAPP concepts, then pursue vendor-neutral cloud security certs (CCSK, CCSP) on Udemy/Coursera, supplemented by Wiz hands-on labs (customer/partner-only access).

---

## Books

| Title | Author | Publisher | Year | URL |
|---|---|---|---|---|
| Ultimate CNAPP for Next-Gen Multi Cloud Security | Ravi Kumar Malhotra | Orange Education Pvt Ltd | 2025 | [https://www.everand.com/book/939840907/Ultimate-CNAPP-for-Next-Gen-Multi-Cloud-Security](https://www.everand.com/book/939840907/Ultimate-CNAPP-for-Next-Gen-Multi-Cloud-Security) |

**Note:** No Wiz-specific textbooks as of April 2026. The Malhotra (2025) book is the closest CNAPP-focused title covering CSPM, CWPP, KSPM, CIEM, DSPM for AWS/Azure/GCP with real-world labs. For cloud security foundations, refer to CCSK/CCSP study guides and general cloud security books (AWS Security Best Practices, Azure Security Handbook, etc.) available on O'Reilly, Packt, and Apress.

---

## Typical Job Titles (with Wiz / CNAPP)

- Cloud Security Engineer (Wiz specialist)
- Cloud Security Architect (enterprise strategy)
- DevSecOps Engineer (Wiz Code / shift-left integration)
- Security Automation Engineer (Wiz remediation automation)
- Cloud Compliance Analyst (CSPM/CIEM-driven compliance)
- Solutions Engineer / Sales Engineer (pre-sales, POC design)
- Cloud Infrastructure Entitlement Manager (CIEM specialist)
- Cloud Workload Protection Engineer (CWPP/runtime)
- Cloud Application Security Engineer (API/container security)
- AI Security Architect (Wiz AI-SPM integration)

---

## Common Skills (Hard + Soft)

**Hard Skills:**
- AWS/Azure/GCP IAM and role-based access control (RBAC)
- Kubernetes RBAC and pod security policies
- Container security (Docker, Kubernetes, serverless)
- IaC scanning (Terraform, CloudFormation, Helm, Dockerfile)
- CSPM/CIEM/CWPP/CDR/TDR concepts and workflows
- Software Composition Analysis (SCA) and SBOM (Software Bill of Materials)
- Runtime security and eBPF instrumentation
- Wiz Security Graph query language and context-aware risk prioritization
- KQL/SQL for threat hunting in cloud audit logs
- CI/CD pipeline integration (GitHub Actions, GitLab CI, Jenkins)

**Soft Skills:**
- Cross-team coordination (Cloud, DevOps, Security, App teams)
- Risk communication to non-technical stakeholders
- Incident response and post-incident analysis
- Vendor management and technical sales enablement
- Mentoring junior engineers

---

## Salary Data

### USD (United States)

Per Glassdoor (March 2026) and Levels.fyi:

- **Cloud Security Engineer (Junior)**: $130K–$170K base; 25th percentile $133K, 90th percentile $262K.
- **Cloud Security Engineer (Mid)**: $167K avg (per Glassdoor 421 reports); range $133K–$213K.
- **Senior Cloud Security Engineer**: $181K avg base.
- **Cloud Security Architect**: $157K–$290K (Glassdoor 25th–90th percentile); median ~$193K.
- **Solutions Engineer / Sales Engineer**: $170K–$260K OTE (base $100K–$150K + commission $70K–$110K).
- **Sources**: [Glassdoor: Cloud Security Engineer](https://www.glassdoor.com/Salaries/cloud-security-engineer-salary-SRCH_KO0,23.htm), [Glassdoor: Senior Cloud Security Engineer](https://www.glassdoor.com/Salaries/senior-cloud-security-engineer-salary-SRCH_KO0,30.htm), [Levels.fyi: Security Engineer / Cloudsec](https://www.levels.fyi/t/software-engineer/title/cloudsec-engineer), [ZipRecruiter: Cloud Security Engineer](https://www.ziprecruiter.com/Salaries/Cloud-Security-Engineer-Salary)

### ZAR (South Africa)

Per PayScale, Glassdoor ZA, and salary aggregators (as of April 2026):

- **Cloud Security Engineer**: ZAR 704,000 avg; range ZAR 495,000–ZAR 1,200,000 (25th–90th percentile).
- **Cyber Security Engineer**: ZAR 799,334 avg; range ZAR 553,139–ZAR 974,388.
- **Security Engineer**: ZAR 605,000 avg; range ZAR 494,000–ZAR 1,082,000.
- **Source**: [PayScale: Cyber Security Engineer South Africa](https://www.payscale.com/research/ZA/Job=Cyber_Security_Engineer/Salary), [Glassdoor: Cloud Security Engineer South Africa](https://www.glassdoor.com/Salaries/south-africa-cloud-security-engineer-salary-SRCH_IL.0,12_IN211_KO13,36.htm)

**Note:** Pnet and CareerJunction do not publish public salary benchmarks; above figures from aggregator sites only.

### GBP (United Kingdom)

Per IT Jobs Watch (November 2025 – February 2026):

- **Cloud Security Engineer (National UK)**: £95,000 median (per job vacancies over 6 months to Nov 8, 2025).
- **Cloud Security Engineer (London)**: £80,000 median (per job vacancies over 6 months to Feb 20, 2026).
- **Source**: [IT Jobs Watch: Cloud Security Engineer (UK)](https://www.itjobswatch.co.uk/jobs/uk/cloud%20security%20engineer.do), [IT Jobs Watch: Cloud Security Engineer (London)](https://www.itjobswatch.co.uk/jobs/london/cloud%20security%20engineer.do)

---

## Sources
- [TechCrunch: Google wraps up $32B acquisition of cloud cybersecurity startup Wiz](https://techcrunch.com/2026/03/11/google-completes-32b-acquisition-of-wiz/)
- [TechCrunch: Google gets the US government's green light to acquire Wiz for $32B](https://techcrunch.com/2025/11/05/google-gets-the-us-governments-green-light-to-acquire-wiz-for-32b/)
- [Google Cloud Blog: Google announces agreement to acquire Wiz](https://cloud.google.com/blog/products/identity-security/google-announces-agreement-acquire-wiz)
- [Cleary Gottlieb: Google Completes $32 Billion Acquisition of Wiz](https://www.clearygottlieb.com/news-and-insights/news-listing/google-completes-32-billion-acquisition-of-wiz)
- [SEC Filing: Alphabet Inc., March 18, 2025](https://www.sec.gov/Archives/edgar/data/1652044/000165204425000027/googexhibit99131825.htm)
- [Wiz Certified: Validate your Wiz expertise](https://www.wiz.io/wiz-certified)
- [Wiz Academy: What is CNAPP?](https://www.wiz.io/academy/cloud-security/what-is-a-cloud-native-application-protection-platform-cnapp)
- [Wiz Academy: CNAPP vs CSPM](https://www.wiz.io/academy/cloud-security/cnapp-vs-cspm)
- [Wiz Academy: CSPM vs DSPM: Why You Need Both](https://www.wiz.io/academy/cloud-security/cspm-vs-dspm)
- [Wiz Blog: Wiz magic shifts left](https://www.wiz.io/blog/wiz-magic-shifts-left)
- [Wiz Academy: Shift Left Security](https://www.wiz.io/academy/application-security/shift-left-security)
- [Wiz Academy: DevSecOps for Kubernetes](https://www.wiz.io/academy/devsecops-for-kubernetes)
- [Wiz Blog: Introducing Wiz Defend](https://www.wiz.io/blog/introducing-wiz-defend)
- [Wiz: Wiz Defend Platform](https://www.wiz.io/platform/wiz-defend)
- [Fortune: Cybersecurity startup Wiz acquires Gem Security](https://fortune.com/2024/04/10/exclusive-wiz-acquires-gem-security/)
- [Wiz Blog: Wiz acquires Gem Security to reinvent threat detection](https://www.wiz.io/blog/wiz-acquires-gem-security-to-reinvent-threat-detection-in-the-cloud)
- [SiliconANGLE: Wiz Acquires Cloud Cybersecurity Startup Gem Security](https://siliconangle.com/2024/04/10/wiz-acquires-cloud-cybersecurity-startup-gem-security-reported-350m/)
- [Wiz Academy: What is AI Security Posture Management (AI-SPM)?](https://www.wiz.io/academy/what-is-ai-security-posture-management-ai-spm)
- [Wiz Blog: Wiz becomes the first CNAPP to provide AI Security Posture Management](https://www.wiz.io/blog/ai-security-posture-management)
- [Wiz Solutions: AI-SPM](https://www.wiz.io/solutions/ai-spm)
- [Wiz Academy](https://www.wiz.io/academy)
- [Wiz Training & Certification](https://www.wiz.io/courses)
- [Wiz Community](https://www.wiz.io/community)
- [Wizdom: Our first-ever user conference](https://www.wiz.io/wizdom)
- [Wiz Blog: Introducing new Slack AI App for Wiz](https://www.wiz.io/blog/slack-ai-app-for-wiz-integration)
- [Cycode: Top 12 Wiz Competitors in 2025](https://cycode.com/blog/top-wiz-competitors/)
- [Wiz Academy: Palo Alto Networks Competitors & Alternatives](https://www.wiz.io/academy/cloud-security/palo-alto-networks-competitors)
- [Wiz Academy: CrowdStrike Alternatives & Competitors](https://www.wiz.io/academy/cloud-security/crowdstrike-alternatives)
- [Google Cloud Blog: Next '26: Redefining security for the AI era with Google Cloud and Wiz](https://cloud.google.com/blog/products/identity-security/next26-redefining-security-for-the-ai-era-with-google-cloud-and-wiz)
- [SiliconANGLE: Google Cloud unveils agentic AI security strategy with Wiz integration](https://siliconangle.com/2026/03/23/google-cloud-unveils-agentic-ai-security-strategy-wiz-integration-threat-intelligence-upgrades/)
- [Glassdoor: Wiz Cloud Security Architect](https://www.glassdoor.com/Salary/Wiz-Cloud-Security-Architect-Salaries-E5304442_D_KO4,28.htm)
- [Salary.com: Solutions Engineer at Wiz Inc](https://www.salary.com/research/company/wiz-inc/solutions-engineer-salary?cjid=19979168)
- [Levels.fyi: Wiz Salaries](https://www.levels.fyi/companies/wiz/salaries)
- [Wiz Pricing](https://www.wiz.io/pricing)
- [Wiz Partner Alliance](https://www.wiz.io/partners)

---

**End of Document**
