# vitalreit.com

Monorepo for the Vital Infrastructure website.

| Folder | App | Local URL | Hosted on |
| --- | --- | --- | --- |
| [`cms/`](cms/) | Strapi 5 (TypeScript) | http://localhost:1337/admin | Strapi Cloud (base directory `/cms`) |
| [`web/`](web/) | Next.js App Router (TypeScript) | http://localhost:3000 | Vercel (root directory `/web`) |

The two apps are independent: each has its own `package.json`, `package-lock.json` and `node_modules`. The root `package.json` only holds convenience scripts and has no dependencies, so there is nothing to install at the root.

## Prerequisites

- Node.js 22 or 24 (LTS). Strapi supports Node 22–26.
- npm 10 or later.

> **npm 12 note:** npm 12 blocks dependency install scripts unless they are approved. The approvals Strapi needs (`better-sqlite3`, `esbuild`, `@swc/core`) are recorded under `allowScripts` in `cms/package.json`, so `npm install` works without prompts. If an upgrade changes those versions, run `npm install-scripts ls` in `cms/` and approve the new versions.

## First-time setup

```sh
# 1. Install dependencies for both apps
npm run install:all

# 2. Create the Strapi env file and fill in each secret
cp cms/.env.example cms/.env
#    Generate a value for each secret (APP_KEYS needs two, comma-separated):
#    node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"

# 3. Create the Next.js env file
cp web/.env.example web/.env.local
#    STRAPI_URL=http://localhost:1337
#    STRAPI_API_TOKEN, REVALIDATE_SECRET and PREVIEW_SECRET can stay empty until later phases.
```

`.env` and `.env.local` are git-ignored. Never commit real values; keep the `.env.example` files up to date with variable names only.

## Running locally

Run each app in its own terminal.

**Strapi** (from `cms/`, or `npm run dev:cms` from the root):

```sh
cd cms
npm run develop
```

Open http://localhost:1337/admin. On the first run, Strapi asks you to create a local admin user. Local data is stored in SQLite at `cms/.tmp/data.db` (git-ignored). To start from an empty database, stop Strapi and delete that file.

**Next.js** (from `web/`, or `npm run dev:web` from the root):

```sh
cd web
npm run dev
```

Open http://localhost:3000.

## Lint, type-check and build

From the repo root (runs both apps, `cms` first):

```sh
npm run lint
npm run typecheck
npm run build
npm run check      # all three
```

Or run `npm run lint`, `npm run typecheck` or `npm run build` inside `cms/` or `web/` for a single app.

## Working rules

See [`CLAUDE.md`](CLAUDE.md). Work happens on `phase-N-<short-name>` branches, through pull requests that are reviewed and merged by hand.
