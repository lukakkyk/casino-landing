import { useIsomorphicLayoutEffect } from "@tamagui/constants";
import React from "react";
import { getConfig } from "../config.mjs";
import { ComponentContext } from "../contexts/ComponentContext.mjs";
import { GroupContext } from "../contexts/GroupContext.mjs";
import { useSplitStyles } from "../helpers/getSplitStyles.mjs";
import { subscribeToContextGroup } from "../helpers/subscribeToContextGroup.mjs";
import { View } from "../views/View.mjs";
import { useComponentState } from "./useComponentState.mjs";
import { mediaState } from "../helpers/mediaState.mjs";
import { useMedia } from "./useMedia.mjs";
import { useThemeWithState } from "./useTheme.mjs";
function useProps(props, opts) {
  const [propsOut, styleOut] = usePropsAndStyle(props, {
    ...opts,
    noExpand: !0,
    noNormalize: !0,
    resolveValues: "none"
  });
  return {
    ...propsOut,
    ...styleOut
  };
}
function useStyle(props, opts) {
  return usePropsAndStyle(props, opts)[1] || {};
}
function usePropsAndStyle(props, opts) {
  const staticConfig = opts?.forComponent?.staticConfig ?? View.staticConfig,
    [theme, themeState] = useThemeWithState({
      componentName: staticConfig.componentName,
      name: "theme" in props ? props.theme : void 0,
      needsUpdate() {
        return !0;
      }
    }),
    componentContext = React.useContext(ComponentContext),
    groupContext = React.useContext(GroupContext),
    {
      state,
      disabled,
      setStateShallow
    } = useComponentState(props, componentContext.animationDriver, staticConfig, getConfig()),
    mediaStateNow = opts?.noMedia ?
    // not safe to use mediaState but really marginal to hit this
    mediaState : useMedia(),
    splitStyles = useSplitStyles(props, staticConfig, theme, themeState?.name || "", state, {
      isAnimated: !1,
      mediaState: mediaStateNow,
      noSkip: !0,
      noMergeStyle: !0,
      noClass: !0,
      resolveValues: "auto",
      ...opts
    }, null, componentContext, groupContext),
    {
      mediaGroups,
      pseudoGroups
    } = splitStyles || {};
  return useIsomorphicLayoutEffect(() => {
    if (!disabled) {
      if (state.unmounted) {
        setStateShallow({
          unmounted: !1
        });
        return;
      }
      if (groupContext) return subscribeToContextGroup({
        groupContext,
        setStateShallow,
        mediaGroups,
        pseudoGroups
      });
    }
  }, [disabled, groupContext, pseudoGroups ? Object.keys([...pseudoGroups]).join("") : 0, mediaGroups ? Object.keys([...mediaGroups]).join("") : 0]), [splitStyles?.viewProps || {}, splitStyles?.style || {}, theme, mediaState];
}
export { useProps, usePropsAndStyle, useStyle };
//# sourceMappingURL=useProps.mjs.map
