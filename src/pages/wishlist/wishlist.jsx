import React from 'react'
import {useWishlist} from "./../../context/index"
import { WishlistCardView } from './wishlistcardview'
const Wishlist = () => {
    const{wishlistState}  = useWishlist()
  return (
    <>
    <div className="wishlist-page">
        {
   wishlistState.itemsInWishlist.map(WishlistCardView)
        }
    </div>
    </>
  )
}

export {Wishlist}