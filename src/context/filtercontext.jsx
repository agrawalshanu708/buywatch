import React from "react"
import { createContext, useEffect, useReducer,useContext } from "react";
import {filterReducer} from "./../reducer/index"
const FilterContext = createContext();

const FilterProvider = ({children}) => {

const[state,dispatch] = useReducer(filterReducer,{
    sortby: null,
    gender: null,
    categoryName:{casual:false,formal:false,digital:false,sports:false,},
    brandName :{apple:false,fossil:false,fastrack:false,titan:false},
    discount: null,
    rating:null,
    searchValue: null,
    isfilterBar: true

})

    return (
        <FilterContext.Provider value = {{state,dispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext);
export{FilterProvider, useFilter}