// products actions

export function FetchProducts(theProducts) {
  return { type: "FETCH_PRODUCTS", theProducts };
}

export function FetchProductsAsync() {
  return (dispatch) => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((resProducts) => {
        dispatch(FetchProducts(resProducts));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function FilterProductsAsync(theCategoryId) {
  return (dispatch) => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((resProducts) => {
        resProducts.filter((product) => {
          return product.category === theCategoryId;
        });
        dispatch(FetchProducts(resProducts));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function FilterProducts(theCategoryId) {
  return { type: "FILTER_PRODUCTS", theCategoryId };
}

// cart actions
export function AddItemToCart(theProduct) {
  return { type: "ADD_ITEM_TO_CART", theProduct };
}

export function DeleteItemFromCart(theProductId) {
  return { type: "DELETE_ITEM_FROM_CART", theProductId };
}

export function IncrementQuantityOfItem(theProductId) {
  return { type: "INCREMENT_QUANTITY_OF_ITEM", theProductId };
}
export function DecrementQuantityOfItem(theProductId) {
  return { type: "DECREMENT_QUANTITY_OF_ITEM", theProductId };
}

// categories actions

export function FetchCategories(theCategories) {
  return { type: "FETECH_CATEGORIES", theCategories };
}
export function FetchCategoriesAsync() {
  return (dispatch) => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((resCategories) => {
        const negativeOrderIndex = resCategories.findIndex((category) => {
          return category.order == -1;
        });
        resCategories.splice(negativeOrderIndex, 1);

        // sort categories can be done by order key
        resCategories.sort((category1, category2) => {
          return category1.order - category2.order;
        });
        dispatch(FetchCategories(resCategories));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function UpdateEnableOfCategory(theCategoryId) {
  return { type: "UPDATE_ENABLE_OF_CATEGORY", theCategoryId };
}

// banners actions  don't need this we can directly fetech it from api
export function PostBanners(theBanners) {
  return { type: "POST_BANNERS", theBanners };
}
