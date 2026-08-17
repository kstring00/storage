import styles from "./PersistentContactBar.module.css";

const PHONE_DISPLAY = "(386) 292-5494";
const PHONE_LINK = "tel:+13862925494";
const CONTACT_URL = "https://www.lakecityselfstorage.com/contact-us";

export default function PersistentContactBar() {
  return (
    <aside className={styles.bar} aria-label="Lake City Self Storage contact and hours">
      <div className={styles.inner}>
        <a className={styles.call} href={PHONE_LINK}>
          <span className={styles.icon}>☎</span>
          <span><small>Questions? Call us</small><strong>{PHONE_DISPLAY}</strong></span>
        </a>
        <div className={styles.hours}>
          <span><small>Office Hours</small><strong>Mon–Fri 9–8 • Sat 11–4 • Sun 11–3</strong></span>
          <span><small>Gate Access</small><strong>Daily 7 AM–8 PM</strong></span>
        </div>
        <a className={styles.contact} href={CONTACT_URL}>Contact Us</a>
      </div>
    </aside>
  );
}
