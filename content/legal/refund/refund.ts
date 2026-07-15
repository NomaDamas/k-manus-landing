import type { LegalDocumentContent } from "@/components/legal/LegalDocument";

/**
 * 돌쇠 Refund Policy (draft) -- Korean e-commerce law (전자상거래 등에서의
 * 소비자보호에 관한 법률, "전자상거래법") aware, covering both subscription
 * (정기결제) plans and K-credit purchases.
 *
 * 검토 필요 / DRAFT -- not legal advice. This content has not been reviewed
 * by counsel and must not be treated as a final, binding policy until a
 * licensed Korean attorney signs off (see `status: "draft"` below, which
 * drives the banner rendered by `LegalDocument`).
 *
 * Source: 돌쇠 preparation plan pending-approval.md section 7, item
 * "[docs] Refund policy draft" (issue #5). Reuses the shared `LegalDocument`
 * rendering contract introduced by issue #3 (terms of service) so all legal
 * pages (#3-#7) look and behave the same way.
 *
 * This copy must stay consistent with the actual billing implementation in
 * dolshoi-cloud (see that repo's issue #10, "Invoice and refund/cancellation
 * flow"), specifically:
 * - Refunds are executed through the `PaymentProvider.refund()` seam
 *   (`packages/payment-adapters/{portone,stripe}`), which supports partial
 *   refunds (an explicit amount, distinct from a full refund of the whole
 *   charge).
 * - Subscription cancellation defaults to `atPeriodEnd: true`: the
 *   subscription keeps working until the current paid period ends and
 *   simply does not renew, with no refund for that period either way
 *   (`packages/subscription/src/service.ts`, `CancelOptions.atPeriodEnd`).
 * - K-credit refunds are booked as a new, non-expiring grant lot on the
 *   credit ledger (`packages/billing/src/ledger/credit-ledger.ts`,
 *   `refund()`), separate from whatever lots the original purchase/grant
 *   created, so a refund never inherits another lot's expiry.
 * - Do not weaken the "consumed credits/service already used are generally
 *   not refundable" framing below without updating the actual ledger and
 *   subscription logic to match.
 */
export const refundPolicy: LegalDocumentContent = {
  title: "돌쇠 환불정책",
  documentId: "refund-policy",
  version: "0.1.0-draft",
  effectiveDate: "미정 (법무 검토 후 확정)",
  lastUpdated: "2026-07-06",
  status: "draft",
  summary:
    "노마다스(NomaDamas, 이하 '회사')는 「전자상거래 등에서의 소비자보호에 관한 법률」(이하 '전자상거래법') 등 관계 법령에 따라 돌쇠 구독형 서비스 및 K-크레딧 구매에 대한 청약철회, 환불, 정기결제 해지 기준과 절차를 이 환불정책에서 안내합니다. 본 문서는 초안이며 법무 검토 전까지는 최종 정책으로 사용할 수 없습니다.",
  clauses: [
    {
      id: "purpose",
      title: "목적",
      paragraphs: [
        "이 환불정책은 이용자가 돌쇠 구독 플랜(정기결제) 및 K-크레딧을 유상으로 구매한 경우, 청약철회·해지·환불의 조건, 절차, 처리 기간을 명확히 하여 이용자의 권익을 보호하고 회사와 이용자 간의 분쟁을 예방하는 것을 목적으로 합니다.",
        "이 정책은 돌쇠 이용약관 및 개인정보처리방침과 함께 적용되며, 전자상거래법, 「콘텐츠산업 진흥법」, 「할부거래에 관한 법률」 등 관계 법령이 이 정책보다 이용자에게 유리하게 정하고 있는 경우에는 관계 법령이 우선합니다.",
      ],
    },
    {
      id: "scope",
      title: "적용 범위",
      paragraphs: [
        "이 정책은 다음의 유상 거래에 적용됩니다.",
      ],
      list: [
        "구독형 서비스 결제: 월간/연간 정기결제(구독) 플랜의 최초 결제 및 갱신 결제.",
        "K-크레딧 구매: 모델 라우터를 통한 AI 요청 처리, 스킬 실행 등에 사용되는 K-크레딧의 충전(단건 구매).",
        "이 정책은 무료 플랜, 무료로 지급된 K-크레딧(프로모션, 가입 축하 크레딧 등 대가 없이 지급된 크레딧)에는 적용되지 않으며, 무료 지급분은 환불 대상이 아닙니다.",
      ],
    },
    {
      id: "cooling-off",
      title: "청약철회(구매 취소)",
      paragraphs: [
        "이용자는 전자상거래법 제17조에 따라 결제일(계약서를 받은 날과 결제일이 다른 경우 나중의 날)로부터 7일 이내에는 별도의 위약금이나 손해배상 없이 청약을 철회할 수 있습니다.",
        "다만 전자상거래법 제17조 제2항에 따라 다음 각 호에 해당하는 경우에는 청약철회가 제한될 수 있습니다.",
      ],
      list: [
        "이용자가 구독 서비스 이용을 개시하였거나 K-크레딧의 전부 또는 일부를 이미 소비하는 등, 용역의 제공이 개시된 경우로서 그 개시에 대해 이용자가 사전에 동의한 경우 (돌쇠는 결제 시 '구매 즉시 서비스/크레딧 이용이 개시될 수 있으며, 이 경우 청약철회가 제한될 수 있음'에 대한 동의를 받습니다).",
        "이용자의 책임 있는 사유로 재화등이 멸실되거나 훼손된 경우 (디지털 재화 특성상 해당 사항이 제한적으로만 적용됩니다).",
        "시간의 경과에 의하여 재판매가 곤란할 정도로 재화등의 가치가 현저히 감소한 경우.",
        "복제가 가능한 재화등의 포장을 훼손한 경우 (다운로드형 소프트웨어 등에 한하며, 돌쇠 데스크톱 앱 자체는 무료 배포이므로 이 사유는 원칙적으로 K-크레딧/구독 결제에는 적용되지 않습니다).",
      ],
    },
    {
      id: "subscription-refund",
      title: "구독(정기결제) 서비스의 해지 및 환불",
      paragraphs: [
        "구독 해지는 원칙적으로 '현재 결제 주기 종료 시점 해지(해지 예약)'로 처리됩니다. 즉 이용자가 해지를 신청한 시점 이후에도 이미 결제된 현재 이용 기간이 끝날 때까지는 서비스를 계속 이용할 수 있고, 다음 결제 주기부터 갱신 결제가 발생하지 않으며, 이 경우 이미 진행 중인 기간에 대해서는 환불이 발생하지 않습니다 (해지 예약 방식이므로 별도의 일할 환불도 없습니다).",
        "다만 결제일로부터 7일 이내이고 구독 서비스를 실질적으로 이용하지 않은 경우(제3조 청약철회 요건을 충족하는 경우)에는 전액 환불됩니다.",
        "결제일로부터 7일 이내이나 이미 구독 서비스를 일부 이용한 경우에는, 이용자가 즉시 해지 및 환불을 요청하면 회사는 이미 이용한 기간에 해당하는 이용요금(일할 계산)을 공제한 나머지 금액을 환불합니다. 일할 계산은 '결제금액 ÷ 결제주기 일수 × 실제 이용 일수'를 결제금액에서 차감하는 방식으로 산정합니다.",
        "정기결제 자체의 오류(중복 결제, 미승인 결제, 회사 귀책의 시스템 오류로 인한 과다 청구 등)로 인한 결제 건은 이용 여부와 무관하게 확인 즉시 전액 환불합니다.",
        "구독 갱신 결제가 이용자의 카드 만료, 잔액 부족 등으로 실패하는 경우 회사는 재시도 후에도 실패가 반복되면 구독을 해지 처리하며, 이는 환불과 무관한 별도의 처리입니다.",
      ],
    },
    {
      id: "credit-refund",
      title: "K-크레딧 구매의 환불",
      paragraphs: [
        "K-크레딧은 구매 즉시 사용 가능한 디지털 재화로, 구매 후 소비(모델 호출, 스킬 실행 등에 사용)되지 않은 잔여 크레딧에 한하여 환불이 가능합니다.",
        "결제일로부터 7일 이내에 요청하는 경우, 해당 구매 건에서 아직 소비되지 않은 크레딧 비율만큼 환불합니다. 산정식은 '환불 금액 = 결제금액 × (미소비 크레딧 수량 ÷ 구매 당시 지급된 크레딧 수량)' 입니다.",
        "이미 소비된 크레딧에 해당하는 금액은 전자상거래법 제17조 제2항이 정하는 '용역이 제공되어 잔존가치가 감소한 경우'에 준하여 환불 대상에서 제외됩니다. 즉 소비된 크레딧은 환불되지 않으며, 이는 크레딧 유상 구매 시 사전 고지 및 동의 대상입니다.",
        "회사의 귀책 사유(모델 라우터 오류, 스킬 실행 실패, 시스템 장애 등)로 인해 정상적으로 결과를 받지 못한 채 크레딧이 차감된 경우에는 이용자의 요청 없이도 회사가 확인 후 동일 수량의 크레딧을 이용자 계정에 즉시 재적립(환급)합니다. 이 재적립분은 원 구매 크레딧의 만료 정책과 무관하게 만료되지 않는 크레딧으로 지급됩니다.",
        "이용자가 크레딧 재적립 대신 현금 환불을 원하는 경우, 제7조(환불 신청 방법)에 따라 별도로 요청할 수 있으며, 이 경우 위 재적립분에 상응하는 금액을 결제수단으로 환불합니다.",
        "구독 플랜에 포함되어 매월/매년 자동 지급되는 K-크레딧(정기 지급분)은 별도로 유상 구매한 것이 아니므로 이 조가 아닌 제4조(구독 환불)의 기준을 따르며, 그 자체로는 개별 환불 대상이 아닙니다.",
      ],
    },
    {
      id: "non-refundable",
      title: "환불이 제한되는 경우",
      paragraphs: [
        "다음의 경우에는 원칙적으로 환불이 제한됩니다. 다만 관계 법령상 이용자에게 달리 보호되는 권리가 있는 경우는 그에 따릅니다.",
      ],
      list: [
        "이미 소비(사용)된 K-크레딧에 해당하는 금액.",
        "구독 서비스를 정상적으로 이용한 이후, 해지 예약 방식이 아닌 소급 환불을 요구하는 경우.",
        "이용자의 약관 위반(부정 이용, 어뷰징, 계정 공유 등)으로 서비스 이용이 제한·정지된 경우.",
        "무상으로 지급된 프로모션 크레딧, 이벤트 크레딧, 가입 축하 크레딧.",
        "환불 신청일로부터 청약철회 기간(7일)이 이미 경과하였고, 별도의 청약철회 예외 사유(제3조 단서)에도 해당하지 않는 경우.",
      ],
    },
    {
      id: "how-to-request",
      title: "환불 신청 방법",
      paragraphs: [
        "환불(청약철회, 구독 해지, K-크레딧 환불)은 다음의 방법으로 신청할 수 있습니다.",
      ],
      list: [
        "서비스 내 계정 설정 화면의 '구독 관리' 또는 '결제 내역' 메뉴에서 직접 해지·환불 요청.",
        "고객센터 이메일(billing@dolshoi.com, placeholder — 사업자 정보 확정 후 갱신)로 주문번호(결제 식별자), 결제수단, 환불 사유를 기재하여 요청.",
        "이용자가 결제 시 사용한 이메일 또는 계정과 환불 요청자의 신원이 일치하는지 확인하기 위해 회사는 본인 확인을 요청할 수 있습니다.",
      ],
    },
    {
      id: "processing-time",
      title: "환불 처리 기간 및 방법",
      paragraphs: [
        "전자상거래법 제18조에 따라 회사는 이용자의 청약철회 등의 의사표시가 도달한 날부터 3영업일 이내에 이미 지급받은 대금을 환급합니다. 다만 이용자가 결제한 대금의 환급을 지연하는 경우 그 지연기간에 대하여 「전자상거래법 시행령」이 정하는 지연배상금을 지급합니다.",
        "환불은 원칙적으로 이용자가 결제에 사용한 결제수단으로 이루어집니다(예: 신용카드 결제는 카드 승인 취소, 계좌이체는 동일 계좌로 환급). 결제수단으로 환불이 불가능한 특별한 사정이 있는 경우 회사는 이용자와 협의하여 다른 방법(예: 지정 계좌 입금)으로 환불할 수 있습니다.",
        "위 처리 기간은 회사가 환불 승인 및 PG사(결제대행사)에 취소·환불을 요청하는 데 걸리는 기간이며, 카드사·은행 등 금융기관의 실제 입금·승인취소 반영에는 제9조에 안내된 대로 추가 영업일이 소요될 수 있습니다.",
      ],
    },
    {
      id: "partial-refund",
      title: "부분환불(일할 환불) 처리 원칙",
      paragraphs: [
        "이 정책에서 안내하는 일할 계산 환불(제4조 결제일 7일 이내 이용 후 해지, 제5조 미소비 크레딧 비율 환불)은 회사의 결제 시스템에서 전액 환불과 구분된 '부분환불' 요청으로 PG사에 전달되어 처리됩니다.",
        "부분환불이 이루어진 결제 건에 대해 추가로 남은 잔액에 한해서만 후속 환불이 가능하며, 이미 환불된 금액에 대해 중복으로 환불되지 않도록 회사는 결제 건별로 누적 환불 금액을 기록·검증합니다.",
        "부분환불 처리 후에도 해당 결제 건의 영수증·매출전표는 원 결제 금액과 환불 금액이 함께 표시되도록 관리됩니다.",
      ],
    },
    {
      id: "pg-notes",
      title: "결제대행사(PG)별 환불 처리 안내",
      paragraphs: [
        "회사는 결제대행사(PG)로 PortOne(포트원, 국내 카드/간편결제)과 Stripe, Inc.(해외 카드)를 이용하며, 실제 환불 처리는 이용자가 결제에 사용한 PG사를 통해 이루어집니다.",
      ],
      list: [
        "PortOne(국내 결제): 카드사 매입이 완료되기 전(통상 결제 후 하루~이틀 이내)에는 '승인취소'로 처리되어 결제 자체가 취소되며 대금이 청구되지 않거나 즉시 취소됩니다. 매입이 완료된 이후에는 '매입취소(환불)'로 처리되며, 카드사 정책에 따라 통상 영업일 기준 3~5일 내에 카드 승인취소 내역이 반영됩니다. 간편결제(카카오페이, 네이버페이 등) 역시 각 결제수단사의 환불 처리 기간을 따릅니다.",
        "Stripe(해외 결제): Stripe Refund API를 통해 처리되며, 카드사와 발급 국가에 따라 통상 영업일 기준 5~10일이 소요될 수 있습니다. 해외 카드는 환율 변동에 따라 원 결제 금액과 환불 시점의 원화 환산 금액에 차이가 발생할 수 있으며, 이 환율 차이는 카드사 정책에 따르고 회사가 보전하지 않습니다.",
        "PortOne과 Stripe 모두 전액환불과 부분환불(금액을 지정한 환불)을 지원하며, 회사의 결제 시스템은 이 정책에서 정한 일할 계산 결과를 부분환불 금액으로 전달합니다.",
        "정기결제(빌링키/저장된 결제수단을 이용한 자동 갱신 결제)의 해지는 다음 갱신 시점의 자동 청구를 중단시키는 것이며, PG사에 대한 환불 요청과는 별개의 처리입니다.",
      ],
    },
    {
      id: "dispute",
      title: "환불 관련 분쟁 및 문의처",
      paragraphs: [
        "환불 처리 결과에 이의가 있는 이용자는 제7조에 안내된 고객센터를 통해 재문의할 수 있으며, 회사와 이용자 간 환불 관련 분쟁이 원만히 해결되지 않는 경우 다음 기관에 조정을 신청할 수 있습니다.",
      ],
      list: [
        "한국소비자원 소비자상담센터: (국번없이) 1372 (www.ccn.go.kr)",
        "전자거래분쟁조정위원회: (www.ecmc.or.kr)",
        "공정거래위원회: (www.ftc.go.kr)",
      ],
    },
    {
      id: "policy-changes",
      title: "환불정책의 변경",
      paragraphs: [
        "이 환불정책은 시행일로부터 적용되며, 법령 및 정책에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 최소 7일 전부터(이용자 권리의 중요한 변경이 있는 경우 30일 전부터) 서비스 내 공지사항 또는 이메일을 통하여 고지할 것입니다.",
      ],
    },
  ],
};
