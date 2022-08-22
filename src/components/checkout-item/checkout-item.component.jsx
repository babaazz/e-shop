import {
  CheckoutItemContainer,
  ProdData,
  Quantity,
  ImageContainer,
  RemoveButton,
  Arrow,
  Value,
} from "./checkout-item.styles";

import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/actions/cart/cartSelector";

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCheckout,
} from "../../store/actions/cart/cartActions";

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;
  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const decreaseQuantity = () => {
    dispatch(removeItemFromCart(cartItems, item));
  };
  const increaseQuantity = () => {
    dispatch(addItemToCart(cartItems, item));
  };

  const removeItem = () => {
    dispatch(clearItemFromCheckout(cartItems, item));
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
