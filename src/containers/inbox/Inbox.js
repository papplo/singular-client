import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Inbox.css';



class Inbox extends Component {
  render () {
    return (
      <div>
        <p>Inbox Page</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Inbox);