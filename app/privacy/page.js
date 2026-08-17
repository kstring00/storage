import styles from "./privacy.module.css";

export const metadata = {
  title: "Privacy Policy | Lake City Self Storage",
  description: "Privacy and analytics information for the Lake City Self Storage website.",
};

const MICROSOFT_PRIVACY = "https://privacy.microsoft.com/privacystatement";
const CONTACT_URL = "https://www.lakecityselfstorage.com/contact-us";

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <a className={styles.back} href="/">← Back to Lake City Self Storage</a>
        <p className={styles.eyebrow}>Website Privacy</p>
        <h1>Privacy Policy</h1>
        <p className={styles.updated}>Effective August 17, 2026</p>

        <section>
          <h2>Website analytics</h2>
          <p>
            Lake City Self Storage uses Microsoft Clarity to better understand how visitors interact with this website. Clarity can provide behavioral analytics such as page usage, clicks, scrolling, heatmaps, and session recordings. We use this information to improve website navigation, storage comparisons, and the online rental experience.
          </p>
        </section>

        <section>
          <h2>Analytics cookies and consent</h2>
          <p>
            Microsoft Clarity analytics cookies are optional on this website. Until you accept analytics cookies, our Clarity implementation keeps analytics storage denied and may operate in a limited cookieless mode. If you accept analytics cookies, Clarity may use cookies and similar technologies to associate activity across page views and sessions.
          </p>
          <p>
            Our Clarity configuration keeps advertising storage denied. We are not using your Clarity consent choice to enable Microsoft advertising storage through this website.
          </p>
        </section>

        <section>
          <h2>Clarity cookies</h2>
          <p>
            When analytics consent is granted, Clarity may set cookies such as <strong>_clck</strong>, which helps persist a pseudonymous Clarity user identifier for this site, and <strong>_clsk</strong>, which helps connect page views into a session. Microsoft may also use related Microsoft-domain cookies as part of Clarity's analytics service.
          </p>
        </section>

        <section>
          <h2>Your choices</h2>
          <p>
            You can accept or decline optional analytics cookies when the cookie notice appears. You can also reopen the controls at any time by selecting <a href="#cookie-settings">Cookie Settings</a>. Declining analytics cookies does not prevent you from browsing storage options, viewing pricing, calling the facility, or using rental links.
          </p>
        </section>

        <section>
          <h2>Session recording privacy</h2>
          <p>
            Clarity includes privacy protections designed to mask sensitive content in recordings. We also avoid intentionally using analytics to capture information that is not needed to understand website usability. Rental and payment experiences that occur on third-party systems are governed by those providers' own privacy practices.
          </p>
        </section>

        <section>
          <h2>Microsoft privacy information</h2>
          <p>
            Microsoft processes Clarity data as the provider of the analytics service. You can learn more in the <a href={MICROSOFT_PRIVACY} target="_blank" rel="noreferrer">Microsoft Privacy Statement</a>.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            If you have questions about this website or this privacy notice, please <a href={CONTACT_URL}>contact Lake City Self Storage</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
