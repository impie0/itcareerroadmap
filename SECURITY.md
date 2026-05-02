# Security Policy

## Reporting a vulnerability

If you discover a security vulnerability in the IT Career Roadmap codebase or hosted instance, please report it **privately** — do not open a public GitHub issue.

Use one of these channels:

- **GitHub Security Advisories** (preferred): <https://github.com/impie0/itcareerroadmap/security/advisories/new>
- **Email**: francois.jacobs12@gmail.com (subject line: `SECURITY: <short description>`)

Please include:

- A description of the vulnerability
- Steps to reproduce
- The version / commit hash you found it on
- Any proof-of-concept code, if applicable
- Your assessment of impact (data exposure, privilege escalation, denial of service, etc.)

## What to expect

- **Acknowledgement** within 72 hours
- **Triage and assessment** within 7 days
- **Fix and disclosure timeline** discussed with you, typically within 30 days for high-severity issues

You will be credited in the security advisory unless you prefer to remain anonymous.

## Scope

In scope:

- The application code (`app/`, `components/`, `lib/`, `prisma/`, `middleware.ts`, etc.)
- The Docker compose configuration
- Authentication / session handling in the admin container
- API routes (`/api/likes`, `/api/comments`, `/api/stars`, `/api/feedback`, etc.)
- Rate-limiting / IP-hashing logic
- Build and deployment scripts

Out of scope:

- Issues in third-party dependencies (report those upstream)
- Vulnerabilities requiring physical access to the host
- Social engineering of maintainers
- DoS via expensive but legitimate requests (we rate-limit, not banish)

## Hardening practices already in place

- Postgres password, IP hash salt, session secret, admin password hash are all `.env`-only and never committed
- Admin container is bound to `127.0.0.1:3010` — unreachable from the LAN
- Public engagement (likes / comments / stars / feedback) is anonymous, IP-hashed (no plaintext IP storage)
- Rate-limiting per IP-hash on every public POST endpoint
- Profanity filter on comment bodies before DB write
- Admin auth uses scrypt password hashing + HMAC-signed HttpOnly + SameSite=Strict cookies
- Login page rate-limited 3 attempts per 5 minutes per IP
- Admin actions logged to `AdminAudit` with 90-day retention (auto-pruned at container start)

## Out-of-scope: content authenticity

This project's [citation rule](./CONTRIBUTING.md#1-the-citation-rule-load-bearing) is documented; if you find an uncited claim or a stale source URL in `Deep Dive/`, that's a content correction (open a regular issue), not a security vulnerability.
