import "./App.css";
import React from "react";
import logo from "./logo.png";
import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Mockman from "mockman-js";
import { Navbar, Footer, RequireAuth, Error404,EmptyCart} from "./components/index";
import {
  Home,
  Login,
  Signup,
  ProductStore,
  Cart,
  Wishlist,
} from "./pages/index";
import { useCart, useWishlist } from "./context";

function App() {
const { cartState } = useCart();
const { wishlistState} = useWishlist();
  return (
    <div className="App">
              
        <Navbar />
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductStore />} />
        <Route path = "*" element = {<Error404 />} />
        <Route
          path="/cart"
          element={
            <RequireAuth>
             { cartState.itemsInCart.length > 0?<Cart />:<EmptyCart/>}
            </RequireAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
             {wishlistState.itemsInWishlist.length > 0 ? <Wishlist />: <EmptyCart/>} 
            </RequireAuth>
          }
        />
   
      </Routes>
      <Footer />
      <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover

/>
    </div>
  );
}

export default App;
