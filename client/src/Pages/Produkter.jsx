import { useEffect, useState } from "react";

function Produkter() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Alla");

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts =
    selectedCategory === "Alla"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div>
      <h1>Produkter</h1>

      <button onClick={() => setSelectedCategory("Alla")}>
        Alla
      </button>

      <button onClick={() => setSelectedCategory("Tröjor")}>
        Tröjor
      </button>

      <button onClick={() => setSelectedCategory("Byxor")}>
        Byxor
      </button>

      <button onClick={() => setSelectedCategory("Skor")}>
        Skor
      </button>

      <button onClick={() => setSelectedCategory("Accessoarer")}>
        Accessoarer
      </button>

      {filteredProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price} kr</p>
          <p>{product.category}</p>
        </div>
      ))}

      <button>Lägg i varukorg</button>
    </div>
  );
}

export default Produkter;