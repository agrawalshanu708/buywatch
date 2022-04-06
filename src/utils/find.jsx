const findInArray = (id,products) => {
    return products.find(item => item._id === id)
}
export {findInArray} 