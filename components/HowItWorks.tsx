import { Container } from "./Container";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    step: "01",
    title: "채팅으로 지시하기",
    body: "“이번 주 매출 엑셀 정리해서 요약 보고서 만들어줘”처럼 원하는 결과를 자연어로 말합니다.",
  },
  {
    step: "02",
    title: "에이전트가 계획을 세우고 실행",
    body: "Dolshoi가 필요한 스킬과 브라우저 자동화를 조합해 실행 계획을 세우고, 단계별로 진행 상황을 보여줍니다.",
  },
  {
    step: "03",
    title: "위험 작업은 승인 요청",
    body: "결제, 파일 삭제, 외부 전송처럼 되돌리기 어려운 작업은 실행 직전 멈추고 사용자의 승인을 받습니다.",
  },
  {
    step: "04",
    title: "출처와 함께 결과 확인",
    body: "완료된 작업과 답변에는 근거가 된 문서·페이지 인용이 함께 표시되어, 결과를 그대로 믿지 않고 검증할 수 있습니다.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className={styles.section}
      aria-labelledby="how-it-works-heading"
    >
      <Container>
        <div className={styles.header}>
          <p className={styles.eyebrow}>작동 방식</p>
          <h2 id="how-it-works-heading" className={styles.heading}>
            지시부터 검증까지, 네 단계
          </h2>
        </div>

        <ol className={styles.list}>
          {steps.map((item) => (
            <li key={item.step} className={styles.item}>
              <span className={styles.step} aria-hidden="true">
                {item.step}
              </span>
              <div className={styles.itemBody}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemText}>{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
