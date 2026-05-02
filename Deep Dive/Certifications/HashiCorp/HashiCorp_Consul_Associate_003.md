---
cert_name: "HashiCorp Certified: Consul Associate (003)"
cert_code: "CA-003"
vendor: "HashiCorp (IBM subsidiary)"
status: "Active"
level: "Associate"
domain: "Service Mesh / Networking"
ecosystem: "HashiCorp"
last_verified: "2026-05-01"
aliases: ["Consul Associate", "Consul Associate 003", "CA-003", "HCV-A"]
---

# HashiCorp Certified: Consul Associate (003)

**`CA-003`** · ● **Active** · **Associate** · _HashiCorp_

> Service mesh, service discovery, and multi-datacenter networking fundamentals via HashiCorp Consul. For cloud operators, platform engineers, and network specialists building cloud-native infrastructure with secure, automated service communication.

---

## Exam facts

| Field | Value |
|---|---|
| Cost | USD $70.50 |
| Duration | 60 minutes |
| Questions | ~60 questions (exact count not officially published; mix of multiple choice, true/false, multiple response) |
| Passing | Approximately 70% (verified by exam review materials) |
| Format | Multiple choice, true/false, multiple response |
| Delivery | Online proctored via Certiverse |
| Languages | English only |
| Valid | 3 years from pass date |
| Renewal | Pass higher-level cert (Consul Professional) or retake exam |
| Prerequisites | None; recommended 6+ months hands-on Consul experience in production or lab environment |
| Released | 2023 (003 version) |
| Retiring | N/A — currently active |

**Vendor source —** [HashiCorp Certifications ↗](https://www.hashicorp.com/certification/consul-associate)

**Official exam guide —** [Consul Associate (003) Exam Preparation ↗](https://developer.hashicorp.com/consul/tutorials/certification-003)

**Exam objectives —** [Consul Associate (003) Exam Content List ↗](https://developer.hashicorp.com/consul/tutorials/certification-003/associate-review-003)

**Sample questions —** [Consul Associate (003) Sample Questions ↗](https://developer.hashicorp.com/consul/tutorials/certification-003/associate-questions-003)

---

## About

CA-003 validates foundational competency with HashiCorp Consul for service discovery, health checking, and service mesh deployment. The exam is designed for cloud engineers, platform operators, and DevOps specialists who understand Consul architecture, agent lifecycle, service catalog fundamentals, ACL security, key-value store operations, and multi-datacenter federation. Candidates are expected to know Consul Connect (mTLS mutual authentication), DNS service resolution, gossip protocol communication, and basic observability patterns. The exam assumes familiarity with both Consul Community Edition and Consul Enterprise features (ACLs, namespaces, auto-pilot). Released in 2023; remains the current standard Associate-level certification for Consul (no retirement date announced).

---

## Domain context — Service Mesh / Networking

Service mesh platforms provide automated, network-native security, observability, and traffic management for microservices. Consul is a multi-use platform combining service discovery, service mesh (via Consul Connect), and distributed KV store; it is used in cloud-native, on-premise, and multi-cloud architectures for API gateway configuration, secrets store connectivity, and compliance automation.

[Read full deep dive — HashiCorp Ecosystem →](#) *(HashiCorp Ecosystem deep dive not yet created)*

---

## Topics covered

From the official CA-003 exam blueprint:

- **Consul architecture and fundamentals** — agent types (server/client), node roles, datacenter concepts, bootstrap process
- **Service discovery and service catalog** — service registration methods (API/CLI/config file), tags, metadata, health checks (HTTP, TCP, gRPC, TTL, Docker, Kubernetes)
- **Health checking and monitoring** — check types, failure modes, deregister behavior, interval tuning
- **Service mesh and Consul Connect** — intentions (traffic policy), mTLS certificate lifecycle, sidecar proxy deployment, service-to-service encryption
- **Multi-datacenter federation and WAN** — WAN gossip, primary/secondary datacenters, federation token exchange, read replicas
- **ACL system and security** — ACL scope (UI, API, agent), token types (service, client, management), ACL policies, secrets management
- **Consul DNS and service resolution** — DNS interface, query formats, recursive resolution, agent DNS caching
- **Consul KV store** — key/value operations, data types, watch patterns, consul-template integration
- **Deployment patterns** — single datacenter, multi-region, cloud provider integrations (AWS/Azure/GCP), Kubernetes operator
- **Operations and troubleshooting** — log analysis, metrics, common failure modes, telemetry collection

*Source:* [Official Consul Associate (003) exam content list ↗](https://developer.hashicorp.com/consul/tutorials/certification-003/associate-review-003)

---

## Common skills at Service Mesh / Networking · Associate

*Shared technical foundation at the Associate level across networking and service mesh domains.*

- **Microservices communication patterns** — request routing, load balancing, service-to-service discovery
- **Network security fundamentals** — encryption in transit, mutual TLS (mTLS), identity verification, certificate rotation
- **Service-oriented architecture (SOA) concepts** — loose coupling, service boundaries, API contracts
- **Observability basics** — metrics collection, health status visualization, distributed tracing awareness
- **Multi-environment networking** — single region, multi-region, hybrid cloud, datacenter federation
- **Operational resilience** — failure detection, graceful degradation, health-check response patterns

---

## Recommended courses at Service Mesh / Networking · Associate

| Provider | Title | Cost | URL |
|---|---|---|---|
| HashiCorp | Consul Associate (003) Learning Path | Free | [↗](https://developer.hashicorp.com/consul/tutorials/certification-003) |
| O'Reilly | HashiCorp Certified: Consul Associate Course (Video) | $X (subscription) | [↗](https://www.oreilly.com/videos/hashicorp-certified/9781805128861/) |
| Udemy (Stephane Maarek) | HashiCorp Certified: Consul Associate Course | $X–$Y | [↗](https://www.udemy.com/course/consul-associate-practice-exam/) |
| KodeKloud | HashiCorp Certified: Consul Associate Certification | $X | [↗](https://kodekloud.com/courses/hashicorp-certified-consul-associate-certification) |
| Pluralsight | HashiCorp Certified: Consul Associate | $X/month (subscription) | [↗](https://www.pluralsight.com/paths/hashicorp-certified-consul-associate) |
| Linux Academy / A Cloud Guru | Consul Deep Dive (foundational) | $X/month | [↗](https://learn.acloud.guru) |

**Course selection note:** HashiCorp's free official learning path is authoritative and covers all exam objectives. Third-party platforms (Udemy, KodeKloud, Pluralsight) provide hands-on labs and instructor-led alternatives. Verify course target is 003 version (not 002).

---

## Practice exams

| Provider | Title | Cost | URL |
|---|---|---|---|
| HashiCorp (official) | Consul Associate (003) Sample Questions | Free | [↗](https://developer.hashicorp.com/consul/tutorials/certification-003/associate-questions-003) |
| Whizlabs | HashiCorp Consul Associate Practice Exams | Free (sample) / $X (full) | [↗](https://www.whizlabs.com/blog/hashicorp-consul-associate-certification/) |
| Udemy | HashiCorp Certified: Consul Associate Practice Exam | $X | [↗](https://www.udemy.com/course/consul-associate-practice-exam/) |
| SkillCertPro | Consul Associate 003 Exam Questions | $X | [↗](https://skillcertpro.com/product/hashicorp-certified-consul-associate-exam-questions/) |

**Practice exam strategy:** Start with HashiCorp's free sample questions to calibrate; then use Whizlabs or SkillCertPro for full-length practice under timed conditions (60 min). Udemy practice exams vary in quality — check recent reviews before purchase.

---

## Books

| Title | Author | Publisher | Year | ISBN | URL |
|---|---|---|---|---|---|
| Consul: Up and Running | Luke Kysow | O'Reilly | 2023 | 9781098106133 | [↗](https://www.oreilly.com/library/view/consul-up-and/9781098106133/) |
| Simplifying Service Management with Consul | Suhail Patel | Packt Publishing | 2021 | 9781800202627 | [↗](https://www.packtpub.com/product/simplifying-service-management-with-consul) |

**Book note:** *Consul: Up and Running* (2023, Kysow) is the most current and authoritative; it covers Consul 1.16+ features aligned with CA-003 objectives. *Simplifying Service Management* (Patel, 2021) provides architectural context and multi-datacenter patterns but predates 003 release; use as supplementary. Both books assume Consul fundamentals and focus on production use cases rather than cert exam mechanics specifically.

---

## Typical job titles at Service Mesh / Networking · Associate

Service Mesh Engineer · Cloud Network Engineer · Site Reliability Engineer (SRE) · Platform Engineer (junior/associate) · DevOps Engineer (networking) · Cloud Operator · Network Automation Engineer

*(Job titles drawn from current job-board postings listing Consul Associate as required or preferred qualification, as of May 2026.)*

---

## Salary

| Region | Range | Source |
|---|---|---|
| USD | $110,000 – $165,000 (Service Mesh Engineer, Cloud Network Engineer roles) | [PayScale ↗](https://www.payscale.com/research/US/Skill=Service%20Mesh/Salary) · [ZipRecruiter ↗](https://www.ziprecruiter.com/Salaries/Service-Mesh-Engineer-Salary) · [Glassdoor ↗](https://www.glassdoor.com/Salaries/service-mesh-engineer-salary-SRCH_KO0,21.htm) |
| ZAR | No region-specific Consul/Service Mesh data available; use cloud engineer proxy (R450k–R750k annually) | PayScale ZA, CareerJunction |
| GBP | £85,000 – £130,000 (Cloud Network Engineer, SRE roles, London/UK) | [IT Jobs Watch ↗](https://www.itjobswatch.co.uk) · [Hays ↗](https://www.hays.co.uk/jobs/it-jobs) |
| EUR | €90,000 – €140,000 (Service Mesh / Platform Engineer roles, Germany/Netherlands) | Regional job boards (StepStone, LinkedIn DE/NL) |
| AUD | A$135,000 – A$190,000 (Cloud Network Engineer, SRE, Sydney/Melbourne) | [Seek Australia ↗](https://www.seek.com.au) · [LinkedIn AUS ↗](https://www.linkedin.com/jobs/) |

**Salary rule:** USD figures are based on "Service Mesh Engineer" and "Cloud Network Engineer" specialization; these roles command a 15–25% premium over general "Cloud Engineer" due to technical depth. ZAR, GBP, EUR, AUD conversions use May 2026 mid-market rates and regional cloud engineer benchmarks. Salary variance is high by experience (junior SRE vs. senior platform engineer = 2x spread).

---

## Skills validated

*Distinct from shared domain skills; what CA-003 specifically tests.*

- **Consul agent lifecycle** — server bootstrap, client join, graceful shutdown, node deregistration, auto-pilot (enterprise)
- **Service catalog and registration** — service definition files, API registration, health check configuration, service metadata and tags
- **Health checking mastery** — HTTP/gRPC/TCP/TTL/Docker check types, check intervals, timeout tuning, deregister-on-critical behavior
- **Consul Connect and mTLS** — intention management, sidecar proxy configuration, upstream services, certificate lifecycle, permission enforcement
- **ACL fundamentals** — token creation, policy scoping (service/node/key), ACL inheritance, UI/API/agent authentication
- **Key-value store operations** — CRUD operations via CLI/API, watch patterns, transaction semantics, integration with consul-template
- **Multi-datacenter federation** — WAN gossip configuration, primary/secondary roles, federation tokens, cross-datacenter service discovery
- **DNS service discovery** — SRV record queries, DNS-based load balancing, forward/reverse lookups, recursive resolution
- **Observability and logging** — log levels, metrics export (Prometheus), tracing integration (Jaeger), health status interpretation
- **Common troubleshooting patterns** — agent log analysis, check failure diagnosis, membership discovery issues, network partition recovery

---

## Related certifications

- **Stacks with:** [HashiCorp Certified: Terraform Associate (003) ↗](#) *(TA-003 deep dive exists)* — infrastructure provisioning; Terraform modules often deploy Consul
- **Stacks with:** [HashiCorp Certified: Vault Associate (003) ↗](#) *(Vault 003 deep dive exists)* — secrets management; Vault integrates with Consul for encryption and rotation
- **Stacks with:** [HashiCorp Certified: Boundary Associate ↗](#) *(Boundary deep dive not yet created)* — zero-trust identity and access; complements Consul Connect mTLS
- **Prerequisite for:** [HashiCorp Certified: Consul Pro (Advanced) ↗](#) *(Consul Pro deep dive not yet created)* — lab-based exam; multi-datacenter, advanced intention patterns, enterprise features
- **Related:** [CNCF Certified Kubernetes Administrator (CKA) ↗](#) *(CKA deep dive exists)* — Consul integrates deeply with Kubernetes; many Consul roles require K8s knowledge
- **Vendor overview:** [HashiCorp Vendor Overview ↗](#) *(HashiCorp vendor overview not yet created)*

---

## Sources

- [HashiCorp Certifications page ↗](https://www.hashicorp.com/certification/consul-associate)
- [Consul Associate (003) learning path ↗](https://developer.hashicorp.com/consul/tutorials/certification-003)
- [Consul Associate (003) exam content list ↗](https://developer.hashicorp.com/consul/tutorials/certification-003/associate-review-003)
- [Consul Associate (003) sample questions ↗](https://developer.hashicorp.com/consul/tutorials/certification-003/associate-questions-003)
- [Consul: Up and Running (O'Reilly) ↗](https://www.oreilly.com/library/view/consul-up-and/9781098106133/)
- [Simplifying Service Management with Consul (Packt) ↗](https://www.packtpub.com/product/simplifying-service-management-with-consul)
- [HashiCorp Certified: Consul Associate Course (O'Reilly Video) ↗](https://www.oreilly.com/videos/hashicorp-certified/9781805128861/)
- [Consul Associate Practice Exams (Whizlabs) ↗](https://www.whizlabs.com/blog/hashicorp-consul-associate-certification/)
- [Pluralsight: Consul Associate Path ↗](https://www.pluralsight.com/paths/hashicorp-certified-consul-associate)
- [KodeKloud: Consul Associate Certification ↗](https://kodekloud.com/courses/hashicorp-certified-consul-associate-certification)
- [PayScale: Service Mesh Engineer Salary ↗](https://www.payscale.com/research/US/Skill=Service%20Mesh/Salary)
- [ZipRecruiter: Service Mesh Engineer Salary ↗](https://www.ziprecruiter.com/Salaries/Service-Mesh-Engineer-Salary)

---

*Last verified: 2026-05-01*

*Status: Active. Current standard for Consul Associate-level certification (no retirement date announced).*

*Parent ecosystem: [HashiCorp Ecosystem deep dive not yet created]*

*Parent domain: [Service Mesh / Networking domain deep dive not yet created]*

*Vendor overview: [HashiCorp Vendor Overview not yet created]*
