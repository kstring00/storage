"use client";

import { useEffect, useState } from "react";
import styles from "./FacilityPhotoCarousel.module.css";

export default function FacilityPhotoCarousel({ images, title, copy, interval = 4800, compact = false }) {
  const safeImages = Array.isArray(images) && images.length ? images : [];
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (safeImages.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % safeImages.length);
    }, interval);
    return () => window.clearInterval(timer);
  }, [safeImages.length, interval]);

  if (!safeImages.length) return null;

  return (
    <div className={`${styles.carousel} ${compact ? styles.compact : ""}`}>
      <div className={styles.frame}>
        {safeImages.map((image, index) => (
          <img
            key={image.src}
            className={`${styles.image} ${index === active ? styles.active : ""}`}
            src={image.src}
            alt={image.alt}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}
        {(title || copy) ? (
          <div className={styles.overlay}>
            {title ? <strong>{title}</strong> : null}
            {copy ? <span>{copy}</span> : null}
          </div>
        ) : null}
      </div>
      {safeImages.length > 1 ? (
        <div className={styles.controls} aria-label="Facility photo controls">
          {safeImages.map((image, index) => (
            <button
              key={`${image.src}-control`}
              className={index === active ? styles.current : ""}
              type="button"
              aria-label={`Show facility photo ${index + 1}`}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
