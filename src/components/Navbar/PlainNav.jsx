import React from "react";
import "./Navbar.css";
import { logo } from "../../Assets/index";
import { Link } from "react-router-dom";
const PlainNav = () => {
  return (
    <div class="navbar col-12">
      <div class="navbar__media ">
        <div class="navbar__logo">
          <img src={logo} />
        </div>
        <Link to="/" class="navbar__brandname">
          BuyWatch
        </Link>
      </div>
    </div>
  );
};

export { PlainNav };
