# Project Status — IT Career Roadmap

**Last updated:** 2026-04-30
**Current phase:** Phase 1 (extractor + drawer enrichment + wiki + checklist) — building now.

This file is the rolling status / decision log / backlog. Update it every time direction changes or a new asset lands.

---

## Where we are right now

### Built and live (Docker container `it-roadmap` on `:3000`)

- Next.js 15 + React 19 + TypeScript (strict) + Tailwind v4 + Prisma 6 (SQLite)
- Multi-stage Dockerfile, multi-stage build, seed-db pattern (no runtime Prisma CLI)
- 3-column docs shell: 56px sticky top bar · 240px collapsible left sidebar · fluid main column
- Light / Dark / Auto theme toggle, persisted to localStorage; CSS-variable token system (separate light + dark sets, not alpha flips)
- Cmd-K command palette (searches certs, roles, transitions, changers, pages by name + code + vendor)

#### Pages
- `/` — homepage hero + 6-stat strip + 3 feature cards + popular-cert preview rows
- `/certs` — cert browser, default v3 spreadsheet view (4 sections by level: Entry / Associate / Professional / Expert), `📋 Tables` ↔ `🗺 Wallchart` toggle, sticky filter chip bar (Domain / Ecosystem / Level / Vendor / Status), search, count meta
- `/certs/domain/[id]` — per-domain overview pages (12 domains + 9 ecosystems = 21 routes pre-rendered), 6-stat strip per domain, drill-in via sidebar
- `/matrix` — wallchart view (vendor-coloured tiles, 12 cols × 4 levels grid, edge-scroll on mouse-near-edge, visible row dividers, vendor legend that doubles as filter)
- `/paths` — 14-track tabs of career transitions (64 transitions extracted), expand-to-detail card with signal / gap / certs / books / soft-skills / failure modes / first-90-days / salary delta + source / structural insight
- `/profiles` — role profile grid (24 roles), filters: All / Entry-level / AI-resilient / AI-at-risk / Fully remote / On-site
- `/changers` — 10 non-IT background → IT entry guides
- `/wiki` — list of 14 research files (renderer for individual entries deferred until Phase 1 ships)
- `/blog`, `/flow` — stubs

#### Drawer pattern
- Same drawer everywhere (480px right-slide, scrim with blur, ESC to close)
- Vendor color stripe on header
- Drawer body shows: vendor link · note · domain context · skills at level · recommended courses · typical job titles · LikeButton · CommentThread

#### API
- `/api/likes` POST/GET (toggle, IP-hashed, 60/min rate limit)
- `/api/comments` POST/GET (5/min rate limit, profanity-filtered)

### Test surfaces (NOT live UI — sandbox previews approved)
- `/test` — index of 3 preview pages
- `/test/cert-enriched` — what an enriched cert drawer looks like (CCNA example)
- `/test/wiki/networking-domain` + `/test/wiki/aws-ecosystem` — markdown rendered as readable wiki pages
- `/test/build-status` — checklist dashboard mockup with 58-row mock data

---

## Source content — `Deep Dive/` folder (104 files, ~4.5+ MB, ~9,500+ verified URLs)

| Category | Files | Status |
|---|---|---|
| Domains | 12 (DOM01–DOM12) | ✅ complete |
| Ecosystems | 39 (D01–D39) | ✅ complete (added D33–D39 incl. SailPoint, SentinelOne, etc.) |
| Roadmaps | 10 (R01–R10) | ✅ complete |
| Industry Verticals | 13 (IND01–IND13) | ✅ complete |
| Specialty Roles | 21 (SR01–SR21) | ✅ complete |
| Cross-Cutting | 9 (CC01–CC09) | ✅ complete |

**All 104 files now have YAML frontmatter** (title / slug / code / kind / lastUpdated / vendors / tags). Frontmatter agent run, verified idempotent.

**Quality contract** (every file): every cert / book / course / salary number has a verifiable source URL. No source = not included.

---

## Phase 1 (REAL) — Deep Dive becomes the site (committed 2026-04-30)

Realised mid-build that the original Phase 1 was a thin enrichment layer over the existing 261 certs. The user wrote 104 Deep Dive files specifically so they BECOME the content of the site — not just enrich existing entries. Five-pass plan now committed:

| Pass | Scope | Source | Visible result |
|---|---|---|---|
| **A** | Ecosystem cert extraction → matrix grows | D01–D39 (39 files) | Matrix gains hundreds of new cert tiles. Sidebar gets all 39 ecosystems. |
| **B** | Specialty role ingestion → /profiles grows | SR01–SR21 (21 files) | Role grid 24 → 45 with day-in-life, salary, certs at level. |
| **C** | Roadmap ingestion + **visual progression UI** | R01–R10 (10 files) | New `/roadmaps/[id]` pages with horizontal year timeline + stage cards (day-in-life, certs at level, salary by region, lateral pivots). **Visual, clickable, selectable** — non-negotiable per user. Tech → Senior → Staff progression must be visible at a glance. |
| **D** | Industries surface | IND01–IND13 (13 files) | New `/industries` top-level page + per-industry pages with regulators / platforms / salary hubs / cert pathways. |
| **E** | Cross-cutting overlays | CC01–CC09 (9 files) | AI risk badges (CC01), currency toggle (CC02), expanded `/changers` 10→18 (CC03), first-job tab in cert drawer (CC04), `/negotiate` (CC05), `/side-income` (CC06), `/relocate` (CC07), burnout badges (CC08), inclusion lens (CC09). |

Approximate scope: 2 focused build sessions. Pass A in flight now.

---

## Phase 0 — already shipped (the foundation)

Single pass:

1. **Vendor brand colour audit** (background agent dispatched) — produces verified `lib/vendor-colors.ts` + `lib/vendor-colors-sources.md` audit log. ~150 vendors, official brand-guide sources cited.
2. **Frontmatter agent** — adds YAML `title / slug / kind / vendors / level / tags / lastUpdated` to each of 99 Deep Dive `.md` files.
3. **Build-time extractor** (`scripts/extract-deepdive.ts`) — uses `remark` to parse markdown ASTs. Six extractors: cert-attribute tables, cert-list tables, salary tables, learning-link lists, book lists, sources sections. Emits `content/enriched/*.json`.
4. **Cert drawer enrichment** — merges extracted cert data into existing drawer. New fields auto-render: cost / duration / passing-score / prep-time / exam-guide URL / full topics / recommended courses / books / salary by region / 2026 update notes / "Read full deep dive →" link.
5. **Wiki view** at `/wiki/[kind]/[slug]` — renders the original markdown using `react-markdown` + `remark-gfm`. Sidebar nav lists all 99 files grouped by kind. Cross-link from cert drawer footer.
6. **Build-status checklist** at `/admin/build-status` — per-file row showing extraction status + cert-match % + sources count + cross-links wired + visuals built + verified.
7. **⌘K palette extension** — index Deep Dive titles + section headings into search.
8. **Sidebar update** — new "Deep Dives" section with the 5 categories.
9. **Update INDEX.md** — currently stale (claims 97 files / Wave 5/6/7 empty; actually 99 files / all waves complete).
10. **Delete `/test/*` sandbox** — replaced by the real Phase 1 surfaces.

---

## Phase 1+ — top 3 to bundle if scope allows (from research agent)

These all share one pattern: parse one Cross-Cutting file → expose one site-wide affordance.

1. **AI-Risk badge + filter (site-wide)** — 🟢 Resilient / 🟡 Mixed / 🔴 At-risk chips on every role card, every roadmap stage, every cert drawer; top filter on `/profiles` + `/certs`. Source: `CC01_AI_Impact_Per_Role.md` (60+ roles classified). High leverage — single most decision-shaping data for a 2026 reader.
2. **Currency / region toggle (global header)** — persisted dropdown next to theme toggle: US$ / UK£ / EU€ / ZA R / AU$ / IN₹ / DE€ / SG$ / AE د.إ. Flips every salary number on the site. Source: `CC02_International_Salary_Data.md` (14 regions × 18 role families).
3. **Career-Changer Wizard** — replace static `/changers` with 3-step picker: origin background (18 options from CC03) → constraint (timeline / budget / remote-only / clearance) → appetite (technical-deep vs people-facing) → ranked role recommendations. Source: `CC03_Career_Changer_Backgrounds.md`.

---

## Phase 2+ — backlog (in priority order)

| # | Surface | Source | Visual treatment |
|---|---|---|---|
| 4 | First-Job Playbook tab inside cert drawer (entry-level certs only) | CC04 (1,902 lines, per-cert) | Tabs in drawer · checklist + accordion |
| 5 | `/industries` top-level page | IND01–IND13 (13 industries) | Grid of tiles → tabbed detail (Overview / Regulations / Platforms / Salaries / Path) |
| 6 | Vendor Ecosystem ladder pages at `/ecosystems/[id]` | D01–D32 (32 vendors) | Vertical ladder in vendor brand colour + lifecycle banner (e.g. "Veeam VMCE→VMCE+ Q2 2026") |
| 7 | Burnout-risk badge on `/profiles` | CC08 (per-role 🟢🟡🟠🔴 risk + drivers) | Flame icon on card + modal |
| 8 | Negotiation Toolkit at `/negotiate` | CC05 (RSU vesting math, counter-offer email templates, recruiter-call scripts) | Form-driven calc + script accordion + vesting bar chart |
| 9 | Newsletter signup ("email sub" the user mentioned — implicit feature, justified by CC06 — Pragmatic Engineer 400K subs / $1.5M/yr) | CC06 | Footer + post-end inline CTA · Beehiiv or Buttondown backend (no take-rate, cheaper than Substack) |
| 10 | `/relocate` page | CC07 (visa / processing time / salary threshold / PR pathway / family rights for 14 countries) | World-map grid + filterable card list |
| 11 | `/changes` cert lifecycle feed | scraped from D01–D32 ecosystem files | Timeline / changelog cards on homepage + dedicated page |
| 12 | Inclusion lens toggle on `/paths` and `/changers` | CC09 (women, POC, LGBTQ+, neurodivergent, veterans, disability, age, lower-income, ZA scholarships incl. WeThinkCode_) | Toggle + per-card resource chips |

---

## Open items / decisions still pending

- **Newsletter backend choice** — Beehiiv ($0 free tier up to 2.5K subs, then $39/mo) vs Buttondown ($9-29/mo, simpler) vs Ghost (self-hosted, requires infra). Recommend Beehiiv. **DECIDE before building #9.**
- **Multi-year career view ambition** — three options proposed:
  - (a) Timeline strip on Roadmap pages [low effort, ship in Phase 1]
  - (b) `/plan` interactive 5-year planner [1-day build, Phase 2]
  - (c) Branching tree SVG [week of work, deferred]
- **Visa data freshness** — CC07 needs an annual refresh (US H-1B / EB caps, UK Skilled Worker thresholds). Add a `lastVerified` date per country.
- **INDEX.md is stale** — claims "97 files, Wave 5/6/7 placeholders empty" but actually 99 / all complete. Fix as part of Phase 1.

---

## Decisions log (architecture choices we've already made)

| Date | Decision | Why |
|---|---|---|
| 2026-04-30 | Next.js 15 App Router + Prisma + SQLite + Docker single-container | Self-hostable, file-first authoring, no SaaS lock-in |
| 2026-04-30 | Geist Sans → switched to Inter Variable + JetBrains Mono | User positive on Inter; design skill ban relaxed for serious docs site |
| 2026-04-30 | 3-column docs shell (Stripe / Linear / Microsoft Learn pattern) | Drill-down browse beats one giant scroll list |
| 2026-04-30 | Cert browser default = 4 stacked spreadsheets by level (v3 mock) | Tables-by-level grouped, scrollable, sortable; matrix wallchart is secondary view |
| 2026-04-30 | Vendor colours = 4px accent only, never tile fill behind text | Pale tile + white text was illegible; brand identity preserved without sacrificing readability |
| 2026-04-30 | Markdown is source-of-truth for content; build-time extractor produces structured JSON | Author flow stays in `.md`; UI gets typed data without parallel JSON to maintain |
| 2026-04-30 | Prisma DB stays small (likes / comments / blog) — content is markdown + extracted JSON, not relational rows | Don't force the relational model on human-authored prose |

---

## Reading tips for future sessions

- This file is the rolling status. Read it first.
- `CLAUDE.md` is the brain file with project conventions and what NOT to do.
- `Deep Dive/INDEX.md` is the source content map (currently stale; refresh in Phase 1).
- `Deep Dive Test/` is just a copy of 2 files for sandbox work; safe to ignore.
- `BUILD_LOG.md` is the chronological build history of the original static-HTML platform (pre-React port).

---

## Where to find decisions / inspiration

- **The mock files** that drove design decisions: `public/design-mock.html`, `public/design-mock-v3.html`, `public/design-mock-v4.html` — these are static HTML mockups the user has approved or rejected. Useful for showing future test designs.
- **The user's hard rules** (cross-conversation memory in `~/.claude/projects/H--IT-rodmap-Blog/memory/`):
  - No fabrication — every claim must be citable
  - Only work in `H:\IT rodmap Blog\`, never the OneDrive copy
  - Cert matrix must look like Paul Jerimy (vendor color tiles, periodic-table density)
  - Design direction locked to the v3 mock + Inter typography + 3-column docs shell
