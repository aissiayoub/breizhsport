const Footer = () => {
  return (
    <footer
      style={{
        background: "#111",
        color: "#eee",
        padding: "30px 20px",
        marginTop: "60px",
        textAlign: "center",
        fontSize: "0.9rem",
        marginBottom: "0",
        position: "relative",
      }}
    >
      <p>
        © {new Date().getFullYear()} <strong>BreizhSport</strong>. Tous droits
        réservés.
      </p>
      <p style={{ marginTop: "10px", color: "#aaa" }}>
        Conçu avec ❤️ pour les passionnés de sport.
      </p>
    </footer>
  );
};

export default Footer;
