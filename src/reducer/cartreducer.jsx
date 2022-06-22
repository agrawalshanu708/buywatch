import React from "react";
const cartReducer = (cartState, cartAction) => {
  switch (cartAction.type) {
    case "ADD_TO_CART":
      return {
        ...cartState,
        itemsInCart: [...cartState.itemsInCart, cartAction.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...cartState,
        itemsInCart: cartState.itemsInCart.filter(
          (item) => item._id !== cartAction.payload
        ),
      };
    case "INCRE_QTY":
      return {
        ...cartState,
        itemsInCart: cartState.itemsInCart.map((item) =>
          item._id === cartAction.payload
            ? { ...item, qty: item.qty + 1 }
            : item
        ),
      };
    case "DECRE_QTY":
      return {
        ...cartState,
        itemsInCart: cartState.itemsInCart.map((item) =>
          item._id === cartAction.payload
            ? item.qty > 1
              ? { ...item, qty: item.qty - 1 }
              : { ...item, qty: 1 }
            : item
        ),
      };
    case "GET_PRICE":
      const getPrice = (acc, curr) => acc + curr.price * curr.qty;
      const price = cartState.itemsInCart.reduce(getPrice, 0);
      return { ...cartState, priceBeforeCoupen: price };

    case "GET_ORIGINAL_PRICE":
      const getOriginalPrice = (acc, curr) =>
        acc + curr.original_price * curr.qty;
      const originalPrice = cartState.itemsInCart.reduce(getOriginalPrice, 0);
      return { ...cartState, orginalPrice: originalPrice };

    case "GET_DISCOUNT":
      const discount = cartState.orginalPrice - cartState.priceBeforeCoupen;
      return { ...cartState, discount: discount };
    case "GET_FINAL_PRICE":
      const finalprice = cartState.priceBeforeCoupen + 99;
      return { ...cartState, priceAfterCoupen: finalprice };

    case "CLEAR_CART":
      return { ...cartState, itemsInCart: [] };
    default:
      return cartState;
  }
};

export { cartReducer };
