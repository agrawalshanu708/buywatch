const filterByRating= (products,rating) => {
    switch (rating) {
        case 1:
        return products.filter(item => item.rating.rate >= rating)    
         case 2:
         return products.filter(item => item.rating.rate >= rating) 
         case 3:
        return products.filter(item => item.rating.rate >= rating) 
        case 4:
            return products.filter(item => item.rating.rate >= rating) 
         case 5:
             return products.filter(item => item.rating.rate >= rating)         
    
        default:
            return products
    }
}


export {filterByRating}