import React from "react";
import { Link } from "react-router-dom";
import "./css/index.css";

const Card = ({ product }) => {
  return (
    <div className="card">
      <Link to={`/product/${product._id}`}>
        <div className="card_image">
          <img src={product.image} alt={product.name} />
        </div>
      </Link>
      <div className="card_body">
        <div className="heading_like_section">
          <Link to={`/product/${product._id}`}>
            <h2>{product.name}</h2>
          </Link>
        </div>
        <div className="price">
          <p>Price</p>
          <p>${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
