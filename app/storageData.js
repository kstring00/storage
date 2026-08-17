export const INVENTORY_SOURCE_URL = "https://www.lakecityselfstorage.com/1143-nw-lake-jeffrey-rd-lake-city-fl-32055";
export const INVENTORY_AS_OF = "August 16, 2026";

// Temporary inventory adapter.
// These rates are a manual snapshot of the facility's official online inventory.
// Keep every page reading from this one shape. When the Storable/API feed is available,
// replace this module's data-fetching layer rather than changing the page components.
export const climateUnits = [
  {
    id: "5x5",
    number: "SMALL",
    size: "5 × 5",
    slug: "5x5",
    sqft: 25,
    type: "climate",
    label: "Compact climate-controlled storage",
    doorNote: "Boxes • décor • small items",
    bestFor: ["Boxes", "Seasonal décor", "Small belongings"],
    helper: "A compact option for boxes, seasonal décor, files, and smaller belongings that benefit from a more stable indoor environment.",
    fromPrice: 69,
    availability: null,
  },
  {
    id: "10x10",
    number: "B-03",
    size: "10 × 10",
    slug: "10x10",
    sqft: 100,
    type: "climate",
    label: "Bedroom or apartment overflow",
    doorNote: "Bikes • bed set • desk",
    bestFor: ["Bikes", "Bed set", "Desk"],
    helper: "A practical fit for the contents of a bedroom, small apartment overflow, or a few larger pieces you want protected indoors.",
    fromPrice: 128,
    availability: null,
    conversionHref: "/climate-controlled/10x10",
  },
  {
    id: "10x15",
    number: "B-07",
    size: "10 × 15",
    slug: "10x15",
    sqft: 150,
    type: "climate",
    label: "Recommended for most households",
    doorNote: "Furniture • mattresses • boxes",
    bestFor: ["Living-room furniture", "Mattress sets", "Boxes & décor"],
    helper: "A strong middle-ground size for several rooms of furniture without immediately stepping up to the largest option.",
    fromPrice: 148,
    availability: null,
  },
  {
    id: "10x20",
    number: "C-01",
    size: "10 × 20",
    slug: "10x20",
    sqft: 200,
    type: "climate",
    label: "Larger household storage",
    doorNote: "Multiple rooms • appliances",
    bestFor: ["Multiple rooms", "Large appliances", "Dining + living sets"],
    helper: "A better fit for larger moves, remodels, or households storing substantial furniture and appliances together.",
    fromPrice: 190,
    availability: null,
  },
];

export const nonClimateUnits = [
  {
    id: "5x10",
    size: "5 × 10",
    slug: "5x10",
    sqft: 50,
    type: "driveup",
    label: "Compact drive-up storage",
    doorNote: "Tools • seasonal gear • totes",
    bestFor: ["Tools", "Seasonal gear", "Totes"],
    helper: "A straightforward drive-up option for compact durable storage jobs and smaller household overflow.",
    fromPrice: 79,
    availability: null,
  },
  {
    id: "10x10",
    size: "10 × 10",
    slug: "10x10",
    sqft: 100,
    type: "driveup",
    label: "Popular garage-style storage",
    doorNote: "Lawn gear • patio items • sturdy bins",
    bestFor: ["Lawn gear", "Patio items", "Durable totes"],
    helper: "A practical drive-up option for garage cleanouts, outdoor gear, and durable household overflow.",
    fromPrice: 98,
    availability: null,
  },
  {
    id: "10x15",
    size: "10 × 15",
    slug: "10x15",
    sqft: 150,
    type: "driveup",
    label: "Room for larger projects",
    doorNote: "Equipment • bulky durable items",
    bestFor: ["Outdoor equipment", "Project overflow", "Sturdy household items"],
    helper: "Useful when you need more room for durable equipment, projects, or household overflow with direct vehicle access.",
    fromPrice: 129,
    availability: null,
  },
  {
    id: "10x20",
    size: "10 × 20",
    slug: "10x20",
    sqft: 200,
    type: "driveup",
    label: "Large drive-up storage",
    doorNote: "Garage contents • larger equipment",
    bestFor: ["Garage contents", "Equipment", "Bulky durable items"],
    helper: "A larger drive-up choice for substantial durable household or work-related storage.",
    fromPrice: 159,
    availability: null,
  },
  {
    id: "10x30",
    size: "10 × 30",
    slug: "10x30",
    sqft: 300,
    type: "driveup",
    label: "Extra-large drive-up storage",
    doorNote: "Large household • business overflow",
    bestFor: ["Large household overflow", "Business storage", "Bulky equipment"],
    helper: "The largest drive-up option represented here for substantial household, business, or equipment storage.",
    fromPrice: 259,
    availability: null,
  },
];

export const featuredUnits = [
  { ...climateUnits.find((unit) => unit.id === "10x10"), id: "featured-climate-10x10", featureLabel: "Climate-controlled" },
  { ...climateUnits.find((unit) => unit.id === "10x15"), id: "featured-climate-10x15", featureLabel: "Climate-controlled", featured: true },
  { ...nonClimateUnits.find((unit) => unit.id === "10x10"), id: "featured-drive-10x10", featureLabel: "Drive-up • non-climate" },
  { ...nonClimateUnits.find((unit) => unit.id === "10x20"), id: "featured-drive-10x20", featureLabel: "Drive-up • non-climate" },
];

export function money(value) {
  return `$${value}`;
}

const MEDIA_ROOT = "https://uploads.website.storedge.com/4ee8d3a8-7790-4195-9d2f-6b28480bad77/";

export const photoSets = {
  general: [
    {
      src: `${MEDIA_ROOT}copy%20of%20dji_20250814143718_0215_d-1_08152025173146479.jpg`,
      alt: "Aerial overview of Lake City Self Storage",
    },
    {
      src: `${MEDIA_ROOT}copy%20of%20dji_20250814143659_0214_d_08152025172434571.jpg`,
      alt: "Lake City Self Storage facility grounds",
    },
    {
      src: `${MEDIA_ROOT}copy%20of%20dji_20250814143859_0223_d_08152025172159485.jpg`,
      alt: "Storage buildings and drive aisles at Lake City Self Storage",
    },
  ],
  climate: [
    {
      src: "/photos/unit-interior.jpg",
      alt: "Empty storage unit interior supplied for the Lake City Self Storage prototype",
    },
    {
      src: `${MEDIA_ROOT}img_0008_07312025201301009.jpg`,
      alt: "Climate-controlled storage area at Lake City Self Storage",
    },
    {
      src: `${MEDIA_ROOT}copy%20of%209y8a0202_08152025173121802.jpg`,
      alt: "Interior climate-controlled storage corridor at Lake City Self Storage",
    },
    {
      src: `${MEDIA_ROOT}copy%20of%20dji_20250814070642_0032_d_08152025173132891.jpg`,
      alt: "Lake City Self Storage climate-controlled building and facility grounds",
    },
  ],
  nonClimate: [
    {
      src: `${MEDIA_ROOT}copy%20of%20dji_20250814070645_0033_d_08152025174232437.jpg`,
      alt: "Drive-up storage buildings at Lake City Self Storage",
    },
    {
      src: `${MEDIA_ROOT}copy%20of%20dji_20250814070349_0015_d_08152025172725162.jpg`,
      alt: "Non-climate drive-up storage area at Lake City Self Storage",
    },
    {
      src: `${MEDIA_ROOT}copy%20of%20dji_20250814143859_0223_d_08152025172159485.jpg`,
      alt: "Exterior drive aisles and storage units at Lake City Self Storage",
    },
  ],
};

export const reviewThemes = {
  general: [
    { title: "Quick, easy rental", copy: "Renters repeatedly describe the online and phone rental process as fast and straightforward." },
    { title: "Clean and personal", copy: "Positive feedback consistently highlights a clean facility and helpful, personal service." },
    { title: "Value with security", copy: "Customers frequently connect fair value with the facility's security upgrades and responsive communication." },
  ],
  climate: [
    { title: "Climate control customers wanted", copy: "Recent positive feedback specifically calls the newer climate-controlled units a welcome addition." },
    { title: "Clean indoor environment", copy: "Cleanliness and ongoing facility improvements are recurring themes in positive customer feedback." },
    { title: "Easy help when needed", copy: "Renters praise responsive communication and a rental process that can be handled online or by phone." },
  ],
  nonClimate: [
    { title: "Simple access", copy: "Drive-up access keeps loading straightforward for customers storing durable household and outdoor items." },
    { title: "Fair value", copy: "Positive reviewers frequently mention fair pricing and value alongside helpful service." },
    { title: "Clean, secure facility", copy: "Cleanliness, security improvements, and responsive staff show up repeatedly in public customer feedback." },
  ],
};
