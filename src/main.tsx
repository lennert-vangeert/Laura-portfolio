import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "@global/style/mantineTheme/fonts.css";
import "@mantine/core/styles.layer.css";
import "@global/css/global.css";
import { MantineStyles } from "@global/style/mantineTheme/index.tsx";
import { HelmetProvider } from "react-helmet-async";
import { router } from "./modules/routes";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { store } from "@global/store/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <MantineStyles>
        <Provider store={store}>
          <MantineProvider>
            <RouterProvider router={router} />
          </MantineProvider>
        </Provider>
      </MantineStyles>
    </HelmetProvider>
  </StrictMode>
);
