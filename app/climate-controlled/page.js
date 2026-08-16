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
    intro: "Heat, moisture, and repeated environmental swings can affect common household materials over time.",
    tabLabel: "Climate-controlled storage guidance",
    footerNote: {
      title: "Why climate control helps:",
      copy: "it reduces environmental extremes by providing a more stable indoor storage environment. Exact temperature and humidity conditions can vary; ask the facility about current controls for items with special requirements.",
    },
    tabs: [
      {
        label: "Sensitive Belongings",
        title: "Items that benefit most from a more stable indoor environment",
        intro: "These are the kinds of belongings where heat, moisture, and repeated environmental changes can matter over time.",
        items: [
          {
            icon: "▦",
            visual: "furniture",
            title: "Wood Furniture",
            copy: "Repeated heat and moisture changes can make wood expand and contract, contributing to warping, cracking, swelling, joint stress, or finish changes over time.",
          },
          {
            icon: "▤",
            visual: "documents",
            title: "Photos & Documents",
            copy: "Warm, humid conditions can accelerate fading, yellowing, curling, sticking, and deterioration of paper, photographs, books, and printed materials.",
          },
          {
            icon: "♧",
            visual: "fabrics",
            title: "Clothing & Fabrics",
            copy: "Textiles can absorb moisture. In damp conditions that can contribute to musty odors, mildew risk, and stress on fabrics during longer storage periods.",
          },
          {
            icon: "▣",
            visual: "electronics",
            title: "Electronics & Sensitive Items",
            copy: "Heat and moisture exposure can stress components and contribute to corrosion or performance issues. A more stable indoor environment can be a better fit.",
          },
        ],
      },
      {
        label: "Best Situations",
        title: "Times when climate control can add meaningful value",
        intro: "The storage situation matters too—not just the item itself.",
        items: [
          { icon: "↗", visual: "boxes", title: "Moving Between Homes", copy: "Keep mixed household belongings in a more stable environment while you are between closings, leases, or moving dates." },
          { icon: "⌂", visual: "remodel", title: "Remodeling", copy: "Store furniture, décor, electronics, and room contents away from dust and disruption while work is underway." },
          { icon: "◷", visual: "calendar", title: "Longer Storage Periods", copy: "The longer sensitive belongings sit in storage, the more useful a stable indoor environment can become." },
          { icon: "◇", visual: "keepsake", title: "Keepsakes & Irreplaceable Items", copy: "For sentimental or difficult-to-replace belongings, condition may matter more than simply choosing the lowest monthly rate." },
        ],
      },
      {
        label: "When You May Not Need It",
        title: "Some durable belongings may do perfectly well without climate control",
        intro: "If the item is tough, less sensitive, and something you would comfortably keep in a typical garage, non-climate-controlled storage may be enough.",
        items: [
          { icon: "⚒", visual: "tools", title: "Tools & Hardware", copy: "Durable tools, ladders, work supplies, and sturdy equipment are often reasonable candidates for non-climate-controlled storage." },
          { icon: "↔", visual: "lawn", title: "Lawn Equipment", copy: "Mowers, yard tools, and outdoor equipment are designed for tougher conditions and may not need climate control." },
          { icon: "⌑", visual: "patio", title: "Patio Furniture", copy: "Outdoor tables and chairs are typically built to tolerate changing temperatures better than indoor furniture." },
          { icon: "▤", visual: "totes", title: "Sealed Plastic Totes", copy: "Sturdy bins with non-sensitive contents can be a practical fit for non-climate-controlled storage." },
        ],
      },
    ],
  },
  hideUses: true,
  hideDecision: true,
  usesTitle: "Belongings That Commonly Benefit from Climate Control",
  usesIntro:
    "You do not need climate control for everything, but it can be the better choice for items that are more vulnerable to heat, moisture, or environmental swings.",
  uses: [
    {
      title: "Furniture",
      copy: "Wood and upholstered furniture, bedroom sets, dressers, tables, sofas, and other indoor household pieces.",
    },
    {
      title: "Electronics & Appliances",
      copy: "Televisions, computers, audio equipment, small appliances, and other electronics with sensitive internal components.",
    },
    {
      title: "Documents, Photos & Books",
      copy: "Paper records, family photos, books, printed materials, and important documents that can react to heat and moisture.",
    },
    {
      title: "Mattresses, Clothing & Textiles",
      copy: "Mattresses, bedding, clothing, fabric furniture, rugs, and other materials that can absorb moisture or odors over time.",
    },
    {
      title: "Artwork, Décor & Keepsakes",
      copy: "Framed art, decorative pieces, collectibles, sentimental items, and belongings you want to preserve in better condition.",
    },
    {
      title: "Household Moves & Overflow",
      copy: "Mixed household belongings during a move, remodel, downsizing project, temporary transition, or longer-term storage period.",
    },
  ],
  decisionTitle: "When Is Climate Control Worth It?",
  decisionIntro:
    "The simplest question is not whether every item requires climate control. It is whether the belongings you are storing would benefit from a more stable indoor environment.",
  goodFitLabel: "Climate control is a strong fit when",
  goodFitTitle: "Your belongings are sensitive or important",
  goodFit: [
    "You are storing furniture, electronics, mattresses, paper records, clothing, artwork, décor, or mixed household belongings.",
    "Your items may remain in storage for an extended period of time.",
    "You are storing belongings whose condition matters more than choosing the lowest monthly rate.",
    "You want to reduce exposure to Florida heat and repeated temperature swings.",
  ],
  otherFitLabel: "Non-climate control may be enough when",
  otherFitTitle: "Your belongings are durable and less sensitive",
  otherFit: [
    "You are mainly storing tools, lawn equipment, patio furniture, or durable plastic totes.",
    "The items can tolerate a less-controlled environment.",
    "You are prioritizing lower monthly cost for belongings that do not need additional environmental protection.",
    "You want simple storage for tougher items rather than sensitive household contents.",
  ],
  noteTitle: "Important:",
  noteCopy:
    "Climate-controlled does not automatically mean humidity-controlled. Exact temperature and humidity conditions can vary, so ask Lake City Self Storage about current environmental controls if your belongings require a specific range.",
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
