import { Link } from "react-router-dom";

export default function ItemCard({ item }) {
  return (
    <article style={{ border: "1px solid #ddd", borderRadius: 12, padding: 12 }}>
      <img src={item.img} alt={item.name} style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", borderRadius: 8 }} />
      <h3 style={{ margin: "8px 0" }}>{item.name}</h3>
      <p>${item.price}</p>
      <Link to={`/item/${item.id}`}>Ver detalle</Link>
    </article>
  );
}
