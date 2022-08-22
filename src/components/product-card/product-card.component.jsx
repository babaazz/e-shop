import {
  CardContainer,
  ProductFooter,
  Name,
  Price,
} from "./product-card.styles";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addItemToCart } from "../../store/actions/cart/cartActions";
import { selectCartItems } from "../../store/actions/cart/cartSelector";

import { Button, BUTTON_TYPE } from "../button/button.component";
import Loader from "../../components/loader/loader.component";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const [adding, setAdding] = useState(false);
  const [buttonText, setButtonText] = useState("Add item to cart");
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addToCart = () => {
    setAdding(true);
    setTimeout(() => {
      dispatch(addItemToCart(cartItems, product));
      setAdding(false);
      setButtonText("✔ Added");
      setTimeout(() => {
        setButtonText("Add item to cart");
      }, 1000);
    }, 500);
  };
  return (
    <CardContainer>
      <img src={imageUrl} alt={name} />
      <ProductFooter>
        <Name>{name}</Name>
        <Price>{`$${price}`}</Price>
      </ProductFooter>
      <Button buttonType={BUTTON_TYPE.inverted} onClick={addToCart}>
        {adding ? <Loader /> : buttonText}
      </Button>
    </CardContainer>
  );
};

export default ProductCard;
