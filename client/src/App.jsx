import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import logo from "./assets/logga.png";

import Hem from "./pages/Hem";
import Produkter from "./pages/Produkter";
import Kundvagn from "./pages/Kundvagn";
import Betalning from "./pages/Betalning";
import Betalningklar from "./pages/Betalningklar";

function App() {
  const { cart } = useContext(CartContext);

  return (
    <BrowserRouter>

      <nav className="navbar">

          <div className="logo-container">

    <img
      src={logo}
      alt="Kläder och Sånt"
      className="logo"
    />

    <h2>Kläder & Sånt</h2>

  </div>

  <div className="nav-links">
    <Link to="/">Hem</Link>
    <Link to="/products">Produkter</Link>
  </div>

  <Link to="/cart" className="cart-icon">
    🛒
    {cart.length > 0 && (
      <span className="cart-count">{cart.length}</span>
    )}
  </Link>

</nav>
      
      <Routes>
        <Route path="/" element={<Hem />} />
        <Route path="/products" element={<Produkter />} />
        <Route path="/cart" element={<Kundvagn />} />
        <Route path="/checkout" element={<Betalning />} />
        <Route path="/confirmation" element={<Betalningklar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;