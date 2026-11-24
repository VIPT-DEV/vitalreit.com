# Working rules (human oversight)

- Work only on a feature branch named `phase-N-<short-name>`. Never commit to `main` or `staging`.
- One phase per branch and per PR. Do not start the next phase until told to.
- Before writing code, post a short plan (files to create or change, packages to add) and wait for approval.
- Do not add a dependency that is not named in the plan without asking first.
- Never merge PRs, deploy, push to protected branches, or change settings in GitHub, Strapi Cloud or Vercel.
- Never put secrets in code or commits. Use `.env` (git-ignored) and keep `.env.example` up to date with names only.
- Every PR description includes: what changed, why, how to test it manually (exact steps and URLs), and anything you were unsure about.
- Keep PRs small enough to review in one sitting (aim for under ~400 changed lines, excluding generated files and seed data).
- Run lint, type-check and build for both apps before opening the PR, and paste the results in the PR.
- Scripts that write data (seed, import) must have a `--dry-run` mode that is the default, and must be safe to re-run (upsert by slug).
- If something in this plan looks wrong or unclear, stop and ask rather than guess.
