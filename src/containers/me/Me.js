import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Me.css';



class Me extends Component {
  render () {
    return (
      <div>
        <p>Me Page</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Me);