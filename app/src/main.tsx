import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import { MantineStyles } from "@global/style/mantineTheme/index.tsx";
import { HelmetProvider } from "react-helmet-async";
import Routing from "./modules/routes.tsx";
import '@global/css/global.css';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <MantineStyles>
        <Routing />
      </MantineStyles>
    </HelmetProvider>
  </StrictMode>
);
