import StorageTypePage from "../StorageTypePage";

export const metadata = {
  title: "Non-Climate-Controlled Storage in Lake City, FL | Lake City Self Storage",
  description:
    "Learn when non-climate-controlled storage makes sense for durable belongings such as tools, lawn equipment, patio furniture, sealed plastic totes, and other less-sensitive items.",
};

const config = {
  icon: "⌂",
  eyebrow: "Non-Climate-Controlled Storage",
  title: "Simple, Practical Storage for Durable Belongings",
  heroLead:
    "Not everything needs climate control. Non-climate-controlled storage can be a smart, economical choice for tougher belongings that can handle Florida temperature changes, especially when convenience and lower monthly cost matter more than a controlled indoor environment.",
  primaryCta: "View Non-Climate-Controlled Units",
  visualTitle: "A practical choice for tougher items",
  visualCopy:
    "Use non-climate-controlled storage for belongings that are less sensitive to heat, humidity, and temperature swings.",
  benefitsTitle: "Why Choose Non-Climate-Controlled Storage?",
  benefitsIntro:
    "For the right belongings, non-climate-controlled storage keeps things simple: useful space, straightforward access, and usually a lower monthly rate.",
  benefits: [
    {
      icon: "$",
      title: "Usually the Lower-Cost Option",
      copy:
        "If your belongings do not need a more stable indoor environment, non-climate-controlled storage can help you avoid paying for protection you may not need.",
    },
    {
      icon: "↔",
      title: "Great for Durable Belongings",
      copy:
        "Tools, lawn equipment, patio furniture, sturdy storage totes, and similar items can often tolerate a less-controlled environment well.",
    },
    {
      icon: "⌂",
      title: "Straightforward Everyday Storage",
      copy:
        "It is a practical option for household overflow, garage cleanouts, outdoor gear, and other items where simple storage space is the main priority.",
    },
  ],
  usesTitle: "Best Uses for Non-Climate-Controlled Storage",
  usesIntro:
    "The best candidates are belongings that are sturdy, replaceable, or designed to tolerate changing temperatures and ordinary outdoor conditions.",
  uses: [
    {
      title: "Tools & Hardware",
      copy: "Hand tools, power-tool cases, ladders, work supplies, and other durable equipment that does not require a controlled environment.",
    },
    {
      title: "Lawn & Outdoor Equipment",
      copy: "Mowers, yard tools, garden supplies, outdoor equipment, and similar items built for tougher conditions.",
    },
    {
      title: "Patio Furniture",
      copy: "Outdoor chairs, tables, umbrellas, and other furniture intended to handle exposure to changing temperatures.",
    },
    {
      title: "Durable Plastic Totes",
      copy: "Sealed plastic bins containing non-sensitive household goods, seasonal items, or sturdy personal belongings.",
    },
    {
      title: "Sports & Recreation Gear",
      copy: "Camping equipment, coolers, sporting goods, beach gear, and other durable recreational items.",
    },
    {
      title: "Garage & Household Overflow",
      copy: "Extra household items, project materials, and durable belongings that need space more than environmental protection.",
    },
  ],
  decisionTitle: "When Does Non-Climate Control Make Sense?",
  decisionIntro:
    "The goal is to match the storage environment to what you are actually storing. If your belongings are durable and less sensitive, climate control may be unnecessary.",
  goodFitLabel: "Non-climate control is a strong fit when",
  goodFitTitle: "You mainly need space for tougher items",
  goodFit: [
    "Your belongings are durable and can tolerate Florida temperature changes.",
    "You are storing tools, lawn equipment, patio furniture, sports gear, or sealed totes with non-sensitive contents.",
    "Lower monthly cost is an important priority and the items do not require extra environmental protection.",
    "You mainly want practical storage space rather than a more controlled indoor environment.",
  ],
  otherFitLabel: "Climate control may be better when",
  otherFitTitle: "The condition of the belongings matters more",
  otherFit: [
    "You are storing wood or upholstered furniture, mattresses, electronics, documents, photos, books, or clothing.",
    "Your belongings are sentimental, expensive, or difficult to replace.",
    "The items may remain in storage for a long period and are sensitive to environmental changes.",
    "You want to reduce exposure to Florida heat and repeated temperature swings.",
  ],
  noteTitle: "A useful rule of thumb:",
  noteCopy:
    "If you would be comfortable keeping the item in a typical garage through changing weather, non-climate-controlled storage may be a reasonable fit. If you would worry about heat, moisture, or repeated temperature swings, consider climate control instead.",
  faqs: [
    {
      question: "What is non-climate-controlled storage?",
      answer:
        "It is storage space that does not provide the same controlled indoor temperature environment as a climate-controlled unit. Conditions can change more with outdoor weather.",
    },
    {
      question: "What should I store in a non-climate-controlled unit?",
      answer:
        "Durable belongings such as tools, lawn equipment, patio furniture, sealed plastic totes, sports gear, and other less-sensitive items are common uses.",
    },
    {
      question: "What should I avoid storing there?",
      answer:
        "Items that are sensitive to heat, moisture, or temperature swings—such as important documents, photos, electronics, mattresses, clothing, artwork, and some furniture—may be better suited to climate-controlled storage.",
    },
    {
      question: "Is non-climate-controlled storage cheaper?",
      answer:
        "It is usually the lower monthly rate compared with climate-controlled storage, although exact pricing and availability can vary by unit size and current inventory.",
    },
  ],
  crossTitle: "Storing furniture, electronics, documents, or keepsakes?",
  crossCopy:
    "A more stable indoor environment may be worth the upgrade for belongings that are sensitive or important to you.",
  crossHref: "/climate-controlled",
  crossCta: "Explore Climate-Controlled Storage",
  finalTitle: "Pay for the storage environment your belongings actually need.",
  finalCopy: "Choose non-climate-controlled space when simple, practical storage is the right fit.",
  finalCta: "View Non-Climate-Controlled Units",
};

export default function NonClimateControlledPage() {
  return <StorageTypePage config={config} />;
}
