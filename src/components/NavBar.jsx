import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "../styles/global.css";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar container">
      <Link to="/">Home</Link>
      <Link to="/category/electronics">Electrónicos</Link>
      <Link to="/category/books">Libros</Link>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
