import { normalizeCSSColor, rgba } from "@tamagui/normalize-css-color";
const normalizeColor = (color, opacity) => {
    if (color) return typeof color != "string" ? color : color === "transparent" ? "rgba(0, 0, 0, 0)" : typeof opacity == "number" && opacity < 1 ? `color-mix(in srgb, ${color} ${Math.round(opacity * 100)}%, transparent)` : color;
  },
  getRgba = color => {
    if (typeof color != "string") return;
    const colorNum = normalizeCSSColor(color);
    if (colorNum != null) return rgba(colorNum);
  };
export { getRgba, normalizeColor };
//# sourceMappingURL=normalizeColor.mjs.map
