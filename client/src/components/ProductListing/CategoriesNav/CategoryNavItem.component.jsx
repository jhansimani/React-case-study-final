import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchProducts,
  FetchProductsAsync,
  FilterProducts,
  FilterProductsAsync,
  UpdateEnableOfCategory,
} from "../../../actions/actioncreators";

import Product from "../Product/Product.component";
import "./CategoryNavItem.styles.scss";
export default function CategoryNavItem(props) {
  let flag = false;
  var dispatch = useDispatch();
  const { products } = useSelector((store) => store);
  return (
    <div className="mobile-categories-products">
      <div
        className={`cat-nav-item ${
          !props.categoryDetails.enabled ? "active" : ""
        } `}
        onClick={() => {
          if (props.categoryDetails.enabled) {
            dispatch(UpdateEnableOfCategory(props.categoryDetails.id));
            dispatch(FilterProducts(props.categoryDetails.id));
          } else {
            dispatch(UpdateEnableOfCategory(props.categoryDetails.id));
            dispatch(FetchProductsAsync());
          }
        }}
      >
        <span>{props.categoryDetails.name}</span>
        <ion-icon name="chevron-down-outline"></ion-icon>
      </div>
      <div
        className={`products-list-mobile ${
          !props.categoryDetails.enabled ? "active" : ""
        }`}
      >
        {products.filterProducts.map((product) => {
          return <Product key={product.id} productDetails={product} />;
        })}
      </div>
    </div>
  );
}
