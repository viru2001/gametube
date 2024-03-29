import React from "react";
import App from "./App";
import { makeServer } from "./server";
import { createRoot } from "react-dom/client";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";

import { theme } from "./theme";
import {
  DrawerProvider,
  AuthProvider,
  VideosProvider,
  UserProvider,
} from "./frontend/context/";

const container = document.getElementById("root");
const root = createRoot(container);

// Call make Server
makeServer();

root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <VideosProvider>
          <DrawerProvider>
            <UserProvider>
              <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                  <App />
                </ThemeProvider>
              </StyledEngineProvider>
            </UserProvider>
          </DrawerProvider>
        </VideosProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
