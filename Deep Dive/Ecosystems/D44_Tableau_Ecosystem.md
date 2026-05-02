---
title: "Tableau Ecosystem Deep Dive"
slug: "tableau-ecosystem"
code: "D44"
kind: "ecosystem"
lastUpdated: "2026-04-30"
vendors: ["Tableau", "Salesforce"]
tags: ["bi", "analytics", "tableau"]
---

# D44: Tableau Ecosystem Deep Dive

**Tableau** is a market-leading **business intelligence (BI)** and data visualization platform, owned by Salesforce (acquired June 2019 for $15.7 billion). It enables analysts, executives, and business users to connect to data sources, transform raw data into interactive visualizations, and share insights across organizations. Tableau's strength lies in visual storytelling, intuitive drag-and-drop authoring, and robust enterprise deployment options.

---

## Overview & Strategic Context

### Market Position

Tableau is the global leader in self-service analytics and data visualization. Post-acquisition by Salesforce in 2019, the platform has integrated with Salesforce's Einstein generative AI technology and Salesforce Data Cloud, positioning it as a comprehensive data intelligence suite competing against Microsoft Power BI, Google Looker, Qlik Sense, and ThoughtSpot.

As of April 2026, Tableau operates under Salesforce's analytics umbrella alongside CRM Analytics (formerly Einstein Analytics) and the new Tableau Next—an agentic analytics platform combining Tableau's visualization strengths with AI-driven insights.

### Salesforce Acquisition (June 2019)

On June 10, 2019, Salesforce and Tableau entered a definitive agreement for an all-stock acquisition with an enterprise value of **$15.7 billion** (net of cash). The deal closed in August 2019—remarkably fast for a transaction of this magnitude. [Salesforce Completes $15.7B Tableau Purchase](https://www.wealthmanagement.com/financial-technology/salesforce-completes-15-7-billion-tableau-purchase)

Under the acquisition:
- Tableau remained headquartered in Seattle, Washington, and continues to operate independently under its own brand
- CEO Adam Selipsky maintained operational autonomy
- The integration focused on interoperability between Tableau and Einstein Analytics (now extended to Tableau CRM Analytics and Data Cloud)
- Tableau's open, platform-agnostic architecture was preserved, maintaining support for diverse data sources and environments

---

## Product Portfolio (2026)

### Flagship Products

#### Tableau Desktop
The original and core Tableau product. Desktop is the authoring tool where analysts and developers create interactive dashboards, reports, and visualizations. Features include:
- Drag-and-drop interface for rapid prototyping
- Direct connectivity to 100+ data sources (databases, cloud platforms, SaaS apps)
- Advanced calculations, parameters, and custom filters
- Export to PDF, image, PowerPoint for offline sharing
- VizQL (Visual Query Language) proprietary technology translates visual design into database queries

#### Tableau Server (On-Premises)
A self-hosted analytics platform offering:
- Enterprise-grade governance, permissions, and access controls
- Content distribution at scale
- Requires on-premises infrastructure (Linux or Windows)
- Ideal for highly regulated industries requiring data residency compliance
- Integration with Active Directory/LDAP for user management

#### Tableau Cloud (formerly Tableau Online)
The fully managed SaaS deployment option:
- Hosted by Salesforce on AWS infrastructure with global scalability
- Enterprise-grade security and compliance (SOC 2, ISO 27001, GDPR, HIPAA, FedRAMP)
- Automatic updates and maintenance (no infrastructure burden)
- Native support for Salesforce Data Cloud integration
- Pay-as-you-go licensing model (Creator, Explorer, Viewer tiers)

#### Tableau Prep
Data preparation and cleansing tool for cleaning and combining data before analysis:
- Visual workflow builder (no code required)
- Handles missing values, duplicates, outliers, transformations
- Generates repeatable scripts for production pipelines
- Integrates with Desktop and Server/Cloud for automated workflows

#### Tableau Public (Free)
Public-facing visualization platform:
- Free tier for creating and sharing dashboards publicly (data is visible to all)
- Community galleries, Makeover Monday challenges, and Iron Viz competition leverage this platform
- Acts as a portfolio tool for Tableau practitioners

---

### Next-Generation AI & Analytics (2026)

#### Tableau GPT & Tableau Pulse
Salesforce integrated **Einstein generative AI** into Tableau, launching:

**Tableau GPT**: Natural language capabilities that allow analysts to:
- Ask questions of their data in plain English ("Show me sales by region")
- Auto-generate visualizations from text prompts
- Use VizQL + GPT to translate intent into accurate database queries
- Get intelligent recommendations for charts and questions based on usage patterns

**Tableau Pulse**: An agentic analytics layer delivering:
- Personalized, AI-driven insights sent proactively to users
- Dashboard-integrated metric cards with pace-to-goal tracking
- Alerts when metrics deviate from trend (via email, mobile, Slack, desktop)
- Microsoft 365 embedding (PowerPoint, Word documents with live refresh)
- Filter synchronization between Pulse metrics and parent dashboards
- Enhanced Q&A with in-line supporting visualizations

#### Tableau Next
A new agentic analytics platform (2026+) combining:
- Best-of-breed Tableau visualization capabilities
- Einstein generative AI for data discovery
- Salesforce Data 360 unified customer data platform
- Positioned to modernize legacy Einstein Analytics and CRM Analytics user bases

#### Tableau CRM Analytics (formerly Einstein Analytics)
Continues as a standalone, fully supported product:
- No forced migration; CRM Analytics remains actively developed
- Integration points with Tableau via Salesforce Data Cloud
- Optimized for Salesforce data and CRM use cases

#### Salesforce Data Cloud for Tableau
New 2026 capability enabling:
- Direct querying of customer data from Data Cloud inside Tableau
- "Instant Analytics" feature for analyzing millions of records with a single click
- Unified customer view across internal and external data sources
- Real-time analytics on Salesforce CRM, commerce, marketing, service data

---

## Certification Ladder

All Tableau certifications are administered by Salesforce. No formal prerequisites exist, but experience recommendations are below.

### Tableau Desktop Specialist (Entry-Level)

**Requirements:**
- No formal prerequisite; entry-level credential
- Recommended: 2–4 weeks of study with 1–2 hours daily practice
- Assumed hands-on experience: basic Tableau Desktop skills

**Exam Details:**
- **Cost:** $100 USD
- **Format:** 45 multiple-choice questions
- **Duration:** 60 minutes
- **Pass Score:** 70%
- **Renewal:** No expiration; credential is valid indefinitely

**Topics Covered:**
- Connecting to and importing data
- Building worksheets and dashboards
- Formatting and labeling visualizations
- Chart types and best practices
- Filtering and parameters
- Basic calculations

**Path Forward:** Most analysts start here, then advance to Certified Data Analyst after 6–12 months of hands-on experience.

*Source: [Tableau Certification Guide 2026](https://careery.pro/blog/data-analyst-careers/tableau-certification-guide/)*

### Tableau Certified Data Analyst (Intermediate)

**Requirements:**
- Recommended: 6–12 months hands-on experience with Tableau Desktop
- Prerequisites: None formal; Desktop Specialist is often first step
- Study time: 4–8 weeks with prior experience

**Exam Details:**
- **Cost:** $250 USD
- **Format:** Multiple-choice and multiple-select questions
- **Duration:** 90 minutes
- **Pass Score:** 750 on a scale of 100–1000
- **Renewal:** Valid for 2 years; renewal exam required to maintain

**Topics Covered:**
- Advanced calculations and LOD expressions
- Data source preparation and union/joins
- Dashboard design and user experience
- Storytelling with data
- Performance optimization
- Advanced filtering and parameters
- Statistical analysis and forecasting

*Source: [Salesforce Certified Tableau Data Analyst - Trailhead Academy](https://www.tableau.com/learn/certification/certified-data-analyst)*

### Tableau Server Certified Associate (Administrator)

**Requirements:**
- Recommended: 6+ months experience with Tableau Server or 1+ year with Tableau products (Desktop, Server, Cloud, Prep, Bridge)
- Strongly recommended: Involvement in 2+ full Tableau deployments
- No formal prerequisites

**Exam Details:**
- **Cost:** $250 USD
- **Format:** 55 multiple-choice and multiple-response questions
- **Duration:** 90 minutes
- **Pass Score:** 750 on a scale of 100–1000
- **Renewal:** Valid for 2 years

**Topics Covered:**
- Server architecture and deployment options
- User and group management
- Permissions and licensing models
- Content organization and governance
- Performance monitoring and optimization
- Disaster recovery and backup strategies
- Tableau Bridge (on-premises data refresh connector)
- Intersite viewpoint replication
- SAML/Active Directory integration

*Source: [Tableau Server Certified Associate Quick Facts (2025)](https://certificationpractice.com/exam-overviews/tableau-server-certified-associate-quick-facts)*

### Salesforce Certified Tableau Architect (Advanced)

**Requirements:**
- Recommended: 2+ years administering Tableau Cloud, Server, or Bridge
- Recommended: Experience with at least 1 distributed Tableau Server architecture (public cloud, private cloud, or on-premises)
- No formal prerequisites; background in IT/analytics infrastructure strongly recommended

**Exam Details:**
- **Cost:** $250 USD
- **Format:** 40–45 multiple-choice and multiple-select + 6–8 practical hands-on lab tasks
- **Duration:** 120 minutes (includes 3 min NDA + 5 min tutorial)
- **Pass Score:** 750 on a scale of 100–1000
- **Renewal:** Valid for 2 years

**Exam Style:**
- Scenario-based questions requiring analysis of business and technical requirements
- Practical labs simulating real-world architecture decisions (e.g., scaling strategy, disaster recovery design, permission models)
- Focus on enterprise-grade deployment, governance, and optimization

*Source: [Salesforce Certified Tableau Architect - Trailhead Academy](https://trailheadacademy.salesforce.com/certificate/exam-tableau-architect---Analytics-Arch-201)*

### Tableau Cloud Certifications

As Tableau Cloud adoption grows, Salesforce has developed cloud-specific certifications (details sparse as of April 2026). Cloud variants typically cover:
- Cloud-native deployment and scaling
- SaaS-specific permission models and auditing
- Integration with Salesforce ecosystems
- Check [Tableau Certification](https://www.tableau.com/learn/certification) for current availability and structure.

---

## Career Paths & Salary Ranges (USD, 2026)

### Junior Tableau Analyst / BI Developer
- **Salary Range:** $65–95K
- **Prerequisites:** Desktop Specialist cert, 0–2 years experience
- **Responsibilities:** Build basic dashboards, support data requests, create routine reports
- **Growth Path:** → Tableau Developer

### Tableau Developer
- **Salary Range:** $95–135K
- **Typical Level:** 2–5 years experience; Certified Data Analyst common
- **Responsibilities:** Design and build complex dashboards, optimize data sources, mentor junior analysts
- **Entry Path:** Help Desk/IT → BI Analyst; Data Analyst path; SQL/database background accelerates
- **Average Salary (2026):** $114,606 (Glassdoor)
  - 25th percentile: $88,621
  - 75th percentile: $149,645

*Source: [Tableau Developer: Average Salary & Pay Trends 2026](https://www.glassdoor.com/Salaries/tableau-developer-salary-SRCH_KO0,17.htm)*

### Senior Tableau Developer / Data Visualization Specialist
- **Salary Range:** $130–175K
- **Typical Level:** 5–10 years; Certified Data Analyst or Architect cert
- **Responsibilities:** Lead dashboard strategy, establish design standards, performance tuning, mentoring
- **Growth Path:** → Tableau Architect or Solutions Architect

### Tableau Architect / BI Architect
- **Salary Range:** $170–220K
- **Typical Level:** 8+ years; Certified Architect common
- **Responsibilities:** Enterprise architecture, technology selection, scaling strategies, vendor relationships, P&L ownership
- **Growth Path:** → Chief Data Officer, VP Analytics, Solutions Architect, Consulting Partner

---

## Training & Learning Paths

### Official Tableau Resources (Free & Paid)

#### Tableau eLearning
- **Platform:** [tableau.com/learn](https://www.tableau.com/learn)
- **Cost:** Free intro courses; Tableau Academy has paid advanced modules
- **Content:** 36+ self-paced courses, live training sessions, official certifications
- **Format:** Video modules with assessments and skill badges
- **Coverage:** Beginner to expert levels, certified learning paths

[eLearning: Tableau Web-Based Training](https://www.tableau.com/learn/training/elearning)

#### Tableau Academy (Salesforce Trailhead Academy)
- Official Salesforce training platform
- Structured learning paths with hands-on labs
- Certification prep modules
- Integration with Salesforce ecosystem training

[Salesforce Training - Learn Tableau - Trailhead Academy](https://trailheadacademy.salesforce.com/products/tableau)

### Third-Party Platforms

#### Coursera
**Data Visualization with Tableau Specialization:**
- 5-course series in collaboration with Tableau
- Includes: Fundamentals of Visualization, Essential Design Principles, Visual Analytics, Creating Dashboards & Storytelling
- Hands-on projects with real datasets
- Certificate upon completion (counts toward résumé)

[Coursera Tableau Courses](https://www.coursera.org/courses?query=tableau)

#### Udemy
- 500+ Tableau courses available
- Popular instructors: Kirill Eremenko, Lukas Halim (advanced), specific certification tracks
- 30-day money-back guarantee
- Cost: $10–50 per course (frequent sales)
- Coverage: Desktop, Prep, Server, Cloud, advanced analytics

#### Pluralsight
- Vetted, structured learning paths
- Multiple videos and hands-on exercises per module
- Typical module duration: ~4 hours
- Requires paid subscription ($299–499/year)
- Quality assurance on all content

[Coursera vs Pluralsight (2026): Which Platform Is Best?](https://missiongraduatenm.org/coursera-vs-pluralsight/)

### Free & Community Resources

#### Tableau Public
- Free platform for creating and publicly sharing visualizations
- Access to galleries, examples, and community vizzes
- Makeover Monday community challenge participation
- [Tableau Public](https://public.tableau.com/)

#### Makeover Monday
- Weekly community challenge (2017–2023, hiatus as of 2024)
- Participants critique and improve existing visualizations
- 10,000+ community vizzes posted
- Hosted by Andy Kriebel and Eva Murray; continues to inspire learning despite hiatus

[Tableau Community Celebrates the Impact of Makeover Monday](https://www.tableau.com/blog/tableau-community-celebrates-impact-makeover-monday)

#### Tableau Community
- Official forums, user groups, and networking
- Tableau Visionaries program recognizes distinguished leaders
- Regional meetups and online communities
- Access to Salesforce Trailhead badges and paths

[How to Get Started with the Tableau Community](https://www.tableau.com/blog/ways-get-started-tableau-community)

---

## Books & Foundational Resources

### Core Data Visualization & Dashboard Design

**The Big Book of Dashboards: Visualizing Your Data Using Real-World Business Scenarios**
- **Authors:** Steve Wexler, Jeffrey Shaffer, Andy Cotgreave
- **Publisher:** John Wiley & Sons
- **Year:** 2017
- **Pages:** ~400
- **Focus:** 28 real-world case studies across healthcare, finance, HR, sports, logistics; design patterns and anti-patterns; platform-agnostic principles applicable to Tableau
- **Audience:** Dashboard designers, business analysts, BI leaders
- [The Big Book of Dashboards | Wiley](https://www.wiley.com/en-us/The+Big+Book+of+Dashboards:+Visualizing+Your+Data+Using+Real+World+Business+Scenarios-p-9781119282716)

**Storytelling with Data: A Data Visualization Guide for Business Professionals**
- **Author:** Cole Nussbaumer Knaflic
- **Publisher:** John Wiley & Sons
- **Year:** 2015
- **Pages:** ~280
- **Focus:** Narrative structure, visual perception, color theory, audience psychology, transforming data into actionable stories
- **Audience:** Analysts, executives, anyone communicating with data
- **Impact:** Translated into 12+ languages; used as textbook in 100+ universities
- [Storytelling with Data | Wiley](https://www.wiley.com/en-us/Storytelling+with+Data:+A+Data+Visualization+Guide+for+Business+Professionals-p-9781119002253)

**Information Dashboard Design: Displaying Data for At-a-Glance Monitoring**
- **Author:** Stephen Few
- **Publisher:** Analytics Press
- **Year:** 2013 (2nd edition); original 2006
- **Pages:** 260
- **Focus:** Perceptual psychology, dashboard design principles, sparklines, bullet graphs, common design mistakes
- **Audience:** Dashboard designers, BI architects, data analysts
- **Distinction:** Science-based approach grounded in cognitive psychology and visual perception
- [Analytics Press - Information Dashboard Design](https://www.analyticspress.com/idd.php)

**Practical Tableau: 100 Tips, Tutorials, and Strategies from a Tableau Zen Master**
- **Author:** Ryan Sleeper
- **Publisher:** O'Reilly Media
- **Year:** 2018
- **Pages:** ~400
- **Focus:** Tableau-specific techniques, parameter use, color theory, INSIGHT framework for dashboard building, storytelling tactics
- **Audience:** Tableau practitioners, developers, experienced analysts
- **Author Credential:** Recognized Tableau Zen Master; Tableau Public Viz of the Year; Iron Viz Champion; founder of Playfair Data
- [Practical Tableau | O'Reilly](https://www.oreilly.com/library/view/practical-tableau/9781491977309/)

---

## Community & Events

### Tableau Conference (Annual)
- **2026 Dates:** May 5–7, San Diego Convention Center + Salesforce+ livestream
- **Flagship Events:**
  - Iron Viz Championship (world's largest data visualization competition)
  - Data Village (hands-on learning booths)
  - Data Night Out (networking, community events)
  - Breakout sessions, keynotes, workshops
- **Purpose:** Product launches, community celebration, peer learning, vendor announcements

[Tableau Conference 2026 | Salesforce](https://www.salesforce.com/tableau-conference/)

### Iron Viz Competition
- **Format:** Global qualifier (open 1 month, typically Q3) + live championship at TC
- **2026 Details:** 122 submissions in global qualifier; theme was "Food & Drink"; prize pool up to $15,000
- **2026 Finalists:** Anne Pregler, Kevin Wee, Brian Moore
- **Judging Criteria:** Data storytelling, design, technical execution, originality
- **Audience:** Beginner to expert Tableau users; judged by Tableau ambassadors, past finalists, and guest experts
- **Purpose:** Showcase innovation, recognize excellence, inspire the community

[Iron Viz | Tableau](https://www.tableau.com/community/iron-viz)

### Tableau Visionary Program
- Recognition of top community leaders and contributors
- Members mentor, speak, and advance the state of data visualization
- Invitation-only; elevates influence and networking

### Regional User Groups
- Tableau has active user groups globally (North America, EMEA, Asia-Pacific)
- Local meetups for peer learning, best practices, networking
- Lower cost / commitment than Tableau Conference

---

## Competitive Landscape (2026)

### Tableau vs. Power BI (Microsoft)
- **Power BI Strengths:** Excel ecosystem integration, low cost ($10/user), tight Microsoft 365 alignment, quick operational dashboards
- **Tableau Strengths:** Superior visualization flexibility, drag-and-drop ease, cloud/on-prem agility, enterprise governance
- **Winner:** Context-dependent; Power BI for Microsoft-centric orgs, Tableau for visualization-first, platform-agnostic environments

[Power BI vs. Tableau vs. Qlik Sense: Which BI Tool Is the Winner in 2026?](https://www.selecthub.com/business-intelligence/tableau-and-qlikview-and-microsoft-power-bi/)

### Tableau vs. Looker (Google)
- **Looker Strengths:** Code-based governance (LookML), single source of truth, embeddable, data-team-centric
- **Tableau Strengths:** Self-service speed, visual design, enterprise-scale, broad data connectivity
- **Winner:** Looker for governed, code-driven orgs; Tableau for self-service, creative analytics

### Tableau vs. Qlik Sense
- **Qlik Strengths:** Associative analysis engine (not SQL-based), complex exploratory queries, specialized industries (supply chain, finance, regulated sectors)
- **Tableau Strengths:** Visual storytelling, ease of use, broad platform support, modern SaaS model
- **Pricing:** Qlik Sense starts $20/user vs. Tableau $75/user (73% cheaper for Qlik)
- **Winner:** Qlik for complex association; Tableau for narrative, broad audiences

### Tableau vs. ThoughtSpot
- **ThoughtSpot Strengths:** AI-first search interface, low-latency analytics, embedded BI
- **Tableau Strengths:** Broader ecosystem, larger user base, mature platform, Microsoft 365 integration (Pulse)
- **Winner:** ThoughtSpot for AI-first, search-driven orgs; Tableau for established, multi-use analytics

*Source: [Tableau vs. Power BI vs. Looker Studio: Which Business Intelligence Tool is Right for your Business in 2026?](https://improvado.io/blog/looker-vs-tableau-vs-power-bi)*

---

## South African Context

### Enterprise Adoption in South Africa
While specific data on Tableau user groups in South Africa is limited as of April 2026, Tableau has established presence in:

**Banking Sector:**
- FNB (First National Bank) uses advanced analytics and BI tools for customer intelligence, risk, and financial reporting
- Standard Bank employs BI platforms for portfolio analytics, trading, and operational dashboards
- Other major banks (Nedbank, ABSA) leverage Tableau and competing BI tools

**Retail:**
- Pick n Pay (largest grocery retailer) uses loyalty data analytics and customer insights platforms
- Woolworths and Clicks use BI for supply chain, sales, and customer behavior

### Opportunities for SA Professionals
- **Skills Gap:** Tableau expertise is in high demand in SA banks and financial services
- **Salary Benchmarking:** USD equivalents for SA professionals typically 40–60% of US salaries, depending on role and company
- **Entry Path:** Data analysts in SA can accelerate careers via Tableau Specialist + Data Analyst certifications
- **Remote/Global:** Tableau developers in SA increasingly access global markets (USD remote contracts)

### Regional Communities
Tableau Community forums and Salesforce Trailhead are globally accessible; formal regional meetups for SA may be ad-hoc or virtual. Practitioners are encouraged to participate in online communities, Makeover Monday challenges, and global Tableau Conference (hybrid attendance).

---

## 2026 Roadmap & Emerging Trends

### AI & Generative Analytics (Primary Focus)
- **Tableau GPT:** Natural language queries, auto-generated visualizations, smart recommendations
- **Tableau Pulse:** Proactive, personalized alerts and insights delivered to users
- **Tableau Next:** Agentic analytics combining Tableau + Einstein + Data Cloud
- **Integration:** Deep embedding into Salesforce ecosystem and Microsoft 365

### Enterprise Governance
- **Tableau Blueprint:** Comprehensive governance framework for scaling analytics adoption
- **Bring Your Own Connector (BYOC):** Custom data connectors in pilot; enables Cloud migration from legacy sources
- **Data Lineage:** Enhanced tracking of metric and visualization dependencies

### Cloud-First Strategy
- Continued investment in Tableau Cloud (SaaS)
- Server on-premises remains supported but gradual shift to cloud-native deployments
- Multi-cloud support (AWS, Azure, GCP) via Tableau Cloud

### Data Cloud Integration
- Unification of customer data from all sources (Salesforce, external systems) for real-time analytics
- "Instant Analytics" for querying millions of records without manual optimization

---

## Career Impact & AI Adoption

### AI Impact on Tableau Roles
Tableau practitioner roles are **moderately affected** by AI (2026 outlook):

**Threatened Skills:**
- Routine report generation (automated by GPT + Pulse)
- Basic dashboard creation (template-driven + auto-generated)
- Data exploration for simple metrics (AI-assisted question answering)

**Elevated Skills:**
- Stakeholder communication and storytelling (GPT improves analytics literacy; human translators still needed)
- Complex data modeling and governance (BYOC, Data Cloud, Tableau Next require architecting for AI)
- Enterprise strategy and roadmap (AI-enabled BI raises org-wide analytical maturity)

**Job Security:** Tableau developers skilled in design, storytelling, and enterprise architecture are **in higher demand**, not lower, as organizations invest in AI-first analytics.

---

## Summary: Decision Criteria

**Tableau is ideal for:**
- Organizations prioritizing visual storytelling and design flexibility
- Self-service analytics at scale (executive to analyst levels)
- Multi-platform, multi-cloud deployments requiring portability
- Enterprise governance, security, and compliance requirements
- Teams adopting AI-assisted insights (Tableau GPT, Pulse)

**Consider alternatives if:**
- Deep cost optimization is paramount (Power BI cheaper; Qlik cheaper)
- Governance-first architecture required (Looker's LookML model)
- Complex exploratory analysis on regulated data (Qlik Sense's associative engine)
- Search-first, AI-native interface required (ThoughtSpot)

---

## Sources

- [Salesforce Completes $15.7B Tableau Purchase](https://www.wealthmanagement.com/financial-technology/salesforce-completes-15-7-billion-tableau-purchase) — Wealth Management, 2019
- [Tableau Certification Guide 2026: Which One to Get & Is It Worth It?](https://careery.pro/blog/data-analyst-careers/tableau-certification-guide/) — Careery
- [Salesforce Certified Tableau Data Analyst - Trailhead Academy](https://www.tableau.com/learn/certification/certified-data-analyst) — Tableau/Salesforce
- [Tableau Server Certified Associate Quick Facts (2025)](https://certificationpractice.com/exam-overviews/tableau-server-certified-associate-quick-facts) — Certification Practice
- [Salesforce Certified Tableau Architect - Trailhead Academy](https://trailheadacademy.salesforce.com/certificate/exam-tableau-architect---Analytics-Arch-201) — Salesforce
- [Tableau Certification](https://www.tableau.com/learn/certification) — Official Tableau/Salesforce site
- [Tableau Developer: Average Salary & Pay Trends 2026](https://www.glassdoor.com/Salaries/tableau-developer-salary-SRCH_KO0,17.htm) — Glassdoor
- [eLearning: Tableau Web-Based Training](https://www.tableau.com/learn/training/elearning) — Tableau
- [Salesforce Training - Learn Tableau - Trailhead Academy](https://trailheadacademy.salesforce.com/products/tableau) — Salesforce
- [The Big Book of Dashboards | Wiley](https://www.wiley.com/en-us/The+Big+Book+of+Dashboards:+Visualizing+Your+Data+Using+Real+World+Business+Scenarios-p-9781119282716) — Wiley
- [Storytelling with Data | Wiley](https://www.wiley.com/en-us/Storytelling+with+Data:+A+Data+Visualization+Guide+for+Business+Professionals-p-9781119002253) — Wiley
- [Analytics Press - Information Dashboard Design](https://www.analyticspress.com/idd.php) — Analytics Press
- [Practical Tableau | O'Reilly](https://www.oreilly.com/library/view/practical-tableau/9781491977309/) — O'Reilly Media
- [Tableau Community Celebrates the Impact of Makeover Monday](https://www.tableau.com/blog/tableau-community-celebrates-impact-makeover-monday) — Tableau Blog
- [How to Get Started with the Tableau Community](https://www.tableau.com/blog/ways-get-started-tableau-community) — Tableau Blog
- [Iron Viz | Tableau](https://www.tableau.com/community/iron-viz) — Tableau Community
- [Tableau Conference 2026 | Salesforce](https://www.salesforce.com/tableau-conference/) — Salesforce
- [Power BI vs. Tableau vs. Qlik Sense: Which BI Tool Is the Winner in 2026?](https://www.selecthub.com/business-intelligence/tableau-and-qlikview-and-microsoft-power-bi/) — SelectHub
- [Tableau vs. Power BI vs. Looker Studio: Which Business Intelligence Tool is Right for your Business in 2026?](https://improvado.io/blog/looker-vs-tableau-vs-power-bi) — Improvado
- [Coursera vs Pluralsight (2026): Which Platform Is Best?](https://missiongraduatenm.org/coursera-vs-pluralsight/) — Mission Graduate NM
