import React from 'react'
import {horizontalCardView} from "./horizontalcardview"
import {AiOutlineClose} from "react-icons/ai"
import {BsHeart} from "react-icons/bs"
import "./cart.css"

const Cart = () => {

  return (
    <>
    <div className="cart-page">
        <div className="outer-flex-horizontal col-6">
       
        
<div class="horizontal-flex-outer">

<div class="card-img-box">
<img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11888942/2021/9/28/9dac8560-6d57-459f-bda1-18a473c47a8c1632810240640-boAt--Black-Airdopes-131-M-TWS-IWP-Type-C-Port-Earbuds-74216-1.jpg" />
</div>

    <div class="inner-vertical-flex content-box">
   
      <div class="card-head">boAt</div>
      <div class="card-tag">2nd Gen AirPods</div>
      <div class="card-seller skin">Sold By: RetailNet</div>

    <div class="inner-horizontal-flex">
    <div class="cart-price"> Rs.11999 </div>
    <div class="cart-price original"> Rs.13999 </div>
    <div class="cart-discount"> (30% OFF) </div>
    </div>

<div class = "inner-horizontal-flex">
<div class="card-qty">Qty: 1</div>
<button class="qty-btn">+</button>
<button class="qty-btn negative-btn">-</button>
</div>

</div>
<div class="inner-vertical-flex">
<AiOutlineClose size="2rem"/>
 <BsHeart size = "2rem"/> 
</div>

</div>
</div>
{/* ------------------------------------------ */}

<div class="order-box col-4">
            <h2>Price Details</h2>
            <div class="inner-horizontal-flex prop">
            <div class="cart-text">Total MRP </div>
            <div class="cart-text">Rs.22,399</div>
              </div>
              <div class="inner-horizontal-flex prop">
              <div class="cart-text">DIscount On MRP </div>
              <div class="cart-text">-Rs1,000 </div>
            </div>
            <div class="inner-horizontal-flex prop">
            <div class="cart-text">Coupon Discount </div>
            <div class="cart-text"> Apply coupon</div>
            </div>
            <div class="inner-horizontal-flex prop">

            <div class="cart-text">Convenience Fee </div>
            <div class="cart-text">Rs.99</div>
            </div>
            <div class="inner-horizontal-flex prop">
            <div class="cart-text">Total Amount </div>
            <div class="cart-text">RS.23,787</div>
            </div>
            <div class="button-box">
         <button class="order-place-btn">Place Order</button>
        </div>
        </div>

</div>
    </>
  )
}

export { Cart}