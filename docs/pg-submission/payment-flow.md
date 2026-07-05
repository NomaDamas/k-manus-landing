# Payment Flow Description

This document is the plain-language payment flow narrative a PG reviewer
reads alongside the [checklist](./checklist.md). It describes what K-manus
sells, how a charge is initiated, and how it is confirmed and reconciled. It
intentionally avoids internal implementation detail (service names, code
paths) that a PG reviewer does not need — it describes the *customer-visible*
and *settlement-relevant* flow only.

## What is being sold

K-manus is a desktop AI-agent application. Customers pay for one of two
things, both shown on the Pricing page (`/pricing`, tracked by
[#2](https://github.com/NomaDamas/k-manus-landing/issues/2)):

1. **A subscription tier** (Free, Personal, Pro, Team) — recurring billing,
   monthly or annual, that unlocks product features and a monthly allotment
   of usage.
2. **Cloud computer / workstation credits** — a metered add-on for customers
   who run agent workloads on hosted cloud workstations instead of, or in
   addition to, their local machine. Credits are consumed as usage occurs
   and can be purchased as top-ups.

Both are billed in Korean Won for domestic customers; international
customers may be billed in USD.

## End-to-end flow

```
 1. Customer selects a plan/top-up on the Pricing page
                    │
                    ▼
 2. Checkout: customer enters payment method
    (Korean domestic card/simple-pay rail, or
    international card via Stripe)
                    │
                    ▼
 3. Payment gateway authorizes the charge
                    │
                    ▼
 4. PG sends an async webhook/callback confirming
    the authorization result
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
   Success: entitlement   Failure: customer is
   granted (subscription  shown a retry/failure
   active, or credits     message; no
   added to account)      entitlement granted
                    │
                    ▼
 5. Customer can use the product immediately;
    usage against subscription allotment or
    credits is metered continuously
                    │
                    ▼
 6. Recurring subscriptions: PG/billing rail
    attempts renewal charge on the billing
    anniversary, following the same
    authorize → webhook → entitlement steps
                    │
                    ▼
 7. Refunds / cancellations: initiated by the
    customer per the Refund Policy (`/legal/refund`)
    or by support on the customer's behalf; refund
    request is sent back to the PG, and entitlement
    is adjusted once the refund is confirmed
```

## Two supported payment rails

K-manus supports charging through more than one processor behind a single
internal payment abstraction, so the customer-facing flow above is identical
regardless of which rail actually settles the charge:

- **Korean domestic PG** (PortOne-integrated) — primary rail for Won-billed
  domestic customers; supports Korean cards and common simple-pay methods.
- **Stripe** — used for USD-billed international customers.

Webhook signatures from each processor are verified before any entitlement
is granted, so a forged or replayed callback cannot unlock paid features.

## Reconciliation

Every successful charge and refund is recorded against the customer's
account ledger, which tracks subscription status and any cloud-credit
balance. This ledger is the source of truth the support team uses to answer
"did my payment go through" / "why was I charged" questions, and it is what
gets reconciled against the PG's own settlement reports.

## Related documents

- [`test-account.md`](./test-account.md) — how a reviewer can run this flow
  themselves in a sandbox.
- Pricing page (`/pricing`) — the tiers and prices referenced above.
- Refund Policy (`/legal/refund`) — customer-facing refund terms this flow
  must stay consistent with.
