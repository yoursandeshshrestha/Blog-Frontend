import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../public/logo.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { UserContext } from "../src/context/userContext.jsx";

function Header() {
  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800);
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsNavShowing(window.innerWidth > 800);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeNavHandler = () => {
    if (window.innerWidth < 800) {
      setIsNavShowing(false);
    }
  };

  const handleSelectChange = (event) => {
    navigate(event.target.value);
    closeNavHandler();
  };

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo" onClick={closeNavHandler}>
          <img src={logo} alt="logo" />
        </Link>
        {isNavShowing && (
          <ul className="nav__menu">
            {currentUser?.id ? (
              <>
                <li>
                  <Link
                    to={`/profile/${currentUser.id}`}
                    onClick={closeNavHandler}
                  >
                    {currentUser.email}
                  </Link>
                </li>
                <select name="category" onChange={handleSelectChange}>
                  <option value="/">Home</option>
                  <option value="/posts/categories/Agriculture">
                    Agriculture
                  </option>
                  <option value="/posts/categories/Business">Business</option>
                  <option value="/posts/categories/Education">Education</option>
                  <option value="/posts/categories/Entertainment">
                    Entertainment
                  </option>
                  <option value="/posts/categories/Art">Art</option>
                  <option value="/posts/categories/Investment">
                    Investment
                  </option>
                  <option value="/posts/categories/Uncategorized">
                    Uncategorized
                  </option>
                  <option value="/posts/categories/Weather">Weather</option>
                </select>
                <li>
                  <Link
                    to={`/myposts/${currentUser.id}`}
                    onClick={closeNavHandler}
                  >
                    My posts
                  </Link>
                </li>
                <li>
                  <Link to="/create" onClick={closeNavHandler}>
                    Create Post
                  </Link>
                </li>
                <li>
                  <Link to="/authors" onClick={closeNavHandler}>
                    Authors
                  </Link>
                </li>
                <li>
                  <Link to="/logout" onClick={closeNavHandler}>
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/authors" onClick={closeNavHandler}>
                    Authors
                  </Link>
                </li>
                <li>
                  <Link to="/login" onClick={closeNavHandler}>
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        )}
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          {isNavShowing ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Header;
