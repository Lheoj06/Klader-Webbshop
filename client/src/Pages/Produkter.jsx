import { useEffect, useState } from "react";

function Produkter() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Produkter</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price} kr</p>
          <p>{product.category}</p>
        </div>
      ))}
    </div>
  );
}

export default Produkter;