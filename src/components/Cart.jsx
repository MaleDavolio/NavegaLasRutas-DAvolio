import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalPrice, clearCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="container text-center">
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Carrito de compras</h2>
      {cartItems.map(item => (
        <CartItem key={item.product.id} item={item} />
      ))}
      <h3>Total: ${getTotalPrice()}</h3>
      <button className="btn btn-secondary" onClick={clearCart}>Vaciar carrito</button>
      <br />
      <Link className="btn btn-primary mt-2" to="/checkout">Ir al checkout</Link>
    </div>
  );
};

export default Cart;
