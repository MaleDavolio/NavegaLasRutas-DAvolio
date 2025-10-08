import React from "react";
import { Link } from "react-router-dom";
import "../styles/Item.css";

const Item = ({ product }) => {
  return (
    <div className="card item-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.imageUrl} alt={product.name} />
        <h3>{product.name}</h3>
        <p className="price">${product.price}</p>
      </Link>
    </div>
  );
};

export default Item;
