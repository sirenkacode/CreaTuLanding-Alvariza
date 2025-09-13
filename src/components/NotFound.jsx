import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section style={{ padding: 24 }}>
      <h2>404 — Página no encontrada</h2>
      <p>El enlace no existe o está mal formateado.</p>
      <Link to="/">Volver al inicio</Link>
    </section>
  );
}
