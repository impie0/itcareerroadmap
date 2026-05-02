---
title: "The Software Engineer Career Roadmap"
slug: "software-engineer"
code: "R07"
kind: "roadmap"
lastUpdated: "2026-04-30"
vendors: []
tags: ["software-engineering", "career-roadmap"]
---

# R07: The Software Engineer Career Roadmap
**Junior Developer → Principal Engineer & CTO**  
The Individual Contributor (IC) Ladder vs. the Manager Track

---

## Overview

This roadmap covers the complete career progression for software engineers: from entry-level junior developers through mid-level engineers, senior engineers, and the fork into two parallel advancement tracks — the **Individual Contributor (IC) ladder** (Staff → Principal → Distinguished Engineer) and the **Management ladder** (Tech Lead → Engineering Manager → Director → VP → CTO). Both tracks offer equivalent compensation and prestige at modern tech companies.

The IC and manager ladders provide different value propositions:
- **IC Track**: Deep technical expertise, architectural influence, mentoring via code & design review, industry visibility (talks, writing, OSS).
- **Manager Track**: People leadership, hiring, performance management, cross-functional strategy, executive development.

Neither is a "promotion" from the other — they are parallel career paths with different skills, mindsets, and rewards. Most engineers at Staff+ level or Director+ level will face this fork and must consciously choose.

---

## ENTRY: Junior Developer (0–2 years)

### What This Is

Your first 0–2 years after a bootcamp, self-study, university degree, or career change. You are learning production fundamentals, working within structured sprint cycles, receiving code reviews, and beginning to understand how real systems behave under load and change.

### Day in the Life

- **Sprint planning & standup**: Daily 15–30 min syncs with your team. You estimate your own work (badly at first; improve over time).
- **Feature work**: Implement small features, fix bugs, write tests. Most code gets rewritten by mid-level engineers — this is expected and normal.
- **Code review hell**: Your PRs take 2–5 days to merge. Reviewers ask questions like _"Why did you use a list here instead of a dict?"_ You learn to read other people's code before writing your own.
- **Imposter syndrome**: You will feel like you don't belong. Everyone does at this stage. This is normal and temporary.
- **Pair programming**: 2–4 hours/week pairing with a senior engineer. You drive the keyboard while they narrate. You learn faster this way.
- **Debugging by print statements**: You haven't learned the debugger yet. You add `console.log()` everywhere. A mentor will show you how to use the IDE debugger around month 2.
- **First production incident**: Your code breaks something. You get paged. You panic. You fix it with help. You add a test to prevent it next time. This is how you learn ownership.

### Honest Reality: The Hiring Crunch

**Gartner projects that 75% of enterprise software engineers will use AI code assistants by 2028**, with a 30% productivity gain across enterprises through 2028. This is reshaping junior hiring. AI can now write boilerplate, generate test stubs, and explain error messages. The net effect: junior roles are shrinking in absolute number, and entry barriers are rising. [Gartner press release, April 2024](https://www.gartner.com/en/newsroom/press-releases/2024-04-11-gartner-says-75-percent-of-enterprise-software-engineers-will-use-ai-code-assistants-by-2028)

**2025 Stack Overflow Developer Survey** shows that practical portfolio projects and real-world problem solving remain the top hiring priorities — far ahead of certifications or degrees. [Stack Overflow 2025 Developer Survey](https://survey.stackoverflow.co/2025)

**Bottom line**: A strong GitHub portfolio with 3–5 non-trivial projects (a small backend service, a React app, a CLI tool, etc.) opens more doors than a degree or bootcamp certificate. Referrals beat cold applications by ~5:1.

### Required Skills

By the end of year 2, you should have **production fluency** in one language:

- **JavaScript/TypeScript**: Node.js, Express, or Fastify for backends; React, Vue, or Svelte for frontends.
- **Python**: FastAPI, Django, or Flask; data-science-adjacent work (pandas, NumPy).
- **Java**: Spring Boot, basic JVM threading, Maven/Gradle.
- **Go**: Basic goroutines, interfaces, error handling.
- **C#/.NET**: ASP.NET Core, basic dependency injection.

Plus:

- **Git/GitHub workflow**: Branching, commits, PRs, merging. Not just the commands — understanding why.
- **Data structures basics**: Arrays, linked lists, hash tables, trees. You can write a binary search in an interview without Googling.
- **REST API consumption**: You've called third-party APIs (Stripe, AWS, GitHub, etc.) and handled errors.
- **HTML/CSS/JavaScript** (or equivalent): Enough to read the DOM, style a form, add interactivity.
- **Testing fundamentals**: Unit tests, mocking, basic integration tests. You write tests before your code in good teams.
- **SQL basics**: SELECT, INSERT, UPDATE, DELETE, JOINs. You can query a Postgres database.
- **One framework at depth**: If your language is Python, you know Django or FastAPI. If JavaScript, React. You've built a non-trivial project in that framework.

### Certificates (Optional)

Certifications are **not required** and carry minimal weight for junior hiring. Skip them unless you have spare time:

- **AWS Certified Developer Associate (DVA-C02)**: Helpful if targeting cloud roles, but a portfolio beats it.
- **GitHub Foundations**: Free, quick (~2 weeks study). Signals familiarity with GitHub Actions and workflow.
- **freeCodeCamp curriculum certificates**: Free. Nice resume padding if you're self-taught, but employers verify your code, not your certificate.

Focus on **portfolio > certifications > degree > bootcamp**.

### Books Worth Reading

- **The Pragmatic Programmer** (Hunt & Thomas, 20th Anniversary Edition): 70 practical tips on estimation, testing, debugging, code organization, communication. This is your manual. [Hunt & Thomas, pragprog.com](https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/)
- **Eloquent JavaScript** (Marijn Haverbeke): Free online. Best intro to JavaScript scope, closures, and asynchronicity.
- **Python Crash Course** (Eric Matthes): Hands-on, excellent for self-taught developers.

### Salary

**United States (2026)**:
- Junior (0–2 yrs): **$75K–$95K base**; total comp (base + bonus + RSUs) ~$85K–$120K.
- Tech hubs (SF Bay, NYC, Seattle): **$95K–$140K base**; total comp ~$110K–$160K.

**United Kingdom (2026)**:
- Junior (0–2 yrs): **£28,000–£40,000 base**.
- London premium: **£35,000–£45,000 base**.
- [PayScale: UK Junior Software Engineer](https://www.payscale.com/research/UK/Job=Junior_Software_Engineer/Salary)

**South Africa (ZAR, 2026)**:
- Entry-level (0–1 yr): **R292,925/year** (~$16K USD at 2026 rates).
- Early career (1–4 yrs): **R397,070/year** (~$22K USD).
- Remote roles: **$68,956 USD equivalent**, but paid in ZAR.
- [Arc: Remote Software Developers in South Africa](https://arc.dev/salaries/software-engineers-in-south-africa)

---

## ASSOCIATE: Mid-Level Engineer (2–5 years)

### What This Is

You've shipped features, led a small project end-to-end, mentored an intern, and debugged production issues. You understand the codebase better than most juniors. You're trusted to reduce your code-review turnaround; your code is often accepted with minor comments. You are **the second-most common hire** at most companies.

### Day in the Life

- **Ownership of a subsystem**: You own a service, library, or feature area. When it breaks, it's your domain.
- **Mentoring a junior**: 1 hour/week pairing, code reviews, Slack questions. You realize how much you don't know when you try to explain it.
- **Design documents**: For anything non-trivial, you write a design doc (1–3 pages). You propose an approach, ask for feedback, iterate.
- **Code review leadership**: You review 2–4 junior PRs per day. You're kind but thorough. You explain the _why_, not just the rule.
- **Tech-debt conversations**: You notice a brittle legacy module and propose a refactor. Sometimes it gets approved. Sometimes you're told "not a priority right now."
- **Debugging at scale**: You use logs, metrics, distributed tracing. You've used a debugger on a live staging environment.
- **Production incident response**: You're on-call. You own incidents in your area. You post-mortem them and file follow-ups.
- **Cross-team API contracts**: You draft API specs, negotiate with consumers, handle versioning and deprecations.

### Required Skills

By the end of year 5, you should have:

- **Production language fluency**: The language you chose is now part of your muscle memory. You know its quirks, idioms, performance profiles, and ecosystem.
- **Framework depth**: React, Spring, Django, Go, or Rust — whatever. You know the routing layer, middleware, state management, lifecycle. You've debugged framework bugs.
- **Database/ORM fluency**: PostgreSQL, MySQL, or similar. You know indexing, query plans, transactions, ACID, basic normalization. You've debugged a 5-second query and made it 50ms.
- **Code review at juniors level**: You spot bugs before they ship. You teach style, patterns, and performance.
- **Unit + integration testing**: 70%+ code coverage. You write fixtures, mocks, factories. You've debugged a flaky test.
- **CI/CD pipeline literacy**: You can read the pipeline config (GitHub Actions, GitLab CI, Jenkins). You've fixed a broken deploy.
- **Refactoring**: You can rewrite a messy module, keep tests green, ship in stages. You know when refactoring is worth the risk.
- **Debugging at scale**: Logs, metrics, tracing, profilers. You've spent 4 hours tracking down a race condition.

### Bridge Certifications (Still Mostly Optional)

At this level, certs signal seriousness but don't unlock jobs. Your portfolio and past work history unlock jobs. Still, a certification on your resume says _"I invested time to deepen in X."_

- **Oracle Java SE Programmer (1Z0-829)**: Covers Java 17+. Credible for JVM roles.
- **Python Institute PCAP/PCPP**: PCAP = Associate, PCPP = Professional. Signals Python depth. [Python Institute](https://pythoninstitute.org/)
- **AWS Certified Developer Associate (DVA-C02)**: Signals cloud competency. Better than nothing if targeting AWS-heavy shops.
- **GitHub Advanced Security (GH-500)** or **GitHub Copilot (GH-300)**: Emerging. GitHub's own certs. Minimal industry weight yet.

### Books Worth Reading (Now)

- **Refactoring** (Martin Fowler): The bible. You learn to recognize code smells and apply 30+ refactoring patterns. You'll reference this for years. [Fowler, refactoring.com](https://refactoring.com/)
- **Clean Code** (Robert C. Martin): Divisive. Covers naming, functions, comments, error handling. **Fair warning**: some of its advice is dated (e.g., over-use of abstractions). But it teaches you to care about readability.
- **A Philosophy of Software Design** (John Ousterhout, Stanford): Shorter than others. Argues for simple, deep modules. Excellent counterpoint to microservices mania.
- **The Pragmatic Programmer** (Hunt & Thomas): If you skipped it earlier, read it now.

### Salary

**United States (2026)**:
- Mid-level (2–5 yrs): **$95K–$140K base**; total comp ~$110K–$190K.
- Tech hubs: **$120K–$165K base**; total comp ~$150K–$240K.

**United Kingdom (2026)**:
- Mid-level (2–5 yrs): **£40,000–£60,000 base**.
- London: **£50,000–£80,000 base**; total comp £60K–£120K at well-funded startups.

**South Africa (ZAR, 2026)**:
- Intermediate (4–9 yrs): **R350,000/year** (~$19.5K USD).
- Senior (10–20 yrs): **R486,000/year** (~$27K USD).

---

## PROFESSIONAL: Senior Engineer (5–8 years)

### What This Is

You are now one of the strongest IC contributors on a team. You own systems, not features. You unblock other engineers. You are trusted with strategic decisions. You speak at internal tech talks and mentorize mid-level engineers seriously. Teams want you on their projects.

### Day in the Life

- **System design at service level**: You design a new service or rewrite a legacy one. You think about failure modes, scalability, observability, disaster recovery.
- **Distributed systems patterns**: You know consensus, eventual consistency, idempotency, circuit breakers. You've debugged a Byzantine failure (or read about one and understand the implications).
- **Performance & scalability**: You've profiled code, identified bottlenecks, and shipped optimizations that moved the needle. You understand CPU cache, garbage collection, network latency.
- **Mentoring mid-level engineers**: 2–3 hours/week. You review their designs, unblock them, teach them patterns. You write them detailed feedback.
- **Tech debt strategy**: You propose multi-quarter refactors. You make the business case: faster shipping, fewer bugs, happier team. Sometimes you win; sometimes you're told "not now."
- **Architecture Decision Records (ADRs)**: You write them. You circulate them. You handle objections. ADRs become the source of truth for _why_ a design choice was made.
- **Cross-team API contracts**: You negotiate with consumers and providers. You handle versioning, deprecations, breaking changes.
- **Production incident command**: You lead incident response for complex issues. You make judgment calls: revert, patch, escalate. You own the post-mortem and the follow-ups.
- **Hiring loops**: You're in the interview rotation. You assess candidates for senior+ roles. You write feedback.

### Required Skills

- **System design at service scope**: Databases, caching, queues, load balancing, monitoring, disaster recovery. You can design a system that scales to millions of requests/day.
- **Distributed systems maturity**: Consensus (Raft, Paxos), eventual consistency, read-after-write consistency, CAP theorem, CRDT. You read papers.
- **Code review mastery**: You spot subtle bugs before they ship. You teach patterns and architecture.
- **Production operations**: Logs, metrics, tracing. You can pinpoint a latency spike in seconds. You've written runbooks.
- **Performance engineering**: Profiling, load testing, optimization. You've reduced tail latency by 80% on a critical path.
- **Technical writing**: Design docs, architecture decision records, blog posts. You explain complex systems in prose.
- **Public speaking (internal)**: You give tech talks. You present architecture to the org.

### Bridge Certifications (Rare at This Level)

At senior+, portfolios and impact matter far more than certs. But if you're targeting a specific cloud provider:

- **AWS Solutions Architect Professional (SAP-C02)**: Demonstrates deep AWS knowledge.
- **Microsoft Azure Solutions Architect Expert (AZ-305)**: Azure equivalent.
- **Google Cloud Professional Cloud Architect (PCA)**: GCP equivalent.

These are optional and can be skipped if your past work speaks for itself.

### Books Worth Reading (Now Critical)

- **Designing Data-Intensive Applications** (Martin Kleppmann): The modern bible for backend engineers. Covers data models, storage engines, replication, consensus, transactions, streaming, and batch processing. This book will inform your architecture decisions for years. [Kleppmann, dataintensive.net](https://dataintensive.net/)
- **Software Architecture: The Hard Parts** (Ford, Richards, Dehghani, Teeter): How to make good architecture trade-offs under constraints (budget, team size, time). Pragmatic and honest.
- **The Phoenix Project** (Kim, Behr, Spafford): A novel about DevOps. Teaches you to think about flow, bottlenecks, and systems thinking. [O'Reilly](https://www.oreilly.com/library/view/the-phoenix-project/9781457191350/)
- **Effective Java** (Joshua Bloch, 3rd edition): Essential if you code in Java or Kotlin. Covers mutability, concurrency, serialization, and design patterns.

### Salary

**United States (2026)**:
- Senior (5–8 yrs): **$130K–$185K base**; total comp ~$160K–$280K.
- Tech hubs: **$160K–$220K base**; total comp ~$200K–$350K.

**United Kingdom (2026)**:
- Senior (5+ yrs): **£60,000–£90,000 base**.
- London (high-paying firms): **£80,000–£150,000 base**; total comp £100K–£280K at Google, Meta, Stripe.

**South Africa (ZAR, 2026)**:
- Senior (8+ yrs): **R1,137,613/year** (~$63.5K USD) — but this is wide; much depends on company.

---

## THE FORK: IC Ladder vs. Manager Ladder (8+ years)

At 5–8 years (sometimes earlier), you face a critical career decision. **This is not a promotion.** It is a fork.

- **IC Track** (Staff, Principal, Distinguished): You go deeper. Org-level technical strategy, mentoring via code & design, public-facing expertise (talks, OSS, writing).
- **Manager Track** (Tech Lead, EM, Senior EM, Director, VP, CTO): You go wider. People leadership, hiring, performance calibration, compensation, conflict, org design.

### The Uncomfortable Truth

Both tracks are equally valuable and **equally compensated at modern FAANG companies**. This is a recent (~2015–2020) shift. Before that, the only way up was through management.

**Compensation parity at Google (2026, Levels.fyi data)**: An L6 Staff Engineer earns median total comp of **$579,576** vs. an L6 Engineering Manager earning **$590,551** — essentially identical.

At Amazon, Microsoft, Meta, and other FAANG firms, **Staff ≈ EM**, **Principal ≈ Director**, **Distinguished ≈ VP**. The IC track pays as well as the manager track. [Let's Data Science: Staff Engineer vs. Engineering Manager Salary 2026](https://letsdatascience.com/blog/staff-engineer-or-engineering-manager-which-pays-more)

### Choosing IC

**Read**: _Staff Engineer: Leadership Beyond the Management Track_ (Will Larson). This book is canonical for the IC ladder. [staffeng.com/book](https://staffeng.com/book)

**You choose IC if**:
- You love solving hard technical problems more than you love developing people.
- You want to write code / design systems for the next 10 years.
- You dislike performance reviews, comp conversations, and firing people.
- You want to stay close to the product and codebase.
- You enjoy writing, speaking, and building in the open (blog posts, talks, OSS).

**IC archetypes** (from Larson):
- **Tech Lead**: High-leverage individual contributor. Some team coordination. Rare to go beyond principal. Often a stepping stone to EM.
- **Architect**: Owns a domain. Systems design, cross-team alignment, mentoring. May also lead projects.
- **Right Hand**: Directly supports the VP/CTO. Handles strategic initiatives, org design, high-stakes hiring. Political skill required.
- **Domain Expert**: Deep knowledge in a specific area (ML, performance, security, distributed systems). Goes deep instead of wide.

### Choosing Manager

**Read**: _The Manager's Path_ (Camille Fournier). This book covers the six levels of the EM ladder: mentor, manager, manager of managers, director, VP, CTO. [O'Reilly](https://www.oreilly.com/library/view/the-managers-path/9781491973882/)

**You choose manager if**:
- You get energy from developing other people.
- You want to influence company strategy and org structure.
- You're okay with giving up coding for trade-offs (hiring, calibration, conflict resolution, retention).
- You enjoy mentoring, feedback, and helping people grow.
- You're politically skillful (or willing to learn).

**Hard truth**: You will code 5–10% of your time as an EM, 1–2% as a director, ~0% as a VP. If that makes you sad, stay IC.

---

## IC LADDER: Staff → Principal → Distinguished (8+ years)

### Staff Engineer (L6 / E6 equivalent, 8–12 years experience)

**Day in the Life**:
- **Org-level architecture**: You set technical direction across multiple teams. You identify architectural debt and propose multi-year fixes.
- **Mentoring senior engineers**: 3–5 engineers, 1–2 hours/week each. They come to you with hard design problems. You teach via Socratic questions, not commands.
- **Strategic initiatives**: You lead 6–12 month projects that unlock engineering velocity. You write RFCs, gather feedback, handle opposition.
- **Code contributions**: 20–30% of your time. You write proofs of concept, implement critical performance fixes, contribute to the team's core systems.
- **Cross-team influence**: You design APIs that multiple teams depend on. You negotiate trade-offs, handle versioning.
- **Writing & speaking**: Blog posts, internal tech talks, conference talks. You represent the company's technical ethos.
- **Hiring & interview loops**: You assess senior+ candidates. You also recruit passively (talks, writing, OSS visibility create inbound interest).

**Required Skills**:
- **System design at org scope**: Multi-service architectures, trade-offs, long-term evolvability.
- **Mentoring at scale**: You've developed 3–5 engineers toward senior/staff roles.
- **Technical writing**: RFCs, architecture docs, blog posts. You can explain complex decisions in writing.
- **Public speaking**: Internal tech talks, conference talks, podcast interviews.
- **Pattern recognition**: You recognize problems across teams and propose systematic solutions.
- **Political skill**: You influence without authority. You handle opposition gracefully.

**Books**:
- **Staff Engineer: Leadership Beyond the Management Track** (Will Larson): [staffeng.com/book](https://staffeng.com/book)
- **The Software Architect Elevator** (Gregor Hohpe): How to influence architecture at scale without breaking the escalator. [O'Reilly](https://www.oreilly.com/library/view/the-software-architect/9781492058991/)
- **Software Engineering at Google** (Winters, Manshreck, Wright): Three decades of lessons. How Google runs its technical culture. [Google Books](https://books.google.com/books/about/Software_Engineering_at_Google.html?id=eISvDwAAQBAJ)

**Salary (FAANG, 2026)**:
- Base: $230K–$350K
- Stock/equity: $250K–$500K/year (vests over 4 years)
- Bonus: 15–25%
- **Total Comp: $500K–$900K+**

**Non-FAANG (Fortune 500, mature startups)**:
- Base: $180K–$250K
- Bonus: 15–30%
- Stock (if startup): $100K–$300K
- **Total Comp: $250K–$450K**

---

### Principal Engineer (L7 / E7 equivalent, 12–15+ years)

**Day in the Life**:
- **Company-wide technical strategy**: You shape the engineering roadmap. You identify architectural bottlenecks before they explode.
- **Mentoring staff engineers**: 2–3 staff engineers, 1 hour/week each. You coach them on navigating complexity, politics, and their own growth.
- **High-stakes projects**: 12–24 month initiatives. You own technical design. You unblock your team when they get stuck.
- **Org design influence**: You advise leadership on team structure, skill distribution, hiring focus.
- **Code contributions**: 10–20%. You write prototypes, review critical PRs, contribute to frameworks and platforms.
- **Industry influence**: You speak at major conferences (QCon, StrangeLoop, GOTO). You publish papers or essays. You're quoted in industry discussions.
- **Hiring & recruiting**: You recruit passively (visibility attracts talent). You assess Principal+ candidates.

**Required Skills**:
- **Strategic thinking**: Where is the industry going? Where should the company be in 5 years?
- **Communication at exec level**: You can explain technical decisions to non-technical executives. You frame things in business terms (velocity, risk, cost).
- **Large-scope mentoring**: You've shaped engineers from mid → senior → staff.
- **Comfort with ambiguity**: Not all problems have clear solutions. You make judgment calls.
- **Org design**: You understand team topology, Conway's Law, and how structure impacts technical outcomes.

**Books**:
- **Staff Engineer** (Larson) — read again at this level. Different chapters resonate differently.
- **The Software Architect Elevator** (Hohpe)
- **Software Engineering at Google** (Winters et al.)
- **Fundamentals of Software Architecture** (Ford & Richards): Trade-offs, architecture decisions, evaluation frameworks.

**Salary (FAANG, 2026)**:
- Base: $300K–$450K
- Stock/equity: $400K–$800K/year
- Bonus: 15–25%
- **Total Comp: $700K–$1.5M+**

**Non-FAANG**:
- Base: $250K–$350K
- Bonus: 20–30%
- Stock: $100K–$500K
- **Total Comp: $400K–$700K**

---

### Distinguished Engineer / VP of Engineering (IC) (L8+, 15+ years)

**Day in the Life**:
- **Company-wide technical vision**: You define what engineering excellence looks like. You own the long-term technical roadmap.
- **Executive influence**: You sit in strategy meetings. You're consulted on M&A technical due diligence. You shape hiring and org design.
- **Board-level communication** (sometimes): At some companies, distinguished engineers brief the board on technical risk and opportunity.
- **Industry thought leadership**: You're a public figure. You speak at major conferences. You author books or major essays. Journalists call you for quotes.
- **Code contributions**: 5–10%, mostly mentoring and unblocking. You don't have time to code much.
- **People development**: You mentor principal and distinguished engineers. You are a career counselor.

**Required Skills**:
- **Visionary thinking**: You articulate a 5–10 year vision. You make bets on technologies, architectures, and hiring.
- **Exec communication**: Board decks, all-hands talks, investor pitches. You translate between technical and business.
- **Resilience**: Distinguished engineer roles are political and high-visibility. You need thick skin.
- **Judgment**: When to push, when to compromise, when to retreat.

**Books**:
- **Staff Engineer** (Larson)
- **The Software Architect Elevator** (Hohpe)
- **The Phoenix Project** (Kim, Behr, Spafford) — now reading it from the CTO perspective.

**Salary (FAANG, 2026)**:
- Base: $350K–$550K
- Stock/equity: $500K–$1.5M+/year
- Bonus: 20–30%
- **Total Comp: $1M–$2.5M+ (heavily equity-dependent)**

**Non-FAANG**:
- Base: $300K–$450K
- Bonus: 25–40%
- Stock: $200K–$1M+
- **Total Comp: $600K–$1.2M**

---

## MANAGER LADDER: Tech Lead → Director → VP → CTO (8+ years)

### Tech Lead (Still IC, with coordination responsibility)

**Day in the Life**:
- **Team technical direction**: You own the technical roadmap for your team (6–10 people). You make architecture decisions.
- **Mentoring**: You mentor 2–3 junior/mid engineers on your team. 1–2 hours/week each.
- **Project coordination**: You unblock your team. You manage dependencies with other teams.
- **Code contributions**: 30–50% still. You code with your team, not above them.
- **Hiring & interviews**: You're in the loop for team hires. You assess candidates for your level (senior) and below.
- **Not people-management**: You don't conduct performance reviews, comp conversations, or firing (yet). Your manager does.

**Path**: Tech Lead is often a temporary role (6–18 months) on the way to EM or back to pure IC. Not all companies have this level. Some skip it and go directly from Senior → EM.

**Salary (2026)**:
- Base: $150K–$210K
- Bonus: 15–25%
- Stock (if startup): $50K–$200K
- **Total Comp: $180K–$300K**

---

### Engineering Manager / EM (Your first manager role, 8–12 years)

**Day in the Life**:
- **Hiring**: 20–30% of your time. You write job descriptions, screen resumes, interview, make offers, negotiate, onboard.
- **One-on-ones**: 1:1s with each of your 6–10 reports, 30–60 min/week. You discuss career growth, blockers, feedback, life. These are sacred.
- **Performance management**: You write reviews, rate people, calibrate comp. You have hard conversations about underperformance.
- **Compensation**: You negotiate salaries, plan raises, do equity refreshes. You advocate for your team in budget cycles.
- **Team planning**: You plan headcount, project assignments, sprint planning. You balance business needs vs. team burnout.
- **Cross-team coordination**: You negotiate dependencies, resolve conflicts, escalate blockers.
- **Code contributions**: 5–10%. You review PRs and mentor in code, but you can't ship much; meetings own your calendar.
- **Feedback**: You give feedback constantly. You catch people doing things right. You redirect when they're off track.
- **Difficult conversations**: You fire people. You demote people. You tell someone they won't make senior. You handle complaints and conflicts.

**The Uncomfortable Truth About Becoming a Manager**:
- You will stop coding daily. This feels like a loss. It is a loss. Some people never get over it.
- You become responsible for other people's growth. If they fail, it's partly on you.
- You carry information that can't be shared (compensation, hiring plans, confidential feedback). This is isolating.
- Your old peers now report to you. Some resent it. You have to earn their respect in a new way.
- You will have to fire good people in bad times, or people who aren't growing, or people who are toxic. It will hurt.
- Your job is no longer to be the strongest IC. It's to make your team strong.

**If any of that makes you deeply uncomfortable, stay IC.** There's no shame in it. Larson and Fournier both say the same thing.

**Required Skills**:
- **People judgment**: You can assess talent, potential, and cultural fit quickly.
- **Feedback delivery**: You can give feedback that lands (honest but kind). You can receive feedback without defensiveness.
- **Conflict resolution**: You can mediate disagreements, de-escalate tension, find win-win solutions.
- **Org design intuition**: You know when a team is too big, too small, or organized wrong.
- **Comp strategy**: You understand market rates, equity cliff risk, leveling, and retention.
- **Resilience**: You will take heat from both directions (team wants something, leadership wants something else). You live in the middle.

**Books (Essential)**:
- **The Manager's Path** (Camille Fournier): The canonical book for EM to director. [O'Reilly](https://www.oreilly.com/library/view/the-managers-path/9781491973882/)
- **High Output Management** (Andy Grove, 1983): Still the best. Covers OKRs, leverage, 1:1s, and the role of a manager as a multiplier. [Amazon](https://www.amazon.com/High-Output-Management-Andrew-Grove/dp/0679762884)
- **The Making of a Manager** (Julie Zhuo): Warm, honest, practical. Covers hiring, feedback, 1:1s, motivation. [Amazon](https://www.amazon.com/Making-Manager-What-Everyone-Needs/dp/0987417203)
- **Resilient Management** (Lara Hogan, A Book Apart): Shorter, focused on supporting your team through change and stress. [A Book Apart](https://abookapart.com/products/resilient-management)
- **An Elegant Puzzle** (Will Larson, Stripe Press): Essays on scaling yourself, teams, and orgs. Larson is both IC and manager, which gives unique perspective.
- **Multipliers** (Liz Wiseman): How to lead in a way that makes people smarter and more capable.
- **Radical Candor** (Kim Scott): Give feedback that lands (caring personally + challenging directly). [Radical Candor](https://www.radicalcandor.com/)
- **Crucial Conversations** (Patterson, Grenny, McMillan, Switzler): How to have hard conversations without damaging relationships.

**Salary (2026)**:
- Base: $180K–$270K
- Bonus: 15–30%
- Stock (if startup): $100K–$300K
- **Total Comp: $250K–$450K**

(Note: EM salary is often similar to or slightly below Staff Engineer, reflecting the market reset for manager roles. This varies by company.)

---

### Senior Engineering Manager / EM2 (12–15 years)

**Day in the Life**:
- **Managing managers**: You have 2–4 EM/Tech Lead reports. You coach them on hiring, feedback, retention.
- **Larger team scope**: Your span of influence is 20–30 engineers (via your EM reports, not direct reports). You think about org-wide patterns.
- **Hiring director-level talent**: You recruit for EMs, senior ICs, staff engineers.
- **Strategic planning**: You own your org's 1–2 year roadmap. You align it with company strategy.
- **Cross-org influence**: You negotiate with other EM managers, resolve dependencies, escalate issues.
- **Exec communication**: You report directly to a director or VP. You present team metrics, plans, risks, and opportunities.
- **People development**: You mentor EMs. You coach them through hard conversations and growth plateaus.

**Required Skills**:
- Everything from EM, plus:
- **Org design at scale**: How do you structure teams of teams? How do you prevent silos?
- **Strategic hiring**: Building a team for the next chapter (if pivoting to mobile, hire mobile experience).
- **Exec presence**: You're comfortable in board rooms or all-hands. You speak clearly and own the room.
- **Conflict resolution at scale**: Disagreements between teams, not just individuals.

**Books**:
- **The Manager's Path** (Fournier) — chapters on "Manager of Managers" and "Director" are critical here.
- **An Elegant Puzzle** (Will Larson)
- **Good Strategy / Bad Strategy** (Richard Rumelt): How strategy actually works (not the MBA textbook version). [Amazon](https://www.amazon.com/Good-Strategy-Bad-Difference-Matters/dp/0307886239)

**Salary (2026)**:
- Base: $220K–$320K
- Bonus: 20–35%
- Stock: $150K–$500K
- **Total Comp: $400K–$700K**

---

### Director of Engineering (15+ years)

**Day in the Life**:
- **VP-level responsibility**: You own 2–5 engineering teams (~50–150 engineers). You're accountable for hiring, retention, velocity, quality, and tech debt.
- **Org strategy**: You define your org's 3–5 year vision. You make bets on architecture, hiring, and technology choices.
- **Hiring & recruiting**: You recruit directors, senior IMs, principals. You build your leadership team.
- **Budget & resource planning**: You own your org's annual budget. You justify headcount, tools, and training.
- **Board-level exposure**: You brief VPs, sometimes the board, on technical progress, risks, and opportunities.
- **Cross-org alignment**: You coordinate with product, design, QA, DevRel. You resolve high-stakes conflicts.
- **Code contributions**: ~0%. You're in meetings and strategic work.

**Required Skills**:
- Everything from EM2, plus:
- **P&L thinking**: You understand headcount costs, tool costs, hiring costs. You think in terms of ROI.
- **Board communication**: You can explain technical complexity to non-technical executives.
- **Long-term vision**: Where should the org be in 5 years? What bets do you make?
- **Resilience + political skill**: Directors operate in ambiguity. You navigate conflicting priorities. You make hard calls.

**Books**:
- **The Manager's Path** (Fournier) — chapters on "Director" and beyond.
- **An Elegant Puzzle** (Will Larson)
- **Good Strategy / Bad Strategy** (Rumelt)
- **Scaling Up** (Verne Harnish): How to scale the org and culture as you grow. [Amazon](https://www.amazon.com/Scaling-Up-Companies-Focused-Leaders/dp/B00U6XB5EE)

**Salary (2026)**:
- Base: $280K–$400K
- Bonus: 20–40%
- Stock: $200K–$1M+
- **Total Comp: $500K–$1.2M+**

---

### VP of Engineering (15+ years, large orgs or growth stage)

**Day in the Life**:
- **Org-wide responsibility**: You lead multiple directors and their orgs. You own hiring, retention, culture, tech debt strategy for 200–500+ engineers.
- **Company strategy**: You sit in executive meetings. You influence product roadmap, hiring budget, and company pivots.
- **M&A diligence**: Acquisitions? You assess target companies' technical capability, team, and debt. You plan integration.
- **Investor relations**: You brief investors on technical progress, scalability, and risk. You answer technical due diligence questions.
- **Hiring VPs / Distinguished Engineers**: You recruit your direct reports and your org's technical leaders.
- **Culture & retention**: You set the tone for how engineers are treated, grown, and rewarded.
- **Code contributions**: 0%. You've made a full career transition.

**Required Skills**:
- **Executive judgment**: You make multi-year bets. Not all of them will pay off. You learn to live with uncertainty.
- **P&L ownership**: You own a P&L. You make hiring, tool, and infrastructure trade-offs based on business impact.
- **Board-level communication**: You brief the board quarterly. You field investor questions.
- **People strategy**: Hiring, retention, succession planning, leadership development.
- **Political skill + resilience**: VPs operate in high ambiguity. You mediate between engineering, product, and exec. You absorb pressure from above and below.

**Books**:
- **The Manager's Path** (Fournier) — chapters on VP and CTO.
- **An Elegant Puzzle** (Will Larson)
- **Good Strategy / Bad Strategy** (Rumelt)
- **The Advantage** (Patrick Lencioni): Org health (trust, clarity, alignment, accountability). [Amazon](https://www.amazon.com/Advantage-Organizational-Health-Everything-Business/dp/0787976389)
- **Multipliers** (Liz Wiseman)

**Salary (2026)**:
- Base: $350K–$550K
- Bonus: 25–50%
- Stock (if public): $200K–$2M+/year
- **Total Comp: $600K–$2.5M+ (heavily equity-dependent)**

---

### CTO / Chief Technology Officer (Usually 20+ years)

**Day in the Life**:
- **Company-wide technical vision**: You set the long-term tech strategy. You make architectural bets (microservices vs. monolith, cloud vs. on-prem, programming languages, etc.).
- **Executive leadership**: You're a member of the executive team. You sit in board meetings. You influence company direction.
- **Board communication**: You brief the board on technical risk, opportunity, and progress.
- **Company pivots**: M&A, new product lines, new markets — you assess the technical feasibility and plan the technical roadmap.
- **Hiring**: You recruit VPs of Engineering, Distinguished Engineers, and set the bar for technical talent.
- **Culture & values**: You shape the engineering culture. You decide: fast & loose, or slow & careful? Open source friendly or not? Remote-first or office-first?
- **Investor relations**: You brief investors, answer technical due diligence, represent the company's technical vision.
- **Code contributions**: 0%. You're an executive.

**The CTO Role is Contextual**:
- At a pre-product startup: CTO ≈ very senior engineer + team lead. You code, you set direction, you hire.
- At a mid-stage startup (50–200 people): CTO = VP of Engineering + technical visionary. You lead eng org, set tech strategy, report to CEO.
- At a large company: CTO is often a figurehead / thought leader. You represent the company. You mentor the VP of Engineering. You speak at conferences.

**Required Skills**:
- **Visionary thinking**: You articulate a technical vision that excites the market.
- **Executive judgment**: You make big bets. You live with uncertainty and ambiguity.
- **Board communication**: You brief the board. You answer investors. You are a company voice.
- **Hiring & recruiting**: You build your leadership team.
- **Resilience**: The CTO role is high-visibility and high-stakes. You need thick skin and a support system.

**Books**:
- **The Manager's Path** (Fournier) — chapters on "CTO and Beyond."
- **An Elegant Puzzle** (Will Larson)
- **Good Strategy / Bad Strategy** (Rumelt)
- **The Advantage** (Patrick Lencioni)
- **Scaling Up** (Verne Harnish)

**Salary (2026)**:
- Base: $400K–$800K
- Bonus: 30–60%
- Stock (if startup): $1M–$5M+ (heavily dependent on company stage and equity)
- Stock (if public): $500K–$3M+/year
- **Total Comp: $1M–$5M+ (highly variable based on company stage and equity vesting)**

---

## Lateral Moves & Hybrid Paths

Not every engineer goes IC → Senior → Staff. Not every manager goes EM → Director → VP. Here are common sidesteps:

### IC → Tech Lead (+ Hybrid Coding)

Some senior engineers take on a tech lead role for 1–2 years without going full EM. You code 30–50%, mentor mid-level engineers, and own your team's architecture. You don't do performance reviews or firing. This is a good "test drive" for management before committing.

**Companies that support this**: Google (Tech Lead role), Amazon (some teams), Stripe, Netflix.

### Senior Engineer → Solutions Architect

You stay IC but move to presales. You understand the product deeply, visit customers, design custom solutions. You unblock pre-sales teams.

**Salary**: Similar to senior engineer (~$160K–$200K base + total comp $200K–$300K).

**Books**: _Spin Selling_ (Neil Rackham) for understanding customer conversations. _The Challenger Sale_ (Adamson & Dixon).

### Senior Engineer → Sales Engineer / DevRel

You stay IC but become the bridge between customers and engineering. You give demos, answer technical questions, blog about the product, contribute to docs.

**Salary**: Similar to senior engineer, often with a small commission/bonus bump.

**Books**: _The Developer Evangelist's Handbook_ (Christian Heilmann).

### Senior Engineer → Technical Program Manager (TPM)

You move into planning, dependency management, and shipping at scale. You code 0%, but you use your engineering knowledge to unblock teams.

**Salary**: Similar to EM (~$180K–$250K base + total comp $250K–$400K).

**Books**: _Escaping the Build Trap_ (Melissa Perri).

### Manager → IC Return

This is more common than people admit. Some managers realize: _"I don't want to manage anymore."_ Common reasons: burnout, company culture change, personal preference.

**Can you go back?** Yes, but with caveats:
- You can return to IC, but probably not at the same level you left.
- Example: EM who managed → return as Senior IC (not Staff, probably).
- You lose some "manager credit." People remember you as a leader; moving back signals you "stepped down."
- Will Larson and Camille Fournier both discuss this in their books. The recommendation: be honest about it, find the right company/team, and own the decision.

---

## Choosing Your Path: Quick Reference

| Criterion | IC Path | Manager Path |
|-----------|--------|--------------|
| **Coding** | 50% → 10% | 10% → 0% |
| **Influence** | Technical direction, architecture | People, org, hiring, comp |
| **Pay parity** | Yes (Staff ≈ EM, Principal ≈ Director) | Yes |
| **Visibility** | Writing, talks, OSS, code reviews | Board meetings, all-hands, exec team |
| **Hardest part** | Staying relevant; avoiding "forgotten middle" | Firing people; comp conversations; being middle manager |
| **Books** | Staff Engineer, The Software Architect Elevator | The Manager's Path, High Output Management, Radical Candor |
| **When to pivot** | If you stop enjoying mentoring and want to go deeper | If you enjoy developing people and want broader influence |
| **Can you reverse?** | Harder to stay relevant; rare at principal+ levels | Yes, but often at lower level; better to decide early |

---

## Learning & Growth Resources

### YouTube Channels (Free)

- **Fireship** (https://www.youtube.com/@Fireship): 10-minute deep dives on tech topics. System design, databases, frameworks.
- **ThePrimeagen** (https://www.youtube.com/@ThePrimeagen): Performance, algorithms, editor tips. Fast-paced and technical.
- **Theo - t3.gg**: Full-stack JavaScript, Next.js, Tailwind. Great for web devs.
- **ByteByteGo** (Alex Xu, https://www.youtube.com/@ByteByteGo): System design. Same author as _System Design Interview_.
- **Hussein Nasser** (https://www.youtube.com/@HusseinNasser): Backend deep dives. Networking, databases, performance.
- **Web Dev Simplified** (https://www.youtube.com/@WebDevSimplified): Modern web dev. React, backend patterns.
- **Traversy Media** (https://www.youtube.com/@TraversyMedia): Full-stack courses. MERN, LAMP, Django, etc.

### Engineering Blogs (Read Regularly)

- **Joel on Software** (Joel Spolsky, https://www.joelonsoftware.com/): Timeless essays on hiring, estimation, architecture.
- **Coding Horror** (Jeff Atwood, https://blog.codinghorror.com/): Pragmatic engineering, psychology of code, productivity.
- **Martin Fowler's Blog** (https://martinfowler.com/): Refactoring, architecture, testing, microservices.
- **Will Larson's Blog** (https://lethain.com/): Scaling orgs, career ladders, strategy. Must-read.
- **Charity Majors** (https://charity.wtf/): Observability, DevOps, careerism. Raw and honest.
- **Camille Fournier** (https://skamille.medium.com/): Management, leadership, org design.
- **Pragmatic Engineer Newsletter** (Gergely Orosz, https://newsletter.pragmaticengineer.com/): Industry analysis, career insights.
- **Lara Hogan's Blog** (https://larahogan.me/): Management, feedback, resilience.
- **Patrick McKenzie** (https://www.kalzumeus.com/): SaaS, business, startups. Also _Bits about Money_.
- **Julia Evans** (https://jvns.ca/): Technical deep dives, zines, debugging.
- **Dan Luu** (https://danluu.com/): Systems performance, hiring, industry observations.

### Conferences (In-Person or Videos)

- **GOTO Conferences** (https://www.gotocph.com/): Year-round talks on architecture, leadership, languages. Videos free on YouTube.
- **QCon** (https://www.qconferences.com/): Quarterly conferences (NY, SF, London). Heavy on architecture, systems, and industry trends.
- **StrangeLoop** (Ended 2023, but videos free on YouTube): Strange Loop was the gold standard for weird, deep technical talks.
- **O'Reilly Software Architecture Superstream**: Vendor-run. Free talks on architecture, cloud, AI.
- **Domain-Driven Design Europe**: Focused on software design and domain modeling.
- **LeadDev** (https://leaddev.com/): Leadership and management for engineers. Talks, articles, community.

### Books: Complete Reading List

**For Junior/Mid Engineers**:
- The Pragmatic Programmer (Hunt & Thomas) ⭐
- Refactoring (Fowler)
- Clean Code (Robert C. Martin) — with caveats
- A Philosophy of Software Design (John Ousterhout)

**For Senior Engineers**:
- Designing Data-Intensive Applications (Kleppmann) ⭐⭐⭐
- Software Architecture: The Hard Parts (Ford, Richards, Dehghani, Teeter)
- The Phoenix Project (Kim, Behr, Spafford)
- Effective Java / Effective Go / Effective C++ (language-specific)

**For Staff+ Engineers**:
- Staff Engineer: Leadership Beyond the Management Track (Will Larson) ⭐⭐⭐
- The Software Architect Elevator (Gregor Hohpe)
- Software Engineering at Google (Winters, Manshreck, Wright) ⭐⭐
- Fundamentals of Software Architecture (Ford & Richards)

**For Engineering Managers**:
- The Manager's Path (Camille Fournier) ⭐⭐⭐
- High Output Management (Andy Grove) ⭐⭐⭐
- The Making of a Manager (Julie Zhuo)
- Resilient Management (Lara Hogan)
- An Elegant Puzzle (Will Larson)
- Multipliers (Liz Wiseman)
- Radical Candor (Kim Scott)
- Crucial Conversations (Patterson, Grenny, McMillan, Switzler)

**For Directors+**:
- The Manager's Path (Fournier) — re-read for director chapters
- An Elegant Puzzle (Larson)
- Good Strategy / Bad Strategy (Richard Rumelt) ⭐⭐
- The Advantage (Patrick Lencioni)
- Scaling Up (Verne Harnish)

---

## FAQs

**Q: Is a CS degree required?**
A: No. Portfolio > degree. But a degree (or bootcamp + portfolio) makes the first job easier. Stack Overflow 2025 Survey shows a decline in formal degree requirements; practical skills dominate.

**Q: How long to go from Junior to Senior?**
A: Typically 5–8 years. Fast-track: 4–5 years (rare, requires ideal circumstances). Slow-track: 8–10 years (also normal; pace depends on company, domain, and luck).

**Q: Is the IC ladder really equivalent to the manager ladder?**
A: Yes, at FAANG and large mature companies. Staff ≈ EM. Principal ≈ Director. Distinguished ≈ VP. Salary data confirms this. Will Larson and Camille Fournier both confirm this. But this is a recent shift (~2015+). Smaller companies and legacy orgs may not have this parity yet.

**Q: Should I become a manager?**
A: Only if you genuinely enjoy developing people and want broader influence. It's not a promotion. It's a career change. If you love coding and want to stay close to the product, stay IC. Both paths are equally valuable.

**Q: Can I go from manager back to IC?**
A: Yes, but often at a lower level than when you left. Example: EM → Senior IC (not Staff, probably). It's harder to stay relevant as an IC after managing. Larson and Fournier discuss this; the recommendation is to be honest and find the right team.

**Q: How do I get from Mid to Senior?**
A: Ownership + scope. Own a system end-to-end. Lead a project that ships. Mentor juniors. Write design docs. Speak at internal tech talks. Get comfortable with "I don't know, but I can figure it out." Contribute to strategic initiatives. The exact path varies by company, but it's about leverage.

**Q: What if I'm still junior/mid at a startup vs. a big company?**
A: Startups often compress the timeline (you get senior scope faster, but compensation is lower). Big companies are slower (more process, more reviews, more time at each level), but comp and stability are higher. Neither is "better" — they have different trade-offs.

**Q: AI assistants are coming. Am I safe?**
A: Yes. AI is a tool, not a replacement for engineers (yet). The Gartner forecast (75% of engineers using AI assistants by 2028) is about *augmentation*, not elimination. But expect junior hiring to shift; you'll need stronger portfolio, not just a bootcamp cert.

---

## Sources

- [Gartner: 75% of Enterprise Software Engineers Will Use AI Code Assistants by 2028](https://www.gartner.com/en/newsroom/press-releases/2024-04-11-gartner-says-75-percent-of-enterprise-software-engineers-will-use-ai-code-assistants-by-2028)
- [Stack Overflow 2025 Developer Survey](https://survey.stackoverflow.co/2025)
- [Levels.fyi Software Engineer Salaries](https://www.levels.fyi/t/software-engineer)
- [Levels.fyi Google Software Engineer Salaries](https://www.levels.fyi/companies/google/salaries/software-engineer)
- [Levels.fyi Amazon Software Engineer Salaries](https://www.levels.fyi/companies/amazon/salaries/software-engineer)
- [Levels.fyi Microsoft Software Engineer Salaries](https://www.levels.fyi/companies/microsoft/salaries/software-engineer)
- [Let's Data Science: Staff Engineer vs. Engineering Manager Salary 2026](https://letsdatascience.com/blog/staff-engineer-or-engineering-manager-which-pays-more)
- [PayScale: UK Junior Software Engineer Salary](https://www.payscale.com/research/UK/Job=Junior_Software_Engineer/Salary)
- [PayScale: UK Senior Software Engineer Salary](https://www.payscale.com/research/UK/Job=Senior_Software_Engineer/Salary)
- [Arc: Remote Software Developers in South Africa](https://arc.dev/salaries/software-engineers-in-south-africa)
- [PayScale: South Africa Software Engineer Salary](https://www.payscale.com/research/ZA/Job=Software_Engineer/Salary)
- [Hakia: Software Engineer Salary Guide 2026](https://hakia.com/careers/software-engineer-salary-guide/)
- [Hakia: Junior to Senior Timeline 2026](https://hakia.com/careers/junior-to-senior/)
- [FAANG Software Engineer Salaries 2026: Apex Interviewer](https://www.apexinterviewer.com/resources/faang-salaries-2026)
- [Will Larson: Staff Engineer Book](https://staffeng.com/book/)
- [Will Larson's Blog: Lethain.com](https://lethain.com/)
- [Camille Fournier: The Manager's Path (O'Reilly)](https://www.oreilly.com/library/view/the-managers-path/9781491973882/)
- [Andrew Grove: High Output Management (Amazon)](https://www.amazon.com/High-Output-Management-Andrew-Grove/dp/0679762884)
- [Hunt & Thomas: The Pragmatic Programmer 20th Anniversary Edition](https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/)
- [Martin Fowler: Refactoring](https://refactoring.com/)
- [Martin Kleppmann: Designing Data-Intensive Applications](https://dataintensive.net/)
- [Gregor Hohpe: The Software Architect Elevator (O'Reilly)](https://www.oreilly.com/library/view/the-software-architect/9781492058991/)
- [Winters, Manshreck, Wright: Software Engineering at Google (Google Books)](https://books.google.com/books/about/Software_Engineering_at_Google.html?id=eISvDwAAQBAJ)
- [Julie Zhuo: The Making of a Manager (Amazon)](https://www.amazon.com/Making-Manager-What-Everyone-Needs/dp/0987417203)
- [Lara Hogan: Resilient Management (A Book Apart)](https://abookapart.com/products/resilient-management)
- [Will Larson: An Elegant Puzzle (Stripe Press)](https://lethain.com/elegant-puzzle/)
- [Liz Wiseman: Multipliers (Amazon)](https://www.amazon.com/Multipliers-Best-Leaders-Everyone-Smarter/dp/0061766410)
- [Kim Scott: Radical Candor (Radical Candor Inc.)](https://www.radicalcandor.com/)
- [Patterson, Grenny, McMillan, Switzler: Crucial Conversations (McGraw-Hill)](https://www.amazon.com/Crucial-Conversations-Tools-Talking-Stakes/dp/1469266822)
- [Richard Rumelt: Good Strategy / Bad Strategy (Amazon)](https://www.amazon.com/Good-Strategy-Bad-Difference-Matters/dp/0307886239)
- [Patrick Lencioni: The Advantage (Amazon)](https://www.amazon.com/Advantage-Organizational-Health-Everything-Business/dp/0787976389)
- [Verne Harnish: Scaling Up (Amazon)](https://www.amazon.com/Scaling-Up-Companies-Focused-Leaders/dp/B00U6XB5EE)
- [Martin Fowler's Blog](https://martinfowler.com/)
- [Charity Majors: Charity.wtf](https://charity.wtf/)
- [Pragmatic Engineer Newsletter: Gergely Orosz](https://newsletter.pragmaticengineer.com/)
- [Lara Hogan's Blog](https://larahogan.me/)
- [Julia Evans: JVns.ca](https://jvns.ca/)
- [Dan Luu: Danluu.com](https://danluu.com/)
- [Fireship YouTube Channel](https://www.youtube.com/@Fireship)
- [ThePrimeagen YouTube Channel](https://www.youtube.com/@ThePrimeagen)
- [ByteByteGo YouTube Channel](https://www.youtube.com/@ByteByteGo)
- [Hussein Nasser YouTube Channel](https://www.youtube.com/@HusseinNasser)
- [LeadDev](https://leaddev.com/)
- [GOTO Conferences](https://www.gotocph.com/)
- [QCon](https://www.qconferences.com/)

---

**Last updated**: April 30, 2026  
**Status**: Published  
**Author**: Claude on behalf of IT Career Roadmap project
