import React from 'react'
import "./sortbar.css"
import {useFilter} from "./../../context/index"

const Sortbar = () => {
    const{state,dispatch} = useFilter(); 
  return (
    <>
    <div className="sorting-box col-10">
        <div className="chips">
         
        </div>
        <div>
            <select name="PRICE"  className="selection-box" onChange = {(e)=> dispatch({type:"SORT_BY",payload: e.target.value})}>
                <option checked value="DEFAULT">Default</option>
                <option value="PRICE_HIGH_TO_LOW">Price: High To Low</option>
                <option value="PRICE_LOW_TO_HIGH">Price:Low To High</option>
                <option value="RATING_HIGH_TO_LOW">Rating: High To Low</option>
                <option value="RATING_LOW_TO_HIGH">Rating:Low To High</option>
            </select>
        </div>
    </div>
    
    </>
  )
}

export {Sortbar}