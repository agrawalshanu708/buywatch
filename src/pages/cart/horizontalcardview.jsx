import { AiOutlineClose } from "react-icons/ai";
import {useState} from "react"
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import "./cart.css";
import { useCart, useWishlist } from "./../../context/index";
import { findInArray } from "../../utils/index";
const HorizontalCardView = ({ product, index }) => {
  const {
    _id,
    tittle,
    description,
    price,
    category,
    categoryName,
    qty,
    new_arrival,
    original_price,
    discount,
    image,
  } = product;
  const { cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const[isdisable,setIsdisable] = useState(true)

  const dispatcherFunctionCart = (id) => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
    wishlistDispatch({
      type: "ADD_TO_WISHLIST",
      payload: product,
    });
  };
  const isInWishlist = findInArray(_id, wishlistState.itemsInWishlist);

  return (
    <div class="horizontal-flex-outer" key="index">
      <div class="card-img-box">
        <img src={image} />
      </div>

      <div class="inner-vertical-flex content-box">
        <div class="card-head">{tittle}</div>
        <div class="card-tag">{description}</div>
        <div class="card-seller skin">Sold By: RetailNet</div>

        <div class="inner-horizontal-flex">
          <div class="cart-price"> Rs.{price} </div>
          <div class="cart-price original"> Rs.{original_price}</div>
          <div class="cart-discount"> ({discount}% OFF) </div>
        </div>

        <div class="inner-horizontal-flex">
          <div class="card-qty">Qty: {qty}</div>
          <button
            class="qty-btn"
            onClick={() => cartDispatch({ type: "INCRE_QTY", payload: _id })}
          >
            +
          </button>
          <button
            class="qty-btn negative-btn"
            onClick={() => cartDispatch({ type: "DECRE_QTY", payload: _id})
         
        }
           
          >
            -
          </button>
        </div>
      </div>
      <div class="inner-vertical-flex">
        <AiOutlineClose
          onClick={() =>
            cartDispatch({ type: "REMOVE_FROM_CART", payload: _id })
          }
          size="2rem"
        />
        {isInWishlist ? (
          <BsFillHeartFill
            size="2rem"
            onClick={() => dispatcherFunctionCart(_id)}
          />
        ) : (
          <BsHeart size="2rem" onClick={() => dispatcherFunctionCart(_id)} />
        )}
      </div>
    </div>
  );
};

export { HorizontalCardView };
