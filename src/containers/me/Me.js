import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Me.css';



class Me extends Component {
  render () {
    return (
      <div>
        <p>Me Page, user: {this.props.user.body.name}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Me);