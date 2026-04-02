import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Adapt, AdaptParent, AdaptPortalContents, ProvideAdaptContext, useAdaptContext, useAdaptIsActive } from "@tamagui/adapt";
import { Animate } from "@tamagui/animate";
import { composeRefs, useComposedRefs } from "@tamagui/compose-refs";
import { isWeb, useIsomorphicLayoutEffect } from "@tamagui/constants";
import { createStyledContext, getExpandedShorthand, LayoutMeasurementController, styled, Theme, useThemeName, View } from "@tamagui/core";
import { createContext } from "@tamagui/create-context";
import { Dismissable } from "@tamagui/dismissable";
import { FocusScope, FocusScopeController } from "@tamagui/focus-scope";
import { composeEventHandlers, withStaticProperties } from "@tamagui/helpers";
import { needsPortalRepropagation, Portal, PortalItem, resolveViewZIndex } from "@tamagui/portal";
import { RemoveScroll } from "@tamagui/remove-scroll";
import { SheetController } from "@tamagui/sheet/controller";
import { ButtonNestingContext, ThemeableStack, YStack } from "@tamagui/stacks";
import { H2, Paragraph } from "@tamagui/text";
import { useControllableState } from "@tamagui/use-controllable-state";
import { StackZIndexContext } from "@tamagui/z-index-stack";
import * as React from "react";
function _instanceof(left, right) {
  return right != null && typeof Symbol < "u" && right[Symbol.hasInstance] ? !!right[Symbol.hasInstance](left) : left instanceof right;
}
var DialogContext = createStyledContext(
  // since we always provide this we can avoid setting here
  {}, "Dialog__"),
  {
    useStyledContext: useDialogContext,
    Provider: DialogProvider
  } = DialogContext,
  DialogTriggerFrame = styled(View, {
    name: "DialogTrigger"
  }),
  DialogTrigger = DialogTriggerFrame.styleable(function (props, forwardedRef) {
    var {
        scope,
        ...triggerProps
      } = props,
      isInsideButton = React.useContext(ButtonNestingContext),
      context = useDialogContext(scope),
      composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    return /* @__PURE__ */_jsx(ButtonNestingContext.Provider, {
      value: !0,
      children: /* @__PURE__ */_jsx(DialogTriggerFrame, {
        render: isInsideButton ? "span" : "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onPress: composeEventHandlers(props.onPress, context.onOpenToggle)
      })
    });
  }),
  DialogPortalFrame = styled(YStack, {
    pointerEvents: "none",
    render: "dialog",
    variants: {
      unstyled: {
        false: {
          alignItems: "center",
          justifyContent: "center",
          fullscreen: !0,
          "$platform-web": {
            // undo dialog styles
            borderWidth: 0,
            backgroundColor: "transparent",
            color: "inherit",
            maxInlineSize: "none",
            margin: 0,
            width: "auto",
            height: "auto",
            // ensure always in frame and right height
            maxHeight: "100vh",
            position: "fixed",
            // ensure dialog inherits stacking context from portal wrapper
            zIndex: 1
          }
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  needsRepropagation = needsPortalRepropagation(),
  DialogPortalItem = function (param) {
    var {
        context,
        children
      } = param,
      themeName = useThemeName(),
      isAdapted = useAdaptIsActive(context.adaptScope),
      adaptContext = useAdaptContext(context.adaptScope),
      content = /* @__PURE__ */_jsx(Theme, {
        name: themeName,
        children
      });
    return needsRepropagation && (content = /* @__PURE__ */_jsx(ProvideAdaptContext, {
      ...adaptContext,
      children: /* @__PURE__ */_jsx(DialogProvider, {
        ...context,
        children: content
      })
    })), isAdapted ? /* @__PURE__ */_jsx(AdaptPortalContents, {
      scope: context.adaptScope,
      children: content
    }) : context.modal ? /* @__PURE__ */_jsx(PortalItem, {
      hostName: context.modal ? "root" : context.adaptScope,
      children: content
    }) : content;
  },
  DialogPortal = /* @__PURE__ */React.forwardRef(function (props, forwardRef) {
    var {
        scope,
        forceMount,
        children,
        ...frameProps
      } = props,
      dialogRef = React.useRef(null),
      ref = composeRefs(dialogRef, forwardRef),
      context = useDialogContext(scope),
      keepMounted = forceMount || context.keepChildrenMounted,
      isAdapted = useAdaptIsActive(context.adaptScope),
      [isFullyHidden, setIsFullyHidden] = React.useState(!context.open);
    context.open && isFullyHidden && setIsFullyHidden(!1);
    var isVisible = context.open ? !0 : !isFullyHidden;
    isWeb && useIsomorphicLayoutEffect(function () {
      var node = dialogRef.current;
      if (_instanceof(node, HTMLDialogElement)) if (isVisible) {
        var _node_show;
        (_node_show = node.show) === null || _node_show === void 0 || _node_show.call(node);
      } else {
        var _node_close;
        (_node_close = node.close) === null || _node_close === void 0 || _node_close.call(node);
      }
    }, [isVisible]);
    var onAnimationCompleteRef = React.useRef(context.onAnimationComplete);
    onAnimationCompleteRef.current = context.onAnimationComplete;
    var handleExitComplete = React.useCallback(function () {
      var _onAnimationCompleteRef_current;
      setIsFullyHidden(!0), (_onAnimationCompleteRef_current = onAnimationCompleteRef.current) === null || _onAnimationCompleteRef_current === void 0 || _onAnimationCompleteRef_current.call(onAnimationCompleteRef, {
        open: !1
      });
    }, []);
    React.useEffect(function () {
      if (context.open && !isAdapted && onAnimationCompleteRef.current) {
        var tm = setTimeout(function () {
          var _onAnimationCompleteRef_current;
          (_onAnimationCompleteRef_current = onAnimationCompleteRef.current) === null || _onAnimationCompleteRef_current === void 0 || _onAnimationCompleteRef_current.call(onAnimationCompleteRef, {
            open: !0
          });
        }, 350);
        return function () {
          return clearTimeout(tm);
        };
      }
    }, [context.open, isAdapted]);
    var zIndex = getExpandedShorthand("zIndex", props),
      contents = /* @__PURE__ */_jsx(StackZIndexContext, {
        zIndex: resolveViewZIndex(zIndex),
        children: /* @__PURE__ */_jsx(Animate, {
          type: "presence",
          present: !!context.open,
          keepChildrenMounted: !!keepMounted,
          onExitComplete: handleExitComplete,
          passThrough: isAdapted,
          children
        })
      }),
      framedContents = isFullyHidden && !keepMounted && !isAdapted ? null : /* @__PURE__ */_jsx(LayoutMeasurementController, {
        disable: !context.open,
        children: /* @__PURE__ */_jsx(DialogPortalFrame, {
          ref,
          ...(isWeb && context.open && {
            "aria-modal": !0
          }),
          pointerEvents: context.open ? "auto" : "none",
          ...frameProps,
          className: "_no_backdrop " + (frameProps.className || ""),
          children: contents
        })
      });
    return isWeb ? /* @__PURE__ */_jsx(Portal, {
      zIndex,
      // set to 100000 which ensures dialogs are above most fixed UI (headers, navs)
      // this makes sure its above typical stacking contexts
      stackZIndex: 1e5,
      passThrough: isAdapted,
      children: /* @__PURE__ */_jsx(PassthroughTheme, {
        passThrough: isAdapted,
        children: framedContents
      })
    }) : isAdapted ? framedContents : /* @__PURE__ */_jsx(DialogPortalItem, {
      context,
      children: framedContents
    });
  }),
  PassthroughTheme = function (param) {
    var {
        children,
        passThrough
      } = param,
      themeName = useThemeName();
    return /* @__PURE__ */_jsx(Theme, {
      passThrough,
      name: themeName,
      forceClassName: !0,
      children
    });
  },
  OVERLAY_NAME = "DialogOverlay",
  DialogOverlayFrame = styled(YStack, {
    name: OVERLAY_NAME,
    zIndex: 1,
    variants: {
      open: {
        true: {
          pointerEvents: "auto"
        },
        false: {
          pointerEvents: "none"
        }
      },
      unstyled: {
        false: {
          fullscreen: !0,
          position: "absolute",
          backgroundColor: "$background",
          pointerEvents: "auto"
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  DialogOverlay = DialogOverlayFrame.styleable(function (param, forwardedRef) {
    var {
        scope,
        ...props
      } = param,
      context = useDialogContext(scope),
      {
        forceMount = context.forceMount,
        ...overlayProps
      } = props,
      isAdapted = useAdaptIsActive(context.adaptScope);
    return !forceMount && (!context.modal || isAdapted) ? null : /* @__PURE__ */_jsx(DialogOverlayFrame, {
      "data-state": getState(context.open),
      // TODO: this will be apply for v2
      // onPress={() => {
      //   // if the overlay is pressed, close the dialog
      //   context.onOpenChange(false)
      // }}
      // We re-enable pointer-events prevented by `Dialog.Content` to allow scrolling the overlay.
      pointerEvents: context.open ? "auto" : "none",
      ...overlayProps,
      ref: forwardedRef
    });
  }),
  CONTENT_NAME = "DialogContent",
  DialogContentFrame = styled(ThemeableStack, {
    name: CONTENT_NAME,
    zIndex: 2,
    variants: {
      size: {
        "...size": function (val, extras) {
          return {};
        }
      },
      unstyled: {
        false: {
          position: "relative",
          backgroundColor: "$background",
          borderWidth: 1,
          borderColor: "$borderColor",
          padding: "$true",
          borderRadius: "$true",
          elevate: !0,
          // Ensure content receives pointer events (fixes React 19 + display:contents inheritance)
          pointerEvents: "auto"
        }
      }
    },
    defaultVariants: {
      size: "$true",
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  DialogContent = DialogContentFrame.styleable(function (param, forwardedRef) {
    var {
        scope,
        ...props
      } = param,
      context = useDialogContext(scope),
      contents = /* @__PURE__ */_jsx(_Fragment, {
        children: context.modal ? /* @__PURE__ */_jsx(DialogContentModal, {
          context,
          ...props,
          ref: forwardedRef
        }) : /* @__PURE__ */_jsx(DialogContentNonModal, {
          context,
          ...props,
          ref: forwardedRef
        })
      });
    return !isWeb || context.disableRemoveScroll ? contents : /* @__PURE__ */_jsx(RemoveScroll, {
      enabled: context.open,
      children: /* @__PURE__ */_jsx("div", {
        "data-remove-scroll-container": !0,
        className: "_dsp_contents",
        children: contents
      })
    });
  }),
  DialogContentModal = /* @__PURE__ */React.forwardRef(function (param, forwardedRef) {
    var {
        children,
        context,
        ...props
      } = param,
      contentRef = React.useRef(null),
      composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
    return /* @__PURE__ */_jsx(DialogContentImpl, {
      ...props,
      context,
      ref: composedRefs,
      // we make sure focus isn't trapped once `DialogContent` has been closed
      // (closed !== unmounted when animating out)
      trapFocus: context.open,
      disableOutsidePointerEvents: !0,
      onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, function (event) {
        var _context_triggerRef_current;
        event.preventDefault(), (_context_triggerRef_current = context.triggerRef.current) === null || _context_triggerRef_current === void 0 || _context_triggerRef_current.focus();
      }),
      onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, function (event) {
        var originalEvent = event.detail.originalEvent,
          ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === !0,
          isRightClick = originalEvent.button === 2 || ctrlLeftClick;
        isRightClick && event.preventDefault();
      }),
      // When focus is trapped, a `focusout` event may still happen.
      // We make sure we don't trigger our `onDismiss` in such case.
      onFocusOutside: composeEventHandlers(props.onFocusOutside, function (event) {
        return event.preventDefault();
      }),
      ...(!props.unstyled && {
        outlineStyle: "none"
      }),
      children
    });
  }),
  DialogContentNonModal = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
    var hasInteractedOutsideRef = React.useRef(!1);
    return /* @__PURE__ */_jsx(DialogContentImpl, {
      ...props,
      ref: forwardedRef,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: function (event) {
        var _props_onCloseAutoFocus;
        if ((_props_onCloseAutoFocus = props.onCloseAutoFocus) === null || _props_onCloseAutoFocus === void 0 || _props_onCloseAutoFocus.call(props, event), !event.defaultPrevented) {
          if (!hasInteractedOutsideRef.current) {
            var _props_context_triggerRef_current;
            (_props_context_triggerRef_current = props.context.triggerRef.current) === null || _props_context_triggerRef_current === void 0 || _props_context_triggerRef_current.focus();
          }
          event.preventDefault();
        }
        hasInteractedOutsideRef.current = !1;
      },
      onInteractOutside: function (event) {
        var _props_onInteractOutside;
        (_props_onInteractOutside = props.onInteractOutside) === null || _props_onInteractOutside === void 0 || _props_onInteractOutside.call(props, event), event.defaultPrevented || (hasInteractedOutsideRef.current = !0);
        var target = event.target,
          trigger = props.context.triggerRef.current;
        if (_instanceof(trigger, HTMLElement)) {
          var targetIsTrigger = trigger.contains(target);
          targetIsTrigger && event.preventDefault();
        }
      }
    });
  }),
  DialogContentImpl = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
    var {
        trapFocus,
        onOpenAutoFocus,
        onCloseAutoFocus,
        disableOutsidePointerEvents,
        onEscapeKeyDown,
        onPointerDownOutside,
        onFocusOutside,
        onInteractOutside,
        context,
        ...contentProps
      } = props,
      contentRef = React.useRef(null),
      composedRefs = useComposedRefs(forwardedRef, contentRef),
      isAdapted = useAdaptIsActive(context.adaptScope);
    if (isAdapted) return !isWeb && !context.open ? null : /* @__PURE__ */_jsx(DialogPortalItem, {
      context,
      children: contentProps.children
    });
    var contents = /* @__PURE__ */_jsx(DialogContentFrame, {
      ref: composedRefs,
      id: context.contentId,
      role: "dialog",
      "aria-modal": context.modal,
      "aria-describedby": context.descriptionId,
      "aria-labelledby": context.titleId,
      "data-state": getState(context.open),
      // allow clicking through content during exit animation
      pointerEvents: context.open ? "auto" : "none",
      ...contentProps
    });
    return isWeb ? /* @__PURE__ */_jsxs(_Fragment, {
      children: [/* @__PURE__ */_jsx(Dismissable, {
        disableOutsidePointerEvents: context.open && disableOutsidePointerEvents,
        forceUnmount: !context.open,
        onEscapeKeyDown,
        onPointerDownOutside,
        onFocusOutside,
        onInteractOutside,
        onDismiss: function () {
          var _context_onOpenChange;
          return context == null || (_context_onOpenChange = context.onOpenChange) === null || _context_onOpenChange === void 0 ? void 0 : _context_onOpenChange.call(context, !1);
        },
        children: /* @__PURE__ */_jsx(FocusScope, {
          loop: !0,
          enabled: context.open,
          trapped: trapFocus,
          onMountAutoFocus: onOpenAutoFocus,
          forceUnmount: !context.open,
          onUnmountAutoFocus: onCloseAutoFocus,
          children: contents
        })
      }), process.env.NODE_ENV === "development" && /* @__PURE__ */_jsxs(_Fragment, {
        children: [/* @__PURE__ */_jsx(TitleWarning, {
          titleId: context.titleId
        }), /* @__PURE__ */_jsx(DescriptionWarning, {
          contentRef,
          descriptionId: context.descriptionId
        })]
      })]
    }) : contents;
  }),
  DialogTitleFrame = styled(H2, {
    name: "DialogTitle"
  }),
  DialogTitle = DialogTitleFrame.styleable(function (props, forwardedRef) {
    var {
        scope,
        ...titleProps
      } = props,
      context = useDialogContext(scope);
    return /* @__PURE__ */_jsx(DialogTitleFrame, {
      id: context.titleId,
      ...titleProps,
      ref: forwardedRef
    });
  }),
  DialogDescriptionFrame = styled(Paragraph, {
    name: "DialogDescription"
  }),
  DialogDescription = DialogDescriptionFrame.styleable(function (props, forwardedRef) {
    var {
        scope,
        ...descriptionProps
      } = props,
      context = useDialogContext(scope);
    return /* @__PURE__ */_jsx(DialogDescriptionFrame, {
      id: context.descriptionId,
      ...descriptionProps,
      ref: forwardedRef
    });
  }),
  CLOSE_NAME = "DialogClose",
  DialogCloseFrame = styled(View, {
    name: CLOSE_NAME,
    render: "button"
  }),
  DialogClose = DialogCloseFrame.styleable(function (props, forwardedRef) {
    var {
        scope,
        displayWhenAdapted,
        ...closeProps
      } = props,
      context = useDialogContext(scope),
      isAdapted = useAdaptIsActive(context.adaptScope),
      isInsideButton = React.useContext(ButtonNestingContext);
    return isAdapted && !displayWhenAdapted ? null : /* @__PURE__ */_jsx(DialogCloseFrame, {
      "aria-label": "Dialog Close",
      render: isInsideButton ? "span" : "button",
      ...closeProps,
      ref: forwardedRef,
      onPress: composeEventHandlers(props.onPress, function () {
        context.onOpenChange(!1);
      })
    });
  });
function getState(open) {
  return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning",
  [DialogWarningProvider, useWarningContext] = createContext(TITLE_WARNING_NAME, {
    contentName: CONTENT_NAME,
    titleName: "DialogTitle",
    docsSlug: "dialog"
  }),
  TitleWarning = function (param) {
    var {
      titleId
    } = param;
    if (process.env.NODE_ENV === "development") {
      var titleWarningContext = useWarningContext(TITLE_WARNING_NAME),
        MESSAGE = `\`${titleWarningContext.contentName}\` wants a \`${titleWarningContext.titleName}\` to be accessible. If you want to hide the \`${titleWarningContext.titleName}\`, wrap it with <VisuallyHidden />.`;
      React.useEffect(function () {
        if (isWeb && titleId) {
          var hasTitle = document.getElementById(titleId);
          hasTitle || console.warn(MESSAGE);
        }
      }, [MESSAGE, titleId]);
    }
    return null;
  },
  DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning",
  DescriptionWarning = function (param) {
    var {
      contentRef,
      descriptionId
    } = param;
    if (process.env.NODE_ENV === "development") {
      var descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME),
        MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
      React.useEffect(function () {
        if (isWeb) {
          var contentNode = contentRef.current;
          if (_instanceof(contentNode, HTMLElement)) {
            var describedById = contentNode.getAttribute("aria-describedby");
            if (descriptionId && describedById) {
              var hasDescription = document.getElementById(descriptionId);
              hasDescription || console.warn(MESSAGE);
            }
          }
        }
      }, [MESSAGE, contentRef, descriptionId]);
    }
    return null;
  },
  Dialog = withStaticProperties(/* @__PURE__ */React.forwardRef(function (props, ref) {
    var {
        scope = "",
        children,
        open: openProp,
        defaultOpen = !1,
        onOpenChange,
        modal = !0,
        keepChildrenMounted,
        disableRemoveScroll = !1,
        onAnimationComplete
      } = props,
      baseId = React.useId(),
      dialogId = `Dialog-${scope}-${baseId}`,
      contentId = `${dialogId}-content`,
      titleId = `${dialogId}-title`,
      descriptionId = `${dialogId}-description`,
      triggerRef = React.useRef(null),
      contentRef = React.useRef(null),
      [open, setOpen] = useControllableState({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
      }),
      onOpenToggle = React.useCallback(function () {
        setOpen(function (prevOpen) {
          return !prevOpen;
        });
      }, [setOpen]),
      adaptScope = `DialogAdapt${scope}`,
      context = {
        dialogScope: scope,
        adaptScope,
        triggerRef,
        contentRef,
        contentId,
        titleId,
        descriptionId,
        open,
        onOpenChange: setOpen,
        onOpenToggle,
        modal,
        keepChildrenMounted,
        disableRemoveScroll,
        onAnimationComplete
      };
    return React.useImperativeHandle(ref, function () {
      return {
        open: setOpen
      };
    }, [setOpen]), /* @__PURE__ */_jsx(AdaptParent, {
      scope: adaptScope,
      portal: {
        forwardProps: props
      },
      children: /* @__PURE__ */_jsx(DialogProvider, {
        scope,
        ...context,
        children: /* @__PURE__ */_jsx(DialogSheetController, {
          onOpenChange: setOpen,
          scope,
          children
        })
      })
    });
  }), {
    Trigger: DialogTrigger,
    Portal: DialogPortal,
    Overlay: DialogOverlay,
    Content: DialogContent,
    Title: DialogTitle,
    Description: DialogDescription,
    Close: DialogClose,
    FocusScope: FocusScopeController,
    Adapt
  });
var DialogSheetController = function (props) {
  var context = useDialogContext(props.scope),
    isAdapted = useAdaptIsActive(context.adaptScope);
  return /* @__PURE__ */_jsx(SheetController, {
    onOpenChange: function (val) {
      if (isAdapted) {
        var _props_onOpenChange;
        (_props_onOpenChange = props.onOpenChange) === null || _props_onOpenChange === void 0 || _props_onOpenChange.call(props, val);
      }
    },
    open: context.open,
    hidden: !isAdapted,
    children: props.children
  });
};
export { Dialog, DialogClose, DialogContent, DialogContext, DialogDescription, DialogOverlay, DialogOverlayFrame, DialogPortal, DialogPortalFrame, DialogProvider, DialogTitle, DialogTrigger, DialogWarningProvider, useDialogContext };
//# sourceMappingURL=Dialog.native.js.map
