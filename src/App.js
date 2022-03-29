import "./App.css";
import logo from "./logo.png";
import { Routes, Route, Link } from "react-router-dom";
import Mockman from "mockman-js"
import {Navbar,Footer} from "./components/index"
import {Home,ProductListing,Login,Signup} from "./pages/index"
function App() {
  return (
    <div className="App">
     

     <Navbar/>
     <Routes>
       <Route path="/" element = {<Home/>}/>
        <Route path="/login" element = {<Login/>}/>
       <Route path = "/signup" element = {<Signup/>}/> 
       <Route path = "/products" element = {<ProductListing/>}/>
       <Route path = "/mockman" element = {<Mockman/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
