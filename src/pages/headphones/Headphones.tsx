import React, { FC } from "react";
import { useCartContext } from "../../context/CartContext";
import data from "../../../data.json";
export const Headphones: FC = () => {
  // const [products, setProducts] = useCartContext();
  // console.log(products);

  // const headphones = products.find((obj) => obj.category === "headphones");
  const headphones = data.filter((obj) => obj.category === "headphones");

  return (
    <main>
      <h1>HEADPHONES</h1>
      <section className="hf--products">
        {headphones.map((obj) => (
          <div className="hf--product" key={obj.id}>
            <img src={obj.image.desktop} alt={obj.name} />
            <div className="hf--product-desc">
              <p>{obj.new && "New Product"}</p>
              <h2>{obj.name}</h2>
              <p>{obj.description}</p>
              <button></button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};