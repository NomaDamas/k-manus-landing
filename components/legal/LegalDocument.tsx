import { Container } from "@/components/Container";
import styles from "./LegalDocument.module.css";

/**
 * Shared rendering contract for every legal document page (terms = #3,
 * privacy = #4, refund = #5). Content lives in `content/legal/**` as plain
 * data objects of this shape -- pages just import the data and pass it here,
 * so adding a new legal page is a content change, not a layout change.
 */
export type LegalClause = {
  /** Anchor id, also used as the table-of-contents target. */
  id: string;
  title: string;
  paragraphs: string[];
  /** Optional bullet list rendered after the paragraphs. */
  list?: string[];
};

export type LegalDocumentContent = {
  title: string;
  /** e.g. "terms-of-service" -- stable slug, independent of the URL. */
  documentId: string;
  version: string;
  effectiveDate: string;
  lastUpdated: string;
  /** "draft" shows the review-required banner; "final" hides it. */
  status: "draft" | "final";
  summary?: string;
  clauses: LegalClause[];
};

function DraftBanner() {
  return (
    <div className={styles.banner} role="note">
      <strong className={styles.bannerTitle}>검토 필요 / Draft</strong>
      <p className={styles.bannerBody}>
        이 문서는 법률 자문이 아닌 초안입니다 (not legal advice — draft
        only). 게시 전 반드시 법무 검토(counsel review)를 거쳐야 합니다.
      </p>
    </div>
  );
}

export function LegalDocument({ content }: { content: LegalDocumentContent }) {
  return (
    <article className={styles.doc}>
      <Container as="section" className={styles.head}>
        {content.status === "draft" ? <DraftBanner /> : null}
        <h1 className={styles.title}>{content.title}</h1>
        <dl className={styles.meta}>
          <div>
            <dt>버전</dt>
            <dd>{content.version}</dd>
          </div>
          <div>
            <dt>시행일</dt>
            <dd>{content.effectiveDate}</dd>
          </div>
          <div>
            <dt>최종 수정일</dt>
            <dd>{content.lastUpdated}</dd>
          </div>
        </dl>
        {content.summary ? (
          <p className={styles.summary}>{content.summary}</p>
        ) : null}
      </Container>

      <Container as="section" className={styles.body}>
        <nav className={styles.toc} aria-label="목차">
          <span className={styles.tocTitle}>목차</span>
          <ol>
            {content.clauses.map((clause, index) => (
              <li key={clause.id}>
                <a href={`#${clause.id}`}>
                  제{index + 1}조 {clause.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className={styles.clauses}>
          {content.clauses.map((clause, index) => (
            <section key={clause.id} id={clause.id} className={styles.clause}>
              <h2>
                제{index + 1}조 ({clause.title})
              </h2>
              {clause.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
              {clause.list ? (
                <ul>
                  {clause.list.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
}
