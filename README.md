# Danny Akhmad Zulfikar — Portfolio

Personal portfolio and online resume built with Next.js App Router, TypeScript, and Tailwind CSS. Content is static and maintained in one typed configuration file.

## Requirements

- Node.js 20.9 or newer
- npm

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks and production

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

The site can deploy to Vercel with its default Next.js settings. Set `NEXT_PUBLIC_SITE_URL` to the final canonical origin (for example, `https://portfolio.example.com`) before deployment. Without it, the app omits absolute sitemap entries and canonical URL base rather than publishing a guessed domain.

## Routes

- `/` — portfolio sections
- `/projects` — published projects with category filters
- `/projects/[slug]` — static project case studies
- `/resume` — online resume with browser Print / Save as PDF
- `/sitemap.xml` and `/robots.txt` — generated SEO routes

## Updating content

Edit [`src/data/portfolio.ts`](src/data/portfolio.ts). Profile, skills, work history, education, projects, and public links live there.

- Keep unknown personal details unset (`null` or empty arrays); components hide optional links.
- Set `profile.availability` only when status is confirmed.
- Add work history and education only after verifying each entry.
- Publish a project by setting `published: true` and adding its verified description. Unpublished project records stay out of listing, detail routes, and sitemap.
- Add project-specific technology tags only when confirmed. `technologies`, `demoUrl`, `githubUrl`, and case-study sections are optional.
- Case studies support problem, solution, role, features, technical challenges, screenshots, and outcome. Empty fields stay hidden.
- Put verified screenshots under `public/projects/` and reference them with paths such as `/projects/bimbinganku-dashboard.png`. Current project artwork is abstract CSS illustration, not a product screenshot.
- Add the final PDF to `public/` only after it exists. The current resume button uses the browser print dialog; it does not link to a placeholder PDF.

There is no language switcher until Indonesian translations are complete. No email, LinkedIn, employer history, education, project metrics, production claims, demos, or screenshots were supplied, so none are invented.

## Design and deployment notes

See [`DESIGN.md`](DESIGN.md) for tokens, typography, layout, accessibility, and responsive behavior. Google fonts load through `next/font`; provide network access at build time or replace them with local font files if your deployment environment blocks Google Fonts.
