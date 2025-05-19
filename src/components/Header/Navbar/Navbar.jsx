import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Nav = () => {
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">New Pokemon</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;