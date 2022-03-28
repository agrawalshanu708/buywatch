import React from 'react'

const getSort = (products,sortby) => {
   switch (sortby) {
       case "PRICE_HIGH_TO_LOW":
      return products.sort((a,b) => b.price-a.price)     
       case "PRICE_LOW_TO_HIGH":
           return products.sort((a,b) => a.price-b.price) 
       case "RATING_HIGH_TO_LOW":
         return products.sort((a,b) => b.rating["rate"]-a.rating["rate"])      
       case "RATING_LOW_TO_HIGH":
          return products.sort((a,b) => a.rating["rate"]-b.rating["rate"])  

       case "DEFAULT":
           return products
       default:
        return products
   }
}

export {getSort}