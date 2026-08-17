"use client";

import { useState } from "react";
import styles from "./UnitDoorCarousel.module.css";
import {
  climateUnits,
  featuredUnits,
  INVENTORY_AS_OF,
  INVENTORY_SOURCE_URL,
  money,
} from "./storageData";

const PHONE_LINK = "tel:+13862925494";

const itemLayouts = {
  "5x5": [["boxstack", 58, 42, 60, 58], ["bin", 142, 69, 52, 29], ["bin", 198, 72, 42, 26]],
  "10x10": [["bed", 8, 62, 74, 36], ["bike", 88, 57, 64, 41], ["desk", 160, 54, 58, 44], ["boxstack", 226, 55, 40, 43]],
  "10x15": [["bed", 4, 63, 72, 35], ["dresser", 82, 58, 46, 40], ["sofa", 134, 65, 62, 33], ["boxstack", 202, 51, 36, 47], ["fridge", 246, 43, 27, 55]],
  "10x20": [["bed", 2, 64, 69, 34], ["sofa", 74, 67, 57, 31], ["dresser", 136, 60, 44, 38], ["boxstack", 186, 54, 34, 44], ["fridge", 226, 46, 27, 52]],
  driveup10x10: [["mower", 12, 55, 82, 42], ["toolbox", 104, 58, 68, 38], ["boxstack", 186, 39, 55, 59]],
  driveup10x20: [["mower", 4, 60, 70, 36], ["toolbox", 78, 58, 58, 37], ["boxstack", 140, 35, 54, 63], ["bin", 205, 65, 42, 28]],
};

function ItemSymbols() {
  return (
    <svg className={styles.symbols} aria-hidden="true" focusable="false">
      <symbol id="door-bed" viewBox="0 0 140 70"><rect x="0" y="6" width="13" height="54" rx="3" fill="currentColor" opacity=".7"/><rect x="11" y="30" width="126" height="18" rx="4" fill="currentColor" opacity=".55"/><rect x="11" y="25" width="126" height="7" rx="3" fill="currentColor" opacity=".88"/><rect x="18" y="16" width="32" height="12" rx="6" fill="currentColor" opacity=".8"/></symbol>
      <symbol id="door-boxstack" viewBox="0 0 100 130"><rect x="8" y="58" width="84" height="72" fill="currentColor" opacity=".55"/><rect x="8" y="58" width="84" height="8" fill="currentColor" opacity=".82"/><rect x="46" y="58" width="6" height="72" fill="currentColor" opacity=".85"/><rect x="22" y="8" width="58" height="50" fill="currentColor" opacity=".62"/></symbol>
      <symbol id="door-sofa" viewBox="0 0 140 80"><rect x="0" y="22" width="140" height="42" rx="7" fill="currentColor" opacity=".52"/><rect x="8" y="40" width="124" height="26" rx="5" fill="currentColor" opacity=".74"/><rect x="0" y="28" width="15" height="38" rx="5" fill="currentColor" opacity=".82"/><rect x="125" y="28" width="15" height="38" rx="5" fill="currentColor" opacity=".82"/></symbol>
      <symbol id="door-fridge" viewBox="0 0 60 120"><rect x="0" y="0" width="60" height="120" rx="5" fill="currentColor" opacity=".58"/><rect x="0" y="43" width="60" height="3" fill="currentColor" opacity=".95"/></symbol>
      <symbol id="door-dresser" viewBox="0 0 90 80"><rect x="0" y="0" width="90" height="71" rx="4" fill="currentColor" opacity=".58"/><rect x="7" y="13" width="76" height="3" fill="currentColor" opacity=".9"/><rect x="7" y="34" width="76" height="3" fill="currentColor" opacity=".9"/><rect x="7" y="55" width="76" height="3" fill="currentColor" opacity=".9"/></symbol>
      <symbol id="door-bin" viewBox="0 0 70 50"><path d="M7 0 H63 L57 50 H13 Z" fill="currentColor" opacity=".58"/><rect x="2" y="0" width="66" height="7" rx="2" fill="currentColor" opacity=".9"/></symbol>
      <symbol id="door-bike" viewBox="0 0 120 76"><circle cx="25" cy="54" r="18" fill="none" stroke="currentColor" strokeWidth="5" opacity=".72"/><circle cx="96" cy="54" r="18" fill="none" stroke="currentColor" strokeWidth="5" opacity=".72"/><path d="M25 54 45 25 65 54H25Zm40 0 15-31h13M45 25h22M65 54l31 0M80 23l-7-11" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity=".78"/></symbol>
      <symbol id="door-desk" viewBox="0 0 110 82"><rect x="6" y="17" width="98" height="15" rx="3" fill="currentColor" opacity=".72"/><rect x="14" y="32" width="8" height="47" rx="2" fill="currentColor" opacity=".58"/><rect x="88" y="32" width="8" height="47" rx="2" fill="currentColor" opacity=".58"/><rect x="34" y="0" width="42" height="18" rx="3" fill="currentColor" opacity=".48"/></symbol>
      <symbol id="door-toolbox" viewBox="0 0 120 80"><rect x="7" y="24" width="106" height="50" rx="5" fill="currentColor" opacity=".72"/><path d="M39 24v-8c0-7 5-11 11-11h20c6 0 11 4 11 11v8" fill="none" stroke="currentColor" strokeWidth="7" opacity=".9"/></symbol>
      <symbol id="door-mower" viewBox="0 0 130 90"><rect x="12" y="43" width="82" height="31" rx="9" fill="currentColor" opacity=".72"/><path d="M89 45 116 8" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" opacity=".85"/><circle cx="28" cy="76" r="12" fill="currentColor" opacity=".92"/><circle cx="80" cy="76" r="12" fill="currentColor" opacity=".92"/></symbol>
    </svg>
  );
}

function unitItems(unit) {
  if (unit.type === "driveup") return itemLayouts[`driveup${unit.slug}`] || itemLayouts.driveup10x10;
  return itemLayouts[unit.slug] || itemLayouts["10x10"];
}

export default function UnitDoorCarousel({ includeOccupiedSmallest = false, featuredHome = false }) {
  const units = featuredHome
    ? featuredUnits
    : includeOccupiedSmallest
      ? climateUnits
      : climateUnits.filter((unit) => unit.id !== "5x5");
  const [openId, setOpenId] = useState(featuredHome ? "featured-climate-10x15" : "10x15");
  const useFourAcross = featuredHome || includeOccupiedSmallest;

  return (
    <section id="unit-doors" className={styles.section} aria-labelledby="door-carousel-title">
      <ItemSymbols />
      <div className={styles.headingShell}>
        <p className={styles.eyebrow}>{featuredHome ? "Featured current options" : "Explore climate-controlled sizes"}</p>
        <h2 id="door-carousel-title">{featuredHome ? "Compare Real Current Starting Rates" : "Available Climate-Controlled Unit Sizes"}</h2>
        <p className={styles.subhead}>
          {featuredHome
            ? `These featured starting rates use a ${INVENTORY_AS_OF} snapshot of Lake City Self Storage's official online inventory. They are not invented discounts. Current availability and promotions can change.`
            : `Price should not be hidden. Each size shows the current starting-rate snapshot below, while the official inventory remains the source of truth for live availability, exact unit variants, and promotions.`}
        </p>
      </div>

      <div className={styles.stage}>
        <div className={`${styles.rail} ${useFourAcross ? styles.fourAcross : ""}`}>
          {units.map((unit) => {
            const open = openId === unit.id;
            const isDriveUp = unit.type === "driveup";
            const featureHref = isDriveUp ? "/non-climate-control" : "/climate-controlled";
            const inventoryHref = unit.conversionHref || INVENTORY_SOURCE_URL;
            const primaryText = featuredHome
              ? (isDriveUp ? "Explore Drive-Up Storage →" : "Explore Climate Storage →")
              : (unit.conversionHref ? `View ${unit.size} Availability →` : "View Official Live Inventory →");

            return (
              <article
                id={`climate-unit-${unit.slug}`}
                key={unit.id}
                className={`${styles.unit} ${open ? styles.open : ""} ${unit.featured ? styles.featured : ""}`}
                tabIndex={0}
                aria-label={`${unit.size} ${isDriveUp ? "non-climate drive-up" : "climate-controlled"} storage starting at ${money(unit.fromPrice)} per month.`}
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
                {featuredHome ? <div className={styles.featuredFlag}>{unit.featured ? "★ " : ""}{unit.featureLabel}</div> : null}
                <div className={styles.fascia}><span>{isDriveUp ? "DRIVE-UP" : unit.number}</span></div>
                <div className={styles.opening}>
                  <div className={styles.interior} />
                  <svg className={styles.stuff} viewBox="0 0 280 100" preserveAspectRatio="none" aria-hidden="true">
                    {unitItems(unit).map(([symbol, x, y, width, height], index) => (
                      <use key={`${symbol}-${index}`} className={styles.item} href={`#door-${symbol}`} x={x} y={y} width={width} height={height} />
                    ))}
                  </svg>
                  <div className={styles.scrim} />

                  <div className={styles.info}>
                    <span className={styles.climateTag} style={isDriveUp ? { background: "#d9ecdf", color: "#245d36" } : undefined}>
                      {isDriveUp ? "Drive-Up • Non-Climate" : "❄ Indoor climate-controlled"}
                    </span>
                    <p className={styles.infoSize}>{unit.size}</p>
                    <p className={styles.infoLabel}>{unit.label}</p>
                    <div className={styles.livePriceBlock}>
                      <span>Current starting-rate snapshot</span>
                      <strong>{money(unit.fromPrice)}<small>/mo</small></strong>
                    </div>
                    <div className={styles.fitBlock}>
                      <span className={styles.fitEyebrow}>Best for</span>
                      <div className={styles.fitChips}>{unit.bestFor.map((item) => <span key={item}>{item}</span>)}</div>
                    </div>
                    <p className={styles.helperCopy}>{unit.helper}</p>
                    <div className={styles.actions}>
                      <a className={styles.reserveLink} href={featuredHome ? featureHref : inventoryHref}>{primaryText}</a>
                      <a className={styles.callLink} href={PHONE_LINK}>Call to Ask</a>
                    </div>
                  </div>

                  <div className={styles.door}>
                    <span className={styles.doorClimate} style={isDriveUp ? { background: "#2e7d4f" } : undefined}>
                      {isDriveUp ? "Drive-Up • Non-Climate" : "❄ Climate-Controlled"}
                    </span>
                    <p>{unit.size}</p>
                    <span>{unit.sqft} sq ft</span>
                    <div className={styles.doorPrice}><small>From</small><strong>{money(unit.fromPrice)}<em>/mo</em></strong></div>
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
      <div className={styles.priceSource}>
        <span>Pricing snapshot: {INVENTORY_AS_OF}. Live rates and availability can change.</span>
        <a href={INVENTORY_SOURCE_URL}>Check Lake City Self Storage live inventory →</a>
      </div>
    </section>
  );
}
