import { ImageResponse } from "next/og";
import { getFacility, facilityStaticParams } from "../../lib/site";
import { storageTypesPhrase } from "../../lib/facility-schema.mjs";

// Per-facility social share image, built from the facility's name, location and colors.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Self storage concept site preview";

export function generateStaticParams() {
  return facilityStaticParams();
}

export default async function OpenGraphImage({ params }) {
  const { slug } = await params;
  const facility = getFacility(slug);
  const { colors, address } = facility;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: colors.primary,
          color: colors.onPrimary,
        }}
      >
        <div style={{ display: "flex", width: 120, height: 12, background: colors.accent, borderRadius: 6 }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>{facility.name}</div>
          <div style={{ fontSize: 38, marginTop: 24, opacity: 0.92 }}>
            {`${storageTypesPhrase(facility)} in ${address.city}, ${address.state}`}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, opacity: 0.9 }}>
          <span>{facility.phone}</span>
          <span>Concept by Stringham Web Design</span>
        </div>
      </div>
    ),
    size,
  );
}
