import { expectTypeOf, describe, test } from "vitest";
describe("Input event handler types", () => {
  test("onChange event uses HTMLInputElement", () => {
    expectTypeOf().toMatchTypeOf();
  }), test("onFocus event uses HTMLInputElement", () => {
    expectTypeOf().toMatchTypeOf();
  }), test("onBlur event uses HTMLInputElement", () => {
    expectTypeOf().toMatchTypeOf();
  }), test("onKeyDown event uses HTMLInputElement", () => {
    expectTypeOf().toMatchTypeOf();
  }), test("onClick event uses HTMLInputElement", () => {
    expectTypeOf().toMatchTypeOf();
  }), test("onChange event is NOT typed with HTMLDivElement", () => {
    expectTypeOf().toEqualTypeOf();
  });
});
describe("Input HTML props", () => {
  test("accepts type prop", () => {
    expectTypeOf().toHaveProperty("type");
  }), test("accepts placeholder prop", () => {
    expectTypeOf().toHaveProperty("placeholder");
  }), test("accepts value prop", () => {
    expectTypeOf().toHaveProperty("value");
  }), test("accepts defaultValue prop", () => {
    expectTypeOf().toHaveProperty("defaultValue");
  }), test("accepts maxLength prop", () => {
    expectTypeOf().toHaveProperty("maxLength");
  }), test("accepts pattern prop", () => {
    expectTypeOf().toHaveProperty("pattern");
  }), test("accepts required prop", () => {
    expectTypeOf().toHaveProperty("required");
  }), test("accepts readOnly prop", () => {
    expectTypeOf().toHaveProperty("readOnly");
  }), test("accepts autoComplete prop", () => {
    expectTypeOf().toHaveProperty("autoComplete");
  }), test("accepts name prop", () => {
    expectTypeOf().toHaveProperty("name");
  });
});
describe("Input style props", () => {
  test("accepts padding style prop", () => {
    expectTypeOf().toHaveProperty("padding");
  }), test("accepts backgroundColor style prop", () => {
    expectTypeOf().toHaveProperty("backgroundColor");
  }), test("accepts borderRadius style prop", () => {
    expectTypeOf().toHaveProperty("borderRadius");
  }), test("accepts text style props", () => {
    expectTypeOf().toHaveProperty("fontSize"), expectTypeOf().toHaveProperty("fontWeight"), expectTypeOf().toHaveProperty("color");
  }), test("accepts size variant", () => {
    expectTypeOf().toHaveProperty("size");
  }), test("accepts unstyled variant", () => {
    expectTypeOf().toHaveProperty("unstyled");
  });
});
describe("Input cross-platform props", () => {
  test("autoCorrect accepts boolean and string", () => {
    expectTypeOf().toMatchTypeOf();
  }), test("autoCapitalize accepts native and web values", () => {
    expectTypeOf().toMatchTypeOf();
  }), test("accepts onChangeText callback", () => {
    expectTypeOf().toHaveProperty("onChangeText"), expectTypeOf().toMatchTypeOf();
  }), test("accepts onSubmitEditing callback", () => {
    expectTypeOf().toHaveProperty("onSubmitEditing");
  }), test("accepts placeholderTextColor", () => {
    expectTypeOf().toHaveProperty("placeholderTextColor");
  }), test("accepts selection prop", () => {
    expectTypeOf().toHaveProperty("selection");
  });
});
describe("InputRef type", () => {
  test("InputRef accepts TextInput", () => {
    const _ref = {};
  }), test("InputRef rejects plain HTMLDivElement", () => {
    const _ref = {};
  });
});
describe("TextArea types", () => {
  test("TextArea has rows prop", () => {
    expectTypeOf().toHaveProperty("rows");
  }), test("TextArea accepts style props", () => {
    expectTypeOf().toHaveProperty("padding"), expectTypeOf().toHaveProperty("fontSize");
  }), test("TextArea accepts HTML input props", () => {
    expectTypeOf().toHaveProperty("placeholder"), expectTypeOf().toHaveProperty("value");
  });
});
describe("InputProps derivation", () => {
  test("InputProps equals GetProps<typeof Input>", () => {
    expectTypeOf().toEqualTypeOf();
  }), test("TextAreaProps equals GetProps<typeof TextArea>", () => {
    expectTypeOf().toEqualTypeOf();
  });
});
//# sourceMappingURL=inputTypes.test-d.mjs.map
