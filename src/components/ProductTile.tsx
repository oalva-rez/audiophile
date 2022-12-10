import React, { FC } from "react";

export const ProductTile: FC<any> = ({ data }) => {
  return (
    <section className="products">
      {data.map((obj: any) => (
        <div className="products--tile" key={obj.id}>
          <img src={obj.image.desktop} alt={obj.name} />
          <div className="products--desc">
            {obj.new && <p className="products--new">New Product</p>}
            <h2 className="products--heading">{obj.name}</h2>
            <p className="products--text">{obj.description}</p>
            <button className="products--btn">SEE PRODUCT</button>
          </div>
        </div>
      ))}
    </section>
  );
};
