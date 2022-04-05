import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import {
  DecrementQuantityOfItem,
  DeleteItemFromCart,
  IncrementQuantityOfItem,
} from "../../actions/actioncreators";
import "./cartItem.styles.scss";
export default function CartItem(props) {
  var dispatch = useDispatch();

  const incrementQuantityOfItem = ()=> {
    dispatch(IncrementQuantityOfItem(props.item.id));
  }
  const decrementQuantityOfItem = () => {
    dispatch(DecrementQuantityOfItem(props.item.id));
  }
 
  const removeProductFromCart = () => {
    dispatch(DeleteItemFromCart(props.item.id));
  }
  return (
    <div className="cart-item">
      <img src={props.item.imageURL} alt={props.item.sku} className="cart-item-img" />
      <div className="cart-item-specifictions">
        <div className="cart-item-description">
          <p className="name">{props.item.name}</p>
          <p className="item-quantity">
            <span className="circle minus"
              onClick={decrementQuantityOfItem}
            >
              <ion-icon name="remove-outline"></ion-icon>
            </span>
            <span className="quantity"> {props.item.quantity}</span>
            <span className="circle plus"
              onClick={incrementQuantityOfItem}
            >
              <ion-icon name="add-outline"></ion-icon>
            </span>
            <span className="remove"
              onClick={removeProductFromCart}>
              <ion-icon name="close-outline"></ion-icon>
            </span>
            <span className="price">Rs{props.item.price}</span>
          </p>
        </div>
      </div>
      <p className="total-price">rs {props.item.totalPrice}</p>
    </div>
  );
}
