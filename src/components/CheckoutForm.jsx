import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const { cartItems, getTotalPrice, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      buyer: { name, email, phone },
      items: cartItems.map(item => ({
        id: item.product.id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity
      })),
      total: getTotalPrice(),
      date: new Date()
    };

    try {
      const ordersCollection = collection(db, "orders");
      const docRef = await addDoc(ordersCollection, order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al crear la orden:", error);
    }
  };

  if (orderId) {
    return (
      <div className="container text-center">
        <h2>Compra confirmada!</h2>
        <p>Tu ID de orden es: <strong>{orderId}</strong></p>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div>
          <label>Nombre:</label>
          <input value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Teléfono:</label>
          <input value={phone} onChange={e => setPhone(e.target.value)} required />
        </div>
        <div>
          <p>Total a pagar: ${getTotalPrice()}</p>
        </div>
        <button className="btn btn-primary" type="submit">
          Confirmar compra
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
