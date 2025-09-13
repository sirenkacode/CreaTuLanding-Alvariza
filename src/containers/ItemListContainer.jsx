import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAllProducts, fetchProductsByCategory } from "../api/fakestore";
import ItemList from "../components/ItemList";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);

    const run = async () => {
      const data = categoryId
        ? await fetchProductsByCategory(categoryId)
        : await fetchAllProducts();
      if (active) setItems(data);
      setLoading(false);
    };

    run();
    return () => { active = false; };
  }, [categoryId]); // IMPORTANTE: dependencias

  if (loading) return <p style={{ padding: 16 }}>Cargando...</p>;
  if (!items.length) return <p style={{ padding: 16 }}>No hay productos.</p>;

  return <ItemList items={items} />;
}
