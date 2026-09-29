# Savyl Scott Rodrigues — Personal Portfolio

A production-ready editorial technology portfolio for Savyl Scott Rodrigues. It presents real projects, education, internship exposure, skills, training, career direction, and contact information without invented content.

## Projects

- [ATLAS — Network Intelligence & Diagnostics](https://github.com/savyll/atlas-network-intelligence): the featured Windows desktop application. Its real Overview screenshot is included at `public/projects/atlas-overview.png`, copied from the ATLAS repository's `docs/atlas-overview.png`.
- [2D Graphics Editor in C](https://github.com/savyll/2d-graphics-editor-c): a secondary C programming project.

Project content is maintained in `src/config/site.ts`; the layout is in `src/components/sections/projects.tsx`.

## Technology stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React
- Next.js font and metadata APIs

## Local development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Production build

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

## Production URL

Set `NEXT_PUBLIC_SITE_URL` to the final public HTTPS origin in Vercel before the production build. A blank or missing value keeps local and preview environments non-indexable and omits canonical/social-image URLs rather than inventing a domain.

The variable controls the canonical URL, Open Graph and Twitter image URLs, Person structured-data URL, `robots.txt`, and `sitemap.xml`. See `.env.example` for the expected key.

## Vercel readiness

The project uses the standard Next.js build pipeline and requires no custom deployment command. Preserve the existing Vercel project (`personal-portfolio`) and production domain, [savylscott.vercel.app](https://savylscott.vercel.app). Set `NEXT_PUBLIC_SITE_URL=https://savylscott.vercel.app` in the Production environment. Connect this repository to that existing project for Git deployments; do not create a replacement Vercel project. No analytics, tracking scripts, runtime external font requests, or additional services are required.

## Project structure

```text
src/
├── app/                 # App Router entry points, metadata, and global styles
├── components/
│   ├── layout/          # Navbar, footer, and page container
│   ├── sections/        # Editorial homepage sections and shared section primitives
│   └── ui/              # Buttons, cards, badges, dividers, and panels
├── config/              # Site-wide labels, navigation, and metadata copy
└── lib/                 # Small shared utilities
```

Tailwind CSS v4 is configured through CSS-first tokens in `src/app/globals.css`. The homepage remains primarily server-rendered; only the sticky mobile navigation and lightweight IntersectionObserver reveal behavior use client-side JavaScript.
