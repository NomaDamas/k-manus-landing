# Required Site Disclosures (전자상거래법)

Korean e-commerce law (전자상거래 등에서의 소비자보호에 관한 법률) requires
certain identity and contact disclosures to be visible on a site that sells
goods or services online. PG reviewers check these against the live site as
part of onboarding. This document lists each required item and where it is
verified.

| # | Disclosure (한글) | English | Verified on | Status |
| --- | --- | --- | --- | --- |
| 1 | 상호 | Business (trade) name | Business Information page (`/business-info`) + site footer | pending (blocked: #6) |
| 2 | 대표자 성명 | Representative's name | Business Information page | pending (blocked: #6) |
| 3 | 사업자등록번호 | Business registration number | Business Information page | pending (blocked: #6) |
| 4 | 통신판매업 신고번호 | Mail-order sales registration number | Business Information page | pending (blocked: #6) |
| 5 | 사업장 소재지 주소 | Registered business address | Business Information page | pending (blocked: #6) |
| 6 | 전화번호 | Phone / customer support number | Business Information page | pending (blocked: #6) |
| 7 | 전자우편주소 | Support e-mail address | Business Information page | pending (blocked: #6) |
| 8 | 개인정보관리책임자 | Personal information protection officer (name/contact) | Privacy Policy (`/legal/privacy`) | pending (blocked: #4) |
| 9 | 이용약관 링크 | Link to Terms of Service | Site footer → `/legal/terms` | pending (blocked: #3, #1) |
| 10 | 개인정보처리방침 링크 | Link to Privacy Policy | Site footer → `/legal/privacy` | pending (blocked: #4, #1) |
| 11 | 환불/청약철회 정책 | Refund / withdrawal policy | `/legal/refund`, linked from Pricing and checkout | pending (blocked: #5, #2) |

## How to verify before submission

1. Load each route in the table on the **production** domain, not a preview
   deploy.
2. Confirm the disclosure text matches the registered business entity's
   actual details (registration number, address, etc.) — do not rely on
   draft/placeholder values making it to production.
3. Confirm the footer link pattern (items 9–11) is present on every public
   page, not only the home page.
4. Update the Status column above to `verified (YYYY-MM-DD)` once checked,
   and flip the corresponding checklist item in
   [`checklist.md`](./checklist.md#3-required-site-disclosures-전자상거래법).

## Reference

- Repo page map: see the root [README](../../README.md#page-map) for the
  canonical route list these disclosures depend on.
