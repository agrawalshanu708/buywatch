import {Link } from "react-router-dom";
import "./Navbar.css"
const  Navbar = () => {
    return (
        <>
               <div class="navbar col-12">
               <div class="nav-logo-box ">
               <img src = ""/>   
               <Link to="/" class="nav-brand-name head">BuyWatch</Link>
              
               </div>
               <div class="nav-search-box ">
               <input className="navbar-search" 
               placeholder="Search for Products,Brands.."
               />
               <span class="material-icons search-icon">search</span>       
               </div>
               <div class="nav-right-head">
               <span class="material-icons mob-search-icon">search</span>
               <Link to = "/cart" class="cart"><span class="material-icons icon-size">
                shopping_cart
               </span></Link>
               <Link to = "/wishlist"class="wishlist">  <span class="material-icons icon-size">
                favorite
               </span></Link>
               <Link to = "/login"class="login"> <span class="material-icons icon-size">
                person
                </span></Link>
                 </div>
                </div>
        </>
    )
}
export {Navbar}