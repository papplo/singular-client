import React from 'react';
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">Logo and Home</Link>

        <span role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </span>
      </div>

      <div className="navbar-menu is-active">
        <div className="navbar-end">
          <Link className="navbar-item" to="/me">Me</Link>
          <Link className="navbar-item" to="/category">Topics</Link>
          <Link className="navbar-item" to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}
