import React from "react"
import { createContext, useEffect, useReducer, useContext } from "react";
import {storeReducer} from "../reducer/index"
import axios from "axios"
const StoreContext = createContext();

const StoreProvider = ({ children }) => {
   
    const[storeState,storeDispatch] = useReducer(storeReducer,{
       storeItems: []
    
    })

    useEffect(() =>{
        const fetchData = async () => {
            try {
                const pData = await axios.get("/api/products")
                console.log(pData)
                storeDispatch({
                    type:"FETCH_DATA",
                    payload: pData.data.products
                })
            } catch (error) {
                console.error(error)
            }
        }
        fetchData();
    },[])

  return <StoreContext.Provider value={{storeState,storeDispatch}}>
      {children}
      </StoreContext.Provider>;
};
const useStore = () => useContext(StoreContext);

export { useStore, StoreProvider };
