import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FiShoppingCart } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";
import {
  useAuth,
  useCart,
  useWishlist,
  useFilter,
} from "./../../context/index";
import { logo } from "../../Assets/index";
import { toast } from "react-toastify";
import { Filterbar } from "../filterbar/filterbar";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { auth, setAuth } = useAuth();
  const { dispatch } = useFilter();
  return (
    <>
      <div className="navbar col-12">
        <Link to="/">
          {" "}
          <div className="flex-center ">
            <div className="navbar__logo">
              <img src={logo} />
            </div>
            <span className="navbar__brandname">BuyWatch</span>
          </div>
        </Link>

        <div className="flex-center">
          {/* <GrSearchAdvanced size="3rem" /> */}
          <input
            className="nav_input"
            placeholder="Search for Products & Brands "
            onChange={(e) =>
              dispatch({ type: "SEARCH", payload: e.target.value })
            }
          />

          <span className="icon__badge">
            <Link to="/cart">
              <FiShoppingCart size="3rem" />
            </Link>
            <span className="icon__number">{cartState.itemsInCart.length}</span>
          </span>

          <span className="icon__badge">
            <Link to="/wishlist">
              <BsHeart size="3rem" />
            </Link>
            <span className="icon__number">
              {wishlistState.itemsInWishlist.length}
            </span>
          </span>
          {/* <Filterbar/> */}
          <GiHamburgerMenu
            className="hamburger_icon"
            onClick={() => dispatch({ type : "SHOW_FILTER_BAR"})}
            size="3rem"
          />
        </div>

        <div className="flex-row nav_acc">
          <p className="acc_name">Hi, {auth.isAuth ? auth.userName : "User"}</p>

          <span>
            <Link to="/login">
              <button
                className="primary__btn"
                onClick={() => {
                  {
                    if (auth.isAuth) {
                      toast.success("Logout successfully") &&
                        wishlistDispatch({ type: "CLEAR_WISHLIST" }) &&
                        cartDispatch({ type: "CLEAR_CART" });
                    }
                  }
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
