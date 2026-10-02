// Launch-checklist checks for every facility demo.
//   npm run check-demos                         -> validate facility JSON + scan code
//   npm run check-demos -- http://localhost:3000 -> also crawl a running build
//   add --external to also request every outside link (needs open internet)
import fs from "node:fs";
import path from "node:path";
import { readFacility, listFacilitySlugs } from "../lib/facility-schema.mjs";

const args = process.argv.slice(2);
const base = args.find((a) => /^https?:\/\//.test(a))?.replace(/\/$/, "");
const checkExternal = args.includes("--external");

let failures = 0;
const ok = (msg) => console.log(`  ok   ${msg}`);
const bad = (msg) => {
  failures++;
  console.log(`  FAIL ${msg}`);
};
const note = (msg) => console.log(`  note ${msg}`);

// 1. Facility files
console.log("Facility files");
const facilities = [];
for (const slug of listFacilitySlugs()) {
  try {
    facilities.push(readFacility(slug));
    ok(`facilities/${slug}.json is valid`);
  } catch (error) {
    bad(error.message);
  }
}

// 2. Placeholder text anywhere in the source
console.log("Placeholder text");
const placeholder = new RegExp(["lor", "em"].join(""), "i");
const roots = ["app", "lib", "facilities", "scripts"];
const hits = [];
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(js|mjs|jsx|json|css|md)$/.test(entry.name) && placeholder.test(fs.readFileSync(full, "utf8"))) hits.push(full);
  }
};
roots.forEach((r) => fs.existsSync(r) && walk(r));
hits.length ? hits.forEach((f) => bad(`placeholder text in ${f}`)) : ok("no placeholder text in app/, lib/, facilities/ or scripts/");

// 3. Crawl a running build
if (base) {
  const titles = new Map();
  const descriptions = new Map();
  const external = new Set();

  const get = async (url) => {
    const res = await fetch(url, { redirect: "manual" });
    return { status: res.status, headers: res.headers, body: res.headers.get("content-type")?.includes("text") ? await res.text() : "" };
  };
  const attr = (tag, name) => tag.match(new RegExp(`${name}="([^"]*)"`))?.[1];

  async function checkPage(pathname, { facility, label }) {
    console.log(`${label}: ${pathname}`);
    const { status, body, headers } = await get(base + pathname);
    if (status !== 200) return bad(`status ${status}`);
    const title = body.match(/<title>([^<]*)<\/title>/)?.[1] || "";
    const description = body.match(/<meta name="description" content="([^"]*)"/)?.[1] || "";
    title ? ok(`title: ${title}`) : bad("no <title>");
    description ? ok("meta description present") : bad("no meta description");
    titles.set(title, [...(titles.get(title) || []), pathname]);
    descriptions.set(description, [...(descriptions.get(description) || []), pathname]);

    const h1s = body.match(/<h1[\s>]/g) || [];
    h1s.length === 1 ? ok("exactly one <h1>") : bad(`${h1s.length} <h1> elements`);
    /<meta name="robots" content="noindex, nofollow/.test(body) ? ok("robots meta noindex, nofollow") : bad("robots meta missing");
    headers.get("x-robots-tag")?.includes("noindex") ? ok("X-Robots-Tag noindex header") : bad("X-Robots-Tag header missing");

    const imgs = body.match(/<img [^>]*>/g) || [];
    const noAlt = imgs.filter((tag) => !attr(tag, "alt"));
    noAlt.length ? bad(`${noAlt.length} image(s) without alt text`) : ok(`${imgs.length} image(s), all with alt text`);
    /\blor(em)\b/i.test(body) ? bad("placeholder text in page") : null;

    if (facility) {
      const lower = `${title} ${description}`.toLowerCase();
      lower.includes("self storage") ? ok('title/description mention "self storage"') : bad('"self storage" missing from title/description');
      title.toLowerCase().includes(facility.address.city.toLowerCase()) ? ok("title includes the city") : bad("city missing from title");
      body.includes("Concept site prepared for") && body.includes("not the facility") ? ok("concept banner present") : bad("concept banner missing");
      body.includes(`href="${facility.phoneHref}"`) ? ok(`tappable phone link ${facility.phoneHref}`) : bad("no tel: link");
      /<link rel="icon" href="[^"]*icon[^"]*"/.test(body) ? ok("favicon link") : bad("favicon link missing");
      const og = body.match(/<meta property="og:image" content="([^"]*)"/)?.[1];
      if (og) {
        const ogPath = new URL(og).pathname;
        const res = await fetch(base + ogPath);
        res.ok && res.headers.get("content-type")?.includes("image") ? ok(`share image ${ogPath}`) : bad(`share image ${ogPath} -> ${res.status}`);
      } else bad("og:image missing");
      const year = String(new Date().getFullYear());
      body.includes(`© <!-- -->${year}`) || body.includes(`© ${year}`) ? ok(`copyright year ${year}`) : bad("current copyright year missing");
    }

    // Links
    const ids = new Set([...body.matchAll(/ id="([^"]+)"/g)].map((m) => m[1]));
    const links = [...new Set([...body.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, "&")))];
    let internalOk = 0;
    for (const href of links) {
      if (href.startsWith("#")) {
        ids.has(href.slice(1)) ? internalOk++ : bad(`anchor ${href} has no target`);
      } else if (href.startsWith("/")) {
        const [p, hash] = href.split("#");
        const res = await get(base + p);
        if (res.status !== 200) bad(`link ${href} -> ${res.status}`);
        else if (hash && !res.body.includes(` id="${hash}"`)) bad(`link ${href}: no #${hash} on target`);
        else internalOk++;
      } else if (href.startsWith("tel:")) {
        /^tel:\+1\d{10}$/.test(href) ? internalOk++ : bad(`malformed phone link ${href}`);
      } else if (href.startsWith("mailto:")) internalOk++;
      else if (href.startsWith("https://")) external.add(href);
      else bad(`unexpected link ${href} (not https)`);
    }
    ok(`${internalOk} internal/anchor/tel links resolve`);

    if (facility && pathname === `/${facility.slug}`) {
      const ld = body.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
      if (!ld) bad("no JSON-LD");
      else {
        const data = JSON.parse(ld);
        data["@type"] === "SelfStorage" ? ok("SelfStorage JSON-LD") : bad(`JSON-LD type ${data["@type"]}`);
        const hasRating = facility.google.rating !== null && facility.google.reviewCount;
        Boolean(data.aggregateRating) === Boolean(hasRating)
          ? ok(`aggregateRating ${hasRating ? "present (rating in file)" : "absent (no rating in file)"}`)
          : bad("aggregateRating does not match the facility file");
      }
      const rentLinks = facility.units.filter((u) => u.rentUrl).length;
      const callLinks = facility.units.length - rentLinks;
      const rentNowCount = (body.match(/aria-label="Rent Now: /g) || []).length;
      const callToRentCount = (body.match(/aria-label="Call to rent the /g) || []).length;
      rentNowCount === rentLinks && callToRentCount === callLinks
        ? ok(`${rentLinks} Rent Now button(s), ${callLinks} Call to rent button(s)`)
        : bad(`expected ${rentLinks} Rent Now / ${callLinks} Call to rent, found ${rentNowCount} / ${callToRentCount}`);
    }
  }

  console.log("Studio pages");
  const root = await get(`${base}/`);
  root.status === 200 && root.body.includes("https://stringhamwebdesign.com") ? ok("/ shows the studio page") : bad(`/ -> ${root.status}`);
  const robots = await get(`${base}/robots.txt`);
  /Disallow: \/\s*$/m.test(robots.body) ? ok("robots.txt disallows everything") : bad("robots.txt does not disallow /");
  const missing = await get(`${base}/no-such-facility-${Date.now()}`);
  missing.status === 404 ? ok("unknown slug returns 404") : bad(`unknown slug -> ${missing.status}`);

  for (const facility of facilities) {
    await checkPage(`/${facility.slug}`, { facility, label: facility.name });
    await checkPage(`/${facility.slug}/privacy`, { facility, label: `${facility.name} privacy` });
  }

  console.log("Uniqueness");
  for (const [title, pages] of titles) pages.length > 1 ? bad(`title "${title}" used on ${pages.join(", ")}`) : null;
  for (const [d, pages] of descriptions) pages.length > 1 ? bad(`description reused on ${pages.join(", ")}`) : null;
  ok(`${titles.size} titles and ${descriptions.size} descriptions checked`);

  console.log("Outside links");
  if (checkExternal) {
    for (const href of external) {
      try {
        const res = await fetch(href, { method: "GET", redirect: "follow" });
        res.status < 400 ? ok(`${res.status} ${href}`) : bad(`${res.status} ${href}`);
      } catch (error) {
        bad(`${href}: ${error.cause?.code || error.message}`);
      }
    }
  } else {
    [...external].forEach((href) => note(href));
    note("not requested; run with --external to check these");
  }
}

console.log(failures ? `\n${failures} check(s) failed.` : "\nAll checks passed.");
process.exit(failures ? 1 : 0);
