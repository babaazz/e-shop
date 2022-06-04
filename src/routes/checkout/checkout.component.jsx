import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalDiv,
} from "./checkout.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const total = cartItems.reduce(
    (total, { price, quantity }) => total + price * quantity,
    0
  );
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>Product</HeaderBlock>
        <HeaderBlock>Description</HeaderBlock>
        <HeaderBlock>Quantity</HeaderBlock>
        <HeaderBlock>Price</HeaderBlock>
        <HeaderBlock>Remove</HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <TotalDiv>{`Total: $${total}`}</TotalDiv>
    </CheckoutContainer>
  );
};

export default Checkout;
