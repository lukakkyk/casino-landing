import { YStack } from "@tamagui/stacks";
import { createStyledContext, styled, withStaticProperties } from "@tamagui/web";
const CardContext = createStyledContext({
    size: "$true"
  }),
  CardFrame = styled(YStack, {
    name: "Card",
    context: CardContext,
    variants: {
      unstyled: {
        false: {
          size: "$true",
          backgroundColor: "$background",
          position: "relative"
        }
      },
      size: {
        "...size": (val, {
          tokens
        }) => ({
          borderRadius: tokens.radius[val] ?? val
        })
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  CardHeader = styled(YStack, {
    name: "CardHeader",
    context: CardContext,
    variants: {
      unstyled: {
        false: {
          zIndex: 10,
          backgroundColor: "transparent",
          marginBottom: "auto"
        }
      },
      size: {
        "...size": (val, {
          tokens
        }) => ({
          padding: tokens.space[val] ?? val
        })
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  CardFooter = styled(CardHeader, {
    name: "CardFooter",
    variants: {
      unstyled: {
        false: {
          zIndex: 5,
          flexDirection: "row",
          marginTop: "auto",
          marginBottom: 0
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  CardBackground = styled(YStack, {
    name: "CardBackground",
    variants: {
      unstyled: {
        false: {
          zIndex: 0,
          fullscreen: !0,
          overflow: "hidden",
          pointerEvents: "none",
          padding: 0
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  Card = withStaticProperties(CardFrame, {
    Header: CardHeader,
    Footer: CardFooter,
    Background: CardBackground
  });
export { Card, CardBackground, CardFooter, CardFrame, CardHeader };
//# sourceMappingURL=Card.mjs.map
