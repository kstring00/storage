"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./UnitSelectionStack.module.css";
import { SceneSprite, SCENE_ART, artId } from "./UnitSceneArt";
import {
  climateUnits,
  nonClimateUnits,
  money,
  closestConfirmedAvailable,
  resolveAvailability,
  resolveCheckoutHref,
  AVAILABILITY_STATUS,
} from "./storageData";

const PHONE_LINK = "tel:+13862925494";

// ---------------------------------------------------------------------------
// Scene geometry
//
// The demonstration is laid out in a fixed reference space (REF_W wide) and then
// emitted as percentages, so one composition scales cleanly from a 620px desktop
// stage down to a phone without a resize listener or a second layout pass.
// ---------------------------------------------------------------------------
const REF_W = 560;

const FRONT_ORIGIN = 236; // first staged item overlaps the door mouth slightly
const FRONT_SPACE = 312;
const FRONT_GAP = 13;

const BACK_ORIGIN = 276;
const BACK_SPACE = 272;
const BACK_GAP = 50; // wide spacing so the back row spreads behind the front row
const BACK_SCALE = 0.66; // the tucked-behind row reads as further into the scene

const DEPTH_FALLOFF = 0.955; // each successive item sits marginally further back

// Fit is deliberately clamped to a narrow band. Letting a small scene render at
// full size while a large one shrank to 0.6 would make a 5x5 box look bigger
// than a 10x20 dresser and invert the whole point of the comparison.
const MIN_FIT = 0.68;
const MAX_FIT = 0.95;

// Phones drop the tail of each row instead of shrinking everything into confetti,
// and the unit narrows (see --shift in the stylesheet) to hand the belongings more
// room, so the compact fit is measured against a wider field.
const COMPACT_FRONT = 4;
const COMPACT_BACK = 1;
const COMPACT_SPACE = 344;

// Where items appear to emerge from, in reference units.
const MOUTH_X = 230;
const MIN_TRAVEL = 34;
const MAX_TRAVEL = 224;

// Motion budget (ms). Opening lands at ~1.1s; closing unwinds in ~0.7s.
const OPEN_ITEM_BASE = 320;
const OPEN_ITEM_STAGGER = 82;
const CLOSE_ITEM_STAGGER = 40;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function flowRow(keys, gap) {
  let cursor = 0;
  const nodes = [];

  keys.forEach((key, index) => {
    const art = SCENE_ART[key];
    if (!art) return;
    const depth = DEPTH_FALLOFF ** index;
    nodes.push({
      key,
      art,
      index: nodes.length,
      x: cursor,
      w: art.width * depth,
      h: art.height * depth,
    });
    cursor += art.width * depth + gap * depth;
  });

  return nodes;
}

function fitFor(nodes, count, available, scale) {
  const slice = nodes.slice(0, count);
  if (!slice.length) return 1;
  const last = slice[slice.length - 1];
  const span = (last.x + last.w) * scale;
  return clamp(available / span, MIN_FIT, MAX_FIT);
}

/**
 * Turns a scene definition into positioned, pre-timed item descriptors.
 * Everything the CSS needs travels as custom properties so the animation itself
 * stays declarative — no JS runs during the sequence.
 */
function buildScene(scene) {
  const frontKeys = scene?.front || [];
  const backKeys = scene?.back || [];

  const front = flowRow(frontKeys, FRONT_GAP);
  const back = flowRow(backKeys, BACK_GAP);

  const frontFit = fitFor(front, front.length, FRONT_SPACE, 1);
  const frontFitCompact = fitFor(front, COMPACT_FRONT, COMPACT_SPACE, 1);
  const backFit = fitFor(back, back.length, BACK_SPACE, BACK_SCALE) * BACK_SCALE;
  const backFitCompact = fitFor(back, COMPACT_BACK, BACK_SPACE, BACK_SCALE) * BACK_SCALE;

  const total = front.length + back.length;

  const describe = (node, { origin, fit, fitCompact, row, delayBase, delayStep, from }) => {
    const settledLeft = origin + node.x * fit;
    const width = node.w * fit;
    const travel = clamp((settledLeft - MOUTH_X) * 0.72 + MIN_TRAVEL, MIN_TRAVEL, MAX_TRAVEL);
    const [, , vbWidth, vbHeight] = node.art.viewBox.split(" ").map(Number);
    const orderIn = row === "back" ? node.index : back.length + node.index;

    return {
      id: `${row}-${node.key}-${node.index}`,
      key: node.key,
      row,
      index: node.index,
      style: {
        "--x0": origin,
        "--x": node.x,
        "--w": node.w,
        "--fit-full": fit,
        "--fit-compact": fitCompact,
        "--ar": `${vbWidth} / ${vbHeight}`,
        "--fx": -(travel / Math.max(width, 1)),
        "--fs": from,
        "--in-delay": `${delayBase + node.index * delayStep}ms`,
        "--out-delay": `${(total - 1 - orderIn) * CLOSE_ITEM_STAGGER}ms`,
        zIndex: row === "back" ? 8 + (back.length - node.index) : 20 + (front.length - node.index),
      },
      compactHidden: row === "back" ? node.index >= COMPACT_BACK : node.index >= COMPACT_FRONT,
    };
  };

  return [
    ...back.map((node) =>
      describe(node, {
        origin: BACK_ORIGIN,
        fit: backFit,
        fitCompact: backFitCompact,
        row: "back",
        delayBase: OPEN_ITEM_BASE - 40,
        delayStep: 70,
        from: 0.9,
      }),
    ),
    ...front.map((node) =>
      describe(node, {
        origin: FRONT_ORIGIN,
        fit: frontFit,
        fitCompact: frontFitCompact,
        row: "front",
        delayBase: OPEN_ITEM_BASE,
        delayStep: OPEN_ITEM_STAGGER,
        from: 0.84,
      }),
    ),
  ];
}

function AvailabilityStatus({ availability }) {
  if (availability.status === AVAILABILITY_STATUS.SOLD_OUT) {
    return <span className={styles.statusSold}>Sold out</span>;
  }
  if (availability.status === AVAILABILITY_STATUS.LOW) {
    return (
      <span className={styles.statusLow}>
        {availability.count === 1 ? "Only 1 left" : `Only ${availability.count} left`}
      </span>
    );
  }
  if (availability.status === AVAILABILITY_STATUS.AVAILABLE) {
    return (
      <span className={styles.statusOpen}>
        {availability.count === null ? "Available" : `${availability.count} available`}
      </span>
    );
  }
  return <span className={styles.statusUnknown}>Live availability at checkout</span>;
}

export default function UnitSelectionStack({ zone = "climate" }) {
  const isClimate = zone === "climate";
  const units = isClimate ? climateUnits : nonClimateUnits;
  const sectionId = isClimate ? "unit-doors" : "drive-up-sizes";
  const anchorPrefix = isClimate ? "climate-unit" : "drive-up-unit";
  const typeLabel = isClimate ? "Climate-Controlled" : "Drive-Up • Non-Climate";

  // One demonstration open at a time. Switching simply reverses the previous
  // card's transitions while the new one plays — nothing teleports.
  const [openId, setOpenId] = useState(null);
  const sectionRef = useRef(null);
  const autoPlayedRef = useRef(new Set());

  // Give each unit one quiet automatic demonstration when it crosses the middle
  // band of the viewport. It never loops and never replays when the customer
  // scrolls back up. The next centered unit simply replaces the previous open one.
  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) return undefined;

    const cards = Array.from(section.querySelectorAll("[data-auto-unit-id]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const viewportCenter = window.innerHeight / 2;
        const candidate = entries
          .filter((entry) => {
            const unitId = entry.target.getAttribute("data-auto-unit-id");
            return entry.isIntersecting && unitId && !autoPlayedRef.current.has(unitId);
          })
          .sort((a, b) => {
            const aCenter = a.boundingClientRect.top + a.boundingClientRect.height / 2;
            const bCenter = b.boundingClientRect.top + b.boundingClientRect.height / 2;
            return Math.abs(aCenter - viewportCenter) - Math.abs(bCenter - viewportCenter);
          })[0];

        if (!candidate) return;

        const unitId = candidate.target.getAttribute("data-auto-unit-id");
        autoPlayedRef.current.add(unitId);
        setOpenId(unitId);
      },
      {
        root: null,
        rootMargin: "-42% 0px -42% 0px",
        threshold: 0,
      },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [zone]);

  const toggleUnit = (unitId) => {
    // Manual interaction counts as this unit's demonstration, so scrolling away
    // and back will not surprise the customer by auto-playing it again.
    autoPlayedRef.current.add(unitId);
    setOpenId((current) => (current === unitId ? null : unitId));
  };

  return (
    <section ref={sectionRef} id={sectionId} className={styles.section} aria-labelledby={`${sectionId}-title`}>
      <SceneSprite className={styles.sprite} />

      <div className={styles.heading}>
        <p className={styles.step}>Step 2 • Choose your size</p>
        <h2 id={`${sectionId}-title`}>{isClimate ? "Climate-Controlled Sizes" : "Drive-Up Sizes"}</h2>
      </div>

      <div className={styles.stack}>
        {units.map((unit, index) => {
          const open = openId === unit.id;
          const availability = resolveAvailability(unit);
          // Only offered when the feed has confirmed the neighbour is rentable.
          const alternative = availability.canRent ? null : closestConfirmedAvailable(units, index);
          const items = buildScene(unit.scene);

          return (
            <article
              id={`${anchorPrefix}-${unit.slug}`}
              key={unit.id}
              data-auto-unit-id={unit.id}
              className={[
                styles.card,
                open ? styles.open : "",
                isClimate ? styles.climate : styles.driveup,
                availability.canRent ? "" : styles.soldOut,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {/* Transaction layer. Never moves, never waits on the animation. */}
              <div className={styles.panel}>
                <p className={styles.typeBadge}>{isClimate ? "❄ Climate-Controlled" : "Drive-Up • Non-Climate"}</p>

                <div className={styles.identity}>
                  <h3>{unit.size}</h3>
                  <p className={styles.meta}>
                    <b>{unit.sqft} sq ft</b>
                    <span>{unit.label}</span>
                  </p>
                </div>

                <div className={styles.priceRow}>
                  <p className={styles.price}>
                    <small>Starting at</small>
                    <strong>
                      {money(unit.fromPrice)}
                      <span>/mo</span>
                    </strong>
                  </p>
                  <p className={styles.status}>
                    <AvailabilityStatus availability={availability} />
                    {unit.promotion ? <b className={styles.promo}>{unit.promotion}</b> : null}
                  </p>
                </div>

                <div className={styles.fits}>
                  <span>What fits</span>
                  <div>
                    {unit.bestFor.map((item) => (
                      <b key={item}>{item}</b>
                    ))}
                  </div>
                </div>

                {availability.canRent ? (
                  <div className={styles.actions}>
                    <a className={styles.moveIn} href={resolveCheckoutHref(unit)}>
                      Move In <span aria-hidden="true">→</span>
                    </a>
                    <a className={styles.call} href={PHONE_LINK}>
                      Call Us
                    </a>
                  </div>
                ) : (
                  <div className={styles.unavailable}>
                    <p>
                      <strong>{unit.size} is currently unavailable.</strong>
                    </p>
                    {alternative ? (
                      <>
                        <p className={styles.alternative}>
                          Closest available option: <b>{alternative.size}</b> — from {money(alternative.fromPrice)}/mo
                        </p>
                        <a className={styles.moveIn} href={`#${anchorPrefix}-${alternative.slug}`}>
                          See {alternative.size} <span aria-hidden="true">→</span>
                        </a>
                      </>
                    ) : (
                      <>
                        <p className={styles.alternative}>Call and we will help you find the closest fit.</p>
                        <a className={styles.moveIn} href={PHONE_LINK}>
                          Call Us <span aria-hidden="true">→</span>
                        </a>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Demonstration layer. Purely optional; contains no information
                  that is not already spelled out in the panel above. */}
              <div className={styles.visual}>
                <button
                  type="button"
                  className={styles.stage}
                  aria-expanded={open}
                  aria-label={
                    open
                      ? `Hide the ${unit.size} ${typeLabel} example`
                      : `See what fits in a ${unit.size} ${typeLabel} unit`
                  }
                  onClick={() => toggleUnit(unit.id)}
                >
                  <span className={styles.scene} aria-hidden="true">
                    <span className={styles.unit}>
                      <span className={styles.fascia}>
                        <i>{isClimate ? "Indoor" : "Drive-Up"}</i>
                      </span>

                      <span className={styles.mouth}>
                        <span className={styles.room}>
                          <i className={styles.roomBack} />
                          <i className={styles.roomCeiling} />
                          <i className={styles.roomLeft} />
                          <i className={styles.roomRight} />
                          <i className={styles.roomFloor} />
                          <i className={styles.roomGlow} />
                        </span>

                        <span className={styles.door}>
                          <b className={styles.doorSize}>{unit.size}</b>
                          <i className={styles.doorSqft}>{unit.sqft} sq ft</i>
                          <i className={styles.doorHandle} />
                        </span>
                        <span className={styles.doorRoll} />
                      </span>

                      <span className={styles.sill} />
                    </span>

                    <span className={styles.field}>
                      {items.map((item) => (
                        <svg
                          key={item.id}
                          className={`${styles.item} ${item.row === "back" ? styles.itemBack : styles.itemFront}`}
                          style={item.style}
                          data-compact-hidden={item.compactHidden ? "true" : undefined}
                          viewBox={SCENE_ART[item.key].viewBox}
                          role="presentation"
                        >
                          <use href={`#${artId(item.key)}`} width="100%" height="100%" />
                        </svg>
                      ))}
                    </span>
                  </span>

                  <span className={styles.hint}>
                    <span>{open ? `Fits: ${unit.doorNote}` : "See what fits"}</span>
                    <b aria-hidden="true">{open ? "×" : "→"}</b>
                  </span>
                </button>
              </div>
            </article>
          );
        })}
      </div>

      <div className={styles.helpBar}>
        <div>
          <strong>Not sure which size is right?</strong>
          <span>Call us and we&apos;ll help you choose without paying for space you do not need.</span>
        </div>
        <a href={PHONE_LINK}>Call (386) 292-5494 →</a>
      </div>
    </section>
  );
}