import "./productgallery.css"
import{FiShoppingCart} from "react-icons/fi"
import {BsHeart} from "react-icons/bs"
import {AiTwotoneStar} from "react-icons/ai"
import {useCart,useWishlist} from "../../context/index"


const CardView = ({product}) =>
{
  const{cartDispatch} = useCart();
 const{wishlistDispatch} = useWishlist();
const{_id,tittle,description,price,category,categoryName,qty,new_arrival,original_price,discount,image,rating:{rate,count}} = product;

  return (
    <div key={_id} class="card">
  <div class="card__media">
  <img  src={image}/>
  <BsHeart className="card__icon" size="3rem" onClick = {() => wishlistDispatch({
    type:"ADD_TO_WISHLIST",
    payload: product
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
  <button class="btn btn-primary"  onClick = {() => cartDispatch({
   type:"ADD_TO_CART",
   payload: product
    })} >ADD TO Cart <FiShoppingCart size="2rem"/></button>
 </div>
 </div>
   )}
    
  


 


  
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




  