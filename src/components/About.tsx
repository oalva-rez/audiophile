import React, { FC } from "react";
import headshotImage from "../assets/shared/desktop/image-best-gear.jpg";

export const About: FC = () => {
  return (
    <section className="about">
      <div className="about--text">
        <h2>
          Bringing you the <span className="word-color">best</span> audio gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img
        src={headshotImage}
        alt="head shot man with headphones"
        className="about--image"
      />
    </section>
  );
};
