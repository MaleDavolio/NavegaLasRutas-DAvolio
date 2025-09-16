import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <Link to={`/item/${item.id}`}>Ver detalle</Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
