var breakpoints = {
    // for container queries its really helpful to have small sizes
    100: 100,
    200: 200,
    xxxs: 260,
    xxs: 340,
    xs: 460,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536
  },
  mediaQueryForceNonOverlap = 1,
  media = {
    // always true on native
    touchable: {
      minWidth: 0
    },
    // always false on native (can't hover on touch)
    hoverable: {
      maxWidth: 0
    },
    // Max-width queries (desktop-first, ordered large-to-small so smaller wins)
    "max-xxl": {
      maxWidth: breakpoints.xxl - mediaQueryForceNonOverlap
    },
    "max-xl": {
      maxWidth: breakpoints.xl - mediaQueryForceNonOverlap
    },
    "max-lg": {
      maxWidth: breakpoints.lg - mediaQueryForceNonOverlap
    },
    "max-md": {
      maxWidth: breakpoints.md - mediaQueryForceNonOverlap
    },
    "max-sm": {
      maxWidth: breakpoints.sm - mediaQueryForceNonOverlap
    },
    "max-xs": {
      maxWidth: breakpoints.xs - mediaQueryForceNonOverlap
    },
    "max-xxs": {
      maxWidth: breakpoints.xxs - mediaQueryForceNonOverlap
    },
    "max-xxxs": {
      maxWidth: breakpoints.xxxs - mediaQueryForceNonOverlap
    },
    // for container queries its really helpful to have small sizes
    "max-200": {
      maxWidth: breakpoints[200] - mediaQueryForceNonOverlap
    },
    "max-100": {
      maxWidth: breakpoints[100] - mediaQueryForceNonOverlap
    },
    // Min-width queries (mobile-first)
    // non-max wins over max though tbh it could go either way
    xxxs: {
      minWidth: breakpoints.xxxs
    },
    xxs: {
      minWidth: breakpoints.xxs
    },
    xs: {
      minWidth: breakpoints.xs
    },
    sm: {
      minWidth: breakpoints.sm
    },
    md: {
      minWidth: breakpoints.md
    },
    lg: {
      minWidth: breakpoints.lg
    },
    xl: {
      minWidth: breakpoints.xl
    },
    xxl: {
      minWidth: breakpoints.xxl
    },
    // Height-based queries LAST so they override width queries when both match
    // (later in object = higher CSS specificity)
    // max-height ordered large-to-small so smaller wins (like max-width)
    "max-height-lg": {
      maxHeight: breakpoints.lg - mediaQueryForceNonOverlap
    },
    "max-height-md": {
      maxHeight: breakpoints.md - mediaQueryForceNonOverlap
    },
    "max-height-sm": {
      maxHeight: breakpoints.sm - mediaQueryForceNonOverlap
    },
    "max-height-xs": {
      maxHeight: breakpoints.xs - mediaQueryForceNonOverlap
    },
    "max-height-xxs": {
      maxHeight: breakpoints.xxs - mediaQueryForceNonOverlap
    },
    "max-height-xxxs": {
      maxHeight: breakpoints.xxxs - mediaQueryForceNonOverlap
    },
    "max-height-200": {
      maxHeight: breakpoints[200] - mediaQueryForceNonOverlap
    },
    "max-height-100": {
      maxHeight: breakpoints[100] - mediaQueryForceNonOverlap
    },
    "height-sm": {
      minHeight: breakpoints.sm
    },
    "height-md": {
      minHeight: breakpoints.md
    },
    "height-lg": {
      minHeight: breakpoints.lg
    }
  },
  mediaQueryDefaultActive = {
    touchable: !0,
    hoverable: !1,
    // Max queries
    "max-xxl": !0,
    "max-xl": !0,
    "max-lg": !0,
    "max-md": !0,
    "max-sm": !0,
    "max-xs": !0,
    "max-xxs": !1,
    "max-xxxs": !1,
    // Min queries
    xxxs: !0,
    xxs: !0,
    xs: !0,
    sm: !1,
    md: !1,
    lg: !1,
    xl: !1,
    xxl: !1,
    // Height queries (default: iPhone non-max ~844pt)
    "max-height-sm": !1,
    "max-height-md": !1,
    "max-height-lg": !0,
    "height-sm": !0,
    "height-md": !0,
    "height-lg": !1
  };
export { breakpoints, media, mediaQueryDefaultActive };
//# sourceMappingURL=v5-media.native.js.map
