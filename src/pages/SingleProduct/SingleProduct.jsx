import React from 'react'
import { ProductDetails, ProductMedia,ProductMatch } from '../../components'
import "./SingleProduct.css"
import {useParams} from "react-router-dom"
import { useStore } from '../../context'
const SingleProduct = () => {
  const{productId}  = useParams()
  const{storeState} = useStore()
  const storeData = storeState.storeItems;
 const product = storeData.find(el => el._id === productId)
  return (
    <>
    <div className="product__page">
    <ProductMedia product = {product}/>
    <ProductDetails product = {product}/>
    </div>
    </>
  )
}

export {SingleProduct}