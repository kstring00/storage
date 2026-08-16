"use client";

import { useState } from "react";
import styles from "./UnitDoorCarousel.module.css";

const UNITS_URL = "https://www.lakecityselfstorage.com/1143-nw-lake-jeffrey-rd-lake-city-fl-32055";
const PHONE_LINK = "tel:+13862925494";

const occupiedSmallUnit = {
  id: "5x5",
  number: "SMALLEST",
  size: "5 × 5",
  sqft: "25 sq ft",
  label: "Compact climate-controlled storage",
  doorNote: "Boxes • décor • small items",
  occupiedDemo: true,
  bestFor: ["Boxes", "Seasonal décor", "Small belongings"],
  items: [
    ["boxstack", 58, 42, 60, 58],
    ["bin", 142, 69, 52, 29],
    ["bin", 198, 72, 42, 26],
  ],
};

const standardUnits = [
  {
    id: "10x10",
    number: "B-03",
    size: "10 × 10",
    sqft: "100 sq ft",
    label: "Bedroom or apartment overflow",
    doorNote: "Bikes • bed set • desk",
    specialLabel: "Monthly Special",
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
    label: "Recommended for most households",
    doorNote: "Furniture • mattresses • boxes",
    featured: true,
    specialLabel: "Featured Monthly Special",
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
    label: "Larger household storage",
    doorNote: "Multiple rooms • appliances",
    specialLabel: "Monthly Special",
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
        <p className={styles.eyebrow}>Featured this month</p>
        <h2 id="door-carousel-title">Climate-Controlled Monthly Specials</h2>
        <p className={styles.subhead}>
          These featured sizes are being highlighted as this month&apos;s promotional units. Open a door to see what each size is best suited for, then check current availability and promotional pricing with the facility.
        </p>
      </div>

      <div className={styles.stage}>
        <div className={`${styles.rail} ${includeOccupiedSmallest ? styles.fourAcross : ""}`}>
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
                {unit.specialLabel && !unit.occupiedDemo ? (
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

                  <div className={`${styles.info} ${unit.occupiedDemo ? styles.occupiedInfo : ""}`}>
                    <span className={`${styles.climateTag} ${unit.occupiedDemo ? styles.fullTag : ""}`}>
                      {unit.occupiedDemo ? "Example status • Fully occupied" : "❄ Indoor climate-controlled"}
                    </span>
                    <p className={styles.infoSize}>{unit.size}</p>
                    <p className={styles.infoLabel}>{unit.label}</p>

                    <div className={styles.fitBlock}>
                      <span className={styles.fitEyebrow}>{unit.occupiedDemo ? "Typically fits" : "Best for"}</span>
                      <div className={styles.fitChips}>
                        {unit.bestFor.map((item) => <span key={item}>{item}</span>)}
                      </div>
                    </div>

                    {unit.occupiedDemo ? (
                      <div className={styles.soldOutMessage}>
                        <strong>This smallest option is full in this demonstration.</strong>
                        <span>Give us a call and we&apos;ll help compare the next size up and look for a practical option at a reasonable rate.</span>
                      </div>
                    ) : (
                      <p className={styles.helperCopy}>{unit.helper}</p>
                    )}

                    <div className={styles.actions}>
                      {unit.occupiedDemo ? (
                        <>
                          <a className={styles.reserveLink} href={PHONE_LINK}>Call About the Next Size →</a>
                          <a className={styles.callLink} href="#climate-unit-10x10">See Larger Options</a>
                        </>
                      ) : (
                        <>
                          <a className={styles.reserveLink} href={UNITS_URL}>Check Special & Availability →</a>
                          <a className={styles.callLink} href={PHONE_LINK}>Call to Ask</a>
                        </>
                      )}
                    </div>
                  </div>

                  <div className={styles.door}>
                    <span className={styles.doorClimate}>{unit.occupiedDemo ? "❄ Climate-Controlled • Demo" : "❄ Climate-Controlled"}</span>
                    <p>{unit.size}</p>
                    <span>{unit.sqft}</span>
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
