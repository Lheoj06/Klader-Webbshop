import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hem from "./pages/Hem";
import Produkter from "./pages/Produkter";
import Kundvagn from "./pages/Kundvagn";
import Betalning from "./pages/Betalning";
import Betalningklar from "./pages/Betalningklar";

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Hem</Link>
        <Link to="/products">Produkter</Link>
        <Link to="/cart">Kundvagn</Link>
        <Link to="/checkout">Betalning</Link>
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