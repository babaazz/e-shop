import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalDiv,
} from "./checkout.styles";
import { useSelector } from "react-redux";
import {
  selectCartTotal,
  selectCartItems,
} from "../../store/actions/cart/cartSelector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
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
