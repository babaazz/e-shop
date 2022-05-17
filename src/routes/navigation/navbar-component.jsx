import { Link, Outlet } from "react-router-dom";
import "./navbar.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.contexts";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <Fragment>
      <div className="main-container">
        <div className="navigation">
          <Link className="logo-container" to={"/"}>
            <Logo className="logo" />
          </Link>

          <div className="nav-links-container">
            <Link className="nav-link" to={"shop"}>
              Shop
            </Link>
            {currentUser ? (
              <span className="nav-link" onClick={signOutUser}>
                Sign Out
              </span>
            ) : (
              <Link className="nav-link" to={"auth"}>
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
