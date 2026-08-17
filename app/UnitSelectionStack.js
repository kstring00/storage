"use client";

import { useState } from "react";
import styles from "./UnitSelectionStack.module.css";
import {
  climateUnits,
  nonClimateUnits,
  INVENTORY_SOURCE_URL,
  money,
} from "./storageData";

const PHONE_LINK = "tel:+13862925494";

const itemSets = {
  climate: {
    "5x5": ["boxstack", "bin", "dresser"],
    "10x10": ["bed", "bike", "desk", "boxstack"],
    "10x15": ["bed", "sofa", "dresser", "boxstack"],
    "10x20": ["sofa", "bed", "fridge", "dresser", "boxstack"],
  },
  driveup: {
    "5x10": ["toolbox", "bin", "boxstack"],
    "10x10": ["mower", "toolbox", "bin", "boxstack"],
    "10x15": ["mower", "toolbox", "boxstack", "dresser"],
    "10x20": ["mower", "toolbox", "fridge", "boxstack", "dresser"],
    "10x30": ["mower", "toolbox", "fridge", "sofa", "boxstack"],
  },
};

const itemPositions = [
  { left: "43%", bottom: "16%", outX: "74px", outY: "0px", scale: 1 },
  { left: "46%", bottom: "13%", outX: "155px", outY: "4px", scale: 0.92 },
  { left: "44%", bottom: "15%", outX: "235px", outY: "-2px", scale: 0.86 },
  { left: "47%", bottom: "12%", outX: "310px", outY: "8px", scale: 0.8 },
  { left: "45%", bottom: "14%", outX: "376px", outY: "0px", scale: 0.75 },
];

function ItemSymbols() {
  return (
    <svg className={styles.symbols} aria-hidden="true" focusable="false">
      <symbol id="select-bed" viewBox="0 0 140 80"><rect x="2" y="12" width="16" height="58" rx="3" fill="currentColor" opacity=".82"/><rect x="16" y="36" width="120" height="28" rx="5" fill="currentColor" opacity=".56"/><rect x="16" y="29" width="120" height="10" rx="4" fill="currentColor" opacity=".9"/><rect x="25" y="18" width="38" height="14" rx="7" fill="currentColor" opacity=".72"/><path d="M23 64v10M128 64v10" stroke="currentColor" strokeWidth="5"/></symbol>
      <symbol id="select-bike" viewBox="0 0 130 84"><circle cx="28" cy="60" r="20" fill="none" stroke="currentColor" strokeWidth="5"/><circle cx="101" cy="60" r="20" fill="none" stroke="currentColor" strokeWidth="5"/><path d="M28 60 49 25 69 60H28Zm41 0 17-35h14M49 25h24M69 60h32M86 25l-7-13" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></symbol>
      <symbol id="select-desk" viewBox="0 0 120 90"><rect x="5" y="20" width="108" height="17" rx="3" fill="currentColor" opacity=".82"/><rect x="16" y="37" width="8" height="50" rx="2" fill="currentColor" opacity=".62"/><rect x="94" y="37" width="8" height="50" rx="2" fill="currentColor" opacity=".62"/><rect x="39" y="1" width="44" height="21" rx="3" fill="currentColor" opacity=".5"/><rect x="50" y="48" width="31" height="25" rx="5" fill="currentColor" opacity=".42"/></symbol>
      <symbol id="select-boxstack" viewBox="0 0 100 120"><rect x="8" y="55" width="84" height="62" rx="2" fill="currentColor" opacity=".62"/><path d="M8 65h84M50 55v62" stroke="currentColor" strokeWidth="5" opacity=".9"/><rect x="22" y="7" width="58" height="48" rx="2" fill="currentColor" opacity=".78"/></symbol>
      <symbol id="select-sofa" viewBox="0 0 150 90"><rect x="3" y="25" width="144" height="48" rx="9" fill="currentColor" opacity=".54"/><rect x="12" y="44" width="126" height="30" rx="6" fill="currentColor" opacity=".78"/><rect x="2" y="33" width="18" height="42" rx="6" fill="currentColor"/><rect x="130" y="33" width="18" height="42" rx="6" fill="currentColor"/><path d="M25 75v10M126 75v10" stroke="currentColor" strokeWidth="5"/></symbol>
      <symbol id="select-fridge" viewBox="0 0 72 126"><rect x="4" y="2" width="64" height="120" rx="6" fill="currentColor" opacity=".7"/><path d="M4 48h64" stroke="currentColor" strokeWidth="4"/><path d="M57 20v18M57 63v20" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/></symbol>
      <symbol id="select-dresser" viewBox="0 0 100 86"><rect x="3" y="3" width="94" height="75" rx="4" fill="currentColor" opacity=".7"/><path d="M10 25h80M10 48h80" stroke="currentColor" strokeWidth="4"/><circle cx="50" cy="14" r="3" fill="#fff" opacity=".8"/><circle cx="50" cy="37" r="3" fill="#fff" opacity=".8"/><circle cx="50" cy="61" r="3" fill="#fff" opacity=".8"/></symbol>
      <symbol id="select-bin" viewBox="0 0 92 64"><path d="M10 11h72l-7 49H17Z" fill="currentColor" opacity=".68"/><rect x="4" y="4" width="84" height="12" rx="3" fill="currentColor" opacity=".92"/></symbol>
      <symbol id="select-toolbox" viewBox="0 0 120 80"><rect x="7" y="25" width="106" height="49" rx="5" fill="currentColor" opacity=".8"/><path d="M39 25v-8c0-7 5-11 11-11h20c6 0 11 4 11 11v8" fill="none" stroke="currentColor" strokeWidth="7"/><rect x="49" y="45" width="22" height="7" rx="3" fill="#fff" opacity=".75"/></symbol>
      <symbol id="select-mower" viewBox="0 0 132 92"><rect x="12" y="44" width="82" height="31" rx="9" fill="currentColor" opacity=".78"/><path d="M89 46 117 8" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/><circle cx="29" cy="77" r="12" fill="currentColor"/><circle cx="81" cy="77" r="12" fill="currentColor"/></symbol>
    </svg>
  );
}

function closestAvailable(units, currentIndex) {
  const candidates = units
    .map((unit, index) => ({ unit, index, distance: Math.abs(index - currentIndex) }))
    .filter(({ unit }) => typeof unit.availability === "number" && unit.availability > 0)
    .sort((a, b) => a.distance - b.distance || a.index - b.index);
  return candidates[0]?.unit || null;
}

export default function UnitSelectionStack({ zone = "climate" }) {
  const isClimate = zone === "climate";
  const units = isClimate ? climateUnits : nonClimateUnits;
  const [openId, setOpenId] = useState(null);
  const sectionId = isClimate ? "unit-doors" : "drive-up-sizes";

  return (
    <section id={sectionId} className={styles.section} aria-labelledby={`${sectionId}-title`}>
      <ItemSymbols />
      <div className={styles.heading}>
        <p className={styles.step}>Step 2 • Choose your size</p>
        <h2 id={`${sectionId}-title`}>{isClimate ? "Climate-Controlled Sizes" : "Non-Climate Drive-Up Sizes"}</h2>
        <p>Size, price, and the rental action stay visible. Open a door only when you want to see an example of what that amount of space can hold.</p>
      </div>

      <div className={styles.stack}>
        {units.map((unit, index) => {
          const open = openId === unit.id;
          const soldOut = unit.availability === 0;
          const availabilityKnown = typeof unit.availability === "number";
          const alternative = soldOut ? closestAvailable(units, index) : null;
          const items = itemSets[unit.type]?.[unit.slug] || itemSets[isClimate ? "climate" : "driveup"][unit.slug] || [];
          const moveInHref = unit.checkoutHref || INVENTORY_SOURCE_URL;

          return (
            <article id={`${isClimate ? "climate-unit" : "drive-up-unit"}-${unit.slug}`} className={`${styles.card} ${open ? styles.open : ""} ${soldOut ? styles.soldOut : ""}`} key={unit.id}>
              <button
                className={styles.visualButton}
                type="button"
                aria-expanded={open}
                aria-label={`${open ? "Close" : "See what fits in"} a ${unit.size} ${isClimate ? "climate-controlled" : "non-climate drive-up"} storage unit`}
                onClick={() => setOpenId(open ? null : unit.id)}
              >
                <div className={styles.visualStage}>
                  <div className={styles.unitShell}>
                    <div className={styles.shellTop}><span>{unit.size}</span></div>
                    <div className={styles.unitOpening}>
                      <div className={styles.backWall} />
                      <div className={styles.floor} />
                      <div className={styles.doorPanel}>
                        <span className={styles.doorType}>{isClimate ? "❄ Climate-Controlled" : "Drive-Up • Non-Climate"}</span>
                        <strong>{unit.size}</strong>
                        <small>{unit.sqft} sq ft</small>
                        {soldOut ? <b className={styles.soldOutBadge}>Sold Out</b> : null}
                        <i />
                      </div>
                    </div>
                  </div>

                  <div className={styles.itemField} aria-hidden="true">
                    {items.map((item, itemIndex) => {
                      const position = itemPositions[itemIndex] || itemPositions[itemPositions.length - 1];
                      return (
                        <svg
                          className={`${styles.item} ${styles[`item${itemIndex + 1}`] || ""}`}
                          viewBox="0 0 150 120"
                          key={`${unit.id}-${item}-${itemIndex}`}
                          style={{
                            left: position.left,
                            bottom: position.bottom,
                            "--out-x": position.outX,
                            "--out-y": position.outY,
                            "--item-scale": position.scale,
                          }}
                        >
                          <use href={`#select-${item}`} x="10" y="12" width="125" height="96" />
                        </svg>
                      );
                    })}
                  </div>

                  <span className={styles.visualHint}>{open ? "Close visual" : "See what fits"} <b>{open ? "↑" : "→"}</b></span>
                </div>
              </button>

              <div className={styles.details}>
                <div className={styles.identityRow}>
                  <div>
                    <span className={styles.typeBadge}>{isClimate ? "❄ Climate-Controlled" : "Drive-Up • Non-Climate"}</span>
                    <h3>{unit.size}</h3>
                    <p className={styles.sqft}>{unit.sqft} sq ft • {unit.label}</p>
                  </div>
                  <div className={styles.priceBlock}>
                    <small>Starting at</small>
                    <strong>{money(unit.fromPrice)}<span>/mo</span></strong>
                  </div>
                </div>

                <div className={styles.bestFor}>
                  <span>Best for</span>
                  <div>{unit.bestFor.map((item) => <b key={item}>{item}</b>)}</div>
                </div>

                <p className={styles.helper}>{unit.helper}</p>

                <div className={styles.statusRow}>
                  {soldOut ? (
                    <span className={styles.statusSold}>● Sold out</span>
                  ) : availabilityKnown ? (
                    <span className={styles.statusAvailable}>● {unit.availability === 1 ? "1 available" : `${unit.availability} available`}</span>
                  ) : (
                    <span className={styles.statusNeutral}>Availability updates during move-in</span>
                  )}
                </div>

                {soldOut ? (
                  <div className={styles.soldOutAction}>
                    {alternative ? (
                      <>
                        <div><small>Closest available fit</small><strong>{alternative.size} • From {money(alternative.fromPrice)}/mo</strong></div>
                        <a href={`#${isClimate ? "climate-unit" : "drive-up-unit"}-${alternative.slug}`}>See {alternative.size} →</a>
                      </>
                    ) : (
                      <>
                        <div><small>This size is currently full</small><strong>Call us and we&apos;ll help find the closest fit.</strong></div>
                        <a href={PHONE_LINK}>Call Us →</a>
                      </>
                    )}
                  </div>
                ) : (
                  <div className={styles.actions}>
                    <a className={styles.moveIn} href={moveInHref}>Move In →</a>
                    <a className={styles.call} href={PHONE_LINK}>Call Us</a>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <div className={styles.helpBar}>
        <div><strong>Not sure which size is right?</strong><span>Call us and we&apos;ll help you choose without paying for space you do not need.</span></div>
        <a href={PHONE_LINK}>Call (386) 292-5494 →</a>
      </div>
    </section>
  );
}
