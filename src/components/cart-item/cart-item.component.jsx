import "./cart-item.styles.scss";

const CartItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <div className="name">{name}</div>
        <div className="price">{`${quantity}x$${price}`}</div>
      </div>
    </div>
  );
};

export default CartItem;
