import React from 'react'

const filterByDiscount = (products,discount) => {
 switch (discount) {
     case "ABOVE_10":
     return products.filter(item => item.discount >= 10)    
      case "ABOVE_20":
      return products.filter(item => item.discount >= 20) 
      case "ABOVE_30":
     return products.filter(item => item.discount >= 30) 
     case "ABOVE_40":
         return products.filter(item => item.discount >= 40) 
      case "ABOVE_50":
          return products.filter(item => item.discount >= 50)         
 
     default:
         return products
 }
    
}

export {filterByDiscount}