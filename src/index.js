import React from "react";
import App from "./App";
import { makeServer } from "./server";
import { createRoot } from "react-dom/client";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";

import { theme } from "./theme";
import { DrawerProvider } from "./frontend/context/DrawerContext";

const container = document.getElementById("root");
const root = createRoot(container);

// Call make Server
makeServer();

root.render(
  <React.StrictMode>
    <Router>
      <DrawerProvider>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </StyledEngineProvider>
      </DrawerProvider>
    </Router>
  </React.StrictMode>
);
