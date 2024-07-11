import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../src/context/userContext.jsx";

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { setCurrentUser } = useContext(UserContext);

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const baseURL = `${import.meta.env.VITE_BASE_URL}/users/login`;

  const loginUser = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(baseURL, userData);
      const user = await response.data;
      setCurrentUser(user);
      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <section className="login">
      <div className="container">
        <p className="sign">Sign In</p>
        <p className="sign-message">Lets get started.</p>
        <form className="form login__form" onSubmit={loginUser}>
          {error && <p className="form__error-message">{error}</p>}
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
            autoFocus
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
            Login
          </button>
          <small>
            Don't have an account? <Link to={"/register"}>sign up</Link>
          </small>
        </form>
      </div>
    </section>
  );
}

export default Login;
