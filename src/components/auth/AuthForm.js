import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { AuthFormStyled } from "./AuthFormStyled";

const AuthForm = ({ register, login }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    location.pathname === "/register"
      ? register({ name, email, password })
      : login({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <AuthFormStyled onSubmit={onHandleSubmit}>
      <Form onSubmit={onHandleSubmit}>
        {location.pathname === "/register" && (
          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter your name"
              name="name"
              onChange={onHandleChange}
              value={name}
              autoComplete="on"
            />
            <Form.Text className="text-muted">
              We'll never share your name with anyone else.
            </Form.Text>
          </Form.Group>
        )}

        <Form.Group className="mb-3" >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={onHandleChange}
            value={email}
            autoComplete="on"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={onHandleChange}
            value={password}
            autoComplete="on"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {location.pathname === "/register" ? "Register" : "Login"}
        </Button>
      </Form>
    </AuthFormStyled>
  );
};

export default AuthForm;
