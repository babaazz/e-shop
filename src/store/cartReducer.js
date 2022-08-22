import * as actionTypes from "./actions/cart/cartActions.types";

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case actionTypes.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
