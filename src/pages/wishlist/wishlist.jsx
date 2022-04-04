import React from 'react'
import {useWishlist} from "./../../context/index"
import { WishlistCardView } from './wishlistcardview'
const Wishlist = () => {
    const{wishlistState}  = useWishlist()
  return (
    <>
    <div className="wishlist-page card__container">
        {
   wishlistState.itemsInWishlist.map((item,index) =>  <WishlistCardView product = {item} index ={index}/>)
        }
    </div>
    </>
  )
}

export {Wishlist}