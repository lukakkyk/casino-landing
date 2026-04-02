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
var Input_native_exports = {};
__export(Input_native_exports, {
  Input: () => Input
});
module.exports = __toCommonJS(Input_native_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_react = __toESM(require("react"), 1),
  import_react_native = require("react-native"),
  import_core = require("@tamagui/core"),
  import_focusable = require("@tamagui/focusable"),
  import_element = require("@tamagui/element"),
  import_shared = require("./shared.native.js"),
  StyledInput = (0, import_core.styled)(import_react_native.TextInput, import_shared.styledBody[0], import_shared.styledBody[1]),
  Input = StyledInput.styleable(function (props, forwardedRef) {
    var {
        // Web props we need to convert
        type,
        disabled,
        readOnly,
        id,
        rows,
        autoComplete,
        enterKeyHint,
        // Callbacks
        onChange,
        onInput,
        onKeyDown,
        onChangeText,
        onSubmitEditing,
        onSelectionChange,
        onEndEditing,
        onContentSizeChange,
        onScroll,
        onKeyPress: onKeyPressProp,
        selection,
        // Native-only props (pass through directly)
        keyboardAppearance,
        returnKeyType: returnKeyTypeProp,
        submitBehavior,
        blurOnSubmit,
        caretHidden,
        contextMenuHidden,
        selectTextOnFocus,
        secureTextEntry: secureTextEntryProp,
        maxFontSizeMultiplier,
        allowFontScaling,
        multiline: multilineProp,
        keyboardType: keyboardTypeProp,
        inputMode: inputModeProp,
        autoCapitalize: autoCapitalizeProp,
        autoCorrect: autoCorrectProp,
        autoFocusNative,
        textContentType,
        // iOS-only props
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
        // Android-only props
        importantForAutofill,
        disableFullscreenUI,
        inlineImageLeft,
        inlineImagePadding,
        returnKeyLabel,
        textBreakStrategy,
        textAlignVertical,
        verticalAlign,
        showSoftInputOnFocus,
        numberOfLines: numberOfLinesProp,
        // Web-only props to filter out
        // @ts-ignore
        dirname,
        min,
        max,
        minLength,
        multiple,
        name,
        pattern,
        required,
        step,
        render,
        ...rest
      } = props,
      {
        ref,
        composedRef
      } = (0, import_element.useNativeInputRef)(forwardedRef),
      secureTextEntry = secureTextEntryProp ?? !1,
      keyboardType = keyboardTypeProp ?? "default",
      inputMode = inputModeProp;
    if (!secureTextEntryProp && !keyboardTypeProp && !inputModeProp) switch (type) {
      case "password":
        secureTextEntry = !0;
        break;
      case "email":
        keyboardType = "email-address", inputMode = "email";
        break;
      case "tel":
        keyboardType = "phone-pad", inputMode = "tel";
        break;
      case "number":
        keyboardType = "numeric", inputMode = "numeric";
        break;
      case "url":
        keyboardType = "url", inputMode = "url";
        break;
      case "search":
        inputMode = "search";
        break;
    }
    var returnKeyType = returnKeyTypeProp;
    if (!returnKeyType && enterKeyHint) switch (enterKeyHint) {
      case "done":
        returnKeyType = "done";
        break;
      case "go":
        returnKeyType = "go";
        break;
      case "next":
        returnKeyType = "next";
        break;
      case "search":
        returnKeyType = "search";
        break;
      case "send":
        returnKeyType = "send";
        break;
    }
    var multiline = multilineProp ?? (render === "textarea" || rows && rows > 1),
      numberOfLines = numberOfLinesProp ?? rows,
      autoCorrect = autoCorrectProp === "on" ? !0 : autoCorrectProp === "off" ? !1 : autoCorrectProp,
      autoCapitalize = autoCapitalizeProp === "on" ? "sentences" : autoCapitalizeProp === "off" ? "none" : autoCapitalizeProp;
    import_react.default.useEffect(function () {
      if (!(!id || disabled)) return (0, import_focusable.registerFocusable)(id, {
        focusAndSelect: function () {
          var _ref_current;
          return (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.focus();
        },
        focus: function () {
          var _ref_current;
          return (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.focus();
        }
      });
    }, [id, disabled]);
    var handleChangeText = function (text) {
        onChangeText?.(text), onChange && onChange({
          target: {
            value: text
          },
          type: "change"
        }), onInput && onInput({
          target: {
            value: text
          },
          type: "input"
        });
      },
      handleKeyPress = function (e) {
        if (onKeyPressProp?.(e), onKeyDown) {
          var {
            key
          } = e.nativeEvent;
          (key === "Backspace" || key === "Enter" || key.length === 1) && onKeyDown({
            key,
            type: "keydown"
          });
        }
      },
      handleSubmitEditing = function (e) {
        onKeyDown && onKeyDown({
          key: "Enter",
          type: "keydown"
        }), onSubmitEditing?.(e);
      },
      handleSelectionChange = function (e) {
        onSelectionChange?.(e);
      },
      finalProps = {
        ...rest,
        editable: !disabled && !readOnly,
        secureTextEntry,
        keyboardType,
        keyboardAppearance,
        inputMode,
        returnKeyType,
        multiline,
        numberOfLines,
        selection,
        autoComplete,
        autoFocus: autoFocusNative,
        // callbacks
        onChangeText: handleChangeText,
        onKeyPress: onKeyPressProp || onKeyDown ? handleKeyPress : void 0,
        onSubmitEditing: onKeyDown || onSubmitEditing ? handleSubmitEditing : void 0,
        onSelectionChange: onSelectionChange ? handleSelectionChange : void 0,
        onEndEditing,
        onContentSizeChange,
        onScroll,
        // cross-platform native props
        submitBehavior,
        blurOnSubmit,
        caretHidden,
        contextMenuHidden,
        selectTextOnFocus,
        maxFontSizeMultiplier,
        allowFontScaling,
        autoCapitalize,
        autoCorrect,
        textContentType,
        // iOS-only props
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
        // Android-only props
        importantForAutofill,
        disableFullscreenUI,
        inlineImageLeft,
        inlineImagePadding,
        returnKeyLabel,
        textBreakStrategy,
        textAlignVertical,
        verticalAlign,
        showSoftInputOnFocus
      };
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(StyledInput, {
      ref: composedRef,
      ...finalProps
    });
  });
//# sourceMappingURL=Input.native.js.map
