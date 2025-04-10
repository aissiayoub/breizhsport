import { useParams } from "react-router-dom";
import catalogues from "../data/catalogues";

const ProductDetails = () => {
  const { id } = useParams();
  let produit = null;

  for (const cat of catalogues) {
    const found = cat.produits.find((p) => p.id === id);
    if (found) {
      produit = found;
      break;
    }
  }

  if (!produit)
    return (
      <div style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>❌ Produit introuvable</h2>
      </div>
    );

  return (
    <div
      style={{
        padding: "40px 20px",
        maxWidth: "900px",
        margin: "0 auto",
        background: "#fff",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
      }}
    >
      <h2
        style={{ fontSize: "2rem", marginBottom: "20px", textAlign: "center" }}
      >
        {produit.nom}
      </h2>

      <img
        src={produit.image}
        alt={produit.nom}
        style={{
          width: "100%",
          maxHeight: "450px",
          objectFit: "contain",
          borderRadius: "12px",
          marginBottom: "25px",
          backgroundColor: "#f8f8f8",
        }}
      />

      <p style={{ fontSize: "1.3rem", fontWeight: "bold", color: "#007bff" }}>
        💰 {produit.prix} €
      </p>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#444" }}>
        {produit.description}
      </p>
    </div>
  );
};

export default ProductDetails;
