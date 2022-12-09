import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/home/Home";
import { Headphones } from "./pages/headphones/Headphones";
import { Speakers } from "./pages/speakers/Speakers";
import { Earphones } from "./pages/earphones/Earphones";
import { Checkout } from "./pages/checkout/Checkout";
import { CartProvider } from "./context/CartContext";

const App = () => {
  const [mobileScreen, setMobileScreen] = useState(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 800) {
        setMobileScreen(true);
      } else if (window.innerWidth >= 800) {
        setMobileScreen(false);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="App">
      <CartProvider>
        <Navbar mobileScreen={mobileScreen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
};

export default App;
