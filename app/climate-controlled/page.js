import StorageTypePage from "../StorageTypePage";

export const metadata = {
  title: "Climate-Controlled Storage in Lake City, FL | Lake City Self Storage",
  description:
    "Learn the benefits of climate-controlled storage in Lake City, Florida, including when it makes sense for furniture, electronics, documents, mattresses, clothing, décor, and household belongings.",
};

const config = {
  icon: "❄",
  eyebrow: "Climate-Controlled Storage",
  title: "A More Stable Environment for the Belongings You Care About",
  heroLead:
    "Florida heat and temperature swings can be hard on sensitive belongings. Climate-controlled storage provides a more stable indoor environment for furniture, electronics, documents, mattresses, clothing, décor, keepsakes, and other household items you want to store with extra care.",
  primaryCta: "View Climate-Controlled Units",
  visualTitle: "Designed for sensitive household belongings",
  visualCopy:
    "Choose climate control when the condition of what you are storing matters as much as having enough space for it.",
  benefitsTitle: "Why Choose Climate-Controlled Storage?",
  benefitsIntro:
    "Climate control is about reducing environmental extremes around belongings that can be affected by prolonged heat or repeated temperature changes.",
  benefits: [
    {
      icon: "❄",
      title: "More Stable Indoor Conditions",
      copy:
        "Climate-controlled units help reduce exposure to the outdoor temperature swings that can occur in Florida throughout the year.",
    },
    {
      icon: "◇",
      title: "Better Fit for Sensitive Materials",
      copy:
        "Wood, electronics, paper, textiles, mattresses, artwork, and similar belongings generally benefit from a more controlled storage environment.",
    },
    {
      icon: "⌂",
      title: "Useful for Moves and Longer Storage",
      copy:
        "When belongings may stay stored for months during a move, remodel, transition, or household overflow, a more stable environment can provide added peace of mind.",
    },
  ],
  storageFit: {
    title: "What Florida Heat & Humidity Can Do to Stored Belongings",
    intro:
      "Heat, moisture, and repeated environmental swings can affect common household materials over time—especially in non-climate-controlled storage.",
    staticOnly: true,
    footerNote: {
      title: "Why climate control helps:",
      copy:
        "it reduces environmental extremes by providing a more stable indoor storage environment. Exact temperature and humidity conditions can vary; ask the facility about current controls for items with special requirements.",
    },
    tabs: [
      {
        label: "Sensitive Belongings",
        title: "Items that can be more vulnerable to Florida heat and humidity",
        intro: "",
        items: [
          {
            icon: "▦",
            visual: "furniture",
            title: "Wood Furniture",
            copy:
              "Repeated heat and moisture changes can make wood expand and contract, contributing to warping, cracking, swelling, joint stress, or finish changes over time.",
          },
          {
            icon: "▤",
            visual: "documents",
            title: "Photos & Documents",
            copy:
              "Warm, humid conditions can accelerate fading, yellowing, curling, sticking, and deterioration of paper, photographs, books, and printed materials.",
          },
          {
            icon: "♧",
            visual: "fabrics",
            title: "Clothing & Fabrics",
            copy:
              "Textiles can absorb moisture. In damp conditions that can contribute to musty odors, mildew risk, and stress on fabrics during longer storage periods.",
          },
          {
            icon: "▣",
            visual: "electronics",
            title: "Electronics & Sensitive Items",
            copy:
              "Heat and moisture exposure can stress components and contribute to corrosion or performance issues. A more stable indoor environment can be a better fit.",
          },
        ],
      },
    ],
  },
  hideUses: true,
  hideDecision: true,
  showClimateDoors: true,
  faqs: [
    {
      question: "Why would I pay more for climate-controlled storage?",
      answer:
        "Because the value is not only the square footage. You are also choosing a more stable indoor storage environment for belongings that can be affected by heat, moisture, and repeated environmental changes.",
    },
    {
      question: "What items are best suited for climate-controlled storage?",
      answer:
        "Furniture, mattresses, electronics, documents, photographs, books, clothing, artwork, décor, keepsakes, and mixed household belongings are common reasons customers choose climate control.",
    },
    {
      question: "Is climate-controlled storage necessary for every item?",
      answer:
        "No. Durable items such as tools, outdoor equipment, patio furniture, and sealed plastic totes may be perfectly reasonable in non-climate-controlled storage.",
    },
    {
      question: "Is climate-controlled the same as humidity-controlled?",
      answer:
        "No. Those terms are not interchangeable. If your belongings require a specific humidity or temperature range, contact the facility to ask about the current controls.",
    },
  ],
  crossTitle: "Mostly storing durable items?",
  crossCopy:
    "Non-climate-controlled storage may be the more practical and economical choice for tougher belongings.",
  crossHref: "/non-climate-control",
  crossCta: "Explore Non-Climate-Controlled Storage",
  finalTitle: "Give sensitive belongings a more stable place to stay.",
  finalCopy: "Choose the amount of climate-controlled space that fits what you need to store.",
  finalCta: "View Climate-Controlled Units",
};

export default function ClimateControlledPage() {
  return <StorageTypePage config={config} />;
}
