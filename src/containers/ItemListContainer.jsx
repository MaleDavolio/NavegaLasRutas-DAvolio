import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./components/ItemList";
import { products } from "../data/products";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (categoryId) {
            resolve(products.filter(p => p.category === categoryId));
          } else {
            resolve(products);
          }
        }, 500);
      });
    };

    fetchProducts().then(setItems);
  }, [categoryId]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
