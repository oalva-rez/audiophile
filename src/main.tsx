import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./pages/home/home.css";
import "./pages/headphones/headphones.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
