import { createContext, useEffect, useReducer,useContext } from "react";
import {cartReducer} from "./../reducer/index"

const CartContext = createContext();

const CartProvider = ({children}) => {

const[cartState,cartDispatch] = useReducer(cartReducer,{
    itemsInCart : []
})

    return (
   <CartContext.Provider value = {{cartState,cartDispatch}}>
       {children}
   </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);

export{useCart,CartProvider};