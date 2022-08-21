import createAction from "../actionCreater";
import * as actionType from "./categoriesActions.type";

export const setCategoriesArray = (catrgoriesArray) =>
  createAction(actionType.SET_CATEGORIES_ARRAY, catrgoriesArray);
