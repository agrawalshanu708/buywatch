import React from 'react'
import "./ProductMedia.css"
const ProductMedia = ({product}) => {
  return (
    <div className="productimg__box">
       <img  src={product.image} />
    </div>
  )
}

export {ProductMedia}