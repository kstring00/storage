// Usage: npm run new-demo -- "Sunrise Storage"
// Copies facilities/_example.json to facilities/<slug>.json and prints the path.
import fs from "node:fs";
import path from "node:path";
import { FACILITIES_DIR, EXAMPLE_SLUG, slugify } from "../lib/facility-schema.mjs";

const name = process.argv.slice(2).join(" ").trim();
if (!name) {
  console.error('Usage: npm run new-demo -- "Facility Name"');
  process.exit(1);
}

const slug = slugify(name);
if (!slug || slug.startsWith("_")) {
  console.error(`Could not make a URL slug from "${name}".`);
  process.exit(1);
}

const target = path.join(FACILITIES_DIR, `${slug}.json`);
if (fs.existsSync(target)) {
  console.error(`facilities/${slug}.json already exists. Edit it, or pick a different name.`);
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(path.join(FACILITIES_DIR, `${EXAMPLE_SLUG}.json`), "utf8"));
data.name = name;
// Fields that must come from the real facility or stay empty. Never carry example values over.
data.geo = { lat: null, lng: null };
data.google = { rating: null, reviewCount: null, url: "" };
data.logo = null;
data.pricesAsOf = "";
data.faqs = [];
data.payUrl = "";

fs.writeFileSync(target, `${JSON.stringify(data, null, 2)}\n`);
fs.mkdirSync(path.join(process.cwd(), "public", "facilities", slug), { recursive: true });

console.log(`Created facilities/${slug}.json`);
console.log(`Put photos in public/facilities/${slug}/ and reference them as "/facilities/${slug}/<file>.jpg".`);
console.log(`Preview: npm run dev, then open http://localhost:3000/${slug}`);
console.log(`Check:   npm run check-demos (the build refuses any leftover example phone, links or address).`);
