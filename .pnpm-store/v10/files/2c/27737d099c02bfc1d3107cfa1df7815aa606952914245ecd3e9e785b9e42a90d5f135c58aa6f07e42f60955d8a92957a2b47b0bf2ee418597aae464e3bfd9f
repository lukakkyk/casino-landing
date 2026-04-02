var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
    for (var name in all) __defProp(target, name, {
      get: all[name],
      enumerable: !0
    });
  },
  __copyProps = (to, from, except, desc) => {
    if (from && typeof from == "object" || typeof from == "function") for (let key of __getOwnPropNames(from)) !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
    return to;
  };
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: !0
}), mod);
var MenuPredefined_exports = {};
__export(MenuPredefined_exports, {
  MenuPredefined: () => MenuPredefined
});
module.exports = __toCommonJS(MenuPredefined_exports);
var import_image = require("@tamagui/image"),
  import_text = require("@tamagui/text"),
  import_web = require("@tamagui/web");
const GROUP_NAME = "MenuGroup",
  MenuGroup = (0, import_web.styled)(import_web.View, {
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
  MenuLabel = (0, import_web.styled)(import_text.SizableText, {
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
  MenuSeparator = (0, import_web.styled)(import_web.View, {
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
  MenuIcon = (0, import_web.styled)(import_web.View, {
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
  MenuImage = (0, import_web.styled)(import_image.Image, {
    name: "MenuImage"
  }),
  MenuIndicator = (0, import_web.styled)(import_web.View, {
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
  MenuItem = (0, import_web.styled)(import_web.View, {
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
  Title = (0, import_web.styled)(import_text.SizableText, {
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
  SubTitle = (0, import_web.styled)(import_text.SizableText, {
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