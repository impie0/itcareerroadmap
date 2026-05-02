---
cert_name: "HashiCorp Certified: Vault Operations Professional"
cert_code: "Vault Professional"
vendor: "HashiCorp"
status: "Active"
level: "Professional"
domain: "Security / Cloud Infrastructure / Secrets Management"
ecosystem: "HashiCorp Infrastructure Automation Ecosystem"
last_verified: "2026-05-01"
aliases: ["Vault Operations Professional", "Vault Pro", "Vault Professional", "HCVOP"]
---

# HashiCorp Certified: Vault Operations Professional

**`Vault Professional`** · ● **Active** · **Professional** · _HashiCorp (IBM)_

> Advanced certification validating expert-level production Vault deployment, high-availability architecture, disaster recovery, performance replication, secrets engines, authentication methods, and Vault Enterprise operational management. For Cloud Engineers with advanced, hands-on Vault operations expertise.

---

## Exam facts

| Field | Value |
|---|---|
| Cost | $295 USD (~ZAR 5,340 at May 2026 rates) |
| Duration | 4 hours (with one 15-minute bio break) |
| Format | Lab-based (4 hands-on scenarios + 20 multiple-choice questions) |
| Delivery | Online proctored (Pearson VUE) |
| Languages | English |
| Valid | 2 years |
| Renewal | Pass a higher-level Vault cert or retake this exam |
| Prerequisites | Recommended: HashiCorp Certified: Vault Associate (003); 2+ years production Vault ops experience |
| Skills Required | Linux CLI navigation; file system and permissions management; networking fundamentals; PGP/TLS/certificate management |
| Product Tested | Vault Enterprise (latest version) |
| Released | 2024 (beta); GA 2025 |
| Retiring | N/A (currently active) |
| Free Retake | Yes, once within 3 months if first attempt fails |

**Vendor source —** [Security Automation | HashiCorp Developer ↗](https://developer.hashicorp.com/certifications/security-automation)  
**Exam orientation —** [Vault Operations Professional Exam Overview ↗](https://developer.hashicorp.com/vault/tutorials/ops-pro-cert/ops-pro-overview)  
**Exam content list —** [Vault Operations Professional Review Checklist ↗](https://developer.hashicorp.com/vault/tutorials/ops-pro-cert/ops-pro-review)  
**Official study path —** [Vault Operations Professional Learning Path ↗](https://developer.hashicorp.com/vault/tutorials/ops-pro-cert/ops-pro-study)

---

## About

The HashiCorp Certified: Vault Operations Professional is an expert-level certification for cloud engineers with advanced, hands-on expertise deploying and managing HashiCorp Vault in production environments. Unlike the Associate-level exam, which focuses on foundational concepts, the Operations Professional exam is **lab-based and tests real-world problem-solving skills** in a live Linux environment.

The exam runs a Vault Enterprise binary and tests Vault Enterprise-specific features and advanced operational scenarios. Candidates must demonstrate their ability to:

- Deploy, configure, manage, and monitor Vault in production
- Design and implement high-availability (HA) clusters using Integrated Storage (Raft)
- Configure and troubleshoot disaster recovery (DR) and performance replication
- Enable and configure multiple authentication methods and secrets engines
- Implement advanced access control using ACL policies, namespaces, and control groups
- Manage Vault Agent, auto-auth, and secret templates
- Handle key rotation, encryption key management, and seal operations
- Evaluate and deploy Vault Enterprise functionality for compliance and governance

This certification sits directly above the Vault Associate (002/003) in HashiCorp's Vault credential pathway and validates the expertise required for production Vault infrastructure roles.

---

## Domain context — Security / Cloud Infrastructure / Secrets Management

Enterprise secret lifecycle management, encryption-as-a-service, key rotation, dynamic secrets, zero-trust authentication, high-availability infrastructure, and disaster recovery. Vault Operations Professional expertise is demanded by organizations implementing zero-trust security models, managing secrets across hybrid cloud environments, and maintaining compliance with regulatory frameworks (SOC 2, HIPAA, PCI-DSS, GDPR). This domain spans DevOps, cloud infrastructure, security architecture, and identity/access management.

**Read full deep dive —** [HashiCorp Ecosystem ↗](../../Vendors/HashiCorp_Vendor_Overview.md) | [Secrets Management ↗]({file_not_yet_created})

---

## Exam domains and objectives

The exam is organized into 8 weighted domains. Hands-on tasks map directly to real-world operational scenarios.

### Domain 1: Vault Server Configuration (Highest Weight)

Create a working Vault server configuration given a scenario. Candidates must:

- Configure Vault with Integrated Storage (Raft) backend (primary method tested)
- Join Vault nodes to an Integrated Storage cluster
- Configure SSL/TLS for Vault listeners
- Manage Raft snapshots for backup and disaster recovery
- Understand Raft autopilot features and cluster health monitoring
- Configure high-availability (HA) storage backend options
- Implement seal mechanisms (Shamir, auto-unseal, seal wrap)

**Resource:** [Integrated Storage | Vault Developer ↗](https://developer.hashicorp.com/vault/docs/configuration/storage/raft)

### Domain 2: High-Availability and Fault Tolerance

Build fault-tolerant Vault environments. Candidates must:

- Deploy HA clusters using Integrated Storage
- Configure performance replication for read scaling
- Configure disaster recovery (DR) replication for failover
- Understand replication topology (primary, secondary, performance vs. DR)
- Monitor cluster health and replication status
- Handle failover scenarios and cluster promotion
- Design multi-region replication strategies

**Key distinction:** Performance replication does NOT replicate tokens or leases to secondaries (secondary can read, but not write). Disaster recovery replication replicates EVERYTHING (tokens, leases, policies, secrets) to DR secondaries, creating a warm-standby cluster.

**Resource:** [Replication Support in Vault ↗](https://developer.hashicorp.com/vault/docs/enterprise/replication) | [Disaster Recovery Replication ↗](https://developer.hashicorp.com/vault/tutorials/enterprise/disaster-recovery)

### Domain 3: Access Control and Policy (Highest Weight)

Configure access control mechanisms. Candidates must:

- Write and test ACL policies from requirements
- Understand Vault policy syntax and path capabilities
- Configure root token and token lifecycle management
- Implement namespace isolation for multi-tenant environments
- Set up control groups for approval workflows
- Apply principle of least privilege across paths and methods
- Test policies using CLI and UI

**Resource:** [Vault Policies | Vault Developer ↗](https://developer.hashicorp.com/vault/docs/concepts/policies) | [Namespaces | Vault Enterprise ↗](https://developer.hashicorp.com/vault/docs/enterprise/namespaces)

### Domain 4: Authentication Methods

Enable and configure authentication methods. Candidates must:

- Enable, configure, and troubleshoot multiple auth methods (AppRole, JWT/OIDC, LDAP, userpass, AWS IAM, Azure AD, etc.)
- Understand use cases for human vs. machine authentication
- Configure role mappings and policy attachments for auth methods
- Implement Vault Agent auto-auth for client authentication
- Manage auth method lifecycles and token generation workflows
- Test auth method configurations

**Resource:** [Auth Methods | Vault Developer ↗](https://developer.hashicorp.com/vault/docs/auth) | [Vault Agent Auto-Auth ↗](https://developer.hashicorp.com/vault/docs/agent-and-proxy/agent/auto-auth)

### Domain 5: Secrets Engines

Enable and manage secrets engines. Candidates must:

- Enable, configure, and manage multiple secrets engines (KV v1/v2, database, PKI, SSH, AWS, transit, etc.)
- Understand static vs. dynamic secrets and use cases
- Configure dynamic secrets with database backends
- Manage PKI secrets engine for certificate management
- Use transit engine for data encryption in transit
- Rotate and manage secrets lifecycle

**Resource:** [Secrets Engines | Vault Developer ↗](https://developer.hashicorp.com/vault/docs/secrets)

### Domain 6: Vault Agent and Auto-Auth

Deploy and configure Vault Agent. Candidates must:

- Configure Vault Agent for client authentication (auto-auth)
- Set up token sink for automated secret retrieval
- Implement Vault Agent templates for secret injection
- Configure caching and response wrapping
- Test Vault Agent configurations in a client environment

**Resource:** [Vault Agent and Proxy | Vault Developer ↗](https://developer.hashicorp.com/vault/docs/agent-and-proxy/agent)

### Domain 7: Key Management and Encryption

Manage encryption keys and seal operations. Candidates must:

- Understand key rotation and encryption key lifecycle
- Perform rekey operations to rotate unseal keys
- Manage auto-unseal with HSM or cloud KMS integration
- Understand seal wrap for encryption-at-rest
- Monitor key usage and rotation schedules
- Handle emergency recovery scenarios

**Resource:** [Rekeying Vault | Vault Developer ↗](https://developer.hashicorp.com/vault/docs/configuration/seal) | [Auto Unseal ↗](https://developer.hashicorp.com/vault/docs/configuration/seal/awskms)

### Domain 8: Vault Enterprise Features and Monitoring

Evaluate and deploy Vault Enterprise functionality. Candidates must:

- Understand Vault Enterprise vs. open-source differences
- Configure audit logging and compliance monitoring
- Monitor Vault metrics and performance
- Understand HSM integration and FIPS compliance
- Implement governance controls
- Understand license management and reporting

**Resource:** [Audit Logging | Vault Developer ↗](https://developer.hashicorp.com/vault/docs/audit) | [Vault Enterprise ↗](https://developer.hashicorp.com/vault/docs/enterprise)

---

## Exam format and question types

**Lab-based scenarios:** Hands-on Linux environment with pre-provisioned Vault instances. Candidates complete realistic operational tasks and the system auto-grades task completion.

**Multiple-choice questions:** 20 MC/true-false scenario-based questions testing conceptual knowledge and decision-making.

**Available during exam:**
- Vault UI (browser-based)
- Visual Studio Code for configuration file editing
- Vault documentation and API reference (searchable)
- Linux terminal with standard utilities

**Scoring:** Passing score is typically 70%+. Exact weighting varies by domain.

---

## Common skills at Professional Level — Cloud Infrastructure / Secrets Management

*Shared competencies for Professional-level infrastructure and security engineers.*

- Production Vault architecture design and implementation
- High-availability cluster configuration and monitoring
- Disaster recovery and business continuity planning
- Replication topology design and failover procedures
- Advanced ACL policy modeling and namespace design
- Authentication and authorization system design
- Encryption key lifecycle and rotation strategy
- Seal and unsealing procedures (Shamir, auto-unseal, HSM)
- Performance optimization and capacity planning
- Security compliance and audit requirements
- Vault Agent and secret injection architecture
- Multi-region and hybrid-cloud Vault deployments
- Emergency recovery and data integrity procedures

---

## Career impact and salary

### Typical job roles

- Cloud Platform Engineer (Vault Infrastructure)
- DevOps Engineer (Secrets & Security Ops)
- Cloud Security Engineer
- Infrastructure Security Architect
- Site Reliability Engineer (SRE) — Vault specialization
- Security Operations Center (SOC) Engineer
- Compliance and Governance Engineer

### Salary benchmarks

**United States (USD)**
- Cloud Platform Engineer (general): $175,799–$261,053 annually (mid-to-senior level)
- Senior DevOps/SRE with Vault expertise: $160,000–$220,000+ base
- Security Engineer (DevOps/Infrastructure): $150,000–$210,000+ base

*Source:* [Cloud Engineer Salary 2026 ↗](https://www.glassdoor.com/Salaries/cloud-platform-engineer-salary-SRCH_KO0,23.htm) | [Levels.fyi HashiCorp Salaries ↗](https://www.levels.fyi/companies/hashicorp/salaries/software-engineer)

**South Africa (ZAR)**
- DevOps Engineer (entry-level, 1-3 years): ZAR 617,406 annually
- DevOps Engineer (senior, 8+ years): ZAR 1,094,127 annually
- DevOps Engineer (Johannesburg average): ZAR 700,000–ZAR 865,603 annually

*Source:* [DevOps Engineer Salary ZA ↗](https://www.glassdoor.com/Salaries/johannesburg-south-africa-devops-engineer-salary-SRCH_IL.0,25_IM1023_KO26,41.htm) | [ERI South Africa Salary Data ↗](https://www.erieri.com/salary/job/devops-engineer/south-africa)

**Salary impact of certification:** HashiCorp certifications add 5–15% to base salary for practitioners with relevant production experience. Vault Operations Professional (Professional level) typically commands higher premium than Associate certifications due to advanced operational expertise demanded.

---

## Study approach and preparation strategy

### Hands-on practice is mandatory

The exam is **100% hands-on lab-based**. Theoretical study alone will not prepare you. You must:

1. **Deploy and operate Vault clusters** in Linux environments
2. **Practice all exam domains** using live Vault instances
3. **Build real-world scenarios** (HA clusters, replication, disaster recovery)
4. **Test your own configurations** using CLI and UI
5. **Troubleshoot failures** in live environments

### Official HashiCorp learning path

| Step | Resource | Effort | URL |
|---|---|---|---|
| Foundation | Vault Fundamentals (if new to Vault) | 2–4 hours | [↗](https://developer.hashicorp.com/vault/tutorials/fundamentals) |
| Core | Vault Operations Professional Learning Path | 20–30 hours | [↗](https://developer.hashicorp.com/vault/tutorials/ops-pro-cert/ops-pro-study) |
| Domains | Exam Content List (objective-by-objective review) | 10–15 hours | [↗](https://developer.hashicorp.com/vault/tutorials/ops-pro-cert/ops-pro-review) |
| Practice | Hands-on labs and personal deployments | 30–50 hours | Self-directed |
| **Total estimate** | | **62–99 hours** | |

### Recommended prerequisites

- **Vault Associate (003) certification** (or equivalent hands-on knowledge)
- **2+ years production Vault operations experience**
- **Linux fundamentals:** Terminal navigation, file permissions, shell scripting basics
- **Networking basics:** TCP/IP, DNS, TLS/SSL certificates, firewall concepts
- **Cloud platform basics:** VPC/networking, cloud KMS services (AWS, Azure, GCP)
- **High-availability and disaster recovery concepts**

### Study materials and courses

| Provider | Course | Cost | URL |
|---|---|---|---|
| HashiCorp Learn (Official) | Vault Operations Professional Learning Path | Free | [↗](https://developer.hashicorp.com/vault/tutorials/ops-pro-cert) |
| KodeKloud | HashiCorp Certified Vault Operations Professional 2022+ | $20–$40 | [↗](https://kodekloud.com/courses/hashicorp-certified-vault-operations-professional-2022) |
| Udemy | HashiCorp Certified Vault Operations Professional | $12–$60 | [↗](https://www.udemy.com/course/hashicorp-certified-vault-operations-professional/) |
| Medium | Vault Operations Professional Exam Practice Guides (Glen Yu) | Free | [↗](https://medium.com/@glen.yu/hashicorp-vault-operations-professional-exam-practice-guide-part-1-5855fd76e9c5) |
| Coursera | Certified Vault Operations Professional (Packt) | $49–$99 | [↗](https://www.coursera.org/specializations/packt-certified-vault-operations-professional-a-complete-guide) |
| GitHub | Vault Pro Exam Notes | Free | [↗](https://gist.github.com/luckylittle/a00c382ba68967a395a43c8aec5d5a9c) |
| HashiCorp | Vault Documentation (reference) | Free | [↗](https://developer.hashicorp.com/vault/docs) |

---

## Comparison to related certifications

| Cert | Level | Duration | Focus | Cost |
|---|---|---|---|---|
| **Vault Associate (003)** | Associate | 1 hour | Core concepts, fundamentals | $70.50 |
| **Vault Operations Professional** | Professional | 4 hours (lab) | Deployment, HA, DR, replication | $295 |
| **Terraform Associate (003)** | Associate | 1 hour | IaC, Terraform basics | $70.50 |
| **HashiCorp Nomad Associate (002)** | Associate | 1 hour | Orchestration fundamentals | $70.50 |
| **AWS Certified Solutions Architect** | Professional | 3 hours | Cloud architecture (general) | $300 |
| **HashiCorp Consul Associate (003)** | Associate | 1 hour | Service mesh basics | $70.50 |

**Key differentiation:** Vault Operations Professional is the only HashiCorp exam that is fully lab-based (hands-on), making it the most challenging and practical of HashiCorp's certifications.

---

## Exam day tips and best practices

1. **Environment setup:** Test your internet connection, audio/video, and the proctoring tool 15+ minutes early.
2. **Read all scenario instructions carefully.** Misunderstanding a task can waste 20+ minutes.
3. **Use the Vault docs tab during the exam.** Having a reference window open is expected; use it liberally.
4. **Validate each task as you complete it.** Don't assume success; test and verify output.
5. **Save time on multiple-choice questions.** Flag uncertain MC questions and return to them after labs.
6. **Document your configuration.** Write down your approach before implementing; this helps catch logic errors.
7. **Manage time across scenarios.** If stuck on one scenario for 30+ minutes, move on and return later.
8. **Raft storage is heavily tested.** Be very comfortable with Raft configuration, snapshots, and autopilot.
9. **Replication is critical.** Understand the operational differences between performance and DR replication.
10. **Test namespace isolation.** Multi-tenant configurations and namespace boundaries appear in scenarios.

---

## Success rate and difficulty

- **Estimated pass rate:** 40–50% (higher for candidates with 2+ years Vault operations experience)
- **Typical failure reasons:**
  - Insufficient Linux CLI skills
  - Lack of hands-on Vault cluster experience
  - Misunderstanding replication topology differences
  - Poor time management (running out of time in 4-hour window)
  - Not reading scenario instructions completely

- **Typical success factors:**
  - 2+ years production Vault operations experience
  - Deep familiarity with Raft storage and cluster operations
  - Hands-on experience with HA/DR replication
  - Comfort with Linux terminal and Vault CLI
  - Prior Vault Associate certification

---

## Related certifications and learning paths

**HashiCorp credential ecosystem:**

| Track | Level 1 | Level 2 | Level 3 |
|---|---|---|---|
| **Vault** | Associate (002/003) | **Operations Professional** | Enterprise (expert, if released) |
| **Terraform** | Associate (003) | Cloud Engineer (lab-based) | Advanced (if released) |
| **Consul** | Associate (003) | (No professional level yet) | — |
| **Nomad** | Associate (002) | (No professional level yet) | — |

**Recommended next steps after passing:**
1. Pursue HashiCorp Cloud Engineer (Terraform) for infrastructure-as-code breadth
2. Specialize in cloud platforms (AWS Solutions Architect, Azure Solutions Engineer)
3. Deepen security expertise (CISSP, CISM, or cloud-specific security certs)
4. Pursue compliance certifications (CCSK for cloud, SOC 2, ISO 27001)

---

## Additional resources

- **Official Vault Guides Repository:** [hashicorp/vault-guides ↗](https://github.com/hashicorp/vault-guides)
- **HashiCorp Community Forum:** [discuss.hashicorp.com ↗](https://discuss.hashicorp.com/c/vault)
- **Vault Slack Community:** Free community access at community.hashicorp.com
- **HashiCorp Learn Platform:** Hands-on labs and tutorials at [developer.hashicorp.com/learn ↗](https://developer.hashicorp.com/learn)
- **Vault Enterprise Documentation:** [Vault Enterprise features ↗](https://developer.hashicorp.com/vault/docs/enterprise)
- **Disaster Recovery Deep Dive:** [Disaster Recovery Replication ↗](https://developer.hashicorp.com/vault/tutorials/enterprise/disaster-recovery)
- **Performance Replication:** [Performance Replication ↗](https://developer.hashicorp.com/vault/docs/enterprise/replication#performance-replication)

---

## Exam registration and scheduling

**Testing platform:** Pearson VUE (online proctored)  
**Scheduling window:** Register at [hashicorp.com/certifications ↗](https://www.hashicorp.com/en/certification)  
**Exam delivery:** Remote (home or office; proctoring via webcam and screen sharing)  
**ID requirements:** Valid government-issued photo ID (passport, driver's license, national ID)  
**Rescheduling:** 24 hours notice required; cancellation 24 hours for full refund  
**Accessibility accommodations:** Contact Pearson VUE for WCAG compliance needs

---

## Last verified

- **Exam objectives:** May 1, 2026 (verified against [developer.hashicorp.com/vault/tutorials/ops-pro-cert ↗](https://developer.hashicorp.com/vault/tutorials/ops-pro-cert))
- **Exam pricing and format:** May 1, 2026 (no changes announced for 2026)
- **Salary data:** May 1, 2026 (USD and ZAR sourced from Glassdoor and ERI)
- **Certification status:** Active (2025 GA; expected validity through 2027+)

---

*Maintained by: Deep Dive Certifications Research · Last updated: May 1, 2026 · Archive version for: HashiCorp Vault Operations Professional (GA 2025)*
