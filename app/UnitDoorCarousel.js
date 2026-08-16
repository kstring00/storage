"use client";

import { useState } from "react";
import styles from "./UnitDoorCarousel.module.css";

const UNITS_URL = "https://www.lakecityselfstorage.com/1143-nw-lake-jeffrey-rd-lake-city-fl-32055";
const PHONE_LINK = "tel:+13862925494";

const smallestClimateUnit = {
  id: "5x5",
  number: "SMALL",
  size: "5 × 5",
  sqft: "25 sq ft",
  type: "climate",
  label: "Compact climate-controlled storage",
  doorNote: "Boxes • décor • small items",
  bestFor: ["Boxes", "Seasonal décor", "Small belongings"],
  helper: "A compact option for boxes, seasonal décor, files, and smaller belongings that benefit from a more stable indoor environment.",
  items: [
    ["boxstack", 58, 42, 60, 58],
    ["bin", 142, 69, 52, 29],
    ["bin", 198, 72, 42, 26],
  ],
};

const climateInventoryUnits = [
  smallestClimateUnit,
  {
    id: "10x10",
    number: "B-03",
    size: "10 × 10",
    sqft: "100 sq ft",
    type: "climate",
    label: "Bedroom or apartment overflow",
    doorNote: "Bikes • bed set • desk",
    bestFor: ["Bikes", "Bed set", "Desk"],
    helper: "A practical fit for the contents of a bedroom, small apartment overflow, or a few larger pieces you want protected indoors.",
    items: [
      ["bed", 8, 62, 74, 36],
      ["bike", 88, 57, 64, 41],
      ["desk", 160, 54, 58, 44],
      ["boxstack", 226, 55, 40, 43],
    ],
  },
  {
    id: "10x15",
    number: "B-07",
    size: "10 × 15",
    sqft: "150 sq ft",
    type: "climate",
    label: "Recommended for most households",
    doorNote: "Furniture • mattresses • boxes",
    bestFor: ["Living-room furniture", "Mattress sets", "Boxes & décor"],
    helper: "A strong middle-ground size for several rooms of furniture without immediately stepping up to the largest option.",
    items: [
      ["bed", 4, 63, 72, 35],
      ["dresser", 82, 58, 46, 40],
      ["sofa", 134, 65, 62, 33],
      ["boxstack", 202, 51, 36, 47],
      ["fridge", 246, 43, 27, 55],
    ],
  },
  {
    id: "10x20",
    number: "C-01",
    size: "10 × 20",
    sqft: "200 sq ft",
    type: "climate",
    label: "Larger household storage",
    doorNote: "Multiple rooms • appliances",
    bestFor: ["Multiple rooms", "Large appliances", "Dining + living sets"],
    helper: "A better fit for larger moves, remodels, or households storing substantial furniture and appliances together.",
    items: [
      ["bed", 2, 64, 69, 34],
      ["sofa", 74, 67, 57, 31],
      ["dresser", 136, 60, 44, 38],
      ["boxstack", 186, 54, 34, 44],
      ["fridge", 226, 46, 27, 52],
      ["bin", 258, 76, 20, 22],
    ],
  },
];

const featuredHomeUnits = [
  {
    ...climateInventoryUnits[1],
    id: "deal-climate-10x10",
    specialLabel: "Climate Special",
    mockRegularPrice: "$149",
    mockSpecialPrice: "$119",
  },
  {
    ...climateInventoryUnits[2],
    id: "deal-climate-10x15",
    featured: true,
    specialLabel: "Featured Climate Special",
    mockRegularPrice: "$189",
    mockSpecialPrice: "$149",
  },
  {
    id: "deal-drive-10x10",
    number: "DRIVE-UP",
    size: "10 × 10",
    sqft: "100 sq ft",
    type: "driveup",
    label: "Popular non-climate drive-up storage",
    doorNote: "Lawn gear • patio items • sturdy bins",
    specialLabel: "Drive-Up Special",
    mockRegularPrice: "$119",
    mockSpecialPrice: "$89",
    bestFor: ["Lawn gear", "Patio items", "Durable totes"],
    helper: "A practical drive-up option for tougher belongings, garage cleanouts, outdoor gear, and durable household overflow.",
    items: [
      ["mower", 12, 55, 82, 42],
      ["toolbox", 104, 58, 68, 38],
      ["boxstack", 186, 39, 55, 59],
    ],
  },
  {
    id: "deal-drive-10x20",
    number: "DRIVE-UP",
    size: "10 × 20",
    sqft: "200 sq ft",
    type: "driveup",
    label: "Large non-climate drive-up storage",
    doorNote: "Garage contents • equipment • sturdy overflow",
    specialLabel: "Drive-Up Special",
    mockRegularPrice: "$179",
    mockSpecialPrice: "$139",
    bestFor: ["Garage contents", "Equipment", "Bulky durable items"],
    helper: "A larger drive-up choice for equipment, bulky durable belongings, garage contents, and substantial household or work overflow.",
    items: [
      ["mower", 4, 60, 70, 36],
      ["toolbox", 78, 58, 58, 37],
      ["boxstack", 140, 35, 54, 63],
      ["bin", 205, 65, 42, 28],
    ],
  },
];

function ItemSymbols() {
  return (
    <svg className={styles.symbols} aria-hidden="true" focusable="false">
      <symbol id="door-bed" viewBox="0 0 140 70">
        <rect x="0" y="6" width="13" height="54" rx="3" fill="currentColor" opacity=".7" />
        <rect x="11" y="30" width="126" height="18" rx="4" fill="currentColor" opacity=".55" />
        <rect x="11" y="25" width="126" height="7" rx="3" fill="currentColor" opacity=".88" />
        <rect x="18" y="16" width="32" height="12" rx="6" fill="currentColor" opacity=".8" />
      </symbol>
      <symbol id="door-boxstack" viewBox="0 0 100 130">
        <rect x="8" y="58" width="84" height="72" fill="currentColor" opacity=".55" />
        <rect x="8" y="58" width="84" height="8" fill="currentColor" opacity=".82" />
        <rect x="46" y="58" width="6" height="72" fill="currentColor" opacity=".85" />
        <rect x="22" y="8" width="58" height="50" fill="currentColor" opacity=".62" />
        <rect x="22" y="8" width="58" height="7" fill="currentColor" opacity=".85" />
      </symbol>
      <symbol id="door-sofa" viewBox="0 0 140 80">
        <rect x="0" y="22" width="140" height="42" rx="7" fill="currentColor" opacity=".52" />
        <rect x="8" y="40" width="124" height="26" rx="5" fill="currentColor" opacity=".74" />
        <rect x="0" y="28" width="15" height="38" rx="5" fill="currentColor" opacity=".82" />
        <rect x="125" y="28" width="15" height="38" rx="5" fill="currentColor" opacity=".82" />
      </symbol>
      <symbol id="door-fridge" viewBox="0 0 60 120">
        <rect x="0" y="0" width="60" height="120" rx="5" fill="currentColor" opacity=".58" />
        <rect x="0" y="43" width="60" height="3" fill="currentColor" opacity=".95" />
        <rect x="48" y="12" width="4" height="24" rx="2" fill="currentColor" opacity=".95" />
      </symbol>
      <symbol id="door-dresser" viewBox="0 0 90 80">
        <rect x="0" y="0" width="90" height="71" rx="4" fill="currentColor" opacity=".58" />
        <rect x="7" y="13" width="76" height="3" fill="currentColor" opacity=".9" />
        <rect x="7" y="34" width="76" height="3" fill="currentColor" opacity=".9" />
        <rect x="7" y="55" width="76" height="3" fill="currentColor" opacity=".9" />
      </symbol>
      <symbol id="door-bin" viewBox="0 0 70 50">
        <path d="M7 0 H63 L57 50 H13 Z" fill="currentColor" opacity=".58" />
        <rect x="2" y="0" width="66" height="7" rx="2" fill="currentColor" opacity=".9" />
      </symbol>
      <symbol id="door-bike" viewBox="0 0 120 76">
        <circle cx="25" cy="54" r="18" fill="none" stroke="currentColor" strokeWidth="5" opacity=".72" />
        <circle cx="96" cy="54" r="18" fill="none" stroke="currentColor" strokeWidth="5" opacity=".72" />
        <path d="M25 54 45 25 65 54H25Zm40 0 15-31h13M45 25h22M65 54l31 0M80 23l-7-11" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity=".78" />
      </symbol>
      <symbol id="door-desk" viewBox="0 0 110 82">
        <rect x="6" y="17" width="98" height="15" rx="3" fill="currentColor" opacity=".72" />
        <rect x="14" y="32" width="8" height="47" rx="2" fill="currentColor" opacity=".58" />
        <rect x="88" y="32" width="8" height="47" rx="2" fill="currentColor" opacity=".58" />
        <rect x="34" y="0" width="42" height="18" rx="3" fill="currentColor" opacity=".48" />
      </symbol>
      <symbol id="door-toolbox" viewBox="0 0 120 80">
        <rect x="7" y="24" width="106" height="50" rx="5" fill="currentColor" opacity=".72" />
        <path d="M39 24v-8c0-7 5-11 11-11h20c6 0 11 4 11 11v8" fill="none" stroke="currentColor" strokeWidth="7" opacity=".9" />
        <rect x="50" y="45" width="20" height="6" rx="3" fill="currentColor" opacity=".95" />
      </symbol>
      <symbol id="door-mower" viewBox="0 0 130 90">
        <rect x="12" y="43" width="82" height="31" rx="9" fill="currentColor" opacity=".72" />
        <path d="M89 45 116 8" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" opacity=".85" />
        <circle cx="28" cy="76" r="12" fill="currentColor" opacity=".92" />
        <circle cx="80" cy="76" r="12" fill="currentColor" opacity=".92" />
      </symbol>
    </svg>
  );
}

export default function UnitDoorCarousel({ includeOccupiedSmallest = false, featuredHome = false }) {
  const inventoryUnits = includeOccupiedSmallest ? climateInventoryUnits : climateInventoryUnits.slice(1);
  const units = featuredHome ? featuredHomeUnits : inventoryUnits;
  const [openId, setOpenId] = useState(featuredHome ? "deal-climate-10x15" : "10x15");
  const useFourAcross = featuredHome || includeOccupiedSmallest;

  return (
    <section id="unit-doors" className={styles.section} aria-labelledby="door-carousel-title">
      <ItemSymbols />

      <div className={styles.headingShell}>
        <p className={styles.eyebrow}>{featuredHome ? "Featured this month" : "Explore climate-controlled sizes"}</p>
        <h2 id="door-carousel-title">{featuredHome ? "Featured Unit Discounts This Month" : "Available Climate-Controlled Unit Sizes"}</h2>
        <p className={styles.subhead}>
          {featuredHome
            ? "Four sample promotional offers are featured here for the staging concept: two climate-controlled and two non-climate drive-up units. These are not current facility rates; open a door to compare the offer and what each size is best suited for."
            : "Browse the climate-controlled sizes represented on this site. Open a door to see what each size is best suited for, then check the facility's live inventory for current availability and pricing. When a live promotion is connected later, that rate can appear clearly on both the closed and open unit view."}
        </p>
      </div>

      <div className={styles.stage}>
        <div className={`${styles.rail} ${useFourAcross ? styles.fourAcross : ""}`}>
          {units.map((unit) => {
            const open = openId === unit.id;
            const isDriveUp = unit.type === "driveup";
            const typeLabel = isDriveUp ? "Drive-Up • Non-Climate" : "❄ Indoor climate-controlled";
            const doorTypeLabel = isDriveUp ? "Drive-Up • Non-Climate" : "❄ Climate-Controlled";
            const detailsHref = isDriveUp ? "/non-climate-control" : "/climate-controlled";

            return (
              <article
                id={`climate-unit-${unit.id}`}
                key={unit.id}
                className={`${styles.unit} ${open ? styles.open : ""} ${unit.featured ? styles.featured : ""}`}
                tabIndex={0}
                aria-label={`${unit.size} ${isDriveUp ? "non-climate drive-up" : "climate-controlled"} storage. ${unit.label}.`}
                onClick={(event) => {
                  if (event.target.closest("a")) return;
                  setOpenId(open ? null : unit.id);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setOpenId(open ? null : unit.id);
                  }
                }}
              >
                {featuredHome && unit.specialLabel ? (
                  <div className={styles.featuredFlag}>{unit.featured ? "★ " : ""}{unit.specialLabel}</div>
                ) : null}
                <div className={styles.fascia}><span>{unit.number}</span></div>
                <div className={styles.opening}>
                  <div className={styles.interior} />
                  <svg className={styles.stuff} viewBox="0 0 280 100" preserveAspectRatio="none" aria-hidden="true">
                    {unit.items.map(([symbol, x, y, width, height], index) => (
                      <use key={`${symbol}-${index}`} className={styles.item} href={`#door-${symbol}`} x={x} y={y} width={width} height={height} />
                    ))}
                  </svg>
                  <div className={styles.scrim} />

                  <div className={styles.info}>
                    <span
                      className={styles.climateTag}
                      style={isDriveUp ? { background: "#d9ecdf", color: "#245d36" } : undefined}
                    >
                      {typeLabel}
                    </span>
                    <p className={styles.infoSize}>{unit.size}</p>
                    <p className={styles.infoLabel}>{unit.label}</p>

                    {featuredHome && unit.mockSpecialPrice ? (
                      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "7px", margin: "0 0 11px" }}>
                        <span style={{ color: "#8da1ad", fontSize: "9px", textDecoration: "line-through", fontWeight: 750 }}>{unit.mockRegularPrice}/mo</span>
                        <strong style={{ color: "#9be383", fontSize: "18px", lineHeight: 1, fontWeight: 900 }}>{unit.mockSpecialPrice}<span style={{ fontSize: "8px", color: "#cfe7d0", marginLeft: "2px" }}>/mo</span></strong>
                        <span style={{ color: "#77c65b", fontSize: "7px", textTransform: "uppercase", letterSpacing: ".08em", fontWeight: 850 }}>demo</span>
                      </div>
                    ) : null}

                    <div className={styles.fitBlock}>
                      <span className={styles.fitEyebrow}>Best for</span>
                      <div className={styles.fitChips}>
                        {unit.bestFor.map((item) => <span key={item}>{item}</span>)}
                      </div>
                    </div>

                    <p className={styles.helperCopy}>{unit.helper}</p>

                    <div className={styles.actions}>
                      {featuredHome ? (
                        <>
                          <a className={styles.reserveLink} href={detailsHref}>{isDriveUp ? "View Drive-Up Units →" : "View Climate Units →"}</a>
                          <a className={styles.callLink} href={PHONE_LINK}>Call to Ask</a>
                        </>
                      ) : (
                        <>
                          <a className={styles.reserveLink} href={UNITS_URL}>View Live Availability →</a>
                          <a className={styles.callLink} href={PHONE_LINK}>Call to Ask</a>
                        </>
                      )}
                    </div>
                  </div>

                  <div className={styles.door}>
                    <span
                      className={styles.doorClimate}
                      style={isDriveUp ? { background: "#2e7d4f" } : undefined}
                    >
                      {doorTypeLabel}
                    </span>
                    <p>{unit.size}</p>
                    <span>{unit.sqft}</span>
                    {featuredHome && unit.mockSpecialPrice ? (
                      <div style={{ marginTop: "10px", display: "inline-flex", alignItems: "baseline", gap: "5px", background: "#e8f6e3", border: "1px solid #cfe8c8", borderRadius: "999px", padding: "5px 9px", color: "#2f7d27" }}>
                        <span style={{ textDecoration: "line-through", fontSize: "7.5px", opacity: .68 }}>{unit.mockRegularPrice}</span>
                        <strong style={{ fontSize: "12px", lineHeight: 1 }}>{unit.mockSpecialPrice}<span style={{ fontSize: "7px", marginLeft: "1px" }}>/mo</span></strong>
                        <span style={{ fontSize: "6.5px", textTransform: "uppercase", letterSpacing: ".06em", fontWeight: 850 }}>mock</span>
                      </div>
                    ) : null}
                    <small>{unit.doorNote}</small>
                    <i />
                  </div>
                  <span className={styles.sill} />
                </div>
                <div className={styles.tapHint}>{open ? "Tap to close" : "Hover or tap to open"}</div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
