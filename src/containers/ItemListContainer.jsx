import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      let q;
      const productsCollection = collection(db, "products");
      if (categoryId) {
        q = query(productsCollection, where("category", "==", categoryId));
      } else {
        q = productsCollection;
      }
      const snapshot = await getDocs(q);
      const productsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productsData);
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className="container">
      <h2>Catálogo</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
