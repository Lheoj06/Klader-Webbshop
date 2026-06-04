import heroImage from "../assets/HeroBild.png";
import { Link } from "react-router-dom";

function Hem() {
  const featuredProducts = [
    {
      id: 1,
      name: "Vit Hoodie",
      price: 499,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7"
    },
    {
      id: 2,
      name: "Svarta Sneakers",
      price: 999,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
      id: 3,
      name: "Cargo Pants",
      price: 699,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
    }
  ];

  return (
    <div>
      <div className="hero-section">
        <img
          src={heroImage}
          alt="Kläder och Sånt"
          className="hero-image"
        />

        <div className="hero-content">
          <h1>Ny säsong.<br />Ny stil.</h1>

          <p>
            Upptäck trendiga plagg och moderna favoriter
            för alla tillfällen.
          </p>

          <div className="hero-buttons">
            <Link to="/products">
              <button className="hero-btn-primary">
                Shoppa nu
              </button>
            </Link>

            <Link to="/products">
              <button className="hero-btn-secondary">
                Se produkter
              </button>
            </Link>
          </div>
        </div>
      </div>

      <section className="featured-section">
        <h2>Populära produkter</h2>

        <div className="featured-grid">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to="/products"
              className="featured-card"
            >
              <img
                src={product.image}
                alt={product.name}
              />

              <h3>{product.name}</h3>

              <p>{product.price} kr</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Hem;