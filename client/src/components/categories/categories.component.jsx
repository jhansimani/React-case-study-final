import React  from "react";
import Category from "../category/category.component";

import "./categories.styles.scss";
export default function Categories(props) {
  return (
    <div className="categories-container">
      {props.categories.map((category, index) => (
        <Category
          category={category}
          key={category.key}
          classAppend={index % 2 === 0 ? "direction-ltr" : "direction-rtl"}
        />
      ))}
    </div>
  );
}
