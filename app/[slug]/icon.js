import { ImageResponse } from "next/og";
import { getFacility, facilityStaticParams } from "../../lib/site";

// Per-facility favicon: the facility's initials on its primary brand color.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export function generateStaticParams() {
  return facilityStaticParams();
}

function initials(name) {
  const words = name.replace(/self storage|storage/gi, "").trim().split(/\s+/).filter(Boolean);
  const source = words.length ? words : name.split(/\s+/);
  return source.slice(0, 2).map((w) => w[0].toUpperCase()).join("");
}

export default async function Icon({ params }) {
  const { slug } = await params;
  const facility = getFacility(slug);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: facility.colors.primary,
          color: facility.colors.onPrimary,
          borderRadius: 14,
          fontSize: 30,
          fontWeight: 700,
        }}
      >
        {initials(facility.name)}
      </div>
    ),
    size,
  );
}
