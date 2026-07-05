/**
 * Shared site configuration: nav/footer link maps and base metadata.
 *
 * Other pages added by concurrent issues (pricing = #2, legal/terms = #3,
 * legal/privacy = #4, legal/refund = #5, business-info) should reuse these
 * paths rather than hardcoding strings, so a route rename only needs to
 * happen in one place.
 */

export const siteConfig = {
  name: "K-manus",
  tagline: "당신의 컴퓨터에서, 당신을 대신해 일하는 AI 에이전트",
  description:
    "K-manus는 한국어 우선 데스크톱 AI 에이전트 슈퍼앱입니다. 채팅으로 지시하면 스킬 실행, 브라우저 자동화, 문서 작업까지 승인 게이트로 안전하게 대신 처리합니다.",
  url: "https://k-manus.ai",
} as const;

export type NavLink = {
  href: string;
  label: string;
};

/** Primary in-page navigation (hash links on the home page). */
export const primaryNav: NavLink[] = [
  { href: "#features", label: "기능" },
  { href: "#how-it-works", label: "작동 방식" },
  { href: "/pricing", label: "요금제" },
];

/** Legal / business-info links, consumed by issues #3-#7. */
export const legalNav: NavLink[] = [
  { href: "/legal/terms", label: "이용약관" },
  { href: "/legal/privacy", label: "개인정보처리방침" },
  { href: "/legal/refund", label: "환불정책" },
  { href: "/business-info", label: "사업자 정보" },
];

export const footerProductNav: NavLink[] = [
  { href: "#features", label: "기능" },
  { href: "#how-it-works", label: "작동 방식" },
  { href: "/pricing", label: "요금제" },
  { href: "#download", label: "다운로드" },
];

export const companyName = "노마다스 (NomaDamas)";
