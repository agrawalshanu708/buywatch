const cartReducer = (cartState,cartAction) => {
    switch (cartAction.type) {
        case "ADD_TO_CART":
            return {...cartState, 
                itemsInCart : [...cartState.itemsInCart, cartAction.payload]
                }
        case "REMOVE_FROM_CART":
            return {...cartState,
            itemsInCart : cartState.itemsInCart.filter(item => item._id !== cartAction.payload)
            }      
         case "INCRE_QTY":
          return {...cartState, 
        itemsInCart: cartState.itemsInCart.map((item,ind) => ind === cartAction.payload ? {...item, qty: item.qty + 1 }:item)
        }   
        case "DECRE_QTY":
         return {...cartState, 
        itemsInCart: cartState.itemsInCart.map((item,ind) => ind === cartAction.payload ? {...item,qty: item.qty-1}:item)
        }   
        default:
            return cartState;
    }
}

export {cartReducer} 