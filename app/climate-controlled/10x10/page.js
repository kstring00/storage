import styles from "./page.module.css";

const PHONE_DISPLAY = "(386) 292-5494";
const PHONE_LINK = "tel:+13862925494";
const RENTAL_URL = "https://www.lakecityselfstorage.com/1143-nw-lake-jeffrey-rd-lake-city-fl-32055";
const LOGO_URL = "https://uploads.website.storedge.com/4ee8d3a8-7790-4195-9d2f-6b28480bad77/outlook-1lwjlfpa_01032024100037323.png";

const demoInventory = [
  {
    label: "10 × 10 Climate-Controlled",
    detail: "Level 1 • Interior access",
    note: "Standard interior unit",
    price: "$129",
    badge: "Best value",
  },
  {
    label: "10 × 10 Climate-Controlled",
    detail: "Level 1 • Near entrance",
    note: "Shorter walk from entry",
    price: "$129",
    badge: "Popular",
  },
  {
    label: "10 × 10 Climate-Controlled",
    detail: "Level 1 • End unit",
    note: "Convenient access position",
    price: "$139",
    badge: null,
  },
];

const fitItems = [
  ["Bed set", "Queen or king mattress set"],
  ["Bikes", "2–3 bicycles"],
  ["Desk", "Desk + office chair"],
  ["Boxes", "Bedroom or apartment overflow"],
];

function PreviewRoom() {
  return (
    <div className={styles.room} aria-label="Illustration showing example belongings that can fit in a 10 by 10 climate-controlled storage unit">
      <div className={`${styles.item} ${styles.bed}`}><span>Bed set</span></div>
      <div className={`${styles.item} ${styles.desk}`}><span>Desk</span></div>
      <div className={`${styles.item} ${styles.bike}`}><span>Bikes</span></div>
      <div className={`${styles.item} ${styles.boxes}`}><span>Boxes</span></div>
      <div className={styles.roomFloor} />
      <div className={styles.roomCaption}>Example 10 × 10 layout</div>
    </div>
  );
}

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
            <a href="/">Home</a>
            <a href="/climate-controlled">Climate-Controlled</a>
            <a href="#availability">10 × 10 Availability</a>
            <a href={PHONE_LINK}>Call</a>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.breadcrumbs}>
            <a href="/">Home</a><span>›</span><a href="/climate-controlled">Climate-Controlled</a><span>›</span><strong>10 × 10</strong>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroMain}>
              <p className={styles.eyebrow}>Size conversion page prototype</p>
              <h1>10 × 10 Climate-Controlled Storage</h1>
              <p className={styles.sqft}>100 square feet</p>
              <div className={styles.pills}>
                <span>Indoor</span>
                <span>❄ Climate-Controlled</span>
                <span>Level 1 examples</span>
              </div>

              <PreviewRoom />

              <div className={styles.perfectFor}>
                <div>
                  <span className={styles.sectionLabel}>Perfect for</span>
                  <h2>A practical fit for a bedroom or apartment overflow.</h2>
                </div>
                <p>Use this page after a customer has already chosen climate control and the 10 × 10 size. It keeps them focused on this exact product instead of sending them back into the full inventory catalog.</p>
              </div>
            </div>

            <aside className={styles.summaryCard}>
              <span className={styles.demoBadge}>Demo data for staging</span>
              <div className={styles.summaryBlock}>
                <small>Current availability</small>
                <strong className={styles.available}>3 example units</strong>
              </div>
              <div className={styles.summaryBlock}>
                <small>Example monthly rate</small>
                <div className={styles.price}>$129<span>/mo</span></div>
                <p>Real availability, rates, and promotions would come from the facility&apos;s inventory system.</p>
              </div>
              <a className={styles.primaryCta} href="#availability">See 10 × 10 Options</a>
              <a className={styles.secondaryCta} href={PHONE_LINK}>Call About This Size</a>
              <div className={styles.reassurance}>
                <span>✓ You already chose climate control</span>
                <span>✓ You already chose 10 × 10</span>
                <span>✓ Only relevant inventory appears below</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.fitSection}>
        <div className={styles.shell}>
          <div className={styles.headingRow}>
            <div>
              <p className={styles.eyebrow}>Picture what fits</p>
              <h2>What can you expect to store in a 10 × 10?</h2>
            </div>
            <p>These are simple examples to help customers confirm the size before they reserve.</p>
          </div>
          <div className={styles.fitGrid}>
            {fitItems.map(([title, copy]) => (
              <article key={title}>
                <div className={styles.fitIcon}>{title === "Bed set" ? "▤" : title === "Bikes" ? "◎" : title === "Desk" ? "⌑" : "□"}</div>
                <strong>{title}</strong>
                <span>{copy}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="availability" className={styles.availabilitySection}>
        <div className={styles.shell}>
          <div className={styles.headingRow}>
            <div>
              <p className={styles.eyebrow}>Stay focused on the size they chose</p>
              <h2>Available 10 × 10 Climate-Controlled Units</h2>
            </div>
            <div className={styles.demoNote}>Prototype only — these three listings and prices are sample data.</div>
          </div>

          <div className={styles.inventoryList}>
            {demoInventory.map((unit, index) => (
              <article className={styles.inventoryCard} key={`${unit.detail}-${index}`}>
                <div className={styles.unitThumb} aria-hidden="true">
                  <span className={styles.thumbBed} />
                  <span className={styles.thumbBoxOne} />
                  <span className={styles.thumbBoxTwo} />
                  <span className={styles.thumbDesk} />
                </div>
                <div className={styles.unitDetails}>
                  {unit.badge ? <span className={styles.unitBadge}>{unit.badge}</span> : null}
                  <h3>{unit.label}</h3>
                  <p>{unit.detail}</p>
                  <span>{unit.note}</span>
                </div>
                <div className={styles.unitPrice}>
                  <small>Demo rate</small>
                  <strong>{unit.price}<span>/mo</span></strong>
                </div>
                <div className={styles.unitActions}>
                  <a href={RENTAL_URL}>Reserve</a>
                  <a href={RENTAL_URL} className={styles.moveIn}>Move In</a>
                  <a href={PHONE_LINK} className={styles.textLink}>Call for details</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.nextFit}>
        <div className={styles.shell}>
          <div className={styles.nextFitCard}>
            <div>
              <p className={styles.eyebrow}>Need a different fit?</p>
              <h2>Go back to compare the other climate-controlled sizes.</h2>
              <p>The smart template would eventually exist for every meaningful size, but this prototype only connects the 10 × 10.</p>
            </div>
            <a href="/climate-controlled#unit-doors">Compare Other Sizes →</a>
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
