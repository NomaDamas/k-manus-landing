import { Container } from "./Container";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <Container className={styles.inner}>
        <p className={styles.eyebrow}>한국어 우선 데스크톱 AI 에이전트</p>

        <h1 id="hero-heading" className={styles.heading}>
          당신의 컴퓨터에서,
          <br />
          당신을 대신해 일하는 AI 에이전트
        </h1>

        <p className={styles.sub}>
          K-manus는 채팅 한 줄로 스킬 실행, 브라우저 자동화, 문서 작업까지
          대신 처리하는 데스크톱 슈퍼앱입니다. 위험한 작업은 승인 게이트가
          가로막고, 모든 답변에는 근거 출처가 따라옵니다.
        </p>

        <div className={styles.actions}>
          <a href="#download" className={styles.primaryCta}>
            지금 다운로드
          </a>
          <a href="#how-it-works" className={styles.secondaryCta}>
            작동 방식 보기
          </a>
        </div>

        <dl className={styles.stats}>
          <div className={styles.stat}>
            <dt>지원 스킬</dt>
            <dd>100+ 로컬 통합</dd>
          </div>
          <div className={styles.stat}>
            <dt>승인 게이트</dt>
            <dd>위험 작업 사전 확인</dd>
          </div>
          <div className={styles.stat}>
            <dt>근거 인용</dt>
            <dd>모든 답변에 출처 표기</dd>
          </div>
        </dl>
      </Container>
    </section>
  );
}
