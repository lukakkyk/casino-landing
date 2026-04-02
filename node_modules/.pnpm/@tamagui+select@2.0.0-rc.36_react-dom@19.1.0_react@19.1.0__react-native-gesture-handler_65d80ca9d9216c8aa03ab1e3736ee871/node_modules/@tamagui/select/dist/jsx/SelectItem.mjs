import { useComposedRefs } from "@tamagui/compose-refs";
import { isWeb, useIsomorphicLayoutEffect } from "@tamagui/constants";
import { createStyledContext } from "@tamagui/core";
import { ListItem } from "@tamagui/list-item";
import * as React from "react";
import { useSelectItemParentContext } from "./context.mjs";
import { jsx } from "react/jsx-runtime";
const ITEM_NAME = "SelectItem",
  {
    Provider: SelectItemContextProvider,
    useStyledContext: useSelectItemContext
  } = createStyledContext(null, ITEM_NAME),
  SelectItem = ListItem.Frame.styleable(function (props, forwardedRef) {
    const {
        scope,
        value,
        disabled = !1,
        textValue: textValueProp,
        index,
        ...restProps
      } = props,
      context = useSelectItemParentContext(scope),
      {
        setSelectedIndex,
        listRef,
        setOpen,
        onChange,
        activeIndexSubscribe,
        activeIndexRef,
        valueSubscribe,
        allowMouseUpRef,
        allowSelectRef,
        setValueAtIndex,
        selectTimeoutRef,
        dataRef,
        interactions,
        shouldRenderWebNative,
        size,
        onActiveChange,
        initialValue,
        setActiveIndexFast
      } = context,
      [isSelected, setSelected] = React.useState(initialValue === value);
    useIsomorphicLayoutEffect(() => {
      initialValue === value && setSelectedIndex(index);
    }, []), React.useEffect(() => {
      const handleActiveIndex = i => {
          index === i && (onActiveChange(value, index), isWeb && requestAnimationFrame(() => {
            listRef?.current[index]?.focus();
          }));
        },
        currentActiveIndex = activeIndexRef?.current;
      return currentActiveIndex != null && handleActiveIndex(currentActiveIndex), activeIndexSubscribe(handleActiveIndex);
    }, [index]), React.useEffect(() => valueSubscribe(val => {
      setSelected(val === value);
    }), [value]);
    const textId = React.useId(),
      refCallback = React.useCallback(node => {
        isWeb && node instanceof HTMLElement && listRef && (listRef.current[index] = node);
      }, [index, listRef]),
      composedRefs = useComposedRefs(forwardedRef, refCallback);
    useIsomorphicLayoutEffect(() => {
      setValueAtIndex(index, value);
    }, [index, setValueAtIndex, value]);
    function handleSelect() {
      setSelectedIndex(index), onChange(value), setOpen(!1);
    }
    const selectItemProps = React.useMemo(() => interactions ? interactions.getItemProps({
      onTouchMove() {
        allowSelectRef.current = !0, allowMouseUpRef.current = !1;
      },
      onTouchEnd() {
        allowSelectRef.current = !1, allowMouseUpRef.current = !0;
      },
      onKeyDown(event) {
        if (event.key === "Enter" || event.key === " " && !dataRef?.current.typing) event.preventDefault(), handleSelect();else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
          event.preventDefault(), event.stopPropagation();
          const itemCount = listRef?.current.length ?? 0;
          if (itemCount === 0) return;
          let nextIndex;
          event.key === "ArrowDown" ? nextIndex = index + 1 >= itemCount ? 0 : index + 1 : nextIndex = index - 1 < 0 ? itemCount - 1 : index - 1, setActiveIndexFast?.(nextIndex);
        } else allowSelectRef.current = !0;
      },
      onClick() {
        allowSelectRef.current && handleSelect();
      },
      onMouseUp() {
        if (!allowMouseUpRef.current) {
          allowMouseUpRef.current = !0, allowSelectRef.current = !0;
          return;
        }
        allowSelectRef.current && handleSelect(), clearTimeout(selectTimeoutRef.current), selectTimeoutRef.current = setTimeout(() => {
          allowSelectRef.current = !0;
        });
      }
    }) : {
      onPress: handleSelect
    }, [handleSelect, index, listRef, setActiveIndexFast]);
    return /* @__PURE__ */jsx(SelectItemContextProvider, {
      scope,
      value,
      textId: textId || "",
      isSelected,
      children: shouldRenderWebNative ? /* @__PURE__ */jsx("option", {
        value,
        children: props.children
      }) : /* @__PURE__ */jsx(ListItem.Frame, {
        render: "div",
        componentName: ITEM_NAME,
        ref: composedRefs,
        role: "option",
        "aria-labelledby": textId,
        "aria-selected": isSelected,
        "data-state": isSelected ? "active" : "inactive",
        "aria-disabled": disabled || void 0,
        "data-disabled": disabled ? "" : void 0,
        tabIndex: disabled ? void 0 : -1,
        ...(!props.unstyled && {
          cursor: "default",
          size,
          outlineOffset: -0.5,
          zIndex: 100,
          hoverStyle: {
            backgroundColor: "$backgroundHover"
          },
          pressStyle: {
            backgroundColor: "$backgroundPress"
          },
          focusStyle: {
            backgroundColor: "$backgroundFocus"
          },
          focusVisibleStyle: {
            outlineColor: "$outlineColor",
            outlineWidth: 1,
            outlineStyle: "solid"
          }
        }),
        ...restProps,
        ...selectItemProps
      })
    });
  }, {
    disableTheme: !0
  });
export { SelectItem, SelectItemContextProvider, useSelectItemContext };
//# sourceMappingURL=SelectItem.mjs.map
