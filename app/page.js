const PHONE_DISPLAY = "(386) 292-5494";
const PHONE_LINK = "tel:+13862925494";
const HOME_SITE = "https://lakecityselfstorage.com";
const UNITS_URL = "https://www.lakecityselfstorage.com/1143-nw-lake-jeffrey-rd-lake-city-fl-32055";

function Icon({ children }) {
  return <span className="iconWrap" aria-hidden="true">{children}</span>;
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3 5.5 5.6v5.1c0 4.4 2.7 8.1 6.5 10.3 3.8-2.2 6.5-5.9 6.5-10.3V5.6L12 3Z" />
      <path d="m9.3 12 1.8 1.8 3.7-4" />
    </svg>
  );
}

function ThermometerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14 14.8V5a3 3 0 1 0-6 0v9.8a5 5 0 1 0 6 0Z" />
      <path d="M11 8v8" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m3 10 9-7 9 7" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9 21v-7h6v7" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <circle cx="12" cy="13" r="4" />
      <path d="m8 6 1.2-2h5.6L16 6" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m4 7 8-4 8 4-8 4-8-4Z" />
      <path d="M4 7v10l8 4 8-4V7" />
      <path d="M12 11v10" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <div className="utilityBar">
        <div className="shell utilityInner">
          <span>Serving Lake City & surrounding communities for 20+ years</span>
          <a href={PHONE_LINK}>Call {PHONE_DISPLAY}</a>
        </div>
      </div>

      <header className="siteHeader">
        <div className="shell navInner">
          <a className="brand" href="#top" aria-label="Lake City Self Storage home">
            <span className="brandMark">LC</span>
            <span className="brandWords">
              <strong>Lake City</strong>
              <small>Self Storage</small>
            </span>
          </a>
          <nav className="desktopNav" aria-label="Primary navigation">
            <a href="#why-climate">Why Climate Control</a>
            <a href="#what-to-store">What to Store</a>
            <a href="#size">10×15 Size</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="button buttonSmall" href="#availability">View Availability</a>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="heroShade" />
        <div className="shell heroGrid">
          <div className="heroCopy">
            <div className="eyebrow lightEyebrow">CLIMATE-CONTROLLED STORAGE • LAKE CITY, FL</div>
            <h1>Protect what you’re storing.</h1>
            <p className="heroLead">
              A more controlled indoor environment for furniture, household belongings, and the things you don’t want sitting in Florida heat.
            </p>
            <div className="heroActions">
              <a className="button buttonPrimary" href="#availability">
                View Climate-Controlled Units <ArrowIcon />
              </a>
              <a className="button buttonGhost" href={PHONE_LINK}>Call {PHONE_DISPLAY}</a>
            </div>
            <div className="heroMicro">
              <span>FREE disc lock</span>
              <span>No rate increase for first year</span>
              <span>Secure gated access</span>
            </div>
          </div>

          <aside className="heroCard" aria-label="Climate controlled storage benefits">
            <span className="heroCardKicker">A better fit for what matters</span>
            <h2>Keep household storage out of the garage, attic, and shed.</h2>
            <p>
              Climate-controlled storage is designed for customers who want a more consistent indoor environment for belongings that may be sensitive to Florida conditions.
            </p>
            <div className="heroCardStats">
              <div><strong>20+</strong><span>years serving Lake City</span></div>
              <div><strong>24/7</strong><span>video surveillance</span></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="trustStrip">
        <div className="shell trustGrid">
          <div className="trustItem"><Icon><ThermometerIcon /></Icon><span><strong>Climate Controlled</strong><small>More controlled indoor environment</small></span></div>
          <div className="trustItem"><Icon><LockIcon /></Icon><span><strong>FREE Disc Lock</strong><small>Included with rental</small></span></div>
          <div className="trustItem"><Icon><ShieldIcon /></Icon><span><strong>Gated Access</strong><small>Secure keypad entry</small></span></div>
          <div className="trustItem"><Icon><CameraIcon /></Icon><span><strong>Video Surveillance</strong><small>24-hour monitoring</small></span></div>
        </div>
      </section>

      <section id="why-climate" className="section storySection">
        <div className="shell splitGrid">
          <div className="storyVisual" role="img" aria-label="Bright, organized home interior with furniture and storage boxes">
            <div className="storyBadge">
              <span>Florida storage, considered differently.</span>
            </div>
          </div>
          <div className="sectionCopy">
            <div className="eyebrow">WHY CLIMATE CONTROL</div>
            <h2>Florida weather stays outside. Your belongings stay in a more controlled environment.</h2>
            <p className="leadText">
              Garages, sheds, and traditional outdoor storage can experience more exposure to seasonal temperature changes. Climate-controlled storage gives customers an indoor option when the storage environment matters.
            </p>
            <div className="reasonList">
              <div><span>01</span><p><strong>More consistent surroundings.</strong> An indoor environment designed to reduce exposure to outdoor temperature swings.</p></div>
              <div><span>02</span><p><strong>Built for household belongings.</strong> A practical option for furniture, documents, electronics, décor, and boxed household items.</p></div>
              <div><span>03</span><p><strong>Purpose-built storage.</strong> Choose a dedicated climate-controlled space instead of leaving belongings in an unconditioned garage, attic, or shed.</p></div>
            </div>
            <p className="disclaimer">Climate-controlled storage is not the same as humidity-controlled storage. Ask the facility about current environmental controls for items with specific requirements.</p>
          </div>
        </div>
      </section>

      <section id="what-to-store" className="section softSection">
        <div className="shell">
          <div className="centerHeading">
            <div className="eyebrow">WHAT PEOPLE STORE</div>
            <h2>Some belongings deserve more than an empty corner of the garage.</h2>
            <p>Climate-controlled storage is especially useful when you care about the environment around what you’re storing.</p>
          </div>
          <div className="cardGrid sixCards">
            {[
              ["Furniture", "Sofas, dining sets, bedroom furniture, and other household pieces."],
              ["Electronics", "TVs, computers, speakers, and home electronics you want stored indoors."],
              ["Documents", "Business records, family paperwork, books, and important boxed files."],
              ["Home Décor", "Artwork, framed pieces, seasonal décor, rugs, and decorative items."],
              ["Household Boxes", "Packed belongings during a move, renovation, or transition."],
              ["Keepsakes", "Personal belongings you want stored in a cleaner, more controlled setting."],
            ].map(([title, text]) => (
              <article className="useCard" key={title}>
                <Icon><BoxIcon /></Icon>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section momentsSection">
        <div className="shell">
          <div className="centerHeading narrow">
            <div className="eyebrow">WHEN LIFE NEEDS MORE ROOM</div>
            <h2>Sometimes you don’t need a bigger house. You just need breathing room.</h2>
          </div>
          <div className="momentsGrid">
            <article><span className="momentNumber">01</span><h3>Moving</h3><p>Keep household belongings in one place while you transition between homes.</p></article>
            <article><span className="momentNumber">02</span><h3>Remodeling</h3><p>Clear furniture and belongings out of the way while work is being completed.</p></article>
            <article><span className="momentNumber">03</span><h3>Decluttering</h3><p>Create usable space at home without making permanent decisions about what stays.</p></article>
            <article><span className="momentNumber">04</span><h3>Household Overflow</h3><p>Give seasonal items, furniture, and extra belongings a dedicated place to live.</p></article>
          </div>
        </div>
      </section>

      <section id="size" className="section sizeSection">
        <div className="shell sizeCard">
          <div className="sizeCopy">
            <div className="eyebrow lightEyebrow">FEATURED CLIMATE-CONTROLLED SIZE</div>
            <h2>Need room for more than a few boxes?</h2>
            <p className="sizeIntro">A 10×15 climate-controlled unit gives you approximately 150 square feet of floor space—a strong fit for larger household storage, moves, remodels, and furniture.</p>
            <div className="sizeUses">
              <span>Furniture + boxes</span>
              <span>Moving transitions</span>
              <span>Home renovations</span>
              <span>Household overflow</span>
            </div>
            <div className="heroActions">
              <a className="button buttonWhite" href="#availability">Check 10×15 Availability <ArrowIcon /></a>
              <a className="textLink lightLink" href={PHONE_LINK}>Ask us if it’s the right size →</a>
            </div>
          </div>
          <div className="sizeDiagram" aria-label="10 by 15 storage unit size illustration">
            <div className="sizeRoom">
              <span className="dimension dimensionTop">15 ft</span>
              <span className="dimension dimensionSide">10 ft</span>
              <div className="boxShape boxOne" />
              <div className="boxShape boxTwo" />
              <div className="sofaShape" />
              <div className="tableShape" />
            </div>
            <div className="sizeMetric"><strong>150</strong><span>square feet</span></div>
          </div>
        </div>
      </section>

      <section className="section compareSection">
        <div className="shell compareGrid">
          <div className="sectionCopy compactCopy">
            <div className="eyebrow">CHOOSING YOUR STORAGE</div>
            <h2>Climate-controlled or drive-up?</h2>
            <p className="leadText">Neither option is universally “better.” The right choice depends on what you’re storing and what matters most to you.</p>
            <a className="textLink" href={PHONE_LINK}>Call us and we’ll help you choose →</a>
          </div>
          <div className="compareCards">
            <article className="compareCard featuredCompare">
              <span className="compareTag">CLIMATE CONTROLLED</span>
              <h3>Prioritize the storage environment</h3>
              <p>Best suited for customers storing household belongings that they prefer to keep in a more controlled indoor setting.</p>
              <ul>
                <li>More controlled environment</li>
                <li>Household-friendly storage</li>
                <li>Designed for sensitive belongings</li>
              </ul>
            </article>
            <article className="compareCard">
              <span className="compareTag neutralTag">DRIVE-UP</span>
              <h3>Prioritize loading convenience</h3>
              <p>Best suited when pulling a vehicle close to the unit and simplifying loading or unloading is the highest priority.</p>
              <ul>
                <li>Vehicle-to-unit access</li>
                <li>Fast loading and unloading</li>
                <li>Great for frequent access</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="availability" className="section availabilitySection">
        <div className="shell availabilityGrid">
          <div>
            <div className="eyebrow lightEyebrow">READY WHEN YOU ARE</div>
            <h2>Find the climate-controlled space that fits your life.</h2>
            <p>Get current availability, compare climate-controlled sizes, or talk with the Lake City team before you choose.</p>
          </div>
          <div className="availabilityActions">
            <a className="button buttonWhite wideButton" href={UNITS_URL}>View Current Units <ArrowIcon /></a>
            <a className="button buttonOutlineWhite wideButton" href={PHONE_LINK}>Call {PHONE_DISPLAY}</a>
            <small>Current unit availability and pricing are confirmed through Lake City Self Storage.</small>
          </div>
        </div>
      </section>

      <section id="faq" className="section faqSection">
        <div className="shell faqGrid">
          <div className="sectionCopy compactCopy">
            <div className="eyebrow">COMMON QUESTIONS</div>
            <h2>Climate-controlled storage, explained simply.</h2>
            <p className="leadText">Have a question about a specific item? Call the facility and talk through what you’re storing before you rent.</p>
            <a className="button buttonDark" href={PHONE_LINK}>Call {PHONE_DISPLAY}</a>
          </div>
          <div className="faqList">
            <details open>
              <summary>What is climate-controlled storage?</summary>
              <p>It is indoor storage designed to provide a more controlled environment than typical outdoor storage. Exact operating conditions can vary, so ask the facility if your belongings have specific requirements.</p>
            </details>
            <details>
              <summary>What should I consider storing in climate control?</summary>
              <p>Customers often choose it for furniture, electronics, documents, books, décor, boxed household belongings, and other items they prefer to keep in an indoor environment.</p>
            </details>
            <details>
              <summary>Is climate-controlled the same as humidity-controlled?</summary>
              <p>No. Those terms are not interchangeable. Confirm the facility’s current environmental controls before storing items that require a specific humidity range.</p>
            </details>
            <details>
              <summary>How much fits in a 10×15 unit?</summary>
              <p>A 10×15 provides about 150 square feet of floor space and is commonly considered for furniture, larger household storage, moves, and renovations. Exact fit depends on your items and how they are packed.</p>
            </details>
            <details>
              <summary>Can I rent online?</summary>
              <p>Use the current-units button above to review live rental options, or call the Lake City team for help choosing the right unit.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="shell finalCtaInner">
          <Icon><HomeIcon /></Icon>
          <div><span className="eyebrow">LAKE CITY SELF STORAGE</span><h2>More room at home starts here.</h2></div>
          <a className="button buttonPrimary" href="#availability">View Climate-Controlled Units <ArrowIcon /></a>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footerGrid">
          <div className="brand footerBrand">
            <span className="brandMark">LC</span>
            <span className="brandWords"><strong>Lake City</strong><small>Self Storage</small></span>
          </div>
          <p>Climate-controlled and drive-up storage in Lake City, Florida.</p>
          <div className="footerLinks"><a href={PHONE_LINK}>{PHONE_DISPLAY}</a><a href={HOME_SITE}>Main Website</a></div>
        </div>
        <div className="shell legal">Promotional terms and unit availability may change. Restrictions may apply. Confirm current rental terms with Lake City Self Storage.</div>
      </footer>

      <div className="mobileBar">
        <a href={PHONE_LINK}>Call Now</a>
        <a href="#availability">View Units</a>
      </div>
    </main>
  );
}
