import { Image } from "@tamagui/image";
import { SizableText } from "@tamagui/text";
import { styled, View } from "@tamagui/web";
var GROUP_NAME = "MenuGroup",
  MenuGroup = styled(View, {
    name: GROUP_NAME,
    variants: {
      unstyled: {
        false: {
          role: "group",
          width: "100%",
          borderRadius: 0,
          borderWidth: 0,
          borderColor: "$borderColor",
          overflow: "hidden",
          backgroundColor: "$background"
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  LABEL_NAME = "MenuLabel",
  MenuLabel = styled(SizableText, {
    name: LABEL_NAME,
    variants: {
      unstyled: {
        false: {
          cursor: "default",
          color: "$color"
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  SEPARATOR_NAME = "MenuSeparator",
  MenuSeparator = styled(View, {
    name: SEPARATOR_NAME,
    role: "separator",
    // @ts-ignore
    "aria-orientation": "horizontal",
    variants: {
      unstyled: {
        false: {
          borderColor: "$borderColor",
          flexShrink: 0,
          borderWidth: 0,
          height: 1,
          marginVertical: 3,
          marginHorizontal: 10,
          backgroundColor: "$borderColor"
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  MenuIcon = styled(View, {
    name: "MenuIcon",
    variants: {
      unstyled: {
        false: {
          width: 20,
          height: 20,
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "auto"
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  MenuImage = styled(Image, {
    name: "MenuImage"
  }),
  MenuIndicator = styled(View, {
    name: "MenuIndicator",
    variants: {
      unstyled: {
        false: {
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "auto"
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  MenuItem = styled(View, {
    name: "MenuItem",
    variants: {
      unstyled: {
        false: {
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          cursor: "pointer",
          borderRadius: 6,
          paddingVertical: 4,
          paddingHorizontal: 8,
          // use focusStyle for highlight since hover triggers focus via onPointerMove
          // this ensures a single unified highlight for both mouse and keyboard
          focusStyle: {
            backgroundColor: "$backgroundHover"
          },
          pressStyle: {
            backgroundColor: "$backgroundPress"
          }
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  Title = styled(SizableText, {
    name: "MenuTitle",
    variants: {
      unstyled: {
        false: {
          cursor: "default",
          color: "$color",
          flexGrow: 1,
          flexShrink: 1
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  SubTitle = styled(SizableText, {
    name: "MenuSubTitle",
    variants: {
      unstyled: {
        false: {
          cursor: "default",
          color: "$colorFaint"
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  MenuPredefined = {
    MenuIcon,
    MenuImage,
    MenuIndicator,
    MenuItem,
    Title,
    SubTitle,
    MenuGroup,
    MenuSeparator,
    MenuLabel
  };
export { MenuPredefined };
//# sourceMappingURL=MenuPredefined.native.js.map
