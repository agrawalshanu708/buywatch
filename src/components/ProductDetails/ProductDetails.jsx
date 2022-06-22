import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth, useCart, useWishlist } from '../../context';
import { findInArray } from '../../utils'
import "./ProductDetails.css"

const ProductDetails = ({product}) => {
  const{cartState,cartDispatch} = useCart();
  const{wishlistState,wishlistDispatch} = useWishlist();
  const{auth} = useAuth()
  const navigate = useNavigate()
  const isInCart = findInArray(product._id,cartState.itemsInCart)
  const cartHandler = (id,product) => {
  if(auth.isAuth) { if(isInCart) {
     navigate("/cart")
    }else{
      cartDispatch({
        type:"ADD_TO_CART",
        payload: product
         })
         toast.success('Added To Cart!');
    }}else{
      toast.error('Please Login first!');
    }
  }

const isInWishlist = findInArray(product._id,wishlistState.itemsInWishlist)
const wishlistHandler = (id,product) => {
  if(auth.isAuth) { if(isInWishlist) {
    wishlistDispatch({
      type:"REMOVE_FROM_WISHLIST",
      payload: id
    })
    toast.success('Removed From Wishlist!');
  }else{
    wishlistDispatch({
      type:"ADD_TO_WISHLIST",
      payload: product
      })
      toast.success('Added To Wishlist!');
  }
}else{
  toast.error('🦄Please Login first!');
}}
  return (
    <div className="product__details">
        <h2>{product.tittle}</h2>
        <p>{product.description}</p>
        <p>Rs. {product.price}</p>
        <h3>Description</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit harum voluptatem nihil? Quaerat ut porro iste veritatis illum maxime harum dicta dolor! Ipsa quae id praesentium error eos est asperiores?</p>
        <div className="product__details__btn">
            <button className="btn button btn-large" onClick = {() =>cartHandler(product._id,product)}>{isInCart?"Go To Cart":"Add To Cart"}</button>
            <button className="btn button btn-large" onClick = {() => wishlistHandler(product._id,product)}>{isInWishlist?"Remove From Wishlist":"Add To Wishlist"}</button>
        </div>
    </div>
  )
}

export  {ProductDetails}