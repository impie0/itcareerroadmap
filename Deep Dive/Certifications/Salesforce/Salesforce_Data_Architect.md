---
cert_name: "Salesforce Certified Data Architect"
cert_code: "Data Architect"
vendor: "Salesforce"
status: "Active"
level: "Expert"
domain: "Architecture/Data"
ecosystem: "Salesforce"
last_verified: "2026-05-01"
aliases: ["Salesforce Certified Data Architecture and Management Designer", "Platform Data Architect"]
---

# Salesforce Certified Data Architect

**Data Architect** · ● **Active** · **Expert** · _Salesforce_

> **Certification:** Validates expertise in designing sound, scalable, and performant data solutions on the Salesforce Lightning Platform. Required component of the Application Architect certification pathway.

---

## Exam facts

| Field | Value |
|---|---|
| Cost | $400 USD; retake $200 |
| Duration | 105 minutes |
| Questions | 60 (multiple-choice/multiple-select; up to 5 unscored) |
| Passing | 58% (35/60 questions) |
| Format | Multiple choice / Multiple response |
| Delivery | Salesforce exam portal (online proctored) |
| Languages | English |
| Valid | 3 years from passing |
| Renewal | Pass higher-level architect cert or retake exam |
| Prerequisites | None; hands-on Salesforce experience strongly recommended |
| Released | 2021 (as Data Architecture and Management Designer) |
| Retiring | N/A |

**Vendor source —** [Salesforce Certified Platform Data Architect ↗](https://trailhead.salesforce.com/credentials/dataarchitect)

**Official exam guide —** [Certified Data Architecture and Management Designer Study Guide ↗](https://developer.salesforce.com/resources2/certification-site/files/SGCertifiedDataArchitectureandManagementDesigner.pdf)

**Exam objectives —** [Trailhead Academy ↗](https://trailheadacademy.salesforce.com/certificate/exam-data-architect---Plat-Arch-201)

---

## About

The Salesforce Certified Data Architect exam assesses the ability to design enterprise-scale data solutions on the Lightning Platform. Designed for architects and senior technical professionals with hands-on experience in Salesforce data management, this certification validates skills in data modeling, governance, migration, and performance optimization across large data volumes. Currently one of four required certifications for the Application Architect credential; no formal prerequisites exist, though substantial Salesforce platform knowledge is expected.

This certification covers the complete data architecture lifecycle: from initial data model design through governance frameworks, large-volume optimization, and migration strategies. Candidates must demonstrate mastery of Salesforce-specific considerations including field history tracking, batch processing limits, governor constraints, and platform features like Big Objects and external objects. The exam emphasizes real-world architectural decisions — when to denormalize for performance, how to handle semi-structured data, strategies for managing reference data at enterprise scale, and compliance implications of data governance choices.

---

## Domain context — Architecture / Data

Architect-level expertise in designing scalable data storage, modeling, governance, and ETL patterns across the Salesforce ecosystem and hybrid cloud integrations.

[Read full deep dive — Salesforce Ecosystem →](../../Ecosystems/Salesforce_Ecosystem.md)

---

## Topics covered

- **Data Modeling and Database Design** (~25%) — entity-relationship design, object relationships, schema optimization, field types and relationships (lookup, master-detail, many-to-many via junction objects), external objects for data beyond the org, big objects for high-volume archival, denormalization trade-offs
- **Salesforce Data Management** (~25%) — field types and their limits, data storage constraints, custom metadata and custom settings, platform data types (Currency, Percent, Encrypted), field history tracking and audit trails, data retention and archiving strategies, Salesforce Shield encryption at rest
- **Master Data Management** (~10%) — golden record creation and identity resolution, duplicate detection and merging, reference data governance, hierarchy management (territories, accounts, organizations), data stewardship roles and workflows
- **Data Governance** (~10%) — data quality rules and frameworks, field-level security (FLS) vs. object-level security, row-level security (sharing rules, org-wide defaults), audit trails and compliance logging, GDPR/CCPA/SOX implications, data retention policies
- **Large Data Volumes and Performance** (~20%) — indexing strategies for custom fields, query optimization and selectivity, skinny tables for denormalized reads, batch processing and asynchronous jobs, API-based bulk operations, formula optimization at scale, handling Governor Limits
- **Data Migration** (~10%) — ETL tool selection (Data Loader, MuleSoft, third-party platforms), data mapping and transformation, validation and reconciliation, change data capture (CDC), rollback strategies, cutover planning

*Source:* [Official Study Guide ↗](https://developer.salesforce.com/resources2/certification-site/files/SGCertifiedDataArchitectureandManagementDesigner.pdf)

---

## Common skills at Architecture / Data · Expert

*Shared content for the Architecture / Data domain at Expert level — not specific to this cert.*

- **Strategic design:** Designing multi-tenant, enterprise-scale data models that support current and future business requirements without re-architecture
- **Performance optimization:** Evaluating trade-offs between data normalization (query complexity, storage efficiency) and denormalization (query speed, redundancy), with quantified impact analysis
- **Governance leadership:** Leading master data governance initiatives, establishing data quality frameworks, defining data ownership models, and managing data stewardship across functional teams
- **Integration architecture:** Architecting ETL pipelines for high-volume, real-time, and batch scenarios; selecting appropriate integration patterns and tools; managing data synchronization at scale
- **Compliance and risk:** Assessing compliance requirements (GDPR, HIPAA, SOX, CCPA, industry-specific regulations) and translating them into data architecture controls, access policies, and audit mechanisms
- **Mentorship and strategy:** Mentoring junior architects, defining long-term data strategy roadmaps, communicating data requirements to executive stakeholders, and driving data-driven decision-making culture

---

## Exam preparation strategy

Passing the Salesforce Data Architect exam typically requires 8-16 weeks of focused study, depending on prior experience. Candidates should have hands-on Salesforce platform experience with custom object implementation, data modeling, and administration. The exam emphasizes scenario-based questions — you may be presented with a business requirement (e.g., "integrate 10M customer records with minimal latency") and asked to select the appropriate architectural approach.

**Recommended preparation path:**

1. **Baseline assessment (Week 1):** Take a free practice exam to identify weak areas. Common gaps include master data management concepts, big object use cases, and platform governor limit awareness.
2. **Official learning (Weeks 2-8):** Complete the Salesforce Trailhead Architect Journey: Data Architecture Trailmix (approx. 24 hours). Prioritize modules on data modeling, large data volumes, and data governance. Create a developer org and implement sample models to reinforce concepts.
3. **Deep study (Weeks 6-12):** Review the official exam guide section-by-section. Use Focus on Force study guide for scenario-based practice. Take notes on architectural trade-offs (e.g., denormalization vs. complexity, external objects vs. data integration).
4. **Practice exams (Weeks 10-14):** Take full-length practice exams from Focus on Force. Target 75%+ before attempting the actual exam. Review missed questions carefully — understand why the correct answer is better than your choice.
5. **Final review (Week 15-16):** Skim Salesforce best practices documentation, review flashcards on governor limits, and get adequate sleep before exam day.

Key focus areas: MDM and identity resolution (often underestimated), big objects vs. standard objects decision framework, and field history/audit trail implications on performance.

---

## Recommended courses at Architecture / Data · Expert

| Provider | Title | Cost | URL |
|---|---|---|---|
| Salesforce Trailhead | Architect Journey: Data Architecture Trailmix | Free | [↗](https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-data-architecture-and-management) |
| Salesforce Trailhead Academy | Build Data Architect Expertise (ARC201) | Free | [↗](https://trailheadacademy.salesforce.com/classes/arc201-build-data-architect-expertise) |
| Salesforce Ben | Salesforce Data Architect Certification Guide & Tips | Free | [↗](https://www.salesforceben.com/salesforce-data-architect-certification-guide-tips/) |
| Focus on Force | Platform Data Architect Study Guide | $199–$399 | [↗](https://focusonforce.com/courses/data-architecture-and-management-designer-study-guide/) |
| Udemy | Salesforce Certified Data Architect Course | $15–$100 | [↗](https://www.udemy.com/course/salesforce-certified-data-architect-course/) |

---

## Practice exams

| Provider | Title | Cost | URL |
|---|---|---|---|
| Focus on Force | Platform Data Architect Practice Exams | $99–$199 | [↗](https://focusonforce.com/salesforce-data-architecture-and-management-designer-certification-practice-exams/) |
| Salesforce Ben | Free Practice Questions | Free | [↗](https://www.salesforceben.com/salesforce-data-architect-certification-guide-tips/) |
| Exam Topics | Data Architect Practice Test | Free (partial) | [↗](https://www.examtopics.com/exams/salesforce/certified-data-architect/) |

---

## Books

| Title | Author | Publisher | Year | ISBN | URL |
|---|---|---|---|---|---|
| Salesforce Data Architect Certification Guide | Aaron Allport | Packt Publishing | 2022 | 978-1-80181-802-5 | [↗](https://www.packtpub.com/en-us/product/salesforce-data-architect-certification-guide-9781801818025) |
| Salesforce Certified Data Architect: Rapid Certification Exam Prep Guide | Various | Independently published | 2023 | 979-8389875487 | [↗](https://www.amazon.com/SALESFORCE-CERTIFIED-DATA-ARCHITECT-CERTIFICATION/dp/B0C1HRT7ZL) |

---

## Typical job titles at Architecture / Data · Expert

Data Architect · Technical Architect · Solutions Architect (Data Focus) · Enterprise Architect · Chief Data Officer (CTO/CDO track) · Salesforce Architect

*(Job titles drawn from current job-board postings that list this cert as required or preferred.)*

---

## Salary

| Region | Range | Source |
|---|---|---|
| USD | $160K – $250K | [Levels.fyi ↗](https://www.levels.fyi/companies/salesforce/salaries/solution-architect/title/data-architect) · [6FigR ↗](https://6figr.com/us/salary/salesforce-data-architect--t) · [ZipRecruiter ↗](https://www.ziprecruiter.com/Salaries/Salesforce-Architect-Salary) |
| ZAR | R577K – R982K | [PayScale ZA ↗](https://www.payscale.com/research/ZA/Job=Solutions_Architect/Salary) · [SalaryExpert ZA ↗](https://www.salaryexpert.com/salary/job/solutions-architect-salesforce/south-africa) |
| GBP | £69K – £107K | [PayScale UK ↗](https://www.payscale.com/research/UK/Job=Technical_Architect/Salary/1abb4720/Salesforce) · [Glassdoor UK ↗](https://www.glassdoor.co.uk/Salaries/salesforce-architect-salary-SRCH_KO0,20.htm) |

**Salary note:** Ranges reflect architect-level Salesforce roles requiring or preferring this certification. Actual compensation varies significantly by geography, company size, and specialization (solution vs. technical vs. data).

---

## Skills validated

*Cert-specific — what this exam actually tests, distinct from shared architectural skills.*

- **Object and field design:** Designing custom objects, fields, and relationships (lookup vs. master-detail) for large-scale implementations; choosing between standard picklists, custom metadata types, and external object references; managing field redundancy
- **Storage evaluation:** Evaluating data storage options including standard objects (15GB per org), custom objects, big objects (up to 2TB, read-only), external objects (federated/virtual), and deciding which is appropriate for each data pattern
- **MDM and data quality:** Implementing master data management (MDM) strategies, deduplication logic, golden record identification, and establishing reference data governance across the enterprise
- **Governance frameworks:** Defining data governance policies, quality rules, and compliance controls; designing field-level security (FLS) and row-level security (sharing rules) architecture; mapping regulatory requirements to org design
- **Performance optimization:** Optimizing query performance under high-volume scenarios using indexing strategies for custom fields, query selectivity analysis, skinny tables for denormalized reads, and formula optimization
- **Migration architecture:** Architecting data migration strategies using ETL tools (Data Loader, MuleSoft, Informatica, Talend), designing validation/reconciliation processes, managing data transformation, and planning cutover ceremonies
- **External integration:** Integrating external data sources and managing ongoing data synchronization using APIs, platform events, change data capture (CDC), and middleware tools
- **Platform constraints:** Assessing Salesforce governor limits (API calls, batch processing, SOQL queries, DML statements), designing solutions that operate within constraints, and documenting architectural trade-offs

---

## Who should pursue this cert

The Data Architect certification is well-suited for:

- **Salesforce Administrators and Developers** (3+ years experience) looking to transition into architect roles. The cert validates your progression from implementation to strategic design.
- **Data analysts and database architects** from non-Salesforce backgrounds wanting to specialize in the Salesforce ecosystem. Your relational database design experience transfers directly.
- **Solutions Architects** seeking to deepen expertise in data strategy and governance as part of the Application Architect pathway.
- **Enterprise data stewards and MDM specialists** responsible for data governance frameworks across large CRM deployments.
- **Integration architects** who want to understand data layer requirements for complex API and middleware designs.

The certification is less suitable for:

- **Junior developers or admins** (less than 2 years) without hands-on custom object design experience.
- **Functional consultants** without exposure to data modeling or platform architecture.
- **Infrastructure or DevOps roles** unless pursuing a broader architect transition.

Typical time-to-readiness: 8-16 weeks of study, depending on experience level and background.

---

## Application Architect pathway

The Salesforce Data Architect credential is one of four required certifications for the coveted **Salesforce Certified Application Architect** designation (alongside System Architect, Integration Architect, and one additional architect cert). There are no prerequisites to take the Data Architect exam itself, but earning the Application Architect credential requires all four certs to be passed (in any order). The Application Architect designation is considered the flagship Salesforce architect certification and is heavily valued in consulting and large enterprise roles.

**Earning Application Architect opens doors to:** Principal Consultant roles, enterprise-level project leadership, thought leadership opportunities, speaking engagements at Salesforce events, higher billing rates in consulting (typically 15-25% premium), and eligibility for specialized programs (Salesforce Partner Excellence, Trailblazer Community Leadership).

---

## Career impact and market dynamics

**Job market demand:** Data Architect roles in Salesforce are consistently in high demand, particularly in financial services, healthcare, and retail verticals where data governance and compliance are critical. Consulting firms (Deloitte, Accenture, PwC, IBM) and Salesforce partners actively recruit certified Data Architects.

**Typical compensation impact:** Candidates who earn the Data Architect cert report salary increases of 12-25% compared to non-certified peers in similar roles. The credential signals enterprise-level responsibility and is often a prerequisite for manager-track or principal consultant roles.

**Industry-specific demand:**
- **Financial services:** High demand for data governance and compliance expertise (SEC, FINRA). Data Architect salary premium: +20-30%.
- **Healthcare:** Master data governance and HIPAA compliance. Data Architect salary premium: +18-25%.
- **Retail/CPG:** Large-volume customer data management, loyalty program integration. Salary premium: +12-20%.
- **Nonprofits/Government:** Lower salary ceiling but strong career growth into leadership roles.

**Remote work capability:** Approximately 60-70% of Data Architect roles are fully remote or hybrid, based on recent job board surveys (Indeed, LinkedIn, Glassdoor). Consulting roles tend to be more hybrid; product/technology roles are more frequently remote.

**International opportunities:** Strong demand in EMEA (UK, Germany, France), APAC (Australia, Singapore), and Canada. ZAR salaries reflect mid-market rates; moving to UK/EU/US typically increases compensation by 40-60%.

---

## Real-world scenarios from the exam

The exam presents realistic business challenges that require architectural decisions. Here are examples of the types of scenarios you'll encounter:

**Scenario 1: Large-volume customer integration**
*A company needs to load 50M customer records from an external data warehouse into Salesforce. They want real-time synchronization and the ability to report on customer data immediately.*

Key decision points: Should you use standard objects or big objects? How do you handle real-time sync given Salesforce API limits? What indexing strategy minimizes SOQL query times?

**Scenario 2: Master data governance**
*A retail enterprise has 15 separate Salesforce orgs (regional, by division). Each has its own customer master data, causing duplicate customer records across the business. They want a single source of truth for customer data.*

Key decision points: How do you establish a golden record? Should you consolidate into one org or maintain federated masters with synchronization? What deduplication strategy works at this scale?

**Scenario 3: Compliance and data retention**
*A financial services company must comply with SEC regulations requiring 7-year data retention for audit trails and specific HIPAA requirements for healthcare affiliate data. Storage is becoming expensive.*

Key decision points: How do you implement selective field history to reduce storage? Should you archive old data to big objects? How do you design field-level security and sharing rules to meet compliance?

**Scenario 4: Performance at scale**
*A SaaS company has grown to 500K accounts in a single org. Their custom financial reporting formulas now take 45 seconds to calculate. Users report slow page loads on the account detail page.*

Key decision points: Should you denormalize with skinny tables? How do you index custom fields for query optimization? Should you move to batch processing or external reporting tools?

**Scenario 5: External data integration**
*A company needs to combine Salesforce customer data with real-time pricing data from an external system (updated every 5 minutes) and geolocation data from a third-party service.*

Key decision points: Should you use external objects, APIs, or middleware? What governor limits matter here? How do you ensure data consistency without overwhelming API limits?

These scenarios test not just memorized facts, but architectural thinking — the ability to balance requirements, trade-offs, and constraints.

---

## Common exam pitfalls and tips

**Frequent weak areas for candidates:**

1. **Master Data Management (MDM)** — Candidates often underestimate the depth of MDM concepts. The exam expects understanding of golden record creation, identity resolution strategies, and deduplication logic beyond basic duplicate management.
2. **Big Objects vs. Standard Objects decision framework** — Many candidates don't deeply understand when to use Big Objects (high-volume archival, read-only, no SOQL aggregation) vs. standard objects (normal transactional data). Questions often present scenarios requiring this distinction.
3. **Governor Limits and their implications** — Knowing the limits is insufficient; you must understand architectural workarounds (batch processing, API patterns, selective field history).
4. **Field history tracking impact on performance** — Underestimated topic; candidates often don't realize field history is stored separately and can cause query performance issues at scale.
5. **External Objects and federated data** — Scenarios involving external data sources often trip up candidates. Understanding when to use external objects vs. API integrations vs. big objects is crucial.

**Exam success tips:**

- **Read questions carefully.** Exam questions are scenario-based and deliberately multi-layered. The first answer that sounds right is often wrong.
- **Time management:** 60 questions in 105 minutes = ~1.75 min per question. Flag difficult questions and return to them; don't spend more than 2 minutes on any single question initially.
- **Focus on trade-offs.** The exam rewards understanding architectural trade-offs: "This design is best because... while accepting these costs..."
- **Use Salesforce terminology.** Answers using correct Salesforce terminology (e.g., "field-level security," "org-wide defaults," "sharing rules") are more likely to be correct than generic terms.
- **Practice with actual Salesforce scenarios.** Study using real-world case studies, not generic database design concepts.
- **Governor Limits flashcards:** Create physical or digital flashcards for limits (API call limits per minute, DML statements per transaction, SOQL rows retrieved). These are testable and frequently appear.

---

## Application Architect completion roadmap

If you're pursuing the full **Salesforce Certified Application Architect** designation, you need to pass all four required certs. Order of pursuit doesn't matter, but here's a recommended learning sequence:

**Recommended sequence:**
1. **System Architect first** — Start here to understand org design, security, platform governance. Provides foundation for all other architect certs.
2. **Data Architect second** — Now focus on data strategy and governance; builds naturally after system architecture.
3. **Integration Architect third** — Understand how data flows between systems and org; leverages both system and data knowledge.
4. **Platform Developer II (PDII) or additional architect cert** — Choose based on career goals (PDII for coding depth, or another architect specialty like B2B/B2C Solution Architect for customer-facing roles).

**Estimated timeline:** 24-32 weeks total (roughly 6-8 weeks per certification), assuming 10-15 hours/week of study and concurrent preparation.

**Exam cost:** Approximately $1,600-$2,000 total for all four certs (at $400 per cert).

**Value:** Upon earning all four, you'll have the prestigious Application Architect badge, which typically leads to 20-30% salary increase, Principal Consultant or Technical Lead roles, and consulting premium rates.

---

## Related certifications

- **Stacks with:** [Salesforce Certified Application Architect ↗](../../Certifications/Salesforce/Salesforce_Application_Architect.md) — required prerequisite (one of four needed)
- **Often paired with:** [Salesforce Certified Integration Architect ↗](../../Certifications/Salesforce/Salesforce_Certified_Integration_Architect.md) · [Salesforce Certified System Architect ↗](../../Certifications/Salesforce/Salesforce_Certified_System_Architect.md)
- **Prerequisite for:** [Salesforce Certified Application Architect ↗](../../Certifications/Salesforce/Salesforce_Application_Architect.md) — one of four required certs
- **Equivalents at this level:** [AWS Certified Data Analytics Specialty ↗](../../Certifications/AWS/AWS_Data_Analytics_Specialty.md) · [Google Cloud Certified Professional Data Engineer ↗](../../Certifications/GCP/GCP_Professional_Data_Engineer.md) — similar scope and difficulty
- **Vendor overview:** [Salesforce Ecosystem Overview ↗](../../Ecosystems/Salesforce_Ecosystem.md)

---

## Key concepts to master

Before exam day, you should be able to confidently explain these concepts without notes:

**Data modeling fundamentals:**
- Relationship types (lookup vs. master-detail vs. many-to-many) — when to use each, limitations
- Denormalization patterns — when to break normal form for performance, storage cost/benefit analysis
- Field history tracking — how it works technically, performance implications, selective field history strategy
- External vs. standard vs. big objects — feature comparison matrix, decision criteria for each
- Junction objects — how they implement many-to-many relationships, limitations

**Governor limits and workarounds:**
- API call limits (15/24 hour or 1000/minute depending on edition)
- SOQL query limits (50,000 rows returned, timeout at 120 seconds)
- DML statement limits (150 per transaction)
- CPU time and heap size limits
- Storage limits per org type (standard, custom objects, attachments, file)
- Architectural workarounds for each limit (batching, indexing, async processing, etc.)

**Master data management (MDM):**
- Golden record definition and creation process
- Identity resolution (how to match records across data sources)
- Duplicate detection and matching rules
- Data stewardship and governance roles
- Hierarchy management for org structures

**Governance and compliance:**
- Field-level security (FLS) — object + field level control, precedence rules
- Sharing rules — record-level access, org-wide defaults, team-based sharing
- Audit trails and compliance requirements (GDPR, HIPAA, SOX implications)
- Data retention and archival strategies
- Encryption requirements (Shield, encrypted fields, data at rest vs. in transit)

**Migration and integration:**
- ETL vs. ELT approaches in Salesforce context
- Data mapping and transformation logic
- Validation and reconciliation strategies
- Rollback and restart considerations
- Change data capture (CDC) for ongoing synchronization

---

## Study resources index

**Free resources (100% recommended):**
- Salesforce Trailhead Architect Journey: Data Architecture Trailmix (24 hours) — the official learning path, covers all exam topics
- Salesforce Ben's blog and practice questions — supplementary explanations and free practice
- Exam Topics practice questions — community-generated Q&A on real exam topics

**Paid study resources (value-add options):**
- Focus on Force study guide ($199-$399) — scenario-based, most comprehensive third-party prep
- Udemy courses ($15-$100) — typically discount pricing, good for visual learners
- Books ($15-$40) — deeper dives into specific topics, good for slow reading/reference

**Time allocation recommendations (assuming 12-week study cycle):**
- Weeks 1-4: Official Trailhead learning (24 hours = 2 hours/week + hands-on practice)
- Weeks 3-8: Focus on Force study guide (15-20 hours)
- Weeks 4-10: Hands-on lab work in developer org (20-30 hours)
- Weeks 7-12: Practice exams and review (20-30 hours)
- Week 13: Final review and exam (3-5 hours)

**Total suggested study time: 90-120 hours** over 12-16 weeks for candidates with 3+ years Salesforce experience.

---

## Sources

- Salesforce credential page: https://trailhead.salesforce.com/credentials/dataarchitect
- Official study guide: https://developer.salesforce.com/resources2/certification-site/files/SGCertifiedDataArchitectureandManagementDesigner.pdf
- Salesforce Ben certification guide: https://www.salesforceben.com/salesforce-data-architect-certification-guide-tips/
- Focus on Force study materials: https://focusonforce.com/salesforce-certifications/salesforce-data-architecture-and-management-designer-certification-information/
- Trailhead Academy course: https://trailheadacademy.salesforce.com/certificate/exam-data-architect---Plat-Arch-201
- Aaron Allport certification guide: https://www.packtpub.com/en-us/product/salesforce-data-architect-certification-guide-9781801818025
- US salary data: https://www.levels.fyi/companies/salesforce/salaries/solution-architect/title/data-architect
- ZAR salary data: https://www.payscale.com/research/ZA/Job=Solutions_Architect/Salary
- GBP salary data: https://www.payscale.com/research/UK/Job=Technical_Architect/Salary/1abb4720/Salesforce

---

*Last verified: 2026-05-01*
*Parent ecosystem: [Salesforce Ecosystem](../../Ecosystems/Salesforce_Ecosystem.md)*
*Parent domain: [Architecture/Data Domain](../../Domains/Architecture_Data.md)*
*Vendor overview: [Salesforce Overview](../../Vendors/Salesforce_Vendor_Overview.md)*
