import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as allActions from "../actions/actioncreators";
import App from "./App";

//exposes store data to react components
function mapStateToProps(store) {
  return {
    allProducts: store.products,
    allCategories: store.categories,
    allcart: store.cart,
  };
}

//exposes actions to react components
function mapDispatchToProps(dispatch) {
  return bindActionCreators(allActions, dispatch);
}

export var HOCApp = connect(mapStateToProps, mapDispatchToProps)(App);
