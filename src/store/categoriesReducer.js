import * as actionTypes from "./actions/categories/categoriesActions.type";

const INITIAL_STATE = {
  categoriesMap: [],
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_CATEGORIES_MAP:
      return {
        ...state,
        categoriesMap: payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
