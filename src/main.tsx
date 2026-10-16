import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const el = document.getElementById("root");
if (!el) {
  throw new Error("Root element not found");
}

const tree = (
  <StrictMode>
    <App />
  </StrictMode>
);

if (el.hasChildNodes()) {
  hydrateRoot(el, tree);
} else {
  createRoot(el).render(tree);
}
