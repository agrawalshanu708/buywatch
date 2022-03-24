import React from 'react'
import {ShowProducts,Sidebar} from "../../components/index"
import "./productlisting.css"
const ProductListing = () => {
  return (
    <> 
    <div className="outer-bar">
     <Sidebar/>
     <ShowProducts/>
     </div>
    
    </>
  )
}

export  {ProductListing}