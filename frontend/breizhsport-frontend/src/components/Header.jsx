import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        padding: "16px 32px",
        background: "#111",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
      }}
    >
      <h1 style={{ fontSize: "1.8rem", margin: 0 }}>
        <span style={{ color: "#FFB703" }}>BreizhSport</span>
      </h1>

      <nav style={{ display: "flex", gap: "24px" }}>
        <Link
          to="/"
          style={{
            color: "#61dafb",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "color 0.3s",
          }}
        >
          Accueil
        </Link>
        <Link
          to="/catalogue"
          style={{
            color: "#61dafb",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "color 0.3s",
          }}
        >
          Catalogue
        </Link>
        <Link
          to="/a-propos"
          style={{
            color: "#61dafb",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "color 0.3s",
          }}
        >
          À propos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
