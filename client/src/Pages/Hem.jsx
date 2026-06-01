import heroImage from "../assets/HeroBild.png";
import { Link } from "react-router-dom";

function Hem() {
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
    </div>
  );
}

export default Hem;