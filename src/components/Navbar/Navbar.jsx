import {Link } from "react-router-dom";
import "./Navbar.css"
import {FiShoppingCart} from "react-icons/fi"
import {BsHeart} from "react-icons/bs"
import {AiOutlineUser} from "react-icons/ai"
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
               <Link to = "/cart" class="cart">
               <FiShoppingCart size="3rem"/>
               </Link>
               <Link to = "/wishlist"class="wishlist">
                   <BsHeart size = "3rem"/> 
               </Link>
               <span>
               <Link to = "/login"class="login"> 
               <AiOutlineUser  size="3rem"
             
               />
               </Link>
            
                </span>
                 </div>
                </div>
                
        </>
    )
}
export {Navbar}