---
cert_name: "Certified Kubernetes Administrator"
cert_code: "CKA"
vendor: "CNCF / Linux Foundation"
status: "Active"
level: "Associate"
domain: "DevOps / Kubernetes / Container Orchestration"
ecosystem: "CNCF Ecosystem"
last_verified: "2026-05-01"
aliases: ["CKA", "Certified Kubernetes Administrator", "Kubernetes Administrator"]
---

# Certified Kubernetes Administrator

**`CKA`** · ● **Active** · **Associate** · _CNCF / Linux Foundation_

> **Use this certification to validate hands-on Kubernetes cluster administration and management skills.** CKA is the industry-standard entry-level administrator credential for container orchestration, requiring practical proficiency in deploying, configuring, troubleshooting, and maintaining production Kubernetes clusters. Performance-based 100% — no multiple choice.

---

## Exam facts

| Field | Value |
|---|---|
| Cost | USD $445 (includes one free retake) |
| Duration | 120 minutes (2 hours) |
| Questions | 15–20 performance-based tasks |
| Passing | 66% or higher |
| Format | Performance-based (100% hands-on CLI / kubectl) |
| Delivery | PSI Bridge online proctored |
| Languages | English |
| Valid | 3 years |
| Renewal | Pass CKA again; or earn CKS/CKAD within validity period |
| Prerequisites | None formal; 6–12 months hands-on Kubernetes experience recommended |
| Released | May 2016 (CNCF certification program launch); current v1.30 as of May 2026 |
| Retiring | N/A — active, continuously updated |

**Vendor source —** [CNCF Certified Kubernetes Administrator ↗](https://www.cncf.io/training/certification/cka/)

**Official exam guide —** [Linux Foundation CKA Training & Certification ↗](https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/)

**Exam objectives —** [CKA Exam Curriculum ↗](https://github.com/cncf/curriculum)

---

## About

The Certified Kubernetes Administrator (CKA) validates your ability to design, install, configure, and troubleshoot production-grade Kubernetes clusters. Launched by the CNCF in 2016 as the first vendor-neutral Kubernetes certification, CKA remains the gold standard for cluster administrators and is designed around real-world cluster-admin tasks. Unlike vendor-specific certifications (AWS EKS, Azure AKS), CKA tests pure Kubernetes administration independent of cloud platform, making it universally recognized across on-prem, public cloud, and edge deployments. The exam covers Kubernetes v1.29 and v1.30 as of May 2026, and includes new questions on Gateway API (successor to Ingress) reflecting modern Kubernetes evolution.

---

## Domain context — DevOps / Kubernetes / Container Orchestration

Container orchestration platforms automate deployment, scaling, networking, and lifecycle management of containerized workloads across clusters of machines. **Kubernetes** is the de facto standard orchestrator, used by 96% of container-using enterprises. **DevOps roles** (DevOps Engineers, Site Reliability Engineers, Platform Engineers) depend heavily on Kubernetes proficiency. CKA is the entry-level credential for cluster operations; CKS (Kubernetes Security Specialist) and CKAD (Application Developer) are advanced siblings.

[Read full deep dive — CNCF Ecosystem →](../../Ecosystems/ECO_CNCF.md)

---

## Topics covered

**Content Domains from Official CNCF Exam Curriculum (2026):**

- **Cluster Architecture, Installation & Configuration (25%)** — kubeadm cluster bootstrap, etcd management, TLS/certificate lifecycle, kubelet / kube-apiserver / kube-controller-manager / kube-scheduler configuration, HA cluster design, OS/network prerequisites.
- **Workloads & Scheduling (15%)** — Pods, Deployments, StatefulSets, DaemonSets, Jobs, CronJobs; resource requests/limits; affinity; taints and tolerations; pod priority and preemption.
- **Services & Networking (20%)** — Services (ClusterIP, NodePort, LoadBalancer), Ingress (and new Gateway API), DNS/CoreDNS, network policies, service mesh basics (Istio/Linkerd awareness).
- **Storage (10%)** — Persistent Volumes (PV), Persistent Volume Claims (PVC), StorageClasses, ConfigMaps, Secrets, StatefulSet persistent storage patterns.
- **Troubleshooting (30%)** — Cluster diagnostics (logs, kubectl describe/get, events), pod debugging, node health, network troubleshooting, common misconfigurations, recovery from failures.

*Source:* [CNCF CKA Curriculum ↗](https://github.com/cncf/curriculum)

---

## Common skills at DevOps · Associate

*Shared content for DevOps domain at Associate level — not specific to this cert.*

- Linux fundamentals (systemd, process management, basic networking, file permissions)
- Docker container basics (image builds, registry operations, volumes, networking)
- YAML / JSON configuration syntax and validation
- Git and basic CI/CD pipeline concepts
- Cloud infrastructure fundamentals (VPCs, networking, storage concepts)
- Monitoring and logging basics (metrics, log aggregation, alerting thresholds)
- Command-line proficiency (bash scripting, grep, sed, awk, jq)
- Incident response and troubleshooting methodology

---

## Recommended courses at DevOps · Associate

| Provider | Title | Cost | URL |
|---|---|---|---|
| Linux Foundation | Kubernetes Fundamentals (LFS258) + CKA Exam Bundle | $645 | [↗](https://training.linuxfoundation.org/certification/kubernetes-fundamentals-lfs258-cka-exam-bundle/) |
| KodeKloud | Certified Kubernetes Administrator (CKA) Course | $29–$99 | [↗](https://kodekloud.com/learning-path/cka) |
| Udemy (Mumshad Mannambeth) | Kubernetes CKA Course | $15–$80 (frequent sales) | [↗](https://www.udemy.com/course/certified-kubernetes-administrator/) |
| A Cloud Guru / Pluralsight | Kubernetes CKA Certification | $40–$60/month subscription | [↗](https://www.pluralsight.com/courses/kubernetes-admin-certified-associate) |
| Acloud Guru | Hands-on Kubernetes Cluster Administration | $40–$60/month subscription | [↗](https://learn.acloud.guru/) |
| CBT Nuggets | Kubernetes Fundamentals | $40–$60/month subscription | [↗](https://www.cbtnuggets.com/training/kubernetes) |

**Course-selection rule:** KodeKloud and Linux Foundation's LFS258 are the two industry-standard pathways. KodeKloud emphasizes hands-on labs with prebuilt clusters (faster to get started); LFS258 teaches you to build your own cluster from scratch (deeper understanding but steeper learning curve for Linux newcomers). Most successful CKA candidates use both.

---

## Practice exams

| Provider | Title | Cost | URL |
|---|---|---|---|
| Linux Foundation / Killer.sh | CKA Exam Simulator (included with exam registration) | Included in CKA exam fee | [↗](https://killer.sh/cka) |
| KodeKloud | CKA Practice Exams (unlimited mock tests with labs) | $29–$99 (course bundle) | [↗](https://kodekloud.com/learning-path/cka) |
| Killercoda | Kubernetes Challenges (interactive scenarios) | Free | [↗](https://killercoda.com/kubernetes) |
| Whizlabs | CKA Practice Exam (exam-like format) | $20–$40 | [↗](https://www.whizlabs.com/kubernetes-certification/) |

**Practice quality note:** Killer.sh (2 attempts, 36 hours access per attempt, included with exam) is widely considered the closest match to actual exam difficulty. KodeKloud labs provide unlimited practice with real cluster operations. Killercoda is free and excellent for scenario-based learning but easier than the actual exam.

---

## Books

| Title | Author | Publisher | Year | ISBN | URL |
|---|---|---|---|---|---|
| Kubernetes: Up and Running (3rd Edition) | Brendan Burns, Joe Beda, Kelsey Hightower, Lachlan Evenson | O'Reilly | 2024 | 978-1098110208 | [↗](https://www.oreilly.com/library/view/kubernetes-up-and/9781098110192/) |
| Kubernetes in Action (2nd Edition) | Marko Lukša, Kevin Conner | Manning | 2026 | 978-1617297618 | [↗](https://www.manning.com/books/kubernetes-in-action-second-edition) |

**Book rule:** "Kubernetes: Up and Running" is the foundational reference, recently updated (3rd ed. 2024) with new chapters on security, programmatic access, and multicluster patterns. "Kubernetes in Action" (2nd ed. 2026, just released) is hands-on and practical. CKA does not require deep book study (labs matter more), but both are valuable references for conceptual depth.

---

## Typical job titles at DevOps · Associate

Kubernetes Administrator · DevOps Engineer · Site Reliability Engineer (SRE) · Platform Engineer · Cloud Operations Engineer · Container Operations Specialist · Infrastructure Engineer (Kubernetes-focused)

*(Job titles drawn from current job-board postings that list CKA as required or preferred.)*

---

## Salary

| Region | Range | Source |
|---|---|---|
| USD | $136k–$177k | [Glassdoor (Kubernetes DevOps Engineer) ↗](https://www.glassdoor.com/Salaries/kubernetes-devops-engineer-salary-SRCH_KO0,26.htm) · [PayScale ↗](https://www.payscale.com/research/US/Skill=Kubernetes/Salary) · [Coursera DevOps Salary Guide ↗](https://www.coursera.org/articles/devops-engineer-salary) |
| ZAR | R1,071,146 (≈ USD $59k–$65k at 2026 rates) | [ERI SalaryExpert ↗](https://www.salaryexpert.com/salary/job/kubernetes-engineer/south-africa) · [Pnet ↗](https://www.pnet.co.za/jobs/kubernetes-engineer) · [PayScale ZA ↗](https://www.payscale.com/research/ZA/Skill=Kubernetes/Salary) |
| GBP | £65k–£90k | [IT Jobs Watch (DevOps Engineer) ↗](https://www.itjobswatch.co.uk/jobs/uk/devops%20engineer.do) · [Morgan McKinley London Salary Guide ↗](https://www.morganmckinley.com/uk/salary-guide/data/devops-engineer/london) · [Hays Tech Salary Survey ↗](https://www.haysplc.com/) |

**Salary context:** Kubernetes specialists (those with CKA + production experience) command 15–25% premium over generic DevOps roles. Entry-level (0–2 years, often with CKA) typically USD $106k–$120k; mid-level (3–5 years, CKA + CKS) $145k–$165k; senior (6+ years, architect-level) $170k+. Remote and startup roles often pay above these ranges.

---

## Skills validated

*Cert-specific — what this exam actually tests, distinct from shared DevOps skills.*

- **kubectl** command-line proficiency (all operations: get, apply, delete, logs, exec, port-forward, edit, patch)
- **Kubernetes API objects**: Pods, Deployments, StatefulSets, DaemonSets, Services, Ingress, PersistentVolumes, ConfigMaps, Secrets, RBAC (Roles, RoleBindings)
- **Cluster bootstrapping**: kubeadm initialization, control-plane component management, certificate generation and rotation
- **etcd** database operations (backup, restore, health checks)
- **Pod scheduling and affinity**: node selectors, taints/tolerations, resource requests/limits, pod disruption budgets
- **Networking**: service discovery via DNS, network policies, ingress routing (Ingress and Gateway API), kube-proxy modes
- **Storage orchestration**: PersistentVolumes, PersistentVolumeClaims, StorageClasses, volume mounting, snapshot operations
- **Cluster troubleshooting**: diagnosing pod failures, node status investigation, container logs, event inspection, common misconfiguration patterns
- **High-availability cluster design**: multi-master etcd, load balancing control plane, disaster recovery strategies
- **Linux**: systemd service management, file permissions, networking (iptables/nftables awareness), package management

---

## Related certifications

- **Entry point (prerequisite knowledge):** [Kubernetes and Cloud Native Basics (KCNA) ↗](../../Certifications/CNCF/CNCF_KCNA_Kubernetes_Cloud_Native_Associate.md) · [Docker fundamentals (no formal cert; Docker Certified Associate covers this) ↗](../../Certifications/Docker/Docker_Certified_Associate.md)
- **Prerequisite for:** [Certified Kubernetes Application Developer (CKAD) ↗](../../Certifications/CNCF/CNCF_CKAD_Certified_Application_Developer.md) · [Certified Kubernetes Security Specialist (CKS) ↗](../../Certifications/CNCF/CNCF_CKS_Certified_Kubernetes_Security_Specialist.md)
- **Stacks with:** AWS Certified DevOps Engineer Professional (DOP-C02) · Microsoft Azure Administrator (AZ-104) · Terraform Associate (HashiCorp)
- **Replaces:** N/A — CKA has been continuously updated since 2016; no predecessor
- **Equivalents at this level:** Kubernetes foundational knowledge required for cloud-native roles on AWS (EKS), Azure (AKS), GCP (GKE), but CKA remains vendor-agnostic and is preferred by enterprises
- **Vendor overview:** [CNCF Overview ↗](../../Vendors/CNCF_Vendor_Overview.md)

---

## Sources

- [CNCF Certified Kubernetes Administrator ↗](https://www.cncf.io/training/certification/cka/)
- [Linux Foundation CKA Training & Certification ↗](https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/)
- [CNCF CKA Curriculum ↗](https://github.com/cncf/curriculum)
- [Linux Foundation LFS258 Kubernetes Fundamentals ↗](https://training.linuxfoundation.org/training/kubernetes-fundamentals/)
- [Killer.sh CKA Exam Simulator ↗](https://killer.sh/cka)
- [KodeKloud CKA Learning Path ↗](https://kodekloud.com/learning-path/cka)
- [Kubernetes: Up and Running 3rd Edition (O'Reilly) ↗](https://www.oreilly.com/library/view/kubernetes-up-and/9781098110192/)
- [Kubernetes in Action 2nd Edition (Manning) ↗](https://www.manning.com/books/kubernetes-in-action-second-edition)
- [Glassdoor Kubernetes DevOps Engineer Salary ↗](https://www.glassdoor.com/Salaries/kubernetes-devops-engineer-salary-SRCH_KO0,26.htm)
- [IT Jobs Watch DevOps Engineer UK Salary ↗](https://www.itjobswatch.co.uk/jobs/uk/devops%20engineer.do)
- [ERI SalaryExpert Kubernetes Engineer South Africa ↗](https://www.salaryexpert.com/salary/job/kubernetes-engineer/south-africa)

---

*Last verified: 2026-05-01*
*Parent ecosystem: [CNCF Ecosystem](../../Ecosystems/ECO_CNCF.md)*
*Parent domain: [DevOps, SRE & Platform Engineering Domain](../../Domains/DOM05_DevOps_SRE_Domain.md)*
*Vendor overview: [CNCF & Linux Foundation Overview](../../Vendors/CNCF_Vendor_Overview.md)*
