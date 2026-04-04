var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../packages/config/src/tamagui.config.ts
var tamagui_config_exports = {};
__export(tamagui_config_exports, {
  default: () => tamagui_config_default,
  tamaguiConfig: () => tamaguiConfig
});
module.exports = __toCommonJS(tamagui_config_exports);

// ../../node_modules/.pnpm/tamagui@2.0.0-rc.36_react-dom@19.1.0_react@19.1.0__react-native-gesture-handler@2.28.0__1f9ec1701c174df583612023becc4208/node_modules/tamagui/dist/esm/createTamagui.mjs
var import_core = require("@tamagui/core");
var createTamagui = process.env.NODE_ENV !== "development" ? import_core.createTamagui : (conf) => {
  const sizeTokenKeys = ["$true"], hasKeys = /* @__PURE__ */ __name((expectedKeys, obj) => expectedKeys.every((k) => typeof obj[k] < "u"), "hasKeys"), tamaguiConfig2 = (0, import_core.createTamagui)(conf);
  for (const name of ["size", "space"]) {
    const tokenSet = tamaguiConfig2.tokensParsed[name];
    if (!tokenSet) throw new Error(`Expected tokens for "${name}" in ${Object.keys(tamaguiConfig2.tokensParsed).join(", ")}`);
    if (!hasKeys(sizeTokenKeys, tokenSet)) throw new Error(`
createTamagui() missing expected tokens.${name}:

Received: ${Object.keys(tokenSet).join(", ")}

Expected: ${sizeTokenKeys.join(", ")}

Tamagui expects a "true" key that is the same value as your default size. This is so 
it can size things up or down from the defaults without assuming which keys you use.

Please define a "true" or "$true" key on your size and space tokens like so (example):

size: {
  sm: 2,
  md: 10,
  true: 10, // this means "md" is your default size
  lg: 20,
}

`);
  }
  const expected = Object.keys(tamaguiConfig2.tokensParsed.size);
  for (const name of ["radius", "zIndex"]) {
    const tokenSet = tamaguiConfig2.tokensParsed[name], received = Object.keys(tokenSet);
    if (!received.some((rk) => expected.includes(rk))) throw new Error(`
createTamagui() invalid tokens.${name}:

Received: ${received.join(", ")}

Expected a subset of: ${expected.join(", ")}

`);
  }
  return tamaguiConfig2;
};

// ../../node_modules/.pnpm/tamagui@2.0.0-rc.36_react-dom@19.1.0_react@19.1.0__react-native-gesture-handler@2.28.0__1f9ec1701c174df583612023becc4208/node_modules/tamagui/dist/esm/index.mjs
var import_core2 = require("@tamagui/core");

// ../../packages/config/src/tokens.ts
var tokenValues = {
  space: {
    xs: 4,
    sm: 8,
    md: 12,
    true: 12,
    lg: 16,
    xl: 24,
    "2xl": 32,
    "3xl": 40
  },
  size: {
    xs: 12,
    sm: 14,
    md: 16,
    true: 16,
    lg: 20,
    xl: 24,
    "2xl": 32,
    "3xl": 40
  },
  radius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    true: 12
  },
  zIndex: {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    true: 1
  }
};
var tokens = (0, import_core2.createTokens)(tokenValues);

// ../../packages/config/src/colors.ts
var colors = {
  background: "#000000",
  secondBackground: "#FFFFFF",
  surface: "#1A1F2E",
  surfaceHover: "#252B3D",
  textPrimary: "#8734F8",
  textSecondary: "#FFFFFF99",
  accent: "#8734F8",
  danger: "#AD1840",
  success: "#44C231",
  glassBg: "rgba(255,255,255,0.13)",
  glassBorder: "rgba(255,255,255,0.08)",
  glassHoverBg: "rgba(255,255,255,0.22)",
  muted: "rgba(255,255,255,0.65)"
};

// ../../packages/config/src/tamagui.config.ts
var tamaguiConfig = createTamagui({
  tokens,
  themes: {
    app: {
      background: colors.background,
      color: colors.secondBackground
    }
  },
  defaultTheme: "app"
});
var tamagui_config_default = tamaguiConfig;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  tamaguiConfig
});
