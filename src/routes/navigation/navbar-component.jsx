import { Outlet } from "react-router-dom";

import {
  NavbarContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./navbar.styles.jsx";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Fragment } from "react";

import { useSelector } from "react-redux";
import { selectIsCartOpen } from "../../store/actions/cart/cartSelector.js";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdwon.component";

const Navbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  return (
    <Fragment>
      <div className="main-container">
        <NavbarContainer>
          <LogoContainer to={"/"}>
            <Logo className="logo" />
          </LogoContainer>

          <NavLinksContainer>
            <NavLink to={"shop"}>Shop</NavLink>
            {currentUser ? (
              <NavLink as="span" onClick={signOutUser}>
                Sign Out
              </NavLink>
            ) : (
              <NavLink to={"auth"}>Sign In</NavLink>
            )}
            <CartIcon />
          </NavLinksContainer>
          {isCartOpen && <CartDropdown />}
        </NavbarContainer>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
