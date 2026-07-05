import type { ReactNode } from "react";
import { PRICING_PLANS, formatKrw } from "@/lib/pricing-plans";
import styles from "./ComparisonTable.module.css";

type Row = {
  label: string;
  render: (plan: (typeof PRICING_PLANS)[number]) => ReactNode;
};

const rows: Row[] = [
  {
    label: "월 K-크레딧 제공량",
    render: (plan) => `${formatKrw(plan.monthlyCreditGrant)}`,
  },
  {
    label: "동시 클라우드 워크스테이션",
    render: (plan) => `${plan.concurrentWorkstations}개`,
  },
  {
    label: "모델 라우터 우선 처리",
    render: (plan) => (plan.priorityRouting ? "✓" : "—"),
  },
  {
    label: "시트 수",
    render: (plan) => (plan.seatLimit === null ? "무제한" : `${plan.seatLimit}명`),
  },
  {
    label: "팀 관리자 / 감사 로그",
    render: (plan) => (plan.teamAdmin ? "✓" : "—"),
  },
];

export function ComparisonTable() {
  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col" className={styles.rowLabel}>
              기능
            </th>
            {PRICING_PLANS.map((plan) => (
              <th scope="col" key={plan.id}>
                {plan.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row" className={styles.rowLabel}>
                {row.label}
              </th>
              {PRICING_PLANS.map((plan) => (
                <td key={plan.id}>{row.render(plan)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
