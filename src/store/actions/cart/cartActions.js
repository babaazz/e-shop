import * as actionTypes from "./cartActions.types";
import createAction from "../actionCreater";

const addItem = (cartItems, itemToAdd) => {
  const itemAlreadyExistInCart = cartItems.find(
    (item) => item.id === itemToAdd.id
  );
  if (itemAlreadyExistInCart) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const removeItem = (cartItems, itemToRemove) => {
  const itemToRemoveInCart = cartItems.find(
    (item) => item.id === itemToRemove.id
  );
  if (itemToRemoveInCart.quantity === 1) {
    return cartItems.filter((item) => item.id !== itemToRemove.id);
  }
  return cartItems.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const clearItem = (cartItems, itemToRemove) => {
  return cartItems.filter((item) => item.id !== itemToRemove.id);
};

export const setIsCartOpen = (bool) =>
  createAction(actionTypes.TOGGLE_CART, bool);

export const addItemToCart = (cartItems, itemToAdd) => {
  const newCartItems = addItem(cartItems, itemToAdd);
  return createAction(actionTypes.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const newCartItems = removeItem(cartItems, itemToRemove);
  return createAction(actionTypes.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCheckout = (cartItems, itemToRemove) => {
  const newCartItems = clearItem(cartItems, itemToRemove);
  return createAction(actionTypes.SET_CART_ITEMS, newCartItems);
};
