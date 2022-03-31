import {useEffect, useState} from 'react'
import axios from "axios"
import "./productgallery.css"
import {useFilter,useCart} from "../../context/index"
import {CardView} from "./cardView"
import {filterByCategory,filterByBrand,filterByDiscount,filterByGender, getSort} from "./../../utils/index"

const ProductGallery = () => {
  const[getData,setGetData] = useState([])  
  const{state}= useFilter();
  const{value} = useCart();


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
const genderData = filterByGender(discountData,state.gender);
 const sortedData = getSort(genderData,state.sortby)
  


  return (
    <>
 
     <div className="col-10 grid-product-container">
        
         {
    sortedData.map((item) => <CardView product = {item}/>)
         }
     </div>
    </>
  )
}

export {ProductGallery}