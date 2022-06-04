import "./App.css";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navbar from "./routes/navigation/navbar-component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component";
import { useContext } from "react";
import { CartContext } from "./contexts/cart.context";

function App() {
  const { setIsCartOpen, isCartOpen } = useContext(CartContext);
  const closeCart = () => {
    if (isCartOpen) {
      setIsCartOpen(false);
    }
  };
  return (
    <div className="app" onClick={closeCart}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
