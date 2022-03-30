import "./productgallery.css"
import{FiShoppingCart } from "react-icons/fi"
import {CgDetailsMore} from "react-icons/cg"
import{BsCartPlus} from "react-icons/bs"
import {BsHeart} from "react-icons/bs"
import {AiTwotoneStar} from "react-icons/ai"
import {useCart,useWishlist} from "../../context/index"


const CardView =(({_id,tittle,description,price,category,categoryName,qty,new_arrival,original_price,discount,image,rating:{rate,count}}) =>
{
  const{cartDispatch} = useCart();
 const{wishlistDispatch} = useWishlist();


  return (
    <div key={_id} class="card-flex-verical">
  <div class="card-img-wrapper">
  <img  src={image}
  className="product-image"
   />
  < BsHeart className="wishlist-icon" size="3rem" onClick = {() => wishlistDispatch({
    type:"ADD_TO_WISHLIST",
    payload: {_id,tittle,description,price,category,categoryName,qty,new_arrival,original_price,discount,image,rating:{rate,count}}
    })}/>
  { new_arrival && <div className="new-arrival-box">
  <div className = "new-arrival-tag">NEW</div>
  </div>}
  <div className = "rate-text"><AiTwotoneStar/> {rate}|{count}</div>
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
 <BsCartPlus onClick = {() => cartDispatch({
   type:"ADD_TO_CART",
   payload: {_id,tittle,description,price,category,categoryName,qty,new_arrival,original_price,discount,image,rating:{rate,count}}
    })} size="3rem"/>
 </div>
 </div>
 </div>
   )})
    
  


 


  
  export{CardView}






{/* <div key={_id} class="product-card-dimension border-skin grid-product-item">
  <div class="card-img-box">
  <img  src={image}
  className="product-image"
   />
  < BsHeart className="wishlist-icon" size="3rem"/>
  { new_arrival && <div className="new-arrival-box">
  <div className = "new-arrival-tag">NEW</div>
  </div>}
  <div className = "rate-text"><AiTwotoneStar/> {rate}|{count}</div>
  </div>


  <div class="card-description-box">
  <div class="card-head skin">{tittle}</div>
  <div class="card-tag skin">{description}</div>
  </div>
 <div className="card-flex-vertical">
  <div class="original-price skin original"> Rs.{original_price} </div>
  <div class="card-off"> ({discount}% OFF) </div>

  </div>
  <div class="card-flex-vertical">
 <div class="card-price skin final"> Rs.{price}</div>
   <div class="cart-icon-box">
 <BsCartPlus  size="3rem"/>
 </div>
 </div>
 </div>

 */}




  