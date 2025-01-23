import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Context from "./context/Context.g.jsx";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Context>
        <App />
      </Context>
    </BrowserRouter>
  </StrictMode>
);
