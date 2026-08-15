const PHONE_DISPLAY = "(386) 292-5494";
const PHONE_LINK = "tel:+13862925494";
const HOME_SITE = "https://www.lakecityselfstorage.com";
const UNITS_URL = "https://www.lakecityselfstorage.com/1143-nw-lake-jeffrey-rd-lake-city-fl-32055";
const SIZE_GUIDE = "https://www.lakecityselfstorage.com/size-guide";
const BLOG_URL = "https://www.lakecityselfstorage.com/blog";
const CONTACT_URL = "https://www.lakecityselfstorage.com/contact-us";
const PAY_ONLINE_URL = "https://www.lakecityselfstorage.com/payonline";
const LOGO_URL = "https://uploads.website.storedge.com/4ee8d3a8-7790-4195-9d2f-6b28480bad77/outlook-1lwjlfpa_01032024100037323.png";
const HERO_IMAGE = "https://uploads.website.storedge.com/4ee8d3a8-7790-4195-9d2f-6b28480bad77/copy%20of%20dji_20250814143659_0214_d_08152025172434571.jpg";
const FACILITY_IMAGE = "https://uploads.website.storedge.com/4ee8d3a8-7790-4195-9d2f-6b28480bad77/copy%20of%20dji_20250814070645_0033_d_08152025174232437.jpg";

const climateSizes = [
  {
    size: "10 × 10",
    sqft: "100 sq. ft.",
    label: "Climate-Controlled",
    description: "A practical choice for a smaller apartment, boxed household storage, electronics, documents, and select furniture.",
    bestFor: "Smaller furniture, boxes, seasonal décor, electronics, records",
  },
  {
    size: "10 × 15",
    sqft: "150 sq. ft.",
    label: "Recommended",
    featured: true,
    description: "A strong fit for larger household storage, furniture from multiple rooms, moving transitions, and remodeling projects.",
    bestFor: "Furniture, mattresses, moving, remodeling, household overflow",
  },
  {
    size: "10 × 20",
    sqft: "200 sq. ft.",
    label: "Climate-Controlled",
    description: "More room for larger household contents, multiple furniture sets, and customers who need substantial indoor storage space.",
    bestFor: "Larger moves, major household storage, furniture, appliances",
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

function BoxIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m4 7 8-4 8 4-8 4-8-4Z" />
      <path d="M4 7v10l8 4 8-4V7M12 11v10" />
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
          <a href={HOME_SITE} aria-label="Lake City Self Storage">
            <img className="logo" src={LOGO_URL} alt="Lake City Self Storage" />
          </a>
          <a className="callTop" href={PHONE_LINK}>
            Call Us Today! <strong>{PHONE_DISPLAY}</strong>
          </a>
        </div>
        <div className="shell navRow">
          <nav aria-label="Primary navigation">
            <a href={UNITS_URL}>Storage Units</a>
            <a href="#why-climate">Why Climate Control</a>
            <a href="#sizes">Size Guide</a>
            <a href="#faq">FAQ</a>
            <a href={CONTACT_URL}>Contact</a>
            <a href={PAY_ONLINE_URL}>Pay Online</a>
          </nav>
        </div>
      </header>

      <section className="heroClimate">
        <div className="shell heroClimateGrid">
          <div className="heroClimateCopy">
            <div className="climateBadge"><SnowflakeIcon /> Indoor Climate-Controlled Storage</div>
            <h1>Find Your Climate-Controlled Storage Unit</h1>
            <p className="heroLead">
              When you are storing furniture, electronics, documents, mattresses, and household belongings you care about, the storage environment matters too.
            </p>
            <p className="heroSupport">
              Climate-controlled storage offers a more controlled indoor environment than many garages, sheds, and traditional unconditioned storage spaces exposed to Florida heat.
            </p>
            <div className="heroActions">
              <a className="primaryButton" href="#sizes">View Climate-Controlled Units <span>→</span></a>
              <a className="textButton" href={PHONE_LINK}>Not sure what you need? Call us</a>
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
              <div>
                <strong>Indoor</strong>
                <span>Climate-Controlled</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-climate" className="section whyClimateSection">
        <div className="shell">
          <div className="centerHeading">
            <h2>Why Choose Climate Control?</h2>
            <p>Because sometimes you are not just paying for more space — you are paying for a better environment around what you store.</p>
          </div>

          <div className="comparisonGrid">
            <article className="comparisonCard standardCard">
              <div className="comparisonIcon"><GarageIcon /></div>
              <h3>Standard Storage</h3>
              <p className="comparisonSub">Great when you mainly need extra space.</p>
              <ul>
                <Check>Good for tougher, less-sensitive items</Check>
                <Check>Useful for tools, outdoor gear, and basic overflow</Check>
                <Check>Often the better fit when the storage environment is not a concern</Check>
              </ul>
              <div className="bestFor">
                <strong>Best for:</strong>
                <span>Durable items, tools, outdoor equipment, plastic bins, and basic storage.</span>
              </div>
            </article>

            <article className="comparisonCard climateCard">
              <div className="recommendedRibbon">★ Recommended for sensitive belongings</div>
              <div className="comparisonIcon climateIcon"><SnowflakeIcon /></div>
              <h3>Climate-Controlled Storage</h3>
              <p className="comparisonSub">Better when the belongings themselves matter.</p>
              <ul>
                <Check>A more controlled indoor environment</Check>
                <Check>Popular for furniture, electronics, mattresses, documents, and décor</Check>
                <Check>A strong fit for moving, remodeling, and longer-term household storage</Check>
              </ul>
              <div className="bestFor">
                <strong>Best for:</strong>
                <span>Furniture, electronics, mattresses, documents, décor, keepsakes, and household belongings.</span>
              </div>
            </article>
          </div>

          <div className="honestyNote">
            <span className="infoCircle">i</span>
            <p><strong>Honesty first:</strong> if you are storing basic, durable items and only need extra space, a standard unit may be enough. Climate control makes the most sense when you care about the environment surrounding what you are storing.</p>
          </div>
        </div>
      </section>

      <section id="sizes" className="section sizesSection">
        <div className="shell">
          <div className="centerHeading compactHeading">
            <h2>Which Climate-Controlled Size Do You Need?</h2>
            <p>Start with the type of belongings you are storing, then choose the amount of space you need.</p>
          </div>

          <div className="sizeCardGrid">
            {climateSizes.map((unit) => (
              <article className={`sizeCard ${unit.featured ? "featuredSizeCard" : ""}`} key={unit.size}>
                {unit.featured ? <div className="recommendedTop">★ Recommended</div> : null}
                <div className="sizeBadge"><SnowflakeIcon /> Indoor Climate-Controlled</div>
                <h3>{unit.size}</h3>
                <div className="sqft">{unit.sqft}</div>
                <div className="unitIllustration" aria-hidden="true">
                  <div className="unitWall" />
                  <div className="box boxA" />
                  <div className="box boxB" />
                  <div className="box boxC" />
                  <div className="sofa" />
                  <div className="lamp" />
                </div>
                <p className="sizeDescription">{unit.description}</p>
                <div className="sizeBestFor"><strong>Best for:</strong> {unit.bestFor}</div>
                <div className="sizeActions">
                  <a className={`availabilityButton ${unit.featured ? "greenButton" : ""}`} href={UNITS_URL}>View Availability <span>→</span></a>
                  <a className="callButton" href={PHONE_LINK}>☎ Call to Ask</a>
                </div>
              </article>
            ))}
          </div>
          <p className="availabilityNote">Popular sizes shown for guidance. Current climate-controlled unit types, pricing, and availability should be confirmed through Lake City Self Storage.</p>
        </div>
      </section>

      <section className="section spotlightSection">
        <div className="shell spotlightPanel">
          <div className="spotlightVisual">
            <img src={FACILITY_IMAGE} alt="Lake City Self Storage property" />
            <div className="spotlightBadge">10 × 15 • 150 sq. ft.</div>
          </div>
          <div className="spotlightCopy">
            <div className="eyebrow">Featured household storage size</div>
            <h2>Why the 10 × 15 Climate-Controlled Unit Stands Out</h2>
            <p>
              A 10 × 15 gives you enough room for meaningful household storage without immediately jumping to a much larger footprint. It is especially compelling when the things taking up that space are furniture, mattresses, electronics, documents, décor, and belongings from several rooms.
            </p>
            <div className="spotlightLists">
              <ul>
                <Check>Furniture from multiple rooms</Check>
                <Check>Moving between homes</Check>
                <Check>Remodeling projects</Check>
              </ul>
              <ul>
                <Check>Mattresses and bedroom sets</Check>
                <Check>Electronics and documents</Check>
                <Check>Household overflow and keepsakes</Check>
              </ul>
            </div>
            <div className="trustTiles">
              <div><CameraIcon /><span>24-Hour<br />Video Surveillance</span></div>
              <div><SnowflakeIcon /><span>Indoor<br />Climate-Controlled</span></div>
              <div><BoxIcon /><span>150 sq. ft.<br />of floor space</span></div>
            </div>
            <a className="primaryButton spotlightButton" href={UNITS_URL}>View 10 × 15 Availability <span>→</span></a>
          </div>
        </div>
      </section>

      <section id="faq" className="section faqSection">
        <div className="shell faqShell">
          <div className="centerHeading compactHeading">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faqList">
            <details>
              <summary>Why would I pay more for climate-controlled storage?</summary>
              <p>Because the upgrade is not only about square footage. Climate-controlled storage is designed for customers who want a more controlled indoor environment around furniture, electronics, mattresses, documents, décor, and other belongings they care about.</p>
            </details>
            <details>
              <summary>When is a standard unit probably enough?</summary>
              <p>If you mainly need extra space for tougher, less-sensitive items such as tools, outdoor equipment, or durable plastic bins, standard storage may be the better value.</p>
            </details>
            <details>
              <summary>Is climate control the same as humidity control?</summary>
              <p>No. Those terms are not interchangeable. Ask the facility about its current environmental controls if you are storing items with specific temperature or humidity requirements.</p>
            </details>
            <details>
              <summary>Why is a 10 × 15 a good household storage size?</summary>
              <p>It provides approximately 150 square feet of floor space and can work well for furniture from multiple rooms, moving transitions, remodeling, and larger household overflow. Exact fit depends on your belongings and how they are packed.</p>
            </details>
          </div>

          <div className="standardExit">
            <GarageIcon />
            <span>Looking for standard drive-up storage instead?</span>
            <a href={UNITS_URL}>View standard units →</a>
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="shell finalCtaInner">
          <div>
            <strong>Clean. Secure. Climate Controlled.</strong>
            <span>Choose the storage environment that fits the belongings you care about.</span>
          </div>
          <a className="finalButton" href="#sizes">View Climate-Controlled Units →</a>
        </div>
      </section>

      <footer>
        <div className="shell footerMain">
          <img className="footerLogo" src={LOGO_URL} alt="Lake City Self Storage" />
          <div className="footerDetails">
            <a href={PHONE_LINK}>{PHONE_DISPLAY}</a>
            <a href={CONTACT_URL}>Contact Us</a>
            <a href={PAY_ONLINE_URL}>Pay Online</a>
          </div>
          <div className="footerDetails rightFooter">
            <span>Lake City Self Storage</span>
            <span>Lake City, Florida</span>
          </div>
        </div>
        <div className="shell footerLegal">© Lake City Self Storage • All sizes are approximate • Some restrictions may apply</div>
      </footer>
    </main>
  );
}
