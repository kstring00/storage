import { STUDIO_URL } from "../lib/site";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="studio">
      <main>
        <h1>Page not found</h1>
        <p>This page doesn&apos;t exist. If you were sent a link, check that it was copied in full.</p>
        <a className="button" href={STUDIO_URL}>Go to stringhamwebdesign.com</a>
      </main>
    </div>
  );
}
