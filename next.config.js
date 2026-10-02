/** @type {import('next').NextConfig} */
const fs = require("node:fs");
const path = require("node:path");

// Allow next/image to optimize any remote photo or logo host used in facilities/*.json,
// so adding a facility never means editing this file.
function facilityImageHosts() {
  const dir = path.join(__dirname, "facilities");
  const hosts = new Set();
  for (const file of fs.readdirSync(dir).filter((name) => name.endsWith(".json"))) {
    const text = fs.readFileSync(path.join(dir, file), "utf8");
    for (const match of text.matchAll(/"src"\s*:\s*"https:\/\/([^/"]+)/g)) hosts.add(match[1]);
  }
  return [...hosts];
}

const imageHosts = facilityImageHosts();

const nextConfig = {
  images: {
    remotePatterns: imageHosts.map((hostname) => ({ protocol: "https", hostname })),
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
  },
  async redirects() {
    // Links already sent for the original Lake City concept keep working.
    return [
      { source: "/climate-controlled/:path*", destination: "/lake-city", permanent: false },
      { source: "/non-climate-control/:path*", destination: "/lake-city", permanent: false },
      { source: "/privacy", destination: "/lake-city/privacy", permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Belt and braces with the robots meta tag and robots.txt: demos must never be indexed.
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive, nosnippet, noimageindex" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              `img-src 'self' data: ${imageHosts.map((host) => `https://${host}`).join(" ")}`.trim(),
              "style-src 'self' 'unsafe-inline'",
              "script-src 'self' 'unsafe-inline'",
              "connect-src 'self'",
              "font-src 'self'",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "object-src 'none'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
