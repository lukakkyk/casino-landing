import { createTamagui } from "tamagui";
import { tokens } from "./tokens";

const config = createTamagui({
  tokens,
  themes: {
    app: {
      background: tokens.color.background,
      secondBackground: tokens.color.secondBackground,
      color: tokens.color.secondBackground,
      textPrimary: tokens.color.textPrimary,
      textSecondary: tokens.color.textSecondary,
      danger: tokens.color.danger,
      success: tokens.color.success,
      accent: tokens.color.textPrimary,
      surface: "#1A1F2E",
      surfaceHover: "#252B3D",
    },
  },
  defaultTheme: "app",
});

export default config;
