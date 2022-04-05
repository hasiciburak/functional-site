import React from "react";
import "../styles/Navbar.scss";
import imageAvatar from "../assets/img/image-avatar.png";
import cartImage from "../assets/img/icon-cart.svg";
function Navbar() {
  return (
    <nav>
      <div>
        <a href="nav" className="logo">
          snkrs.
        </a>
        <a href="nav " className="passive">
          Collections
        </a>
        <a href="nav " className="passive">
          Men
        </a>
        <a href="nav " className="passive">
          Women
        </a>
        <a href="nav " className="passive">
          About
        </a>
        <a href="nav " className="passive">
          Contact
        </a>
        <div className="right-items">
          <img src={cartImage} className="cart-image" alt="" />
          <img src={imageAvatar} className="avatar-image" alt="" />
        </div>
      </div>
      <hr />
    </nav>
  );
}

export default Navbar;
