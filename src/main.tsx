import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./pages/home/home.css";
import "./pages/headphones/headphones.css";
import "./pages/productDetail/productDetail.css";

import "./components/styles/about.css";
import "./components/styles/footer.css";
import "./components/styles/categoryTiles.css";
import "./components/styles/navbar.css";
import "./components/styles/productTiles.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
