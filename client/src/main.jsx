// src/main.jsx

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { CssBaseline } from "@mui/material/";
import "./global.css";

const root = document.getElementById("root");
const reactRoot = createRoot(root);
reactRoot.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
