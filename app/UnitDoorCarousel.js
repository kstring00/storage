"use client";

import { useState } from "react";
import styles from "./UnitDoorCarousel.module.css";

const UNITS_URL = "https://www.lakecityselfstorage.com/1143-nw-lake-jeffrey-rd-lake-city-fl-32055";
const PHONE_LINK = "tel:+13862925494";

const occupiedSmallUnit = {
  id: "5x5",
  number: "SMALL",
  size: "5 × 5",
  sqft: "25 sq ft",
  label: "Small climate-controlled storage",
  occupiedDemo: true,
  fit: [
    "A compact option for boxes, seasonal items, and smaller belongings",
    "Example availability state: this size is shown as fully occupied",
  ],
  items: [
    ["boxstack", 60, 42, 58, 58],
    ["bin", 142, 69, 52, 29],
    ["bin", 196, 72, 42, 26],
  ],
};

const standardUnits = [
  {
    id: "10x10",
    number: "B-03",
    size: "10 × 10",
    sqft: "100 sq ft",
    label: "Smaller household storage",
    fit: [
      "A bed set, sofa, and boxes",
      "Electronics, documents, décor, and smaller furniture",
    ],
    items: [
      ["bed", 6, 60, 76, 38],
      ["sofa", 90, 61, 64, 37],
      ["boxstack", 162, 44, 40, 54],
      ["fridge", 234, 34, 32, 64],
    ],
  },
  {
    id: "10x15",
    number: "B-07",
    size: "10 × 15",
    sqft: "150 sq ft",
    label: "Recommended for most households",
    featured: true,
    fit: [
      "Furniture from multiple rooms",
      "Mattresses, appliances, boxes, electronics, and décor",
    ],
    items: [
      ["bed", 4, 61, 74, 37],
      ["dresser", 84, 56, 48, 42],
      ["sofa", 138, 64, 60, 34],
      ["boxstack", 204, 50, 36, 48],
      ["fridge", 246, 42, 28, 56],
    ],
  },
  {
    id: "10x20",
    number: "C-01",
    size: "10 × 20",
    sqft: "200 sq ft",
    label: "Larger household storage",
    fit: [
      "Larger furniture and appliances",
      "A substantial move, remodel, or long-term household storage",
    ],
    items: [
      ["bed", 2, 63, 70, 35],
      ["sofa", 76, 66, 56, 32],
      ["dresser", 138, 59, 44, 39],
      ["boxstack", 188, 53, 34, 45],
      ["fridge", 228, 46, 26, 52],
      ["bin", 258, 76, 20, 22],
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
    </svg>
  );
}

export default function UnitDoorCarousel({ includeOccupiedSmallest = false }) {
  const units = includeOccupiedSmallest ? [occupiedSmallUnit, ...standardUnits] : standardUnits;
  const [openId, setOpenId] = useState(includeOccupiedSmallest ? "5x5" : "10x15");

  return (
    <section id="unit-doors" className={styles.section} aria-labelledby="door-carousel-title">
      <ItemSymbols />

      <div className={styles.headingShell}>
        <p className={styles.eyebrow}>Choose your climate-controlled size</p>
        <h2 id="door-carousel-title">How Much Space Do You Need?</h2>
        <p className={styles.subhead}>
          Open a door to picture what fits. Climate-controlled inventory and rates can change, so use this guide to compare space and then check the facility&apos;s live availability.
        </p>
      </div>

      <div className={styles.stage}>
        <div
          className={styles.rail}
          style={includeOccupiedSmallest ? { gridTemplateColumns: "repeat(4, minmax(0, 1fr))" } : undefined}
        >
          {units.map((unit) => {
            const open = openId === unit.id;
            return (
              <article
                id={`climate-unit-${unit.id}`}
                key={unit.id}
                className={`${styles.unit} ${open ? styles.open : ""} ${unit.featured ? styles.featured : ""}`}
                tabIndex={0}
                aria-label={`${unit.size} climate-controlled storage. ${unit.label}.`}
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
                {unit.featured ? <div className={styles.featuredFlag}>★ Recommended</div> : null}
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
                      style={unit.occupiedDemo ? { background: "#f4c7c7", color: "#762a2a" } : undefined}
                    >
                      {unit.occupiedDemo ? "Example availability • Fully occupied" : "❄ Indoor climate-controlled"}
                    </span>
                    <p className={styles.infoSize}>{unit.size}</p>
                    <p className={styles.infoLabel}>{unit.label}</p>
                    {unit.occupiedDemo ? (
                      <div
                        style={{
                          maxWidth: "245px",
                          color: "#dce8ef",
                          fontSize: "9.5px",
                          lineHeight: 1.5,
                          marginTop: "1px",
                        }}
                      >
                        This sold-out state is shown as a demo. If the smallest option is full, give us a call and we&apos;ll help compare the next size up and find a practical option at a reasonable rate.
                      </div>
                    ) : (
                      <ul className={styles.fitList}>
                        {unit.fit.map((line) => <li key={line}>{line}</li>)}
                      </ul>
                    )}
                    <div className={styles.actions}>
                      {unit.occupiedDemo ? (
                        <>
                          <a className={styles.reserveLink} href={PHONE_LINK}>Call About the Next Size →</a>
                          <a className={styles.callLink} href="#climate-unit-10x10">See Larger Options</a>
                        </>
                      ) : (
                        <>
                          <a className={styles.reserveLink} href={UNITS_URL}>View Availability →</a>
                          <a className={styles.callLink} href={PHONE_LINK}>Call to Ask</a>
                        </>
                      )}
                    </div>
                  </div>
                  <div className={styles.door}>
                    <span className={styles.doorClimate}>{unit.occupiedDemo ? "❄ Climate-Controlled • Demo" : "❄ Climate-Controlled"}</span>
                    <p>{unit.size}</p>
                    <span>{unit.sqft}</span>
                    <small>{unit.occupiedDemo ? "Example: fully occupied" : unit.label}</small>
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
