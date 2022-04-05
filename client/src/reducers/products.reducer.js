const productsObject = {
  products: [],
  filterProducts: [],
};

export function products(defaultStore = productsObject, action) {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        products: [...action.theProducts],
        filterProducts: [...action.theProducts],
      };
      break;
    case "FILTER_PRODUCTS":
      return {
        ...defaultStore,
        filterProducts: defaultStore.products.filter(
          (product) => product.category === action.theCategoryId
        ),
      };

      break;
    default:
      return defaultStore;
  }
}
