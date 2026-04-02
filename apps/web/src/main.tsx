import React from "react";
import ReactDOM from "react-dom/client";
import { TamaguiProvider } from "tamagui";
import { tamaguiConfig } from "@casino/config";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TamaguiProvider config={tamaguiConfig as any} defaultTheme="dark">
      <App />
    </TamaguiProvider>
  </React.StrictMode>,
);
