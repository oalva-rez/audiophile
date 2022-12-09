import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import headphonesImage from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImage from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImage from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import arrowRightImage from "../assets/shared/desktop/icon-arrow-right.svg";

export const CategoryTiles: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="cat-tile" onClick={() => navigate("/headphones")}>
        <img src={headphonesImage} alt="headphones" />
        <h2>HEADPHONES</h2>
        <div className="cat-link">
          <Link to="/headphones">SHOP</Link>
          <img src={arrowRightImage} alt="arrow right" />
        </div>
      </div>
      <div className="cat-tile" onClick={() => navigate("/speakers")}>
        <img src={speakersImage} alt="speakers" />
        <h2>SPEAKERS</h2>
        <div className="cat-link">
          <Link to="/headphones">SHOP</Link>
          <img src={arrowRightImage} alt="arrow right" />
        </div>
      </div>
      <div className="cat-tile" onClick={() => navigate("/earphones")}>
        <img src={earphonesImage} alt="earphones" />
        <h2>EARPHONES</h2>
        <div className="cat-link">
          <Link to="/headphones">SHOP</Link>
          <img src={arrowRightImage} alt="arrow right" />
        </div>
      </div>
    </>
  );
};
