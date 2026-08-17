"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

const PROJECT_ID = "y3uxc7af7u";
const CONSENT_KEY = "lcsc_analytics_consent";

export default function ClarityAnalytics() {
  useEffect(() => {
    let saved = null;

    try {
      saved = window.localStorage.getItem(CONSENT_KEY);
    } catch {
      saved = null;
    }

    Clarity.init(PROJECT_ID);
    Clarity.consentV2({
      ad_Storage: "denied",
      analytics_Storage: saved === "granted" ? "granted" : "denied",
    });
  }, []);

  return null;
}
