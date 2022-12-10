import React, { FC } from "react";
import { useCartContext } from "../../context/CartContext";
import { CategoryTiles } from "../../components/CategoryTiles";
import { ProductTile } from "../../components/ProductTile";
import { About } from "../../components/About";
import data from "../../../data.json";
export const Headphones: FC = () => {
  // const [products, setProducts] = useCartContext();
  // console.log(products);

  // const headphones = products.find((obj) => obj.category === "headphones");
  const headphonesData = data.filter((obj) => obj.category === "headphones");

  return (
    <main>
      <h1 className="page-header">HEADPHONES</h1>
      <ProductTile data={headphonesData} />
      <CategoryTiles />
      <About />
    </main>
  );
};
