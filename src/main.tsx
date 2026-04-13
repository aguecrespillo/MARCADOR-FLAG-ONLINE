import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// QUITAMOS EL .tsx (Vite ya sabe que es un componente)
import App from "./App"; 

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);