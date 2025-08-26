
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenido a Lunalu Iluminación y Deco!" />
    </>
  );
};

export default App;
