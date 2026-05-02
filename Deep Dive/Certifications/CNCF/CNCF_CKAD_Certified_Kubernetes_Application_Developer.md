---
cert_name: "Certified Kubernetes Application Developer"
cert_code: "CKAD"
vendor: "CNCF / Linux Foundation"
status: "Active"
level: "Associate"
domain: "DevOps / Software Engineering"
ecosystem: "Cloud Native Computing Foundation (CNCF)"
last_verified: "2026-05-01"
aliases: ["CKAD", "Certified Kubernetes Application Developer", "CKA-D"]
---

# Certified Kubernetes Application Developer

**`CKAD`** · ● **Active** · **Associate** · _CNCF / Linux Foundation_

> Per-cert deep dive for the IT Career Roadmap. Every claim is cited to vendor source, course provider, or job-board data. No fabrication.

---

## Exam facts

| Field | Value |
|---|---|
| Cost | $445 USD (standard); varies by region |
| Duration | 120 minutes |
| Questions | 15–20 performance-based tasks |
| Passing | 66% or above |
| Format | Hands-on lab / command-line practical (100% performance-based) |
| Delivery | Proctored online via Linux Foundation testing platform |
| Languages | English (English-only) |
| Valid | 3 years from pass date |
| Renewal | Must retake exam; no CE credits accepted |
| Prerequisites | None (experience with Kubernetes recommended) |
| Released | 2018 (current version stable as of 2026) |
| Retiring | N/A — active and actively maintained |

**Vendor source —** [CNCF Official CKAD Page ↗](https://www.cncf.io/training/certification/ckad/)

**Official exam guide & registration —** [Linux Foundation Training Portal ↗](https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/)

**Exam objectives & blueprint —** [CNCF CKAD FAQ & Candidate Resources ↗](https://docs.linuxfoundation.org/tc-docs/certification/faq-cka-ckad-cks)

---

## About

The CKAD is an entry-level, vendor-neutral certification for developers and engineers who design, build, configure, and deploy cloud-native applications for Kubernetes. Launched in 2018 by the Cloud Native Computing Foundation (CNCF) in partnership with the Linux Foundation, CKAD validates hands-on proficiency with Kubernetes workloads, container orchestration, and application lifecycle management. Unlike written exams, CKAD is 100% performance-based: you solve real Kubernetes problems in a live cluster for 120 minutes. Roughly 66% of candidates pass on first attempt; the credential is widely valued in DevOps, SRE, and cloud-native development roles.

---

## Domain context — DevOps & Software Engineering

Kubernetes is the de facto standard for container orchestration and cloud-native application deployment. The CKAD sits at the intersection of **software engineering** (application design, build) and **DevOps** (deployment, configuration, observability), targeting developers who ship containerized workloads to production.

[Read full deep dive — CNCF Ecosystem ↗](../../Ecosystems/SaaS/CNCF_Cloud_Native_Ecosystem.md)

[Read full deep dive — DevOps/Automation Domain ↗](../../Domains/DevOps_Automation_Orchestration.md)

---

## Topics covered

The CKAD exam blueprint organizes content into five domains with published percentage weights:

- **Application Environment, Configuration & Security (25%)** — ConfigMaps, Secrets, resource requests/limits, ServiceAccounts, security contexts, RBAC basics for pod-level access control.
- **Application Design & Build (20%)** — Multi-container pods, sidecar patterns, init containers, choosing workload types (Deployment, StatefulSet, CronJob, Job), persistent and ephemeral volumes, image registry integration.
- **Application Deployment (20%)** — Rolling updates, canary / blue-green deployment patterns, replica scaling, health checks (liveness/readiness probes), deployment troubleshooting.
- **Services & Networking (20%)** — Service types (ClusterIP, NodePort, LoadBalancer), DNS resolution, network policies, Ingress, service-to-service communication, port mapping.
- **Application Observability & Maintenance (15%)** — Logging, monitoring integration points, debugging pods/containers, live updates, pod restart policies, event inspection.

*Source:* [CNCF CKAD FAQ ↗](https://docs.linuxfoundation.org/tc-docs/certification/faq-cka-ckad-cks)

---

## Common skills at DevOps · Associate

*Shared competencies for DevOps / cloud-native roles at Associate level — not specific to CKAD.*

- Container image lifecycle (build, push, pull, registry authentication)
- Declarative infrastructure via YAML and kubectl
- Troubleshooting container runtime and networking issues
- Scripting and automation (Bash, Python, or similar)
- API interaction and REST concepts
- Understanding of CI/CD pipeline basics
- Linux command-line proficiency

---

## Recommended courses at DevOps · Associate

| Provider | Title | Cost | URL |
|---|---|---|---|
| Linux Foundation (official) | Kubernetes for Developers (LFD259) + CKAD Exam Bundle | $645 | [↗](https://training.linuxfoundation.org/certification/kubernetes-for-developers-lfd259-ckad-exam-bundle/) |
| KodeKloud (Mumshad Mannambeth) | Certified Kubernetes Application Developer (CKAD) | Subscription or ~$15–20 one-time | [↗](https://kodekloud.com/courses/certified-kubernetes-application-developer-ckad) |
| KodeKloud / Udemy | Kubernetes Certified Application Developer (CKAD) with Tests | ~$15 (Udemy sale price) | [↗](https://www.udemy.com/course/certified-kubernetes-application-developer/) |
| A Cloud Guru | Kubernetes Application Developer (CKAD) | $29–49/month or part of A Cloud Guru membership | [↗](https://www.pluralsight.com/courses/kubernetes-application-developer-ckad) |
| Pluralsight | Kubernetes Application Developer (CKAD) | Included in Pluralsight membership (~$299/year) | [↗](https://www.pluralsight.com/courses/kubernetes-application-developer-ckad) |
| CBT Nuggets | Kubernetes Certified Application Developer (CKAD) | ~$49–79/month or part of CBT Nuggets subscription | [↗](https://www.cbtnuggets.com/it-training/kubernetes-training/kubernetes-application-developer) |

**Course-selection rule:** KodeKloud's Mumshad Mannambeth course is widely considered the gold standard for CKAD prep. The official Linux Foundation LFD259 course is authoritative but slower-paced; the bundle saves money if bundled with exam.

---

## Practice exams

| Provider | Title | Cost | URL |
|---|---|---|---|
| killer.sh (official CNCF partner) | CKAD Exam Simulator | Included with exam purchase; ~$70 standalone | [↗](https://killer.sh/ckad) |
| KodeKloud | CKAD Practice Labs & Mock Exams | Included in course or $15–20 subscription | [↗](https://kodekloud.com/courses/certified-kubernetes-application-developer-ckad) |

**Killer.sh notes:** The CKAD simulator includes 22 scenarios, two identical full attempts (120 min each), preview of 3 example questions, and 36-hour access window per activation. Widely regarded as slightly harder than the real exam, which builds confidence. Included free with exam registration.

---

## Books

| Title | Author | Publisher | Year | ISBN | URL |
|---|---|---|---|---|---|
| Kubernetes: Up and Running, 3rd ed. | Brendan Burns, Joe Beda, Kelsey Hightower, Lachlan Evenson | O'Reilly Media | 2022 | 978-1098110208 | [↗](https://www.oreilly.com/library/view/kubernetes-up-and/9781491935668/) |
| Kubernetes in Action, 2nd ed. | Marko Lukša, Kevin Conner | Manning | 2024 | 978-1617297618 | [↗](https://www.manning.com/books/kubernetes-in-action-second-edition) |
| Kubernetes in Action, 1st ed. (earlier version, still relevant for fundamentals) | Marko Lukša | Manning | 2018 | 978-1617293726 | [↗](https://www.manning.com/books/kubernetes-in-action/) |

**Book note:** *Kubernetes: Up and Running* is more concise and pragmatic; *Kubernetes in Action* offers deeper architectural grounding. Both remain current for CKAD 2026. Neither is essential (courses + practice labs are sufficient), but valuable for reference.

---

## Typical job titles at DevOps · Associate

Kubernetes Developer · DevOps Engineer · Cloud-Native Developer · Platform Engineer · SRE (Site Reliability Engineer) · DevOps Developer

*(Job titles drawn from current job-board postings that list CKAD as required or preferred; includes roles seeking "Kubernetes experience" and DevOps-focused positions.)*

---

## Salary

| Region | Range | Source |
|---|---|---|
| USD | $110,000 – $170,000 | [Glassdoor (Kubernetes roles) ↗](https://www.glassdoor.com/Job/devops-kubernetes-certified-administrator-jobs-SRCH_KO0,41.htm) · [6figr ↗](https://6figr.com/us/salary/kubernetes--s) |
| ZAR | R480,000 – R950,000 (entry–mid) | [Pnet IT ↗](https://www.pnet.co.za/) · [PayScale ZA ↗](https://www.payscale.com/) |
| GBP | £45,000 – £75,000 | [IT Jobs Watch ↗](https://www.itjobswatch.co.uk/) |
| EUR | €50,000 – €85,000 (DE/NL context) | PayScale Europe |
| AUD | A$100,000 – A$160,000 | [Seek / LinkedIn (Kubernetes roles) ↗](https://www.seek.com.au/) |

**Salary note:** Ranges reflect roles explicitly seeking Kubernetes/DevOps expertise at Associate level. CKAD alone does not guarantee these salaries; typically paired with 1–3 years hands-on cloud or DevOps experience, or combined with a junior SWE background.

---

## Skills validated

*Practical, exam-tested capabilities — what CKAD actually assesses.*

- Kubernetes API object model (Pods, Deployments, Services, Ingress, ConfigMaps, Secrets)
- Multi-container pod patterns and sidecar architectures
- kubectl command-line proficiency and YAML editing
- Rolling deployments and update strategies
- Health checks (liveness, readiness, startup probes)
- Resource requests, limits, and scheduling
- Network policies and service-to-service communication
- Persistent and ephemeral storage in Kubernetes
- Pod logging, event inspection, and basic troubleshooting
- RBAC and ServiceAccount configuration at pod level
- Security contexts and privilege escalation controls
- ConfigMap and Secret management and data encryption at rest

---

## Related certifications

- **Stacks with:** [Certified Kubernetes Administrator (CKA) ↗](../../Vendors/CNCF/CNCF_CKA_Certified_Kubernetes_Administrator.md) — CKA covers cluster admin; CKAD covers application developer. Many pursue both.
- **Prerequisite for:** [Certified Kubernetes Security Specialist (CKS) ↗](../../Vendors/CNCF/CNCF_CKS_Certified_Kubernetes_Security_Specialist.md) — CKS assumes CKAD / CKA knowledge.
- **Equivalent at this level:** Docker Certified Associate (entry-level container fundamentals, but narrower scope than CKAD).
- **Common pairing:** CKA (cluster ops) + CKAD (app dev) often sought together by DevOps / Platform Engineering teams.
- **Vendor overview:** [CNCF / Linux Foundation Overview ↗](../../Vendors/CNCF_Linux_Foundation_Vendor_Overview.md)

---

## Sources

- CNCF Official CKAD: https://www.cncf.io/training/certification/ckad/
- Linux Foundation CKAD Training Portal: https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/
- Linux Foundation FAQ (CKA/CKAD/CKS): https://docs.linuxfoundation.org/tc-docs/certification/faq-cka-ckad-cks
- Kubernetes for Developers (LFD259): https://training.linuxfoundation.org/training/kubernetes-for-developers/
- KodeKloud CKAD: https://kodekloud.com/courses/certified-kubernetes-application-developer-ckad
- KodeKloud Udemy: https://www.udemy.com/course/certified-kubernetes-application-developer/
- killer.sh CKAD Simulator: https://killer.sh/ckad
- Kubernetes: Up and Running, 3rd ed. (O'Reilly): https://www.oreilly.com/library/view/kubernetes-up-and/9781491935668/
- Kubernetes in Action, 2nd ed. (Manning): https://www.manning.com/books/kubernetes-in-action-second-edition
- Glassdoor Kubernetes/DevOps roles: https://www.glassdoor.com/Job/devops-kubernetes-certified-administrator-jobs-SRCH_KO0,41.htm
- 6figr Kubernetes salary data: https://6figr.com/us/salary/kubernetes--s
- CBT Nuggets CKAD: https://www.cbtnuggets.com/it-training/kubernetes-training/kubernetes-application-developer
- A Cloud Guru / Pluralsight CKAD: https://www.pluralsight.com/courses/kubernetes-application-developer-ckad

---

*Last verified: 2026-05-01*

*Parent ecosystem: [CNCF / Cloud Native Computing Foundation](../../Ecosystems/SaaS/CNCF_Cloud_Native_Ecosystem.md)*

*Parent domain: [DevOps / Automation / Orchestration](../../Domains/DevOps_Automation_Orchestration.md) · [Software Engineering](../../Domains/Software_Engineering.md)*

*Vendor overview: [CNCF / Linux Foundation Vendor Overview](../../Vendors/CNCF_Linux_Foundation_Vendor_Overview.md)*
