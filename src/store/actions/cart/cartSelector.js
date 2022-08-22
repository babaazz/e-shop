import { createSelector } from "reselect";

const selectCartSlice = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice.isCartOpen
);

export const selectCartCount = createSelector([selectCartSlice], (cartSlice) =>
  cartSlice.cartItems.reduce((total, item) => total + item.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartSlice], (cartSlice) =>
  cartSlice.cartItems.reduce(
    (total, { price, quantity }) => total + price * quantity,
    0
  )
);
