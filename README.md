# AASIOM Technologies — Website

Official website for AASIOM Technologies Private Limited.

## Status

In development — Stage 1 establishes the repository structure and project foundation only. Page design, final content, shared navigation, and production components will be implemented in later approved stages.

## Stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint
- npm
- Vercel-compatible deployment

## Local setup

Requirements:

- Node.js 20.9 or newer
- npm

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Run validation:

```bash
npm run lint
npm run typecheck
npm run build
```

Start a production build locally:

```bash
npm run start
```

## Approved routes

- `/`
- `/about`
- `/product`
- `/product/anvira`
- `/strategic-review`
- `/contact`
- `/privacy-policy`
- `/terms-of-use`

## Folder structure

```text
app/              Route layouts, pages, and global CSS
components/       Reusable React components
content/          Website content kept separate from page layout
  products/       Product-specific content for ANVIRA and future products
public/           Static images, icons, and approved brand logos
styles/           Shared tokens, typography, base styles, and utilities
lib/              Shared utilities and integrations
types/            Shared TypeScript types
```

Routing and page layout live in `app/`. Website and product content are managed separately under `content/`, allowing future products to be added without restructuring the shared routing or component foundation.

## Design system

Brand primitive tokens define the named AASIOM identity palette. Semantic tokens define how those colors are used across interface backgrounds, surfaces, text, borders, actions, and statuses. Components should use semantic tokens; direct brand-primitive usage is reserved for justified brand-specific visuals.

## Team

AASIOM Technologies
