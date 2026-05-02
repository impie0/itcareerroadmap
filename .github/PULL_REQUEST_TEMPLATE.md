<!--
Thanks for opening a PR! Please fill in the sections below so reviewers
have the context they need. Delete sections that don't apply.
-->

## Summary

<!-- One-paragraph description of the change. What problem does this PR solve? -->

## Type of change

- [ ] Cert correction (fact, code, fee, retirement date, URL)
- [ ] New cert added (`Deep Dive/Certifications/{Vendor}/...`)
- [ ] New vendor certification path (`Deep Dive/Certification_Roadmaps/...`)
- [ ] New deep-dive content (Domain / Ecosystem / Industry / Specialty Role / Topic)
- [ ] Code: bug fix
- [ ] Code: new feature
- [ ] Code: refactor (no behaviour change)
- [ ] Documentation
- [ ] Other (describe below)

## Citation check

<!-- For any cert / salary / market claim added or changed: -->

- [ ] Every new fact has a primary source URL in the file body
- [ ] Salary figures include both USD and ZAR (for Certification_Roadmaps files)
- [ ] Vendor source URLs are specific (cert page, not a generic vendor homepage)
- [ ] No fabricated data (placeholder codes use `status: "Requires Verification"`)

## Local checks

- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes
- [ ] For content PRs: `node scripts/audit-cert-folders.mjs` shows the new file parses cleanly
- [ ] For roadmap PRs: `node scripts/verify-roadmap-structure.mjs` shows the file conforms

## Screenshots / context

<!-- If this is a UI change, drop screenshots here. -->

## Related issue

<!-- Closes #123, Fixes #456 -->
