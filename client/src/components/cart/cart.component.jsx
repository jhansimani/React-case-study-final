import React, { useContext } from "react";
import Button from "../button/button.component";
import CartItem from "../cartItem/cartItem.component";
import { ModalContext } from "../context/modalcontext";
import { useSelector } from "react-redux";
import "./cart.styles.scss";

export default function Cart(props) {
  const modalCtx = useContext(ModalContext);
  const { cart } = useSelector((store) => store);
  const toggleModal = () => modalCtx.toggle();
  let buttonTextToBeRendered =
    cart.totalItems > 0 ? (
      <div style={{ display: "flex", justifyContent: "space-between", alignItems:"center" }}>
        <span>Proceed to check out</span> 
        <p style={{ display: "flex", justifyContent: "space-between", alignItems:"center",gap:"10px" }}><span>Rs {cart.grandTotal}</span>
        <span ><ion-icon name="chevron-forward-outline"></ion-icon></span></p>
        
      </div>
    ) : (
      "Start shopping"
    );
  return (
    <>
      <div
        className={`${modalCtx.opened ? " backdrop " : "hide"}`}
        onClick={toggleModal}
      ></div>
      <div
        className={`${modalCtx.opened ? "cart-wrapper" : "hide"} ${
          cart.totalItems === 0 ? "background-white" : ""
        }`}
      >
        <div className="cart-header">
          <p className="name-item-count-block">
            <span className="cart-name">My cart </span>
            <span className="item-count">({cart.totalItems} item)</span>
          </p>
          <ion-icon
            name="close-outline"
            onClick={() => toggleModal()}
          ></ion-icon>
        </div>
        <div className="cart-body">
          {cart.totalItems > 0 ? (
            <React.Fragment>
              <div className="items">
                {cart.addedProducts.map((item) => {
                  return <CartItem item={item} key={item.id} />;
                })}
              </div>
              <div className="low-price-wrapper">
                <img
                  alt="Lowest price image"
                  src={
                    process.env.PUBLIC_URL + "/static/images/lowest-price.png"
                  }
                />
                <p>You won't find it cheaper anywhere</p>
              </div>
            </React.Fragment>
          ) : (
            <div className="empty-cart">
              <p>No Items in your cart</p>
              <p>Your favourite items are just a click away</p>
            </div>
          )}
        </div>

        <div
          className={`cart-footer ${
            cart.totalItems === 0 ? "empty-cart-background" : ""
          }`}
          onClick={toggleModal}
        >
          <p>Promo code can be applied on payment page</p>
          <Button
            type="button"
            buttonText={buttonTextToBeRendered}
            btnClass="primary-width-100"
            handleClick={toggleModal}
          ></Button>
        </div>
      </div>
    </>
  );
}
