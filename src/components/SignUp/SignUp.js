import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import Image from "../../images/google.png";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase-init";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPasswrod, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePassBlur = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassBlur = (e) => {
    setConfirmPassword(e.target.value);
  };
  if (user) {
    navigate("/shop");
  }
  const handleCreateUser = (e) => {
    if (password !== confirmPasswrod) {
      setError("Your confirm password did not match!");
      return;
    }
    if (password.length < 6) {
      setError("Password must be 6 characters or long");
      return;
    }
    createUserWithEmailAndPassword(email, password);
    e.preventDefault();
  };

  return (
    <div className="form-container mb-5 mt-2 pt-2">
      <form className="login-form" onSubmit={handleCreateUser}>
        <h2 className="mb-4 fw-bold text-center">Sign Up</h2>
        <h6>Email</h6>
        <input onBlur={handleEmailBlur} type="email" required />
        <h6>Password</h6>
        <input onBlur={handlePassBlur} type="password" required />
        <h6>Confirm Password</h6>
        <input onBlur={handleConfirmPassBlur} type="password" required />
        <p style={{ color: "red" }}>{error}</p>
        <button type="submit" className="btn w-100 login-btn">
          Sign Up
        </button>
        <span>Already have an account? </span>{" "}
        <Link className="create-account-link" to="/login">
          Login
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

export default SignUp;
