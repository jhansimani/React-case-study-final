import React from "react";
import { useDispatch } from "react-redux";
import { AddItemToCart } from "../../../actions/actioncreators";
import Button from "../../button/button.component";
import "./Product.styles.scss";
export default function Product(props) {
  var dispatch = useDispatch();

  function addProductToCart(product) {
    fetch("http://localhost:5000/addToCart", {
      method: "POST",
      body: JSON.stringify({
        ...product,
      }),
    }).then((response) => {
     
      return response.json();
    }).then(res => {
      console.log(res);
      alert(res.responseMessage)
    });
  }

  return (
    <div className="product-item ">
      <p className="product-name">{props.productDetails.name}</p>
      <div className="product-info">
        <img
          src={props.productDetails.imageURL}
          alt={props.productDetails.name}
          className="product-img"
        />
      </div>
      <p className="product-description">{props.productDetails.description}</p>
      <div className="user-buttons-desktop">
        <p className="mrp">
          <span>MRP Rs </span> <strong>{props.productDetails.price}</strong>
        </p>
        <Button
          type="button"
          buttonText="BUY NOW"
          btnClass="primary"
          className="desktop-buttons"
          handleClick={() => {
            addProductToCart(props.productDetails);
            dispatch(AddItemToCart(props.productDetails));
          }}
        />
      </div>
      <div className="user-buttons-tablet">
        <Button
          type="button"
          buttonText={`BUY NOW @${props.productDetails.price}`}
          btnClass="primary-width-100"
          className="tablet-buttons"
          handleClick={() => {
            addProductToCart(props.productDetails);
            dispatch(AddItemToCart(props.productDetails));
          }}
        />
      </div>
      <div className="dashed"></div>
    </div>
  );
}
