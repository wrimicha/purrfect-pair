import React, { useState, useRef } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import "./signup.css";
import { Link } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";

// import { auth } from "../../Firebase";
// import { useAuth } from "../../conexts/AuthContext";

const SignupModal = ({ modalShow, setShow }) => {
    const nameRef = useRef();
    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    //   const { login } = useAuth();
    //   const { addAdminRole } = useAuth();
    //const [show, setShow] = useState(true);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

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
                            type="text"
                            ref={nameRef}
                            placeholder="Full Name"
                        />
                    </Form.Group>
                    <Form.Group className="formGroupStyle" controlId="formBasicEmail">
                        <Form.Control
                            className="inputText"
                            required
                            type="email"
                            ref={emailRef}
                            placeholder="E-mail"
                        />
                    </Form.Group>
                    <Form.Group className="formGroupStyle" controlId="formBasicEmail">
                        <Form.Control
                            className="inputText"
                            required
                            type="text"
                            ref={usernameRef}
                            placeholder="User Name"
                        />
                    </Form.Group>
                    <Form.Group className="formGroupStyle" controlId="formBasicEmail">
                        <Form.Control
                            className="inputText"
                            required
                            type="password"
                            ref={passwordRef}
                            placeholder="Password"
                        // onChange={(text) => setEmail(text.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="formGroupStyle" controlId="formBasicEmail">
                        <Form.Control
                            className="inputText"
                            required
                            type="password"
                            ref={passwordConfirmRef}
                            placeholder="Password Confirmation"
                        />
                    </Form.Group>
                    <div class="signinBtn">Sign Up</div>
                </div>
            </Modal>
            <auth />
        </>
    );
};

export default SignupModal;
