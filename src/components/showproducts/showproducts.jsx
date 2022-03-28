import {useEffect, useState} from 'react'
import axios from "axios"
import "./showproducts.css"
import {useFilter} from "./../../context/index"
import {cardView} from "./cardView"
import {filterByCategory,filterByBrand,filterByDiscount,filterByGender, getSort} from "./../../utils/index"

const ShowProducts = () => {
  const[getData,setGetData] = useState([])  
  const[loader,setLoader] = useState(true)
  const{state}= useFilter();

    useEffect(() =>{
        const fetchData = async () => {
            try {
                const pData = await axios.get("/api/products")
                setTimeout(() => {
                setGetData(pData.data.products)  
                setLoader(false)
                },1000);
                
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
     {loader && <h2>Loading.....</h2>}
         {
       sortedData.length>0 ?sortedData.map(cardView): <p>Sorry, These combination are not in our database</p>
         }
     </div>
    </>
  )
}

export {ShowProducts}