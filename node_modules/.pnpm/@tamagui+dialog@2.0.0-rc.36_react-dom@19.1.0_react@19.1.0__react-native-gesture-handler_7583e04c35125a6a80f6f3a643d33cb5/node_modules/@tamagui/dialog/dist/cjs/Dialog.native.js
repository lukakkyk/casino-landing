"use strict";

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf,
  __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: !0
  }) : target, mod)),
  __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
    value: !0
  }), mod);
var Dialog_exports = {};
__export(Dialog_exports, {
  Dialog: () => Dialog,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContent,
  DialogContext: () => DialogContext,
  DialogDescription: () => DialogDescription,
  DialogOverlay: () => DialogOverlay,
  DialogOverlayFrame: () => DialogOverlayFrame,
  DialogPortal: () => DialogPortal,
  DialogPortalFrame: () => DialogPortalFrame,
  DialogProvider: () => DialogProvider,
  DialogTitle: () => DialogTitle,
  DialogTrigger: () => DialogTrigger,
  DialogWarningProvider: () => DialogWarningProvider,
  useDialogContext: () => useDialogContext
});
module.exports = __toCommonJS(Dialog_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_adapt = require("@tamagui/adapt"),
  import_animate = require("@tamagui/animate"),
  import_compose_refs = require("@tamagui/compose-refs"),
  import_constants = require("@tamagui/constants"),
  import_core = require("@tamagui/core"),
  import_create_context = require("@tamagui/create-context"),
  import_dismissable = require("@tamagui/dismissable"),
  import_focus_scope = require("@tamagui/focus-scope"),
  import_helpers = require("@tamagui/helpers"),
  import_portal = require("@tamagui/portal"),
  import_remove_scroll = require("@tamagui/remove-scroll"),
  import_controller = require("@tamagui/sheet/controller"),
  import_stacks = require("@tamagui/stacks"),
  import_text = require("@tamagui/text"),
  import_use_controllable_state = require("@tamagui/use-controllable-state"),
  import_z_index_stack = require("@tamagui/z-index-stack"),
  React = __toESM(require("react"), 1);
function _instanceof(left, right) {
  return right != null && typeof Symbol < "u" && right[Symbol.hasInstance] ? !!right[Symbol.hasInstance](left) : left instanceof right;
}
var DialogContext = (0, import_core.createStyledContext)(
  // since we always provide this we can avoid setting here
  {}, "Dialog__"),
  {
    useStyledContext: useDialogContext,
    Provider: DialogProvider
  } = DialogContext,
  DialogTriggerFrame = (0, import_core.styled)(import_core.View, {
    name: "DialogTrigger"
  }),
  DialogTrigger = DialogTriggerFrame.styleable(function (props, forwardedRef) {
    var {
        scope,
        ...triggerProps
      } = props,
      isInsideButton = React.useContext(import_stacks.ButtonNestingContext),
      context = useDialogContext(scope),
      composedTriggerRef = (0, import_compose_refs.useComposedRefs)(forwardedRef, context.triggerRef);
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_stacks.ButtonNestingContext.Provider, {
      value: !0,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(DialogTriggerFrame, {
        render: isInsideButton ? "span" : "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onPress: (0, import_helpers.composeEventHandlers)(props.onPress, context.onOpenToggle)
      })
    });
  }),
  DialogPortalFrame = (0, import_core.styled)(import_stacks.YStack, {
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
  needsRepropagation = (0, import_portal.needsPortalRepropagation)(),
  DialogPortalItem = function (param) {
    var {
        context,
        children
      } = param,
      themeName = (0, import_core.useThemeName)(),
      isAdapted = (0, import_adapt.useAdaptIsActive)(context.adaptScope),
      adaptContext = (0, import_adapt.useAdaptContext)(context.adaptScope),
      content = /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_core.Theme, {
        name: themeName,
        children
      });
    return needsRepropagation && (content = /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_adapt.ProvideAdaptContext, {
      ...adaptContext,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(DialogProvider, {
        ...context,
        children: content
      })
    })), isAdapted ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_adapt.AdaptPortalContents, {
      scope: context.adaptScope,
      children: content
    }) : context.modal ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_portal.PortalItem, {
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
      ref = (0, import_compose_refs.composeRefs)(dialogRef, forwardRef),
      context = useDialogContext(scope),
      keepMounted = forceMount || context.keepChildrenMounted,
      isAdapted = (0, import_adapt.useAdaptIsActive)(context.adaptScope),
      [isFullyHidden, setIsFullyHidden] = React.useState(!context.open);
    context.open && isFullyHidden && setIsFullyHidden(!1);
    var isVisible = context.open ? !0 : !isFullyHidden;
    import_constants.isWeb && (0, import_constants.useIsomorphicLayoutEffect)(function () {
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
    var zIndex = (0, import_core.getExpandedShorthand)("zIndex", props),
      contents = /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_z_index_stack.StackZIndexContext, {
        zIndex: (0, import_portal.resolveViewZIndex)(zIndex),
        children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_animate.Animate, {
          type: "presence",
          present: !!context.open,
          keepChildrenMounted: !!keepMounted,
          onExitComplete: handleExitComplete,
          passThrough: isAdapted,
          children
        })
      }),
      framedContents = isFullyHidden && !keepMounted && !isAdapted ? null : /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_core.LayoutMeasurementController, {
        disable: !context.open,
        children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(DialogPortalFrame, {
          ref,
          ...(import_constants.isWeb && context.open && {
            "aria-modal": !0
          }),
          pointerEvents: context.open ? "auto" : "none",
          ...frameProps,
          className: "_no_backdrop " + (frameProps.className || ""),
          children: contents
        })
      });
    return import_constants.isWeb ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_portal.Portal, {
      zIndex,
      // set to 100000 which ensures dialogs are above most fixed UI (headers, navs)
      // this makes sure its above typical stacking contexts
      stackZIndex: 1e5,
      passThrough: isAdapted,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(PassthroughTheme, {
        passThrough: isAdapted,
        children: framedContents
      })
    }) : isAdapted ? framedContents : /* @__PURE__ */(0, import_jsx_runtime.jsx)(DialogPortalItem, {
      context,
      children: framedContents
    });
  }),
  PassthroughTheme = function (param) {
    var {
        children,
        passThrough
      } = param,
      themeName = (0, import_core.useThemeName)();
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_core.Theme, {
      passThrough,
      name: themeName,
      forceClassName: !0,
      children
    });
  },
  OVERLAY_NAME = "DialogOverlay",
  DialogOverlayFrame = (0, import_core.styled)(import_stacks.YStack, {
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
      isAdapted = (0, import_adapt.useAdaptIsActive)(context.adaptScope);
    return !forceMount && (!context.modal || isAdapted) ? null : /* @__PURE__ */(0, import_jsx_runtime.jsx)(DialogOverlayFrame, {
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
  DialogContentFrame = (0, import_core.styled)(import_stacks.ThemeableStack, {
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
      contents = /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
        children: context.modal ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(DialogContentModal, {
          context,
          ...props,
          ref: forwardedRef
        }) : /* @__PURE__ */(0, import_jsx_runtime.jsx)(DialogContentNonModal, {
          context,
          ...props,
          ref: forwardedRef
        })
      });
    return !import_constants.isWeb || context.disableRemoveScroll ? contents : /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_remove_scroll.RemoveScroll, {
      enabled: context.open,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)("div", {
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
      composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, context.contentRef, contentRef);
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(DialogContentImpl, {
      ...props,
      context,
      ref: composedRefs,
      // we make sure focus isn't trapped once `DialogContent` has been closed
      // (closed !== unmounted when animating out)
      trapFocus: context.open,
      disableOutsidePointerEvents: !0,
      onCloseAutoFocus: (0, import_helpers.composeEventHandlers)(props.onCloseAutoFocus, function (event) {
        var _context_triggerRef_current;
        event.preventDefault(), (_context_triggerRef_current = context.triggerRef.current) === null || _context_triggerRef_current === void 0 || _context_triggerRef_current.focus();
      }),
      onPointerDownOutside: (0, import_helpers.composeEventHandlers)(props.onPointerDownOutside, function (event) {
        var originalEvent = event.detail.originalEvent,
          ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === !0,
          isRightClick = originalEvent.button === 2 || ctrlLeftClick;
        isRightClick && event.preventDefault();
      }),
      // When focus is trapped, a `focusout` event may still happen.
      // We make sure we don't trigger our `onDismiss` in such case.
      onFocusOutside: (0, import_helpers.composeEventHandlers)(props.onFocusOutside, function (event) {
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
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(DialogContentImpl, {
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
      composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, contentRef),
      isAdapted = (0, import_adapt.useAdaptIsActive)(context.adaptScope);
    if (isAdapted) return !import_constants.isWeb && !context.open ? null : /* @__PURE__ */(0, import_jsx_runtime.jsx)(DialogPortalItem, {
      context,
      children: contentProps.children
    });
    var contents = /* @__PURE__ */(0, import_jsx_runtime.jsx)(DialogContentFrame, {
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
    return import_constants.isWeb ? /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: [/* @__PURE__ */(0, import_jsx_runtime.jsx)(import_dismissable.Dismissable, {
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
        children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_focus_scope.FocusScope, {
          loop: !0,
          enabled: context.open,
          trapped: trapFocus,
          onMountAutoFocus: onOpenAutoFocus,
          forceUnmount: !context.open,
          onUnmountAutoFocus: onCloseAutoFocus,
          children: contents
        })
      }), process.env.NODE_ENV === "development" && /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
        children: [/* @__PURE__ */(0, import_jsx_runtime.jsx)(TitleWarning, {
          titleId: context.titleId
        }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(DescriptionWarning, {
          contentRef,
          descriptionId: context.descriptionId
        })]
      })]
    }) : contents;
  }),
  DialogTitleFrame = (0, import_core.styled)(import_text.H2, {
    name: "DialogTitle"
  }),
  DialogTitle = DialogTitleFrame.styleable(function (props, forwardedRef) {
    var {
        scope,
        ...titleProps
      } = props,
      context = useDialogContext(scope);
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(DialogTitleFrame, {
      id: context.titleId,
      ...titleProps,
      ref: forwardedRef
    });
  }),
  DialogDescriptionFrame = (0, import_core.styled)(import_text.Paragraph, {
    name: "DialogDescription"
  }),
  DialogDescription = DialogDescriptionFrame.styleable(function (props, forwardedRef) {
    var {
        scope,
        ...descriptionProps
      } = props,
      context = useDialogContext(scope);
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(DialogDescriptionFrame, {
      id: context.descriptionId,
      ...descriptionProps,
      ref: forwardedRef
    });
  }),
  CLOSE_NAME = "DialogClose",
  DialogCloseFrame = (0, import_core.styled)(import_core.View, {
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
      isAdapted = (0, import_adapt.useAdaptIsActive)(context.adaptScope),
      isInsideButton = React.useContext(import_stacks.ButtonNestingContext);
    return isAdapted && !displayWhenAdapted ? null : /* @__PURE__ */(0, import_jsx_runtime.jsx)(DialogCloseFrame, {
      "aria-label": "Dialog Close",
      render: isInsideButton ? "span" : "button",
      ...closeProps,
      ref: forwardedRef,
      onPress: (0, import_helpers.composeEventHandlers)(props.onPress, function () {
        context.onOpenChange(!1);
      })
    });
  });
function getState(open) {
  return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning",
  [DialogWarningProvider, useWarningContext] = (0, import_create_context.createContext)(TITLE_WARNING_NAME, {
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
        if (import_constants.isWeb && titleId) {
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
        if (import_constants.isWeb) {
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
  Dialog = (0, import_helpers.withStaticProperties)(/* @__PURE__ */React.forwardRef(function (props, ref) {
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
      [open, setOpen] = (0, import_use_controllable_state.useControllableState)({
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
    }, [setOpen]), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_adapt.AdaptParent, {
      scope: adaptScope,
      portal: {
        forwardProps: props
      },
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(DialogProvider, {
        scope,
        ...context,
        children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(DialogSheetController, {
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
    FocusScope: import_focus_scope.FocusScopeController,
    Adapt: import_adapt.Adapt
  });
var DialogSheetController = function (props) {
  var context = useDialogContext(props.scope),
    isAdapted = (0, import_adapt.useAdaptIsActive)(context.adaptScope);
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_controller.SheetController, {
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
//# sourceMappingURL=Dialog.native.js.map
