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
const climateFloor = Math.min(...climateUnits.map((unit) => unit.fromPrice));
const nonClimateFloor = Math.min(...nonClimateUnits.map((unit) => unit.fromPrice));

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
        <div className="shell headerTop" style={{ minHeight: "clamp(82px, 9vw, 104px)" }}>
          <a href="https://www.lakecityselfstorage.com" aria-label="Lake City Self Storage">
            <img
              className="logo"
              style={{ width: "clamp(108px, 13vw, 150px)", height: "clamp(74px, 9vw, 100px)" }}
              src={LOGO_URL}
              alt="Lake City Self Storage"
            />
          </a>
          <a className="callTop" href={PHONE_LINK}>Call Us Today! <strong>{PHONE_DISPLAY}</strong></a>
        </div>
        <div className="shell navRow">
          <nav aria-label="Primary navigation">
            <a href="/climate-controlled#unit-doors">Climate-Controlled Units</a>
            <a href="/non-climate-control#drive-up-sizes">Non-Climate-Controlled Units</a>
            <a href={PAY_ONLINE_URL}>Pay Online</a>
          </nav>
        </div>
      </header>

      <section className="heroClimate">
        <div className="shell heroClimateGrid">
          <div className="heroClimateCopy">
            <div className="climateBadge"><GarageIcon /> Non-Climate-Controlled & Climate-Controlled Storage</div>
            <h1>Find the Right Storage Space for You</h1>
            <p className="heroLead">Start with what you are storing. Choose climate control when your belongings benefit from a more stable indoor environment, or choose safe, simple drive-up storage when easy vehicle access is the better fit.</p>
            <div className="heroTrust">
              <span><ShieldIcon /> Secure Facility</span>
              <span><CameraIcon /> 24-Hour Video Surveillance</span>
              <span><LockIcon /> Gated Access</span>
            </div>
          </div>
          <FacilityPhotoCarousel
            images={photoSets.general}
            title="One facility. Two useful storage types."
            copy="Choose the storage type first, then the size and current price that fit what you are storing."
          />
        </div>
      </section>

      <section id="why-climate" className="section whyClimateSection">
        <div className="shell">
          <div className="centerHeading">
            <span className={funnelStyles.funnelPrompt}>Step 1 • Choose your storage type</span>
            <h2>Choose the Storage Type That You Need</h2>
            <p>Start with the type of storage that fits what you are storing. Then narrow down the size and current price.</p>
          </div>
          <div className="comparisonGrid">
            <article className={`comparisonCard standardCard ${funnelStyles.levelCard}`}>
              <div className="comparisonIcon"><GarageIcon /></div>
              <div>
                <h3>Non-Climate-Controlled Storage</h3>
                <p className="comparisonSub">Safe, simple drive-up storage</p>
              </div>
              <div className={funnelStyles.storageTypePhoto}>
                <img
                  src={photoSets.nonClimate[0].src}
                  alt={photoSets.nonClimate[0].alt}
                  loading="lazy"
                  decoding="async"
                />
                <span className={funnelStyles.photoLabel}>Drive-Up Storage</span>
              </div>
              <div className={funnelStyles.priceReference}>
                <span><strong>Prices as low as</strong>Current listed starting rate</span>
                <strong>{money(nonClimateFloor)}<small>/mo</small></strong>
              </div>
              <p className={funnelStyles.choiceNote}>Rates vary by size and availability.</p>
              <ul className={funnelStyles.featureList}>
                <Check>Drive directly to the unit for straightforward loading and unloading.</Check>
                <Check>A practical fit for garage-friendly items such as tools, lawn equipment, patio items, and sealed totes.</Check>
              </ul>
              <div className={`bestFor ${funnelStyles.bestForAligned}`}>
                <strong>Choose this when:</strong>
                <span>You want direct vehicle access and are storing garage-friendly items that do not need climate control.</span>
                <a className={`primaryButton ${funnelStyles.cardButton}`} href={NON_CLIMATE_STORAGE_FEATURE_URL}>
                  <span className={funnelStyles.ctaLabel}>See Non-Climate Sizes & Prices</span> <span>→</span>
                </a>
              </div>
            </article>

            <article className={`comparisonCard climateCard ${funnelStyles.levelCard}`}>
              <div className="comparisonIcon climateIcon"><SnowflakeIcon /></div>
              <div>
                <h3>Climate-Controlled Storage</h3>
                <p className="comparisonSub">A more stable indoor environment for sensitive belongings</p>
              </div>
              <div className={funnelStyles.storageTypePhoto}>
                <img
                  src={photoSets.climate[1].src}
                  alt={photoSets.climate[1].alt}
                  loading="lazy"
                  decoding="async"
                />
                <span className={funnelStyles.photoLabel}>Indoor Climate-Controlled</span>
              </div>
              <div className={`${funnelStyles.priceReference} ${funnelStyles.climatePrice}`}>
                <span><strong>Prices as low as</strong>Current listed starting rate</span>
                <strong>{money(climateFloor)}<small>/mo</small></strong>
              </div>
              <p className={funnelStyles.choiceNote}>Rates vary by size and availability.</p>
              <ul className={funnelStyles.featureList}>
                <Check>Reduces exposure to Florida heat and repeated environmental swings.</Check>
                <Check>Strong fit for furniture, electronics, mattresses, documents, clothing, artwork, and keepsakes.</Check>
              </ul>
              <div className={`bestFor ${funnelStyles.bestForAligned}`}>
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

      <ReviewStrip zone="general" />

      <LocationMap />

      <section className="finalCta">
        <div className="shell finalCtaInner">
          <div><strong>Choose the Storage Type That Fits What You&apos;re Storing.</strong><span>Pick climate-controlled or safe, simple drive-up storage, then choose the size and current price that make sense for you.</span></div>
          <a className="finalButton" href="#why-climate">Choose a Storage Type →</a>
        </div>
      </section>

      <footer>
        <div className="shell footerMain">
          <img className="footerLogo" src={LOGO_URL} alt="Lake City Self Storage" />
          <div className="footerDetail"><span className="footerIcon">⌖</span><span>1143 NW Lake Jeffrey Rd<br />Lake City, FL 32055</span></div>
          <div className="footerDetail"><span className="footerIcon">☎</span><a href={PHONE_LINK}>{PHONE_DISPLAY}</a></div>
          <div className="footerDetail"><span className="footerIcon">◷</span><span>Access Hours<br />7:00 AM - 8:00 PM</span></div>
        </div>
        <div className="shell footerLegal">
          <span>© Lake City Self Storage</span>
          <span>All sizes are approximate. Restrictions may apply.</span>
          <a href={CONTACT_URL}>Contact</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="#cookie-settings">Cookie Settings</a>
        </div>
      </footer>
    </main>
  );
}
