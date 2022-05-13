const WishlistReducer = (wishlistState, wishlistAction) => {
  console.log(wishlistState);
  switch (wishlistAction.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...wishlistState,
        itemsInWishlist: [
          ...wishlistState.itemsInWishlist,
          wishlistAction.payload,
        ],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...wishlistState,
        itemsInWishlist: wishlistState.itemsInWishlist.filter(
          (item) => item._id !== wishlistAction.payload
        ),
      };
    case "CLEAR_WISHLIST":
      return {
        ...wishlistState,
        itemsInWishlist: [],
      };
    default:
      return wishlistState;
  }
};

export { WishlistReducer };
