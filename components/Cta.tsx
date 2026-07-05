"use client";

import { useId, useState } from "react";
import { Container } from "./Container";
import styles from "./Cta.module.css";

const DOWNLOAD_URL = "https://github.com/NomaDamas/k-manus/releases";
const WAITLIST_EMAIL = "hello@k-manus.ai";

export function Cta() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const inputId = useId();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;

    const subject = encodeURIComponent("K-manus 얼리 액세스 신청");
    const body = encodeURIComponent(
      `얼리 액세스 알림을 받고 싶습니다.\n연락받을 이메일: ${email}`,
    );
    window.location.href = `mailto:${WAITLIST_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="download" className={styles.section} aria-labelledby="cta-heading">
      <Container>
        <div className={styles.panel}>
          <div className={styles.copy}>
            <h2 id="cta-heading" className={styles.heading}>
              K-manus를 가장 먼저 만나보세요
            </h2>
            <p className={styles.sub}>
              데스크톱 앱을 지금 내려받거나, 정식 출시 알림을 신청해 새 기능과
              업데이트 소식을 가장 먼저 받아보세요.
            </p>
          </div>

          <div className={styles.actions}>
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noreferrer"
              className={styles.download}
            >
              지금 다운로드
              <span className={styles.platforms}>macOS · Windows</span>
            </a>

            <form
              className={styles.waitlist}
              onSubmit={handleSubmit}
              aria-describedby={submitted ? `${inputId}-status` : undefined}
            >
              <label htmlFor={inputId} className="visually-hidden">
                이메일 주소
              </label>
              <input
                id={inputId}
                type="email"
                required
                placeholder="이메일 주소"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={styles.input}
              />
              <button type="submit" className={styles.waitlistButton}>
                알림 받기
              </button>
            </form>
          </div>

          {submitted && (
            <p id={`${inputId}-status`} role="status" className={styles.status}>
              메일 작성 창이 열립니다. 보내주시면 신청이 접수됩니다.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
