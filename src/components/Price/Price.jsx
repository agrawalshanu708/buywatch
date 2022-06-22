import React from "react";
import { useCart } from "../../context";
import {useNavigate} from "react-router-dom"
import "./Price.css";
const Price = ({showButton}) => {
  const {
    cartState: { orginalPrice, discount, priceAfterCoupen },
  } = useCart();
  const getConviencefee = () => 99;
const navigate = useNavigate();
  return (
    <>
      <section class="cart_price-details">
        <h3 className="center">Price Details</h3>
        <div className="divider"></div>
        <div class="inner-horizontal-flex prop">
          <div class="cart-text">Total MRP </div>
          <div class="cart-text">{orginalPrice}</div>
        </div>
        <div class="inner-horizontal-flex prop">
          <div class="cart-text">Discount On MRP </div>
          <div class="cart-text">-{discount}</div>
        </div>
        <div class="inner-horizontal-flex prop">
          <div class="cart-text">Coupon Discount </div>
          <div class="cart-text"> Apply coupon</div>
        </div>
        <div class="inner-horizontal-flex prop">
          <div class="cart-text">Convenience Fee </div>
          <div class="cart-text">Rs.{getConviencefee()}</div>
        </div>
        <div class="inner-horizontal-flex prop">
          <div class="cart-text">Total Amount </div>
          <div class="cart-text">{priceAfterCoupen}</div>
        </div>
        {showButton && (
          <div class="button-box ">
            <button
              class="order-place-btn"
              onClick={() => {
                navigate("/checkout");
              }}
            >
              Checkout
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export { Price };
