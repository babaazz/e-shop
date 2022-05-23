import "./product-card.styles.scss";
import { useContext } from "react";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const addToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="product-footer">
        <span className="name">{name}</span>
        <span className="price">{`$${price}`}</span>
      </div>
      <Button styleType={"inverted"} onClick={addToCart}>
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductCard;
