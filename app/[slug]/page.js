import Image from "next/image";
import { getFacility, SITE_URL } from "../../lib/site";
import { SIZE_GUIDE, storageTypesPhrase } from "../../lib/facility-schema.mjs";
import Icon from "../../components/Icon";
import styles from "./demo.module.css";

const GROUPS = [
  { key: "small", title: "Small units", note: "Up to 50 sq ft" },
  { key: "medium", title: "Medium units", note: "51 to 150 sq ft" },
  { key: "large", title: "Large units", note: "Over 150 sq ft" },
];

function cityState(facility) {
  return `${facility.address.city}, ${facility.address.state}`;
}

function fullAddress({ address }) {
  return `${address.street}, ${address.city}, ${address.state} ${address.zip}`;
}

function mapUrl(facility) {
  return (
    facility.googleMapsUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress(facility))}`
  );
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const facility = getFacility(slug);
  const types = storageTypesPhrase(facility);
  const place = cityState(facility);
  const hasPrices = facility.units.some((u) => u.price !== null);
  const canRentOnline = facility.units.some((u) => u.rentUrl);
  const title = `${types} in ${place} | ${facility.name}`;
  const description =
    `${facility.name} offers ${types.toLowerCase()} in ${place}. ` +
    `Compare unit sizes${hasPrices ? " and prices" : ""}, check office and gate hours, and rent ${canRentOnline ? "online or " : ""}by phone.`;
  return {
    title,
    description,
    openGraph: { title, description, url: `/${slug}`, type: "website", siteName: facility.name },
    twitter: { card: "summary_large_image", title, description },
  };
}

function jsonLd(facility) {
  const url = `${SITE_URL}/${facility.slug}`;
  const prices = facility.units.map((u) => u.price).filter((p) => p !== null);
  const data = {
    "@context": "https://schema.org",
    "@type": "SelfStorage",
    name: facility.name,
    url,
    telephone: facility.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: facility.address.street,
      addressLocality: facility.address.city,
      addressRegion: facility.address.state,
      postalCode: facility.address.zip,
      addressCountry: "US",
    },
    hasMap: mapUrl(facility),
  };
  if (facility.tagline) data.description = facility.tagline;
  if (facility.email) data.email = facility.email;
  if (facility.geo) data.geo = { "@type": "GeoCoordinates", latitude: facility.geo.lat, longitude: facility.geo.lng };
  if (facility.officeHours.length) {
    data.openingHoursSpecification = facility.officeHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayNames,
      opens: h.opens,
      closes: h.closes,
    }));
  }
  const images = facility.photos.map((p) => (p.src.startsWith("/") ? `${SITE_URL}${p.src}` : p.src));
  if (images.length) data.image = images;
  if (facility.logo) data.logo = facility.logo.src.startsWith("/") ? `${SITE_URL}${facility.logo.src}` : facility.logo.src;
  if (prices.length) data.priceRange = `$${Math.min(...prices)}–$${Math.max(...prices)} per month`;
  if (facility.features.length) {
    data.amenityFeature = facility.features.map((f) => ({ "@type": "LocationFeatureSpecification", name: f.label, value: true }));
  }
  // Only a real rating from the facility's Google listing. Never a made-up one.
  if (facility.google.rating !== null && facility.google.reviewCount) {
    data.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: facility.google.rating,
      reviewCount: facility.google.reviewCount,
      bestRating: 5,
    };
  }
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function UnitCard({ unit, facility }) {
  const kind = unit.climateControlled ? "climate-controlled" : "standard";
  return (
    <li className={styles.unitCard}>
      <div className={styles.unitTop}>
        <h4 className={styles.unitSize}>{unit.label}</h4>
        <span className={styles.unitSqft}>{unit.sqft} sq ft</span>
      </div>
      <div className={styles.badges}>
        {unit.climateControlled ? (
          <span className={styles.badgeClimate}><Icon name="snow" size={15} /> Climate controlled</span>
        ) : (
          <span className={styles.badgePlain}>Not climate controlled</span>
        )}
        {unit.driveUp ? <span className={styles.badgePlain}><Icon name="truck" size={15} /> Drive-up</span> : null}
      </div>
      {unit.fits ? <p className={styles.unitFits}><strong>Fits:</strong> {unit.fits}</p> : null}
      {unit.price !== null ? (
        <p className={styles.unitPrice}><strong>${unit.price}</strong><span>/month</span></p>
      ) : null}
      {unit.rentUrl ? (
        <a
          className={styles.rentNow}
          href={unit.rentUrl}
          aria-label={`Rent Now: ${unit.label} ${kind} unit (opens ${facility.name}'s rental page)`}
        >
          Rent Now <Icon name="arrow" size={18} />
        </a>
      ) : (
        <a
          className={styles.callToRent}
          href={facility.phoneHref}
          aria-label={`Call to rent the ${unit.label} ${kind} unit: ${facility.phone}`}
        >
          <Icon name="phone" size={18} /> Call to rent <span className={styles.nowrap}>{facility.phone}</span>
        </a>
      )}
    </li>
  );
}

function HoursList({ hours }) {
  return (
    <dl className={styles.hours}>
      {hours.map((h) => (
        <div key={`${h.days}-${h.opens}`}>
          <dt>{h.days}</dt>
          <dd>{h.display}</dd>
        </div>
      ))}
    </dl>
  );
}

export default async function FacilityPage({ params }) {
  const { slug } = await params;
  const facility = getFacility(slug);
  const types = storageTypesPhrase(facility);
  const [heroPhoto, ...morePhotos] = facility.photos;
  const groups = GROUPS.map((g) => ({ ...g, units: facility.units.filter((u) => u.group === g.key) })).filter((g) => g.units.length);
  const guideSizes = Object.keys(SIZE_GUIDE).filter((key) => facility.units.some((u) => u.key === key));
  const anyRentUrl = facility.units.some((u) => u.rentUrl);
  const { rating, reviewCount, url: reviewsUrl } = facility.google;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(facility) }} />

      <section className={`${styles.hero} ${heroPhoto ? "" : styles.heroNoPhoto}`}>
        <div className={styles.heroCopy}>
          <h1>
            {types} in {cityState(facility)}
          </h1>
          {facility.tagline ? <p className={styles.lead}>{facility.tagline}</p> : null}
          <p className={styles.heroAddress}>
            <Icon name="pin" size={18} /> {fullAddress(facility)}
          </p>
          {rating !== null ? (
            <p className={styles.rating}>
              <Icon name="star" size={18} />
              {reviewsUrl ? (
                <a href={reviewsUrl}>{rating.toFixed(1)} on Google{reviewCount ? ` (${reviewCount} reviews)` : ""}</a>
              ) : (
                <span>{rating.toFixed(1)} on Google{reviewCount ? ` (${reviewCount} reviews)` : ""}</span>
              )}
            </p>
          ) : null}
          <div className={styles.heroActions}>
            <a className={`${styles.rentButton} ${styles.rentButtonLarge}`} href="#units">Rent a unit</a>
            <a className={styles.textLink} href={facility.phoneHref}>
              <Icon name="phone" size={18} /> {facility.phone}
            </a>
          </div>
        </div>
        {heroPhoto ? (
          <div className={styles.heroPhoto}>
            <Image
              src={heroPhoto.src}
              alt={heroPhoto.alt}
              fill
              priority
              sizes="(max-width: 860px) 100vw, 50vw"
            />
          </div>
        ) : null}
      </section>

      <section id="units" className={styles.section} aria-labelledby="units-title">
        <div className={styles.shell}>
          <div className={styles.sectionHead}>
            <h2 id="units-title">Rent a unit</h2>
            <p>
              Pick a size.{" "}
              {anyRentUrl
                ? `Rent Now takes you to ${facility.name}'s secure rental page.`
                : `Call ${facility.name} to reserve it.`}
              {facility.pricesAsOf ? ` Listed rates as of ${facility.pricesAsOf}; confirm the current rate when you rent.` : ""}
            </p>
          </div>
          {groups.map((group) => (
            <div className={styles.unitGroup} key={group.key}>
              <h3>
                {group.title} <span>{group.note}</span>
              </h3>
              <ul className={styles.unitGrid}>
                {group.units.map((unit) => (
                  <UnitCard key={unit.id} unit={unit} facility={facility} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {guideSizes.length ? (
        <section id="size-guide" className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="guide-title">
          <div className={styles.shell}>
            <div className={styles.sectionHead}>
              <h2 id="guide-title">Size guide</h2>
              <p>Rough guides only. Everyone packs differently, so call if you&apos;re between sizes.</p>
            </div>
            <ul className={styles.guide}>
              {guideSizes.map((key) => (
                <li key={key}>
                  <strong>{key.replace("x", " × ")}</strong>
                  <span className={styles.guideCompare}>{SIZE_GUIDE[key].compare}</span>
                  <span>{SIZE_GUIDE[key].fits}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {facility.features.length ? (
        <section id="features" className={styles.section} aria-labelledby="features-title">
          <div className={styles.shell}>
            <div className={styles.sectionHead}>
              <h2 id="features-title">Features</h2>
            </div>
            <ul className={styles.features}>
              {facility.features.map((feature) => (
                <li key={feature.key}>
                  <span className={styles.featureIcon}><Icon name={feature.icon} /></span>
                  {feature.label}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {morePhotos.length ? (
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="photos-title">
          <div className={styles.shell}>
            <div className={styles.sectionHead}>
              <h2 id="photos-title">Photos</h2>
            </div>
            <ul className={styles.gallery}>
              {morePhotos.slice(0, 6).map((photo) => (
                <li key={photo.src}>
                  <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 360px" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section id="visit" className={styles.section} aria-labelledby="visit-title">
        <div className={styles.shell}>
          <div className={styles.sectionHead}>
            <h2 id="visit-title">Hours &amp; location</h2>
          </div>
          <div className={styles.visitGrid}>
            {facility.officeHours.length ? (
              <div className={styles.visitCard}>
                <h3><Icon name="clock" /> Office hours</h3>
                <HoursList hours={facility.officeHours} />
              </div>
            ) : null}
            {facility.gateHours.length ? (
              <div className={styles.visitCard}>
                <h3><Icon name="gate" /> Gate access hours</h3>
                <HoursList hours={facility.gateHours} />
              </div>
            ) : null}
            <div className={styles.visitCard}>
              <h3><Icon name="pin" /> Address</h3>
              <p>{facility.address.street}<br />{facility.address.city}, {facility.address.state} {facility.address.zip}</p>
              <a className={styles.textLink} href={mapUrl(facility)}>Open in Google Maps <Icon name="arrow" size={18} /></a>
            </div>
            <div className={styles.visitCard}>
              <h3><Icon name="phone" /> Contact</h3>
              <p><a className={styles.textLink} href={facility.phoneHref}>{facility.phone}</a></p>
              {facility.email ? <p><a className={styles.textLink} href={`mailto:${facility.email}`}>{facility.email}</a></p> : null}
            </div>
          </div>
        </div>
      </section>

      {facility.faqs.length ? (
        <section id="faq" className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="faq-title">
          <div className={styles.shell}>
            <div className={styles.sectionHead}>
              <h2 id="faq-title">Questions</h2>
            </div>
            <div className={styles.faq}>
              {facility.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className={styles.finalCta}>
        <div className={styles.shell}>
          <h2>Ready to store?</h2>
          <a className={`${styles.rentButton} ${styles.rentButtonLarge} ${styles.rentButtonInverse}`} href="#units">Rent a unit</a>
        </div>
      </section>
    </>
  );
}
