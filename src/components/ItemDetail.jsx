import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const [added, setAdded] = useState(false);
  const navigate = useNavigate();

  const handleAdd = (quantity) => {
    addItem(product, quantity);
    setAdded(true);
  };

  return (
    <div className="container">
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} width="300" />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Stock: {product.stock}</p>

      { !added ? (
          <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
        ) : (
          <button className="btn btn-primary" onClick={() => navigate("/cart")}>
            Ir al carrito
          </button>
        )
      }
    </div>
  );
};

export default ItemDetail;
