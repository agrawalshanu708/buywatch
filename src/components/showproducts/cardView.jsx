import "./showproducts.css"
import {AiTwotoneStar} from "react-icons/ai"
import{FiShoppingCart } from "react-icons/fi"
import {CgDetailsMore} from "react-icons/cg"
const showImage = (e) => e.target.style.width = "20%"
const card = () => {
    return (
        <>
        
        </>
    )
}


const cardView =(({_id,tittle,description,price,category,categoryName,qty,new_arrival,original_price,discount,image,rating:{rate,count}}) => 
  <div key={_id} class="product-card-dimension border-skin grid-product-item">
  <div class="card-img-box">
  <img  src={image}
  className="product-image"
   />
  <span class="material-icons wishlist-icon">favorite_border</span>
  <div class="rating-box">
  {/* <div>
  <AiTwotoneStar/>
  </div> */}
    
      <p class="rating">{rate}|{count}</p>
  
  </div>
  { new_arrival && <div className="new-arrival-box">
  <p className = "new-arrival-tag">NEW</p>
  </div>}
  </div>

  <div className="card-wrapper">
  <div class="card-description-box">
  <div class="card-head skin">{tittle}</div>
  <div class="card-tag skin">{description}</div>
  </div>
  <div class="card-price-box">
  <div class="card-price skin final"> Rs.{price}</div>
  <div class="original-price skin original"> Rs.{original_price} </div>
  <div class="card-off"> ({discount}% OFF) </div></div>
  </div>
  <div className="hovers-btns" >
      <button className="cart-btn">Add to Cart <FiShoppingCart size="2rem"/></button>
      <button className="details-btn">Details<CgDetailsMore size="2rem"/></button>
  </div>
  </div>
  )

  export{cardView}