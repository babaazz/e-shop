import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
} from "./cart-dropdown.styles";

import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/actions/cart/cartSelector";

import { useNavigate } from "react-router-dom";

import { Button } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessage>{`Cart is empty`}</EmptyMessage>
        )}
      </CartItemsContainer>
      <Button onClick={clickHandler}> Checkout </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
