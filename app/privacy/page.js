import styles from "./privacy.module.css";

export const metadata = {
  title: "Privacy Policy | Lake City Self Storage",
  description: "Privacy and analytics information for the Lake City Self Storage website.",
};

const MICROSOFT_PRIVACY = "https://privacy.microsoft.com/privacystatement";
const GOOGLE_PRIVACY = "https://policies.google.com/privacy";
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
            Lake City Self Storage uses Microsoft Clarity and Google Analytics to better understand how visitors interact with this website. These services can provide information such as page usage, traffic and device information, clicks, scrolling, heatmaps, and session behavior. We use this information to improve website navigation, storage comparisons, and the online rental experience.
          </p>
        </section>

        <section>
          <h2>Analytics cookies and consent</h2>
          <p>
            Analytics cookies are optional on this website. Our consent controls keep analytics storage denied until you choose Accept Analytics. If you accept, Microsoft Clarity and Google Analytics may use analytics cookies or similar technologies to associate activity across page views and sessions.
          </p>
          <p>
            If you decline, analytics storage remains denied. Clarity and Google Analytics may still receive limited cookieless measurement signals designed to operate without reading or writing analytics cookies.
          </p>
          <p>
            Advertising storage, advertising user data, and advertising personalization remain denied in our Google configuration, and Clarity advertising storage remains denied. Your analytics choice is not used by this website to enable advertising cookies or personalized advertising.
          </p>
        </section>

        <section>
          <h2>Analytics cookies</h2>
          <p>
            When analytics consent is granted, Clarity may set cookies such as <strong>_clck</strong>, which helps persist a pseudonymous Clarity user identifier for this site, and <strong>_clsk</strong>, which helps connect page views into a session. Google Analytics may also set first-party analytics cookies, commonly including cookies beginning with <strong>_ga</strong>, to distinguish visits and measure site usage.
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
            Microsoft Clarity includes privacy protections designed to mask sensitive content in recordings. We also avoid intentionally using analytics to capture information that is not needed to understand website usability. Rental and payment experiences that occur on third-party systems are governed by those providers' own privacy practices.
          </p>
        </section>

        <section>
          <h2>Analytics provider privacy information</h2>
          <p>
            Microsoft processes Clarity data as the provider of the Clarity service. You can learn more in the <a href={MICROSOFT_PRIVACY} target="_blank" rel="noreferrer">Microsoft Privacy Statement</a>.
          </p>
          <p>
            Google processes Google Analytics data as the provider of that service. You can learn more in the <a href={GOOGLE_PRIVACY} target="_blank" rel="noreferrer">Google Privacy Policy</a>.
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
