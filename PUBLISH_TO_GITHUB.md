# How to publish this to GitHub

Step-by-step. Run from PowerShell at `H:\IT rodmap Blog`.

---

## Step 1 — Verify nothing sensitive is about to be committed

Before you run any git commands, check what would be staged:

```powershell
cd "H:\IT rodmap Blog"
git init
git status
```

You should see a long list of files. Scan it for anything that should NOT be public:

- ❌ `.env` — should NOT appear (it's gitignored)
- ❌ `.claude/`, `.obsidian/` — should NOT appear (gitignored)
- ❌ `Deep Dive Test/`, `Deep_Dive_BACKUP_2026-05-01/` — should NOT appear
- ❌ `Deep Dive/AUDIT_REPORT*.md`, `Deep Dive/_audit_*.md`, `Deep Dive/SESSION_STATUS_*.md`, `Deep Dive/CERT_LIST*.md` — should NOT appear

If any of those show up, the `.gitignore` isn't catching them — stop and tell me. Otherwise continue.

Quick sanity check:

```powershell
git check-ignore -v .env
git check-ignore -v ".claude"
git check-ignore -v "Deep_Dive_BACKUP_2026-05-01"
```

Each command should print the gitignore line that's catching the file.

---

## Step 2 — Stage and make the first commit

```powershell
git add .
git commit -m "Initial public release of IT Career Roadmap

- Next.js 15 + Postgres + Docker stack
- 630 cert deep-dive files across 76 vendors
- 76 vendor certification paths with Mermaid diagrams
- 12 canonical domain columns + 56 vendor ecosystems
- Anonymous engagement (likes / stars / comments / feedback)
- Admin panel in a separate container, bound to 127.0.0.1
- MIT license for code, CC BY-NC-SA 4.0 for research content"
```

---

## Step 3 — Connect to GitHub and push

You already created the repo at `https://github.com/impie0/itcareerroadmap`.

```powershell
git branch -M main
git remote add origin https://github.com/impie0/itcareerroadmap.git
git push -u origin main
```

GitHub will prompt for credentials. Use a **Personal Access Token (PAT)** as the password — passwords are deprecated. To create one:

1. Go to <https://github.com/settings/tokens?type=beta>
2. Click "Generate new token"
3. Name: "itcareerroadmap push"
4. Repository access: Only select repositories → `itcareerroadmap`
5. Permissions: Repository → Contents → Read and write
6. Click Generate. Copy the token. Use it as the password when git prompts.

After this push, refresh <https://github.com/impie0/itcareerroadmap> — your code is live.

---

## Step 4 — Lock down the `main` branch (so even you can't accidentally push)

This is the "people can't override the original" protection. Even with full collaborator access, no one (including you) can push directly to `main` once this is set.

1. Go to <https://github.com/impie0/itcareerroadmap/settings/branches>
2. Click "Add branch ruleset" (or "Add classic branch protection rule")
3. Name: `Protect main`
4. Target branches: `main`
5. Enable these rules:
   - ☑ **Require a pull request before merging**
     - Required approvals: `1` (you reviewing your own PRs is fine for solo work; or set to `0` and just review in the PR diff)
   - ☑ **Require status checks to pass before merging** (only if you add CI later — leave off for now)
   - ☑ **Block force pushes**
   - ☑ **Restrict deletions** (so nobody can delete the branch)
6. Save.

From now on, even you have to: make a branch → open a PR → merge it. Direct `git push` to `main` is rejected.

For a solo workflow this feels strict, but it forces you to:

- See the diff before merging (catches accidents)
- Build a clean commit history
- Get a second pair of eyes if you ever add a collaborator

---

## Step 5 — Repo settings to flip in the GitHub UI

At <https://github.com/impie0/itcareerroadmap/settings>:

### General
- ☑ Issues — enabled
- ☑ Discussions — enabled (optional but recommended for Q&A)
- ☑ Sponsorships — only if you want them
- ☐ Wikis — disabled (the repo is the wiki)
- ☐ Projects — your call

### Pull Requests
- ☐ Allow merge commits → leave OFF
- ☑ Allow squash merging → ON
- ☐ Allow rebase merging → off
- ☑ Always suggest updating pull request branches
- ☑ Automatically delete head branches (after merge) — keeps things tidy

### Security and analysis
- ☑ Dependency graph
- ☑ Dependabot alerts
- ☑ Dependabot security updates
- ☑ Secret scanning (catches accidentally committed API keys)
- ☑ Push protection (rejects pushes that contain detected secrets)

---

## Step 6 — Add a public description and topics

At the top of <https://github.com/impie0/itcareerroadmap>:

**Description**:
> Self-hostable, Docker-containerized career-identification platform for IT professionals. 630+ verified certifications, 76 vendor certification paths with Mermaid diagrams, citation-required research wiki.

**Website**: `https://itcareerroadmap.com` (or wherever you host it)

**Topics** (click "Add topics"):
`certification` `it-career` `nextjs` `tailwindcss` `prisma` `docker` `self-hosted` `mermaid` `roadmap` `career-development` `cybersecurity` `cloud` `comptia` `aws` `azure`

---

## Step 7 — Future workflow (your day-to-day)

Once the protection is in place, your normal workflow becomes:

```powershell
# Sync from GitHub (in case anyone made changes upstream)
git checkout main
git pull

# Start a new piece of work
git checkout -b add-akamai-roadmap

# Make changes, commit
git add .
git commit -m "Add Akamai certification path"

# Push the branch
git push -u origin add-akamai-roadmap

# Open a PR via the GitHub UI (link is printed by `git push`)
# Review the diff, merge it via the GitHub UI

# Back to main, sync again
git checkout main
git pull
git branch -d add-akamai-roadmap   # delete local branch (already deleted on GitHub by auto-delete-head-branches)
```

---

## Step 8 — When someone wants to contribute

They:

1. Fork the repo (one-click button on GitHub)
2. Clone their fork: `git clone https://github.com/their-username/itcareerroadmap.git`
3. Create a branch: `git checkout -b fix-az-104-cost`
4. Make changes, commit, push to their fork
5. Open a Pull Request from their fork to your `main`

You:

1. Get an email notification
2. Review the PR — see the diff, leave comments
3. Merge or close

They cannot push to your repo. The only path their changes can reach `main` is via a PR you merge.

---

## What's NOT pushed (verify with `git status` before commit)

The .gitignore I wrote excludes:

- `.env` — your real secrets
- `.claude/`, `.obsidian/` — local editor state
- `Deep Dive Test/`, `Deep_Dive_BACKUP_2026-05-01/` — backup snapshots
- `Deep Dive/AUDIT_REPORT*.md`, `_audit_*.md`, `SESSION_STATUS_*.md`, `CERT_LIST*.md` — internal authoring docs
- `node_modules/`, `.next/`, build artifacts
- `backups/`, `*.sql`, `*.sql.gz` — database dumps (may contain visitor IPs / comments)
- `_NOTE_OPEN_ONEDRIVE_VERSION.txt` — internal sync note

If you ever want to share one of these later, you can `git add -f filename` to force-add it.

---

## If you want to review what would be pushed without actually pushing

```powershell
git ls-files --cached | wc -l         # how many files would be committed
git ls-files --cached | head -50      # first 50 paths
git ls-files --cached | grep -i env   # confirm no .env files
```
