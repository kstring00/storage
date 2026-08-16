import UnitDoorCarousel from "./UnitDoorCarousel";
import ORIGINAL_HERO from "./originalHero";

const PHONE_DISPLAY = "(386) 292-5494";
const PHONE_LINK = "tel:+13862925494";
const CONTACT_URL = "https://www.lakecityselfstorage.com/contact-us";
const PAY_ONLINE_URL = "https://www.lakecityselfstorage.com/payonline";
const LOGO_URL = "https://uploads.website.storedge.com/4ee8d3a8-7790-4195-9d2f-6b28480bad77/outlook-1lwjlfpa_01032024100037323.png";
const HERO_IMAGE = ORIGINAL_HERO;

const NON_CLIMATE_STORAGE_FEATURE_URL = "/non-climate-control";
const CLIMATE_STORAGE_FEATURE_URL = "/climate-controlled";

function SnowflakeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2v20M4.2 6.5l15.6 11M4.2 17.5l15.6-11M8.5 4.5 12 7l3.5-2.5M8.5 19.5 12 17l3.5 2.5M3.8 10l4 .5.7-4M20.2 14l-4-.5-.7 4" />
    </svg>
  );
}

function GarageIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 21V9l9-6 9 6v12" />
      <path d="M6 21V10h12v11M6 13h12M6 16h12M6 19h12" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 5 6v5c0 4.7 2.8 8.3 7 10 4.2-1.7 7-5.3 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-5" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <circle cx="12" cy="13" r="4" />
      <path d="m8 6 1-2h6l1 2" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function Check({ children }) {
  return (
    <li>
      <span className="checkMark">✓</span>
      <span>{children}</span>
    </li>
  );
}

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <div className="shell headerTop">
          <a href="https://www.lakecityselfstorage.com" aria-label="Lake City Self Storage">
            <img className="logo" src={LOGO_URL} alt="Lake City Self Storage" />
          </a>
          <a className="callTop" href={PHONE_LINK}>Call Us Today! <strong>{PHONE_DISPLAY}</strong></a>
        </div>
        <div className="shell navRow">
          <nav aria-label="Primary navigation">
            <a href="#why-climate">Compare Storage Types</a>
            <a href="#unit-doors">Featured Specials</a>
            <a href="#faq">FAQ</a>
            <a href={PAY_ONLINE_URL}>Pay Online</a>
          </nav>
        </div>
      </header>

      <section className="heroClimate">
        <div className="shell heroClimateGrid">
          <div className="heroClimateCopy">
            <div className="climateBadge"><GarageIcon /> Non-Climate-Controlled & Climate-Controlled Storage</div>
            <h1>Find the Right Storage Space for You</h1>
            <p className="heroLead">Whether you need convenient drive-up storage or a more stable indoor environment for sensitive belongings, Lake City Self Storage offers flexible unit options for moves, household overflow, business storage, and everything in between.</p>
            <div className="heroTrust">
              <span><ShieldIcon /> Secure Facility</span>
              <span><CameraIcon /> 24-Hour Video Surveillance</span>
              <span><LockIcon /> Gated Access</span>
            </div>
          </div>
          <div className="heroClimateVisual">
            <img src={HERO_IMAGE} alt="Lake City Self Storage facility with a variety of storage unit options" />
            <div className="climateVisualOverlay">
              <GarageIcon />
              <div>
                <strong>Storage Options for Every Need</strong>
                <span>Non-climate-controlled + climate-controlled units</span>
                <small>Choose the space and storage environment that best fits what you need to store.</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-climate" className="section whyClimateSection">
        <div className="shell">
          <div className="centerHeading">
            <h2>Which Storage Environment Fits What You Need?</h2>
            <p>Florida weather can be tough on stored belongings. Match the storage environment to what you are actually putting inside.</p>
          </div>
          <div className="comparisonGrid">
            <article className="comparisonCard standardCard">
              <div className="comparisonIcon"><GarageIcon /></div>
              <div>
                <h3>Non-Climate-Controlled Storage</h3>
                <p className="comparisonSub">Great for tougher items</p>
              </div>
              <ul>
                <Check>More exposed to outdoor temperature swings</Check>
                <Check>Better for items that can handle a less-controlled environment</Check>
                <Check>Usually the lower monthly rate</Check>
              </ul>
              <div className="bestFor">
                <strong>Best for:</strong>
                <span>Tools, patio furniture, lawn equipment, durable plastic totes, and other less-sensitive items.</span>
                <a
                  className="primaryButton"
                  href={NON_CLIMATE_STORAGE_FEATURE_URL}
                  aria-label="Explore Non-Climate-Controlled Storage feature page"
                  style={{ alignSelf: "flex-start", marginTop: "12px" }}
                >
                  Explore Non-Climate-Controlled Storage <span>→</span>
                </a>
              </div>
            </article>

            <article className="comparisonCard climateCard">
              <div className="recommendedRibbon">★ Recommended for sensitive belongings</div>
              <div className="comparisonIcon climateIcon"><SnowflakeIcon /></div>
              <div>
                <h3>Climate-Controlled Storage</h3>
                <p className="comparisonSub">Best for belongings you care about</p>
              </div>
              <ul>
                <Check>Provides a more stable indoor storage environment</Check>
                <Check>Helps reduce exposure to Florida heat and temperature swings</Check>
                <Check>Ideal for furniture, electronics, documents, textiles, and household items</Check>
              </ul>
              <div className="bestFor">
                <strong>Best for:</strong>
                <span>Furniture, electronics, mattresses, documents, clothing, décor, artwork, keepsakes, and household belongings.</span>
                <a
                  className="primaryButton"
                  href={CLIMATE_STORAGE_FEATURE_URL}
                  aria-label="Explore Climate-Controlled Storage feature page"
                  style={{ alignSelf: "flex-start", marginTop: "12px" }}
                >
                  Explore Climate-Controlled Storage <span>→</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <UnitDoorCarousel featuredHome />

      <section id="faq" className="section faqSection">
        <div className="shell faqShell">
          <div className="centerHeading compactHeading"><h2>Frequently Asked Questions</h2></div>
          <div className="faqList">
            <details>
              <summary>Why would I pay more for climate-controlled storage?</summary>
              <p>Because the upgrade is not only about square footage. Climate-controlled storage is designed for people who want a more stable indoor environment around furniture, electronics, mattresses, documents, textiles, décor, and other belongings they care about.</p>
            </details>
            <details>
              <summary>What kinds of belongings benefit most from climate-controlled storage?</summary>
              <p>Customers commonly consider climate control for wood and upholstered furniture, mattresses, electronics, paper records, photos, books, clothing, artwork, décor, and mixed household belongings.</p>
            </details>
            <details>
              <summary>Is climate-controlled the same as humidity-controlled?</summary>
              <p>No. Those terms are not interchangeable. Ask Lake City Self Storage about the facility&apos;s current environmental controls if your items require a specific temperature or humidity range.</p>
            </details>
            <details>
              <summary>Is climate-controlled storage necessary for everything?</summary>
              <p>No. If you mainly need space for tougher, less-sensitive items such as tools, outdoor equipment, or durable plastic totes, non-climate-controlled storage may be a perfectly reasonable choice.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="shell finalCtaInner">
          <div><strong>Choose the Storage Type That Fits What You&apos;re Storing.</strong><span>Compare climate-controlled and non-climate-controlled options before deciding on a unit size.</span></div>
          <a className="finalButton" href="#why-climate">Compare Storage Types →</a>
        </div>
      </section>

      <footer>
        <div className="shell footerMain">
          <img className="footerLogo" src={LOGO_URL} alt="Lake City Self Storage" />
          <div className="footerDetail"><span className="footerIcon">⌖</span><span>1143 NW Lake Jeffrey Rd<br />Lake City, FL 32055</span></div>
          <div className="footerDetail"><span className="footerIcon">☎</span><a href={PHONE_LINK}>{PHONE_DISPLAY}</a></div>
          <div className="footerDetail"><span className="footerIcon">◷</span><span>Access Hours<br />7:00 AM - 8:00 PM</span></div>
        </div>
        <div className="shell footerLegal"><span>© Lake City Self Storage</span><span>All sizes are approximate. Restrictions may apply.</span><a href={CONTACT_URL}>Contact</a></div>
      </footer>
    </main>
  );
}
