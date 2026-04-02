import { useRef } from "react";
import { getThemeProxied } from "./getThemeProxied.mjs";
import { useThemeState } from "./useThemeState.mjs";
const EMPTY = {},
  useTheme = () => {
    "use no memo";

    const [theme] = useThemeWithState(EMPTY);
    return theme;
  },
  useThemeWithState = (props, isRoot = !1) => {
    "use no memo";

    const keys = useRef(null),
      schemeKeys = useRef(null),
      themeState = useThemeState(props, isRoot, keys, schemeKeys);
    return process.env.NODE_ENV === "development" && !props.passThrough && !themeState?.theme && process.env.TAMAGUI_DISABLE_NO_THEME_WARNING !== "1" && console.error(`[tamagui] No theme found, this could be due to an invalid theme name (given theme props ${JSON.stringify(props)}).

If this is intended and you are using Tamagui without any themes, you can disable this warning by setting the environment variable TAMAGUI_DISABLE_NO_THEME_WARNING=1`), [props.passThrough ? {} : getThemeProxied(props, themeState, keys, schemeKeys), themeState];
  };
export { useTheme, useThemeWithState };
//# sourceMappingURL=useTheme.mjs.map
