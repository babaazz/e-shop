import {
  CardContainer,
  ProductFooter,
  Name,
  Price,
} from "./product-card.styles";
import { Button, BUTTON_TYPE } from "../button/button.component";
import Loader from "../../components/loader/loader.component";

import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const [adding, setAdding] = useState(false);
  const [buttonText, setButtonText] = useState("Add item to cart");
  const addToCart = () => {
    setAdding(true);
    setTimeout(() => {
      addItemToCart(product);
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
