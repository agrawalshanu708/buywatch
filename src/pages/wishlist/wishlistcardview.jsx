import React from "react"
import{FiShoppingCart} from "react-icons/fi"
import {AiOutlineClose,AiTwotoneStar } from "react-icons/ai"
import {useWishlist,useCart} from "./../../context/index"
import "./wishlist.css"

const WishlistCardView = ({product,index}) => {

  const{_id,tittle,description,price,category,categoryName,qty,new_arrival,original_price,discount,image,rating:{rate,count}} = product
  const{wishlistDispatch} = useWishlist()
  const{cartDispatch} = useCart()

    const dispatcherFunction = (id) => {
       wishlistDispatch({
        type:"REMOVE_FROM_WISHLIST",
        payload : id
         })
      cartDispatch({
        type : "ADD_TO_CART",
        payload: product

      })
    }
    return (
      <div key={_id} class="card">
      <div class="card__media">
      <img  src={image}/>
      <AiOutlineClose  className="card__icon" size="3rem" onClick = {() => wishlistDispatch({
        type:"REMOVE_FROM_WISHLIST",
        payload: _id
        })}/>
      { new_arrival && <div className="card__new_arrival">
      <div className = "">NEW</div>
      </div>}
      <div className = "card__rate"><AiTwotoneStar/> {rate}|{count}</div>
      </div>
    
    
      <div class="card__details">
      <div class="card__head">{tittle}</div>
      <div class="card__desc">{description}</div>
    
     <div className="card__price card__horizontal__flex">
     <div class="card-price"> Rs.{price}</div>
      <div class="original-price"> Rs.{original_price} </div>
      <div class="card-off"> ({discount}% OFF) </div>
      </div>
    </div>
      <div class="card__button">
      <button class="btn btn-primary"  onClick = {() => dispatcherFunction(_id)} >Go To Cart <FiShoppingCart size="2rem"/></button>
     </div>
     </div>
    )
}

export {WishlistCardView }