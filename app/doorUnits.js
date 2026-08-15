// w / h drive both the bay width and the opening's aspect-ratio, which is what
// gives the bay its stepped roofline. Item coordinates live in the 280 x 100
// floor-strip viewBox.
export const doorUnits = [
  {
    id: "10x10",
    number: "B-03",
    size: "10 × 10",
    sqft: "100 sq ft",
    w: 226,
    h: 288,
    climate: true,
    fit: ["A bed set, sofa, and boxes", "Good for smaller household storage"],
    items: [
      ["bed", 6, 60, 76, 38],
      ["sofa", 90, 61, 64, 37],
      ["boxstack", 162, 44, 40, 54],
      ["fridge", 234, 34, 32, 64],
    ],
  },
  {
    id: "10x15",
    number: "B-07",
    size: "10 × 15",
    sqft: "150 sq ft",
    w: 262,
    h: 314,
    climate: true,
    featured: true,
    fit: ["Furniture from multiple rooms", "Appliances, mattresses, boxes, and décor"],
    items: [
      ["bed", 4, 61, 74, 37],
      ["dresser", 84, 56, 48, 42],
      ["sofa", 138, 64, 60, 34],
      ["boxstack", 204, 50, 36, 48],
      ["fridge", 246, 42, 28, 56],
    ],
  },
  {
    id: "10x20",
    number: "C-01",
    size: "10 × 20",
    sqft: "200 sq ft",
    w: 296,
    h: 340,
    climate: true,
    fit: ["Larger household furniture", "Appliances and a substantial move"],
    items: [
      ["bed", 2, 63, 70, 35],
      ["sofa", 76, 66, 56, 32],
      ["dresser", 138, 59, 44, 39],
      ["boxstack", 188, 53, 34, 45],
      ["fridge", 228, 46, 26, 52],
      ["bin", 258, 76, 20, 22],
    ],
  },
];

export const doorUnitsById = Object.fromEntries(doorUnits.map((unit) => [unit.id, unit]));
