import { STUDIO_NAME, STUDIO_URL } from "../lib/site";

export const metadata = {
  title: STUDIO_NAME,
  description: "Websites for local businesses by Stringham Web Design.",
};

export default function StudioHome() {
  return (
    <div className="studio">
      <main>
        <h1>{STUDIO_NAME}</h1>
        <p>Websites for local businesses.</p>
        <a className="button" href={STUDIO_URL}>Visit stringhamwebdesign.com</a>
      </main>
    </div>
  );
}
