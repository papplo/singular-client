import React from 'react';
import { Link } from "react-router-dom";


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

  showLogin (){
    if(this.props.profile.status !== 200){
      return (
        <Link className="navbar-item" to="/login">Login</Link>
      )}
  }

  showMe (){
    if(this.props.profile.status === 200){
        return (
        <div className="avatar">
        <div className="media center">
          <figure className="image is-48x48">
            <img className="is-circular" src={this.props.profile.body.img_url} alt="Placeholder image"/>
          </figure>
        </div>
        <Link className="navbar-item" to="/me">Hello {this.props.profile.body.name}!</Link>
        </div>
        )
      }
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link id="homeItem" className="navbar-item" to="/">Logo and Home</Link>

          <span role="button" id="burger" className="navbar-burger" data-target="navMenu"
            onClick={this.navMenuToggle}
            aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>

        <div id="navMenu" className="navbar-menu navbar-end">
          <div className="navbar-end" onClick={this.navMenuToggle}>
            {this.showMe()}
            <Link className="navbar-item" to="/discover-categories">Topics</Link>
            {this.showLogin()}
            <Link className="navbar-item" to="/inbox">Inbox</Link>
          </div>
        </div>
      </nav>
    );
  }
}
