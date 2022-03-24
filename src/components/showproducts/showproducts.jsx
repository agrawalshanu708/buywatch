import {useEffect, useState} from 'react'
import axios from "axios"
import "./showproducts.css"
import {useFilter} from "./../../context/index"
import {filterByCategory,filterByBrand,filterByDiscount,filterByGender} from "./../../utils/index"

const ShowProducts = () => {
  const[getData,setGetData] = useState([])  
  const{state}= useFilter();

    useEffect(() =>{
        const fetchData = async () => {
            try {
                const pData = await axios.get("/api/products")
                setGetData(pData.data.products)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData();
    },[])

const defaultData = [...getData];
const categoryData =  filterByCategory(defaultData,state.categoryName);
const brandData = filterByBrand(categoryData,state.brandName);
const discountData = filterByDiscount(brandData,state.discount);
const genderData = filterByGender(discountData,state.gender)
  
  return (
    <>
     <div className="col-9 grid-product-container">
         {
      genderData.map(({_id,tittle,description,price,category,categoryName,qty,best_selling,new_arrival,original_price,discount,image}) => 
           <div class="product-card-dimension border-skin grid-product-item">
           <div class="card-img-box">
           <img src={image} />
           <span class="material-icons wishlist-icon">favorite_border</span>
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
           <div classname="card-after-hovered">
               <button>Cart</button>
               <button>Wishlist</button>
           </div>
           {/* <div class="button-box skin">
           <button class="card-buttons">ADD TO CART</button>
           </div> */}
           </div>
           )
         }
     </div>
    </>
  )
}

export {ShowProducts}