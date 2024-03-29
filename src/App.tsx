import React, { useState, useEffect } from "react";
import { Routes, Route, useRouteError } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/home/Home";
import { Headphones } from "./pages/headphones/Headphones";
import { Speakers } from "./pages/speakers/Speakers";
import { Earphones } from "./pages/earphones/Earphones";
import { Checkout } from "./pages/checkout/Checkout";
import { ProductDetail } from "./pages/productDetail/ProductDetail";
import { CartProvider } from "./context/CartContext";

const App = () => {
  const TABLET_SIZE = 820;
  const MOBILE_SIZE = 500;

  const [mobileScreen, setMobileScreen] = useState(false);
  const [tabletScreen, setTabletScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (
        window.innerWidth <= TABLET_SIZE &&
        window.innerWidth >= MOBILE_SIZE
      ) {
        setTabletScreen(true);
        setMobileScreen(false);
        return;
      } else if (window.innerWidth >= TABLET_SIZE) {
        setTabletScreen(false);
        setMobileScreen(false);
        return;
      } else if (window.innerWidth <= MOBILE_SIZE) {
        setMobileScreen(true);
        setTabletScreen(false);
        return;
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="App">
      <CartProvider>
        <Navbar mobileScreen={mobileScreen} tabletScreen={tabletScreen} />
        <Routes>
          <Route
            path="/"
            element={
              <Home mobileScreen={mobileScreen} tabletScreen={tabletScreen} />
            }
          />
          <Route
            path="/headphones"
            element={
              <Headphones
                mobileScreen={mobileScreen}
                tabletScreen={tabletScreen}
              />
            }
          />
          <Route
            path="/headphones/:id"
            element={
              <ProductDetail
                mobileScreen={mobileScreen}
                tabletScreen={tabletScreen}
              />
            }
          />
          <Route path="/speakers" element={<Speakers />} />
          <Route
            path="/speakers/:id"
            element={
              <ProductDetail
                mobileScreen={mobileScreen}
                tabletScreen={tabletScreen}
              />
            }
          />
          <Route path="/earphones" element={<Earphones />} />
          <Route
            path="/earphones/:id"
            element={
              <ProductDetail
                mobileScreen={mobileScreen}
                tabletScreen={tabletScreen}
              />
            }
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
};

export default App;
