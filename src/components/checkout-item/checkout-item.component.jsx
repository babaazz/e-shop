import {
  CheckoutItemContainer,
  ProdData,
  Quantity,
  ImageContainer,
  RemoveButton,
  Arrow,
  Value,
} from "./checkout-item.styles";

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
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <ProdData>{name}</ProdData>
      <Quantity>
        <Arrow onClick={decreaseQuantity}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={increaseQuantity}>&#10095;</Arrow>
      </Quantity>
      <ProdData>{`$${price * quantity}`}</ProdData>
      <RemoveButton onClick={removeItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
