import { Container } from "@/components/Container";
import type { businessInfo as businessInfoContent } from "@/content/business-info/business-info";
import styles from "./BusinessInfoDocument.module.css";

type BusinessInfoContent = typeof businessInfoContent;

function PlaceholderBanner() {
  return (
    <div className={styles.banner} role="note">
      <strong className={styles.bannerTitle}>
        사업자 정보 미기재 / Pre-launch placeholder
      </strong>
      <p className={styles.bannerBody}>
        NomaDamas는 아직 Dolshoi 서비스 운영을 위한 사업자등록 및
        통신판매업 신고를 완료하지 않았습니다. 아래에서 &ldquo;placeholder&rdquo;
        표시가 붙은 항목은 실제 등록 정보가 아니며, 실 결제를 개시하기
        전에 반드시 실제 값으로 교체해야 합니다. 교체 대상 목록은
        저장소의{" "}
        <code className={styles.code}>
          content/business-info/PLACEHOLDERS.md
        </code>{" "}
        문서를 참고하세요.
      </p>
    </div>
  );
}

function PlaceholderBadge() {
  return (
    <span className={styles.badge} aria-label="자리표시자, 실제 값으로 교체 필요">
      PLACEHOLDER
    </span>
  );
}

export function BusinessInfoDocument({
  content,
}: {
  content: BusinessInfoContent;
}) {
  return (
    <article className={styles.doc}>
      <Container as="section" className={styles.head}>
        {content.status === "draft" ? <PlaceholderBanner /> : null}
        <h1 className={styles.title}>{content.title}</h1>
        <p className={styles.updated}>최종 수정일 {content.lastUpdated}</p>
        <p className={styles.summary}>{content.summary}</p>
      </Container>

      <Container as="section" className={styles.body}>
        <div className={styles.groups}>
          {content.groups.map((group) => (
            <section key={group.id} className={styles.group}>
              <h2>{group.title}</h2>
              <dl className={styles.fieldList}>
                {group.fields.map((field) => (
                  <div key={field.label} className={styles.fieldRow}>
                    <dt>{field.label}</dt>
                    <dd>
                      <span className={styles.fieldValue}>{field.value}</span>
                      {field.placeholder ? <PlaceholderBadge /> : null}
                      {field.helpText ? (
                        <span className={styles.helpText}>
                          {field.helpText}
                        </span>
                      ) : null}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>

        <section className={styles.support} id="support" aria-labelledby="support-heading">
          <h2 id="support-heading">고객센터</h2>
          <p className={styles.supportIntro}>{content.support.intro}</p>

          <ul className={styles.channelList}>
            {content.support.channels.map((channel) => (
              <li key={channel.id} className={styles.channelItem}>
                <span className={styles.channelLabel}>{channel.label}</span>
                {channel.href ? (
                  <a href={channel.href} className={styles.channelValue}>
                    {channel.value}
                  </a>
                ) : (
                  <span className={styles.channelValue}>{channel.value}</span>
                )}
                {channel.placeholder ? <PlaceholderBadge /> : null}
                {channel.helpText ? (
                  <span className={styles.helpText}>{channel.helpText}</span>
                ) : null}
              </li>
            ))}
          </ul>

          <p className={styles.supportMeta}>
            <strong>운영 시간</strong> {content.support.hours}
          </p>
          <p className={styles.supportMeta}>
            <strong>응답 목표(SLA)</strong> {content.support.slaNote}
          </p>
        </section>
      </Container>
    </article>
  );
}
