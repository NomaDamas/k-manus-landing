# PG Review Submission Bundle

This directory is the working bundle used to prepare K-manus's payment
gateway (PG, 전자결제) onboarding review submission. It collects the
checklist, supporting documents, and asset manifest a PG reviewer (e.g.
PortOne / 이니시스 / 토스페이먼츠-class Korean PG, or Stripe for
international rails) needs to approve K-manus for live payment processing.

It does **not** replace the legal/marketing content itself — those documents
live in `content/legal/`, `content/pricing/`, and `content/business-info/`
(see the repo root [README](../../README.md) page map) and are only
*referenced* from here.

## Status: dependency on sibling pages

This bundle was authored while the following sibling pages were still
in-progress backlog items in this repo:

| Page | Intended route | Tracking issue |
| --- | --- | --- |
| Landing (home) | `/` | [#1](https://github.com/NomaDamas/k-manus-landing/issues/1) |
| Pricing | `/pricing` | [#2](https://github.com/NomaDamas/k-manus-landing/issues/2) |
| Terms of Service | `/legal/terms` | [#3](https://github.com/NomaDamas/k-manus-landing/issues/3) |
| Privacy Policy | `/legal/privacy` | [#4](https://github.com/NomaDamas/k-manus-landing/issues/4) |
| Refund Policy | `/legal/refund` | [#5](https://github.com/NomaDamas/k-manus-landing/issues/5) |
| Business Information | `/business-info` | [#6](https://github.com/NomaDamas/k-manus-landing/issues/6) |

The checklist and asset manifest below reference these routes as the
**intended, canonical URLs** per the page map in the repo README. Until the
corresponding issue is merged, the checklist item stays `[ ]` unpublished and
the asset manifest entry stays `pending`. Whoever assembles the final
submission (see [`checklist.md`](./checklist.md)) must re-verify each route is
live and re-capture screenshots against production, not against this draft.

## Why a markdown bundle instead of a live `app/pg-review/` route

The issue that tracks this bundle suggested either a generated document
bundle or a live index page under `app/pg-review/`. At the time of writing,
`app/` has no application framework scaffolded yet (no `package.json`, no
build tooling — see [#1](https://github.com/NomaDamas/k-manus-landing/issues/1)
"Marketing landing page build," which is still open). Standing up a route
before the app framework exists would mean inventing throwaway scaffolding
disconnected from whatever the landing app eventually adopts.

This bundle is therefore a **generated document bundle** under
`docs/pg-submission/`. It is deliberately framework-agnostic so it survives
the eventual `app/` build-out unchanged. Once #1 lands, a thin
`app/pg-review/` index route can simply render these markdown files (or a
compiled version of them) for internal reviewers — that is a follow-up, not
part of this bundle.

## Contents

| File | Purpose |
| --- | --- |
| [`checklist.md`](./checklist.md) | Master submission checklist: every item a PG reviewer will ask for, its source, and its status. |
| [`payment-flow.md`](./payment-flow.md) | Narrative + diagram of the end-to-end payment flow for reviewers who need to understand how a charge is initiated, authorized, and reconciled. |
| [`test-account.md`](./test-account.md) | How a reviewer obtains sandbox/test credentials and test-card numbers to exercise the flow themselves. |
| [`site-disclosures.md`](./site-disclosures.md) | Korean e-commerce law (전자상거래법) required site disclosures and where each one is verified on the live site. |
| [`../../content/pg-review-assets/README.md`](../../content/pg-review-assets/README.md) | Manifest of the actual confidential assets (screenshots, PDFs, signed forms) to be dropped into `content/pg-review-assets/` before submission. |

## How to use this bundle

1. Confirm every sibling page in the dependency table above is merged and
   deployed.
2. Walk [`checklist.md`](./checklist.md) top to bottom, checking off each item
   as its live URL or asset is verified.
3. Capture the screenshots and documents listed in
   [`content/pg-review-assets/README.md`](../../content/pg-review-assets/README.md).
   These are confidential, PG-eyes-only files (business registration
   numbers, checkout screenshots, signed forms) and this repository is
   **public** — do **not** commit the actual files to git. `.gitignore`
   excludes `content/pg-review-assets/*` (other than that directory's
   manifest README) as a backstop, but treat that as defense-in-depth, not
   the primary control: store the real files in a secure location outside
   this repo and only track the manifest/status here, the same way
   [`test-account.md`](./test-account.md) handles filled-in sandbox
   credentials.
4. Package the checked-off `checklist.md`, the narrative docs in this folder,
   and the assets directory into the submission format the target PG
   requires (portal upload, email, or partner-manager handoff).
