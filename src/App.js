import "./App.css";
import React from "react"
import logo from "./logo.png";
import { Routes, Route, Link } from "react-router-dom";
import Mockman from "mockman-js"
import {Navbar,Footer,RequireAuth} from "./components/index"
import {Home,Login,Signup,ProductStore,Cart,Wishlist} from "./pages/index"
function App() {
  return (
    <div className="App">
     

     <Navbar/>
     <Routes>
       <Route path = "/mockman" element = {<Mockman/>}/>  
       <Route path="/" element = {<Home/>}/>
        <Route path="/login" element = {<Login/>}/>
       <Route path = "/signup" element = {<Signup/>}/> 
       <Route path = "/products" element = {<ProductStore/>}/>

       
       <Route path = "/cart" element = { <RequireAuth><Cart/></RequireAuth>}/>
       <Route path = "/wishlist" element = {<RequireAuth><Wishlist/></RequireAuth>}/>
   
       
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
