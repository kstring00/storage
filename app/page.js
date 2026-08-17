import UnitDoorCarousel from "./UnitDoorCarousel";
import FacilityPhotoCarousel from "./FacilityPhotoCarousel";
import ReviewStrip from "./ReviewStrip";
import PersistentContactBar from "./PersistentContactBar";
import LocationMap from "./LocationMap";
import funnelStyles from "./HomeFunnel.module.css";
import { climateUnits, nonClimateUnits, photoSets, money } from "./storageData";

const PHONE_DISPLAY = "(386) 292-5494";
const PHONE_LINK = "tel:+13862925494";
const CONTACT_URL = "https://www.lakecityselfstorage.com/contact-us";
const PAY_ONLINE_URL = "https://www.lakecityselfstorage.com/payonline";
const LOGO_URL = "https://uploads.website.storedge.com/4ee8d3a8-7790-4195-9d2f-6b28480bad77/outlook-1lwjlfpa_01032024100037323.png";

const NON_CLIMATE_STORAGE_FEATURE_URL = "/non-climate-control";
const CLIMATE_STORAGE_FEATURE_URL = "/climate-controlled";
const climateTen = climateUnits.find((unit) => unit.id === "10x10");
const nonClimateTen = nonClimateUnits.find((unit) => unit.id === "10x10");

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
      <PersistentContactBar />
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
            <a href="#unit-doors">Featured Units</a>
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
            <p className="heroLead">Start with what you are storing. Choose climate control when your belongings benefit from a more stable indoor environment, or choose drive-up non-climate storage when durable items and easy vehicle access matter more.</p>
            <div className="heroTrust">
              <span><ShieldIcon /> Secure Facility</span>
              <span><CameraIcon /> 24-Hour Video Surveillance</span>
              <span><LockIcon /> Gated Access</span>
            </div>
          </div>
          <FacilityPhotoCarousel
            images={photoSets.general}
            title="One facility. Two useful storage environments."
            copy="Choose the environment first, then the size and price that fit what you are storing."
          />
        </div>
      </section>

      <section id="why-climate" className="section whyClimateSection">
        <div className="shell">
          <div className="centerHeading">
            <span className={funnelStyles.funnelPrompt}>Step 1 • Choose your storage environment</span>
            <h2>Choose the Environment Your Belongings Actually Need</h2>
            <p>Neither option is automatically better. Pick the environment that fits what you are storing, then we will narrow the size and current price from there.</p>
          </div>
          <div className="comparisonGrid">
            <article className="comparisonCard standardCard">
              <div className="comparisonIcon"><GarageIcon /></div>
              <div>
                <h3>Non-Climate-Controlled Storage</h3>
                <p className="comparisonSub">Drive-up convenience for durable belongings</p>
              </div>
              <div className={funnelStyles.priceReference}>
                <span><strong>10 × 10 price reference</strong>Same-size comparison</span>
                <strong>{money(nonClimateTen.fromPrice)}<small>/mo</small></strong>
              </div>
              <p className={funnelStyles.choiceNote}>Other sizes and live availability may vary.</p>
              <ul>
                <Check>Drive directly to the unit for straightforward loading and unloading.</Check>
                <Check>Best for durable belongings that can tolerate Florida heat and humidity changes.</Check>
              </ul>
              <div className="bestFor">
                <strong>Choose this when:</strong>
                <span>You would be comfortable keeping the item in a typical garage and easy drive-up access matters to you.</span>
                <a className={`primaryButton ${funnelStyles.cardButton}`} href={NON_CLIMATE_STORAGE_FEATURE_URL}>
                  <span className={funnelStyles.ctaLabel}>See Non-Climate Sizes & Prices</span> <span>→</span>
                </a>
              </div>
            </article>

            <article className="comparisonCard climateCard">
              <div className="comparisonIcon climateIcon"><SnowflakeIcon /></div>
              <div>
                <h3>Climate-Controlled Storage</h3>
                <p className="comparisonSub">A more stable indoor environment for sensitive belongings</p>
              </div>
              <div className={`${funnelStyles.priceReference} ${funnelStyles.climatePrice}`}>
                <span><strong>10 × 10 price reference</strong>Same-size comparison</span>
                <strong>{money(climateTen.fromPrice)}<small>/mo</small></strong>
              </div>
              <p className={funnelStyles.choiceNote}>Other sizes and live availability may vary.</p>
              <ul>
                <Check>Reduces exposure to Florida heat and repeated environmental swings.</Check>
                <Check>Strong fit for furniture, electronics, mattresses, documents, clothing, artwork, and keepsakes.</Check>
              </ul>
              <div className="bestFor">
                <strong>Choose this when:</strong>
                <span>You would worry about heat or moisture affecting the condition of the item, or the belongings are sentimental, expensive, or difficult to replace.</span>
                <a className={`primaryButton ${funnelStyles.cardButton}`} href={CLIMATE_STORAGE_FEATURE_URL}>
                  <span className={funnelStyles.ctaLabel}>See Climate Sizes & Prices</span> <span>→</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <UnitDoorCarousel featuredHome />

      <ReviewStrip zone="general" />

      <section id="faq" className="section faqSection">
        <div className="shell faqShell">
          <div className="centerHeading compactHeading">
            <h2>General Storage Questions</h2>
            <p>Questions that apply no matter which storage environment you choose.</p>
          </div>
          <div className="faqList">
            <details>
              <summary>How do I decide between climate-controlled and non-climate-controlled storage?</summary>
              <p>Start with the belongings. Choose climate control for items that can be affected by heat, moisture, or repeated temperature changes. Choose non-climate drive-up storage for durable items when straightforward access and lower cost matter more.</p>
            </details>
            <details>
              <summary>What does drive-up access mean?</summary>
              <p>Drive-up access means you can park your vehicle directly in front of the storage unit for easier loading and unloading.</p>
            </details>
            <details>
              <summary>What are the facility access hours?</summary>
              <p>Lake City Self Storage lists daily access hours of 7:00 AM to 8:00 PM. Temporary 24-hour access may be available by approval.</p>
            </details>
            <details>
              <summary>Do I have to rent long-term?</summary>
              <p>No. Lake City Self Storage offers flexible month-to-month leases, so you can store short-term or long-term based on your needs.</p>
            </details>
            <details>
              <summary>Can I pay my storage bill online?</summary>
              <p>Yes. The facility supports online payment by debit or credit card, and you can ask the facility about autopay.</p>
            </details>
          </div>
        </div>
      </section>

      <LocationMap />

      <section className="finalCta">
        <div className="shell finalCtaInner">
          <div><strong>Choose the Storage Type That Fits What You&apos;re Storing.</strong><span>Compare the environments honestly first. Then choose the size and current price that make sense for you.</span></div>
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
