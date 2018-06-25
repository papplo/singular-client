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

// Info needed (Client will provide): User location
// 

// from server: 1. Array of 10 random skills (filtered by user area)
//              2. Array of 10 popular categories (filtered by user area)

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Home);