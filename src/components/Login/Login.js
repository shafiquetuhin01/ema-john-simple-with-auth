import Image from "../../images/google.png";
import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="form-container mb-5 mt-2 pt-2">
      <form className="login-form" action="">
        <h2 className="mb-4 fw-bold text-center">Login</h2>
        <h6>Email</h6>
        <input type="email" required />
        <h6>Password</h6>
        <input type="password" required />
        <h4 className="login-click btn fw-bold d-block">Login</h4>
        <span>New to Ema-John? </span>{" "}
        <Link className="create-account-link" to="/signup">
          Create an account
        </Link>
        <div className="lower-part">
          <hr />
          <p className="mx-3 mt-2">or</p>
          <hr />
        </div>
        <button className="btn w-100 google-btn">
          <img src={Image} alt="" /> Continue with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
