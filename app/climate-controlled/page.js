import StorageTypePage from "../StorageTypePage";

export const metadata = {
  title: "Climate-Controlled Storage in Lake City, FL | Lake City Self Storage",
  description:
    "Learn the benefits of climate-controlled storage in Lake City, Florida, including when it makes sense for furniture, electronics, documents, mattresses, clothing, décor, and household belongings.",
};

const config = {
  icon: "❄",
  photoZone: "climate",
  eyebrow: "Climate-Controlled Storage",
  title: "A More Stable Environment for the Belongings You Care About",
  heroLead:
    "Florida heat and temperature swings can be hard on sensitive belongings. Climate-controlled storage provides a more stable indoor environment for furniture, electronics, documents, mattresses, clothing, décor, keepsakes, and other household items you want to store with extra care.",
  primaryCta: "Compare Climate-Controlled Sizes",
  visualTitle: "See the real climate-controlled storage area",
  visualCopy:
    "These indoor facility photos show the environment customers actually walk into when they choose climate-controlled storage.",
  hideBenefits: true,
  benefitsTitle: "Why Choose Climate-Controlled Storage?",
  benefitsIntro:
    "Climate control is useful when the added environmental protection solves a real problem for what you are storing. If it does not, the non-climate option may be the better value.",
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
      title: "Worth It When Condition Matters",
      copy:
        "Paying more can make sense when the belongings are difficult to replace, sentimental, or likely to be affected by heat and repeated environmental changes.",
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
  faqTitle: "Climate-Controlled Storage Questions",
  faqIntro: "Questions specifically about this indoor storage environment—not general facility questions you already answered on the homepage.",
  faqs: [
    {
      question: "When is climate-controlled storage actually worth paying more for?",
      answer:
        "It is most useful when heat, moisture, or repeated temperature changes could affect the condition of what you are storing. Furniture, electronics, mattresses, paper records, photos, clothing, artwork, and keepsakes are common examples. If your belongings are durable and garage-friendly, compare non-climate storage before paying extra.",
    },
    {
      question: "Is climate-controlled the same as humidity-controlled?",
      answer:
        "No. Those terms are not interchangeable. If your belongings require a specific temperature or humidity range, call Lake City Self Storage and ask about the current environmental controls before renting.",
    },
    {
      question: "Are the climate-controlled units indoors?",
      answer:
        "Yes. The climate-controlled units shown on this site are in the indoor storage area. The facility photos above show the actual interior corridors and unit doors.",
    },
    {
      question: "What if the climate-controlled size I want is unavailable?",
      answer:
        "Compare the next size up or down before abandoning climate control. The goal is to keep the storage environment you need while finding the closest practical amount of space. You can also call the facility for help comparing current inventory.",
    },
    {
      question: "What are the facility access hours for my stored belongings?",
      answer:
        "Lake City Self Storage lists daily access hours of 7:00 AM to 8:00 PM. If you need special access arrangements, contact the facility before renting.",
    },
  ],
  crossTitle: "Need tougher-item storage instead?",
  crossCopy:
    "Non-climate-controlled drive-up storage may be the more practical and economical choice when your belongings can handle Florida temperature changes.",
  crossHref: "/non-climate-control",
  crossCta: "Explore Non-Climate-Controlled Storage",
  finalTitle: "Protect what needs protection—without paying for more than you need.",
  finalCopy: "Compare the available climate-controlled sizes, prices, and what each one is best suited for.",
};

export default function ClimateControlledPage() {
  return <StorageTypePage config={config} />;
}
