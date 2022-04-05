import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/root.reducer";
import thunk from "redux-thunk";
let storeData = {
  products: {
    products: [],
    filterProducts: [],
  },
  categories: [],
  cart: {
    addedProducts: [],
    grandTotal: 0,
    totalItems:0
  },
};

export var store = createStore(rootReducer, applyMiddleware(thunk));
