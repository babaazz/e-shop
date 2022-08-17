import createAction from "../actionCreater";
import * as actionType from "./categoriesActions.type";

export const setCategoriesMap = (catrgoriesMap) =>
  createAction(actionType.SET_CATEGORIES_MAP, catrgoriesMap);
