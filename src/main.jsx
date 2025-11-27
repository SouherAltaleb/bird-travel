import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* BrowserRouter aktiviert Client-Side Routing für die gesamte App */}
    {/* Für andere Router-Arten würden wir auch hier eine andere Komponente verwenden */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
