"use client";

import { useEffect, useRef, useState } from "react";
import UnitDoor from "./UnitDoor";
import { doorUnits } from "./doorUnits";
import styles from "./UnitDoorCarousel.module.css";

export default function UnitDoorCarousel() {
  const railRef = useRef(null);
  const [openId, setOpenId] = useState(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return undefined;

    const sync = () => {
      setCanPrev(rail.scrollLeft > 3);
      setCanNext(rail.scrollLeft < rail.scrollWidth - rail.clientWidth - 3);
    };

    sync();
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
    const doors = Array.from(rail.children);
    const edge = rail.scrollLeft;
    let target;

    if (direction > 0) {
      target = doors.find((door) => door.offsetLeft > edge + 12) || doors[doors.length - 1];
    } else {
      const behind = doors.filter((door) => door.offsetLeft < edge - 12);
      target = behind[behind.length - 1] || doors[0];
    }

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // scrollIntoView honours scroll-padding-inline, so the snapped unit lands
    // inside the padding instead of under the edge fade.
    target.scrollIntoView({ behavior: still ? "auto" : "smooth", inline: "start", block: "nearest" });
  };

  const scrollable = canPrev || canNext;

  return (
    <section id="unit-doors" className={styles.section} aria-labelledby="door-carousel-title">
      <div className={styles.headingShell}>
        <div>
          <p className={styles.eyebrow}>See what fits before you choose</p>
          <h2 id="door-carousel-title">Open a Door. Picture Your Belongings Inside.</h2>
          <p className={styles.subhead}>
            Storage size makes more sense when you can see it. Hover or tap a door to roll it up and preview the kinds of belongings each space can hold.
          </p>
        </div>
        <div className={styles.arrows} hidden={!scrollable}>
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
        <div className={styles.rail} ref={railRef}>
          {doorUnits.map((unit) => (
            <UnitDoor
              key={unit.id}
              unit={unit}
              variant="bay"
              open={openId === unit.id}
              onOpenChange={(next) => setOpenId(next ? unit.id : null)}
              autoOpen={Boolean(unit.featured)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
