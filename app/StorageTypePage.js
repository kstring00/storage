import StorageFitTabs from "./StorageFitTabs";
import UnitSelectionStack from "./UnitSelectionStack";
import FacilityPhotoCarousel from "./FacilityPhotoCarousel";
import PersistentContactBar from "./PersistentContactBar";
import { photoSets } from "./storageData";
import styles from "./storageTypePage.module.css";

const PHONE_DISPLAY = "(386) 292-5494";
const PHONE_LINK = "tel:+13862925494";
const CONTACT_URL = "https://www.lakecityselfstorage.com/contact-us";
const PAY_ONLINE_URL = "https://www.lakecityselfstorage.com/payonline";
const LOGO_URL = "https://uploads.website.storedge.com/4ee8d3a8-7790-4195-9d2f-6b28480bad77/outlook-1lwjlfpa_01032024100037323.png";

export default function StorageTypePage({ config }) {
  const storageFitFooterNote = config.decisionNoteOnly
    ? { title: config.noteTitle, copy: config.noteCopy }
    : null;
  const zone = config.photoZone || (config.showClimateDoors ? "climate" : "nonClimate");
  const displayPhotos = zone === "climate" ? photoSets.climate.slice(1, 2) : photoSets[zone];
  const unitAnchor = config.showClimateDoors ? "#unit-doors" : config.showDriveUpDoors ? "#drive-up-sizes" : "#storage-fit";

  return (
    <main className={styles.page}>
      <PersistentContactBar />
      <header className="siteHeader">
        <div className="shell headerTop">
          <a href="/" aria-label="Lake City Self Storage landing page">
            <img className="logo" src={LOGO_URL} alt="Lake City Self Storage" />
          </a>
          <a className="callTop" href={PHONE_LINK}>Call Us Today! <strong>{PHONE_DISPLAY}</strong></a>
        </div>
        <div className="shell navRow">
          <nav aria-label="Primary navigation">
            {!config.hideBenefits ? <a href="#benefits">Benefits</a> : null}
            <a href="#storage-fit">What to Store</a>
            {config.showDriveUpDoors ? <a href="#drive-up-sizes">Unit Sizes</a> : null}
            {config.showClimateDoors ? <a href="#unit-doors">Unit Sizes</a> : null}
            {!config.hideUses ? <a href="#best-uses">Best Uses</a> : null}
            {!config.decisionNoteOnly && !config.hideDecision ? <a href="#decision">Is It Right for Me?</a> : null}
            <a href="#faq">FAQ</a>
            <a href={PAY_ONLINE_URL}>Pay Online</a>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.breadcrumbs} aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span><strong>{config.eyebrow}</strong>
        </div>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.eyebrow}><span className={styles.eyebrowIcon}>{config.icon}</span>{config.eyebrow}</p>
            <h1>{config.title}</h1>
            <p className={styles.heroLead}>{config.heroLead}</p>
            <div className={styles.actions}>
              <a className={styles.primary} href={unitAnchor}>{config.primaryCta} <span>↓</span></a>
              <a className={styles.secondary} href={PHONE_LINK}>Call to Ask</a>
            </div>
            <div className={styles.trust}>
              <span>✓ Secure Facility</span>
              <span>✓ 24-Hour Video Surveillance</span>
              <span>✓ Gated Access</span>
            </div>
          </div>

          <FacilityPhotoCarousel
            images={displayPhotos}
            title={config.visualTitle}
            copy={config.visualCopy}
          />
        </div>
      </section>

      {!config.hideBenefits ? (
        <section id="benefits" className={styles.section}>
          <div className={styles.shell}>
            <div className={styles.heading}>
              <h2>{config.benefitsTitle}</h2>
              <p>{config.benefitsIntro}</p>
            </div>
            <div className={styles.benefitGrid}>
              {config.benefits.map((benefit) => (
                <article className={styles.benefitCard} key={benefit.title}>
                  <div className={styles.iconCircle}>{benefit.icon}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <StorageFitTabs config={config.storageFit} footerNote={storageFitFooterNote} />

      {config.showDriveUpDoors ? <UnitSelectionStack zone="driveup" /> : null}
      {config.showClimateDoors ? <UnitSelectionStack zone="climate" /> : null}

      {!config.hideUses ? (
        <section id="best-uses" className={styles.section}>
          <div className={styles.shell}>
            <div className={styles.heading}>
              <h2>{config.usesTitle}</h2>
              <p>{config.usesIntro}</p>
            </div>
            <div className={styles.useGrid}>
              {config.uses.map((use) => (
                <article className={styles.useCard} key={use.title}>
                  <span className={styles.check}>✓</span>
                  <div><strong>{use.title}</strong><p>{use.copy}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {!config.decisionNoteOnly && !config.hideDecision ? (
        <section id="decision" className={styles.sectionAlt}>
          <div className={styles.shell}>
            <div className={styles.heading}><h2>{config.decisionTitle}</h2><p>{config.decisionIntro}</p></div>
            <div className={styles.decisionGrid}>
              <article className={`${styles.decisionCard} ${styles.decisionCardAccent}`}>
                <div className={styles.decisionLabel}>{config.goodFitLabel}</div>
                <h3>{config.goodFitTitle}</h3>
                <ul>{config.goodFit.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
              <article className={styles.decisionCard}>
                <div className={styles.decisionLabel}>{config.otherFitLabel}</div>
                <h3>{config.otherFitTitle}</h3>
                <ul>{config.otherFit.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            </div>
            <div className={styles.note}><strong>{config.noteTitle}</strong> {config.noteCopy}</div>
          </div>
        </section>
      ) : null}

      <section id="faq" className={`${styles.section} ${styles.faqSection}`}>
        <div className={styles.shell}>
          <div className={styles.heading}>
            <h2>{config.faqTitle || "Frequently Asked Questions"}</h2>
            {config.faqIntro ? <p>{config.faqIntro}</p> : null}
          </div>
          <div className={styles.faq}>
            {config.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.final}>
        <div className={styles.finalInner}>
          <div className={styles.finalCopyBlock}><strong>{config.finalTitle}</strong><span>{config.finalCopy}</span></div>
          <div className={styles.finalCompare}>
            <span className={styles.compareLabel}>Explore the other option</span>
            <strong>{config.crossTitle}</strong>
            <span>{config.crossCopy}</span>
            <a className={styles.finalButton} href={config.crossHref}><span className={styles.finalButtonText}>{config.crossCta}</span><span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footerMain">
          <img className="footerLogo" src={LOGO_URL} alt="Lake City Self Storage" />
          <div className="footerDetail"><span className="footerIcon">⌖</span><span>1143 NW Lake Jeffrey Rd<br />Lake City, FL 32055</span></div>
          <div className="footerDetail"><span className="footerIcon">☎</span><a href={PHONE_LINK}>{PHONE_DISPLAY}</a></div>
          <div className="footerDetail"><span className="footerIcon">◷</span><span>Access Hours<br />7:00 AM - 8:00 PM</span></div>
        </div>
        <div className="shell footerLegal">
          <span>© Lake City Self Storage</span>
          <span>All sizes are approximate. Restrictions may apply.</span>
          <a href={CONTACT_URL}>Contact</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="#cookie-settings">Cookie Settings</a>
        </div>
      </footer>
    </main>
  );
}
