import "./App.css";
import logo from "./logo.png";
import { Routes, Route, Link } from "react-router-dom";
import Mockman from "mockman-js"
import {Navbar,Footer} from "./components/index"
import {Home} from "./pages/Home/homepage"
import {ProductListing} from "./pages/ProductListing/productListing"
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path="/" element = {<Home/>}/>
       <Route path = "/products" element = {<ProductListing/>}/>
       <Route path = "/mockman" element = {<Mockman/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
