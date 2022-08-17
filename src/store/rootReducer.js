import { combineReducers } from "redux";

import userReducer from "./userReducer";
import categoriesReducer from "./categoriesReducer";

const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});

export default rootReducer;
