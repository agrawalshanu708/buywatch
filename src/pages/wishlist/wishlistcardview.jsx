import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineClose, AiTwotoneStar } from "react-icons/ai";
import { useWishlist, useCart } from "./../../context/index";
import "./wishlist.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { findInArray } from "../../utils";
import { useNavigate } from "react-router-dom";
const WishlistCardView = ({ product }) => {
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
    rating: { rate, count },
  } = product;
  const { wishlistDispatch } = useWishlist();
  const { cartState, cartDispatch } = useCart();
  const navigate = useNavigate();

  const isInCart = findInArray(_id, cartState.itemsInCart);
  const cartHandler = (product) => {
    if (isInCart) {
      navigate("/cart");
    } else {
      cartDispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
      toast.success("Added To Cart!");
    }
  };
  return (
    <div key={_id} class="card">
      <div class="card__media">
        <img src={image} />
        <AiOutlineClose
          className="card__icon"
          size="3rem"
          onClick={() => {
            toast.success("Remove From The Wishlist");
            wishlistDispatch({
              type: "REMOVE_FROM_WISHLIST",
              payload: _id,
            });
          }}
        />
        {new_arrival && (
          <div className="card__new_arrival">
            <div className="">NEW</div>
          </div>
        )}
        <div className="card__rate">
          <AiTwotoneStar /> {rate}|{count}
        </div>
      </div>

      <div class="card__details">
        <div class="card__head">{tittle}</div>
        <div class="card__desc">{description}</div>

        <div className="card__price card__horizontal__flex">
          <div class="card-price"> Rs.{price}</div>
          <div class="original-price"> Rs.{original_price} </div>
          <div class="card-off"> ({discount}% OFF) </div>
        </div>
      </div>
      <div class="card__button">
        <button class="btn cart-btn" onClick={() => cartHandler(product)}>
          {isInCart ? "Go To Cart" : "Move to Cart"}
          <FiShoppingCart size="2rem" />
        </button>
      </div>
    </div>
  );
};

export { WishlistCardView };
