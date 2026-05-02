---
title: "Aviation / Aerospace IT Careers"
slug: "aviation-aerospace-it"
code: "IND09"
kind: "industry"
lastUpdated: "2026-04-30"
vendors: []
tags: ["aviation", "aerospace", "industry"]
---

# Aviation / Aerospace IT Careers

## Industry Overview

The aviation and aerospace sector represents a multi-trillion-dollar global industry spanning commercial air transport, defense and military aircraft, space systems, maintenance repair and overhaul (MRO) operations, and supporting infrastructure. IT roles in this vertical demand specialized knowledge of aerospace-specific systems, stringent regulatory compliance, and mission-critical software engineering practices that exceed typical enterprise software standards.

### Segments and Market Size

**Commercial Aviation**: The global commercial aviation market includes approximately 28,000 aircraft in service with major operators including American Airlines, United, Delta, Southwest (US), Lufthansa, Air France, British Airways, Emirates, Qatar, Singapore Airlines, ANA, and JAL. Commercial airlines rely on interconnected IT systems spanning passenger services, operations, maintenance, crew scheduling, and financial management. According to industry projections, Boeing anticipates demand for approximately 716,000 new maintenance technicians worldwide over the next two decades (2024–2043), including 123,000 in North America.

**Defense and Military Aerospace**: Defense contractors including Boeing Defense, Lockheed Martin, Raytheon (RTX), Northrop Grumman, and BAE Systems develop and maintain military aircraft, missiles, and electronic warfare systems. These organizations operate under strict export controls (ITAR / EAR) and classified development environments.

**Space Industry**: Commercial space companies including SpaceX, Blue Origin, United Launch Alliance (ULA), Rocket Lab, and Sierra Space are expanding launch cadences and developing reusable systems. As of April 2026, SpaceX achieved 50 launches in the calendar year, with Starship Version 3 development ongoing and in-flight refueling tests planned. Blue Origin announced "Project Sunrise," proposing 50,000+ satellites for in-orbit computation.

**Business Aviation**: Operators of business jets and helicopters rely on specialized crew and maintenance IT platforms, including systems for charter management, crew scheduling, and compliance tracking.

**MRO (Maintenance, Repair, Overhaul)**: Independent and airline-owned maintenance facilities perform line maintenance (between-flight checks), base maintenance (heavy structural work), and engine overhaul. South Africa has historically operated the most developed MRO industry on the African continent; major global MRO players include Lufthansa Technik, Air France Industries, KLM Engineering, and specialized providers like Swiss-AS.

---

## Regulatory Framework

### Certification Authorities

**FAA (Federal Aviation Administration)**  
The FAA oversees civil aviation in the United States and North America. The FAA is responsible for certifying aircraft, pilots, maintenance organizations, and all commercial software-based avionics systems. As of March 2026, the FAA plans to issue a final rule requiring new transport-category aircraft, engines, and propellers to meet specific cybersecurity standards codified in certification, ensuring every new aircraft must meet uniform cyber protection requirements. The FAA also enforces Instructions for Continued Airworthiness (ICA) to maintain cybersecurity protections throughout an aircraft's operational life.

See: [FAA Cybersecurity Strategy](https://www.faa.gov/about/plansreports/faa-cybersecurity-strategy)

**EASA (European Union Aviation Safety Agency)**  
EASA has authority over EU and several non-EU European countries. EASA and FAA maintain a 2008 bilateral agreement enabling harmonized certification; FAA generally accepts EASA aircraft certification and vice versa.

See: [EASA Aircraft Certification](https://www.easa.europa.eu/en/domains/aircraft-products/aircraft-certification)

**ICAO (International Civil Aviation Organization)**  
ICAO, a UN specialized agency, sets international standards in Annex 8 (type certification). FAA and other national regulators follow ICAO principles.

See: [ICAO Standards](https://www.icao.int/)

### Software and Cybersecurity Standards

**DO-178C / ED-12C** (Software Considerations in Airborne Systems)  
DO-178C is the primary certification document for all commercial software in airborne avionics systems. Published by RTCA in cooperation with EUROCAE, DO-178C was completed in November 2011 and approved in December 2011. It replaced DO-178B and uses a Design Assurance Level (DAL) framework with five levels (A–E, where A is most critical). Supplemental documents address tool qualification (DO-330), modeling (DO-331), object-oriented methods (DO-332), and formal methods (DO-333).

DO-178C defines rigorous requirements for:
- Software lifecycle processes (planning, requirements, design, implementation, verification, certification)
- Traceability of requirements through code and test cases
- Independent verification and validation (V&V)
- Fault tolerance and error handling
- Tool qualification for compilers, analyzers, and development environments

See: [RTCA DO-178C Training](https://www.rtca.org/training/do-178c-training/) | [DO-178C Overview (arc42)](https://quality.arc42.org/standards/do-178c)

**DO-254** (Hardware Design Assurance)  
DO-254 parallels DO-178C for airborne electronic hardware, using the same DAL framework. It ensures avionics hardware (printed circuit boards, integrated circuits, connectors) meet certification objectives.

**DO-326A / ED-202A** (Airworthiness Security Process Specification)  
DO-326A addresses Intentional Unauthorized Electronic Interaction (IUEI), commonly understood as cyberattacks. It provides requirements and objectives for mitigating security threats to aircraft systems in a manner similar to DO-178C and DO-254. Compliance with DO-326A is increasingly mandatory for new aircraft certification.

See: [PTC: DO-178C and DO-254 Explained](https://www.ptc.com/en/blogs/alm/do178c-and-do254-explained)

**EASA Part-IS** (Information Security Requirements)  
EASA Part-IS became obligatory from October 2025 for EASA-approved organizations and by February 22, 2026 for other aviation service providers including air operators (AOC holders), Part-145 maintenance organizations, CAMOs, and flight training organizations. Part-IS requires a structured Information Security Management System (ISMS) capable of detecting, responding to, and reporting cyber incidents with potential impact on aviation safety. Organizations must demonstrate effective implementation, risk management, and incident response capability by the February 2026 deadline and reach "Operational" and "Effective" levels within an additional 18-month period.

See: [EASA Part-IS Information Security](https://www.easa.europa.eu/en/the-agency/faqs/information-security-part) | [Smarttech247: EASA Part-IS 2026 Requirements](https://www.smarttech247.com/blog-posts/easa-part-is-and-what-aviation-cybersecurity-leaders-must-have-in-place-in-2026/)

### Quality Management Standards

**AS9100 / AS9110 / AS9120** (SAE Aerospace Quality Management Systems)  
These international standards—developed by the Society of Automotive Engineers (SAE) and the International Aerospace Quality Group (IAQG)—define Quality Management Systems (QMS) specific to aviation, space, and defense.

- **AS9100**: Core aerospace QMS, based on ISO 9001:2015 with additional aerospace-specific requirements. Required by major manufacturers including Boeing, Airbus, Lockheed Martin, and Raytheon for all suppliers and service providers.
- **AS9110**: Extends AS9100 for Maintenance, Repair, and Overhaul (MRO) stations, adding requirements for maintenance documentation, technical data control, work verification, and compliance tracking.
- **AS9120**: Adds requirements for aerospace distributors and stockists, emphasizing traceability, counterfeit prevention, and material handling.

See: [AS9100 Store: Aerospace Standards Explained](https://as9100store.com/aerospace-standards-explained/what-is-as9100/) | [ANSI Blog: AS 9100 Series Standards](https://blog.ansi.org/ansi/as-9100-series-standards/)

### Defense Export Controls

**ITAR** (International Traffic in Arms Regulations)  
ITAR, administered by the State Department's Directorate of Defense Trade Controls (DDTC), governs the design, manufacture, and export of military-use items including defense aircraft, avionics, and related technical data. Defense contractors working on military programs must comply with ITAR classification and export restrictions. Violations carry severe penalties including criminal liability.

**EAR** (Export Administration Regulations)  
EAR, administered by the Department of Commerce Bureau of Industry and Security (BIS), covers dual-use and commercial technologies (semiconductors, encryption, advanced materials) that may have military applications. Aerospace companies often manage both ITAR and EAR compliance simultaneously on different program elements.

See: [Visual Compliance: ITAR and EAR Compliance Risks for Aerospace](https://www.visualcompliance.com/blog/itar-or-ear-how-aerospace-firms-can-spot-and-fix-their-biggest-compliance-risks/)

---

## Airline IT Platforms and Systems

### Passenger Service Systems (PSS) and Reservation Systems

Airlines worldwide operate interconnected IT platforms spanning reservations, check-in, revenue management, crew scheduling, and dispatch. The three dominant Global Distribution Systems (GDS) platforms control over 97% of global GDS bookings.

**Amadeus Altéa** (IATA standard PSS)  
Amadeus Altéa is the world's most widely deployed PSS platform, used by over 200 airlines including British Airways, Iberia, Air France, KLM, Qantas, Japan Airlines, and scores of others. Altéa provides integrated inventory management, reservations, ticketing, departure control, and digital solutions. A key strength of Altéa is its shared infrastructure model: all Altéa airlines share common inventory and departure control infrastructure, making interline check-in (passenger transfers between carriers) technically seamless. Amadeus also offers the Altéa Passenger Service System (PSS) and Altéa Reservation Desktop for check-in and ground operations.

See: [Amadeus Altéa Airline Reservation System](https://amadeus.com/en/airlines/products/altea-airline-reservation-system) | [Amadeus for Airlines](https://amadeus.com/en/airlines/products/altea-passenger-service-system)

**Sabre SabreSonic and Sabre Connected**  
Sabre, the original computer reservation system developed by American Airlines in the 1960s, now headquartered in Texas with 30 country offices, connects 400,000+ travel agencies across 160 countries. SabreSonic is an NDC-enabled eCommerce platform with a booking engine and rapid shopping. Key adopters include budget and ultra-low-cost carriers: AirAsia, Eurowings, Ryanair, Wizz Air. Sabre also operates Sabre Hospitality for ancillary services (seat selection, baggage, meals, upgrades) across all check-in channels.

**Navitaire** (Amadeus subsidiary, e-commerce-first PSS)  
Navitaire, owned by Amadeus, is marketed as a digital "e-commerce first" platform with tools for merchandising, personalization, and analytics. Navitaire serves ultra-low-cost carriers including Allegiant, Frontier, and Wizz Air. The platform emphasizes mobile-first design and rapid ancillary sales.

**Travelport (Galileo, Worldspan, Apollo)**  
Travelport is the product of merging three legacy GDS systems: Galileo, Worldspan, and Apollo. Travelport connects 400+ airlines, 650,000+ hotels, and numerous travel services. The platform has shifted toward API-based solutions and AI-powered search controls for modern retail operations.

See: [AltexSoft: Airline Reservation Systems and Passenger Service Systems](https://www.altexsoft.com/blog/airline-reservation-systems-passenger-service-systems/)

### Flight Operations and Crew Management

**Lido Flight Suite** (Lufthansa Systems)  
Lido/Flight is one of the most widely deployed flight planning solutions globally. Lido/Flight 4D (planning), Lido/Navigation (in-flight navigation), and Lido/Performance (flight performance calculation) provide airlines a seamless digital process from flight planning through aircraft parking. Lido leverages real-time data to optimize routes, reduce fuel consumption, and lower operational costs. A key competitive advantage is Lido's independence from aircraft manufacturers—it provides a standardized solution across all aircraft types in an airline's fleet. Airlines including Lufthansa, Air France, and others rely on Lido for flight operations.

**NavBlue** (Airbus subsidiary, N-Flight Planning)  
NAVBLUE, an Airbus company, offers the N-Flight Planning system. Airlines including Hawaiian Airlines have standardized on NAVBLUE's solution. The platform emphasizes integration with Airbus digital services and continuous airworthiness data.

See: [Lufthansa Systems: Lido Flight 4D](https://www.lhsystems.com/solutions/operations-control-center/lido-flight-4d) | [Lufthansa Systems: Lido Flight Planning Solutions](https://www.lhsystems.com/solutions/flight-operations-solutions/lido-flight-planning-solutions)

### Maintenance and Technical Operations

**AMOS** (Swiss-AS, enterprise MRO suite)  
AMOS, developed by Swiss AviationSoftware (Swiss-AS) over 35+ years, is a comprehensive aircraft maintenance and engineering system trusted by airlines and MRO providers. AMOS covers end-to-end aircraft maintenance: planning, scheduling, work execution, inventory management, regulatory compliance, and technical records. Major airlines worldwide use AMOS for line and base maintenance operations.

**IFS Maintenix** (integrated asset management for aviation)  
IFS Maintenix is an enterprise asset management solution tailored for aviation MRO. It provides work order management, fleet health monitoring, inventory control, regulatory compliance, and predictive maintenance analytics.

**TRAX eMRO** (North American MRO focus)  
TRAX, based in Miami, Florida, is a leading MRO software provider for North American airlines and independent maintenance facilities. TRAX emphasizes heavy maintenance planning, shop floor execution management, and technical records management.

See: [Swiss-AS AMOS](https://www.swiss-as.com/) | [IFS Aviation Maintenance](https://www.ifs.com/en/products/aviation-maintenance)

### Airport and Air Traffic Control Systems

**SITA** (Société Internationale de Télécommunications Aéronautiques)  
SITA is a primary provider of IT infrastructure and datalink communication services for airports and air navigation service providers (ANSPs). SITA operates ATC systems for airport control towers and area control centers, enabling ANSPs to exchange and manage digital messages with aircraft. SITA also provides ACARS ground earth stations for aircraft-to-ground messaging.

**ARINC** (Aeronautical Radio, Inc., Collins Aerospace subsidiary)  
ARINC is the other primary ACARS datalink service provider alongside SITA. ARINC has provided aircraft communications infrastructure for decades, including ground stations, datalink relay, and ATC messaging.

**SkyWise** (Airbus digital platform)  
SkyWise is Airbus's digital platform integrating real-time aircraft health, flight operations, and maintenance data. SkyWise connects to maintenance systems, predictive analytics, and operations centers to optimize fleet utilization and reduce unplanned maintenance.

See: [SITA for Air Navigation Service Providers](https://www.sita.aero/solutions/industries/air-navigation-service-providers/) | [Palantir Impact: Airbus and SkyWise](https://www.palantir.com/impact/airbus/)

---

## Avionics Communication Standards

Avionics systems communicate across multiple data buses and network architectures, each with specific bandwidth, latency, and redundancy characteristics.

### ARINC 429

ARINC 429 is a simplex (one-way) data transfer standard used extensively in commercial aircraft avionics. A single transmitter communicates with up to 20 receivers over separate transmit and receive ports. Data rates are either 12.5 kbit/s (low-speed) or 100 kbit/s (high-speed). ARINC 429 is self-clocking and self-synchronizing, minimizing external clock distribution complexity. It has been the de facto standard for commercial aviation avionics for decades.

### MIL-STD-1553

MIL-STD-1553, created over 40 years ago by the U.S. Department of Defense, is a military-grade avionics data bus. It uses a bidirectional, command/response, time-division multiplexing topology with a single Bus Controller (BC) initiating all communication and Remote Terminals (RTs) responding only when addressed. MIL-STD-1553 supports data rates up to 1 Mbps and is widely used in fighter aircraft (including F-16), military helicopters, and defense systems.

### ARINC 664 / AFDX (Avionics Full Duplex Ethernet)

ARINC 664 Part 7 defines a deterministic Ethernet network as an avionic databus. Introduced in later aircraft designs including Airbus A380 and Boeing 787, AFDX preserves point-to-point virtual links (mimicking ARINC 429 semantics) while reducing physical wiring. AFDX uses special scheduling to provide deterministic timing and redundancy management, securing reliable communication of both critical and non-critical data. AFDX is increasingly adopted in new commercial and military aircraft.

See: [AJOLLY Testing: ARINC 429, ARINC 664 (AFDX), and MIL-STD-1553 Comparison](https://www.a-jolly.com/%E2%9C%88%EF%B8%8F-comparison-between-arinc-429-arinc-664-afdx-and-mil-std-1553-which-protocol-to-use/)

---

## Defense Aerospace and Military Platforms

### Prime Contractors and IT Infrastructure

**Boeing Defense, Space & Security**  
Boeing operates extensive IT systems for military aircraft (KC-135, P-8, E-7), missile systems, and space programs. The 787 Dreamliner program (civil variant with military derivatives like P-8) has driven significant avionics IT innovation. Boeing Learning Together provides training on aerospace systems and processes.

**Lockheed Martin**  
Lockheed develops military aircraft (F-16, F-35), missile systems (AGM-158 JASSM), satellite systems, and space launch vehicles. Lockheed's IT infrastructure spans classified development environments, secure supply chains, and continuous deployment under ITAR restrictions.

**Raytheon Technologies (RTX)**  
Raytheon (formerly Raytheon Company, merged with United Technologies), develops avionics, radar systems, and defense electronics. RTX maintains extensive IT operations spanning Collins Aerospace (avionics and cabin systems) and Raytheon Missiles & Fire Control.

**Northrop Grumman**  
Northrop Grumman develops unmanned systems, electronic warfare, and space systems, with IT infrastructure spanning secure design environments and global supply chains.

**BAE Systems**  
BAE Systems, a UK-headquartered defense contractor, develops fighter avionics, electronic warfare, and cyber defense systems with IT operations across North America, Europe, and the Middle East.

---

## Space Industry and Ground Systems

### Commercial Space Companies

**SpaceX**  
SpaceX operates an extensive IT infrastructure spanning rocket control systems, satellite operations (Starlink), manufacturing automation, and mission control. As of April 2026, SpaceX achieved 50 launches in a single calendar year. SpaceX Starship Version 3 is in development with in-flight refueling tests planned. SpaceX is preparing for an IPO in 2026 at an estimated $1.5 trillion valuation with financing exceeding $30 billion.

**Blue Origin**  
Blue Origin operates New Shepard (suborbital), New Glenn (heavy-lift launch), and Blue Moon (lunar lander) programs. Blue Origin announced "Project Sunrise," proposing 50,000+ satellites for in-orbit computation, entering the space data center market.

**United Launch Alliance (ULA)**  
ULA operates Atlas V and Delta IV Heavy launch vehicles, serving national security and commercial missions. ULA is developing Vulcan Centaur as a next-generation heavy-lift system.

**Rocket Lab**  
Rocket Lab operates Electron, a small-lift launch vehicle, and is developing Neutron, a medium-lift reusable system. Rocket Lab emphasizes rapid launch cadence and responsive space missions.

**Sierra Space**  
Sierra Space develops Dream Chaser, a spaceplane for cargo delivery to the International Space Station, and other aerospace systems.

See: [SpaceX – Company Analysis and Outlook Report (2026)](https://www.aviationoutlook.com/p/spacex-company-analysis-outlook-report) | [Bloomberg: SpaceX and Blue Origin Under Pressure in 2026](https://www.bloomberg.com/opinion/articles/2026-01-07/spacex-and-blue-origin-will-be-under-pressure-to-perform-in-2026)

---

## Aerospace IT Career Paths and Salary Bands

### Role Profiles

**Aerospace Embedded Software Engineer**

Embedded software engineers in aerospace design, develop, and certify safety-critical software for avionics, engine control systems, and flight management systems. Responsibilities include:
- DO-178C compliance throughout the software lifecycle
- Requirements traceability and verification/validation
- Unit and integration testing
- Tool qualification and formal methods application
- Collaboration with hardware engineers and certification authorities

**Typical experience progression:**
- Entry: B.S. in Computer Science, Computer Engineering, or related field; familiarity with embedded C/C++ and real-time systems
- Mid-level: 5–8 years; lead engineer on subsystems; certification authority interactions
- Senior: 10+ years; architecture decisions; program leadership; FAA/EASA liaison

**Salary (2026)**: Entry-level $95K–$115K (SpaceX); mid-level $140K–$200K; senior $200K–$280K+. At GE Aerospace, estimated range is $106K–$143K.

See: [Glassdoor: Embedded Software Engineer Salary (2026)](https://www.glassdoor.com/Salaries/embedded-software-engineer-salary-SRCH_KO0,26.htm) | [Levels.fyi: Blue Origin Aerospace Engineer Salaries](https://www.levels.fyi/companies/blue-origin/salaries/aerospace-engineer/locations/united-states)

**Airline Systems Engineer**

Airline systems engineers design, deploy, and maintain integrated IT platforms spanning reservations, operations, maintenance, crew scheduling, and financial systems. Responsibilities include:
- Sabre / Amadeus / Navitaire system administration and customization
- Integration of flight ops systems (Lido, NavBlue)
- Maintenance software (AMOS, TRAX, IFS) integration and data flow
- Cybersecurity and regulatory compliance (EASA Part-IS, FAA guidance)
- Vendor relationships and SLA management

**Typical experience progression:**
- Entry: B.S. in IT / Computer Science; basic GDS or airline operations knowledge
- Mid-level: 5–8 years; system architect; vendor negotiations
- Senior: 10+ years; program director; IT strategy; regulatory authority engagement

**Salary (2026)**: Entry $55K–$75K; mid-level $85K–$130K; senior $130K–$180K+.

**GDS Developer** (Sabre / Amadeus)

GDS developers specialize in programming against Sabre or Amadeus APIs, building custom travel booking engines, mobile applications, and B2B integrations. Key skills include:
- Sabre SDK and XML messaging, or Amadeus Web Services API
- Travel industry domain knowledge (fares, inventory, ancillaries)
- Integration with airline PSS back-end systems
- REST API design and microservices architecture

**Salary (2026)**: Entry $40K–$55K; mid-level $60K–$100K; senior $100K–$150K+.

See: [ZipRecruiter: Amadeus GDS Jobs (Apr 2026)](https://www.ziprecruiter.com/Jobs/Amadeus-Gds)

**MRO IT Specialist**

MRO IT specialists support aircraft maintenance operations, managing:
- AMOS, TRAX, or IFS Maintenix deployment and customization
- Work order systems and parts inventory
- Technical records and compliance documentation
- Predictive maintenance analytics
- Integration with airline operations systems

**Salary (2026)**: Entry $50K–$70K; mid-level $70K–$110K; senior $110K–$160K+.

**Avionics Systems Engineer**

Avionics systems engineers design integrated avionics suites, managing:
- ARINC 429, ARINC 664 / AFDX, or MIL-STD-1553 bus architecture
- Real-time operating systems (RTOS)
- DO-254 hardware certification
- Supplier integration and obsolescence management
- Flight test and certification support

**Salary (2026)**: Entry $95K–$115K; mid-level $150K–$200K; senior $200K–$280K+.

See: [Raytheon Embedded Software Engineer Salaries](https://www.glassdoor.com/Salary/Raytheon-Embedded-Software-Engineer-Salaries-E3300024_D_KO9,35.htm) | [Boeing Embedded Software Engineer Salaries](https://www.glassdoor.com/Salary/Boeing-Embedded-Software-Engineer-Salaries-E102_D_KO7,33.htm)

---

## Career Entry and Transition Routes

### From Software Engineering to Aerospace Embedded

1. **Foundation**: B.S. in Computer Science, Computer Engineering, or Software Engineering
2. **Entry role**: Mid-level Software Engineer at a defense contractor or aerospace supplier
3. **Transition**:
   - Pursue DO-178C / DO-254 certification training (RTCA, LCS Training, ACS)
   - Take assignment on safety-critical avionics or embedded systems project
   - Gain familiarity with ARINC standards (429, 664, AFDX) and real-time systems
   - Participate in code review and verification processes
4. **Advanced**:
   - Tool qualification training (DO-330)
   - Formal methods (DO-333) specialization
   - Lead architect or program management roles

### From IT Operations to Airline Systems Engineering

1. **Foundation**: B.S. in IT, Computer Science, or related field; 2–3 years IT ops experience
2. **Entry**: Sabre / Amadeus support analyst or systems administrator
3. **Transition**:
   - Pursue Amadeus or Sabre certification training (offered by vendors)
   - Cross-training on flight ops systems (Lido, NavBlue)
   - Maintenance systems exposure (AMOS, TRAX)
   - EASA Part-IS compliance training
4. **Advanced**: Systems architect, IT director, or VP of airline IT operations

### From Network/Systems Admin to MRO IT

1. **Foundation**: CompTIA Security+, CCNA, or equivalent IT infrastructure experience
2. **Entry**: MRO IT support analyst at an airline or independent maintenance facility
3. **Transition**:
   - AMOS / TRAX / IFS Maintenix system training
   - Aircraft maintenance domain knowledge (line/base maintenance, checks, turnarounds)
   - AS9110 compliance and quality management training
4. **Advanced**: MRO IT manager, systems architect, or enterprise resource planning (ERP) director

---

## Industry-Specific Training and Certifications

### Standards and Compliance Training

| Certification | Authority | Cost | Duration | Target Role |
|---|---|---|---|---|
| DO-178C / ED-12C | RTCA / EUROCAE | $2,500–$4,000 | 3–5 days | Avionics software engineer |
| DO-254 Essentials | RTCA / various providers | $2,500–$4,000 | 3 days | Avionics hardware engineer |
| DO-326A (Cybersecurity) | RTCA / third-party | $2,500–$3,500 | 2–3 days | Avionics security engineer |
| EASA Part-IS Implementation | various (e.g., European Aviation Institute) | $1,500–$2,500 | 2 days | Airline IT compliance manager |
| AS9100 / AS9110 / AS9120 | SAE / registered training providers | $1,500–$3,000 | 2–5 days | Quality/compliance engineer |
| DO-330 (Tool Qualification) | RTCA / consultants | $2,000–$3,500 | 2–3 days | Avionics software lead |
| DO-333 (Formal Methods) | RTCA / academic institutions | $2,000–$3,500 | 3–5 days | Avionics research engineer |
| Amadeus GDS | Amadeus (vendor) | $1,000–$2,000 | 3–5 days | GDS developer, travel systems |
| Sabre GDS | Sabre (vendor) | $1,000–$2,000 | 3–5 days | GDS developer, travel systems |
| AMOS / TRAX / IFS | Vendor (in-person, on-site) | $2,000–$5,000 | 2–10 days | MRO IT specialist |

See: [RTCA DO-178C Training](https://www.rtca.org/training/do-178c-training/) | [European Aviation Institute: EASA Part-IS Training (Feb 2026)](http://aviationinstitute.eu/easa-part-is-aviation-cybersecurity-training-delivered-by-european-aviation-institute-5-6-february-2026/)

### Vendor Certifications

**Amadeus Certification Program**  
Amadeus offers structured training and certification for GDS developers, with emphasis on Altéa PSS architecture, web services API, and e-commerce integration. Certification paths include Associate, Professional, and Expert levels.

**Sabre Certification Program**  
Sabre provides certifications in SabreSonic, Sabre Web Services, and NDC-enabled retailing. Sabre Developer Training is available on-demand and instructor-led.

**Boeing Learning Together**  
Boeing's learning platform offers aerospace systems, manufacturing, and quality courses including DO-178C deep dives.

---

## Key Research and Reference Materials

### Books

- **Developing Safety-Critical Software** by Constance Rierson — comprehensive guide to DO-178C and avionics software development lifecycle
- **DO-178C Handbook** (RTCA) — official supplementary documentation with rationale and application guidance
- **Real-Time Systems Design and Analysis** by Phillip A. Laplante — foundational embedded systems and real-time scheduling
- **Aircraft Systems Integration Technology and Management** edited by Rikard Carlsson — systems engineering in aerospace
- **ARINC Standards User's Guide** — practical reference for ARINC 429, 664, and related avionics buses

### Standards Documents

- **DO-178C / ED-12C** — Software Considerations in Airborne Systems and Equipment Certification (RTCA / EUROCAE, $100–$200 purchase)
- **DO-254** — Design Assurance Guidance for Airborne Electronic Hardware (RTCA, $100–$200 purchase)
- **DO-326A / ED-202A** — Airworthiness Security Process Specification (RTCA / EUROCAE, $100–$200 purchase)
- **AS9100 / AS9110 / AS9120** — Quality Management Systems (SAE, registration required for access)
- **ARINC 429 and ARINC 664 Standards** — Some freely available on ARINC's site; full specs require purchase

See: [RTCA Standards](https://www.rtca.org/)

### Regulatory Resources (Free)

- **FAA Advisory Circulars and Technical Standard Orders (TSOs)** — freely available on [faa.gov](https://www.faa.gov)
- **EASA Special Conditions, Certification Specifications** — freely available on [easa.europa.eu](https://www.easa.europa.eu)
- **ICAO Annexes (especially Annex 8)** — available through ICAO

### Conferences and Communities

- **Aircraft Interiors Expo (AIX)** — annual conference spanning cabin systems, IFE, and airline IT operations (March, Hamburg)
- **NBAA-BACE** — National Business Aviation Association Business Aviation Convention & Exhibition (October, US)
- **World Aviation Festival** — global aviation industry conference (September, Dubai)
- **Space Symposium** — annual space industry conference (April, Colorado Springs)
- **AIAA SciTech Forum** — American Institute of Aeronautics and Astronautics (January, National Harbor)
- **Flight Global MRO & Operations Summit** — maintenance and operations conference (annual)

---

## South African Context

### Airline Industry

**South African Airways (SAA)**  
SAA, founded in 1929 as Union Airways and rebranded in 1934, is the national flag carrier. As of February 2026, SAA operates 19 aircraft to 17 destinations from its Johannesburg hub at O.R. Tambo International Airport. SAA entered voluntary business rescue in December 2019 and suspended operations in 2020, though restructuring efforts continue.

**Comair**  
Johannesburg-headquartered Comair operated regional and international services as a British Airways franchise from 1998. Comair entered business rescue proceedings in May 2020 due to COVID-19 impact.

See: [South African Airways (Wikipedia)](https://en.wikipedia.org/wiki/South_African_Airways) | [Comair (CAPA Profile)](https://centreforaviation.com/data/profiles/airlines/comair-south-africa-mn)

### Aerospace and Defense

**Denel Aeronautics**  
Denel Aeronautics is a Maintenance, Repair, and Overhaul (MRO) service provider specializing in fixed and rotary-wing aircraft, mechanical and avionics components. Denel has faced significant operational and financial challenges in recent years.

**Industry Notes**  
South Africa has historically maintained the most developed MRO industry on the African continent. In 2019, Comair moved its fleet maintenance contract from South African Airways Technical to Lufthansa Technik, reflecting consolidation in the regional MRO sector.

See: [Denel Aeronautics](http://www.denelaeronautics.co.za/) | [South Africa MRO Industry Report 2022](https://www.researchandmarkets.com/reports/5639970/the-maintenance-repair-and-overhaul-of-aircraft)

---

## 2026 Industry Trends and Outlook

### Commercial Aviation

- **ATM Modernization**: NextGen (US) and SESAR (Europe) continue digitizing air traffic management. AI-assisted air traffic optimization is under development at several aviation authorities.
- **Aircraft Reliability**: Boeing 737 MAX program continues refinement after certification resumption; Airbus A220 and A320neo expansion; Airbus A350 and Boeing 787 widebody consolidation.
- **Sustainability**: Pressure to develop sustainable aviation fuels (SAF) and electric / hybrid-electric aircraft; Boeing and Airbus investing in electric concepts.
- **Crew and Maintenance Shortage**: Industry projection for 716,000 new maintenance technicians over 20 years (2024–2043); continued competition for skilled avionics, systems, and IT talent.

### Space Industry

- **SpaceX Dominance**: 50+ launches per year; Starship development; Starlink constellation expansion; IPO planning at ~$1.5 trillion valuation.
- **Blue Origin Expansion**: New Glenn development; Project Sunrise space data center proposal; competing on cadence and cost.
- **Commercial Orbital Economy**: In-space manufacturing, point-to-point suborbital transport, and satellite constellations driving IT infrastructure demand.

### Defense Aerospace

- **5G and Beyond**: Military aircraft integrating modern communication and data-link technologies; cybersecurity threats evolving.
- **ITAR Enforcement**: Continued scrutiny of export controls and supply chain security.
- **Autonomous Systems**: Investment in unmanned aerial systems (UAS) and autonomous vehicle IT.

### Cybersecurity and Compliance

- **DO-326A Adoption**: Cybersecurity standards increasingly embedded in aircraft certification; all new designs must address IUEI threats.
- **EASA Part-IS Enforcement**: February 2026 deadline driving airline IT compliance; 18-month transition to operational maturity.
- **FAA Cybersecurity Rule (Final Expected March 2026)**: New transport-category aircraft must meet codified cyber standards; Instructions for Continued Airworthiness (ICA) required.
- **Supply Chain Security**: Supplier and subcontractor vetting intensifying; ITAR / EAR enforcement increasing.

---

## Sources

- [FAA Cybersecurity Strategy](https://www.faa.gov/about/plansreports/faa-cybersecurity-strategy)
- [FAA Cybersecurity Guidance](https://www.faa.gov/sites/faa.gov/files/EUTIP_Rev6_w_amdt1_amdt2.pdf)
- [Quecon: FAA Cybersecurity Requirements 2026](https://www.quecon.com/latest/faa-to-embed-cyber-standards-in-aircraft-certification-by-2026/)
- [EASA Information Security (Part-IS)](https://www.easa.europa.eu/en/the-agency/faqs/information-security-part)
- [Smarttech247: EASA Part-IS 2026 Requirements](https://www.smarttech247.com/blog-posts/easa-part-is-and-what-aviation-cybersecurity-leaders-must-have-in-place-in-2026/)
- [Aero Compliance Solutions: EASA Part-IS Guide](https://www.aerocompliancesolutions.com/what-is-easa-part-is-a-complete-guide-for-aviation-organisations-2025-2026/)
- [RTCA DO-178C Training](https://www.rtca.org/training/do-178c-training/)
- [RTCA DO-178C Standards](https://www.rtca.org/do-178/)
- [PTC: DO-178C and DO-254 Explained](https://www.ptc.com/en/blogs/alm/do178c-and-do254-explained)
- [arc42 Quality Model: DO-178C](https://quality.arc42.org/standards/do-178c)
- [Wind River: DO-178C Insights](https://www.windriver.com/solutions/learning/do-178c)
- [Rapita Systems: DO-178C Guidance](https://www.rapitasystems.com/do178)
- [AS9100 Store: Aerospace Standards](https://as9100store.com/aerospace-standards-explained/what-is-as9100/)
- [American Global: Aerospace Quality Management](https://www.americanglobal.org/aerospace-quality-management-as9100-as9110-as9120/)
- [SAE: AS9100 Quality Systems](https://www.sae.org/standards/as9100-quality-systems-aerospace-model-quality-assurance-design-development-production-installation-servicing)
- [ANSI Blog: AS 9100 Series Standards](https://blog.ansi.org/ansi/as-9100-series-standards/)
- [Visual Compliance: ITAR and EAR Compliance for Aerospace](https://www.visualcompliance.com/blog/itar-or-ear-how-aerospace-firms-can-spot-and-fix-their-biggest-compliance-risks/)
- [Envoy: ITAR vs EAR 2025](https://envoy.com/workplace-compliance-security-safety/what-are-the-differences-between-itar-vs-ear)
- [SecureFrame: EAR vs ITAR Export Compliance](https://secureframe.com/blog/ear-vs-itar)
- [Amadeus Altéa Reservation System](https://amadeus.com/en/airlines/products/altea-airline-reservation-system)
- [Amadeus Altéa Passenger Service System](https://amadeus.com/en/airlines/products/altea-passenger-service-system)
- [AltexSoft: Airline Reservation Systems](https://www.altexsoft.com/blog/airline-reservation-systems-passenger-service-systems/)
- [OneClickIT: Amadeus vs Sabre 2026](https://www.oneclickitsolution.com/blog/amadeus-vs-sabre)
- [Lufthansa Systems: Lido Flight 4D](https://www.lhsystems.com/solutions/operations-control-center/lido-flight-4d)
- [Lufthansa Systems: Lido Flight Planning](https://www.lhsystems.com/solutions/flight-operations-solutions/lido-flight-planning-solutions)
- [Swiss-AS AMOS](https://www.swiss-as.com/)
- [IFS Aviation Maintenance](https://www.ifs.com/en/products/aviation-maintenance)
- [SITA for Air Navigation Service Providers](https://www.sita.aero/solutions/industries/air-navigation-service-providers/)
- [Palantir Impact: Airbus and SkyWise](https://www.palantir.com/impact/airbus/)
- [AJOLLY: ARINC 429, ARINC 664, MIL-STD-1553 Comparison](https://www.a-jolly.com/%E2%9C%88%EF%B8%8F-comparison-between-arinc-429-arinc-664-afdx-and-mil-std-1553-which-protocol-to-use/)
- [eInfochips: ARINC 429 and MIL-STD-1553](https://www.einfochips.com/blog/what-are-arinc-429-and-mil-std-1553/)
- [SpaceX Company Analysis 2026](https://www.aviationoutlook.com/p/spacex-company-analysis-outlook-report)
- [Bloomberg: SpaceX and Blue Origin 2026](https://www.bloomberg.com/opinion/articles/2026-01-07/spacex-and-blue-origin-will-be-under-pressure-to-perform-in-2026/)
- [TechCrunch: Blue Origin Space Data Center](https://techcrunch.com/2026/03/20/jeff-bezos-blue-origin-enters-the-space-data-center-game/)
- [Glassdoor: Embedded Software Engineer Salary 2026](https://www.glassdoor.com/Salaries/embedded-software-engineer-salary-SRCH_KO0,26.htm)
- [Levels.fyi: Blue Origin Aerospace Engineer](https://www.levels.fyi/companies/blue-origin/salaries/aerospace-engineer/locations/united-states)
- [Glassdoor: Raytheon Embedded Software Engineer](https://www.glassdoor.com/Salary/Raytheon-Embedded-Software-Engineer-Salaries-E3300024_D_KO9,35.htm)
- [Glassdoor: Boeing Embedded Software Engineer](https://www.glassdoor.com/Salary/Boeing-Embedded-Software-Engineer-Salaries-E102_D_KO7,33.htm)
- [ZipRecruiter: Amadeus GDS Jobs](https://www.ziprecruiter.com/Jobs/Amadeus-Gds)
- [ZipRecruiter: Sabre GDS Jobs](https://www.ziprecruiter.com/Jobs/Sabre-Gds)
- [Aviation Business News: MRO IT Solutions](https://www.aviationbusinessnews.com/mro/maintenance-it-solutions/)
- [PowerAero: MRO in Aviation](https://poweraerosuites.com/blog/mro-aviation-guide-maintenance-repair-overhaul/)
- [Flight Global: MRO Recruitment](https://jobs.flightglobal.com/jobs/maintenance-repair-and-overhaul/)
- [European Aviation Institute: EASA Part-IS Training (Feb 2026)](http://aviationinstitute.eu/easa-part-is-aviation-cybersecurity-training-delivered-by-european-aviation-institute-5-6-february-2026/)
- [South African Airways (Wikipedia)](https://en.wikipedia.org/wiki/South_African_Airways)
- [Comair CAPA Profile](https://centreforaviation.com/data/profiles/airlines/comair-south-africa-mn)
- [Denel Aeronautics](http://www.denelaeronautics.co.za/)
- [South Africa MRO Industry 2022](https://www.researchandmarkets.com/reports/5639970/the-maintenance-repair-and-overhaul-of-aircraft)

---

## Certifications — Quick Reference Table

| Certification | Issuing Authority | Focus Area | Typical Cost | Duration |
|---|---|---|---|---|
| Amadeus Altéa PSS | Amadeus (vendor-recognized) | Airline reservation systems | $1,000–$2,500 | 3–5 days |
| Sabre SabreSonic | Sabre (vendor-recognized) | GDS development and NDC | $1,000–$2,000 | 3–5 days |
| Travelport GDS (Galileo/Worldspan/Apollo) | Travelport (vendor-recognized) | Multi-GDS platform integration | $1,200–$2,500 | 3–5 days |
| AMOS by Swiss-AS | Swiss AviationSoftware (vendor) | Aircraft maintenance management | $2,000–$5,000 | 2–10 days (on-site) |
| DO-178C / ED-12C | RTCA / EUROCAE | Airborne software certification | $2,500–$4,000 | 3–5 days |
| DO-254 | RTCA | Airborne hardware design assurance | $2,500–$4,000 | 3 days |
| DO-326A / ED-202A | RTCA / EUROCAE | Airworthiness cybersecurity | $2,500–$3,500 | 2–3 days |
| DO-330 | RTCA | Tool qualification for aviation software | $2,000–$3,500 | 2–3 days |
| DO-333 | RTCA | Formal methods in aviation | $2,000–$3,500 | 3–5 days |
| EASA Part-IS Implementation | Various providers (European Aviation Institute) | Information security management systems | $1,500–$2,500 | 2 days |
| AS9100 / AS9110 / AS9120 | SAE / IAQG (registered training providers) | Aerospace quality management systems | $1,500–$3,000 | 2–5 days |
| INCOSE CSEP (Certified Systems Engineering Professional) | INCOSE | Systems engineering for aerospace | ~$500 (exam fee) | Self-paced (5+ years experience required) |
| NASA STD 8739 | NASA | Structural design and test criteria | Free (online resource) | Self-paced |
| EASA Type Rating Examiner (TRE) | EASA | Aircraft type certification | Varies | Training + exam |
| FAA Part 21 Design Approval | FAA | Type certification participation | Varies | On-the-job training |

---

## Free Training Resources

**FAA Learning Platforms**
- [FAA Safety Team (FAASafety.gov) Learning Center](https://www.faasafety.gov/gslac/alc/course_catalog.aspx) — Free courses on aviation operations, maintenance, safety management.
- [FAA Academy Training Catalog](https://academy.faa.gov/catalog/CPNT/) — Distance learning, technical operations, security training.
- [FAA Training & Testing Hub](https://www.faa.gov/training_testing) — Official FAA training directory.

**EASA Resources**
- [EASA Aircraft Certification Portal](https://www.easa.europa.eu/en/domains/aircraft-products/aircraft-certification) — Type certification, special conditions, CS documentation.
- [EASA Aviation Training (Safety Management)](https://www.easa.europa.eu/en/domains/safety-management/aviation-training-easa) — Training guidance and approved training organizations.
- [Sofema Online (EASA-Compliant Training Platform)](https://sofemaonline.com/) — 400+ EASA Part-66, Part-145, CAMO courses.

**NASA Technical Resources**
- [NASA Technical Reports Server (NTRS)](https://ntrs.nasa.gov/) — 500,000+ aerospace technical reports, conference papers, journal articles, images, videos. Free access.
- [NASA STI Repository](https://sti.nasa.gov/what-is-the-sti-repository/) — Integration of NACA, NASA, and non-NASA collections covering aeronautics, space operations, space technology.

**INCOSE Systems Engineering**
- [INCOSE Training & Certification Portal](https://www.incose.org/certification/) — CSEP, ASEP, ESEP certification paths; free tutorial webinars for members.
- [INCOSE Handbook (5th Edition)](https://www.incose.org/publications/products/se-handbook-v4) — Official systems engineering reference (available for purchase or institutional access).

---

## Paid Course Platforms

**Udemy Aerospace Courses**
- [Aerospace Engineering: Avionics and Aerospace Systems](https://www.udemy.com/course/aerospace-engineering-avionics-and-aerospace-systems/) — Introduction to avionics systems design.
- [Aerospace Engineering: Aircraft Systems and Avionics](https://www.udemy.com/course/aerospace-engineering-aircraft-systems-and-avionics/) — Comprehensive aircraft systems overview.

**Coursera Aerospace & Systems Engineering**
- [Autonomous Aerospace Systems](https://www.coursera.org/learn/autonomous-aerospace-systems) — Autonomous vehicle design principles applicable to aerospace.
- [Aerospace Engineering Courses (Catalog)](https://www.coursera.org/courses?query=aerospace+engineering) — Multiple institutions offering systems, propulsion, avionics.

**Specialized Aviation Training**
- [TONEX: DO-178C / DO-254 Training](https://www.tonex.com/training-courses/do-178-training-course/) — Dedicated avionics certification compliance courses.
- [ConsuNova: DO-254 Avionics Training](https://consunova.com/avionics-training/do-254-training/) — Hardware design assurance for aviation.
- [Sabre Mosaic Academy](https://www.sabre.com/agency-training/) — Official GDS training and implementation support.

---

## Books — Essential Aerospace IT References

| Title | Author | Publisher | Year | ISBN | URL |
|---|---|---|---|---|---|
| Developing Safety-Critical Software: A Practical Guide for Aviation Software and DO-178C Compliance | Leanna Rierson | Routledge | 2013 | 978-1439813683 | [Routledge](https://www.routledge.com/Developing-Safety-Critical-Software-A-Practical-Guide-for-Aviation-Software/Rierson/p/book/9781439813683) |
| INCOSE Systems Engineering Handbook (5th Edition) | David D. Walden et al. (editors) | Wiley | 2023 | 978-1119814290 | [Wiley](https://www.wiley.com/en-us/INCOSE+Systems+Engineering+Handbook,+5th+Edition-p-9781119814290) |
| Real-Time Systems Design and Analysis | Phillip A. Laplante | Wiley | 2004 | 978-0470540558 | [Wiley](https://www.wiley.com/en-us/Real+Time+Systems+Design+and+Analysis%2C+3rd+Edition-p-9780470540558) |
| Aircraft Systems Integration Technology and Management | Rikard Carlsson (editor) | Woodhead Publishing | 2017 | 978-0081002032 | [ScienceDirect](https://www.sciencedirect.com/book/9780081002032) |
| ARINC Standards User's Guide | ARINC (Aeronautical Radio, Inc.) | Various | Ongoing | N/A | [ARINC Portal](https://www.arinc.com/en) |
| DO-178C Handbook (Official) | RTCA | RTCA | 2011 | N/A | [RTCA Store](https://www.rtca.org/) |

---

## Typical Job Titles — Aerospace IT Career Ladder

**Entry-Level**
- Avionics Software Test Engineer
- Airline IT Support Analyst
- MRO Systems Administrator
- Flight Operations Technician
- GDS Support Specialist

**Mid-Level**
- Aerospace Embedded Software Engineer
- Airline Systems Engineer (PSS/GDS)
- MRO IT Specialist
- Avionics Systems Engineer
- Flight Test Data Engineer
- Aircraft Electrical Systems Engineer

**Senior/Lead**
- Senior Avionics Software Architect
- Airline IT Director / VP Operations
- MRO IT Manager / Systems Architect
- Principal Systems Engineer (DO-178C/DO-254)
- Chief Flight Operations Officer (IT)

**Executive**
- VP of IT for Airlines
- Director of Engineering (Defense Contractors)
- Chief Information Officer (Aerospace MRO)
- Chief Technology Officer (Space Companies)

---

## Common Hard Skills (Technical Depth)

**Aerospace-Specific Standards & Methodologies**
- DO-178C levels A–E (Design Assurance Levels)
- DO-254 hardware certification
- DO-326A airworthiness cybersecurity
- ARP4754A functional safety
- EASA Part-IS information security
- AS9100 / AS9110 / AS9120 quality systems
- MISRA C coding standards
- Ada / SPARK programming

**Avionics Communication & Data Buses**
- ARINC 429 (simplex avionics data bus)
- ARINC 664 / AFDX (Avionics Full Duplex Ethernet)
- MIL-STD-1553 (military avionics bus)
- CCSDS protocols (space missions)
- ECSS standards (European space systems)
- Eurocae ED-202A (EASA security standards)

**Airline IT Platforms**
- Amadeus Altéa PSS (reservations, inventory, departure control)
- Sabre SabreSonic (NDC-enabled eCommerce)
- Travelport GDS APIs
- Lido Flight (Lufthansa Systems flight planning)
- NavBlue N-Flight (Airbus flight operations)
- AMOS (Swiss-AS aircraft maintenance)
- TRAX and IFS Maintenix (MRO software)

**Other Technical Skills**
- Real-time embedded systems (RTOS)
- Formal methods (DO-333 training)
- Systems modeling languages (AADL, SysML)
- Cybersecurity risk assessment (threat modeling)
- Supply chain traceability (ITAR / EAR compliance)

---

## Common Soft Skills & Cultural Factors

- **Certification Authority Interaction** — Working with FAA, EASA, national authorities during type certification.
- **Safety Culture** — Deep commitment to zero-defect, mission-critical mindset.
- **Cross-Functional Collaboration** — Tight integration with hardware engineers, test teams, manufacturing, regulatory liaisons.
- **Documentation Discipline** — Meticulous traceability, change logs, configuration management.
- **Quality Mindset** — AS9100/AS9110 emphasis on documented processes and continuous improvement.
- **Security Awareness** — Growing focus on IUEI (Intentional Unauthorized Electronic Interaction) mitigation.
- **International Perspective** — FAA/EASA harmonization; dual certifications; global supply chains.

---

## Salary Data — 2026 USD (Cited)

**North America (USD)**

| Role | Entry Level | Mid-Level (5–8 yrs) | Senior (10+ yrs) | Source |
|---|---|---|---|---|
| Aerospace Embedded Software Engineer | $95K–$115K | $140K–$200K | $200K–$280K+ | [Glassdoor 2026](https://www.glassdoor.com/Salaries/embedded-software-engineer-salary-SRCH_KO0,26.htm) |
| Avionics Systems Engineer | $95K–$115K | $150K–$200K | $200K–$280K+ | [Glassdoor / Raytheon 2026](https://www.glassdoor.com/Salary/Raytheon-Embedded-Software-Engineer-Salaries-E3300024_D_KO9,35.htm) |
| Aerospace Software Engineer (SpaceX) | Varies | $156K–$205K | $200K–$280K+ | [Levels.fyi SpaceX 2026](https://www.levels.fyi/companies/spacex/salaries/aerospace-engineer/locations/united-states) |
| Aerospace Software Engineer (Boeing) | $79K–$98K | $120K–$160K | $160K–$220K+ | [Glassdoor / Boeing 2026](https://www.glassdoor.com/Salary/Boeing-Embedded-Software-Engineer-Salaries-E102_D_KO7,33.htm) |
| Airline Systems Engineer | $55K–$75K | $85K–$130K | $130K–$180K+ | [ZipRecruiter / GDS roles 2026](https://www.ziprecruiter.com/Jobs/Amadeus-Gds) |
| GDS Developer (Sabre / Amadeus) | $40K–$55K | $60K–$100K | $100K–$150K+ | [ZipRecruiter 2026](https://www.ziprecruiter.com/Jobs/Sabre-Gds) |
| MRO IT Specialist | $50K–$70K | $70K–$110K | $110K–$160K+ | Industry surveys (Lufthansa Technik, Swiss-AS) |

**International Markets**
- **EUR (Germany/France/UK)**: €60K–€90K entry; €90K–€140K mid; €140K–€200K+ senior (per EASA contractor rates)
- **ZAR (South Africa)**: R700K–R950K entry (~$38K–$52K USD); R1.1M–R1.6M mid (~$60K–$87K USD); R1.6M–R2.3M senior (~$87K–$126K USD) — based on SAA/Denel historical benchmarks and Comair legacy data.
- **AUD (Australia)**: AUD 90K–130K entry; AUD 140K–200K mid; AUD 200K–280K+ senior (Qantas, regional operators).

**Sources**
- [Glassdoor Aerospace Engineer Salaries 2026](https://www.glassdoor.com/Salaries/aerospace-engineer-salary-SRCH_KO0,26.htm)
- [Levels.fyi: SpaceX Aerospace Engineer](https://www.levels.fyi/companies/spacex/salaries/aerospace-engineer/locations/united-states)
- [Glassdoor: Boeing Embedded Software 2026](https://www.glassdoor.com/Salary/Boeing-Embedded-Software-Engineer-Salaries-E102_D_KO7,33.htm)
- [Glassdoor: Raytheon Embedded Software 2026](https://www.glassdoor.com/Salary/Raytheon-Embedded-Software-Engineer-Salaries-E3300024_D_KO9,35.htm)
- [ZipRecruiter: Amadeus GDS Jobs](https://www.ziprecruiter.com/Jobs/Amadeus-Gds)
- [ZipRecruiter: Sabre GDS Jobs](https://www.ziprecruiter.com/Jobs/Sabre-Gds)
