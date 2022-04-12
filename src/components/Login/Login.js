import Image from "../../images/google.png";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./Login.css";
import auth from "../../firebase-init";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePassBlur = (e) => {
    setEmail(e.target.value);
  };
  if (user) {
    navigate("/shop");
  }
  const handleUserSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="form-container mb-5 mt-2 pt-2">
      <form onSubmit={handleUserSignIn} className="login-form" action="">
        <h2 className="mb-4 fw-bold text-center">Login</h2>
        <h6>Email</h6>
        <input onBlur={handleEmailBlur} type="email" required />
        <h6>Password</h6>
        <input onBlur={handlePassBlur} type="password" required />
        <button type="submit" className="btn w-100 login-btn">
          Login
        </button>
        <p className="text-danger">{error?.message}</p>
        {loading && <p>Loading...</p>}
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
