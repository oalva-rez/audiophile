import React, { FC } from "react";
import { Link } from "react-router-dom";
import { CategoryTiles } from "../../components/CategoryTiles";
import { About } from "../../components/About";
import heroImage from "../../assets/home/desktop/image-hero.jpg";
import zx9Image from "../../assets/home/desktop/image-speaker-zx9.png";
import zx7Image from "../../assets/home/desktop/image-speaker-zx7.jpg";
import yx1Image from "../../assets/home/desktop/image-earphones-yx1.jpg";
import patternImage from "../../assets/home/desktop/pattern-circles.svg";

export const Home: FC = () => {
  return (
    <main>
      <section className="hero">
        <div className="hero-wrapper">
          <img src={heroImage} alt="hero" />
          <div className="hero--content">
            <p className="hero--np">NEW PRODUCT</p>
            <h1>
              XX99 MARK II <br />
              HEADPHONES
            </h1>
            <p className="hero--desc">
              Experience natural, life-like audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button>
              <Link to="/id">SEE PRODUCT</Link>
            </button>
          </div>
        </div>
      </section>
      <CategoryTiles />
      <section className="showcase">
        <div className="sc1">
          <img src={patternImage} alt="circles" className="sc1--circles" />
          <img src={zx9Image} alt="zx9" className="sc1--speaker" />
          <div className="sc1--content">
            <h2>
              ZX9 <br />
              SPEAKER
            </h2>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button>
              <Link to="id">SEE PRODUCT</Link>
            </button>
          </div>
        </div>
        <div className="sc2">
          <img src={zx7Image} alt="zx7" className="sc2--speaker" />
          <div className="sc2--content">
            <h2>ZX7 SPEAKER</h2>
            <button>
              <Link to="id">SEE PRODUCT</Link>
            </button>
          </div>
        </div>
        <div className="sc3">
          <img src={yx1Image} alt="yx1" />
          <div className="sc3--content">
            <h2>YX1 EARPHONES</h2>
            <button>
              <Link to="id">SEE PRODUCT</Link>
            </button>
          </div>
        </div>
      </section>
      <About />
    </main>
  );
};
