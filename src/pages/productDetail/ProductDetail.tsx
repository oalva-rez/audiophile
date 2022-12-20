import React, { FC } from "react";
import data from "../../../data.json";
import { Link } from "react-router-dom";
import { IScreenSize } from "../../interfaces/screenSize";
import { useParams } from "react-router-dom";
import { formatter } from "../../utilities/numberFormatter";

export const ProductDetail: FC<IScreenSize> = ({
  mobileScreen,
  tabletScreen,
}) => {
  const { id } = useParams();

  const product = data.find((product) => product.id === parseInt(id));

  //pathname for the link to go back to the correct page
  const pagePathName = "/" + window.location.pathname.split("/")[1];

  return (
    <main>
      <section className="products">
        <div className="products--tile detail" key={product.id}>
          <Link to={pagePathName} className="go-back">
            Go Back
          </Link>
          <img
            src={tabletScreen ? product.image.tablet : product.image.desktop}
            alt={product.name}
          />
          <div className="products--desc">
            {product.new && <p className="products--new">New Product</p>}
            <h2 className="products--heading">{product.name}</h2>
            <p className="products--text">{product.description}</p>
            <p className="detail--price">{formatter.format(product.price)}</p>
            <div className="detail--cart">
              <div className="detail--update-cart">
                <button className="detail--change">-</button>
                <div className="detail--num">0</div>
                <button className="detail--change">+</button>
              </div>
              <button className="detail--add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
