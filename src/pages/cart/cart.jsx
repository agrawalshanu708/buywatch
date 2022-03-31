import React from 'react'
import {horizontalCardView} from "./horizontalcardview"

import "./cart.css"
import {useCart} from "./../../context/index"
import {HorizontalCardView} from "./horizontalcardview"

const Cart = () => {
 const{cartState} = useCart()

 const getTotalPrice = (acc,curr) => acc+ curr.price * curr.qty
 const getOriginalPrice = (acc,curr) => acc + curr.original_price * curr.qty
 const getConviencefee = () => 99

  const getDiscount = () =>   cartState.itemsInCart.reduce(getOriginalPrice,0) - cartState.itemsInCart.reduce(getTotalPrice,0)
  const getNetPrice = () => cartState.itemsInCart.reduce(getTotalPrice,0) + getConviencefee()
  return (
    <>
    <div className="cart-page">
    <div className="outer-flex-horizontal col-6">{
         cartState.itemsInCart.map( (item,index) => <HorizontalCardView product={item} index = {index}/>)
         }</div>
{/* ------------------------------------------ */}

<div class="order-box col-4">
            <h2>Price Details</h2>
            <div class="inner-horizontal-flex prop">
            <div class="cart-text">Total MRP </div>
            <div class="cart-text">{cartState.itemsInCart.reduce(getTotalPrice,0)}</div>
              </div>
              <div class="inner-horizontal-flex prop">
              <div class="cart-text">Discount On MRP </div>
              <div class="cart-text">-{getDiscount()} </div>
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
            <div class="cart-text">{getNetPrice()}</div>
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