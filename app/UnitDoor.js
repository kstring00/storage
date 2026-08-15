"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./UnitDoor.module.css";

// Silhouettes are drawn once here and placed with a transform so no <use>/<symbol>
// sprite has to exist on the page. "wood" = boxes and wood furniture, "soft" =
// upholstery and appliances; the two tones are set in the CSS module.
const shapes = {
  bed: {
    size: [140, 70],
    tone: "wood",
    body: (
      <>
        <rect x="0" y="6" width="13" height="54" rx="3" fill="currentColor" opacity=".88" />
        <rect x="11" y="30" width="126" height="18" rx="4" fill="currentColor" opacity=".62" />
        <rect x="11" y="25" width="126" height="7" rx="3" fill="currentColor" opacity=".95" />
        <rect x="18" y="16" width="32" height="12" rx="6" fill="currentColor" opacity=".82" />
        <rect x="11" y="48" width="126" height="8" rx="2" fill="currentColor" opacity=".5" />
      </>
    ),
  },
  sofa: {
    size: [140, 80],
    tone: "soft",
    body: (
      <>
        <rect x="0" y="22" width="140" height="42" rx="7" fill="currentColor" opacity=".6" />
        <rect x="8" y="40" width="124" height="26" rx="5" fill="currentColor" opacity=".82" />
        <rect x="0" y="28" width="15" height="38" rx="5" fill="currentColor" opacity=".9" />
        <rect x="125" y="28" width="15" height="38" rx="5" fill="currentColor" opacity=".9" />
      </>
    ),
  },
  boxstack: {
    size: [100, 130],
    tone: "wood",
    body: (
      <>
        <rect x="8" y="58" width="84" height="72" fill="currentColor" opacity=".62" />
        <rect x="8" y="58" width="84" height="8" fill="currentColor" opacity=".9" />
        <rect x="46" y="58" width="6" height="72" fill="currentColor" opacity=".95" />
        <rect x="22" y="8" width="58" height="50" fill="currentColor" opacity=".72" />
        <rect x="22" y="8" width="58" height="7" fill="currentColor" opacity=".95" />
      </>
    ),
  },
  dresser: {
    size: [90, 80],
    tone: "wood",
    body: (
      <>
        <rect x="0" y="0" width="90" height="71" rx="4" fill="currentColor" opacity=".66" />
        <rect x="7" y="13" width="76" height="3" fill="currentColor" opacity=".95" />
        <rect x="7" y="34" width="76" height="3" fill="currentColor" opacity=".95" />
        <rect x="7" y="55" width="76" height="3" fill="currentColor" opacity=".95" />
      </>
    ),
  },
  fridge: {
    size: [60, 120],
    tone: "soft",
    body: (
      <>
        <rect x="0" y="0" width="60" height="120" rx="5" fill="currentColor" opacity=".66" />
        <rect x="0" y="43" width="60" height="3" fill="currentColor" opacity=".98" />
        <rect x="48" y="12" width="4" height="24" rx="2" fill="currentColor" opacity=".98" />
      </>
    ),
  },
  bin: {
    size: [70, 50],
    tone: "soft",
    body: (
      <>
        <path d="M7 0 H63 L57 50 H13 Z" fill="currentColor" opacity=".62" />
        <rect x="2" y="0" width="66" height="7" rx="2" fill="currentColor" opacity=".95" />
      </>
    ),
  },
};

// Widest door in the bay (296px) is allowed 63vw, so every unit shrinks by the
// same factor on narrow screens and the roofline keeps its steps.
const BAY_VW_PER_PX = 63 / 296;

const round = (value) => Math.round(value * 100) / 100;

function DoorItem({ kind, x, y, w, h, delay }) {
  const shape = shapes[kind];
  if (!shape) return null;
  const [boxW, boxH] = shape.size;
  const scale = Math.min(w / boxW, h / boxH);
  const left = x + (w - boxW * scale) / 2;
  const top = y + (h - boxH * scale) / 2;

  return (
    <g transform={`translate(${round(left)} ${round(top)}) scale(${round(scale)})`}>
      <g className={styles.item} data-tone={shape.tone} style={{ transitionDelay: `${delay}s` }}>
        {shape.body}
      </g>
    </g>
  );
}

export default function UnitDoor({
  unit,
  variant = "bay",
  ratio,
  open: openProp,
  onOpenChange,
  autoOpen = false,
  showFit = variant !== "card",
  showLink = variant === "bay",
  showFlag = variant === "bay",
  linkHref = "#sizes",
}) {
  const rootRef = useRef(null);
  const [selfOpen, setSelfOpen] = useState(false);
  const controlled = typeof openProp === "boolean";
  const open = controlled ? openProp : selfOpen;

  const setOpen = useCallback(
    (next) => {
      if (controlled) onOpenChange?.(next);
      else setSelfOpen(next);
    },
    [controlled, onOpenChange]
  );

  const setOpenRef = useRef(setOpen);
  useEffect(() => {
    setOpenRef.current = setOpen;
  }, [setOpen]);

  // Touch viewports get no hover, so the featured door opens itself once it is
  // scrolled into view. Pointer devices keep the hover behaviour instead.
  useEffect(() => {
    if (!autoOpen) return undefined;
    const node = rootRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return undefined;
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setOpenRef.current(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [autoOpen]);

  const style = { "--door-ratio": ratio || `${unit.w} / ${unit.h}` };
  if (variant === "bay") {
    style["--door-w"] = `min(${round(unit.w * BAY_VW_PER_PX)}vw, ${unit.w}px)`;
  }

  const className = [
    styles.unit,
    styles[variant],
    open ? styles.open : "",
    showFlag && unit.featured ? styles.featured : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={rootRef}
      className={className}
      style={style}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse" && open) setOpen(false);
      }}
    >
      {showFlag && unit.featured ? <div className={styles.featuredFlag}>★ Featured climate size</div> : null}
      <div className={styles.fascia}>
        <span>{unit.number}</span>
      </div>
      <div className={styles.opening}>
        <div className={styles.interior} />
        <svg className={styles.stuff} viewBox="0 0 280 100" preserveAspectRatio="none" aria-hidden="true">
          {unit.items.map(([kind, x, y, w, h], index) => (
            <DoorItem key={`${kind}-${index}`} kind={kind} x={x} y={y} w={w} h={h} delay={round(0.22 + index * 0.07)} />
          ))}
        </svg>
        <div className={styles.info}>
          <p className={styles.infoSize}>{unit.size}</p>
          <p className={styles.infoSqft}>{unit.sqft}</p>
          {showFit ? (
            <ul className={styles.fitList}>
              {unit.fit.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          ) : null}
          {unit.climate ? (
            <span className={styles.climateTag}>
              ❄ {unit.featured ? "Recommended climate size" : "Climate-control available"}
            </span>
          ) : null}
          {showLink ? (
            <a className={styles.compareLink} href={linkHref}>
              See climate-controlled options
            </a>
          ) : null}
        </div>
        <div className={styles.door} aria-hidden="true">
          <p>{unit.size}</p>
          <span>{unit.sqft}</span>
          <i />
        </div>
        <span className={styles.sill} />
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={styles.srOnly}>
            {open ? `Close the ${unit.size} unit door` : `Open the ${unit.size} unit door`}
          </span>
        </button>
      </div>
    </div>
  );
}
