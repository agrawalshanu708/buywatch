import React from "react";
import { Address, Price } from "../../components";
import { useCart } from "../../context";
import { displayRazorpay } from "../../utils/checkout";
import "./checkout.css";
const Checkout = () => {
  const {
    cartState: { itemsInCart, priceAfterCoupen },
    cartDispatch,
  } = useCart();

  return (
    <div className="checkout__page">
      <div className="user_bill border">
        <h3 className="center">Order Details</h3>

        {itemsInCart.map((item) => (
          <div className="justify-sb ">
            <p>{item.description}</p>
            <p>{item.qty}</p>
          </div>
        ))}

        <div className="divider"></div>
        <Price showButton={false} />
        <div class="divider"></div>
        <h3 className="center">Delivery Address</h3>
        <div className="divider"></div>

        <Address />
        <div className="flex-center">
          <button
            className="btn button"
            onClick={() => {
              displayRazorpay(priceAfterCoupen);
              cartDispatch({ type: "CLEAR_CART" });
            }}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export { Checkout };
