import React, { useState } from "react";
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
      {location.pathname === "/register" && (
        <label className="authFormLabel">
          Name  
          <input
            type="text"
            className="authFormInput"
            name="name"
            onChange={onHandleChange}
            value={name}
          />
        </label>
      )}
      <label className="authFormLabel">
        Email
        <input
          type="email"
          className="authFormInput"
          name="email"
          onChange={onHandleChange}
          value={email}
        />
      </label>
      <label className="authFormLabel">
        Password
        <input
          type="password"
          className="authFormInput"
          name="password"
          onChange={onHandleChange}
          value={password}
        />
      </label>
      <button className="authFormBtn" type="submit">
        {location.pathname === "/register" ? "Register" : "Login"}
      </button>
    </AuthFormStyled>
  );
};

export default AuthForm;
