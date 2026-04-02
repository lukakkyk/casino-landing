import { tokens, themes as themesIn } from "@tamagui/themes/v3-themes";
import { animations } from "./v3-animations.native.js";
import { fonts } from "./fonts.native.js";
import { media, mediaQueryDefaultActive } from "./media.native.js";
import { animations as animations2 } from "./v3-animations.native.js";
import { tokens as tokens2, themes } from "@tamagui/themes/v3-themes";
import { fonts as fonts2 } from "./fonts.native.js";
import { media as media2, mediaQueryDefaultActive as mediaQueryDefaultActive2 } from "./media.native.js";
var _globalThis, _global;
(_globalThis = globalThis)[_global = "global"] || (_globalThis[_global] = globalThis);
var shorthands = {
    ussel: "userSelect",
    cur: "cursor",
    pe: "pointerEvents",
    col: "color",
    ff: "fontFamily",
    fos: "fontSize",
    fost: "fontStyle",
    fow: "fontWeight",
    ls: "letterSpacing",
    lh: "lineHeight",
    ta: "textAlign",
    tt: "textTransform",
    ww: "wordWrap",
    ac: "alignContent",
    ai: "alignItems",
    als: "alignSelf",
    b: "bottom",
    bg: "backgroundColor",
    bbc: "borderBottomColor",
    bblr: "borderBottomLeftRadius",
    bbrr: "borderBottomRightRadius",
    bbw: "borderBottomWidth",
    blc: "borderLeftColor",
    blw: "borderLeftWidth",
    bc: "borderColor",
    br: "borderRadius",
    bs: "borderStyle",
    brw: "borderRightWidth",
    brc: "borderRightColor",
    btc: "borderTopColor",
    btlr: "borderTopLeftRadius",
    btrr: "borderTopRightRadius",
    btw: "borderTopWidth",
    bw: "borderWidth",
    dsp: "display",
    f: "flex",
    fb: "flexBasis",
    fd: "flexDirection",
    fg: "flexGrow",
    fs: "flexShrink",
    fw: "flexWrap",
    h: "height",
    jc: "justifyContent",
    l: "left",
    m: "margin",
    mah: "maxHeight",
    maw: "maxWidth",
    mb: "marginBottom",
    mih: "minHeight",
    miw: "minWidth",
    ml: "marginLeft",
    mr: "marginRight",
    mt: "marginTop",
    mx: "marginHorizontal",
    my: "marginVertical",
    o: "opacity",
    ov: "overflow",
    p: "padding",
    pb: "paddingBottom",
    pl: "paddingLeft",
    pos: "position",
    pr: "paddingRight",
    pt: "paddingTop",
    px: "paddingHorizontal",
    py: "paddingVertical",
    r: "right",
    shac: "shadowColor",
    shar: "shadowRadius",
    shof: "shadowOffset",
    shop: "shadowOpacity",
    t: "top",
    w: "width",
    zi: "zIndex"
  },
  selectionStyles = function (theme) {
    return theme.color5 ? {
      backgroundColor: theme.color5,
      color: theme.color11
    } : null;
  },
  themes2 = process.env.TAMAGUI_OPTIMIZE_THEMES === "true" ? {} : themesIn,
  config = {
    animations,
    themes: themes2,
    media,
    shorthands,
    tokens,
    fonts,
    selectionStyles,
    settings: {
      mediaQueryDefaultActive,
      defaultFont: "body",
      fastSchemeChange: !0,
      shouldAddPrefersColorThemes: !0
    }
  };
export { animations2 as animations, config, fonts2 as fonts, media2 as media, mediaQueryDefaultActive2 as mediaQueryDefaultActive, selectionStyles, shorthands, themes, tokens2 as tokens };
//# sourceMappingURL=v3.native.js.map
