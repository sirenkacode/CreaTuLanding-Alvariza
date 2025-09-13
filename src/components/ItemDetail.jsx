import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {
  const handleAdd = (qty) => {
    alert(`Agregaste ${qty} unidad(es) de ${item.name}`);
    // Más adelante: enviar al Context del carrito
  };

  return (
    <section style={{ padding: 16 }}>
      <div style={{ display: "grid", gap: 24, gridTemplateColumns: "1fr 1fr", alignItems: "start" }}>
        <img src={item.img} alt={item.name} style={{ width: "100%", borderRadius: 12 }} />
        <div>
          <h2>{item.name}</h2>
          <p>Categoría: {item.category}</p>
          <p style={{ fontSize: 20, fontWeight: 700 }}>${item.price}</p>
          <ItemCount stock={10} initial={1} onAdd={handleAdd} />
        </div>
      </div>
    </section>
  );
}
