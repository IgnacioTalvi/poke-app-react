import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-container">
      <nav >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new">New Pokemon</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;