import * as actionTypes from "./actions/categories/categoriesActions.type";

const INITIAL_STATE = {
  categoriesArray: [],
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_CATEGORIES_ARRAY:
      return {
        ...state,
        categoriesArray: payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
