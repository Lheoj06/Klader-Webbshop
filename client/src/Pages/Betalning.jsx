import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Betalning() {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Kort");

 const handleSubmit = async (e) => {
  e.preventDefault();

  const order = {
    customerName: name,
    email: email,
    phone: phone,
    paymentMethod: paymentMethod,
    products: cart,
    totalPrice: cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )
  };

  await fetch("http://localhost:3000/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(order)
  });

  navigate("/confirmation");
};

  return (
    <div>
      <h1>Betalning</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Namn</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Telefonnummer</label>
          <br />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Betalningsmetod</label>
          <br />

          <select
            value={paymentMethod}
            onChange={(e) =>
              setPaymentMethod(e.target.value)
            }
          >
            <option>Kort</option>
            <option>Swish</option>
          </select>
        </div>

        <br />

        <button type="submit">
          Slutför köp
        </button>
      </form>
    </div>
  );
}

export default Betalning;