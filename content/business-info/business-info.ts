/**
 * K-manus business (사업자) identity, jurisdiction, and customer-support
 * contact information.
 *
 * Source: K-manus preparation plan pending-approval.md section 7, item
 * "[docs] Business info and customer support contact page" (issue #6).
 *
 * STATUS: pre-launch draft. NomaDamas has not yet completed 사업자등록
 * (business registration) or 통신판매업 신고 (mail-order-sales
 * registration) for the K-manus product line as a standalone commercial
 * offering, so every value below marked `placeholder: true` is a
 * structural stand-in, not a real registered value. Every such field MUST
 * be replaced with the operator's actual registered information before
 * accepting real payments in Korea -- see `PLACEHOLDERS.md` in this same
 * directory for the authoritative pre-launch checklist.
 *
 * Both the `/business-info` page (components/business-info/BusinessInfoDocument)
 * and the mandatory footer disclosure (components/Footer.tsx) import this
 * single file, so a real value only needs to be filled in once here.
 */

export type BusinessInfoField = {
  /** Field label as it should read on the page, e.g. "상호". */
  label: string;
  value: string;
  /** true => this is a structural placeholder, not a real registered value. */
  placeholder: boolean;
  /** Short guidance on where the operator obtains the real value. */
  helpText?: string;
};

export type BusinessInfoGroup = {
  id: string;
  title: string;
  fields: BusinessInfoField[];
};

export type SupportChannel = {
  id: string;
  label: string;
  value: string;
  href?: string;
  placeholder: boolean;
  helpText?: string;
};

export const businessInfo = {
  title: "사업자 정보 및 고객센터",
  documentId: "business-info",
  lastUpdated: "2026-07-06",
  /** "draft" renders the pre-launch placeholder banner; "final" hides it. */
  status: "draft" as const,
  summary:
    "「전자상거래 등에서의 소비자보호에 관한 법률」 등 관계 법령에 따라 K-manus 서비스를 제공하는 사업자의 신원, 소재지, 연락처 및 고객센터 이용 안내를 게시합니다. 이 페이지의 굵게 표시된 항목은 아직 실제 등록 정보로 채워지지 않은 자리표시자(placeholder)입니다.",

  groups: [
    {
      id: "identity",
      title: "사업자 신원 정보",
      fields: [
        {
          label: "상호(회사명)",
          value: "노마다스 (NomaDamas) — 상호 확정 및 사업자등록 전 임시 표기",
          placeholder: true,
          helpText:
            "법인 설립(또는 개인사업자 등록) 후 사업자등록증에 기재된 정식 상호로 교체.",
        },
        {
          label: "대표자",
          value: "[대표자 성명 미기재]",
          placeholder: true,
          helpText: "사업자등록증에 기재된 대표자 성명으로 교체.",
        },
        {
          label: "사업자등록번호",
          value: "000-00-00000",
          placeholder: true,
          helpText:
            "관할 세무서 또는 홈택스에서 사업자등록 완료 후 발급되는 10자리 번호로 교체.",
        },
        {
          label: "통신판매업신고번호",
          value: "제0000-지역-00000호",
          placeholder: true,
          helpText:
            "정부24(또는 관할 시·군·구청)에서 통신판매업 신고 완료 후 발급되는 신고번호로 교체. 전자상거래법상 통신판매업자는 신고 의무가 있으며(일부 소액/일시 판매자는 면제 요건 확인 필요), 신고 전에는 유상 결제를 개시해서는 안 됨.",
        },
        {
          label: "업태 / 종목",
          value: "[업태 미기재] / [종목 미기재]",
          placeholder: true,
          helpText:
            "사업자등록증에 기재된 업태(예: 서비스업, 정보통신업)와 종목(예: 소프트웨어 개발 및 공급)으로 교체.",
        },
      ],
    },
    {
      id: "location-contact",
      title: "소재지 및 연락처",
      fields: [
        {
          label: "사업장 주소",
          value: "[사업장 소재지 주소 미기재]",
          placeholder: true,
          helpText: "사업자등록증상 사업장 주소(도로명 주소)로 교체.",
        },
        {
          label: "전화",
          value: "[대표 전화번호 미기재]",
          placeholder: true,
          helpText: "실제 응대 가능한 대표 전화번호로 교체.",
        },
        {
          label: "이메일",
          value: "contact@k-manus.ai (placeholder — 도메인/메일함 확정 후 갱신)",
          placeholder: true,
          helpText:
            "실제로 수신·응대 가능한 대표 이메일 주소로 교체하고, 해당 메일함이 실제로 개설되어 있는지 확인.",
        },
        {
          label: "팩스",
          value: "해당 없음",
          placeholder: false,
        },
      ],
    },
    {
      id: "privacy-officer",
      title: "개인정보보호책임자",
      fields: [
        {
          label: "성명",
          value: "[개인정보보호책임자 성명 미기재]",
          placeholder: true,
          helpText:
            "개인정보처리방침(제9조 등)에 지정된 개인정보보호책임자와 반드시 동일 인물로 일치시킬 것.",
        },
        {
          label: "직책",
          value: "[직책 미기재]",
          placeholder: true,
        },
        {
          label: "이메일",
          value: "privacy@k-manus.ai (placeholder — 도메인/메일함 확정 후 갱신)",
          placeholder: true,
          helpText: "실제로 수신·응대 가능한 개인정보 문의 전용 메일 주소로 교체.",
        },
      ],
    },
    {
      id: "hosting",
      title: "호스팅 및 결제대행",
      fields: [
        {
          label: "웹사이트 호스팅",
          value: "Cloudflare Workers / Pages (예정)",
          placeholder: false,
          helpText:
            "인프라 확정 시 실제 호스팅 사업자명으로 갱신 (전자상거래법상 호스팅 제공자 표시 의무 대상인 경우).",
        },
        {
          label: "결제대행사(PG)",
          value: "PortOne(국내), Stripe, Inc.(해외) — 온보딩 심사 진행 예정",
          placeholder: true,
          helpText:
            "PG사 온보딩(가맹점 계약) 완료 후 실제 계약 상태로 갱신. 온보딩 완료 전에는 실 결제를 개시하지 않음.",
        },
      ],
    },
  ] satisfies BusinessInfoGroup[],

  support: {
    intro:
      "서비스 이용, 결제, 환불, 개인정보, 버그 신고 등 문의는 아래 채널로 접수해 주세요. 채널별 안내는 준비 중이며, 실제 오픈 전 실제 연락처로 교체되어야 합니다.",
    channels: [
      {
        id: "email",
        label: "고객센터 이메일",
        value: "support@k-manus.ai",
        href: "mailto:support@k-manus.ai",
        placeholder: true,
        helpText:
          "실제로 모니터링되는 지원 메일함으로 교체(또는 개설) 확인 후 게시. 결제/환불 문의는 환불정책(제7조)의 billing@k-manus.ai와 창구를 일원화할지 결정 필요.",
      },
      {
        id: "support-form",
        label: "온라인 문의 폼",
        value: "지원 폼 준비 중 (placeholder)",
        href: undefined,
        placeholder: true,
        helpText:
          "문의 폼 페이지 구축 후 실제 URL로 교체하고 href를 연결. 폼 미구축 상태에서는 이메일 채널만 노출.",
      },
      {
        id: "phone",
        label: "전화 문의",
        value: "[고객센터 전화번호 미기재]",
        href: undefined,
        placeholder: true,
        helpText: "전화 응대를 운영할 경우 실제 번호와 운영 시간을 함께 게시.",
      },
    ] satisfies SupportChannel[],
    hours:
      "평일(공휴일 제외) 10:00 – 18:00 (KST) — placeholder, 실제 운영 시간 확정 후 갱신.",
    slaNote:
      "이메일 문의는 영업일 기준 1~2일 이내 첫 답변을 목표로 합니다 — placeholder 목표치이며, 확정된 서비스 수준(SLA)이 아닙니다. 실제 응대 체계 구축 후 이 문구를 확정된 SLA 문구로 교체해야 합니다.",
  },

  /**
   * Condensed field set for the mandatory per-page footer disclosure
   * (전자상거래법 시행령 등에 따라 통신판매업자는 모든 페이지 하단에
   * 상호/대표자/사업자등록번호/통신판매업신고번호/주소/전화를 표시).
   * Kept as references into the groups above so the footer never drifts
   * from the full business-info page.
   */
  footerDisclosureNote:
    "사업자등록 및 통신판매업 신고 완료 전까지 아래 정보는 자리표시자(placeholder)입니다.",
} as const;

export type BusinessInfo = typeof businessInfo;
