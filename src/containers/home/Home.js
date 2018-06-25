import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';



class Home extends Component {
  render () {
    return (
      <div>
        <p>Home Page</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Home);