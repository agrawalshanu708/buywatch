
import { createContext, useEffect, useReducer,useContext } from "react";
const FilterContext = createContext();

const FilterProvider = ({children}) => {
const filterReducer = (state,dispatch) => {}
const[state,dispatch] = useReducer(filterReducer,{
    sortby: null,
    gender: null,
    categoryName:{casual:false,formal:false,digital:false,sports:false,},
    brandName :{apple:false,fossil:false,fastrack:false,titan:false},
    discount: null

})

    return (
        <FilterContext.Provider value = {{state,dispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext);
export{FilterProvider, useFilter}