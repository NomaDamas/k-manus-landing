import Link from "next/link";
import { Container } from "./Container";
import { ThemeToggle } from "./ThemeToggle";
import { primaryNav } from "@/lib/site";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.bar}>
        <Link href="/" className={styles.brand} aria-label="K-manus 홈으로">
          <span className={styles.mark} aria-hidden="true">
            K
          </span>
          <span className={styles.wordmark}>K-manus</span>
        </Link>

        <nav className={styles.nav} aria-label="주요 메뉴">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <a href="#download" className={styles.cta}>
            다운로드
          </a>
        </div>
      </Container>
    </header>
  );
}
