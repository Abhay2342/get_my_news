// src/main.jsx

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { CssBaseline } from "@mui/material/";
import "./global.css";
import { UserProvider } from "./components/UserContext";

const root = document.getElementById("root");
const reactRoot = createRoot(root);
reactRoot.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserProvider>
        <CssBaseline />
        <App />
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
);
