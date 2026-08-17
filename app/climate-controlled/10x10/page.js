import ReviewStrip from "../../ReviewStrip";
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

const fitItems = [
  ["Bed set", "A queen or king mattress set plus bedroom pieces"],
  ["Bikes", "Several bicycles with room for boxes or gear"],
  ["Desk", "Desk, office chair, and home-office overflow"],
  ["Boxes", "Bedroom, apartment, or seasonal household overflow"],
];

const faqItems = [
  {
    question: `Is ${money(unit.fromPrice)}/mo guaranteed?`,
    answer: `Rates and availability can change. ${money(unit.fromPrice)}/mo is the current starting rate shown for this size. Check current availability before renting to see today's exact price and move-in options.`,
  },
  {
    question: "What happens if the 10 × 10 is sold out?",
    answer: "Stay in the climate-controlled section and compare the nearest practical size up or down. The goal is to keep the storage environment your belongings need without paying for unnecessary space.",
  },
  {
    question: "Can I reserve or move in online?",
    answer: "Yes. You can view current units and complete the rental process online. If you want help choosing the right size first, call the facility and someone can walk you through the options.",
  },
  {
    question: "What if I am not sure the 10 × 10 is the right size?",
    answer: "Use the examples on this page as a guide, then compare the other climate-controlled sizes or call the facility. Choosing the smallest practical size that safely fits your belongings can help you avoid paying for space you do not need.",
  },
];

export default function ClimateTenByTenPage() {
  return (
    <main className={styles.page}>
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
            <a href="#what-fits">What Fits</a>
            <a href="#availability">Price & Availability</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.breadcrumbs}>
            <a href="/">Home</a><span>›</span><a href="/climate-controlled">Climate-Controlled</a><span>›</span><strong>10 × 10</strong>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>10 × 10 climate-controlled storage</p>
              <h1>A practical amount of space without jumping to a larger unit.</h1>
              <p className={styles.lead}>A 10 × 10 gives you 100 square feet of indoor climate-controlled storage. It is a strong fit for bedroom furniture, apartment overflow, bikes, a desk, boxes, and other belongings you want kept in a more stable environment.</p>
              <div className={styles.pills}>
                <span>100 sq ft</span><span>Indoor</span><span>❄ Climate-Controlled</span>
              </div>
              <div className={styles.reassurance}>
                <span>✓ Great for bedroom or apartment overflow</span>
                <span>✓ Climate-controlled indoor storage</span>
                <span>✓ Compare before moving up a size</span>
              </div>
            </div>

            <aside className={styles.summaryCard}>
              <span className={styles.summaryLabel}>Starting at</span>
              <div className={styles.price}>{money(unit.fromPrice)}<span>/mo</span></div>
              <p>See today&apos;s available 10 × 10 climate-controlled units, current pricing, and move-in options.</p>
              <a className={styles.primaryCta} href={INVENTORY_SOURCE_URL}>See Available 10 × 10 Units →</a>
              <a className={styles.secondaryCta} href={PHONE_LINK}>Call About This Size</a>
            </aside>
          </div>

          <div className={styles.photoBlock}>
            <div className={styles.singlePhoto}>
              <img src={CLIMATE_PHOTO} alt="Climate-controlled storage corridor at Lake City Self Storage" />
              <div className={styles.photoCaption}>
                <strong>Climate-controlled storage at Lake City Self Storage</strong>
                <span>Indoor access for belongings that benefit from a more stable storage environment.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-fits" className={styles.sectionAlt}>
        <div className={styles.shell}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>Picture the space</p>
            <h2>What fits well in a 10 × 10?</h2>
            <p>You want enough room to store comfortably without automatically paying for a larger unit.</p>
          </div>
          <div className={styles.fitGrid}>
            {fitItems.map(([title, copy], index) => (
              <article key={title}>
                <span className={styles.fitIcon}>{["▤", "◎", "⌑", "□"][index]}</span>
                <strong>{title}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.guidanceSection}>
        <div className={styles.shell}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>Choose the size with confidence</p>
            <h2>Is the 10 × 10 enough for what you are storing?</h2>
          </div>
          <div className={styles.guidanceGrid}>
            <article className={styles.goodFit}>
              <span>10 × 10 is a strong fit</span>
              <h3>Stay with this size if...</h3>
              <ul>
                <li>You are storing a bedroom set, bikes, desk, boxes, or apartment overflow.</li>
                <li>You want climate control but do not need several rooms worth of furniture space.</li>
                <li>Your belongings can be packed comfortably without forcing or damaging them.</li>
              </ul>
            </article>
            <article>
              <span>You may need more room</span>
              <h3>Compare the 10 × 15 if...</h3>
              <ul>
                <li>You are moving multiple rooms of furniture or several large pieces together.</li>
                <li>You expect to add more belongings during the storage period.</li>
                <li>You would otherwise need to stack or squeeze sensitive items too tightly.</li>
              </ul>
              <a href="/climate-controlled#unit-doors">Compare Climate-Controlled Sizes →</a>
            </article>
          </div>
        </div>
      </section>

      <section id="availability" className={styles.availabilitySection}>
        <div className={styles.shell}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>Ready when you are</p>
            <h2>Check 10 × 10 Climate-Controlled Availability</h2>
            <p>See current availability and pricing, then choose the unit that works best for your move-in.</p>
          </div>
          <article className={styles.inventoryCard}>
            <div>
              <span className={styles.inventoryBadge}>10 × 10 • Climate-Controlled</span>
              <h3>100 sq ft of indoor climate-controlled storage</h3>
              <p>Bedroom or apartment overflow • Bikes • Bed set • Desk</p>
            </div>
            <div className={styles.inventoryPrice}>
              <small>Starting at</small>
              <strong>{money(unit.fromPrice)}<span>/mo</span></strong>
            </div>
            <div className={styles.inventoryActions}>
              <a href={INVENTORY_SOURCE_URL}>See Available Units →</a>
              <a href={PHONE_LINK}>Call to Ask</a>
            </div>
          </article>
          <div className={styles.rentalNote}>
            <strong>Not sure yet?</strong>
            <span>Call before renting and we can help you compare this size with the next option up.</span>
          </div>
        </div>
      </section>

      <ReviewStrip compact />

      <section id="faq" className={styles.faqSection}>
        <div className={styles.shell}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>Before you rent</p>
            <h2>10 × 10 Storage Questions</h2>
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

      <section className={styles.nextFit}>
        <div className={styles.shell}>
          <div className={styles.nextFitCard}>
            <div>
              <p className={styles.eyebrow}>Need a different fit?</p>
              <h2>Compare the other climate-controlled sizes.</h2>
              <p>If the 10 × 10 feels too tight or larger than you need, compare the nearby sizes before making your decision.</p>
            </div>
            <a href="/climate-controlled#unit-doors">Compare Other Climate Sizes →</a>
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
