import { useState } from "react";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);

  const handleAdd = () => { if(count < stock) setCount(count + 1) };
  const handleRemove = () => { if(count > 1) setCount(count - 1) };

  return (
    <div>
      <button onClick={handleRemove}>-</button>
      <span>{count}</span>
      <button onClick={handleAdd}>+</button>
      <button onClick={() => alert(`${count} unidades agregadas al carrito`)}>Agregar</button>
    </div>
  );
};

export default ItemCount;
