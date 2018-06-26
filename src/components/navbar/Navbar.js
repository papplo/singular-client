import React from 'react';
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <Link className="navbar-item" to="/">Logo and Home</Link>

        <span role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </span>
      </div>

      <div class="navbar-menu is-active">
        <div class="navbar-end">
          <Link className="navbar-item" to="/me">Me</Link>
          <Link className="navbar-item" to="/category">Topics</Link>
          <Link className="navbar-item" to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}
