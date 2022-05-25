import { createContext, useState, useEffect } from "react";

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
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  cartTotal: 0,
  clearItemFromCheckout: () => null,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCartTotal(newTotal);
  }, [cartItems]);

  const addItemToCart = (itemToAdd) => {
    setCartItems(addItem(cartItems, itemToAdd));
  };

  const removeItemFromCart = (itemToRemove) => {
    setCartItems(removeItem(cartItems, itemToRemove));
  };

  const clearItemFromCheckout = (itemToRemove) => {
    setCartItems(clearItem(cartItems, itemToRemove));
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
