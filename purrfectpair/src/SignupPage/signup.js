import React, { useState, useRef } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import "./signup.css";
import { Link } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";
import { auth } from "../Firebase";
import { useAuth } from "../conexts/AuthContext";

const SignupModal = ({ modalShow, setShow }) => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();
    const { currentUser } = useAuth();

    const nameRef = useRef();
    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const { addAdminRole } = useAuth();
    // const [show, setShow] = useState(true);


    const handleSubmit = (e) => {
        e.preventDefault(); //not needed unless using the form submit?

        if (emailRef.current.value === "") {
            return setError("Name cannot be blank");
        }
        if (emailRef.current.value === "") {
            return setError("Email cannot be blank");
        }
        if (passwordRef.current.value === "") {
            return setError("Password cannot be blank");
        }
        if (passwordConfirmRef.current.value === "") {
            return setError("Password confirmation cannot be blank");
        }
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match");
        }

        try {
            setError("");
            setLoading(true);
            signup(
                emailRef.current.value,
                passwordRef.current.value,
            ).then(() => setShow(false));
        } catch {
            setError("Failed to create an account");
        }
        setLoading(false);
    };

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
                    {error && <Alert variant="danger">{error}</Alert>}

                    {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
                    <Button className="closeBtn" onClick={() => setShow(false)}><VscChromeClose /></Button>
                    {/* <Form.Group className="formGroupStyle" controlId="formBasicName">
                        <Form.Control
                            className="inputText"
                            required
                            type="text"
                            ref={nameRef}
                            placeholder="Full Name"
                        />
                    </Form.Group> */}
                    <Form.Group className="formGroupStyle" controlId="formBasicEmail">
                        <Form.Control
                            className="inputText"
                            required
                            type="email"
                            ref={emailRef}
                            placeholder="E-mail"
                        />
                    </Form.Group>
                    <Form.Group className="formGroupStyle" controlId="formBasicPassword">
                        <Form.Control
                            className="inputText"
                            required
                            type="password"
                            ref={passwordRef}
                            placeholder="Password"
                        // onChange={(text) => setEmail(text.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="formGroupStyle" controlId="formBasicPasswordConfirm">
                        <Form.Control
                            className="inputText"
                            required
                            type="password"
                            ref={passwordConfirmRef}
                            placeholder="Password Confirmation"
                        />
                    </Form.Group>
                    <div class="signinBtn" onClick={handleSubmit}>Sign Up</div>
                </div>
            </Modal>
            <auth />
        </>
    );
};

export default SignupModal;
