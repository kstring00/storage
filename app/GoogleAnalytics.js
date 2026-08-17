"use client";

import { useEffect } from "react";

const MEASUREMENT_ID = "G-S2WSXMV6PS";
const CONSENT_KEY = "lcsc_analytics_consent";

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };
}

export default function GoogleAnalytics() {
  useEffect(() => {
    ensureGtag();

    // Google Consent Mode v2: advertising is always denied for this site,
    // and analytics storage remains denied until the visitor opts in.
    window.gtag("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    });

    let saved = null;
    try {
      saved = window.localStorage.getItem(CONSENT_KEY);
    } catch {
      saved = null;
    }

    if (saved === "granted") {
      window.gtag("consent", "update", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "granted",
      });
    }

    window.gtag("set", "ads_data_redaction", true);
    window.gtag("js", new Date());
    window.gtag("config", MEASUREMENT_ID);

    if (!document.querySelector(`script[data-google-analytics="${MEASUREMENT_ID}"]`)) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
      script.dataset.googleAnalytics = MEASUREMENT_ID;
      document.head.appendChild(script);
    }
  }, []);

  return null;
}
