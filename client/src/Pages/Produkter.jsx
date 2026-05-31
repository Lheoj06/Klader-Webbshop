import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Produkter() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Alla");
  const { cart, setCart } = useContext(CartContext);

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

        const addToCart = (product) => {
  const existingProduct = cart.find(
    (item) => item.id === product.id
  );

  if (existingProduct) {
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    setCart([
      ...cart,
      { ...product, quantity: 1 }
    ]);
  }
};

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

      

          <div className="products-container">

      {filteredProducts.map((product) => (
        <div className="product-card" key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price} kr</p>
          <p>{product.category}</p>
          <img
  src={product.image}
  alt={product.name}
  className="product-image"
/>

          <button onClick={() => addToCart(product)}>
            Lägg i varukorg
          </button>
        </div>
      ))}

    </div>
  </div>
  );
}

export default Produkter;