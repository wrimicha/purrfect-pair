import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../nav/nav.css";
import SigninModal from "../SigninPage/signin";
import SignupModal from "../SignupPage/signup";

function NavMenu() {
  const [signinModalShow, setSigninModalShow] = useState(false);

  return (
    <>
      <SigninModal
        modalShow={signinModalShow} //createModalShow
        setShow={setSigninModalShow}
      />
      <SignupModal
        modalShow={signinModalShow} //createModalShow
        setShow={setSigninModalShow}
      />
      <nav class="menuBar navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              style={{ width: "250px" }}
              src={require("../imgs/purrfect_pair.png").default}
              alt=""
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="menuOptions collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <Link to="/home" class="nav-link">
                <li>Home</li>
              </Link>
              <Link to="/contact" className="nav-link">
                <li>Contact</li>
              </Link>
              <Link
                to="/signin"
                className="nav-link"
                onClick={() => setSigninModalShow(true)}
              >
                <li>Sign In</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavMenu;
