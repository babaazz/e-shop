import {
  CardContainer,
  ProductFooter,
  Name,
  Price,
} from "./product-card.styles";
import { Button, BUTTON_TYPE } from "../button/button.component";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const addToCart = () => addItemToCart(product);
  return (
    <CardContainer>
      <img src={imageUrl} alt={name} />
      <ProductFooter>
        <Name>{name}</Name>
        <Price>{`$${price}`}</Price>
      </ProductFooter>
      <Button buttonType={BUTTON_TYPE.inverted} onClick={addToCart}>
        Add To Cart
      </Button>
    </CardContainer>
  );
};

export default ProductCard;
