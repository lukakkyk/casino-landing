import { createTamagui } from "tamagui";
import { tokenValues, tokens } from "./tokens";

export const tamaguiConfig = createTamagui({
  tokens,
  themes: {
    app: {
      background: tokenValues.color.background,
      secondBackground: tokenValues.color.secondBackground,
      surface: tokenValues.color.surface,
      surfaceHover: tokenValues.color.surfaceHover,
      color: tokenValues.color.secondBackground,
      textPrimary: tokenValues.color.textPrimary,
      textSecondary: tokenValues.color.textSecondary,
      accent: tokenValues.color.accent,
      danger: tokenValues.color.danger,
      success: tokenValues.color.success,
    },
  },
  defaultTheme: "app",
});

export default tamaguiConfig;
