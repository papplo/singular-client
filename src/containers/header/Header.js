import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import './Header.css';



class Header extends Component {
  render () {
    
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Go to Home</Link>
          </li>
          <li>
            <Link to="/me">Go to Me </Link>
          </li>
          <li>
            <Link to="/category">Go to topics</Link>
          </li>
      </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Header);