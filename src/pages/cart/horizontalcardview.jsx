import {AiOutlineClose} from "react-icons/ai"
import {BsHeart} from "react-icons/bs"
import "./cart.css"
import{useCart,useWishlist} from "./../../context/index"
const HorizontalCardView = ( {product,index}) => {
    const{_id,tittle,description,price,category,categoryName,qty,new_arrival,original_price,discount,image} = product
    const{cartDispatch} = useCart()
    const{wishlistDispatch} = useWishlist()

    const dispatcherFunctionCart = (index) => {
        cartDispatch({
            type:"REMOVE_FROM_CART",
           payload : index
        })
        wishlistDispatch({
            type :"ADD_TO_WISHLIST",
            payload: {_id,tittle,description,price,category,categoryName,qty,new_arrival,original_price,discount,image}
        })
    }
    return (

       
        
        <div class="horizontal-flex-outer" key="index">
        
        <div class="card-img-box">
        <img src= {image} />
        </div>
        
            <div class="inner-vertical-flex content-box">
           
              <div class="card-head">{tittle}</div>
              <div class="card-tag">{description}</div>
              <div class="card-seller skin">Sold By: RetailNet</div>
        
            <div class="inner-horizontal-flex">
            <div class="cart-price"> Rs.{price} </div>
            <div class="cart-price original"> Rs.{original_price}</div>
            <div class="cart-discount"> ({discount}% OFF) </div>
            </div>
        
        <div class = "inner-horizontal-flex">
        <div class="card-qty">Qty: {qty}</div>
        <button class="qty-btn" onClick = {() => cartDispatch({type:"INCRE_QTY",payload:index})}>+</button>
        <button class="qty-btn negative-btn" onClick = {() => cartDispatch({type:"DECRE_QTY",payload:index})}>-</button>
        </div>
        
        </div>
        <div class="inner-vertical-flex">
        <AiOutlineClose onClick = {() => cartDispatch({type:"REMOVE_FROM_CART",payload: index})} size="2rem"/>
         <BsHeart size = "2rem"  onClick = {() => dispatcherFunctionCart(index)}/> 
        </div>
        
        </div>
      
    )
}

export{HorizontalCardView}