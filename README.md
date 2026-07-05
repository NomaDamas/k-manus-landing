# k-manus-landing

Public landing and legal repository for **K-manus** (NomaDamas).

This repository holds the marketing, legal, business-information, pricing, and
payment-gateway review assets for the K-manus product line. It is the source of
truth for customer-facing text and legal documents consumed by the landing page
application.

## What lives here

| Path | Purpose |
| --- | --- |
| `app/` | Next.js (App Router) landing/legal site. The repo root is the Next.js project root; `app/` holds routes. |
| `components/` | Shared design-system components (`Header`, `Footer`, `Container`, `ThemeToggle`, section blocks). Reuse these from every new route instead of forking new UI. |
| `lib/site.ts` | Shared nav/footer link map + site metadata. Add new routes' links here so nav/footer stay in sync. |
| `content/pricing/` | Pricing page content. |
| `content/legal/terms/` | Terms of Service. |
| `content/legal/privacy/` | Privacy Policy. |
| `content/legal/refund/` | Refund Policy. |
| `content/business-info/` | Company identity, contact, and jurisdiction info. |
| `content/pg-review-assets/` | Payment gateway onboarding review materials (confidential). |

## Page Map

```
k-manus-landing
├── Landing (home)            -> app/page.tsx
├── Pricing                   -> content/pricing/        (rendered by app/pricing/)
├── Terms of Service          -> content/legal/terms/     (rendered by app/legal/terms/, issue #3)
├── Privacy Policy            -> content/legal/privacy/   (rendered by app/legal/privacy/, issue #4)
├── Refund Policy             -> content/legal/refund/    (rendered by app/legal/refund/, issue #5)
└── Business Information      -> content/business-info/   (rendered by app/business-info/)
```

PG review assets under `content/pg-review-assets/` are operational onboarding
materials and are not part of the public page map.

## Shared design system

The home page (`app/page.tsx`) owns the design system every other route should
reuse:

- **Tokens**: `app/tokens.css` (imported once from `app/globals.css`, which
  the root layout loads). Mirrors the K-manus brand tokens in the main
  `k-manus` repo's `apps/desktop/src/styles/tokens.css` (ink/jjok/dan/cheongja
  accents, light/dark) as CSS custom properties on `:root` — no `[data-km]`
  scoping needed here since this site has no app shell. New pages should read
  `var(--acc)`, `var(--text)`, `var(--sub)`, `var(--surface)`, `var(--line)`,
  `var(--radius-*)`, etc. rather than hardcoding colors.
- **Font**: Pretendard Variable, bundled locally via the `pretendard` npm
  package (`pretendard/dist/web/variable/pretendardvariable.css`, imported in
  `app/layout.tsx`) — no CDN fetch at runtime, matching how the desktop app
  loads it.
- **Layout primitives**: `components/Container.tsx` (max-width content
  wrapper), `components/Header.tsx` / `components/Footer.tsx` (already render
  on every route via the root layout — do not re-render them in child
  routes).
- **Nav/footer links**: add new route paths to `lib/site.ts`
  (`primaryNav` / `legalNav` / `footerProductNav`) instead of hardcoding
  `<Link>` targets elsewhere.
- **Theme**: `components/ThemeToggle.tsx` toggles `data-theme` on `<html>`
  and persists to `localStorage`; `app/tokens.css` reacts to both that
  attribute and `prefers-color-scheme`.

### Local dev

```
pnpm install
pnpm dev      # http://localhost:3000
pnpm lint
pnpm build    # static export to out/ (next.config.ts sets output: "export")
```

## Pricing page (`app/pricing/`)

`app/pricing/` is a Next.js (App Router) route implementing the public
pricing page: Free / Personal / Pro / Team plan cards, a monthly/annual
billing toggle, a feature comparison table, and an FAQ. Plan data lives in
`lib/pricing-plans.ts` and is kept conceptually aligned with the plan catalog
in `k-manus-cloud/packages/subscription/src/plans.ts` (plan ids, K-credit
grants, feature flags). KRW prices are placeholder example values only —
clearly labeled as such in the UI — pending a finalized PortOne/Stripe price
list.

## Licensing

This repository uses a split license:

- **Code** is licensed under the [MIT License](./LICENSE).
- **Legal and marketing content** is **All Rights Reserved** unless otherwise
  stated. See [CONTENT-LICENSE.md](./CONTENT-LICENSE.md).

See [AGENTS.md](./AGENTS.md) for contribution guidance.
