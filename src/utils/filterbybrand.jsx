import React from 'react'

const filterByBrand = (products,category) => {
   const filterBrand = [];

   for(let name in category){
       if(category[name]){
           const result = products.filter(item => item.tittle === name) 
           filterBrand.unshift(...result)
       }
   }
   return filterBrand.length === 0? products : filterBrand;
}

export { filterByBrand}