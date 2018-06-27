import React from 'react';
import { Link } from "react-router-dom";


export default class Navbar extends React.Component {

  componentDidMount() {
    const navToggle = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    const navLink = Array.prototype.slice.call(document.querySelectorAll('#navMenu .navbar-item'), 0)
    if (navToggle.length > 0) {
      navToggle.forEach(function (el) {
        el.addEventListener('click', function () {
          let target = el.dataset.target;
          target = document.getElementById(target);
          el.classList.toggle('is-active');
          target.classList.toggle('is-active');
        });
      });
    }
    if (navLink.length > 0) {
      navLink.forEach((el) => {
        el.addEventListener('click', () => {
          const target = document.getElementById('navMenu');
          const burgerToggle = document.getElementById('#burger');
          // burgerToggle.classList.toggle('is-active');
          target.classList.toggle('is-active');
        })
      });
    }
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">Logo and Home</Link>

          <span role="button" id="burger" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>

        <div id="navMenu" className="navbar-menu navbar-end">
          <div className="navbar-end">
            <Link className="navbar-item" to="/me">Me</Link>
            <Link className="navbar-item" to="/discover-categories">Topics</Link>
            <Link className="navbar-item" to="/login">Login</Link>
          </div>
        </div>
      </nav>
    );
  }
}
