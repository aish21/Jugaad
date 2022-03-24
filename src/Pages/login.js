import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";
import { useHistory } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleLogin() {
    history.push("/Homepage")
  }

  return (
    <div className="container mt-5 py-4 px-xl-5">
    <ScrollToTopOnMount />
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Label>
          <Button block size="lg" type="submit" disabled={!validateForm()} onClick = {handleLogin}>
            Login
          </Button>
        </Form.Label>
      </Form>
    </div>
    </div>
  );
}