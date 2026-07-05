import Link from "next/link";
import { Container } from "./Container";
import { companyName, footerProductNav, legalNav } from "@/lib/site";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div className={styles.columns}>
          <div className={styles.brandCol}>
            <span className={styles.wordmark}>K-manus</span>
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

        <div className={styles.bottom}>
          <p>
            © {year} {companyName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
