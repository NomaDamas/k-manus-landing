# k-manus-landing

Public landing and legal repository for **K-manus** (NomaDamas).

This repository holds the marketing, legal, business-information, pricing, and
payment-gateway review assets for the K-manus product line. It is the source of
truth for customer-facing text and legal documents consumed by the landing page
application.

## What lives here

| Path | Purpose |
| --- | --- |
| `app/` | Landing page application entry/shell (placeholder). |
| `content/pricing/` | Pricing page content. |
| `content/legal/terms/` | Terms of Service. |
| `content/legal/privacy/` | Privacy Policy. |
| `content/legal/refund/` | Refund Policy. |
| `content/business-info/` | Company identity, contact, and jurisdiction info. |
| `content/pg-review-assets/` | Payment gateway onboarding review materials (confidential). |

## Page Map

```
k-manus-landing
├── Landing (home)            -> app/
├── Pricing                   -> content/pricing/
├── Terms of Service          -> content/legal/terms/
├── Privacy Policy            -> content/legal/privacy/
├── Refund Policy             -> content/legal/refund/
└── Business Information      -> content/business-info/
```

PG review assets under `content/pg-review-assets/` are operational onboarding
materials and are not part of the public page map.

## Pricing page (`app/pricing/`)

`app/pricing/` is a Next.js (App Router) route implementing the public
pricing page: Free / Personal / Pro / Team plan cards, a monthly/annual
billing toggle, a feature comparison table, and an FAQ. Plan data lives in
`lib/pricing-plans.ts` and is kept conceptually aligned with the plan catalog
in `k-manus-cloud/packages/subscription/src/plans.ts` (plan ids, K-credit
grants, feature flags). KRW prices are placeholder example values only —
clearly labeled as such in the UI — pending a finalized PortOne/Stripe price
list.

This route was built directly on `main` before NomaDamas/k-manus-landing#1
(marketing home page) was merged, so it duplicates the minimal Next.js
scaffold (`package.json`, `next.config.ts`, `tsconfig.json`,
`eslint.config.mjs`, `app/tokens.css`, `app/globals.css`, `app/layout.tsx`,
`lib/site.ts`, `components/Container.tsx`, `components/Header.tsx`,
`components/Footer.tsx`, `components/ThemeToggle.tsx`) byte-for-byte from
that PR's branch so the two stay visually identical and merge without
drift. Once #1 merges, only `app/pricing/`, `components/pricing/`, and
`lib/pricing-plans.ts` should remain as this PR's unique contribution; the
duplicated scaffold files can be dropped in favor of #1's copies.

Local commands:

```
pnpm install
pnpm run lint    # eslint .
pnpm run build   # next build -> static export to out/
```

## Licensing

This repository uses a split license:

- **Code** is licensed under the [MIT License](./LICENSE).
- **Legal and marketing content** is **All Rights Reserved** unless otherwise
  stated. See [CONTENT-LICENSE.md](./CONTENT-LICENSE.md).

See [AGENTS.md](./AGENTS.md) for contribution guidance.
