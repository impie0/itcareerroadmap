---
cert_name: "Automating and Programming Cisco Collaboration Solutions"
cert_code: "300-835"
vendor: "Cisco"
status: "Retired (Sunset Feb 2, 2026)"
level: "Professional"
domain: "Collaboration / Unified Communications / DevOps"
ecosystem: "Cisco"
last_verified: "2026-05-02"
aliases:
  - "CLAUTO"
  - "Cisco Collaboration Automation"
  - "DevNet Collaboration"
---

# Automating and Programming Cisco Collaboration Solutions (300-835 CLAUTO)

## Exam facts

- **Official name:** Automating and Programming Cisco Collaboration Solutions v1.2
- **Exam code:** 300-835
- **Concentration track:** CLAUTO (also acceptable for Cisco DevNet Professional certification)
- **Part of certification:** 
  - CCNP Collaboration (concentration exam; must pair with 350-801 CLCOR core exam)
  - Cisco DevNet Professional (alternative path)
- **Duration:** 90 minutes
- **Question count:** ~55–65 questions
- **Question formats:** Multiple choice, fill-in-the-blank, simulations, testlets, drag-and-drop, simlets
- **Exam fee:** $300 USD
- **Pass score:** Approximately 70% (Cisco does not publicly disclose exact cut scores)
- **Delivery:** Pearson VUE testing centers; online proctored exams available in some regions
- **⚠️ RETIREMENT DATE:** February 2, 2026 (exam sunset; last test date February 2, 2026)
  - **Note (May 2026 status):** Exam has passed end-of-life; no longer available for new attempts. Cisco is redirecting CLAUTO candidates to newer automation/DevNet pathways.

## About

The 300-835 CLAUTO exam validates knowledge and skills required to implement applications that automate and extend Cisco Collaboration platforms using REST APIs, SDKs, and Python programming. Candidates demonstrate proficiency with:

- Cisco Webex REST APIs (users, meetings, teams, recordings)
- Cisco Unified Communications Manager (CUCM) AXL SOAP API (provisioning, configuration)
- Cisco collaboration endpoint xAPI (room systems, cameras, codecs)
- Cisco Webex Meeting APIs and attendee management
- Python programming fundamentals and SDK usage
- Git version control and DevOps collaboration practices

This exam bridges UC operations and DevOps, targeting engineers who want to programmatically manage Cisco collaboration infrastructure, build automation workflows, or develop collaboration-aware applications. It was one of five concentration options for CCNP Collaboration (alongside CLICA, CLACCM, CLCEI/CLHCT, CLCNF) and also credited toward Cisco DevNet Professional.

**Critical note:** As of May 2026, this exam is **no longer offered**. Cisco has sunset CLAUTO and is directing candidates to the updated CCNP Collaboration roadmap (which emphasizes CLACAD and cloud-native automation) and Cisco DevNet Professional pathways.

## Domain context

**Collaboration automation trends (2026):**
- **API-first architecture:** Cisco Webex, CUCM, and room endpoints expose REST/SDK interfaces; manual provisioning is increasingly obsolete
- **Infrastructure-as-Code (IaC):** Terraform and Ansible playbooks for Cisco collaboration deployments growing in enterprise adoption
- **Low-code/no-code platforms:** Webex flows, IFTTT integrations reducing reliance on custom Python scripts
- **Cloud-first shift:** Webex cloud APIs dominate; on-premises CUCM AXL is legacy but still critical for hybrid enterprises
- **AI/ML integration:** Chatbots, meeting assistants, and Webex Bot APIs emerging as collaboration use cases
- **Security automation:** API-driven compliance, permission auditing, and encrypted communication management
- **DevOps collaboration:** Platforms like Cisco Catalyst Center unifying network and collaboration operations

**CCNP Collaboration positioning (post-sunset):**
- **Historical role:** CLAUTO was entry point for engineers wanting to blend UC operations with programming/DevOps
- **Current alternative:** Cisco is transitioning candidates to:
  - **CCNP Collaboration CLACAD** (new 2026 exam) for cloud and automation focus
  - **Cisco DevNet Professional** for broader API and automation skills (non-UC-specific)
  - **CCNP Collaboration core + CLHCT/CLCCE** for hybrid/cloud-focused engineers

## Topics covered

### 1. Programming Fundamentals (15% of exam)

- **Python scripting basics:**
  - Data types (strings, integers, lists, dictionaries, tuples)
  - Control structures (if/else, for loops, while loops)
  - Functions and scope
  - Exception handling (try/except/finally)
  - File I/O and JSON/XML parsing
  - Regular expressions (regex) for text matching
  
- **Object-oriented programming (OOP):**
  - Classes, objects, inheritance, polymorphism
  - Instantiation and method calls
  - Using Python libraries (requests, json, xml.etree, etc.)
  
- **Git version control:**
  - Clone, commit, push, pull, branching, merging
  - Merge conflict resolution
  - Collaborative workflows (pull requests, code review)
  
- **API fundamentals:**
  - REST vs. RPC vs. SOAP architectural styles
  - HTTP methods (GET, POST, PUT, DELETE, PATCH)
  - Status codes and error handling
  - Request/response structure (headers, body, parameters)
  - Authentication (API keys, OAuth, Basic Auth)

### 2. Cisco Webex REST APIs (25% of exam)

- **Webex organization and licensing APIs:**
  - List, create, update, delete organizations
  - User lifecycle management (add, modify, delete, license assignment)
  - License tracking and allocation
  - Organization settings and compliance configurations
  
- **Webex users and spaces APIs:**
  - Create and manage user accounts programmatically
  - Assign licenses, roles, and permissions
  - Bulk user import and provisioning
  - Space creation and membership management
  - Room resource provisioning
  
- **Webex meetings APIs:**
  - Create, list, update, delete meetings
  - Schedule recurring and one-time meetings
  - Participant management and invite automation
  - Meeting settings (encryption, waiting room, attendee authentication)
  - Meeting room reservation (meeting room management)
  - Attendee tracking and analytics
  
- **Webex recordings and compliance APIs:**
  - Retrieve and manage recorded meetings
  - Download recording metadata and playback URLs
  - Compliance recording configuration
  - Retention policies and deletion workflows
  
- **Webex messaging and team collaboration:**
  - Team and space creation/management
  - Message posting and retrieval
  - File uploads to spaces
  - Webhooks for event-driven automation (message creation, membership changes)
  
- **Webex API authentication:**
  - OAuth 2.0 flows (authorization code, client credentials)
  - Personal access tokens
  - Token refresh and expiration handling
  - Scopes and permission boundaries
  
- **API rate limiting and best practices:**
  - Rate limit headers and backoff strategies
  - Pagination for large result sets
  - Batch operations vs. individual requests
  - Error handling and retry logic

### 3. Cisco Unified Communications Manager (CUCM) AXL API (20% of exam)

- **AXL (Administrator XML) API overview:**
  - SOAP-based XML interface for CUCM provisioning
  - Endpoint access (port 8443) and authentication (TLS certificate or Basic Auth)
  
- **User and device provisioning:**
  - Add, update, delete users (endusers, bulk users)
  - Associate users with phones (device ownership)
  - Provision phone lines and directory numbers
  - Set up feature codes (call forwarding, do-not-disturb)
  
- **Phone and endpoint management:**
  - Query available phone models and device profiles
  - Configure phone settings (template deployment, personalization)
  - Bulk device provisioning for large deployments
  - Remove/deactivate devices
  
- **Dialplan configuration:**
  - Create, modify, delete route patterns
  - Translation patterns and digit manipulation
  - Calling search spaces and partitions (dial-plan security)
  - Hunting lists and distribution algorithms
  
- **Feature provisioning:**
  - Call forwarding (all calls, busy, no answer)
  - Voicemail pilot and unified messaging integration
  - Conference bridges and transcoding resources
  - Media resources (codecs, transcoders, DSP resources)
  
- **AXL error handling and transactions:**
  - Understanding AXL error codes and messages
  - SOAP faults and exception propagation
  - Rollback and transaction semantics
  - Logging and audit trails
  
- **Integration patterns:**
  - Synchronous vs. asynchronous AXL calls
  - Throttling and connection pooling
  - Handling CUCM cluster topology (subscriber/publisher interaction)

### 4. Cisco Collaboration Endpoint xAPI (15% of exam)

- **Endpoint architecture:**
  - Cisco Webex Room Systems (Codecs, Room Kits, Boards)
  - xAPI interfaces (SSH, HTTP/REST)
  - Device roles (codec, camera, microphone, speaker)
  
- **xAPI SSH interface:**
  - SSH command-line access to endpoints
  - Configuration commands (set, get, list)
  - Event subscription and status polling
  - Script execution (built-in endpoint scripting)
  
- **xAPI HTTP/REST interface:**
  - HTTP POST for configuration (JSON payloads)
  - HTTP GET for status and statistics
  - WebSocket connections for real-time events
  
- **Configuration and customization:**
  - Call settings (dial plans, speed dials, call queuing)
  - Camera and audio settings (pan-tilt-zoom, microphone gain)
  - Branding and user interface customization
  - Network configuration (IP, DNS, NTP)
  
- **Real-time event monitoring:**
  - Call state events (connected, disconnected, ringing)
  - Participant join/leave events in group video calls
  - Device status changes (standby, active, in-call)
  - User interaction events (button press, menu selection)
  
- **Event subscription framework:**
  - Subscribe to event categories (call, video, audio, presence)
  - Webhook delivery and notification filtering
  - Event acknowledgment and delivery guarantees
  
- **Endpoint automation examples:**
  - Auto-answer and call routing scripts
  - Post-call surveys and feedback collection
  - Meeting room occupancy detection
  - Automated troubleshooting and health checks
  
- **xAPI Python SDK:**
  - jsxapi library for Pythonic interface to endpoints
  - Connection pooling and session management
  - Error handling and reconnection strategies

### 5. Webex Meetings and Advanced Collaboration APIs (15% of exam)

- **Webex Meetings API (distinct from Core Meetings API):**
  - User provisioning in Webex Meetings (separate from Webex app)
  - Meeting scheduling with Meetings-specific settings
  - Attendee records and meeting analytics (CMR - Cloud Meeting Records)
  - Billing and subscription management
  
- **Cisco Webex Contact Center (Webex CC) APIs (if included in v1.2):**
  - Agent and supervisor provisioning
  - Routing and queue management
  - Call recording and compliance
  
- **Collaboration device management (Cisco Catalyst Center integration):**
  - Device inventory and health monitoring
  - Configuration deployment at scale
  - Software updates and patch management
  - Firmware rollback procedures
  
- **Hybrid and on-premises integration:**
  - Expressway connector APIs
  - CUCM cluster discovery and provisioning
  - Interoperability between cloud and on-premises resources
  
- **Advanced use cases:**
  - Bot frameworks (Webex SDK, Botkit for Webex)
  - Meeting room booking integration (calendar APIs)
  - Attendance tracking and reporting

## Common job-ready skills

- **Core:** Write Python scripts to automate Webex user/meeting provisioning; construct AXL SOAP calls to manage CUCM phones and users; use xAPI to configure and monitor Cisco collaboration endpoints
- **Advanced:** Build REST API clients for multi-tenant Webex management; develop hybrid workflows (cloud + on-premises); implement event-driven automation with webhooks; create Webex bots and integrations
- **Operational:** Use Git for infrastructure-as-code collaboration; troubleshoot API calls and SSL/TLS certificate issues; monitor API rate limits and performance; document automation runbooks
- **Soft skills:** Gather automation requirements from teams; communicate API limitations and performance trade-offs; mentor junior engineers in API integration patterns; identify legacy systems needing modernization

## Recommended courses

- **Cisco official (archived, may no longer be actively taught):**
  - CLAUTO: Automating and Programming Cisco Collaboration Solutions
  - Prerequisites: Python basics, REST API concepts, CCNA networking knowledge

- **Third-party training providers (may still offer if exam deadline passed):**
  - Global Knowledge: CLAUTO course (check if still available post-sunset)
  - VoiceBootcamp: Cisco Collaboration Automation training
  - CBT Nuggets: CCNP Collaboration modules (may include CLAUTO legacy content)
  - Linux Academy / A Cloud Guru: Cisco DevNet Professional (alternative path)

- **Self-study resources (post-sunset):**
  - Cisco DevNet Learning Labs (free, Webex and CUCM AXL labs)
  - Cisco Learning Network documentation (white papers, architecture guides)
  - Python documentation and jsxapi GitHub repository
  - CUCM AXL schema and WSDL reference (Cisco documentation portal)

- **Hands-on labs:**
  - Cisco DevNet Sandbox (free Webex, CUCM, endpoint labs with browser access)
  - Local Python environment + requests library + mock APIs
  - Collaboration endpoint simulator (if available) or hardware lab access

## Practice exams

- **Official (exam now retired; limited availability):**
  - Cisco Learning Network practice exams (may no longer be active as of May 2026)

- **Third-party (legacy; quality may vary):**
  - ExamTopics (user-contributed questions for 300-835)
  - ExamCollection, CertLibrary, DumpsBase (may have archived 300-835 resources)
  - Udemy: "300-835 CLAUTO Automating and Programming Cisco Collab. EXAM" (check if course still active)

- **Strategy (for those who took exam before sunset):** Practice exams were crucial before Feb 2, 2026. Post-sunset candidates are redirected to DevNet Professional or updated CCNP Collaboration paths.

## Books

- **Primary (CLAUTO-specific):**
  - *Study Guide 300-835 CLAUTO Automating and Programming Cisco Collaboration Solutions Exam* by Anand Vemula & Madison G Digital Voice (only dedicated CLAUTO study guide; limited availability post-sunset)

- **Supplementary (API and DevOps foundations):**
  - *CCNP Collaboration Core CLCOR 350-801 Official Cert Guide* by Jason Ball & Thomas Arneson (covers core infrastructure concepts)
  - *Learning REST APIs* by Sam Ruby (REST fundamentals)
  - *Python for Network Engineers* by Eric Chou (Python basics + network automation)
  - Cisco documentation:
    - Webex APIs Developer Guide (official reference)
    - CUCM AXL API schema and examples
    - xAPI reference manuals (Cisco Webex Room Systems)

- **Online resources:**
  - Cisco Learning Network documentation portal (free white papers, guides)
  - GitHub repositories (jsxapi, Webex SDK samples)
  - DevNet.cisco.com (free labs and learning paths)

## Job titles

- Collaboration Engineer (with automation/scripting focus)
- UC Automation Engineer
- Collaboration DevOps Engineer
- Cisco Collaboration Architect (with API integration specialization)
- Webex Solutions Engineer (API/integration focus)
- Unified Communications Systems Administrator (automation-focused)
- Infrastructure as Code (IaC) Engineer (collaboration systems)
- Collaboration Integration Specialist
- Cisco DevNet Specialist (Collaboration track)

## Salary (USD / ZAR×18 / GBP / EUR / AUD)

**Based on CCNP Collaboration + automation/DevOps skills (May 2026 data):**

- **USD (United States):** $120,000 – $150,000+ annual average (higher than base CCNP Collaboration due to programming + DevOps premium); $58–$72/hour
  - **Webex/Cloud specialist premium:** +5–10% over base CCNP Collaboration
  - **DevOps/automation premium:** +8–12% over base networking engineer

- **ZAR (South Africa, ×18 multiplier):** ~R2.16M – R2.70M annual (using $120k–$150k USD baseline)

- **GBP (United Kingdom):** ~£96,000 – £120,000 annual (using 0.80 GBP/USD rate; actual UK rates may vary)

- **EUR (Eurozone):** ~€110,000 – €138,000 annual (using 0.92 EUR/USD rate; varies significantly by country and cost of living)

- **AUD (Australia):** ~A$185,000 – A$231,000 annual (using 1.54 AUD/USD rate; varies by state/city, Sydney/Melbourne premium)

*Note: CLAUTO certification holders (pre-sunset) may command premium compared to base CCNP Collaboration if they have active portfolio of automation projects. Post-sunset, DevNet Professional becomes alternative credential path with similar or better market value for automation-focused roles.*

## Skills validated

✓ Python programming (data types, control flow, functions, exception handling)  
✓ REST API design and consumption patterns  
✓ Webex organization, user, space, and meeting management via APIs  
✓ CUCM AXL SOAP API for provisioning phones, users, and dialplan  
✓ Cisco collaboration endpoint xAPI (SSH, HTTP, WebSocket)  
✓ Real-time event subscription and webhook-driven automation  
✓ OAuth 2.0 authentication and token management  
✓ API rate limiting, error handling, and resilience patterns  
✓ Git version control and collaborative development  
✓ Hybrid on-premises/cloud collaboration automation  
✓ Troubleshooting API calls, SSL/TLS, and integration issues  

## Related certs

- **300-810 CLICA:** Implementing Cisco Collaboration Applications (covers CUCM-based collaboration apps, messaging, presence)
- **300-815 CLACCM:** Implementing Cisco Collaboration Call Control and Mobility
- **300-820 CLHCT:** Implementing Cisco Collaboration Hybrid and Cloud Technologies (formerly CLCEI; cloud/hybrid focus)
- **300-825 CLCNF:** Implementing Cisco Collaboration Conferencing (on-premises Meeting Server)
- **350-801 CLCOR / CLCORv2.0:** Implementing and Operating Cisco Collaboration Core Technologies (core exam; required with any concentration)
- **Cisco DevNet Professional:** Alternative professional-level certification for API and automation skills (not UC-specific; broader scope)
- **Cisco DevNet Associate:** Entry-level DevOps/automation certification (lighter programming load than DevNet Professional)

## Sources

- [Cisco 300-835 CLAUTO Official Exam Page](https://www.cisco.com/c/en/us/training-events/training-certifications/exams/current-list/clauto-300-835.html)
- [Cisco CCNP Collaboration Exams and Training](https://www.cisco.com/site/us/en/learn/training-certifications/certifications/collaboration/ccnp-collaboration/exams-and-training.html)
- [The Future of Collaboration is Here: Cisco CCNP Collaboration Updates (Cisco Blogs)](https://blogs.cisco.com/learning/the-future-of-collaboration-is-here)
- [NIL Learning: 300-835 CLAUTO](https://learning.nil.com/cisco-certifications/ccnp-certification/cisco-collaboration-certification/300-835-clauto/)
- [NWExam: Your Roadmap to CCNP 300-835 CLAUTO](https://www.nwexam.com/blog/ccnp-collaboration-300-835-clauto-exam-brief-guide-valuable-learning)
- [Cisco DevNet Learning Labs (free hands-on labs)](https://developer.webex.com/)
- [Webex APIs Developer Guide](https://developer.webex.com/docs/api/basics)
- [CUCM AXL API Reference (Cisco Learning Network)](https://learningcontent.cisco.com/)
- [jsxapi GitHub Repository (Cisco Endpoint Automation)](https://github.com/CiscoDevNet/jsxapi)
- [CCNP Collaboration Salary 2026 (ZipRecruiter)](https://www.ziprecruiter.com/Salaries/Ccnp-Collaboration-Salary)
