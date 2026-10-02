import "./globals.css";
import { SITE_URL } from "../lib/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Stringham Web Design",
  description: "Website design by Stringham Web Design.",
  // Every page on this deployment is a private concept. Never index any of it.
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
