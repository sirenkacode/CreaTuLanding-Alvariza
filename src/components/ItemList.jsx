import ItemCard from "./ItemCard";

export default function ItemList({ items }) {
  return (
    <section style={{ padding: 16, display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
      {items.map((it) => (
        <ItemCard key={it.id} item={it} />
      ))}
    </section>
  );
}
