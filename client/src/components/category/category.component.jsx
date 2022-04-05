import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import "./category.styles.scss";
import {
  UpdateEnableOfCategory,
  FetchProductsAsync,
  FilterProducts,
} from "./../../actions/actioncreators";
import { useDispatch, useSelector } from "react-redux";
export default function Category(props) {
  const { name, key, description, enabled, order, imageUrl, id } =
    props.category;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);

  useEffect(() => {
    if (products.length === 0) dispatch(FetchProductsAsync());
  }, []);
  return (
    <div className={`category-item ${props.classAppend} `}>
      <img src={process.env.PUBLIC_URL + imageUrl} alt="" />
      <div className="category-info">
        <p className="name">{name}</p>
        <p className="description">{description}</p>
        <Button
          type="button"
          buttonText={`Explore ${key}`}
          btnClass="primary"
          handleClick={() => {
            if (enabled) {
              dispatch(UpdateEnableOfCategory(props.category.id));
              dispatch(FilterProducts(props.category.id));
            } else {
              dispatch(FetchProductsAsync());
            }
            navigate("products");
            
          }}
        />
      </div>
    </div>
  );
}
