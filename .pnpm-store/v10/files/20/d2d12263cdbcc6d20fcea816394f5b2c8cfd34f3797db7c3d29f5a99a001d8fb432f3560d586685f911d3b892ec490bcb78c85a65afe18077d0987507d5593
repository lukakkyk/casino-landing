import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { TextInput } from "react-native";
import { styled } from "@tamagui/core";
import { registerFocusable } from "@tamagui/focusable";
import { useNativeInputRef } from "@tamagui/element";
import { styledBody } from "./shared.native.js";
var StyledInput = styled(TextInput, styledBody[0], styledBody[1]),
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
      } = useNativeInputRef(forwardedRef),
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
    React.useEffect(function () {
      if (!(!id || disabled)) return registerFocusable(id, {
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
    return /* @__PURE__ */_jsx(StyledInput, {
      ref: composedRef,
      ...finalProps
    });
  });
export { Input };
//# sourceMappingURL=Input.native.js.map
