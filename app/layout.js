import "./globals.css";

export const metadata = {
  title: "Climate-Controlled Storage in Lake City, FL | Lake City Self Storage",
  description:
    "Climate-controlled storage in Lake City, Florida for furniture, household belongings, moves, remodels, and more. Secure gated access, video surveillance, and easy online access to storage options.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
