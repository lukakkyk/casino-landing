import { createTamagui } from "tamagui";
import { tokens } from "./tokens";

export const themes = {
  dark: {
    background: "#0B0F1A",
    color: "#FFFFFF",
  },
};

export const defaultTheme = "dark";

const config = createTamagui({
  tokens,
  themes,
  defaultTheme,
});

export default config;
