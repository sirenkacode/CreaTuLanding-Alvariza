function CartWidget() {
  return (
    <button className="cart-btn" aria-label="Carrito" title="Carrito">
      <span className="cart-icon" aria-hidden="true">🛒</span>
      <span className="cart-badge" aria-label="Cantidad en carrito">0</span>
    </button>
  )
}

export default CartWidget
