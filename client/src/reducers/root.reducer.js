import { combineReducers } from "redux";
import { products } from "./products.reducer";
import { categories } from "./categories.reducer";
import { cart } from "./cart.reducer";
var rootReducer = combineReducers({ products, categories, cart });
export default rootReducer;
