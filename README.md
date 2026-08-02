# AASIOM Technologies — Website

Official website for AASIOM Technologies Private Limited.

## Live Website

**Production**
https://new-website-nine-delta.vercel.app

## Status

In development — Stages 1 through 4A establish the project foundation, design system, global shell, approved brand palette, and complete typed content architecture. Page implementation and the reusable component library remain future approved stages.

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

## Content architecture

The approved architecture controls route hierarchy, section placement, and reusable structures; the approved content specification controls wording. Page components must import page copy from `content/`, shared company details must come from `content/company.ts`, and every new product must be registered in `content/products/index.ts`. Team content requires a separate approved source, the Contact “What happens next” block remains pending, and legal placeholders may only be replaced after legal review.

## Team

AASIOM Technologies
