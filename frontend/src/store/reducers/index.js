import { combineReducers } from "redux";
import ProductReducer from "./products";

export default combineReducers({
  products: ProductReducer,
});
