import styles from "./ReviewStrip.module.css";
import { reviewThemes } from "./storageData";

export default function ReviewStrip({ zone = "general", compact = false }) {
  const reviews = reviewThemes[zone] || reviewThemes.general;
  return (
    <section className={`${styles.section} ${compact ? styles.compact : ""}`} aria-label="Positive customer feedback">
      <div className={styles.shell}>
        <div className={styles.heading}>
          <div>
            <span className={styles.eyebrow}>What renters consistently praise</span>
            <h2>Real feedback reinforces the experience.</h2>
          </div>
          <p>Positive public customer feedback is summarized here by theme so the page stays focused on the storage decision.</p>
        </div>
        <div className={styles.grid}>
          {reviews.map((review) => (
            <article key={review.title}>
              <div className={styles.stars} aria-label="Positive customer feedback">★★★★★</div>
              <strong>{review.title}</strong>
              <p>{review.copy}</p>
            </article>
          ))}
        </div>
        <div className={styles.sourceLine}>Customer feedback themes are based on recent public reviews for Lake City Self Storage.</div>
      </div>
    </section>
  );
}
