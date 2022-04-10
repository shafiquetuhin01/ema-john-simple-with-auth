import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="form-container mt-2 pt-2">
      <h2 className="ps-2">Login</h2>
      <form action="">
        <p>Email</p>
        <input type="email" />
        <p>Password</p>
        <input type="password" />
        <h4>Login</h4>
        <p>New to Ema-John? </p> <Link to="/signup">Create an account</Link>
      </form>
    </div>
  );
};

export default Login;
