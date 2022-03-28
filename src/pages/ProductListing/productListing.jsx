import React from 'react'
import {ShowProducts,Sidebar,Sortbar} from "../../components/index"
import "./productlisting.css"
const ProductListing = () => {
  return (
    <> 
    <div className="product-page">
     <Sidebar/>
     <Sortbar/>
     <ShowProducts/>
     </div>
    
    </>
  )
}

export  {ProductListing}