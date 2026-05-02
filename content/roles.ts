// Ported from IT_Role_Profiles.html — wording preserved verbatim from source.
// Source has only entry-vs-non-entry; non-entry roles classified into
// associate/professional/expert by role-title context (see roles.ts port note).

export type AiImpact = "resilient" | "mixed" | "at-risk";
export type RemoteFit = "remote" | "hybrid" | "on-site";

export interface FirstJob {
  portfolio?: string;
  resumeTips?: string;
  interviewFormat?: string;
  whereToApply?: string;
  first90Days?: string;
  salaryRange?: string;
  salarySource?: string;
}

export interface Role {
  id: string;
  name: string;
  level: "entry" | "associate" | "professional" | "expert";
  aiImpact: AiImpact;
  aiReasoning: string;
  remote: RemoteFit;
  industries: string[];
  daily: string;
  badDay?: string;
  firstJob?: FirstJob;
  sources?: string[];
}

export const ROLES: Role[] = [
  {
    id: "helpdesk-t1",
    name: "Help Desk Tier 1",
    level: "entry",
    aiImpact: "at-risk",
    aiReasoning:
      "AI ticketing systems autonomously resolve 60–80% of tier-1 queries; junior volume shrinking. Will not disappear — humans still needed for unusual issues.",
    remote: "hybrid",
    industries: ["MSP / Consulting", "Healthcare", "Education", "Finance"],
    daily:
      "Queue opens at 8 AM. Check overnight tickets. First hour: password resets (40% of daily tickets), unlock accounts, printer drivers. 9:30 AM standup — report sev-1 escalations from night shift. Spend 4–5 hours cycling through 20–40 tickets: 'can't connect to VPN', 'Outlook not syncing', 'monitor won't wake'. Most resolve in 2–5 minutes. Escalate 2–3 per day to Tier 2. Afternoon: documentation, knowledge-base articles, helping new hires. Friday chaos worse than Monday.",
    badDay:
      "Outage hits (Exchange, WiFi, VPN down); 200+ identical calls with no info until status page updates.",
    firstJob: {
      portfolio: [
        "Home lab demonstrating you've fixed something real",
        "Free trial of Jira / Zendesk / ServiceNow ticketing",
        "Customer support story / chat log / problem-solving write-up",
        "CompTIA A+ 220-1201/1202 (preferred)",
      ].map((s) => `• ${s}`).join("\n"),
      resumeTips: [
        "Lead with support experience — call center, retail IT, volunteer tech support all count",
        "Highlight first-contact resolution metrics (e.g., 95% FCR)",
        "Keywords: ticketing, remote support, troubleshooting, Windows/macOS, networking basics",
        "Skip irrelevant DevOps / architecture experience",
      ].map((s) => `• ${s}`).join("\n"),
      interviewFormat:
        "30–45 min. Behavioral scenarios (50%) — 'walk me through troubleshooting X'. Soft skills focus (30%) — patience, escalation judgment. Tool quiz (20%).",
      whereToApply: [
        "Indeed, LinkedIn, Glassdoor",
        "Dice.com, MSP / Consulting boards",
        "Local staffing agencies (Apex, Kelly Services, Robert Half)",
        "Wellfound for startup-side support roles",
        "Reach out to MSP founders on LinkedIn — always hiring",
      ].map((s) => `• ${s}`).join("\n"),
      first90Days: [
        "Days 1–30: master ticketing system, learn asset inventory, shadow 2–3 reps",
        "Days 31–60: own queue, build KB articles, target 50% FCR",
        "Days 61–90: mentor incoming tickets, demonstrate readiness for Tier 2",
      ].map((s) => `• ${s}`).join("\n"),
      salaryRange: "$38K → $48–62K (US median, BLS 15-1232)",
    },
  },
  {
    id: "sysadmin-jr",
    name: "Junior Sysadmin / Cloud Engineer",
    level: "entry",
    aiImpact: "mixed",
    aiReasoning:
      "Cloud automation handles ~80% of traditional sysadmin tasks; junior repetitive work (provisioning, patching, basic monitoring) compresses. Hiring concentrates on those with cloud/DevOps skills.",
    remote: "remote",
    industries: ["Tech / SaaS", "Finance", "Government"],
    daily:
      "Morning monitoring check (Datadog / CloudWatch / Prometheus). Triage overnight alerts. 9 AM standup. 2–3 hours on assigned tickets — server builds, AD changes, GPO updates, M365 config. Lunch. Afternoon: project work — automating something, building Terraform modules, writing PowerShell, patching test environments. End-of-day: handoff, doc updates. On-call rotation 1 week in 4. Friday change windows are real.",
    badDay:
      "Production outage at 4:55 PM Friday before a long weekend. AD replication broke. 47 unread Slacks.",
    firstJob: {
      portfolio: [
        "Home lab: AD domain + Linux VMs + scripting examples on GitHub",
        "3-tier app deployed on AWS/Azure free tier with Terraform",
        "Blog post explaining design choices",
        "CompTIA Network+ / AZ-104 / SAA-C03 (notice signal)",
      ].map((s) => `• ${s}`).join("\n"),
      resumeTips: [
        "Lead with automation/scripting, not 'supported users'",
        "Keywords: Active Directory, PowerShell, Bash, Linux, AWS/Azure, Terraform, Docker, Git",
        "Always include GitHub URL prominently",
        "Metric-driven: 'Automated user onboarding 1hr → 10min'",
      ].map((s) => `• ${s}`).join("\n"),
      interviewFormat:
        "60–90 min, 2–3 rounds. Technical deep-dive (40%) — 'walk me through your home lab'. Code review of your GitHub project (30%). Scenarios (20%) — 'server out of disk space, how do you troubleshoot'. Sometimes a take-home Terraform/script task.",
      whereToApply: [
        "Dice.com, Built In, StackOverflow Jobs",
        "Wellfound for startups (love scrappy self-learners)",
        "LinkedIn — filter Junior Sysadmin / Cloud Engineer < 200 employees",
        "Cloud meetups, DevOps meetups (very junior-friendly)",
        "Cloud-focused recruiters on LinkedIn",
      ].map((s) => `• ${s}`).join("\n"),
      first90Days: [
        "Days 1–30: understand infrastructure, gain access, shadow 2–3 tickets",
        "Days 31–60: own 1–2 small infra tasks, automate one manual process",
        "Days 61–90: lead a small infra project, present in standup, show proactive security mindset",
      ].map((s) => `• ${s}`).join("\n"),
      salaryRange: "$48–62K → $60–95K",
    },
  },
  {
    id: "net-eng-jr",
    name: "Junior Network Engineer",
    level: "entry",
    aiImpact: "at-risk",
    aiReasoning:
      "Gartner: 30% of enterprises will automate >50% of network activities by 2026. Junior-level config work is primary automation target.",
    remote: "hybrid",
    industries: ["Telco", "Tech / SaaS", "Finance"],
    daily:
      "Morning: review monitoring (LibreNMS / SolarWinds / PRTG). Address P2/P3 tickets — VPN issue, switch port flap, wireless complaint. Mid-morning: prep for change window — script config, get peer review, schedule maintenance. Afternoon: implement small change, document, update CMDB. Lab time on Fridays — Cisco Modeling Labs / GNS3. Late afternoons quiet enough for studying CCNP material.",
    badDay:
      "Spanning tree loop in production. Half the floor offline. Console-cable scramble.",
    firstJob: {
      portfolio: [
        "Home lab: GNS3 / EVE-NG with VLANs, OSPF, BGP basics",
        "Firewall (pfSense / FortiGate trial) with ACLs, NAT, port forwarding",
        "Wireshark packet captures with annotations",
        "GitHub: network configs, monitoring scripts",
        "CompTIA Network+ N10-009 / Cisco CCNA in progress",
      ].map((s) => `• ${s}`).join("\n"),
      resumeTips: [
        "Keywords: routing, switching, VLAN, OSPF, BGP, firewalls, DNS, DHCP, VPN, packet analysis",
        "Lead Network+ or CCNA prominently",
        "Hands-on language: 'configured 20 VLANs and troubleshot inter-VLAN routing'",
      ].map((s) => `• ${s}`).join("\n"),
      interviewFormat:
        "45–60 min, 1–2 rounds. Scenarios (50%) — 'high latency on VPN tunnel'. Conceptual (30%) — OSPF vs BGP. Lab walkthrough (15%). Sometimes whiteboard topology.",
      whereToApply: [
        "Dice.com, Indeed (network engineer + entry level)",
        "Cisco Learning Network jobs board",
        "ISP / MSP local job boards",
        "Local networking meetups, IEEE chapters",
      ].map((s) => `• ${s}`).join("\n"),
      first90Days: [
        "Days 1–30: learn topology, routing, VLANs. Shadow change windows.",
        "Days 31–60: own one small change (new VLAN, firewall rule). Debug a real network issue.",
        "Days 61–90: lead a small network project. Document business strategy alignment.",
      ].map((s) => `• ${s}`).join("\n"),
      salaryRange: "$45–60K → $65–95K",
    },
  },
  {
    id: "jr-dev",
    name: "Junior Developer (Bootcamp / Self-Taught / New Grad)",
    level: "entry",
    aiImpact: "at-risk",
    aiReasoning:
      "AI code-gen reduces entry-level hiring volume; 75% of engineers will use AI assistants by 2028 (Gartner). Boilerplate and CRUD automated. Hiring concentrating at senior+ levels.",
    remote: "hybrid",
    industries: ["Tech / SaaS", "Fintech", "Startups"],
    daily:
      "Open IDE 9 AM, check Slack and PR queue. Standup 9:30. 1–2 hours coding on assigned ticket. Coffee. Code review on a teammate's PR. Lunch. Afternoon deep work — 2–3 hours uninterrupted coding (if you're lucky). Push commit, ask for review, address comments. Late afternoon: pair-program with senior on something tricky. Friday: tech debt or learning time at most healthy companies.",
    badDay:
      "PR has 47 review comments. Production breaks because of your last merge. Imposter syndrome surge.",
    firstJob: {
      portfolio: [
        "3 deployed projects (NOT tutorials): frontend (React/Vue), backend (Node/Python/Java + DB), full-stack",
        "GitHub with consistent commits over 3+ months — not 100 commits day-1",
        "Open-source contribution (accepted PR, ideally bug fix)",
        "Live portfolio website (GitHub Pages / Vercel)",
        "Optional: AWS DVA-C02 or GitHub Foundations as signal",
      ].map((s) => `• ${s}`).join("\n"),
      resumeTips: [
        "Lead with portfolio link in header",
        "Keywords: JavaScript, Python, React, Node.js, SQL, Git, REST API, testing",
        "Real projects > bootcamp certificates",
        "Metrics: 'reduced page load 40% via code-splitting'",
      ].map((s) => `• ${s}`).join("\n"),
      interviewFormat:
        "60–90 min, 2–3 rounds. Coding challenge (40%) — LeetCode-medium or take-home. Project walkthrough (30%). System design (15%) — 'design a chat app'. Behavioral (15%).",
      whereToApply: [
        "StackOverflow Jobs, Dev.to Job Board, Built In",
        "Wellfound (startups, lower pay but more juniors hired)",
        "LinkedIn — filter Entry Level",
        "Referrals beat resume filters — DM engineers at companies you want",
        "Reddit r/cscareerquestions weekly threads",
      ].map((s) => `• ${s}`).join("\n"),
      first90Days: [
        "Days 1–30: read codebase 1–2 weeks. Pick up 1–2 small bug fixes (<4hr each). Learn deploy pipeline.",
        "Days 31–60: own one small feature end-to-end. Participate in code review. Improve test coverage.",
        "Days 61–90: lead one medium feature. Mentor on style. Demonstrate independent work.",
      ].map((s) => `• ${s}`).join("\n"),
      salaryRange: "$60–95K (US Junior Dev, BLS 15-1252)",
    },
  },
  {
    id: "soc-l1",
    name: "SOC Analyst Tier 1",
    level: "entry",
    aiImpact: "at-risk",
    aiReasoning:
      "AI SOC agents handle alert triage and initial investigation; Gartner projects AI will drive 50% of incident response by 2028. L1 volume shrinks but doesn't disappear.",
    remote: "hybrid",
    industries: ["Finance", "Healthcare", "Government", "MSSP"],
    daily:
      "Shift starts: handover from previous shift. Open SIEM (Splunk / Sentinel / QRadar). 6+ hours staring at alerts — phishing reports, EDR triggers, brute-force attempts. Close 80% as false-positives. Document 5–10 real investigations per shift. Escalate 1–2 to L2/L3. Hourly check on dashboards. Snacks help. Burnout factor: high. Most leave after 18–24 months.",
    badDay:
      "Real incident hits during your shift. Adrenaline + IR plan + customer comms. 12-hour shift becomes 16.",
    firstJob: {
      portfolio: [
        "TryHackMe SOC L1 path completed (10 modules) — show profile publicly",
        "HackTheBox 5+ Sherlock challenges",
        "3–5 blue-team writeups on Medium / personal blog",
        "SIEM lab (Splunk free tier / ELK) with 3–5 detection rules",
        "Security+ SY0-701 or CySA+ before applying",
      ].map((s) => `• ${s}`).join("\n"),
      resumeTips: [
        "Keywords: SIEM, log analysis, alert triage, IR, phishing, malware analysis, Splunk, ELK, Wireshark, Yara, EDR",
        "TryHackMe completion count prominently",
        "Don't overstate red-team experience — L1 is defensive",
      ].map((s) => `• ${s}`).join("\n"),
      interviewFormat:
        "45–60 min, 1–2 rounds. Scenarios (50%) — 'walk me through this Splunk alert'. Tool quiz (30%). Behavioral (20%) — 'how do you stay calm under pressure'.",
      whereToApply: [
        "CyberSecurityJobs.com, Dice.com, Indeed (SOC + L1)",
        "MSSP job boards: Threat Stack, Rapid7, AlertLogic — heavy L1 hiring",
        "Wellfound for startup SOC roles",
        "InfoSec/Blue Team Slack communities, BTL1 community",
      ].map((s) => `• ${s}`).join("\n"),
      first90Days: [
        "Days 1–30: learn SIEM, review playbooks, shadow seniors, triage 30–50 alerts/day",
        "Days 31–60: own queue, close independently, ask methodology questions",
        "Days 61–90: identify a false-positive type, propose tuning rule, present in team meeting",
      ].map((s) => `• ${s}`).join("\n"),
      salaryRange: "$50–70K → $55–80K",
    },
  },
  {
    id: "data-analyst",
    name: "Junior Data Analyst",
    level: "entry",
    aiImpact: "mixed",
    aiReasoning:
      "AI-assisted dashboards / exploration reduce junior repetitive work. BI self-service raises entry barrier. Upskill toward engineering or strategy is essential.",
    remote: "hybrid",
    industries: ["Finance", "Healthcare", "Tech / SaaS"],
    daily:
      "Morning: refresh dashboards, check pipeline runs (dbt / Airflow). 1–2 hours on ad-hoc requests — 'can you pull X for the marketing team'. Lunch. Afternoon: deeper analysis project — SQL queries, Python notebook, visualization. Stakeholder meeting at 3 PM to walk through findings. End-of-day: doc and Slack updates. Most weeks 50% requests / 30% recurring / 20% exploration.",
    badDay:
      "Stakeholder asks for a 'simple' analysis that turns out to require 4 days of data wrangling.",
    firstJob: {
      portfolio: [
        "3–5 SQL projects on real messy datasets (Kaggle / NYC Open Data / Census)",
        "2–3 Python / pandas analyses with Jupyter notebooks on GitHub",
        "2–3 Tableau Public / Power BI dashboards",
        "Blog post explaining one analysis end-to-end",
        "Optional: Google Data Analytics Certificate",
      ].map((s) => `• ${s}`).join("\n"),
      resumeTips: [
        "Portfolio link in header",
        "Keywords: SQL, Python, pandas, Tableau, Excel, data cleaning, exploratory analysis",
        "Frame any data work as 'analyzed X transactions to identify Y'",
      ].map((s) => `• ${s}`).join("\n"),
      interviewFormat:
        "60–75 min, 1–2 rounds. SQL live coding (40%) — multiple JOINs, GROUP BY. Case study (30%) — methodology for a business question. Project walkthrough (20%). Behavioral (10%).",
      whereToApply: [
        "Mode Analytics Jobs, Built In, StackOverflow",
        "Wellfound for early-stage startups",
        "LinkedIn (Data Analyst + entry level)",
        "Kaggle competition placements are strong signal",
        "Local data meetups, Women Who Code",
      ].map((s) => `• ${s}`).join("\n"),
      first90Days: [
        "Days 1–30: learn data stack, business metrics, run sample queries with mentorship",
        "Days 31–60: own 1–2 small requests, document query logic",
        "Days 61–90: proactively surface an insight, present to stakeholders",
      ].map((s) => `• ${s}`).join("\n"),
      salaryRange: "$55–75K → $70–95K",
    },
  },
  {
    id: "devops-jr",
    name: "Junior DevOps Engineer",
    level: "entry",
    aiImpact: "mixed",
    aiReasoning:
      "Infrastructure provisioning + CI/CD config increasingly template-driven. Junior repeatable work compresses. Mid-level specialization (SRE / Platform) for stability.",
    remote: "remote",
    industries: ["Tech / SaaS", "Fintech", "Manufacturing"],
    daily:
      "9 AM: check overnight pipeline runs, fix any flaky tests. Standup. 2–3 hours improving CI/CD — adding test stages, optimizing build times, fixing deploy issues. Lunch. Afternoon: Terraform module work, Kubernetes manifest tweaks, monitoring alert tuning. Late afternoon: pair with senior on something Kubernetes-y. On-call: occasional 2 AM page. Friday: run a chaos experiment in non-prod.",
    badDay:
      "Production deploy rolled back. Helm chart broken. Customer-facing API down 12 minutes.",
    firstJob: {
      portfolio: [
        "Multi-node Kubernetes cluster (minikube / kind / EKS) with sample app, ConfigMaps, Secrets, Ingress",
        "3–5 Terraform / CloudFormation examples deployed to AWS free tier",
        "Working CI/CD pipeline (GitHub Actions / GitLab CI) with test → build → deploy",
        "Prometheus + Grafana monitoring of a real application",
        "CKAD or Terraform Associate strong signal",
      ].map((s) => `• ${s}`).join("\n"),
      resumeTips: [
        "Keywords: Kubernetes, Docker, Terraform, AWS/Azure, CI/CD, Prometheus, Linux, Git, IaC",
        "'Deployed 15 microservices to a 3-node K8s cluster' beats 'worked with containers'",
        "Always link GitHub prominently",
      ].map((s) => `• ${s}`).join("\n"),
      interviewFormat:
        "75–90 min, 2 rounds. Technical deep-dive (50%) — 'walk me through your K8s setup'. Problem-solving (30%) — 'app failing in prod, how do you debug'. Hands-on (15%) — write a Terraform file or Dockerfile. Sometimes take-home in their sandbox account.",
      whereToApply: [
        "Dice.com, Built In, StackOverflow",
        "Wellfound for startups using cutting-edge stacks",
        "Cloud partner job boards (AWS / Azure / GCP)",
        "DevOps meetups, Kubernetes user groups (KUGs)",
        "LinkedIn (DevOps + entry level / junior)",
      ].map((s) => `• ${s}`).join("\n"),
      first90Days: [
        "Days 1–30: understand CI/CD pipeline + K8s setup. Read architecture docs.",
        "Days 31–60: own one small infra task (Helm chart, monitoring alert). Improve documentation.",
        "Days 61–90: lead a small infra project. Show proactive improvement mindset.",
      ].map((s) => `• ${s}`).join("\n"),
      salaryRange: "$70–95K → $90–110K (entry); senior $130–180K",
    },
  },
  {
    id: "sf-admin",
    name: "Salesforce Administrator",
    level: "entry",
    aiImpact: "mixed",
    aiReasoning:
      "Market saturated (330% supply-to-demand ratio). Pure admin commoditizing; admin-adjacent (DevOps, MuleSoft) commands premium. Agentforce skills now ~8% of ADM-201.",
    remote: "hybrid",
    industries: [
      "All sectors using Salesforce — SaaS, Finance, Healthcare, Nonprofit",
    ],
    daily:
      "Morning: triage Salesforce ticket queue (custom fields, validation rules, layout changes, user access). 9:30 standup with delivery team. 2 hours: configuration work in dev sandbox, deploy via change sets / DevOps. Lunch. Afternoon: stakeholder meeting on next quarter's roadmap. Build new Flow automation for an opportunity-stage trigger. End of day: report tweaks, dashboard refreshes.",
    badDay:
      "You discover the Process Builder you inherited has a recursion loop. The CFO is asking why dashboards are wrong.",
    firstJob: {
      portfolio: [
        "Trailhead Ranger badge (15,000+ points) — public profile",
        "Salesforce Developer Edition org showing 3–5 custom objects, 10+ fields with validation, 3–5 Flows, reports / dashboards, profiles + permission sets",
        "Documentation of business requirements vs config choices",
        "Salesforce Certified Administrator (ADM-201) before applying",
      ].map((s) => `• ${s}`).join("\n"),
      resumeTips: [
        "Lead with Trailhead ranking and certification",
        "Keywords: Salesforce admin, custom objects, validation rules, Flows, reports, dashboards, user management, data import",
        "Business impact: 'implemented field validation reducing data entry errors 25%'",
      ].map((s) => `• ${s}`).join("\n"),
      interviewFormat:
        "45–60 min, 1–2 rounds. Configuration Q&A (50%) — 'walk me through your Dev Org setup, why Flow over Process Builder'. Scenarios (30%). Hands-on demo in test org (15%). Behavioral (5%).",
      whereToApply: [
        "Salesforce Careers + Job.com",
        "Indeed (Salesforce Admin + entry level)",
        "Wellfound for early-stage SaaS",
        "Local Salesforce User Groups (SUGs) post jobs",
        "Power of Us nonprofit volunteer hours count as experience",
      ].map((s) => `• ${s}`).join("\n"),
      first90Days: [
        "Days 1–30: learn the org. Read documentation. Understand data model and user base.",
        "Days 31–60: own 1–2 admin tasks (user access, field update, report tweak). Improve docs.",
        "Days 61–90: lead one project (Flow automation, sharing rules). Propose configuration improvement.",
      ].map((s) => `• ${s}`).join("\n"),
      salaryRange: "$60–85K starting (Mason Frank Salary Survey)",
    },
  },
  {
    id: "sn-admin",
    name: "ServiceNow Administrator",
    level: "entry",
    aiImpact: "mixed",
    aiReasoning:
      "Role evolving from manual config to 'AI orchestration'. Business-process focus increasingly valued over technical proficiency.",
    remote: "hybrid",
    industries: ["Finance", "Healthcare", "Government", "Large enterprise"],
    daily:
      "Open queue: incident ticket form changes, new SLA rules, role permissions. Morning: 1–2 hours of small config tasks in dev instance. 9:30 standup. Stakeholder call about a new Customer Service Module rollout. Lunch. Afternoon: build a flow in Flow Designer, debug a Glide script someone else wrote, write an integration to a third-party tool. Late afternoon: knowledge-base updates, ticket close-out.",
    badDay:
      "The MID server stopped syncing. Half the discovery records went stale. The CMDB team is frantic.",
    firstJob: {
      portfolio: [
        "Personal developer instance (free) with 2–3 custom modules, 5–10 workflows, 3–5 reports",
        "Custom forms + business rules + ACLs",
        "ITSM module customization (Incident, Change, Problem)",
        "ServiceNow CSA + free CIS-DF (free until June 2026)",
        "ITIL 4 Foundation strong signal",
      ].map((s) => `• ${s}`).join("\n"),
      resumeTips: [
        "Lead with CSA + CIS-DF",
        "Keywords: ServiceNow admin, ITSM, workflows, custom forms, reports, user access, Service Portal, Glide",
        "ITIL emphasis: 'reduced incident resolution time 15% via categorization workflow'",
      ].map((s) => `• ${s}`).join("\n"),
      interviewFormat:
        "45–60 min, 1–2 rounds. Configuration Q&A (50%). ITSM scenarios (30%) — incident lifecycle. Live demo in test instance (15%). Behavioral (5%).",
      whereToApply: [
        "ServiceNow Careers + partner networks",
        "Indeed (ServiceNow Admin + entry level)",
        "Wellfound for SaaS migrating to ServiceNow",
        "Implementation partners (Accenture, Deloitte) hire junior admins",
        "ServiceNow Community + User Groups",
      ].map((s) => `• ${s}`).join("\n"),
      first90Days: [
        "Days 1–30: learn instance, ITSM config. Shadow admin on 2–3 tasks.",
        "Days 31–60: own 1–2 admin tasks. Improve docs.",
        "Days 61–90: lead one project (workflow automation, data cleanup, new module). Demonstrate ITIL knowledge.",
      ].map((s) => `• ${s}`).join("\n"),
      salaryRange: "$70–95K starting",
    },
  },
  {
    id: "qa-tester",
    name: "QA Engineer (entry / manual)",
    level: "entry",
    aiImpact: "at-risk",
    aiReasoning:
      "82% still use manual testing, but pure manual execution roles declining. Hybrid roles (manual + automation awareness + API + tool proficiency) are in demand.",
    remote: "hybrid",
    industries: ["Tech / SaaS", "Fintech", "Healthcare"],
    daily:
      "Morning: run smoke tests on overnight build. Triage failures. Standup. 2–3 hours executing test cases on new feature, raising bugs in JIRA with reproductions. Lunch. Afternoon: regression cycle on a release branch. Pair with dev to repro a tricky bug. Late afternoon: write new test cases for next sprint's tickets. Friday: retro + test plan review.",
    badDay:
      "Release scheduled tomorrow. You find a critical bug in checkout. Whole team scrambles to triage.",
    firstJob: {
      portfolio: [
        "Selenium / Playwright / Cypress test suite (20–30 cases) on GitHub with Page Object Model",
        "API testing collection (Postman / REST Assured) with 30+ requests",
        "50+ documented manual test cases",
        "10+ sample bug reports with reproductions",
        "ISTQB Foundation valuable but not required",
      ].map((s) => `• ${s}`).join("\n"),
      resumeTips: [
        "Keywords: Selenium, Playwright, test automation, manual testing, test cases, bug reporting, Jira, TestRail, API testing, regression",
        "Frame as 'automated 80% of regression, reducing manual effort 3 days → 4 hours per sprint'",
      ].map((s) => `• ${s}`).join("\n"),
      interviewFormat:
        "45–60 min. Test case writing (40%) — given a feature, write 10–15 cases. Bug report scenario (30%). Automation Q&A (20%) — 'walk me through your Selenium suite'. Behavioral (10%).",
      whereToApply: [
        "QA-focused boards",
        "Indeed (QA Engineer + entry level)",
        "Wellfound for early-stage startups",
        "Software testing communities on Reddit / Discord",
      ].map((s) => `• ${s}`).join("\n"),
      first90Days: [
        "Days 1–30: understand product, deployment, test environment",
        "Days 31–60: write 3–5 new test cases, debug a failing test",
        "Days 61–90: propose one improvement (test type, coverage, framework)",
      ].map((s) => `• ${s}`).join("\n"),
      salaryRange: "$55–75K (manual) → $85–115K (with automation)",
    },
  },
  {
    id: "sysadmin",
    name: "Sysadmin",
    level: "associate",
    aiImpact: "mixed",
    aiReasoning:
      "Infrastructure engineering, security, DR, 2 AM problem-solving remain human. Routine upkeep shifts to orchestration and AI tools. Role evolves toward infrastructure engineer.",
    remote: "hybrid",
    industries: ["All sectors"],
    daily:
      "Morning monitoring, ticket triage, standup. Mid-morning: project work — automation, doc, new service builds. Afternoon: change windows, vendor escalations, 1:1s with junior. Late: review PR / runbooks. Variable on-call.",
    badDay: "Chained outage. AD + DNS + DHCP all degraded. War-room comms.",
  },
  {
    id: "sre",
    name: "Site Reliability Engineer (SRE)",
    level: "professional",
    aiImpact: "resilient",
    aiReasoning:
      "AI handles grunt work; humans own escalation, RCA, and resilience strategy. SRE pay premium (15–25% above DevOps) reflects complexity. Resilient.",
    remote: "remote",
    industries: ["Tech / SaaS", "Media / Gaming", "Finance"],
    daily:
      "Morning SLO check across services. Standup. Build something that removes toil (a runbook, an automation, a new alert). Lunch. Postmortem from yesterday's mini-incident — write it up blamelessly. Afternoon: capacity planning, error-budget conversations with product. Late: on-call rotation if it's your week.",
    badDay:
      "P1 at 4 AM. Service down 12 minutes. Customer-facing impact. 6 AM call with VP.",
  },
  {
    id: "cloud-sa",
    name: "Cloud Solutions Architect",
    level: "expert",
    aiImpact: "resilient",
    aiReasoning:
      "Strong demand for architects who design AI-ready cloud systems. AI complements but doesn't replace; salary rising as enterprises invest $1.5T globally in AI/cloud by 2025.",
    remote: "remote",
    industries: ["Tech / SaaS", "Finance", "Defense / Aerospace"],
    daily:
      "Morning: review yesterday's design doc feedback. Customer / stakeholder call. Whiteboard a new system architecture. Lunch. Afternoon: write ADR, run a design review for another team, vendor evaluation. Late: read a paper or a competitor's architecture blog. Less coding, more writing.",
    badDay:
      "Your design choice from 2 years ago is causing today's outage. Defended in incident review.",
  },
  {
    id: "sec-arch",
    name: "Security Architect",
    level: "expert",
    aiImpact: "resilient",
    aiReasoning:
      "High-value role; architects define zero-trust, cloud risk, identity strategy. AI is new domain (AI security), not replacement. Pay and demand trending up.",
    remote: "remote",
    industries: ["Finance", "Government", "Defense"],
    daily:
      "Threat-model a new product feature. Review someone else's design doc for security holes. Vendor call about new SIEM contract. Architecture review board meeting. Read latest CVE advisory thread. Write security strategy doc for board reporting.",
    badDay:
      "CVE drops affecting your stack. Patch coordination across 12 teams. Board paging.",
  },
  {
    id: "ml-eng",
    name: "ML Engineer",
    level: "professional",
    aiImpact: "resilient",
    aiReasoning:
      "ML market projected +22% over next decade. AI integration increases model complexity not reduces it. Median $187.5K. Resilient.",
    remote: "remote",
    industries: ["Tech / SaaS", "Healthcare", "Automotive"],
    daily:
      "Check overnight training runs. Standup. 2–3 hours of feature engineering or model training. Lunch. Afternoon: review another engineer's PR, write evaluation harness, set up A/B test. Late: read latest paper / debug deployment issue. Half data engineering, half model dev, increasingly half ML ops.",
    badDay:
      "Production model drift detected by monitoring. Latency spike. Retraining + cache + rollback decision.",
  },
  {
    id: "ai-eng",
    name: "AI Engineer (LLM / RAG)",
    level: "professional",
    aiImpact: "resilient",
    aiReasoning:
      "Entirely new category in 2026; explosive demand as enterprises productionize AI. Salary premium 56% above peers without AI skills.",
    remote: "remote",
    industries: ["Tech / SaaS", "Finance", "Healthcare"],
    daily:
      "Morning: check eval harness scores from last night's prompt change. Standup. Implement RAG improvement. Lunch. Afternoon: vector DB tuning, prompt regression test, vendor cost analysis. Pair with product on next feature. Late: read latest model release notes, test a new model.",
    badDay:
      "Hallucination in production. Compliance team escalates. Eval coverage didn't catch it.",
  },
  {
    id: "em",
    name: "Engineering Manager",
    level: "expert",
    aiImpact: "resilient",
    aiReasoning:
      "People leadership, career development, organizational alignment. AI analytics assist but don't replace judgment. Demand stable / growing.",
    remote: "hybrid",
    industries: ["Tech / SaaS", "Finance", "Fintech"],
    daily:
      "3–5 1:1s. Standup. Stakeholder meeting. Write a roadmap update. Performance review draft. Hire-screen interview. Coffee. Skip-level with VP. Read PR (less than before — credibility but not blocker). 1:1 cadence is everything.",
    badDay:
      "Star engineer threatening to quit. Comp letter due. Calibration the same week.",
  },
  {
    id: "ciso",
    name: "CISO",
    level: "expert",
    aiImpact: "resilient",
    aiReasoning:
      "Business leader managing AI-enabled security infrastructure, board accountability, and organizational risk. Resilient and increasingly strategic.",
    remote: "hybrid",
    industries: ["All sectors"],
    daily:
      "Board prep. Risk register review. CFO meeting on insurance renewal. M&A security due diligence call. Crisis comms drill. 1:1 with deputy. Press inquiry response review. Reading time scarce. Tenure under 24 months is the median — burnout is real.",
    badDay:
      "Breach disclosure call. Lawyers + PR + customer success in one room. SEC filing deadline.",
  },
  {
    id: "mainframe",
    name: "Mainframe Sysprog (z/OS)",
    level: "professional",
    aiImpact: "resilient",
    aiReasoning:
      "Aging workforce + low new talent supply. High demand persists despite shrinking mainframe base. Specialists command premium pay for critical, rarely-automated work.",
    remote: "on-site",
    industries: ["Finance", "Government", "Insurance"],
    daily:
      "Check batch jobs from overnight. Open IMS / DB2 / CICS console. Performance tuning. Code review on COBOL or PL/I changes. Vendor call about z/OS upgrade. Lunch in cafeteria. Afternoon: planned change, write JCL, document. Quiet, focused work. Pension + tenure beats grind.",
    badDay:
      "Critical batch fails before market open. Redo, recover, reconcile in 90 minutes.",
  },
  {
    id: "datacenter-tech",
    name: "Datacenter Technician",
    level: "associate",
    aiImpact: "mixed",
    aiReasoning:
      "Remote troubleshooting automated; on-site hardware issues require hands-on work. Hyperscaler buildout (AI infra) keeps demand strong.",
    remote: "on-site",
    industries: ["Hyperscalers", "Colocation providers", "Enterprise"],
    daily:
      "Morning shift handover. Walk the floor. Replace failed drive in rack 47. Cable pull for new cage. Vendor RMA package. Lunch. Afternoon: power-and-cooling check, fire-suppression test, document everything in CMDB. Physical, hands-on, real-world tired at end of shift.",
    badDay: "Thermal event on a hot row. Emergency shutdown of 200 nodes.",
  },
  {
    id: "sales-eng",
    name: "Sales Engineer / Pre-Sales SA",
    level: "professional",
    aiImpact: "mixed",
    aiReasoning:
      "AI augments tech sales (proposals, templates); customer relationship and complex solution design require human skill. Role evolving toward consultative selling.",
    remote: "remote",
    industries: ["Tech / SaaS", "Fintech", "Consulting"],
    daily:
      "3 demos. Customer Q&A on technical objections. RFP response writing. Internal call with product about feature gaps. Lunch on the road or virtual. Afternoon: 1 more demo, opportunity prep with AE. Late: study new product release. Travel weeks vs office weeks alternate.",
    badDay:
      "Demo crashes mid-presentation. AE looks at you. CIO is on the call.",
  },
  {
    id: "devrel",
    name: "Developer Advocate / DevRel",
    level: "professional",
    aiImpact: "mixed",
    aiReasoning:
      "Content gen AI-augmented; community building, authentic technical leadership remain human-driven. Authentic advocates still valued.",
    remote: "remote",
    industries: ["Tech / SaaS", "Devtool startups"],
    daily:
      "Morning writing — blog post, sample app code. Twitter / X / Discord engagement. Internal call with product / marketing. Lunch. Afternoon: prep for upcoming conference talk. Q&A on community Slack. Late: code on a personal project relevant to the platform. Conferences cluster around 6–8 weeks/yr.",
    badDay: "Conference talk crash. Twitter pile-on. Internal stakeholder unhappy.",
  },
  {
    id: "tpm",
    name: "Technical Program Manager (TPM)",
    level: "professional",
    aiImpact: "resilient",
    aiReasoning:
      "Cross-functional orchestration, risk management, stakeholder alignment require human judgment. Demand rising as orgs scale and complexity increases.",
    remote: "remote",
    industries: ["FAANG / hyperscalers", "Defense", "Large enterprise"],
    daily:
      "6 status meetings. Update the risk register. Negotiate dependencies between 4 teams. Exec comms draft. 1:1 with EM. Document a decision in the meta-tracking sheet. Skip-level question prep. Spreadsheet. Always more spreadsheets.",
    badDay:
      "Dependency falls through. Whole program at risk. Have to deliver bad news 4 levels up.",
  },
  {
    id: "tech-writer",
    name: "Technical Writer / Doc Engineer",
    level: "associate",
    aiImpact: "mixed",
    aiReasoning:
      "74% of TW tasks (API docs, formatting) AI-augmented. Acceleration not replacement; human review mandatory. Skills shift toward auditing, IA, domain expertise.",
    remote: "remote",
    industries: ["Tech / SaaS", "Devtool startups", "Cloud vendors"],
    daily:
      "Morning quiet writing time. PR review on someone else's docs. Lunch. Afternoon: meet with product / eng on new feature docs. Update site nav. Run docs build pipeline. Late: read style guide, audit IA. Most days deeply quiet — best for introverts.",
    badDay:
      "Customer-facing typo escalates to support ticket. Style guide debate becomes religious.",
  },
];
