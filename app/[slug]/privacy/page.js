import { getFacility, STUDIO_NAME, STUDIO_URL } from "../../../lib/site";
import styles from "../demo.module.css";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const facility = getFacility(slug);
  const place = `${facility.address.city}, ${facility.address.state}`;
  return {
    title: `Privacy Policy | ${facility.name}, self storage in ${place}`,
    description: `How the ${facility.name} self storage concept site for ${place} handles visitor information: no cookies, no analytics and no forms.`,
  };
}

export default async function PrivacyPage({ params }) {
  const { slug } = await params;
  const facility = getFacility(slug);

  return (
    <article className={`${styles.shell} ${styles.prose}`}>
      <h1>Privacy policy</h1>
      <p>
        This is a private concept site prepared by <a href={STUDIO_URL}>{STUDIO_NAME}</a> to show {facility.name} a
        possible new website. It is not {facility.name}&apos;s official website.
      </p>
      <h2>What we collect</h2>
      <p>
        Nothing personal. This site has no forms, no accounts, no cookies, no analytics and no advertising trackers.
        Like any website, our hosting provider (Vercel) briefly keeps standard server logs, such as IP address, browser
        type and the page requested, to keep the site secure and running.
      </p>
      <h2>Links to other sites</h2>
      <p>
        Rent Now, payment and map links take you to {facility.name}&apos;s own rental pages or to Google Maps. Those sites
        have their own privacy policies, which apply once you leave this site. Phone links open your phone&apos;s dialer.
      </p>
      <h2>Questions</h2>
      <p>
        About this concept site: contact <a href={STUDIO_URL}>{STUDIO_NAME}</a>. About storage or your account: call{" "}
        {facility.name} at <a href={facility.phoneHref}>{facility.phone}</a>.
      </p>
      <p className={styles.muted}>Last updated October 2026.</p>
    </article>
  );
}
