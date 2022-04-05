export function categories(defaultStore = [], action) {
  switch (action.type) {
    case "FETECH_CATEGORIES":
      return action.theCategories;
      break;
    case "UPDATE_ENABLE_OF_CATEGORY":
      return defaultStore.map((category) => {
        if (category.id === action.theCategoryId) {
          category.enabled = !category.enabled;
          return category;
        } else {
          category.enabled = true;
          return category;
        }
      });
      break;
    default:
      return defaultStore;
  }
}
