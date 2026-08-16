import "./globals.css";
import "./polish.css";

export const metadata = {
  title: "Climate-Controlled Storage in Lake City, FL | Lake City Self Storage",
  description:
    "Learn why climate-controlled storage can make sense for furniture, electronics, mattresses, documents, moving, remodeling, and household belongings. Compare popular climate-controlled sizes and view current availability at Lake City Self Storage.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
