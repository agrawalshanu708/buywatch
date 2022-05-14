import "./App.css";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Mockman from "mockman-js";
import { Navbar, Footer, RequireAuth, Error404,EmptyCart,PlainNav} from "./components/index";
import {
  Home,
  Login,
  Signup,
  ProductStore,
  Cart,
  Wishlist,
  SingleProduct
} from "./pages/index";
import { useCart, useWishlist } from "./context";

function App() {
const { cartState } = useCart();
const { wishlistState} = useWishlist();
const location = useLocation()
  return (
    <div className="App">
              
        {location['pathname'] === "/login" ? <PlainNav/>: <Navbar/>}
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<ProductStore />} />
        <Route path = "*" element = {<Error404 />} />
        <Route path = "/product" element={<SingleProduct />} />
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
