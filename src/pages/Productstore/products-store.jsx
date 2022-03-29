import React from 'react'
import {Filterbar} from "./../../components/index"
import {useFilter} from "./../../context/index"
const ProductStore = () => {
  
  const{state,dispatch} =useFilter();
  const{sortby,gender,categoryName,brandName,discount} = state;
  const{casual,formal,digital,sports} = categoryName;
  const{apple,fossil,fastrack,titan} = brandName;
  return (
    <> 
    <div className="store-page">
     <Filterbar/>
    
      
     </div>
    
    </>
  )
}

export  {ProductStore}