import React, { useState, useRef } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import "./signup.css";
import { Link } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";

// import { auth } from "../../Firebase";
// import { useAuth } from "../../conexts/AuthContext";

const LoginModal = ({ modalShow, setShow }) => {
    const nameRef = useRef();
    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

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
