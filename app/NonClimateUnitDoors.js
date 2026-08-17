"use client";

import { useState } from "react";
import styles from "./NonClimateUnitDoors.module.css";
import pricingStyles from "./LiveUnitPricing.module.css";
import { INVENTORY_AS_OF, INVENTORY_SOURCE_URL, money, nonClimateUnits } from "./storageData";

const PHONE_LINK = "tel:+13862925494";

const itemLayouts = {
  "5x10": [["toolbox", 20, 54, 72, 42], ["boxstack", 108, 40, 54, 58], ["bin", 190, 64, 48, 30]],
  "10x10": [["mower", 14, 54, 84, 42], ["toolbox", 107, 58, 70, 39], ["boxstack", 190, 37, 55, 61]],
  "10x15": [["mower", 8, 58, 75, 38], ["boxstack", 88, 40, 53, 58], ["toolbox", 148, 59, 63, 37], ["bin", 218, 65, 43, 27]],
  "10x20": [["mower", 4, 60, 70, 36], ["toolbox", 78, 58, 58, 37], ["boxstack", 140, 35, 54, 63], ["bin", 199, 65, 42, 28]],
  "10x30": [["toolbox", 2, 58, 56, 37], ["mower", 59, 61, 62, 34], ["boxstack", 124, 34, 48, 64], ["bin", 176, 66, 40, 27], ["boxstack", 218, 45, 40, 52]],
};

function ItemSymbols() {
  return (
    <svg className={styles.symbols} aria-hidden="true" focusable="false">
      <symbol id="nc-toolbox" viewBox="0 0 120 80"><rect x="7" y="24" width="106" height="50" rx="5" fill="currentColor" opacity=".72"/><path d="M39 24v-8c0-7 5-11 11-11h20c6 0 11 4 11 11v8" fill="none" stroke="currentColor" strokeWidth="7" opacity=".9"/><rect x="50" y="45" width="20" height="6" rx="3" fill="currentColor" opacity=".95"/></symbol>
      <symbol id="nc-boxstack" viewBox="0 0 100 130"><rect x="8" y="58" width="84" height="72" fill="currentColor" opacity=".58"/><rect x="8" y="58" width="84" height="8" fill="currentColor" opacity=".86"/><rect x="46" y="58" width="6" height="72" fill="currentColor" opacity=".88"/><rect x="22" y="8" width="58" height="50" fill="currentColor" opacity=".68"/></symbol>
      <symbol id="nc-bin" viewBox="0 0 90 60"><path d="M9 8h72l-6 48H15Z" fill="currentColor" opacity=".62"/><rect x="3" y="3" width="84" height="10" rx="3" fill="currentColor" opacity=".9"/></symbol>
      <symbol id="nc-mower" viewBox="0 0 130 90"><rect x="12" y="43" width="82" height="31" rx="9" fill="currentColor" opacity=".72"/><path d="M89 45 116 8" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" opacity=".85"/><circle cx="28" cy="76" r="12" fill="currentColor" opacity=".92"/><circle cx="80" cy="76" r="12" fill="currentColor" opacity=".92"/></symbol>
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
        <p className={styles.subhead}>Price should be visible before you open a door. These starting rates use a {INVENTORY_AS_OF} snapshot of Lake City Self Storage&apos;s official online inventory; live availability, exact variants, and promotions remain on the facility&apos;s rental system.</p>
      </div>

      <div className={styles.stage}>
        <div className={styles.rail}>
          {nonClimateUnits.map((unit) => {
            const open = openId === unit.id;
            return (
              <article
                key={unit.id}
                className={`${styles.unit} ${open ? styles.open : ""}`}
                tabIndex={0}
                aria-label={`${unit.size} non-climate drive-up storage starting at ${money(unit.fromPrice)} per month.`}
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
                    {itemLayouts[unit.id].map(([symbol, x, y, width, height], index) => (
                      <use key={`${symbol}-${index}`} className={styles.item} href={`#nc-${symbol}`} x={x} y={y} width={width} height={height} />
                    ))}
                  </svg>
                  <div className={styles.scrim} />
                  <div className={styles.info}>
                    <span className={styles.driveTag}>Drive-Up Access</span>
                    <p className={styles.infoSize}>{unit.size}</p>
                    <p className={styles.infoLabel}>{unit.label}</p>
                    <div className={styles.priceRow}><span>Current starting rate</span><strong>{money(unit.fromPrice)}/mo</strong></div>
                    <ul className={styles.fitList}>{unit.bestFor.map((line) => <li key={line}>{line}</li>)}</ul>
                    <div className={styles.actions}>
                      <a className={styles.reserveLink} href={INVENTORY_SOURCE_URL}>View Official Live Inventory →</a>
                      <a className={styles.callLink} href={PHONE_LINK}>Call to Ask</a>
                    </div>
                  </div>
                  <div className={styles.door}>
                    <span className={styles.doorType}>Drive-Up Storage</span>
                    <p>{unit.size}</p>
                    <span>{unit.sqft} sq ft</span>
                    <div className={pricingStyles.doorRate}><small>From</small><strong>{money(unit.fromPrice)}<em>/mo</em></strong></div>
                    <small>{unit.label}</small>
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
      <div className={pricingStyles.sourceRow}><span>Pricing snapshot: {INVENTORY_AS_OF}.</span><a href={INVENTORY_SOURCE_URL}>Check current Lake City Self Storage inventory →</a></div>
    </section>
  );
}
