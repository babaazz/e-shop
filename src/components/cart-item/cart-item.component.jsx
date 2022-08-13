import { CartItemContainer, ItemDetails } from "./cart-item.styles.jsx";

const CartItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <div className="name">{name}</div>
        <div className="price">{`${quantity}x$${price}`}</div>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
