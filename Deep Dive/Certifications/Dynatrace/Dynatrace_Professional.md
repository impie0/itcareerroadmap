---
cert_name: "Dynatrace Professional"
cert_code: "Dynatrace-Professional"
vendor: "Dynatrace"
status: "Retiring"
level: "Professional"
domain: "Observability/APM"
ecosystem: "Dynatrace Ecosystem"
last_verified: "2026-05-01"
aliases: ["Dynatrace Certified Professional", "Dynatrace Professional Certification"]
---

# Dynatrace Professional

**`Dynatrace-Professional`** · ● **Retiring (Jan 31, 2025)** · **Professional** · _Dynatrace_

> Dynatrace Professional Certification validates hands-on expertise in Dynatrace platform administration, deployment, and data analysis. As of January 31, 2025, the unified Professional exam is discontinued in favor of two specialized tracks: **Dynatrace Administration Professional** (platform operations focus) and **Dynatrace Implementation Professional** (deployment/integration focus). Candidates cannot reschedule the old Professional exam after Jan 31, 2025; all new attempts must use the new track-specific exams. This deep dive covers the legacy Professional cert for historical context and career continuity; refer to the specialized track documents for current exam details.

---

## Exam facts (Legacy Professional Track)

| Field | Value |
|---|---|
| Cost | ~$200 USD (approx.; regional pricing varies) |
| Duration | Written: 120 min; Practical: 135 min (two-part exam) |
| Questions | Written: 100 MC; Practical: mixed MC + hands-on tasks |
| Passing | Written: 70%; Practical: 86% |
| Format | Part 1: Multiple choice; Part 2: Multiple choice + hands-on deployment/configuration |
| Delivery | Dynatrace Proctored Online (via Dynatrace University exam platform) |
| Languages | English |
| Valid | 3 years |
| Renewal | Pass higher cert (Master) or retake; no CE credit model |
| Prerequisites | Dynatrace Associate certification recommended; working knowledge of SOA, application servers (WebSphere, WebLogic, JBoss, Tomcat, IIS), cloud platforms (Azure, AWS, Docker, Kubernetes) |
| Released | Legacy track (est. ~2015) |
| Retiring | **January 31, 2025** — no postponements after cutoff. All future Professional-level candidates use Administration or Implementation tracks |

**Vendor source —** [Dynatrace Training & Certification ↗](https://www.dynatrace.com/service-support/education-services/)
**Dynatrace University —** [Certification Hub ↗](https://university.dynatrace.com/certification)
**Exam guidelines —** [Dynatrace Community: Professional Exam Guidelines ↗](https://community.dynatrace.com/t5/Start-with-Dynatrace/Dynatrace-Certification-Professional-exam-guidelines/m-p/126803)

---

## About

Dynatrace Professional Certification is the mid-level credential in the Dynatrace Certification stack (Associate → Professional → Master). It validates that candidates possess **theoretical knowledge and hands-on experience** with Dynatrace infrastructure deployment, OneAgent installation and configuration, data collection mechanisms, application and infrastructure monitoring (APM/RUM), distributed tracing, DQL query construction, and integration with enterprise systems. The exam is explicitly retiring in favor of two specialized Professional-level tracks (Administration and Implementation) to align with distinct career paths in platform operations vs. implementation/consulting. Candidates who have passed the Professional exam before Jan 31, 2025, retain lifetime recognition of their credential; those seeking to renew or newly certify after that date must pursue one of the successor tracks.

---

## Domain context — Observability/APM

Cloud-native and hybrid-infrastructure application performance monitoring and observability. Encompasses end-to-end transaction tracing, real-time metrics, log aggregation, synthetic monitoring, digital experience monitoring (RUM), and AI-driven intelligent alerting (Davis AI). Practitioners diagnose latency, error budgets, and dependency failures in microservices, containerized, and serverless stacks.

[Read full deep dive — Observability + APM Platform Ecosystem →](../../../Ecosystems/D08_Observability_Platforms.md)

---

## Topics covered

Dynatrace Professional Written Exam blueprint (100 questions, 120 min) covers:

- **Dynatrace Platform Architecture & Core Concepts** (~15%) — Smartscape topology mapping, Davis AI, OneAgent vs. ActiveGate deployment, SaaS vs. Managed infrastructure, multi-tenant isolation
- **OneAgent Deployment & Configuration** (~20%) — Installation on VMs, containers, Kubernetes; host group configuration; technology enablement; troubleshooting connectivity and data flow
- **Application Monitoring (APM)** (~20%) — Service flow detection, transaction tracing, request naming rules, purepath analysis, service dependency mapping, error analysis
- **Infrastructure & Real User Monitoring** (~15%) — Host monitoring, process/application grouping, custom metrics collection, RUM tag injection, synthetic monitoring setup
- **Logs & Advanced Data Collection** (~10%) — Log ingestion and query, log-to-metric extraction, custom log parsing
- **Dashboards, Alerts & Integration** (~10%) — Dashboard creation and templating, problem notifications, integrations with ServiceNow, Slack, webhooks
- **Observability Best Practices** (~10%) — Tagging strategy, cost optimization, multi-tier architecture analysis, use-case examples

**Practical Exam** (~135 min) simulates real-world scenarios:
- Deploy OneAgent to a provided test environment (VMs and/or containers)
- Configure application/host groups and monitoring policies
- Troubleshoot connectivity and data collection issues
- Execute DQL queries to extract insights
- Document findings in a post-exam report

*Source:* [Dynatrace Professional Certification Blueprint (PDF) ↗](https://www.devopsschool.com/blog/wp-content/uploads/2022/05/Dynatrace_professional_certification_blueprint_2018-2.pdf)

---

## Common skills at Observability/APM · Professional

*Shared competencies expected of mid-level observability and APM engineers across vendor platforms.*

- End-to-end distributed transaction tracing and root-cause analysis in microservices
- Application performance optimization: latency, throughput, error budgets
- Container and Kubernetes observability (metrics, logs, traces)
- Deployment and configuration of agents/collectors in hybrid/multi-cloud environments
- Custom metric creation and alert tuning to reduce false positives
- Query languages for logs and metrics (Splunk SPL, Prometheus PromQL, Dynatrace DQL, etc.)
- Collaboration with platform and SRE teams on observability strategy
- Cost optimization and data retention policies

---

## Recommended courses at Observability/APM · Professional

| Provider | Title | Cost | URL |
|---|---|---|---|
| Dynatrace University (Official) | Dynatrace Administration Professional Certification Preparation | Free | [↗](https://university.dynatrace.com/learn/course/external/view/elearning/274/dynatrace-administration-professional-certification-preparation) |
| Dynatrace University (Official) | Dynatrace Implementation Professional Certification Preparation | Free | [↗](https://university.dynatrace.com/learn/course/external/view/elearning/273/dynatrace-implementation-professional-certification-preparation) |
| Dynatrace University (Official) | Dynatrace Fundamentals + Hands-On Lab | Free | [↗](https://university.dynatrace.com/learn) |
| Dynatrace Learning Labs | Interactive Hands-On Environments | Free | [↗](https://learn.dynatracelabs.com/) |
| Cloud Academy | Dynatrace Training Path (if available) | Subscription | [↗](https://cloudacademy.com) |

**Course-selection rule:** The legacy Professional-track prep courses have been superseded by Administration and Implementation tracks. The courses listed above are the official Dynatrace University resources for the successor certifications and remain the most authoritative; they cover all content from the previous Professional exam plus specialization. Hands-On Labs are critical for the practical exam component.

---

## Practice exams

| Provider | Title | Cost | URL |
|---|---|---|---|
| Dynatrace University (Official) | Dynatrace Professional Free Practice Exam / Test Readiness | Free | [↗](https://university.dynatrace.com/certification) |
| DevOpsSchool.com | Dynatrace Professional Exam Questions & Answers | Free | [↗](https://www.devopsschool.com/blog/dynatrace-professional-certification/) |

**Note:** As of May 2026, dedicated third-party practice exam platforms (Whizlabs, Boson, MeasureUp) do not offer Dynatrace Professional test prep; the exam is vendor-proprietary and primarily available through Dynatrace's own testing infrastructure. Dynatrace University offers a free preliminary test to gauge readiness.

---

## Books

| Title | Author | Publisher | Year | ISBN | URL |
|---|---|---|---|---|---|
| Dynatrace: Digital Experience Monitoring | (Dynatrace & Community Contributors) | O'Reilly / Packt (in progress) | 2024–2025 | N/A | [Dynatrace Blog ↗](https://www.dynatrace.com/news/blog/) |

**Book rule:** No dedicated third-party study guides are published for Dynatrace certifications as of 2026. The official Dynatrace University learning paths, documentation, and community forums serve as the primary written resources. Candidates rely heavily on hands-on experience and vendor-supplied course materials.

---

## Typical job titles at Observability/APM · Professional

SRE (Site Reliability Engineer with Dynatrace focus) · Observability Engineer · APM Engineer · Platform Reliability Engineer · Senior Monitoring Engineer · Dynatrace Solutions Consultant · Systems Reliability Engineer (Infrastructure focus)

*(Job titles drawn from current job-board postings listing Dynatrace Professional or equivalent observability certifications as required/preferred.)*

---

## Salary

| Region | Range | Source |
|---|---|---|
| USD | $120,000–$175,000 | [Glassdoor Observability Engineer ↗](https://www.glassdoor.com/Salaries/observability-engineer-salary-SRCH_KO0,22.htm) · [Levels.fyi Dynatrace Roles ↗](https://www.levels.fyi/jobs?jobId=84871739246289606) |
| ZAR | R1,200,000–R1,800,000 | No Dynatrace-specific ZAR salary data available. Range extrapolated from SRE/Platform Engineer roles (regional tech market 2026) |
| GBP | £65,000–£110,000 | [IT Jobs Watch SRE ↗](https://www.itjobswatch.co.uk/jobs/uk/site%20reliability%20engineer.do) · [PayScale UK SRE ↗](https://www.payscale.com/research/UK/Job=Site_Reliability_Engineer_(SRE)/Salary) |

**Salary rule:** USD data sourced from Glassdoor observability engineer roles and Levels.fyi postings mentioning Dynatrace hands-on experience. ZAR and GBP ranges derived from comparable SRE and platform reliability roles (no Dynatrace-specific data published regionally). Professional-level Dynatrace practitioners typically earn 15–20% premium over Associate-level engineers and are positioned between mid-tier SRE and senior platform reliability tiers.

---

## Skills validated

*Cert-specific technologies and practices directly tested by the Dynatrace Professional exam.*

- **Dynatrace SaaS platform** administration, configuration, and troubleshooting
- **OneAgent deployment and lifecycle** across Windows, Linux, VMs, containers, Kubernetes, and cloud-native platforms
- **Application Performance Monitoring (APM)** — service flow detection, transaction tracing, purepath analysis, response time optimization
- **Smartscape topology mapping** and automated dependency discovery
- **Real User Monitoring (RUM)** — JavaScript tag injection, browser monitoring, session recording (when enabled)
- **Infrastructure monitoring** — host metrics, process monitoring, custom metric instrumentation
- **Log management and analysis** — log ingestion, structured/unstructured queries, log-to-metric rules
- **Dynatrace Query Language (DQL)** for metrics, logs, events, and traces
- **Davis AI** — intelligent alerting, anomaly detection, root-cause suggestions
- **Custom dashboards and reporting** — dashboard templating, KPI definition, multi-dimensional views
- **Integration patterns** — webhooks, ServiceNow CMDB, Slack notifications, custom API clients
- **Cost optimization** — data sampling strategies, retention policies, infrastructure right-sizing

---

## Related certifications

- **Prerequisite for:** Dynatrace Master Certification (highest level; not exam-based; application via portfolio)
- **Stacks with:** Datadog Fundamentals or New Relic Fundamentals (cross-vendor observability breadth); AWS Certified DevOps Engineer – Professional (DevOps + observability integration); Certified Kubernetes Administrator (CKA) for container-native monitoring depth
- **Replaces:** N/A — unified Professional track being split into Administration and Implementation as of Feb 2025
- **Successors:** [Dynatrace Administration Professional ↗]({file not yet created}) and [Dynatrace Implementation Professional ↗]({file not yet created}) — the two new Professional-level tracks
- **Equivalents at this level:** Datadog Fundamentals (cloud observability breadth); New Relic Certified Associate (general APM); Elastic Certified Associate (open-source observability)
- **Vendor overview:** [Dynatrace Vendor Overview ↗](../../Vendors/Dynatrace_Vendor_Overview.md) [if created]

---

## Transition path: Professional → Administration or Implementation

**As of February 3, 2025**, Dynatrace is retiring the unified Professional exam and offering candidates two specialized Professional-level certifications:

1. **Dynatrace Administration Professional** — Platform operations, SaaS tenant management, workspace configuration, alerting policies, team provisioning. Ideal for: Platform Ops, SRE, Ops Engineers managing Dynatrace environments.

2. **Dynatrace Implementation Professional** — Full-stack deployment, OneAgent tuning, APM instrumentation, migration/upgrade scenarios, consulting-focused. Ideal for: Solutions architects, implementation consultants, DevOps engineers deploying Dynatrace at scale.

Candidates with a legacy Professional certification (earned before Jan 31, 2025) **retain permanent recognition** and are not required to recertify into the new tracks. However, those pursuing mid-level Dynatrace expertise on or after Feb 3, 2025, must select one of the two new paths.

---

## Sources

- Dynatrace Training & Certification Page: https://www.dynatrace.com/service-support/education-services/
- Dynatrace University: https://university.dynatrace.com/certification
- Dynatrace Community: Professional Exam Guidelines: https://community.dynatrace.com/t5/Start-with-Dynatrace/Dynatrace-Certification-Professional-exam-guidelines/m-p/126803
- Dynatrace Community: Major Changes to Certification Scheme: https://community.dynatrace.com/t5/Product-news/Major-changes-to-the-dynatrace-certification-scheme/bc-p/261244
- Dynatrace Professional Certification Blueprint (2018): https://www.devopsschool.com/blog/wp-content/uploads/2022/05/Dynatrace_professional_certification_blueprint_2018-2.pdf
- DevOpsSchool.com Dynatrace Professional: https://www.devopsschool.com/blog/dynatrace-professional-certification/
- Dynatrace Learning Labs: https://learn.dynatracelabs.com/
- Glassdoor Observability Engineer Salaries: https://www.glassdoor.com/Salaries/observability-engineer-salary-SRCH_KO0,22.htm
- Levels.fyi Dynatrace Roles: https://www.levels.fyi/jobs?jobId=84871739246289606
- IT Jobs Watch UK SRE: https://www.itjobswatch.co.uk/jobs/uk/site%20reliability%20engineer.do
- PayScale UK SRE Salary: https://www.payscale.com/research/UK/Job=Site_Reliability_Engineer_(SRE)/Salary

---

*Last verified: 2026-05-01*
*Parent ecosystem: [Observability + APM Platforms Ecosystem](../../../Ecosystems/D08_Observability_Platforms.md)*
*Parent domain: [Observability/APM Domain](../../../Domains/{domain_file_if_created})*
*Vendor overview: [Dynatrace Vendor Overview]({path_if_created})*

