# Self storage demo sites

One Next.js project that serves a private concept site for any storage facility at `/<slug>`,
built from `facilities/<slug>.json`. The root `/` shows only a Stringham Web Design page.

## Make a new demo

1. `npm run new-demo -- "Sunrise Storage"` creates `facilities/sunrise-storage.json`.
2. Fill in the JSON from the facility's own site and Google listing (see fields below). Leave anything you can't confirm empty and that section hides.
3. Save their photos to `public/facilities/sunrise-storage/` (or paste their `https://` image URLs) and give each one alt text.
4. `npm run dev`, open `http://<your-computer-ip>:3000/sunrise-storage` on your phone, then `npm run check-demos`.
5. Commit and push; Vercel deploys it at `demos.stringhamwebdesign.com/sunrise-storage`.

## Fields

| Field | Required | Notes |
| --- | --- | --- |
| `name`, `tagline` | name | Tagline is one plain sentence in the facility's own words. |
| `address.street/city/state/zip` | yes | City and state drive the headline, title and description. |
| `phone` | yes | 10-digit US number. Becomes tappable everywhere. |
| `email` | no | |
| `officeHours`, `gateHours` | no | `[{ "days": "Mon-Fri", "opens": "09:00", "closes": "18:00" }]`. Days: `Mon-Fri`, `Sat`, `Sat-Sun`, `Daily`. `00:00`–`23:59` shows "24 hours". |
| `googleMapsUrl` | no | Falls back to a Google Maps search for the address. |
| `geo.lat/lng` | no | Only used in search data. |
| `google.rating/reviewCount/url` | no | Only the real Google rating. Never estimate it. |
| `colors.primary/accent` | yes | Hex. Button text color is picked automatically for contrast. |
| `logo` | no | `{ "src", "alt" }`. Without it the name is shown as text. |
| `photos` | no | `[{ "src", "alt" }]`. First photo is the hero. Without photos the hero is text only. |
| `features` | no | Known keys: `climate-control`, `drive-up`, `rv-boat-parking`, `24-hour-cameras`, `gated-access`, `online-rental`, `online-payments`, `on-site-manager`, `well-lit`, `boxes-supplies`, `truck-rental`, `ground-floor`, `elevator`. Any other text is shown as written. |
| `units` | yes | `{ "size": "10x15", "fits", "climateControlled", "driveUp", "price", "rentUrl" }`. No `rentUrl` turns the button into "Call to rent". No `price` hides the price. |
| `pricesAsOf` | no | Shown next to prices, e.g. "August 16, 2026". |
| `faqs` | no | Only questions the facility actually answers on its own site. |
| `officialWebsite`, `payUrl` | no | Footer links. |

## Rules the template enforces

- Concept banner, `noindex` meta, `X-Robots-Tag` header and a disallow-all `robots.txt` on every page.
- Rent Now only links to the facility's own rental page. No checkout, payments or forms.
- Empty fields hide their section. No placeholder reviews, prices or claims.
- The build refuses any facility file still holding `_example.json` values (555 phone, example.com links, the word "Example").

`public/neutral/` holds brand-free illustrations for facilities with no photos (regenerate with `node scripts/make-neutral-photos.mjs`).
