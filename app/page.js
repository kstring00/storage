import UnitDoorCarousel from "./UnitDoorCarousel";

const PHONE_DISPLAY = "(386) 292-5494";
const PHONE_LINK = "tel:+13862925494";
const HOME_SITE = "https://www.lakecityselfstorage.com";
const UNITS_URL = "https://www.lakecityselfstorage.com/1143-nw-lake-jeffrey-rd-lake-city-fl-32055";
const CONTACT_URL = "https://www.lakecityselfstorage.com/contact-us";
const PAY_ONLINE_URL = "https://www.lakecityselfstorage.com/payonline";
const LOGO_URL = "https://uploads.website.storedge.com/4ee8d3a8-7790-4195-9d2f-6b28480bad77/outlook-1lwjlfpa_01032024100037323.png";
const HERO_IMAGE = "https://uploads.website.storedge.com/4ee8d3a8-7790-4195-9d2f-6b28480bad77/copy%20of%20dji_20250814143659_0214_d_08152025172434571.jpg";

const deteriorationCards = [
  {
    title: "Wood Furniture",
    type: "furniture",
    copy: "Repeated heat and moisture changes can make wood expand and contract, contributing to warping, cracking, swelling, joint stress, or finish changes over time.",
  },
  {
    title: "Photos & Documents",
    type: "documents",
    copy: "Warm, humid conditions can accelerate fading, yellowing, curling, sticking, and deterioration of paper, photographs, books, and printed materials.",
  },
  {
    title: "Clothing & Fabrics",
    type: "fabrics",
    copy: "Textiles can absorb moisture. In damp conditions that can contribute to musty odors, mildew risk, and stress on fabrics during longer storage periods.",
  },
  {
    title: "Electronics & Sensitive Items",
    type: "electronics",
    copy: "Heat and moisture exposure can stress components and contribute to corrosion or performance issues. A more stable indoor environment can be a better fit.",
  },
];

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

function FurnitureIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="10" y="16" width="44" height="33" rx="2" />
      <path d="M10 27h44M10 38h44M25 16v33M40 16v33M15 49v5M49 49v5" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M18 9h21l8 8v38H18z" />
      <path d="M39 9v10h10M24 28h18M24 35h18M24 42h13" />
    </svg>
  );
}

function FabricIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="m24 14-11 8 8 12 7-5v27h21V29l7 5 8-12-11-8-8 5c-5 3-11 3-16 0l-5-5Z" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="8" y="11" width="48" height="34" rx="2" />
      <path d="M25 54h14M32 45v9" />
      <circle cx="47" cy="35" r="3" />
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

function DeteriorationIcon({ type }) {
  if (type === "furniture") return <FurnitureIcon />;
  if (type === "documents") return <DocumentIcon />;
  if (type === "fabrics") return <FabricIcon />;
  return <MonitorIcon />;
}

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <div className="shell headerTop">
          <a href={HOME_SITE} aria-label="Lake City Self Storage">
            <img className="logo" src={LOGO_URL} alt="Lake City Self Storage" />
          </a>
          <a className="callTop" href={PHONE_LINK}>Call Us Today! <strong>{PHONE_DISPLAY}</strong></a>
        </div>
        <div className="shell navRow">
          <nav aria-label="Primary navigation">
            <a href="#why-climate">Why Climate Control</a>
            <a href="#deterioration">What Heat Can Do</a>
            <a href="#unit-doors">Choose a Size</a>
            <a href="#faq">FAQ</a>
            <a href={PAY_ONLINE_URL}>Pay Online</a>
          </nav>
        </div>
      </header>

      <section className="heroClimate">
        <div className="shell heroClimateGrid">
          <div className="heroClimateCopy">
            <div className="climateBadge"><SnowflakeIcon /> Indoor Climate-Controlled Storage</div>
            <h1>Find Your Climate-Controlled Storage Unit</h1>
            <p className="heroLead">Keep furniture, documents, electronics, mattresses, and household belongings in a more stable indoor environment than traditional unconditioned storage exposed to Florida heat.</p>
            <div className="heroActions">
              <a className="primaryButton" href="#unit-doors">Choose Your Climate-Controlled Size <span>→</span></a>
            </div>
            <div className="heroTrust">
              <span><ShieldIcon /> Secure Facility</span>
              <span><CameraIcon /> 24-Hour Video Surveillance</span>
              <span><LockIcon /> Gated Access</span>
            </div>
          </div>
          <div className="heroClimateVisual">
            <img src={HERO_IMAGE} alt="Lake City Self Storage facility" />
            <div className="climateVisualOverlay">
              <SnowflakeIcon />
              <div><strong>More Stable</strong><span>Indoor Environment</span><small>Reduce exposure to Florida heat swings.</small></div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-climate" className="section whyClimateSection">
        <div className="shell">
          <div className="centerHeading">
            <h2>Why Choose Climate Control?</h2>
            <p>Florida weather can be tough on stored belongings. The right storage environment depends on what you are putting inside.</p>
          </div>
          <div className="comparisonGrid">
            <article className="comparisonCard standardCard">
              <div className="comparisonIcon"><GarageIcon /></div>
              <div>
                <h3>Standard Storage</h3>
                <p className="comparisonSub">Great for tougher items</p>
              </div>
              <ul>
                <Check>More exposed to outdoor temperature swings</Check>
                <Check>Better for items that can handle a less-controlled environment</Check>
                <Check>Usually the lower monthly rate</Check>
              </ul>
              <div className="bestFor"><strong>Best for:</strong><span>Tools, patio furniture, lawn equipment, durable plastic totes, and other less-sensitive items.</span></div>
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
              <div className="bestFor"><strong>Best for:</strong><span>Furniture, electronics, mattresses, documents, clothing, décor, artwork, keepsakes, and household belongings.</span></div>
            </article>
          </div>
        </div>
      </section>

      <section id="deterioration" className="section deteriorationSection">
        <div className="shell">
          <div className="centerHeading deteriorationHeading">
            <h2>What Florida Heat & Humidity Can Do to Stored Belongings</h2>
            <p>Heat, moisture, and repeated environmental swings can affect common household materials over time.</p>
          </div>
          <div className="deteriorationGrid">
            {deteriorationCards.map((item) => (
              <article className="deteriorationCard" key={item.title}>
                <div className="deteriorationIcon"><DeteriorationIcon type={item.type} /></div>
                <div className={`objectVisual ${item.type}`} aria-hidden="true">
                  {item.type === "furniture" && <div className="dresser"><span /><span /><span /></div>}
                  {item.type === "documents" && <div className="paperStack"><span /><span /><span /></div>}
                  {item.type === "fabrics" && <div className="fabricStack"><span /><span /><span /></div>}
                  {item.type === "electronics" && <div className="screenVisual"><span /></div>}
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
          <div className="stabilityNote">
            <ShieldIcon />
            <span><strong>Why climate control helps:</strong> it reduces environmental extremes by providing a more stable indoor storage environment. Exact temperature and humidity conditions can vary; ask the facility about current controls for items with special requirements.</span>
          </div>
        </div>
      </section>

      <UnitDoorCarousel />

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
              <p>No. If you mainly need space for tougher, less-sensitive items such as tools, outdoor equipment, or durable plastic totes, standard storage may be a perfectly reasonable choice.</p>
            </details>
          </div>
          <div className="standardExit"><GarageIcon /><span>Just storing durable items?</span><a href={UNITS_URL}>View standard drive-up storage →</a></div>
        </div>
      </section>

      <section className="finalCta">
        <div className="shell finalCtaInner">
          <div><strong>Clean. Secure. Climate Controlled.</strong><span>Choose the amount of climate-controlled space that fits the belongings you care about.</span></div>
          <a className="finalButton" href="#unit-doors">Choose Your Size →</a>
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