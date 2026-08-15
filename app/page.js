const PHONE_DISPLAY = "(386) 292-5494";
const PHONE_LINK = "tel:+13862925494";
const HOME_SITE = "https://www.lakecityselfstorage.com";
const UNITS_URL = "https://www.lakecityselfstorage.com/1143-nw-lake-jeffrey-rd-lake-city-fl-32055";
const SIZE_GUIDE = "https://www.lakecityselfstorage.com/size-guide";
const FAQ_URL = "https://www.lakecityselfstorage.com/faq";
const BLOG_URL = "https://www.lakecityselfstorage.com/blog";
const CONTACT_URL = "https://www.lakecityselfstorage.com/contact-us";
const PAY_ONLINE_URL = "https://www.lakecityselfstorage.com/payonline";
const LOGO_URL = "https://uploads.website.storedge.com/4ee8d3a8-7790-4195-9d2f-6b28480bad77/outlook-1lwjlfpa_01032024100037323.png";
const HERO_IMAGE = "https://uploads.website.storedge.com/4ee8d3a8-7790-4195-9d2f-6b28480bad77/copy%20of%20dji_20250814143659_0214_d_08152025172434571.jpg";
const FACILITY_IMAGE = "https://uploads.website.storedge.com/4ee8d3a8-7790-4195-9d2f-6b28480bad77/copy%20of%20dji_20250814070645_0033_d_08152025174232437.jpg";

function ClimateIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 8v35" />
      <circle cx="32" cy="48" r="9" />
      <path d="M32 8a6 6 0 0 0-6 6v28a13 13 0 1 0 12 0V14a6 6 0 0 0-6-6Z" />
      <path d="M44 18h8M44 28h8" />
    </svg>
  );
}

function SizeIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M12 16h40v34H12z" />
      <path d="M18 24h28M18 31h28M18 38h18" />
      <path d="M8 12h48" />
    </svg>
  );
}

function PayIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="10" y="14" width="44" height="34" rx="2" />
      <path d="M10 22h44M18 54h28" />
      <path d="M35 30c-1.4-2-6.8-2.2-7.3 1.1-.6 3.5 8.3 2.5 7.8 6.2-.5 3.3-6.1 3.3-8.2 1.1M31.5 27v15" />
    </svg>
  );
}

function Check() {
  return <span className="check">•</span>;
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
            <a href={UNITS_URL}>Unit Prices & Sizes</a>
            <a href={SIZE_GUIDE}>Size Guide</a>
            <a href="#faq">FAQ</a>
            <a href={BLOG_URL}>Blogs</a>
            <a href={CONTACT_URL}>Contact Us</a>
            <a href={PAY_ONLINE_URL}>Pay Online</a>
          </nav>
        </div>
      </header>

      <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(17,36,49,.55), rgba(17,36,49,.55)), url("${HERO_IMAGE}")` }}>
        <div className="shell heroInner">
          <h1>10×15 Climate-Controlled Storage</h1>
          <p className="heroSub">Extra space for furniture, moving, remodeling & household storage</p>
          <p className="heroSmall">Climate-controlled storage in Lake City, FL</p>
          <a className="primaryButton" href={UNITS_URL}>VIEW 10×15 AVAILABILITY</a>
        </div>
      </section>

      <section className="quickLinks">
        <div className="shell quickGrid">
          <a href="#why" className="quickItem">
            <ClimateIcon />
            <strong>CLIMATE CONTROLLED</strong>
          </a>
          <a href="#fits" className="quickItem">
            <SizeIcon />
            <strong>WHAT FITS IN A 10×15?</strong>
          </a>
          <a href={UNITS_URL} className="quickItem">
            <PayIcon />
            <strong>VIEW AVAILABILITY</strong>
          </a>
        </div>
      </section>

      <section id="why" className="section whySection">
        <div className="shell">
          <h2 className="sectionTitle">Why Choose a 10×15 Climate-Controlled Unit?</h2>
          <div className="whyGrid">
            <div>
              <h3>A Great Fit For:</h3>
              <ul>
                <li><Check />Furniture from multiple rooms</li>
                <li><Check />Moving between homes</li>
                <li><Check />Home renovations or remodeling</li>
                <li><Check />Downsizing and household overflow</li>
                <li><Check />Boxes, décor, documents and keepsakes</li>
              </ul>
            </div>
            <div>
              <h3>Climate-Controlled Benefits</h3>
              <ul>
                <li><Check />A more controlled indoor storage environment</li>
                <li><Check />A strong option for furniture, electronics and documents</li>
                <li><Check />24-hour video surveillance</li>
                <li><Check />Security fencing with keypad gate access</li>
                <li><Check />FREE disc lock with rental</li>
                <li><Check />No rate increase for the first year</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="fits" className="section unitIntro">
        <div className="shell unitGrid">
          <img className="facilityPhoto" src={FACILITY_IMAGE} alt="Lake City Self Storage facility" />
          <div className="unitCopy">
            <h2>Is a 10×15 Right for You?</h2>
            <p>
              A 10×15 storage unit provides approximately <strong>150 square feet of floor space</strong>. It can be a practical choice when a smaller unit is not enough, but you do not need the footprint of a larger 10×20.
            </p>
            <p>
              It is especially useful for customers storing larger furniture, the contents of several rooms, household boxes, or belongings during a move, remodel, downsizing project, or other transition.
            </p>
            <p>
              Choosing climate control adds a more controlled indoor environment for belongings you may not want sitting in an unconditioned garage, shed, or outdoor unit in Florida.
            </p>
            <a className="wideButton" href={UNITS_URL}>View 10×15 Climate-Controlled Availability</a>
          </div>
        </div>
      </section>

      <section className="section fitSection">
        <div className="shell">
          <h2 className="sectionTitle">What Can a 10×15 Be Used For?</h2>
          <div className="fitGrid">
            <div><strong>Moving</strong><span>Furniture, mattresses, boxes and household belongings while between homes.</span></div>
            <div><strong>Remodeling</strong><span>Clear rooms so contractors can work without your furniture in the way.</span></div>
            <div><strong>Decluttering</strong><span>Free up bedrooms, closets and living areas without immediately getting rid of things.</span></div>
            <div><strong>Household Overflow</strong><span>Create dedicated space for larger furniture, décor, records and extra belongings.</span></div>
          </div>
          <p className="fitNote">All sizes are approximate. Exact fit depends on the dimensions of your belongings and how they are packed.</p>
        </div>
      </section>

      <section className="section valueSection">
        <div className="shell valueGrid">
          <div>
            <h2>10×15 Climate-Controlled Storage in Lake City</h2>
            <p>
              Lake City Self Storage has served the surrounding community for more than 20 years. Our climate-controlled units pair useful household space with gated access, 24-hour video surveillance, online renting and customer service when you need help choosing a unit.
            </p>
          </div>
          <div className="valueBox">
            <strong>Ready to see what is available?</strong>
            <span>View current unit availability and rental options.</span>
            <a className="primaryButton" href={UNITS_URL}>VIEW AVAILABLE UNITS</a>
            <a className="phoneLink" href={PHONE_LINK}>or call {PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>

      <section id="faq" className="section faqSection">
        <div className="shell">
          <h2 className="sectionTitle">Frequently Asked Questions</h2>
          <div className="faqList">
            <details>
              <summary>How large is a 10×15 storage unit?</summary>
              <p>A 10×15 provides approximately 150 square feet of floor space. Exact dimensions and fit can vary, so confirm the specific unit before renting.</p>
            </details>
            <details>
              <summary>What is a 10×15 commonly used for?</summary>
              <p>It can work well for furniture, household boxes, moves, remodels, downsizing and larger amounts of household overflow.</p>
            </details>
            <details>
              <summary>Why choose climate-controlled storage?</summary>
              <p>Climate-controlled storage provides a more controlled indoor environment than many unconditioned storage spaces. Customers commonly consider it for furniture, electronics, documents and other household belongings.</p>
            </details>
            <details>
              <summary>Do you offer month-to-month rentals?</summary>
              <p>Lake City Self Storage offers flexible month-to-month rental options. Review the current rental terms when selecting a unit.</p>
            </details>
            <details>
              <summary>Can I rent online?</summary>
              <p>Yes. Use the availability buttons on this page to review current units and begin the online rental process.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="hoursSection">
        <div className="shell">
          <h3>Office Hours</h3>
          <div className="hoursRow"><span>Sunday</span><span>11:00 AM - 3:00 PM</span></div>
          <div className="hoursRow"><span>Monday - Friday</span><span>9:00 AM - 8:00 PM</span></div>
          <div className="hoursRow shaded"><span>Saturday</span><span>11:00 AM - 4:00 PM</span></div>
          <strong className="closed">Closed on Holidays</strong>
          <h3 className="accessHeading">Access Hours</h3>
          <div className="hoursRow shaded"><span>Sunday - Saturday</span><span>7:00 AM - 8:00 PM</span></div>
          <strong className="accessNote">24hr Access is only available per approval and can only be temporary.</strong>
          <a className="contactBar" href={CONTACT_URL}>please contact us with any questions!</a>
        </div>
      </section>

      <footer>
        <div className="shell footerInner">
          <span>© Lake City Self Storage</span>
          <span>All sizes are approximate | Some restrictions may apply</span>
        </div>
      </footer>
    </main>
  );
}
