import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Betalning() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Kort");

  const handleSubmit = (e) => {
    e.preventDefault();

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