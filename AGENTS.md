# Agent Guide — dolshoi-landing

## Repository Purpose

`dolshoi-landing` is the **public landing and legal repository** for the Dolshoi
product line (NomaDamas). It hosts:

- Marketing and product landing page content.
- Legal documents (Terms of Service, Privacy Policy, Refund Policy).
- Business information (company identity, contact, jurisdiction).
- Pricing content.
- PG (Payment Gateway) review assets used during payment processor onboarding.

This repository is **content- and asset-oriented**. It is not the application
runtime; the production landing page application lives elsewhere and consumes the
content published here.

## Licensing Model (read before contributing)

This repository uses a **split license**:

- **Code** (build scripts, templates, configuration, tooling) is licensed under
  the [MIT License](./LICENSE).
- **Legal and marketing content** (landing copy, pricing text, legal documents,
  business information, PG review assets, and any other creative/legal text or
  media) is **All Rights Reserved** unless explicitly stated otherwise in the
  file. See [CONTENT-LICENSE.md](./CONTENT-LICENSE.md) for details.

When adding a file, determine which category it falls into. Legal/marketing
content must NOT be marked MIT. Code must NOT be marked All Rights Reserved.

## PG Review Assets

`content/pg-review-assets/` holds materials submitted to payment gateways
during onboarding review (business verification, product descriptions, policy
references, screenshots). These assets are confidential operational materials,
not public marketing content, and must not be published outside the review
workflow without approval.

## Directory Map

```
app/                         Landing page application entry/shell (placeholder)
content/
  pricing/                   Pricing page content
  legal/
    terms/                   Terms of Service
    privacy/                 Privacy Policy
    refund/                  Refund Policy
  business-info/             Company identity, contact, jurisdiction
  pg-review-assets/          Payment gateway onboarding review materials
```

## Contribution Rules

- Do not commit secrets, API keys, or customer data.
- Keep legal text changes reviewable; legal documents should be edited
  deliberately and ideally reviewed by a human before merge.
- Placeholders (`.gitkeep`) mark intended directory structure — do not remove
  them unless the directory is being populated with real content.
- This repo is for Dolshoi landing/legal preparation only. Application
  implementation lives in other repositories.
