"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./UnitDoorCarousel.module.css";

const units = [
  {
    id: "5x5",
    number: "A-12",
    size: "5 × 5",
    sqft: "25 sq ft",
    width: 148,
    height: 230,
    band: 24,
    fit: ["Boxes, totes, seasonal décor", "A lamp and small household overflow"],
    items: [
      ["boxstack", 14, 36, 44, 62],
      ["box", 66, 64, 34, 34],
      ["bin", 196, 70, 40, 28],
      ["lamp", 246, 38, 22, 60],
    ],
  },
  {
    id: "5x10",
    number: "A-14",
    size: "5 × 10",
    sqft: "50 sq ft",
    width: 184,
    height: 258,
    band: 28,
    fit: ["A mattress set and a bike", "Boxes, totes, and small furniture"],
    items: [
      ["boxstack", 10, 34, 48, 64],
      ["mattress", 64, 48, 40, 50],
      ["box", 170, 68, 30, 30],
      ["bike", 206, 56, 62, 42],
    ],
  },
  {
    id: "10x10",
    number: "B-03",
    size: "10 × 10",
    sqft: "100 sq ft",
    width: 226,
    height: 288,
    band: 32,
    climate: true,
    fit: ["A bed set, sofa, and boxes", "Good for smaller household storage"],
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
    width: 262,
    height: 314,
    band: 34,
    climate: true,
    featured: true,
    fit: ["Furniture from multiple rooms", "Appliances, mattresses, boxes, and décor"],
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
    width: 296,
    height: 340,
    band: 36,
    climate: true,
    fit: ["Larger household furniture", "Appliances and a substantial move"],
    items: [
      ["bed", 2, 63, 70, 35],
      ["sofa", 76, 66, 56, 32],
      ["dresser", 138, 59, 44, 39],
      ["boxstack", 188, 53, 34, 45],
      ["fridge", 228, 46, 26, 52],
      ["bin", 258, 76, 20, 22],
    ],
  },
  {
    id: "10x30",
    number: "C-05",
    size: "10 × 30",
    sqft: "300 sq ft",
    width: 344,
    height: 378,
    band: 38,
    fit: ["A large household move", "Furniture, appliances, and oversized storage"],
    items: [
      ["bed", 2, 64, 68, 34],
      ["mattress", 74, 54, 34, 44],
      ["sofa", 112, 66, 56, 32],
      ["dresser", 174, 59, 44, 39],
      ["boxstack", 222, 55, 32, 43],
      ["fridge", 258, 52, 22, 46],
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
        <rect x="11" y="48" width="126" height="8" rx="2" fill="currentColor" opacity=".42" />
      </symbol>
      <symbol id="door-mattress" viewBox="0 0 90 110">
        <rect x="12" y="4" width="62" height="102" rx="7" fill="currentColor" opacity=".5" transform="rotate(-7 43 55)" />
        <rect x="12" y="4" width="62" height="8" rx="4" fill="currentColor" opacity=".85" transform="rotate(-7 43 55)" />
      </symbol>
      <symbol id="door-box" viewBox="0 0 100 100">
        <rect x="0" y="16" width="100" height="84" fill="currentColor" opacity=".5" />
        <rect x="0" y="16" width="100" height="9" fill="currentColor" opacity=".85" />
        <rect x="46" y="16" width="7" height="84" fill="currentColor" opacity=".9" />
      </symbol>
      <symbol id="door-boxstack" viewBox="0 0 100 130">
        <rect x="8" y="58" width="84" height="72" fill="currentColor" opacity=".5" />
        <rect x="8" y="58" width="84" height="8" fill="currentColor" opacity=".8" />
        <rect x="46" y="58" width="6" height="72" fill="currentColor" opacity=".85" />
        <rect x="22" y="8" width="58" height="50" fill="currentColor" opacity=".6" />
        <rect x="22" y="8" width="58" height="7" fill="currentColor" opacity=".85" />
      </symbol>
      <symbol id="door-sofa" viewBox="0 0 140 80">
        <rect x="0" y="22" width="140" height="42" rx="7" fill="currentColor" opacity=".5" />
        <rect x="8" y="40" width="124" height="26" rx="5" fill="currentColor" opacity=".72" />
        <rect x="0" y="28" width="15" height="38" rx="5" fill="currentColor" opacity=".8" />
        <rect x="125" y="28" width="15" height="38" rx="5" fill="currentColor" opacity=".8" />
      </symbol>
      <symbol id="door-fridge" viewBox="0 0 60 120">
        <rect x="0" y="0" width="60" height="120" rx="5" fill="currentColor" opacity=".55" />
        <rect x="0" y="43" width="60" height="3" fill="currentColor" opacity=".95" />
        <rect x="48" y="12" width="4" height="24" rx="2" fill="currentColor" opacity=".95" />
      </symbol>
      <symbol id="door-dresser" viewBox="0 0 90 80">
        <rect x="0" y="0" width="90" height="71" rx="4" fill="currentColor" opacity=".55" />
        <rect x="7" y="13" width="76" height="3" fill="currentColor" opacity=".9" />
        <rect x="7" y="34" width="76" height="3" fill="currentColor" opacity=".9" />
        <rect x="7" y="55" width="76" height="3" fill="currentColor" opacity=".9" />
      </symbol>
      <symbol id="door-bike" viewBox="0 0 120 80">
        <circle cx="25" cy="55" r="21" fill="none" stroke="currentColor" strokeWidth="4" opacity=".65" />
        <circle cx="95" cy="55" r="21" fill="none" stroke="currentColor" strokeWidth="4" opacity=".65" />
        <path d="M25 55 L56 55 L72 22 L95 55 M56 55 L66 24 L86 24 M72 22 L60 22" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity=".8" />
      </symbol>
      <symbol id="door-lamp" viewBox="0 0 40 110">
        <path d="M8 0 H32 L40 30 H0 Z" fill="currentColor" opacity=".65" />
        <rect x="17" y="30" width="5" height="72" fill="currentColor" opacity=".8" />
        <rect x="6" y="100" width="28" height="8" rx="3" fill="currentColor" opacity=".65" />
      </symbol>
      <symbol id="door-bin" viewBox="0 0 70 50">
        <path d="M7 0 H63 L57 50 H13 Z" fill="currentColor" opacity=".55" />
        <rect x="2" y="0" width="66" height="7" rx="2" fill="currentColor" opacity=".9" />
      </symbol>
    </svg>
  );
}

export default function UnitDoorCarousel() {
  const railRef = useRef(null);
  const [openId, setOpenId] = useState(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const sync = () => {
    const rail = railRef.current;
    if (!rail) return;
    setCanPrev(rail.scrollLeft > 3);
    setCanNext(rail.scrollLeft < rail.scrollWidth - rail.clientWidth - 3);
  };

  useEffect(() => {
    sync();
    const rail = railRef.current;
    if (!rail) return;
    rail.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      rail.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  const step = (direction) => {
    const rail = railRef.current;
    if (!rail) return;
    const cards = Array.from(rail.querySelectorAll('[data-door-unit="true"]'));
    const middle = rail.scrollLeft + rail.clientWidth / 2;
    let target = direction > 0 ? cards[cards.length - 1] : cards[0];

    if (direction > 0) {
      target = cards.find((card) => card.offsetLeft + card.offsetWidth / 2 > middle + 20) || target;
    } else {
      cards.forEach((card) => {
        if (card.offsetLeft + card.offsetWidth / 2 < middle - 20) target = card;
      });
    }

    rail.scrollTo({
      left: target.offsetLeft + target.offsetWidth / 2 - rail.clientWidth / 2,
      behavior: "smooth",
    });
  };

  return (
    <section id="unit-doors" className={styles.section} aria-labelledby="door-carousel-title">
      <ItemSymbols />
      <div className={styles.headingShell}>
        <div>
          <p className={styles.eyebrow}>See what fits before you choose</p>
          <h2 id="door-carousel-title">Open a Door. Picture Your Belongings Inside.</h2>
          <p className={styles.subhead}>
            Storage size makes more sense when you can see it. Hover or tap a door to roll it up and preview the kinds of belongings each space can hold.
          </p>
        </div>
        <div className={styles.arrows}>
          <button type="button" onClick={() => step(-1)} disabled={!canPrev} aria-label="Show smaller units">←</button>
          <button type="button" onClick={() => step(1)} disabled={!canNext} aria-label="Show larger units">→</button>
        </div>
      </div>

      <div className={styles.climatePrompt}>
        <span className={styles.snowflake}>❄</span>
        <div>
          <strong>Already know you want a more stable indoor environment?</strong>
          <span>Climate-controlled sizes are marked below. The 10 × 15 is featured for larger household storage.</span>
        </div>
        <a href="#sizes">Jump to climate-controlled options →</a>
      </div>

      <div className={styles.drive}>
        <ul className={styles.rail} ref={railRef}>
          {units.map((unit) => {
            const open = openId === unit.id;
            return (
              <li
                key={unit.id}
                className={`${styles.unit} ${open ? styles.open : ""} ${unit.featured ? styles.featured : ""}`}
                data-door-unit="true"
                tabIndex={0}
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
                style={{ width: unit.width + 22 }}
              >
                {unit.featured ? <div className={styles.featuredFlag}>★ Featured climate size</div> : null}
                <div className={styles.fascia}><span>{unit.number}</span></div>
                <div className={styles.opening} style={{ width: unit.width, height: unit.height }}>
                  <div className={styles.interior} />
                  <svg className={styles.stuff} viewBox="0 0 280 100" preserveAspectRatio="none" aria-hidden="true">
                    {unit.items.map(([symbol, x, y, width, height], index) => (
                      <use key={`${symbol}-${index}`} className={styles.item} href={`#door-${symbol}`} x={x} y={y} width={width} height={height} />
                    ))}
                  </svg>
                  <div className={styles.scrim} />
                  <div className={styles.info} style={{ bottom: unit.band + "%" }}>
                    <p className={styles.infoSize}>{unit.size}</p>
                    <p className={styles.infoSqft}>{unit.sqft}</p>
                    <ul className={styles.fitList}>
                      {unit.fit.map((line) => <li key={line}>{line}</li>)}
                    </ul>
                    {unit.climate ? <span className={styles.climateTag}>{unit.featured ? "Recommended climate size" : "Climate-control available"}</span> : null}
                    <a className={styles.compareLink} href="#sizes">See climate-controlled options</a>
                  </div>
                  <div className={styles.door}>
                    {unit.climate ? <span className={styles.doorClimate}>❄ Climate</span> : null}
                    <p>{unit.size}</p>
                    <span>{unit.sqft}</span>
                    <i />
                  </div>
                  <span className={styles.sill} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.footerNote}>
        <strong>Use this to understand size — not to price-shop the environment.</strong>
        <span>Once you know how much room you need, the next section helps you choose among the climate-controlled sizes.</span>
      </div>
    </section>
  );
}
