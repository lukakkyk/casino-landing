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
var Input_exports = {};
__export(Input_exports, {
  Input: () => Input
});
module.exports = __toCommonJS(Input_exports);
var import_core = require("@tamagui/core"),
  import_focusable = require("@tamagui/focusable"),
  import_element = require("@tamagui/element"),
  import_react = __toESM(require("react"), 1),
  import_shared = require("./shared.cjs"),
  import_jsx_runtime = require("react/jsx-runtime");
const StyledInput = (0, import_core.styled)(import_core.View, import_shared.styledBody[0], import_shared.styledBody[1]),
  Input = StyledInput.styleable((props, _forwardedRef) => {
    const {
        disabled,
        id,
        onChangeText,
        onSubmitEditing,
        onSelectionChange,
        selection,
        placeholderTextColor,
        selectionColor,
        rows,
        // Native-only props (ignored on web)
        keyboardAppearance,
        returnKeyType,
        submitBehavior,
        blurOnSubmit,
        caretHidden,
        contextMenuHidden,
        selectTextOnFocus,
        secureTextEntry,
        maxFontSizeMultiplier,
        allowFontScaling,
        multiline,
        keyboardType,
        autoCapitalize: autoCapitalizeProp,
        autoCorrect: autoCorrectProp,
        autoFocusNative,
        textContentType,
        onEndEditing,
        onContentSizeChange,
        onScroll,
        onKeyPress,
        // iOS-only props (ignored on web)
        clearButtonMode,
        clearTextOnFocus,
        enablesReturnKeyAutomatically,
        dataDetectorTypes,
        scrollEnabled,
        passwordRules,
        rejectResponderTermination,
        spellCheck,
        lineBreakStrategyIOS,
        lineBreakModeIOS,
        smartInsertDelete,
        inputAccessoryViewID,
        inputAccessoryViewButtonLabel,
        disableKeyboardShortcuts,
        // Android-only props (ignored on web)
        cursorColor,
        selectionHandleColor,
        underlineColorAndroid,
        importantForAutofill,
        disableFullscreenUI,
        inlineImageLeft,
        inlineImagePadding,
        returnKeyLabel,
        textBreakStrategy,
        textAlignVertical,
        verticalAlign,
        showSoftInputOnFocus,
        numberOfLines,
        ...rest
      } = props,
      {
        ref,
        composedRef
      } = (0, import_element.useWebRef)(_forwardedRef),
      theme = (0, import_core.useTheme)(),
      autoCorrect = autoCorrectProp === !0 ? "on" : autoCorrectProp === !1 ? "off" : autoCorrectProp,
      autoCapitalize = autoCapitalizeProp === "sentences" || autoCapitalizeProp === "words" ? "on" : autoCapitalizeProp === "none" || autoCapitalizeProp === "characters" ? "off" : autoCapitalizeProp;
    import_react.default.useEffect(() => {
      if (!onSelectionChange) return;
      const node = ref.current;
      if (!node) return;
      const handleSelectionChange = () => {
        onSelectionChange({
          nativeEvent: {
            selection: {
              start: node.selectionStart ?? 0,
              end: node.selectionEnd ?? 0
            }
          }
        });
      };
      return node.addEventListener("select", handleSelectionChange), () => node.removeEventListener("select", handleSelectionChange);
    }, [onSelectionChange]), import_react.default.useEffect(() => {
      selection && ref.current && ref.current.setSelectionRange(selection.start, selection.end ?? selection.start);
    }, [selection?.start, selection?.end]), import_react.default.useEffect(() => {
      if (!(!id || disabled)) return (0, import_focusable.registerFocusable)(id, {
        focusAndSelect: () => ref.current?.focus(),
        focus: () => ref.current?.focus()
      });
    }, [id, disabled]);
    const handleKeyDown = e => {
        e.key === "Enter" && onSubmitEditing && onSubmitEditing({
          nativeEvent: {
            text: e.target.value
          }
        }), rest.onKeyDown?.(e);
      },
      handleChange = e => {
        onChangeText?.(e.target.value), rest.onChange?.(e);
      },
      finalProps = {
        ...rest,
        disabled,
        id,
        rows,
        autoCorrect,
        autoCapitalize,
        onKeyDown: onSubmitEditing ? handleKeyDown : rest.onKeyDown,
        onChange: onChangeText ? handleChange : rest.onChange,
        style: {
          ...rest.style,
          ...(placeholderTextColor && {
            "--placeholderColor": theme[placeholderTextColor]?.variable || placeholderTextColor
          }),
          ...(selectionColor && {
            "--selectionColor": theme[selectionColor]?.variable || selectionColor
          })
        }
      };
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(StyledInput, {
      ref: composedRef,
      ...finalProps
    });
  });