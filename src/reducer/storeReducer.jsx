const storeReducer = (storeState,storeAction) => {
  switch (storeAction.type) {
      case "FETCH_DATA":
return {...storeState,
storeItems : [ ...storeState.storeItems,...storeAction.payload]
}
  case "IS_HEART_FILLED":
  return {...storeState,
storeItems : storeState.storeItems.map(item => item._id === storeAction.payload ? {...item, isFillHeart: !item.isFillHeart}: item)
}    
  
      default:
     return storeState
  }  
}
export {storeReducer}