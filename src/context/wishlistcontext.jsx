  
import { createContext, useEffect, useReducer,useContext } from "react";
import { wishlistReducer } from "./../reducer/index";
  
  const WishlistContext = createContext()

  const WishlistProvider = ({children}) => {

  const[wishlistState,wishlistDispatch] = useReducer(wishlistReducer,{
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