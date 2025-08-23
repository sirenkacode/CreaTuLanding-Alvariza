import CartWidget from './CartWidget'

function NavBar() {
  return (
    <header className="navbar">
      <a href="/" className="brand" aria-label="Inicio">Reboot</a>

      <nav className="nav-links" aria-label="Navegación principal">
        <a href="#">Inicio</a>
        <a href="#">Catálogo</a>
        <a href="#">Estados</a>
        <a href="#">Contacto</a>
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar
