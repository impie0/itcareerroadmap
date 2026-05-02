# BeyondTrust: Privileged Access Management Ecosystem Deep Dive

**Revision:** A  
**Last updated:** April 2026  
**Domain:** Identity & Access Management (IAM), Privileged Access Management (PAM)

---

## 1. Company Snapshot

### History & Founding

BeyondTrust traces its origins to **1985 as Symark** in Los Angeles' San Fernando Valley, founded by Bob Sommers and Doug Yarrow. The company was later renamed to BeyondTrust in 2009. A parallel company, **Bomgar**, was founded to serve the remote support market and became the leading provider in secure remote access and support.

In **April 2018**, investment firm **Francisco Partners acquired Bomgar** from Thoma Bravo and subsequently renamed it **BeyondTrust**, consolidating the identity and remote access business units under one brand [Wikipedia: BeyondTrust](https://en.wikipedia.org/wiki/BeyondTrust).

### Current Ownership

In **June 2021**, **Clearlake Capital Group** made a significant equity investment in BeyondTrust, joining **Francisco Partners** as institutional co-shareholders. This strategic investment accelerated the company's product expansion and global market reach [Clearlake Capital: BeyondTrust Transaction](https://clearlake.com/beyondtrust-completes-transaction-with-clearlake-capital-and-francisco-partners/).

### Headquarters

- **Primary:** 11695 Johns Creek Parkway, Duluth, Georgia (Atlanta metro)
- **Secondary operations:** Carlsbad, California

### Leadership (2025-2026)

**CEO: Janine Seebeck** (as of current leadership roster)  
Seebeck oversees strategy, product vision, and executive operations for the firm.

Previous CEO Matt Dircks led the company during the Clearlake investment announcement in 2021. Seebeck represents the current operational leadership through 2026.

### Current Status (2025-2026)

BeyondTrust is a **private company** backed by two premier PE firms (Francisco Partners and Clearlake Capital). The company continues to expand its product portfolio with AI-native capabilities, demonstrated by the launch of **PathfinderAI** in April 2026, and has achieved **FedRAMP High authorization** for government customers. The firm maintains strong market position in Gartner's Magic Quadrant, competing directly with CyberArk and Delinea as a Leader in Privileged Access Management.

---

## 2. Product Portfolio

BeyondTrust operates a **unified Pathfinder Platform** that consolidates all its PAM and identity security offerings into a single pane of glass [BeyondTrust Pathfinder Platform](https://www.beyondtrust.com/products).

### Core Products

#### **Privileged Remote Access (PRA)**

Secure remote access platform enabling privileged users to connect to Windows, Mac, and Linux systems from any device (desktop or mobile via iOS/Android apps).

- **Agent-based and agentless deployment options** for maximum flexibility
- **Just-in-time (JIT) access control** with MFA enforcement per-session
- Real-time **session recording and monitoring** via proxy service for SSH and RDP connections
- Desktop-quality performance through native client applications
- Cloud-native deployment with on-premises options available

Reference: [BeyondTrust Privileged Remote Access](https://www.beyondtrust.com/products/privileged-remote-access)

#### **Password Safe**

Comprehensive credential management and vaulting solution for privileged accounts, secrets, SSH keys, and API credentials.

- **Automatic discovery, onboarding, vaulting, and rotation** of credentials and secrets
- Support for **non-human identities:** AI agents, bots, automation scripts, and machine service accounts
- **Just-in-time credential injection** directly into remote sessions without user exposure
- Team password sharing for collaborative workflows
- Cross-platform secret management across hybrid environments

Reference: [BeyondTrust Password Safe](https://www.beyondtrust.com/products/password-safe)

#### **Privilege Management for Windows / Mac / Unix-Linux**

Operating system-level privilege elevation and application whitelisting.

- **Application elevation** for real-user credentials (privilege escalation without sharing admin passwords)
- **Endpoint privilege management (EPM)** reducing attack surface via least-privilege enforcement
- **Policy-based execution control** on managed endpoints
- Integration with Password Safe for seamless credential handling on remote password changes

Reference: [BeyondTrust Privilege Management for Windows](https://www.beyondtrust.com/blog/entry/privilege-management-for-windows-now-integrates-with-password-safe-plus-password-safe-introduces-team-passwords)

#### **Identity Security Insights**

BeyondTrust's identity threat detection and response (ITDR) platform launched in 2024-2025.

- **Unified visibility** into human and non-human identities (users, service accounts, AI agents)
- **Hidden Paths to Privilege** discovery and risk assessment
- **Secrets Insights module** (August 2025): auto-detects and assesses exposed secrets across hybrid environments
- **AI & Agent Identity Governance:** visibility into machine and AI agents with elevated access
- **Compliance dashboards:** MITRE ATT&CK and NIST 800-53 aligned controls
- Free **Identity Security Risk Assessment** with 24-hour findings turnaround

Reference: [BeyondTrust Identity Security Insights](https://www.beyondtrust.com/products/identity-security-insights)

#### **Cloud Privilege Broker (CPB)**

Cloud infrastructure entitlement management (CIEM) and cloud identity governance.

- Privilege discovery and least-privilege enforcement across AWS, Azure, GCP
- **Zero-standing privilege** for cloud workloads via temporary credential injection
- Integration with Identity Security Insights for unified cloud + on-premises visibility

#### **BeyondInsight Platform**

Centralized reporting, analytics, and management console.

- **PAM reporting and analytics** across all BeyondTrust deployments
- **Privilege threat intelligence** aggregation and alerting
- **Session forensics** with searchable logs and video recordings
- Multi-instance management (U-Series appliance architecture)

Reference: [BeyondTrust BeyondInsight](https://www.beyondtrust.com/beyondinsight)

#### **Privileged Session Management (PSM)**

Real-time session monitoring and recording subsystem.

- **Video recording** of every privileged session (SSH, RDP, database, custom protocols)
- **Session search** with timeline scrubbing and audit compliance
- **Just-in-time approval** workflows with multi-stage authorization
- **Connection policy enforcement** (allowed protocols, IP restrictions, time-windows)

Reference: [BeyondTrust Privileged Session Management](https://www.beyondtrust.com/products/password-safe/features/privileged-session-management)

#### **Remote Support (Legacy, Modernized)**

Secure remote support and unattended access software (modern successor to Bomgar).

- Support technician access with secure session tunneling
- Real-time audio/chat during support sessions
- Granular RBAC controls and FIDO2 authentication
- Latest: Remote Support 26.1 (2026) with in-session sound sharing, Command API 2.0, SAML Single Logout

Reference: [BeyondTrust Remote Support 26.1 Release](https://www.beyondtrust.com/webinars/whats-new-remote-support-26.1-release)

#### **PathfinderAI (April 2026 Launch)**

AI-native identity security operations platform.

- **Agentic AI infrastructure** for automated investigation, enrichment, and correlation of security data
- Real-time behavior analysis and threat correlation across identity systems
- Auto-remediation workflows for privilege violations and suspicious access patterns
- Integration with existing BeyondTrust products via unified Pathfinder Platform

Reference: [BeyondTrust Launches PathfinderAI](https://www.globenewswire.com/news-release/2026/04/27/3281665/0/en/BeyondTrust-Launches-PathfinderAI-to-Power-AI-Native-Identity-Security-Operations.html)

---

## 3. Technical Architecture

### Deployment Models

#### **On-Premises (U-Series Appliance)**

BeyondTrust's flagship infrastructure deployment model:

- **Dedicated hardware appliances** (U-Series) providing centralized control, reporting, and session management
- **Distributed role architecture:** primary appliance hosts reporting and management; secondary appliances distribute event servers and session recording infrastructure
- **Fault-tolerant clustering** via shared database and orchestration
- **Full air-gap support** for environments with no internet connectivity
- Capacity scaling from small (100-500 users) to enterprise (50,000+ privileged accounts)

Reference: [BeyondTrust EPM & BeyondInsight Installation Guide](https://docs.beyondtrust.com/epm-wm/v25.2/docs/beyondinsight-and-epm-installation-guide)

#### **Cloud-Native (SaaS)**

Fully managed deployment with reduced operational overhead:

- **Cloud Vault:** managed credential storage with just-in-time injection into Password Safe sessions
- **Infrastructure requirements:** minimal (no on-premises appliances required)
- **Automatic patching and updates** by BeyondTrust
- **FedRAMP High authorization** for government and regulated cloud deployments (achieved October 2025)
- **AWS and Azure native integrations** via Pathfinder Platform

Reference: [BeyondTrust Cloud Vault](https://www.beyondtrust.com/products/privileged-remote-access/features/cloud-vault)

### Agent vs. Agentless Architecture

**Agent-Based Privilege Management:**
- Privileged Remote Access agents installed on target systems (Windows, Mac, Linux)
- Provides deep endpoint visibility and real-time privilege enforcement
- Enables granular least-privilege policies at the application level

**Agentless Approaches:**
- **Password Safe client-less deployment:** no server-side agents required; credentials managed entirely in the vault
- **SSH/RDP shell access** without requiring agent installation on target systems
- Supports hybrid environments with both agent-based and agentless controls

Reference: [BeyondTrust Total PASM Bundle](https://www.beyondtrust.com/products/total-pasm)

### Core Architectural Components

#### **Vault Engine**

Centralized, encrypted credential repository:

- **Secrets management** for passwords, SSH keys, API credentials, certificates, and database connection strings
- **Automatic rotation** via integration with target systems (AD, Linux, cloud providers, vaults)
- **Audit trail** with full access history and policy violation logging
- **Hardware security module (HSM) support** for regulatory compliance (FIPS 140-2, Common Criteria)

#### **Session Proxy (Bastion / Jump Server)**

Transparent session interception and monitoring:

- **Protocol translation** between client (RDP/SSH) and target system
- **Real-time monitoring** and alerting on privileged actions
- **Command injection prevention** via policy filtering
- **One-time password (OTP) enforcement** and MFA integration

#### **Just-in-Time (JIT) Access Control**

Temporary privilege elevation and credential issuance:

- **On-demand access requests** with manager approval workflows
- **Time-limited credentials** (5 minutes to 8 hours) that auto-expire
- **MFA per-session** enforcement reducing reliance on standing privileges
- **Conditional access policies** based on time, location, device posture, and risk score

Reference: [BeyondTrust Privilege Management for Windows Integration](https://www.beyondtrust.com/blog/entry/privilege-management-for-windows-now-integrates-with-password-safe-plus-password-safe-introduces-team-passwords)

#### **Session Recording & Forensics**

Video and command-level audit trail:

- **Frame-accurate video recording** of all RDP and SSH sessions
- **Command logging** for shell sessions with searchable transcripts
- **Timeline-based playback** with jump-to-moment capability
- **Export and retention** for legal holds, regulatory audits, and incident investigation

Reference: [BeyondTrust Privileged Session Management](https://www.beyondtrust.com/products/password-safe/features/privileged-session-management)

#### **Identity Security Insights (ITDR Engine)**

AI-powered risk detection and correlation:

- **Identity risk scoring** across users, service accounts, and machines
- **Secrets detection** (exposed API keys, passwords in logs, git repositories)
- **Behavior analytics** on authentication patterns, privilege usage, and access anomalies
- **Hidden Paths to Privilege** mapping (chain of escalations leading to critical systems)
- **AI agent governance** visibility into automated scripts and ML service accounts

Reference: [Identity Security Insights Documentation](https://docs.beyondtrust.com/insights/docs/rn-identity-security-insights)

---

## 4. Competitive Position

### Gartner Magic Quadrant (2025)

BeyondTrust holds a **Leader position** in the Gartner Magic Quadrant for Privileged Access Management, evaluated on both:

1. **Completeness of Vision** (Y-axis): Ranked **3rd** (bronze)
   - CyberArk leads with most complete vision for comprehensive PAM strategy
   - Delinea in silver position
   - BeyondTrust holds strong vision for breadth of use cases

2. **Ability to Execute** (X-axis): Ranked **4th**
   - Arcon leads execution capability
   - Delinea holds 2nd place
   - CyberArk in 3rd place
   - BeyondTrust and ManageEngine rounded out execution leaders

**Leadership Stability:** CyberArk, Delinea, and BeyondTrust have maintained the Leaders quadrant for four consecutive years (2022-2025) with consistent performance and focus on execution. Gartner notes that the Leaders' sustained position reflects slower progress by rivals, particularly in SaaS offerings.

Reference: [Gartner Magic Quadrant for PAM 2025](https://www.beyondtrust.com/resources/gartner-magic-quadrant-for-pam)

### Direct Competitors

#### **CyberArk**
- Market leader by vision completeness; strong in SaaS transformation
- Emphasis on DevOps/application access; broader industry adoption
- Higher average contract value (ACV) and enterprise focus

#### **Delinea** (formerly Thycotic / Secret Server)
- Agile, feature-rapid development cycle
- Strong in SMB and mid-market segments
- Competitive pricing and flexible deployment models

#### **One Identity (Safeguard)** / **Quest Software**
- Enterprise Active Directory and hybrid IAM integration
- Strong on Windows server environments
- Legacy customer base with modernization efforts

#### **HashiCorp Vault**
- Developer-focused secrets management
- Cloud-native and DevOps positioning
- Lacks integrated PAM (session management, MFA enforcement)

#### **Saviynt**
- Identity Governance and Administration (IGA) + PAM positioning
- Strong in GRC and compliance reporting
- Cloud-first architecture

### BeyondTrust Differentiation

1. **Unified Pathfinder Platform:** All products under single login, reducing operational fragmentation
2. **PathfinderAI (2026):** AI-native operations reducing manual analyst effort
3. **Non-Human Identity Focus:** Explicit support for AI agents, bots, and automation scripts
4. **Secrets Insights (2025):** Dedicated secrets detection module vs. competitors' general ITDR
5. **FedRAMP High:** Complete government cloud authorization (October 2025) ahead of several competitors
6. **Frictionless MFA:** Per-session MFA reducing user friction vs. password-gate models

---

## 5. Certifications & Professional Credentials

### BeyondTrust Certified Professional (BCP)

**Official credential:** BeyondTrust Certified Professional (BCP)

#### Exam Structure

- **Passing score:** 75% or higher
- **Delivery:** Online proctored through BeyondTrust University
- **Prerequisites:** Completion of instructor-led training (ILT) course in specific product track

#### Available Certification Tracks

1. **Password Safe Administration**
2. **Privileged Remote Access (PRA) Administration**
3. **Endpoint Privilege Management for Windows (EPM-W)**
4. **Identity Security Insights Administration** (launched 2025)

Each track requires:
- 1-3 day instructor-led training course
- Hands-on lab exercises
- Final certification exam

#### Exam Cost

- **Pricing not publicly listed;** typically bundled with training subscription
- **Availability:** Requires customer relationship or partner enrollment
- Organizations typically engage **BeyondTrust Professional Services** for training delivery

Reference: [BeyondTrust University Certification](https://www.beyondtrust.com/services/beyondtrust-university/get-certified)

#### Learning Resources

- **Official documentation:** [BeyondTrust Docs Portal](https://docs.beyondtrust.com/)
- **Online courses:** Self-paced modules available through BeyondTrust University
- **Hands-on labs:** Cloud-hosted lab environments for practice
- **Webinar series:** Monthly training sessions on product features and best practices

Reference: [BeyondTrust University](https://www.beyondtrust.com/services-training/beyondtrust-university)

#### Partner Certifications

- **AWS Competency:** BeyondTrust holds AWS PAM Competency designation
- **Azure Expert MSP:** BeyondTrust certified for Azure identity solutions
- **Ping Identity Integration:** Co-certification programs with Ping Identity

### Related Industry Certifications Aligned with BeyondTrust

Professionals pursuing BeyondTrust specialist roles typically hold:

- **CISSP** (Certified Information Systems Security Professional) — broader security foundation
- **CCSK** (Certified Cloud Security Knowledge) — cloud identity focus
- **GIAC LAIM** (Secure IAM Architect) — IAM architecture principles
- **Certified Information Security Manager (CISM)** — IT risk and compliance
- **SANS SEC504** (Hacker Tools and Incident Handling) — hands-on security skills

---

## 6. Career Roles & Salary Ranges

### PAM Engineer (Product-Specific Role)

**Typical responsibilities:**
- Design and deploy BeyondTrust solutions (Password Safe, PRA, EPM) in enterprise environments
- Manage credential lifecycle, vault operations, and rotation policies
- Configure session recording, approval workflows, and least-privilege rules
- Integrate BeyondTrust with SIEM, ticketing systems, and IAM platforms
- Troubleshoot access issues and tune performance on privilege infrastructure

**Experience level:** Mid-career (5-10 years security/infrastructure)

**Salary range (USD):**
- Entry PAM Engineer: **$85,000 - $120,000/year**
- Mid-level PAM Engineer: **$120,000 - $155,000/year**
- Senior PAM Engineer / PAM Architect: **$155,000 - $200,000/year**

**Salary range (ZAR, South Africa):**
- Mid-level Security Engineer (PAM equivalent): **ZAR 520,000 - 850,000/year** (~$31,000-$51,000 USD at current rates)
- Senior PAM roles: **ZAR 850,000 - 1,350,000/year** (~$51,000-$81,000 USD)

Reference: [PayScale: Engineer Salary South Africa 2026](https://www.payscale.com/research/ZA/Job=Professional_Engineer/Salary); [Glassdoor: Engineer Salaries South Africa](https://www.glassdoor.com/Salaries/south-africa-engineer-salary-SRCH_IL.0,12_IN211_KO13,21.htm)

### Identity Access Management (IAM) Architect

**Typical responsibilities:**
- Enterprise-wide IAM strategy and roadmap (including PAM as a pillar)
- BeyondTrust platform selection, architecture, and deployment planning
- Integration with Okta, Ping Identity, Azure AD, and enterprise directories
- Risk assessment and least-privilege policy framework design
- Governance and compliance controls (SOX, HIPAA, ISO 27001, NIST)

**Experience level:** Senior (10+ years in security/IAM)

**Salary range (USD, 2025-2026):**
- IAM Architect (mid-level enterprise): **$145,000 - $165,000/year** average
- 25th percentile: **$131,000**
- 75th percentile: **$205,000+**
- 90th percentile (top earners): **$250,500+**

Reference: [Glassdoor: Identity Access Management Architect](https://www.glassdoor.com/Salaries/identity-access-management-architect-salary-SRCH_KO0,40.htm); [ZipRecruiter: IAM Architect Salary 2026](https://www.ziprecruiter.com/Salaries/Identity-Access-Management-Architect-Salary)

**Salary range (ZAR, South Africa):**
- Architect-level IAM roles: **ZAR 1,200,000 - 1,800,000/year** (~$72,000-$108,000 USD)

Based on South African engineering and architectural salary surveys.

---

## 7. Recent News & Security Incidents (2025-2026)

### US Treasury Department Breach (December 2024)

BeyondTrust disclosed a **critical security incident** affecting its Remote Support SaaS service that led to unauthorized access at the U.S. Department of the Treasury.

#### Timeline & Details

- **December 5, 2024:** BeyondTrust detected the incident and initiated incident response
- **December 8, 2024:** Public security advisory published
- **December 10, 2024:** Notification to FBI and federal law enforcement
- **December 14-15, 2024:** Emergency patching of Remote Support SaaS environments completed

#### Vulnerabilities Exploited

1. **CVE-2024-12356:** Unauthenticated command injection in Remote Support platform
   - Allowed execution of privileged commands without authentication
   - Enabled credential extraction and API key theft
   
2. **CVE-2024-12686:** Admin-level command injection flaw
   - Required admin privileges but allowed malicious file uploads
   - Used in lateral movement and persistence

Reference: [CISA BeyondTrust CVE-2024-12686](https://www.techtarget.com/searchsecurity/news/366618092/CISA-BeyondTrust-flaw-CVE-2024-12686-exploited-in-the-wild)

#### Impact

- **Affected systems:** ~400 Treasury Department laptops and desktop machines
- **Access method:** Compromised API keys from the Remote Support application
- **Suspected threat actor:** Chinese APT group (based on forensic analysis)
- **Data accessed:** Unclassified documents and system administration data

#### Treasury Department Response

- Mobilized incident response involving CISA, FBI, U.S. intelligence community, and third-party forensics firms
- Took compromised BeyondTrust service offline immediately
- Found **no evidence of continued unauthorized access** after patching
- Released incident briefing detailing timeline and mitigations

Reference: [CyberArk Blog: US Treasury Attack Analysis](https://www.cyberark.com/resources/blog/the-us-treasury-attack-key-events-and-security-implications); [Silverfort: Treasury Cyberattack Analysis](https://www.silverfort.com/blog/the-treasury-department-cyberattack-key-insights-on-beyondtrust-remote-support-software-hack/)

#### BeyondTrust Response

- **Third-party forensics engagement** to analyze scope of compromise
- **Revocation of all compromised API keys** and credential rotation
- **Infrastructure quarantine** for forensic analysis
- **Regular security bulletins** and customer notification program

Reference: [BeyondTrust Remote Support SaaS Security Investigation](https://www.beyondtrust.com/remote-support-saas-service-security-investigation)

### Identity Security Insights Expansion (2025)

**August 2025:** BeyondTrust announced **Secrets Insights** module, auto-detecting and assessing exposed secrets across hybrid environments.

**October 2025:** **FedRAMP High authorization** granted for BeyondTrust Identity Security Insights, enabling federal and state agencies to deploy on government cloud infrastructure.

**December 2025:** Strategic partnership with **Ping Identity** announced, combining BeyondTrust and Ping Identity solutions in AWS Marketplace for unified identity security.

Reference: [BeyondTrust Identity Security Insights FedRAMP](https://www.globenewswire.com/news-release/2025/10/22/3171174/0/en/BeyondTrust-Strengthens-FedRAMP-Authorized-Portfolio-with-Identity-Security-Insights-Advancing-Federal-Identity-Protection.html)

### PathfinderAI Launch (April 2026)

BeyondTrust launched **PathfinderAI**, an AI-native identity security operations platform.

**Key capabilities:**
- Agentic AI infrastructure automating investigation, enrichment, and correlation of identity risk signals
- Real-time behavior analysis across human and non-human identities
- Auto-remediation workflows for privilege violations
- Identity Security Risk Assessment delivers findings within 24 hours

Reference: [BeyondTrust Launches PathfinderAI](https://www.globenewswire.com/news-release/2026/04/27/3281665/0/en/BeyondTrust-Launches-PathfinderAI-to-Power-AI-Native-Identity-Security-Operations.html)

### 2025 Partnership & Integration Growth

BeyondTrust announced **8 new Identity Security Insights Webhooks** (Gitlab, Google GChat, Sumo Logic integrations) and expanded **AWS and Azure native integrations** throughout 2025.

Reference: [BeyondTrust 2025 Technology Alliances Recap](https://www.beyondtrust.com/blog/entry/top-tech-integrations)

---

## 8. Learning Path for BeyondTrust Specialization

### Foundation Phase (0-3 months)

1. **Prerequisite knowledge**
   - Active Directory and user provisioning (Windows-centric environments)
   - SSH and Linux access controls (for multi-platform PAM)
   - TCP/IP networking, VPN, and firewall concepts
   - Basic cryptography (encryption, hashing, digital signatures)

2. **Self-study resources**
   - BeyondTrust official documentation: https://docs.beyondtrust.com/
   - Pathway course: "Introduction to Privileged Access Management" (via BeyondTrust University)
   - CompTIA Security+ (ISC)² CCSK to establish baseline security knowledge

### Intermediate Phase (3-6 months)

1. **Product-specific training tracks** (choose one or more)
   - **Password Safe Administration:** credential management, vault operations, rotation policies
   - **Privileged Remote Access Administration:** session management, MFA, approval workflows
   - **Endpoint Privilege Management for Windows:** application elevation, endpoint protection

2. **Hands-on labs**
   - BeyondTrust free trial environments (up to 30 days)
   - Cloud-hosted lab environments via BeyondTrust University
   - Deploy on Docker/Kubernetes for development practice

3. **Reference implementations**
   - Case studies on BeyondTrust website for specific industries (finance, healthcare, federal)
   - Architecture whitepapers: https://www.beyondtrust.com/resources

### Advanced Phase (6-12 months)

1. **Integration and architecture**
   - SIEM integration (Splunk, Sentinel, QRadar, Chronicle)
   - IAM platform integration (Okta, Ping Identity, Azure AD, OneLogin)
   - ITSM ticketing (ServiceNow, Jira) and approval workflows

2. **Certification exam preparation**
   - Instructor-led training (ILT) course in chosen track
   - Practice exams and Q&A sessions
   - Real-world deployment scenarios from peers

3. **Advanced topics**
   - Identity Security Insights (ITDR) deep dive
   - Cloud privilege management and cloud-native architectures
   - Compliance automation (SOX, HIPAA, PCI DSS, NIST 800-53)

### Expert Phase (12+ months)

1. **Architect-level design**
   - Enterprise-scale deployments (10,000+ users, 100+ systems)
   - Multi-region redundancy and disaster recovery
   - Least-privilege policy frameworks for complex organizational hierarchies

2. **Advanced certifications**
   - BCP (BeyondTrust Certified Professional) certification
   - SANS SEC504 or GIAC LAIM for formal architecture training
   - AWS PAM Competency or Azure Expert MSP co-certifications

3. **Community engagement**
   - Beekeepers Community (BeyondTrust user group): https://www.beekeepers.community/
   - BeyondTrust forums and knowledge base contributions
   - Speaking at industry conferences (RSA, Black Hat, etc.)

---

## 9. Sources

1. [BeyondTrust Wikipedia](https://en.wikipedia.org/wiki/BeyondTrust) — Company history, founding, acquisition timeline
2. [Clearlake Capital: BeyondTrust Transaction](https://clearlake.com/beyondtrust-completes-transaction-with-clearlake-capital-and-francisco-partners/) — PE ownership and strategic investment
3. [BeyondTrust Company Overview & Leadership](https://www.beyondtrust.com/company/overview/leadership-team) — Current executive team and organizational structure
4. [BeyondTrust Pathfinder Platform](https://www.beyondtrust.com/products) — Unified product platform and product overview
5. [BeyondTrust Privileged Remote Access](https://www.beyondtrust.com/products/privileged-remote-access) — PRA product capabilities, deployment, and architecture
6. [BeyondTrust Password Safe](https://www.beyondtrust.com/products/password-safe) — Credential management, vaulting, and secrets handling
7. [BeyondTrust Privilege Management Integration](https://www.beyondtrust.com/blog/entry/privilege-management-for-windows-now-integrates-with-password-safe-plus-password-safe-introduces-team-passwords) — EPM and Password Safe integration
8. [BeyondTrust Identity Security Insights](https://www.beyondtrust.com/products/identity-security-insights) — ITDR platform, risk detection, secrets insights
9. [BeyondTrust Privileged Session Management](https://www.beyondtrust.com/products/password-safe/features/privileged-session-management) — Session recording, monitoring, forensics
10. [BeyondTrust EPM & BeyondInsight Installation Guide](https://docs.beyondtrust.com/epm-wm/v25.2/docs/beyondinsight-and-epm-installation-guide) — Technical architecture and deployment
11. [BeyondTrust Cloud Vault](https://www.beyondtrust.com/products/privileged-remote-access/features/cloud-vault) — Cloud-native deployment and credential injection
12. [BeyondTrust Total PASM Bundle](https://www.beyondtrust.com/products/total-pasm) — Product bundling, agent vs. agentless
13. [BeyondTrust BeyondInsight Reporting Platform](https://www.beyondtrust.com/beyondinsight) — Centralized PAM reporting and analytics
14. [BeyondTrust University Certification](https://www.beyondtrust.com/services/beyondtrust-university/get-certified) — Certification exams, tracks, and training prerequisites
15. [BeyondTrust University](https://www.beyondtrust.com/services-training/beyondtrust-university) — Official training portal and learning resources
16. [Gartner Magic Quadrant for PAM 2025](https://www.beyondtrust.com/resources/gartner-magic-quadrant-for-pam) — Competitive positioning and market analysis
17. [BankInfoSecurity: CyberArk, Delinea, BeyondTrust Lead Gartner MQ for PAM](https://www.bankinfosecurity.com/cyberark-delinea-beyondtrust-again-lead-gartner-mq-for-pam-a-26554) — 2025 Gartner Magic Quadrant leaders analysis
18. [BeyondTrust Remote Support SaaS Security Investigation](https://www.beyondtrust.com/remote-support-saas-service-security-investigation) — Official incident response and timeline
19. [CyberArk: US Treasury Attack Analysis](https://www.cyberark.com/resources/blog/the-us-treasury-attack-key-events-and-security-implications) — Treasury incident details and implications
20. [The Hacker News: Chinese APT Exploits BeyondTrust API Key](https://thehackernews.com/2024/12/chinese-apt-exploits-beyondtrust-api.html) — Threat actor analysis and CVE details
21. [Silverfort: Treasury Cyberattack Analysis](https://www.silverfort.com/blog/the-treasury-department-cyberattack-key-insights-on-beyondtrust-remote-support-software-hack/) — Attack vector and security implications
22. [TechTarget CISA: BeyondTrust CVE-2024-12686 Exploited](https://www.techtarget.com/searchsecurity/news/366618092/CISA-BeyondTrust-flaw-CVE-2024-12686-exploited-in-the-wild) — Vulnerability analysis and CISA alert
23. [BeyondTrust Identity Security Insights FedRAMP Authorization](https://www.globenewswire.com/news-release/2025/10/22/3171174/0/en/BeyondTrust-Strengthens-FedRAMP-Authorized-Portfolio-with-Identity-Security-Insights-Advancing-Federal-Identity-Protection.html) — Government cloud certification announcement
24. [BeyondTrust Launches PathfinderAI](https://www.globenewswire.com/news-release/2026/04/27/3281665/0/en/BeyondTrust-Launches-PathfinderAI-to-Power-AI-Native-Identity-Security-Operations.html) — AI-native identity operations platform launch
25. [BeyondTrust 2025 Technology Alliances Recap](https://www.beyondtrust.com/blog/entry/top-tech-integrations) — 2025 partnership and integration announcements
26. [BeyondTrust Remote Support 26.1 Release](https://www.beyondtrust.com/webinars/whats-new-remote-support-26.1-release) — Latest product release and feature updates
27. [Glassdoor: Identity Access Management Architect Salary](https://www.glassdoor.com/Salaries/identity-access-management-architect-salary-SRCH_KO0,40.htm) — IAM architect salary ranges USD (2025-2026)
28. [ZipRecruiter: IAM Architect Salary 2026](https://www.ziprecruiter.com/Salaries/Identity-Access-Management-Architect-Salary) — Real-time salary benchmark data
29. [PayScale: Engineer Salary South Africa 2026](https://www.payscale.com/research/ZA/Job=Professional_Engineer/Salary) — South African engineer salary ranges ZAR
30. [Glassdoor: Engineer Salaries South Africa](https://www.glassdoor.com/Salaries/south-africa-engineer-salary-SRCH_IL.0,12_IN211_KO13,21.htm) — South African salary benchmarks
31. [BeyondTrust Documentation Portal](https://docs.beyondtrust.com/) — Official technical documentation
32. [BeyondTrust Ping Identity AWS Marketplace Launch](https://www.globenewswire.com/news-release/2025/12/03/3198984/0/en/BeyondTrust-Announces-the-Availability-of-BeyondTrust-Ping-Identity-Unified-Identity-Security-Solutions-in-AWS-Marketplace.html) — Strategic partnership and marketplace availability

---

## 10. Certifications — Quick Reference Table

| Code | Vendor | Status | Renewal | Cost | URL |
|------|--------|--------|---------|------|-----|
| BCP: Password Safe Admin | BeyondTrust | Active | 2 years | Bundled with training | [BeyondTrust University Get Certified](https://www.beyondtrust.com/services/beyondtrust-university/get-certified) |
| BCP: Privileged Remote Access (PRA) Admin | BeyondTrust | Active | 2 years | Bundled with training | [BeyondTrust University Get Certified](https://www.beyondtrust.com/services/beyondtrust-university/get-certified) |
| BCP: Endpoint Privilege Management (EPM) for Windows | BeyondTrust | Active | 2 years | Bundled with training | [BeyondTrust University EPM for Windows](https://www.beyondtrust.com/services/beyondtrust-university/privilege-management-for-windows) |
| BCP: Identity Security Insights Admin | BeyondTrust | Active (launched 2025) | 2 years | Bundled with training | [BeyondTrust University Get Certified](https://www.beyondtrust.com/services/beyondtrust-university/get-certified) |

**Certification Details:**
- **Passing score:** 75% or higher
- **Delivery:** Online proctored through BeyondTrust University portal
- **Prerequisites:** Completion of instructor-led training (ILT) course in target track (1–3 days)
- **Hands-on labs:** Included in all training
- **Verification:** Digital credentials issued via Credly
- **CPE credits:** Up to 16 hours available (varies by course)
- **Portal access:** Requires BeyondTrust Customer Service Portal account

Reference: [BeyondTrust University Certification](https://www.beyondtrust.com/services/beyondtrust-university/get-certified)

---

## 11. Free Training Resources

### BeyondTrust University (Official)
- **Portal:** [BeyondTrust University](https://www.beyondtrust.com/services-training/beyondtrust-university)
- **Self-paced eLearning:** Free complimentary modules to kickstart product familiarity
- **Labs:** Cloud-hosted lab environments for hands-on practice
- **Webinar series:** Monthly training sessions on product features and best practices
- **Contact:** training@beyondtrust.com
- **Documentation:** [BeyondTrust Docs Portal](https://docs.beyondtrust.com/)

Reference: [BeyondTrust University](https://www.beyondtrust.com/services-training/beyondtrust-university)

### General PAM Training (YouTube & Community)

| Platform | Resource | URL |
|----------|----------|-----|
| YouTube | Privilege Access Management Playlist | [YouTube PAM Playlist](https://www.youtube.com/playlist?list=PLWktfa5Y09kikGz3klDzPRcm_yqR9IQeP) |
| YouTube | Privilege Access Management Beginners | [YouTube PAM Basics](https://www.youtube.com/watch?v=KObMLh2gWwU) |
| CyberArk + PAM | CyberArk Free Video Training (INFOSEC) | [INFOSEC PAM Training](https://www.classcentral.com/course/youtube-cyberark-free-training-videos-playlist-master-cyberark-with-expert-tutorials-512151) |
| Cybrary | FREE Privileged Access Management Course | [Cybrary PAM Course](https://www.cybrary.it/course/privileged-access-management) |
| Microsoft Learn | Implement Privileged Access Management (M365/Azure) | [Microsoft Learn PAM](https://learn.microsoft.com/en-us/training/modules/m365-compliance-insider-implement-privileged-access-management/) |

Reference: [Class Central: 40+ PAM Courses](https://www.classcentral.com/subject/privileged-access-management)

### Beekeepers Community (BeyondTrust User Forum)
- **URL:** [Beekeepers Community](https://www.beekeepers.community/)
- **Format:** User forum, peer Q&A, best-practice sharing
- **Cost:** Free for registered users

---

## 12. Paid Training & Certification Platforms

### Third-Party BeyondTrust Training Providers

| Provider | Offering | Format | URL |
|----------|----------|--------|-----|
| **Techsolidity** | BeyondTrust Certification Program | Instructor-led + self-paced | [Techsolidity BeyondTrust Training](https://techsolidity.com/beyondtrust-training) |
| **MindMajix** | BeyondTrust PAM Training | Virtual classroom + 1-on-1 mentoring | [MindMajix BeyondTrust](https://mindmajix.com/beyondtrust-training) |
| **Udemy** | Privileged Access Management (General PAM) | Self-paced video | [Udemy: PAM Fundamentals](https://www.udemy.com/course/privileged-account-access-management-pam/) |
| **Udemy** | PAM – Mastering Security Fundamentals | Self-paced video | [Udemy: PAM Mastery](https://www.udemy.com/course/privileged-account-access-managementmastering-security-fundamentals/) |

### General Platform Pricing (2026)
- **Pluralsight:** Subscription model (starting ~$249–$499/year for individual tier; recommended for structured technical training)
- **Udemy:** Course-based ($12–$200 per course; typically on sale for $12–$30)
- **Cybrary:** Free tier available; premium subscriptions start at ~$240/year

References: [Pluralsight Pricing 2026](https://pickthatcourse.com/articles/pluralsight-pricing-2026); [Udemy](https://www.udemy.com); [Cybrary](https://www.cybrary.it)

---

## 13. Essential Books for PAM & Privilege Management

| Title | Author | Publisher | Year | ISBN | URL |
|-------|--------|-----------|------|------|-----|
| **Privileged Attack Vectors: Building Effective Cyber-Defense Strategies to Protect Organizations** (2nd Edition) | Morey J. Haber | Apress | 2021 | 978-1484259139 | [Amazon](https://www.amazon.com/Privileged-Attack-Vectors-Cyber-Defense-Organizations/dp/1484259130) |
| **Identity Attack Vectors: Implementing an Effective Identity and Access Management Solution** | Morey J. Haber & Darran Rolls | Apress | 2019 | 978-1484251652 | [O'Reilly](https://www.oreilly.com/library/view/identity-attack-vectors/9781484251652/) |
| **Asset Attack Vectors: Building Effective Vulnerability Management Strategies to Protect Organizations** | Morey J. Haber | Apress | 2020 | TBD | [Apress](https://www.apress.com) |
| **Cloud Attack Vectors: Building Effective Cyber-Defense Strategies to Protect Cloud Resources** | Morey J. Haber, Brian Chappell, Christopher Hills | Apress | 2022 | 978-1484282359 | [Porchlight Books](https://www.porchlightbooks.com/product/cloud-attack-vectors-building-effective-cyber-defense-strategies-to-protect-cloud-resources--morey-j-haber/isbn/978-1484282359) |
| **Attack Vectors: The History of Cybersecurity** | Morey J. Haber | Self-Published | 2025 | 979-8868817083 | [Amazon](https://www.amazon.com/Attack-Vectors-Cybersecurity-Morey-Haber/dp/B0FCBKCSM5) |

**Morey J. Haber** is BeyondTrust's Chief Security Officer and author of the definitive "Attack Vectors" series. His Apress books are industry-standard references for PAM architecture, threat modeling, and implementation.

References: [Morey Haber on Amazon](https://www.amazon.com/Morey-J.-Haber/e/B078HDPHSN); [Privileged Attack Vectors](https://www.amazon.com/Privileged-Attack-Vectors-Cyber-Defense-Organizations/dp/1484259130); [Cloud Attack Vectors](https://www.porchlightbooks.com/product/cloud-attack-vectors-building-effective-cyber-defense-strategies-to-protect-cloud-resources--morey-j-haber/isbn/978-1484282359)

---

## 14. Typical Job Titles in BeyondTrust / PAM Domain

| Job Title | Typical Level | Key Responsibilities |
|-----------|---------------|----------------------|
| **PAM Engineer / Specialist** | Mid-career (3–7 yrs) | Deploy, configure, maintain Password Safe, PRA, EPM. Credential lifecycle, vault ops, session recording. |
| **Senior PAM Engineer** | Senior (7–12 yrs) | Architecture design, policy frameworks, team mentoring, vendor integrations (SIEM, IAM, ticketing). |
| **PAM Architect / Principal** | Expert (12+ yrs) | Enterprise-scale deployments, multi-region redundancy, least-privilege frameworks, governance automation. |
| **Identity Access Management (IAM) Architect** | Senior/Expert (10+ yrs) | Enterprise IAM strategy (including PAM pillar), integration with Okta/Ping/Azure AD, compliance automation. |
| **Privileged Access Management Consultant** | Mid–Senior | Customer implementation, training, best-practice advisory. |
| **Identity Security Analyst** | Mid-career | Monitor Identity Security Insights platform, investigate hidden paths to privilege, risk remediation. |
| **Privileged Access Manager** | Varies | Operations role; manage access requests, approvals, session review, compliance reporting. |
| **Cloud Identity Engineer** | Mid–Senior | BeyondTrust Cloud Vault, cloud privilege management (AWS/Azure/GCP), zero-standing privilege. |

References: [Glassdoor: PAM Engineer Jobs](https://www.glassdoor.com/Job/pam-engineer-jobs-SRCH_KO0,12.htm); [ZipRecruiter: PAM Engineer Salaries](https://www.ziprecruiter.com/Jobs/Privileged-Access-Management-Engineer)

---

## 15. Common Skills (Hard + Soft)

### Hard Technical Skills

| Skill | Context |
|-------|---------|
| **BeyondTrust Password Safe** | Credential vault design, rotation policies, team password management, team password sharing workflows |
| **Privilege Management for Windows (PM-W)** | Application elevation, endpoint privilege management (EPM), policy-based execution, AD integration |
| **Privilege Management for macOS / Unix-Linux (PM-M/L)** | Cross-platform privilege elevation, sudo replacement, script execution control |
| **Privileged Remote Access (PRA)** | Session management, just-in-time access control, MFA per-session enforcement, deployment models (agent vs. agentless) |
| **Privileged Session Management (PSM)** | Session recording, video playback, command logging, session search, retention, forensics |
| **Identity Security Insights (ITDR)** | Risk scoring, hidden paths discovery, secrets detection, behavior analytics, agent governance |
| **Active Directory Bridging** | AD integration with BeyondTrust vaults, user/group provisioning, cloud AD (Azure AD/Entra ID) sync |
| **Just-in-Time (JIT) Elevation** | Temporary credential issuance, approval workflows, time-limited access, conditional access policies |
| **Cloud Privilege Broker (CPB)** | AWS/Azure/GCP privilege discovery, cloud entitlement management (CIEM), zero-standing privilege |
| **Integration & APIs** | SIEM integration (Splunk, Sentinel, QRadar), IAM platforms (Okta, Ping Identity), ITSM (ServiceNow, Jira) |
| **Compliance Automation** | SOX, HIPAA, PCI DSS, NIST 800-53, CIS, ISO 27001 policy mapping and reporting |
| **Vault Operations** | Backup, disaster recovery, HSM integration, high availability, scalability tuning |
| **Network & Security Fundamentals** | VPN, firewall, network segmentation, zero-trust architecture, jump servers / bastion hosts |
| **Scripting & Automation** | PowerShell (Windows), bash/shell (Linux), automation of credential discovery and rotation |

### Soft Skills

| Skill | Context |
|-------|---------|
| **Cross-team Policy Negotiation** | Align security controls with business units; bridge dev/ops/security stakeholders |
| **Audit & Compliance Reporting** | Document controls, prepare for compliance audits, respond to findings, management communication |
| **Incident Response & Forensics** | Investigate privilege abuse, session review, evidence collection, post-incident remediation |
| **Stakeholder Communication** | Explain PAM strategy to C-suite, justify investment, manage expectations on deployment |
| **Project Management** | Orchestrate multi-phase deployments, manage vendor relationships, track milestones |
| **Training & Mentoring** | Upskill team members, run knowledge-transfer sessions, maintain documentation |
| **Problem-Solving & Troubleshooting** | Debug complex multi-system integrations, performance tuning, vendor escalation |

---

## 16. Salary Data (USD / ZAR / GBP)

### United States (USD) — 2026

**PAM Engineer (Mid-level)**
- **Average:** $141,921/year
- **25th percentile:** $111,437/year
- **75th percentile:** $182,972/year
- **90th percentile (top earners):** $228,297/year

Reference: [Glassdoor: PAM Engineer Salary](https://www.glassdoor.com/Salaries/pam-engineer-salary-SRCH_KO0,12.htm)

**Senior PAM Engineer / PAM Architect (USD)**
- **Entry PAM Engineer:** $85,000–$120,000/year
- **Mid-level PAM Engineer:** $120,000–$155,000/year
- **Senior PAM Engineer / Architect:** $155,000–$200,000/year
- **Enterprise PAM Architect (top tier):** $200,000–$250,000+/year

**Identity Access Management (IAM) Architect (USD)**
- **Average:** $145,000–$165,000/year
- **25th percentile:** $131,000/year
- **75th percentile:** $205,000+/year
- **90th percentile (top earners):** $250,500+/year

References: [Glassdoor: IAM Architect Salary](https://www.glassdoor.com/Salaries/identity-access-management-architect-salary-SRCH_KO0,40.htm); [ZipRecruiter: IAM Architect 2026](https://www.ziprecruiter.com/Salaries/Identity-Access-Management-Architect-Salary)

### South Africa (ZAR) — 2026

**Security / PAM Engineer (ZAR)**
- **Mid-level Security Engineer (PAM equivalent):** ZAR 520,000–850,000/year (~$31,000–$51,000 USD at current rates)
- **Senior PAM Engineer / Architect:** ZAR 850,000–1,350,000/year (~$51,000–$81,000 USD)

**IAM Architect (ZAR)**
- **Architect-level IAM roles:** ZAR 1,200,000–1,800,000/year (~$72,000–$108,000 USD)

References: [PayScale: Engineer Salary South Africa](https://www.payscale.com/research/ZA/Job=Professional_Engineer/Salary); [Glassdoor: Engineer Salaries South Africa](https://www.glassdoor.com/Salaries/south-africa-engineer-salary-SRCH_IL.0,12_IN211_KO13,21.htm)

**Note:** ZAR/USD conversion rates fluctuate; figures use April 2026 rates (~16.5–17 ZAR per USD). Consult current financial data for real-time rates.

### United Kingdom (GBP) — Estimated 2026

Based on UK salary survey data for comparable security architect roles:
- **Security Engineer (Mid):** £50,000–£70,000/year
- **Senior Security Engineer / Architect:** £70,000–£100,000/year
- **Principal Architect:** £100,000–£140,000+/year

*Note: GBP data sourced from general UK tech salary surveys (e.g., Reed.co.uk, CW Jobs); BeyondTrust-specific ZAR/GBP salary data is limited. Recommend checking regional job boards for current benchmarks.*

---

## 17. Sources (Supplementary to Section 9)

33. [BeyondTrust University EPM for Windows](https://www.beyondtrust.com/services/beyondtrust-university/privilege-management-for-windows) — Endpoint Privilege Management training track
34. [BeyondTrust Services & Training](https://www.beyondtrust.com/services-training) — Official training overview
35. [Techsolidity: BeyondTrust Training](https://techsolidity.com/beyondtrust-training) — Third-party PAM certification provider
36. [MindMajix: BeyondTrust Training](https://mindmajix.com/beyondtrust-training) — Virtual classroom and mentoring
37. [Beekeepers Community](https://www.beekeepers.community/) — BeyondTrust user forum
38. [YouTube PAM Training Playlist](https://www.youtube.com/playlist?list=PLWktfa5Y09kikGz3klDzPRcm_yqR9IQeP) — Free PAM tutorials
39. [INFOSEC: CyberArk Free Training Videos](https://www.classcentral.com/course/youtube-cyberark-free-training-videos-playlist-master-cyberark-with-expert-tutorials-512151) — YouTube CyberArk PAM training
40. [Cybrary: FREE Privileged Access Management Course](https://www.cybrary.it/course/privileged-access-management) — Free PAM fundamentals
41. [Microsoft Learn: Implement Privileged Access Management](https://learn.microsoft.com/en-us/training/modules/m365-compliance-insider-implement-privileged-access-management/) — M365 PAM implementation
42. [Class Central: 40+ PAM Courses](https://www.classcentral.com/subject/privileged-access-management) — Curated PAM course directory
43. [Udemy: Privileged Account Access Management](https://www.udemy.com/course/privileged-account-access-management-pam/) — Self-paced PAM fundamentals
44. [Pluralsight Pricing 2026](https://pickthatcourse.com/articles/pluralsight-pricing-2026) — Subscription pricing
45. [Morey J. Haber – Amazon Author Profile](https://www.amazon.com/Morey-J.-Haber/e/B078HDPHSN) — BeyondTrust CSO books
46. [Privileged Attack Vectors – Amazon](https://www.amazon.com/Privileged-Attack-Vectors-Cyber-Defense-Organizations/dp/1484259130) — Morey Haber flagship book
47. [Cloud Attack Vectors – Porchlight Books](https://www.porchlightbooks.com/product/cloud-attack-vectors-building-effective-cyber-defense-strategies-to-protect-cloud-resources--morey-j-haber/isbn/978-1484282359) — Morey Haber cloud PAM book
48. [Glassdoor: PAM Engineer Jobs & Salaries](https://www.glassdoor.com/Job/pam-engineer-jobs-SRCH_KO0,12.htm) — Job market data
49. [ZipRecruiter: PAM Engineer Salaries 2026](https://www.ziprecruiter.com/Jobs/Privileged-Access-Management-Engineer) — Real-time salary benchmarks
50. [Glassdoor: IAM Architect Salary](https://www.glassdoor.com/Salaries/identity-access-management-architect-salary-SRCH_KO0,40.htm) — IAM architect compensation
51. [ZipRecruiter: IAM Architect Salary 2026](https://www.ziprecruiter.com/Salaries/Identity-Access-Management-Architect-Salary) — IAM architect market data

---

**Document metadata:**
- **Revision:** B (April 30, 2026) — Added certifications, training resources, books, job titles, skills, salary data (Sections 10–17)
- **Status:** Published
- **Audience:** IT professionals, security architects, career-changers, recruiters
- **Citation requirement:** All numerical claims, product features, salary figures, and news items cite primary sources via markdown hyperlinks
