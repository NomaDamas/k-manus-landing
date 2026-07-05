"use client";

import { useState } from "react";
import { PRICING_PLANS, formatKrw } from "@/lib/pricing-plans";
import styles from "./PricingSection.module.css";

type BillingPeriod = "monthly" | "annual";

export function PricingSection() {
  const [period, setPeriod] = useState<BillingPeriod>("monthly");

  return (
    <div>
      <div className={styles.toggleRow}>
        <div className={styles.toggle} role="group" aria-label="결제 주기 선택">
          <button
            type="button"
            className={styles.toggleBtn}
            data-active={period === "monthly"}
            onClick={() => setPeriod("monthly")}
            aria-pressed={period === "monthly"}
          >
            월간 결제
          </button>
          <button
            type="button"
            className={styles.toggleBtn}
            data-active={period === "annual"}
            onClick={() => setPeriod("annual")}
            aria-pressed={period === "annual"}
          >
            연간 결제
            <span className={styles.badge}>2개월 무료</span>
          </button>
        </div>
        <p className={styles.disclaimer}>
          표시된 금액은 이해를 돕기 위한 예시 가격이며, 실제 결제 금액은 결제
          수단 연동 완료 후 별도로 안내됩니다.
        </p>
      </div>

      <div className={styles.grid}>
        {PRICING_PLANS.map((plan) => {
          const price = period === "monthly" ? plan.monthlyKrw : plan.annualMonthlyKrw;
          return (
            <article
              key={plan.id}
              className={styles.card}
              data-highlight={plan.highlight ?? false}
            >
              {plan.highlight ? (
                <span className={styles.badgeTop}>가장 많이 선택함</span>
              ) : null}

              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.planTagline}>{plan.tagline}</p>

              <div className={styles.priceRow}>
                <span className={styles.price}>₩{formatKrw(price)}</span>
                <span className={styles.priceUnit}>/ 월{period === "annual" ? " (연간 결제 시)" : ""}</span>
              </div>

              <a href={plan.ctaHref} className={styles.cta}>
                {plan.ctaLabel}
              </a>

              <ul className={styles.features}>
                <li>
                  월 <strong>{formatKrw(plan.monthlyCreditGrant)} K-크레딧</strong> 제공
                </li>
                <li>
                  동시 클라우드 워크스테이션{" "}
                  <strong>{plan.concurrentWorkstations}개</strong>
                </li>
                <li>
                  {plan.priorityRouting
                    ? "모델 라우터 우선 처리 대기열"
                    : "모델 라우터 기본 대기열"}
                </li>
                <li>
                  시트 {plan.seatLimit === null ? "무제한" : `최대 ${plan.seatLimit}명`}
                </li>
                <li>
                  {plan.teamAdmin
                    ? "팀 관리자 도구 및 감사 로그 포함"
                    : "팀 관리자 도구 미포함"}
                </li>
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  );
}
