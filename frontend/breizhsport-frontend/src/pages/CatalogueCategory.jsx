import { useParams, Link } from "react-router-dom";
import catalogues from "../data/catalogues";

const CatalogueCategory = () => {
  const { id } = useParams();
  const categorie = catalogues.find((cat) => cat.id === id);

  if (!categorie)
    return <p style={{ padding: 20 }}>❌ Catalogue introuvable</p>;

  return (
    <div style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h2
        style={{ fontSize: "2rem", marginBottom: "30px", textAlign: "center" }}
      >
        {categorie.nom}
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 24,
        }}
      >
        {categorie.produits.map((prod) => (
          <div
            key={prod.id}
            style={{
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              overflow: "hidden",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
            }}
          >
            <img
              src={prod.image}
              alt={prod.nom}
              style={{
                width: "100%",
                maxHeight: "450px",
                objectFit: "contain",
                borderRadius: "12px",
                marginBottom: "25px",
                backgroundColor: "#f8f8f8",
              }}
            />
            <div style={{ padding: "20px" }}>
              <h3 style={{ fontSize: "1.1rem", marginBottom: 10 }}>
                {prod.nom}
              </h3>
              <p style={{ fontWeight: "bold", marginBottom: 10 }}>
                {prod.prix} €
              </p>
              <Link
                to={`/produit/${prod.id}`}
                style={{
                  color: "#007bff",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Voir le produit →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogueCategory;
