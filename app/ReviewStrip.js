import styles from "./ReviewStrip.module.css";

const REVIEWS = [
  {
    quote: "This place rocks! Great value and the new climate-controlled units are just what I need!",
    date: "July 2025",
  },
  {
    quote: "Renting my unit was quick and easy through their website.",
    date: "June 2023",
  },
  {
    quote: "Excellent at communicating with customers and is very responsive.",
    date: "Customer review",
  },
];

function ReviewCard({ review }) {
  return (
    <article className={styles.card}>
      <div className={styles.stars} aria-label="5 out of 5 stars">★★★★★</div>
      <blockquote>“{review.quote}”</blockquote>
      <div className={styles.meta}>
        <strong>Lake City Self Storage customer</strong>
        <span>{review.date}</span>
      </div>
    </article>
  );
}

export default function ReviewStrip({ compact = false }) {
  return (
    <section className={`${styles.section} ${compact ? styles.compact : ""}`} aria-label="5-star customer reviews">
      <div className={styles.shell}>
        <div className={styles.heading}>
          <div>
            <span className={styles.eyebrow}>5-Star Customer Reviews</span>
            <h2>See what customers are saying.</h2>
          </div>
          <p>Real feedback from Lake City Self Storage customers.</p>
        </div>

        <div className={styles.grid}>
          {REVIEWS.map((review, index) => (
            <ReviewCard key={`review-${index}`} review={review} />
          ))}
        </div>

        <div className={styles.sourceLine}>Recent public customer reviews for Lake City Self Storage.</div>
      </div>
    </section>
  );
}
