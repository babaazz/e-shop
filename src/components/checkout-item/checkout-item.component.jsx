import "./checkout-item.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;
  const { removeItemFromCart, addItemToCart, clearItemFromCheckout } =
    useContext(CartContext);
  const decreaseQuantity = () => {
    removeItemFromCart(item);
  };
  const increaseQuantity = () => {
    addItemToCart(item);
  };

  const removeItem = () => {
    clearItemFromCheckout(item);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <div className="arrow" onClick={decreaseQuantity}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={increaseQuantity}>
          &#10095;
        </div>
      </div>
      <div className="price">{`$${price * quantity}`}</div>
      <div className="remove-button" onClick={removeItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
