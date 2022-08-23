import * as actionTypes from "./actions/categories/categoriesActions.type";

const INITIAL_STATE = {
  categoriesArray: [],
  isLoading: false,
  error: null,
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesArray: payload,
        isLoading: false,
      };
    case actionTypes.FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
