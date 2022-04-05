import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./home.styles.scss";
import {
  FetchCategoriesAsync,
  FetchProductsAsync,
} from "../../actions/actioncreators";
import Categories from "../categories/categories.component";
import Carousel from "../carousel/carousel.component";
export default function Home() {
  const [allcategories, setAllCategories] = useState([]);
  const [banners, setBanners] = useState([]);
  const { categories } = useSelector((store) => store);
  var dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchCategoriesAsync());
  
  }, []);
  // useEffect(() => {
  //   dispatch(FetchProductsAsync());
  //   }, []);

  useEffect(() => {
    fetch("http://localhost:5000/banners")
      .then((res) => res.json())
      .then((resBanners) => {
        resBanners.sort((banner1, banner2) => {
          return banner1.order - banner2.order;
        });
        const values = resBanners.map((banner, index) => {
          if (index === 0) {
            banner.isActive = true;
          }
          banner.isActive = false;
          return banner;
        });
        setBanners(values);
      });
  }, []);
  return (
    <React.Fragment>
      <Carousel banners={banners} />
      <Categories categories={categories} />
    </React.Fragment>
  );
}
