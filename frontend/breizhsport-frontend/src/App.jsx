import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import CatalogueCategory from "./pages/CatalogueCategory";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/catalogue/:id" element={<CatalogueCategory />} />
          <Route path="/produit/:id" element={<ProductDetails />} />
          <Route path="/a-propos" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
