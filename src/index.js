import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import {FilterProvider} from "./context/index"
import { CartProvider } from "./context/cartContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
  <FilterProvider>
    <App />
  </FilterProvider>
  </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
