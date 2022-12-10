import React, { FC } from "react";
import { ProductTile } from "../../components/ProductTile";
import { CategoryTiles } from "../../components/CategoryTiles";
import { About } from "../../components/About";
import data from "../../../data.json";

export const Speakers: FC = () => {
  const speakersData = data.filter((obj) => obj.category === "speakers");
  return (
    <main>
      <h1 className="page-header">SPEAKERS</h1>
      <ProductTile data={speakersData} />
      <CategoryTiles />
      <About />
    </main>
  );
};
