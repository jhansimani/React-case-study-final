import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "../cart/cart.component";
import { ModalContext } from "../context/modalcontext";
import { ReactComponent as CartImage } from "../../assests/icons/cart.svg";
import "./header.styles.scss";

export default function Header() {
  const { cart } = useSelector((store) => store);
  const modalCtx = useContext(ModalContext);
  return (
    <div>
      <nav className="container header">
        <div className="navigation-left-container">
          <Link to="/" className="logo-container">
            <img
              src={process.env.PUBLIC_URL + "static/images/logo.png"}
              alt="Logo"
              className="desktop-site-logo"
            />
          </Link>
          <div className="nav-left-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </div>
        </div>
        <div className="navigation-right-container">
          <span className="nav-right-links">
            <Link to="/sign-in" className="nav-link">
              Signin
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </span>

          <button
            className="order-button"
            onClick={() => {
              modalCtx.toggle();
            }}
          >
            <CartImage className="cart-image" />
            <span className="item-count"> {cart.totalItems} </span>
            <span>Orders</span>
  
          </button>
          {modalCtx.opened ? <Cart /> : null}
        </div>
      </nav>
    </div>
  );
}
