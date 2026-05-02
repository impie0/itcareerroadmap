---
cert_name: "Salesforce Certified Platform Identity and Access Management Architect"
cert_code: "Plat-Arch-203"
vendor: "Salesforce"
status: "Active"
level: "Expert"
domain: "Architecture/Identity"
ecosystem: "Salesforce Ecosystem"
last_verified: "2026-05-01"
aliases: ["Salesforce Certified Identity and Access Management Architect", "Salesforce Certified Identity and Access Management Designer", "IAM Architect"]
---

# Salesforce Certified Platform Identity and Access Management Architect

**`Plat-Arch-203`** · ● **Active** · **Expert** · _Salesforce_

> **Validate single sign-on (SSO) design, identity federation, and access control architectures on Salesforce Cloud.** This expert-level certification is one of four core credentials required for the Salesforce System Architect designation and validates your ability to assess identity requirements and design secure, scalable solutions using OAuth, SAML, and Salesforce Identity services.

---

## Exam facts

| Field | Value |
|---|---|
| Cost | $400 USD (initial); $200 USD (retake) |
| Duration | 120 minutes |
| Questions | 60 (all scored); multiple-choice and multiple-select |
| Passing | 67% (approximately 40/60 correct) |
| Format | Multiple choice / Multiple response |
| Delivery | Pearson VUE / OnVUE (online proctored) |
| Languages | English |
| Valid | 3 years |
| Renewal | Earn higher-level Salesforce architect cert, retake exam, or complete renewal credits |
| Prerequisites | None (1+ year experience designing Salesforce identity solutions recommended; 2+ years identity/security technology experience strongly recommended) |
| Released | 2017 (as Identity and Access Management Designer); renamed 2024 to Platform Identity and Access Management Architect |
| Retiring | N/A |

**Vendor source —** [Salesforce Credentials ↗](https://trailhead.salesforce.com/credentials/identityandaccessmanagementarchitect)
**Exam guide —** [Salesforce IAM Architect Study Guide ↗](https://focusonforce.com/salesforce-identity-and-access-management-architect-certification-guide/)
**Exam objectives —** [Platform Identity and Access Management Architect Exam Blueprint ↗](https://developer.salesforce.com/resources2/certification-site/files/SGCertifiedIdentityAndAccessManagementDesigner.pdf)

---

## About

The **Salesforce Certified Platform Identity and Access Management Architect (Plat-Arch-203)** certifies expertise in designing and implementing identity and access management (IAM) solutions on the Salesforce Customer 360 platform. Originally released in 2017 as the "Identity and Access Management Designer," it was renamed in 2024 to reflect the role's strategic architecture focus. This expert-level credential is **mandatory** for the Salesforce System Architect designation and validates the ability to design secure, federated identity ecosystems using OAuth 2.0, SAML 2.0, provisioning automation, and Salesforce Identity services.

Unlike entry-level or associate certifications, the IAM Architect exam tests conceptual understanding of complex identity scenarios and architectural decision-making at scale. Candidates must understand federation patterns (SAML service provider vs. IdP-initiated flows, OAuth authorization flows), identity provisioning lifecycles, compliance requirements (GDPR, SOX, FedRAMP), and how to architect multi-brand identity experiences in Experience Cloud and Portal scenarios.

The exam is challenging — a typical first-time pass rate is ~63%, indicating that most candidates require systematic study and hands-on lab work beyond reading documentation. The role itself bridges Security (identity governance, least privilege, zero-trust) and Cloud Architecture (multi-tenant identity federation, SSO scaling). Professionals holding this credential typically work in enterprise organizations with complex identity requirements: multi-org Salesforce deployments, legacy system integration, regulated industries, or partner/customer portal ecosystems.

---

## Domain context — Architecture / Identity

Enterprise identity architecture spans authentication patterns (SSO, OAuth, SAML), authorization frameworks (role-based, attribute-based), identity federation (cross-organization trust), provisioning/deprovisioning automation, and compliance (GDPR, SOX, FedRAMP). This certification focuses specifically on these disciplines as they apply to Salesforce Cloud and the broader Salesforce ecosystem.

[Read full deep dive — Salesforce Ecosystem →](../../Ecosystems/Salesforce_Ecosystem.md)

---

## Topics covered

Per the official Salesforce exam blueprint, the exam is weighted across six domains:

### Identity Management Concepts (17%)

- Authentication patterns: Basic auth, form-based, multi-factor authentication (MFA), passwordless
- SSO architecture: SAML 2.0 principals (IdP, SP, user agent), SAML assertions, bindings (POST, Redirect)
- SSO troubleshooting: SAML assertion validation, certificate rotation, clock skew, signing/encryption keys
- Federation design trade-offs: centralized vs. federated identity stores, trust models, identity governance

### Accepting Third-Party Identity in Salesforce (26%) — *Largest domain*

- External identity providers: SAML IdP configuration (Okta, Azure AD, Ping Identity, Auth0)
- OAuth 2.0 flows: Authorization Code (web apps), Implicit (SPAs), Client Credentials (service-to-service), JWT Bearer (asymmetric trust)
- Identity store design: Just-in-time (JIT) provisioning, attribute mapping, identity assertion, federation IDs
- Federated authentication flows: SP-initiated, IdP-initiated, single logout (SLO)
- Cross-organization federation: Org-to-org federation (parent-subsidiary models), delegated authentication

### Salesforce as an Identity Provider (19%)

- Salesforce Identity User Provisioning (IDPUP): Outbound SAML, outbound OAuth, provisioning APIs
- OAuth token generation: Access tokens, refresh tokens, JWT claims, scope enforcement
- Connected Apps: OAuth client configuration, secret rotation, scope narrowing
- Salesforce assertion scenarios: Signed assertions, SAML Subject format selection

### Access Management Best Practices (15%)

- Role hierarchy: Subordinate role inheritance, permission cascading, role segregation of duties
- Permission sets: Granular object/field permissions, app permissions, profile overrides
- Delegated administration: Delegated admin groups, permission distribution, user management delegation
- Approval workflows: Access request workflows, identity governance automation
- License-based access: Salesforce Licensing SKUs, portal licenses, community member types

### Salesforce Identity (8%)

- Salesforce Identity Connect: On-premises identity provisioning, attribute sync, soft-match logic
- Salesforce Identity assertion: SAML assertions with custom attributes, identity federation
- API authentication: OAuth scopes, API token management, refresh token rotation
- JWT Bearer Token Flow: Service account integration, asymmetric authentication

### Community and Experience Cloud (15%)

- Experience Cloud authentication: Portal/Community user provisioning, social sign-on (Facebook, Google, LinkedIn)
- External identity federation: Allow customers/partners to authenticate via their own IdP
- Guest user access: Unauthenticated access to Experience Cloud content, guest licensing
- Community member types: Customer Community, Partner Community, Employee Community, Customer Community Plus
- Multi-brand identity: Separate experience clouds with federated auth, single user multiple personas

*Source:* [Official exam blueprint (PDF) ↗](https://developer.salesforce.com/resources2/certification-site/files/SGCertifiedIdentityAndAccessManagementDesigner.pdf)

---

## Common skills at Architecture · Expert

*Shared competencies across the Architecture domain at Expert level — not specific to IAM.*

- **Solution design trade-offs** — Balancing security, performance, cost, and maintainability in multi-tenant cloud environments
- **Multi-cloud architecture** — Integration between Salesforce and third-party identity platforms (Okta, Azure AD, Ping, Entra)
- **Governance and compliance** — Designing audit trails, role segregation, and compliance controls for regulated industries (financial, healthcare, government)
- **Scalability and performance** — Optimizing federated authentication at scale, token caching, API rate limit mitigation
- **Security architecture** — Threat modeling, zero-trust principles, least privilege implementation
- **Stakeholder communication** — Translating complex identity requirements into actionable architecture recommendations

---

## Recommended courses at Architecture · Expert

| Provider | Title | Cost | URL |
|---|---|---|---|
| Salesforce Trailhead | Identity and Access Management Architect Learning Path | Free | [↗](https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-identity-and-access-management) |
| Udemy (Comprehensive) | Salesforce Identity and Access Management Architect Course | $14–$80 | [↗](https://www.udemy.com/course/salesforce-identity-and-access-management-architect-course/) |
| Udemy (Practice Tests) | Salesforce Identity and Access Management Architect Practice Exams | $14–$80 | [↗](https://www.udemy.com/course/salesforce-identity-and-access-management-architect-practice/) |
| Salesforce Ben | Identity and Access Management Architect Exam Prep | $97 | [↗](https://www.salesforceben.com/salesforce-identity-and-access-management-architect-practice-exams-available-now/) |
| Apex Hours (YouTube) | Salesforce IAM Architecture Talks | Free | [↗](https://www.youtube.com/@ApexHours) |

**Course-selection rule:** Prioritize the official Salesforce Trailhead learning path, then supplement with Udemy courses labeled specifically for "Plat-Arch-203" or "Platform Identity and Access Management Architect," not generic "Salesforce identity" content.

---

## Practice exams

| Provider | Title | Cost | URL |
|---|---|---|---|
| Salesforce Ben | Platform Identity and Access Management Architect Practice Questions | $97 | [↗](https://courses.salesforceben.com/courses/identity-and-access-management-architect-practice-exam-questions/) |
| Focus on Force | Certified Platform Identity and Access Management Architect Practice Exam | $99 | [↗](https://focusonforce.com/salesforce-certifications/salesforce-identity-and-access-management-architect-certification-guide/) |
| Udemy (6x Mock Tests) | 6x Salesforce Identity and Access Management Architect Practice Tests | $14–$80 | [↗](https://www.udemy.com/course/6x-salesforce-identity-and-access-management-tests/) |

---

## Books

| Title | Author | Publisher | Year | ISBN | URL |
|---|---|---|---|---|---|
| Salesforce Architect's Handbook: A Comprehensive End-to-End Solutions Guide | Dipanker Jyoti, James A. Hutcherson | Apress | 2020 | 978-1-4842-6630-4 | [↗](https://www.oreilly.com/library/view/salesforce-architects-handbook/9781484266311/) |
| Salesforce Certified Identity and Access Management Architect — Rapid Certification Exam Prep Guide | Michael Shaw | Self-published | 2022 | 979-8389880870 | [↗](https://www.amazon.com/SALESFORCE-CERTIFIED-IDENTITY-MANAGEMENT-ARCHITECT/dp/B0C1HRT8BF) |

**Book note:** The Salesforce Architect's Handbook (2020) includes a dedicated chapter on identity and access management architecture and is current for this exam. Shaw's rapid prep guide (2022) is compact and exam-focused.

---

## Typical job titles at Architecture · Expert

Salesforce Identity Architect · Salesforce IAM Architect · Solutions Architect (Identity focus) · Salesforce Technical Architect · Identity and Access Management Consultant · Security Solutions Architect · Platform Solutions Architect

*(Job titles drawn from Salesforce careers pages and job-board postings listing this cert as required or preferred.)*

---

## Salary

| Region | Range | Source |
|---|---|---|
| USD | $120,000 – $200,000+ | [Glassdoor (IAM Architect) ↗](https://www.glassdoor.com/Salaries/identity-access-management-architect-salary-SRCH_KO0,36.htm) · [Robert Half Salary Guide ↗](https://www.roberthalf.com/salary-guide) · [ZipRecruiter ↗](https://www.ziprecruiter.com/Salaries/Identity-Access-Management-Architect-Salary) |
| ZAR | R850,000 – R1,400,000 (Solutions Architect proxy) | [PayScale ZA Solutions Architect ↗](https://www.payscale.com/research/ZA/Job=Solutions_Architect/Salary) · [Salary Expert ZA ↗](https://www.salaryexpert.com/salary/job/solutions-architect-salesforce/south-africa) · [Pnet ZA ↗](https://www.pnet.co.za) |
| GBP | £85,000 – £140,000 | [IT Jobs Watch (Architect roles) ↗](https://www.itjobswatch.co.uk) · [Hays Salary Guide ↗](https://www.hays.co.uk/salary-guide) |
| EUR | €90,000 – €150,000 (DE/FR/NL) | [Glassdoor Europe ↗](https://www.glassdoor.com) |

**Salary context:** IAM Architect roles in the US typically command premium compensation due to security focus and architect-level responsibility. Senior practitioners (10+ years experience) frequently earn $200,000+. In South Africa, no certified salary surveys exist for "Salesforce IAM Architect" specifically; the ZAR range above is derived from general "Solutions Architect" postings weighted toward Salesforce ecosystem roles, suggesting R850k–1.4M annually depending on experience and company size. Salary varies significantly by industry verticalization: fintech and regulated sectors (banking, healthcare, insurance) command 15–25% premiums over non-regulated SaaS companies.

---

## Skills validated

*Certifications-specific — concrete technologies and patterns this exam validates.*

- **OAuth 2.0 and OpenID Connect** — Authorization code flow, implicit flow, client credentials, token endpoints, scope management
- **SAML 2.0** — Service provider configuration, assertion validation, single logout (SLO), identity provider-initiated vs. service provider-initiated flows
- **Salesforce identity provisioning** — IDPUP (Salesforce Identity User Provisioning), attribute mapping, sync scheduling, error handling
- **Federation and trust models** — Cross-organization federation, just-in-time (JIT) user provisioning, identity lifecycle automation
- **Role hierarchy and permission sets** — Access control design, delegated administration, role segregation of duties
- **Salesforce Identity services** — Identity Connect, identity assertion, API authentication, JWT token handling
- **Community and Experience Cloud authentication** — Portal access, external identity provisioning, guest user management
- **Audit and monitoring** — Identity logs, audit trail analysis, anomaly detection, compliance reporting

---

## Related certifications

- **Stacks with:** [Salesforce Certified Integration Architect Enterprise (API-Architect-301) ↗](../../Certifications/Salesforce/Salesforce_Integration_Architect.md) · [Salesforce Certified Development Lifecycle and Deployment Architect (Dev-Architect-304) ↗](../../Certifications/Salesforce/Salesforce_Development_Lifecycle_Architect.md) · [Salesforce Certified Platform Developer I (App-Builder-214) ↗](../../Certifications/Salesforce/Salesforce_Platform_Developer_I.md)
- **Required for:** [Salesforce Certified System Architect (Sys-Arch-301) ↗](../../Certifications/Salesforce/Salesforce_System_Architect.md) — Must hold this + three other architect certs (Platform Developer I, Development Lifecycle and Deployment Architect, Integration Architect)
- **Equivalent security focus:** [AWS Certified Security Specialty (SCS-C02) ↗](../../Certifications/AWS/AWS_Security_Specialty.md) · [Microsoft Certified: Identity and Access Administrator Associate (SC-300) ↗](../../Certifications/Microsoft/Microsoft_Identity_Administrator.md) · [Okta Certified Professional (OCP) ↗](../../Certifications/Okta/Okta_Certified_Professional.md)
- **Vendor overview:** [Salesforce Vendor Overview ↗](../../Vendors/Salesforce_Vendor_Overview.md)

---

## Exam day tips

- **Time management:** 120 minutes / 60 questions = 2 minutes per question average. The second domain (Accepting Third-Party Identity) is weighted 26%, so expect roughly 15–16 questions on OAuth/SAML/federation flows — allocate study time proportionally.
- **Scenario-based questions dominate:** Unlike entry-level exams, expect multi-part scenarios describing a customer requirement (e.g., "A customer needs to federate 3 external partner orgs"). You'll identify the architecture flaw, security gap, or compliance violation, not just name definitions.
- **SAML vs. OAuth confusion is common:** Expect 2–3 questions explicitly testing whether you understand when to recommend SAML (B2E, SSO) vs. OAuth (delegated authorization, social sign-on, API access). Study the flows thoroughly.
- **Read every word:** Questions often contain subtle tradeoffs. "Which approach is LEAST intrusive?" or "Which provides the HIGHEST audit trail?" — the word matters.
- **No lab section:** Unlike some Salesforce architect certs, Plat-Arch-203 is all multiple-choice / multiple-select. No hands-on configuration required, but deep conceptual understanding is essential.
- **Bring valid ID and arrive 15 min early:** Pearson VUE proctor will verify identity, scan room. Remote testing allowed; ensure quiet space, good webcam, stable internet.

---

## Career context

**Ideal background:** 3–5 years in one of:
- Salesforce Administration + Security (then specialize in identity)
- Cloud Identity (Okta, Azure AD, Ping) with Salesforce exposure
- Enterprise IAM architecture at a consulting firm (Accenture, Deloitte, Wipro)
- Enterprise Security Engineering with identity-platform experience

**Typical next steps after certification:**
- **Pursue System Architect designation** (requires this cert + 3 others: Plat-Dev-I, Dev-Arch-304, Integ-Arch-301)
- **Specialize deeper:** Okta integration, identity governance automation (SailPoint, Karat), API security, zero-trust architecture
- **Transition to adjacent roles:** Solutions Architect (identity focus), Security Architect, Enterprise Architect
- **Industry verticalization:** FinServ (SecFi regulations), Healthcare (HIPAA identity controls), Government (FedRAMP)

**Companies hiring Salesforce IAM Architects (2026):**
- **SaaS:** Salesforce Professional Services, major Salesforce consulting partners (Accenture, Deloitte, Slalom, Traction On Demand)
- **Enterprise:** JPMorgan Chase, Goldman Sachs, Bank of America, HSBC (financial services with regulatory identity needs)
- **Tech:** Okta, Microsoft, Google (identity platform vendors seeking Salesforce federation experts)
- **Consulting:** Capgemini, IBM, Infosys, Cognizant (enterprise transformation, multi-cloud identity)

---

## Sources

- Salesforce Credentials: https://trailhead.salesforce.com/credentials/identityandaccessmanagementarchitect
- Exam blueprint PDF: https://developer.salesforce.com/resources2/certification-site/files/SGCertifiedIdentityAndAccessManagementDesigner.pdf
- Focus on Force study guide: https://focusonforce.com/salesforce-identity-and-access-management-architect-certification-guide/
- Salesforce Ben (salary guide): https://www.salesforceben.com/salesforce-architect-salary/
- Salesforce Ben (practice exams): https://www.salesforceben.com/salesforce-identity-and-access-management-architect-practice-exams-available-now/
- Salesforce Architect's Handbook (O'Reilly): https://www.oreilly.com/library/view/salesforce-architects-handbook/9781484266311/
- Glassdoor salary data: https://www.glassdoor.com/Salaries/identity-access-management-architect-salary-SRCH_KO0,36.htm
- Robert Half salary data: https://www.roberthalf.com/salary-guide
- ZipRecruiter salary data: https://www.ziprecruiter.com/Salaries/Identity-Access-Management-Architect-Salary
- PayScale ZA Solutions Architect: https://www.payscale.com/research/ZA/Job=Solutions_Architect/Salary
- Salary Expert ZA Solutions Architect: https://www.salaryexpert.com/salary/job/solutions-architect-salesforce/south-africa

---

*Last verified: 2026-05-01*
*Parent ecosystem: [Salesforce Ecosystem](../../Ecosystems/Salesforce_Ecosystem.md)*
*Parent domain: [Architecture / Identity](../../Domains/Architecture_Identity.md)*
*Vendor overview: [Salesforce Vendor Overview](../../Vendors/Salesforce_Vendor_Overview.md)*
