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
| `docs/pg-submission/` | PG review submission checklist and supporting docs (payment flow, test-account instructions, required site disclosures). See [`docs/pg-submission/README.md`](./docs/pg-submission/README.md). |

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

PG review assets under `content/pg-review-assets/` and the submission bundle
under `docs/pg-submission/` are operational onboarding materials and are not
part of the public page map.

## Licensing

This repository uses a split license:

- **Code** is licensed under the [MIT License](./LICENSE).
- **Legal and marketing content** is **All Rights Reserved** unless otherwise
  stated. See [CONTENT-LICENSE.md](./CONTENT-LICENSE.md).

See [AGENTS.md](./AGENTS.md) for contribution guidance.
