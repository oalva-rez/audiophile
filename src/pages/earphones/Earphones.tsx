import React, { FC } from "react";
import { ProductTile } from "../../components/ProductTile";
import { CategoryTiles } from "../../components/CategoryTiles";
import { About } from "../../components/About";
import data from "../../../data.json";

export const Earphones: FC = () => {
  const earphonesData = data.filter((obj) => obj.category === "earphones");
  return (
    <main>
      <h1 className="page-header">EARPHONES</h1>
      <ProductTile data={earphonesData} />
      <CategoryTiles />
      <About />
    </main>
  );
};
