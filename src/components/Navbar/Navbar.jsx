import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FiShoppingCart } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { GrSearchAdvanced } from "react-icons/gr";
import { useAuth, useCart, useWishlist } from "./../../context/index";
import { logo } from "../../Assets/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Navbar = () => {
  const { cartState, cartDispatch } = useCart();
  const { wishlistState,wishlistDispatch } = useWishlist();
  const { auth, setAuth } = useAuth();
  return (
    <>
      <div class="navbar col-12">
        <div class="navbar__media ">
          <div class="navbar__logo">
            <img src={logo} />
          </div>
          <Link to="/" class="navbar__brandname">
            BuyWatch
          </Link>
        </div>

        <div className="navbar__icons">
          <GrSearchAdvanced size="3rem" />

          <span class="icon__badge">
            <Link to="/cart" class="cart">
              <FiShoppingCart size="3rem" />
            </Link>
            <span class="icon__number">{cartState.itemsInCart.length}</span>
          </span>

          <span class="icon__badge">
            <Link to="/wishlist" class="wishlist">
              <BsHeart size="3rem" />
            </Link>
            <span class="icon__number">
              {wishlistState.itemsInWishlist.length}
            </span>
          </span>

          <p>Hi, {auth.isAuth ? auth.userName : "User"}</p>

          <span>
            <Link to="/login" class="login">
              <button
                className="btn"
                onClick={() => {
                  {
                    if(auth.isAuth){
                      toast.success("Logout successfully") &&
                      wishlistDispatch({type: "CLEAR_WISHLIST" }) &&
                      cartDispatch({type: "CLEAR_CART" })                     
                    }}
                  setAuth((auth) => ({ ...auth, token: "", isAuth: false }));
                }}
              >
                {auth.isAuth ? "Logout" : "Login"}
              </button>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};
export { Navbar };
