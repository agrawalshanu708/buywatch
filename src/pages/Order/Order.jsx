import React from "react";
import { Address } from "../../components";
import { useCart } from "../../context";
import "./Order.css";
import {success_anime} from "../../Assets/index"
const Order = () => {
    const {
        cartState: { itemsInCart, priceAfterCoupen },
        cartDispatch,
      } = useCart();
      console.log()
  return <div className="flex-col flex-center">

    <div className="large-text flex-center">Congrats, Your order is successfully placed</div>
    <div className="anime_box">
      <img src = {success_anime} />
      </div>
      <p >It will get deliver to given address within 3 days</p>
      <div className="border address_box">
      <Address showEditIcon = {false}/>
      </div>
   {
    itemsInCart.map(item => <div>
        
    </div>)
   }

  </div>;
};

export { Order };
