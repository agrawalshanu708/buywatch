import React from "react";
import { Filterbar, ProductGallery, Sortbar } from "./../../components/index";
import { useFilter } from "./../../context/index";
import "./product-store.css";
const ProductStore = () => {
  const { state, dispatch } = useFilter();

  return (
    <>
      <div className="store-page">
        {state.isfilterBar && (
          <div className={`${state.isfilterBar && "filter_display"}`}>
            <Filterbar />
          </div>
        )}
        <div>
          <Sortbar />
        </div>
        <div>
          <ProductGallery />
        </div>
      </div>
    </>
  );
};

export { ProductStore };
