import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";
import { useSelector, useDispatch } from "react-redux";
import { setIsCartOpen } from "../../store/actions/cart/cartActions";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/actions/cart/cartSelector";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleCart = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
