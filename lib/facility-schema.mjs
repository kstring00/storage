// Loads, validates and normalizes facilities/<slug>.json.
// Plain Node (no Next imports) so the build and the CLI scripts share one set of rules.
import fs from "node:fs";
import path from "node:path";

export const FACILITIES_DIR = path.join(process.cwd(), "facilities");
export const EXAMPLE_SLUG = "_example";

const DAY_NAMES = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const DAY_SHORT = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Known feature keys get a standard label and icon. Any other string is shown as written.
export const FEATURES = {
  "climate-control": { label: "Climate-controlled units", icon: "snow" },
  "drive-up": { label: "Drive-up access", icon: "truck" },
  "rv-boat-parking": { label: "RV & boat parking", icon: "boat" },
  "24-hour-cameras": { label: "24-hour video surveillance", icon: "camera" },
  "gated-access": { label: "Gated, keypad access", icon: "gate" },
  "online-rental": { label: "Rent online", icon: "click" },
  "online-payments": { label: "Pay online", icon: "card" },
  "on-site-manager": { label: "On-site manager", icon: "person" },
  "well-lit": { label: "Well-lit grounds", icon: "light" },
  "boxes-supplies": { label: "Boxes & moving supplies", icon: "box" },
  "truck-rental": { label: "Truck rental", icon: "truck" },
  "ground-floor": { label: "Ground-floor units", icon: "check" },
  "elevator": { label: "Elevator access", icon: "check" },
};

// Plain-language size guide. Generic industry rules of thumb, not claims about any facility.
export const SIZE_GUIDE = {
  "5x5": { compare: "About the size of a small closet", fits: "Boxes, seasonal decorations, files, a small dresser or a bike." },
  "5x10": { compare: "About the size of a walk-in closet", fits: "A studio apartment: mattress set, small couch, boxes and a few small pieces." },
  "10x10": { compare: "About half of a one-car garage", fits: "A one-bedroom apartment: bed, couch, dresser, table and boxes." },
  "10x15": { compare: "About the size of a small bedroom", fits: "A two-bedroom apartment or small house: bedroom sets, living room and boxes." },
  "10x20": { compare: "About the size of a one-car garage", fits: "A two- to three-bedroom house with appliances, or one car or small truck." },
  "10x30": { compare: "About one and a half car garages", fits: "A four- to five-bedroom house with appliances, or a business's stock and equipment." },
};

class FacilityError extends Error {}

function fail(file, message) {
  throw new FacilityError(`facilities/${file}: ${message}`);
}

const isBlank = (value) => value === undefined || value === null || (typeof value === "string" && value.trim() === "");
const text = (value) => (isBlank(value) ? "" : String(value).trim());

function requireText(file, obj, key, label = key) {
  if (isBlank(obj?.[key])) fail(file, `"${label}" is required.`);
  return String(obj[key]).trim();
}

export function slugify(name) {
  return String(name)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function parseSize(file, raw) {
  const match = String(raw).match(/(\d+(?:\.\d+)?)\s*[x×X*]\s*(\d+(?:\.\d+)?)/);
  if (!match) fail(file, `unit size "${raw}" must look like "10x15".`);
  const width = Number(match[1]);
  const length = Number(match[2]);
  const sqft = Math.round(width * length);
  return { key: `${width}x${length}`, label: `${width} × ${length}`, width, length, sqft };
}

export function sizeGroup(sqft) {
  if (sqft <= 50) return "small";
  if (sqft <= 150) return "medium";
  return "large";
}

function parseColor(file, value, label) {
  const hex = text(value);
  if (!/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(hex)) fail(file, `"${label}" must be a hex color like "#0a6cb4".`);
  return hex.length === 4 ? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}` : hex.toLowerCase();
}

function luminance(hex) {
  const channel = (i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * channel(1) + 0.7152 * channel(3) + 0.0722 * channel(5);
}

/** Black or white, whichever reads better on the given background. */
export function readableOn(hex) {
  const l = luminance(hex);
  const onWhite = 1.05 / (l + 0.05);
  const onDark = (l + 0.05) / (0.0137 + 0.05); // #111827
  return onWhite >= onDark ? "#ffffff" : "#111827";
}

function parseDays(file, raw) {
  const value = text(raw);
  if (/^(daily|every day|7 days)$/i.test(value)) return [0, 1, 2, 3, 4, 5, 6];
  const index = (token) => {
    const i = DAY_SHORT.findIndex((d) => token.toLowerCase().startsWith(d.toLowerCase()));
    if (i === -1) fail(file, `hours "days" value "${raw}" is not understood. Use "Mon-Fri", "Sat", "Sat-Sun" or "Daily".`);
    return i;
  };
  const days = [];
  for (const part of value.split(",").map((p) => p.trim()).filter(Boolean)) {
    const [start, end] = part.split(/\s*[-–]\s*/);
    const a = index(start);
    const b = end ? index(end) : a;
    for (let i = a; ; i = (i + 1) % 7) {
      days.push(i);
      if (i === b) break;
    }
  }
  return days;
}

function formatTime(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return m ? `${hour}:${String(m).padStart(2, "0")} ${suffix}` : `${hour} ${suffix}`;
}

function parseHours(file, list, label) {
  if (isBlank(list)) return [];
  if (!Array.isArray(list)) fail(file, `"${label}" must be a list.`);
  return list.map((entry) => {
    const opens = text(entry?.opens);
    const closes = text(entry?.closes);
    if (!/^\d{2}:\d{2}$/.test(opens) || !/^\d{2}:\d{2}$/.test(closes)) {
      fail(file, `"${label}" entries need "opens" and "closes" in 24-hour "HH:MM" form.`);
    }
    const days = parseDays(file, entry.days);
    const allDay = opens === "00:00" && (closes === "23:59" || closes === "24:00");
    return {
      days: text(entry.days),
      dayNames: days.map((d) => DAY_NAMES[d]),
      opens,
      closes,
      display: allDay ? "24 hours" : `${formatTime(opens)} – ${formatTime(closes)}`,
    };
  });
}

function parseImage(file, image, label) {
  if (isBlank(image)) return null;
  const src = text(typeof image === "string" ? image : image.src);
  const alt = text(typeof image === "string" ? "" : image.alt);
  if (!src) return null;
  if (!/^(https:\/\/|\/)/.test(src)) fail(file, `${label} "${src}" must start with "/" (a file in public/) or "https://".`);
  if (!alt) fail(file, `${label} "${src}" needs "alt" text describing the picture.`);
  if (src.startsWith("/") && !fs.existsSync(path.join(process.cwd(), "public", src))) {
    fail(file, `${label} "${src}" was not found in the public/ folder.`);
  }
  return { src, alt };
}

function optionalUrl(file, value, label) {
  const url = text(value);
  if (!url) return "";
  if (!/^https:\/\//.test(url)) fail(file, `"${label}" must be a full https:// link.`);
  return url;
}

function optionalNumber(file, value, label) {
  if (isBlank(value)) return null;
  const n = Number(value);
  if (!Number.isFinite(n)) fail(file, `"${label}" must be a number.`);
  return n;
}

// Values left over from _example.json must never reach a real facility's demo.
function guardAgainstExampleLeftovers(file, raw) {
  const json = JSON.stringify(raw);
  const leftovers = [
    [/example\.(com|org|net)/i, "an example.com link"],
    [/\(555\)|\b555[-. ]01\d\d\b/, "the 555 example phone number"],
    [/\bExample\b/, "the word \"Example\" (name or address)"],
  ];
  for (const [pattern, what] of leftovers) {
    if (pattern.test(json)) fail(file, `still contains ${what} copied from _example.json. Replace it with the facility's real details.`);
  }
}

export function normalizeFacility(slug, raw) {
  const file = `${slug}.json`;
  if (slug !== EXAMPLE_SLUG) guardAgainstExampleLeftovers(file, raw);

  const name = requireText(file, raw, "name");
  const address = {
    street: requireText(file, raw.address, "street", "address.street"),
    city: requireText(file, raw.address, "city", "address.city"),
    state: requireText(file, raw.address, "state", "address.state"),
    zip: requireText(file, raw.address, "zip", "address.zip"),
  };

  const phone = requireText(file, raw, "phone");
  const digits = phone.replace(/\D/g, "");
  if (digits.length !== 10 && !(digits.length === 11 && digits.startsWith("1"))) {
    fail(file, `"phone" must be a 10-digit US number, got "${phone}".`);
  }
  const phoneHref = `tel:+1${digits.slice(-10)}`;

  const colors = {
    primary: parseColor(file, raw.colors?.primary, "colors.primary"),
    accent: parseColor(file, raw.colors?.accent, "colors.accent"),
  };

  const lat = optionalNumber(file, raw.geo?.lat, "geo.lat");
  const lng = optionalNumber(file, raw.geo?.lng, "geo.lng");

  const rating = optionalNumber(file, raw.google?.rating, "google.rating");
  const reviewCount = optionalNumber(file, raw.google?.reviewCount, "google.reviewCount");
  if (rating !== null && (rating < 1 || rating > 5)) fail(file, `"google.rating" must be between 1 and 5.`);

  const photos = (raw.photos || []).map((photo, i) => parseImage(file, photo, `photos[${i}]`)).filter(Boolean);

  const features = (raw.features || [])
    .map((f) => text(f))
    .filter(Boolean)
    .map((key) => ({ key, ...(FEATURES[key] || { label: key, icon: "check" }) }));

  if (!Array.isArray(raw.units) || raw.units.length === 0) fail(file, `"units" must list at least one unit.`);
  const units = raw.units
    .map((unit, i) => {
      const size = parseSize(file, requireText(file, unit, "size", `units[${i}].size`));
      const price = optionalNumber(file, unit.price, `units[${i}].price`);
      return {
        id: `${size.key}-${unit.climateControlled ? "climate" : "standard"}-${i}`,
        ...size,
        group: sizeGroup(size.sqft),
        fits: text(unit.fits),
        climateControlled: Boolean(unit.climateControlled),
        driveUp: Boolean(unit.driveUp),
        price,
        rentUrl: optionalUrl(file, unit.rentUrl, `units[${i}].rentUrl`),
      };
    })
    .sort((a, b) => a.sqft - b.sqft || Number(a.climateControlled) - Number(b.climateControlled));

  const faqs = (raw.faqs || [])
    .filter((faq) => !isBlank(faq?.question) && !isBlank(faq?.answer))
    .map((faq) => ({ question: text(faq.question), answer: text(faq.answer) }));

  return {
    slug,
    name,
    tagline: text(raw.tagline),
    address,
    phone,
    phoneHref,
    email: text(raw.email),
    officeHours: parseHours(file, raw.officeHours, "officeHours"),
    gateHours: parseHours(file, raw.gateHours, "gateHours"),
    googleMapsUrl: optionalUrl(file, raw.googleMapsUrl, "googleMapsUrl"),
    geo: lat !== null && lng !== null ? { lat, lng } : null,
    google: {
      rating,
      reviewCount: rating !== null ? reviewCount : null,
      url: optionalUrl(file, raw.google?.url, "google.url"),
    },
    colors: {
      ...colors,
      onPrimary: readableOn(colors.primary),
      onAccent: readableOn(colors.accent),
    },
    logo: parseImage(file, raw.logo, "logo"),
    photos,
    features,
    units,
    pricesAsOf: text(raw.pricesAsOf),
    faqs,
    officialWebsite: optionalUrl(file, raw.officialWebsite, "officialWebsite"),
    payUrl: optionalUrl(file, raw.payUrl, "payUrl"),
  };
}

export function listFacilitySlugs() {
  return fs
    .readdirSync(FACILITIES_DIR)
    .filter((name) => name.endsWith(".json"))
    .map((name) => name.replace(/\.json$/, ""))
    .sort();
}

export function readFacility(slug) {
  const file = path.join(FACILITIES_DIR, `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  let raw;
  try {
    raw = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    throw new FacilityError(`facilities/${slug}.json is not valid JSON: ${error.message}`);
  }
  return normalizeFacility(slug, raw);
}

export function readAllFacilities() {
  return listFacilitySlugs().map(readFacility);
}

/** "Climate-Controlled & Drive-Up Self Storage" — what the facility offers, in one phrase. */
export function storageTypesPhrase(facility) {
  const units = facility.units;
  const keys = new Set(facility.features.map((f) => f.key));
  const types = [];
  if (units.some((u) => u.climateControlled)) types.push("Climate-Controlled");
  const standard = units.filter((u) => !u.climateControlled);
  if (standard.some((u) => u.driveUp) || (standard.length && keys.has("drive-up"))) types.push("Drive-Up");
  let phrase = types.length ? `${types.join(" & ")} Self Storage` : "Self Storage";
  if (keys.has("rv-boat-parking")) phrase += " & RV/Boat Parking";
  return phrase;
}
