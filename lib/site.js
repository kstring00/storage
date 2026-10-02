import { readFacility, listFacilitySlugs } from "./facility-schema.mjs";

export const STUDIO_NAME = "Stringham Web Design";
export const STUDIO_URL = "https://stringhamwebdesign.com";

// Canonical origin for absolute URLs (share images, JSON-LD). Set NEXT_PUBLIC_SITE_URL
// in Vercel once demos.stringhamwebdesign.com is attached; until then the project's
// production domain is used.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "") ||
  "https://demos.stringhamwebdesign.com";

export function getFacility(slug) {
  if (!listFacilitySlugs().includes(slug)) return null;
  return readFacility(slug);
}

export function facilityStaticParams() {
  return listFacilitySlugs().map((slug) => ({ slug }));
}
