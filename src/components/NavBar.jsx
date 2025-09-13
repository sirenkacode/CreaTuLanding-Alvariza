// src/components/NavBar.jsx
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { fetchCategories } from "../api/fakestore";
import CartWidget from "./CartWidget";

export default function NavBar() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let active = true;
    setLoading(true);

    fetchCategories()
      .then((data) => {
        if (!active) return;
        setCats(Array.isArray(data) ? data : []);
      })
      .catch((e) => {
        if (!active) return;
        setErr("No se pudieron cargar las categorías.");
        console.error(e);
      })
      .finally(() => active && setLoading(false));

    return () => {
      active = false;
    };
  }, []);


  const linkClass = ({ isActive }) =>
    `nav-link${isActive ? " nav-link--active" : ""}`;

  return (
    <header
      className="navbar"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "12px 16px",
        borderBottom: "1px solid #eee",
        position: "sticky",
        top: 0,
        background: "var(--bg, #fff)",
        zIndex: 10,
      }}
    >
      
      <Link
        to="/"
        className="logo"
        style={{ fontWeight: 800, fontSize: 20, textDecoration: "none" }}
      >
        Reboot
      </Link>

     
      <nav
        className="nav-menu"
        style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}
      >
        <NavLink to="/" className={linkClass} end>
          Inicio
        </NavLink>

     
        {loading && <span style={{ opacity: 0.7 }}>Cargando categorías…</span>}
        {err && <span style={{ color: "crimson" }}>{err}</span>}

        {!loading &&
          !err &&
          cats.map((c) => (
            <NavLink
              key={c}
              to={`/category/${encodeURIComponent(c)}`}
              className={linkClass}
              style={{ textTransform: "capitalize" }}
            >
              {c}
            </NavLink>
          ))}
      </nav>

  
      <div style={{ marginLeft: "auto" }} />


      <CartWidget />

    </header>
  );
}

