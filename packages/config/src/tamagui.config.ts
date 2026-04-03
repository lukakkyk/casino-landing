import { createTamagui } from "tamagui";
import { tokens } from "./tokens";
import { colors } from "./colors";

export const tamaguiConfig = createTamagui({
  tokens,
  themes: {
    app: {
      background: colors.background,
      color: colors.secondBackground,
    },
  },
  defaultTheme: "app",
});

export default tamaguiConfig;
