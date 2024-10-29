import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import "./Login.css";
import { verifyUser } from "../../data/user";

function Login({ setToken, setRole }) {
  const userRef = useRef();
  const passRef = useRef();

  const handleLogin = () => {
    const user = userRef.current.value.trim();
    const pass = passRef.current.value.trim();

    userRef.current.value = "";
    passRef.current.value = "";

    const userInfo = verifyUser(user, pass);
    if (userInfo === null) {
      alert("Invalid username or password");
      userRef.current.focus();
    } else {
      setToken(userInfo.token);
      setRole(userInfo.role);
    }
  };

  return (
    <div className="login-container">
      <Form
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleLogin();
          }
        }}
      >
        <Form.Label htmlFor="username" className="text-light">
          Username
        </Form.Label>
        <Form.Control
          type="text"
          id="username"
          placeholder="Username"
          ref={userRef}
        />

        <Form.Label htmlFor="password" className="text-light">
          Password
        </Form.Label>
        <Form.Control
          type="password"
          id="password"
          placeholder="Password"
          ref={passRef}
        />

        <button
          className="btn btn-success mt-3"
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>
      </Form>
    </div>
  );
}

export default Login;
