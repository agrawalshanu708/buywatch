import React from "react"
import {Link } from "react-router-dom";
import "./Navbar.css"
import {FiShoppingCart} from "react-icons/fi"
import {BsHeart} from "react-icons/bs"
import {AiOutlineUser} from "react-icons/ai"
import {GrSearchAdvanced} from "react-icons/gr"
import {useAuth, useCart,useWishlist} from "./../../context/index"
import {logo} from "../../Assets/index"
const  Navbar = () => {
    const {cartState} = useCart()
    const{wishlistState} = useWishlist()
    const{isLoggedIn,setIsLoggedIn} = useAuth()
    return (
        <>
               <div class="navbar col-12">
               <div class="navbar__media ">
                <div class="navbar__logo">
               <img src = {logo}/>   
               </div>   
               <Link to="/" class="navbar__sitename">BuyWatch</Link>
               </div>
               
               <div class="navbar_search">
               <GrSearchAdvanced size="3rem"/>
               </div>

               <div class="navbar__right__icons">
                <span class="icon__badge">
               <Link to = "/cart" class="cart"><FiShoppingCart size="3rem"/></Link>
               <span class="icon__number">{cartState.itemsInCart.length}</span>
               </span>

               <span class="icon__badge">
               <Link to = "/wishlist"class="wishlist"><BsHeart size = "3rem"/></Link>
                <span class="icon__number">{wishlistState.itemsInWishlist.length}</span>
               </span>
               <p>{isLoggedIn ? "Hi,Shanu":"Hi,User"}</p>   
               
               <span>
               <Link to = "/login"class="login"> 
               {/* <AiOutlineUser  size="3rem"/> */}
               <button className = "button primary_btn" onClick = {() => setIsLoggedIn(false )}>{isLoggedIn ? "Logout":"Login"}</button>
               </Link>
                </span>

                 </div>
                </div>
                
        </>
    )
}
export {Navbar}

