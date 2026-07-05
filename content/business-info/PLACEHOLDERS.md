# Business info — pre-launch placeholder checklist

`content/business-info/business-info.ts` drives both the `/business-info`
page and the mandatory footer disclosure (`components/Footer.tsx`). Every
field below is currently a **structural placeholder**, not real registered
information, because NomaDamas has not yet completed business registration
(사업자등록) or mail-order-sales registration (통신판매업 신고) for the
K-manus product line. Korean e-commerce law (전자상거래 등에서의
소비자보호에 관한 법률 및 관련 시행령) requires a 통신판매업자 to disclose
accurate registered business identity and contact information on every page
before offering goods/services for payment — **do not accept real payments
until every item in this list is resolved.**

## Must fill in before accepting real payments

| Field | Where it appears | How to obtain the real value |
| --- | --- | --- |
| 상호(회사명) | Footer, `/business-info` | Business registration certificate (사업자등록증) issued after registering the company/sole proprietorship. |
| 대표자 | Footer, `/business-info` | Business registration certificate. |
| 사업자등록번호 | Footer, `/business-info` | Issued by the local tax office (세무서) or via Hometax (홈택스) on registration completion. |
| 통신판매업신고번호 | Footer, `/business-info` | Filed via Gov24 (정부24) or the local 시·군·구청 after business registration; requires a business bank account and, for online payment, a PG (payment gateway) contract in progress or completed. Do not enable checkout before this is issued (unless a documented statutory exemption applies — confirm with counsel). |
| 업태 / 종목 | `/business-info` | Business registration certificate. |
| 사업장 주소 | Footer, `/business-info` | Business registration certificate (registered business address). |
| 전화 (대표 전화번호) | Footer, `/business-info` | Actual staffed support/contact number. |
| 이메일 (대표) | `/business-info` | Confirm the mailbox exists and is monitored before publishing. |
| 개인정보보호책임자 (성명/직책/이메일) | `/business-info` | Must be the **same person** named in the Privacy Policy (`content/legal/privacy`, issue #4) — keep the two in sync. |
| 결제대행사(PG) 상태 | `/business-info` | Update once PortOne / Stripe merchant onboarding is complete; do not enable live checkout before onboarding review passes. |

## Recommended to confirm (not strictly legally mandatory, but referenced as commitments to users)

| Field | Where it appears | Notes |
| --- | --- | --- |
| 고객센터 이메일 (`support@k-manus.ai`) | `/business-info` support section | Confirm mailbox is live; decide whether billing inquiries route here or to the `billing@k-manus.ai` address referenced in the refund policy (issue #5) — keep consistent. |
| 온라인 문의 폼 | `/business-info` support section | Currently shows "준비 중" with no link. Add the real URL once a support-form page/tool exists; do not link a placeholder URL. |
| 고객센터 전화번호 | `/business-info` support section | Only needed if phone support will actually be staffed. |
| 운영 시간 (`support.hours`) | `/business-info` support section | Replace with the operator's actual staffed hours. |
| 응답 목표/SLA (`support.slaNote`) | `/business-info` support section | Currently a draft target ("영업일 기준 1~2일"), not a binding SLA. Replace with the operator's actual committed response time, or keep as a soft goal but remove "placeholder" language once confirmed. |
| 웹사이트 호스팅 표시 | `/business-info` | Update once production hosting infra is finalized. |

## How to update

1. Edit the relevant `value`, `placeholder` (set to `false` once real), and
   `helpText` fields in `content/business-info/business-info.ts`. The page
   and footer both read from this single file, so there is nothing else to
   edit for the disclosed values themselves.
2. Once **every** field in the "must fill in" table above is real and
   `placeholder: false`, change `businessInfo.status` from `"draft"` to
   `"final"` to remove the placeholder banner on `/business-info`.
3. Re-run `pnpm build` and `pnpm lint` and visually check `/business-info`
   and the footer on at least one other page before deploying.
