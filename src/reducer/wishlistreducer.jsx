
const WishlistReducer = (wishlistState,wishlistAction) => {
 console.log(wishlistState)
    switch (wishlistAction.type) {
        case "ADD_TO_WISHLIST":
      return {...wishlistState, 
    itemsInWishlist : [...wishlistState.itemsInWishlist, wishlistAction.payload]
    }      
      case "REMOVE_FROM_WISHLIST":
      return {...wishlistState, 
    itemsInWishlist : wishlistState.itemsInWishlist.filter((item,ind)=> ind !== wishlistAction.payload )
    }    

        default:
            return wishlistState;
    }
}

export {WishlistReducer}