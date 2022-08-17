import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./App.css";

import Home from "./routes/home/home.component";
import Navbar from "./routes/navigation/navbar-component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component";
import { CartContext } from "./contexts/cart.context";

import { setCurrentUser } from "./store/actions/user/userActions";

import {
  authStateChangeListner,
  createUserDocFromAuth,
} from "./utils/firebase/firebase.utils";

function App() {
  const { setIsCartOpen, isCartOpen } = useContext(CartContext);
  const dispatch = useDispatch();
  const closeCart = () => {
    if (isCartOpen) {
      setIsCartOpen(false);
    }
  };
  useEffect(() => {
    const unsubscribe = authStateChangeListner(async (user) => {
      if (user) {
        await createUserDocFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);
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
