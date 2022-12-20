import React, { FC } from "react";
import data from "../../../data.json";
import { Link } from "react-router-dom";
import { IScreenSize } from "../../interfaces/screenSize";
import { useParams } from "react-router-dom";
import { formatter } from "../../utilities/numberFormatter";
import { returnCorrectImage } from "../../utilities/returnCorrectImage";
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
            src={returnCorrectImage(
              product?.image.mobile,
              product?.image.tablet,
              product?.image.desktop,
              mobileScreen,
              tabletScreen
            )}
            alt={product.name}
          />
          <div className="products--desc">
            {product.new && <p className="products--new">New Product</p>}
            <h2 className="products--heading">{product.name}</h2>
            <p className="products--text">{product.description}</p>
            <p className="detail--price">{formatter.format(product.price)}</p>
            <div className="detail--cart">
              <div className="detail--update-cart">
                <button className="detail--change">+</button>
                <div className="detail--num">0</div>
                <button className="detail--change">-</button>
              </div>
              <button className="detail--add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
      <section className="features">
        <h2 className="PD-heading">Features</h2>
        {product?.features.split("\n\n").map((p, index) => {
          return <p key={index}>{p}</p>;
        })}
      </section>
      <section className="in-the-box">
        <h2 className="PD-heading">In the box</h2>
        <ul className="in-the-box--list">
          {product?.includes.map((i, index) => {
            return (
              <li key={index}>
                <span>x{i.quantity}</span> {i.item}
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};
