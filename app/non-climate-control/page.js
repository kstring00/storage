import StorageTypePage from "../StorageTypePage";

export const metadata = {
  title: "Non-Climate-Controlled Storage in Lake City, FL | Lake City Self Storage",
  description:
    "Learn when non-climate-controlled drive-up storage makes sense for durable belongings such as tools, lawn equipment, patio furniture, sealed plastic totes, and other less-sensitive items.",
};

const config = {
  icon: "⌂",
  photoZone: "nonClimate",
  eyebrow: "Non-Climate-Controlled Storage",
  title: "Simple, Practical Drive-Up Storage for Durable Belongings",
  heroLead:
    "Not everything needs climate control. For tougher belongings that can handle Florida temperature changes, non-climate-controlled drive-up storage can be the simpler and more economical choice—with the convenience of pulling your vehicle directly up to the unit.",
  primaryCta: "Compare Drive-Up Sizes",
  visualTitle: "See the real drive-up storage area",
  visualCopy:
    "These exterior facility photos show the access style customers actually use when they choose non-climate-controlled storage.",
  benefitsTitle: "Why Choose Non-Climate-Controlled Storage?",
  benefitsIntro:
    "For the right belongings, non-climate storage gives you useful space, direct vehicle access, and usually a lower monthly rate without paying for environmental protection you may not need.",
  benefits: [
    {
      icon: "$",
      title: "Usually the Lower-Cost Option",
      copy:
        "If your belongings do not need a more stable indoor environment, non-climate-controlled storage can help you avoid paying for protection you may not need.",
    },
    {
      icon: "↔",
      title: "Direct Drive-Up Access",
      copy:
        "Drive-up access means you can park directly in front of the unit, which makes loading tools, outdoor equipment, totes, and bulky durable belongings simpler.",
    },
    {
      icon: "⌂",
      title: "Great for Garage-Friendly Items",
      copy:
        "Tools, lawn equipment, patio furniture, sturdy storage totes, and similar belongings are strong candidates when Florida temperature and humidity changes are not a concern.",
    },
  ],
  storageFit: {
    title: "What Belongs in Non-Climate-Controlled Storage?",
    intro: "The best fit is usually durable belongings that can tolerate Florida temperature changes and do not need a controlled indoor environment.",
    tabLabel: "Non-climate-controlled storage guidance",
    tabs: [
      {
        label: "Best Fits",
        title: "Durable belongings that usually make sense here",
        intro: "Think practical, sturdy, and less sensitive to heat or ordinary temperature swings.",
        items: [
          { icon: "⚒", visual: "tools", title: "Tools & Hardware", copy: "Hand tools, power-tool cases, ladders, work supplies, and other durable equipment are strong candidates when they do not require a controlled environment." },
          { icon: "↔", visual: "lawn", title: "Lawn & Outdoor Equipment", copy: "Mowers, yard tools, garden supplies, and similar equipment are built for tougher conditions and often do not need climate control." },
          { icon: "⌑", visual: "patio", title: "Patio Furniture", copy: "Outdoor chairs, tables, and similar pieces are typically designed to handle changing temperatures better than indoor furniture." },
          { icon: "▤", visual: "totes", title: "Durable Plastic Totes", copy: "Sealed plastic bins containing non-sensitive seasonal goods, household overflow, or sturdy personal belongings can be a practical fit." },
        ],
        note: {
          title: "A useful rule of thumb:",
          copy: "if you would be comfortable keeping the item in a typical garage through changing weather, non-climate-controlled storage may be a reasonable fit.",
        },
      },
      {
        label: "Good Use Cases",
        title: "Situations where simple storage space is often the main need",
        intro: "Non-climate control works especially well when convenience, room, and lower cost matter more than environmental protection.",
        items: [
          { icon: "⌂", visual: "boxes", title: "Garage Cleanouts", copy: "Clear space at home by moving sturdy overflow, bins, tools, and project materials into a dedicated storage unit." },
          { icon: "◷", visual: "calendar", title: "Seasonal Rotation", copy: "Store holiday décor, coolers, camping supplies, yard gear, and other durable seasonal items until you need them again." },
          { icon: "⚙", visual: "gear", title: "Equipment Storage", copy: "Keep work gear, outdoor equipment, and durable supplies organized without paying for climate control they may not need." },
          { icon: "▦", visual: "business", title: "Business & Project Overflow", copy: "Create extra room for sturdy supplies, display materials, tools, and non-sensitive inventory that simply needs secure space." },
        ],
      },
      {
        label: "Choose Climate Instead",
        title: "Move sensitive belongings to climate control",
        intro: "If heat, moisture, or repeated temperature swings could affect the item—or if it would be painful to replace—climate control is usually the safer direction.",
        items: [
          { icon: "▦", visual: "furniture", title: "Indoor Furniture", copy: "Wood and upholstered furniture can react to prolonged heat and moisture, especially during longer storage periods." },
          { icon: "▣", visual: "electronics", title: "Electronics", copy: "Televisions, computers, audio equipment, and other sensitive components are better candidates for a more stable indoor environment." },
          { icon: "▤", visual: "documents", title: "Photos & Documents", copy: "Paper records, photographs, books, and printed materials can be affected by heat, humidity, and moisture over time." },
          { icon: "♧", visual: "fabrics", title: "Clothing & Textiles", copy: "Mattresses, clothing, rugs, bedding, and other fabrics can absorb moisture and may benefit from climate-controlled storage." },
        ],
        note: {
          title: "When in doubt:",
          copy: "if you would worry about the item sitting in a hot garage for weeks or months, compare the climate-controlled option before deciding.",
        },
      },
    ],
  },
  hideUses: true,
  decisionNoteOnly: true,
  showDriveUpDoors: true,
  noteTitle: "A useful rule of thumb:",
  noteCopy:
    "If you would be comfortable keeping the item in a typical garage through changing weather, non-climate-controlled storage may be a reasonable fit. If you would worry about heat, moisture, or repeated temperature swings, consider climate control instead.",
  faqTitle: "Non-Climate & Drive-Up Storage Questions",
  faqIntro: "Questions specific to this exterior drive-up storage environment.",
  faqs: [
    {
      question: "What does drive-up access mean?",
      answer:
        "It means you can park your vehicle directly in front of the storage unit for easier loading and unloading. That convenience is one of the main reasons customers choose this storage type.",
    },
    {
      question: "What should I store in a non-climate-controlled unit?",
      answer:
        "Durable belongings such as tools, lawn equipment, patio furniture, sealed plastic totes, sports gear, project supplies, and other garage-friendly items are common uses.",
    },
    {
      question: "What should I avoid storing there?",
      answer:
        "Items that are sensitive to heat, moisture, or repeated temperature swings—such as important documents, photos, electronics, mattresses, clothing, artwork, and some indoor furniture—may be better suited to climate-controlled storage.",
    },
    {
      question: "Is non-climate-controlled storage usually cheaper?",
      answer:
        "Usually, yes. You are not paying for the same indoor environmental control, but exact pricing still depends on size and current inventory. The unit doors above show the current starting-rate snapshot and link to the official live inventory.",
    },
    {
      question: "When should I choose climate control instead?",
      answer:
        "If you would be uncomfortable leaving the item in a typical Florida garage through changing weather, or if the item is sentimental, expensive, or difficult to replace, compare climate-controlled storage before deciding.",
    },
  ],
  crossTitle: "Storing furniture, electronics, documents, or keepsakes?",
  crossCopy:
    "A more stable indoor environment may be worth the upgrade for belongings that are sensitive or important to you.",
  crossHref: "/climate-controlled",
  crossCta: "Explore Climate-Controlled Storage",
  finalTitle: "Pay for the storage environment your belongings actually need.",
  finalCopy: "Choose drive-up non-climate storage when simple access and practical value are the right fit.",
};

export default function NonClimateControlledPage() {
  return <StorageTypePage config={config} />;
}
