"use client";

import { useEffect, useState } from "react";
import Clarity from "@microsoft/clarity";
import styles from "./CookieConsent.module.css";

const CONSENT_KEY = "lcsc_analytics_consent";

function sendClarityConsent(value) {
  Clarity.consentV2({
    ad_Storage: "denied",
    analytics_Storage: value,
  });
}

function sendGoogleConsent(value) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: value,
  });
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let saved = null;
    try {
      saved = window.localStorage.getItem(CONSENT_KEY);
    } catch {
      saved = null;
    }

    if (saved !== "granted" && saved !== "denied") {
      setVisible(true);
    }

    const openFromHash = () => {
      if (window.location.hash !== "#cookie-settings") return;
      setVisible(true);
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  const choose = (value) => {
    try {
      window.localStorage.setItem(CONSENT_KEY, value);
    } catch {
      // Consent still applies for the current page even if storage is unavailable.
    }

    sendClarityConsent(value);
    sendGoogleConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className={styles.banner} aria-label="Analytics cookie preferences" role="dialog" aria-live="polite">
      <div className={styles.copy}>
        <strong>Help us improve this website</strong>
        <p>
          We use optional analytics cookies through Microsoft Clarity and Google Analytics to understand how visitors use this site and improve the storage rental experience.
        </p>
        <a href="/privacy">Privacy Policy</a>
      </div>
      <div className={styles.actions}>
        <button className={styles.decline} type="button" onClick={() => choose("denied")}>
          Decline
        </button>
        <button className={styles.accept} type="button" onClick={() => choose("granted")}>
          Accept Analytics
        </button>
      </div>
    </aside>
  );
}
