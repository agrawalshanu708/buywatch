import React from 'react'
import "./ProductDetails.css"
const ProductDetails = () => {
  return (
    <div className="product__details">
        <h2>Luxury watch with leather band</h2>
        <p>Rs. 2999</p>
        <h3>Description</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit harum voluptatem nihil? Quaerat ut porro iste veritatis illum maxime harum dicta dolor! Ipsa quae id praesentium error eos est asperiores?</p>
        <div className="product__details__btn">
            <button className="btn large">Add To Cart</button>
            <button className="btn large">Wishlist</button>
        </div>
    </div>
  )
}

export  {ProductDetails}