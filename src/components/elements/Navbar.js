import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-secondary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Phone Book
        </Link>
        <div>
          <Link to="/contacts/add" className="btn btn-light">
            Add Contact
          </Link>
          <Link to="/signUp" className="btn btn-light ml-3">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
