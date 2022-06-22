import React, { useEffect, useState } from "react";
import "./cart.css";
import { useCart } from "./../../context/index";
import { HorizontalCardView } from "./horizontalcardview";
import { AddressModal } from "./AddressModal";
import { displayRazorpay } from "../../utils/checkout";
import { useNavigate } from "react-router-dom";
import { Price } from "../../components";
const Cart = () => {
  const {
    cartState: { itemsInCart },
    cartDispatch,
  } = useCart();
  const [userAddress, setUserAddress] = useState({
    firstName: "shanu",
    lastName: "agrawal",
    address: "old post office road",
    city: "guna",
    state: "madhya pradesh",
    contactNumber: 9424431504,
  });
  const navigate = useNavigate();
  useEffect(() => {
    cartDispatch({ type: "GET_PRICE" });
    cartDispatch({ type: "GET_ORIGINAL_PRICE" });
    cartDispatch({ type: "GET_DISCOUNT" });
    cartDispatch({ type: "GET_FINAL_PRICE" });
  }, [itemsInCart]);

  const getTotalQty = (acc, curr) => acc + curr.qty;

  return (
    <>
      <div className="cart-page">
        <section className="progress__bar justify-sb  ">
          <h2>Total quantity: {itemsInCart.reduce(getTotalQty, 0)}</h2>
        </section>

        <section className="cart__card__container">
          {itemsInCart.map((item, index) => (
            <HorizontalCardView product={item} index={index} />
          ))}
        </section>
        <Price showButton = {true} />
   
      </div>
    </>
  );
};

export { Cart };
