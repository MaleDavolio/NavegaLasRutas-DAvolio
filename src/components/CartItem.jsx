import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { product, quantity } = item;
  const { removeItem } = useContext(CartContext);

  return (
    <div className="cart-item">
      <img src={product.imageUrl} alt={product.name} />
      <div>
        <h4>{product.name}</h4>
        <p>Precio unitario: ${product.price}</p>
        <p>Cantidad: {quantity}</p>
        <p>Subtotal: ${product.price * quantity}</p>
        <button className="btn btn-primary" onClick={() => removeItem(product.id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
