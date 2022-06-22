import React, { useState } from 'react'
import {horizontalCardView} from "./horizontalcardview"
import "./cart.css"
import {useCart} from "./../../context/index"
import {HorizontalCardView} from "./horizontalcardview"
import { AddressModal } from './AddressModal'

const Cart = () => {
 const{cartState} = useCart()
const[userAddress,setUserAddress] = useState({
  firstName: "shanu",
  lastName: "agrawal", 
  address:"old post office road",
  city: "guna",
  state: "madhya pradesh",
  contactNumber: 9424431504
})
 const getTotalPrice = (acc,curr) => acc+ curr.price * curr.qty
 const getOriginalPrice = (acc,curr) => acc + curr.original_price * curr.qty
 const getConviencefee = () => 99

  const getDiscount = () =>   cartState.itemsInCart.reduce(getOriginalPrice,0) - cartState.itemsInCart.reduce(getTotalPrice,0)
  const getNetPrice = () => cartState.itemsInCart.reduce(getTotalPrice,0) + getConviencefee()
  const getTotalQty = (acc,curr) => acc+ curr.qty
  return (
    <>
    <div className="cart-page">
      <section className="progress__bar justify-sb  "> 
      <h2>Total quantity: {cartState.itemsInCart.reduce(getTotalQty,0)} </h2>
      <div className="delivery-box  flex-row justify-fe">
        <h4 className="medium-text">Delivery Address</h4>
        <div>
        <p className="small-text">{`${userAddress.firstName} ${userAddress.lastName}`}</p>
        <p className="small-text">{userAddress.address}</p>
        <p className="small-text">{`${userAddress.city}, ${userAddress.state}`}</p>
        <p className="small-text">{userAddress.contactNumber}</p>
        </div> 
        <AddressModal setUserAddress = {setUserAddress} />
        </div> 
      </section>
      <section className="cart__card__container">{
         cartState.itemsInCart.map( (item,index) => <HorizontalCardView product={item} index = {index}/>)
         }</section>
{/* ------------------------------------------ */}

<section class="cart_price-details">
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
            <div class="button-box ">
         <button class="order-place-btn">Place Order</button>
        </div>



        </section>

</div>
    </>
  )
}

export { Cart}