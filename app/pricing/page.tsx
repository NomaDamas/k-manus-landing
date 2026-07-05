import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PricingSection } from "@/components/pricing/PricingSection";
import { ComparisonTable } from "@/components/pricing/ComparisonTable";
import { Faq } from "@/components/pricing/Faq";
import { siteConfig } from "@/lib/site";
import styles from "./pricing.module.css";

const title = "요금제";
const description =
  "K-manus의 Free, Personal, Pro, Team 요금제를 비교하세요. 매월 지급되는 K-크레딧, 동시 클라우드 워크스테이션, 우선 처리, 팀 관리 기능을 한눈에 확인할 수 있습니다.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: `${title} · ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}/pricing`,
  },
};

export default function PricingPage() {
  return (
    <>
      <section className={styles.hero}>
        <Container className={styles.heroInner}>
          <span className={styles.eyebrow}>요금제</span>
          <h1 className={styles.title}>내 작업량에 맞는 요금제를 선택하세요</h1>
          <p className={styles.subtitle}>
            모든 요금제에는 매월 지급되는 K-크레딧, 채팅 기반 작업 실행, 스킬
            실행, 승인 게이트 보안이 기본 포함되어 있습니다.
          </p>
        </Container>
      </section>

      <section aria-labelledby="plans-heading" className={styles.section}>
        <Container>
          <h2 id="plans-heading" className="visually-hidden">
            요금제 목록
          </h2>
          <PricingSection />
        </Container>
      </section>

      <section aria-labelledby="compare-heading" className={styles.section}>
        <Container className={styles.sectionInner}>
          <div className={styles.sectionHead}>
            <h2 id="compare-heading" className={styles.sectionTitle}>
              기능 비교
            </h2>
            <p className={styles.sectionSubtitle}>
              요금제별로 제공되는 K-크레딧과 클라우드 리소스, 팀 기능을
              자세히 비교해 보세요.
            </p>
          </div>
          <ComparisonTable />
        </Container>
      </section>

      <section aria-labelledby="faq-heading" className={styles.section}>
        <Container className={styles.sectionInner}>
          <div className={styles.sectionHead}>
            <h2 id="faq-heading" className={styles.sectionTitle}>
              자주 묻는 질문
            </h2>
          </div>
          <Faq />
        </Container>
      </section>

      <section aria-labelledby="cta-heading" className={styles.ctaSection}>
        <Container className={styles.ctaInner}>
          <h2 id="cta-heading" className={styles.ctaTitle}>
            지금 바로 K-manus를 시작해 보세요
          </h2>
          <p className={styles.ctaSubtitle}>
            Free 요금제는 신용카드 없이 바로 시작할 수 있습니다. 팀 단위
            도입을 검토 중이라면 영업팀에 문의해 주세요.
          </p>
          <div className={styles.ctaActions}>
            <a href="/#download" className={styles.ctaPrimary}>
              무료로 시작하기
            </a>
            <a href="mailto:sales@k-manus.ai" className={styles.ctaSecondary}>
              영업팀에 문의
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
