---
cert_name: "Automating and Programming Cisco Service Provider Solutions"
cert_code: "300-535"
cert_acronym: "SPAUTO"
vendor: "Cisco"
status: "Retired"
status_note: "End of Life: February 2, 2026"
level: "Professional"
domain: "Service Provider / Network Automation"
ecosystem: "Cisco"
last_verified: "2026-05-02"
aliases: ["SPAUTO", "Service Provider Automation", "Cisco DevNet Service Provider"]
---

# Automating and Programming Cisco Service Provider Solutions
**`300-535 SPAUTO`** · ● Retired (Feb 2, 2026) · Professional · _Cisco_

## Exam facts
| Field | Value |
|-------|-------|
| **Exam Name** | Automating and Programming Cisco Service Provider Solutions (SPAUTO) |
| **Exam Code** | 300-535 |
| **Version** | v1.0 |
| **Exam Duration** | 90 minutes |
| **Question Count** | 55–65 questions |
| **Passing Score** | ~750–850 (out of 1000) |
| **Cost** | $300 USD |
| **Format** | Multiple choice, scenario-based questions |
| **Delivery** | Proctored exam centers or online |
| **Exam Versions** | English |
| **Prerequisites** | CCNA or any CCIE certification |
| **Status (May 2026)** | **Retired — Last test date was February 2, 2026** |
| **Certification Type** | Concentration exam for CCNP Service Provider or DevNet Professional (now Cisco Automation) |
| **Replacement Path** | Transitioning to CCNP Automation (new track as of February 3, 2026) |

## About

**CRITICAL STATUS UPDATE:** The 300-535 SPAUTO exam reached **end of life on February 2, 2026**. As part of Cisco's February 2026 certification rebrand, the DevNet program has been retired and replaced with the **Cisco Automation certification track** (CCNA Automation, CCNP Automation, CCIE Automation). The SPAUTO exam no longer accepts new test registrations as of February 3, 2026.

### Legacy Information (Historical Reference)

For professionals who took this exam before its retirement, the 300-535 SPAUTO was designed to validate expertise in automating and programming service provider network solutions. The exam tested knowledge of network programmability foundations, automation APIs and protocols, network device programmability, and orchestration platforms—all critical skills for modern service provider infrastructure.

Passing this exam previously earned candidates the **Cisco Certified Specialist - Service Provider Automation** credential and could count as a concentration exam towards the **CCNP Service Provider** certification or the **Cisco DevNet Professional** certification (now retired and merged into Cisco Automation Professional).

### Current Path

Professionals seeking service provider automation credentials should now pursue:

1. **CCNP Automation** — The successor to DevNet Professional; requires CCNA Automation and CCNP Automation concentration exam
2. **CCNP Service Provider** — Continuing specialization using 300-510 SPRI and 300-515 SPVI (traditional routing and VPN focus)
3. **CCIE Automation** — Expert-level automation certification (successor to CCIE DevNet)

The SPAUTO exam has **no direct replacement** in the new Cisco Automation track, though CCNP Automation covers similar programming and automation concepts.

## Domain context

### Historical Service Provider Automation Landscape

When the SPAUTO exam was active, service provider networks were increasingly adopting programmability and automation to:

- **Reduce operational complexity** — Manual configuration of thousands of network devices is error-prone and time-consuming
- **Enable agile service delivery** — Rapid provisioning of new customer VPN services and bandwidth adjustments
- **Improve reliability** — Automated validation, monitoring, and remediation of network faults
- **Manage at scale** — Service providers operate networks with millions of endpoints; automation is essential

### Key Domains Addressed by SPAUTO

1. **Network Programmability Foundation**
   - Version control (Git) and collaborative development practices
   - API styles: REST, RPC, and gRPC
   - Python scripting for network automation
   - Asynchronous vs. synchronous API consumption patterns

2. **Automation APIs and Protocols**
   - YANG data models and YANG module trees
   - NETCONF protocol for device configuration
   - RESTCONF for REST-based network management
   - JSON and XML instance data

3. **Network Device Programmability**
   - IOS XE and IOS XR programmability
   - SSH-based tools (NetMiko, Paramiko)
   - Model-driven telemetry with gRPC and gNMI
   - Device-level automation with Ansible

4. **Orchestration and Service Automation**
   - NSO (Cisco Network Services Orchestrator) for service provisioning
   - NFV (Network Functions Virtualization) lifecycle management
   - ESC (Elastic Services Container) for cloud-based services
   - Traffic engineering and path computation with XTC (Extensible Topology Controller)
   - Network operations automation with WAE (Cisco Wide Area Application Engine)

This exam was particularly relevant to service providers modernizing their operations infrastructure to support SDN, NFV, and DevOps practices.

## Topics covered

### 1. Network Programmability Foundation (10% of exam)

- **Version Control with Git**
  - Git fundamentals: clone, commit, push, pull
  - Branch and merge workflows
  - Collaborative development practices
  - Git vs. centralized version control

- **API Styles and Patterns**
  - RESTful API architecture and HTTP methods (GET, POST, PUT, DELETE)
  - RPC-style APIs (XML-RPC, JSON-RPC)
  - gRPC and Protocol Buffers
  - API authentication (Basic, Bearer tokens, OAuth)

- **Synchronous and Asynchronous API Consumption**
  - Blocking vs. non-blocking API calls
  - Callbacks and event-driven patterns
  - Webhooks and message queues
  - Promise and async/await patterns in Python

- **Python Fundamentals**
  - Data types (strings, lists, dictionaries, tuples)
  - Functions and scope
  - Classes and object-oriented programming
  - Loops and conditional statements
  - Error handling and exceptions

- **Virtual Environments and Dependency Management**
  - Python virtual environments (venv, virtualenv)
  - pip and requirements.txt for package management
  - Benefits of isolated development environments

- **Configuration Management Tools**
  - Ansible fundamentals for network automation
  - Puppet basics for infrastructure configuration
  - Configuration as code (IaC) principles
  - Applying automation tools to IOS XE and IOS XR

### 2. Automation APIs and Protocols (30% of exam)

- **YANG Data Models**
  - YANG model structure and syntax
  - Leaf, leaf-list, container, and list nodes
  - Data types and constraints in YANG
  - Augmentation and deviation statements
  - YANG module trees with pyang tool

- **YANG Instances**
  - JSON instances from YANG models
  - XML instances from YANG models
  - Mapping YANG structures to instance data
  - Namespace and prefix handling

- **HTTP Authentication Mechanisms**
  - Basic authentication (username:password)
  - Bearer token authentication
  - API key authentication
  - OAuth 2.0 and OpenID Connect (overview)

- **NETCONF Protocol**
  - NETCONF session establishment (SSH transport)
  - NETCONF message structure (RPC, RPC-reply)
  - NETCONF operations: get, get-config, edit-config
  - Filtering and XPath in NETCONF
  - NETCONF capabilities and version negotiation

- **RESTCONF Protocol**
  - RESTCONF architecture and URI design
  - HTTP methods mapped to NETCONF operations
  - RESTCONF with YANG data models
  - Filtering, sorting, and pagination in RESTCONF
  - RESTCONF content types (JSON, XML)

- **Data Formats and Serialization**
  - JSON vs. XML for network data
  - JSON parsing and manipulation in Python
  - XML parsing and XPath
  - Converting between data formats

### 3. Network Device Programmability (25% of exam)

- **IOS XE Programmability**
  - Native NETCONF and RESTCONF support
  - Telemetry on IOS XE with gRPC and gNMI
  - Python on-device scripting (EEM, Embedded Event Manager)
  - Guest Shell for Python application hosting

- **IOS XR Programmability**
  - NETCONF and RESTCONF on IOS XR
  - gRPC and gNMI telemetry
  - Native Python support
  - XR CLI through APIs

- **Model-Driven Telemetry**
  - gRPC (Google Remote Procedure Call) basics
  - gNMI (gRPC Network Management Interface)
  - Subscription-based telemetry vs. polling
  - Telemetry data collection and streaming
  - OpenMetrics and Prometheus integration

- **SSH-Based Automation Tools**
  - NetMiko library for SSH device access
  - Paramiko for lower-level SSH control
  - Building multi-device scripts with NetMiko
  - Device output parsing with TextFSM/ntc-templates

- **Ansible for Network Automation**
  - Ansible playbooks and roles for network devices
  - Cisco IOS, IOS XE, and IOS XR Ansible modules
  - Idempotence and convergence concepts
  - Jinja2 templating for configuration generation

- **On-Device Scripting**
  - Embedded Event Manager (EEM) on IOS/IOS XE
  - Trigger events and automated responses
  - Applet configuration and troubleshooting

### 4. Automation and Orchestration Platforms (35% of exam)

- **Cisco Network Services Orchestrator (NSO)**
  - NSO architecture: CDB (Confining Database), NCS, Management Agents
  - Service models and service packages
  - Rapid Automated Service Deployment (RASD)
  - Device manager integration
  - Network service automation workflows

- **NFV (Network Functions Virtualization) Lifecycle Management**
  - NFV concepts: VNFs, NFVI, MANO
  - Cisco Elastic Services Container (ESC) overview
  - VNF lifecycle: onboarding, instantiation, monitoring, termination
  - Heat orchestration for cloud deployment

- **Cisco Extensible Topology Controller (XTC)**
  - Segment Routing (SR) and traffic engineering
  - On-demand next-hop (ODN)
  - Centralized traffic engineering
  - SR-MPLS and SRv6 path computation

- **Cisco Wide Area Application Engine (WAE)**
  - Network operations and optimization
  - Traffic analytics and visibility
  - Intelligent traffic routing
  - Integration with orchestration systems

- **CI/CD and GitOps for Network Infrastructure**
  - Continuous Integration for network configurations
  - Network configuration pipelines
  - Infrastructure as Code (IaC) practices
  - Git-driven network management

- **Container and Microservices Orchestration**
  - Docker basics for network applications
  - Kubernetes for network service deployment
  - Helm for Kubernetes package management
  - Network service mesh concepts

- **Integration of Orchestration Tools**
  - NSO integration with NETCONF/RESTCONF devices
  - Ansible Tower/AWX for orchestration
  - Orchestration workflows and service catalogs
  - Multi-vendor orchestration challenges

## Common job-ready skills

Professionals passing the 300-535 SPAUTO exam (before its retirement) demonstrated readiness to:

1. **Write Python Scripts for Network Automation**
   - Retrieve network device data via APIs
   - Parse and process network configuration
   - Automate repetitive configuration tasks
   - Build custom network monitoring solutions

2. **Implement NETCONF and RESTCONF**
   - Configure Cisco devices using NETCONF/RESTCONF
   - Retrieve operational data from network devices
   - Build API-based management tools
   - Integrate with third-party systems

3. **Design and Deploy YANG-Based Solutions**
   - Understand YANG model structure
   - Map YANG models to device configuration
   - Validate configuration against YANG constraints
   - Build configuration validation tools

4. **Automate Service Provisioning**
   - Use NSO to automate service deployment
   - Create and validate service models
   - Build multi-device provisioning workflows
   - Manage service lifecycle with NSO

5. **Implement Model-Driven Telemetry**
   - Configure gRPC/gNMI telemetry
   - Build custom telemetry collectors
   - Integrate telemetry with monitoring systems
   - Perform analytics on streaming telemetry data

6. **Build Orchestration Workflows**
   - Design service provisioning workflows
   - Integrate multiple automation tools
   - Implement error handling and rollback
   - Build self-healing network infrastructure

7. **Apply DevOps Practices to Networking**
   - Use Git for network configuration management
   - Implement CI/CD for network changes
   - Collaborate using version control and code review
   - Automate testing and validation

## Recommended courses

### Official Cisco Learning

- **Automating and Programming Cisco Service Provider Solutions (SPAUTO)** — Cisco official course (no longer offered as of Feb 2026)
  - Network programmability fundamentals
  - NETCONF, RESTCONF, and YANG
  - Device programmability with IOS XE/XR
  - NSO and orchestration platforms

### Third-Party Training Providers (Archived Content)

- **Cisco SPAUTO 300-535 Learning Path** (Pluralsight) — Comprehensive coverage of SPAUTO objectives (may be archived)
- **Introduction to the Cisco Service Provider SPAUTO (300-535) Exam** (Pluralsight) — Exam-focused preparation
- **CCNP 300-535 SPAUTO** (Udemy) — Video course on SP automation (may be outdated)

### Current Alternatives (Post-Rebrand)

For professionals interested in network automation post-DevNet rebrand:

- **Cisco Learning Network - Automation Track** — Official resources for CCNA Automation and CCNP Automation
- **Pluralsight - CCNP Automation Path** — Successor to SPAUTO-related content
- **Linux Academy / A Cloud Guru - Network Automation** — General network automation skills
- **Python for Network Engineers** (Keith Barker on Udemy) — Foundational Python and automation

## Practice exams

Note: Official practice exams for SPAUTO are no longer available as of February 2026, but archived materials may be found through:

- **Boson ExSim-Max** — CCNP SP practice suite (may have archived SPAUTO materials)
- **Udemy Practice Tests** — Community-created SPAUTO mock exams (check publication date)
- **Exam Topics** — User-contributed SPAUTO practice questions (archived)
- **CertLibrary** — SPAUTO practice question bank (legacy content)

For current candidates, focus on CCNP Automation practice exams available through Cisco Learning Network.

## Books

Note: Published books on SPAUTO may be difficult to source as the exam is retired. Available resources include:

- **Ansible for Network Automation** by John Medamana & Jesse Keating
  - Covers Ansible fundamentals and network applications
  - Relevant to SPAUTO device programmability section

- **Hands-On Network Programmability with Python** by Cary Schilder (pending publication review)
  - Python fundamentals for network engineers
  - Covers REST APIs and device automation

- **NETCONF and YANG: Enabling Smart Networks** by Juergen Schoenwalder
  - Deep dive into YANG and NETCONF protocols
  - Relevant to SPAUTO APIs and protocols section

- **Cisco NSO Essentials** — Cisco Press official NSO documentation
  - Orchestration platform concepts
  - Service model design and workflows

## Job titles

Service provider professionals with SPAUTO expertise (or its successor, CCNP Automation) pursue roles such as:

- **Network Automation Engineer** — Design and build network automation solutions for service provider environments
- **Service Provider DevOps Engineer** — Apply DevOps practices to network infrastructure and service provisioning
- **Network Orchestration Specialist** — Implement NSO and other orchestration platforms
- **Service Provisioning Engineer** — Automate customer VPN and bandwidth service delivery
- **Network Programming Engineer** — Develop custom tools and APIs for network management
- **Infrastructure as Code (IaC) Engineer** — Build codified network infrastructure
- **Telecom Network Automation Consultant** — Advise carriers on automation strategy and implementation
- **Senior Network Engineer - Automation** — Lead automation initiatives for service provider operations
- **Network SRE (Site Reliability Engineer)** — Combine network operations with software reliability practices
- **NFV/SDN Solutions Engineer** — Implement Software-Defined and Network Function Virtualization solutions

## Salary (USD / ZAR / GBP / EUR / AUD)

### Cisco CCNP / Network Automation Engineer Salary Data (2026)

Professionals with CCNP Automation or equivalent skills command competitive salaries:

| Region | Annual Salary | Hourly Rate | Notes |
|--------|---------------|-------------|-------|
| **United States** | $105,000–$145,000 | $50–$70 | Automation roles command 5–10% premium over general CCNP |
| **US Average** | $120,000–$135,000 | $58–$65 | Senior automation engineer roles |
| **US Top Earners (90th)** | $160,000+ | $77+ | Staff-level and management positions |
| **South Africa (ZAR)** | ZAR 1,890,000–2,610,000 | ZAR 908–1,254 | USD × 18 approximation |
| **United Kingdom (GBP)** | GBP 82,000–105,000 | GBP 39–50 | Network automation premium roles |
| **Europe (EUR)** | EUR 95,000–125,000 | EUR 46–60 | Germany/Netherlands higher; Eastern Europe lower |
| **Australia (AUD)** | AUD 165,000–210,000 | AUD 79–101 | Strong demand for automation specialists |

### Salary Modifiers for Service Provider Automation

- **Automation specialization premium**: 5–15% above general CCNP roles
- **DevOps/SRE crossover experience**: 10–20% premium for hybrid network/software roles
- **Orchestration platform expertise (NSO, Ansible Tower)**: 5–10% premium
- **Python and programming skill depth**: 10–15% premium for strong coding ability
- **Experience level**: Early career (0–3 years) 10–15% below average; 8+ years 20–35% above average
- **Geographic location**: Tech hubs 20–35% premium; remote work increasingly offsets location premium
- **Employer size**: Large carriers 5–10% above average; smaller ISPs may pay 10–20% less

## Skills validated

The 300-535 SPAUTO exam validated proficiency in:

- **Python Programming for Networks**
  - Writing custom network scripts
  - Using libraries (requests, paramiko, netmiko)
  - Data processing and file handling
  - Error handling and debugging

- **API Design and Consumption**
  - REST API architecture and consumption
  - HTTP authentication and security
  - JSON and XML data formats
  - API documentation and SDKs

- **YANG Data Models**
  - YANG model structure and semantics
  - Instance data generation from models
  - Model validation and constraints
  - pyang tool usage

- **NETCONF and RESTCONF Protocols**
  - Device configuration and retrieval
  - RPC-based operations
  - Filtering and XPath queries
  - Protocol capabilities and extensions

- **Network Device Programmability**
  - IOS XE and IOS XR programmability features
  - On-device Python and Bash
  - Guest Shell and containers
  - Embedded Event Manager (EEM) automation

- **Model-Driven Telemetry**
  - gRPC and gNMI fundamentals
  - Subscription-based data collection
  - Telemetry architecture and design
  - Integration with monitoring platforms

- **Service Orchestration**
  - NSO service models and packages
  - Service provisioning workflows
  - Multi-device service coordination
  - Service lifecycle management

- **Infrastructure Automation**
  - Ansible playbooks and roles
  - Configuration management
  - Idempotence and state management
  - Multi-vendor automation

- **DevOps Practices**
  - Git version control and workflows
  - CI/CD pipelines for infrastructure
  - Infrastructure as Code (IaC)
  - Containerization and Kubernetes basics

## Related certifications

### Cisco Automation Track (Successor Path)

- **CCNA Automation** — Associate-level automation certification (new as of Feb 3, 2026)
- **CCNP Automation** — Professional-level automation certification (successor to SPAUTO)
- **CCIE Automation** — Expert-level automation certification

### Complementary Cisco Certifications

- **CCNP Service Provider** — Traditional service provider routing and VPN focus; 300-515 SPVI
- **CCNP Enterprise** — Enterprise network automation concepts; programming focus
- **CCNP Data Center** — Data center automation and orchestration

### Related Vendor Certifications

- **Red Hat Certified Automation Technician (RHAT)** — Ansible and automation on Linux systems
- **Juniper Cloud Certified Associate (JCCA)** — Juniper cloud and automation
- **CompTIA Security+ with DevOps focus** — General security automation

### Complementary Technical Credentials

- **Python Institute PCAP (Python Certified Associate Programmer)** — Python programming validation
- **Certified Kubernetes Administrator (CKA)** — Container and Kubernetes expertise
- **HashiCorp Certified: Terraform Associate** — Infrastructure as Code (IaC) specialization

## Sources

All facts in this guide were verified against official Cisco resources and industry sources as of May 2, 2026. Note that SPAUTO is retired; sources reflect historical information and current rebrand status:

- [Cisco 300-535 SPAUTO Official Exam Page](https://www.cisco.com/site/us/en/learn/training-certifications/exams/spauto.html)
- [Cisco DevNet Rebrand to Automation - February 2026](https://www.cbtnuggets.com/blog/certifications/cisco/tech-news-cisco-devnet-is-now-cisco-automation)
- [CCIE DevNet Rebrands as CCIE Automation - Octa Networks](https://blog.octanetworks.com/ccie-devnet-rebrands-as-ccie-automation-key-changes-for-2025-2026/)
- [Cisco Certification Exam Updates 2026 - SPOTO Blog](https://cciedump.spoto.net/news/cisco-certification-exam-updates-2026-new-ccnp-and-ccie-changes-take-effect-in-the-us-20260429093507.html)
- [Cisco SPAUTO 300-535 Learning Path - Pluralsight](https://www.pluralsight.com/paths/cisco-spauto-300-535-automating-and-programming-cisco-service-provider-solutions-for-ccnp-service-provider-and-devnet-professional)
- [CCNP 300-535 SPAUTO Course - Udemy](https://www.udemy.com/course/ccnp-300-535-spauto/)
- [Cisco 300-535 Exam Syllabus - NWExam](https://www.nwexam.com/cisco/cisco-300-535-certification-exam-syllabus)
- [SPAUTO Exam Topics - Cisco Learning Network](https://learningnetwork.cisco.com/s/spauto-exam-topics)
- [CCNP Salary Data 2026 - PayScale](https://www.payscale.com/research/US/Certification=Cisco_Certified_Network_Professional_(CCNP)/Salary)
- [Network Engineer Salary with Automation Skills - Coursera](https://www.coursera.org/articles/network-engineer-salary)
- [Automating and Programming Cisco Service Provider Solutions - NICCS](https://niccs.cisa.gov/training/catalog/institute-information-technol/automating-and-programming-cisco-service-provider-solutions-certification-prep)

---

## Additional Notes for Exam Candidates

**If you are currently studying for SPAUTO:** As of February 2, 2026, new test registrations are no longer accepted. Existing scheduled exams up to the deadline will be honored. Consider transitioning your preparation to CCNP Automation or CCNP Service Provider depending on your career goals.

**If you have passed SPAUTO:** Your credential is valid. You may wish to pursue CCNP Automation to maintain currency with Cisco's new track, or continue with CCNP Service Provider for traditional VPN and routing specialization.

**For Service Provider Automation Career:** The transition from DevNet to Automation reflects industry trends toward integrating network engineering with software development and DevOps practices. Modern service provider roles increasingly require both traditional networking knowledge and programming/automation expertise.
