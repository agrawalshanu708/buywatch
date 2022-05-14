import React from 'react'
import { ProductDetails, ProductMedia,ProductMatch } from '../../components'
import "./SingleProduct.css"
const SingleProduct = () => {
  return (
    <>
    <div className="product__page">
    <ProductMedia/>
    <ProductDetails/>
    </div>
    <ProductMatch/>
    </>
  )
}

export {SingleProduct}