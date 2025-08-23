function ItemListContainer({ greeting }) {
  return (
    <main className="hero">
      <h1 className="hero-title">{greeting}</h1>
      <p className="hero-subtitle">
        Marketplace de tecnología reacondicionada y para repuestos.
      </p>

      <div className="pills">
        <span className="pill">✅ Excelente · listo para usar</span>
        <span className="pill">🛠️ A reparar · con detalles</span>
        <span className="pill">🔧 Repuesto · para piezas</span>
      </div>

      <button className="cta">Explorar catálogo</button>
    </main>
  )
}

export default ItemListContainer
