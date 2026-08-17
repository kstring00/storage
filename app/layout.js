import "./globals.css";
import "./polish.css";
import CookieConsent from "./CookieConsent";

export const metadata = {
  title: "Climate-Controlled Storage in Lake City, FL | Lake City Self Storage",
  description:
    "Learn why climate-controlled storage can make sense for furniture, electronics, mattresses, documents, moving, remodeling, and household belongings. Compare popular climate-controlled sizes and view current availability at Lake City Self Storage.",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
      nosnippet: true,
      noimageindex: true,
    },
  },
  referrer: "no-referrer",
};

const clarityBootstrap = `
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  var saved=null;
  try{saved=c.localStorage.getItem("lcsc_analytics_consent");}catch(e){}
  c[a]("consentv2",{
    ad_Storage:"denied",
    analytics_Storage:saved==="granted"?"granted":"denied"
  });
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window,document,"clarity","script","y3uxc7af7u");
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: clarityBootstrap }} />
      </head>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
