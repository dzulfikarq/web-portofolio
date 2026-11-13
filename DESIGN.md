# Design system

Direction: **Premium Hybrid — Professional Meets Creative**. Light-first editorial portfolio with violet accents, restrained code-inspired visuals, generous spacing, and simple motion. No portrait or AI-generated likeness is used. Project thumbnails are original abstract CSS artwork until real screenshots are supplied.

## Tokens

| Token | Light | Dark |
| --- | --- | --- |
| Primary | `#7C3AED` | `#A78BFA` |
| Primary light | `#A78BFA` | `#C4B5FD` |
| Background | `#F8FAFC` | `#0B1120` |
| Surface | `#FFFFFF` | `#111827` |
| Main text | `#0F172A` | `#F1F5F9` |
| Muted text | `#64748B` | `#94A3B8` |
| Border | `#E2E8F0` | `#263247` |

Tokens are CSS custom properties in `src/app/globals.css`; Tailwind v4 is configured through `@tailwindcss/postcss`.

## Type

- **Sora** — display headings and brand marks.
- **Inter** — body, navigation, buttons, labels.
- Headings use tight tracking and fluid `clamp()` sizes. Body text remains at least 12px in compact mobile components and has relaxed line-height.
- Fonts load with `next/font/google` and `display: swap`.

## Layout and components

- Main content max width: `1200px`; desktop gutters: `32px`, tablet: `24px`, mobile: `18px`.
- Section spacing: about `106px` desktop, `72px` mobile.
- Cards use 15–25px radii, subtle borders, restrained shadows, and short hover transitions.
- Violet signals links, emphasis, and active states; decorative gradients stay low contrast.
- Hero uses a CSS code-editor illustration instead of a portrait. Project thumbnails are explicitly treated as abstract artwork, not screenshots.
- Shared content is typed in `src/data/portfolio.ts`; sections render only populated optional fields.

## Responsive behavior

- **1024px and below:** tighter shell and hero spacing; project grid reduces to two columns.
- **820px and below:** hero becomes stacked, navigation becomes a touch-friendly menu, and project grid uses two columns.
- **600px and below:** single-column sections, custom compact hero/editor composition, stacked project cards, and simplified resume layout.
- The shell and grids use min-width-safe tracks; long content wraps instead of forcing viewport width.

## Interaction and accessibility

- Sticky navigation with `IntersectionObserver` section indication; native anchors provide scrolling.
- Theme preference follows the OS until explicitly saved in local storage; user can toggle light/dark.
- Motion reveals respect `prefers-reduced-motion`; CSS transitions and smooth scrolling are disabled for reduced-motion users.
- Navigation, filters, theme control, and print action have labels and keyboard focus styles. A skip link and semantic headings are included.
- Resume print rules use A4 page size, hide site chrome, remove web-card decoration, and keep entries from splitting where possible.

## Content boundaries

No mockup file was present in the repository when implementation started, so screenshot-level comparison was not possible. Unknown employment, education, email, LinkedIn, availability, project stacks, demos, and outcomes remain unpublished until validated.
