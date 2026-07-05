# PG Review Assets — Manifest

**Confidential.** This directory is the local working location for the
actual files (screenshots, PDFs, signed forms) submitted to a payment
gateway during onboarding review. It is operational material, not public
marketing content — see [`CONTENT-LICENSE.md`](../../CONTENT-LICENSE.md) and
[`AGENTS.md`](../../AGENTS.md#pg-review-assets). This repository is
**public**: the real files must never be committed to git. `.gitignore`
excludes everything in this directory except this README as a backstop, but
do not rely on that alone — treat "never commit these to this repo" as the
rule, not the gitignore entry.

This README is the manifest: it lists every file this directory is expected
to contain, where each one comes from, and its current status. The narrative
checklist that drives this manifest lives in
[`docs/pg-submission/checklist.md`](../../docs/pg-submission/checklist.md) —
keep the two in sync.

## Naming convention

`NN-short-description.ext`, zero-padded, in the same order as the sections
below (e.g. `01-landing-home.png`, `05-refund-policy.pdf`).

## Manifest

| File | Source | Status |
| --- | --- | --- |
| `01-landing-home.png` | Screenshot of `/` (home) | pending — blocked on [#1](https://github.com/NomaDamas/k-manus-landing/issues/1) |
| `02-pricing.png` | Screenshot of `/pricing`, all tiers visible | pending — blocked on [#2](https://github.com/NomaDamas/k-manus-landing/issues/2) |
| `03-terms-of-service.pdf` | Rendered/exported `/legal/terms` | pending — blocked on [#3](https://github.com/NomaDamas/k-manus-landing/issues/3) |
| `04-privacy-policy.pdf` | Rendered/exported `/legal/privacy` | pending — blocked on [#4](https://github.com/NomaDamas/k-manus-landing/issues/4) |
| `05-refund-policy.pdf` | Rendered/exported `/legal/refund` | pending — blocked on [#5](https://github.com/NomaDamas/k-manus-landing/issues/5) |
| `06-business-info.png` | Screenshot of `/business-info` | pending — blocked on [#6](https://github.com/NomaDamas/k-manus-landing/issues/6) |
| `07-business-registration-certificate.pdf` | Business registration certificate (사업자등록증) | pending — sourced from company records, not this repo |
| `08-mail-order-sales-registration.pdf` | Mail-order sales registration (통신판매업 신고증), if applicable | pending — sourced from company records, not this repo |
| `09-payment-flow-diagram.png` | Exported diagram matching [`docs/pg-submission/payment-flow.md`](../../docs/pg-submission/payment-flow.md) | pending — export once payment-flow doc is final |
| `10-checkout-screenshot.png` | Screenshot of the checkout/payment step in the product | pending — requires a working checkout UI |

## Adding an asset

1. Confirm the corresponding checklist item in
   [`docs/pg-submission/checklist.md`](../../docs/pg-submission/checklist.md)
   is unblocked (its source route is live, or the source document exists).
2. Capture the asset following the naming convention above.
3. Drop the file into this directory locally (`.gitignore` keeps it out of
   git; do not force-add it).
4. Update the Status column in this table to `captured (YYYY-MM-DD)`.
5. Check off the matching item in `checklist.md`.

## Handling

- Do not publish these assets outside the PG review workflow.
- Never commit real sandbox credentials, customer data, or registration
  numbers/PII to this repository — this directory is a local staging area
  only; the actual files travel to the PG via the submission package, not
  via git.
