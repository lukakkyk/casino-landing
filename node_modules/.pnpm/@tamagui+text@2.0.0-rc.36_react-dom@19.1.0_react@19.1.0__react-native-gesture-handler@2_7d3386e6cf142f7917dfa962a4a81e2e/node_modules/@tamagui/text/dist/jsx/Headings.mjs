import { styled } from "@tamagui/web";
import { Paragraph } from "./Paragraph.mjs";
const Heading = styled(Paragraph, {
    render: "span",
    name: "Heading",
    role: "heading",
    fontFamily: "$heading",
    size: "$8",
    margin: 0
  }),
  H1 = styled(Heading, {
    name: "H1",
    render: "h1",
    variants: {
      unstyled: {
        false: {
          size: "$10"
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  H2 = styled(Heading, {
    name: "H2",
    render: "h2",
    variants: {
      unstyled: {
        false: {
          size: "$9"
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  H3 = styled(Heading, {
    name: "H3",
    render: "h3",
    variants: {
      unstyled: {
        false: {
          size: "$8"
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  H4 = styled(Heading, {
    name: "H4",
    render: "h4",
    variants: {
      unstyled: {
        false: {
          size: "$7"
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  H5 = styled(Heading, {
    name: "H5",
    render: "h5",
    variants: {
      unstyled: {
        false: {
          size: "$6"
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  H6 = styled(Heading, {
    name: "H6",
    render: "h6",
    variants: {
      unstyled: {
        false: {
          size: "$5"
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  });
export { H1, H2, H3, H4, H5, H6, Heading };
//# sourceMappingURL=Headings.mjs.map
