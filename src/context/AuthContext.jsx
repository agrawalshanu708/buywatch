import React from "react"
import { createContext, useContext,useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

 const[auth,setAuth] = useState({
     token: "",
     isAuth: false,
     userName: "Guest"

 })    
  return <AuthContext.Provider value={{auth,setAuth}}>
      {children}
      </AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export {AuthProvider, useAuth };
