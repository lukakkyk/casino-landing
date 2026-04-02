var import_vitest = require("vitest");
(0, import_vitest.describe)("Input event handler types", () => {
  (0, import_vitest.test)("onChange event uses HTMLInputElement", () => {
    (0, import_vitest.expectTypeOf)().toMatchTypeOf();
  }), (0, import_vitest.test)("onFocus event uses HTMLInputElement", () => {
    (0, import_vitest.expectTypeOf)().toMatchTypeOf();
  }), (0, import_vitest.test)("onBlur event uses HTMLInputElement", () => {
    (0, import_vitest.expectTypeOf)().toMatchTypeOf();
  }), (0, import_vitest.test)("onKeyDown event uses HTMLInputElement", () => {
    (0, import_vitest.expectTypeOf)().toMatchTypeOf();
  }), (0, import_vitest.test)("onClick event uses HTMLInputElement", () => {
    (0, import_vitest.expectTypeOf)().toMatchTypeOf();
  }), (0, import_vitest.test)("onChange event is NOT typed with HTMLDivElement", () => {
    (0, import_vitest.expectTypeOf)().toEqualTypeOf();
  });
});
(0, import_vitest.describe)("Input HTML props", () => {
  (0, import_vitest.test)("accepts type prop", () => {
    (0, import_vitest.expectTypeOf)().toHaveProperty("type");
  }), (0, import_vitest.test)("accepts placeholder prop", () => {
    (0, import_vitest.expectTypeOf)().toHaveProperty("placeholder");
  }), (0, import_vitest.test)("accepts value prop", () => {
    (0, import_vitest.expectTypeOf)().toHaveProperty("value");
  }), (0, import_vitest.test)("accepts defaultValue prop", () => {
    (0, import_vitest.expectTypeOf)().toHaveProperty("defaultValue");
  }), (0, import_vitest.test)("accepts maxLength prop", () => {
    (0, import_vitest.expectTypeOf)().toHaveProperty("maxLength");
  }), (0, import_vitest.test)("accepts pattern prop", () => {
    (0, import_vitest.expectTypeOf)().toHaveProperty("pattern");
  }), (0, import_vitest.test)("accepts required prop", () => {
    (0, import_vitest.expectTypeOf)().toHaveProperty("required");
  }), (0, import_vitest.test)("accepts readOnly prop", () => {
    (0, import_vitest.expectTypeOf)().toHaveProperty("readOnly");
  }), (0, import_vitest.test)("accepts autoComplete prop", () => {
    (0, import_vitest.expectTypeOf)().toHaveProperty("autoComplete");
  }), (0, import_vitest.test)("accepts name prop", () => {
    (0, import_vitest.expectTypeOf)().toHaveProperty("name");
  });
});
(0, import_vitest.describe)("Input style props", () => {
  (0, import_vitest.test)("accepts padding style prop", () => {
    (0, import_vitest.expectTypeOf)().toHaveProperty("padding");
  }), (0, import_vitest.test)("accepts backgroundColor style prop", () => {
    (0, import_vitest.expectTypeOf)().toHaveProperty("backgroundColor");
  }), (0, import_vitest.test)("accepts borderRadius style prop", () => {
    (0, import_vitest.expectTypeOf)().toHaveProperty("borderRadius");
  }), (0, import_vitest.test)("accepts text style props", () => {
    (0, import_vitest.expectTypeOf)().toHaveProperty("fontSize"), (0, import_vitest.expectTypeOf)().toHaveProperty("fontWeight"), (0, import_vitest.expectTypeOf)().toHaveProperty("color");
  }), (0, import_vitest.test)("accepts size variant", () => {
    (0, import_vitest.expectTypeOf)().toHaveProperty("size");
  }), (0, import_vitest.test)("accepts unstyled variant", () => {
    (0, import_vitest.expectTypeOf)().toHaveProperty("unstyled");
  });
});
(0, import_vitest.describe)("Input cross-platform props", () => {
  (0, import_vitest.test)("autoCorrect accepts boolean and string", () => {
    (0, import_vitest.expectTypeOf)().toMatchTypeOf();
  }), (0, import_vitest.test)("autoCapitalize accepts native and web values", () => {
    (0, import_vitest.expectTypeOf)().toMatchTypeOf();
  }), (0, import_vitest.test)("accepts onChangeText callback", () => {
    (0, import_vitest.expectTypeOf)().toHaveProperty("onChangeText"), (0, import_vitest.expectTypeOf)().toMatchTypeOf();
  }), (0, import_vitest.test)("accepts onSubmitEditing callback", () => {
    (0, import_vitest.expectTypeOf)().toHaveProperty("onSubmitEditing");
  }), (0, import_vitest.test)("accepts placeholderTextColor", () => {
    (0, import_vitest.expectTypeOf)().toHaveProperty("placeholderTextColor");
  }), (0, import_vitest.test)("accepts selection prop", () => {
    (0, import_vitest.expectTypeOf)().toHaveProperty("selection");
  });
});
(0, import_vitest.describe)("InputRef type", () => {
  (0, import_vitest.test)("InputRef accepts TextInput", () => {
    const _ref = {};
  }), (0, import_vitest.test)("InputRef rejects plain HTMLDivElement", () => {
    const _ref = {};
  });
});
(0, import_vitest.describe)("TextArea types", () => {
  (0, import_vitest.test)("TextArea has rows prop", () => {
    (0, import_vitest.expectTypeOf)().toHaveProperty("rows");
  }), (0, import_vitest.test)("TextArea accepts style props", () => {
    (0, import_vitest.expectTypeOf)().toHaveProperty("padding"), (0, import_vitest.expectTypeOf)().toHaveProperty("fontSize");
  }), (0, import_vitest.test)("TextArea accepts HTML input props", () => {
    (0, import_vitest.expectTypeOf)().toHaveProperty("placeholder"), (0, import_vitest.expectTypeOf)().toHaveProperty("value");
  });
});
(0, import_vitest.describe)("InputProps derivation", () => {
  (0, import_vitest.test)("InputProps equals GetProps<typeof Input>", () => {
    (0, import_vitest.expectTypeOf)().toEqualTypeOf();
  }), (0, import_vitest.test)("TextAreaProps equals GetProps<typeof TextArea>", () => {
    (0, import_vitest.expectTypeOf)().toEqualTypeOf();
  });
});