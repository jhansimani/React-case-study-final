import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryNavList from "./CategoriesNav/CategoryNavList";
import "./Product.listing.styles.scss";
import Product from "./Product/Product.component";

import {
  FetchCategoriesAsync,
  FetchProducts,
  FetchProductsAsync,
} from "../../actions/actioncreators";
export default function ProductListing() {
  const { products } = useSelector((store) => store);
  const { categories } = useSelector((store) => store);
  var dispatch = useDispatch();

  // on refresh
  useEffect(() => {
    if (categories.length === 0) {
      dispatch(FetchCategoriesAsync());
    }
  }, []);
  useEffect(() => {
    if (products.filterProducts.length === 0) {
      dispatch(FetchProductsAsync());
    }
  }, []);

  return (
    <div className="padding-120 grid grid--col-2 grid-products">
      <CategoryNavList categories={categories} />
      <div className="grid products-wrapper grid--col-4">
        {products.filterProducts.map((product) => {
          return <Product key={product.id} productDetails={product} />;
        })}
      </div>
    </div>
  );
}
