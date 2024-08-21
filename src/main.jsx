import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "reset-css";
import "./index.scss";  
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
