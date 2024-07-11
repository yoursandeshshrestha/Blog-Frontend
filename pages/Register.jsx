import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const baseURL = `${import.meta.env.VITE_BASE_URL}/users/register`;
  // console.log("Base URL:", import.meta.env.VITE_BASE_URL);

  const registerUser = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(baseURL, userData);
      const newUser = await response.data;
      // console.log("Response:", newUser);
      if (!newUser) {
        setError("Couldn't register user, Please try again");
      }
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <section className="register">
      <div className="container">
        <p className="sign">Sign Up</p>
        <p className="sign-message">Register yourself and get started</p>
        <form className="form register__form" onSubmit={registerUser}>
          {error && <p className="form__error-message">{error}</p>}
          <label htmlFor="name">Username</label>
          <input
            type="text"
            placeholder="username"
            name="name"
            value={userData.name}
            onChange={changeInputHandler}
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
          />
          <button type="submit" className="btn primary">
            Register
          </button>
          <small>
            Already have an account? <Link to={"/login"}>sign in</Link>
          </small>
        </form>
      </div>
    </section>
  );
}

export default Register;
