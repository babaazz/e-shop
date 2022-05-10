import { Link, Outlet } from "react-router-dom";
import "./navbar.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Fragment } from "react";

const Navbar = () => {
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
            <Link className="nav-link" to={"signIn"}>
              Sign-In
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
