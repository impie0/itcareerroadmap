---
title: "Identity & Endpoint Management Domain (DOM-07)"
slug: "identity-endpoint-domain"
code: "DOM07"
kind: "domain"
lastUpdated: "2026-04-30"
vendors: ["Microsoft", "Okta", "CyberArk", "CompTIA", "ISC2", "VMware"]
tags: ["identity", "iam", "endpoint", "zero-trust", "pam"]
---

# Deep Dive: Identity & Endpoint Management Domain (DOM-07)

**Domain Code:** DOM-07  
**Specialization Level:** Core enterprise IT infrastructure & security  
**Industry Criticality:** Critical — identity & access management (IAM) are foundational to all digital transformation, cloud migration, and security posture  
**2026 Context:** Rapid consolidation toward cloud-native identity (Microsoft Entra), zero-trust architecture, AI-driven compliance, privileged access management (PAM) maturity, and MDM/UEM convergence  

---

## 1. Domain Overview

**Identity & Endpoint Management** encompasses two tightly integrated disciplines:

### 1.1 Identity & Access Management (IAM)
The technologies, policies, and practices that verify who users are (authentication) and what they are allowed to do (authorization). Includes user lifecycle management, single sign-on (SSO), multi-factor authentication (MFA), conditional access, identity governance, and access reviews.

### 1.2 Endpoint Management
The technologies that manage and secure devices (Windows, macOS, iOS, Android) and virtual endpoints across enterprise networks. Includes mobile device management (MDM), mobile application management (MAM), unified endpoint management (UEM), and endpoint detection & response (EDR).

**Why Together?**  
Modern cloud-native enterprises require unified identity and endpoint strategies: device trust informs access decisions (Conditional Access in Entra ID), device management enforces compliance policies, and identity governance prevents over-privileged endpoints. The boundary between IAM and endpoint management is increasingly blurred in zero-trust architecture.

**Demand Signal (2026):**
- Cloud migration drives identity modernization away from on-premises Active Directory.
- AI and LLM access requires new identity governance paradigms (service-to-service auth, prompt injection defenses).
- Regulatory pressure (GDPR, SOC 2, FedRAMP, HIPAA) mandates documented identity governance, certification, and recertification.
- Hybrid/remote work normalizes device management as a security control, not a convenience feature.

---

## 2. Certification Ecosystem

### 2.1 Microsoft Identity Certifications

Microsoft's identity stack is the dominant force in enterprise IAM, built on **Microsoft Entra ID** (formerly Azure AD) and integrated with Microsoft 365, Azure, and Dynamics.

#### Foundational Level

**SC-900: Security, Compliance, and Identity Fundamentals**
- **Official Link:** [SC-900 Study Guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-900)
- **Scope:** Foundational knowledge of security, compliance, and identity concepts across Microsoft cloud services.
- **Topics:** Security & compliance concepts, Entra ID basics, Microsoft security solutions, compliance solutions.
- **Target:** Career starters, IT support staff, aspiring security professionals.
- **Duration:** ~3–4 weeks of study; exam ~90 minutes, 40–60 questions.
- **Prerequisites:** None.
- **Industry Role Match:** IT Support, Junior Analyst.

#### Associate (Practitioner) Level

**SC-300: Identity and Access Administrator**
- **Official Link:** [SC-300 Study Guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-300)
- **Scope:** Hands-on administration of Microsoft Entra ID and related identity platforms.
- **Topics:**
  - User, group, and guest lifecycle management.
  - Role-based access control (RBAC) and administrative units.
  - Multi-factor authentication (MFA) and Conditional Access policies.
  - App registration, OAuth/OIDC, and API permissions.
  - Identity governance and access reviews (Entra ID Governance).
  - Microsoft Entra Verified ID and Lifecycle Workflows.
  - Azure Key Vault, managed identities, and service principals.
- **Target:** Identity administrators, access engineers, junior architects.
- **Duration:** 4–6 weeks study; exam ~90 minutes, 40–60 questions.
- **Prerequisites:** Recommended: IT fundamentals (A+, Network+, or equivalent experience).
- **Industry Role Match:** Identity Engineer, M365 Administrator (specialist role), IAM Analyst.
- **Renewal:** 2-year validity; renew via exam or earned skills modules.

**MD-102: Windows 11 Endpoint Administrator**
- **Official Link:** [Microsoft Learn - MD-102](https://learn.microsoft.com/en-us/credentials/certifications/windows-11-endpoint-administrator)
- **Scope:** Deploying, configuring, and managing Windows 11 and Windows 10 endpoints via Intune and on-premises.
- **Topics:**
  - Device deployment (autopilot, imaging, provisioning).
  - Configuration management (profiles, settings, baselines).
  - Threat protection (Defender, encryption, firewall).
  - App management (Win32, MSIX, Microsoft Store).
  - Compliance and monitoring.
- **Target:** Endpoint administrators, Intune specialists, systems administrators.
- **Duration:** 4–5 weeks study; exam ~90 minutes, 40–60 questions.
- **Prerequisites:** Recommended: Windows fundamentals + one prior Windows Admin cert (e.g., AZ-104).
- **Industry Role Match:** Endpoint Administrator, Windows Engineer, Intune Specialist.
- **Note:** Replaces the older MD-100/MD-101 pair; now covers both client & device management in one exam.

#### Expert / Architect Level

**SC-100: Cybersecurity Architect Expert**
- **Official Link:** [Microsoft Learn - SC-100](https://learn.microsoft.com/en-us/credentials/certifications/information-protection-compliance/sc-100)
- **Scope:** Designing enterprise security solutions across identity, network, cloud, and data domains.
- **Topics Include:**
  - Enterprise identity and access architecture (zero-trust, hybrid identity, external access).
  - Defense-in-depth across cloud and on-premises.
  - Data governance and compliance.
  - Incident response and threat mitigation.
- **Prerequisites:** One or more of: AZ-500, SC-300, SC-400/SC-401, DP-500, or equivalent hands-on experience.
- **Target:** Security architects, senior engineers transitioning to architecture.
- **Duration:** 6–8 weeks study; exam ~90 minutes, 40–60 questions.
- **Renewal:** 2-year validity.

**SC-401: Information Security Administrator Associate (replaces SC-400, May 2025)**
- **Official Link:** [SC-401 Study Guide](https://learn.microsoft.com/en-us/credentials/certifications/information-security-administrator)
- **Scope:** Information protection and data security in Microsoft 365 (formerly SC-400 also covered compliance; SC-401 focuses on infosec/DLP/secrets).
- **Topics:**
  - Data classification and labeling (Microsoft Purview Information Protection).
  - Data loss prevention (DLP), encryption, and retention.
  - Insider risk management.
  - eDiscovery and audit logs (basic).
  - Azure Information Protection and Rights Management.
- **Target:** Information security admins, data protection specialists, compliance engineers.
- **Duration:** 4–5 weeks study; exam ~90 minutes, 40–60 questions.
- **Retirement Info:** SC-400 retired May 31, 2025. SC-401 is the upgrade path; existing SC-400 certs remain valid until expiry but no renewal path.
- **Renewal:** 2-year validity.

**MS-102: Microsoft 365 Administrator Expert**
- **Official Link:** [Microsoft Learn - MS-102](https://learn.microsoft.com/en-us/credentials/certifications/microsoft-365-administrator-expert)
- **Scope:** Enterprise administration of Microsoft 365 services (Exchange, Teams, SharePoint, Intune, Entra ID integration).
- **Prerequisites:** MS-101 (Microsoft 365 Enterprise Administrator Associate) or equivalent hands-on experience.
- **Target:** Senior M365 administrators, enterprise administrators.
- **Duration:** 5–6 weeks study; exam ~90 minutes, 40–60 questions.
- **Renewal:** 2-year validity.

#### Transitional / Sunsetting

**AZ-500: Azure Security Engineer Associate (retiring August 31, 2026)**
- **Official Link:** [AZ-500 Study Guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-500)
- **Current Status:** Active; final exam administration August 31, 2026 at 11:59 PM CST.
- **Scope:** Azure-native security (NSGs, Key Vault, Defender for Cloud, encryption, identity in Azure context).
- **Topics:**
  - Azure identity and governance (RBAC, Entra ID in Azure, Managed Identities).
  - Platform protection (NSGs, firewalls, DDoS, App Gateway WAF).
  - Data and applications (encryption, App Service security, AKS security).
  - Incident management (Defender for Cloud, Log Analytics).
- **Target:** Azure security engineers, cloud security architects (until Aug 31, 2026).
- **Successor:** SC-500 (Cloud and AI Security Engineer Associate) — beta May 2026, full release July 2026.
- **Migration Path:** Candidates should prioritize AZ-500 before September 30, 2026 if certifying before SC-500 training is available.
- **Renewal:** 2-year validity.

**SC-500: Cloud and AI Security Engineer Associate (beta May 15, 2026; GA July 2026)**
- **Official Link:** [SC-500 Study Guide (in development)](https://learn.microsoft.com/en-us/credentials/certifications/cloud-ai-security-engineer)
- **Scope:** Azure cloud and generative AI security (expands AZ-500 to include AI/LLM security, generative AI governance).
- **Topics (Planned):**
  - AI safety and governance (Azure AI/OpenAI security, prompt injection, responsible AI).
  - Microsoft Entra security (identity in cloud, conditional access, identity protection).
  - Azure infrastructure security (compute, network, storage with AI workloads).
  - Service-to-service authentication and managed identities.
  - Endpoint security with AI (device trust, Defender for Endpoint).
  - Insider risk (AI-augmented monitoring).
  - Cloud governance and GRC.
- **Target:** Cloud security engineers, AI infrastructure engineers, security architects.
- **Beta Discount:** Typically 80% off ($40 USD vs ~$165).
- **Prerequisites:** Azure fundamentals + cloud/security experience (not formally required).
- **Renewal:** 2-year validity (planned).

---

### 2.2 Okta (Cloud Identity & CIAM Leader)

Okta dominates **cloud-native identity** and **customer identity & access management (CIAM)**, competing directly with Microsoft Entra for on-premises/hybrid scenarios and holding majority CIAM market share.

#### Certification Paths

**Okta Certified Professional (OCP)**
- **Official Link:** [Okta Certification Hub](https://www.okta.com/services/certification/)
- **Scope:** Foundational knowledge of secure identity management using Okta platform.
- **Target:** Aspiring Okta practitioners, support engineers.
- **Duration:** 2–3 weeks study; exam ~90 minutes.
- **Cost:** $250 USD.
- **Validity:** 2 years; 3 years if you pursue Architect (see below).
- **Prerequisite:** None, but OCP recommended before pursuing Administrator/Developer.

**Okta Certified Administrator (OCA)**
- **Scope:** Day-to-day admin tasks: app integration, user provisioning, policy configuration, lifecycle workflows.
- **Target:** Identity administrators, application administrators.
- **Prerequisites:** Active Okta Certified Professional (OCP) required.
- **Duration:** 3–4 weeks study; exam ~90 minutes, performance-based (practical scenarios).
- **Cost:** $250 USD.
- **Validity:** 2 years; 3 years if you pursue Architect.

**Okta Certified Developer (OCD)**
- **Scope:** Application integration with Okta APIs, custom authentication flows, OAuth/OIDC implementation, custom claims, webhooks.
- **Target:** Software engineers, integration engineers, platform engineers.
- **Prerequisites:** OCP not required; assumes programming background (JS, Java, Python, etc.).
- **Duration:** 3–4 weeks study; exam ~90 minutes, practical coding scenarios.
- **Cost:** $250 USD.
- **Validity:** 2 years; 3 years if you pursue Architect.

**Okta Certified Consultant (OCC)**
- **Scope:** Implementation, design, and best practices across Okta platform.
- **Target:** Consultants, systems integrators, implementation leads.
- **Prerequisites:** OCP + 1 year Okta implementation experience (or equivalent).
- **Duration:** 4–5 weeks study; exam ~90 minutes, scenario-based.
- **Cost:** $250 USD.
- **Validity:** 2 years; 3 years if you pursue Architect.

**Okta Certified Technical Architect (OCTA)**
- **Scope:** Enterprise architecture, design decisions, large-scale implementations, integrations with complex environments.
- **Target:** Enterprise architects, Principal engineers, CTO-track professionals.
- **Prerequisites:** Active Okta Certified Consultant + Okta Certified Developer certifications required.
- **Duration:** 6–8 weeks study; exam ~90 minutes, only offered quarterly in a 1-week window.
- **Cost:** $5,000 USD.
- **Validity:** 2 years for individual certs; **3-year extension automatic on all core certs when you earn OCTA.**
- **Seats:** Limited; register well in advance.

**Okta Certified Identity & Access Specialist (CIAS) — CIAM Focus**
- **Scope:** Customer identity & access (external/B2C identities), consent management, progressive enrollment, social login, passwordless.
- **Target:** IAM engineers specializing in B2C, CIAM architects.
- **Prerequisites:** OCP recommended; experience with Okta Identity Cloud.
- **Duration:** 3–4 weeks study; exam ~90 minutes.
- **Cost:** $250 USD.
- **Validity:** 2 years.

**Okta Hub Spring (Free Learning)**
- [Okta Community & Learning](https://community.okta.com/)
- Free Okta training, sandbox environments, use-case tutorials.

---

### 2.3 Ping Identity (Federation & Enterprise SSO)

Ping Identity specializes in **federative identity** (SSO across heterogeneous enterprises), **CIAM**, and hybrid on-premises/cloud identity.

#### Certification Paths

**Ping Identity Certified Professional (PICP)**
- **Official Link:** [Ping Identity Training](https://training.pingidentity.com/certification)
- **Platforms:**
  - PingFederate (federation, SSO)
  - PingAccess (application access, API security)
  - PingAM (directory, authentication, policy)
- **Scope:** Product-specific skills for each platform (choose which one).
- **Format:** Proctored, remote-delivered exams.
- **Duration:** 3–4 weeks study per platform.
- **Cost:** Varies by platform; typically $150–$200 USD per exam.
- **Validity:** 2 years.
- **Target:** Enterprise identity engineers, SSO specialists.

**Ping Identity Certified Associate (PICA)**
- **Scope:** Foundational knowledge of Ping Identity ecosystem and security concepts.
- **Target:** Support engineers, aspiring practitioners.
- **Duration:** 2–3 weeks study; exam ~60 minutes.

---

### 2.4 SailPoint (Identity Governance & Administration)

SailPoint dominates **identity governance and administration (IGA)** — ensuring users have appropriate access, reviewing access regularly, and automating lifecycle workflows.

#### Certification Paths

**SailPoint Certified IdentityIQ Engineer (SCIE)**
- **Official Link:** [SailPoint University](https://university.sailpoint.com/)
- **Scope:** On-premises IdentityIQ platform — installation, configuration, custom development, app onboarding, troubleshooting.
- **Topics:**
  - IdentityIQ architecture and deployment.
  - Lifecycle Manager (lifecycle rules, provisioning).
  - Access Governance (risk analysis, remediation).
  - Custom development (BeanShell, tasklets, rules).
  - Application connectors and data modeling.
- **Prerequisites:** 1+ year hands-on IdentityIQ experience recommended.
- **Duration:** 4–6 weeks study; exam ~2 hours, multiple choice + practical scenarios.
- **Format:** Proctored, registered candidates get 364 days to schedule; 2 attempts included.
- **Cost:** Certification exam registration typically $200–$300 USD.
- **Validity:** 2 years; renew via exam retake or continuing education.
- **Target:** Identity governance engineers, IGA implementers.

**SailPoint Certified IdentityNow Engineer (SCINE)**
- **Scope:** Cloud-based IdentityNow platform — identity governance in the cloud, access reviews, lifecycle automation, API integration.
- **Topics:**
  - IdentityNow cloud architecture and provisioning.
  - Identity Governance (risk, remediation, certifications).
  - Lifecycle workflows and identity lifecycle.
  - Connectors and integrations (SaaS apps, systems).
  - API integration and workflows.
  - Audit and reporting.
- **Prerequisites:** 1+ year hands-on IdentityNow experience recommended.
- **Duration:** 4–6 weeks study; exam ~2 hours.
- **Cost:** Certification exam registration typically $200–$300 USD.
- **Validity:** 2 years.
- **Target:** Cloud identity governance engineers, IdentityNow admins.

**SailPoint Certified IGA Professional (SCIP) — Entry Level**
- **Scope:** Foundational IGA concepts and basic IdentityIQ/IdentityNow usage.
- **Target:** Support engineers, analysts, aspiring engineers.
- **Duration:** 2–3 weeks study; exam ~60 minutes.
- **Cost:** Typically $100–$150 USD.

**SailPoint Certified IGA Expert (SCIE) — Advanced**
- **Scope:** High-complexity use cases, custom development, governance strategies.
- **Prerequisite:** SCIP or equivalent experience.
- **Duration:** 6–8 weeks study; exam ~2 hours.
- **Cost:** Typically $250–$350 USD.

---

### 2.5 CyberArk (Privileged Access Management)

CyberArk leads the **privileged access management (PAM)** market — controlling, auditing, and rotating secrets, sessions, and access for system admins, developers, and applications.

#### Certification Paths

**CyberArk Certified Delivery Engineer (CDE)**
- **Official Link:** [CyberArk Training & Certification](https://training.cyberark.com/)
- **Scope:** Partner-only designation (for consulting/reseller partners); deployment and configuration of CyberArk Identity Security solution.
- **Prerequisites:** Partner status + hands-on experience.
- **Duration:** Intensive training + proctored exam.
- **Validity:** 24 months; must recertify before expiry.
- **Target:** Implementation partners, solution engineers.
- **Note:** As of November 1, 2025, all CyberArk exams are in-person only (no remote).

**CyberArk Certified Associate (Sentry Level)**
- **Scope:** Foundational knowledge of CyberArk PAM solutions, practical deployment, configuration, user management.
- **Topics:**
  - Vault installation and configuration.
  - Credential storage and retrieval.
  - Access policies and session recording.
  - Connector management (databases, applications, cloud).
  - Basic troubleshooting and auditing.
- **Duration:** 3–4 weeks study + hands-on lab.
- **Format:** In-person proctored exam.
- **Cost:** Typically $200–$250 USD.
- **Validity:** 24 months.
- **Target:** PAM specialists, implementers, system admins transitioning to PAM.

**CyberArk Certified Professional (Guardian Level)**
- **Scope:** Advanced knowledge, design decisions, complex implementations, organizational architecture integration.
- **Topics:**
  - Advanced vault configuration and hardening.
  - Integration with identity platforms (Entra ID, Okta, Active Directory).
  - Secrets management for DevOps/CI-CD pipelines.
  - Advanced credential rotation and session management.
  - Multi-environment and hybrid cloud deployments.
  - Monitoring, compliance, and audit.
- **Prerequisites:** Sentry-level cert or equivalent experience.
- **Duration:** 5–6 weeks study + hands-on lab.
- **Format:** In-person proctored exam.
- **Cost:** Typically $300–$400 USD.
- **Validity:** 24 months.
- **Target:** PAM architects, senior engineers, practice leads.

---

### 2.6 BeyondTrust (PAM — Privileged Remote Access & Session Management)

BeyondTrust competes with CyberArk in PAM, with strength in **privileged remote access (PRA)** and **session management**.

#### Certification

**BeyondTrust University (BTU) Certification**
- **Official Link:** [BeyondTrust University](https://www.beyondtrust.com/services/beyondtrust-university/get-certified)
- **Scope:** Privileged access management, remote access, and session recording.
- **Exam Format:**
  - 40 multiple-choice questions.
  - Questions randomly selected from rotating pools (unique each attempt).
  - 2 attempts per training enrollment; must score 75%+ to pass.
  - Online proctored via BTU portal; results immediate.
- **Prerequisites:** Completion of Instructor-Led Training (ILT) course required.
- **Duration:** ILT typically 2–3 days; exam ~60 minutes.
- **CE Credits:** Up to 16 CPE hours for completing Privileged Remote Access Administration course.
- **Credentials Issued Via:** Credly digital badge platform.
- **Cost:** Varies by course; training + exam bundle typically $500–$1,000 USD.
- **Validity:** 1–2 years (check current policy).

---

### 2.7 One Identity / Delinea (Thycotic) / Saviynt / Centrify (Adjacent Players)

**One Identity** (Dell subsidiary) combines access governance, PAM, and lifecycle in a modular platform; **Delinea** (formerly Thycotic/Centrify merger) focuses on secrets management and PAM; **Saviynt** specializes in cloud-first IGA.

#### Saviynt Certifications

**Saviynt Certified IGA Professional (SCIP)**
- **Official Link:** [Saviynt University](https://saviynt.com/university)
- **Scope:** Foundational IGA concepts, Saviynt platform basics.
- **Target:** Entry-level IGA practitioners.
- **Duration:** 2–3 weeks study; exam ~90 minutes.
- **Validity:** 2 years.

**Saviynt Certified IGA Expert (SCIE)**
- **Scope:** Advanced Saviynt IGA for high-complexity use cases.
- **Prerequisites:** SCIP or equivalent experience.
- **Duration:** 4–6 weeks study; exam ~2 hours.
- **Validity:** 2 years.

---

### 2.8 Endpoint Management Certifications

#### Microsoft Intune / Endpoint Management

Covered via **MD-102** and **SC-300** (see Section 2.1).

#### Jamf (Apple MDM/UEM)

Jamf dominates Apple device management in enterprise.

**Jamf Certified Technical**
- **Official Link:** [Jamf Training & Certification](https://www.jamf.com/training/)
- **Scope:** Jamf Pro fundamentals, Mac and iOS management, policies, provisioning.
- **Target:** Apple device admins, Mac engineers.
- **Duration:** 3–4 weeks self-paced + certification exam.
- **Cost:** Training + exam typically $500–$800 USD.
- **Validity:** 2 years.

**Jamf Certified Administrator**
- **Scope:** Advanced Jamf Pro administration, integrations, custom configurations.
- **Target:** Senior Mac/iOS admins, systems administrators.
- **Duration:** 4–5 weeks study; practical lab scenarios.
- **Cost:** Typically $600–$900 USD.

**Jamf Certified Expert**
- **Scope:** Jamf architecture, design, integrations with enterprise systems (Entra ID, MDM frameworks).
- **Target:** Jamf architects, consulting partners.
- **Duration:** 6–8 weeks study; advanced scenarios.
- **Cost:** Typically $800–$1,200 USD.

**JNUC (Jamf Nation User Conference)**
- Annual conference; 2026 event: Kansas City, September 23–25.
- Includes "Level Up" 1-day intensive trainings on September 22.

#### Omnissa (formerly VMware EUC) Workspace ONE

Omnissa Workspace ONE dominates **Windows and multi-device** UEM in enterprise, especially in large complex environments.

**Omnissa Certified Administrator – Workspace ONE (OCA-W)**
- **Official Link:** [Omnissa Learning & Certifications](https://www.omnissa.com/learning/)
- **Scope:** Core Workspace ONE UEM administration: device management, app management, authentication, compliance.
- **Topics:**
  - Device enrollment and provisioning (Windows, iOS, Android, macOS).
  - Application management (internal, public, managed).
  - Access and authentication (via Omnissa Access integration).
  - Compliance and conditional access.
  - Monitoring and reporting.
- **Target:** UEM admins, endpoint engineers.
- **Duration:** 4–5 weeks study; exam ~90 minutes, 50–60 questions.
- **Format:** Proctored online exam (as of Aug 29, 2025, no mandatory training prerequisite).
- **Cost:** Typically $200–$250 USD.
- **Validity:** 2 years from issue date.

**Omnissa Certified Administrator – Horizon (OCA-H)**
- **Scope:** Desktop virtualization (Omnissa Horizon) — pools, sessions, policies, graphics, security.
- **Target:** Desktop virtualization admins, enterprise infrastructure engineers.
- **Duration:** 4–5 weeks study; exam ~90 minutes.
- **Validity:** 2 years.

#### Citrix Endpoint Management

Citrix (now Citrix Cloud) still holds enterprise market share in specific verticals.

**Citrix Endpoint Management Certified (CC-CEM)**
- **Official Link:** [Citrix Certifications](https://www.citrix.com/training-and-certifications/)
- **Scope:** Administration and support of Citrix Endpoint Management (MDM, MAM, secure productivity).
- **Exam:** CEM-205 course + 1Y0-170 exam.
- **Duration:** 3–4 weeks study; exam ~60 minutes.
- **Cost:** Typically $150–$200 USD for exam.
- **Validity:** 2 years.
- **Credentials:** Digital badge via Credly.

---

### 2.9 IDPro (Vendor-Neutral IAM Community & Certification)

**IDPro** is a vendor-neutral, international community dedicated to advancing identity and access management professionalism.

**Certified Identity Professional (CIDPRO) — Foundation Level**
- **Official Link:** [IDPro Certification](https://idpro.org/cidpro/)
- **Scope:** Vendor-neutral foundational knowledge of IAM concepts, standards, best practices, role responsibilities.
- **Topics:**
  - Identity and access management fundamentals.
  - User lifecycle and identity proofing.
  - Core security concepts (authentication, authorization, federation).
  - Standards and regulations (NIST, GDPR, SOC 2, HIPAA implications).
  - Access governance, identity governance, and lifecycle management.
  - IAM governance and business alignment.
- **Target:** IAM practitioners new to the field, professionals transitioning into IAM from other domains.
- **Format:** Online proctored; 90 minutes, multiple choice.
- **Duration:** 4–6 weeks study (IDPro Body of Knowledge is comprehensive; assumes some security/IT background).
- **Cost:** Typically $200–$250 USD.
- **Validity:** 3 years.
- **Credential:** Digital badge via Credly.
- **Value:** Highest credibility across vendors (Okta, Microsoft, SailPoint, CyberArk, Ping all recognize CIDPRO as vendor-independent credential).

**IDPro Community**
- Free membership includes job board, forums, mentorship, webinars.
- Premium membership: $200–$300 USD/year; includes all learning resources, BoK access, conference discounts.

---

## 3. Specialty Ecosystems & Integrations

### 3.1 Customer Identity & Access Management (CIAM)

CIAM is identity management for external users (customers, partners, prospects). Key vendors: **Okta**, **Ping Identity**, **Microsoft Entra External ID (formerly B2C)**, **Auth0**, **ForgeRock**.

**Okta Certified Identity & Access Specialist (CIAS) — CIAM Focus** (covered above; $250).

**Key Skills:**
- Consumer identity proofing and verification.
- Social login, passwordless (FIDO2, biometrics).
- Consent and preference management.
- Progressive enrollment and adaptive authentication.
- Lifecycle automation for B2C.
- CIAM-specific compliance (GDPR, CCPA, age verification).

---

### 3.2 Secrets Management & Developer Identity

**HashiCorp Vault** dominates secrets management for infrastructure and cloud-native applications.

**Vault Certified Associate**
- **Scope:** Vault fundamentals, secret engines, auth methods, policies, operations.
- **Format:** Online proctored.
- **Duration:** 2–3 weeks study; exam ~60 minutes.
- **Cost:** $150 USD.
- **Target:** DevOps engineers, platform engineers, infrastructure specialists.

---

### 3.3 Zero-Trust Architecture & Device Trust

**Zero-Trust Architect Principles:**
- Every access request is verified: identity + device + context (location, time, threat posture).
- Device trust is identity: Entra ID Conditional Access, Okta Threat Insight, Ping Signal + Risk, CrowdStrike Identity Protection.
- Endpoint detection & response (EDR) feeds trust signals into IAM decisions.

**Key Certifications (Adjacent):**
- SC-300 (Entra Conditional Access), SC-100 (Zero-Trust architecture).
- CyberArk CDE (secrets in zero-trust).
- Jamf Certified Expert (Apple device trust).

---

## 4. Career Roles & Progression

### 4.1 M365 Administrator (Junior → Senior)

**Junior M365 Administrator**
- **Salary (2026 - Glassdoor):** Not role-specific; typically part of "Systems Administrator" band: $60k–$85k USD.
- **Certifications:** MS-900, SC-900 or SC-300 (early in role).
- **Responsibilities:**
  - User account provisioning, reset passwords, license assignment.
  - Mailbox management, distribution groups.
  - OneDrive and SharePoint basic permissions.
  - Basic troubleshooting via Microsoft 365 admin center.
- **Timeline to Next Level:** 1–2 years hands-on.

**Mid-Level M365 Administrator**
- **Salary:** $75k–$110k USD (part of "Systems Administrator" or "IT Administrator" band).
- **Certifications:** MS-900, SC-300, AZ-104 or AZ-305 (adding cloud scope).
- **Responsibilities:**
  - Identity governance (user lifecycle automation, access reviews).
  - Conditional Access policy design and management.
  - Teams & Exchange advanced configuration.
  - OneDrive/SharePoint governance and compliance.
  - Intune basic device management.
  - Basic Azure identity (service principals, managed identities).
- **Timeline to Next Level:** 2–3 years.

**Senior M365 Administrator / Identity Engineer**
- **Salary:** $110k–$150k USD.
- **Certifications:** MS-102 (Expert level), SC-300, SC-401, optionally SC-100.
- **Responsibilities:**
  - Enterprise-scale identity design (hybrid, cloud-only, external access).
  - Advanced Conditional Access and risk-based policies.
  - App registration and API permissions at scale.
  - Governance workflows, access reviews, entitlement management.
  - Integration with third-party IDPs (Okta, Ping, SailPoint).
  - Compliance and audit (SOC 2, FedRAMP, HIPAA implications).
  - Incident response (compromised credentials, unusual sign-in patterns).
- **Timeline to Next Level:** 3–5 years total experience.

---

### 4.2 Identity Engineer

**Junior Identity Engineer**
- **Salary (2026 - Glassdoor):** $75k–$110k USD (matching "Identity & Access Management Analyst" band).
- **Certifications:** SC-900, SC-300, CIDPRO Foundation (recommended).
- **Responsibilities:**
  - Implement identity solutions per design (Entra ID, Okta, SailPoint).
  - Configure authentication, MFA, SSO for new apps.
  - Basic troubleshooting and support.
  - Document configurations and run-books.
- **Timeline:** 1–2 years to senior.

**Senior Identity Engineer**
- **Salary (2026 - Glassdoor):** $110k–$160k USD (matching "Identity & Access Management Administrator" band).
- **Certifications:** SC-300, SC-401, CIDPRO Foundation, vendor-specific (Okta OCA, Ping PICP, SailPoint SCINE).
- **Responsibilities:**
  - Design identity solutions (hybrid, federation, governance).
  - Implement and integrate multiple IDPs, apps, directories.
  - Manage identity governance lifecycle (onboarding, access reviews, offboarding).
  - Security audits and vulnerability remediation.
  - Vendor management and roadmap planning.
- **Timeline:** 2–3 years total experience.

---

### 4.3 IAM Architect

**IAM Architect**
- **Salary (2026 - Glassdoor):** $155k–$205k USD median (based on "IAM Architect" and "IAM Solution Architect" bands).
  - 25th percentile: $131k–$156k.
  - 75th percentile: $205k–$245k.
  - 90th percentile: $250k+.
- **Certifications:** SC-100 (Cybersecurity Architect), Okta OCTA, CyberArk Guardian level, SailPoint SCIE, CIDPRO Foundation + years of hands-on.
- **Responsibilities:**
  - Enterprise identity strategy and roadmap.
  - Design zero-trust architecture, hybrid/multi-cloud identity.
  - Choose and integrate multiple identity platforms.
  - PAM and secrets management strategy.
  - Governance framework (identity lifecycle, access reviews, certifications).
  - Regulatory compliance (FedRAMP, HIPAA, SOC 2, GDPR).
  - Vendor selection, RFP support, business case development.
  - Lead identity transformations (AD → Entra migration, legacy system decommissioning).
- **Timeline to Role:** 5–8 years total IT experience, 2–3 years as senior identity engineer.

---

### 4.4 Endpoint Administrator / Engineer

**Junior Endpoint Administrator**
- **Salary (2026 - Glassdoor):** $60k–$85k USD (Systems Administrator band).
- **Certifications:** MS-900, MD-102 (Microsoft path) or Jamf Certified Technical (Apple path).
- **Responsibilities:**
  - Device deployment (imaging, autopilot, provisioning).
  - Basic configuration (WiFi, VPN, certificates).
  - Endpoint support (password resets, app installs, troubleshooting).
  - Policy application and rollout.
- **Timeline:** 1–2 years to senior.

**Senior Endpoint Engineer**
- **Salary (2026 - Glassdoor):** $150k–$230k USD (matching "Endpoint Engineer" and "Senior Endpoint Engineer" bands).
  - Median Endpoint Engineer: $158k–$169k USD.
  - Senior Endpoint Engineer: $185k–$228k USD.
  - Endpoint Management Engineer: $169k USD.
  - Endpoint Security Engineer: $168k USD.
- **Certifications:** MD-102, SC-300 (identity integration), Jamf Certified Expert or Omnissa OCA-W, optionally SC-500 (AI/cloud security angle).
- **Responsibilities:**
  - Enterprise device strategy and roadmap (BYOD, corporate-owned, ruggedized).
  - MDM/UEM platform design and implementation (Intune, Jamf, Workspace ONE).
  - Conditional access and device trust integration with identity.
  - App deployment and management (Win32, MSIX, LOB, SaaS).
  - Compliance and threat protection (Defender, encryption, DLP).
  - Advanced troubleshooting and performance optimization.
  - Vendor evaluation and contract negotiation.
- **Timeline:** 2–3 years total experience in endpoint management.

---

### 4.5 Endpoint Architect

**Endpoint Architect**
- **Salary:** $150k–$210k USD (extrapolated from senior endpoint engineer and broader "architect" band).
- **Certifications:** MD-102, SC-100, Jamf/Omnissa expert-level, SC-500 (emerging standard).
- **Responsibilities:**
  - Multi-platform endpoint strategy (Windows, macOS, iOS, Android, Linux).
  - Zero-trust device architecture.
  - Integration with identity (Entra Conditional Access, device compliance).
  - Compliance and security standards (FedRAMP, HIPAA, PCI-DSS).
  - Enterprise mobility management (MAM, app-level security).
  - Disaster recovery and business continuity for endpoint infrastructure.
  - Lead large-scale endpoint transformations (legacy system retirement, OS upgrades).
- **Timeline to Role:** 5–8 years total IT experience, 2–3 years as senior endpoint engineer.

---

### 4.6 PAM Engineer / Architect

**PAM Engineer**
- **Salary (2026 - Glassdoor):** Not role-specific in major surveys; typically $100k–$140k USD (security specialist range).
- **Certifications:** CyberArk Sentry or CDE, BeyondTrust BTU Certification, SC-300 (identity context).
- **Responsibilities:**
  - Vault deployment and configuration (CyberArk, BeyondTrust, Delinea).
  - Credential storage, rotation, and retrieval.
  - Access policies and session recording.
  - Connector management for databases, cloud services, applications.
  - Integration with identity platform (Entra ID, Okta, LDAP).
  - Troubleshooting and support.
- **Timeline:** 1–2 years to senior.

**Senior PAM Engineer / PAM Architect**
- **Salary:** $120k–$180k USD.
- **Certifications:** CyberArk Guardian, BeyondTrust BTU (advanced), SailPoint SCIE (for IGA integration).
- **Responsibilities:**
  - Enterprise PAM strategy and roadmap.
  - Multi-region, high-availability vault design.
  - DevOps/CI-CD secrets management integration.
  - Cloud PAM (AWS Secrets Manager, Azure Key Vault, cloud service accounts).
  - Compliance and audit (SOC 2, PCI-DSS, HIPAA).
  - Vendor selection and business case development.
  - Lead PAM transformations (legacy system integration, zero-trust enforcement).
- **Timeline:** 3–5 years total IT experience, 1–2 years as PAM engineer.

---

### 4.7 Identity Governance Engineer (IGA Specialist)

**Identity Governance Engineer**
- **Salary (2026 - Glassdoor):** $95k–$145k USD (typically part of "Identity & Access Management Analyst/Administrator" band).
- **Certifications:** SailPoint SCIP or SCINE, IDPro CIDPRO Foundation, SC-300 (Microsoft angle).
- **Responsibilities:**
  - Identity governance process design (access reviews, certifications, remediation).
  - Lifecycle automation (onboarding, offboarding, moves).
  - Access risk assessment and remediation.
  - Integrations with HR systems, identity platforms, app catalogs.
  - Audit and compliance reporting.
  - User provisioning via connectors (SaaS apps, databases, directories).
- **Timeline:** 1–2 years to senior.

**Senior IGA Engineer / IGA Architect**
- **Salary:** $130k–$190k USD.
- **Certifications:** SailPoint SCIE, IDPro CIDPRO Foundation + years of hands-on, Okta OCA (CIAM context).
- **Responsibilities:**
  - Enterprise governance strategy (certifications, access reviews, remediation SLAs).
  - Multi-platform governance (Okta, Entra, SailPoint, on-premises systems).
  - Advanced lifecycle automation, policy design, risk models.
  - Integration with security (threat intel, anomaly detection) and compliance (audit trails, evidence collection).
  - Vendor management, roadmap planning, cost optimization.
  - Lead governance transformations, legacy system decommissioning.
- **Timeline:** 3–5 years total IT experience, 1–2 years as IGA engineer.

---

## 5. Learning Resources

### 5.1 Free Official Resources

**Microsoft Learn**
- [Microsoft Entra ID](https://learn.microsoft.com/en-us/azure/active-directory/)
- [MD-102 Study Materials](https://learn.microsoft.com/en-us/credentials/certifications/windows-11-endpoint-administrator)
- [SC-300 Study Guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-300)
- [SC-500 Study Guide (forthcoming, July 2026)](https://learn.microsoft.com/en-us/credentials/certifications/cloud-ai-security-engineer)
- Free sandbox environments for Entra ID, Azure, and Intune.

**Okta Hub & Community**
- [Okta Community](https://community.okta.com/)
- Free Okta training, use-case tutorials, sandbox orgs.

**SailPoint Community**
- [SailPoint University](https://university.sailpoint.com/)
- Free courses, hands-on labs, community forums.

**CyberArk Training**
- [CyberArk University](https://training.cyberark.com/)
- Free introductory modules, recorded webinars.

**IDPro**
- [IDPro Body of Knowledge (BoK)](https://idpro.org/cidpro/)
- Free articles on identity fundamentals (premium membership $200–$300/year for full access).

**John Savill's Technical Training (YouTube)**
- [John Savill — YouTube Channel](https://www.youtube.com/channel/UCpIn7ox7j7bH_OFj7tYouOQ)
- Free deep-dive videos on Entra ID, Azure AD, Intune, managed identities.
- 975+ videos; search for "Identity," "Entra," "Intune," "Managed Identity" playlists.

---

### 5.2 Paid Training

**Pluralsight**
- Identity paths: Okta, Ping, CyberArk, general IAM architecture.
- Typical cost: $300–$600 USD/year subscription.

**Microsoft FastTrack for Azure**
- Guided identity modernization program (Entra ID, hybrid scenarios).
- Cost: Included with Azure subscriptions; project-based engagement model.

**John Savill's Azure Master Class**
- Advanced Azure training (includes Entra ID, Intune, governance).
- Typical cost: $200–$400 USD one-time.

**Udemy (Self-Paced)**
- SC-300, SC-500, Okta, SailPoint, CyberArk courses.
- Typical cost: $15–$50 USD per course during sales.

---

## 6. Books & Publications

### 6.1 Identity & Access Management

**"Mastering Identity and Access Management with Microsoft Azure" (Second Edition)**
- **Author:** Jochen Nickel.
- **Publisher:** Packt Publishing.
- **URL:** [Packt — Mastering Identity and Access Management with Microsoft Azure](https://www.packtpub.com/en-us/product/mastering-identity-and-access-management-with-microsoft-azure-9781789132304)
- **Topics:** Entra ID, user and group lifecycle, RBAC, app registration, identity governance, hybrid scenarios.
- **Level:** Intermediate to advanced.
- **Availability:** eBook and paperback.
- **Recommendation:** Essential for SC-300 and identity engineer roles.

**"Practical Information Security Management" (Build, Deploy, and Manage a Real-World Security Program)**
- **Author:** Tony Campbell.
- **Publisher:** Apress.
- **Topics:** IAM governance, risk management, compliance frameworks.
- **Level:** Mid-level to executive.
- **Recommendation:** Useful for architects and governance-focused roles.

**"Zero Trust Networks"**
- **Authors:** Evan Gilman, Doug Barth.
- **Publisher:** O'Reilly Media.
- **Topics:** Zero-trust architecture, identity-centric security, device trust.
- **Level:** Advanced.
- **Recommendation:** Essential for architects designing zero-trust identity.

### 6.2 Endpoint Management

**"Modern Device Management" (MDM/UEM Strategy for Enterprise)**
- Emerging title; check Gartner Research and vendor whitepapers.

### 6.3 Standards & Frameworks

**NIST Cybersecurity Framework (CSF 2.0)**
- [NIST CSF 2.0](https://csrc.nist.gov/publications/detail/sp/800-53/rev-5)
- Free; covers identity and access controls.

**NIST SP 800-63 (Digital Identity Guidelines)**
- [NIST SP 800-63B — Authentication](https://pages.nist.gov/800-63-3/sp800-63b.html)
- Authoritative on authentication, MFA, lifecycle; cited by federal agencies (FedRAMP, DoD).

---

## 7. Communities & Conferences

### 7.1 Vendor Communities

**Okta Community**
- [community.okta.com](https://community.okta.com/)
- Free forums, user group directory, events.

**SailPoint User Community**
- [community.sailpoint.com](https://community.sailpoint.com/)
- Forums, certification resources, events.

**CyberArk Community**
- [community.cyberark.com](https://community.cyberark.com/)
- Forums, training, use-case library.

**Microsoft Tech Community**
- [Microsoft Tech Community — Identity](https://techcommunity.microsoft.com/t5/azure-active-directory/ct-p/Azure-Active-Directory)
- Free; includes Entra, Intune, governance discussions.

### 7.2 Vendor-Neutral Communities

**IDPro (Identity Professionals Organization)**
- [idpro.org](https://idpro.org/)
- Free membership: job board, webinars, mentorship, forums.
- Premium membership ($200–$300/year): full learning resources, conference discounts.

**Security Industry Association (SIA) — IAM Working Group**
- Industry-wide collaboration on identity standards.

### 7.3 Conferences

**JNUC 2026 (Jamf Nation User Conference)**
- **Dates:** September 23–25, 2026.
- **Location:** Kansas City, Missouri.
- **URL:** [JNUC 2026](https://reg.jnuc.jamf.com/)
- **Level Up Trainings:** September 22 (pre-conference 1-day intensive).

**Identiverse (Identity & Access Management Community Conference)**
- Annual event (2026 dates TBD); features Okta, Microsoft, Ping, SailPoint, CyberArk.
- Typical attendance: 3,000+ identity professionals.

**RSA Conference (Cryptography & Security)**
- Annual; identity and PAM tracks.
- Typical cost: $2,000–$5,000 USD registration + travel.

**Microsoft Ignite**
- Annual; covers Entra, Intune, security roadmap.
- Typical cost: Free virtual, $2,000+ in-person.

---

## 8. 2026 Market Dynamics & Trends

### 8.1 Identity Modernization Wave

**Cloud-Native Identity (Entra ID, Okta, Ping Workforce)**
- Enterprises accelerating AD → Entra migration.
- Hybrid identity (conditional access spanning on-prem and cloud) becoming standard.
- Investment in governance (access reviews, certifications) to satisfy auditors.

**AI-Driven Identity Risk**
- Anomaly detection (risky sign-ins, impossible travel, credential spray attacks).
- SC-500 and SC-100 certifications reflecting AI-augmented security.
- Insider risk management (AI monitoring for data exfiltration).

### 8.2 Endpoint Convergence (MDM/UEM)

**Multi-Platform Management**
- Jamf + Omnissa dominating in enterprise; Microsoft Intune growing via Microsoft 365 bundling.
- Trend: unified management consoles (device health, security, compliance) replacing siloed tools.
- Zero-trust device validation: Intune compliance → Entra Conditional Access → access grant/deny.

### 8.3 PAM Maturity & Cloud Secrets

**Secrets Rotation Automation**
- Kubernetes, serverless, cloud services driving demand for automated credential rotation.
- HashiCorp Vault gaining traction in DevOps; CyberArk/BeyondTrust serving traditional enterprise PAM.

**API & Service-to-Service Identity**
- OAuth2/OIDC and service principals replacing static API keys.
- Managed identities in Azure, workload federation in Okta, improving app security.

### 8.4 Regulatory Pressure

**GDPR, SOC 2 Type II, FedRAMP, HIPAA**
- Mandated identity governance (proof of access reviews, certifications, remediation).
- SC-401 (information protection) and SC-300 (lifecycle governance) increasingly required.
- Driving demand for IGA platforms and auditable lifecycle processes.

### 8.5 Microsoft Certification Evolution

**AZ-500 → SC-500 Transition (Aug 31, 2026 deadline)**
- SC-500 adds AI security, generative AI governance, modern threat vectors.
- Candidates should pursue AZ-500 before Sept 30, 2026 if able; otherwise wait for SC-500 July 2026 GA.

**SC-400 → SC-401 (Completed May 2025)**
- SC-401 focuses purely on information protection (DLP, encryption, secrets).
- Microsoft launching separate "Applied Skills" for compliance-specific roles.

---

## 9. Salary & Career Growth Summary

| Role | Junior Salary | Senior Salary | Architect Salary | Key Certifications |
|------|---------------|---------------|------------------|-------------------|
| **M365 Administrator** | $60k–$85k | $110k–$150k | N/A | MS-900, SC-300, MS-102 |
| **Identity Engineer** | $75k–$110k | $110k–$160k | N/A | SC-300, CIDPRO, vendor-specific |
| **IAM Architect** | N/A | N/A | $155k–$245k | SC-100, vendor-expert, CIDPRO |
| **Endpoint Administrator** | $60k–$85k | $150k–$230k | $150k–$210k | MD-102, SC-300 |
| **Endpoint Engineer** | $75k–$110k | $158k–$185k | N/A | MD-102, SC-300, Jamf/Omnissa |
| **Endpoint Architect** | N/A | N/A | $150k–$210k | MD-102, SC-100, expert-level |
| **PAM Engineer** | $75k–$120k | $120k–$180k | $150k–$200k | CyberArk Sentry/Guardian, BTU |
| **IGA Engineer** | $75k–$120k | $130k–$190k | $150k–$210k | SailPoint, CIDPRO, IDPro |

**Note:** Salaries based on 2026 Glassdoor, Robert Half, ZipRecruiter data (US, post-COVID market conditions). Regional variation: 20%–50% higher in San Francisco, Seattle, NYC; 10%–30% lower in Midwest/South. South African ZAR data unavailable in current market surveys; recommend local salary reviews (PayScale ZA, Pnet, LiqTech surveys).

---

## 10. Certification Roadmap: Beginner → Expert

### 10.1 Path 1: Microsoft-First (Cloud Identity + Endpoint)
1. **Month 1:** SC-900 (Security fundamentals).
2. **Months 2–3:** SC-300 (Entra ID administration).
3. **Months 4–5:** MD-102 (Intune/Windows endpoint).
4. **Months 6–8:** SC-401 (Information protection).
5. **Months 9–12:** SC-100 (Cybersecurity architect) or AZ-500 (Azure security).
6. **Year 2:** SC-500 (cloud + AI security, when GA July 2026).

**Total Timeline:** 12–18 months to expert-level in Microsoft ecosystem.

### 10.2 Path 2: Okta-First (Cloud Identity & CIAM)
1. **Month 1–2:** Okta Certified Professional (OCP).
2. **Month 3–4:** Okta Certified Administrator (OCA).
3. **Month 5:** Okta Certified Developer (OCD) or Okta Certified Consultant (OCC).
4. **Months 6–9:** Okta Certified Technical Architect (OCTA).
5. **Parallel:** IDPro CIDPRO Foundation (CIDPRO; 4–6 weeks, vendor-neutral).

**Total Timeline:** 12–15 months to Okta expert + vendor-neutral foundation.

### 10.3 Path 3: Identity Governance Specialist
1. **Month 1–2:** SailPoint Certified IGA Professional (SCIP).
2. **Month 3–4:** SailPoint Certified IdentityNow Engineer (SCINE) or IdentityIQ Engineer (SCIE).
3. **Parallel:** IDPro CIDPRO Foundation (4–6 weeks).
4. **Months 5–9:** SailPoint Certified IGA Expert (SCIE) + hands-on implementation projects.

**Total Timeline:** 12–18 months to IGA expert level.

### 10.4 Path 4: PAM Specialist
1. **Month 1:** CyberArk foundational knowledge (free online modules).
2. **Months 2–4:** CyberArk Sentry certification (classroom or self-paced + exam).
3. **Months 5–8:** CyberArk Guardian certification (advanced).
4. **Months 9–12:** Hands-on vault design, CI-CD secrets integration, multi-region deployment.

**Total Timeline:** 12–15 months to PAM expert level.

### 10.5 Path 5: Endpoint Specialist (Windows + Jamf Multi-Platform)
1. **Months 1–2:** MD-102 (Windows Intune).
2. **Months 3–4:** Jamf Certified Technical (Apple devices).
3. **Months 5–6:** Omnissa OCA-W (multi-platform UEM).
4. **Months 7–12:** Hands-on multi-platform zero-trust design, device compliance integration.

**Total Timeline:** 12–18 months to multi-platform endpoint expert.

---

## 11. Entry Routes from Adjacent Domains

### 11.1 From Network Administration
- **Bridge:** Active Directory management, LDAP, authentication protocols (Kerberos, RADIUS).
- **First Cert:** SC-900 or SC-300 (network admins often have group policy background).
- **Timeline:** 6–12 months to identity engineer level.

### 11.2 From Systems Administration (Windows/Linux)
- **Bridge:** User account management, group policy, file server permissions, sudo/sudoers.
- **First Cert:** MD-102 (if Windows-focused) or SC-300 + AZ-104 (if cloud-curious).
- **Timeline:** 6–12 months to endpoint administrator or cloud identity engineer.

### 11.3 From Security Operations (SOC)
- **Bridge:** Threat hunting, anomaly detection, incident response, SIEM.
- **First Cert:** SC-300 + SC-401 (identity governance from security angle) or SC-100 (architect).
- **Timeline:** 6–9 months to identity security specialist level.

### 11.4 From Application Development
- **Bridge:** OAuth2/OIDC, JWT, API authentication, managed identities in cloud platforms.
- **First Cert:** Okta Certified Developer (OCD) or AWS Security Specialty (AWS Cognito context).
- **Timeline:** 3–6 months to identify engineer (if already familiar with IAM concepts).

---

## 12. Hiring Signals & Market Demand

### 12.1 Hottest Skills (2026)

1. **Entra ID Hybrid + Conditional Access:** Nearly every large enterprise is upgrading from on-prem AD.
2. **Okta Administration + CIAM:** Cloud-native companies and large enterprises standardizing on Okta.
3. **Zero-Trust Architecture:** Regulatory compliance and breach response driving zero-trust adoption.
4. **Intune + Endpoint Compliance:** Remote work normalizing device management as security control.
5. **Identity Governance (SailPoint, Okta Governance):** Compliance (SOC 2, FedRAMP, HIPAA) mandating auditable governance.
6. **PAM & Secrets Management:** DevOps and cloud-native applications requiring automated credential rotation.
7. **SC-300 + SC-500 Certifications:** Growing enterprise requirement for Azure identity engineers.

### 12.2 Undersupplied Roles

- **IAM Architects:** Shortage of senior architects with 5+ years and vendor-independent CIDPRO.
- **IGA Specialists:** SailPoint and Okta governance engineers in high demand; supply lagging demand.
- **Zero-Trust Designers:** Few professionals with hands-on zero-trust architecture experience.

---

## 13. Salary Ranges by Role (2026 Market Data)

**All figures in USD; US market. Significant regional variation (+/- 20–50%).**

| Role | Salary Range (Glassdoor 2026) | Notes |
|------|-------------------------------|-------|
| IAM Administrator | $81k–$140k (median $106k) | Range 25th–75th percentile |
| IAM Analyst | ~$117k (higher level, more analysis) | |
| Endpoint Engineer | $131k–$193k (median $158k) | Strong demand, higher than systems admin |
| Senior Endpoint Engineer | $151k–$228k (median $185k) | Senior level command premium |
| Endpoint Management Engineer | $169k (median) | Specialist MDM/UEM role |
| Endpoint Security Engineer | $168k (median) | Security-focused variant |
| IAM Architect | $131k–$245k (median $163k) | Architect band premium; 90th percentile $250k+ |
| IAM Solution Architect | ~$130k (median) | Implementation-focused architect |

---

## 14. Recommended Next Steps for Career Growth

### 14.1 In Next 6 Months (Immediate)
- [ ] Choose primary specialization: Microsoft, Okta, SailPoint, CyberArk, or multi-vendor.
- [ ] Earn SC-900 or equivalent foundational cert.
- [ ] Set up sandbox environment (Microsoft Learn, Okta org, Jamf trial).
- [ ] Join IDPro (free) or Okta Community.

### 14.2 In Next 12 Months
- [ ] Earn associate-level cert (SC-300, Okta OCP+OCA, SailPoint SCIP/SCINE).
- [ ] Deliver 1–2 real-world projects (migrations, integrations, policy design).
- [ ] Present at meetup or community forum.

### 14.3 In Next 24 Months
- [ ] Earn vendor-expert or multi-vendor certs (SC-401, Okta OCTA, SailPoint SCIE, CIDPRO).
- [ ] Lead 1–2 enterprise initiatives.
- [ ] Develop specialization (PAM, IGA, zero-trust, CIAM).
- [ ] Contribute to open-source IAM projects or community resources.

### 14.4 In Next 3–5 Years
- [ ] Earn architect-level cert (SC-100, Okta OCTA, SailPoint Expert).
- [ ] Transition to architect or principal engineer role.
- [ ] Mentor junior engineers.
- [ ] Author case studies, speak at conferences (Identiverse, RSA, JNUC).

---

## Sources

1. [Microsoft Learn — SC-900 Study Guide](https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/)
2. [Microsoft Learn — SC-300 Study Guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-300)
3. [Microsoft Learn — MD-102 Windows 11 Endpoint Administrator](https://learn.microsoft.com/en-us/credentials/certifications/windows-11-endpoint-administrator)
4. [Microsoft Learn — SC-100 Cybersecurity Architect Expert](https://learn.microsoft.com/en-us/credentials/certifications/information-protection-compliance/sc-100)
5. [Microsoft Learn — SC-401 Information Security Administrator](https://learn.microsoft.com/en-us/credentials/certifications/information-security-administrator)
6. [Microsoft Learn — AZ-500 Azure Security Engineer (retiring Aug 31, 2026)](https://learn.microsoft.com/en-us/credentials/certifications/azure-security-engineer/)
7. [Microsoft Learn — SC-500 Cloud and AI Security Engineer (beta May 2026, GA July 2026)](https://learn.microsoft.com/en-us/credentials/certifications/cloud-ai-security-engineer)
8. [Okta Certified Professional Program](https://www.okta.com/services/certification/)
9. [Okta Certification — Core Certifications](https://certification.okta.com/page/core-certification-exams)
10. [Ping Identity Training & Certification](https://training.pingidentity.com/certification)
11. [SailPoint University — Professional Certifications](https://university.sailpoint.com/page/professional-certifications-and-knowledge-credentials)
12. [SailPoint Certified IdentityIQ Engineer](https://university.sailpoint.com/sailpoint-certified-identityiq-engineer)
13. [CyberArk Identity Security Certification Program](https://www.cyberark.com/services-support/certification/)
14. [CyberArk Training University](https://training.cyberark.com/)
15. [BeyondTrust University — Get Certified](https://www.beyondtrust.com/services/beyondtrust-university/get-certified)
16. [BeyondTrust Privileged Remote Access Administration](https://www.beyondtrust.com/services/beyondtrust-university/privileged-remote-access-administration)
17. [Jamf Training & Certification](https://www.jamf.com/training/)
18. [JNUC 2026 Jamf Nation User Conference](https://reg.jnuc.jamf.com/flow/jamf/jnuc2026/home26/page/jnuc2026home)
19. [Omnissa Learning, Certifications, and Training](https://www.omnissa.com/learning/)
20. [Omnissa Certified Administrator – Workspace ONE](https://community.omnissa.com/technical-blog/introducing-new-omnissa-certified-administrator-certifications-r161/)
21. [Citrix Endpoint Management Certifications](https://www.citrix.com/training-and-certifications/)
22. [IDPro — Certified Identity Professional (CIDPRO)](https://idpro.org/cidpro/)
23. [IDPro Membership & Community](https://idpro.org/)
24. [Glassdoor — Identity and Access Management Administrator Salary (2026)](https://www.glassdoor.com/Salaries/identity-and-access-management-administrator-salary-SRCH_KO0,44.htm)
25. [Glassdoor — IAM Architect Salary (2026)](https://www.glassdoor.com/Salaries/iam-architect-salary-SRCH_KO0,13.htm)
26. [Glassdoor — Endpoint Engineer Salary (2026)](https://www.glassdoor.com/Salaries/endpoint-engineer-salary-SRCH_KO0,17.htm)
27. [Glassdoor — Senior Endpoint Engineer Salary (2026)](https://www.glassdoor.com/Salaries/senior-endpoint-engineer-salary-SRCH_KO0,24.htm)
28. [Robert Half — 2026 Salary Guide](https://www.roberthalf.com/us/en/insights/salary-guide)
29. [Packt Publishing — Mastering Identity and Access Management with Microsoft Azure (Second Edition)](https://www.packtpub.com/en-us/product/mastering-identity-and-access-management-with-microsoft-azure-9781789132304)
30. [John Savill's Technical Training — YouTube Channel](https://www.youtube.com/channel/UCpIn7ox7j7bH_OFj7tYouOQ)
31. [Saviynt Named 2026 Gartner Peer Insights Customers' Choice for IGA](https://saviynt.com/press-release/saviynt-2026-gartner-peer-insights-customers-choice-iga)
32. [Saviynt University Training & Certification](https://saviynt.com/university)
33. [SC-401 vs SC-400: Key Differences and How to Prepare (May 2025)](https://www.passcert.com/news_SC-401-vs-SC-400-Key-Differences-and-How-to-Prepare-for-the-New-Exam_2811.html)
34. [Microsoft Certification Retirements 2026: Every Change You Need to Know](https://vladtalkstech.com/microsoft-learning-and-credential-news/microsoft-certification-retirements-2026/)
35. [New Microsoft Beta Exams 2026: AI-103 Now Live, AI-200, SC-500 Coming in May](https://mscertquiz.com/blog/new-microsoft-beta-exams-2026)
36. [NIST Cybersecurity Framework 2.0](https://csrc.nist.gov/publications/detail/sp/800-53/rev-5)
37. [NIST SP 800-63B — Authentication](https://pages.nist.gov/800-63-3/sp800-63b.html)

---

**Document Version:** 1.0  
**Last Updated:** April 30, 2026  
**Author:** Claude Agent (Deep Dive Research)  
**Classification:** Public (IT Career Roadmap Project)

---

**End of Deep Dive: DOM-07 Identity & Endpoint Management Domain**
