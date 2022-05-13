import React from "react"
import "./productgallery.css"
import {useFilter,useCart,useStore} from "../../context/index"
import {CardView} from "./cardView"
import {filterByCategory,filterByBrand,filterByDiscount,filterByGender,filterByRating,filterBySearch, getSort} from "./../../utils/index"

const ProductGallery = () => {
  const{state}= useFilter();

const{storeState} = useStore();

const defaultData = [...storeState.storeItems];
const categoryData =  filterByCategory(defaultData,state.categoryName);
const brandData = filterByBrand(categoryData,state.brandName);
const discountData = filterByDiscount(brandData,state.discount);
const genderData = filterByGender(discountData,state.gender);
const ratingData = filterByRating(genderData,state.rating);
const searchData = filterBySearch(ratingData,state.searchValue)
const sortedData = getSort(searchData,state.sortby)
  


  return (
    <>
 
     <div className="col-10 card__container">
        
         {
    sortedData.map((item) => <CardView product = {item}/>)
         }
     </div>
    </>
  )
}

export {ProductGallery}