import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import {FilterProvider,CartProvider,WishlistProvider} from "./context/index"
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <CartProvider>
    <WishlistProvider>
  <FilterProvider>
    <App />
  </FilterProvider>
  </WishlistProvider>
  </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
