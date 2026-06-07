import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "@global/style/mantineTheme/fonts.css";
import "@mantine/core/styles.layer.css";
import "@global/css/global.css";
import { MantineStyles } from "@global/style/mantineTheme/index.tsx";
import { router } from "./modules/routes";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { store } from "@global/store/store";

// Drop any prerendered <head> tags (data-prerendered) so React 19 owns the
// document head once the SPA boots — see scripts/prerender.ts.
document
  .querySelectorAll("head [data-prerendered]")
  .forEach((el) => el.remove());

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineStyles>
      <Provider store={store}>
        <MantineProvider>
          <RouterProvider router={router} />
        </MantineProvider>
      </Provider>
    </MantineStyles>
  </StrictMode>
);
