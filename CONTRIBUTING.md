# Contributing to IT Career Roadmap

Thanks for considering a contribution. This project welcomes:

- **Cert corrections** — wrong exam code, retired cert still listed as active, broken vendor URL, salary figure that needs a current citation
- **New cert files** — a vendor or cert we don't cover yet
- **New vendor certification paths** — a `{Vendor}_Roadmap.md` for a vendor we haven't documented
- **Code improvements** — bug fixes, performance, accessibility, mobile responsiveness
- **Documentation** — making the README, wiki, or templates clearer

The project is opinionated about a few things — please read this whole document before opening a non-trivial PR.

---

## Ground rules

### 1. The Citation Rule (load-bearing)

> Every fact, cert code, exam fee, salary figure, retirement date, and prerequisite **must cite a primary source URL**. No fabrication, no "probably," no "best guess."

This is the entire credibility argument for the platform. A PR that adds an uncited claim will be requested to either source it or remove it. If you can't find a source, mark the cert with `status: "Requires Verification"` in frontmatter and add a note in the `## Research Status` section — that's accepted and surfaces in the admin panel for follow-up.

Acceptable primary sources:

- **Cert facts (cost, duration, code, retirement)** — the issuing vendor's own credentials page (e.g. `aws.amazon.com/certification/...`, `learn.microsoft.com/credentials/...`, `comptia.org/certifications/...`)
- **Salary data (USD)** — Robert Half Salary Guide, Glassdoor, levels.fyi, BLS Occupational Outlook Handbook, PayScale, IAPP Privacy Salary Survey, PMI Salary Survey
- **Salary data (ZAR)** — Heidrick & Struggles SA IT Survey, PayScale ZAR, local Robert Half / Michael Page reports
- **Job market** — LinkedIn Jobs cert-filtered search, Indeed, BLS
- **Compliance / mandates** — DoD 8140 manual, NIST publications, ISO standards, EU regulations

Not acceptable:

- "I think it's around $X" / "approximately Y%"
- Reddit threads as a sole source
- Unsourced "industry knowledge"
- AI-generated stats without verification against a real source

### 2. South African (ZAR) salary data is non-optional in cert paths

About half the platform's audience is in South Africa. Every salary figure in a `Certification_Roadmaps/*.md` file must include both USD and ZAR with sources. ZAR baseline is **R18 per $1 USD** (April 2026). Update the baseline note if you reauthor with a more current rate.

### 3. Aesthetic is locked

The site uses **Fraunces** (display) + **IBM Plex Sans** (body) + **JetBrains Mono** (code/data). Inter, Roboto, Arial, and system-default fonts are not used. The 3-column docs shell with vendor-color row accents is the locked layout. UI changes that break the design language will be reverted.

If you want to propose an aesthetic change, open a discussion first — don't open a PR with the change baked in.

### 4. Anonymous engagement only

The public site does not have a signup / login flow. Likes, stars, comments, and feedback are anonymous and IP-hashed. Don't add features that require user accounts on the public site.

---

## How to contribute (the fork-and-PR workflow)

You **cannot push directly** to this repo — that's by design. Random pushes are blocked. To contribute:

1. **Fork the repo** on GitHub — click the "Fork" button at <https://github.com/impie0/itcareerroadmap>. This creates a copy under your own account.

2. **Clone your fork locally**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/itcareerroadmap.git
   cd itcareerroadmap
   ```

3. **Add the original as upstream** so you can sync future changes:
   ```bash
   git remote add upstream https://github.com/impie0/itcareerroadmap.git
   ```

4. **Create a branch** for your change. Use a descriptive name:
   ```bash
   git checkout -b fix/comptia-sec-plus-renewal-date
   git checkout -b add/cisco-encor-cert
   git checkout -b cert-path/google-cloud
   ```

5. **Make your change** (see "Adding content" below or the README's *Adding new content* section).

6. **Commit with a clear message** explaining the *why*:
   ```bash
   git commit -m "Fix Security+ renewal period: 3 years (was 2) — comptia.org/continuing-education"
   ```

7. **Push to your fork**:
   ```bash
   git push origin fix/comptia-sec-plus-renewal-date
   ```

8. **Open a Pull Request** on GitHub — go to your fork, click "Compare & pull request." Fill in the PR template that appears.

9. **Wait for review.** A maintainer will review your PR. They may:
   - Merge it (yay)
   - Request changes (push more commits to the same branch — the PR updates automatically)
   - Decline it with a reason

10. **Sync your fork** with upstream periodically so you don't drift:
    ```bash
    git fetch upstream
    git checkout main
    git merge upstream/main
    git push origin main
    ```

---

## Adding content

### Adding a cert correction or a new cert

1. Find the right vendor folder under `Deep Dive/Certifications/`. Create one if your vendor isn't there.
2. Copy `Deep Dive/_CERT_TEMPLATE.md` to `{Vendor}/{Vendor}_{Code}_{ShortName}.md`.
3. Fill in every `{...}` placeholder with verified, cited content.
4. Set `domain:` to one of the 12 canonical domain strings from `lib/domain-normalizer.ts` (or any synonym — the normaliser handles 137 variants).
5. Set `level:` to `Entry`, `Associate`, `Professional`, or `Expert`.
6. Run the audit to verify the file parses cleanly:
   ```bash
   node scripts/audit-cert-folders.mjs
   ```
7. (Optional) `npm install && npm run dev` to render the cert locally.
8. Open a PR with title like `Add Cisco CCNP ENCOR (350-401)`.

### Adding a new vendor certification path

1. Copy `Deep Dive/Certification_Roadmaps/_ROADMAP_TEMPLATE.md` to `{Vendor}_Roadmap.md`.
2. Use **CompTIA_Roadmap.md** as your reference — it's the canonical structure (8 frontmatter keys, 13 `##` sections, `### Level N:` and `### Path N:` subsections).
3. Use Mermaid for every diagram (no ASCII art):
   ```mermaid
   flowchart TD
       L1[Entry · A+ 220-1201/1202] --> L2[Pro · Network+ N10-009]
   ```
4. Include both USD and ZAR salary figures with sources.
5. Run the strict structure check:
   ```bash
   node scripts/verify-roadmap-structure.mjs
   ```
6. Open a PR.

### Comprehensive research prompt

If you're using an AI agent to author a `_Roadmap.md` file, the project has a tested research prompt in the build log. Open an issue and we'll share it.

---

## Code contributions

### Local setup

```bash
npm install
cp .env.example .env
# Set DATABASE_URL to a local Postgres or use docker compose up db
npx prisma db push
npm run dev
```

App on <http://localhost:3000>.

### Before opening a PR

```bash
npm run typecheck    # tsc --noEmit
npm run lint
```

Both must pass.

### Commit style

- Short, present tense, factual: `Fix Security+ renewal period to 3 years` not `Fixed it`
- One logical change per commit where possible
- Reference an issue if relevant: `Fix #42: AZ-104 cost is $165, not $99`

### What we won't merge

- Changes that introduce uncited claims (citation rule violation)
- Aesthetic changes that bypass the design language without prior discussion
- Adding analytics, tracking, third-party scripts, or signup flows on the public site
- Reformatting / mass-rewrites of files that bury substantive changes in noise
- Code changes that disable existing typescript strictness or lint rules

---

## Reporting issues

Use the issue templates at <https://github.com/impie0/itcareerroadmap/issues/new/choose>:

- **Bug report** — something broken on the site or in the build
- **Cert correction** — a fact in a `Certifications/*.md` or `Certification_Roadmaps/*.md` is wrong or out-of-date
- **Feature request** — a feature you'd like to see

Please search existing issues first.

---

## Code of conduct

By participating in this project, you agree to abide by the [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md). In short: be respectful, be patient, focus on what is best for the project.

---

## Licensing of contributions

By submitting a contribution, you agree that:

- **Code contributions** (anything outside `Deep Dive/` and `wiki/`) are licensed under MIT — see [LICENSE](./LICENSE)
- **Content contributions** (changes inside `Deep Dive/` or `wiki/`) are licensed under CC BY-NC-SA 4.0 — see [LICENSE-CONTENT.md](./LICENSE-CONTENT.md)

You retain copyright to your contributions; the licenses simply grant the project (and its forks) permission to use them.

---

## Questions

Open a discussion at <https://github.com/impie0/itcareerroadmap/discussions> or an issue. Thanks for contributing.
