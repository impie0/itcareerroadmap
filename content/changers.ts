export type BackgroundId =
  | "teacher"
  | "military-veteran"
  | "healthcare"
  | "accountant"
  | "retail-manager"
  | "trades"
  | "customer-service"
  | "non-cs-grad"
  | "career-returner"
  | "bootcamp-grad";

export interface ChangerGuide {
  id: BackgroundId;
  background: string;            // display name e.g. "Teacher"
  bestEntryRoles: string[];      // role names
  transferableSkills: string[];  // bullets
  timeline: string;              // realistic timeline e.g. "9-12 months"
  firstCert: string;             // recommended first cert
  payReality: string;            // honest paragraph about pay drops
  hiringConcerns: string;        // what hiring managers worry about
  howToAddress: string;          // and how to address those concerns
  freeResources: { name: string; url: string }[];
  successStory?: string;         // real-world success-pattern story if present
}

export const CHANGERS: ChangerGuide[] = [
  {
    id: "teacher",
    background: "Teacher / Educator",
    bestEntryRoles: [
      "Technical Trainer (vendor-side or corporate L&D)",
      "Customer Success Engineer",
      "Sales Engineer / Pre-Sales SA",
      "Salesforce Administrator (process orientation)",
    ],
    transferableSkills: [
      "Curriculum design → instructional design for corporate",
      "Classroom management → workshop facilitation",
      "Standards-based assessment → process documentation",
      "Speaking to non-experts daily → translating technical concepts",
      "LMS admin (any LMS counts) → SaaS configuration",
    ],
    timeline: "6–12 months part-time",
    firstCert:
      "Google IT Support Cert (Coursera ~$49/mo) OR Salesforce Administrator (free Trailhead + ~$200 exam)",
    payReality: "First role $45–65K USD; recover within 18–24 months",
    hiringConcerns:
      "'Can you keep up technically?' / 'Will you take this seriously / not flee back to teaching?'",
    howToAddress:
      "Bring a home lab + certs + a portfolio of any technical work you did at school (LMS admin counts!). Frame the move as deliberate skill-stacking, not escape.",
    freeResources: [
      { name: "Trailhead (free)", url: "" },
      { name: "Professor Messer A+ / Network+ free YouTube", url: "" },
      { name: "Linkedin Learning (often free via library)", url: "" },
      { name: "Google IT Support Cert on Coursera", url: "" },
      { name: "Local Salesforce User Group meetings", url: "" },
    ],
    successStory:
      "Many ex-teachers land technical-trainer roles at Salesforce, AWS, or HashiCorp partner orgs within 9–14 months. The path: complete Trailhead Ranger → ADM-201 cert → volunteer Salesforce admin work for a non-profit (Power of Us program) → first paid role.",
  },
  {
    id: "military-veteran",
    background: "Military Veteran",
    bestEntryRoles: [
      "SOC Analyst (clearance is gold)",
      "Network Operations Center",
      "Cybersecurity (defense contractor)",
      "Cloud Engineer (especially gov cloud)",
    ],
    transferableSkills: [
      "Operating in structured ops environments → SOC / NOC shifts",
      "Active security clearance (TS/SCI especially) → +$15–30K salary premium",
      "Crisis decision-making → incident response",
      "Discipline + reliability → on-call rotations",
      "Mission-first mindset → enterprise IT compliance",
    ],
    timeline: "3–9 months (faster with SkillBridge)",
    firstCert:
      "CompTIA Security+ (free if eligible via DoD / VA) OR CompTIA A+ + Network+",
    payReality: "$60–95K starting; clearance pushes higher",
    hiringConcerns:
      "'Do you have civilian-style soft skills?' / 'Why this role?'",
    howToAddress:
      "Emphasize collaborative teamwork, not just chain-of-command. Connect mission to career goal explicitly.",
    freeResources: [
      { name: "DoD SkillBridge (paid, last 6 months of service)", url: "" },
      { name: "Hiring Our Heroes", url: "" },
      { name: "Microsoft MSSA (free, 17-week, leads to MS roles)", url: "" },
      { name: "Vets in Tech", url: "" },
      { name: "Onward to Opportunity (Syracuse U.)", url: "" },
      { name: "ClearedJobs.net (clearance-required job board)", url: "" },
      { name: "CyberSecurityJobs.com", url: "" },
    ],
    successStory:
      "SkillBridge → SOC L1 at MSSP → SOC L2 at defense contractor (clearance enables the jump) → Sec Engineer in 3–4 years. Clearance compounds; never let it lapse.",
  },
  {
    id: "healthcare",
    background: "Healthcare Pro (Nurse / Paramedic / Lab Tech)",
    bestEntryRoles: [
      "Epic Analyst / Trainer (highest healthcare-IT ROI)",
      "Clinical Informatics",
      "Healthcare IT Implementation Specialist",
      "Privacy / GRC (HIPAA expertise transferable)",
    ],
    transferableSkills: [
      "Clinical workflow knowledge → EHR config / training",
      "HIPAA / compliance fluency → privacy engineering / GRC",
      "Triage thinking → incident response",
      "Patient-facing communication → user / customer support",
      "Pattern recognition → SOC analyst skill",
    ],
    timeline: "6–12 months (Epic-specific tracks faster if hospital sponsors)",
    firstCert:
      "Epic certification (employer-sponsored; can't self-certify) OR HCISPP (ISC2 healthcare-security cert)",
    payReality:
      "Epic RN Analyst $69–155K — among highest career-changer ROI in IT",
    hiringConcerns:
      "'Can you adapt to non-clinical pace?' / 'Will you find this fulfilling without patient contact?'",
    howToAddress:
      "Emphasize interest in systems-level impact. Be honest with yourself first about fulfillment without patient contact.",
    freeResources: [
      { name: "Epic UserWeb (sponsored login)", url: "" },
      { name: "HIMSS resources", url: "" },
      { name: "Healthcare IT News", url: "" },
      { name: "ISC2 HCISPP study guides", url: "" },
      { name: "r/healthIT subreddit", url: "" },
    ],
    successStory:
      "Nurse → bedside Epic super-user (volunteer) → hospital sponsors Epic certification → Epic Analyst → Clinical Informatics Director in 5–8 years. Hospital sponsorship is the linchpin.",
  },
  {
    id: "accountant",
    background: "Accountant / Bookkeeper / Finance",
    bestEntryRoles: [
      "IT Auditor (CISA-friendly path)",
      "Salesforce Administrator (financial systems)",
      "Business Systems Analyst",
      "GRC Analyst / Compliance Analyst",
      "SAP Functional Consultant (Finance module)",
    ],
    transferableSkills: [
      "Process orientation → systems analysis",
      "Financial controls → IT general controls (ITGC)",
      "Audit / SOX experience → IT audit",
      "ERP / accounting software fluency → SAP / Oracle / Workday",
      "Spreadsheet wizardry → Excel-heavy data analyst entry",
    ],
    timeline: "6–12 months",
    firstCert:
      "ISACA CISA (if 2+ yrs audit experience) OR CompTIA Security+ + AZ-900 (cloud literacy) OR Salesforce ADM-201",
    payReality:
      "$70–110K starting (CPA + IT audit can hit $130K+ in 2–3 years)",
    hiringConcerns:
      "'Are you technical enough?' / 'Will you slow our team down asking finance questions?'",
    howToAddress:
      "A+ cert + home lab demonstrates intent. Frame finance background as cross-functional asset, not handicap.",
    freeResources: [
      { name: "ISACA CISA review", url: "" },
      { name: "AICPA SOC 2 / IT audit resources", url: "" },
      { name: "Trailhead", url: "" },
      { name: "SAP Learning Hub", url: "" },
      { name: "r/sysadmin r/itaudit", url: "" },
    ],
    successStory:
      "CPA → Big 4 IT audit (sometimes lateral via existing employer) → Senior IT Auditor → GRC Manager in 5–7 years; comp parity with non-changer auditors within 2 years.",
  },
  {
    id: "retail-manager",
    background: "Retail / Hospitality Manager",
    bestEntryRoles: [
      "IT Project Manager / Coordinator",
      "Salesforce Administrator",
      "Service Desk Manager",
      "Customer Success / Implementation Specialist",
    ],
    transferableSkills: [
      "Managing 10–50 staff → managing 5–10 IT pros",
      "Schedule + budget operations → project / portfolio mgmt",
      "De-escalating angry customers → vendor / stakeholder mgmt",
      "Inventory / POS systems → SaaS configuration mindset",
      "Working under structured chaos → ITSM environments",
    ],
    timeline: "6–12 months",
    firstCert:
      "PMI CAPM (no experience requirement) OR ITIL 4 Foundation OR Salesforce ADM-201",
    payReality:
      "First role $50–75K (sometimes pay drop from senior retail mgmt; recover quickly)",
    hiringConcerns:
      "'Are you technical?' / 'Why drop from manager to coordinator?'",
    howToAddress:
      "Bring CAPM + ITIL + a free Trailhead profile. Frame as learning curve, not status drop.",
    freeResources: [
      { name: "PMI CAPM study (Andrew Ramdayal, Udemy)", url: "" },
      { name: "ITIL Foundation (PeopleCert authorized partners)", url: "" },
      { name: "Trailhead (free, gamified)", url: "" },
      { name: "Project Management Hut (free podcast)", url: "" },
    ],
    successStory:
      "Restaurant GM → CAPM cert + ITIL → IT Project Coordinator at MSP → IT Project Manager (PMP) → IT Service Manager in 4–6 years.",
  },
  {
    id: "trades",
    background: "Manufacturing / Trades (Electrician / Mechanic / Tech)",
    bestEntryRoles: [
      "Datacenter Technician (AI buildout = record demand)",
      "Field Engineer (vendor side: Cisco, Dell, HPE)",
      "Network Tech (especially OSP / fiber)",
      "Industrial Control Systems (ICS/OT) Security",
    ],
    transferableSkills: [
      "Reading schematics → reading network diagrams",
      "Hand-tool fluency → cable mgmt / rack-and-stack",
      "Safety procedures → datacenter ops",
      "Equipment troubleshooting → hardware diagnosis",
      "Working physical environments → DC / field roles",
    ],
    timeline: "3–9 months",
    firstCert: "BICSI Installer 1/2 OR CompTIA A+ + Server+ OR Cisco CCST",
    payReality:
      "$80–280K (datacenter electricians in Virginia / Texas hottest); fiber engineers $65–110K",
    hiringConcerns:
      "'Can you learn IT-specific terminology?' / 'Will you be willing to learn software side?'",
    howToAddress:
      "A+ certification proves it. Frame as career runway, not just current job.",
    freeResources: [
      { name: "BICSI training (cabling)", url: "" },
      { name: "Cisco Networking Academy (free)", url: "" },
      { name: "Datacenter Dynamics Academy", url: "" },
      { name: "Free YouTube: ServeTheHome, NetworkChuck", url: "" },
      {
        name: "local trade unions sometimes have IT crossover programs",
        url: "",
      },
    ],
    successStory:
      "Electrician → BICSI Installer 2 → Datacenter Tech at AWS/Microsoft DC ($85K+) → DC Engineer ($120K+) in 2–3 years. AI infra buildout is creating record demand 2025–2027.",
  },
  {
    id: "customer-service",
    background: "Customer Service / Call Center",
    bestEntryRoles: [
      "Help Desk Tier 1 / 2",
      "IT Support Specialist",
      "Customer Success Engineer",
      "Salesforce Administrator (CRM-adjacent)",
    ],
    transferableSkills: [
      "Ticket system fluency → IT ticketing (Jira, ServiceNow, Zendesk)",
      "De-escalation → angry-user handling",
      "SLA mindset → IT operations",
      "CRM use → Salesforce / Dynamics / HubSpot expertise",
      "Multi-channel comms → modern IT support",
    ],
    timeline: "3–6 months (one of the fastest pivots)",
    firstCert:
      "CompTIA A+ (~$300, 3–6 months prep) OR Google IT Support Cert (Coursera, ~$49/mo)",
    payReality: "$38–55K first IT role; reach $60K+ in 18 months",
    hiringConcerns:
      "Almost none — this is the most natural pivot.",
    howToAddress:
      "Show A+ cert + a home lab and you're hired.",
    freeResources: [
      { name: "Professor Messer A+ free YouTube", url: "" },
      { name: "Google IT Support Cert on Coursera", url: "" },
      { name: "Jeremy's IT Lab (free CCNA)", url: "" },
      { name: "r/sysadmin recommended reading", url: "" },
    ],
    successStory:
      "Cable-company CSR → Google IT Support Cert + A+ → Help Desk T1 at MSP → Sysadmin in 2 years. Most common 'started somewhere unrelated' story in IT.",
  },
  {
    id: "non-cs-grad",
    background: "Recent Graduate (Non-CS Degree)",
    bestEntryRoles: [
      "Help Desk → any track based on interest",
      "Junior Data Analyst (if numbers degree)",
      "QA Engineer (any degree)",
      "Junior Developer (if you self-taught code)",
    ],
    transferableSkills: [
      "Bachelor's-level discipline → any IT role with degree-required filter",
      "Research / writing skills → tech writing, BA work",
      "Statistics / numbers → data analyst",
      "Liberal arts thinking → product, UX, security GRC",
    ],
    timeline: "4–12 months",
    firstCert:
      "Depends on direction: A+ for ops, AZ-900 / SAA for cloud, Security+ for sec, Trailhead for SF, etc.",
    payReality: "$45–75K first IT role",
    hiringConcerns:
      "'Why didn't you study CS?' / 'Are you committed to IT?'",
    howToAddress:
      "Frame your degree as adjacent strength, not weakness. Show consistent learning over 6+ months.",
    freeResources: [
      { name: "Google IT Support Cert (most common entry)", url: "" },
      {
        name: "University career services often have post-grad IT programs",
        url: "",
      },
      { name: "Free CS50 (Harvard)", url: "" },
      { name: "fullstackopen.com (University of Helsinki)", url: "" },
    ],
    successStory:
      "English BA → Google IT Cert → Help Desk T1 → discovered passion for security → Security+ → SOC L1 → Sec Engineer in 4 years. Liberal arts degree didn't hold them back; consistency did the work.",
  },
  {
    id: "career-returner",
    background: "Career Returner (5+ years out)",
    bestEntryRoles: [
      "Cloud Systems Analyst (cloud has changed; refresh quickly)",
      "IT Analyst / Solutions Architect (lean on prior senior context)",
      "SaaS Admin (Salesforce / ServiceNow — modern stack)",
    ],
    transferableSkills: [
      "Senior-level judgment from prior experience → fast leadership-track entry",
      "Project / org muscle → PM / TPM roles",
      "Domain knowledge from prior career → industry-specialist roles",
      "Adaptability from time out → modern stack receptivity",
    ],
    timeline: "6–12 months",
    firstCert: "AZ-104 OR AWS SAA-C03 + Terraform Associate (re-current you fast)",
    payReality:
      "Often equivalent to peer with continuous experience after 1 year",
    hiringConcerns:
      "'How current are you?' / 'Why the gap?'",
    howToAddress:
      "Fresh certs prove currency. Answer the gap question once, briefly, then redirect to your current capabilities.",
    freeResources: [
      { name: "Salesforce Returnship Program", url: "" },
      { name: "Goldman Sachs Returnship", url: "" },
      { name: "Amazon Career Choice / Restart", url: "" },
      { name: "Path Forward (returnship aggregator)", url: "" },
      { name: "Microsoft Returnship (LEAP)", url: "" },
      { name: "reacHIRE", url: "" },
      { name: "Mom Project / Mother Honestly", url: "" },
      { name: "John Savill's Azure Master Class (free YouTube)", url: "" },
    ],
    successStory:
      "Stay-at-home parent (5 yrs) → Salesforce Trailhead Ranger + ADM-201 → Salesforce Administrator returnship at SaaS company → full-time SF Admin → Senior SF Consultant in 3 years.",
  },
  {
    id: "bootcamp-grad",
    background: "Self-Taught / Bootcamp Grad",
    bestEntryRoles: [
      "Junior Developer (any stack — frontend / backend / full-stack)",
      "QA Automation Engineer",
      "Junior DevOps Engineer",
      "Junior Cloud Engineer",
    ],
    transferableSkills: [
      "Self-directed learning → continuous skill development",
      "Bootcamp project portfolio → entry-level interview material",
      "Discord / Reddit community presence → networking",
      "Career-change motivation → grit signal",
    ],
    timeline:
      "6–12 months job search (reality: most attempts fail; the ones that succeed have referrals)",
    firstCert:
      "Optional: AWS DVA-C02 or GitHub Foundations as signal (portfolio matters more)",
    payReality:
      "$60–95K first role (lower at startups, higher at established cos)",
    hiringConcerns:
      "'Can you actually code in production?' / 'Will you flake?'",
    howToAddress:
      "3 deployed projects (NOT tutorials) + open-source contribution. Show consistent commits over 3+ months on GitHub.",
    freeResources: [
      { name: "fullstackopen.com (free, University of Helsinki)", url: "" },
      { name: "CS50 (Harvard, free)", url: "" },
      { name: "Frontend Masters", url: "" },
      { name: "The Odin Project (free)", url: "" },
      { name: "r/cscareerquestions weekly threads", url: "" },
      { name: "Discord communities (Reactiflux, Python Discord)", url: "" },
    ],
    successStory:
      "Bootcamp grad → 3 deployed projects + 1 OSS contribution → DM'd 50 engineers on LinkedIn → got 3 referrals → Junior Dev at startup → Mid Dev in 18 months. Referrals are the unlock; cold applications rarely work.",
  },
];
