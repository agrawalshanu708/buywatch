import React from 'react'
import {emptycart} from "../../Assets/index"
import "./EmptyCart.css"
const EmptyCart = () => {
  return (
    <div className="emptycart__box">
    <img src= {emptycart} alt="" />
    </div>
  )
}

export {EmptyCart}