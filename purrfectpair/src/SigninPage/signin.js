import React, { useState, useRef } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import "./signin.css";
import { Link } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";

// import { auth } from "../../Firebase";
// import { useAuth } from "../../conexts/AuthContext";

const LoginModal = ({ modalShow, setShow }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  //   const { login } = useAuth();
  //   const { addAdminRole } = useAuth();
  //const [show, setShow] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  //   const handleSubmit = async (e) => {
  //     e.preventDefault(); //not needed unless using the form submit?

  //     //error validation
  //     if (emailRef.current.value.trim() === "") {
  //       return setError("Email cannot be blank");
  //     }
  //     if (passwordRef.current.value.trim() === "") {
  //       return setError("Password cannot be blank");
  //     }

  //     try {
  //       setError("");
  //       setLoading(true);
  //       await login(emailRef.current.value, passwordRef.current.value).then(
  //         () => setShow(false)
  //         // .then(() => history.push("/"))
  //       );
  //       addAdminRole();
  //     } catch {
  //       setError("Failed to sign in");
  //     }
  //     setLoading(false);
  //   };

  return (
    <>
      <Modal
        className="mainModal"
        centered
        size="xl"
        dialogClassName="mainModal"
        show={modalShow}
        onHide={() => setShow(false)}
      >
        <div className="formMain">
          <h1 className="title">Welcome Back!</h1>
          {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
          <Button className="closeBtn" onClick={() => setShow(false)}><VscChromeClose /></Button>
          <Form.Group className="formGroupStyle" controlId="formBasicEmail">
            <Form.Control
              className="inputText"
              required
              type="email"
              ref={emailRef}
              placeholder="E-mail  ✉️"
            // onChange={(text) => setEmail(text.target.value)}
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
          </Form.Text> */}
          </Form.Group>
          <Form.Group className="formGroupStyle" controlId="formBasicEmail">
            <Form.Control
              className="inputText"
              required
              type="password"
              ref={passwordRef}
              placeholder="Password  👀"
            // onChange={(text) => setEmail(text.target.value)}
            />

          </Form.Group>
          <div class="signinBtn">Sign In</div>
          <h4 className="signinText">Forgot your password? <Link className="signinLink" to="#">Click Here</Link></h4>
          <h4 className="signinText">Not a friend yet? <Link className="signinLink" to="#">Click Here</Link></h4>
        </div>
      </Modal>
      <auth />
    </>
  );
};

export default LoginModal;