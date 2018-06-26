import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Navbar } from '../../components/navbar/Navbar'
import './Header.css';



class Header extends Component {
  render () {

    return (
      <Navbar />
    )
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
