import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../nav/nav.css";
import SigninModal from "../SigninPage/signin";
import SignupModal from "../SignupPage/signup";
//import { auth } from "../Firebase";
import { useAuth } from "../conexts/AuthContext";

function NavMenu() {
  const { currentUser, logout } = useAuth();
  const [signinModalShow, setSigninModalShow] = useState(false);
  const [signupModalShow, setSignupModalShow] = useState(false);
  const [userInfoShow, setUserInfoShow] = useState(false);

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
              <Link to="/contact" className="nav-link">
                <li>Contact</li>
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
                to="/signin"
                className="nav-link"
                onClick={() => setSigninModalShow(true)}
              >
                <li>Sign In</li>
              </Link>
              <Link
                to="/signin"
                className="nav-link"
                onClick={() => setSignupModalShow(true)}
              >
                <li>Sign Up</li>
              </Link>
              <Link
                onClick={() => setUserInfoShow(true)}
                className="nav-link"
              >
                <li>{currentUser && currentUser.email}</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavMenu;
