import React, { FC } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/shared/desktop/icon-cart.svg";
import logo from "../assets/shared/desktop/logo.svg";
interface Props {
  mobileScreen: boolean;
}
export const Navbar: FC<Props> = ({ mobileScreen }) => {
  return (
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
