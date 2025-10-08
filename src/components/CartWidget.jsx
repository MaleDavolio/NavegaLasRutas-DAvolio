import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  return (
    <span className="cart-widget">
      🛒 {getTotalItems()}
    </span>
  );
};

export default CartWidget;
