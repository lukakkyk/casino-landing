import { createTokens } from "tamagui";

export const tokenValues = {
  color: {
    background: "#0B0F1A",
    surface: "#121826",
    surfaceHover: "#1A2235",
    textPrimary: "#FFFFFF",
    textSecondary: "#A7B0C0",
    accent: "#F5C451",
    success: "#22C55E",
    danger: "#EF4444",
  },

  space: {
    xs: 4,
    sm: 8,
    md: 12,
    true: 12,
    lg: 16,
    xl: 24,
    "2xl": 32,
  },

  size: {
    xs: 12,
    sm: 14,
    md: 16,
    true: 16,
    lg: 20,
    xl: 24,
    "2xl": 32,
  },

  radius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    true: 12,
  },

  zIndex: {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    true: 1,
  },
};

export const tokens = createTokens(tokenValues);
