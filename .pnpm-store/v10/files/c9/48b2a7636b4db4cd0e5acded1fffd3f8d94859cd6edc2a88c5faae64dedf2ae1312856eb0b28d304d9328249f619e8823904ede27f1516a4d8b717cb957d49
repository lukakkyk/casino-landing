import { View, styled, useTheme } from "@tamagui/core";
import { registerFocusable } from "@tamagui/focusable";
import { useWebRef } from "@tamagui/element";
import React from "react";
import { styledBody } from "./shared.mjs";
import { jsx } from "react/jsx-runtime";
const StyledInput = styled(View, styledBody[0], styledBody[1]),
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
      } = useWebRef(_forwardedRef),
      theme = useTheme(),
      autoCorrect = autoCorrectProp === !0 ? "on" : autoCorrectProp === !1 ? "off" : autoCorrectProp,
      autoCapitalize = autoCapitalizeProp === "sentences" || autoCapitalizeProp === "words" ? "on" : autoCapitalizeProp === "none" || autoCapitalizeProp === "characters" ? "off" : autoCapitalizeProp;
    React.useEffect(() => {
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
    }, [onSelectionChange]), React.useEffect(() => {
      selection && ref.current && ref.current.setSelectionRange(selection.start, selection.end ?? selection.start);
    }, [selection?.start, selection?.end]), React.useEffect(() => {
      if (!(!id || disabled)) return registerFocusable(id, {
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
    return /* @__PURE__ */jsx(StyledInput, {
      ref: composedRef,
      ...finalProps
    });
  });
export { Input };
//# sourceMappingURL=Input.mjs.map
