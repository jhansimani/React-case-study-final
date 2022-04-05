import React, { useContext } from "react";
import CategoryNavItem from "./CategoryNavItem.component";
import "./CategoryNavList.styles.scss";
export default function CategoryNavList(props) {
  return (
    <div className="category-nav">
      {props.categories.map((category) => {
        return (
          <CategoryNavItem categoryDetails={category} key={category.key} />
        );
      })}
    </div>
  );
}
