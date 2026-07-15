# PG Review Submission Checklist

Master checklist for Dolshoi's payment gateway onboarding review. Check off
each item only after verifying it against the **live** site — screenshots
must be recaptured at submission time, not reused from earlier drafts.

Legend: `[ ]` not ready · `[x]` verified and captured · `(blocked: #N)` waiting
on the linked tracking issue.

## 1. Business identity & legal entity

- [ ] Business registration certificate (사업자등록증) on file with PG.
- [ ] Mail-order sales registration (통신판매업 신고증), if required for the
      settlement bank/PG combination.
- [ ] Business Information page live and matches registered entity details.
      Route: `/business-info` (blocked: #6)

## 2. Public site pages (screenshots + live URLs)

- [ ] Landing / home page. Route: `/` (blocked: #1)
- [ ] Pricing page — all tiers (Free, Personal, Pro, Team) and cloud
      computer/workstation add-on pricing visible. Route: `/pricing`
      (blocked: #2)
- [ ] Terms of Service, dated and versioned. Route: `/legal/terms`
      (blocked: #3)
- [ ] Privacy Policy, covering personal data, vault contents, and cloud
      workstation data handling. Route: `/legal/privacy` (blocked: #4)
- [ ] Refund Policy, stating conditions, timelines, and how a customer
      requests a refund. Route: `/legal/refund` (blocked: #5)
- [ ] Business Information / customer support contact page, with a working
      support contact (email or form). Route: `/business-info` (blocked: #6)

## 3. Required site disclosures (전자상거래법)

See [`site-disclosures.md`](./site-disclosures.md) for the itemized list
(상호, 대표자, 사업자등록번호, 통신판매업신고번호, 주소, 전화번호, e-mail,
개인정보관리책임자) and where each is verified on the live site.

- [ ] All required disclosures present and legible on the Business
      Information page.
- [ ] Disclosures are consistent across footer, business-info page, and ToS.

## 4. Product & payment flow description

- [ ] Product description: what Dolshoi is, who buys it, and what a paid
      subscription unlocks (desktop agent app + optional cloud workstation
      credits). Summarized in [`payment-flow.md`](./payment-flow.md).
- [ ] Payment flow narrative + diagram: checkout → authorization → webhook
      confirmation → credit/entitlement grant → renewal/cancellation. See
      [`payment-flow.md`](./payment-flow.md).
- [ ] Subscription tiers and one-time/recurring billing behavior documented
      (maps to the Pricing page, `/pricing`).
- [ ] Refund/chargeback handling path documented and consistent with the
      Refund Policy page.

## 5. Test / sandbox access for the reviewer

- [ ] Sandbox environment URL and login instructions provided. See
      [`test-account.md`](./test-account.md).
- [ ] Test card numbers / test payment method instructions for each
      supported rail (Korean domestic PG + Stripe international, if in
      scope) provided.
- [ ] A reviewer can complete a full purchase → refund cycle in sandbox
      without engineering assistance.

## 6. Assets manifest

- [ ] All screenshots and supporting files listed in
      [`content/pg-review-assets/README.md`](../../content/pg-review-assets/README.md)
      are present, current, and named per the manifest's naming convention.

## 7. Final packaging

- [ ] Submission format matches what the target PG requires (portal upload
      vs. email vs. partner-manager handoff).
- [ ] A named internal owner has reviewed the full bundle before it is sent.
- [ ] Submission date and PG contact recorded (append to the bottom of this
      file once sent, for audit trail).

---

## Submission log

| Date | PG | Submitted by | Outcome |
| --- | --- | --- | --- |
| _(none yet)_ | | | |
