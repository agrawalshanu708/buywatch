import React from 'react'
import "./ProductMatch.css"
import {men1,men2,men3,women1,women2,women3} from "../../Assets/index"
const ProductMatch = () => {

const getImage = (a) => {
    return (<div className="matchimg">
        <img src={a} alt="" />
    </div>)
}

  return (
      <div className="matchItem__box">
      <h3>Matching Products</h3>
      <div className="img__box">
      {getImage(men1)}
      {getImage(men2)}
      {getImage(men3)}
      {getImage(women1)}
      {getImage(women2)}
      </div>
      </div>)
}

export {ProductMatch}