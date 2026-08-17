/** @type {import('next').NextConfig} */
// Keep analytics, map, image, and font origins explicit so the CSP stays easy to audit.
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uploads.website.storedge.com",
      },
    ],
    minimumCacheTTL: 86400,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive, nosnippet, noimageindex",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "no-referrer",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self' https://*.clarity.ms https://c.bing.com; img-src 'self' https://uploads.website.storedge.com https://*.clarity.ms https://c.bing.com https://*.google-analytics.com https://www.googletagmanager.com data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self' 'unsafe-inline' https://*.clarity.ms https://www.googletagmanager.com; connect-src 'self' https://*.clarity.ms https://c.bing.com https://*.google-analytics.com https://www.googletagmanager.com; font-src 'self' https://fonts.gstatic.com data:; frame-src https://www.google.com https://maps.google.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
