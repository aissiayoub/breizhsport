import { Link } from "react-router-dom";
import catalogues from "../data/catalogues";

const Catalogue = () => {
  return (
    <div style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h2
        style={{ textAlign: "center", fontSize: "2rem", marginBottom: "40px" }}
      >
        🗂️ Nos Catalogues
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
        }}
      >
        {catalogues.map((cat) => (
          <Link
            key={cat.id}
            to={`/catalogue/${cat.id}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
              overflow: "hidden",
              transform: "scale(1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(0, 0, 0, 0.08)";
            }}
          >
            <img
              src={cat.image}
              alt={cat.nom}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "20px", textAlign: "center" }}>
              <h3 style={{ margin: "0", fontSize: "1.2rem", color: "#333" }}>
                {cat.nom}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
