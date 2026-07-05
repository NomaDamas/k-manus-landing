# Test / Sandbox Account Instructions

PG reviewers typically require the ability to exercise a full purchase
(and, ideally, refund) cycle themselves before approving live processing.
This document is the placeholder/template for those instructions. It must be
filled in with real values by whoever owns the sandbox environment before a
submission is sent — do **not** send this file with placeholder values still
in it.

## What the reviewer needs

- [ ] A sandbox/staging URL for the product (or the pricing/checkout page,
      at minimum) that is functionally identical to production but talks to
      each PG's test/sandbox mode instead of live settlement.
- [ ] A test login (or "no login required" sandbox checkout link).
- [ ] Test payment method values for each supported rail:
  - Korean domestic PG (PortOne-integrated) test card number(s), expiry,
    CVC, and any test-mode simple-pay instructions.
  - Stripe test card number(s) (e.g. Stripe's published `4242 4242 4242
    4242`-style test cards) for the international rail.
- [ ] Instructions for triggering a refund in sandbox, so the reviewer can
    verify the Refund Policy (`/legal/refund`) matches actual behavior.
- [ ] A named engineering/support contact if the reviewer hits an issue
    exercising the flow.

## Template to fill in before submission

```
Sandbox URL:            <fill in>
Sandbox login:          <fill in, or "none required">
Domestic PG test card:  <fill in — obtain from PG's sandbox test-card docs>
Stripe test card:       4242 4242 4242 4242 (any future expiry, any CVC)
Refund trigger steps:   <fill in>
Contact for issues:     <fill in — name, email>
Sandbox available:      <date range, if time-limited>
```

## Notes

- Never share production credentials or real customer data as "test"
  access. Sandbox/test-mode credentials only.
- If the sandbox environment is not yet provisioned when this bundle is
  otherwise ready, note that explicitly in the submission rather than
  guessing at values — most PGs will accept a short delay to provision
  sandbox access over receiving instructions that don't work.
- Once filled in, treat this file as confidential (same handling as
  [`content/pg-review-assets/`](../../content/pg-review-assets/README.md)) —
  do not commit real sandbox credentials to this repository. Keep the
  filled-in version in the PG-facing submission package only, outside git.
