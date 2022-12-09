import React, { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";

export const Footer: FC = () => {
  return (
    <footer>
      <div className="footer--wrapper">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="footer--logo" />
          </Link>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p>Copyright 2022. All Rights Reserved</p>
        </div>
        <div>
          <nav className="footer--nav">
            <ul>
              <li>
                <Link to="/home">HOME</Link>
              </li>
              <li>
                <Link to="/headphones">HEADPHONES</Link>
              </li>
              <li>
                <Link to="/speakers">SPEAKERS</Link>
              </li>
              <li>
                <Link to="/earphones">EARPHONES</Link>
              </li>
            </ul>
          </nav>
          <div className="footer--social-media">
            <Link to="/">
              <img src={facebook} alt="facebook" />
            </Link>
            <Link to="/">
              <img src={twitter} alt="twitter" />
            </Link>
            <Link to="/">
              <img src={instagram} alt="instagram" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
