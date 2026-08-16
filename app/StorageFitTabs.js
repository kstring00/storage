"use client";

import { useState } from "react";
import styles from "./StorageFitTabs.module.css";

function ItemVisual({ type }) {
  return (
    <div className={`${styles.visual} ${styles[type] || ""}`} aria-hidden="true">
      <span /><span /><span /><span />
    </div>
  );
}

export default function StorageFitTabs({ config }) {
  const [active, setActive] = useState(0);
  const tab = config.tabs[active];

  return (
    <section id="storage-fit" className={styles.section}>
      <div className={styles.shell}>
        <div className={styles.heading}>
          <h2>{config.title}</h2>
          <p>{config.intro}</p>
        </div>

        <div className={styles.tabs} role="tablist" aria-label={config.tabLabel || "Storage guidance"}>
          {config.tabs.map((item, index) => (
            <button
              key={item.label}
              type="button"
              role="tab"
              aria-selected={active === index}
              className={active === index ? styles.activeTab : ""}
              onClick={() => setActive(index)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className={styles.tabIntro}>
          <strong>{tab.title}</strong>
          <span>{tab.intro}</span>
        </div>

        <div className={styles.grid}>
          {tab.items.map((item) => (
            <article className={styles.card} key={item.title}>
              <div className={styles.iconCircle}>{item.icon || "✓"}</div>
              <ItemVisual type={item.visual} />
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>

        {tab.note ? (
          <div className={styles.note}>
            <span className={styles.noteIcon}>◇</span>
            <span><strong>{tab.note.title}</strong> {tab.note.copy}</span>
          </div>
        ) : null}
      </div>
    </section>
  );
}
