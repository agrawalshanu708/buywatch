import{BsCartPlus} from "react-icons/bs"
import {AiOutlineClose } from "react-icons/ai"
import {useWishlist,useCart} from "./../../context/index"
import "./wishlist.css"

const WishlistCardView = ({product,index}) => {

  const{_id,tittle,description,price,category,categoryName,qty,new_arrival,original_price,discount,image} = product
    const{wishlistDispatch} = useWishlist()
   const{cartDispatch} = useCart()

    const dispatcherFunction = (id) => {
       wishlistDispatch({
        type:"REMOVE_FROM_WISHLIST",
        payload : id
         })
      cartDispatch({
        type : "ADD_TO_CART",
        payload: {_id,tittle,description,price,category,categoryName,qty,new_arrival,original_price,discount,image}

      })
    }
    return (
        <div key={index} class="card-flex-verical">
        <div class="card-img-wrapper">
        <img  src={image}
        className="product-image"
         />
     <AiOutlineClose className="wishlist-remove-btn" onClick = {() => wishlistDispatch({type:"REMOVE_FROM_WISHLIST",payload: index})} size="3rem"/>

        { new_arrival && <div className="new-arrival-box">
        <div className = "new-arrival-tag">NEW</div>
        </div>}
   
        </div>
      
      
        <div class="card-flex-vertical">
        <div class="card-head skin">{tittle}</div>
        <div class="card-tag skin">{description}</div>
        </div>
       <div className="card-flex-horizontal">
        <div class="original-price skin original"> Rs.{original_price} </div>
        <div class="card-off"> ({discount}% OFF) </div>
      
        </div>
        <div class="card-flex-horizontal">
       <div class="card-price skin final"> Rs.{price}</div>
         <div class="cart-icon-box">
       <BsCartPlus onClick = {() => dispatcherFunction(index)} size="3rem"/>
       </div>
       </div>
       </div> 
    )
}

export {WishlistCardView }