import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api/fakestore";
import ItemDetail from "../components/ItemDetail";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);

    fetchProductById(id).then((data) => {
      if (active) setItem(data);
      setLoading(false);
    });

    return () => { active = false; };
  }, [id]); 
  if (loading) return <p style={{ padding: 16 }}>Cargando...</p>;
  if (!item) return <p style={{ padding: 16 }}>Producto no encontrado.</p>;

  return <ItemDetail item={item} />;
}
