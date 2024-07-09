import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form className="form register__form">
          <p className="form__error-message">This is an error message</p>
          <input
            type="text"
            placeholder="username"
            name="name"
            value={userData.name}
            onChange={changeInputHandler}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
          />
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
