import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Betalningklar() {
  const { cart, setCart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🎉 Tack för din beställning!</h1>

      <p>
        Din order har tagits emot och kommer att behandlas inom kort.
      </p>

      <h2>Din beställning</h2>

      {cart.length === 0 ? (
        <p>Inga produkter att visa.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} style={{ marginBottom: "15px" }}>
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100px",
                borderRadius: "8px"
              }}
            />

            <p>
              <strong>{item.name}</strong>
            </p>

            <p>
              {item.quantity} st × {item.price} kr
            </p>
          </div>
        ))
      )}

      <h3>Totalpris: {totalPrice} kr</h3>

      <Link to="/">
        <button onClick={clearCart}>
          Fortsätt handla
        </button>
      </Link>
    </div>
  );
}

export default Betalningklar;