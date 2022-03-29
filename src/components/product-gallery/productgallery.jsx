import {useEffect, useState} from 'react'
import axios from "axios"
import "./productgallery.css"
import {useFilter} from "../../context/index"
import {cardView} from "./cardView"
// import {filterByCategory,filterByBrand,filterByDiscount,filterByGender, getSort} from "./../../utils/index"

const ProductGallery = () => {
  const[getData,setGetData] = useState([])  

  const{state}= useFilter();

    useEffect(() =>{
        const fetchData = async () => {
            try {
                const pData = await axios.get("/api/products")
                setTimeout(() => {
                setGetData(pData.data.products)  
                },1000);
                
            } catch (error) {
                console.error(error)
            }
        }
        fetchData();
    },[])

// const defaultData = [...getData];
// const categoryData =  filterByCategory(defaultData,state.categoryName);
// const brandData = filterByBrand(categoryData,state.brandName);
// const discountData = filterByDiscount(brandData,state.discount);
// const genderData = filterByGender(discountData,state.gender);
//  const sortedData = getSort(genderData,state.sortby)
  


  return (
    <>
     <div className="col-10 grid-product-container">
     
         {
     getData.map(cardView)
         }
     </div>
    </>
  )
}

export {ProductGallery}