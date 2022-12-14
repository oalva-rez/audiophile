import React, { FC } from "react";
import { useCartContext } from "../../context/CartContext";
import { CategoryTiles } from "../../components/CategoryTiles";
import { ProductTile } from "../../components/ProductTile";
import { About } from "../../components/About";
import data from "../../../data.json";
import { IScreenSize } from "../../interfaces/screenSize";
export const Headphones: FC<IScreenSize> = ({ mobileScreen, tabletScreen }) => {
  // const [products, setProducts] = useCartContext();
  // console.log(products);

  // const headphones = products.find((obj) => obj.category === "headphones");
  const headphonesData = data.filter((obj) => obj.category === "headphones");

  return (
    <main>
      <h1 className="page-header">HEADPHONES</h1>
      <ProductTile
        data={headphonesData}
        mobileScreen={mobileScreen}
        tabletScreen={tabletScreen}
      />
      <CategoryTiles />
      <About />
    </main>
  );
};
