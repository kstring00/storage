"use client";

import { useEffect } from "react";

export default function TenByTenLinkEnhancer() {
  useEffect(() => {
    const card = document.querySelector("#climate-unit-10x10");
    if (!card) return;

    const availabilityLink = Array.from(card.querySelectorAll("a")).find((link) =>
      link.textContent?.includes("View Live Availability")
    );

    if (!availabilityLink) return;

    availabilityLink.setAttribute("href", "/climate-controlled/10x10");
    availabilityLink.setAttribute(
      "aria-label",
      "View 10 by 10 climate-controlled availability prototype"
    );
    availabilityLink.textContent = "View 10 × 10 Availability →";
  }, []);

  return null;
}
