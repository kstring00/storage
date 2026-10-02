import Image from "next/image";
import { notFound } from "next/navigation";
import { getFacility, facilityStaticParams, STUDIO_NAME, STUDIO_URL } from "../../lib/site";
import Icon from "../../components/Icon";
import styles from "./demo.module.css";

// One static page set per facilities/<slug>.json. Unknown slugs 404.
export const dynamicParams = false;
// Rebuild once a day so the footer year never goes stale.
export const revalidate = 86400;

export function generateStaticParams() {
  return facilityStaticParams();
}

export default async function FacilityLayout({ children, params }) {
  const { slug } = await params;
  const facility = getFacility(slug);
  if (!facility) notFound();

  const { colors } = facility;
  const theme = {
    "--primary": colors.primary,
    "--on-primary": colors.onPrimary,
    "--accent": colors.accent,
    "--on-accent": colors.onAccent,
  };
  const home = `/${facility.slug}`;
  const rentHref = `${home}#units`;

  return (
    <div className={styles.site} style={theme}>
      <a className="skip" href="#main">Skip to content</a>

      <p className={styles.concept}>
        <a href={STUDIO_URL}>
          Concept site prepared for {facility.name} by {STUDIO_NAME}. This is not the facility&apos;s official website.
        </a>
      </p>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a className={styles.brand} href={home}>
            {facility.logo ? (
              <span className={styles.logoBox}>
                <Image src={facility.logo.src} alt={facility.logo.alt} fill sizes="160px" priority />
              </span>
            ) : (
              <span className={styles.wordmark}>{facility.name}</span>
            )}
          </a>
          <div className={styles.headerActions}>
            <a className={styles.headerPhone} href={facility.phoneHref}>
              <Icon name="phone" size={18} />
              <span>{facility.phone}</span>
            </a>
            <a className={`${styles.rentButton} ${styles.headerRent}`} href={rentHref}>Rent a unit</a>
          </div>
        </div>
      </header>

      <main id="main">{children}</main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerCol}>
            <strong className={styles.footerName}>{facility.name}</strong>
            <span>{facility.address.street}<br />{facility.address.city}, {facility.address.state} {facility.address.zip}</span>
            <a href={facility.phoneHref}>{facility.phone}</a>
            {facility.email ? <a href={`mailto:${facility.email}`}>{facility.email}</a> : null}
          </div>
          <nav className={styles.footerCol} aria-label="Footer">
            <a href={rentHref}>Rent a unit</a>
            {facility.payUrl ? <a href={facility.payUrl}>Pay online</a> : null}
            {facility.officialWebsite ? <a href={facility.officialWebsite}>Official {facility.name} website</a> : null}
            <a href={`${home}/privacy`}>Privacy policy</a>
          </nav>
        </div>
        <p className={styles.legal}>
          © {new Date().getFullYear()} <a href={STUDIO_URL}>{STUDIO_NAME}</a>. Concept design. The {facility.name} name,
          logo, photos and details belong to {facility.name}. Unit sizes are approximate.
        </p>
      </footer>

      <nav className={styles.callBar} aria-label="Quick actions">
        <a className={styles.callBarPhone} href={facility.phoneHref}>
          <Icon name="phone" size={20} />
          <span>Call</span>
        </a>
        <a className={styles.callBarRent} href={rentHref}>Rent a unit</a>
      </nav>
    </div>
  );
}
