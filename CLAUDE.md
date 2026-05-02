# CLAUDE.md — Brain file for the IT Career Roadmap project

This file is the persistent context for any Claude session working in this folder. Read it first.

---

## What this project is

A self-hostable, Docker-containerized **Next.js 15 + TypeScript + Tailwind v4 + Prisma (SQLite)** web application — a career-identification platform for IT professionals. Modeled on the Paul Jerimy Security Roadmap, but spanning **all of IT**: 12 main domains, 9 specialty ecosystems (3 SaaS + 6 hardware/infra), 250+ verified certifications, 50+ career-transition guides, plus a starting-point quiz, an interactive flow diagram, per-role profiles, career-changer entry guides, a research wiki, and a blog with anonymous likes + comments (touchscreen-friendly).

Runs as a single container on Docker Desktop (Windows + WSL2) or any Linux host.

**THIS FOLDER IS THE ONLY WORKING LOCATION.** `H:\IT rodmap Blog\`. Do **not** touch the OneDrive copy at `C:\Users\impie\OneDrive\Documents\Claude\Projects\IT Roademap\` — the user has explicitly excluded it. The H: drive is the source of truth.

---

## Folder layout (Next.js project)

```
H:\IT rodmap Blog\
├── app\                          Next.js 15 App Router
│   ├── layout.tsx                Root layout — fonts, theme
│   ├── globals.css               Tailwind v4 + blueprint design tokens
│   ├── page.tsx                  Landing — hub + quiz (was index.html)
│   ├── roadmap\page.tsx          Cert matrix          (was IT_Roadmap.html)
│   ├── paths\page.tsx            Career transitions   (was IT_Career_Paths.html)
│   ├── flow\page.tsx             SVG flow diagram     (was IT_Career_Flow.html)
│   ├── profiles\page.tsx         Role profiles        (was IT_Role_Profiles.html)
│   ├── changers\page.tsx         Career changers      (was IT_Career_Changers.html)
│   ├── wiki\[slug]\page.tsx      MDX wiki renderer
│   ├── blog\                     Blog index + posts
│   └── api\
│       ├── likes\route.ts
│       └── comments\route.ts
├── components\
│   └── ui\                       Pill, BlueprintFrame, SheetTitle, DataTable,
│                                 Tabs, Drawer, LikeButton, CommentThread
├── content\                      (Step B) — TS modules extracted from HTML
│   ├── certs.ts                  cert matrix data
│   ├── transitions.ts            career-paths data
│   ├── nodes.ts, edges.ts        flow diagram graph
│   ├── roles.ts                  role profile cards
│   ├── changers.ts               career-changer guides
│   └── quiz.ts                   landing-quiz routing
├── wiki\                         14 .md research files (cross-linked, [[wiki-link]] aliases)
├── lib\
│   ├── db.ts                     Prisma client singleton
│   ├── ratelimit.ts              IP-hash + sliding-window rate limit (Prisma-backed)
│   └── profanity.ts              Comment filter
├── prisma\
│   └── schema.prisma             Like, Comment, BlogPost, RateLimit
├── docker\
│   └── entrypoint.sh             Runs `prisma db push` on container start
├── skills\frontend-design\SKILL.md   Anthropic frontend-design skill (downloaded)
├── public\                       Static assets (favicon, og images)
├── package.json, tsconfig.json, next.config.ts, postcss.config.mjs
├── Dockerfile                    Multi-stage: deps → builder → runner (Node 22 alpine)
├── docker-compose.yml            Single service + named volume `app-data` for SQLite
├── .dockerignore, .gitignore, .env.example
├── PLATFORM_README.md            Original platform documentation (long-form, content-level)
├── BUILD_LOG.md                  Build history phases 1–7
├── README.md                     Public GitHub-facing readme
└── CLAUDE.md                     this file

# Source-of-truth HTML — kept until extraction is done, then moved to _archive_html\
├── index.html, IT_Roadmap.html, IT_Career_Paths.html,
    IT_Career_Flow.html, IT_Role_Profiles.html, IT_Career_Changers.html
```

---

## NON-NEGOTIABLE: Citation rule

**If a fact, cert code, book, URL, salary figure, or claim cannot be cited to a real publisher / vendor / author / standards body / survey, it does not go on the site or in the wiki. No fabrication. No "probably." No "best guess."**

- Every cert chip on the matrix must point at the issuing vendor's own credentials page.
- Every book in `wiki/11_books_compendium.md` has Author, Publisher, Year, URL.
- Every salary figure in `app/paths/page.tsx` (and originally in `IT_Career_Paths.html`) cites a real source (Robert Half, Glassdoor, levels.fyi, BLS, PMI, Heidrick & Struggles, IAPP).
- Where research is uncertain (transitional cert state, retired-but-still-in-use legacy certs), flag it explicitly rather than picking a confident wrong answer.

This rule is load-bearing — it's the entire credibility argument for the project.

---

## Aesthetic (locked) — Technical Blueprint / Drafting

Per `skills/frontend-design/SKILL.md` and the user's brief: *"flow-chart type of view, easy on the eyes, easy to read, easy to follow, lots of tables, lots of certifications and links."*

- **Palette**: warm-cream paper (`#f4ede1`) ↔ deep ink navy (`#0d1b2a`); accents prussian-blueprint, cyan-trace, amber-mark, emerald-stamp, rust-flag, indigo-beta. Dark-mode mirror automatic via `prefers-color-scheme`.
- **Background**: subtle 16px graph-paper grid (with stronger 96px major lines). The page literally feels like a drafting sheet.
- **Typography**: **Fraunces** (variable serif, distinctive) for display headings, **IBM Plex Sans** for body, **JetBrains Mono** for codes/data/UI labels. NO Inter, NO Roboto, NO Arial.
- **Frames**: `.blueprint-frame` with corner-tick decorations (8px ticks at all 4 corners). Sharp 90° corners. 1px lines.
- **Sheet headers**: every page opens with `Sheet 0X · Plate Name · Rev. A` in mono caps — like a real engineering drawing.
- **Tables**: dense, mono cell type for codes/dates, status pills with explicit color semantics, fixed headers.
- **Motion**: minimal — line-drawing animations on the flow diagram, no bounce, no parallax. "Easy on the eyes" wins over flash.
- **Touchscreen**: every interactive element ≥48px (`tap-target` class enforces this). `@media (hover: none)` disables hover transitions.

Any redesign must commit to this direction. It's bold (real aesthetic POV) AND functional (information-dense reads cleanly).

---

## Stack & build

- **Next.js 15 App Router** + React 19 + TypeScript (strict).
- **Tailwind CSS v4** via `@tailwindcss/postcss` — design tokens in `app/globals.css` `@theme` block, no `tailwind.config.ts` needed.
- **Prisma 6 + SQLite** for likes / comments / blog posts. SQLite file lives in the `app-data` Docker volume at `/data/app.db`.
- **Zod** for API request validation.
- **MDX** for the wiki renderer (the existing `wiki/*.md` files render directly).
- **Docker** multi-stage: deps → builder → runner. Final image is `node:22-alpine` with `next/standalone` output. ~150MB target.

### Local dev

```powershell
cd "H:\IT rodmap Blog"
npm install
copy .env.example .env
npx prisma db push
npm run dev
```

App on http://localhost:3000

### Docker

```powershell
cd "H:\IT rodmap Blog"
docker compose up --build
```

App on http://localhost:3000. SQLite persists in named volume `it-roadmap-blog_app-data`.

---

## API surface

| Endpoint | Method | Purpose |
|---|---|---|
| `/api/likes?target=<id>` | GET | Returns `{ target, count }` |
| `/api/likes` | POST `{target}` | Toggle like for IP. Rate-limited 60/min. Returns `{count}` |
| `/api/comments?target=<id>` | GET | Returns recent visible comments for target (max 100) |
| `/api/comments` | POST `{target, body, author?}` | Post comment. Rate-limited 5/min. Profanity-filtered. |

`target` is a freeform string — use stable IDs like `cert:aws-saa-c03`, `transition:sysadmin-to-cloud`, `blog:my-first-cert`, `wiki:11_books_compendium`.

---

## Conventions

- **Strict TS** — no `any`, no `@ts-ignore`. Use `unknown` + Zod at boundaries.
- **Server Components by default**; `"use client"` only when needed (interactive UI primitives in `components/ui/Drawer.tsx`, `Tabs.tsx`, `LikeButton.tsx`, `CommentThread.tsx`).
- **Compact data objects** in `content/*.ts` — single-line per cert/transition object so they're easy to add to without breaking structure.
- **Status enum** for certs: `active` / `retiring` / `beta` / `new` / `retired`. `retiring` includes the date in `note`.
- **Tap targets ≥48px** — enforced by `.tap-target` utility class on every button/link/input.
- **No analytics, no signup, no third-party scripts.** The container should run fully offline once built.
- **Don't fabricate.** See Citation Rule.

---

## Source extraction plan (Step B — next session)

The existing `*.html` files in this folder are the **source of truth for content**. They contain inline `<script>` blocks with JS arrays (`DOMAINS`, `ECOSYSTEMS`, `HARDWARE_ECOS`, `PATHS`, `NODES`, `EDGES`, role profiles, career-changer cards). Extract those into `content/*.ts` modules **without changing the data**. The Next.js pages then import the typed modules and render. After every page renders correctly with the same content, move the HTML files to `_archive_html/`.

**Extraction order** (low risk first):
1. `index.html` → `content/quiz.ts` + landing copy in `app/page.tsx` (already stubbed).
2. `IT_Roadmap.html` → `content/certs.ts` + `app/roadmap/page.tsx` + matrix grid component + cert drawer.
3. `IT_Career_Paths.html` → `content/transitions.ts` + `app/paths/page.tsx` + transition cards.
4. `IT_Career_Flow.html` → `content/nodes.ts` + `content/edges.ts` + `app/flow/page.tsx` (SVG node-link).
5. `IT_Role_Profiles.html` → `content/roles.ts` + `app/profiles/page.tsx`.
6. `IT_Career_Changers.html` → `content/changers.ts` + `app/changers/page.tsx`.

---

## What NOT to do

- **Don't touch the OneDrive folder** at `C:\Users\impie\OneDrive\Documents\Claude\Projects\IT Roademap\` — explicitly excluded by the user.
- **Don't change the content** during the HTML → React port. Same data, new shell.
- **Don't link the `wiki/` files from inside the matrix/paths pages** as primary navigation. Wiki has its own surface (`/wiki`). Earlier I added a "Deep Resources" tab on the matrix and was told to remove it.
- **Don't fabricate cert codes, dates, salaries, URLs, book authors.** See Citation Rule.
- **Don't add analytics, signup flows, or third-party scripts.** Stay self-hostable + offline-capable.
- **Don't deviate from the blueprint aesthetic** without explicit approval.
- **Don't use Inter / Roboto / Arial / system-default fonts** — the design skill bans these.

---

## Sequence in flight (April 30, 2026)

| Step | Status |
|------|--------|
| A. Scaffold Next.js + Tailwind + Prisma + Docker | ✅ done (this session) |
| B. Extract HTML content into `content/*.ts` modules | ⏳ next session |
| C. Port the 6 pages to React (Roadmap, Paths, Flow, Profiles, Changers, Index) | ⏳ |
| D. Wiki MDX renderer + `[[wiki-link]]` resolution | ⏳ |
| E. Blog (list + post + likes + comments) wired up | ⏳ |
| F. Aesthetic polish pass per `skills/frontend-design/SKILL.md` | ⏳ |
| G. Move legacy HTML to `_archive_html/`, delete from `.dockerignore` exclude | ⏳ |

After Step A, the skeleton runs in Docker with the landing page rendering. Steps B-G fill in real content.

---

## Genuinely outstanding (carries forward from before architecture shift)

- **Citation audit on all 13 wiki files** — flag every uncited percent, salary claim, "X% YoY surge"-type stat. Source it or remove it.
- **International salary data** (especially South African ZAR — given user context).
- **AI-impact + remote chips on each cert chip in the matrix drawer** (research already exists; just needs UI wiring during Step C).
- **Print-friendly export of personalised roadmap** (after the quiz).
- **Auto-update scraper for cert vendor pages** (manual updates currently required).
