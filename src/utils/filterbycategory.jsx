const filterByCategory = (products,category) => {
    let filterData = [];
    for(let name in category){
        if(category[name]){
            const result = products.filter((item) => item.categoryName === name);
            filterData.unshift(...result)
        }
    }
    
return filterData.length===0? products: filterData; 
}

export{filterByCategory};


