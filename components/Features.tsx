import { Container } from "./Container";
import styles from "./Features.module.css";

type Feature = {
  icon: string;
  title: string;
  body: string;
  accent: "jjok" | "dan" | "cheongja" | "ink";
};

const features: Feature[] = [
  {
    icon: "🧩",
    title: "k-skill 스킬 통합",
    body: "엑셀 자동화, 문서 변환, 사내 도구 연동까지 — 필요한 스킬을 골라 붙이면 Dolshoi가 실행 계획을 세우고 직접 처리합니다.",
    accent: "jjok",
  },
  {
    icon: "🌐",
    title: "브라우저 자동화",
    body: "로그인된 브라우저 세션을 그대로 이어받아 검색, 예약, 데이터 수집처럼 사람이 하던 반복 작업을 대신 클릭하고 입력합니다.",
    accent: "cheongja",
  },
  {
    icon: "🛡️",
    title: "승인 게이트 보안",
    body: "결제, 삭제, 외부 전송처럼 위험도가 높은 작업은 실행 전 사용자 승인을 반드시 거칩니다. 무엇을, 왜 하려는지 먼저 보여줍니다.",
    accent: "dan",
  },
  {
    icon: "☁️",
    title: "클라우드 워크스테이션",
    body: "로컬 리소스가 부족한 무거운 작업은 클라우드 워크스테이션으로 옮겨 실행하고, 진행 상황은 데스크톱 앱에서 그대로 확인합니다.",
    accent: "ink",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className={styles.section}
      aria-labelledby="features-heading"
    >
      <Container>
        <div className={styles.header}>
          <p className={styles.eyebrow}>기능</p>
          <h2 id="features-heading" className={styles.heading}>
            에이전트가 대신 처리하는 네 가지 영역
          </h2>
        </div>

        <div className={styles.grid}>
          {features.map((feature) => (
            <article
              key={feature.title}
              className={styles.card}
              data-accent={feature.accent}
            >
              <span className={styles.icon} aria-hidden="true">
                {feature.icon}
              </span>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardBody}>{feature.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
