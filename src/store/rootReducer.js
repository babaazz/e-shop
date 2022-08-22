import { combineReducers } from "redux";

import userReducer from "./userReducer";
import categoriesReducer from "./categoriesReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

export default rootReducer;
