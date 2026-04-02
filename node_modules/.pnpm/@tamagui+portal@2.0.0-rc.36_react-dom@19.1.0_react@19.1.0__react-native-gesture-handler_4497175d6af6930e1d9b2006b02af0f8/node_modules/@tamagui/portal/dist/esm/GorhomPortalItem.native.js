import { jsx as _jsx } from "react/jsx-runtime";
import { useIsomorphicLayoutEffect } from "@tamagui/constants";
import { useEvent } from "@tamagui/core";
import { getPortal, NativePortal } from "@tamagui/native";
import { useEffect, useId } from "react";
import { usePortal } from "./GorhomPortal.native.js";
var GorhomPortalItem = function (props) {
    var {
        name: _providedName,
        hostName = "root",
        handleOnMount: _providedHandleOnMount,
        handleOnUnmount: _providedHandleOnUnmount,
        handleOnUpdate: _providedHandleOnUpdate,
        children,
        passThrough
      } = props,
      portalState = getPortal().state;
    return portalState.type === "teleport" ? passThrough ? children : /* @__PURE__ */_jsx(NativePortal, {
      hostName,
      children
    }) : /* @__PURE__ */_jsx(GorhomPortalItemFallback, {
      name: _providedName,
      hostName,
      handleOnMount: _providedHandleOnMount,
      handleOnUnmount: _providedHandleOnUnmount,
      handleOnUpdate: _providedHandleOnUpdate,
      passThrough,
      children
    });
  },
  GorhomPortalItemFallback = function (props) {
    var {
        name: _providedName,
        hostName,
        handleOnMount: _providedHandleOnMount,
        handleOnUnmount: _providedHandleOnUnmount,
        handleOnUpdate: _providedHandleOnUpdate,
        children,
        passThrough
      } = props,
      {
        addPortal: addUpdatePortal,
        removePortal
      } = usePortal(hostName),
      id = useId(),
      name = _providedName || id,
      handleOnMount = useEvent(function () {
        _providedHandleOnMount ? _providedHandleOnMount(function () {
          return addUpdatePortal(name, children);
        }) : addUpdatePortal(name, children);
      }),
      handleOnUnmount = useEvent(function () {
        _providedHandleOnUnmount ? _providedHandleOnUnmount(function () {
          return removePortal(name);
        }) : removePortal(name);
      }),
      handleOnUpdate = useEvent(function () {
        _providedHandleOnUpdate ? _providedHandleOnUpdate(function () {
          return addUpdatePortal(name, children);
        }) : addUpdatePortal(name, children);
      });
    return useIsomorphicLayoutEffect(function () {
      if (!passThrough) return handleOnMount(), function () {
        handleOnUnmount();
      };
    }, []), useEffect(function () {
      passThrough || handleOnUpdate();
    }, [children]), passThrough ? children : null;
  };
export { GorhomPortalItem };
//# sourceMappingURL=GorhomPortalItem.native.js.map
