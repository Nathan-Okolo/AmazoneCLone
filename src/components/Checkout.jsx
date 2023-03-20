import React from "react";
import "./css/checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="chechout_ad"
          alt="ads"
          src="https://ng.jumia.is/cms/0-5-brand-festival/2022/1brand-days/sept-23-xiaomi/Mi-top-strip.gif"
        />

        <div>
          <h2 className="checkout_title">Your Shoping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          {/* {BasketItem} */}
          {/* {BasketItem} */}
          {/* {BasketItem} */}
          {/* {BasketItem} */}
        </div>
      </div>

      <div className="checkout_right">
        {/* <h2>Subtotal wil go here</h2> */}
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
