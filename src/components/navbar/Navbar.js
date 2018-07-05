import React from 'react';
import { Link } from "react-router-dom";
import ModalFx from "../../services/modalFx";

export default class Navbar extends React.Component {

  navMenuToggle() {
    const hotElements = [
      document.getElementById('homeItem'),
      document.getElementById('navMenu'),
      document.getElementById('burger')];

    hotElements.forEach((el) => {
      el.classList.contains('is-active')
      ? el.classList.remove('is-active')
      : el.classList.add('is-active');
    })
  }

  logoHomeToggle() {
    const hotElements = [
      document.getElementById('navMenu'),
      document.getElementById('burger')];

    hotElements.forEach((el) => {
      if(el.classList.contains('is-active')) el.classList.remove('is-active')
    })
  }

  showLogin (){
    if(this.props.profile.status !== 200){
      return (
        <Link className="navbar-item" to="/login">Login</Link>
      )
    } else if(this.props.profile.status === 200){
        return (
        <Link className="navbar-item" to="/me">
        <div className="media is-clearfix	">
          <div className="media-left">
            <p className="image is-24x24">
              <img className="is-circular" src={this.props.profile.body.img_url} alt="my profile"/>
            </p>
          </div>
          <div className="media-content">
            <p>Hello {this.props.profile.body.name}</p>
          </div>
        </div>
        </Link>
        )
      }
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link id="homeItem" className="navbar-item"
            onClick={this.logoHomeToggle} to="/">Logo and Home</Link>

          <span role="button" id="burger" className="navbar-burger" data-target="navMenu"
            onClick={this.navMenuToggle}
            aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>

        <div id="navMenu" className="navbar-menu navbar-end">
          <div className="navbar-end has-text-centered" onClick={this.navMenuToggle}>
            <Link className="navbar-item" to="/discover-categories">Categories</Link>
            {this.showLogin()}
            <Link className="navbar-item" to="/inbox">Inbox</Link>
          </div>
        </div>
      </nav>
    );
  }
}
