import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: 20, borderRadius: 10 }}>
      <img src={product.image} alt={product.nom} width="100%" />
      <h2>{product.nom}</h2>
      <p>{product.prix} €</p>
      <Link to={`/produit/${product.id}`}>Voir plus</Link>
    </div>
  );
};

export default ProductCard;
