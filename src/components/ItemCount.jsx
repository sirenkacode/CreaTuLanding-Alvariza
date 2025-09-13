import { useState } from "react";

export default function ItemCount({ stock = 10, initial = 1, onAdd }) {
  const [qty, setQty] = useState(initial);
  const dec = () => setQty((q) => Math.max(1, q - 1));
  const inc = () => setQty((q) => Math.min(stock, q + 1));

  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 16 }}>
      <button onClick={dec}>-</button>
      <span>{qty}</span>
      <button onClick={inc}>+</button>
      <button onClick={() => onAdd?.(qty)}>Agregar</button>
    </div>
  );
}
