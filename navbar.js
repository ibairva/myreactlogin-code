import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <div className="nav-signin">
          <li className="li-signin">
            <div className="nav-tag">
              <Link to="/signin" style={{ textDecoration: "none" }}>
                Sign In
              </Link>
            </div>
          </li>
        </div>
        <div className="nav-signup">
          <li className="li-signup">
            <div className="nav-tag">
              <Link to="/signup" style={{ textDecoration: "none" }}>
                Sign Up
              </Link>
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
};
export default Navbar;
