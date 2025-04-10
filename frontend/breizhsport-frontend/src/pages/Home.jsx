const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        Bienvenue sur <strong>BreizhSport</strong>
      </h1>
      <p style={{ marginBottom: "30px" }}>
        Découvrez notre sélection d’équipements de sport professionnels !
      </p>

      <img
        src="/images/home-banner.jpg"
        alt="Hero BreizhSport"
        style={{
          display: "block", // centre l’image dans la page
          margin: "40px auto", // espacement haut/bas et centrage horizontal
          width: "100%",
          maxWidth: "1400px", // limite la largeur sur très grands écrans
          height: "auto", // empêche la déformation
          objectFit: "contain", // affiche l’image complète sans crop
          borderRadius: "12px", // coins arrondis
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)", // ombre douce
          padding: "0 16px", // léger espacement sur les côtés
        }}
      />

      <p style={{ marginTop: "20px", fontSize: "1.2rem", color: "#444" }}>
        Que vous soyez amateur ou professionnel, nous avons l’équipement qu’il
        vous faut.
      </p>
    </div>
  );
};

export default Home;
