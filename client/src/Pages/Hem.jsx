import heroImage from "../assets/HeroBild.png";

function Hem() {
  return (
    <div>
      <div className="hero-section">
        <img
          src={heroImage}
          alt="Kläder och Sånt"
          className="hero-image"
        />

        <div className="hero-text">
          <h1>Välkommen till Kläder och Sånt!</h1>
          <p>
            Din destination för hållbara och trendiga kläder.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hem;