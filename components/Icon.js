// Small stroke icons for features and contact rows. Decorative only (aria-hidden).
const PATHS = {
  snow: "M12 2v20M4.2 6.5l15.6 11M4.2 17.5l15.6-11M9 4l3 2.5L15 4M9 20l3-2.5 3 2.5",
  truck: "M2 6h11v10H2zM13 10h4l4 4v2h-8zM6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  boat: "M3 17l2 4h14l2-4zM12 3v12M12 4l7 9h-7M12 7l-5 6h5",
  camera: "M3 7h4l2-3h6l2 3h4v13H3zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  gate: "M3 21V4M21 21V4M3 8h18M3 17h18M7 8v9M11 8v9M15 8v9M19 8v9",
  click: "M9 3v4M3 9h4M5 5l2.5 2.5M12 12l9 3-4 2-2 4z",
  card: "M2 6h20v13H2zM2 10h20M6 15h4",
  person: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0",
  light: "M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9V16h7v-2.1A6 6 0 0 0 12 3z",
  box: "M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10",
  check: "M5 12l5 5L20 7",
  phone: "M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z",
  pin: "M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2",
  mail: "M3 5h18v14H3zM3 6l9 7 9-7",
  star: "M12 2l3 7 7 .6-5.4 4.7L18.2 22 12 18l-6.2 4 1.6-7.7L2 9.6 9 9z",
  arrow: "M5 12h14M13 6l6 6-6 6",
};

export default function Icon({ name, size = 22 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      fill={name === "star" ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={PATHS[name] || PATHS.check} />
    </svg>
  );
}
