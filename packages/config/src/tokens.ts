import { createTokens } from "tamagui";

export const tokenValues = {
  space: {
    xs: 4,
    sm: 8,
    md: 12,
    true: 12,
    lg: 16,
    xl: 24,
    "2xl": 32,
    "3xl": 40,
  },
  size: {
    xs: 12,
    sm: 14,
    md: 16,
    true: 16,
    lg: 20,
    xl: 24,
    "2xl": 32,
    "3xl": 40,
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
