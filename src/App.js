import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./App.css";

import Home from "./routes/home/home.component";
import Navbar from "./routes/navigation/navbar-component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component";
import { setCurrentUser } from "./store/actions/user/userActions";
import { setIsCartOpen } from "./store/actions/cart/cartActions";
import { useSelector } from "react-redux";
import { selectIsCartOpen } from "./store/actions/cart/cartSelector";

import {
  authStateChangeListner,
  createUserDocFromAuth,
} from "./utils/firebase/firebase.utils";

import { store } from "./store/store";
import { saveState } from "./localStorage";

store.subscribe(() => {
  saveState({
    user: store.getState().user,
    cart: store.getState().cart,
    categories: store.getState().categories,
  });
});

function App() {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const closeCart = () => {
    if (isCartOpen) {
      dispatch(setIsCartOpen(false));
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
