const filterBySearch = (products,val) => {

    if(val){
    return products.filter(item => item.tittle.includes(val) )
    }else{
        return products
    }
}
export {filterBySearch} 