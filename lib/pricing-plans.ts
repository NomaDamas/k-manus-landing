/**
 * Pricing page plan data.
 *
 * Conceptually mirrors the four-tier plan catalog defined in
 * `k-manus-cloud/packages/subscription/src/plans.ts` (`PLAN_CATALOG`):
 * plan ids/names/ordering, monthly K-credit grants, and feature flags
 * (`concurrentWorkstations`, `priorityRouting`, `seatLimit`, `teamAdmin`)
 * are kept in lockstep with that source of truth so this repo never drifts
 * from what the subscription engine actually grants/enforces.
 *
 * KRW prices below are **placeholder example values only** — this repo has
 * no live PortOne/Stripe integration and no confirmed KRW price list yet.
 * Every price in the UI must render next to the "예시 가격" disclaimer
 * (see `PricingSection.tsx`). When real pricing is finalized, update the
 * numbers here; the shape (monthly + annual-equivalent) should not need to
 * change.
 */

export type PlanId = "free" | "personal" | "pro" | "team";

export interface PricingPlan {
  id: PlanId;
  name: string;
  tagline: string;
  /** Monthly price in KRW, placeholder/example only. 0 = free. */
  monthlyKrw: number;
  /**
   * Effective monthly price in KRW when billed annually, placeholder/example
   * only. Modeled on a common "2 months free" annual convention
   * (~17% off), matching neither an announced discount nor a contract.
   */
  annualMonthlyKrw: number;
  /** K-credits granted at subscription start and every successful renewal. */
  monthlyCreditGrant: number;
  concurrentWorkstations: number;
  priorityRouting: boolean;
  seatLimit: number | null;
  teamAdmin: boolean;
  highlight?: boolean;
  ctaLabel: string;
  ctaHref: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    tagline: "가볍게 써보고 싶다면",
    monthlyKrw: 0,
    annualMonthlyKrw: 0,
    monthlyCreditGrant: 200,
    concurrentWorkstations: 1,
    priorityRouting: false,
    seatLimit: 1,
    teamAdmin: false,
    ctaLabel: "무료로 시작하기",
    ctaHref: "/#download",
  },
  {
    id: "personal",
    name: "Personal",
    tagline: "매일 쓰는 개인용 에이전트",
    monthlyKrw: 11_900,
    annualMonthlyKrw: 9_900,
    monthlyCreditGrant: 2_000,
    concurrentWorkstations: 1,
    priorityRouting: false,
    seatLimit: 1,
    teamAdmin: false,
    ctaLabel: "Personal 시작하기",
    ctaHref: "/#download",
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "더 많은 작업을 더 빠르게",
    monthlyKrw: 38_900,
    annualMonthlyKrw: 32_400,
    monthlyCreditGrant: 10_000,
    concurrentWorkstations: 3,
    priorityRouting: true,
    seatLimit: 1,
    teamAdmin: false,
    highlight: true,
    ctaLabel: "Pro 시작하기",
    ctaHref: "/#download",
  },
  {
    id: "team",
    name: "Team",
    tagline: "팀 전체가 함께 쓰는 워크스페이스",
    monthlyKrw: 129_000,
    annualMonthlyKrw: 107_500,
    monthlyCreditGrant: 50_000,
    concurrentWorkstations: 10,
    priorityRouting: true,
    seatLimit: 10,
    teamAdmin: true,
    ctaLabel: "영업팀에 문의",
    ctaHref: "mailto:sales@k-manus.ai",
  },
];

export function formatKrw(amount: number): string {
  if (amount === 0) return "0";
  return new Intl.NumberFormat("ko-KR").format(amount);
}
