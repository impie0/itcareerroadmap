---
cert_name: "Kubernetes and Cloud Native Security Associate"
cert_code: "KCSA"
vendor: "CNCF / Linux Foundation"
status: "Active"
level: "Associate"
domain: "Security"
ecosystem: "CNCF Ecosystem"
last_verified: "2026-05-02"
aliases: ["KCSA", "Kubernetes and Cloud Native Security Associate", "Cloud Native Security Associate"]
---

# Kubernetes and Cloud Native Security Associate

**`KCSA`** · ● **Active** · **Associate** · _CNCF / Linux Foundation_

---

## Exam facts

| Field | Value |
|---|---|
| Cost | $250 USD (includes one free retake) |
| Duration | 90 minutes |
| Questions | 60 multiple choice / multiple select |
| Passing | 75% |
| Format | Online proctored, multiple choice / multiple select |
| Delivery | PSI Bridge (proctored) |
| Languages | English |
| Valid | 2 years |
| Renewal | Retake; or automatic via CARE Program if you earn CKS after Jan 1, 2026 |
| Prerequisites | None |
| Released | 2024 (KubeCon EU) |
| Retiring | N/A |

**Vendor source —** [CNCF Training & Certification ↗](https://www.cncf.io/training/certification/kcsa/)  
**Official exam guide —** [KCSA Certification (Linux Foundation) ↗](https://training.linuxfoundation.org/certification/kubernetes-and-cloud-native-security-associate-kcsa/)  
**Exam objectives —** [KCSA Exam Domains ↗](https://www.cncf.io/training/certification/kcsa/)

---

## About

The KCSA is a pre-professional (Associate-level) certification launched by CNCF in 2024 (KubeCon EU), designed for candidates seeking foundational knowledge and skills in cloud-native security technologies. It validates the ability to evaluate Kubernetes cluster security configurations, harden controls, test and monitor security, and assess vulnerabilities. Unlike hands-on professional certs (CKS, CKA), KCSA is a knowledge-based multiple-choice exam with no prerequisites — making it an ideal entry point for practitioners new to cloud-native security or transitioning from traditional infrastructure security. The exam sits between KCNA (foundational cloud-native concepts) and CKS (professional hands-on security specialist), forming a clear progression path for Kubestronaut seekers.

---

## Domain context — Security

Container and Kubernetes cluster security: cloud-native threat models, cluster component hardening, RBAC, network policies, image security, secrets management, compliance frameworks, and security best practices for cloud-native applications and infrastructure.

[Read full deep dive — CNCF Ecosystem ↗](../../Ecosystems/CNCF_Ecosystem.md)

---

## Topics covered

- **Overview of Cloud Native Security (14%)** — The 4Cs of Cloud Native Security (cloud, cluster, container, code); cloud provider security; infrastructure isolation; container and artifact security; workload and code security.
- **Kubernetes Cluster Component Security (22%)** — API server, controller manager, scheduler, kubelet, container runtime, kube-proxy, pod, etcd, container networking, client security, storage security.
- **Kubernetes Security Fundamentals (22%)** — RBAC (roles, role bindings, cluster roles), service accounts, pod security standards, network policies, secrets management, admission control.
- **Kubernetes Threat Model (16%)** — Attack vectors, threat assessment, persistence techniques, common attack surfaces specific to Kubernetes environments.
- **Platform Security (16%)** — Infrastructure and platform-level security controls, supply chain security (image signing, artifact verification, SBOM), runtime security (Falco, container escape detection), vulnerability management.
- **Compliance and Security Frameworks (10%)** — Industry standards (CIS Benchmarks for Kubernetes), compliance requirements (SOC 2, PCI-DSS, NIST), security governance, audit logging.

*Source:* [CNCF KCSA Exam Guide ↗](https://www.cncf.io/training/certification/kcsa/) · [Linux Foundation KCSA Certification ↗](https://training.linuxfoundation.org/certification/kubernetes-and-cloud-native-security-associate-kcsa/) · [CNCF Curriculum Repository ↗](https://github.com/cncf/curriculum/tree/master/kcsa)

---

## Common skills at Security · Associate

*Shared content for the Security domain at Associate level — not specific to this cert.*

- Design and implement basic role-based access control (RBAC) policies
- Secure containerized workloads across Kubernetes and container platforms
- Evaluate and select appropriate authentication mechanisms
- Implement network segmentation strategies (network policies)
- Apply basic compliance and security frameworks (CIS Benchmarks)
- Identify and assess common security vulnerabilities in containers and clusters
- Implement basic audit logging and monitoring

---

## Recommended courses at Security · Associate

| Provider | Title | Cost | URL |
|---|---|---|---|
| Linux Foundation | Kubernetes Security Essentials (LFS260) | $799 (includes exam voucher) | [↗](https://training.linuxfoundation.org/training/kubernetes-security-essentials-lfs260/) |
| KodeKloud | KCSA Certification Course (Mumshad Mannambeth) | $99 | [↗](https://kodekloud.com/courses/kubernetes-and-cloud-native-security-associate-kcsa) |
| A Cloud Guru | Kubernetes and Cloud Native Security Associate (KCSA) | $49/month | [↗](https://acloudguru.com/course/kubernetes-and-cloud-native-security-associate-kcsa) |
| Linux Foundation | KCNA + KCSA Bundle | $299 | [↗](https://training.linuxfoundation.org/certification/kubernetes-and-cloud-native-associate-kcna-kubernetes-and-cloud-native-security-associate-kcsa-exam-bundle/) |
| YouTube | KCSA Study Guides & Free Resources | Free | [Dave Watts Medium ↗](https://medium.com/@wattsdave/kubernetes-cloud-native-security-associate-kcsa-study-notes-and-exam-prep-f4c8f84d1c4f) |

**Course-selection rule:** LFS260 is the official Linux Foundation course for KCSA; KodeKloud offers structured, affordable prep. A Cloud Guru provides on-demand video training. The KCNA + KCSA bundle is cost-effective if you lack cloud-native fundamentals (KCNA covers general Kubernetes concepts). Free resources like community blogs are valuable supplements.

---

## Practice exams

| Provider | Title | Cost | URL |
|---|---|---|---|
| Linux Foundation | KCSA Practice Exam (1 session, 90 min) | Included with LFS260 or $99 standalone | [↗](https://training.linuxfoundation.org/certification/kubernetes-and-cloud-native-security-associate-kcsa/) |
| KodeKloud | Mock Exams (included in course) | Included | [↗](https://kodekloud.com/courses/kubernetes-and-cloud-native-security-associate-kcsa) |
| Whizlabs | KCSA Practice Tests | $49 | [↗](https://www.whizlabs.com/kcsa/) |

**Note:** Unlike hands-on professional certs (CKS), KCSA has no killer.sh simulator — it is a knowledge-based exam with proctored multiple-choice questions. Preparation is conceptual rather than lab-focused.

---

## Books

| Title | Author | Publisher | Year | ISBN | URL |
|---|---|---|---|---|---|
| Kubernetes Security and Observability | Brendan Creane, Amit Gupta | O'Reilly | 2023 | 978-1-098-12067-8 | [↗](https://www.oreilly.com/library/view/kubernetes-security-and/9781098120672/) |

**Book note:** "Kubernetes Security and Observability" covers cloud-native security, container hardening, network policies, RBAC, secrets management, compliance, and observability — all core KCSA domains. While not KCSA-specific, it is the authoritative reference for foundational and professional-level Kubernetes security knowledge. Most KCSA prep relies on official exam curriculum PDF + online courses rather than a dedicated textbook.

---

## Typical job titles at Security · Associate

Junior Kubernetes Security Engineer · Cloud Native Security Engineer · DevSecOps Engineer (entry) · Cloud Security Analyst · Container Security Engineer · Platform Security Engineer (junior) · Security Operations Engineer (Cloud-native)

*(Job titles drawn from current job-board postings and LinkedIn that list KCSA as preferred or entry-point certification.)*

---

## Salary

| Region | Range | Source |
|---|---|---|
| USD | $120,000–$175,000 | [Glassdoor: Kubernetes Engineer ↗](https://www.glassdoor.com/Salaries/kubernetes-engineer-salary-SRCH_KO0,19.htm) · [ERI SalaryExpert: Kubernetes Engineer ↗](https://www.salaryexpert.com/salary/job/kubernetes-engineer/united-states) · [PayScale: Kubernetes Skill ↗](https://www.payscale.com/research/US/Skill=Kubernetes/Salary) |
| ZAR | R480,000–R850,000 | [PayScale ZA: Kubernetes Skill ↗](https://www.payscale.com/research/ZA/Skill=Kubernetes/Salary) · [SalaryExpert ZA: Kubernetes Engineer ↗](https://www.salaryexpert.com/salary/job/kubernetes-engineer/south-africa) |
| GBP | £72,000–£105,000 | [IT Jobs Watch: Kubernetes roles ↗](https://www.itjobswatch.co.uk/) · [PayScale UK: Kubernetes Skill ↗](https://www.payscale.com/research/UK/Skill=Kubernetes/Salary) |
| EUR | €82,000–€118,000 (DE/FR/NL) | [NextLevelJobs EU: Cloud Security Architect ↗](https://nextleveljobs.eu/blog/cloud-security-architect-salaries-in-europe-insights/) · [PayScale EU: Cloud Security Engineer ↗](https://www.payscale.com/research/EU/Job=Cloud_Security_Engineer) |
| AUD | A$155,000–A$215,000 | [Cloud Salaries Comparison 2026 ↗](https://thinkcloudly.com/blog/cloud-salaries-comparison/) |

**Salary note:** Cloud-native security is a premium skillset; roles with KCSA certification or advanced Kubernetes knowledge command 20–30% premium over generic cloud engineer roles. Data reflects 2026 market rates for mid-level roles (3–5 yrs experience in cloud/Kubernetes). KCSA alone typically supports junior-to-mid IC roles; combination with CKS or hands-on experience commands higher compensation. Security specialization adds $10,000–$25,000 to baseline cloud engineer salary.

---

## Skills validated

*Cert-specific — what this exam actually tests.*

- Evaluate the 4Cs of Cloud Native Security (Cloud, Cluster, Container, Code) and apply them to architecture design
- Assess cloud provider security models and infrastructure isolation mechanisms
- Identify and evaluate Kubernetes cluster component vulnerabilities (API server, etcd, kubelet, container runtime)
- Design and interpret RBAC policies, role bindings, and service account configurations
- Evaluate and implement Kubernetes network policies for workload isolation
- Assess container image security: scanning tools (Trivy, Clair), image signing, registry security, private registries
- Understand secrets management, encryption at rest, and external secret stores
- Evaluate pod security standards and admission control mechanisms (ValidatingWebhooks, MutatingWebhooks, policy engines)
- Identify common Kubernetes threat models and attack vectors (lateral movement, privilege escalation, persistence)
- Apply compliance frameworks (CIS Benchmarks for Kubernetes, SOC 2, PCI-DSS, NIST) to security assessments
- Interpret Kubernetes audit logs and understand security monitoring strategies
- Understand supply-chain security: signed artifacts, Software Bill of Materials (SBOM), artifact verification
- Evaluate runtime security approaches (Falco, container escape detection, system call tracing)

---

## Related certifications

- **Foundation:** [KCNA (Kubernetes Cloud Native Associate) ↗](CNCF_KCNA_Kubernetes_Cloud_Native_Associate.md) — KCNA covers general Kubernetes concepts; KCSA assumes that knowledge and layers security depth.
- **Next step:** [CKA (Certified Kubernetes Administrator) ↗](CNCF_CKA_Certified_Kubernetes_Administrator.md) — CKA adds hands-on cluster administration; common progression path is KCNA → KCSA → CKA.
- **Specialization path:** [CKS (Certified Kubernetes Security Specialist) ↗](CNCF_CKS_Certified_Kubernetes_Security_Specialist.md) — CKS is the professional security cert requiring hands-on lab work and active CKA; KCSA is the natural foundation.
- **Equivalent at this level:** [CKAD (Certified Kubernetes Application Developer) ↗](CNCF_CKAD_Certified_Kubernetes_Application_Developer.md) — CKAD focuses on application layer; KCSA on infrastructure security. Both are pre-professional entry-level certs with no prerequisites.
- **CARE Program (2026):** If you earn CKS after Jan 1, 2026, your KCSA certification automatically renews to match CKS expiry.
- **Kubestronaut Track:** Hold all five CNCF Kubernetes certs (CKA, CKAD, CKS, KCNA, KCSA) to earn Kubestronaut status.
- **Vendor overview:** [CNCF Vendor Overview ↗](../../Vendors/CNCF_Vendor_Overview.md)

---

## Sources

- [CNCF Training & Certification: KCSA ↗](https://www.cncf.io/training/certification/kcsa/)
- [CNCF Blog: Benefits of KCSA Certification ↗](https://www.cncf.io/blog/2024/10/03/benefits-of-kubernetes-and-cloud-native-security-associate-kcsa-certification/)
- [Linux Foundation: KCSA Certification ↗](https://training.linuxfoundation.org/certification/kubernetes-and-cloud-native-security-associate-kcsa/)
- [Linux Foundation: Kubernetes Security Essentials (LFS260) ↗](https://training.linuxfoundation.org/training/kubernetes-security-essentials-lfs260/)
- [CNCF Curriculum: KCSA GitHub Repository ↗](https://github.com/cncf/curriculum/tree/master/kcsa)
- [KodeKloud: KCSA Course ↗](https://kodekloud.com/courses/kubernetes-and-cloud-native-security-associate-kcsa)
- [A Cloud Guru: KCSA Course ↗](https://acloudguru.com/course/kubernetes-and-cloud-native-security-associate-kcsa)
- [O'Reilly: Kubernetes Security and Observability ↗](https://www.oreilly.com/library/view/kubernetes-security-and/9781098120672/)
- [Medium: Dave Watts KCSA Study Notes ↗](https://medium.com/@wattsdave/kubernetes-cloud-native-security-associate-kcsa-study-notes-and-exam-prep-f4c8f84d1c4f)
- [Glassdoor: Kubernetes Engineer Salary ↗](https://www.glassdoor.com/Salaries/kubernetes-engineer-salary-SRCH_KO0,19.htm)
- [ERI SalaryExpert: Kubernetes Engineer USA ↗](https://www.salaryexpert.com/salary/job/kubernetes-engineer/united-states)
- [PayScale: Kubernetes Skill Salary ↗](https://www.payscale.com/research/US/Skill=Kubernetes/Salary)
- [IT Jobs Watch: Kubernetes Engineer Roles ↗](https://www.itjobswatch.co.uk/)
- [NextLevelJobs EU: Cloud Security Architect Salaries ↗](https://nextleveljobs.eu/blog/cloud-security-architect-salaries-in-europe-insights/)
- [Cloud Salaries Comparison 2026 ↗](https://thinkcloudly.com/blog/cloud-salaries-comparison/)

---

*Last verified: 2026-05-02*  
*Parent ecosystem: [CNCF Ecosystem](../../Ecosystems/CNCF_Ecosystem.md)*  
*Parent domain: [Security](../../Domains/Security.md)*  
*Vendor overview: [CNCF Vendor Overview](../../Vendors/CNCF_Vendor_Overview.md)*
