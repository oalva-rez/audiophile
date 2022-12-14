import React, { FC } from "react";
import data from "../../../data.json";
import { IScreenSize } from "../../interfaces/screenSize";
import { useParams } from "react-router-dom";

export const ProductDetail: FC<IScreenSize> = ({
  mobileScreen,
  tabletScreen,
}) => {
  const { id } = useParams();

  const product = data.find((product) => product.id === parseInt(id));
  console.log(product);

  return (
    <main>
      <div className="products--tile" key={product.id}>
        <img
          src={tabletScreen ? product.image.tablet : product.image.desktop}
          alt={product.name}
        />
        <div className="products--desc">
          {product.new && <p className="products--new">New Product</p>}
          <h2 className="products--heading">{product.name}</h2>
          <p className="products--text">{product.description}</p>
          <button className="products--btn">SEE PRODUCT</button>
        </div>
      </div>
    </main>
  );
};
