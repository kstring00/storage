import PersistentContactBar from "../../PersistentContactBar";
import {
  climateUnits,
  INVENTORY_SOURCE_URL,
  money,
} from "../../storageData";
import styles from "./page.module.css";

const PHONE_DISPLAY = "(386) 292-5494";
const PHONE_LINK = "tel:+13862925494";
const LOGO_URL = "https://uploads.website.storedge.com/4ee8d3a8-7790-4195-9d2f-6b28480bad77/outlook-1lwjlfpa_01032024100037323.png";
const CLIMATE_PHOTO = "https://uploads.website.storedge.com/4ee8d3a8-7790-4195-9d2f-6b28480bad77/copy%20of%209y8a0202_08152025173121802.jpg";
const unit = climateUnits.find((item) => item.id === "10x10");
const smaller = climateUnits.find((item) => item.id === "5x5");
const larger = climateUnits.find((item) => item.id === "10x15");

const faqItems = [
  {
    question: `Is ${money(unit.fromPrice)}/mo guaranteed?`,
    answer: `Rates and availability can change. ${money(unit.fromPrice)}/mo is the current starting rate shown for this size. Check live availability before renting to see today's exact unit and price.`,
  },
  {
    question: "What happens if the 10 × 10 is sold out?",
    answer: "Stay in the climate-controlled section and compare the nearest practical size up or down. The goal is to keep the storage environment your belongings need without paying for unnecessary space.",
  },
  {
    question: "Can I reserve or move in online?",
    answer: "Yes. Continue to live availability to see the units currently offered and complete the rental process online. You can also call the facility if you want help before renting.",
  },
  {
    question: "What if I am not sure the 10 × 10 is the right size?",
    answer: "A 10 × 10 is a practical fit for bedroom furniture, bikes, a desk, boxes, and apartment overflow. If that sounds tight, compare the 10 × 15. If it sounds like more room than you need, compare the smaller climate-controlled option first.",
  },
];

export default function ClimateTenByTenPage() {
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
            <a href="/climate-controlled">Climate-Controlled</a>
            <a href="#availability">Availability</a>
            <a href="#alternatives">Other Sizes</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.breadcrumbs}>
            <a href="/">Home</a><span>›</span><a href="/climate-controlled">Climate-Controlled</a><span>›</span><strong>10 × 10</strong>
          </div>

          <div className={styles.chosenStrip}>
            <span>✓ You chose Climate-Controlled</span>
            <span>✓ You chose 10 × 10</span>
            <strong>Next: choose an available unit</strong>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>10 × 10 climate-controlled storage</p>
              <h1>10 × 10 Climate-Controlled Storage</h1>
              <p className={styles.lead}>100 square feet of indoor storage for bedroom furniture, bikes, a desk, boxes, and apartment overflow.</p>
              <div className={styles.pills}>
                <span>100 sq ft</span><span>Indoor</span><span>❄ Climate-Controlled</span><span>Best for bedroom or apartment overflow</span>
              </div>
            </div>

            <aside className={styles.summaryCard}>
              <span className={styles.summaryLabel}>Current starting rate</span>
              <div className={styles.price}>{money(unit.fromPrice)}<span>/mo</span></div>
              <p>Ready to rent? Check today&apos;s exact 10 × 10 availability and complete your move-in in the rental system.</p>
              <a className={styles.primaryCta} href={INVENTORY_SOURCE_URL}>Reserve / Move In →</a>
              <a className={styles.secondaryCta} href={PHONE_LINK}>Call About This Size</a>
            </aside>
          </div>
        </div>
      </section>

      <section id="availability" className={styles.availabilitySection}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Your selected size</p>
            <h2>10 × 10 Climate-Controlled</h2>
            <p>Price, fit, and the next action are kept together so you do not have to start your search over.</p>
          </div>

          <article className={styles.inventoryCard}>
            <div className={styles.inventoryMain}>
              <span className={styles.inventoryBadge}>Climate-Controlled • 100 sq ft</span>
              <h3>10 × 10</h3>
              <p>Best for: bedroom furniture • bikes • bed set • desk • boxes</p>
              <div className={styles.featureRow}>
                <span>Indoor access</span><span>Climate-controlled</span><span>Ground-level facility</span>
              </div>
            </div>
            <div className={styles.inventoryPrice}>
              <small>Starting at</small>
              <strong>{money(unit.fromPrice)}<span>/mo</span></strong>
              <em>Live price confirmed before rental</em>
            </div>
            <div className={styles.inventoryActions}>
              <a className={styles.moveIn} href={INVENTORY_SOURCE_URL}>Reserve / Move In →</a>
              <a className={styles.callAction} href={PHONE_LINK}>Call for Help</a>
            </div>
          </article>

          <p className={styles.rentalNote}>Availability and exact unit pricing can change. The live rental system will show what is available before you complete your rental.</p>
        </div>
      </section>

      <section id="alternatives" className={styles.alternativesSection}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Tenant-first alternatives</p>
            <h2>Only move sizes if it serves what you are storing.</h2>
            <p>If 10 × 10 is the right fit, stay here. If it is clearly too much or too little space, compare the closest option instead.</p>
          </div>
          <div className={styles.alternativeGrid}>
            <a className={styles.altCard} href="/climate-controlled#climate-unit-5x5">
              <span>Need less room?</span>
              <strong>{smaller.size} Climate-Controlled</strong>
              <em>From {money(smaller.fromPrice)}/mo</em>
              <p>Boxes, seasonal décor, files, and smaller belongings.</p>
              <b>Compare smaller option →</b>
            </a>
            <div className={`${styles.altCard} ${styles.currentCard}`}>
              <span>Your current choice</span>
              <strong>{unit.size} Climate-Controlled</strong>
              <em>From {money(unit.fromPrice)}/mo</em>
              <p>Bedroom furniture, bikes, desk, bed set, and boxes.</p>
              <b>Stay with 10 × 10</b>
            </div>
            <a className={styles.altCard} href="/climate-controlled#climate-unit-10x15">
              <span>Need more room?</span>
              <strong>{larger.size} Climate-Controlled</strong>
              <em>From {money(larger.fromPrice)}/mo</em>
              <p>Several rooms of furniture, mattresses, and larger household overflow.</p>
              <b>Compare larger option →</b>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.photoSection}>
        <div className={styles.shell}>
          <div className={styles.singlePhoto}>
            <img src={CLIMATE_PHOTO} alt="Climate-controlled storage corridor at Lake City Self Storage" />
            <div className={styles.photoCaption}>
              <strong>The climate-controlled area you are choosing.</strong>
              <span>Real indoor storage at Lake City Self Storage.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className={styles.faqSection}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Before you rent</p>
            <h2>10 × 10 Rental Questions</h2>
          </div>
          <div className={styles.faq}>
            {faqItems.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
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
      </footer>
    </main>
  );
}
