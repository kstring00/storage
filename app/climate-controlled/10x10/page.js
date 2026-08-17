import FacilityPhotoCarousel from "../../FacilityPhotoCarousel";
import ReviewStrip from "../../ReviewStrip";
import {
  climateUnits,
  INVENTORY_AS_OF,
  INVENTORY_SOURCE_URL,
  money,
  photoSets,
} from "../../storageData";
import styles from "./page.module.css";

const PHONE_DISPLAY = "(386) 292-5494";
const PHONE_LINK = "tel:+13862925494";
const LOGO_URL = "https://uploads.website.storedge.com/4ee8d3a8-7790-4195-9d2f-6b28480bad77/outlook-1lwjlfpa_01032024100037323.png";
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
    answer: `No. ${money(unit.fromPrice)}/mo is the starting-rate snapshot captured from Lake City Self Storage's official inventory on ${INVENTORY_AS_OF}. The live rental system remains the source of truth for the exact rate, promotions, and availability at the moment you rent.`,
  },
  {
    question: "What happens if the 10 × 10 is sold out?",
    answer: "Stay in the climate-controlled branch and compare the nearest practical size up or down. The goal is to keep the storage environment your belongings need without paying for unnecessary space.",
  },
  {
    question: "Can I reserve or move in online?",
    answer: "Yes. The official Lake City Self Storage rental system handles current inventory and the final reservation or move-in transaction. This page is designed to help you arrive there already confident about the storage type and size you want.",
  },
  {
    question: "What if I am not sure the 10 × 10 is the right size?",
    answer: "Use the examples on this page as a guide, then compare the other climate-controlled sizes or call the facility. Choosing the smallest practical size that safely fits your belongings is usually better than paying for space you do not need.",
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
              <p className={styles.eyebrow}>10 × 10 climate-controlled</p>
              <h1>Keep the Decision Moving Forward.</h1>
              <p className={styles.lead}>You already chose climate control and you are looking at a 10 × 10. This page keeps the next decision simple: confirm what fits, see the current starting price, and check the exact live inventory when you are ready.</p>
              <div className={styles.pills}>
                <span>100 sq ft</span><span>Indoor</span><span>❄ Climate-Controlled</span>
              </div>
              <div className={styles.reassurance}>
                <span>✓ Climate control already chosen</span>
                <span>✓ 10 × 10 already chosen</span>
                <span>✓ No need to browse unrelated sizes</span>
              </div>
            </div>

            <aside className={styles.summaryCard}>
              <span className={styles.summaryLabel}>Current starting-rate snapshot</span>
              <div className={styles.price}>{money(unit.fromPrice)}<span>/mo</span></div>
              <p>Snapshot from Lake City Self Storage&apos;s official online inventory on {INVENTORY_AS_OF}. Exact availability and promotions can change.</p>
              <a className={styles.primaryCta} href={INVENTORY_SOURCE_URL}>Check Official 10 × 10 Availability →</a>
              <a className={styles.secondaryCta} href={PHONE_LINK}>Call About This Size</a>
            </aside>
          </div>

          <div className={styles.photoBlock}>
            <FacilityPhotoCarousel
              images={photoSets.climate}
              title="This is the actual climate-controlled environment."
              copy="Real facility photography keeps the promise on this page connected to what you will see when you arrive."
              compact
            />
          </div>
        </div>
      </section>

      <section id="what-fits" className={styles.sectionAlt}>
        <div className={styles.shell}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>Confirm the fit</p>
            <h2>What does a 10 × 10 make sense for?</h2>
            <p>The goal is not to sell you the biggest unit. It is to help you choose enough space for what you actually need to protect.</p>
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
            <p className={styles.eyebrow}>Tenant-first guidance</p>
            <h2>Choose the 10 × 10 when it serves your storage job.</h2>
          </div>
          <div className={styles.guidanceGrid}>
            <article className={styles.goodFit}>
              <span>Strong fit</span>
              <h3>Stay with the 10 × 10 if...</h3>
              <ul>
                <li>You are storing a bedroom set, bikes, desk, boxes, or apartment overflow.</li>
                <li>You want climate control but do not need several rooms worth of furniture space.</li>
                <li>The belongings can be packed efficiently without forcing or damaging them.</li>
              </ul>
            </article>
            <article>
              <span>Compare another size</span>
              <h3>Consider the 10 × 15 instead if...</h3>
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
            <p className={styles.eyebrow}>One product, one source of truth</p>
            <h2>10 × 10 Climate-Controlled Price & Availability</h2>
            <p>Until the live inventory API is connected, this page reads from one centralized rate snapshot and hands the final availability check to Lake City Self Storage&apos;s official rental system.</p>
          </div>
          <article className={styles.inventoryCard}>
            <div>
              <span className={styles.inventoryBadge}>10 × 10 • Climate-Controlled</span>
              <h3>100 sq ft of indoor climate-controlled storage</h3>
              <p>Bedroom or apartment overflow • Bikes • Bed set • Desk</p>
            </div>
            <div className={styles.inventoryPrice}>
              <small>Starting-rate snapshot</small>
              <strong>{money(unit.fromPrice)}<span>/mo</span></strong>
            </div>
            <div className={styles.inventoryActions}>
              <a href={INVENTORY_SOURCE_URL}>Check Live Availability →</a>
              <a href={PHONE_LINK}>Call to Ask</a>
            </div>
          </article>
          <div className={styles.apiReady}>
            <strong>API-ready structure:</strong>
            <span>When the live inventory feed is available, exact 10 × 10 variants, availability, promotions, and transaction links can populate this section without redesigning the page.</span>
          </div>
        </div>
      </section>

      <ReviewStrip zone="climate" compact />

      <section id="faq" className={styles.faqSection}>
        <div className={styles.shell}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>Before you rent</p>
            <h2>10 × 10 Reservation Questions</h2>
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
              <h2>Stay in climate control and compare the other sizes.</h2>
              <p>The 10 × 10 is the first conversion-page prototype. The rest of the size pages can use this same structure once this interaction is proven.</p>
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
