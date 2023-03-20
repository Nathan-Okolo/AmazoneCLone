import React from "react";
import "./css/subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";

function Subtotal() {
  const [state, dispatch] = useStateValue();

  const calculateTotal = (state) => {
    return state.reduce((price, item) => item.price + price, 0);
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({`${state.basket?.length} items`}):{" "}
              <strong>${calculateTotal(state.basket)}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This Order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
