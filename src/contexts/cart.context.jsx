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

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload,
      };
    case "TOGGLE_CART":
      return {
        ...state,
        ...payload,
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
    dispatch({ type: "TOGGLE_CART", payload: { isCartOpen: bool } });
  };

  const updateCardItems = (newCartItems) => {
    const newTotal = newCartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    dispatch({
      type: "SET_CART_ITEMS",
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
