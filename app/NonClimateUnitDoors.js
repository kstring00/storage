"use client";

import { useState } from "react";
import styles from "./NonClimateUnitDoors.module.css";

const UNITS_URL = "https://www.lakecityselfstorage.com/1143-nw-lake-jeffrey-rd-lake-city-fl-32055";
const PHONE_LINK = "tel:+13862925494";

const units = [
  {
    id: "5x10",
    size: "5 × 10",
    sqft: "50 sq ft",
    label: "Compact drive-up storage",
    fit: ["Tools, seasonal gear, and totes", "Small household or project overflow"],
    items: [["toolbox", 20, 54, 72, 42], ["boxstack", 108, 40, 54, 58], ["bin", 190, 64, 48, 30]],
  },
  {
    id: "10x10",
    size: "10 × 10",
    sqft: "100 sq ft",
    label: "Popular garage-style storage",
    fit: ["Lawn gear, patio items, and sturdy bins", "Garage cleanouts and household overflow"],
    items: [["mower", 14, 54, 84, 42], ["toolbox", 107, 58, 70, 39], ["boxstack", 190, 37, 55, 61]],
  },
  {
    id: "10x15",
    size: "10 × 15",
    sqft: "150 sq ft",
    label: "Room for larger projects",
    fit: ["Outdoor equipment and bulky durable items", "Business, project, or household overflow"],
    items: [["mower", 8, 58, 75, 38], ["boxstack", 88, 40, 53, 58], ["toolbox", 148, 59, 63, 37], ["bin", 218, 65, 43, 27]],
  },
  {
    id: "10x20",
    size: "10 × 20",
    sqft: "200 sq ft",
    label: "Large drive-up storage",
    fit: ["Garage contents and larger equipment", "Bulky, durable household or work items"],
    items: [["mower", 4, 60, 70, 36], ["toolbox", 78, 58, 58, 37], ["boxstack", 140, 35, 54, 63], ["bin", 199, 65, 42, 28], ["bin", 238, 70, 32, 23]],
  },
  {
    id: "10x30",
    size: "10 × 30",
    sqft: "300 sq ft",
    label: "Extra-large drive-up storage",
    fit: ["Large household or business overflow", "Equipment, totes, and bulky durable belongings"],
    items: [["toolbox", 2, 58, 56, 37], ["mower", 59, 61, 62, 34], ["boxstack", 124, 34, 48, 64], ["bin", 176, 66, 40, 27], ["boxstack", 218, 45, 40, 52]],
  },
];

function ItemSymbols() {
  return (
    <svg className={styles.symbols} aria-hidden="true" focusable="false">
      <symbol id="nc-toolbox" viewBox="0 0 120 80">
        <rect x="7" y="24" width="106" height="50" rx="5" fill="currentColor" opacity=".72" />
        <path d="M39 24v-8c0-7 5-11 11-11h20c6 0 11 4 11 11v8" fill="none" stroke="currentColor" strokeWidth="7" opacity=".9" />
        <rect x="50" y="45" width="20" height="6" rx="3" fill="currentColor" opacity=".95" />
      </symbol>
      <symbol id="nc-boxstack" viewBox="0 0 100 130">
        <rect x="8" y="58" width="84" height="72" fill="currentColor" opacity=".58" />
        <rect x="8" y="58" width="84" height="8" fill="currentColor" opacity=".86" />
        <rect x="46" y="58" width="6" height="72" fill="currentColor" opacity=".88" />
        <rect x="22" y="8" width="58" height="50" fill="currentColor" opacity=".68" />
        <rect x="22" y="8" width="58" height="7" fill="currentColor" opacity=".88" />
      </symbol>
      <symbol id="nc-bin" viewBox="0 0 90 60">
        <path d="M9 8h72l-6 48H15Z" fill="currentColor" opacity=".62" />
        <rect x="3" y="3" width="84" height="10" rx="3" fill="currentColor" opacity=".9" />
      </symbol>
      <symbol id="nc-mower" viewBox="0 0 130 90">
        <rect x="12" y="43" width="82" height="31" rx="9" fill="currentColor" opacity=".72" />
        <path d="M89 45 116 8" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" opacity=".85" />
        <circle cx="28" cy="76" r="12" fill="currentColor" opacity=".92" />
        <circle cx="80" cy="76" r="12" fill="currentColor" opacity=".92" />
      </symbol>
    </svg>
  );
}

export default function NonClimateUnitDoors() {
  const [openId, setOpenId] = useState("10x15");

  return (
    <section id="drive-up-sizes" className={styles.section} aria-labelledby="drive-up-size-title">
      <ItemSymbols />
      <div className={styles.headingShell}>
        <p className={styles.eyebrow}>Explore non-climate drive-up sizes</p>
        <h2 id="drive-up-size-title">Choose the Space That Fits Your Storage Job</h2>
        <p className={styles.subhead}>
          Hover or tap a door to open it. These sizes reflect Lake City Self Storage&apos;s documented non-climate drive-up size range; current vacancies and rates can change, so each door links to live inventory.
        </p>
      </div>

      <div className={styles.stage}>
        <div className={styles.rail}>
          {units.map((unit) => {
            const open = openId === unit.id;
            return (
              <article
                key={unit.id}
                className={`${styles.unit} ${open ? styles.open : ""}`}
                tabIndex={0}
                aria-label={`${unit.size} non-climate drive-up storage. ${unit.label}.`}
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
                <div className={styles.fascia}><span>DRIVE-UP</span></div>
                <div className={styles.opening}>
                  <div className={styles.interior} />
                  <svg className={styles.stuff} viewBox="0 0 280 100" preserveAspectRatio="none" aria-hidden="true">
                    {unit.items.map(([symbol, x, y, width, height], index) => (
                      <use key={`${symbol}-${index}`} className={styles.item} href={`#nc-${symbol}`} x={x} y={y} width={width} height={height} />
                    ))}
                  </svg>
                  <div className={styles.scrim} />
                  <div className={styles.info}>
                    <span className={styles.driveTag}>Drive-Up Access</span>
                    <p className={styles.infoSize}>{unit.size}</p>
                    <p className={styles.infoLabel}>{unit.label}</p>
                    <ul className={styles.fitList}>
                      {unit.fit.map((line) => <li key={line}>{line}</li>)}
                    </ul>
                    <div className={styles.priceRow}>
                      <span>Current rate</span>
                      <strong>See live price</strong>
                    </div>
                    <div className={styles.actions}>
                      <a className={styles.reserveLink} href={UNITS_URL}>View Current Price →</a>
                      <a className={styles.callLink} href={PHONE_LINK}>Call to Ask</a>
                    </div>
                  </div>
                  <div className={styles.door}>
                    <span className={styles.doorType}>Drive-Up Storage</span>
                    <p>{unit.size}</p>
                    <span>{unit.sqft}</span>
                    <small>{unit.label}</small>
                    <em>Live pricing online</em>
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
