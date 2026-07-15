import Link from "next/link";
import { Container } from "./Container";
import { companyName, footerProductNav, legalNav } from "@/lib/site";
import { businessInfo } from "@/content/business-info/business-info";
import styles from "./Footer.module.css";

/**
 * 전자상거래법 및 통신판매업 신고 요건상, 통신판매업자는 사업자등록번호,
 * 통신판매업신고번호, 대표자, 주소, 전화 등을 소비자가 쉽게 확인할 수
 * 있도록 사이트 모든 페이지 하단(footer)에 표시해야 합니다. 값은
 * `content/business-info/business-info.ts` 한 곳에서만 관리하고, 전체
 * 상세는 `/business-info` 페이지에서 확인할 수 있도록 링크합니다.
 *
 * 아직 사업자등록 및 통신판매업 신고가 완료되지 않았으므로, 아래 값은
 * placeholder이며 실 결제 개시 전 반드시 실제 값으로 교체해야 합니다
 * (see content/business-info/PLACEHOLDERS.md).
 */
function bizField(label: string) {
  for (const group of businessInfo.groups) {
    const field = group.fields.find((f) => f.label === label);
    if (field) return field;
  }
  return undefined;
}

function BizDisclosure() {
  const fields = [
    bizField("상호(회사명)"),
    bizField("대표자"),
    bizField("사업자등록번호"),
    bizField("통신판매업신고번호"),
    bizField("사업장 주소"),
    bizField("전화"),
  ].filter((f): f is NonNullable<typeof f> => Boolean(f));

  return (
    <div className={styles.bizDisclosure}>
      <ul className={styles.bizList}>
        {fields.map((field) => (
          <li key={field.label}>
            <span className={styles.bizLabel}>{field.label}</span>
            <span className={styles.bizValue}>{field.value}</span>
          </li>
        ))}
      </ul>
      <p className={styles.bizNote}>
        {businessInfo.footerDisclosureNote}{" "}
        <Link href="/business-info">사업자 정보 전체 보기</Link>
      </p>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div className={styles.columns}>
          <div className={styles.brandCol}>
            <span className={styles.wordmark}>Dolshoi</span>
            <p className={styles.blurb}>
              당신의 컴퓨터에서, 당신을 대신해 일하는 한국어 우선 데스크톱 AI
              에이전트 슈퍼앱.
            </p>
          </div>

          <nav className={styles.col} aria-label="제품">
            <span className={styles.colTitle}>제품</span>
            <ul className={styles.list}>
              {footerProductNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.col} aria-label="법적 고지">
            <span className={styles.colTitle}>법적 고지</span>
            <ul className={styles.list}>
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <BizDisclosure />

        <div className={styles.bottom}>
          <p>
            © {year} {companyName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
