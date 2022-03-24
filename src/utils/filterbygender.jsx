import React from 'react'

const filterByGender = (products,gender) => {
  
    switch (gender) {
        case "SHOW_MEN":
        return products.filter(item => item.category === "male")    
        case "SHOW_WOMEN":
        return products.filter(item => item.category === "female")
        case "SHOW_KID":
         return products.filter(item => item.category === "kid")   
    
        default:
           return products
    }
}

export {filterByGender}