const filterBySearch = (products,val) => {

    if(val){
    return products.filter(item => item.tittle === val)
    }else{
        return products
    }
}
export {filterBySearch} 