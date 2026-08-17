import styles from "./LocationMap.module.css";

const ADDRESS = "1143 NW Lake Jeffrey Rd, Lake City, FL 32055";
const PHONE_DISPLAY = "(386) 292-5494";
const PHONE_LINK = "tel:+13862925494";
const DIRECTIONS_URL = "https://www.google.com/maps/search/?api=1&query=1143+NW+Lake+Jeffrey+Rd%2C+Lake+City%2C+FL+32055";
const MAP_EMBED_URL = "https://www.google.com/maps?q=1143+NW+Lake+Jeffrey+Rd%2C+Lake+City%2C+FL+32055&z=14&output=embed";

export default function LocationMap() {
  return (
    <section className={styles.section} aria-labelledby="location-heading">
      <div className={styles.mapWrap}>
        <iframe
          className={styles.map}
          src={MAP_EMBED_URL}
          title="Map showing Lake City Self Storage at 1143 NW Lake Jeffrey Rd in Lake City, Florida"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />

        <div className={styles.card}>
          <span className={styles.eyebrow}>Our Location</span>
          <h2 id="location-heading">Easy to Find in Lake City</h2>
          <p className={styles.address}>{ADDRESS}</p>
          <div className={styles.details}>
            <span><strong>Access hours</strong>7:00 AM – 8:00 PM daily</span>
            <span><strong>Phone</strong><a href={PHONE_LINK}>{PHONE_DISPLAY}</a></span>
          </div>
          <div className={styles.actions}>
            <a className={styles.primary} href={DIRECTIONS_URL} target="_blank" rel="noreferrer">
              Get Directions <span aria-hidden="true">→</span>
            </a>
            <a className={styles.secondary} href={PHONE_LINK}>Call Facility</a>
          </div>
        </div>
      </div>
    </section>
  );
}
