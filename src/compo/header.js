import React from "react";
import { Link, NavLink } from "react-router-dom"; //Pour Local Link
//import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="main-list">
          <h3 class="logo">ComporesTech</h3>
          </li>
          <li>
            <NavLink className="main-link" to="/">
              Home
            </NavLink>{" "}
            {/* local link*/}
          </li>
          <li>
            <Link
              className="main-link"
              to="https://reactrouter.com/"
              target="blanc"
            >
              React Router
            </Link>
          </li>
          <li>
            <NavLink className="main-link" to="/html">
              Html
            </NavLink>
          </li>
          <li>
            <Link className="main-link" to="#">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
