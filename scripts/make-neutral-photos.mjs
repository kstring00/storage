// Renders the neutral, brand-free illustrations in public/neutral/ used when a facility
// has no photos of its own. Run once: node scripts/make-neutral-photos.mjs
import sharp from "sharp";
import path from "node:path";

const W = 1600;
const H = 1000;
const out = (name) => path.join(process.cwd(), "public", "neutral", name);

function doors({ y, h, count, x0, gap, w, color }) {
  let s = "";
  for (let i = 0; i < count; i++) {
    const x = x0 + i * (w + gap);
    s += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${color}"/>`;
    for (let r = y + 14; r < y + h; r += 16) s += `<rect x="${x}" y="${r}" width="${w}" height="3" fill="rgba(0,0,0,.10)"/>`;
    s += `<rect x="${x + w / 2 - 14}" y="${y + h - 26}" width="28" height="8" rx="3" fill="#5b6470"/>`;
  }
  return s;
}

const driveUp = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fc7e6"/><stop offset="1" stop-color="#e3eff8"/></linearGradient></defs>
  <rect width="${W}" height="${H}" fill="url(#sky)"/>
  <ellipse cx="300" cy="180" rx="140" ry="36" fill="#fff" opacity=".7"/><ellipse cx="1200" cy="140" rx="180" ry="40" fill="#fff" opacity=".6"/>
  <rect x="0" y="720" width="${W}" height="280" fill="#8d9197"/>
  <rect x="0" y="860" width="${W}" height="12" fill="#c9ccd0"/>
  <polygon points="40,330 1560,330 1600,380 0,380" fill="#7b8189"/>
  <rect x="60" y="380" width="1480" height="340" fill="#e9e4da"/>
  ${doors({ y: 430, h: 290, count: 8, x0: 100, gap: 40, w: 140, color: "#d7dade" })}
  <rect x="60" y="380" width="1480" height="20" fill="#d6d0c4"/>
</svg>`;

const hallway = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="#eef1f4"/>
  <polygon points="0,0 1600,0 1050,330 550,330" fill="#f8f9fa"/>
  <polygon points="0,1000 1600,1000 1050,640 550,640" fill="#c7ccd1"/>
  <polygon points="0,0 550,330 550,640 0,1000" fill="#dfe3e7"/>
  <polygon points="1600,0 1050,330 1050,640 1600,1000" fill="#dfe3e7"/>
  <rect x="550" y="330" width="500" height="310" fill="#e8ecef"/>
  ${[0, 1, 2, 3].map((i) => {
    const t = i / 4, t2 = (i + 0.8) / 4;
    const lx1 = 550 * t, lx2 = 550 * t2;
    const top1 = 330 * t + 60 * (1 - t), top2 = 330 * t2 + 60 * (1 - t2);
    const bot1 = 1000 - 360 * t - 120 * (1 - t), bot2 = 1000 - 360 * t2 - 120 * (1 - t2);
    const left = `<polygon points="${lx1},${top1} ${lx2},${top2} ${lx2},${bot2} ${lx1},${bot1}" fill="#4f7fa8"/>`;
    const right = `<polygon points="${1600 - lx1},${top1} ${1600 - lx2},${top2} ${1600 - lx2},${bot2} ${1600 - lx1},${bot1}" fill="#4f7fa8"/>`;
    return left + right;
  }).join("")}
  ${[0, 1, 2].map((i) => `<rect x="${740 - i * 120}" y="${40 + i * 70}" width="${120 + i * 240}" height="${12 - i * 3}" rx="4" fill="#ffffff"/>`).join("")}
</svg>`;

const gate = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs><linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f3c9a0"/><stop offset="1" stop-color="#f7ead9"/></linearGradient></defs>
  <rect width="${W}" height="${H}" fill="url(#sky2)"/>
  <rect x="0" y="560" width="${W}" height="440" fill="#9a9ea3"/>
  <rect x="200" y="420" width="1200" height="140" fill="#e2ddd3"/>
  ${doors({ y: 450, h: 110, count: 9, x0: 240, gap: 30, w: 100, color: "#cfd3d8" })}
  <rect x="100" y="470" width="1400" height="10" fill="#4b5058"/>
  <rect x="100" y="700" width="1400" height="10" fill="#4b5058"/>
  ${Array.from({ length: 36 }, (_, i) => `<rect x="${110 + i * 39}" y="470" width="6" height="240" fill="#4b5058"/>`).join("")}
  <rect x="80" y="420" width="26" height="300" fill="#3a3f46"/><rect x="1494" y="420" width="26" height="300" fill="#3a3f46"/>
  <rect x="1300" y="640" width="16" height="180" fill="#3a3f46"/>
  <rect x="1270" y="580" width="76" height="80" rx="8" fill="#2f343a"/>
  <rect x="1284" y="594" width="48" height="22" rx="3" fill="#7fd1a0"/>
  ${Array.from({ length: 6 }, (_, i) => `<circle cx="${1292 + (i % 3) * 16}" cy="${630 + Math.floor(i / 3) * 16}" r="5" fill="#cfd3d8"/>`).join("")}
</svg>`;

for (const [svg, name] of [[driveUp, "drive-up-row.jpg"], [hallway, "indoor-hallway.jpg"], [gate, "gate-entry.jpg"]]) {
  await sharp(Buffer.from(svg)).jpeg({ quality: 78, mozjpeg: true }).toFile(out(name));
  console.log("wrote", out(name));
}
