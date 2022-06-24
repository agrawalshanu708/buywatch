import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import "./cart.css";
import { useCart, useWishlist } from "./../../context/index";
import { findInArray } from "../../utils/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const [isDisable, setIsDisable] = useState(false);
  const { cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();

  const isInWishlist = findInArray(_id, wishlistState.itemsInWishlist);

  const wishlistHandler = () => {
    wishlistDispatch({
      type: "ADD_TO_WISHLIST",
      payload: product,
    });
    toast.success("Move To the Wislist");
  };
  const removeWishlistHandler = (id) => {
    wishlistDispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: id,
    });
  };

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
            class="qty-btn negative-btn"
            disabled={isDisable}
            onClick={() => cartDispatch({ type: "DECRE_QTY", payload: _id })}
          >
            -
          </button>
          <button
            class="qty-btn"
            onClick={() => cartDispatch({ type: "INCRE_QTY", payload: _id })}
          >
            +
          </button>
        </div>
      </div>
      <div class="inner-vertical-flex">
        <AiOutlineClose
          onClick={() => {
            cartDispatch({ type: "REMOVE_FROM_CART", payload: _id });
            toast.success("Remove From the Cart");
          }}
          size="2rem"
        />
        {!isInWishlist ? (
          <BsHeart size="2rem" onClick={() => wishlistHandler()} />
        ) : (
          <BsFillHeartFill
            size="2rem"
            onClick={() => removeWishlistHandler(_id)}
          />
        )}
      </div>
    </div>
  );
};

export { HorizontalCardView };
