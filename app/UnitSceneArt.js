// Reusable vector belongings used by the unit-size demonstration.
//
// One shared visual language: flat 2.5-D volumes, a single light source from the
// upper left (lighter top face, darker right face), rounded corners, and a fixed
// palette that sits next to the Lake City blue without competing with it.
//
// Every entry declares its intrinsic viewBox plus the width it should occupy in
// the scene's reference coordinate space (see UnitSelectionStack). Heights are
// derived from the viewBox so nothing is ever stretched.

const ART_META = {
  // ---- shared -----------------------------------------------------------
  boxTower: { viewBox: "0 0 130 160", width: 58 },
  totes: { viewBox: "0 0 130 104", width: 62 },

  // ---- climate-controlled household -------------------------------------
  decorStack: { viewBox: "0 0 140 130", width: 64 },
  bedSet: { viewBox: "0 0 180 118", width: 104 },
  desk: { viewBox: "0 0 160 118", width: 88 },
  bike: { viewBox: "0 0 172 116", width: 88 },
  dresser: { viewBox: "0 0 140 120", width: 68 },
  sofa: { viewBox: "0 0 200 118", width: 112 },
  fridge: { viewBox: "0 0 100 158", width: 50 },
  diningSet: { viewBox: "0 0 200 128", width: 104 },
  tv: { viewBox: "0 0 150 108", width: 66 },
  wardrobeBox: { viewBox: "0 0 100 158", width: 46 },

  // ---- drive-up / garage -------------------------------------------------
  mower: { viewBox: "0 0 180 128", width: 92 },
  toolChest: { viewBox: "0 0 140 140", width: 62 },
  ladder: { viewBox: "0 0 130 158", width: 52 },
  workbench: { viewBox: "0 0 190 140", width: 96 },
  wheelbarrow: { viewBox: "0 0 170 120", width: 82 },
  patioSet: { viewBox: "0 0 200 132", width: 100 },
  tires: { viewBox: "0 0 140 130", width: 58 },
  shelving: { viewBox: "0 0 170 158", width: 70 },
  yardTools: { viewBox: "0 0 130 158", width: 52 },
};

export const SCENE_ART = Object.fromEntries(
  Object.entries(ART_META).map(([key, meta]) => {
    const [, , vbWidth, vbHeight] = meta.viewBox.split(" ").map(Number);
    return [key, { ...meta, height: (meta.width * vbHeight) / vbWidth }];
  }),
);

export const ART_ID_PREFIX = "lcs-art-";

export function artId(key) {
  return `${ART_ID_PREFIX}${key}`;
}

/**
 * One sprite sheet per page. Rendered visually hidden; every scene item is a
 * `<use>` reference so repeated belongings cost nothing extra.
 */
export function SceneSprite({ className }) {
  return (
    <svg className={className} aria-hidden="true" focusable="false">
      <symbol id={artId("boxTower")} viewBox="0 0 130 160">
        <path d="M10 88h86v64H10z" fill="#c48a53" />
        <path d="M10 88 24 78h86L96 88z" fill="#dba871" />
        <path d="M96 88 110 78v64l-14 10z" fill="#a26f3d" />
        <path d="M53 88v64" stroke="#ab7648" strokeWidth="2.5" />
        <path d="M10 101h86" stroke="#b8804d" strokeWidth="2" />
        <path d="M20 48h62v40H20z" fill="#cf9660" />
        <path d="M20 48 34 38h62L82 48z" fill="#e4b47e" />
        <path d="M82 48 96 38v40l-14 10z" fill="#ab7743" />
        <path d="M51 48v40" stroke="#b07a49" strokeWidth="2.5" />
        <path d="M30 16h44v32H30z" fill="#c98f57" />
        <path d="M30 16 44 6h44L74 16z" fill="#deac76" />
        <path d="M74 16 88 6v32l-14 10z" fill="#a47040" />
        <path d="M52 16v32" stroke="#a97445" strokeWidth="2.5" />
      </symbol>

      <symbol id={artId("totes")} viewBox="0 0 130 104">
        <path d="M22 65h86l-8 35H30z" fill="#4b8dbd" />
        <path d="M16 50h98v12a3 3 0 0 1-3 3H19a3 3 0 0 1-3-3z" fill="#3d7aa6" />
        <path d="M34 25h62l-6 25H40z" fill="#5d9dc9" />
        <path d="M28 10h74v12a3 3 0 0 1-3 3H31a3 3 0 0 1-3-3z" fill="#4784b0" />
        <path d="M42 76h46" stroke="#3f7fac" strokeWidth="3" strokeLinecap="round" />
      </symbol>

      <symbol id={artId("decorStack")} viewBox="0 0 140 130">
        <path d="M50 60h72v58H50z" fill="#c48a53" />
        <path d="M50 60 64 50h72l-14 10z" fill="#dba871" />
        <path d="M122 60 136 50v58l-14 10z" fill="#a26f3d" />
        <path d="M86 60v58" stroke="#ab7648" strokeWidth="2.5" />
        <path d="M56 44h34l6 6H56z" fill="#7ba571" />
        <path d="M60 30h26v14H60z" fill="#5f8a58" />
        <path d="M12 118 17 46l40-6-3 78z" fill="#c9a97a" />
        <path d="M19 111 23 52l28-4-2 63z" fill="#7f95a6" />
        <path d="M22 100 33 79l8 12 7-9 1 22z" fill="#a7bcc9" />
      </symbol>

      <symbol id={artId("bedSet")} viewBox="0 0 180 118">
        <rect x="8" y="16" width="20" height="88" rx="4" fill="#8f6440" />
        <rect x="26" y="74" width="146" height="22" rx="4" fill="#5c7a90" />
        <rect x="26" y="48" width="146" height="28" rx="9" fill="#e7eef2" />
        <path d="M30 62h138" stroke="#cbd8e0" strokeWidth="2" />
        <rect x="38" y="34" width="52" height="18" rx="9" fill="#f4f8fa" />
        <rect x="36" y="96" width="9" height="14" rx="2" fill="#7d5636" />
        <rect x="152" y="96" width="9" height="14" rx="2" fill="#7d5636" />
      </symbol>

      <symbol id={artId("desk")} viewBox="0 0 160 118">
        <rect x="46" y="12" width="62" height="38" rx="4" fill="#33485c" />
        <rect x="51" y="17" width="52" height="28" rx="2" fill="#54748f" />
        <rect x="71" y="50" width="12" height="8" fill="#8e9aa4" />
        <rect x="8" y="58" width="146" height="12" rx="3" fill="#a97449" />
        <rect x="18" y="70" width="10" height="42" fill="#8a5c37" />
        <rect x="104" y="70" width="48" height="42" rx="2" fill="#96663f" />
        <path d="M104 84h48M104 98h48" stroke="#7d5330" strokeWidth="2.5" />
        <rect x="120" y="75" width="16" height="4" rx="2" fill="#dcb98f" />
      </symbol>

      <symbol id={artId("bike")} viewBox="0 0 172 116">
        <circle cx="34" cy="76" r="30" fill="none" stroke="#3c4c58" strokeWidth="6" />
        <circle cx="138" cy="76" r="30" fill="none" stroke="#3c4c58" strokeWidth="6" />
        <circle cx="34" cy="76" r="20" fill="none" stroke="#98a7b2" strokeWidth="2" />
        <circle cx="138" cy="76" r="20" fill="none" stroke="#98a7b2" strokeWidth="2" />
        <path
          d="M34 76h54M88 76 68 30M88 76l32-48M68 30l52-4M34 76l34-46M120 28l18 48"
          fill="none"
          stroke="#2f7fb4"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M56 26h24" stroke="#33485c" strokeWidth="7" strokeLinecap="round" />
        <path d="M110 18h26" stroke="#33485c" strokeWidth="6" strokeLinecap="round" />
        <path d="M120 28v-10" stroke="#33485c" strokeWidth="5" strokeLinecap="round" />
      </symbol>

      <symbol id={artId("dresser")} viewBox="0 0 140 120">
        <path d="M12 34h96v72H12z" fill="#a97449" />
        <path d="M12 34 28 22h96l-16 12z" fill="#c08e5f" />
        <path d="M108 34 124 22v72l-16 12z" fill="#8a5c37" />
        <rect x="20" y="42" width="80" height="17" rx="2" fill="#96663f" />
        <rect x="20" y="64" width="80" height="17" rx="2" fill="#96663f" />
        <rect x="20" y="86" width="80" height="17" rx="2" fill="#96663f" />
        <path d="M52 50h16M52 72h16M52 94h16" stroke="#e0bd93" strokeWidth="3" strokeLinecap="round" />
        <rect x="18" y="106" width="9" height="11" fill="#7a4f2e" />
        <rect x="93" y="106" width="9" height="11" fill="#7a4f2e" />
      </symbol>

      <symbol id={artId("sofa")} viewBox="0 0 200 118">
        <rect x="14" y="28" width="172" height="48" rx="12" fill="#5d7c92" />
        <rect x="8" y="48" width="28" height="52" rx="12" fill="#6f8ea6" />
        <rect x="164" y="48" width="28" height="52" rx="12" fill="#6f8ea6" />
        <rect x="30" y="62" width="140" height="34" rx="10" fill="#88a5b9" />
        <path d="M100 66v26" stroke="#6f8ea6" strokeWidth="3" strokeLinecap="round" />
        <rect x="34" y="98" width="10" height="14" rx="2" fill="#7d5636" />
        <rect x="156" y="98" width="10" height="14" rx="2" fill="#7d5636" />
      </symbol>

      <symbol id={artId("fridge")} viewBox="0 0 100 158">
        <path d="M12 22h60v122H12z" fill="#ccd5db" />
        <path d="M12 22 26 12h60L72 22z" fill="#e3e9ed" />
        <path d="M72 22 86 12v122l-14 10z" fill="#a9b6be" />
        <path d="M12 62h60" stroke="#9aa8b1" strokeWidth="3" />
        <rect x="60" y="32" width="5" height="24" rx="2.5" fill="#8d9ba4" />
        <rect x="60" y="70" width="5" height="32" rx="2.5" fill="#8d9ba4" />
      </symbol>

      <symbol id={artId("diningSet")} viewBox="0 0 200 128">
        <rect x="14" y="24" width="10" height="52" rx="3" fill="#8a5c37" />
        <rect x="8" y="70" width="44" height="9" rx="3" fill="#a97449" />
        <rect x="12" y="79" width="8" height="32" fill="#8a5c37" />
        <rect x="42" y="79" width="8" height="32" fill="#8a5c37" />
        <rect x="176" y="24" width="10" height="52" rx="3" fill="#8a5c37" />
        <rect x="148" y="70" width="44" height="9" rx="3" fill="#a97449" />
        <rect x="152" y="79" width="8" height="32" fill="#8a5c37" />
        <rect x="182" y="79" width="8" height="32" fill="#8a5c37" />
        <rect x="34" y="52" width="132" height="11" rx="3" fill="#b07c4f" />
        <rect x="46" y="63" width="10" height="46" fill="#8a5c37" />
        <rect x="144" y="63" width="10" height="46" fill="#8a5c37" />
        <rect x="46" y="102" width="108" height="7" rx="3" fill="#8a5c37" />
      </symbol>

      <symbol id={artId("tv")} viewBox="0 0 150 108">
        <rect x="6" y="10" width="138" height="76" rx="5" fill="#33485c" />
        <rect x="12" y="16" width="126" height="64" rx="2" fill="#4d6c86" />
        <rect x="64" y="86" width="22" height="9" fill="#8e9aa4" />
        <rect x="48" y="95" width="54" height="8" rx="4" fill="#7c8a95" />
      </symbol>

      <symbol id={artId("wardrobeBox")} viewBox="0 0 100 158">
        <path d="M12 26h62v116H12z" fill="#c48a53" />
        <path d="M12 26 26 16h62L74 26z" fill="#dba871" />
        <path d="M74 26 88 16v116l-14 10z" fill="#a26f3d" />
        <path d="M43 26v116" stroke="#ab7648" strokeWidth="2.5" />
        <rect x="28" y="54" width="28" height="8" rx="4" fill="#95653a" />
      </symbol>

      <symbol id={artId("mower")} viewBox="0 0 180 128">
        <path d="M104 66 150 20" stroke="#8e9aa4" strokeWidth="8" strokeLinecap="round" />
        <path d="M138 20h30" stroke="#8e9aa4" strokeWidth="8" strokeLinecap="round" />
        <rect x="18" y="62" width="102" height="36" rx="12" fill="#5f8a58" />
        <rect x="48" y="42" width="46" height="22" rx="5" fill="#3f5348" />
        <rect x="86" y="46" width="16" height="10" rx="3" fill="#8e9aa4" />
        <circle cx="40" cy="104" r="17" fill="#33414a" />
        <circle cx="40" cy="104" r="7" fill="#aab6bd" />
        <circle cx="104" cy="104" r="17" fill="#33414a" />
        <circle cx="104" cy="104" r="7" fill="#aab6bd" />
      </symbol>

      <symbol id={artId("toolChest")} viewBox="0 0 140 140">
        <path d="M14 36h96v76H14z" fill="#4d6c86" />
        <path d="M14 36 30 24h96l-16 12z" fill="#6a89a2" />
        <path d="M110 36 126 24v76l-16 12z" fill="#3d566c" />
        <path d="M14 58h96M14 78h96M14 96h96" stroke="#3d566c" strokeWidth="2.5" />
        <path d="M46 47h32M46 68h32M46 87h32M46 104h32" stroke="#bacdda" strokeWidth="4" strokeLinecap="round" />
        <circle cx="32" cy="121" r="9" fill="#33414a" />
        <circle cx="92" cy="121" r="9" fill="#33414a" />
      </symbol>

      <symbol id={artId("ladder")} viewBox="0 0 130 158">
        <path d="M30 148 54 16M98 148 74 16" stroke="#aab6bd" strokeWidth="8" strokeLinecap="round" />
        <path d="M50 46h28M45 80h38M39 114h50" stroke="#93a3ae" strokeWidth="7" strokeLinecap="round" />
        <rect x="50" y="8" width="28" height="10" rx="4" fill="#8e9aa4" />
      </symbol>

      <symbol id={artId("workbench")} viewBox="0 0 190 140">
        <rect x="24" y="10" width="140" height="46" rx="3" fill="#8496a3" />
        <path d="M52 22v20" stroke="#33414a" strokeWidth="4" strokeLinecap="round" />
        <rect x="42" y="16" width="22" height="7" rx="2" fill="#5f6f7b" />
        <path d="M94 24v22" stroke="#33414a" strokeWidth="4" strokeLinecap="round" />
        <circle cx="94" cy="19" r="6" fill="none" stroke="#5f6f7b" strokeWidth="4" />
        <path d="M134 22v22" stroke="#33414a" strokeWidth="4" strokeLinecap="round" />
        <path d="M125 44h18" stroke="#5f6f7b" strokeWidth="5" strokeLinecap="round" />
        <rect x="10" y="56" width="168" height="13" rx="3" fill="#a97449" />
        <rect x="22" y="69" width="12" height="52" fill="#8a5c37" />
        <rect x="154" y="69" width="12" height="52" fill="#8a5c37" />
        <rect x="22" y="97" width="144" height="9" fill="#8a5c37" />
      </symbol>

      <symbol id={artId("wheelbarrow")} viewBox="0 0 170 120">
        <path d="M22 40h108l-18 40H40z" fill="#93a3ae" />
        <path d="M22 40h108l-4 9H26z" fill="#bac5cc" />
        <path d="M124 54 158 92M112 76 148 104" stroke="#a97449" strokeWidth="7" strokeLinecap="round" />
        <path d="M96 80v20" stroke="#7d8d99" strokeWidth="6" strokeLinecap="round" />
        <circle cx="48" cy="96" r="17" fill="#33414a" />
        <circle cx="48" cy="96" r="7" fill="#aab6bd" />
      </symbol>

      <symbol id={artId("patioSet")} viewBox="0 0 200 132">
        <rect x="16" y="34" width="9" height="40" rx="4" fill="#8496a3" />
        <path d="M20 46h32M20 57h32" stroke="#8496a3" strokeWidth="5" strokeLinecap="round" />
        <rect x="10" y="72" width="46" height="8" rx="4" fill="#9fabb3" />
        <rect x="14" y="80" width="7" height="30" fill="#8496a3" />
        <rect x="46" y="80" width="7" height="30" fill="#8496a3" />
        <rect x="175" y="34" width="9" height="40" rx="4" fill="#8496a3" />
        <path d="M148 46h32M148 57h32" stroke="#8496a3" strokeWidth="5" strokeLinecap="round" />
        <rect x="144" y="72" width="46" height="8" rx="4" fill="#9fabb3" />
        <rect x="148" y="80" width="7" height="30" fill="#8496a3" />
        <rect x="180" y="80" width="7" height="30" fill="#8496a3" />
        <rect x="94" y="10" width="7" height="50" rx="3" fill="#7d8d99" />
        <path d="M97 4c9 8 12 22 9 34l-9 6-9-6c-3-12 0-26 9-34z" fill="#6f8ea6" />
        <path d="M36 66v4a62 12 0 0 0 124 0v-4z" fill="#a3aeb6" />
        <ellipse cx="98" cy="66" rx="62" ry="12" fill="#c6cfd5" />
        <rect x="92" y="74" width="10" height="34" fill="#8e9aa4" />
        <path d="M78 110h40" stroke="#8e9aa4" strokeWidth="7" strokeLinecap="round" />
      </symbol>

      <symbol id={artId("tires")} viewBox="0 0 140 130">
        <ellipse cx="70" cy="106" rx="56" ry="18" fill="#2f3b43" />
        <ellipse cx="70" cy="98" rx="56" ry="18" fill="#3c4a53" />
        <ellipse cx="70" cy="76" rx="56" ry="18" fill="#2f3b43" />
        <ellipse cx="70" cy="68" rx="56" ry="18" fill="#3c4a53" />
        <ellipse cx="70" cy="46" rx="56" ry="18" fill="#2f3b43" />
        <ellipse cx="70" cy="38" rx="56" ry="18" fill="#46545e" />
        <ellipse cx="70" cy="38" rx="22" ry="7" fill="#9dabb3" />
      </symbol>

      <symbol id={artId("shelving")} viewBox="0 0 170 158">
        <rect x="14" y="12" width="9" height="134" fill="#8e9aa4" />
        <rect x="147" y="12" width="9" height="134" fill="#8e9aa4" />
        <path d="M34 30h44l-4 28H38z" fill="#4b8dbd" />
        <rect x="30" y="24" width="52" height="8" rx="2" fill="#3d7aa6" />
        <path d="M96 34h40l-4 24h-32z" fill="#c48a53" />
        <path d="M34 78h50l-5 26H39z" fill="#5d9dc9" />
        <rect x="30" y="72" width="58" height="8" rx="2" fill="#4784b0" />
        <path d="M100 84h38l-4 20h-30z" fill="#c48a53" />
        <path d="M40 118h46l-4 22H44z" fill="#4b8dbd" />
        <rect x="10" y="12" width="150" height="8" rx="2" fill="#a8b3ba" />
        <rect x="10" y="58" width="150" height="8" rx="2" fill="#a8b3ba" />
        <rect x="10" y="104" width="150" height="8" rx="2" fill="#a8b3ba" />
        <rect x="10" y="140" width="150" height="8" rx="2" fill="#a8b3ba" />
      </symbol>

      <symbol id={artId("yardTools")} viewBox="0 0 130 158">
        <path d="M58 148 68 20" stroke="#a97449" strokeWidth="7" strokeLinecap="round" />
        <path d="M50 132h16v11c0 6-3 10-8 10s-8-4-8-10z" fill="#93a3ae" />
        <path d="M98 148 88 20" stroke="#a97449" strokeWidth="7" strokeLinecap="round" />
        <path d="M88 140h28" stroke="#8e9aa4" strokeWidth="6" strokeLinecap="round" />
        <path d="M92 140v10M100 140v10M108 140v10" stroke="#8e9aa4" strokeWidth="4" strokeLinecap="round" />
        <rect x="8" y="108" width="40" height="42" rx="5" fill="#9c5a4e" />
        <rect x="16" y="99" width="15" height="10" rx="3" fill="#7f473d" />
        <path d="M40 102 54 94" stroke="#7f473d" strokeWidth="6" strokeLinecap="round" />
      </symbol>
    </svg>
  );
}
