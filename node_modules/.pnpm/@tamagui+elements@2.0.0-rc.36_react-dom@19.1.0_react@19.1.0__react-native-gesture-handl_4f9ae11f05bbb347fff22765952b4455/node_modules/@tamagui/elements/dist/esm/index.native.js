import { View, styled } from "@tamagui/core";
var Section = styled(View, {
    name: "Section",
    render: "section",
    flexDirection: "column",
    role: "region"
  }),
  Article = styled(View, {
    name: "Article",
    render: "article",
    flexDirection: "column"
  }),
  Main = styled(View, {
    name: "Main",
    render: "main",
    flexDirection: "column"
  }),
  Header = styled(View, {
    name: "Header",
    render: "header",
    role: "banner",
    flexDirection: "column"
  }),
  Aside = styled(View, {
    name: "Aside",
    render: "aside",
    flexDirection: "column"
  }),
  Footer = styled(View, {
    name: "Footer",
    render: "footer",
    flexDirection: "column"
  }),
  Nav = styled(View, {
    name: "Nav",
    render: "nav",
    flexDirection: "column"
  });
export { Article, Aside, Footer, Header, Main, Nav, Section };
//# sourceMappingURL=index.native.js.map
