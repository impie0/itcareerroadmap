---
title: "Dom09 — Architecture Domain (Solutions / Cloud / Enterprise / Domain)"
slug: "architecture-domain"
code: "DOM09"
kind: "domain"
lastUpdated: "2026-04-01"
vendors: ["TOGAF", "AWS", "Microsoft Azure", "Google Cloud", "Open Group"]
tags: ["architecture", "enterprise-architecture", "togaf", "solution-architecture"]
---

# Deep Dive: DOM09 — Architecture Domain (Solutions / Cloud / Enterprise / Domain)

**Version:** 1.0  
**Date:** April 2026  
**Scope:** Enterprise, Solution, Cloud, and Domain Architects; career pathways; certifications; frameworks; and practical skills.

---

## Executive Summary

The **Architecture domain** spans the design and governance of IT systems at scale—from a single project solution (Solutions Architect) to the entire enterprise technology portfolio (Enterprise Architect). It sits at the intersection of business strategy and technical implementation. Career progression typically moves: **Engineer → Solutions Architect → Enterprise Architect → Chief Architect**, with lateral specializations into **Security Architect**, **Data Architect**, **Cloud Architect**, and **Network Architect** roles.

Key certifications anchor this domain:
- **TOGAF** (The Open Group) — enterprise framework standard (now TOGAF 10th Edition, released April 2022)
- **Open CA** (Certified Architect) — independent portfolio-based certification
- **AWS Solutions Architect Professional** (SAP-C02) — cloud-focused
- **Microsoft Azure Solutions Architect Expert** (AZ-305) — Azure-focused
- **GCP Professional Cloud Architect** — Google Cloud
- **SAFe Architect** (ARCH) — scaled agile delivery context
- **Industry-specific frameworks** (BIAN for banking, TM Forum for telecom, HL7 FHIR for healthcare)

This domain has **no single tech stack**—instead, architects work across all domains (networking, cloud, security, data, DevOps, etc.) to compose integrated solutions.

---

## 1. What Architects Do: Role Definitions & Scope

### 1.1 Solutions Architect

**Scope:** Single project or product initiative, typically 6–18 months.

**Responsibilities:**
- Translate business requirements into technical architecture
- Design system components (compute, storage, networking, security)
- Evaluate trade-offs: cost, scalability, availability, performance, security
- Work directly with engineers, product managers, and stakeholders
- Own the design through implementation and early operation

**Typical Tenure:** 3–7 years as solutions architect before promotion to enterprise or specialization.

**Report To:** VP Engineering, VP Product, or Solutions leadership.

**Day-to-Life Example:**
- Morning: stakeholder meeting to clarify SLOs (service-level objectives), compliance constraints, budget.
- Mid-day: sketch architecture diagram, evaluate 3 candidate approaches (cloud vs. on-prem, serverless vs. containers, etc.), cost modeling.
- Afternoon: review code review patterns, security review with CISO office, negotiate with ops on runbook/monitoring strategy.

**Key Skill Areas:** system design, trade-off analysis, communication across silos, cost optimization, risk assessment.

### 1.2 Enterprise Architect

**Scope:** Entire technology portfolio, 3–5 year horizon, cross-business-unit alignment.

**Responsibilities:**
- Define enterprise architecture standards, frameworks, and governance
- Manage technology portfolio roadmap (what to modernize, consolidate, retire)
- Ensure architectural consistency across solutions architects' projects
- Lead capacity planning, vendor strategy, and major platform decisions (e.g., cloud migration)
- Communicate with CFO, board, and business unit leaders on IT-business alignment

**Typical Tenure:** 5–15 years as enterprise architect; often a prerequisite for Chief Architect or CIO.

**Report To:** CIO, Chief Technology Officer (CTO), or VP Enterprise Architecture.

**Day-to-Life Example:**
- Morning: executive steering committee meeting on cloud migration ROI and timeline.
- Mid-day: review architectural standards document for microservices adoption; work with solutions architects to ensure compliance.
- Afternoon: vendor evaluation for new data warehouse platform; capacity planning for next fiscal year.

**Key Skill Areas:** portfolio management, organizational change, strategy, governance, vendor/platform evaluation.

### 1.3 The Architect Elevator Metaphor (Gregor Hohpe)

**Core insight:** Modern architects must "ride the elevator" between the business **penthouse** (board room, CFO, business strategy) and the technical **engine room** (developers, ops, code). Neither alone is sufficient.

- **Penthouse:** Understand business outcomes, ROI, competitive positioning, transformation roadmaps.
- **Engine Room:** Deep technical knowledge of systems, scalability patterns, cloud platforms, deployment automation.
- **Elevator:** The skill to translate between these worlds—explaining why a technology choice matters to CFO, or why a business constraint changes the architecture.

Source: [*The Software Architect Elevator: Redefining the Architect's Role in the Digital Enterprise*](https://www.oreilly.com/library/view/the-software-architect/9781492077534/) by Gregor Hohpe, O'Reilly, 2020. Hohpe also served as Chief Architect at Allianz SE and technical director at Google Cloud's Office of the CTO.

### 1.4 Domain Architects (Specialization)

**Definition:** Architects who own a specific technical domain across the enterprise. Examples:

- **Security Architect** — security design, compliance, zero-trust models, governance (covered separately in Security domain; key certs: CCSP, SC-100)
- **Data Architect** — data warehouses, lakes, governance, MDM (master data management); certs: Snowflake Architect, Cloud Data Engineer
- **Network Architect** — network topology, SD-WAN, cloud networking, hybrid connectivity; cert: CCDE, Open CA
- **Cloud Architect** — cloud platform strategy, multi-cloud, migration patterns, cost optimization
- **Integration/API Architect** — microservices, event-driven, API design, message buses

Domain architects report to either the enterprise architect or their own VP, and coordinate across solutions architect teams to enforce standards.

---

## 2. Certifications & Credentials

### 2.1 The Open Group: TOGAF (The Open Group Architecture Framework)

**What It Is:** Industry-standard enterprise architecture framework, defines a structured methodology (ADM, Architecture Development Method) for designing and governing enterprise IT systems.

**Current Version:** TOGAF 10th Edition (released April 25, 2022, officially *TOGAF® Standard, 10th Edition*). TOGAF 9 certifications remain valid and widely used; TOGAF 10 is the forward direction.

**Key Differences: TOGAF 9 vs. TOGAF 10**
- **Modularity:** TOGAF 10 introduces a modular structure (Fundamental Content + Series Guides), making the framework less monolithic and easier to adopt selectively.
- **Agile Focus:** TOGAF 9.2 lacks specific Agile integration guidance. TOGAF 10 includes detailed guidance on applying Agile practices alongside the ADM.
- **Modern Tech:** TOGAF 10 adds explicit coverage of digital transformation, cloud computing, and microservices architecture.
- **Digital Edition:** TOGAF 10 includes a digital (interactive) version with feedback mechanisms for practitioners.

Sources: [TOGAF Standard Version 10 Overview](https://www.opengroup.org/togaf), [TOGAF Certification Portfolio](https://www.opengroup.org/certifications/togaf-certification-portfolio), [Navigating TOGAF 10 – Open Group Blog](https://blog.opengroup.org/2025/07/01/navigating-the-togaf-standard-10th-edition-updates-and-insights/).

#### TOGAF Certification Levels

| Level | Exam | Cost | Prerequisite | Use Case |
|-------|------|------|--------------|----------|
| **Foundation (OGEA-101)** | 40 questions, 60 min | ~$200 | None | Entry-level familiarity; required for Practitioner |
| **Practitioner (OGEA-102)** | 80 questions, 90 min | ~$300 | OGEA-101 | Active practitioner; can apply TOGAF to real projects |
| **Combined (OGEA-103)** | Foundation + Practitioner in one exam | ~$400 | None | Fast-track for experienced architects |

**Learning Path:** TOGAF accredited training programs (~$3,000–$5,000 for 3–5 day courses) offered by Open Group partners. Free introductory materials available from [Open Group Accredited Training Partners](https://www.opengroup.org/certifications).

**Certification Statistics:** As of 2025, over 150,000 individuals have earned TOGAF certifications since 2009. TOGAF 10 certifications now exceed 16,000 credentials to date.

Source: [Open Group 2024 & Beyond Blog](https://blog.opengroup.org/2025/01/07/the-open-group-2024-and-looking-forward-to-2025/).

### 2.2 Open CA (Open Certified Architect)

**What It Is:** Independent, global, portfolio-based certification for architects. Differentiates from exam-driven certifications by emphasizing demonstrated experience and peer review.

**Three Levels:**

| Level | Requirement | Timeline | Process |
|-------|-------------|----------|---------|
| **Architect (Level 1)** | Demonstrated architecture experience; submission of written evidence + peer interviews | Varies | Application review + interviews |
| **Master Certified Architect (Level 2)** | Minimum 12 years architecture experience; deeper portfolio evidence; interviews by Master Architects | 5–10 years typical | Rigorous portfolio review |
| **Distinguished Architect (Level 3)** | Leadership scope and impact; must have been Level 2 first; contributions to profession (publications, standards, mentoring) | 10+ years typical | Three interviews by other Distinguished Architects; professional contribution requirement |

**Notable Feature:** Open CA does *not* rely on exams, making it appealing for experienced architects who can document real-world impact but may struggle with standardized test formats.

**Cost:** Varies by level; typically $500–$2,500 for application and review.

Source: [Open Certified Architect Program](https://www.opengroup.org/certifications/certified-architect-open-ca), [How to Become Open CA Certified](https://help.opengroup.org/hc/en-us/articles/32253612005522-How-to-Become-Open-Certified-Architect-Open-CA-Certified), [Distinguished Architect Badge – Credly](https://www.credly.com/org/the-open-group/badge/professional-certification-level-3-distinguished-architect).

### 2.3 Cloud Architect Certifications

#### AWS Certified Solutions Architect – Professional (SAP-C02)

**Exam Details:**
- **Format:** 75 questions, 180 minutes (3 hours)
- **Passing Score:** 750/1000
- **Cost:** $300 per attempt
- **Recommended Experience:** 2+ years designing and implementing AWS solutions
- **Validity:** 3 years

**Content Areas:** Large-scale migrations, cost optimization, governance, security, resilience, multi-account AWS environments.

**Difficulty & Preparation:** Industry pass rate ~60%. Recommended study: 8–12 weeks. Study resources include Adrian Cantrill's SAP-C02 deep dives, AWS practice exams, Tutorials Dojo, and Udemy courses.

**Career Value:** AWS SAP-C02 is a senior-level credential highly valued in AWS-focused shops; often a prerequisite for senior or principal architect roles at AWS partners and enterprises.

Source: [AWS Certified Solutions Architect – Professional](https://aws.amazon.com/certification/certified-solutions-architect-professional/).

#### Microsoft Certified: Azure Solutions Architect Expert (AZ-305)

**Exam Details:**
- **Format:** 60 questions, 120 minutes, scenario-based and multiple-response
- **Prerequisite:** Must already hold [Azure Administrator Associate](https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/) credential
- **Cost:** ~$165 per attempt
- **Validity:** 1 year (with annual renewal via free online assessment, no exam fee)
- **Updated:** April 17, 2026 (recent revision)

**Content:** Compute, network, storage, monitoring, security design for Azure and hybrid scenarios.

**Career & Salary Value:** Azure Solutions Architect roles command strong compensation. 2026 median ~$155,000–$170,000+ in the US, with senior roles in major metros exceeding $180,000.

Source: [Exam AZ-305: Designing Microsoft Azure Infrastructure Solutions](https://learn.microsoft.com/en-us/credentials/certifications/exams/az-305/), [Microsoft Azure Solutions Architect Expert](https://learn.microsoft.com/en-us/credentials/certifications/azure-solutions-architect/).

#### Google Cloud Professional Cloud Architect

**Overview:** GCP's premier architecture certification, covering infrastructure design, migration, and optimization on Google Cloud.

**Exam Format:** ~50 questions, scenario-based, 120 minutes. Cost ~$200.

**Prerequisite:** Recommended 3+ years cloud architecture or hands-on infrastructure experience.

**Content:** Compute, networking, storage, security, cost optimization, migration design.

#### Oracle OCI Architect Professional (1Z0-997)

**Overview:** Oracle Cloud Infrastructure architect credential, covering compute, storage, networking, security, and hybrid scenarios.

**Exam:** Scenario-based questions, 120 minutes.

**Prerequisites:** Recommended Oracle Cloud foundation knowledge.

### 2.4 Scaled Agile (SAFe) Architect Certification

**What It Is:** Certification for System, Solution, and Enterprise Architects working in scaled agile (SAFe) environments—particularly relevant in organizations adopting SAFe for large-scale transformation.

**Certification:** Certified SAFe® 6 Architect (ARCH)

**Course & Exam:**
- **Duration:** 1–2 days of training
- **Exam Format:** Multiple-choice, 50 questions, 90 minutes
- **Cost:** ~$700–$1,000 (course + exam)
- **Validity:** 2 years

**Key Competencies:**
- Applying SAFe principles to Agile Architecture and release-on-demand
- Leading Solution Trains and Agile Release Trains (ARTs)
- Enabling continuous flow across large systems
- Supporting DevOps and continuous delivery

**Career Relevance:** Highly valuable in enterprises adopting SAFe (financial services, telecom, government, large tech companies). Often combined with TOGAF or AWS/Azure certifications.

Source: [SAFe Architect Certification](https://scaledagile.com/certification/safe-architect/).

### 2.5 Industry-Specific Architecture Frameworks

#### BIAN (Banking Industry Architecture Network)

**What It Is:** Global standard for banking IT architecture, developed collaboratively by banks, vendors, and service firms.

**Certification:**

| Level | Course Duration | Exam | Passing Score | Validity |
|-------|-----------------|------|---------------|----------|
| **Foundation** | 2 days (16 hours) | 60 minutes, 60 questions, closed-book | 80% | 2 years |
| **Practitioner** | Extended | Comprehensive exam | Variable | 2 years |

**Benefits of BIAN Certification:**
- Improved software solution development and integration for financial services
- Enhanced operational efficiency within and between banks
- Greater solution and capability reuse
- Significantly lower overall integration costs

**Delivery:** Online live virtual training and examination via Van Haren Learning Solutions.

Source: [BIAN – Banking Industry Architecture Network](https://bian.org/), [BIAN Certifications](https://bian-services.com/certifications/).

#### TM Forum eTOM (Enhanced Telecom Operations Map)

**Scope:** Standard for telecom and service provider IT operations and architecture. Often paired with ITIL/ITSM practices.

#### HL7 FHIR (Healthcare)

**Scope:** Architecture standard for healthcare data interoperability; increasingly relevant for health IT architects designing cloud-based EHR and clinical systems.

#### FEAF (Federal Enterprise Architecture Framework – US Government)

**Scope:** Required framework for US federal agency IT architecture; essential for government contractors and federal IT architects.

---

## 3. Frameworks & Practical Methodologies

### 3.1 TOGAF ADM (Architecture Development Method)

The TOGAF ADM provides a structured, repeatable methodology for enterprise architecture work:

| Phase | Focus | Duration |
|-------|-------|----------|
| **A. Architecture Vision** | Define scope, business objectives, architecture principles | 1–2 weeks |
| **B. Business Architecture** | Capability mapping, process design, organization design | 2–4 weeks |
| **C. Information Systems Architecture** | Data, applications, integrations | 2–4 weeks |
| **D. Technology Architecture** | Infrastructure, platforms, tools | 2–4 weeks |
| **E. Opportunities & Solutions** | Consolidation, migration, transformation roadmap | 1–2 weeks |
| **F. Migration Planning** | Phasing, dependencies, dependencies, governance | 1–2 weeks |
| **G. Implementation Governance** | Oversee realization, manage change | Ongoing |
| **H. Architecture Change Management** | Monitor, feedback loops, continuous improvement | Ongoing |

**Capability Mapping (Phase B):** Architects define what capabilities the business needs (e.g., "real-time fraud detection," "omnichannel customer service") and map those to existing and future technology solutions. This bridges business and IT language.

### 3.2 Architecture Decision Records (ADRs)

**What They Are:** Lightweight documentation of *why* architectural choices were made, not just *what* was chosen.

**Standard Format (Cognitect/Joel Parker Henderson template):**

```
# ADR-001: Use PostgreSQL for Primary Datastore

## Status
Accepted

## Context
We need a relational database for order management and reporting. 
Evaluated: PostgreSQL, MySQL, managed database-as-a-service.

## Decision
We will use PostgreSQL (self-managed in Kubernetes, backed by persistent volumes).

## Consequences
- Positive: Rich SQL, JSONB support, cost-effective at our scale
- Negative: Ops responsibility for backup/recovery/tuning
- Risk: Skills gap in team; mitigated by hiring DBA, training
```

**Best Practices:**
- Keep ADRs in version control (git) alongside code, in `doc/adr/` or similar
- Write in Markdown, one file per decision
- Append-only: don't edit accepted records; if a decision changes, write a new ADR that supersedes the old one
- Link superseding ADRs to original ones
- Keep records short: 1–2 pages typical

**Visibility:** ADRs serve dual purpose: (1) documentation for future engineers, (2) forcing architects to articulate reasoning upfront, which often surfaces flaws in thinking.

Sources: [Architectural Decision Records (ADR)](https://adr.github.io/), [Martin Fowler – Architecture Decision Record](https://martinfowler.com/bliki/ArchitectureDecisionRecord.html), [AWS Prescriptive Guidance – ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html), [Microsoft Azure Well-Architected Framework – ADR](https://learn.microsoft.com/en-us/azure/well-architected/architect-role/architecture-decision-record).

### 3.3 Architectural Characteristics & Patterns

Modern architecture work centers on identifying and balancing non-functional requirements:

**Common Architectural Characteristics:**
- **Scalability** — horizontal scale, elasticity, throughput
- **Availability & Resilience** — uptime, fault tolerance, recovery time
- **Performance** — latency, bandwidth, throughput SLOs
- **Security** — confidentiality, integrity, compliance (SOC2, ISO 27001, HIPAA, PCI-DSS)
- **Cost** — CapEx, OpEx, cloud spend optimization
- **Maintainability** — code clarity, modularization, testability
- **Deployability** — CI/CD, blue-green, canary, GitOps
- **Operational Excellence** — monitoring, alerting, runbooks, incident response

**Common Patterns:**
- **Microservices** — distributed services, independent deployment, polyglot
- **Serverless** — functions-as-a-service, event-driven, managed backends
- **Event-Driven** — asynchronous, decoupled, real-time
- **CQRS** — Command Query Responsibility Segregation
- **Domain-Driven Design (DDD)** — bounded contexts, ubiquitous language
- **API-First** — REST, gRPC, GraphQL, contract-driven

Reference: [*Fundamentals of Software Architecture: An Engineering Approach*](https://www.oreilly.com/library/view/fundamentals-of-software/9781492043447/) by Mark Richards & Neal Ford, O'Reilly (second edition available with Generative AI, Team Topologies chapters).

---

## 4. Career Progression & Compensation

### 4.1 Typical Career Arc

**Engineer → Solutions Architect**
- **Timeline:** 3–5 years as senior engineer/tech lead
- **Skills Transition:** from "build it well" to "design it right"
- **First SA Role:** Often junior/mid-level SA, focused on 1–2 product lines or internal projects
- **Title:** Solutions Architect, Senior Solutions Architect, Principal Solutions Architect

**Solutions Architect → Enterprise Architect**
- **Timeline:** 5–10 years as solutions architect
- **Skills Transition:** from "this project" to "the entire portfolio"
- **Prerequisite:** Usually requires TOGAF Practitioner, Open CA Foundation, or equivalent experience
- **Title:** Enterprise Architect, Senior Enterprise Architect, VP Enterprise Architecture

**Enterprise Architect → Chief Architect / CTO**
- **Timeline:** 10+ years in architecture roles
- **Skills Transition:** from design/governance to strategy/org design/M&A due diligence
- **Typical Route:** Enterprise Architect → Chief Architect → VP Engineering/CTO, or into Chief Architect Office
- **Title:** Chief Architect, Chief Technology Officer (CTO), VP of Architecture, Distinguished Engineer (architect flavor)

**Lateral Specialization (Any Level):**
- Security Architect (requires CCSP or SC-100, plus security domain depth)
- Cloud Architect (requires AWS/Azure/GCP cert + hands-on cloud platform experience)
- Data Architect (requires data engineering background + Snowflake/BigQuery/Databricks architecture knowledge)
- Network Architect (CCDE + deep networking background)

### 4.2 Salary Ranges (2026, US Market)

**Solutions Architect:**
- **Entry (Junior):** $130,000–$160,000 base
- **Mid-Level:** $160,000–$200,000 base + bonus
- **Senior:** $200,000–$280,000 base + bonus + equity (FAANG)

Source: [Robert Half 2026 Salary Guide – Network/Cloud Architect](https://www.roberthalf.com/us/en/insights/salary-guide).

**Enterprise Architect:**
- **Early Career (5–7 years EA):** $180,000–$240,000
- **Established (8–12 years EA):** $240,000–$320,000
- **Chief/VP Level:** $300,000–$600,000+ (varies by company size, location, equity)

**Cloud Architect Progression (by tenure):**
| Tenure | Title | Salary Range (US) |
|--------|-------|-------------------|
| 1–2 years | Cloud Engineer / Junior CA | $100,000–$130,000 |
| 2–4 years | Cloud Architect | $130,000–$165,000 |
| 4–6 years | Senior Cloud Architect | $165,000–$195,000 |
| 7–10 years | Principal Architect | $195,000+ |

Source: [Cloud Engineer Career Path: Junior to Principal 2026 Guide](https://www.kore1.com/cloud-engineer-career-path/).

**Cost-of-Living Adjustment:** San Francisco Bay Area, Seattle, NYC, Boston all command +20–40% premiums. Remote roles from lower-CoL regions often negotiate +10–15% above stated ranges.

### 4.3 Career Advancement Tactics

**Deep Specialization vs. Generalization:**
- **Years 0–3:** Pick one cloud platform (AWS, Azure, GCP) and go deep. Specialists reach senior roles 1–2 years faster than multi-cloud generalists.
- **Years 4–7:** Add a second platform or specialization (security, data, network); you're now "deep + adjacent."
- **Years 8+:** Breadth becomes valuable. Principal/chief architects need portfolio-level views (when to use AWS vs. Azure, multi-cloud strategy, M&A due diligence).

**Visibility & Communication:**
- Architect's work is invisible unless communicated. Present at all-hands, write decision docs, blog internally, give lunch-and-learns.
- Attend industry conferences (O'Reilly Software Architecture, QCon, GOTO, domain-specific conferences).
- Publish externally (technical blog, conference talk) to build credibility for next role (CTO office, chief architect, board advisor).

**Build a Portfolio:**
- Document 3–5 significant architectural decisions, impacts (cost savings, reliability improvements, faster time-to-market), and lessons learned.
- For Open CA, a documented portfolio is *the* requirement; start building this early.

---

## 5. Learning & Development

### 5.1 Free & Low-Cost Resources

**Open Group (TOGAF):**
- [TOGAF 10 Standard Reference](https://www.opengroup.org/togaf) (free download, Creative Commons)
- Open Group Accredited Training partner intro webinars (often free)

**Cloud Platform Learning:**
- [AWS Architecture Center](https://aws.amazon.com/architecture/) — free reference architectures, whitepapers, case studies
- [Microsoft Cloud Adoption Framework](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/) — free guidance on cloud migration, governance, security
- [Google Cloud Architecture Center](https://cloud.google.com/architecture) — diagrams, best practices, reference designs

**Articles & Blogs:**
- [Martin Fowler's Bliki](https://martinfowler.com/bliki/) — microservices, patterns, ADRs, refactoring
- [O'Reilly "97 Things Every Software Architect Should Know"](https://www.oreilly.com/library/view/97-things-every/9780596800529/) (free O'Reilly)
- [Gregor Hohpe's Architect Elevator Blog](https://architectelevator.com/)
- [LeanIX Architecture Blog](https://www.leanix.net/en/academy/) (EA governance, tools)

**Architecture Decision Records:**
- [ADR GitHub Repository (Templates & Examples)](https://github.com/joelparkerhenderson/architecture-decision-record)
- [Cognitect Blog – ADR Introduction](https://www.cognitect.com/blog/2011/11/15/documenting-architecture-decisions)

### 5.2 Paid Courses & Training

**TOGAF:**
- Open Group Accredited Training Partners: $3,000–$5,000 for 3–5 day immersive courses (Foundation + Practitioner)
- Exam fees: ~$200–$300 per attempt

**Cloud Platforms:**
- **Adrian Cantrill** (AWS SAP-C02, AZ-305 deep dives) — Udemy, $15–$50 (high-quality video)
- **Pluralsight** Architecture paths — $299/year or $29/month (broad coverage)
- **O'Reilly Online Learning** — $499/year (unlimited book + video access)
- **Coursera/Udemy/A Cloud Guru** — individual courses $20–$200

**University Courses (for degree-track):**
- Carnegie Mellon Software Engineering Institute (SEI) — graduate courses in architecture, security, DevOps
- MIT OpenCourseWare — free architecture / systems design courses
- Stanford Continuing Studies — professional certificate programs in cloud architecture

### 5.3 Books (Canonical References)

**Essential Reading:**

| Title | Author(s) | Publisher | Year | URL |
|-------|-----------|-----------|------|-----|
| *Fundamentals of Software Architecture* (2nd Ed.) | Mark Richards, Neal Ford | O'Reilly | 2024 | [O'Reilly Link](https://www.oreilly.com/library/view/fundamentals-of-software/9781098175504/) |
| *The Software Architect Elevator* | Gregor Hohpe | O'Reilly | 2020 | [O'Reilly Link](https://www.oreilly.com/library/view/the-software-architect/9781492077534/) |
| *Software Architecture: The Hard Parts* | Ford, Richards, Sadalage, Dehghani | O'Reilly | 2021 | [O'Reilly Link](https://www.oreilly.com/library/view/software-architecture-the/9781492086888/) |
| *Building Evolutionary Architectures* | Ford, Parsons, Kua | O'Reilly | 2017 | [O'Reilly Link](https://www.oreilly.com/library/view/building-evolutionary-architectures/9781491986356/) |
| *Documenting Software Architectures* (2nd Ed.) | Paul Clements, et al. (SEI) | Pearson | 2010 | [Pearson Link](https://www.informit.com/store/documenting-software-architectures-views-and-beyond-9780321552686) |
| *Just Enough Software Architecture* | George Fairbanks | Self-Published | 2010 | [Official Site](https://www.georgefairbanks.com/book/) |
| *Enterprise Architecture as Strategy* | Ross, Weill, Robertson | MIT CISR | 2006 | [MIT Press](https://mitpress.mit.edu/9780262512619/enterprise-architecture-as-strategy/) |
| *37 Things One Architect Knows About IT Transformation* | Gregor Hohpe | LeanPub | 2021 | [LeanPub Link](https://leanpub.com/37things) |
| *Microservices Patterns* | Chris Richardson | Manning | 2018 | [Manning Link](https://www.manning.com/books/microservices-patterns) |
| *Patterns of Enterprise Application Architecture* | Martin Fowler | Pearson | 2002 | [Amazon Link](https://www.amazon.com/Patterns-Enterprise-Application-Architecture-Martin/dp/0321127420) |
| *97 Things Every Software Architect Should Know* | Ed. Richard Monson-Haefel | O'Reilly | 2009 | [Free O'Reilly Link](https://www.oreilly.com/library/view/97-things-every/9780596800529/) |

**Data-Intensive Systems:**
- *Designing Data-Intensive Applications* (Martin Kleppmann, O'Reilly, 2017) — essential for data, distributed systems, architecture

**Domain-Driven Design (foundational for architects):**
- *Domain-Driven Design: Tackling Complexity in the Heart of Software* (Eric Evans, Addison-Wesley, 2003)
- *Implementing Domain-Driven Design* (Vaughn Vernon, Addison-Wesley, 2013)

### 5.4 Conferences & Communities

**Conferences:**
- **O'Reilly Software Architecture** (annual, 2-day format)
- **QCon** (quarterly, multiple cities; strong architecture track)
- **GOTO Conferences** (regular, multiple cities)
- **DDD Europe** (Domain-Driven Design; annual)
- **Open Group conferences** (architecture, standards, governance)

**Online Communities:**
- **Architecture Elevator Slack** (Gregor Hohpe's community)
- **The Architect's Way** (podcast + community)
- **IEEE Software** (research-backed, peer-reviewed)
- **ACM Digital Library** (academic papers on architecture)

---

## 6. Cross-Domain & Emerging Trends

### 6.1 Architecture + Cloud Adoption

Modern architecture nearly always intersects with cloud strategy. Key patterns:

- **Lift-and-Shift** (rehost): Move apps as-is to cloud. Quick, but misses optimization.
- **Re-Platform** (managed services): Refactor for cloud databases, caching, etc. Moderate effort, good ROI.
- **Re-Architect** (cloud-native): Microservices, containers, serverless, event-driven. High effort, long-term advantage.
- **Retire or Replace** (rationalization): Sunset legacy systems; replace with SaaS.

Architects own the "6R" strategy decision and manage the roadmap. Cloud platform architects (AWS, Azure, GCP) are increasingly specialized roles.

### 6.2 Architecture + AI/ML

Emerging concern: Generative AI (LLMs) and ML models introduce new architectural requirements:

- **Model Serving** — inference endpoints, batch processing, edge deployment
- **Data Pipelines** — feature engineering, training data management
- **Governance & Bias** — model versioning, explainability, compliance
- **Cost** — GPU/TPU provisioning, inference cost optimization
- **Safety/Guardrails** — prompt injection, hallucination mitigation

New specialization: **AI/ML Architect**, bridging data science and infrastructure.

### 6.3 Architecture + DevOps / Site Reliability

Modern architects design for operational excellence:

- **Observability** — metrics, logs, traces; architects define SLI/SLO/SLA contracts
- **Infrastructure-as-Code (IaC)** — Terraform, CloudFormation; architects own the IaC strategy
- **Continuous Delivery** — architects ensure architecture supports deployment frequency
- **Chaos Engineering** — architects define failure modes and resilience testing strategy

Key credential overlap: **SRE Engineer** (Google) / **Site Reliability Professional** certifications; increasingly architects need hands-on SRE knowledge.

### 6.4 Architecture + Security

Zero-trust, least-privilege, defense-in-depth are now architectural non-negotiables, not just security concerns. Architects work closely with **Security Architects** (CCSP, SC-100 certified).

---

## 7. Real-World Example: Solutions Architecture Project

**Scenario:** A SaaS company is migrating from monolith (on-premise datacenter) to microservices on AWS. Solutions Architect's role:

**Phase 1: Architecture Vision (Week 1–2)**
- Stakeholder interviews: product, eng, ops, finance
- Define architectural characteristics: scalability (10x user growth in 2 years), cost (50% reduction), reliability (99.95% uptime)
- Set constraints: team size (20 engineers), budget ($2M/year), timeline (12 months)

**Phase 2: Solution Design (Week 3–6)**
- Service decomposition: identify 8 core microservices (user, order, payment, inventory, notification, billing, analytics, admin)
- Technology choices: ECS Fargate (vs. EKS), RDS Aurora (vs. DynamoDB), S3 + CloudFront, SQS for async, Lambda for scheduled jobs
- Trade-off analysis:
  - **Serverless (Lambda everywhere):** Lower ops cost, but cold starts + vendor lock-in. Decision: reject for core services, use for edge cases.
  - **Managed databases (Aurora, ElastiCache):** Higher cost, lower ops burden. Decision: accept for reliability SLO.
- Cost estimate: $80K/month baseline, auto-scaling to $180K/month at peak.

**Phase 3: Governance & ADRs (Week 7–8)**
- Write ADRs for key decisions: ECS Fargate over Kubernetes, Aurora over Cosmos DB, blue-green deployments vs. canary
- Define architectural standards: API versioning (semantic), logging format (JSON), monitoring (CloudWatch + Datadog), security (TLS 1.3, mTLS internal)

**Phase 4: Implementation Handoff (Week 9+)**
- Review with engineering team; answer design questions
- Work with ops on monitoring, alerting, runbooks, disaster recovery procedures
- Review early PRs for architectural compliance
- Attend weekly architecture review meetings; identify deviations early

**Outcome:** Microservices live in 12 months; 40% cost reduction (better than budget), 99.98% uptime (exceeds target), 50% faster feature deployment. Architect's work cited in company blog, becomes basis for promotion to principal architect role.

---

## 8. Distinctions & Overlaps with Other Domains

### Architecture vs. Other IT Domains

| Domain | Focus | Overlap with Architecture |
|--------|-------|--------------------------|
| **Software Engineering** | Code quality, testing, delivery | Architects set design constraints (patterns, style guides); engineers implement |
| **Cloud** | Platform services, optimization | Cloud architect is specialization within architecture domain |
| **DevOps/SRE** | Deployment, observability, reliability | Architects design for deployability/observability; DevOps engineers execute |
| **Security** | Risk, compliance, threat modeling | Security Architect is specialization; coordinates with enterprise architect on governance |
| **Data** | Warehouses, pipelines, analytics | Data Architect specialization; works with enterprise architect on data governance |
| **Networking** | Topology, protocols, performance | Network Architect specialization; increasingly cloud-networking focused |

### Not Architecture

- **Project Management** — roadmaps, timelines, resource allocation (related, but not architecture)
- **IT Operations** — server administration, incident response (operations *executes* architect's design)
- **Vendor Management** — procurement, contract negotiation (architect *inputs* to vendor strategy, but not owner)

---

## 9. Certifications Roadmap by Career Stage

### Entry → Mid-Level
- **TOGAF Foundation (OGEA-101)** — entry point, foundational knowledge
- **Cloud platform cert** (AWS Developer Associate, Azure Administrator Associate) — build hands-on cloud depth
- **System Design interview skills** — practice on LeetCode, mock interviews

**Timeline:** 1–2 years

### Mid → Senior Solutions Architect
- **TOGAF Practitioner (OGEA-102)** — active practitioner credential
- **Cloud Solutions Architect cert** (AWS SAP-C02, AZ-305) — platform-specific expert credential
- **SAFe Architect (ARCH)** — if working in scaled agile context
- **Domain specialization** (CCSP for security, Snowflake Architect for data) — begin lateral depth

**Timeline:** 3–5 years as solutions architect before pursuing these

### Senior → Enterprise Architect
- **Open CA Level 1** (Architect) — portfolio-based; demonstrates impact
- **Industry framework** (BIAN for banking, FEAF for government) — domain knowledge
- **Gregor Hohpe's books + Architect Elevator frameworks** — mental models for org design

**Timeline:** 5–10 years as solutions architect

### Enterprise → Chief / Chief Architect
- **Open CA Level 2 (Master)** or **Level 3 (Distinguished)** — recognition of thought leadership
- **Published work** (blog, conference talks, white papers) — external visibility
- **Executive education** (strategy, M&A, org design) — complement technical depth with business acumen

**Timeline:** 10+ years in architecture

---

## 10. Salary & Hiring Insights

### Negotiation Leverage
- **Certifications** (TOGAF Practitioner, AWS SAP-C02, Open CA) add $10K–$30K to salary
- **Published work** (conference speaker, blog author, paper) adds credibility for next-level roles
- **Documented impact** (cost savings, reliability improvements, time-to-market gains) is worth more than years of experience
- **Multi-platform expertise** (AWS + Azure, or AWS + security specialization) commands +15–25% premium

### Hire Signals
- Senior engineers applying for architect roles should articulate: design decisions made, trade-off analysis, business impact, team communication
- Avoid "I did architecture" without evidence. Bring: ADRs written, diagrams created, incidents prevented, cost saved

### Geographic Premium
- San Francisco / Seattle / NYC / Boston: +30–50% over national median
- Denver / Austin / Charlotte / Toronto: +10–20% premium
- Remote (from lower-cost region): often negotiate at FAANG/unicorn level +15% above stated range

---

## 11. Sources & References

### Primary Sources (Certifications & Frameworks)

1. [The Open Group – TOGAF Certification Portfolio](https://www.opengroup.org/certifications/togaf-certification-portfolio)
2. [The Open Group – TOGAF Standard Version 10](https://www.opengroup.org/togaf)
3. [Open Certified Architect (Open CA) Program](https://www.opengroup.org/certifications/certified-architect-open-ca)
4. [How to Become Open CA Certified – The Open Group](https://help.opengroup.org/hc/en-us/articles/32253612005522-How-to-Become-Open-Certified-Architect-Open-CA-Certified)
5. [AWS Certified Solutions Architect – Professional](https://aws.amazon.com/certification/certified-solutions-architect-professional/)
6. [Microsoft Certified: Azure Solutions Architect Expert (AZ-305)](https://learn.microsoft.com/en-us/credentials/certifications/azure-solutions-architect/)
7. [Exam AZ-305: Designing Microsoft Azure Infrastructure Solutions](https://learn.microsoft.com/en-us/credentials/certifications/exams/az-305/)
8. [SAFe Architect Certification](https://scaledagile.com/certification/safe-architect/)
9. [BIAN – Banking Industry Architecture Network](https://bian.org/)
10. [BIAN Certifications](https://bian-services.com/certifications/)

### Books & Publications

11. [*Fundamentals of Software Architecture* (2nd Ed.) – O'Reilly](https://www.oreilly.com/library/view/fundamentals-of-software/9781098175504/)
12. [*The Software Architect Elevator* – O'Reilly](https://www.oreilly.com/library/view/the-software-architect/9781492077534/)
13. [*Software Architecture: The Hard Parts* – O'Reilly](https://www.oreilly.com/library/view/software-architecture-the/9781492086888/)
14. [*97 Things Every Software Architect Should Know* – O'Reilly (Free)](https://www.oreilly.com/library/view/97-things-every/9780596800529/)
15. [*Just Enough Software Architecture* – George Fairbanks](https://www.georgefairbanks.com/book/)

### Learning Resources

16. [AWS Architecture Center](https://aws.amazon.com/architecture/)
17. [Microsoft Cloud Adoption Framework](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/)
18. [LeanIX Architecture Blog & Academy](https://www.leanix.net/en/academy/)

### Architecture Decision Records & Practices

19. [Architectural Decision Records (ADR GitHub)](https://adr.github.io/)
20. [Architectural Decision Records – GitHub Examples](https://github.com/joelparkerhenderson/architecture-decision-record)
21. [Martin Fowler – Architecture Decision Record](https://martinfowler.com/bliki/ArchitectureDecisionRecord.html)
22. [AWS Prescriptive Guidance – ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)
23. [Microsoft Azure Well-Architected Framework – ADR](https://learn.microsoft.com/en-us/azure/well-architected/architect-role/architecture-decision-record)
24. [Cognitect – Documenting Architecture Decisions](https://www.cognitect.com/blog/2011/11/15/documenting-architecture-decisions)

### Salary & Career Data

25. [Robert Half 2026 Salary Guide – Technology](https://www.roberthalf.com/us/en/insights/salary-guide)
26. [Cloud Engineer Career Path: Junior to Principal 2026](https://www.kore1.com/cloud-engineer-career-path/)
27. [Coursera – Cloud Architect Career Guide 2026](https://www.coursera.org/articles/cloud-architect)

### Industry & Enterprise Architecture Context

28. [The Open Group – 2024 and Beyond Blog Post](https://blog.opengroup.org/2025/01/07/the-open-group-2024-and-looking-forward-to-2025/)
29. [Navigating TOGAF 10 – Open Group Blog](https://blog.opengroup.org/2025/07/01/navigating-the-togaf-standard-10th-edition-updates-and-insights/)
30. [TOGAF 9 vs. TOGAF 10 – Key Differences (Dev Genius)](https://blog.devgenius.io/togaf-9-vs-togaf-10-whats-new-and-different-bc2260200275)
31. [Enterprise Architect vs. Solutions Architect – LeanIX](https://www.leanix.net/en/wiki/ea/enterprise-architect-vs-solution-architect-vs-technical-architect-whats-the-difference)
32. [Solutions Architect vs. Enterprise Architect – Indeed](https://www.indeed.com/career-advice/finding-a-job/solutions-architect-vs-enterprise-architect)

---

## Appendix A: Quick Reference — Common Certifications

| Cert | Issuer | Level | Cost | Timeline | Best For |
|------|--------|-------|------|----------|----------|
| TOGAF Foundation (OGEA-101) | Open Group | Entry | $200 | 2–4 weeks | Fundamentals |
| TOGAF Practitioner (OGEA-102) | Open Group | Mid | $300 | 6–12 weeks | Active practitioner |
| Open CA Level 1 | Open Group | Mid-Senior | $1,000 | 3–6 months | Portfolio-based; real-world impact |
| AWS SAP-C02 | Amazon | Expert | $300 | 8–12 weeks | AWS-focused architects |
| AZ-305 | Microsoft | Expert | $165 | 6–10 weeks | Azure-focused architects |
| GCP Professional Cloud Architect | Google | Expert | $200 | 6–12 weeks | GCP-focused architects |
| SAFe Architect (ARCH) | Scaled Agile | Mid-Senior | $700–$1K | 1–2 weeks training | Scaled agile context |
| BIAN Foundation | BIAN Services | Foundation | $600–$800 | 2 days training | Banking IT architects |

---

## Appendix B: Architecture vs. Related Paths

**If you're interested in this domain but unsure of fit:**

- **Engineer → Architect (this path):** Design thinking, communication across silos, trade-off analysis, strategic vision.
- **Engineer → DevOps/SRE:** Operations, reliability, deployment automation, observability.
- **Engineer → Manager:** People leadership, hiring, career development, P&L responsibility.
- **Engineer → Specialist (Security, Data, Network):** Deep domain expertise, certifications, thought leadership.

Architecture requires breadth *and* depth: technical chops + communication + business acumen. If you prefer pure coding or deep specialization, DevOps/SRE or specialist paths may be better fit.

---

**End of Deep Dive: DOM09 — Architecture Domain**

Last Updated: April 30, 2026  
Maintained By: IT Career Roadmap Project  
Citation & Accuracy: All claims verified against primary sources (vendor certifications, official frameworks, published books, current salary surveys).
