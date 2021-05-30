import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../nav/nav.css";
import SigninModal from "../SigninPage/signin";
import SignupModal from "../SignupPage/signup";
import UserInfo from "../UserInfo/UserInfo";
import { auth } from "../Firebase";
import { useAuth } from "../conexts/AuthContext";
import DropdownNew from "../Compnents/Dropdown/DropdownNew";
import ConditionalNav from "./NavFunctions";
import Button from 'react-bootstrap/Button';

function NavMenu() {
  const { currentUser, logout } = useAuth();
  const [signinModalShow, setSigninModalShow] = useState(false);
  const [signupModalShow, setSignupModalShow] = useState(false);
  const [userInfoShow, setUserInfoShow] = useState(false);
  const [userOption, setUserOption] = useState("");

  auth.onAuthStateChanged(() => ConditionalNav(currentUser));

  return (
    <>
      <SigninModal
        modalShow={signinModalShow} //createModalShow
        setShow={setSigninModalShow}
      />
      <SignupModal
        modalShow={signupModalShow} //createModalShow
        setShow={setSignupModalShow}
      />
      <UserInfo
        modalShow={userInfoShow} //createModalShow
        setShow={setUserInfoShow}
      />
      <nav className="menuBar navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              style={{ width: "250px" }}
              src={require("../imgs/purrfect_pair.png").default}
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="menuOptions collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/home" className="nav-link">
                <li>Home</li>
              </Link>
              <Link
                // style={{ display: "none" }}
                to="/logout"
                class="nav-link logged-in"
                onClick={() => logout()}
              >
                <li class="logged-in">
                  Logout
                </li>
              </Link>
              <Link
                className="nav-link logged-out"
                onClick={() => setSigninModalShow(true)}
              >
                <li>Sign In</li>
              </Link>
              <Link
                className="nav-link logged-out"
                onClick={() => setSignupModalShow(true)}
              >
                <li>Sign Up</li>
              </Link>
              <Link
                className="logged-in"
              >
                <li>
                  <div className="dropdown">
                    <DropdownNew items={["", <Link style={{ color: "black" }} to="/account">Account Info</Link>, <Link style={{ color: "black" }} to="/favourites">Favourites</Link>]} property={userOption} setProperty={setUserOption} blankValue={currentUser && currentUser.email} />
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavMenu;
