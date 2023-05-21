import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HighlightProvider } from "./HighlightContext";

const root = document.createElement("div");
root.className = "root1";
document.body.appendChild(root);
const rootDiv = ReactDOM.createRoot(root);
rootDiv.render(
  <React.StrictMode>
    <HighlightProvider>
      <App />
    </HighlightProvider>
  </React.StrictMode>
);
