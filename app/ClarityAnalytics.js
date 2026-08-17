"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

const PROJECT_ID = "y3uxc7af7u";
const CONSENT_KEY = "lcsc_analytics_consent";

function pageGroup(pathname) {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/climate-controlled")) return "climate_units";
  if (pathname.startsWith("/non-climate-control")) return "non_climate_units";
  if (pathname.startsWith("/privacy")) return "privacy";
  return "other";
}

function unitContext(element) {
  const article = element.closest?.(
    'article[id^="climate-unit-"], article[id^="drive-up-unit-"]',
  );

  if (!article?.id) return null;

  const climate = article.id.startsWith("climate-unit-");
  return {
    type: climate ? "climate" : "non_climate",
    unit: article.id.replace(climate ? "climate-unit-" : "drive-up-unit-", ""),
  };
}

function setUnitTags(context) {
  if (!context) return;
  Clarity.setTag("selected_storage_type", context.type);
  Clarity.setTag("selected_unit", context.unit);
}

function normalizeText(element) {
  return (element?.textContent || "").replace(/\s+/g, " ").trim().toLowerCase();
}

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

    Clarity.setTag("page_group", pageGroup(window.location.pathname));
    Clarity.setTag("site_experience", "storage_funnel");

    const onClick = (event) => {
      const element = event.target?.closest?.("a, button");
      if (!element) return;

      const href = element.getAttribute("href") || "";
      const text = normalizeText(element);
      const context = unitContext(element);

      if (context) setUnitTags(context);

      if (text.startsWith("move in")) {
        Clarity.event("move_in_click");
        Clarity.upgrade("move-in click");
        return;
      }

      if (href.startsWith("tel:")) {
        Clarity.event("call_facility");
        Clarity.upgrade("call click");
        return;
      }

      if (href.includes("/payonline")) {
        Clarity.event("pay_online_click");
        return;
      }

      if (href.includes("google.com/maps")) {
        Clarity.event("get_directions_click");
        return;
      }

      if (href.includes("/contact-us")) {
        Clarity.event("contact_click");
        return;
      }

      if (href === "/privacy") {
        Clarity.event("privacy_policy_click");
        return;
      }

      if (href === "#cookie-settings") {
        Clarity.event("cookie_settings_open");
        return;
      }

      if (href.startsWith("/climate-controlled")) {
        Clarity.setTag("storage_interest", "climate");
        Clarity.event("climate_units_click");
        return;
      }

      if (href.startsWith("/non-climate-control")) {
        Clarity.setTag("storage_interest", "non_climate");
        Clarity.event("non_climate_units_click");
        return;
      }

      if (href === "#unit-doors" || href === "#drive-up-sizes") {
        Clarity.event("unit_sizes_nav_click");
      }
    };

    const details = Array.from(document.querySelectorAll("details"));
    const detailHandlers = details.map((detail) => {
      const handler = () => {
        if (!detail.open) return;
        const question = normalizeText(detail.querySelector("summary"));
        if (question) Clarity.setTag("faq_question", question.slice(0, 255));
        Clarity.event("faq_open");
      };
      detail.addEventListener("toggle", handler);
      return [detail, handler];
    });

    const observedSections = Array.from(
      document.querySelectorAll("#unit-doors, #drive-up-sizes"),
    );
    const seenSections = new Set();
    let observer = null;

    if ("IntersectionObserver" in window && observedSections.length) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting || seenSections.has(entry.target.id)) return;
            seenSections.add(entry.target.id);
            Clarity.setTag(
              "unit_directory_type",
              entry.target.id === "unit-doors" ? "climate" : "non_climate",
            );
            Clarity.event("unit_directory_viewed");
          });
        },
        { threshold: 0.3 },
      );

      observedSections.forEach((section) => observer.observe(section));
    }

    document.addEventListener("click", onClick, true);

    return () => {
      document.removeEventListener("click", onClick, true);
      detailHandlers.forEach(([detail, handler]) => detail.removeEventListener("toggle", handler));
      observer?.disconnect();
    };
  }, []);

  return null;
}
