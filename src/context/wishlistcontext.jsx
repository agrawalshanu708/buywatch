import React from "react"
import { createContext, useEffect, useReducer,useContext } from "react";
import { WishlistReducer } from "./../reducer/index";
  
  const WishlistContext = createContext()

  const WishlistProvider = ({children}) => {

  const[wishlistState,wishlistDispatch] = useReducer(WishlistReducer,{
      itemsInWishlist:[]
  })


      return (
          <WishlistContext.Provider value = {{wishlistState,wishlistDispatch}}>
              {children}
           </WishlistContext.Provider>
      )
  }
  const useWishlist = () => useContext(WishlistContext);

  export {useWishlist,WishlistProvider}