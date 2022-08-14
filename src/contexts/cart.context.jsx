import { createContext, useReducer } from "react";

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

export const CartContext = createContext({
  isCartOpen: true,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  cartTotal: 0,
  clearItemFromCheckout: () => null,
});

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartTotal: 0,
};

const CART_ACTIONS = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  TOGGLE_CART: "TOGGLE_CART",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTIONS.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTIONS.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`unhandled type ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, cartTotal, isCartOpen }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const setIsCartOpen = (bool) => {
    dispatch({ type: CART_ACTIONS.TOGGLE_CART, payload: bool });
  };

  const updateCardItems = (newCartItems) => {
    const newTotal = newCartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    dispatch({
      type: CART_ACTIONS.SET_CART_ITEMS,
      payload: { cartItems: newCartItems, cartTotal: newTotal },
    });
  };

  const addItemToCart = (itemToAdd) => {
    const newCartItems = addItem(cartItems, itemToAdd);
    updateCardItems(newCartItems);
  };

  const removeItemFromCart = (itemToRemove) => {
    const newCartItems = removeItem(cartItems, itemToRemove);
    updateCardItems(newCartItems);
  };

  const clearItemFromCheckout = (itemToRemove) => {
    const newCartItems = clearItem(cartItems, itemToRemove);
    updateCardItems(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    cartItems,
    cartTotal,
    clearItemFromCheckout,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
