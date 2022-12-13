import React, { FC, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import cartIcon from "../assets/shared/desktop/icon-cart.svg";
import logo from "../assets/shared/desktop/logo.svg";
import Menu from "react-burger-menu/lib/menus/slide";
import { IScreenSize } from "../interfaces/screenSize";

export const Navbar: FC<IScreenSize> = ({ mobileScreen, tabletScreen }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  function handleStateChange(state) {
    setMenuOpen(state.isOpen);
  }
  function closeMenu() {
    setMenuOpen(false);
  }
  console.log(mobileScreen, tabletScreen);
  return mobileScreen || tabletScreen ? (
    <nav className="header-nav">
      <Menu isOpen={menuOpen} onStateChange={handleStateChange}>
        <ul>
          <li>
            <Link
              to="/"
              className={
                pathname === "/" ? "mobile-link active" : "mobile-link"
              }
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/headphones"
              className={
                pathname === "/headphones"
                  ? "mobile-link active"
                  : "mobile-link"
              }
              onClick={closeMenu}
            >
              Headphones
            </Link>
          </li>
          <li>
            <Link
              to="/speakers"
              className={
                pathname === "/speakers" ? "mobile-link active" : "mobile-link"
              }
              onClick={closeMenu}
            >
              Speakers
            </Link>
          </li>
          <li>
            <Link
              to="/earphones"
              className={
                pathname === "/earphones" ? "mobile-link active" : "mobile-link"
              }
              onClick={closeMenu}
            >
              Earphones
            </Link>
          </li>
        </ul>
      </Menu>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="audiophile" />
        </Link>
      </div>
      <div className="cart">
        <img src={cartIcon} alt="cart" />
      </div>
    </nav>
  ) : (
    <nav className="header-nav">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="audiophile" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/headphones">Headphones</Link>
        </li>
        <li>
          <Link to="/speakers">Speakers</Link>
        </li>
        <li>
          <Link to="/earphones">Earphones</Link>
        </li>
      </ul>
      <div className="cart">
        <img src={cartIcon} alt="cart" />
      </div>
    </nav>
  );
};
