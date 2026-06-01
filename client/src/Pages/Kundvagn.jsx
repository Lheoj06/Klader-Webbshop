import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Kundvagn() {
  const { cart, setCart } = useContext(CartContext);

  const removeProduct = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Kundvagn</h1>

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>

         <img
         src={item.image}
         alt={item.name}
         className="cart-image"
         />

          <h3>{item.name}</h3>

          <p>
            {item.price} kr × {item.quantity}
          </p>

          <button onClick={() => increaseQuantity(item.id)}>
            +
          </button>

          <button onClick={() => decreaseQuantity(item.id)}>
            -
          </button>

          <button onClick={() => removeProduct(item.id)}>
            Ta bort
          </button>
        </div>
      ))}

     <h2>Totalpris: {totalPrice} kr</h2>
     <Link to="/checkout">
     <button>Checkout</button>
     </Link>
    </div>
  );
}

export default Kundvagn;