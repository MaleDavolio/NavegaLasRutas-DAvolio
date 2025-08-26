
import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MiTienda</h2>
      <ul style={styles.links}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#ddd',
  },
  logo: {
    margin: 0,
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
  },
};

export default NavBar;
